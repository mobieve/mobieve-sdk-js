/**
 * Mobieve Auth
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2019-12-11T20:25:45Z
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Api from './Model/Api';
import ArrayOfObjects from './Model/ArrayOfObjects';
import Client from './Model/Client';
import Empty from './Model/Empty';
import Permission from './Model/Permission';
import Role from './Model/Role';
import RoleUser from './Model/RoleUser';
import Team from './Model/Team';
import TeamUser from './Model/TeamUser';
import User from './Model/User';
import AuthApi from './Api/AuthApi';


/**
* ERROR_UNKNOWN.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MobieveSdkJs = require('index'); // See note below*.
* var xxxSvc = new MobieveSdkJs.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MobieveSdkJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MobieveSdkJs.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MobieveSdkJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Api model constructor.
     * @property {module:Model/Api}
     */
    Api,

    /**
     * The ArrayOfObjects model constructor.
     * @property {module:Model/ArrayOfObjects}
     */
    ArrayOfObjects,

    /**
     * The Client model constructor.
     * @property {module:Model/Client}
     */
    Client,

    /**
     * The Empty model constructor.
     * @property {module:Model/Empty}
     */
    Empty,

    /**
     * The Permission model constructor.
     * @property {module:Model/Permission}
     */
    Permission,

    /**
     * The Role model constructor.
     * @property {module:Model/Role}
     */
    Role,

    /**
     * The RoleUser model constructor.
     * @property {module:Model/RoleUser}
     */
    RoleUser,

    /**
     * The Team model constructor.
     * @property {module:Model/Team}
     */
    Team,

    /**
     * The TeamUser model constructor.
     * @property {module:Model/TeamUser}
     */
    TeamUser,

    /**
     * The User model constructor.
     * @property {module:Model/User}
     */
    User,

    /**
    * The AuthApi service constructor.
    * @property {module:Api/AuthApi}
    */
    AuthApi
};
