/*
  * 组件：肥胖估计
*/

import React from 'react';
import { Row, Col, Radio } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

class BIM extends React.Component {
    state = {
      value: 1,
    };

    onChange = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
    };

    render() {
      return (
        <Radio.Group onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>正常</Radio>
          <Radio value={2}>低体重</Radio>
          <Radio value={3}>超重</Radio>
        </Radio.Group>
      );
    }
  }

  class BodyFactPercentage extends React.Component {
    state = {
      value: 1,
    };

    onChange = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
    };

    render() {
      return (
        <Radio.Group onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>正常</Radio>
          <Radio value={2}>瘦</Radio>
          <Radio value={3}>肥</Radio>
        </Radio.Group>
      );
    }
  }

const EstimateOverweight: React.FC<{}> = () => (
    <Typography>
        <Title level={3} style={{textAlign: 'center'}}>
            肥胖估计
        </Title>
        <Paragraph>
            <Row>
                <Col span={12} style={{textAlign: 'center'}}>
                    <p>BIM</p>
                    <BIM />
                </Col>
                <Col span={12} style={{textAlign: 'center'}}>
                    <p>体脂百分比</p>
                    <BodyFactPercentage />
                </Col>
            </Row>
        </Paragraph>
    </Typography>
);

export default EstimateOverweight;

