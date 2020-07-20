/*
  * 计算进度条的值
  * value：测试值
  * lower：下界
  * upper：上界
*/
export const calculateBarValue = (value: any, lower: any, upper: any) => {
    let normal_interval_size = upper - lower;  // 正常区间大小
    if (value < lower) {
        return (value / lower) * 33;
    } else if (value > upper) {
        return 66 + 33 * value / (100 - upper);
    } else if (lower < value && value < upper) {
        return 33 + 33 * (value - lower) / normal_interval_size;
    } else if (value > 100) {
        return 100;
    } else {
        return 0;
    }
}