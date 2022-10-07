import React from 'react'
import CriminalDetails from './CriminalDetails'

import Mp from './Mp';
// import Caser from './Caser';

const MissingPerson = () => {
  return (
    <div id='Profile' className="Profile rounded-[1rem]  bg-slate-800 flex flex-col m-1  md:ml-[20%] xl:flex-row justify-center">
      <Mp ></Mp>
      <CriminalDetails name="Cesar Morals" dob="29-04-2022" contact="+91 9339273829" adhar="946384628462" finger="ciq739qfgw8ydy" area="mahomadabad" ></CriminalDetails>
    </div>
  )
}

export default MissingPerson