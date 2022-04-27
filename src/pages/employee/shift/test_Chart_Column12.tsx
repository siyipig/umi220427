

import React, {useEffect, useState} from "react";
import {Column, G2} from "@ant-design/charts";

const data = [
  {
    type: '分类一',
    values: [76, 100],
  },
  {
    type: '分类二',
    values: [56, 108],
  },
  {
    type: '分类三',
    values: [38, 129],
  },
  {
    type: '分类四',
    values: [58, 155],
  },
  {
    type: '分类五',
    values: [45, 120],
  },
  {
    type: '分类六',
    values: [23, 99],
  },
  {
    type: '分类七',
    values: [18, 56],
  },
  {
    type: '分类八',
    values: [18, 34],
  },
];

const DemoColumn: React.FC = () => {

  return <Column
    data={data}
    xField='type'
    yField='values'
    isRange={true}
    label={
      {
        position: 'middle',
        layout: [{type: 'adjust-color'}]
      }
    }
    // seriesField='type'        //  这个要多注意
    // groupField='sex'
    // isGroup={true}
    // isStack={true}
    // isPercent={true}
    // meta={
    //   {
    //     value: {
    //       min: 0,
    //       max: 1
    //     }
    //   }
    // }
    // label={
    //   {
    //     position: 'middle',
    //     content: (item) => {
    //       const { value } = item;
    //       return ''.concat( (value * 100).toFixed(2).toString(), '%');
    //     },
    //     style: { fill: '#fff' }
    //   }
    // }
    // tooltip={false}
    // interactions={[
    //   {
    //     type: 'element-highlight-by-color'
    //   },
    //   {
    //     type: 'element-link'
    //   }
    // ]}
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
