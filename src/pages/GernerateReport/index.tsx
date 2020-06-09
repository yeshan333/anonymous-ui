/*
  * 报告页组件
*/

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Table, Card, Row, Col } from 'antd';
import CalculateScore from './components/CalculateScore';
import WeightControlTable from './components/WeightControl';
import NutritionAssessmentTable from './components/NutritionAssessment';
import EstimateOverweight from './components/EstimateOverweight';

// import styles from './index.less';


const dataSource = [
  {
    key: '1',
    id: '1',
    name: '汕头',
    age: 32,
    height: 500,
    sex: 'male',
    test_date: '2020-02-02 08:08:08',
  },
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'center' as 'center',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center' as 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center' as 'center',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    align: 'center' as 'center',
  },
  {
    title: '身高(cm)',
    dataIndex: 'height',
    key: 'height',
    align: 'center' as 'center',
    render: (text: any) => <p>{text} cm</p>
  },
  {
    title: '测试日期',
    dataIndex: 'test_date',
    key: 'test_date',
    align: 'center' as 'center',
  },
];

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <PageHeaderWrapper>
        <div style={{ textAlign: 'center' as 'center' }}>
          <Spin spinning={loading} size="large" />
        </div>
      </PageHeaderWrapper>
      <Card>
        <CalculateScore />
        <Table dataSource={dataSource} columns={columns} pagination={false} bordered />
      </Card>
      <Row>
        <Col span={12}><Card><WeightControlTable /></Card></Col>
        <Col span={12}><Card><NutritionAssessmentTable /></Card></Col>
      </Row>
      <Card>
        <EstimateOverweight />
      </Card>
      <Card style={{ textAlign: 'center' }}>
        <h2>敬请期待</h2>
      </Card>
    </>
  );
};
