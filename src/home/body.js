import Lottie from 'react-lottie';
import animationData from '../images/construction.json';

export default function HomeBody(){

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    return(
      <div className='flex-row justify-center justify-self-center px-14 lg:justify-between pt-20 lg:flex'>
                       
          <div className='flex-col about sm:justify-center'>
              <div className='main-text'><h1 className='text-7xl text-iec-font-primery font-iec-font-family'><span className='text-iec-font-color logo'>Consultancy</span> and <span className='text-iec-font-color logo'>Designing</span> firm that was established in January <span className='text-iec-font-color logo'>2012.</span></h1></div>
              <div className='secoundary-text mt-5'><h2 className='text-iec-font-secoun font-iec-font-family'>IED (Innovate Engineering & Development), is a Consultancy and Designing firm that was established in January 2012. IED is a strategic design company that helps people live better and work smarter. It was founded by Engr. Md. Rana Masud, whose motivation is to build a well-known, reputed consultancy firm.</h2></div>
          
          </div>

          <div className='-z-20 flex sm:justify-center lottie w-full h-full '>
             <Lottie options={defaultOptions}/>
          </div>

     </div>
    )

}