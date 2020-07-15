/*
  * 用户数据导出（CSV）组件
  * ref: https://github.com/eligrey/FileSaver.js
*/

//TODO: refactor

import React from "react";
// import request from 'umi-request';
import { connect } from 'umi';
import { Button } from "antd";
import { DownloadOutlined } from '@ant-design/icons';

// import { saveAs } from 'file-saver';

import { CSVLink } from "react-csv";

const headers = [
    {
      key: "IDCard",
      label: "ID",
    },
    {
      key: "Height",
      label: "Height",
    },
    {
      key: "Gender",
      label: "Gender",
    },
    {
      key: "Age",
      label: "Age",
    },
    {
      key: "DateTime",
      label: "DateTime",
    },
    {
      key: "Weight",
      label: "Weight",
    },
    {
      key: "Lower_Limit_Weight",
      label: "Lower_Limit_Weight",
    },
    {
      key: "Upper_Limit_Weight",
      label: "Upper_Limit_Weight",
    },
    {
      key: "TBW",
      label: "TBW",
    },
    {
      key: "Lower_Limit_TBW",
      label: "Lower_Limit_TBW",
    },
    {
      key: "Upper_Limit_TBW",
      label: "Upper_Limit_TBW",
    },
    {
      key: "ICW",
      label: "ICW",
    },
    {
      key: "Lower_Limit_ICW",
      label: "Lower_Limit_ICW",
    },
    {
      key: "Upper_Limit_ICW",
      label: "Upper_Limit_ICW",
    },
    {
      key: "ECW",
      label: "ECW",
    },
    {
      key: "Lower_Limit_ECW",
      label: "Lower_Limit_ECW",
    },
    {
      key: "Upper_Limit_ECW",
      label: "Upper_Limit_ECW",
    },
    {
      key: "Protein",
      label: "Protein",
    },
    {
      key: "Lower_Limit_Protein",
      label: "Lower_Limit_Protein",
    },
    {
      key: "Upper_Limit_Protein",
      label: "Upper_Limit_Protein",
    },
    {
      key: "Mineral",
      label: "Mineral",
    },
    {
      key: "Lower_Limit_Mineral",
      label: "LOwer_Limit_Mineral",
    },
    {
      key: "Upper_Limit_Mineral",
      label: "Upper_Limit_Mineral",
    },
    {
      key: "BFM",
      label: "BFM",
    },
    {
      key: "Lower_Limit_BFM",
      label: "Lower_Limit_BFM",
    },
    {
      key: "Upper_Limit_BFM",
      label: "Upper_Limit_BFM",
    },
    {
      key: "SLM",
      label: "SLM",
    },
    {
      key: "Lower_Limit_SLM",
      label: "Lower_Limit_SLM",
    },
    {
      key: "Upper_Limit_SLM",
      label: "Upper_Limit_SLM",
    },
    {
      key: "FFM",
      label: "FFM",
    },
    {
      key: "Lower_Limit_FFM",
      label: "Lower_Limit_FFM",
    },
    {
      key: "Upper_Limit_FFM",
      label: "Upper_Limit_FFM",
    },
    {
      key: "SMM",
      label: "SMM",
    },
    {
      key: "Lower_Limit_SMM",
      label: "Lower_Limit_SMM",
    },
    {
      key: "Upper_Limit_SMM",
      label: "Upper_Limit_SMM",
    },
    {
      key: "BMI",
      label: "BMI",
    },
    {
      key: "Lower_Limit_BMI",
      label: "Lower_Limit_BMI",
    },
    {
      key: "Upper_Limit_BMI",
      label: "Upper_Limit_BMI",
    },
    {
      key: "Percent_Body_Fat",
      label: "Percent_Body_Fat",
    },
    {
      key: "Lower_Limit_Percent_Body_Fat",
      label: "Lower_Limit_Percent_Body_Fat",
    },
    {
      key: "Upper_Limit_Percent_Body_Fat",
      label: "Upper_Limit_Percent_Body_Fat",
    },
    {
      key: "FFM_of_Right_Arm",
      label: "FFM_of_Right_Arm",
    },
    {
      key: "Lower_Limit_FFM_of_Right_Arm",
      label: "Lower_Limit_FFM_of_Right_Arm",
    },
    {
      key: "Upper_Limit_FFM_of_Right_Arm",
      label: "Upper_Limit_FFM_of_Right_Arm",
    },
    {
      key: "FFM_Persents_of_Right_Arm",
      label: "FFM_Persents_of_Right_Arm",
    },
    {
      key: "FFM_of_Left_Arm",
      label: "FFM_of_Left_Arm",
    },
    {
      key: "Lower_Limit_FFM_of_Left_Arm",
      label: "Lower_Limit_FFM_of_Left_Arm",
    },
    {
      key: "Upper_Limit_FFM_of_Left_Arm",
      label: "Upper_Limit_FFM_of_Left_Arm",
    },
    {
      key: "FFM_Persents_of_Left_Arm",
      label: "FFM_Persents_of_Left_Arm",
    },
    {
      key: "FFM_of_Trunk",
      label: "FFM_of_Trunk",
    },
    {
      key: "Lower_Limit_FFM_of_Trunk",
      label: "Lower_Limit_FFM_of_Trunk",
    },
    {
      key: "Upper_Limit_FFM_of_Trunk",
      label: "Upper_Limit_FFM_of_Trunk",
    },
    {
      key: "FFM_Persents_of_Trunk",
      label: "FFM_Persents_of_Trunk",
    },
    {
      key: "FFM_of_Right_Leg",
      label: "FFM_of_Right_Leg",
    },
    {
      key: "Lower_Limit_FFM_of_Right_Leg",
      label: "Lower_Limit_FFM_of_Right_Leg",
    },
    {
      key: "Upper_Limit_FFM_of_Right_Leg",
      label: "Upper_Limit_FFM_of_Right_Leg",
    },
    {
      key: "FFM_Persents_of_Right_Leg",
      label: "FFM_Persents_of_Right_Leg",
    },
    {
      key: "FFM_of_Left_Leg",
      label: "FFM_of_Left_Leg",
    },
    {
      key: "Lower_Limit_FFM_of_Left_Leg",
      label: "Lower_Limit_FFM_of_Left_Leg",
    },
    {
      key: "Upper_Limit_FFM_of_Left_Leg",
      label: "Upper_Limit_FFM_of_Left_Leg",
    },
    {
      key: "FFM_Persents_of_Left_Leg",
      label: "FFM_Persents_of_Left_Leg",
    },
    {
      key: "ECW_TBW",
      label: "ECW_TBW",
    },
    {
      key: "BFM_of_Right_Arm",
      label: "BFM_of_Right_Arm",
    },
    {
      key: "BFM_Persents_of_Right_Arm",
      label: "BFM_Persents_of_Right_Arm",
    },
    {
      key: "BFM_of_Left_Arm",
      label: "BFM_of_Left_Arm",
    },
    {
      key: "BFM_Persents_of_Left_Arm",
      label: "BFM_Persents_of_Left_Arm",
    },
    {
      key: "BFM_of_Trunk",
      label: "BFM_of_Trunk",
    },
    {
      key: "BFM_Persents_of_Trunk",
      label: "BFM_Persents_of_Trunk",
    },
    {
      key: "BFM_of_Right_Leg",
      label: "BFM_of_Right_Leg",
    },
    {
      key: "BFM_Persents_of_Right_Leg",
      label: "BFM_Persents_of_Right_Leg",
    },
    {
      key: "BFM_of_Left_Leg",
      label: "BFM_of_Left_Leg",
    },
    {
      key: "BFM_Persents_of_Left_Leg",
      label: "BFM_Persents_of_Left_Leg",
    },
    {
      key: "Inbody_Score",
      label: "Inbody_Score",
    },
    {
      key: "Target_Weight",
      label: "Target_Weight",
    },
    {
      key: "Weight_Control",
      label: "Weight_Control",
    },
    {
      key: "BFM_Control",
      label: "BFM_Control",
    },
    {
      key: "FFM_Control",
      label: "FFM_Control",
    },
    {
      key: "Basal_Metabolic_Rate",
      label: "Basal_Metabolic_Rate",
    },
    {
      key: "Waist_Hip_Ratio",
      label: "Waist_Hip_Ratio",
    },
    {
      key: "Lower_Limit_Waist_Hip_Ratio",
      label: "Lower_Limit_Waist_Hip_Ratio",
    },
    {
      key: "Upper_Limit_Waist_Hip_Ratio",
      label: "Upper_Limit_Waist_Hip_Ratio",
    },
    {
      key: "Visceral_Fat_Level",
      label: "Visceral_Fat_Level",
    },
    {
      key: "Obesity_Degree",
      label: "Obesity_Degree",
    },
    {
      key: "Lower_Limit_Obesity_Degree",
      label: "Lower_Limit_Obesity_Degree",
    },
    {
      key: "Upper_Limit_Obesity_Degree",
      label: "Upper_Limit_Obesity_Degree",
    },
    {
      key: "Body_Cell_Mass",
      label: "Body_Cell_Mass",
    },
    {
      key: "Lower_Limit_Body_Cell_Mass",
      label: "Lower_Limit_Body_Cell_Mass",
    },
    {
      key: "Upper_Limit_Body_Cell_Mass",
      label: "Upper_Limit_Body_Cell_Mass",
    },
    {
      key: "Arm_Circumference",
      label: "Arm_Circumference",
    },
    {
      key: "Arm_Muscle_Circumference",
      label: "Arm_Muscle_Circumference",
    },
    {
      key: "Bone_Mineral_Content",
      label: "Bone_Mineral_Content",
    },
    {
      key: "Lower_Limit_Bone_Mineral_Content",
      label: "Lower_Limit_Bone_Mineral_Content",
    },
    {
      key: "Upper_Limit_Bone_Mineral_Content",
      label: "Upper_Limit_Bone_Mineral_Content",
    },
    {
      key: "RA_5K",
      label: "RA_5K",
    },
    {
      key: "LA_5K",
      label: "LA_5K",
    },
    {
      key: "TR_5K",
      label: "TR_5K",
    },
    {
      key: "RL_5K",
      label: "RL_5K",
    },
    {
      key: "LL_5K",
      label: "LL_5K",
    },
    {
      key: "RA_50K",
      label: "RA_50K",
    },
    {
      key: "LA_50K",
      label: "LA_50K",
    },
    {
      key: "TR_50K",
      label: "TR_50K",
    },
    {
      key: "RL_50K",
      label: "RL_50K",
    },
    {
      key: "LL_50K",
      label: "LL_50K",
    },
    {
      key: "RA_500K",
      label: "RA_500K",
    },
    {
      key: "LA_500K",
      label: "LA_500K",
    },
    {
      key: "TR_500K",
      label: "TR_500K",
    },
    {
      key: "RL_500K",
      label: "RL_500K",
    },
    {
      key: "LL_500K",
      label: "LL_500K",
    },
    {
      key: "Gestational_Period",
      label: "Gestational_Period",
    },
    {
      key: "Waist",
      label: "Waist",
    },
    {
      key: "hipshot",
      label: "hipshot",
    },
    {
      key: "PrePregnancy_Weight",
      label: "PrePregnancy_Weight",
    },
  ];

const DownloadCSV = ({ bodycompositionrecords }: { bodycompositionrecords: any }) => {

    /*
    const download = () => {
        let user_info: any = localStorage.getItem('xxx');
        let token: string = JSON.parse(user_info).token;
        request('https://cdn.jsdelivr.net/gh/yeshan333/jsDelivrCDN@1.0/logo.png', {
            method: 'get',
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            // saveAs(new Blob(response), "image.png");
        }).catch(error => {
            console.log(error);
        });
    }
    */

    return (
        <CSVLink data={bodycompositionrecords} headers={headers} >
            <Button icon={<DownloadOutlined />}>
                导出到 CSV
            </Button>
        </CSVLink>
    )
}

export default connect(({ bodycompositionrecords }: { bodycompositionrecords: any }) => ({
    bodycompositionrecords,
  }))(DownloadCSV);