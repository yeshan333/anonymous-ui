/* import React from 'react';
import { Progress, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Tester = () => {
  return (
    <Typography>
      <Title>肌肉脂肪分析</Title>
      <Paragraph>
        <Row>
          <Col span={5}>体重(kg)</Col>
          <Col span={15}><Progress percent={50} status="active" showInfo={false} /></Col>
          <Col span={4}>72.7<br />(58.9-79.7)</Col>
        </Row>

        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </Paragraph>
      <Paragraph>

      </Paragraph>
    </Typography>
  );
} */

import React from 'react';
import { Table, Progress, Typography } from 'antd';

const { Title, Paragraph } = Typography;

/*
  * 计算进度条的值
  * value：测试值
  * lower：下界
  * upper：上界
*/
const calculateBarValue = (value, lower, upper) => {

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


const renderContent = (value, row, index) => {
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
    // render: renderContent,
  },
  {
    title: '低于标准',
    dataIndex: 'value',
    width: 150,
    render: (text, row, index) => {
      /*       if (index < 4) {
              return <a>{text}</a>;
            } */
      return {
        children: <Progress percent={text} showInfo={false} status="exception" />,
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

const data = [
  {
    key: '1',
    project: '体重（kg）',
    value: calculateBarValue(72.7, 58.9, 79.7),
    tel: '0571-22098909',
    phone: 18889898989,
    address: '72.7（58.9 - 79.7）',
  },
  {
    key: '2',
    project: '骨骼肌（kg）',
    tel: '0571-22098333',
    phone: 18889898888,
    value: calculateBarValue(29.9, 24.1, 29.4),
    address: '29.9（24.1 - 29.4）',
  },
  {
    key: '3',
    project: '体脂肪',
    value: calculateBarValue(19.4, 12.7, 25.5),
    tel: '0575-22098909',
    phone: 18900010002,
    address: '19.4（12.7 - 25.5）',
  },
];

const Tester = () => {
  return (
    <Typography>
      <Title level={4}>肌肉脂肪分析</Title>
      <Paragraph>
        <Table columns={columns} dataSource={data} bordered pagination={false} />
      </Paragraph>
    </Typography>
  );
}

export default Tester;