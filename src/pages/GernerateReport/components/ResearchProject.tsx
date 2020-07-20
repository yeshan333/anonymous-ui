/*
  * 研究项目组件
*/

import React from 'react';
import { connect } from 'umi';
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

/* const data = {
  ICW: '24.6',
  ECW: '14.3',
  SMM: '29.9',
  Basal_Metabolic_Rate: '1522.1',
  Lower_Limit_ICW: '19.9',
  Upper_Limit_ICW: '24.3',
  Lower_Limit_SMM: '24.1',
  Upper_Limit_SMM: '29.4',
  Lower_Limit_ECW: '12.2',
  Upper_Limit_ECW: '14.9',
} */

const ResearchProject: React.FC = ({ dispathc, singlerecords }: any) => {
  const {
    ICW,
    Lower_Limit_ICW,
    Upper_Limit_ICW,
    ECW,
    Lower_Limit_ECW,
    Upper_Limit_ECW,
    SMM,
    Lower_Limit_SMM,
    Upper_Limit_SMM,
    Basal_Metabolic_Rate,

  } = singlerecords;

  return (
    <Typography>
      <Title level={4}>研究项目</Title>
      <Paragraph>
        <Row>
          <Col span={8}>
            <p>细胞内水分</p>
            <p>细胞外水分</p>
            <p>骨骼肌</p>
            <p>基础代谢率</p>
          </Col>
          <Col span={8}>
            <p>{ICW} L</p>
            <p>{ECW} L</p>
            <p>{SMM} kg</p>
            <p>{Basal_Metabolic_Rate} kj/m<sup>2</sup>/h</p>
          </Col>
          <Col span={8}>
            <p>({Lower_Limit_ICW}-{Upper_Limit_ICW})</p>
            <p>({Lower_Limit_ECW}-{Upper_Limit_ECW})</p>
            <p>({Lower_Limit_SMM}-{Upper_Limit_SMM})</p>
            {/* <p>{}-{}</p> */}
          </Col>
        </Row>
      </Paragraph>
    </Typography>

  );
}

export default connect(({ singlerecords }: { singlerecords: any }) => ({
  singlerecords,
}))(ResearchProject);