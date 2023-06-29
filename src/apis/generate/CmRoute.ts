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
import { ResultDto } from './data-contracts';

export namespace Cm {
  /**
   * No description
   * @tags cm-rest
   * @name Upload
   * @request POST:/cm/upload
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  export namespace Upload {
    export type RequestParams = {};
    export type RequestQuery = {
      files: File[];
      parameter: Record<string, string>;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResultDto;
  }

  /**
   * No description
   * @tags cm-rest
   * @name Download
   * @request POST:/cm/filedown
   * @response `200` `File` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  export namespace Download {
    export type RequestParams = {};
    export type RequestQuery = {
      fileId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = File;
  }
}
