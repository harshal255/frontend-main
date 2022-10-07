import React from 'react'


const CriminalDetails = ({ name, dob, contact, adhar, finger, area }) => {
    return (
        <div className="CaserMoral flex flex-col h-[40rem]  bg-black rounded-[1rem] m-2 p-2 xl:w-[50rem] ">
            <div className=' text-center h-[3rem] bg-[#26003b]  rounded-[12px] p-2 w-[95%] ml-3 text-[1.5rem]'>{name}</div>
            <div className=" flex   mt-2 p-2 h-[4rem] text-center justify-center items-center flex-col">

                <img src={require(`../img/caser1.png`)} alt='criminal1' className=' w-40 border-white border-solid border-[1px]  p-1 mt-[25rem]' />

                <div className="info flex flex-col text-start m-3 w-[95%] bg-[#141f1f] p-5 justify-between rounded-[1rem]">
                    <span className='pt-1'>Name: {name}</span>
                    <span className='pt-1'>DOB : {dob}</span>
                    <span className='pt-1'>Phone Number: {contact}</span>
                    <span className='pt-1'>Aadhar : {adhar}</span>
                    <span className='pt-1'>Fingerprint : {finger}</span>
                    <span className='pt-1'>Area : {area}</span>
                </div>




            </div>
            <button className=' rounded-[2rem] bg-green-500 w-[10rem] ml-[40%]  h-[2.5rem] mt-[27.5rem]  active:bg-green-900 hover:bg-green-700 '>Save</button>

        </div>
    )
}

export default CriminalDetails
