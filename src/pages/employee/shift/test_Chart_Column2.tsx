
import React, {useEffect, useState} from "react";
import {Column} from "@ant-design/charts";

const data = [
  {
    type: '家具家电',
    sales: 38,
  },
  {
    type: '粮油副食',
    sales: 52,
  },
  {
    type: '生鲜水果',
    sales: 61,
  },
  {
    type: '美容洗护',
    sales: 145,
  },
  {
    type: '母婴用品',
    sales: 48,
  },
  {
    type: '进口食品',
    sales: 38,
  },
  {
    type: '食品饮料',
    sales: 38,
  },
  {
    type: '家庭清洁',
    sales: 38,
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
    yField='sales'
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
        position: 'middle',
        style: {
          fill: '#FFF',
          opacity: 0.6
        }
      }
    }

  />
}

export default DemoColumn;
