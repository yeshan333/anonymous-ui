/*
  * 肌肉均衡表组件
*/

import React, { useState, useEffect } from 'react';
import { GroupedBar } from '@ant-design/charts';

const MuscleBalance: React.FC = () => {
    const data = [
      {
        label: '右上肢',
        type: '正常范围1',
        value: 2.96,
      },
      {
        label: '右上肢',
        type: '正常范围（%）',
        value: 129.0,
      },
      {
        label: '左上肢',
        type: '正常范围1',
        value: 2.97,
      },
      {
        label: '左上肢',
        type: '正常范围（%）',
        value: 129.3,
      },
      {
        label: '躯干',
        type: '正常范围1',
        value: 28.15,
      },
      {
        label: '躯干',
        type: '正常范围（%）',
        value: 134.8,
      },
      {
        label: '左下肢',
        type: '正常范围1',
        value: 7.73,
      },
      {
        label: '左下肢',
        type: '正常范围（%）',
        value: 106.4,
      },
      {
        label: '右下肢',
        type: '正常范围1',
        value: 8.13,
      },
      {
        label: '右下肢',
        type: '正常范围（%）',
        value: 111.9,
      },
    ];
    const config = {
      title: {
        visible: true,
        alignTo: 'middle' as 'middle',
        text: '肌肉均衡',
      },
      description: {
        visible: true,
        alignTo: 'middle' as 'middle',
        text: '附注：xxx之内正常，xxx怎么样'
      },
      data,
      xField: 'value',
      yField: 'label',
      groupField: 'type',
      xlabel: 'wocao',
      color: ['#1383ab', '#c52125'],
      meta: {
          value: {
              alias: '测量值',
          }
      },
      label: { formatter: (v: any) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) },
    };
    return <GroupedBar {...config} />;
  };

export default MuscleBalance;