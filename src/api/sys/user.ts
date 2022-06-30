import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/admin/login',
  Logout = '/logout',
  GetUserInfo = 'admin/account/info',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
  GetCaptcha = '/admin/captcha/img',
}

/** 获取验证码参数 */
type CaptchaParams = {
  width?: number;
  height?: number;
};
/** 获取验证码结果 */
type CaptchaResult = {
  img: string;
  id: string;
};

/**
 * @description: 获取缓存验证码
 */
type RedisCode = {
  number: string;
};
export function getRedisVeriCode(data) {
  return defHttp.post<RedisCode>({
    url: 'admin/rediscode',
    data,
  });
}

/**
 * @description: 获取验证码
 */
export function getCaptcha(params?: CaptchaParams) {
  return defHttp.get<CaptchaResult>({
    url: Api.GetCaptcha,
    params,
  });
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
