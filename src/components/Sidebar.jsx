import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3Icon from '@mui/icons-material/Person3';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';


const Sidebar = () => {



    return (
        <nav className='primary-nav flex flex-col  sm:absolute top-1 md:top-[10rem] bottom-0 w-[320px] '>
            <div className="menu sidebar bg-black sm:m-4  lg:left-0 p-2 mt-[-3.5rem] md:mt-[1rem] text-white overflow-clip md:visible h-[100vh] "  >
                <NavLink to='/dashboard' className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800 hover:cursor-pointer'>
                    <DashboardIcon></DashboardIcon>
                    <span className='ml-2'>Dashboard</span>
                </NavLink>
                <NavLink to='/profile' className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800 hover:cursor-pointer' >
                    <Person3Icon></Person3Icon>
                    <span className='ml-2'>Profile</span>
                </NavLink>
                <NavLink to='/report' className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800 hover:cursor-pointer'>
                    <SummarizeIcon></SummarizeIcon>
                    <span className='ml-2'>Report</span>
                </NavLink>
                <NavLink to='/vehicles' className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800 hover:cursor-pointer'>
                    <DirectionsCarFilledIcon></DirectionsCarFilledIcon>
                    <span className='ml-2'>Vehicles</span>
                </NavLink>
                <NavLink to='/missingperson' className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800 hover:cursor-pointer'>
                    <PersonIcon></PersonIcon>
                    <span className='ml-2'>Missing Person</span>
                </NavLink>
                <NavLink to='/case' className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800 hover:cursor-pointer'>
                    <DescriptionIcon></DescriptionIcon>
                    <span className='ml-2'>Case</span>
                </NavLink>
            </div>
        </nav>

        // <div className='flex flex-col  z-[3] relative' >



        //         <ul>

        //             <li className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800 hover:cursor-pointer'>


        //                 <DashboardIcon></DashboardIcon>
        //                 <span className='ml-2'>Dashboard</span>



        //             </li>
        //             <li className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800 hover:cursor-pointer'>


        //                 <Person3Icon></Person3Icon>
        //                 <span className='ml-2'>Profile</span>



        //             </li>
        //             <li className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800 hover:cursor-pointer'>


        //                 <SummarizeIcon></SummarizeIcon>
        //                 <span className='ml-2'>Report</span>



        //             </li>
        //             <li className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800 hover:cursor-pointer'>


        //                 <DirectionsCarFilledIcon></DirectionsCarFilledIcon>
        //                 <span className='ml-2'>Vehicles</span>



        //             </li>
        //             <li className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem]  hover:bg-slate-800 hover:cursor-pointer'>

        //                 <PersonIcon></PersonIcon>
        //                 <span className='ml-2'>Missing Person</span>



        //             </li>
        //             <li className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800 hover:cursor-pointer'>


        //                 <DescriptionIcon></DescriptionIcon>
        //                 <span className='ml-2'>Case</span>



        //             </li>
        //         </ul>




        //     </div>
        // </div >

    )
}

export default Sidebar
