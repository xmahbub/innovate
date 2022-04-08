
import './App.css';
import Navebar from './home/navbar';
import HomeBody from './home/body';
import Space from './home/space';

export default function App() {
  return (
    <>
    <Navebar></Navebar>
    <Space></Space>
    <HomeBody></HomeBody>
    <Space></Space>
    <div className='text-center text-iec-font-primery font-iec-font-family text-xl'>10 years of design build and project management experience</div>
    </>
  )
}


