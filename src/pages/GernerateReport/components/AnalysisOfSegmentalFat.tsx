/*
  * 节段脂肪分析组件
*/

import React from 'react';
import { connect, Dispatch } from 'umi';
import { Progress, Typography, Row, Col } from 'antd';

const calBar = (value: any, lower: any, upper: any) => {
  value = parseFloat(value);
  lower = parseFloat(lower);
  upper = parseFloat(upper);

  let normal_interval_size = upper - lower;  // 正常区间大小
  if (value < lower) {
      return (value / lower) * 33;
  } else if (value > upper) {
      return 66 + 33 * (value) / (242 - upper);
  } else if (lower < value && value < upper) {
      return 33 + 33 * (value - lower) / normal_interval_size;
  } else if (value > 242) {
      return 100;
  } else {
      return 0;
  }
}

const { Title, Paragraph } = Typography;

const AnalysisOfSegmentalFat = ({dispatch, singlerecords}: {dispatch: Dispatch, singlerecords: SingleRecords}) => {

  const {
      BFM_of_Left_Leg,
      Lower_Limit_BFM_of_Left_Leg,
      Upper_Limit_BFM_of_Left_Leg,
      BFM_Persents_of_Left_Leg,


      BFM_of_Right_Leg,
      Lower_Limit_BFM_of_Right_Leg,
      Upper_Limit_BFM_of_Right_Leg,
      BFM_Persents_of_Right_Leg,

      BFM_of_Trunk,
      Lower_Limit_BFM_of_Trunk,
      Upper_Limit_BFM_of_Trunk,
      BFM_Persents_of_Trunk,

      BFM_of_Left_Arm,
      Lower_Limit_BFM_of_Left_Arm,
      Upper_Limit_BFM_of_Left_Arm,
      BFM_Persents_of_Left_Arm,

      BFM_of_Right_Arm,
      Lower_Limit_BFM_of_Right_Arm,
      Upper_Limit_BFM_of_Right_Arm,
      BFM_Persents_of_Right_Arm,
  } = singlerecords;


  return (
    <Typography>
      <Title level={4}>节段脂肪分析</Title>
      <Paragraph>
        <Row>
          <Col span={4}></Col>
          <Col span={4}></Col>
          <Col span={4}>缺乏</Col>
          <Col span={4}>标准</Col>
          <Col span={4}>过量</Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={4}>右上肢</Col>
          <Col span={4}>{BFM_of_Right_Arm} kg</Col>
          <Col span={12}><Progress percent={calBar(BFM_Persents_of_Right_Arm, 80, 150)} showInfo={false} status="active" /></Col>
          <Col span={4}>{BFM_Persents_of_Right_Arm} %</Col>
        </Row>
        <Row>
          <Col span={4}>左上肢</Col>
          <Col span={4}>{BFM_of_Left_Arm} kg</Col>
          <Col span={12}><Progress percent={calBar(BFM_Persents_of_Left_Arm, 80, 150)} showInfo={false} status="active" /></Col>
          <Col span={4}>{BFM_Persents_of_Left_Arm} %</Col>
        </Row>
        <Row>
          <Col span={4}>躯干</Col>
          <Col span={4}>{BFM_of_Trunk} kg</Col>
          <Col span={12}><Progress percent={calBar(BFM_Persents_of_Trunk, 80, 150)} showInfo={false} status="active" /></Col>
          <Col span={4}>{BFM_Persents_of_Trunk} %</Col>
        </Row>
        <Row>
          <Col span={4}>右下肢</Col>
          <Col span={4}>{BFM_of_Right_Leg} kg</Col>
          <Col span={12}><Progress percent={calBar(BFM_Persents_of_Right_Leg, 80, 150)} showInfo={false} status="active" /></Col>
          <Col span={4}>{BFM_Persents_of_Right_Leg} %</Col>
        </Row>
        <Row>
          <Col span={4}>左下肢</Col>
          <Col span={4}>{BFM_of_Left_Leg} kg</Col>
          <Col span={12}><Progress percent={calBar(BFM_Persents_of_Left_Leg, 80, 150)} showInfo={false} status="active" /></Col>
          <Col span={4}>{BFM_Persents_of_Left_Leg} %</Col>
        </Row>
      </Paragraph>
    </Typography>
  );
}


export default connect(({ singlerecords }: { singlerecords: SingleRecords }) => ({
    singlerecords,
  }))(AnalysisOfSegmentalFat);