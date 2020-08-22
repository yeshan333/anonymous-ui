/*
  * 肥胖分析表组件
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
        children: <Progress percent={text} showInfo={false}  status="active" strokeColor="#f47920" />,
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

const AnalysisObesity = ({dispatch, singlerecords}: { dispatch: Dispatch, singlerecords: SingleRecords }) => {
    const {
        BMI,
        Lower_Limit_BMI,
        Upper_Limit_BMI,
        Percent_Body_Fat,
        Lower_Limit_Percent_Body_Fat,
        Upper_Limit_Percent_Body_Fat,
        ECW_TBW,
        Lower_Limit_ECW_TBW,
        Upper_Limit_ECW_TBW
    } = singlerecords;

    const data = [
        {
          key: '1',
          project: 'BMI（kg/m2）',
          value: calculateBarValue(BMI, Lower_Limit_BMI, Upper_Limit_BMI),
          address: `${BMI}（${Lower_Limit_BMI} - ${Upper_Limit_BMI}）`,
        },
        {
          key: '2',
          project: '体脂百分比',
          value: calculateBarValue(Percent_Body_Fat, Lower_Limit_Percent_Body_Fat, Upper_Limit_Percent_Body_Fat),
          address: `${Percent_Body_Fat}（${Lower_Limit_Percent_Body_Fat} - ${Upper_Limit_Percent_Body_Fat}）`,
        },
        {
          key: '3',
          project: '细胞外水分比率',
          value: calculateBarValue(ECW_TBW, Lower_Limit_ECW_TBW, Upper_Limit_ECW_TBW),
          address: `${ECW_TBW}（${Lower_Limit_ECW_TBW} - ${Upper_Limit_ECW_TBW}）`,
        },
      ];

    return (
    <Typography>
      <Title level={4}>肥胖分析</Title>
      <Paragraph>
        <Table columns={columns} dataSource={data} bordered pagination={false} />
      </Paragraph>
    </Typography>
  );
}

export default connect(({ singlerecords }: { singlerecords: SingleRecords }) => ({
    singlerecords,
  }))(AnalysisObesity);