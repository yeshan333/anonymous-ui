/*
  * 学生设备测得的人体信息表
*/

import React from "react";
import { connect, history } from 'umi';
import { PageLoading } from '@ant-design/pro-layout';

import { Table, Button, Popconfirm } from "antd";
import { DeleteFilled, AreaChartOutlined } from '@ant-design/icons';

import DownloadCSV from './components/DownloadCSV';

import styles from "./index.less";

// 测试记录项类型定义
interface Item {
  /* 组件依赖字段 */
  name: string,
  id: string,

  /* 测试记录字段 */
  IDCard: number,
  ID: number,
  Height: number,
  Gender: string,
  Age: number,
  DateTime: string,

  Weight: number,
  Lower_limit_Weight: number,
  Upper_Limit_Weight: number,

  TBW: number,
  Lower_Limit_TBW: number,              // TBW：Total Body Water：身体总水分
  Upper_Limit_TBW: number,

  ICW: number,                          // Intracellular Water：细胞内水份
  Lower_Limit_ICW: number,
  Upper_Limit_ICW: number,

  ECW: number,                          // ECW：Extracellular Water：细胞外水分
  Lower_Limit_ECW: number,
  Upper_Limit_ECW: number,

  Protein: number,                      // 蛋白质
  Lower_Limit_Protein: number,
  Upper_Limit_Protein: number,   //20

  Mineral: number,                      // 无机盐（矿物质）
  Lower_Limit_Mineral: number,
  Upper_Limit_Mineral: number,

  BFM: number,                          // BFM： Body FAt Mass：体脂肪
  Lower_Limit_BFM: number,
  Upper_Limit_BFM: number,

  SLM: number,                          // SLM：Soft Lean Mass：去脂体重
  Lower_Limit_SLM: number,
  Upper_Limit_SLM: number,

  FFM: number,                          // FFM：Fat Free Mass：去脂体重
  Lower_Limit_FFM: number,
  Upper_Limit_FFM: number,

  SMM: number,                          // SMM：Skeletal MUscle Mass：骨骼肌
  Lower_Limit_SMM: number,
  Upper_Limit_SMM: number,

  BMI: number,                          // BMI：Body Mass Index：身体质量指数
  Lower_Limit_BMI: number,
  Upper_Limit_BMI: number,      //38

  Percent_Body_Fat: number,             // 体脂百分比
  Lower_Limit_Percent_Body_Fat: number,
  Upper_Limit_Percent_Body_Fat: number,

  FFM_of_Right_Arm: number,             // 右上肢脂肪
  Lower_Limit_FFM_of_Right_Arm: number,
  Upper_Limit_FFM_of_Right_Arm: number,
  FFM_Persents_of_Right_Arm: number,

  FFM_of_Left_Arm: number,              // 左上肢脂肪
  Lower_Limit_FFM_of_Left_Arm: number,
  Upper_Limit_FFM_of_Left_Arm: number,
  FFM_Persents_of_Left_Arm: number,


  FFM_of_Trunk: number,                 // 躯干脂肪
  Lower_Limit_FFM_of_Trunk: number,
  Upper_Limit_FFM_of_Trunk: number,    //52
  FFM_Persents_of_Trunk: number,

  FFM_of_Right_Leg: number,             // 右下肢脂肪
  Lower_Limit_FFM_of_Right_Leg: number,
  Upper_Limit_FFM_of_Right_Leg: number,
  FFM_Persents_of_Right_Leg: number,

  Upper_Limit_FFM_of_Left_Leg: number,  // 左下肢脂肪
  Lower_Limit_Upper_Limit_FFM_of_Left_Leg: number,
  Upper_Limit_Upper_Limit_FFM_of_Left_Leg: number,
  FFM_Persents_of_Left_Leg: number,

  ECW_TBW: number,                      // 细胞外水分比

  BFM_of_Right_Arm: number,
  BFM_Persents_of_Right_Arm: number,

  BFM_of_Left_Arm: number,//左上臂脂肪
  BFM_Persents_of_Left_Arm: number,//左上臂脂肪百分比

  BFM_of_Trunk: number,//躯干脂肪
  BFM_Persents_of_Trunk: number,//躯干脂肪百分比

  BFM_of_Right_Leg: number,
  BFM_Persents_of_Right_Leg: number,     //70

