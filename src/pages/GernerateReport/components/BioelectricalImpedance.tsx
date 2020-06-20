/*
  * 生物电阻抗表组件
*/

import React, { useEffect } from 'react';
import { connect } from 'umi';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;


const BioelectricalImpedance = ({dispathc, singlerecords}: any) => {
    const {
        RA_5K,                        // 右上肢5K时电阻抗
        LA_5K,		                  // 左上肢5K时电阻抗
        TR_5K,                        // 躯干5K时电阻抗
        RL_5K,		                  // 右下肢5K电阻抗
        LL_5K,                        // 左下肢5K电阻抗
        RA_50K,
        LA_50K,
        TR_50K,
        RL_50K,
        LL_50K,
        RA_500K,
        LA_500K,
        TR_500K,
        RL_500K,
        LL_500K,
    } = singlerecords;


    return (
        <Typography>
            <Title level={4}>生物电阻抗</Title>
            <Paragraph>
                <Row>
                    <Col span={4}>&ensp;</Col>
                    <Col span={4}>右上肢</Col>
                    <Col span={4}>左上肢</Col>
                    <Col span={4}>躯干</Col>
                    <Col span={4}>右下肢</Col>
                    <Col span={4}>左下肢</Col>
                </Row>
                <Row>
                    <Col span={4}>  5 Hz</Col>
                    <Col span={4}>{RA_5K}</Col>
                    <Col span={4}>{LA_5K}</Col>
                    <Col span={4}>{TR_5K}</Col>
                    <Col span={4}>{RL_5K}</Col>
                    <Col span={4}>{LL_5K}</Col>
                </Row>
                <Row>
                    <Col span={4}> 50 Hz</Col>
                    <Col span={4}>{RA_50K}</Col>
                    <Col span={4}>{LA_50K}</Col>
                    <Col span={4}>{TR_50K}</Col>
                    <Col span={4}>{RL_50K}</Col>
                    <Col span={4}>{LL_50K}</Col>
                </Row>
                <Row>
                    <Col span={4}>500 Hz</Col>
                    <Col span={4}>{RA_500K}</Col>
                    <Col span={4}>{LA_500K}</Col>
                    <Col span={4}>{TR_500K}</Col>
                    <Col span={4}>{RL_500K}</Col>
                    <Col span={4}>{LL_500K}</Col>
                </Row>
            </Paragraph>
        </Typography>
    );
}

export default connect(({ singlerecords }: { singlerecords: any }) => ({
    singlerecords,
  }))(BioelectricalImpedance);