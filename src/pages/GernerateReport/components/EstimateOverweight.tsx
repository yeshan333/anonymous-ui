/*
  * 组件：肥胖估计
*/

import React from 'react';
import { Statistic, Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const EstimateOverweight: React.FC<{}> = () => (
    <Typography>
        <Title level={3} style={{textAlign: 'center'}}>
            肥胖估计
        </Title>
        <Paragraph>
            <Row>
                <Col span={12} style={{textAlign: 'center'}}>
                    <Statistic title="BIM" value={'正常/低体重/超重'} />
                </Col>
                <Col span={12} style={{textAlign: 'center'}}>
                    <Statistic title="体脂百分率" value={'正常/低体重/超重'} />
                </Col>
            </Row>
        </Paragraph>
    </Typography>
);

export default EstimateOverweight;

