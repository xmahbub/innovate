
import './App.css';
import Navebar from './home/navbar';
import HomeBody from './home/body';
import Space from './home/space';
import Provide from './home/provide';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-elastic-carousel';

import engineeringlotti from './images/math.json';
import making from './images/making.json';
import archit from './images/archite.json'

export default function App() {

  const breakpoints=[
    {width:1,itemsToShow:1},
    {width:575,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:992,itemsToShow:4},
  ]


  return (
    <>
    <Navebar></Navebar>
    <Space></Space>
    <HomeBody></HomeBody>
    <Space></Space>
    <div className='text-center text-iec-font-primery font-iec-font-family text-xl'>10 years of design build and project management experience</div>
    <Space></Space>
    <Carousel breakPoints={breakpoints}>
        <Provide animationdata={engineeringlotti} title={"Engineering"} body={"CivilProcess & Mechanical, Design, Electrical, Software"}></Provide>
        <Provide animationdata={archit} title={"Architectural"} body={"Architectural Consultancy"}></Provide>
        <Provide animationdata={making} title={"Procument"}body={"Procurement Consultancy"} ></Provide>
    </Carousel>
    <Space></Space>
   
    </>
  )
}