  BFM_of_Left_Leg: number,
  BFM_Persents_of_Left_Leg: number,

  Inbody_Score: number,                 // 健康评分

  Target_Weight: number,    //目标体重
  Weight_Control: number,  //体重控制
  BFM_Control: number,                  //  脂肪控制
  FFM_Control: number,                  // 肌肉控制
  Basal_Metabolic_Rate: number,         // 基础代谢率

  Waist_Hip_Ratio: number,   //腰臀比
  Lower_Limit_Waist_Hip_Ratio: number,  //腰臀比范围最小值
  Upper_Limit_Waist_Hip_Ratio: number,   //81

  Visceral_Fat_Level: number,           // 内脏脂肪等级

  Obesity_Degree: number,               // 肥胖程度
  Lower_Limit_Obesity_Degree: number,// 肥胖程度范围最小值
  Upper_Limit_Obesity_Degree: number,

  Body_Cell_Mass: number,               // 身体细胞量
  Lower_Limit_Body_Cell_Mass: number,
  Upper_Limit_Body_Cell_Mass: number,

  Arm_Circumference: number,            // 上臂围度
  Arm_Muscle_Circumference: number,     // 上臂肌肉围度

  Bone_Mineral_Content: number,         // 骨矿物质含量
  Lower_Limit_Bone_Mineral_Content: number,
  Upper_Limit_Bone_Mineral_Content: number,   //93

  RA_5K: number,                        // 右上肢5K时电阻抗
  LA_5K: number,		 // 左上肢5K时电阻抗
  TR_5K: number,                        // 躯干5K时电阻抗
  RL_5K: number,		// 右下肢5K电阻抗
  LL_5K: number,                        // 左下肢5K电阻抗
  RA_50K: number,
  LA_50K: number,
  TR_50K: number,
  RL_50K: number,
  LL_50K: number,
  RA_500K: number,
  LA_500K: number,
  TR_500K: number,
  RL_500K: number,     //107
  LL_500K: number,

  Gestational_Period: number,            // 妊娠期
  Waist: number,                         // 腰
  hipshot: number,                       // 臀
  PrePregnancy_Weight: number,           //  孕前体重
}

