/*
  * 获取最近上传的记录
*/

// import request from '@/utils/request';

import request from 'umi-request';

const URL = 'http://47.92.4.141:8080/api/findLatestInf/';

export async function getSingleRecords(): Promise<any> {
    let user_info: any  = localStorage.getItem('xxx');
    let username: string = JSON.parse(user_info).name;
    console.log(username);
    return request(URL + `${username}`, {
      method: 'get',
    });
}