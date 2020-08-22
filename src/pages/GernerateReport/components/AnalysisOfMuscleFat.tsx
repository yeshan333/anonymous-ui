/*
  * 肌肉脂肪分析表组件
*/

import React from 'react';
import { connect, Dispatch } from 'umi';
import { Table, Progress, Typography } from 'antd';

import calculateBarValue from './utils';

const { Title, Paragraph } = Typography;

const renderContent = (value: any, row: any, index: any) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index >= 0 && index <= 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [
  {
    title: '',
    dataIndex: 'project',
  },
  {
    title: '低于标准',
    dataIndex: 'value',
    width: 150,
    render: (text: any, row: any, index: any) => {
      return {
        children: <Progress percent={text} showInfo={false} status="active" strokeColor="#52c41a" />,
        props: {
          colSpan: 3,
        },
      };
    },
  },
  {
    title: '标准',
    dataIndex: 'standard',
    width: 150,
    render: renderContent,
  },
  {
    title: '高于标准',
    dataIndex: 'upper',
    width: 150,
    render: renderContent,
  },
  {
    title: '测试值(正常范围)',
    dataIndex: 'address',
    // render: renderContent,
  },
];

const AnalysisOfMuscleFat = ({dispatch, singlerecords}: {dispatch: Dispatch, singlerecords: SingleRecords}) => {
    const {
        Weight,
        Upper_Limit_Weight,
        Lower_Limit_Weight,
        SMM,
        Upper_Limit_SMM,
        Lower_Limit_SMM,
        BFM,
        Lower_Limit_BFM,
        Upper_Limit_BFM,
    } = singlerecords;

    const data = [
        {
          key: '1',
          project: '体重（kg）',
          value: calculateBarValue(Weight, Lower_Limit_Weight, Upper_Limit_Weight),
          address: `${Weight}（${Lower_Limit_Weight} - ${Upper_Limit_Weight}）`,
        },
        {
          key: '2',
          project: '骨骼肌（kg）',
          value: calculateBarValue(SMM, Lower_Limit_SMM, Upper_Limit_SMM),
          address: `${SMM}（${Lower_Limit_SMM} - ${Upper_Limit_SMM}）`,
        },
        {
          key: '3',
          project: '体脂肪（kg）',
          value: calculateBarValue(BFM, Lower_Limit_BFM, Upper_Limit_BFM),
          address: `${BFM}（${Lower_Limit_BFM} - ${Upper_Limit_BFM}）`,
        },
      ];

    return (
    <Typography>
      <Title level={4}>肌肉脂肪分析</Title>
      <Paragraph>
        <Table columns={columns} dataSource={data} bordered pagination={false} />
      </Paragraph>
    </Typography>
  );
}

export default connect(({ singlerecords }: { singlerecords: SingleRecords }) => ({
    singlerecords,
  }))(AnalysisOfMuscleFat);