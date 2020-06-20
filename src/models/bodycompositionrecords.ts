/*
  * bodycompositionrecords: 人体成分记录
*/

const xxstate = [
    {
        /* 组件依赖字段 */
        Name: "wocao",


        /* 测试记录字段 */
        ID: "1",
        Height: "66666",
        Gender: "F",
        Age: "66666",
        DateTime: "2020-02-02 08:08:08",

        Weight: "66666",
        Lower_limit_Weight: "66666",
        Upper_Limit_Weight: "66666",

        TBW: "66666",
        Lower_Limit_TBW: "66666",              // TBW：Total Body Water：身体总水分
        Upper_Limit_TBW: "66666",

        ICW: "66666",                          // Intracellular Water：细胞内水份
        Lower_Limit_ICW: "66666",
        Upper_Limit_ICW: "66666",

        ECW: "66666",                          // ECW：Extracellular Water：细胞外水分
        Lower_Limit_ECW: "66666",
        Upper_Limit_ECW: "66666",

        Protein: "66666",                      // 蛋白质
        Lower_Limit_Protein: "66666",
        Upper_Limit_Protein: "66666",   //20

        Mineral: "66666",                      // 无机盐（矿物质）
        Lower_Limit_Mineral: "66666",
        Upper_Limit_Mineral: "66666",

        BFM: "66666",                          // BFM： Body FAt Mass：体脂肪
        Lower_Limit_BFM: "66666",
        Upper_Limit_BFM: "66666",

        SLM: "66666",                          // SLM：Soft Lean Mass：去脂体重
        Lower_Limit_SLM: "66666",
        Upper_Limit_SLM: "66666",

        FFM: "66666",                          // FFM：Fat Free Mass：去脂体重
        Lower_Limit_FFM: "66666",
        Upper_Limit_FFM: "66666",

        SMM: "66666",                          // SMM：Skeletal MUscle Mass：骨骼肌
        Lower_Limit_SMM: "66666",
        Upper_Limit_SMM: "66666",

        BMI: "66666",                          // BMI：Body Mass Index：身体质量指数
        Lower_Limit_BMI: "66666",
        Upper_Limit_BMI: "66666",      //38

        Percent_Body_Fat: "66666",             // 体脂百分比
        Lower_Limit_Percent_Body_Fat: "66666",
        Upper_Limit_Percent_Body_Fat: "66666",

        FFM_of_Right_Arm: "66666",             // 右上肢脂肪
        Lower_Limit_FFM_of_Right_Arm: "66666",
        Upper_Limit_FFM_of_Right_Arm: "66666",
        FFM_Persents_of_Right_Arm: "66666",

        FFM_of_Left_Arm: "66666",              // 左上肢脂肪
        Lower_Limit_FFM_of_Left_Arm: "66666",
        Upper_Limit_FFM_of_Left_Arm: "66666",
        FFM_Persents_of_Left_Arm: "66666",


        FFM_of_Trunk: "66666",                 // 躯干脂肪
        Lower_Limit_FFM_of_Trunk: "66666",
        Upper_Limit_FFM_of_Trunk: "66666",    //52
        FFM_Persents_of_Trunk: "66666",

        FFM_of_Right_Leg: "66666",             // 右下肢脂肪
        Lower_Limit_FFM_of_Right_Leg: "66666",
        Upper_Limit_FFM_of_Right_Leg: "66666",
        FFM_Persents_of_Right_Leg: "66666",

        Upper_Limit_FFM_of_Left_Leg: "66666",  // 左下肢脂肪
        Lower_Limit_Upper_Limit_FFM_of_Left_Leg: "66666",
        Upper_Limit_Upper_Limit_FFM_of_Left_Leg: "66666",
        FFM_Persents_of_Left_Leg: "66666",

        ECW_TBW: "66666",                      // 细胞外水分比

        BFM_of_Right_Arm: "66666",
        BFM_Persents_of_Right_Arm: "66666",

        BFM_of_Left_Arm: "66666",//左上臂脂肪
        BFM_Persents_of_Left_Arm: "66666",//左上臂脂肪百分比

        BFM_of_Trunk: "66666",//躯干脂肪
        BFM_Persents_of_Trunk: "66666",//躯干脂肪百分比

        BFM_of_Right_Leg: "66666",
        BFM_Persents_of_Right_Leg: "66666",     //70

        BFM_of_Left_Leg: "66666",
        BFM_Persents_of_Left_Leg: "66666",

        Inbody_Score: "66666",                 // 健康评分

        Target_Weight: "66666",    //目标体重
        Weight_Control: "66666",  //体重控制
        BFM_Control: "66666",                  //  脂肪控制
        FFM_Control: "66666",                  // 肌肉控制
        Basal_Metabolic_Rate: "66666",         // 基础代谢率

        Waist_Hip_Ratio: "66666",   //腰臀比
        Lower_Limit_Waist_Hip_Ratio: "66666",  //腰臀比范围最小值
        Upper_Limit_Waist_Hip_Ratio: "66666",   //81

        Visceral_Fat_Level: "66666",           // 内脏脂肪等级

        Obesity_Degree: "66666",               // 肥胖程度
        Lower_Limit_Obesity_Degree: "66666",// 肥胖程度范围最小值
        Upper_Limit_Obesity_Degree: "66666",

        Body_Cell_Mass: "66666",               // 身体细胞量
        Lower_Limit_Body_Cell_Mass: "66666",
        Upper_Limit_Body_Cell_Mass: "66666",

        Arm_Circumference: "66666",            // 上臂围度
        Arm_Muscle_Circumference: "66666",     // 上臂肌肉围度

        Bone_Mineral_Content: "66666",         // 骨矿物质含量
        Lower_Limit_Bone_Mineral_Content: "66666",
        Upper_Limit_Bone_Mineral_Content: "66666",   //93

        RA_5K: "66666",                        // 右上肢5K时电阻抗
        LA_5K: "66666",		 // 左上肢5K时电阻抗
        TR_5K: "66666",                        // 躯干5K时电阻抗
        RL_5K: "66666",		// 右下肢5K电阻抗
        LL_5K: "66666",                        // 左下肢5K电阻抗
        RA_50K: "66666",
        LA_50K: "66666",
        TR_50K: "66666",
        RL_50K: "66666",
        LL_50K: "66666",
        RA_500K: "66666",
        LA_500K: "66666",
        TR_500K: "66666",
        RL_500K: "66666",     //107
        LL_500K: "66666",

        Gestational_Period: "66666",            // 妊娠期
        Waist: "66666",                         // 腰
        hipshot: "66666",                       // 臀
        PrePregnancy_Weight: "66666",           //  孕前体重
    },
    {
        /* 组件依赖字段 */
        Name: "wocao",


        /* 测试记录字段 */
        ID: "3",
        Height: "66666",
        Gender: "F",
        Age: "66666",
        DateTime: "2020-02-02 08:08:08",

        Weight: "66666",
        Lower_limit_Weight: "66666",
        Upper_Limit_Weight: "66666",

        TBW: "66666",
        Lower_Limit_TBW: "66666",              // TBW：Total Body Water：身体总水分
        Upper_Limit_TBW: "66666",

        ICW: "66666",                          // Intracellular Water：细胞内水份
        Lower_Limit_ICW: "66666",
        Upper_Limit_ICW: "66666",

        ECW: "66666",                          // ECW：Extracellular Water：细胞外水分
        Lower_Limit_ECW: "66666",
        Upper_Limit_ECW: "66666",

        Protein: "66666",                      // 蛋白质
        Lower_Limit_Protein: "66666",
        Upper_Limit_Protein: "66666",   //20

        Mineral: "66666",                      // 无机盐（矿物质）
        Lower_Limit_Mineral: "66666",
        Upper_Limit_Mineral: "66666",

        BFM: "66666",                          // BFM： Body FAt Mass：体脂肪
        Lower_Limit_BFM: "66666",
        Upper_Limit_BFM: "66666",

        SLM: "66666",                          // SLM：Soft Lean Mass：去脂体重
        Lower_Limit_SLM: "66666",
        Upper_Limit_SLM: "66666",

        FFM: "66666",                          // FFM：Fat Free Mass：去脂体重
        Lower_Limit_FFM: "66666",
        Upper_Limit_FFM: "66666",

        SMM: "66666",                          // SMM：Skeletal MUscle Mass：骨骼肌
        Lower_Limit_SMM: "66666",
        Upper_Limit_SMM: "66666",

        BMI: "66666",                          // BMI：Body Mass Index：身体质量指数
        Lower_Limit_BMI: "66666",
        Upper_Limit_BMI: "66666",      //38

        Percent_Body_Fat: "66666",             // 体脂百分比
        Lower_Limit_Percent_Body_Fat: "66666",
        Upper_Limit_Percent_Body_Fat: "66666",

        FFM_of_Right_Arm: "66666",             // 右上肢脂肪
        Lower_Limit_FFM_of_Right_Arm: "66666",
        Upper_Limit_FFM_of_Right_Arm: "66666",
        FFM_Persents_of_Right_Arm: "66666",

        FFM_of_Left_Arm: "66666",              // 左上肢脂肪
        Lower_Limit_FFM_of_Left_Arm: "66666",
        Upper_Limit_FFM_of_Left_Arm: "66666",
        FFM_Persents_of_Left_Arm: "66666",


        FFM_of_Trunk: "66666",                 // 躯干脂肪
        Lower_Limit_FFM_of_Trunk: "66666",
        Upper_Limit_FFM_of_Trunk: "66666",    //52
        FFM_Persents_of_Trunk: "66666",

        FFM_of_Right_Leg: "66666",             // 右下肢脂肪
        Lower_Limit_FFM_of_Right_Leg: "66666",
        Upper_Limit_FFM_of_Right_Leg: "66666",
        FFM_Persents_of_Right_Leg: "66666",

        Upper_Limit_FFM_of_Left_Leg: "66666",  // 左下肢脂肪
        Lower_Limit_Upper_Limit_FFM_of_Left_Leg: "66666",
        Upper_Limit_Upper_Limit_FFM_of_Left_Leg: "66666",
        FFM_Persents_of_Left_Leg: "66666",

        ECW_TBW: "66666",                      // 细胞外水分比

        BFM_of_Right_Arm: "66666",
        BFM_Persents_of_Right_Arm: "66666",

        BFM_of_Left_Arm: "66666",//左上臂脂肪
        BFM_Persents_of_Left_Arm: "66666",//左上臂脂肪百分比

        BFM_of_Trunk: "66666",//躯干脂肪
        BFM_Persents_of_Trunk: "66666",//躯干脂肪百分比

        BFM_of_Right_Leg: "66666",
        BFM_Persents_of_Right_Leg: "66666",     //70

        BFM_of_Left_Leg: "66666",
        BFM_Persents_of_Left_Leg: "66666",

        Inbody_Score: "66666",                 // 健康评分

        Target_Weight: "66666",    //目标体重
        Weight_Control: "66666",  //体重控制
        BFM_Control: "66666",                  //  脂肪控制
        FFM_Control: "66666",                  // 肌肉控制
        Basal_Metabolic_Rate: "66666",         // 基础代谢率

        Waist_Hip_Ratio: "66666",   //腰臀比
        Lower_Limit_Waist_Hip_Ratio: "66666",  //腰臀比范围最小值
        Upper_Limit_Waist_Hip_Ratio: "66666",   //81

        Visceral_Fat_Level: "66666",           // 内脏脂肪等级

        Obesity_Degree: "66666",               // 肥胖程度
        Lower_Limit_Obesity_Degree: "66666",// 肥胖程度范围最小值
        Upper_Limit_Obesity_Degree: "66666",

        Body_Cell_Mass: "66666",               // 身体细胞量
        Lower_Limit_Body_Cell_Mass: "66666",
        Upper_Limit_Body_Cell_Mass: "66666",

        Arm_Circumference: "66666",            // 上臂围度
        Arm_Muscle_Circumference: "66666",     // 上臂肌肉围度

        Bone_Mineral_Content: "66666",         // 骨矿物质含量
        Lower_Limit_Bone_Mineral_Content: "66666",
        Upper_Limit_Bone_Mineral_Content: "66666",   //93

        RA_5K: "66666",                        // 右上肢5K时电阻抗
        LA_5K: "66666",		 // 左上肢5K时电阻抗
        TR_5K: "66666",                        // 躯干5K时电阻抗
        RL_5K: "66666",		// 右下肢5K电阻抗
        LL_5K: "66666",                        // 左下肢5K电阻抗
        RA_50K: "66666",
        LA_50K: "66666",
        TR_50K: "66666",
        RL_50K: "66666",
        LL_50K: "66666",
        RA_500K: "66666",
        LA_500K: "66666",
        TR_500K: "66666",
        RL_500K: "66666",     //107
        LL_500K: "66666",

        Gestational_Period: "66666",            // 妊娠期
        Waist: "66666",                         // 腰
        hipshot: "66666",                       // 臀
        PrePregnancy_Weight: "66666",           //  孕前体重
    },
    {
        /* 组件依赖字段 */
        Name: "wocao",


        /* 测试记录字段 */
        ID: "2",
        Height: "66666",
        Gender: "F",
        Age: "66666",
        DateTime: "2020-02-02 08:08:08",

        Weight: "66666",
        Lower_limit_Weight: "66666",
        Upper_Limit_Weight: "66666",

        TBW: "66666",
        Lower_Limit_TBW: "66666",              // TBW：Total Body Water：身体总水分
        Upper_Limit_TBW: "66666",

        ICW: "66666",                          // Intracellular Water：细胞内水份
        Lower_Limit_ICW: "66666",
        Upper_Limit_ICW: "66666",

        ECW: "66666",                          // ECW：Extracellular Water：细胞外水分
        Lower_Limit_ECW: "66666",
        Upper_Limit_ECW: "66666",

        Protein: "66666",                      // 蛋白质
        Lower_Limit_Protein: "66666",
        Upper_Limit_Protein: "66666",   //20

        Mineral: "66666",                      // 无机盐（矿物质）
        Lower_Limit_Mineral: "66666",
        Upper_Limit_Mineral: "66666",

        BFM: "66666",                          // BFM： Body FAt Mass：体脂肪
        Lower_Limit_BFM: "66666",
        Upper_Limit_BFM: "66666",

        SLM: "66666",                          // SLM：Soft Lean Mass：去脂体重
        Lower_Limit_SLM: "66666",
        Upper_Limit_SLM: "66666",

        FFM: "66666",                          // FFM：Fat Free Mass：去脂体重
        Lower_Limit_FFM: "66666",
        Upper_Limit_FFM: "66666",

        SMM: "66666",                          // SMM：Skeletal MUscle Mass：骨骼肌
        Lower_Limit_SMM: "66666",
        Upper_Limit_SMM: "66666",

        BMI: "66666",                          // BMI：Body Mass Index：身体质量指数
        Lower_Limit_BMI: "66666",
        Upper_Limit_BMI: "66666",      //38

        Percent_Body_Fat: "66666",             // 体脂百分比
        Lower_Limit_Percent_Body_Fat: "66666",
        Upper_Limit_Percent_Body_Fat: "66666",

        FFM_of_Right_Arm: "66666",             // 右上肢脂肪
        Lower_Limit_FFM_of_Right_Arm: "66666",
        Upper_Limit_FFM_of_Right_Arm: "66666",
        FFM_Persents_of_Right_Arm: "66666",

        FFM_of_Left_Arm: "66666",              // 左上肢脂肪
        Lower_Limit_FFM_of_Left_Arm: "66666",
        Upper_Limit_FFM_of_Left_Arm: "66666",
        FFM_Persents_of_Left_Arm: "66666",


        FFM_of_Trunk: "66666",                 // 躯干脂肪
        Lower_Limit_FFM_of_Trunk: "66666",
        Upper_Limit_FFM_of_Trunk: "66666",    //52
        FFM_Persents_of_Trunk: "66666",

        FFM_of_Right_Leg: "66666",             // 右下肢脂肪
        Lower_Limit_FFM_of_Right_Leg: "66666",
        Upper_Limit_FFM_of_Right_Leg: "66666",
        FFM_Persents_of_Right_Leg: "66666",

        Upper_Limit_FFM_of_Left_Leg: "66666",  // 左下肢脂肪
        Lower_Limit_Upper_Limit_FFM_of_Left_Leg: "66666",
        Upper_Limit_Upper_Limit_FFM_of_Left_Leg: "66666",
        FFM_Persents_of_Left_Leg: "66666",

        ECW_TBW: "66666",                      // 细胞外水分比

        BFM_of_Right_Arm: "66666",
        BFM_Persents_of_Right_Arm: "66666",

        BFM_of_Left_Arm: "66666",//左上臂脂肪
        BFM_Persents_of_Left_Arm: "66666",//左上臂脂肪百分比

        BFM_of_Trunk: "66666",//躯干脂肪
        BFM_Persents_of_Trunk: "66666",//躯干脂肪百分比

        BFM_of_Right_Leg: "66666",
        BFM_Persents_of_Right_Leg: "66666",     //70

        BFM_of_Left_Leg: "66666",
        BFM_Persents_of_Left_Leg: "66666",

        Inbody_Score: "66666",                 // 健康评分

        Target_Weight: "66666",    //目标体重
        Weight_Control: "66666",  //体重控制
        BFM_Control: "66666",                  //  脂肪控制
        FFM_Control: "66666",                  // 肌肉控制
        Basal_Metabolic_Rate: "66666",         // 基础代谢率

        Waist_Hip_Ratio: "66666",   //腰臀比
        Lower_Limit_Waist_Hip_Ratio: "66666",  //腰臀比范围最小值
        Upper_Limit_Waist_Hip_Ratio: "66666",   //81

        Visceral_Fat_Level: "66666",           // 内脏脂肪等级

        Obesity_Degree: "66666",               // 肥胖程度
        Lower_Limit_Obesity_Degree: "66666",// 肥胖程度范围最小值
        Upper_Limit_Obesity_Degree: "66666",

        Body_Cell_Mass: "66666",               // 身体细胞量
        Lower_Limit_Body_Cell_Mass: "66666",
        Upper_Limit_Body_Cell_Mass: "66666",

        Arm_Circumference: "66666",            // 上臂围度
        Arm_Muscle_Circumference: "66666",     // 上臂肌肉围度

        Bone_Mineral_Content: "66666",         // 骨矿物质含量
        Lower_Limit_Bone_Mineral_Content: "66666",
        Upper_Limit_Bone_Mineral_Content: "66666",   //93

        RA_5K: "66666",                        // 右上肢5K时电阻抗
        LA_5K: "66666",		 // 左上肢5K时电阻抗
        TR_5K: "66666",                        // 躯干5K时电阻抗
        RL_5K: "66666",		// 右下肢5K电阻抗
        LL_5K: "66666",                        // 左下肢5K电阻抗
        RA_50K: "66666",
        LA_50K: "66666",
        TR_50K: "66666",
        RL_50K: "66666",
        LL_50K: "66666",
        RA_500K: "66666",
        LA_500K: "66666",
        TR_500K: "66666",
        RL_500K: "66666",     //107
        LL_500K: "66666",

        Gestational_Period: "66666",            // 妊娠期
        Waist: "66666",                         // 腰
        hipshot: "66666",                       // 臀
        PrePregnancy_Weight: "66666",           //  孕前体重
    }
]

export default  {
    namespace: 'bodycompositionrecords',

    state: xxstate,

    reducers: {
        delete(state: any, { record_key }: { record_key: any }) {
            return state.filter((item: any) => item.ID !== record_key);
        },
    },
}