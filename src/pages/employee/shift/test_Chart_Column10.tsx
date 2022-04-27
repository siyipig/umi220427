

import React, {useEffect, useState} from "react";
import {Column} from "@ant-design/charts";


const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/mor%26R5yBI9/stack-group-column.json')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
      .catch(err => console.log('fetch failed: ', err))
  }
  useEffect(() => {
    asyncFetch();
  },[])

  return <Column
    data={data}
    xField='product_type'
    yField='order_amt'
    seriesField='product_sub_type'        //  这个要多注意
    groupField='sex'
    isGroup={true}
    isStack={true}
    tooltip={
      {
        formatter: datum => {
          const { product_sub_type, sex, order_amt } = datum;
          return {
            name: ''.concat(product_sub_type, ' ').concat(sex === '男' ? '\uD83D\uDC66' : '\uD83D\uDC67'),
            value: order_amt
          }
        }
      }
    }
    // columnStyle={
    //   {
    //     radius: [20, 20, 0, 0]
    //   }
    // }
    // dodgePadding={2}
    // intervalPadding={20}
  />
}

export default DemoColumn;
