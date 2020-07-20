/*
  * 组件：健康评分表、肥胖估计也在这
  * Table 组件 columns 类错错误解决方案：https://segmentfault.com/a/1190000022641815
*/

import React from 'react';
import { connect, Dispatch } from 'umi';
import { Statistic, Row, Col } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const CalculateScore = ({ dispatch, singlerecords }: { dispatch: Dispatch, singlerecords: SingleRecords }) => {

    const { Inbody_Score } = singlerecords;
    const [ level, setLevel ] = React.useState('不合格');

    React.useEffect(() => {
        if(Inbody_Score >= 90) {
            setLevel("优秀");
        } else if(Inbody_Score < 90 && Inbody_Score > 70) {
            setLevel("良好");
        } else if(Inbody_Score > 60 && Inbody_Score <= 70) {
            setLevel("合格");
        } else {
            setLevel("不合格");
        }
    });

    return (
        <Typography>
            <Title level={3} style={{ textAlign: 'center' }}>
                健康评分
        </Title>
            <Paragraph>
                <Row>
                    <Col span={12} style={{ textAlign: 'center' }}>
                        <Statistic title="评级" value={level} prefix={<LikeOutlined />} />
                    </Col>
                    <Col span={12} style={{ textAlign: 'center' }}>
                        <Statistic title="分数" value={Inbody_Score | 0} suffix="/ 100 分" />
                    </Col>
                </Row>
            </Paragraph>
            <Divider />
        </Typography>
    );
}

export default connect(({ singlerecords }: { singlerecords: SingleRecords }) => ({
    singlerecords,
}))(CalculateScore);

