import React from 'react';
import { openmrsFetch } from '@openmrs/esm-api/mock';
import { configSchema } from '@openmrs/esm-config/mock';
import { getExtensionStore, getExtensionInternalStore } from '@openmrs/esm-extensions/mock';
import { createGlobalStore } from '@openmrs/esm-state/mock';
import { usePagination as realUsePagination } from './src/index';
export { ConfigurableLink, isDesktop, useStore, useStoreWithActions, createUseStore } from './src/index';
import * as utils from '@openmrs/esm-utils';

export const ComponentContext = React.createContext(null);

export const openmrsComponentDecorator = jest.fn().mockImplementation(() => (component) => component);

export const useAttachments = jest.fn(() => ({
  isLoading: true,
  data: [],
  error: null,
  mutate: jest.fn(),
  isValidating: true,
}));

export const useConfig = jest.fn().mockImplementation(() => utils.getDefaultsFromConfigSchema(configSchema));

export const useCurrentPatient = jest.fn(() => []);

export const usePatient = jest.fn(() => ({
  isLoading: true,
  patient: null,
  patientUuid: null,
  error: null,
}));

export const useSession = jest.fn(() => ({
  authenticated: false,
  sessionId: '',
}));

export const useLayoutType = jest.fn(() => 'desktop');

export const useRenderableExtensions = jest.fn(() => []);

export const useAssignedExtensions = jest.fn(() => []);

export const useExtensionSlotMeta = jest.fn(() => ({}));

export const useConnectedExtensions = jest.fn(() => []);

export const UserHasAccess = jest.fn().mockImplementation((props: any) => {
  return props.children;
});

export const useExtensionInternalStore = createGlobalStore('extensionInternal', getExtensionInternalStore());

export const useExtensionStore = getExtensionStore();

export const ExtensionSlot = jest.fn().mockImplementation(({ children }) => <>{children}</>);

export const Extension = jest.fn().mockImplementation((props: any) => <slot />);

export const useFeatureFlag = jest.fn().mockReturnValue(true);

export const usePagination = jest.fn(realUsePagination);

export const useVisit = jest.fn().mockReturnValue({
  error: null,
  mutate: jest.fn(),
  isValidating: true,
  currentVisit: null,
  activeVisit: null,
  currentVisitIsRetrospective: false,
});

export const useVisitTypes = jest.fn(() => []);

export const useAbortController = jest.fn().mockReturnValue(() => {
  let aborted = false;
  return jest.fn(
    () =>
      ({
        abort: () => {
          aborted = true;
        },
        signal: {
          aborted,
        },
      }) as AbortController,
  );
});

export const useOpenmrsSWR = jest.fn((key: string | Array<any>) => {
  return { data: openmrsFetch(key.toString()) };
});

export const useDebounce = jest.fn().mockImplementation((value) => value);

export const useOnClickOutside = jest.fn();
