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

export class Lo<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags login-endpoint
   * @name Logout
   * @request POST:/lo/02
   * @response `200` `void` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  logout = (params: RequestParams = {}) =>
    this.request<void, ModelAndViewDto>({
      path: `/lo/02`,
      method: 'POST',
      ...params,
    });
}
