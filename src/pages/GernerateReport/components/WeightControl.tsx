/*
  * 体重控制表组件
*/

import React from 'react';
import { connect, Dispatch } from 'umi';
import { Typography, Col, Row } from 'antd';

const { Title, Paragraph } = Typography;

const WeightControlTable = ({ dispatch, singlerecords }: { dispatch: Dispatch, singlerecords: SingleRecords}) => {

  const {
    Target_Weight,                // 目标体重
    Weight_Control,               // 体重控制
    BFM_Control,                  // 脂肪控制
    FFM_Control,                  // 肌肉控制
   } = singlerecords;

  return (
    <Typography>
      <Title level={4}>体重控制</Title>
      <Paragraph>
        <Row>
          <Col span={12}>目标体重</Col>
          <Col span={12}>{Target_Weight} kg</Col>
        </Row>
        <Row>
          <Col span={12}>体重控制</Col>
          <Col span={12}>{Weight_Control} kg</Col>
        </Row>
        <Row>
          <Col span={12}>脂肪控制</Col>
          <Col span={12}>{BFM_Control} kg</Col>
        </Row>
        <Row>
          <Col span={12}>肌肉控制</Col>
          <Col span={12}>{FFM_Control} kg</Col>
        </Row>
      </Paragraph>
    </Typography>
  );
};

export default connect(({ singlerecords }: { singlerecords: SingleRecords }) => ({
  singlerecords,
}))(WeightControlTable);