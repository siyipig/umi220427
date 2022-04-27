
import React, {useEffect, useState} from "react";
import {G2, Line} from "@ant-design/charts";

const DemoLine: React.FC = () => {

  G2.registerShape('point', 'breath-point', {
    draw: function draw(cfg, container) {
      const { data } = cfg;
      const point = {
        x: cfg.x,
        y: cfg.y
      };
      const group = container.addGroup();
      if ((data as any)?.time ==='14.20' && (data as any)?.date === 'today') {
        const decorator1 = group.addShape('circle', {
          attrs: {
            x: point.x as number,
            y: point.y as number,
            r: 10,
            fill: cfg.color,
            opacity: 0.5
          }
        });
        const decorator2= group.addShape('circle', {
          attrs: {
            x: point.x as number,
            y: point.y as number,
            r: 10,
            fill: cfg.color,
            opacity: 0.5
          }
        });
        const decorator3= group.addShape('circle', {
          attrs: {
            x: point.x as number,
            y: point.y as number,
            r: 10,
            fill: cfg.color,
            opacity: 0.5
          }
        });
        decorator1.animate({
          r: 20,
          opacity: 0
        },{
          duration: 1800,
          easing: 'easeLinear',
          repeat: true
        });
        decorator2.animate({
          r: 20,
          opacity: 0
        }, {
          duration: 1800,
          easing: 'easeLinear',
          repeat: true,
          delay: 600
        });
        decorator3.animate({
          r: 20,
          opacity: 0
        }, {
          duration: 1800,
          easing: 'easeLinear',
          repeat: true,
          delay: 1200
        });
        group.addShape('circle', {
          attrs: {
            x: point.x as number,
            y: point.y as number,
            r: 6,
            fill: cfg.color,
            opacity: 0.7
          }
        });
        group.addShape('circle', {
          attrs: {
            x: point.x as number,
            y: point.y as number,
            r: 1.5,
            fill: cfg.color,
          }
        });
      }
      return group;
    }
  });
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/cpu-data.json')
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
    xField='time'
    yField='cpu'
    seriesField='date'
    tooltip={{showMarkers: false}}
    autoFit={true}
    height={500}
    meta={
      {
        cpu: {
          // type: 'linear',
          max: 100,
          min: 0
        }
      }
    }
    point={{shape: 'breath-point'}}
  />
}


export default DemoLine;
