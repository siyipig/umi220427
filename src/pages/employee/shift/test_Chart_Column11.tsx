

import React, {useEffect, useState} from "react";
import {Column, G2} from "@ant-design/charts";


const DemoColumn: React.FC = () => {
  G2.registerInteraction('element-link', {
    start: [
      {
        trigger: 'interval:mouseenter',
        action: 'element-link-by-color:link'
      }
    ],
    end: [
      {
        trigger: 'interval:mouseleave',
        action: 'element-link-by-color:unlink'
      }
    ]
  })
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/jSRiL%26YNql/percent-column.json')
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
    xField='year'
    yField='value'
    seriesField='type'        //  这个要多注意
    // groupField='sex'
    // isGroup={true}
    isStack={true}
    isPercent={true}
    meta={
      {
        value: {
          min: 0,
          max: 1
        }
      }
    }
    label={
      {
        position: 'middle',
        content: (item) => {
          const { value } = item;
          return ''.concat( (value * 100).toFixed(2).toString(), '%');
        },
        style: { fill: '#fff' }
      }
    }
    tooltip={false}
    interactions={[
      {
        type: 'element-highlight-by-color'
      },
      {
        type: 'element-link'
      }
    ]}
    // tooltip={
    //   {
    //     formatter: datum => {
    //       const { product_sub_type, sex, order_amt } = datum;
    //       return {
    //         name: ''.concat(product_sub_type, ' ').concat(sex === '男' ? '\uD83D\uDC66' : '\uD83D\uDC67'),
    //         value: order_amt
    //       }
    //     }
    //   }
    // }
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
