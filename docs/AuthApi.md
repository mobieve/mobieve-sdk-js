# MobieveSdkJs.AuthApi

All URIs are relative to *https://0lp2wd09yb.execute-api.sa-east-1.amazonaws.com/ngrok*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApi**](AuthApi.md#createApi) | **POST** /apis | 
[**createClient**](AuthApi.md#createClient) | **POST** /clients | 
[**createPermission**](AuthApi.md#createPermission) | **POST** /permissions | 
[**createRole**](AuthApi.md#createRole) | **POST** /roles | 
[**createRoleUser**](AuthApi.md#createRoleUser) | **POST** /role-users | 
[**createTeam**](AuthApi.md#createTeam) | **POST** /teams | 
[**createTeamUser**](AuthApi.md#createTeamUser) | **POST** /team-users | 
[**deletePermission**](AuthApi.md#deletePermission) | **DELETE** /permissions/{id} | 
[**deleteRoleUser**](AuthApi.md#deleteRoleUser) | **DELETE** /role-users | 
[**deleteTeam**](AuthApi.md#deleteTeam) | **DELETE** /teams/{id} | 
[**deleteTeamUser**](AuthApi.md#deleteTeamUser) | **DELETE** /team-users | 
[**getApi**](AuthApi.md#getApi) | **GET** /apis/{id} | 
[**getApis**](AuthApi.md#getApis) | **GET** /apis | 
[**getClients**](AuthApi.md#getClients) | **GET** /clients | 
[**getPermissions**](AuthApi.md#getPermissions) | **GET** /permissions | 
[**getRole**](AuthApi.md#getRole) | **GET** /roles/{id} | 
[**getRoles**](AuthApi.md#getRoles) | **GET** /roles | 
[**getTeam**](AuthApi.md#getTeam) | **GET** /teams/{id} | 
[**getTeams**](AuthApi.md#getTeams) | **GET** /teams | 
[**getUser**](AuthApi.md#getUser) | **GET** /users/{id} | 
[**getUsers**](AuthApi.md#getUsers) | **GET** /users | 
[**login**](AuthApi.md#login) | **POST** /login | 
[**logout**](AuthApi.md#logout) | **POST** /logout | 
[**updateApi**](AuthApi.md#updateApi) | **POST** /apis/{id} | 
[**updateClient**](AuthApi.md#updateClient) | **PUT** /clients/{id} | 
[**updateRole**](AuthApi.md#updateRole) | **POST** /roles/{id} | 
[**updateTeam**](AuthApi.md#updateTeam) | **POST** /teams/{id} | 
[**updateUser**](AuthApi.md#updateUser) | **POST** /users/{id} | 


<a name="createApi"></a>
# **createApi**
> Api createApi(api)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let api = new MobieveSdkJs.Api(); // Api | 
apiInstance.createApi(api).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api** | [**Api**](Api.md)|  | 

### Return type

[**Api**](Api.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClient"></a>
# **createClient**
> Client createClient(client)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let client = new MobieveSdkJs.Client(); // Client | 
apiInstance.createClient(client).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | [**Client**](Client.md)|  | 

### Return type

[**Client**](Client.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPermission"></a>
# **createPermission**
> Permission createPermission(permission)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let permission = new MobieveSdkJs.Permission(); // Permission | 
apiInstance.createPermission(permission).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permission** | [**Permission**](Permission.md)|  | 

### Return type

[**Permission**](Permission.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRole"></a>
# **createRole**
> Role createRole(role)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let role = new MobieveSdkJs.Role(); // Role | 
apiInstance.createRole(role).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | [**Role**](Role.md)|  | 

### Return type

[**Role**](Role.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRoleUser"></a>
# **createRoleUser**
> Empty createRoleUser(roleUser)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let roleUser = new MobieveSdkJs.RoleUser(); // RoleUser | 
apiInstance.createRoleUser(roleUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleUser** | [**RoleUser**](RoleUser.md)|  | 

### Return type

[**Empty**](Empty.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTeam"></a>
# **createTeam**
> Team createTeam(team)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let team = new MobieveSdkJs.Team(); // Team | 
apiInstance.createTeam(team).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | [**Team**](Team.md)|  | 

### Return type

[**Team**](Team.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTeamUser"></a>
# **createTeamUser**
> Empty createTeamUser(teamUser)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let teamUser = new MobieveSdkJs.TeamUser(); // TeamUser | 
apiInstance.createTeamUser(teamUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamUser** | [**TeamUser**](TeamUser.md)|  | 

### Return type

[**Empty**](Empty.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePermission"></a>
# **deletePermission**
> Empty deletePermission(id)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let id = "id_example"; // String | 
apiInstance.deletePermission(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Empty**](Empty.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteRoleUser"></a>
# **deleteRoleUser**
> Empty deleteRoleUser(roleUser)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let roleUser = new MobieveSdkJs.RoleUser(); // RoleUser | 
apiInstance.deleteRoleUser(roleUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleUser** | [**RoleUser**](RoleUser.md)|  | 

### Return type

[**Empty**](Empty.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTeam"></a>
# **deleteTeam**
> Empty deleteTeam(id)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let id = "id_example"; // String | 
apiInstance.deleteTeam(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Empty**](Empty.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTeamUser"></a>
# **deleteTeamUser**
> Empty deleteTeamUser(teamUser)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let teamUser = new MobieveSdkJs.TeamUser(); // TeamUser | 
apiInstance.deleteTeamUser(teamUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamUser** | [**TeamUser**](TeamUser.md)|  | 

### Return type

[**Empty**](Empty.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApi"></a>
# **getApi**
> Api getApi(id)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let id = "id_example"; // String | 
apiInstance.getApi(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Api**](Api.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getApis"></a>
# **getApis**
> ArrayOfObjects getApis()



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
apiInstance.getApis().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ArrayOfObjects**](ArrayOfObjects.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getClients"></a>
# **getClients**
> Empty getClients()



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
apiInstance.getClients().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPermissions"></a>
# **getPermissions**
> ArrayOfObjects getPermissions()



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
apiInstance.getPermissions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ArrayOfObjects**](ArrayOfObjects.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRole"></a>
# **getRole**
> Role getRole(id)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let id = "id_example"; // String | 
apiInstance.getRole(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Role**](Role.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRoles"></a>
# **getRoles**
> ArrayOfObjects getRoles()



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
apiInstance.getRoles().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ArrayOfObjects**](ArrayOfObjects.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeam"></a>
# **getTeam**
> Team getTeam(id)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let id = "id_example"; // String | 
apiInstance.getTeam(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Team**](Team.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeams"></a>
# **getTeams**
> ArrayOfObjects getTeams()



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
apiInstance.getTeams().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ArrayOfObjects**](ArrayOfObjects.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> User getUser(id)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let id = "id_example"; // String | 
apiInstance.getUser(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> ArrayOfObjects getUsers()



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
apiInstance.getUsers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ArrayOfObjects**](ArrayOfObjects.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="login"></a>
# **login**
> Empty login()



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
apiInstance.login().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> Empty logout()



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
apiInstance.logout().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateApi"></a>
# **updateApi**
> Api updateApi(id, api)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let id = "id_example"; // String | 
let api = new MobieveSdkJs.Api(); // Api | 
apiInstance.updateApi(id, api).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **api** | [**Api**](Api.md)|  | 

### Return type

[**Api**](Api.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateClient"></a>
# **updateClient**
> Client updateClient(id, client)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let id = "id_example"; // String | 
let client = new MobieveSdkJs.Client(); // Client | 
apiInstance.updateClient(id, client).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **client** | [**Client**](Client.md)|  | 

### Return type

[**Client**](Client.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRole"></a>
# **updateRole**
> Role updateRole(id, role)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let id = "id_example"; // String | 
let role = new MobieveSdkJs.Role(); // Role | 
apiInstance.updateRole(id, role).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **role** | [**Role**](Role.md)|  | 

### Return type

[**Role**](Role.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTeam"></a>
# **updateTeam**
> Team updateTeam(id, team)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let id = "id_example"; // String | 
let team = new MobieveSdkJs.Team(); // Team | 
apiInstance.updateTeam(id, team).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **team** | [**Team**](Team.md)|  | 

### Return type

[**Team**](Team.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> User updateUser(id, user)



### Example
```javascript
import MobieveSdkJs from 'mobieve-sdk-js';
let defaultClient = MobieveSdkJs.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new MobieveSdkJs.AuthApi();
let id = "id_example"; // String | 
let user = new MobieveSdkJs.User(); // User | 
apiInstance.updateUser(id, user).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

