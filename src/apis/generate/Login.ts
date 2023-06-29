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
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Login<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags login-endpoint
   * @name LoginCreate
   * @request POST:/login
   * @response `200` `void` OK
   * @response `403` `void` Forbidden
   */
  loginCreate = (
    data: {
      username?: string;
      password?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/login`,
      method: 'POST',
      body: data,
      type: ContentType.UrlEncoded,
      ...params,
    });
}
