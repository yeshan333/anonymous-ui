/*
  * 节段脂肪分析组件
*/

import React from 'react';
import { connect } from 'umi';
import { Progress, Typography, Row, Col } from 'antd';

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

const AnalysisOfSegmentalFat = ({dispatch, singlerecords}: {dispatch: any, singlerecords: SingleRecords}) => {

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
          <Col span={12}><Progress percent={calculateBarValue(BFM_of_Right_Arm, Lower_Limit_BFM_of_Right_Arm, Upper_Limit_BFM_of_Right_Arm)} showInfo={false} status="active" /></Col>
          <Col span={4}>{BFM_Persents_of_Right_Arm} %</Col>
        </Row>
        <Row>
          <Col span={4}>左上肢</Col>
          <Col span={4}>{BFM_of_Left_Arm} kg</Col>
          <Col span={12}><Progress percent={calculateBarValue(BFM_Persents_of_Left_Arm, Lower_Limit_BFM_of_Left_Arm, Upper_Limit_BFM_of_Left_Arm)} showInfo={false} status="active" /></Col>
          <Col span={4}>{BFM_Persents_of_Left_Arm} %</Col>
        </Row>
        <Row>
          <Col span={4}>躯干</Col>
          <Col span={4}>{BFM_of_Trunk} kg</Col>
          <Col span={12}><Progress percent={calculateBarValue(BFM_of_Trunk, Lower_Limit_BFM_of_Trunk, Upper_Limit_BFM_of_Trunk)} showInfo={false} status="active" /></Col>
          <Col span={4}>{BFM_Persents_of_Trunk} %</Col>
        </Row>
        <Row>
          <Col span={4}>右下肢</Col>
          <Col span={4}>{BFM_of_Right_Leg} kg</Col>
          <Col span={12}><Progress percent={calculateBarValue(BFM_of_Right_Leg, Lower_Limit_BFM_of_Right_Leg, Upper_Limit_BFM_of_Right_Leg)} showInfo={false} status="active" /></Col>
          <Col span={4}>{BFM_Persents_of_Right_Leg} %</Col>
        </Row>
        <Row>
          <Col span={4}>左下肢</Col>
          <Col span={4}>{BFM_of_Left_Leg} kg</Col>
          <Col span={12}><Progress percent={calculateBarValue(BFM_of_Left_Leg, Lower_Limit_BFM_of_Left_Leg, Upper_Limit_BFM_of_Left_Leg)} showInfo={false} status="active" /></Col>
          <Col span={4}>{BFM_Persents_of_Left_Leg} %</Col>
        </Row>
      </Paragraph>
    </Typography>
  );
}


export default connect(({ singlerecords }: { singlerecords: any }) => ({
    singlerecords,
  }))(AnalysisOfSegmentalFat);