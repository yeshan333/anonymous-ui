/*
  * 存储管理员想要提取信息目标人的 user_name
*/

export default {
    namespace: 'people',

    state: {
        user_name: '',
        visiable: false,
    },

    reducers: {
        update(state: any, {username}: {username: any} ) {
            return {
                ...state,
                user_name: username,
                visiable: true,
            }
        }
    },
}