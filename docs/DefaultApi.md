# MobieveSdkJs.DefaultApi

All URIs are relative to *https://0lp2wd09yb.execute-api.sa-east-1.amazonaws.com/ngrok*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPermission**](DefaultApi.md#createPermission) | **POST** /permissions | 
[**deletePermission**](DefaultApi.md#deletePermission) | **DELETE** /permissions/{id} | 


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

let apiInstance = new MobieveSdkJs.DefaultApi();
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

let apiInstance = new MobieveSdkJs.DefaultApi();
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

