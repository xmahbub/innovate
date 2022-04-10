import Lottie from 'react-lottie';


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
        <div className="flex-col drop-shadow-lg w-60 h-96 rounded-xl text-iec-font-primery bg-iec-font-white mx-auto justify-center my-10">
            <div className='lotticontainer h-28 mx-14 mt-3'>
               <Lottie options={defaultOptions}/>
               <h1 className='flex justify-center text-iec-font-primery font-iec-font-family text-xl'>{animationdata.title}</h1>

            </div>
            <div className='flex  w-auto h-32 justify-center mx-4 mt-8'>
               <p className='text-center font-iec-font-family text-iec-font-secoun'>{animationdata.body}</p>
            </div>

            
        </div>
    )
}