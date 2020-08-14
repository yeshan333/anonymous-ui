/*
  * 用户管理逻辑
*/

import { Effect, Reducer } from 'umi';

import { deleteUserForce, addNewUser, query as queryUsers } from '@/services/user';

export interface CurrentUser {
  avatar?: string;
  name?: string;
  title?: string;
  group?: string;
  signature?: string;
  tags?: {
    key: string;
    label: string;
  }[];
  userid?: string;
  unreadCount?: number;
  token?: number;
  ID?: string;
  username?: string;
}

export interface UserModelState {
  currentUser?: CurrentUser;
  userlist?: any;  // TODO: 用户信息列表类型
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetch: Effect;
    fetchCurrent: Effect;
    deleteUser: Effect;
    addUser: Effect;
  };
  reducers: {
    add: Reducer<UserModelState>;
    save: Reducer<UserModelState>;
    delete: Reducer<UserModelState>;
    saveCurrentUser: Reducer<UserModelState>;
    changeNotifyCount: Reducer<UserModelState>;
  };
  subscriptions: { // TODO: 类型

  };
}

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    currentUser: {},
    userlist: [],
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      // console.log("所有用户的信息: ", response)
      yield put({
        type: 'save',
        payload: response,
      });
    },
    // TODO: 了解如何获取当前用户信息
    *fetchCurrent(_, { call, put }) {
      // const response = yield call(queryCurrent);
      const response = yield localStorage.getItem("xxx");
      // console.log("获取用户信息: ", response);
      // console.log("Token",JSON.parse(response).Token)
      if(JSON.parse(response) == "统一处理，原因：token超时了") {
        localStorage.removeItem("xxx");
        window.location.href = window.location.origin + "/user/login"
      }
      yield put({
        type: 'saveCurrentUser',
        payload: JSON.parse(response), // TODO: 反序列化
      });
    },
    *deleteUser({ payload }, { call, put }) {
      // TODO：删除用户
      const response = yield call(deleteUserForce, payload);
      console.log(response);
      yield put({
        type: 'fetch',
      });
    },
    *addUser({ payload }, { call, put }) {
      // console.log("等待添加的用户", payload)
      const response = yield call(addNewUser, payload);
      // console.log("添加新用户响应", response);
      if(response.success) {
        alert("注册成功");
        yield put({
          type: 'fetch',
        });
      } else {
        alert("注册失败：" + response.message);
      }
    },
  },

  reducers: {
    add(state, action) {
      let result = {};
      if (state !== undefined) {
        result = {
          ...state,
          userlist: [action.payload, ...state.userlist]
        };
      }
      return result;
    },
    save(state, action) {
      return {
        ...state,
        userlist: action.payload || []
      };
    },
    delete(state, action) {
      return {
        ...state,
        userlist: state.userlist.filter((item: any) => item.id !== action.record_key)
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },

  subscriptions: {
    setup({ dispatch, history }: any) {
      history.listen(({ pathname }: any) => {
        if (pathname === '/admin/user-management') {
          dispatch({
            type: 'fetch',
          });
        }
      });
    }
  },
};

export default UserModel;
