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
import { ResultDto, SessionUserDto } from './data-contracts';

export namespace Api {
  /**
   * No description
   * @tags Menu
   * @name GetList
   * @summary API get list menu.
   * @request POST:/api/v1/menu/query-list
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  export namespace GetList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResultDto;
  }

  /**
   * No description
   * @tags Company Partner
   * @name List1
   * @summary API get list company partner.
   * @request GET:/api/v1/company/query-list
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  export namespace List1 {
    export type RequestParams = {};
    export type RequestQuery = {
      condition: string;
      keyword?: string;
      sessionUser: SessionUserDto;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResultDto;
  }
}
