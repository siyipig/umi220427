
import React, {useEffect, useState} from "react";
import {Column} from "@ant-design/charts";

const data = [
  {
    type: '1-3秒',
    value: 0.16,
  },
  {
    type: '4-10秒',
    value: 0.125,
  },
  {
    type: '11-30秒',
    value: 0.24,
  },
  {
    type: '31-60秒',
    value: 0.19,
  },
  {
    type: '1-3分',
    value: 0.22,
  },
  {
    type: '3-10分',
    value: 0.05,
  },
  {
    type: '10-30分',
    value: 0.01,
  },
  {
    type: '30+分',
    value: 0.015,
  },
];

const DemoColumn: React.FC = () => {

  // const [data, setData] = useState([]);
  // const asyncFetch = () => {
  //   fetch('')
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log(json);
  //       setData(json);
  //     })
  // }
  // useEffect(() => {
  //   asyncFetch();
  // },[])

  return <Column
    data={data}
    xField='type'
    yField='value'
    xAxis={
      {
        // title: {
        //   text: '哈哈'
        // },
        label: {
          autoHide: true,      //  label 显示不下去的时候会自动隐藏和旋转的设置
          autoRotate: false
        }
      }
    }
    meta={
      {
        type: {alias: '类别'},
        sales: {alias: '销售额'}
      }
    }
    label={
      {
        // position: 'middle',
        // style: {
        //   fill: '#FFF',
        //   opacity: 0.6
        // },
        content: (originData) => {
          const val = parseFloat(originData?.value);
          if (val < 0.05) {
            return `${(val*100).toFixed(1)  }%`
          }
          // return originData?.value;
        },
        offset: 10
      }
    }
    color={
      (dataItem) => {
        const {type} = dataItem;
        if (type === '10-30分' || type === '30+分') {
          return '#F4664A';
        }
        return '#5B8FF9';
      }
    }

  />
}

export default DemoColumn;
