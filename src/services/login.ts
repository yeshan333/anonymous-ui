// import request from '@/utils/request';

import request from 'umi-request'

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

// const MOCK = 'http://mock-api.com/wna2A1K1.mock/getuser';

// const FLASK_MOCK = 'http://127.0.0.1:5000/api/login/account';

const NATIVE_MOCK = 'http://47.92.4.141:8080/login';

export async function fakeAccountLogin(params: LoginParamsType): Promise<any> {
  return request(NATIVE_MOCK, {
    method: 'post',
    data: {
      // userName: params.userName,
      username: params.userName,
      password: params.password
    },
  });
}

export async function getFakeCaptcha(mobile: string): Promise<any> {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
