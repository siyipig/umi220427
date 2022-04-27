

import React, {useEffect, useState} from "react";
import {Column} from "@ant-design/charts";

const DemoColumn: React.FC = () => {

  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
  }
  useEffect(() => {
    asyncFetch();
  }, [])

  return <Column
    data={data}
    xField='城市'
    yField='销售额'
    xAxis={
      {
        label: {
          autoRotate: false
        }
      }
    }
    // scrollbar={
    //   {
    //     type: 'horizontal'
    //   }
    // }
    slider={
      {
        start: 0.1,
        end: 0.3
      }
    }
    // columnWidthRatio={0.1}
    // minColumnWidth={5}
    // maxColumnWidth={20}
  />
}

export default DemoColumn;
