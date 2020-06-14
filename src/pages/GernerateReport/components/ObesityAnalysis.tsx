/*
  * 肥胖分析表组件
*/

import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const ObesityAnalysis: React.FC = () => {
  const data = [
    {
      项目: '体重',
      测量值: 72.2,
    },
    {
      项目: '骨骼',
      测量值: 29.9,
    },
    {
      项目: '体脂肪',
      测量值: 19.4,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '肥胖分析',
    },
    description: {
        visible: true,
        text: '附注：xxx正常值范围、不正常xxx、流弊xxx',

    },
    forceFit: true,
    data,
    xField: '测量值',
    yField: '项目',
    label: {
      visible: true,
      position: 'middle',
      formatter: (v: any) => `${v}（kg）`,
    },
  };
  return <Bar {...config} />;
};
export default ObesityAnalysis;