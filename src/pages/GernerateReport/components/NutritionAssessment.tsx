/*
  * 营养评估表组件
*/

import React from 'react';
import { Table, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const dataSource = [
  {
    key: '1',
    id: '1',
    protein: '',
    salts: '',
    body_fat: '',
  },
];

const columns = [
  {
    key: 'protein',
    title: '蛋白质',
    dataIndex: 'protein',
    align: 'center' as 'center',
    render: (text: any) => <p>{text} 正常/缺乏/过量</p>
  },
  {
    key: 'salts',
    title: '无机盐',
    dataIndex: 'salts',
    align: 'center' as 'center',
    render: (text: any) => <p>{text} 正常/缺乏/过量</p>
  },
  {
    title: '体脂肪',
    dataIndex: 'body_fat',
    key: 'body_fat',
    align: 'center' as 'center',
    render: (text: any) => <p>{text} 正常/缺乏/过量</p>
  },
];

const NutritionAssessmentTable = () => {
  return (
    <Typography>
      <Title level={4}>营养评估</Title>
      <Paragraph>
        <Table dataSource={dataSource} columns={columns} pagination={false} bordered />
      </Paragraph>
    </Typography>
  );
};

export default NutritionAssessmentTable;