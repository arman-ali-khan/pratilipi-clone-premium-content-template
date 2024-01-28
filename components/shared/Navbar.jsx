import Link from "next/link";

function Navbar() {
    return (
        <div className="navbar sticky top-0 !py-0 z-[1250] bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
            <Link href={'/create/23'} className="bg-gradient-to-r from-[darkblue] to-[darkorchid] text-white px-4 py-2 rounded">ব্লোগ</Link>
          <Link href={'/create/23'} className="bg-gradient-to-r from-[darkblue] to-[darkorchid] text-white px-4 py-2 rounded">লাইব্রেরী</Link>
          <Link href={'/create/23'} className="bg-gradient-to-r from-[darkblue] to-[darkorchid] text-white px-4 py-2 rounded">অডিও</Link>
            </ul>
          </div>
          <a className="btn btn-ghost text">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">
          <Link href={'/create/23'} className="bg-gradient-to-r from-[darkblue] to-[darkorchid] hover:from-[#1010c0] hover:to-[#8f24c5] duration-300 text-white px-4 py-2 rounded">দিনলিপি</Link>
          <Link href={'/create/23'} className="bg-gradient-to-r from-[darkblue] to-[darkorchid] hover:from-[#1010c0] hover:to-[#8f24c5] duration-300 text-white px-4 py-2 rounded">পাঠাগার</Link>
          <Link href={'/create/23'} className="bg-gradient-to-r from-[darkblue] to-[darkorchid] hover:from-[#1010c0] hover:to-[#8f24c5] duration-300 text-white px-4 py-2 rounded">অডিও</Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={'/create/23'} className="bg-gradient-to-r from-[darkblue] bg-opacity-50 to-[darkorchid] text-white px-4 py-2 rounded">লিখুন</Link>
        </div>
      </div>
    );
}

export default Navbar;