// 测试记录项类型定义
declare interface SingleRecords {
    /* 组件依赖字段 */
    key: number,
    name: string,


    /* 测试记录字段 */
    ID: number,
    Height: number,
    Gender: string,
    Age: number,
    DateTime: string,

    Weight: number,
    Lower_Limit_Weight: number,
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