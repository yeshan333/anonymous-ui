/*
  * 获取最近上传的记录
*/

import request from '@/utils/request';

const URL = 'http://47.92.4.141:8080/api/user/findLatestInf';

export async function getSingleRecords() {
    return request(URL);
}