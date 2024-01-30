import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [showSearch,setShowSearch] = useState(false)
    return (
        <div className="navbar sticky top-0 !py-0 z-[1250] bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
            <Link href={'/create/23'} className="bg-gradient text-white px-4 py-2 rounded">ব্লোগ</Link>
          <Link href={'/create/23'} className="bg-gradient text-white px-4 py-2 rounded">লাইব্রেরী</Link>
          <Link href={'/create/23'} className="bg-gradient text-white px-4 py-2 rounded">অডিও</Link>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* search */}
          <div className="flex items-center gap-1">
            <div className="relative">
            <input onFocus={()=>setShowSearch(true)} onBlur={()=>setShowSearch(false)} placeholder="Search..." className="input rounded-full input-bordered input-sm" type="search" name="search" id="search" />
            {
              showSearch ? <div onMouseEnter={()=>setShowSearch(true)} className="absolute w-full -bottom-96 h-96 bg-black"></div>:''
            }
            
            </div>
            <button>Search</button>
          </div>
          <ul className="menu menu-horizontal gap-4 px-1">
          <Link href={'/create/23'} className="bg-gradient duration-300 text-white px-4 py-2 rounded">দিনলিপি</Link>
          <Link href={'/create/23'} className="bg-gradient duration-300 text-white px-4 py-2 rounded">পাঠাগার</Link>
          <Link href={'/create/23'} className="bg-gradient duration-300 text-white px-4 py-2 rounded">অডিও</Link>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link href={'/create/23'} className="bg-gradient text-white px-4 py-2 rounded">লিখুন</Link>
          <div className="bg-gradient w-12 h-12 text-white rounded-full p-0.5">
         
           <Link href={`/user/12`}>
           <img className="rounded-full w-full h-full" src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" alt="" />
           </Link>
          </div>
         
        </div>

      </div>
    );
}

export default Navbar;