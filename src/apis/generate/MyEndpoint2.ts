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

export class MyEndpoint2<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags test-controller
   * @name MyEndpoint1
   * @request GET:/my-endpoint2
   * @response `200` `string` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  myEndpoint1 = (
    query: {
      actions: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<string, ModelAndViewDto>({
      path: `/my-endpoint2`,
      method: 'GET',
      query: query,
      ...params,
    });
}
