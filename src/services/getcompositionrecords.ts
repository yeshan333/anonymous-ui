/*
  * 获取个人所有测试记录
*/

import request from 'umi-request';

const URL = 'http://47.92.4.141:8080/api/user/findselfInf';

export async function getAllRecords() {
    let user_info: string  = localStorage.getItem('xxx');
    let token: string = JSON.parse(user_info).token;
    return request(URL, {
      method: 'get',
      headers: {
          'Authorization': token
      }
    });
}