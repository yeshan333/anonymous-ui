/*
  * 组件：健康评分表、肥胖估计也在这
  * Table 组件 columns 类错错误解决方案：https://segmentfault.com/a/1190000022641815
*/

import React from 'react';
import { Statistic, Row, Col } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const CalculateScore: React.FC<{}> = () => (
    <Typography>
        <Title level={3} style={{textAlign: 'center'}}>
            健康评分
        </Title>
        <Paragraph>
            <Row>
                <Col span={12} style={{textAlign: 'center'}}>
                    <Statistic title="评级" value={'优秀'} prefix={<LikeOutlined />} />
                </Col>
                <Col span={12} style={{textAlign: 'center'}}>
                    <Statistic title="分数" value={93} suffix="/ 100 分" />
                </Col>
            </Row>
        </Paragraph>
        <Divider />
    </Typography>
);

export default CalculateScore;

