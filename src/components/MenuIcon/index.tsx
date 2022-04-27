// import React from 'react';
import Icon from '@ant-design/icons';

// function Index(props) {
//   return (
//     <div></div>
//   );
// }
//
// export default Index;
//
// const menuData = [
//   {
//     name: '首页',
//     icon: <MenuIcon imgSrc={require('../assets/menu.png')} imgStyle={{marginBottom: 5}} />,
//     path: 'home',
//   },
// ]

const MenuIcon = ({imgStyle, imgSrc}: {imgStyle: {}, imgSrc: string}) => (
  <Icon
    component={() => (
      <img
        style={{width: '1em', height: '1em', ...imgStyle}}
        src={imgSrc}
        alt="icon"
      />
    )}
  />
);

export const menuData = [
  {
    name: '首页',
    icon: <MenuIcon imgSrc={require('/public/icons/icon-128x128.png')} imgStyle={{marginBottom: 5}} />,
    path: 'home',
  },
]

export default MenuIcon;

