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
import { ModelAndViewDto, ResultDto } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Cm<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags cm-rest
   * @name Upload
   * @request POST:/cm/upload
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  upload = (
    query: {
      files: File[];
      parameter: Record<string, string>;
    },
    params: RequestParams = {}
  ) =>
    this.request<ResultDto, ModelAndViewDto>({
      path: `/cm/upload`,
      method: 'POST',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags cm-rest
   * @name Download
   * @request POST:/cm/filedown
   * @response `200` `File` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  download = (
    query: {
      fileId: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<File, ModelAndViewDto>({
      path: `/cm/filedown`,
      method: 'POST',
      query: query,
      ...params,
    });
}
