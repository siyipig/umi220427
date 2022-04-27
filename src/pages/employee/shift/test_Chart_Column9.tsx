

import React, {useEffect, useState} from "react";
import {Column} from "@ant-design/charts";


const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
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
    xField='city'
    yField='value'
    seriesField='type'
    isGroup={true}
    // isStack={true}
    columnStyle={
      {
        radius: [20, 20, 0, 0]
      }
    }
    dodgePadding={2}
    // intervalPadding={20}
  />
}

export default DemoColumn;
