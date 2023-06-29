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

export namespace MyEndpoint2 {
  /**
   * No description
   * @tags test-controller
   * @name MyEndpoint1
   * @request GET:/my-endpoint2
   * @response `200` `string` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  export namespace MyEndpoint1 {
    export type RequestParams = {};
    export type RequestQuery = {
      actions: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
}
