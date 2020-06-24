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

const Tester = () => {
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
          <Col span={4}>1.1 kg</Col>
          <Col span={12}><Progress percent={20} showInfo={false} status="exception" /></Col>
          <Col span={4}>107.9%</Col>
        </Row>
        <Row>
          <Col span={4}>左上肢</Col>
          <Col span={4}>1.1 kg</Col>
          <Col span={12}><Progress percent={55} showInfo={false} status="exception" /></Col>
          <Col span={4}>107.9%</Col>
        </Row>
        <Row>
          <Col span={4}>躯干</Col>
          <Col span={4}>1.1 kg</Col>
          <Col span={12}><Progress percent={80} showInfo={false} status="exception" /></Col>
          <Col span={4}>107.9%</Col>
        </Row>
        <Row>
          <Col span={4}>右下肢</Col>
          <Col span={4}>1.1 kg</Col>
          <Col span={12}><Progress percent={100} showInfo={false} status="exception" /></Col>
          <Col span={4}>107.9%</Col>
        </Row>
        <Row>
          <Col span={4}>左下肢</Col>
          <Col span={4}>1.1 kg</Col>
          <Col span={12}><Progress percent={55} showInfo={false} status="exception" /></Col>
          <Col span={4}>107.9%</Col>
        </Row>
      </Paragraph>
    </Typography>
  );
}

export default Tester;