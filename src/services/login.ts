import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

const MOCK = 'http://mock-api.com/wna2A1K1.mock/getuser';

const FLASK_MOCK = 'http://127.0.0.1:5000/api/login/account';

const NATIVE_MOCK = '/api/login/account';

export async function fakeAccountLogin(params: LoginParamsType) {
  return request(NATIVE_MOCK, {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
