// 充电桩饱和比例
export const chargingPieData = [
  {
    // value: 100,
    value: 0,
    name: "广州占比",
    // percentage: "5%",
    percentage: "0%",
    color: "#34D160",
  },
  {
    // value: 200,
    value: 0,
    name: "深圳占比",
    // percentage: "4%",
    percentage: "0%",
    color: "#027FF2",
  },
  {
    // value: 300,
    value: 0,
    name: "东莞占比",
    // percentage: "8%",
    percentage: "0%",
    color: "#8A00E1",
  },
  {
    // value: 400,
    value: 0,
    name: "佛山占比",
    // percentage: "10%",
    percentage: "0%",
    color: "#F19610",
  },
  {
    // value: 500,
    value: 0,
    name: "中山占比",
    // percentage: "20%",
    percentage: "0%",
    color: "#6054FF",
  },
  {
    // value: 600,
    value: 0,
    name: "珠海占比",
    // percentage: "40%",
    percentage: "0%",
    color: "#00C6FF",
  },
]

// 流程监控的数据
export const processMonitoringData = [
  {
      "name": "正常",
      // "data": [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
      "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
      "name": "异常",
      // "data": [20, 12, 11, 24, 90, 330, 10, 1, 154, 90, 330, 10]
      "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
]

// 充电数据统计
export const chargingStatisticsData = [
  {
      "name": "一月",
      // "value": 500
      "value": 0
  },
  {
      "name": "二月",
      // "value": 2000
      "value": 0

  },
  {
      "name": "三月",
      "value": 0
      // "value": 3600
  },
  {
      "name": "四月",
      "value": 0
      // "value": 1000
  },
  {
      "name": "五月",
      "value": 0
      // "value": 1000
  },
  {
      "name": "六月",
      "value": 0
      // "value": 2000
  },
  {
      "name": "七月",
      "value": 0
      // "value": 4000
  }
]

// 异常监控
export const exceptionMonitoringData = [
  // {
  //     "id": 1,
  //     "name": "异常1",
  //     "value": 5,
  //     "dur": "10s",
  //     "begin": "0s"
  // },
  // {
  //     "id": 2,
  //     "name": "异常2",
  //     "value": 3,
  //     "dur": "10s",
  //     "begin": "-3s"
  // },
  // {
  //     "id": 3,
  //     "name": "异常3",
  //     "value": 5,
  //     "dur": "10s",
  //     "begin": "-5s"
  // }
]

// 充电桩数据分析
export const dataAnalysisData = [
  {
    id: 1,
    title: "充电桩总数(个)",
    totalNum: 0,
    unit: "万",
    percentage: 0,
    isUp: true,
  },
  {
    id: 2,
    title: "年增长总数(个)",
    totalNum: 0,
    unit: "万",
    percentage: 0,
    isUp: true,
  },
  {
    id: 3,
    title: "月增长总数(个)",
    totalNum: 0,
    unit: "万",
    percentage: 0,
    isUp: false,
  },
]

// 充电桩Top4占比
export const chargingTop4Data = [
  {
    id: 1,
    name: "深圳",
    percentage: "0%",
  },
  {
    id: 2,
    name: "广州",
    percentage: "0%",
  },
  {
    id: 3,
    name: "东莞",
    percentage: "0%",
  },
  {
    id: 4,
    name: "佛山",
    percentage: "0%",
  },
  {
    id: 5,
    name: "其它",
    percentage: "0%",
  },
]