const BodyCompositionRecordsTable = ({ dispatch, bodycompositionrecords, loading }: any) => {

  const columns = [
    {
      title: "ID",
      width: 100,
      dataIndex: "IDCard",
      key: "ID",
      // fixed: "left" as "left"
    },
    {
      title: "Height",
      width: 100,
      dataIndex: "Height",
      key: "Height",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      key: "1",
      width: 150
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "Age",
      key: "Age",
    },
    {
      title: "DateTime",
      dataIndex: "DateTime",
      key: "DateTime",
      width: 200
    },
    {
      title: "Weight",
      dataIndex: "Weight",
      key: "Weight",
      width: 90
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_Weight",
      key: "Lower_Limit_Weight",
      width: 90
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_Weight",
      key: "Upper_Limit_Weight",
      width: 90
    },
    {
      title: "TBW",
      dataIndex: "TBW",
      key: "TBW",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_TBW",
      key: "Lower_Limit_TBW",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_TBW",
      key: "Upper_Limit_TBW",
      width: 150
    },
    {
      title: "ICW",
      dataIndex: "ICW",
      key: "ICW",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_ICW",
      key: "Lower_Limit_ICW",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_ICW",
      key: "Upper_Limit_ICW",
      width: 150
    },
    {
      title: "ECW",
      dataIndex: "ECW",
      key: "ECW",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_ECW",
      key: "Lower_Limit_ECW",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_ECW",
      key: "Upper_Limit_ECW",
      width: 150
    },
    {
      title: "Protein",
      dataIndex: "Protein",
      key: "Protein",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_Protein",
      key: "Lower_Limit_Protein",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_Protein",
      key: "Upper_Limit_Protein",
      width: 150
    },
    {
      title: "Mineral",
      dataIndex: "Mineral",
      key: "Mineral",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_Mineral",
      key: "LOwer_Limit_Mineral",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_Mineral",
      key: "Upper_Limit_Mineral",
      width: 150
    },
    {
      title: "BFM",
      dataIndex: "BFM",
      key: "BFM",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_BFM",
      key: "Lower_Limit_BFM",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_BFM",
      key: "Upper_Limit_BFM",
      width: 150
    },
    {
      title: "SLM",
      dataIndex: "SLM",
      key: "SLM",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_SLM",
      key: "Lower_Limit_SLM",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_SLM",
      key: "Upper_Limit_SLM",
      width: 150
    },
    {
      title: "FFM",
      dataIndex: "FFM",
      key: "FFM",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_FFM",
      key: "Lower_Limit_FFM",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_FFM",
      key: "Upper_Limit_FFM",
      width: 150
    },
    {
      title: "SMM",
      dataIndex: "SMM",
      key: "SMM",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_SMM",
      key: "Lower_Limit_SMM",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_SMM",
      key: "Upper_Limit_SMM",
      width: 150
    },
    {
      title: "BMI",
      dataIndex: "BMI",
      key: "BMI",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_BMI",
      key: "Lower_Limit_BMI",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_BMI",
      key: "Upper_Limit_BMI",
      width: 150
    },
    {
      title: "Percent_Body_Fat",
      dataIndex: "Percent_Body_Fat",
      key: "Percent_Body_Fat",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_Percent_Body_Fat",
      key: "Lower_Limit_Percent_Body_Fat",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_Percent_Body_Fat",
      key: "Upper_Limit_Percent_Body_Fat",
      width: 150
    },
    {
      title: "FFM_of_Right_Arm",
      dataIndex: "FFM_of_Right_Arm",
      key: "FFM_of_Right_Arm",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_FFM_of_Right_Arm",
      key: "Lower_Limit_FFM_of_Right_Arm",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_FFM_of_Right_Arm",
      key: "Upper_Limit_FFM_of_Right_Arm",
      width: 150
    },
    {
      title: "FFM_Persents_of_Right_Arm",
      dataIndex: "FFM_Persents_of_Right_Arm",
      key: "FFM_Persents_of_Right_Arm",
      width: 150
    },
    {
      title: "FFM_of_Left_Arm",
      dataIndex: "FFM_of_Left_Arm",
      key: "FFM_of_Left_Arm",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_FFM_of_Left_Arm",
      key: "Lower_Limit_FFM_of_Left_Arm",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_FFM_of_Left_Arm",
      key: "Upper_Limit_FFM_of_Left_Arm",
      width: 150
    },
    {
      title: "FFM_Persents_of_Left_Arm",
      dataIndex: "FFM_Persents_of_Left_Arm",
      key: "FFM_Persents_of_Left_Arm",
      width: 150
    },
    {
      title: "FFM_of_Trunk",
      dataIndex: "FFM_of_Trunk",
      key: "FFM_of_Trunk",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_FFM_of_Trunk",
      key: "Lower_Limit_FFM_of_Trunk",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_FFM_of_Trunk",
      key: "Upper_Limit_FFM_of_Trunk",
      width: 150
    },
    {
      title: "FFM_Persents_of_Trunk",
      dataIndex: "FFM_Persents_of_Trunk",
      key: "FFM_Persents_of_Trunk",
      width: 150
    },
    {
      title: "FFM_of_Right_Leg",
      dataIndex: "FFM_of_Right_Leg",
      key: "FFM_of_Right_Leg",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_FFM_of_Right_Leg",
      key: "Lower_Limit_FFM_of_Right_Leg",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_FFM_of_Right_Leg",
      key: "Upper_Limit_FFM_of_Right_Leg",
      width: 150
    },
    {
      title: "FFM_Persents_of_Right_Leg",
      dataIndex: "FFM_Persents_of_Right_Leg",
      key: "FFM_Persents_of_Right_Leg",
      width: 150
    },
    {
      title: "FFM_of_Left_Leg",
      dataIndex: "FFM_of_Left_Leg",
      key: "FFM_of_Left_Leg",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_FFM_of_Left_Leg",
      key: "Lower_Limit_FFM_of_Left_Leg",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_FFM_of_Left_Leg",
      key: "Upper_Limit_FFM_of_Left_Leg",
      width: 150
    },
    {
      title: "FFM_Persents_of_Left_Leg",
      dataIndex: "FFM_Persents_of_Left_Leg",
      key: "FFM_Persents_of_Left_Leg",
      width: 150
    },
    {
      title: "ECW_TBW",
      dataIndex: "ECW_TBW",
      key: "ECW_TBW",
      width: 150
    },
    {
      title: "BFM_of_Right_Arm",
      dataIndex: "BFM_of_Right_Arm",
      key: "BFM_of_Right_Arm",
      width: 150
    },
    {
      title: "BFM_Persents_of_Right_Arm",
      dataIndex: "BFM_Persents_of_Right_Arm",
      key: "BFM_Persents_of_Right_Arm",
      width: 150
    },
    {
      title: "BFM_of_Left_Arm",
      dataIndex: "BFM_of_Left_Arm",
      key: "BFM_of_Left_Arm",
      width: 150
    },
    {
      title: "BFM_Persents_of_Left_Arm",
      dataIndex: "BFM_Persents_of_Left_Arm",
      key: "BFM_Persents_of_Left_Arm",
      width: 150
    },
    {
      title: "BFM_of_Trunk",
      dataIndex: "BFM_of_Trunk",
      key: "BFM_of_Trunk",
      width: 150
    },
    {
      title: "BFM_Persents_of_Trunk",
      dataIndex: "BFM_Persents_of_Trunk",
      key: "BFM_Persents_of_Trunk",
      width: 150
    },
    {
      title: "BFM_of_Right_Leg",
      dataIndex: "BFM_of_Right_Leg",
      key: "BFM_of_Right_Leg",
      width: 150
    },
    {
      title: "BFM_Persents_of_Right_Leg",
      dataIndex: "BFM_Persents_of_Right_Leg",
      key: "BFM_Persents_of_Right_Leg",
      width: 150
    },
    {
      title: "BFM_of_Left_Leg",
      dataIndex: "BFM_of_Left_Leg",
      key: "BFM_of_Left_Leg",
      width: 150
    },
    {
      title: "BFM_Persents_of_Left_Leg",
      dataIndex: "BFM_Persents_of_Left_Leg",
      key: "BFM_Persents_of_Left_Leg",
      width: 150
    },
    {
      title: "Inbody_Score",
      dataIndex: "Inbody_Score",
      key: "Inbody_Score",
      width: 150
    },
    {
      title: "Target_Weight",
      dataIndex: "Target_Weight",
      key: "Target_Weight",
      width: 150
    },
    {
      title: "Weight_Control",
      dataIndex: "Weight_Control",
      key: "Weight_Control",
      width: 150
    },
    {
      title: "BFM_Control",
      dataIndex: "BFM_Control",
      key: "BFM_Control",
      width: 150
    },
    {
      title: "FFM_Control",
      dataIndex: "FFM_Control",
      key: "FFM_Control",
      width: 150
    },
    {
      title: "Basal_Metabolic_Rate",
      dataIndex: "Basal_Metabolic_Rate",
      key: "Basal_Metabolic_Rate",
      width: 150
    },
    {
      title: "Waist_Hip_Ratio",
      dataIndex: "Waist_Hip_Ratio",
      key: "Waist_Hip_Ratio",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_Waist_Hip_Ratio",
      key: "Lower_Limit_Waist_Hip_Ratio",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_Waist_Hip_Ratio",
      key: "Upper_Limit_Waist_Hip_Ratio",
      width: 150
    },
    {
      title: "Visceral_Fat_Level",
      dataIndex: "Visceral_Fat_Level",
      key: "Visceral_Fat_Level",
      width: 150
    },
    {
      title: "Obesity_Degree",
      dataIndex: "Obesity_Degree",
      key: "Obesity_Degree",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_Obesity_Degree",
      key: "Lower_Limit_Obesity_Degree",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_Obesity_Degree",
      key: "Upper_Limit_Obesity_Degree",
      width: 150
    },
    {
      title: "Body_Cell_Mass",
      dataIndex: "Body_Cell_Mass",
      key: "Body_Cell_Mass",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_Body_Cell_Mass",
      key: "Lower_Limit_Body_Cell_Mass",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_Body_Cell_Mass",
      key: "Upper_Limit_Body_Cell_Mass",
      width: 150
    },
    {
      title: "Arm_Circumference",
      dataIndex: "Arm_Circumference",
      key: "Arm_Circumference",
      width: 150
    },
    {
      title: "Arm_Muscle_Circumference",
      dataIndex: "Arm_Muscle_Circumference",
      key: "Arm_Muscle_Circumference",
      width: 150
    },
    {
      title: "Bone_Mineral_Content",
      dataIndex: "Bone_Mineral_Content",
      key: "Bone_Mineral_Content",
      width: 150
    },
    {
      title: "Lower",
      dataIndex: "Lower_Limit_Bone_Mineral_Content",
      key: "Lower_Limit_Bone_Mineral_Content",
      width: 150
    },
    {
      title: "Upper",
      dataIndex: "Upper_Limit_Bone_Mineral_Content",
      key: "Upper_Limit_Bone_Mineral_Content",
      width: 150
    },
    {
      title: "RA_5K",
      dataIndex: "RA_5K",
      key: "RA_5K",
      width: 150,
    },
    {
      title: "LA_5K",
      dataIndex: "LA_5K",
      key: "LA_5K",
      width: 150,
    },
    {
      title: "TR_5K",
      dataIndex: "TR_5K",
      key: "TR_5K",
      width: 150,
    },
    {
      title: "RL_5K",
      dataIndex: "RL_5K",
      key: "RL_5K",
      width: 150,
    },
    {
      title: "LL_5K",
      dataIndex: "LL_5K",
      key: "LL_5K",
      width: 150,
    },
    {
      title: "RA_50K",
      dataIndex: "RA_50K",
      key: "RA_50K",
      width: 150,
    },
    {
      title: "LA_50K",
      dataIndex: "LA_50K",
      key: "LA_50K",
      width: 150,
    },
    {
      title: "TR_50K",
      dataIndex: "TR_50K",
      key: "TR_50K",
      width: 150,
    },
    {
      title: "RL_50K",
      dataIndex: "RL_50K",
      key: "RL_50K",
      width: 150,
    },
    {
      title: "LL_50K",
      dataIndex: "LL_50K",
      key: "LL_50K",
      width: 150,
    },
    {
      title: "RA_500K",
      dataIndex: "RA_500K",
      key: "RA_500K",
      width: 150,
    },
    {
      title: "LA_500K",
      dataIndex: "LA_500K",
      key: "LA_500K",
      width: 150,
    },
    {
      title: "TR_500K",
      dataIndex: "TR_500K",
      key: "TR_500K",
      width: 150,
    },
    {
      title: "RL_500K",
      dataIndex: "RL_500K",
      key: "RL_500K",
      width: 150,
    },
    {
      title: "LL_500K",
      dataIndex: "LL_500K",
      key: "LL_500K",
      width: 150,
    },
    {
      title: "Gestational_Period",
      dataIndex: "Gestational_Period",
      key: "Gestational_Period",
      width: 150,
    },
    {
      title: "Waist",
      dataIndex: "Waist",
      key: "Waist",
      width: 150,
    },
    {
      title: "hipshot",
      dataIndex: "hipshot",
      key: "hipshot",
      width: 150,
    },
    {
      title: "PrePregnancy_Weight",
      dataIndex: "PrePregnancy_Weight",
      key: "PrePregnancy_Weight",
      width: 150,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right" as "right",
      width: 100,
      render: (_: any, record: Item) => (
        <Popconfirm placement="top" title={"确定删除？"} onConfirm={() => dispatch({ type: 'bodycompositionrecords/deleteRecord', payload: record.id })} okText="Yes" cancelText="No">
          <Button danger><DeleteFilled /></Button>
        </Popconfirm>
      )
    }
  ];

  return loading ? (<PageLoading />) : (
    <div className={styles.container}>
      <div id="components-table-demo-fixed-columns-header">
        <Button
          type="primary"
          onClick={() => history.push('/generate-report')}
          icon={<AreaChartOutlined />}>
          生成报告
        </Button>
        &ensp;
        <DownloadCSV />
        <Table columns={columns} dataSource={bodycompositionrecords} rowKey="id" scroll={{ x: 1500, /* y: 300 */ }} />
      </div>
    </div>
  );
}

/*
  * bodycompositionrecords: 人体成分记录
*/

export default connect(({ bodycompositionrecords, loading }: { bodycompositionrecords: any, loading: any }) => ({
  bodycompositionrecords,
  loading: loading.models.bodycompositionrecords,
}))(BodyCompositionRecordsTable);
