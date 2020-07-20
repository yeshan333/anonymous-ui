/*
  * 肌肉均衡表组件
*/

import React from 'react';
import { connect } from 'umi';
import { Table, Progress, Typography } from 'antd';

const { Title, Paragraph } = Typography;

/*
  * 计算进度条的值
  * value：测试值
  * lower：下界
  * upper：上界
*/
const calculateBarValue = (value: any, lower: any, upper: any) => {
  let normal_interval_size = upper - lower;  // 正常区间大小
  if (value < lower) {
      return (value / lower) * 33;
  } else if (value > upper) {
      return 66 + 33 * value / (100 - upper);
  } else if (lower < value && value < upper) {
      return 33 + 33 * (value - lower) / normal_interval_size;
  } else if (value > 100) {
      return 100;
  } else {
      return 0;
  }
}


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
        children: <Progress percent={text} showInfo={false} status="active" strokeColor="#13c2c2" />,
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
  {
    title: "百分比",
    dataIndex: "percent",
    render: (text: any) => `${text} %`
  },
];

const MuscleBalance = ({dispatch, singlerecords}: {dispatch: any, singlerecords: SingleRecords}) => {
    const {
      FFM_of_Right_Arm,
      Lower_Limit_FFM_of_Right_Arm,
      Upper_Limit_FFM_of_Right_Arm,
      FFM_Persents_of_Right_Arm,
      FFM_of_Left_Arm,
      Lower_Limit_FFM_of_Left_Arm,
      Upper_Limit_FFM_of_Left_Arm,
      FFM_Persents_of_Left_Arm,


      FFM_of_Trunk,
      Lower_Limit_FFM_of_Trunk,
      Upper_Limit_FFM_of_Trunk,
      FFM_Persents_of_Trunk,

      FFM_of_Right_Leg,
      Lower_Limit_FFM_of_Right_Leg,
      Upper_Limit_FFM_of_Right_Leg,
      FFM_Persents_of_Right_Leg,

      FFM_of_Left_Leg,
      Lower_Limit_FFM_of_Left_Leg,
      Upper_Limit_FFM_of_Left_Leg,
      FFM_Persents_of_Left_Leg,
    } = singlerecords;

    const data = [
        {
          key: '1',
          project: '右上肢（kg）',
          value: calculateBarValue(FFM_of_Right_Arm, Lower_Limit_FFM_of_Right_Arm, Upper_Limit_FFM_of_Right_Arm),
          address: `${FFM_of_Right_Arm}（${Lower_Limit_FFM_of_Right_Arm} - ${Upper_Limit_FFM_of_Right_Arm}）`,
          percent: FFM_Persents_of_Right_Arm,
        },
        {
          key: '2',
          project: '左上肢（kg）',
          value: calculateBarValue(FFM_of_Left_Arm, Lower_Limit_FFM_of_Left_Arm, Upper_Limit_FFM_of_Left_Arm),
          address: `${FFM_of_Left_Arm}（${Lower_Limit_FFM_of_Left_Arm} - ${Upper_Limit_FFM_of_Left_Arm}）`,
          percent: FFM_Persents_of_Left_Arm,
        },
        {
          key: '3',
          project: '躯干（kg）',
          value: calculateBarValue(FFM_of_Trunk, Lower_Limit_FFM_of_Trunk, Upper_Limit_FFM_of_Trunk),
          address: `${FFM_of_Trunk}（${Lower_Limit_FFM_of_Trunk} - ${Upper_Limit_FFM_of_Trunk}）`,
          percent: FFM_Persents_of_Trunk,
        },
        {
          key: '4',
          project: '左下肢（kg）',
          value: calculateBarValue(FFM_of_Left_Leg, Lower_Limit_FFM_of_Left_Leg, Upper_Limit_FFM_of_Left_Leg),
          address: `${FFM_of_Left_Leg}（${Lower_Limit_FFM_of_Left_Leg} - ${Upper_Limit_FFM_of_Left_Leg}）`,
          percent: FFM_Persents_of_Left_Leg,
        },
        {
          key: '5',
          project: '右下肢（kg）',
          value: calculateBarValue(FFM_of_Right_Leg, Lower_Limit_FFM_of_Right_Leg, Upper_Limit_FFM_of_Right_Leg),
          address: `${FFM_of_Right_Leg}（${Lower_Limit_FFM_of_Right_Leg} - ${Upper_Limit_FFM_of_Right_Leg}）`,
          percent: FFM_Persents_of_Right_Leg,
        },
      ];

    return (
    <Typography>
      <Title level={4}>肌肉均衡</Title>
      <Paragraph>
        <Table columns={columns} dataSource={data} bordered pagination={false} />
      </Paragraph>
    </Typography>
  );
}

export default connect(({ singlerecords }: { singlerecords: any }) => ({
    singlerecords,
  }))(MuscleBalance);
