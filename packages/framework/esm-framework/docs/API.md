[Back to README.md](../README.md)

# @openmrs/esm-framework

## Table of contents

### API Functions

- [clearCurrentUser](API.md#clearcurrentuser)
- [createAttachment](API.md#createattachment)
- [deleteAttachmentPermanently](API.md#deleteattachmentpermanently)
- [fetchCurrentPatient](API.md#fetchcurrentpatient)
- [getAttachmentByUuid](API.md#getattachmentbyuuid)
- [getAttachments](API.md#getattachments)
- [getCurrentUser](API.md#getcurrentuser)
- [getLocations](API.md#getlocations)
- [getLoggedInUser](API.md#getloggedinuser)
- [getSessionLocation](API.md#getsessionlocation)
- [getSessionStore](API.md#getsessionstore)
- [getVisitStore](API.md#getvisitstore)
- [getVisitTypes](API.md#getvisittypes)
- [getVisitsForPatient](API.md#getvisitsforpatient)
- [makeUrl](API.md#makeurl)
- [openmrsFetch](API.md#openmrsfetch)
- [openmrsObservableFetch](API.md#openmrsobservablefetch)
- [refetchCurrentUser](API.md#refetchcurrentuser)
- [saveVisit](API.md#savevisit)
- [setCurrentVisit](API.md#setcurrentvisit)
- [setSessionLocation](API.md#setsessionlocation)
- [setUserLanguage](API.md#setuserlanguage)
- [setUserProperties](API.md#setuserproperties)
- [toLocationObject](API.md#tolocationobject)
- [toVisitTypeObject](API.md#tovisittypeobject)
- [updateVisit](API.md#updatevisit)
- [useAttachments](API.md#useattachments)
- [useLocations](API.md#uselocations)
- [usePatient](API.md#usepatient)
- [useSession](API.md#usesession)
- [useVisit](API.md#usevisit)
- [useVisitTypes](API.md#usevisittypes)
- [userHasAccess](API.md#userhasaccess)

### Breadcrumb Functions

- [filterBreadcrumbs](API.md#filterbreadcrumbs)
- [getBreadcrumbs](API.md#getbreadcrumbs)
- [getBreadcrumbsFor](API.md#getbreadcrumbsfor)
- [registerBreadcrumb](API.md#registerbreadcrumb)
- [registerBreadcrumbs](API.md#registerbreadcrumbs)

### Config Functions

- [defineConfigSchema](API.md#defineconfigschema)
- [defineExtensionConfigSchema](API.md#defineextensionconfigschema)
- [getConfig](API.md#getconfig)
- [provide](API.md#provide)
- [useConfig](API.md#useconfig)

### Config Validation Functions

- [inRange](API.md#inrange)
- [isUrl](API.md#isurl)
- [isUrlWithTemplateParameters](API.md#isurlwithtemplateparameters)
- [oneOf](API.md#oneof)
- [validator](API.md#validator)

### Context Functions

- [OpenmrsAppContext](API.md#openmrsappcontext)
- [getContext](API.md#getcontext)
- [registerContext](API.md#registercontext)
- [subscribeToContext](API.md#subscribetocontext)
- [unregisterContext](API.md#unregistercontext)
- [updateContext](API.md#updatecontext)
- [useAppContext](API.md#useappcontext)
- [useDefineAppContext](API.md#usedefineappcontext)

### Date and Time Functions

- [formatDate](API.md#formatdate)
- [formatDatetime](API.md#formatdatetime)
- [formatTime](API.md#formattime)
- [getDefaultCalendar](API.md#getdefaultcalendar)
- [getLocale](API.md#getlocale)
- [isOmrsDateStrict](API.md#isomrsdatestrict)
- [isOmrsDateToday](API.md#isomrsdatetoday)
- [parseDate](API.md#parsedate)
- [registerDefaultCalendar](API.md#registerdefaultcalendar)
- [toDateObjectStrict](API.md#todateobjectstrict)
- [toOmrsDateFormat](API.md#toomrsdateformat)
- [toOmrsDayDateFormat](API.md#toomrsdaydateformat)
- [toOmrsIsoString](API.md#toomrsisostring)
- [toOmrsTimeString](API.md#toomrstimestring)
- [toOmrsTimeString24](API.md#toomrstimestring24)
- [toOmrsYearlessDateFormat](API.md#toomrsyearlessdateformat)

### Dynamic Loading Functions

- [importDynamic](API.md#importdynamic)

### Error Handling Functions

- [createErrorHandler](API.md#createerrorhandler)
- [reportError](API.md#reporterror)

### Extension Functions

- [ExtensionSlot](API.md#extensionslot)
- [attach](API.md#attach)
- [detach](API.md#detach)
- [detachAll](API.md#detachall)
- [getAssignedExtensions](API.md#getassignedextensions)
- [getConnectedExtensions](API.md#getconnectedextensions)
- [getExtensionNameFromId](API.md#getextensionnamefromid)
- [getExtensionStore](API.md#getextensionstore)
- [renderExtension](API.md#renderextension)
- [useAssignedExtensionIds](API.md#useassignedextensionids)
- [useAssignedExtensions](API.md#useassignedextensions)
- [useConnectedExtensions](API.md#useconnectedextensions)
- [useExtensionSlotMeta](API.md#useextensionslotmeta)
- [useExtensionStore](API.md#useextensionstore)
- [useRenderableExtensions](API.md#userenderableextensions)

### Feature Flags Functions

- [getFeatureFlag](API.md#getfeatureflag)
- [registerFeatureFlag](API.md#registerfeatureflag)
- [useFeatureFlag](API.md#usefeatureflag)

### Framework Functions

- [getAsyncExtensionLifecycle](API.md#getasyncextensionlifecycle)
- [getAsyncLifecycle](API.md#getasynclifecycle)
- [getLifecycle](API.md#getlifecycle)
- [getSyncLifecycle](API.md#getsynclifecycle)

### Navigation Functions

- [ConfigurableLink](API.md#configurablelink)
- [getHistory](API.md#gethistory)
- [goBackInHistory](API.md#gobackinhistory)
- [interpolateString](API.md#interpolatestring)
- [interpolateUrl](API.md#interpolateurl)
- [navigate](API.md#navigate)

### Offline Functions

- [beginEditSynchronizationItem](API.md#begineditsynchronizationitem)
- [canBeginEditSynchronizationItemsOfType](API.md#canbegineditsynchronizationitemsoftype)
- [deleteSynchronizationItem](API.md#deletesynchronizationitem)
- [generateOfflineUuid](API.md#generateofflineuuid)
- [getCurrentOfflineMode](API.md#getcurrentofflinemode)
- [getDynamicOfflineDataEntries](API.md#getdynamicofflinedataentries)
- [getDynamicOfflineDataEntriesFor](API.md#getdynamicofflinedataentriesfor)
- [getDynamicOfflineDataHandlers](API.md#getdynamicofflinedatahandlers)
- [getFullSynchronizationItems](API.md#getfullsynchronizationitems)
- [getFullSynchronizationItemsFor](API.md#getfullsynchronizationitemsfor)
- [getOfflinePatientDataStore](API.md#getofflinepatientdatastore)
- [getSynchronizationItem](API.md#getsynchronizationitem)
- [getSynchronizationItems](API.md#getsynchronizationitems)
- [isOfflineUuid](API.md#isofflineuuid)
- [messageOmrsServiceWorker](API.md#messageomrsserviceworker)
- [putDynamicOfflineData](API.md#putdynamicofflinedata)
- [putDynamicOfflineDataFor](API.md#putdynamicofflinedatafor)
- [queueSynchronizationItem](API.md#queuesynchronizationitem)
- [registerOfflinePatientHandler](API.md#registerofflinepatienthandler)
- [removeDynamicOfflineData](API.md#removedynamicofflinedata)
- [removeDynamicOfflineDataFor](API.md#removedynamicofflinedatafor)
- [setupDynamicOfflineDataHandler](API.md#setupdynamicofflinedatahandler)
- [setupOfflineSync](API.md#setupofflinesync)
- [subscribeConnectivity](API.md#subscribeconnectivity)
- [subscribeConnectivityChanged](API.md#subscribeconnectivitychanged)
- [subscribePrecacheStaticDependencies](API.md#subscribeprecachestaticdependencies)
- [syncAllDynamicOfflineData](API.md#syncalldynamicofflinedata)
- [syncDynamicOfflineData](API.md#syncdynamicofflinedata)
- [syncOfflinePatientData](API.md#syncofflinepatientdata)
- [useConnectivity](API.md#useconnectivity)

### Store Functions

- [createGlobalStore](API.md#createglobalstore)
- [createUseStore](API.md#createusestore)
- [getGlobalStore](API.md#getglobalstore)
- [subscribeTo](API.md#subscribeto)
- [useStore](API.md#usestore)
- [useStoreWithActions](API.md#usestorewithactions)

### Translation Functions

- [getCoreTranslation](API.md#getcoretranslation)
- [translateFrom](API.md#translatefrom)

### UI Functions

- [CustomOverflowMenu](API.md#customoverflowmenu)
- [PatientBannerActionsMenu](API.md#patientbanneractionsmenu)
- [PatientBannerContactDetails](API.md#patientbannercontactdetails)
- [PatientBannerPatientInfo](API.md#patientbannerpatientinfo)
- [PatientBannerToggleContactDetailsButton](API.md#patientbannertogglecontactdetailsbutton)
- [PatientPhoto](API.md#patientphoto)
- [isDesktop](API.md#isdesktop)
- [setLeftNav](API.md#setleftnav)
- [showActionableNotification](API.md#showactionablenotification)
- [showModal](API.md#showmodal)
- [showNotification](API.md#shownotification)
- [showSnackbar](API.md#showsnackbar)
- [showToast](API.md#showtoast)
- [subscribeActionableNotificationShown](API.md#subscribeactionablenotificationshown)
- [subscribeNotificationShown](API.md#subscribenotificationshown)
- [subscribeSnackbarShown](API.md#subscribesnackbarshown)
- [subscribeToastShown](API.md#subscribetoastshown)
- [unsetLeftNav](API.md#unsetleftnav)
- [useBodyScrollLock](API.md#usebodyscrolllock)
- [useLayoutType](API.md#uselayouttype)
- [useOnClickOutside](API.md#useonclickoutside)
- [usePagination](API.md#usepagination)
- [usePatientPhoto](API.md#usepatientphoto)

### Utility Functions

- [age](API.md#age)
- [canAccessStorage](API.md#canaccessstorage)
- [daysIntoYear](API.md#daysintoyear)
- [getDefaultsFromConfigSchema](API.md#getdefaultsfromconfigschema)
- [isSameDay](API.md#issameday)
- [isVersionSatisfied](API.md#isversionsatisfied)
- [retry](API.md#retry)
- [shallowEqual](API.md#shallowequal)
- [useAbortController](API.md#useabortcontroller)
- [useDebounce](API.md#usedebounce)
- [useOpenmrsSWR](API.md#useopenmrsswr)

### Workspace Functions

- [ActionMenu](API.md#actionmenu)
- [WorkspaceOverlay](API.md#workspaceoverlay)
- [WorkspaceWindow](API.md#workspacewindow)
- [closeWorkspace](API.md#closeworkspace)
- [launchWorkspace](API.md#launchworkspace)
- [navigateAndLaunchWorkspace](API.md#navigateandlaunchworkspace)
- [useWorkspaces](API.md#useworkspaces)

## API Type Aliases

### CurrentPatient

Ƭ **CurrentPatient**: `fhir.Patient` \| [`FetchResponse`](interfaces/FetchResponse.md)<`fhir.Patient`\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-patient.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-patient.ts#L7)

___

### LoadedSessionStore

Ƭ **LoadedSessionStore**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `loaded` | ``true`` |
| `session` | [`Session`](interfaces/Session.md) |

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:11](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L11)

___

### NullablePatient

Ƭ **NullablePatient**: `fhir.Patient` \| ``null``

#### Defined in

[packages/framework/esm-react-utils/src/usePatient.ts:6](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/usePatient.ts#L6)

___

### PatientUuid

Ƭ **PatientUuid**: `string` \| ``null``

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-patient.ts:20](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-patient.ts#L20)

___

### SessionStore

Ƭ **SessionStore**: [`LoadedSessionStore`](API.md#loadedsessionstore) \| [`UnloadedSessionStore`](API.md#unloadedsessionstore)

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L9)

___

### UnloadedSessionStore

Ƭ **UnloadedSessionStore**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `loaded` | ``false`` |
| `session` | ``null`` |

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:16](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L16)

___

## Context Type Aliases

### ContextCallback

Ƭ **ContextCallback**<`T`\>: (`state`: `Readonly`<`T`\> \| ``null`` \| `undefined`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` = {} |

#### Type declaration

▸ (`state`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Readonly`<`T`\> \| ``null`` \| `undefined` |

##### Returns

`void`

#### Defined in

[packages/framework/esm-context/src/context.ts:90](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-context/src/context.ts#L90)

___

## Date and Time Type Aliases

### DateInput

Ƭ **DateInput**: `string` \| `number` \| `Date`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:19](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L19)

___

### FormatDateMode

Ƭ **FormatDateMode**: ``"standard"`` \| ``"wide"``

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:133](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L133)

___

### FormatDateOptions

Ƭ **FormatDateOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `calendar?` | `string` | The calendar to use when formatting this date. |
| `day` | `boolean` | Whether to include the day number |
| `mode` | [`FormatDateMode`](API.md#formatdatemode) | - `standard`: "03 Feb 2022" - `wide`:     "03 — Feb — 2022" |
| `noToday` | `boolean` | Disables the special handling of dates that are today. If false (the default), then dates that are today will be formatted as "Today" in the locale language. If true, then dates that are today will be formatted the same as all other dates. |
| `time` | `boolean` \| ``"for today"`` | Whether the time should be included in the output always (`true`), never (`false`), or only when the input date is today (`for today`). |
| `year` | `boolean` | Whether to include the year |

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:135](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L135)

___

## Extension Type Aliases

### ExtensionProps

Ƭ **ExtensionProps**: { `state?`: `Record`<`string`, `any`\> ; `wrap?`: (`slot`: `ReactNode`, `extension`: [`ExtensionData`](interfaces/ExtensionData.md)) => ``null`` \| `ReactElement`<`any`, `any`\>  } & `Omit`<`React.HTMLAttributes`<`HTMLDivElement`\>, ``"children"``\> & { `children?`: `React.ReactNode` \| (`slot`: `React.ReactNode`, `extension?`: [`ExtensionData`](interfaces/ExtensionData.md)) => `React.ReactNode`  }

#### Defined in

[packages/framework/esm-react-utils/src/Extension.tsx:8](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/Extension.tsx#L8)

___

### ExtensionSlotProps

Ƭ **ExtensionSlotProps**: [`OldExtensionSlotBaseProps`](interfaces/OldExtensionSlotBaseProps.md) \| [`ExtensionSlotBaseProps`](interfaces/ExtensionSlotBaseProps.md) & `Omit`<`React.HTMLAttributes`<`HTMLDivElement`\>, ``"children"``\> & { `children?`: `React.ReactNode` \| (`extension`: [`ConnectedExtension`](interfaces/ConnectedExtension.md)) => `React.ReactNode`  }

#### Defined in

[packages/framework/esm-react-utils/src/ExtensionSlot.tsx:24](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/ExtensionSlot.tsx#L24)

___

## Navigation Type Aliases

### TemplateParams

Ƭ **TemplateParams**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[packages/framework/esm-navigation/src/navigation/navigate.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/navigation/navigate.ts#L10)

___

## Offline Type Aliases

### KnownOmrsServiceWorkerMessages

Ƭ **KnownOmrsServiceWorkerMessages**: [`OnImportMapChangedMessage`](interfaces/OnImportMapChangedMessage.md) \| [`ClearDynamicRoutesMessage`](interfaces/ClearDynamicRoutesMessage.md) \| [`RegisterDynamicRouteMessage`](interfaces/RegisterDynamicRouteMessage.md)

#### Defined in

[packages/framework/esm-offline/src/service-worker-messaging.ts:41](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-messaging.ts#L41)

___

### OfflineMode

Ƭ **OfflineMode**: ``"on"`` \| ``"off"`` \| ``"unavailable"``

#### Defined in

[packages/framework/esm-offline/src/mode.ts:34](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/mode.ts#L34)

___

### OmrsOfflineCachingStrategy

Ƭ **OmrsOfflineCachingStrategy**: ``"network-only-or-cache-only"`` \| ``"network-first"``

* `cache-or-network`: The default strategy, equal to the absence of this header.
  The SW attempts to resolve the request via the network, but falls back to the cache if required.
  The service worker decides the strategy to be used.
* `network-first`: See https://developers.google.com/web/tools/workbox/modules/workbox-strategies#network_first_network_falling_back_to_cache.

#### Defined in

[packages/framework/esm-offline/src/service-worker-http-headers.ts:15](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-http-headers.ts#L15)

___

### OmrsOfflineHttpHeaderNames

Ƭ **OmrsOfflineHttpHeaderNames**: keyof [`OmrsOfflineHttpHeaders`](API.md#omrsofflinehttpheaders)

#### Defined in

[packages/framework/esm-offline/src/service-worker-http-headers.ts:40](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-http-headers.ts#L40)

___

### OmrsOfflineHttpHeaders

Ƭ **OmrsOfflineHttpHeaders**: `Object`

Defines the keys of the custom headers which can be appended to an HTTP request.
HTTP requests with these headers are handled in a special way by the SPA's service worker.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `x-omrs-offline-caching-strategy?` | [`OmrsOfflineCachingStrategy`](API.md#omrsofflinecachingstrategy) | Instructs the service worker to use a specific caching strategy for this request. |
| `x-omrs-offline-response-body?` | `string` | If the client is offline and the request cannot be read from the cache (i.e. if there is no way to receive any kind of data for this request), the service worker will return a response with the body in this header. |
| `x-omrs-offline-response-status?` | \`${number}\` | If the client is offline and the request cannot be read from the cache (i.e. if there is no way to receive any kind of data for this request), the service worker will return a response with the status code defined in this header. |

#### Defined in

[packages/framework/esm-offline/src/service-worker-http-headers.ts:21](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-http-headers.ts#L21)

___

## Other Type Aliases

### ConfigValue

Ƭ **ConfigValue**: `string` \| `number` \| `boolean` \| `void` \| `any`[] \| `object`

#### Defined in

[packages/framework/esm-config/src/types.ts:40](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/types.ts#L40)

___

### ExtensionDefinition

Ƭ **ExtensionDefinition**: { `featureFlag?`: `string` ; `meta?`: { `[k: string]`: `unknown`;  } ; `name`: `string` ; `offline?`: `boolean` ; `online?`: `boolean` ; `order?`: `number` ; `privileges?`: `string` \| `string`[] ; `slot?`: `string` ; `slots?`: `string`[]  } & { `component`: `string`  } \| { `component?`: `never`  }

A definition of an extension as extracted from an app's routes.json

#### Defined in

[packages/framework/esm-globals/src/types.ts:172](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L172)

___

### ModalDefinition

Ƭ **ModalDefinition**: { `name`: `string`  } & { `component`: `string`  } \| { `component?`: `never`  }

A definition of a modal as extracted from an app's routes.json

#### Defined in

[packages/framework/esm-globals/src/types.ts:237](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L237)

___

### OpenmrsRoutes

Ƭ **OpenmrsRoutes**: `Record`<`string`, [`OpenmrsAppRoutes`](interfaces/OpenmrsAppRoutes.md)\>

This interfaces describes the format of the overall rotues.json loaded by the app shell.
Basically, this is the same as the app routes, with each routes definition keyed by the app's name

#### Defined in

[packages/framework/esm-globals/src/types.ts:348](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L348)

___

### PageDefinition

Ƭ **PageDefinition**: { `component`: `string` ; `offline?`: `boolean` ; `online?`: `boolean` ; `order?`: `number`  } & { `route`: `string` \| `boolean` ; `routeRegex?`: `never`  } \| { `route?`: `never` ; `routeRegex`: `string`  }

A definition of a page extracted from an app's routes.json

#### Defined in

[packages/framework/esm-globals/src/types.ts:116](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L116)

___

### ProvidedConfig

Ƭ **ProvidedConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config` | [`Config`](interfaces/Config.md) |
| `source` | `string` |

#### Defined in

[packages/framework/esm-config/src/types.ts:62](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/types.ts#L62)

___

### RegisteredPageDefinition

Ƭ **RegisteredPageDefinition**: `Omit`<[`PageDefinition`](API.md#pagedefinition), ``"order"``\> & `AppComponent` & { `order`: `number`  }

A definition of a page after the app has been registered.

#### Defined in

[packages/framework/esm-globals/src/types.ts:167](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L167)

___

### SpaEnvironment

Ƭ **SpaEnvironment**: ``"production"`` \| ``"development"`` \| ``"test"``

#### Defined in

[packages/framework/esm-globals/src/types.ts:71](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L71)

___

### UpdateVisitPayload

Ƭ **UpdateVisitPayload**: [`NewVisitPayload`](interfaces/NewVisitPayload.md) & {}

#### Defined in

[packages/framework/esm-api/src/types/visit-resource.ts:16](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/types/visit-resource.ts#L16)

___

### Validator

Ƭ **Validator**: (`value`: `any`) => `void` \| `string`

#### Type declaration

▸ (`value`): `void` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`void` \| `string`

#### Defined in

[packages/framework/esm-config/src/types.ts:69](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/types.ts#L69)

___

### ValidatorFunction

Ƭ **ValidatorFunction**: (`value`: `any`) => `boolean`

#### Type declaration

▸ (`value`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`boolean`

#### Defined in

[packages/framework/esm-config/src/types.ts:67](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/types.ts#L67)

___

### WorkspaceDefinition

Ƭ **WorkspaceDefinition**: { `canHide?`: `boolean` ; `canMaximize?`: `boolean` ; `name`: `string` ; `preferredWindowSize?`: [`WorkspaceWindowState`](API.md#workspacewindowstate) ; `title`: `string` ; `type`: `string` ; `width?`: ``"narrow"`` \| ``"wider"``  } & { `component`: `string`  } \| { `component?`: `never`  }

A definition of a workspace as extracted from an app's routes.json

#### Defined in

[packages/framework/esm-globals/src/types.ts:271](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L271)

___

### WorkspaceWindowState

Ƭ **WorkspaceWindowState**: ``"maximized"`` \| ``"hidden"`` \| ``"normal"``

#### Defined in

[packages/framework/esm-globals/src/types.ts:266](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L266)

___

## Store Type Aliases

### ActionFunction

Ƭ **ActionFunction**<`T`\>: (`state`: `T`, ...`args`: `any`[]) => `Partial`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`state`, ...`args`): `Partial`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `...args` | `any`[] |

##### Returns

`Partial`<`T`\>

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:6](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L6)

___

### Actions

Ƭ **Actions**<`T`\>: (`store`: `StoreApi`<`T`\>) => `Record`<`string`, [`ActionFunction`](API.md#actionfunction)<`T`\>\> \| `Record`<`string`, [`ActionFunction`](API.md#actionfunction)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L7)

___

### BoundActions

Ƭ **BoundActions**: `Object`

#### Index signature

▪ [key: `string`]: (...`args`: `any`[]) => `void`

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L10)

___

## Translation Type Aliases

### CoreTranslationKey

Ƭ **CoreTranslationKey**: keyof typeof `coreTranslations`

#### Defined in

[packages/framework/esm-translations/src/index.ts:47](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-translations/src/index.ts#L47)

___

## UI Type Aliases

### ActionableNotificationType

Ƭ **ActionableNotificationType**: ``"error"`` \| ``"info"`` \| ``"info-square"`` \| ``"success"`` \| ``"warning"`` \| ``"warning-alt"``

#### Defined in

[packages/framework/esm-styleguide/src/notifications/actionable-notification.component.tsx:24](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/notifications/actionable-notification.component.tsx#L24)

___

### InlineNotificationType

Ƭ **InlineNotificationType**: ``"error"`` \| ``"info"`` \| ``"info-square"`` \| ``"success"`` \| ``"warning"`` \| ``"warning-alt"``

#### Defined in

[packages/framework/esm-styleguide/src/notifications/notification.component.tsx:22](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/notifications/notification.component.tsx#L22)

___

### LayoutType

Ƭ **LayoutType**: ``"phone"`` \| ``"tablet"`` \| ``"small-desktop"`` \| ``"large-desktop"``

#### Defined in

[packages/framework/esm-react-utils/src/useLayoutType.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useLayoutType.ts#L4)

___

### SnackbarType

Ƭ **SnackbarType**: ``"error"`` \| ``"info"`` \| ``"info-square"`` \| ``"success"`` \| ``"warning"`` \| ``"warning-alt"``

#### Defined in

[packages/framework/esm-styleguide/src/snackbars/snackbar.component.tsx:29](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/snackbars/snackbar.component.tsx#L29)

___

### ToastType

Ƭ **ToastType**: ``"error"`` \| ``"info"`` \| ``"info-square"`` \| ``"success"`` \| ``"warning"`` \| ``"warning-alt"``

#### Defined in

[packages/framework/esm-styleguide/src/toasts/toast.component.tsx:23](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/toasts/toast.component.tsx#L23)

___

## Utility Type Aliases

### ArgumentsTuple

Ƭ **ArgumentsTuple**: [`any`, ...unknown[]]

#### Defined in

[packages/framework/esm-react-utils/src/useOpenmrsSWR.ts:8](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOpenmrsSWR.ts#L8)

___

### Key

Ƭ **Key**: `string` \| [`ArgumentsTuple`](API.md#argumentstuple) \| `undefined` \| ``null``

#### Defined in

[packages/framework/esm-react-utils/src/useOpenmrsSWR.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOpenmrsSWR.ts#L9)

___

### UseOpenmrsSWROptions

Ƭ **UseOpenmrsSWROptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `abortController?` | `AbortController` |
| `fetchInit?` | [`FetchConfig`](interfaces/FetchConfig.md) |
| `swrConfig?` | `SWRConfiguration` |
| `url?` | `string` \| (`key`: [`Key`](API.md#key)) => `string` |

#### Defined in

[packages/framework/esm-react-utils/src/useOpenmrsSWR.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOpenmrsSWR.ts#L10)

## API Variables

### UserHasAccess

• `Const` **UserHasAccess**: `React.FC`<[`UserHasAccessProps`](interfaces/UserHasAccessProps.md)\>

#### Defined in

[packages/framework/esm-react-utils/src/UserHasAccess.tsx:12](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/UserHasAccess.tsx#L12)

___

### attachmentUrl

• `Const` **attachmentUrl**: `string`

#### Defined in

[packages/framework/esm-api/src/attachments.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/attachments.ts#L5)

___

### defaultVisitCustomRepresentation

• `Const` **defaultVisitCustomRepresentation**: `string`

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/visit-utils.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/visit-utils.ts#L9)

___

### fhirBaseUrl

• `Const` **fhirBaseUrl**: ``"/ws/fhir2/R4"``

#### Defined in

[packages/framework/esm-api/src/openmrs-fetch.ts:11](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-fetch.ts#L11)

___

### getStartedVisit

• `Const` **getStartedVisit**: `BehaviorSubject`<``null`` \| [`VisitItem`](interfaces/VisitItem.md)\>

**`deprecated`**

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/visit-utils.ts:100](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/visit-utils.ts#L100)

___

### restBaseUrl

• `Const` **restBaseUrl**: ``"/ws/rest/v1"``

#### Defined in

[packages/framework/esm-api/src/openmrs-fetch.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-fetch.ts#L9)

___

### sessionEndpoint

• `Const` **sessionEndpoint**: `string`

#### Defined in

[packages/framework/esm-api/src/openmrs-fetch.ts:13](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-fetch.ts#L13)

___

## Config Validation Variables

### validators

• `Const` **validators**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `inRange` | (`min`: `number`, `max`: `number`) => [`Validator`](API.md#validator) |
| `isUrl` | [`Validator`](API.md#validator) |
| `isUrlWithTemplateParameters` | (`allowedTemplateParameters`: `string`[]) => [`Validator`](API.md#validator) |
| `oneOf` | (`allowedValues`: `any`[]) => [`Validator`](API.md#validator) |

#### Defined in

[packages/framework/esm-config/src/validators/validators.ts:65](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/validators/validators.ts#L65)

___

## Extension Variables

### Extension

• `Const` **Extension**: `React.FC`<[`ExtensionProps`](API.md#extensionprops)\>

Represents the position in the DOM where each extension within
an extension slot is rendered.

Renders once for each extension attached to that extension slot.

Usage of this component *must* have an ancestor `<ExtensionSlot>`,
and *must* only be used once within that `<ExtensionSlot>`.

#### Defined in

[packages/framework/esm-react-utils/src/Extension.tsx:25](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/Extension.tsx#L25)

___

## Offline Variables

### offlineUuidPrefix

• `Const` **offlineUuidPrefix**: ``"OFFLINE+"``

#### Defined in

[packages/framework/esm-offline/src/uuid.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/uuid.ts#L4)

___

### omrsOfflineCachingStrategyHttpHeaderName

• `Const` **omrsOfflineCachingStrategyHttpHeaderName**: ``"x-omrs-offline-caching-strategy"``

#### Defined in

[packages/framework/esm-offline/src/service-worker-http-headers.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-http-headers.ts#L5)

___

### omrsOfflineResponseBodyHttpHeaderName

• `Const` **omrsOfflineResponseBodyHttpHeaderName**: ``"x-omrs-offline-response-body"``

#### Defined in

[packages/framework/esm-offline/src/service-worker-http-headers.ts:3](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-http-headers.ts#L3)

___

### omrsOfflineResponseStatusHttpHeaderName

• `Const` **omrsOfflineResponseStatusHttpHeaderName**: ``"x-omrs-offline-response-status"``

#### Defined in

[packages/framework/esm-offline/src/service-worker-http-headers.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-http-headers.ts#L4)

___

## Other Variables

### ErrorState

• `Const` **ErrorState**: `React.FC`<[`ErrorStateProps`](interfaces/ErrorStateProps.md)\>

#### Defined in

[packages/framework/esm-styleguide/src/error-state/error-state.component.tsx:12](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/error-state/error-state.component.tsx#L12)

___

### OpenmrsDatePicker

• `Const` **OpenmrsDatePicker**: `React.FC`<`OpenmrsDatePickerProps`\>

#### Defined in

[packages/framework/esm-styleguide/src/datepicker/openmrs/openmrs-date-picker.component.tsx:41](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/datepicker/openmrs/openmrs-date-picker.component.tsx#L41)

___

### backendDependencies

• `Const` **backendDependencies**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fhir2` | `string` |
| `webservices.rest` | `string` |

#### Defined in

[packages/framework/esm-api/src/openmrs-backend-dependencies.ts:1](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-backend-dependencies.ts#L1)

___

## UI Variables

### LeftNavMenu

• `Const` **LeftNavMenu**: `ForwardRefExoticComponent`<`SideNavProps` & `RefAttributes`<`HTMLElement`\>\>

#### Defined in

[packages/framework/esm-styleguide/src/left-nav/index.tsx:31](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/left-nav/index.tsx#L31)

___

### ResponsiveWrapper

• `Const` **ResponsiveWrapper**: `React.FC`<[`ResponsiveWrapperProps`](interfaces/ResponsiveWrapperProps.md)\>

ResponsiveWrapper enables a responsive behavior for the component its wraps, providing a different rendering based on the current layout type.
On desktop, it renders the children as is, while on a tablet, it wraps them in a Carbon Layer https://react.carbondesignsystem.com/?path=/docs/components-layer--overview component.
This provides a light background for form inputs on tablets, in accordance with the design requirements.

#### Defined in

[packages/framework/esm-styleguide/src/responsive-wrapper/responsive-wrapper.component.tsx:15](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/responsive-wrapper/responsive-wrapper.component.tsx#L15)

___

## Workspace Variables

### ActionMenuButton

• `Const` **ActionMenuButton**: `React.FC`<[`ActionMenuButtonProps`](interfaces/ActionMenuButtonProps.md)\>

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/action-menu-button/action-menu-button.component.tsx:38](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/action-menu-button/action-menu-button.component.tsx#L38)

## API Functions

### clearCurrentUser

▸ **clearCurrentUser**(): `void`

#### Returns

`void`

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:168](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L168)

___

### createAttachment

▸ **createAttachment**(`patientUuid`, `fileToUpload`): `Promise`<[`FetchResponse`](interfaces/FetchResponse.md)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |
| `fileToUpload` | [`UploadedFile`](interfaces/UploadedFile.md) |

#### Returns

`Promise`<[`FetchResponse`](interfaces/FetchResponse.md)<`any`\>\>

#### Defined in

[packages/framework/esm-api/src/attachments.ts:19](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/attachments.ts#L19)

___

### deleteAttachmentPermanently

▸ **deleteAttachmentPermanently**(`attachmentUuid`, `abortController`): `Promise`<[`FetchResponse`](interfaces/FetchResponse.md)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachmentUuid` | `string` |
| `abortController` | `AbortController` |

#### Returns

`Promise`<[`FetchResponse`](interfaces/FetchResponse.md)<`any`\>\>

#### Defined in

[packages/framework/esm-api/src/attachments.ts:38](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/attachments.ts#L38)

___

### fetchCurrentPatient

▸ **fetchCurrentPatient**(`patientUuid`, `fetchInit?`, `includeOfflinePatients?`): `Promise`<`fhir.Patient` \| ``null``\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `patientUuid` | [`PatientUuid`](API.md#patientuuid) | `undefined` |
| `fetchInit?` | [`FetchConfig`](interfaces/FetchConfig.md) | `undefined` |
| `includeOfflinePatients` | `boolean` | `true` |

#### Returns

`Promise`<`fhir.Patient` \| ``null``\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-patient.ts:22](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-patient.ts#L22)

___

### getAttachmentByUuid

▸ **getAttachmentByUuid**(`attachmentUuid`, `abortController`): `Promise`<[`FetchResponse`](interfaces/FetchResponse.md)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachmentUuid` | `string` |
| `abortController` | `AbortController` |

#### Returns

`Promise`<[`FetchResponse`](interfaces/FetchResponse.md)<`any`\>\>

#### Defined in

[packages/framework/esm-api/src/attachments.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/attachments.ts#L7)

___

### getAttachments

▸ **getAttachments**(`patientUuid`, `includeEncounterless`, `abortController`): `Promise`<[`FetchResponse`](interfaces/FetchResponse.md)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |
| `includeEncounterless` | `boolean` |
| `abortController` | `AbortController` |

#### Returns

`Promise`<[`FetchResponse`](interfaces/FetchResponse.md)<`any`\>\>

#### Defined in

[packages/framework/esm-api/src/attachments.ts:13](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/attachments.ts#L13)

___

### getCurrentUser

▸ **getCurrentUser**(): `Observable`<[`Session`](interfaces/Session.md)\>

The getCurrentUser function returns an observable that produces
**zero or more values, over time**. It will produce zero values
by default if the user is not logged in. And it will provide a
first value when the logged in user is fetched from the server.
Subsequent values will be produced whenever the user object is
updated.

#### Returns

`Observable`<[`Session`](interfaces/Session.md)\>

An Observable that produces zero or more values (as
  described above). The values produced will be a user object (if
  `includeAuthStatus` is set to `false`) or an object with a session
  and authenticated property (if `includeAuthStatus` is set to `true`).

#### Example

```js
import { getCurrentUser } from '@openmrs/esm-api'
const subscription = getCurrentUser().subscribe(
  user => console.log(user)
)
subscription.unsubscribe()
getCurrentUser({includeAuthStatus: true}).subscribe(
  data => console.log(data.authenticated)
)
```

#### Be sure to unsubscribe when your component unmounts

Otherwise your code will continue getting updates to the user object
even after the UI component is gone from the screen. This is a memory
leak and source of bugs.

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:65](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L65)

▸ **getCurrentUser**(`opts`): `Observable`<[`Session`](interfaces/Session.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.includeAuthStatus` | ``true`` |

#### Returns

`Observable`<[`Session`](interfaces/Session.md)\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:66](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L66)

▸ **getCurrentUser**(`opts`): `Observable`<[`LoggedInUser`](interfaces/LoggedInUser.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.includeAuthStatus` | ``false`` |

#### Returns

`Observable`<[`LoggedInUser`](interfaces/LoggedInUser.md)\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:67](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L67)

___

### getLocations

▸ **getLocations**(`tagUuidOrName?`): `Observable`<[`Location`](interfaces/Location.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tagUuidOrName` | ``null`` \| `string` | `null` |

#### Returns

`Observable`<[`Location`](interfaces/Location.md)[]\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/location.ts:14](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/location.ts#L14)

___

### getLoggedInUser

▸ **getLoggedInUser**(): `Promise`<[`LoggedInUser`](interfaces/LoggedInUser.md)\>

#### Returns

`Promise`<[`LoggedInUser`](interfaces/LoggedInUser.md)\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:192](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L192)

___

### getSessionLocation

▸ **getSessionLocation**(): `Promise`<`undefined` \| [`SessionLocation`](interfaces/SessionLocation.md)\>

#### Returns

`Promise`<`undefined` \| [`SessionLocation`](interfaces/SessionLocation.md)\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:210](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L210)

___

### getSessionStore

▸ **getSessionStore**(): `StoreApi`<[`SessionStore`](API.md#sessionstore)\>

#### Returns

`StoreApi`<[`SessionStore`](API.md#sessionstore)\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:92](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L92)

___

### getVisitStore

▸ **getVisitStore**(): `StoreApi`<[`VisitStoreState`](interfaces/VisitStoreState.md)\>

#### Returns

`StoreApi`<[`VisitStoreState`](interfaces/VisitStoreState.md)\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/visit-utils.ts:27](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/visit-utils.ts#L27)

___

### getVisitTypes

▸ **getVisitTypes**(): `Observable`<[`VisitType`](interfaces/VisitType.md)[]\>

#### Returns

`Observable`<[`VisitType`](interfaces/VisitType.md)[]\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/visit-type.ts:15](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/visit-type.ts#L15)

___

### getVisitsForPatient

▸ **getVisitsForPatient**(`patientUuid`, `abortController`, `v?`): `Observable`<[`FetchResponse`](interfaces/FetchResponse.md)<{ `results`: [`Visit`](interfaces/Visit.md)[]  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |
| `abortController` | `AbortController` |
| `v?` | `string` |

#### Returns

`Observable`<[`FetchResponse`](interfaces/FetchResponse.md)<{ `results`: [`Visit`](interfaces/Visit.md)[]  }\>\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/visit-utils.ts:51](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/visit-utils.ts#L51)

___

### makeUrl

▸ **makeUrl**(`path`): `string`

Append `path` to the OpenMRS SPA base.

#### Example

```ts
makeUrl('/foo/bar');
// => '/openmrs/foo/bar'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[packages/framework/esm-api/src/openmrs-fetch.ts:25](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-fetch.ts#L25)

___

### openmrsFetch

▸ **openmrsFetch**<`T`\>(`path`, `fetchInit?`): `Promise`<[`FetchResponse`](interfaces/FetchResponse.md)<`T`\>\>

The openmrsFetch function is a wrapper around the
[browser's built-in fetch function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch),
with extra handling for OpenMRS-specific API behaviors, such as
request headers, authentication, authorization, and the API urls.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | A string url to make the request to. Note that the   openmrs base url (by default `/openmrs`) will be automatically   prepended to the URL, so there is no need to include it. |
| `fetchInit` | [`FetchConfig`](interfaces/FetchConfig.md) | A [fetch init object](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax).   Note that the `body` property does not need to be `JSON.stringify()`ed   because openmrsFetch will do that for you. |

#### Returns

`Promise`<[`FetchResponse`](interfaces/FetchResponse.md)<`T`\>\>

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  that resolves with a [Response object](https://developer.mozilla.org/en-US/docs/Web/API/Response).
  Note that the openmrs version of the Response object has already
  downloaded the HTTP response body as json, and has an additional
  `data` property with the HTTP response json as a javascript object.

#### Example
```js
import { openmrsFetch } from '@openmrs/esm-api'
const abortController = new AbortController();
openmrsFetch(`${restBaseUrl}/session', {signal: abortController.signal})
  .then(response => {
    console.log(response.data.authenticated)
  })
  .catch(err => {
    console.error(err.status);
  })
abortController.abort();
openmrsFetch(`${restBaseUrl}/session', {
  method: 'POST',
  body: {
    username: 'hi',
    password: 'there',
  }
})
```

#### Cancellation

To cancel a network request, use an
[AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort).
It is best practice to cancel your network requests when the user
navigates away from a page while the request is pending request, to
free up memory and network resources and to prevent race conditions.

#### Defined in

[packages/framework/esm-api/src/openmrs-fetch.ts:85](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-fetch.ts#L85)

___

### openmrsObservableFetch

▸ **openmrsObservableFetch**<`T`\>(`url`, `fetchInit?`): `Observable`<[`FetchResponse`](interfaces/FetchResponse.md)<`T`\>\>

The openmrsObservableFetch function is a wrapper around openmrsFetch
that returns an [Observable](https://rxjs-dev.firebaseapp.com/guide/observable)
instead of a promise. It exists in case using an Observable is
preferred or more convenient than a promise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | See [openmrsFetch](API.md#openmrsfetch) |
| `fetchInit` | [`FetchConfig`](interfaces/FetchConfig.md) | See [openmrsFetch](API.md#openmrsfetch) |

#### Returns

`Observable`<[`FetchResponse`](interfaces/FetchResponse.md)<`T`\>\>

An Observable that produces exactly one Response object.
The response object is exactly the same as for [openmrsFetch](API.md#openmrsfetch).

#### Example

```js
import { openmrsObservableFetch } from '@openmrs/esm-api'
const subscription = openmrsObservableFetch(`${restBaseUrl}/session').subscribe(
  response => console.log(response.data),
  err => {throw err},
  () => console.log('finished')
)
subscription.unsubscribe()
```

#### Cancellation

To cancel the network request, simply call `subscription.unsubscribe();`

#### Defined in

[packages/framework/esm-api/src/openmrs-fetch.ts:265](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-fetch.ts#L265)

___

### refetchCurrentUser

▸ **refetchCurrentUser**(`username?`, `password?`): `Promise`<[`SessionStore`](API.md#sessionstore)\>

The `refetchCurrentUser` function causes a network request to redownload
the user. All subscribers to the current user will be notified of the
new users once the new version of the user object is downloaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `username?` | `string` |
| `password?` | `string` |

#### Returns

`Promise`<[`SessionStore`](API.md#sessionstore)\>

The same observable as returned by [getCurrentUser](API.md#getcurrentuser).

#### Example
```js
import { refetchCurrentUser } from '@openmrs/esm-api'
refetchCurrentUser()
```

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:154](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L154)

___

### saveVisit

▸ **saveVisit**(`payload`, `abortController`): `Observable`<[`FetchResponse`](interfaces/FetchResponse.md)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`NewVisitPayload`](interfaces/NewVisitPayload.md) |
| `abortController` | `AbortController` |

#### Returns

`Observable`<[`FetchResponse`](interfaces/FetchResponse.md)<`any`\>\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/visit-utils.ts:73](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/visit-utils.ts#L73)

___

### setCurrentVisit

▸ **setCurrentVisit**(`patientUuid`, `visitUuid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |
| `visitUuid` | `string` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/visit-utils.ts:31](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/visit-utils.ts#L31)

___

### setSessionLocation

▸ **setSessionLocation**(`locationUuid`, `abortController`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `locationUuid` | `string` |
| `abortController` | `AbortController` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:219](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L219)

___

### setUserLanguage

▸ **setUserLanguage**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Session`](interfaces/Session.md) |

#### Returns

`void`

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:115](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L115)

___

### setUserProperties

▸ **setUserProperties**(`userUuid`, `userProperties`, `abortController?`): `Promise`<[`SessionStore`](API.md#sessionstore)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userUuid` | `string` |
| `userProperties` | `Object` |
| `abortController?` | `AbortController` |

#### Returns

`Promise`<[`SessionStore`](API.md#sessionstore)\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:232](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L232)

___

### toLocationObject

▸ **toLocationObject**(`openmrsRestForm`): [`Location`](interfaces/Location.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `openmrsRestForm` | `any` |

#### Returns

[`Location`](interfaces/Location.md)

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/location.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/location.ts#L7)

___

### toVisitTypeObject

▸ **toVisitTypeObject**(`openmrsRestForm`): [`VisitType`](interfaces/VisitType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `openmrsRestForm` | `any` |

#### Returns

[`VisitType`](interfaces/VisitType.md)

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/visit-type.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/visit-type.ts#L7)

___

### updateVisit

▸ **updateVisit**(`uuid`, `payload`, `abortController`): `Observable`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |
| `payload` | [`NewVisitPayload`](interfaces/NewVisitPayload.md) |
| `abortController` | `AbortController` |

#### Returns

`Observable`<`any`\>

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/visit-utils.ts:84](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/visit-utils.ts#L84)

___

### useAttachments

▸ **useAttachments**(`patientUuid`, `includeEncounterless`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |
| `includeEncounterless` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | [`AttachmentResponse`](interfaces/AttachmentResponse.md)[] |
| `error` | `any` |
| `isLoading` | `boolean` |
| `isValidating` | `boolean` |
| `mutate` | `KeyedMutator`<[`FetchResponse`](interfaces/FetchResponse.md)<{ `results`: [`AttachmentResponse`](interfaces/AttachmentResponse.md)[]  }\>\> |

#### Defined in

[packages/framework/esm-react-utils/src/useAttachments.ts:6](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useAttachments.ts#L6)

___

### useLocations

▸ **useLocations**(`tagUuidOrName?`): [`Location`](interfaces/Location.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tagUuidOrName` | ``null`` \| `string` | `null` |

#### Returns

[`Location`](interfaces/Location.md)[]

#### Defined in

[packages/framework/esm-react-utils/src/useLocations.tsx:6](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useLocations.tsx#L6)

___

### usePatient

▸ **usePatient**(`patientUuid?`): `Object`

This React hook returns a patient object. If the `patientUuid` is provided
as a parameter, then the patient for that UUID is returned. If the parameter
is not provided, the patient UUID is obtained from the current route, and
a route listener is set up to update the patient whenever the route changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| `Error` |
| `isLoading` | `boolean` |
| `patient` | [`NullablePatient`](API.md#nullablepatient) |
| `patientUuid` | ``null`` \| `string` |

#### Defined in

[packages/framework/esm-react-utils/src/usePatient.ts:90](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/usePatient.ts#L90)

___

### useSession

▸ **useSession**(): [`Session`](interfaces/Session.md)

Gets the current user session information. Returns an object with
property `authenticated` == `false` if the user is not logged in.

Uses Suspense. This hook will always either return a Session object
or throw for Suspense. It will never return `null`/`undefined`.

#### Returns

[`Session`](interfaces/Session.md)

Current user session information

#### Defined in

[packages/framework/esm-react-utils/src/useSession.ts:17](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useSession.ts#L17)

___

### useVisit

▸ **useVisit**(`patientUuid`): [`VisitReturnType`](interfaces/VisitReturnType.md)

This React hook returns visit information if the patient UUID is not null. There are
potentially two relevant visits at a time: "active" and "current".

The active visit is the most recent visit without an end date. The presence of an active
visit generally means that the patient is in the facility.

The current visit is the active visit, unless a retrospective visit has been selected.
If there is no active visit and no selected retrospective visit, then there is no
current visit. If there is no active visit but there is a retrospective visit, then
the retrospective visit is the current visit. `currentVisitIsRetrospective` tells you
whether the current visit is a retrospective visit.

The active visit and current visit require two separate API calls. `error` contains
the error from either one, if there is an error. `isValidating` is true if either
API call is in progress. `mutate` refreshes the data from both API calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `patientUuid` | `string` | Unique patient identifier `string` |

#### Returns

[`VisitReturnType`](interfaces/VisitReturnType.md)

#### Defined in

[packages/framework/esm-react-utils/src/useVisit.ts:41](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useVisit.ts#L41)

___

### useVisitTypes

▸ **useVisitTypes**(): [`VisitType`](interfaces/VisitType.md)[]

#### Returns

[`VisitType`](interfaces/VisitType.md)[]

#### Defined in

[packages/framework/esm-react-utils/src/useVisitTypes.ts:6](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useVisitTypes.ts#L6)

___

### userHasAccess

▸ **userHasAccess**(`requiredPrivilege`, `user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `requiredPrivilege` | `string` \| `string`[] |
| `user` | `Object` |
| `user.privileges` | [`Privilege`](interfaces/Privilege.md)[] |
| `user.roles` | [`Role`](interfaces/Role.md)[] |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-api/src/shared-api-objects/current-user.ts:175](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/shared-api-objects/current-user.ts#L175)

___

## Breadcrumb Functions

### filterBreadcrumbs

▸ **filterBreadcrumbs**(`list`, `path`): [`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[] |
| `path` | `string` |

#### Returns

[`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[]

#### Defined in

[packages/framework/esm-navigation/src/breadcrumbs/filter.ts:34](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/breadcrumbs/filter.ts#L34)

___

### getBreadcrumbs

▸ **getBreadcrumbs**(): [`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[]

#### Returns

[`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[]

#### Defined in

[packages/framework/esm-navigation/src/breadcrumbs/db.ts:32](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/breadcrumbs/db.ts#L32)

___

### getBreadcrumbsFor

▸ **getBreadcrumbsFor**(`path`): [`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[]

#### Defined in

[packages/framework/esm-navigation/src/breadcrumbs/filter.ts:54](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/breadcrumbs/filter.ts#L54)

___

### registerBreadcrumb

▸ **registerBreadcrumb**(`breadcrumb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `breadcrumb` | [`BreadcrumbSettings`](interfaces/BreadcrumbSettings.md) |

#### Returns

`void`

#### Defined in

[packages/framework/esm-navigation/src/breadcrumbs/db.ts:18](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/breadcrumbs/db.ts#L18)

___

### registerBreadcrumbs

▸ **registerBreadcrumbs**(`breadcrumbs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `breadcrumbs` | [`BreadcrumbSettings`](interfaces/BreadcrumbSettings.md)[] |

#### Returns

`void`

#### Defined in

[packages/framework/esm-navigation/src/breadcrumbs/db.ts:22](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/breadcrumbs/db.ts#L22)

___

## Config Functions

### defineConfigSchema

▸ **defineConfigSchema**(`moduleName`, `schema`): `void`

This defines a configuration schema for a module. The schema tells the
configuration system how the module can be configured. It specifies
what makes configuration valid or invalid.

See [Configuration System](https://o3-docs.openmrs.org/docs/configuration-system)
for more information about defining a config schema.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | `string` | Name of the module the schema is being defined for. Generally   should be the one in which the `defineConfigSchema` call takes place. |
| `schema` | [`ConfigSchema`](interfaces/ConfigSchema.md) | The config schema for the module |

#### Returns

`void`

#### Defined in

[packages/framework/esm-config/src/module-config/module-config.ts:164](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/module-config/module-config.ts#L164)

___

### defineExtensionConfigSchema

▸ **defineExtensionConfigSchema**(`extensionName`, `schema`): `void`

This defines a configuration schema for an extension. When a schema is defined
for an extension, that extension will receive the configuration corresponding
to that schema, rather than the configuration corresponding to the module
in which it is defined.

The schema tells the configuration system how the module can be configured.
It specifies what makes configuration valid or invalid.

See [Configuration System](https://o3-docs.openmrs.org/docs/configuration-system)
for more information about defining a config schema.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionName` | `string` | Name of the extension the schema is being defined for.   Should match the `name` of one of the `extensions` entries being returned   by `setupOpenMRS`. |
| `schema` | [`ConfigSchema`](interfaces/ConfigSchema.md) | The config schema for the extension |

#### Returns

`void`

#### Defined in

[packages/framework/esm-config/src/module-config/module-config.ts:225](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/module-config/module-config.ts#L225)

___

### getConfig

▸ **getConfig**<`T`\>(`moduleName`): `Promise`<`T`\>

A promise-based way to access the config as soon as it is fully loaded.
If it is already loaded, resolves the config in its present state.

This is a useful function if you need to get the config in the course
of the execution of a function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | `string` | The name of the module for which to look up the config |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/framework/esm-config/src/module-config/module-config.ts:257](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/module-config/module-config.ts#L257)

___

### provide

▸ **provide**(`config`, `sourceName?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | [`Config`](interfaces/Config.md) | `undefined` |
| `sourceName` | `string` | `'provided'` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-config/src/module-config/module-config.ts:241](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/module-config/module-config.ts#L241)

___

### useConfig

▸ **useConfig**<`T`\>(`options?`): `T`

Use this React Hook to obtain your module's configuration.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `UseConfigOptions` | Additional options that can be passed to useConfig() |

#### Returns

`T`

#### Defined in

[packages/framework/esm-react-utils/src/useConfig.ts:139](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useConfig.ts#L139)

___

## Config Validation Functions

### inRange

▸ **inRange**(`min`, `max`): [`Validator`](API.md#validator)

Verifies that the value is between the provided minimum and maximum

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | Minimum acceptable value |
| `max` | `number` | Maximum acceptable value |

#### Returns

[`Validator`](API.md#validator)

#### Defined in

[packages/framework/esm-config/src/validators/validators.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/validators/validators.ts#L10)

___

### isUrl

▸ **isUrl**(`value`): `string` \| `void`

Verifies that a string contains only the default URL template parameters.

**`category`** Navigation

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string` \| `void`

#### Defined in

[packages/framework/esm-config/src/validators/validators.ts:52](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/validators/validators.ts#L52)

___

### isUrlWithTemplateParameters

▸ **isUrlWithTemplateParameters**(`allowedTemplateParameters`): [`Validator`](API.md#validator)

Verifies that a string contains only the default URL template
parameters, plus any specified in `allowedTemplateParameters`.

**`category`** Navigation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowedTemplateParameters` | `string`[] | To be added to `openmrsBase` and `openmrsSpaBase` |

#### Returns

[`Validator`](API.md#validator)

#### Defined in

[packages/framework/esm-config/src/validators/validators.ts:21](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/validators/validators.ts#L21)

___

### oneOf

▸ **oneOf**(`allowedValues`): [`Validator`](API.md#validator)

Verifies that the value is one of the allowed options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowedValues` | `any`[] | The list of allowable values |

#### Returns

[`Validator`](API.md#validator)

#### Defined in

[packages/framework/esm-config/src/validators/validators.ts:58](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/validators/validators.ts#L58)

___

### validator

▸ **validator**(`validationFunction`, `message`): [`Validator`](API.md#validator)

Constructs a custom validator.

### Example

```typescript
{
  foo: {
    _default: 0,
    _validators: [
      validator(val => val >= 0, "Must not be negative.")
    ]
  }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validationFunction` | [`ValidatorFunction`](API.md#validatorfunction) | Takes the configured value as input. Returns true    if it is valid, false otherwise. |
| `message` | `string` \| (`value`: `any`) => `string` | A string message that explains why the value is invalid. Can    also be a function that takes the value as input and returns a string. |

#### Returns

[`Validator`](API.md#validator)

A validator ready for use in a config schema

#### Defined in

[packages/framework/esm-config/src/validators/validator.ts:25](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/validators/validator.ts#L25)

___

## Context Functions

### OpenmrsAppContext

▸ **OpenmrsAppContext**<`T`\>(`__namedParameters`): ``null``

OpenmrsAppContext is a simple React component meant to function similarly to React's Context,
but built on top of the OpenmrsAppContext.

**`example`**
```ts
   <OpenmrsAppContext namespace="something" value={{ key: "1234" }} />
```

**Notes on usage:** Unlike a proper React context where the value is limited to the subtree under the
context component, the `OpenmrsAppContext` is inherently global in scope. That means that _all applications_
will see the values that you set for the namespace if they load the value of the namespace.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`OpenmrsAppContextProps`](interfaces/OpenmrsAppContextProps.md)<`T`\> |

#### Returns

``null``

#### Defined in

[packages/framework/esm-react-utils/src/OpenmrsContext.ts:24](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/OpenmrsContext.ts#L24)

___

### getContext

▸ **getContext**<`T`\>(`namespace`): `Readonly`<`T`\> \| ``null``

Returns an _immutable_ version of the state of the namespace as it is currently

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Object` = {} | The type of the value stored in the namespace |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | The namespace to load properties from |

#### Returns

`Readonly`<`T`\> \| ``null``

#### Defined in

[packages/framework/esm-context/src/context.ts:55](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-context/src/context.ts#L55)

___

### registerContext

▸ **registerContext**<`T`\>(`namespace`, `initialValue?`): `void`

Used by callers to register a new namespace in the application context. Attempting to register
an already-registered namespace will display a warning and make no modifications to the state.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` = {} |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `namespace` | `string` | `undefined` | the namespace to register |
| `initialValue` | `T` | `nothing` | the initial value of the namespace |

#### Returns

`void`

#### Defined in

[packages/framework/esm-context/src/context.ts:29](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-context/src/context.ts#L29)

___

### subscribeToContext

▸ **subscribeToContext**<`T`\>(`namespace`, `callback`): () => `void`

Subscribes to updates of a given namespace. Note that the returned object is immutable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | the namespace to subscribe to |
| `callback` | [`ContextCallback`](API.md#contextcallback)<`T`\> | a function invoked with the current context whenever |

#### Returns

`fn`

A function to unsubscribe from the context

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-context/src/context.ts:99](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-context/src/context.ts#L99)

___

### unregisterContext

▸ **unregisterContext**(`namespace`): `void`

Used by caller to unregister a namespace in the application context. Unregistering a namespace
will remove the namespace and all associated data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-context/src/context.ts:46](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-context/src/context.ts#L46)

___

### updateContext

▸ **updateContext**<`T`\>(`namespace`, `update`): `void`

Updates a namespace in the global context. If the namespace does not exist, it is registered.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `update` | (`state`: `T`) => `T` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-context/src/context.ts:79](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-context/src/context.ts#L79)

___

### useAppContext

▸ **useAppContext**<`T`\>(`namespace`): `Readonly`<`T`\> \| `undefined`

This hook is used to access a namespace within the overall AppContext, so that a component can
use any shared contextual values. A selector may be provided to further restrict the properties
returned from the namespace.

**`example`**
```ts
// load a full namespace
const patientContext = useAppContext<PatientContext>('patient');
```

**`example`**
```ts
// loads part of a namespace
const patientName = useAppContext<PatientContext, string | undefined>('patient', (state) => state.display);
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Object` = {} | The type of the value stored in the namespace |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | The namespace to load properties from |

#### Returns

`Readonly`<`T`\> \| `undefined`

#### Defined in

[packages/framework/esm-react-utils/src/useAppContext.ts:26](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useAppContext.ts#L26)

___

### useDefineAppContext

▸ **useDefineAppContext**<`T`\>(`namespace`, `value?`): (`update`: (`state`: `T`) => `T`) => `void`

This hook is used to register a namespace in the AppContext. The component that registers the
namespace is responsible for updating the value associated with the namespace. The namespace
will be automatically removed when the component using this hook is unmounted.

**`example`**
```ts
const { data: patient } = useSWR(`/ws/rest/v1/patient/${patientUuid}`, openmrsFetch);
useDefineAppContext<PatientContext>('patient', patient ?? null);
```

**`example`**
```ts
const { data: patient } = useSWR(`/ws/rest/v1/patient/${patientUuid}`, openmrsFetch);
const updatePatient = useDefineAppContext<PatientContext>('patient', patient ?? null);
updatePatient((patient) => {
 patient.name = 'Hector';
 return patient;
})
```

Note that the AppContext does not allow the storing of undefined values in a namespace. Use `null`
instead.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Object` | The type of the value of the namespace |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | The name of the namespace in the application context. Note that the namespace  must be unique among currently registered namespaces in the application context. |
| `value?` | `T` | The value to associate with this namespace. Updating the value property will update   the namespace value. |

#### Returns

`fn`

A function which can be used to update the state associated with the namespace

▸ (`update`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `update` | (`state`: `T`) => `T` |

##### Returns

`void`

#### Defined in

[packages/framework/esm-react-utils/src/useDefineAppContext.ts:37](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useDefineAppContext.ts#L37)

___

## Date and Time Functions

### formatDate

▸ **formatDate**(`date`, `options?`): `string`

Formats the input date according to the current locale and the
given options.

Default options:
 - mode: "standard",
 - time: "for today",
 - day: true,
 - year: true
 - noToday: false

If the date is today then "Today" is produced (in the locale language).
This behavior can be disabled with `noToday: true`.

When time is included, it is appended with a comma and a space. This
agrees with the output of `Date.prototype.toLocaleString` for *most*
locales.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `options?` | `Partial`<[`FormatDateOptions`](API.md#formatdateoptions)\> |

#### Returns

`string`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:261](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L261)

___

### formatDatetime

▸ **formatDatetime**(`date`, `options?`): `string`

Formats the input into a string showing the date and time, according
to the current locale. The `mode` parameter is as described for
`formatDate`.

This is created by concatenating the results of `formatDate`
and `formatTime` with a comma and space. This agrees with the
output of `Date.prototype.toLocaleString` for *most* locales.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `options?` | `Partial`<`Omit`<[`FormatDateOptions`](API.md#formatdateoptions), ``"time"``\>\> |

#### Returns

`string`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:363](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L363)

___

### formatTime

▸ **formatTime**(`date`): `string`

Formats the input as a time, according to the current locale.
12-hour or 24-hour clock depends on locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`string`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:347](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L347)

___

### getDefaultCalendar

▸ **getDefaultCalendar**(`locale`): `undefined` \| `string`

Retrieves the default calendar for the specified locale if any.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locale` | `undefined` \| `string` \| `Locale` | the locale to look-up |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:236](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L236)

___

### getLocale

▸ **getLocale**(): `string`

Returns the current locale of the application.

#### Returns

`string`

string

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:371](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L371)

___

### isOmrsDateStrict

▸ **isOmrsDateStrict**(`omrsPayloadString`): `boolean`

This function checks whether a date string is the OpenMRS ISO format.
The format should be YYYY-MM-DDTHH:mm:ss.SSSZZ

#### Parameters

| Name | Type |
| :------ | :------ |
| `omrsPayloadString` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:27](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L27)

___

### isOmrsDateToday

▸ **isOmrsDateToday**(`date`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateInput`](API.md#dateinput) | Checks if the provided date is today. |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:56](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L56)

___

### parseDate

▸ **parseDate**(`dateString`): `Date`

Utility function to parse an arbitrary string into a date.
Uses `dayjs(dateString)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dateString` | `string` |

#### Returns

`Date`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:129](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L129)

___

### registerDefaultCalendar

▸ **registerDefaultCalendar**(`locale`, `calendar`): `void`

Provides the name of the calendar to associate, as a default, with the given base locale.

**`example`**
```
registerDefaultCalendar('en', 'buddhist') // sets the default calendar for the 'en' locale to Buddhist.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locale` | `string` | - |
| `calendar` | `string` | the calendar to use for this registration |

#### Returns

`void`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:227](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L227)

___

### toDateObjectStrict

▸ **toDateObjectStrict**(`omrsDateString`): `Date` \| ``null``

Converts the object to a date object if it is an OpenMRS ISO date time string.
Otherwise returns null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `omrsDateString` | `string` |

#### Returns

`Date` \| ``null``

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:64](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L64)

___

### toOmrsDateFormat

▸ **toOmrsDateFormat**(`date`, `format?`): `string`

**`deprecated`** use `formatDate(date)`
Formats the input as a date string. By default the format "YYYY-MMM-DD" is used.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | [`DateInput`](API.md#dateinput) | `undefined` |
| `format` | `string` | `'YYYY-MMM-DD'` |

#### Returns

`string`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:121](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L121)

___

### toOmrsDayDateFormat

▸ **toOmrsDayDateFormat**(`date`): `string`

**`deprecated`** use `formatDate(date, "wide")`
Formats the input as a date string using the format "DD - MMM - YYYY".

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | [`DateInput`](API.md#dateinput) |

#### Returns

`string`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:105](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L105)

___

### toOmrsIsoString

▸ **toOmrsIsoString**(`date`, `toUTC?`): `string`

Formats the input to OpenMRS ISO format: "YYYY-MM-DDTHH:mm:ss.SSSZZ".

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | [`DateInput`](API.md#dateinput) | `undefined` |
| `toUTC` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:75](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L75)

___

### toOmrsTimeString

▸ **toOmrsTimeString**(`date`): `string`

**`deprecated`** use `formatTime`
Formats the input as a time string using the format "HH:mm A".

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | [`DateInput`](API.md#dateinput) |

#### Returns

`string`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:97](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L97)

___

### toOmrsTimeString24

▸ **toOmrsTimeString24**(`date`): `string`

**`deprecated`** use `formatTime`
Formats the input as a time string using the format "HH:mm".

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | [`DateInput`](API.md#dateinput) |

#### Returns

`string`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:89](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L89)

___

### toOmrsYearlessDateFormat

▸ **toOmrsYearlessDateFormat**(`date`): `string`

**`deprecated`** use `formatDate(date, "no year")`
Formats the input as a date string using the format "DD-MMM".

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | [`DateInput`](API.md#dateinput) |

#### Returns

`string`

#### Defined in

[packages/framework/esm-utils/src/omrs-dates.ts:113](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/omrs-dates.ts#L113)

___

## Dynamic Loading Functions

### importDynamic

▸ **importDynamic**<`T`\>(`jsPackage`, `share?`, `options?`): `Promise`<`T`\>

Loads the named export from a named package. This might be used like:

```js
const { someComponent } = importDynamic("@openmrs/esm-template-app")
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `jsPackage` | `string` | `undefined` | The package to load the export from. |
| `share` | `string` | `'./start'` | Indicates the name of the shared module; this is an advanced feature if the package you are loading   doesn't use the default OpenMRS shared module name "./start". |
| `options?` | `Object` | `undefined` | Additional options to control loading this script. |
| `options.importMap?` | [`ImportMap`](interfaces/ImportMap.md) | `undefined` |  |
| `options.maxLoadingTime?` | `number` | `undefined` |  |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/framework/esm-dynamic-loading/src/dynamic-loading.ts:36](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-dynamic-loading/src/dynamic-loading.ts#L36)

___

## Error Handling Functions

### createErrorHandler

▸ **createErrorHandler**(): (`incomingErr`: `any`) => `void`

#### Returns

`fn`

▸ (`incomingErr`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `incomingErr` | `any` |

##### Returns

`void`

#### Defined in

[packages/framework/esm-error-handling/src/index.ts:30](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-error-handling/src/index.ts#L30)

___

### reportError

▸ **reportError**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-error-handling/src/index.ts:23](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-error-handling/src/index.ts#L23)

___

## Extension Functions

### ExtensionSlot

▸ **ExtensionSlot**(`__namedParameters`): `Element`

An [extension slot](https://o3-docs.openmrs.org/docs/extension-system).
A place with a name. Extensions that get connected to that name
will be rendered into this.

**`example`**
Passing a react node as children

```tsx
<ExtensionSlot name="Foo">
  <div style={{ width: 10rem }}>
    <Extension />
  </div>
</ExtensionSlot>
```

**`example`**
Passing a function as children

```tsx
<ExtensionSlot name="Bar">
  {(extension) => (
    <h1>{extension.name}</h1>
    <div style={{ color: extension.meta.color }}>
      <Extension />
    </div>
  )}
</ExtensionSlot>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ExtensionSlotProps`](API.md#extensionslotprops) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-react-utils/src/ExtensionSlot.tsx:81](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/ExtensionSlot.tsx#L81)

___

### attach

▸ **attach**(`slotName`, `extensionId`): `void`

Attach an extension to an extension slot.

This will cause the extension to be rendered into the specified
extension slot, unless it is removed by configuration. Using
`attach` is an alternative to specifying the `slot` or `slots`
in the extension declaration.

It is particularly useful when creating a slot into which
you want to render an existing extension. This enables you
to do so without modifying the extension's declaration, which
may be impractical or inappropriate, for example if you are
writing a module for a specific implementation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | `string` | a name uniquely identifying the slot |
| `extensionId` | `string` | an extension name, with an optional #-suffix    to distinguish it from other instances of the same extension    attached to the same slot. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-extensions/src/extensions.ts:142](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/extensions.ts#L142)

___

### detach

▸ **detach**(`extensionSlotName`, `extensionId`): `void`

**`deprecated`** Avoid using this. Extension attachments should be considered declarative.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionSlotName` | `string` |
| `extensionId` | `string` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-extensions/src/extensions.ts:175](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/extensions.ts#L175)

___

### detachAll

▸ **detachAll**(`extensionSlotName`): `void`

**`deprecated`** Avoid using this. Extension attachments should be considered declarative.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionSlotName` | `string` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-extensions/src/extensions.ts:199](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/extensions.ts#L199)

___

### getAssignedExtensions

▸ **getAssignedExtensions**(`slotName`): [`AssignedExtension`](interfaces/AssignedExtension.md)[]

Gets the list of extensions assigned to a given slot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | `string` | The slot to load the assigned extensions for |

#### Returns

[`AssignedExtension`](interfaces/AssignedExtension.md)[]

An array of extensions assigned to the named slot

#### Defined in

[packages/framework/esm-extensions/src/extensions.ts:333](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/extensions.ts#L333)

___

### getConnectedExtensions

▸ **getConnectedExtensions**(`assignedExtensions`, `online?`, `enabledFeatureFlags?`): [`ConnectedExtension`](interfaces/ConnectedExtension.md)[]

Filters a list of extensions according to whether they support the
current connectivity status.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `assignedExtensions` | [`AssignedExtension`](interfaces/AssignedExtension.md)[] | `undefined` | The list of extensions to filter. |
| `online` | ``null`` \| `boolean` | `null` | Whether the app is currently online. If `null`, uses `navigator.onLine`. |
| `enabledFeatureFlags` | ``null`` \| `string`[] | `null` | The names of all enabled feature flags. If `null`, looks    up the feature flags using the feature flags API. |

#### Returns

[`ConnectedExtension`](interfaces/ConnectedExtension.md)[]

A list of extensions that should be rendered

#### Defined in

[packages/framework/esm-extensions/src/extensions.ts:259](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/extensions.ts#L259)

___

### getExtensionNameFromId

▸ **getExtensionNameFromId**(`extensionId`): `string`

Given an extension ID, which is a string uniquely identifying
an instance of an extension within an extension slot, this
returns the extension name.

**`example`**
```js
getExtensionNameFromId("foo#bar")
 --> "foo"
getExtensionNameFromId("baz")
 --> "baz"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionId` | `string` |

#### Returns

`string`

#### Defined in

[packages/framework/esm-extensions/src/extensions.ts:90](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/extensions.ts#L90)

___

### getExtensionStore

▸ **getExtensionStore**(): `StoreApi`<[`ExtensionStore`](interfaces/ExtensionStore.md)\>

This returns a store that modules can use to get information about the
state of the extension system.

#### Returns

`StoreApi`<[`ExtensionStore`](interfaces/ExtensionStore.md)\>

#### Defined in

[packages/framework/esm-extensions/src/store.ts:124](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/store.ts#L124)

___

### renderExtension

▸ **renderExtension**(`domElement`, `extensionSlotName`, `extensionSlotModuleName`, `extensionId`, `renderFunction?`, `additionalProps?`): `Promise`<`Parcel` \| ``null``\>

Mounts into a DOM node (representing an extension slot)
a lazy-loaded component from *any* frontend module
that registered an extension component for this slot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domElement` | `HTMLElement` |
| `extensionSlotName` | `string` |
| `extensionSlotModuleName` | `string` |
| `extensionId` | `string` |
| `renderFunction` | (`application`: `ParcelConfig`<`CustomProps`\>) => `ParcelConfig`<`CustomProps`\> |
| `additionalProps` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`Parcel` \| ``null``\>

#### Defined in

[packages/framework/esm-extensions/src/render.ts:18](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/render.ts#L18)

___

### useAssignedExtensionIds

▸ **useAssignedExtensionIds**(`slotName`): `string`[]

Gets the assigned extension ids for a given extension slot name.
Does not consider if offline or online.

**`deprecated`** Use `useAssignedExtensions`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | `string` | The name of the slot to get the assigned IDs for. |

#### Returns

`string`[]

#### Defined in

[packages/framework/esm-react-utils/src/useAssignedExtensionIds.ts:13](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useAssignedExtensionIds.ts#L13)

___

### useAssignedExtensions

▸ **useAssignedExtensions**(`slotName`): [`AssignedExtension`](interfaces/AssignedExtension.md)[]

Gets the assigned extensions for a given extension slot name.
Does not consider if offline or online.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | `string` | The name of the slot to get the assigned extensions for. |

#### Returns

[`AssignedExtension`](interfaces/AssignedExtension.md)[]

#### Defined in

[packages/framework/esm-react-utils/src/useAssignedExtensions.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useAssignedExtensions.ts#L10)

___

### useConnectedExtensions

▸ **useConnectedExtensions**(`slotName`): [`ConnectedExtension`](interfaces/ConnectedExtension.md)[]

Gets the assigned extension for a given extension slot name.
Considers if offline or online, and what feature flags are enabled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | `string` | The name of the slot to get the assigned extensions for. |

#### Returns

[`ConnectedExtension`](interfaces/ConnectedExtension.md)[]

#### Defined in

[packages/framework/esm-react-utils/src/useConnectedExtensions.ts:15](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useConnectedExtensions.ts#L15)

___

### useExtensionSlotMeta

▸ **useExtensionSlotMeta**<`T`\>(`extensionSlotName`): `Object`

Extract meta data from all extension for a given extension slot.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`ExtensionMeta`](interfaces/ExtensionMeta.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionSlotName` | `string` |

#### Returns

`Object`

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionSlotMeta.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useExtensionSlotMeta.ts#L10)

___

### useExtensionStore

▸ **useExtensionStore**(): `T`

#### Returns

`T`

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionStore.ts:6](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useExtensionStore.ts#L6)

▸ **useExtensionStore**(`actions`): `T` & [`BoundActions`](API.md#boundactions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | [`Actions`](API.md#actions)<[`ExtensionStore`](interfaces/ExtensionStore.md)\> |

#### Returns

`T` & [`BoundActions`](API.md#boundactions)

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionStore.ts:6](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useExtensionStore.ts#L6)

▸ **useExtensionStore**(`actions?`): `T` & [`BoundActions`](API.md#boundactions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions?` | [`Actions`](API.md#actions)<[`ExtensionStore`](interfaces/ExtensionStore.md)\> |

#### Returns

`T` & [`BoundActions`](API.md#boundactions)

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionStore.ts:6](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useExtensionStore.ts#L6)

___

### useRenderableExtensions

▸ **useRenderableExtensions**(`name`): `React.FC`<`Pick`<[`ExtensionProps`](API.md#extensionprops), ``"state"``\>\>[]

This is an advanced hook for use-cases where its useful to use the extension system,
but not the `ExtensionSlot` component's rendering of extensions. Use of this hook
should be avoided if possible.

Functionally, this hook is very similar to the `ExtensionSlot` component, but whereas
an `ExtensionSlot` renders a DOM tree of extensions bound to the slot, this hook simply
returns the extensions as an array of React components that can be wired into a component
however makes sense.

**`example`**
```ts
const extensions = useRenderableExtensions('my-extension-slot');
return (
 <>
   {extensions.map((Ext, index) => (
     <React.Fragment key={index}>
       <Ext state={{key: 'value'}} />
     </React.Fragment>
   ))}
 </>
)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the extension slot |

#### Returns

`React.FC`<`Pick`<[`ExtensionProps`](API.md#extensionprops), ``"state"``\>\>[]

#### Defined in

[packages/framework/esm-react-utils/src/useRenderableExtensions.tsx:31](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useRenderableExtensions.tsx#L31)

___

## Feature Flags Functions

### getFeatureFlag

▸ **getFeatureFlag**(`flagName`): `boolean`

Use this function to access the current value of the feature flag

If you are using React, use `useFeatureFlag` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `flagName` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-feature-flags/src/feature-flags.ts:71](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-feature-flags/src/feature-flags.ts#L71)

___

### registerFeatureFlag

▸ **registerFeatureFlag**(`flagName`, `label`, `description`): `void`

This function creates a feature flag. Call it in top-level code anywhere. It will
not reset whether the flag is enabled or not, so it's safe to call it multiple times.
Once a feature flag is created, it will appear with a toggle in the Implementer Tools.
It can then be used to turn on or off features in the code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `flagName` | `string` | A code-friendly name for the flag, which will be used to reference it in code |
| `label` | `string` | A human-friendly name which will be displayed in the Implementer Tools |
| `description` | `string` | An explanation of what the flag does, which will be displayed in the Implementer Tools |

#### Returns

`void`

#### Defined in

[packages/framework/esm-feature-flags/src/feature-flags.ts:54](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-feature-flags/src/feature-flags.ts#L54)

___

### useFeatureFlag

▸ **useFeatureFlag**(`flagName`): `boolean`

Use this function to tell whether a feature flag is toggled on or off.

Example:

```tsx
import { useFeatureFlag } from "@openmrs/esm-react-utils";

export function MyComponent() {
 const isMyFeatureFlagOn = useFeatureFlag("my-feature-flag");
 return <>{isMyFeatureFlagOn && <ExperimentalFeature />}</>;
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `flagName` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-react-utils/src/useFeatureFlag.ts:19](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useFeatureFlag.ts#L19)

___

## Framework Functions

### getAsyncExtensionLifecycle

▸ **getAsyncExtensionLifecycle**<`T`\>(`lazy`, `options`): () => `Promise`<`any`\>

**`deprecated`** Use getAsyncLifecycle instead.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lazy` | () => `Promise`<{ `default`: `ComponentType`<`T`\>  }\> |
| `options` | `ComponentDecoratorOptions` |

#### Returns

`fn`

▸ (): `Promise`<`any`\>

##### Returns

`Promise`<`any`\>

#### Defined in

[packages/framework/esm-react-utils/src/getLifecycle.ts:32](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/getLifecycle.ts#L32)

___

### getAsyncLifecycle

▸ **getAsyncLifecycle**<`T`\>(`lazy`, `options`): () => `Promise`<`any`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lazy` | () => `Promise`<{ `default`: `ComponentType`<`T`\>  }\> |
| `options` | `ComponentDecoratorOptions` |

#### Returns

`fn`

▸ (): `Promise`<`any`\>

##### Returns

`Promise`<`any`\>

#### Defined in

[packages/framework/esm-react-utils/src/getLifecycle.ts:18](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/getLifecycle.ts#L18)

___

### getLifecycle

▸ **getLifecycle**<`T`\>(`Component`, `options`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `ComponentType`<`T`\> |
| `options` | `ComponentDecoratorOptions` |

#### Returns

`any`

#### Defined in

[packages/framework/esm-react-utils/src/getLifecycle.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/getLifecycle.ts#L10)

___

### getSyncLifecycle

▸ **getSyncLifecycle**<`T`\>(`Component`, `options`): () => `Promise`<`any`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `ComponentType`<`T`\> |
| `options` | `ComponentDecoratorOptions` |

#### Returns

`fn`

▸ (): `Promise`<`any`\>

##### Returns

`Promise`<`any`\>

#### Defined in

[packages/framework/esm-react-utils/src/getLifecycle.ts:25](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/getLifecycle.ts#L25)

___

## Navigation Functions

### ConfigurableLink

▸ **ConfigurableLink**(`__namedParameters`): `Element`

A React link component which calls [navigate](API.md#navigate) when clicked

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `PropsWithChildren`<[`ConfigurableLinkProps`](interfaces/ConfigurableLinkProps.md)\> |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-react-utils/src/ConfigurableLink.tsx:53](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/ConfigurableLink.tsx#L53)

___

### getHistory

▸ **getHistory**(): `string`[]

Returns a list of URLs representing the history of the current window session.

#### Returns

`string`[]

#### Defined in

[packages/framework/esm-navigation/src/history/history.ts:47](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/history/history.ts#L47)

___

### goBackInHistory

▸ **goBackInHistory**(`toUrl:`): `void`

Rolls back the history to the specified point and navigates to that URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toUrl:` | `Object` | The URL in the history to navigate to. History after that index will be deleted. If the URL is not found in the history, an error will be thrown. |
| `toUrl:.toUrl` | `string` |  |

#### Returns

`void`

#### Defined in

[packages/framework/esm-navigation/src/history/history.ts:58](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/history/history.ts#L58)

___

### interpolateString

▸ **interpolateString**(`template`, `params`): `string`

Interpolates values of `params` into the `template` string.

Example usage:
```js
interpolateString("test ${one} ${two} 3", {
   one: "1",
   two: "2",
}); // will return "test 1 2 3"
interpolateString("test ok", { one: "1", two: "2" }) // will return "test ok"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | `string` | With optional params wrapped in `${ }` |
| `params` | `Object` | Values to interpolate into the string template |

#### Returns

`string`

#### Defined in

[packages/framework/esm-navigation/src/navigation/interpolate-string.ts:60](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/navigation/interpolate-string.ts#L60)

___

### interpolateUrl

▸ **interpolateUrl**(`template`, `additionalParams?`): `string`

Interpolates a string with openmrsBase and openmrsSpaBase.

Useful for accepting `${openmrsBase}` or `${openmrsSpaBase}`plus additional template
parameters in configurable URLs.

Example usage:
```js
interpolateUrl("test ${openmrsBase} ${openmrsSpaBase} ok");
   // will return "test /openmrs /openmrs/spa ok"

interpolateUrl("${openmrsSpaBase}/patient/${patientUuid}", {
   patientUuid: "4fcb7185-c6c9-450f-8828-ccae9436bd82",
}); // will return "/openmrs/spa/patient/4fcb7185-c6c9-450f-8828-ccae9436bd82"
```

This can be used in conjunction with the `navigate` function like so
```js
navigate({
 to: interpolateUrl(
   "${openmrsSpaBase}/patient/${patientUuid}",
   { patientUuid: patient.uuid }
 )
}); // will navigate to "/openmrs/spa/patient/4fcb7185-c6c9-450f-8828-ccae9436bd82"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | `string` | A string to interpolate |
| `additionalParams?` | `Object` | Additional values to interpolate into the string template |

#### Returns

`string`

#### Defined in

[packages/framework/esm-navigation/src/navigation/interpolate-string.ts:36](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/navigation/interpolate-string.ts#L36)

___

### navigate

▸ **navigate**(`to`): `void`

Calls `location.assign` for non-SPA paths and [navigateToUrl](https://single-spa.js.org/docs/api/#navigatetourl) for SPA paths

#### Example usage:
```js
@example
const config = useConfig();
const submitHandler = () => {
  navigate({ to: config.links.submitSuccess });
};
```

#### Example behavior::
```js
@example
navigate({ to: "/some/path" }); // => window.location.assign("/some/path")
navigate({ to: "https://single-spa.js.org/" }); // => window.location.assign("https://single-spa.js.org/")
navigate({ to: "${openmrsBase}/some/path" }); // => window.location.assign("/openmrs/some/path")
navigate({ to: "/openmrs/spa/foo/page" }); // => navigateToUrl("/openmrs/spa/foo/page")
navigate({ to: "${openmrsSpaBase}/bar/page" }); // => navigateToUrl("/openmrs/spa/bar/page")
navigate({ to: "/${openmrsSpaBase}/baz/page" }) // => navigateToUrl("/openmrs/spa/baz/page")
navigate({ to: "https://o3.openmrs.org/${openmrsSpaBase}/qux/page" }); // => navigateToUrl("/openmrs/spa/qux/page")
  if `window.location.origin` == "https://o3.openmrs.org", else will use window.location.assign
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | [`NavigateOptions`](interfaces/NavigateOptions.md) | The target path or URL. Supports templating with 'openmrsBase', 'openmrsSpaBase', and any additional template parameters defined in `templateParams`. For example, `${openmrsSpaBase}/home` will resolve to `/openmrs/spa/home` for implementations using the standard OpenMRS and SPA base paths. If `templateParams` contains `{ foo: "bar" }`, then the URL `${openmrsBase}/${foo}` will become `/openmrs/bar`. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-navigation/src/navigation/navigate.ts:49](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/navigation/navigate.ts#L49)

___

## Offline Functions

### beginEditSynchronizationItem

▸ **beginEditSynchronizationItem**(`id`): `Promise`<`void`\>

Triggers an edit flow for the given synchronization item.
If this is not possible, throws an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The ID of the synchronization item to be edited. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:330](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L330)

___

### canBeginEditSynchronizationItemsOfType

▸ **canBeginEditSynchronizationItemsOfType**(`type`): `boolean`

Returns whether editing synchronization items of the given type is supported by the currently
registered synchronization handlers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The identifying type of the synchronization item which should be edited. |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-offline/src/sync.ts:320](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L320)

___

### deleteSynchronizationItem

▸ **deleteSynchronizationItem**(`id`): `Promise`<`void`\>

Deletes a queued up sync item with the given ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The ID of the synchronization item to be deleted. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:350](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L350)

___

### generateOfflineUuid

▸ **generateOfflineUuid**(): `string`

Generates a UUID-like string which is used for uniquely identifying objects while offline.

#### Returns

`string`

#### Defined in

[packages/framework/esm-offline/src/uuid.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/uuid.ts#L7)

___

### getCurrentOfflineMode

▸ **getCurrentOfflineMode**(): [`OfflineModeResult`](interfaces/OfflineModeResult.md)

#### Returns

[`OfflineModeResult`](interfaces/OfflineModeResult.md)

#### Defined in

[packages/framework/esm-offline/src/mode.ts:45](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/mode.ts#L45)

___

### getDynamicOfflineDataEntries

▸ **getDynamicOfflineDataEntries**<`T`\>(`type?`): `Promise`<`T`[]\>

Returns all [DynamicOfflineData](interfaces/DynamicOfflineData.md) entries which registered for the currently logged in user.
Optionally returns only entries of a given type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DynamicOfflineData`](interfaces/DynamicOfflineData.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | `string` | The type of the entries to be returned. If `undefined`, returns all types. |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:128](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L128)

___

### getDynamicOfflineDataEntriesFor

▸ **getDynamicOfflineDataEntriesFor**<`T`\>(`userId`, `type?`): `Promise`<`T`[]\>

Returns all [DynamicOfflineData](interfaces/DynamicOfflineData.md) entries which registered for the given user.
Optionally returns only entries of a given type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DynamicOfflineData`](interfaces/DynamicOfflineData.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | The ID of the user whose entries are to be retrieved. |
| `type?` | `string` | The type of the entries to be returned. If `undefined`, returns all types. |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:139](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L139)

___

### getDynamicOfflineDataHandlers

▸ **getDynamicOfflineDataHandlers**(): [`DynamicOfflineDataHandler`](interfaces/DynamicOfflineDataHandler.md)[]

Returns all handlers which have been setup using the [setupDynamicOfflineDataHandler](API.md#setupdynamicofflinedatahandler) function.

#### Returns

[`DynamicOfflineDataHandler`](interfaces/DynamicOfflineDataHandler.md)[]

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:104](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L104)

___

### getFullSynchronizationItems

▸ **getFullSynchronizationItems**<`T`\>(`type?`): `Promise`<[`SyncItem`](interfaces/SyncItem.md)<`T`\>[]\>

Returns all currently queued up sync items of the currently signed in user.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | `string` | The identifying type of the synchronization items to be returned. |

#### Returns

`Promise`<[`SyncItem`](interfaces/SyncItem.md)<`T`\>[]\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:302](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L302)

___

### getFullSynchronizationItemsFor

▸ **getFullSynchronizationItemsFor**<`T`\>(`userId`, `type?`): `Promise`<[`SyncItem`](interfaces/SyncItem.md)<`T`\>[]\>

Returns all currently queued up sync items of a given user.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | The ID of the user whose synchronization items should be returned. |
| `type?` | `string` | The identifying type of the synchronization items to be returned.. |

#### Returns

`Promise`<[`SyncItem`](interfaces/SyncItem.md)<`T`\>[]\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:281](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L281)

___

### getOfflinePatientDataStore

▸ **getOfflinePatientDataStore**(): `StoreApi`<[`OfflinePatientDataSyncStore`](interfaces/OfflinePatientDataSyncStore.md)\>

**`deprecated`** Will be removed once all modules have been migrated to the new dynamic offline data API.

#### Returns

`StoreApi`<[`OfflinePatientDataSyncStore`](interfaces/OfflinePatientDataSyncStore.md)\>

#### Defined in

[packages/framework/esm-offline/src/offline-patient-data.ts:39](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/offline-patient-data.ts#L39)

___

### getSynchronizationItem

▸ **getSynchronizationItem**<`T`\>(`id`): `Promise`<[`SyncItem`](interfaces/SyncItem.md)<`T`\> \| `undefined`\>

Returns a queued sync item with the given ID or `undefined` if no such item exists.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The ID of the requested sync item. |

#### Returns

`Promise`<[`SyncItem`](interfaces/SyncItem.md)<`T`\> \| `undefined`\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:311](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L311)

___

### getSynchronizationItems

▸ **getSynchronizationItems**<`T`\>(`type?`): `Promise`<`T`[]\>

Returns the content of all currently queued up sync items of the currently signed in user.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | `string` | The identifying type of the synchronization items to be returned. |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:293](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L293)

___

### isOfflineUuid

▸ **isOfflineUuid**(`uuid`): `boolean`

Checks whether the given string has the format of an offline UUID generated by [generateOfflineUuid](API.md#generateofflineuuid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-offline/src/uuid.ts:12](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/uuid.ts#L12)

___

### messageOmrsServiceWorker

▸ **messageOmrsServiceWorker**(`message`): `Promise`<[`MessageServiceWorkerResult`](interfaces/MessageServiceWorkerResult.md)<`any`\>\>

Sends the specified message to the application's service worker.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`KnownOmrsServiceWorkerMessages`](API.md#knownomrsserviceworkermessages) | The message to be sent. |

#### Returns

`Promise`<[`MessageServiceWorkerResult`](interfaces/MessageServiceWorkerResult.md)<`any`\>\>

A promise which completes when the message has been successfully processed by the Service Worker.

#### Defined in

[packages/framework/esm-offline/src/service-worker-messaging.ts:11](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-messaging.ts#L11)

___

### putDynamicOfflineData

▸ **putDynamicOfflineData**(`type`, `identifier`): `Promise`<`void`\>

Declares that dynamic offline data of the given [type](interfaces/FetchResponse.md#type) with the given [identifier](interfaces/FHIRResource.md#identifier)
should be made available offline for the currently logged in user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `identifier` | `string` | The identifier of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:157](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L157)

___

### putDynamicOfflineDataFor

▸ **putDynamicOfflineDataFor**(`userId`, `type`, `identifier`): `Promise`<`void`\>

Declares that dynamic offline data of the given [type](interfaces/FetchResponse.md#type) with the given [identifier](interfaces/FHIRResource.md#identifier)
should be made available offline for the user with the given ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | The ID of the user for whom the dynamic offline data should be made available. |
| `type` | `string` | The type of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `identifier` | `string` | The identifier of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:169](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L169)

___

### queueSynchronizationItem

▸ **queueSynchronizationItem**<`T`\>(`type`, `content`, `descriptor?`): `Promise`<`number`\>

Enqueues a new item in the sync queue and associates the item with the currently signed in user.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The identifying type of the synchronization item. |
| `content` | `T` | The actual data to be synchronized. |
| `descriptor?` | [`QueueItemDescriptor`](interfaces/QueueItemDescriptor.md) | An optional descriptor providing additional metadata about the sync item. |

#### Returns

`Promise`<`number`\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:261](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L261)

___

### registerOfflinePatientHandler

▸ **registerOfflinePatientHandler**(`identifier`, `handler`): `void`

**`deprecated`** Will be removed once all modules have been migrated to the new dynamic offline data API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |
| `handler` | [`OfflinePatientDataSyncHandler`](interfaces/OfflinePatientDataSyncHandler.md) |

#### Returns

`void`

#### Defined in

[packages/framework/esm-offline/src/offline-patient-data.ts:45](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/offline-patient-data.ts#L45)

___

### removeDynamicOfflineData

▸ **removeDynamicOfflineData**(`type`, `identifier`): `Promise`<`void`\>

Declares that dynamic offline data of the given [type](interfaces/FetchResponse.md#type) with the given [identifier](interfaces/FHIRResource.md#identifier)
no longer needs to be available offline for the currently logged in user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `identifier` | `string` | The identifier of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:201](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L201)

___

### removeDynamicOfflineDataFor

▸ **removeDynamicOfflineDataFor**(`userId`, `type`, `identifier`): `Promise`<`void`\>

Declares that dynamic offline data of the given [type](interfaces/FetchResponse.md#type) with the given [identifier](interfaces/FHIRResource.md#identifier)
no longer needs to be available offline for the user with the given ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | The ID of the user who doesn't require the specified offline data. |
| `type` | `string` | The type of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `identifier` | `string` | The identifier of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:213](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L213)

___

### setupDynamicOfflineDataHandler

▸ **setupDynamicOfflineDataHandler**(`handler`): `void`

Sets up a handler for synchronizing dynamic offline data.
See [DynamicOfflineDataHandler](interfaces/DynamicOfflineDataHandler.md) for details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`DynamicOfflineDataHandler`](interfaces/DynamicOfflineDataHandler.md) | The handler to be setup. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:113](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L113)

___

### setupOfflineSync

▸ **setupOfflineSync**<`T`\>(`type`, `dependsOn`, `process`, `options?`): `void`

Registers a new synchronization handler which is able to synchronize data of a specific type.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The identifying type of the synchronization items which can be handled by this handler. |
| `dependsOn` | `string`[] | An array of other sync item types which must be synchronized before this handler   can synchronize its own data. Items of these types are effectively dependencies of the data   synchronized by this handler. |
| `process` | `ProcessSyncItem`<`T`\> | A function which, when invoked, performs the actual client-server synchronization of the given   `item` (which is the actual data to be synchronized). |
| `options` | `SetupOfflineSyncOptions`<`T`\> | Additional options which can optionally be provided when setting up a synchronization callback   for a specific synchronization item type. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-offline/src/sync.ts:365](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L365)

___

### subscribeConnectivity

▸ **subscribeConnectivity**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`ev`: [`ConnectivityChangedEvent`](interfaces/ConnectivityChangedEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-globals/src/events.ts:19](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/events.ts#L19)

___

### subscribeConnectivityChanged

▸ **subscribeConnectivityChanged**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`ev`: [`ConnectivityChangedEvent`](interfaces/ConnectivityChangedEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-globals/src/events.ts:12](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/events.ts#L12)

___

### subscribePrecacheStaticDependencies

▸ **subscribePrecacheStaticDependencies**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: [`PrecacheStaticDependenciesEvent`](interfaces/PrecacheStaticDependenciesEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-globals/src/events.ts:33](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/events.ts#L33)

___

### syncAllDynamicOfflineData

▸ **syncAllDynamicOfflineData**(`type`, `abortSignal?`): `Promise`<`void`\>

Synchronizes all offline data entries of the given [type](interfaces/FetchResponse.md#type) for the currently logged in user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `abortSignal?` | `AbortSignal` | An {@link AbortSignal} which can be used to cancel the operation. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:241](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L241)

___

### syncDynamicOfflineData

▸ **syncDynamicOfflineData**(`type`, `identifier`, `abortSignal?`): `Promise`<`void`\>

Synchronizes a single offline data entry of the given [type](interfaces/FetchResponse.md#type) for the currently logged in user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `identifier` | `string` | The identifier of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `abortSignal?` | `AbortSignal` | An {@link AbortSignal} which can be used to cancel the operation. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:254](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L254)

___

### syncOfflinePatientData

▸ **syncOfflinePatientData**(`patientUuid`): `Promise`<`void`\>

**`deprecated`** Will be removed once all modules have been migrated to the new dynamic offline data API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/offline-patient-data.ts:62](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/offline-patient-data.ts#L62)

___

### useConnectivity

▸ **useConnectivity**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-react-utils/src/useConnectivity.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useConnectivity.ts#L5)

___

## Store Functions

### createGlobalStore

▸ **createGlobalStore**<`T`\>(`name`, `initialState`): `StoreApi`<`T`\>

Creates a Zustand store.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | A name by which the store can be looked up later.    Must be unique across the entire application. |
| `initialState` | `T` | An object which will be the initial state of the store. |

#### Returns

`StoreApi`<`T`\>

The newly created store.

#### Defined in

[packages/framework/esm-state/src/state.ts:29](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-state/src/state.ts#L29)

___

### createUseStore

▸ **createUseStore**<`T`\>(`store`): () => `T`(`actions`: [`Actions`](API.md#actions)<`T`\>) => `T` & [`BoundActions`](API.md#boundactions)(`actions?`: [`Actions`](API.md#actions)<`T`\>) => `T` & [`BoundActions`](API.md#boundactions)

Whenever possible, use `useStore(yourStore)` instead. This function is for creating a
custom hook for a specific store.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |

#### Returns

`fn`

▸ (): `T`

##### Returns

`T`

▸ (`actions`): `T` & [`BoundActions`](API.md#boundactions)

##### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | [`Actions`](API.md#actions)<`T`\> |

##### Returns

`T` & [`BoundActions`](API.md#boundactions)

▸ (`actions?`): `T` & [`BoundActions`](API.md#boundactions)

##### Parameters

| Name | Type |
| :------ | :------ |
| `actions?` | [`Actions`](API.md#actions)<`T`\> |

##### Returns

`T` & [`BoundActions`](API.md#boundactions)

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:60](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L60)

___

### getGlobalStore

▸ **getGlobalStore**<`T`\>(`name`, `fallbackState?`): `StoreApi`<`T`\>

Returns the existing store named `name`,
or creates a new store named `name` if none exists.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the store to look up. |
| `fallbackState?` | `T` | The initial value of the new store if no store named `name` exists. |

#### Returns

`StoreApi`<`T`\>

The found or newly created store.

#### Defined in

[packages/framework/esm-state/src/state.ts:91](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-state/src/state.ts#L91)

___

### subscribeTo

▸ **subscribeTo**<`T`, `U`\>(`store`, `select`, `handle`): () => `void`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |
| `select` | (`state`: `T`) => `U` |
| `handle` | (`subState`: `U`) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-state/src/state.ts:106](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-state/src/state.ts#L106)

___

### useStore

▸ **useStore**<`T`, `U`\>(`store`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |

#### Returns

`T`

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:33](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L33)

▸ **useStore**<`T`, `U`\>(`store`, `select`): `U`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |
| `select` | (`state`: `T`) => `U` |

#### Returns

`U`

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:34](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L34)

▸ **useStore**<`T`, `U`\>(`store`, `select`, `actions`): `T` & [`BoundActions`](API.md#boundactions)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |
| `select` | `undefined` |
| `actions` | [`Actions`](API.md#actions)<`T`\> |

#### Returns

`T` & [`BoundActions`](API.md#boundactions)

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:35](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L35)

▸ **useStore**<`T`, `U`\>(`store`, `select`, `actions`): `U` & [`BoundActions`](API.md#boundactions)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |
| `select` | (`state`: `T`) => `U` |
| `actions` | [`Actions`](API.md#actions)<`T`\> |

#### Returns

`U` & [`BoundActions`](API.md#boundactions)

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:36](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L36)

___

### useStoreWithActions

▸ **useStoreWithActions**<`T`\>(`store`, `actions`): `T` & [`BoundActions`](API.md#boundactions)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `store` | `StoreApi`<`T`\> | A zustand store |
| `actions` | [`Actions`](API.md#actions)<`T`\> |  |

#### Returns

`T` & [`BoundActions`](API.md#boundactions)

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:52](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L52)

___

## Translation Functions

### getCoreTranslation

▸ **getCoreTranslation**(`key`, `defaultText?`, `options?`): `string`

Use this function to obtain a translation from the core translations. This is a way to avoid having
to define common translations in your app, and to ensure that translations are consistent across
different apps. This function is also used to obtain translations in the framework and app shell.

The complete set of core translations is available on the `CoreTranslationKey` type. Providing an
invalid key to this function will result in a type error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | ``"error"`` \| ``"change"`` \| ``"close"`` \| ``"other"`` \| ``"actions"`` \| ``"address"`` \| ``"cancel"`` \| ``"confirm"`` \| ``"contactDetails"`` \| ``"errorCopy"`` \| ``"female"`` \| ``"hideDetails"`` \| ``"loading"`` \| ``"male"`` \| ``"patientLists"`` \| ``"relationships"`` \| ``"seeMoreLists"`` \| ``"showDetails"`` \| ``"unknown"`` \| ``"closeAllOpenedWorkspaces"`` \| ``"closingAllWorkspacesPromptBody"`` \| ``"closingAllWorkspacesPromptTitle"`` \| ``"discard"`` \| ``"hide"`` \| ``"maximize"`` \| ``"minimize"`` \| ``"openAnyway"`` \| ``"unsavedChangesInOpenedWorkspace"`` \| ``"unsavedChangesInWorkspace"`` \| ``"unsavedChangesTitleText"`` \| ``"workspaceHeader"`` \| ``"address1"`` \| ``"address2"`` \| ``"city"`` \| ``"cityVillage"`` \| ``"country"`` \| ``"countyDistrict"`` \| ``"postalCode"`` \| ``"state"`` \| ``"stateProvince"`` | - |
| `defaultText?` | `string` | - |
| `options?` | `object` | Object passed to the i18next `t` function. See https://www.i18next.com/translation-function/essentials#overview-options           for more information. `ns` and `defaultValue` are already set and may not be used. |

#### Returns

`string`

#### Defined in

[packages/framework/esm-translations/src/index.ts:60](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-translations/src/index.ts#L60)

___

### translateFrom

▸ **translateFrom**(`moduleName`, `key`, `fallback?`, `options?`): `string`

This function is for getting a translation from a specific module. Use this only if the
translation is neither in the app making the call, nor in the core translations.
This function is useful, for example, in libraries that are used by multiple apps, since libraries can't
define their own translations.

Translations within the current app should be accessed with the i18next API, using
`useTranslation` and `t` as usual. Core translations should be accessed with the
[getCoreTranslation](API.md#getcoretranslation) function.

IMPORTANT: This function creates a hidden dependency on the module. Worse yet, it creates
a dependency specifically on that module's translation keys, which are often regarded as
"implementation details" and therefore may be volatile.
**This function should therefore be avoided when possible.**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | `string` | The module to get the translation from, e.g. '@openmrs/esm-login-app' |
| `key` | `string` | The i18next translation key |
| `fallback?` | `string` | Fallback text for if the lookup fails |
| `options?` | `object` | Options object passed to the i18next `t` function. See https://www.i18next.com/translation-function/essentials#overview-options            for more information. `ns` and `defaultValue` are already set and may not be used. |

#### Returns

`string`

The translated text as a string

#### Defined in

[packages/framework/esm-translations/src/index.ts:39](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-translations/src/index.ts#L39)

___

## UI Functions

### CustomOverflowMenu

▸ **CustomOverflowMenu**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `CustomOverflowMenuProps` |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/custom-overflow-menu/custom-overflow-menu.component.tsx:13](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/custom-overflow-menu/custom-overflow-menu.component.tsx#L13)

___

### PatientBannerActionsMenu

▸ **PatientBannerActionsMenu**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`PatientBannerActionsMenuProps`](interfaces/PatientBannerActionsMenuProps.md) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/patient-banner/actions-menu/patient-banner-actions-menu.component.tsx:20](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-banner/actions-menu/patient-banner-actions-menu.component.tsx#L20)

___

### PatientBannerContactDetails

▸ **PatientBannerContactDetails**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `ContactDetailsProps` |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/patient-banner/contact-details/patient-banner-contact-details.component.tsx:177](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-banner/contact-details/patient-banner-contact-details.component.tsx#L177)

___

### PatientBannerPatientInfo

▸ **PatientBannerPatientInfo**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`PatientBannerPatientInfoProps`](interfaces/PatientBannerPatientInfoProps.md) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/patient-banner/patient-info/patient-banner-patient-info.component.tsx:14](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-banner/patient-info/patient-banner-patient-info.component.tsx#L14)

___

### PatientBannerToggleContactDetailsButton

▸ **PatientBannerToggleContactDetailsButton**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`PatientBannerToggleContactDetailsButtonProps`](interfaces/PatientBannerToggleContactDetailsButtonProps.md) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/patient-banner/contact-details/patient-banner-toggle-contact-details-button.component.tsx:16](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-banner/contact-details/patient-banner-toggle-contact-details-button.component.tsx#L16)

___

### PatientPhoto

▸ **PatientPhoto**(`__namedParameters`): `Element`

A component which displays the patient photo. If there is no photo, it will display
a generated avatar. The default size is 80px. Set the size prop to 'small' to display
a 48px avatar.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`PatientPhotoProps`](interfaces/PatientPhotoProps.md) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/patient-photo/patient-photo.component.tsx:18](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-photo/patient-photo.component.tsx#L18)

___

### isDesktop

▸ **isDesktop**(`layout`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`LayoutType`](API.md#layouttype) |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-react-utils/src/useLayoutType.ts:40](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useLayoutType.ts#L40)

___

### setLeftNav

▸ **setLeftNav**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/left-nav/index.tsx:19](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/left-nav/index.tsx#L19)

___

### showActionableNotification

▸ **showActionableNotification**(`notification`): `void`

Displays an actionable notification in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notification` | [`ActionableNotificationDescriptor`](interfaces/ActionableNotificationDescriptor.md) | The description of the notification to display. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/notifications/index.tsx:85](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/notifications/index.tsx#L85)

___

### showModal

▸ **showModal**(`modalName`, `props?`, `onClose?`): () => `void`

Shows a modal dialog.

The modal must have been registered by name. This should be done in the `routes.json` file of the
app that defines the modal. Note that both the `<ModalHeader>` and `<ModalBody>` should be at the
top level of the modal component (wrapped in a React.Fragment), or else the content of the modal
body might not vertical-scroll properly.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modalName` | `string` | The name of the modal to show. |
| `props` | `Record`<`string`, `any`\> | The optional props to provide to the modal. |
| `onClose` | () => `void` | The optional callback to call when the modal is closed. |

#### Returns

`fn`

The dispose function to force closing the modal dialog.

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/modals/index.tsx:208](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/modals/index.tsx#L208)

___

### showNotification

▸ **showNotification**(`notification`): `void`

Displays an inline notification in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notification` | [`NotificationDescriptor`](interfaces/NotificationDescriptor.md) | The description of the notification to display. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/notifications/index.tsx:43](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/notifications/index.tsx#L43)

___

### showSnackbar

▸ **showSnackbar**(`snackbar`): `void`

Displays a snack bar notification in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `snackbar` | [`SnackbarDescriptor`](interfaces/SnackbarDescriptor.md) | The description of the snack bar to display. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/snackbars/index.tsx:32](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/snackbars/index.tsx#L32)

___

### showToast

▸ **showToast**(`toast`): `void`

Displays a toast notification in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toast` | [`ToastDescriptor`](interfaces/ToastDescriptor.md) | The description of the toast to display. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/toasts/index.tsx:36](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/toasts/index.tsx#L36)

___

### subscribeActionableNotificationShown

▸ **subscribeActionableNotificationShown**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: [`ShowActionableNotificationEvent`](interfaces/ShowActionableNotificationEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-globals/src/events.ts:107](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/events.ts#L107)

___

### subscribeNotificationShown

▸ **subscribeNotificationShown**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: [`ShowNotificationEvent`](interfaces/ShowNotificationEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-globals/src/events.ts:100](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/events.ts#L100)

___

### subscribeSnackbarShown

▸ **subscribeSnackbarShown**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: [`ShowSnackbarEvent`](interfaces/ShowSnackbarEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-globals/src/events.ts:121](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/events.ts#L121)

___

### subscribeToastShown

▸ **subscribeToastShown**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: [`ShowToastEvent`](interfaces/ShowToastEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-globals/src/events.ts:114](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/events.ts#L114)

___

### unsetLeftNav

▸ **unsetLeftNav**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/left-nav/index.tsx:23](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/left-nav/index.tsx#L23)

___

### useBodyScrollLock

▸ **useBodyScrollLock**(`active`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-react-utils/src/useBodyScrollLock.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useBodyScrollLock.ts#L4)

___

### useLayoutType

▸ **useLayoutType**(): [`LayoutType`](API.md#layouttype)

#### Returns

[`LayoutType`](API.md#layouttype)

#### Defined in

[packages/framework/esm-react-utils/src/useLayoutType.ts:26](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useLayoutType.ts#L26)

___

### useOnClickOutside

▸ **useOnClickOutside**<`T`\>(`handler`, `active?`): `RefObject`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement`<`T`\> = `HTMLElement` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `handler` | (`event`: `MouseEvent`) => `void` | `undefined` |
| `active` | `boolean` | `true` |

#### Returns

`RefObject`<`T`\>

#### Defined in

[packages/framework/esm-react-utils/src/useOnClickOutside.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOnClickOutside.ts#L4)

___

### usePagination

▸ **usePagination**<`T`\>(`data?`, `resultsPerPage?`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `T`[] | `[]` |
| `resultsPerPage` | `number` | `defaultResultsPerPage` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `currentPage` | `number` |
| `goTo` | (`page`: `number`) => `void` |
| `goToNext` | () => `void` |
| `goToPrevious` | () => `void` |
| `paginated` | `boolean` |
| `results` | `T`[] |
| `showNextButton` | `boolean` |
| `showPreviousButton` | `boolean` |
| `totalPages` | `number` |

#### Defined in

[packages/framework/esm-react-utils/src/usePagination.ts:6](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/usePagination.ts#L6)

___

### usePatientPhoto

▸ **usePatientPhoto**(`patientUuid`): [`UsePatientPhotoResult`](interfaces/UsePatientPhotoResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |

#### Returns

[`UsePatientPhotoResult`](interfaces/UsePatientPhotoResult.md)

#### Defined in

[packages/framework/esm-styleguide/src/patient-photo/usePatientPhoto.ts:30](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-photo/usePatientPhoto.ts#L30)

___

## Utility Functions

### age

▸ **age**(`dateString`): `string`

Gets a human readable and locale supported age represention of the provided date string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateString` | `string` | The stringified date. |

#### Returns

`string`

A human-readable string version of the age.

#### Defined in

[packages/framework/esm-utils/src/age-helpers.ts:36](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/age-helpers.ts#L36)

___

### canAccessStorage

▸ **canAccessStorage**(`storage?`): `boolean`

Simple utility function to determine if an object implementing the WebStorage API
is actually available. Useful for testing the availability of `localStorage` or
`sessionStorage`.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `storage` | `Storage` | `window.localStorage` | The WebStorage API object to check. Defaults to `localStorage`. |

#### Returns

`boolean`

True if the WebStorage API object is able to be accessed, false otherwise

#### Defined in

[packages/framework/esm-utils/src/storage.ts:11](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/storage.ts#L11)

___

### daysIntoYear

▸ **daysIntoYear**(`date`): `number`

Gets the number of days in the year of the given date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | The date to compute the days within the year. |

#### Returns

`number`

The number of days.

#### Defined in

[packages/framework/esm-utils/src/age-helpers.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/age-helpers.ts#L9)

___

### getDefaultsFromConfigSchema

▸ **getDefaultsFromConfigSchema**(`schema`): `Object`

Given a config schema, this returns an object like is returned by `useConfig`
with all default values.

This should be used in tests and not in production code.

If all you need is the default values in your tests, these are returned by
default from the `useConfig`/`getConfig` mock. This function is useful if you
need to override some of the default values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `any` |

#### Returns

`Object`

#### Defined in

[packages/framework/esm-utils/src/test-helpers.ts:13](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/test-helpers.ts#L13)

___

### isSameDay

▸ **isSameDay**(`firstDate`, `secondDate`): `boolean`

Checks if two dates are representing the same day.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `firstDate` | `Date` | The first date. |
| `secondDate` | `Date` | The second date. |

#### Returns

`boolean`

True if both are located on the same day.

#### Defined in

[packages/framework/esm-utils/src/age-helpers.ts:25](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/age-helpers.ts#L25)

___

### isVersionSatisfied

▸ **isVersionSatisfied**(`requiredVersion`, `installedVersion`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `requiredVersion` | `string` |
| `installedVersion` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-utils/src/version.ts:22](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/version.ts#L22)

___

### retry

▸ **retry**<`T`\>(`fn`, `options?`): `Promise`<`T`\>

Executes the specified function and retries executing on failure with a custom backoff strategy
defined by the options.

If not configured otherwise, this function uses the following default options:
* Retries 5 times beyond the initial attempt.
* Uses an exponential backoff starting with an initial delay of 1000ms.

**`throws`** Rethrows the final error of running `fn` when the function stops retrying.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `Promise`<`T`\> | The function to be executed and retried on failure. |
| `options` | [`RetryOptions`](interfaces/RetryOptions.md) | Additional options which configure the retry behavior. |

#### Returns

`Promise`<`T`\>

The result of successfully executing `fn`.

#### Defined in

[packages/framework/esm-utils/src/retry.ts:40](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/retry.ts#L40)

___

### shallowEqual

▸ **shallowEqual**(`a`, `b`): `boolean`

Checks whether two objects are equal, using a shallow comparison, similar to React.

In essence, shallowEquals ensures two objects have the same own properties and that the values
of these are equal (===) to each other.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `unknown` | The first value to compare |
| `b` | `unknown` | The second value to compare |

#### Returns

`boolean`

true if the objects are shallowly equal to each other

#### Defined in

[packages/framework/esm-utils/src/shallowEqual.ts:13](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-utils/src/shallowEqual.ts#L13)

___

### useAbortController

▸ **useAbortController**(): `AbortController`

**`beta`**

This hook creates an AbortController that lasts either until the previous AbortController
is aborted or until the component unmounts. This can be used to ensure that all fetch requests
are cancelled when a component is unmounted.

**`example`**
```tsx
import { useAbortController } from "@openmrs/esm-framework";

function MyComponent() {
 const abortController = useAbortController();
 const { data } = useSWR(key, (key) => openmrsFetch(key, { signal: abortController.signal }));

 return (
   // render something with data
 );
}
```

#### Returns

`AbortController`

#### Defined in

[packages/framework/esm-react-utils/src/useAbortController.ts:25](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useAbortController.ts#L25)

___

### useDebounce

▸ **useDebounce**<`T`\>(`value`, `delay?`): `T`

This hook debounces a state variable. That state variable can then be used as the
value of a controlled input, while the return value of this hook is used for making
a request.

**`example`**
```tsx
import { useDebounce } from "@openmrs/esm-framework";

function MyComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm);
  const swrResult = useSWR(`/api/search?q=${debouncedSearchTerm}`)

 return (
   <Search
     labelText={t('search', 'Search')}
     onChange={(e) => setSearchTerm(e.target.value)}
     value={searchTerm}
   />
 )
}
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `T` | `undefined` | The value that will be used to set `debounceValue` |
| `delay` | `number` | `300` | The number of milliseconds to wait before updating `debounceValue` |

#### Returns

`T`

The debounced value

#### Defined in

[packages/framework/esm-react-utils/src/useDebounce.ts:32](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useDebounce.ts#L32)

___

### useOpenmrsSWR

▸ **useOpenmrsSWR**<`DataType`, `ErrorType`\>(`key`, `options?`): `SWRResponse`<[`FetchResponse`](interfaces/FetchResponse.md)<`DataType`\>, `ErrorType`, `undefined` \| `Partial`<`PublicConfiguration`<[`FetchResponse`](interfaces/FetchResponse.md)<`DataType`\>, `ErrorType`, `BareFetcher`<[`FetchResponse`](interfaces/FetchResponse.md)<`DataType`\>\>\>\>\>

**`beta`**

This hook is intended to simplify using openmrsFetch in useSWR, while also ensuring that
all useSWR usages properly use an abort controller, so that fetch requests are cancelled
if the React component unmounts.

**`example`**
```tsx
import { useOpenmrsSWR } from "@openmrs/esm-framework";

function MyComponent() {
 const { data } = useOpenmrsSWR(key);

 return (
   // render something with data
 );
}
```

Note that if you are using a complex SWR key you must provide a url function to the options parameter,
which translates the key into a URL to be sent to `openmrsFetch()`

**`example`**
```tsx
import { useOpenmrsSWR } from "@openmrs/esm-framework";

function MyComponent() {
 const { data } = useOpenmrsSWR(['key', 'url'], { url: (key) => key[1] });

 return (
   // render something with data
 );
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DataType` | `any` |
| `ErrorType` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Key`](API.md#key) | The SWR key to use |
| `options` | [`UseOpenmrsSWROptions`](API.md#useopenmrsswroptions) | An object of optional parameters to provide, including a [FetchConfig](interfaces/FetchConfig.md) object   to pass to [openmrsFetch](API.md#openmrsfetch) or options to pass to SWR |

#### Returns

`SWRResponse`<[`FetchResponse`](interfaces/FetchResponse.md)<`DataType`\>, `ErrorType`, `undefined` \| `Partial`<`PublicConfiguration`<[`FetchResponse`](interfaces/FetchResponse.md)<`DataType`\>, `ErrorType`, `BareFetcher`<[`FetchResponse`](interfaces/FetchResponse.md)<`DataType`\>\>\>\>\>

#### Defined in

[packages/framework/esm-react-utils/src/useOpenmrsSWR.ts:70](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOpenmrsSWR.ts#L70)

___

## Workspace Functions

### ActionMenu

▸ **ActionMenu**(): ``null`` \| `Element`

This renders the [Siderail and Bottom Nav](https://zeroheight.com/23a080e38/p/948cf1-siderail-and-bottom-nav/b/86907e),
collectively known as the Action Menu. The Siderail is rendered on the right side of the screen
on desktop, and the Bottom Nav is rendered at the bottom of the screen on tablet or mobile.

The action menu provides an extension slot, to which buttons are attached as extensions. The slot
derives its name from the `featureName` of the top-level component in which this `ActionMenu`
appears (feature names are generally provided in the lifecycle functions in an app's `index.ts` file).
The slot is named `action-menu-${featureName}-items-slot`. For the patient chart, this is
`action-menu-patient-chart-items-slot`.

#### Returns

``null`` \| `Element`

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/action-menu/action-menu.component.tsx:19](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/action-menu/action-menu.component.tsx#L19)

___

### WorkspaceOverlay

▸ **WorkspaceOverlay**(`__namedParameters`): `Element`

Use this component to render the workspace window as an overlay in an app. An overlay is
a way of rendering workspaces that will cover other content on the screen, rather than
pushing it to the left (as with [WorkspaceWindow](API.md#workspacewindow)). As described in the
[ZeroHeight](https://zeroheight.com/23a080e38/p/483a22-workspace/t/34e1a1) documentation,
this should be used on "app pages" such as the Clinic Dashboard.

The context key is a string that appears in the URL, which defines the pages on which workspaces
are valid. If the URL changes in a way such that it no longer contains the context key, then
all workspaces will be closed. This ensures that, for example, workspaces on the home page do
not stay open when the user transitions to the patient dashboard; and also that workspaces do
not stay open when the user navigates to a different patient. The context key must be a valid
sub-path of the URL, with no initial or trailing slash. So if the URL is
`https://example.com/patient/123/foo`, then `patient` and `patient/123` and `123/foo` are valid
context keys, but `patient/12` and `pati` are not.

Workspaces may be opened with the [launchWorkspace](API.md#launchworkspace) function from `@openmrs/esm-framework`
(among other options).

This component also provides everything needed for workspace notifications to be rendered.

This component does not include the action menu (the right siderail). The [ActionMenu](API.md#actionmenu) component
is provided separately.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`WorkspaceOverlayProps`](interfaces/WorkspaceOverlayProps.md) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/overlay/workspace-overlay.component.tsx:45](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/overlay/workspace-overlay.component.tsx#L45)

___

### WorkspaceWindow

▸ **WorkspaceWindow**(`__namedParameters`): `Element`

Use this component to render the [workspace window](https://zeroheight.com/23a080e38/p/483a22-workspace)
in an app such as the patient chart.
When a workspace is opened, the other content on the screen will be pushed to the left.

The context key is a string that appears in the URL, which defines the pages on which workspaces
are valid. If the URL changes in a way such that it no longer contains the context key, then
all workspaces will be closed. This ensures that, for example, workspaces on the home page do
not stay open when the user transitions to the patient dashboard; and also that workspaces do
not stay open when the user navigates to a different patient. The context key must be a valid
sub-path of the URL, with no initial or trailing slash. So if the URL is
`https://example.com/patient/123/foo`, then `patient` and `patient/123` and `123/foo` are valid
context keys, but `patient/12` and `pati` are not.

Workspaces may be opened with the [launchWorkspace](API.md#launchworkspace) function from `@openmrs/esm-framework`
(among other options).

This component also provides everything needed for workspace notifications to be rendered.

This component does not include the action menu (the right siderail). The [ActionMenu](API.md#actionmenu) component
is provided separately.

An extension slot is provided in the workspace header. Its name is derived from the `featureName` of
the top-level component in which it is defined (feature names are generally provided in the lifecycle
functions in an app's `index.ts` file). The slot is named `workspace-header-${featureName}-slot`.
For the patient chart, this is `workspace-header-patient-chart-slot`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`WorkspaceWindowProps`](interfaces/WorkspaceWindowProps.md) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/window/workspace-window.component.tsx:47](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/window/workspace-window.component.tsx#L47)

___

### closeWorkspace

▸ **closeWorkspace**(`name`, `options?`): `boolean`

Function to close an opened workspace

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Workspace registration name |
| `options` | [`CloseWorkspaceOptions`](interfaces/CloseWorkspaceOptions.md) | Options to close workspace |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/workspaces.ts:298](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/workspaces.ts#L298)

___

### launchWorkspace

▸ **launchWorkspace**(`name`, `additionalProps?`): `void`

This launches a workspace by its name. The workspace must have been registered.
Workspaces should be registered in the `routes.json` file.

For the workspace to appear, there must be either a `<WorkspaceOverlay />` or
a `<WorkspaceWindow />` component rendered.

The behavior of this function is as follows:

- If no workspaces are open, or if no other workspaces with the same type are open,
  it will be opened and focused.
- If a workspace with the same name is already open, it will be displayed/focused,
  if it was not already.
- If a workspace is launched and a workspace which cannot be hidden is already open,
 a confirmation modal will pop up warning about closing the currently open workspace.
- If another workspace with the same type is open, the workspace will be brought to
  the front and then a confirmation modal will pop up warning about closing the opened
  workspace

Note that this function just manipulates the workspace store. The UI logic is handled
by the components that display workspaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the workspace to launch |
| `additionalProps?` | `object` | Props to pass to the workspace component being launched |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/workspaces.ts:200](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/workspaces.ts#L200)

___

### navigateAndLaunchWorkspace

▸ **navigateAndLaunchWorkspace**(`__namedParameters`): `void`

Use this function to navigate to a new page and launch a workspace on that page.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.additionalProps?` | `object` |
| `__namedParameters.contextKey` | `string` |
| `__namedParameters.targetUrl` | `string` |
| `__namedParameters.workspaceName` | `string` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/workspaces.ts:261](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/workspaces.ts#L261)

___

### useWorkspaces

▸ **useWorkspaces**(): [`WorkspacesInfo`](interfaces/WorkspacesInfo.md)

#### Returns

[`WorkspacesInfo`](interfaces/WorkspacesInfo.md)

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/workspaces.ts:400](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/workspaces.ts#L400)
