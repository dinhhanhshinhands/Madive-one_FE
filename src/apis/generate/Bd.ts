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
import { BoardDto, ModelAndViewDto, ResultDto, SessionUserDto } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Bd<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags board-rest
   * @name Regist
   * @request POST:/bd/nt/03
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  regist = (
    data: {
      board?: BoardDto;
      sessionUser?: SessionUserDto;
    },
    params: RequestParams = {}
  ) =>
    this.request<ResultDto, ModelAndViewDto>({
      path: `/bd/nt/03`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags board-rest
   * @name Data
   * @request GET:/bd/nt/02/{id}
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  data = (id: string, params: RequestParams = {}) =>
    this.request<ResultDto, ModelAndViewDto>({
      path: `/bd/nt/02/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags board-rest
   * @name List
   * @request GET:/bd/nt/01
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  list = (
    query: {
      board: BoardDto;
    },
    params: RequestParams = {}
  ) =>
    this.request<ResultDto, ModelAndViewDto>({
      path: `/bd/nt/01`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags board-rest
   * @name Delete
   * @request DELETE:/bd/nt/04/{id}
   * @response `200` `ResultDto` OK
   * @response `500` `ModelAndViewDto` Internal Server Error
   */
  delete = (id: string, params: RequestParams = {}) =>
    this.request<ResultDto, ModelAndViewDto>({
      path: `/bd/nt/04/${id}`,
      method: 'DELETE',
      ...params,
    });
}
