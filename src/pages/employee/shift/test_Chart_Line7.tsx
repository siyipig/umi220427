
import React, {useEffect, useState} from "react";
import {Line} from "@ant-design/charts";


const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
  }
  useEffect(() => {
    asyncFetch();
  },[])
  return <Line
    data={data}
    xField='Date'
    yField='scales'
    padding='auto'
    xAxis={{tickCount: 5}}
  />
}

export default DemoLine;
