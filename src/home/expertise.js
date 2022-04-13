export default function Expertise(){
    return(
        <div className="Expertise grid md:grid-cols-2 grid-cols-1 gap-5 mx-6 lg:mx-14">
            
            <div className="flex  container bg-iec-font-white drop-shadow-lg  w-full h-28 pl-10 pr-5 rounded-l-full rounded-r-full lg:rounded-r-none">
                
                <div className="flex  my-auto -mx-6 ">


                    <div className="Circle content-center">
                            <div className="flex justify-center w-20 bg-iec-font-white h-20 rounded-full my-auto drop-shadow-lg shadow-black">
                              <div className="flex justify-center w-16 bg-iec-font-yellow h-16 rounded-full my-auto  shadow-black">
                                    <h1 className="my-auto font-iec-font-family text-iec-font-white font-bold text-4xl">1</h1>
                              </div>

                            </div>
                    </div>

                </div>
                <div className="bg-iec-font-color w-full h-20 my-auto ml-8 flex">
                    <div className="bg-iec-font-yellow w-full h-20"></div>
                    <div className="bg-iec-font-primery h-20 w-32"></div>
                </div>

                

                

            </div>

            <div className="container bg-iec-font-white  drop-shadow-lg w-full h-28 px-12 rounded-l-full rounded-r-full lg:rounded-l-none">

            </div>

            

            


        </div>
    )
}