import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Mpcard from './Mpcard';
import { NavLink } from 'react-router-dom'

const Mp = () => {




  return (
    <div className="MissingPerson rounded-[1rem] m-2 p-2 bg-black  h-[40rem] z-[4] xl:w-[50rem] md:w-[80%] " >
      <div className=" flex   mt-2 p-2 h-[4rem] text-center justify-center items-center text-[1.5rem]">
        <span className=' pt-[9px] w-[75%] h-[3rem] bg-[#26003b] text-center rounded-[12px] ml-[2rem]'>Missing Person</span>
        <NavLink to='/form' className='flex bg-slate-900 rounded-full p-3 m-3 hover:mr-[-2rem] hover:bg-slate-800 hover:cursor-pointer'>

        <AddBoxIcon className='m-2 text-green-500 hover:cursor-pointer'></AddBoxIcon>
        </NavLink>
       
      </div>
      <div className=" flex mt-2 p-2 h-[4rem] justify-between rounded-[12px] bg-slate-900">
        <input type={"text"} className="bg-slate-900 h-[3rem] w-[40rem] " placeholder='Missiong Person' ></input>

        <FilterAltIcon className='m-2'></FilterAltIcon>

      </div>
      <Mpcard Photo="caser1" name="Jimmy Verma" btn="Wanted" Address="Maninagar st,Ahmedabad"></Mpcard>
      <Mpcard Photo="caser2" name="Jimmy verma" btn="Missing" Address="Varachha st Surat" ></Mpcard>

    </div>
  )
}

export default Mp