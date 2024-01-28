'use client'
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import Swiper React components



// import required modules
import { useState } from 'react';
import Story from '../Home/Stories/Story';
import UserCard from '../Sections/Cards/UserCard';

function UserLibrary() {
  // tab
  const [tab,setTab] = useState(1)
    return (
       <section className=" w-full">
        <div role="tablist" className="tabs w-full tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab lg:px-12" className="tab border-black w-full" aria-label={`লাইব্রেরী 12`} defaultChecked />
  <div role="tabpanel" className="tab-content w-full bg-base-100 border-base-300 rounded-box p-2 md:p-6">
  <section className="relative w-full">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {
          [...Array(12).keys()].map((story,i)=>{
            return <Story />
          })
        }
        </div>
       </section>
    </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab border-black px-12" aria-label={`অনুসরণ 12`}  />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 h-96 rounded-box p-6">
<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3'>
{
  [...Array(12).keys()]?.map((user,i)=>{
    return <UserCard />
  })
}
</div>
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab border-black px-12" aria-label={`অনুসরণকারী 12`} />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 h-96 rounded-box p-6">Tab content 3</div>
</div>
       </section>
    );
}

export default UserLibrary;