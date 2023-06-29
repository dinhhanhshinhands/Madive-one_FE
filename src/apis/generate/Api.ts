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
import { ModelAndViewDto, ResultDto, SessionUserDto } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Menu
   * @name GetList
   * @summary API get list menu.
   * @request POST:/api/v1/menu/query-list
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  getList = (params: RequestParams = {}) =>
    this.request<ResultDto, ModelAndViewDto>({
      path: `/api/v1/menu/query-list`,
      method: 'POST',
      ...params,
    });
  /**
   * No description
   *
   * @tags Company Partner
   * @name List1
   * @summary API get list company partner.
   * @request GET:/api/v1/company/query-list
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  list1 = (
    query: {
      condition: string;
      keyword?: string;
      sessionUser: SessionUserDto;
    },
    params: RequestParams = {}
  ) =>
    this.request<ResultDto, ModelAndViewDto>({
      path: `/api/v1/company/query-list`,
      method: 'GET',
      query: query,
      ...params,
    });
}
