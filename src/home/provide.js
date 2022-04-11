import Lottie from 'react-lottie';
import {FaLongArrowAltRight} from 'react-icons/fa';


export default function Provide(animationdata){

    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationdata.animationdata,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
        <div className="flex-col drop-shadow-lg w-64 h-96 rounded-xl text-iec-font-primery bg-iec-font-white mx-auto justify-center my-10">
            <div className='lotticontainer h-28 mx-14 mt-3'>
               <Lottie options={defaultOptions}/>
               <h1 className='flex justify-center text-iec-font-primery font-iec-font-family text-xl'>{animationdata.title}</h1>

            </div>
            <div className='flex  w-auto h-36 justify-center mx-4 mt-8'>
               <p className='text-center font-iec-font-family text-iec-font-secoun'>{animationdata.body}</p>
            </div>

            <div className='flex button text-center justify-center mx-auto drop-shadow-lg'><button className='flex bg-iec-font-primery rounded-md font-iec-font-family text-iec-font-white px-5 py-1 justify-center'>{animationdata.buttontext}<FaLongArrowAltRight className='justify-center my-auto ml-1'></FaLongArrowAltRight></button></div>

            
        </div>
    )
}