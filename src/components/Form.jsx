import React from 'react'

const Form = () => {
    return (


        <div id='Profile' className="Profile rounded-[1rem]  bg-slate-800 flex flex-col m-1 md:w-[80%] md:ml-[20%] xl:flex-row justify-center h-[500px] border-2 text-black">
          
            <form className='flex flex-col'>
                <input type="text" name="Name" id="Name" className='my-[2rem] rounded-md w-[50rem]' placeholder='Name'/>
                <br />
                <input type="date" id="birthday" name="birthday" className='rounded-md'/>
                <br />
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"className='my-[2rem] rounded-md w-[50rem]' placeholder='phone'/>
                <br />
                <input type="text" name="Aadhar" id="Aadhar"className='my-[2rem] rounded-md w-[50rem]' placeholder='aadhar'/>
                <br />

                <input type="text" name="Fingerprint" id="Fingerprint" className='my-[2rem] rounded-md w-[50rem]' placeholder='Fingerprint'/>
                <br />
                <input type="text" name="Area" id="Area" className='my-[2rem] rounded-md w-[50rem]' placeholder='Area'/>
                <button className='m-1 rounded-[2rem] bg-[#0000ff] w-[5rem] h-[2rem]   active:bg-[#000066] hover:bg-[#000099] '>Submit</button>
            </form>




        </div>


    )
}

export default Form