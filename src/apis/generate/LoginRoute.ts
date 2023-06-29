/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export namespace Login {
  /**
   * No description
   * @tags login-endpoint
   * @name LoginCreate
   * @request POST:/login
   * @response `200` `void` OK
   * @response `403` `void` Forbidden
   */
  export namespace LoginCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      username?: string;
      password?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}
