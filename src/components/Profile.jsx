import React from 'react'
import CriminalDetails from './CriminalDetails'
import KnownCrimes from './KnownCrimes'
import SearchProfiles from './SearchProfiles'

const Profile = () => {
  return (
    <div id='Profile' className="Profile rounded-[1rem]  bg-slate-800 flex flex-col m-1 md:w-[80%] md:ml-[20%] xl:flex-row justify-evenly ">
      <SearchProfiles className="bg-black"></SearchProfiles>
      <CriminalDetails name="Cesar Morals" dob="29-04-2022" contact="+91 9339273829" adhar="946384628462" finger="ciq739qfgw8ydy" area="mahomadabad"></CriminalDetails>
      <KnownCrimes></KnownCrimes>
    </div>
  )
}

export default Profile