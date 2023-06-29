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
import { ModelAndViewDto } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class MyEndpoint<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags test-controller
   * @name MyEndpoint
   * @request GET:/my-endpoint
   * @response `200` `string` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  myEndpoint = (params: RequestParams = {}) =>
    this.request<string, ModelAndViewDto>({
      path: `/my-endpoint`,
      method: 'GET',
      ...params,
    });
}
