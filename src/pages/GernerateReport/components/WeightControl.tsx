/*
  * 体重控制表组件
*/

import React from 'react';
import { Table, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const dataSource = [
  {
    key: '1',
    id: '1',
    target_weight: '',
    weight_control: '',
    fat_control: '',
    muscle_control: '',
  },
];

const columns = [
  {
    key: 'target_weight',
    title: '目标体重',
    dataIndex: 'target_weight',
    align: 'center' as 'center',
    render: (text: any) => <p>{text} (kg)</p>
  },
  {
    title: '体重控制',
    dataIndex: 'weight_control',
    key: 'weight_control',
    align: 'center' as 'center',
    render: (text: any) => <p>{text} (kg)</p>
  },
  {
    title: '脂肪控制',
    dataIndex: 'fat_control',
    key: 'fat_control',
    align: 'center' as 'center',
    render: (text: any) => <p>{text} (kg)</p>
  },
  {
    title: '肌肉控制',
    dataIndex: 'muscle_control',
    key: 'muscle_control',
    align: 'center' as 'center',
    render: (text: any) => <p>{text} (kg)</p>
  },
];

const WeightControlTable = () => {
  return (
    <Typography>
      <Title level={4}>体重控制</Title>
      <Paragraph>
        <Table dataSource={dataSource} columns={columns} pagination={false} bordered />
      </Paragraph>
    </Typography>
  );
};

export default WeightControlTable