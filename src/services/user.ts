// import request from '@/utils/request';

import request from 'umi-request';

const MOCK = 'http://127.0.0.1:5000' // 'http://47.93.42.46:8080'

export async function query(): Promise<any> {
  let user_info: any  = localStorage.getItem('xxx');
  let token: string = JSON.parse(user_info).token;
  return request('http://47.92.4.141:8080/api/admin/findalluser', {
    method: 'get',
    headers: {
      Authorization: token
    }
  });
}

export async function queryCurrent(): Promise<any> {
  return request(MOCK + '/api/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request(MOCK + '/api/notices');
}

export async function addNewUser(user: any): Promise<any> {
  let user_info: any  = localStorage.getItem('xxx');
  let token: string = JSON.parse(user_info).token;
  return request('http://47.92.4.141:8080/api/admin/register',{
      method: 'post',
      data: user,
      headers: {
        Authorization: token
      }
    }
  );
}

export async function deleteUserForce(user: any): Promise<any> {
  let user_info: any  = localStorage.getItem('xxx');
  let token: string = JSON.parse(user_info).token;
  // console.log("正在删除用户", user)
  return request('http://47.92.4.141:8080/api/admin/deleteUser',{
      method: 'post',
      data: user,
      headers: {
        Authorization: token
      }
    }
  );
}
