import request from '@/utils/request';

const MOCK = 'http://47.93.42.46:8080'

export async function query(): Promise<any> {
  return request(MOCK + '/api/users');
}

export async function queryCurrent(): Promise<any> {
  return request(MOCK + '/api/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request(MOCK + '/api/notices');
}
