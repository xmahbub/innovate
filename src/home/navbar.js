
import iecbdLogo from '../images/logo.png'
import {IoIosArrowDown} from 'react-icons/io'
import {BiSearch} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi';

export default function Navebar(){
    return(
        <div className="fixed flex Navbar bg-iec-background h-20 active:shadow-sm justify-between w-full">
            <div className="flex logo my-auto ml-12 gap-1">
                <img src={iecbdLogo} alt="IECBD" className='w-8 h-8 pt-1'></img>
                <h2 className="text-iec-font-color text-3xl	font-iec-font-family border-b-iec-font-yellow">INNOVATE</h2>
            </div>

            
            <div className="menus hidden lg:block my-auto ml-7">
                <ul className="flex gap-4 font-iec-font-normal text-iec-font-secoun">
                    <li className='flex gap-1 text-iec-font-primery'>HOME <IoIosArrowDown className='my-auto text-iec-font-secoun'></IoIosArrowDown></li>
                    <li className='flex gap-1 text-iec-font-primery'>ABOUT <IoIosArrowDown className='my-auto text-iec-font-secoun'></IoIosArrowDown></li>
                    <li className='flex gap-1 text-iec-font-primery'>BLOG <IoIosArrowDown className='my-auto text-iec-font-secoun'></IoIosArrowDown></li>
                    <li className='flex gap-1 text-iec-font-primery'>CONTACT <IoIosArrowDown className='my-auto text-iec-font-secoun'></IoIosArrowDown></li>
                </ul>
            </div>

            <div className='input-search hidden lg:block my-auto mr-20 relative' >
                <input placeholder="Search projects" className=' rounded-lg shadow-xl w-70 py-1 px-5 focus:outline-none focus-visible:ring pl-10'>
                </input>
                <BiSearch className='text-dark absolute -my-6 mx-2 text-iec-font-secoun text-xl'></BiSearch>

            </div>

            <div className='flex lg:hidden my-auto pr-10'>
              <BiSearch className='text-dark  -my-2 mx-2 text-iec-font-secoun text-2xl mr-6'></BiSearch>
              <GiHamburgerMenu className='text-dark  -my-2 mx-2 text-iec-font-secoun text-2xl'></GiHamburgerMenu>
            </div>


        </div>
    )
}