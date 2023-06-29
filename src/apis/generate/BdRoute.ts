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
import { BoardDto, ResultDto, SessionUserDto } from './data-contracts';

export namespace Bd {
  /**
   * No description
   * @tags board-rest
   * @name Regist
   * @request POST:/bd/nt/03
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  export namespace Regist {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      board?: BoardDto;
      sessionUser?: SessionUserDto;
    };
    export type RequestHeaders = {};
    export type ResponseBody = ResultDto;
  }

  /**
   * No description
   * @tags board-rest
   * @name Data
   * @request GET:/bd/nt/02/{id}
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  export namespace Data {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResultDto;
  }

  /**
   * No description
   * @tags board-rest
   * @name List
   * @request GET:/bd/nt/01
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  export namespace List {
    export type RequestParams = {};
    export type RequestQuery = {
      board: BoardDto;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResultDto;
  }

  /**
   * No description
   * @tags board-rest
   * @name Delete
   * @request DELETE:/bd/nt/04/{id}
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  export namespace Delete {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResultDto;
  }
}
