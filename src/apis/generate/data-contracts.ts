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

export interface ModelAndViewDto {
  view?: ViewDto;
  model?: Record<string, object>;
  status?: ModelAndViewStatusDto;
  empty?: boolean;
  viewName?: string;
  reference?: boolean;
  modelMap?: {
    empty?: boolean;
    [key: string]: any;
  };
}

export interface ViewDto {
  contentType?: string;
}

export interface ResultDto {
  message?: string;
  data?: object;
  success?: boolean;
  empty?: boolean;
  [key: string]: any;
}

export interface BoardDto {
  regName?: string;
  updName?: string;
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  start?: number;
  /** @format int32 */
  cntPerPage?: number;
  fromDate?: string;
  toDate?: string;
  periodType?: string;
  criteria?: string;
  keyword?: string;
  bd10Guid?: string;
  bd10Category?: string;
  bd10Status?: string;
  bd10Type?: string;
  /** @format date */
  bd10Sdate?: string;
  /** @format date */
  bd10Edate?: string;
  bd10Subject?: string;
  bd10Body?: string;
  bd10RegGuid?: string;
  /** @format date-time */
  bd10RegDate?: string;
  bd10UpdGuid?: string;
  /** @format date-time */
  bd10UpdDate?: string;
  bd10DelYn?: string;
  path?: string;
  attachFiles?: Record<string, string>[];
  deleteFiles?: string[];
  category?: string;
  status?: string[];
  type?: string[];
}

export interface MenuDto {
  /** @format int32 */
  seq?: number;
  name?: string;
  uri?: string;
}

export interface SessionUserDto {
  guid?: string;
  token?: string;
  id?: string;
  name?: string;
  dept?: string;
  menus?: MenuDto[];
}

export enum ModelAndViewStatusDto {
  Value100CONTINUE = '100 CONTINUE',
  Value101SWITCHINGPROTOCOLS = '101 SWITCHING_PROTOCOLS',
  Value102PROCESSING = '102 PROCESSING',
  Value103CHECKPOINT = '103 CHECKPOINT',
  Value200OK = '200 OK',
  Value201CREATED = '201 CREATED',
  Value202ACCEPTED = '202 ACCEPTED',
  Value203NONAUTHORITATIVEINFORMATION = '203 NON_AUTHORITATIVE_INFORMATION',
  Value204NOCONTENT = '204 NO_CONTENT',
  Value205RESETCONTENT = '205 RESET_CONTENT',
  Value206PARTIALCONTENT = '206 PARTIAL_CONTENT',
  Value207MULTISTATUS = '207 MULTI_STATUS',
  Value208ALREADYREPORTED = '208 ALREADY_REPORTED',
  Value226IMUSED = '226 IM_USED',
  Value300MULTIPLECHOICES = '300 MULTIPLE_CHOICES',
  Value301MOVEDPERMANENTLY = '301 MOVED_PERMANENTLY',
  Value302FOUND = '302 FOUND',
  Value302MOVEDTEMPORARILY = '302 MOVED_TEMPORARILY',
  Value303SEEOTHER = '303 SEE_OTHER',
  Value304NOTMODIFIED = '304 NOT_MODIFIED',
  Value305USEPROXY = '305 USE_PROXY',
  Value307TEMPORARYREDIRECT = '307 TEMPORARY_REDIRECT',
  Value308PERMANENTREDIRECT = '308 PERMANENT_REDIRECT',
  Value400BADREQUEST = '400 BAD_REQUEST',
  Value401UNAUTHORIZED = '401 UNAUTHORIZED',
  Value402PAYMENTREQUIRED = '402 PAYMENT_REQUIRED',
  Value403FORBIDDEN = '403 FORBIDDEN',
  Value404NOTFOUND = '404 NOT_FOUND',
  Value405METHODNOTALLOWED = '405 METHOD_NOT_ALLOWED',
  Value406NOTACCEPTABLE = '406 NOT_ACCEPTABLE',
  Value407PROXYAUTHENTICATIONREQUIRED = '407 PROXY_AUTHENTICATION_REQUIRED',
  Value408REQUESTTIMEOUT = '408 REQUEST_TIMEOUT',
  Value409CONFLICT = '409 CONFLICT',
  Value410GONE = '410 GONE',
  Value411LENGTHREQUIRED = '411 LENGTH_REQUIRED',
  Value412PRECONDITIONFAILED = '412 PRECONDITION_FAILED',
  Value413PAYLOADTOOLARGE = '413 PAYLOAD_TOO_LARGE',
  Value413REQUESTENTITYTOOLARGE = '413 REQUEST_ENTITY_TOO_LARGE',
  Value414URITOOLONG = '414 URI_TOO_LONG',
  Value414REQUESTURITOOLONG = '414 REQUEST_URI_TOO_LONG',
  Value415UNSUPPORTEDMEDIATYPE = '415 UNSUPPORTED_MEDIA_TYPE',
  Value416REQUESTEDRANGENOTSATISFIABLE = '416 REQUESTED_RANGE_NOT_SATISFIABLE',
  Value417EXPECTATIONFAILED = '417 EXPECTATION_FAILED',
  Value418IAMATEAPOT = '418 I_AM_A_TEAPOT',
  Value419INSUFFICIENTSPACEONRESOURCE = '419 INSUFFICIENT_SPACE_ON_RESOURCE',
  Value420METHODFAILURE = '420 METHOD_FAILURE',
  Value421DESTINATIONLOCKED = '421 DESTINATION_LOCKED',
  Value422UNPROCESSABLEENTITY = '422 UNPROCESSABLE_ENTITY',
  Value423LOCKED = '423 LOCKED',
  Value424FAILEDDEPENDENCY = '424 FAILED_DEPENDENCY',
  Value425TOOEARLY = '425 TOO_EARLY',
  Value426UPGRADEREQUIRED = '426 UPGRADE_REQUIRED',
  Value428PRECONDITIONREQUIRED = '428 PRECONDITION_REQUIRED',
  Value429TOOMANYREQUESTS = '429 TOO_MANY_REQUESTS',
  Value431REQUESTHEADERFIELDSTOOLARGE = '431 REQUEST_HEADER_FIELDS_TOO_LARGE',
  Value451UNAVAILABLEFORLEGALREASONS = '451 UNAVAILABLE_FOR_LEGAL_REASONS',
  Value500INTERNALSERVERERROR = '500 INTERNAL_SERVER_ERROR',
  Value501NOTIMPLEMENTED = '501 NOT_IMPLEMENTED',
  Value502BADGATEWAY = '502 BAD_GATEWAY',
  Value503SERVICEUNAVAILABLE = '503 SERVICE_UNAVAILABLE',
  Value504GATEWAYTIMEOUT = '504 GATEWAY_TIMEOUT',
  Value505HTTPVERSIONNOTSUPPORTED = '505 HTTP_VERSION_NOT_SUPPORTED',
  Value506VARIANTALSONEGOTIATES = '506 VARIANT_ALSO_NEGOTIATES',
  Value507INSUFFICIENTSTORAGE = '507 INSUFFICIENT_STORAGE',
  Value508LOOPDETECTED = '508 LOOP_DETECTED',
  Value509BANDWIDTHLIMITEXCEEDED = '509 BANDWIDTH_LIMIT_EXCEEDED',
  Value510NOTEXTENDED = '510 NOT_EXTENDED',
  Value511NETWORKAUTHENTICATIONREQUIRED = '511 NETWORK_AUTHENTICATION_REQUIRED',
}
