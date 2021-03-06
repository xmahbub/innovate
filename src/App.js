
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
import Clients from './home/clients';
import Expertise from './home/expertise';

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
    <Clients></Clients>
    <Space></Space>
    <div className='text-center text-iec-font-primery font-iec-font-family text-3xl'>What We Provide</div>
    <Space></Space>

    <Carousel breakPoints={breakpoints}>
        <Provide animationdata={engineeringlotti} buttontext={"Engineering"} title={"Engineering"} body={"CivilProcess & Mechanical, Design, Electrical, Software"}></Provide>
        <Provide animationdata={archit} buttontext={"Architectural"} title={"Architectural"} body={"Architectural Consultancy"}></Provide>
        <Provide animationdata={making} buttontext={"Procument"} title={"Procument"}body={"Procurement Consultancy"} ></Provide>
        <Provide animationdata={engineeringlotti} buttontext={"Engineering"} title={"Engineering"} body={"CivilProcess & Mechanical, Design, Electrical, Software"}></Provide>

    </Carousel>
    <Space></Space>
    <div className='text-center text-iec-font-primery font-iec-font-family text-3xl'>Areas of Expertise</div>
    <Space></Space>
    <Expertise></Expertise>
    <Space></Space>

   
    </>
  )
}


