import React, { useState, useEffect } from 'react';
import { Line, G2 } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  G2.registerShape('point', 'breath-point', {
    draw: function draw(cfg, container) {
      const data = cfg?.data;
      const point = {
        x: cfg.x,
        y: cfg.y,
      };
      const group = container.addGroup();
      if (data?.time === '14.20' && data.date === 'today') {
        const decorator1 = group.addShape('circle', {
          attrs: {
            x: point.x as number ,
            y: point.y as number,
            r: 10,
            fill: cfg.color,
            opacity: 0.5,
          },
        });
        const decorator2 = group.addShape('circle', {
          attrs: {
            x: point.x as number ,
            y: point.y as number ,
            r: 10,
            fill: cfg.color,
            opacity: 0.5,
          },
        });
        const decorator3 = group.addShape('circle', {
          attrs: {
            x: point.x as number ,
            y: point.y as number ,
            r: 10,
            fill: cfg.color,
            opacity: 0.5,
          },
        });
        decorator1.animate(
          {
            r: 20,
            opacity: 0,
          },
          {
            duration: 1800,
            easing: 'easeLinear',
            repeat: true,
          },
        );
        decorator2.animate(
          {
            r: 20,
            opacity: 0,
          },
          {
            duration: 1800,
            easing: 'easeLinear',
            repeat: true,
            delay: 600,
          },
        );
        decorator3.animate(
          {
            r: 20,
            opacity: 0,
          },
          {
            duration: 1800,
            easing: 'easeLinear',
            repeat: true,
            delay: 1200,
          },
        );
        group.addShape('circle', {
          attrs: {
            x: point.x as number ,
            y: point.y as number ,
            r: 6,
            fill: cfg.color,
            opacity: 0.7,
          },
        });
        group.addShape('circle', {
          attrs: {
            x: point.x as number ,
            y: point.y as number ,
            r: 1.5,
            fill: cfg.color,
          },
        });
      }
      return group;
    },
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/cpu-data.json')
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
        })
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    asyncFetch();
  }, []);
  const config = {
    autoFit: true,
    height: 500,
    data,
    meta: {
      cpu: {
        time: { type: 'cat' },
        max: 100,
        min: 0,
      },
    },
    xField: 'time',
    yField: 'cpu',
    seriesField: 'date',
    tooltip: { showMarkers: false },
    point: { shape: 'breath-point' },
  };
  return <Line {...config} />;
};

export default DemoLine;
