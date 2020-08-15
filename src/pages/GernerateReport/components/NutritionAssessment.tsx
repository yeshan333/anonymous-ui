/*
  * 营养评估表组件
*/

import React from 'react';
import { connect } from 'umi';
import { Typography, Row, Col, Radio } from 'antd';

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

const calculateValueX = (value: any, lower: any, upper: any) => {
  let r_value = parseFloat(value);
  let r_lower = parseFloat(lower);
  let r_upper = parseFloat(upper);
  if( r_value > r_lower && r_value < r_upper) {
    return 1;
  }
  if(r_value < r_lower){
    return 2;
  }
  if(r_value > r_upper){
    return 3;
  }
  return 0;
}

const Judger = (props: any) => {
  return (
    <Radio.Group value={props.select}>
      <Radio value={1}>正常</Radio>
      <Radio value={2}>缺乏</Radio>
      <Radio value={3}>过量</Radio>
    </Radio.Group>
  );
}

const NutritionAssessmentTable = ({ dispatch, singlerecords }: any) => {
  const {
    Protein,                      // 蛋白质
    Lower_Limit_Protein,
    Upper_Limit_Protein,

    Mineral,                      // 无机盐（矿物质）
    Lower_Limit_Mineral,
    Upper_Limit_Mineral,

    BFM,                          // BFM： Body FAt Mass：体脂肪
    Lower_Limit_BFM,
    Upper_Limit_BFM,
  } = singlerecords;

  return (
    <Typography>
      <Title level={4}>营养评估</Title>
      <Paragraph>
        <Row>
          <Col span={10}>蛋白质</Col>
          <Col span={14}><Judger select={calculateValueX(Protein, Lower_Limit_Protein, Upper_Limit_Protein)} /></Col>
        </Row>
        <Row>
          <Col span={10}>无机盐</Col>
          <Col span={14}><Judger select={calculateValueX(Mineral, Lower_Limit_Mineral, Upper_Limit_Mineral)} /></Col>
        </Row>
        <Row>
          <Col span={10}>体脂肪</Col>
          <Col span={14}><Judger select={calculateValueX(BFM, Lower_Limit_BFM, Upper_Limit_BFM)} /></Col>
        </Row>
      </Paragraph>
    </Typography>
  );
};

export default connect(({ singlerecords }: { singlerecords: any }) => ({
  singlerecords,
}))(NutritionAssessmentTable);