/*
  * 人体成分分析表组件
*/

import React from 'react';
import { connect } from 'umi';
import { Table, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const columns1 = [
  {
    key: 'Project',
    title: '项目',
    dataIndex: 'Project',
    align: 'center' as 'center',
  },
  {
    key: 'Value',
    title: '测量值',
    dataIndex: 'Value',
    align: 'center' as 'center',
  },
  {
    key: 'Lower',
    title: '正常范围(~到~)',
    // colSpan: 2,
    dataIndex: 'Lower',
    align: 'center' as 'center',
  },
/*   {
    key: 'Upper',
    title: '正常范围上界',
    colSpan: 0,
    dataIndex: 'Upper',
    align: 'center' as 'center',
  }, */
];

/* const columns = [
    {
      key: 'Project',
      title: '项目',
      dataIndex: 'Project',
      align: 'center' as 'center',
    },
    {
      key: 'TBW',
      title: '身体总水分',
      dataIndex: 'TBW',
      align: 'center' as 'center',
    },
    {
      key: 'Protein',
      title: '蛋白质',
      dataIndex: 'Protein',
      align: 'center' as 'center',
    },
    {
      key: 'Mineral',
      title: '无机盐',
      dataIndex: 'Mineral',
      align: 'center' as 'center',
    },
    {
      title: '体脂肪',
      dataIndex: 'BFM',
      key: 'BFM',
      align: 'center' as 'center',
    },
    {
      title: '肌肉重',
      dataIndex: 'SLM',
      key: 'SLM',
      align: 'center' as 'center',
    },
    {
      title: '去脂体重',
      dataIndex: 'FFM',
      key: 'FFM',
      align: 'center' as 'center',
    },
    {
      title: '体重',
      dataIndex: 'Weight',
      key: 'Weight',
      align: 'center' as 'center',
    },
]; */

const AnalysisOfHumanComposition: React.FC = ({ dispatch, singlerecords }: any) => {
  const {
    TBW,
    Lower_Limit_TBW,
    Upper_Limit_TBW,
    Protein,
    Lower_Limit_Protein,
    Upper_Limit_Protein,
    Mineral,                      // 无机盐（矿物质）
    Lower_Limit_Mineral,
    Upper_Limit_Mineral,
    BFM,                          // BFM： Body FAt Mass：体脂肪
    Lower_Limit_BFM,
    Upper_Limit_BFM,
    SLM,                          // SLM：Soft Lean Mass：肌肉重
    Lower_Limit_SLM,
    Upper_Limit_SLM,
    FFM,                          // FFM：Fat Free Mass：去脂体重
    Lower_Limit_FFM,
    Upper_Limit_FFM,
    Weight,
    Lower_Limit_Weight,
    Upper_Limit_Weight,
  } = singlerecords;

  const dataSource = [
    {
      key: '1',
      Project: '身体总水分',
      Value: TBW, // TBW
      Lower: `${Lower_Limit_TBW} - ${Upper_Limit_TBW}`,
      // Upper: Upper_Limit_TBW,
    },
    {
      key: '2',
      Project: '蛋白质',
      Value: Protein,  // Protein
      Lower: `${Lower_Limit_Protein} - ${Upper_Limit_Protein}`,
      // Upper: Upper_Limit_Protein,
    },
    {
      key: '3',
      Project: '无机盐',
      Value: Mineral,  // Mineral
      Lower: `${Lower_Limit_Mineral} - ${Upper_Limit_Mineral}`,
      // Upper: Upper_Limit_Mineral,
    },
    {
      key: '4',
      Project: '体脂肪',
      Value: BFM,  // BFM
      Lower: `${Lower_Limit_BFM} - ${Upper_Limit_BFM}`,
      // Upper: Upper_Limit_BFM,
    },
    {
      key: '5',
      Project: '肌肉重',
      Value: SLM,  // SLM
      Lower: `${Lower_Limit_SLM} - ${Upper_Limit_SLM}`,
      // Upper: Upper_Limit_SLM,
    },
    {
      key: '6',
      Project: '去脂体重',
      Value: FFM,  // FFM
      Lower: `${Lower_Limit_FFM} - ${Upper_Limit_FFM}`,
      // Upper: Upper_Limit_FFM,
    },
    {
      key: '7',
      Project: '体重',
      Value: Weight,  // Weight
      Lower: `${Lower_Limit_Weight} - ${Upper_Limit_Weight}`,
      // Upper: Upper_Limit_Weight,
    },
  ];

  return (
    <Typography>
      <Title level={4}>人体成分分析</Title>
      <Paragraph>
        <Table columns={columns1} dataSource={dataSource} bordered pagination={false} />
      </Paragraph>
    </Typography>
  );
}

export default connect(({ singlerecords }: { singlerecords: any }) => ({
  singlerecords,
}))(AnalysisOfHumanComposition);