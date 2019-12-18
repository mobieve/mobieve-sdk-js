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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Mobieve);
  }
}(this, function(expect, Mobieve) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Mobieve.Client();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Client', function() {
    it('should create an instance of Client', function() {
      // uncomment below and update the code to test Client
      //var instane = new Mobieve.Client();
      //expect(instance).to.be.a(Mobieve.Client);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Mobieve.Client();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new Mobieve.Client();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Mobieve.Client();
      //expect(instance).to.be();
    });

    it('should have the property secret (base name: "secret")', function() {
      // uncomment below and update the code to test the property secret
      //var instane = new Mobieve.Client();
      //expect(instance).to.be();
    });

    it('should have the property redirect (base name: "redirect")', function() {
      // uncomment below and update the code to test the property redirect
      //var instane = new Mobieve.Client();
      //expect(instance).to.be();
    });

    it('should have the property personalAccessClient (base name: "personal_access_client")', function() {
      // uncomment below and update the code to test the property personalAccessClient
      //var instane = new Mobieve.Client();
      //expect(instance).to.be();
    });

    it('should have the property passwordClient (base name: "password_client")', function() {
      // uncomment below and update the code to test the property passwordClient
      //var instane = new Mobieve.Client();
      //expect(instance).to.be();
    });

    it('should have the property revoked (base name: "revoked")', function() {
      // uncomment below and update the code to test the property revoked
      //var instane = new Mobieve.Client();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Mobieve.Client();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new Mobieve.Client();
      //expect(instance).to.be();
    });

  });

}));
