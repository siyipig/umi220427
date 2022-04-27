
import React from "react";
import {Column} from "@ant-design/charts";

const data = [
  {
    month: '1',
    value: 1078,
  },
  {
    month: '2',
    value: 1216,
  },
  {
    month: '3',
    value: 758,
  },
  {
    month: '4',
    value: 623,
  },
  {
    month: '5',
    value: 319,
  },
  {
    month: '6',
    value: 422,
  },
  {
    month: '7',
    value: -4,
  },
  {
    month: '8',
    value: -217,
  },
  {
    month: '9',
    value: -358,
  },
  {
    month: '10',
    value: 1513,
  },
  {
    month: '11',
    value: 1388,
  },
  {
    month: '12',
    value: 597,
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
    xField='month'
    yField='value'
    xAxis={
      {
        label: {
          autoHide: true,      //  label 显示不下去的时候会自动隐藏和旋转的设置
          autoRotate: false
        }
      }
    }
    meta={
      {
        value: {
          max: 2000,
          min: -1000
        },
        month: {
          formatter: (val) => {
            return ''.concat(val,'月');
          }
        }
      }
    }
    annotations={[
      {
        type: 'region',
        start: (xScale: any) => {           // 这个得再好好理解下
          const ratio = xScale.ticks ? 1/ xScale.ticks.length : 1;
          const x = xScale.scale('7')-ratio/2;
          return [''.concat((x * 100).toString(), '%'), '0%'];
        },
        end: (xScale: any) => {
          const ratio = xScale.ticks ? 1/ xScale.ticks.length : 1;
          const x = xScale.scale('9')-ratio/2;
          return [''.concat((x * 100).toString(), '%'), '100%'];
        }
      }
    ]}
    // conversionTag={{}}



  />
}

export default DemoColumn;
