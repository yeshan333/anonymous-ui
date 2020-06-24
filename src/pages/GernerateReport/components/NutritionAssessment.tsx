/*
  * 营养评估表组件
*/

import React, { useEffect } from 'react';
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

const Judger = ({ value, lower, upper }: any) => {
  const [select, setSelect] = React.useState(0);

  useEffect(() => {
    if( value >= lower && value <= upper) {
      setSelect(1);
    }else if(value < lower){
      setSelect(2);
    }else if(value > upper){
      setSelect(3);
    }else{
      setSelect(0);
    }
  });

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setSelect(e.target.value);
  };

  return (
    <Radio.Group onChange={(e) => onChange(e)} value={select}>
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
          <Col span={14}><Judger lower={Lower_Limit_Protein} value={Protein} upper={Upper_Limit_Protein} /></Col>
        </Row>
        <Row>
          <Col span={10}>无机盐</Col>
          <Col span={14}><Judger lower={Lower_Limit_Mineral} value={Mineral} upper={Upper_Limit_Mineral} /></Col>
        </Row>
        <Row>
          <Col span={10}>体脂肪</Col>
          <Col span={14}><Judger lower={Lower_Limit_BFM} value={BFM} upper={Upper_Limit_BFM} /></Col>
        </Row>
      </Paragraph>
    </Typography>
  );
};

export default connect(({ singlerecords }: { singlerecords: any }) => ({
  singlerecords,
}))(NutritionAssessmentTable);