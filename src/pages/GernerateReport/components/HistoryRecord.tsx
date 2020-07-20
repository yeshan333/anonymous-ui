/*
  * 人体成分测试历史记录表
*/

import React from 'react';
import { connect, Dispatch } from 'umi';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const HistoryRecord = ({ dispatch, singlerecords }: { dispatch: Dispatch, singlerecords: SingleRecords }) => {
    return (
        <Typography>
            <Title level={4}>人体成分测试历史记录</Title>
            <Paragraph>
                <Row>
                    <Col span={12}>体重</Col>
                    <Col span={12}></Col>
                </Row>
                <Row>
                    <Col span={12}>骨骼肌</Col>
                    <Col span={12}></Col>
                </Row>
                <Row>
                    <Col span={12}>体脂百分比</Col>
                    <Col span={12}></Col>
                </Row>
                <Row>
                    <Col span={12}>细胞外水分比率</Col>
                    <Col span={12}></Col>
                </Row>
                <Row>
                    <Col span={12}>时间</Col>
                    <Col span={12}></Col>
                </Row>
            </Paragraph>
        </Typography>
    );
}

export default connect(({ singlerecords }: { singlerecords: SingleRecords }) => ({
    singlerecords,
}))(HistoryRecord);