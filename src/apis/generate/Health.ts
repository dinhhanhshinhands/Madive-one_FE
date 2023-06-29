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

export class Health<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags health-rest
   * @name Get
   * @request GET:/health
   * @response `200` `string` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  get = (params: RequestParams = {}) =>
    this.request<string, ModelAndViewDto>({
      path: `/health`,
      method: 'GET',
      ...params,
    });
}
