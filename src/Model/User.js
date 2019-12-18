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


import ApiClient from '../ApiClient';





/**
* The User model module.
* @module Model/User
* @version 0.1.0
*/
export default class User {
    /**
    * Constructs a new <code>User</code>.
    * @alias module:Model/User
    * @class
    * @param id {Number} 
    * @param name {String} 
    * @param email {String} 
    * @param emailVerifiedAt {String} 
    * @param createdAt {String} 
    * @param updatedAt {String} 
    * @param roles {Object} 
    */

    constructor(id, name, email, emailVerifiedAt, createdAt, updatedAt, roles) {
        

        
        

        this['id'] = id;this['name'] = name;this['email'] = email;this['email_verified_at'] = emailVerifiedAt;this['created_at'] = createdAt;this['updated_at'] = updatedAt;this['roles'] = roles;

        
    }

    /**
    * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/User} obj Optional instance to populate.
    * @return {module:Model/User} The populated <code>User</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('email_verified_at')) {
                obj['email_verified_at'] = ApiClient.convertToType(data['email_verified_at'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], Object);
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {String} email_verified_at
    */
    email_verified_at = undefined;
    /**
    * @member {String} created_at
    */
    created_at = undefined;
    /**
    * @member {String} updated_at
    */
    updated_at = undefined;
    /**
    * @member {Object} roles
    */
    roles = undefined;








}


