import React, { useState, useRef, useEffect, useCallback } from 'react';
import { type To, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, InlineLoading, InlineNotification, PasswordInput, TextInput, Tile } from '@carbon/react';
import { ArrowLeft, ArrowRight } from '@carbon/react/icons';
import {
  useConfig,
  interpolateUrl,
  useSession,
  refetchCurrentUser,
  useConnectivity,
  navigate as openmrsNavigate,
  getCoreTranslation,
} from '@openmrs/esm-framework';
import { type ConfigSchema } from '../config-schema';
import styles from './login.scss';

export interface LoginReferrer {
  referrer?: string;
}

const hidden: React.CSSProperties = {
  height: 0,
  width: 0,
  border: 0,
  padding: 0,
};

const Login: React.FC = () => {
  const { showPasswordOnSeparateScreen, provider: loginProvider, links: loginLinks } = useConfig<ConfigSchema>();
  const isLoginEnabled = useConnectivity();
  const { t } = useTranslation();
  const { user } = useSession();
  const location = useLocation() as unknown as Omit<Location, 'state'> & {
    state: LoginReferrer;
  };

  const rawNavigate = useNavigate();
  const navigate = useCallback(
    (to: To) => {
      rawNavigate(to, { state: location.state });
    },
    [rawNavigate, location.state],
  );

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const showUsername = location.pathname === '/login';
  const showPassword = !showPasswordOnSeparateScreen || location.pathname === '/login/confirm';

  useEffect(() => {
    if (!user) {
      if (loginProvider.type === 'oauth2') {
        openmrsNavigate({ to: loginProvider.loginUrl });
      } else if (!username && location.pathname === '/login/confirm') {
        navigate('/login');
      }
    }
  }, [username, navigate, location, user, loginProvider]);

  useEffect(() => {
    const fieldToFocus =
      showPasswordOnSeparateScreen && showPassword ? passwordInputRef.current : usernameInputRef.current;

    fieldToFocus?.focus();
  }, [showPassword, showPasswordOnSeparateScreen]);

  const continueLogin = useCallback(() => {
    const usernameField = usernameInputRef.current;

    if (usernameField.value && usernameField.value.trim()) {
      navigate('/login/confirm');
    } else {
      usernameField.focus();
    }
  }, [location.state, navigate]);

  const changeUsername = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => setUsername(evt.target.value), []);

  const changePassword = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value), []);

  const handleSubmit = useCallback(
    async (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      evt.stopPropagation();

      if (!showPassword) {
        continueLogin();
        return false;
      } else if (!password || !password.trim()) {
        passwordInputRef.current.focus();
        return false;
      }

      try {
        setIsLoggingIn(true);

        const sessionStore = await refetchCurrentUser(username, password);
        const session = sessionStore.session;
        const authenticated = sessionStore?.session?.authenticated;
        if (authenticated) {
          if (session.sessionLocation) {
            let to = loginLinks?.loginSuccess || '/home';
            if (location?.state?.referrer) {
              if (location.state.referrer.startsWith('/')) {
                to = `\${openmrsSpaBase}${location.state.referrer}`;
              } else {
                to = location.state.referrer;
              }
            }

            openmrsNavigate({ to });
          } else {
            navigate('/login/location');
          }
        } else {
          setErrorMessage(t('invalidCredentials', 'Invalid username or password'));

          setUsername('');
          setPassword('');
          navigate('/login');
        }

        return true;
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage(t('invalidCredentials', 'Invalid username or password'));
        }

        setUsername('');
        setPassword('');
        navigate('/login');
      } finally {
        setIsLoggingIn(false);
      }

      return false;
    },

    [showPassword, username, password, navigate],
  );

  if (!loginProvider || loginProvider.type === 'basic') {
    return (
      <div className={styles.container}>
        <Tile className={styles['login-card']}>
          {errorMessage && (
            <div className={styles.errorMessage}>
              <InlineNotification
                kind="error"
                subtitle={t(errorMessage)}
                title={getCoreTranslation('error')}
                onClick={() => setErrorMessage('')}
              />
            </div>
          )}
          {showPasswordOnSeparateScreen && showPassword ? (
            <div className={styles['back-button-div']}>
              <Button
                className={styles['back-button']}
                iconDescription="Back to username"
                kind="ghost"
                onClick={() => navigate('/login')}
                renderIcon={(props) => <ArrowLeft size={24} style={{ marginRight: '0.5rem' }} {...props} />}
              >
                <span>{t('back', 'Back')}</span>
              </Button>
            </div>
          ) : null}
          <div className={styles['center']}>
            <Logo />
          </div>
          <form onSubmit={handleSubmit} ref={formRef}>
            {showUsername && (
              <div className={styles['input-group']}>
                <TextInput
                  id="username"
                  type="text"
                  name="username"
                  labelText={t('username', 'Username')}
                  value={username}
                  onChange={changeUsername}
                  ref={usernameInputRef}
                  autoFocus
                  required
                />
                {/* For password managers */}
                {showPasswordOnSeparateScreen && (
                  <input
                    id="password"
                    style={hidden}
                    type="password"
                    name="password"
                    value={password}
                    onChange={changePassword}
                  />
                )}
                {showPasswordOnSeparateScreen && (
                  <Button
                    className={styles.continueButton}
                    renderIcon={(props) => <ArrowRight size={24} {...props} />}
                    type="submit"
                    iconDescription="Continue to login"
                    onClick={continueLogin}
                    disabled={!isLoginEnabled}
                  >
                    {t('continue', 'Continue')}
                  </Button>
                )}
              </div>
            )}
            {showPassword && (
              <div className={styles['input-group']}>
                <PasswordInput
                  id="password"
                  invalidText={t('validValueRequired', 'A valid value is required')}
                  labelText={t('password', 'Password')}
                  name="password"
                  value={password}
                  onChange={changePassword}
                  ref={passwordInputRef}
                  required
                  showPasswordLabel="Show password"
                />
                {/* For password managers */}
                {showPasswordOnSeparateScreen && (
                  <input
                    id="username"
                    type="text"
                    name="username"
                    style={hidden}
                    value={username}
                    onChange={changeUsername}
                    required
                  />
                )}
                <Button
                  type="submit"
                  className={styles.continueButton}
                  renderIcon={(props) => <ArrowRight size={24} {...props} />}
                  iconDescription="Log in"
                  disabled={!isLoginEnabled || isLoggingIn}
                >
                  {isLoggingIn ? (
                    <InlineLoading className={styles.loader} description={t('loggingIn', 'Logging in') + '...'} />
                  ) : (
                    <span>{t('login', 'Log in')}</span>
                  )}
                </Button>
              </div>
            )}
          </form>
        </Tile>
        <div className={styles['footer']}>
          <p className={styles['powered-by-txt']}>{t('poweredBy', 'Powered by')}</p>
          <div>
            <svg role="img" className={styles['powered-by-logo']}>
              <use xlinkHref="#omrs-logo-partial-mono"></use>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const Logo = () => {
  const { logo } = useConfig<ConfigSchema>();
  return logo.src ? (
    <img src={interpolateUrl(logo.src)} alt={logo.alt ?? 'OpenMRS Logo'} className={styles['logo-img']} />
  ) : (
    <svg role="img" className={styles['logo']}>
      <title>OpenMRS logo</title>
      <use xlinkHref="#omrs-logo-full-color"></use>
    </svg>
  );
};

export default Login;
