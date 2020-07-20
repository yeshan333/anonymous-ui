/*
  * 组件：肥胖估计表
*/

import React, { useState, useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { Row, Col, Radio } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const BIM = ({ value, lower, upper }: any) => {
  const [select, setSelect] = useState(0);

  useEffect(() => {
    if (value >= lower && value <= upper) {
      setSelect(1);
    } else if (value < lower) {
      setSelect(2);
    } else if (value > upper) {
      setSelect(3);
    } else {
      setSelect(0);
    }
  });

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setSelect(
      e.target.value
    );
  };

  return (
    <Radio.Group onChange={onChange} value={select}>
      <Radio value={1}>正常</Radio>
      <Radio value={2}>低体重</Radio>
      <Radio value={3}>超重</Radio>
    </Radio.Group>
  );
}

const BodyFactPercentage = ({ value, lower, upper }: any) => {
  const [select, setSelect] = useState(0);

  useEffect(() => {
    if (value >= lower && value <= upper) {
      setSelect(1);
    } else if (value < lower) {
      setSelect(2);
    } else if (value > upper) {
      setSelect(3);
    } else {
      setSelect(0);
    }
  });

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setSelect(
      e.target.value
    );
  };

  return (
    <Radio.Group onChange={onChange} value={select}>
      <Radio value={1}>正常</Radio>
      <Radio value={2}>瘦</Radio>
      <Radio value={3}>肥</Radio>
    </Radio.Group>
  );
}

const EstimateOverweight = ({ dispatch, singlerecords }: { dispatch: Dispatch, singlerecords: SingleRecords }) => {
  const {
    BMI,
    Lower_Limit_BMI,
    Upper_Limit_BMI,
    Percent_Body_Fat,
    Lower_Limit_Percent_Body_Fat,
    Upper_Limit_Percent_Body_Fat,
  } = singlerecords;

  return (
    <Typography>
      <Title level={3} style={{ textAlign: 'center' }}>
        肥胖估计
        </Title>
      <Paragraph>
        <Row>
          <Col span={12} style={{ textAlign: 'center' }}>
            <p>BIM</p>
            <BIM value={BMI} lower={Lower_Limit_BMI} upper={Upper_Limit_BMI} />
          </Col>
          <Col span={12} style={{ textAlign: 'center' }}>
            <p>体脂百分比</p>
            <BodyFactPercentage value={Percent_Body_Fat} lower={Lower_Limit_Percent_Body_Fat} upper={Upper_Limit_Percent_Body_Fat} />
          </Col>
        </Row>
      </Paragraph>
    </Typography>
  );
}

export default connect(({ singlerecords }: { singlerecords: SingleRecords }) => ({
  singlerecords,
}))(EstimateOverweight);