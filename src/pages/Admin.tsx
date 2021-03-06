/*
  * 用户中心
*/

// TODO: 更改组件名

import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import App from './UserManagement/UserSearch';
import UsersManagementEditableTable from './UserManagement';

export default (): React.ReactNode => (
  <PageHeaderWrapper content=" 这个页面只有 admin 权限才能查看">
    <Card>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        <SmileTwoTone /> 人体成分分析管理系统 <HeartTwoTone twoToneColor="#eb2f96" /> 用户管理
      </Typography.Title>
{/*       <Typography.Paragraph>
        <UsersManagementEditableTable />
      </Typography.Paragraph> */}
      <Typography.Paragraph>
        <App />
      </Typography.Paragraph>
    </Card>
  </PageHeaderWrapper>
);
