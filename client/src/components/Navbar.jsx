import React , {useMemo} from "react";
import { FiSearch ,FiBell } from "react-icons/fi";

function Navbar() {

  return (
    <div>
      <div className="container  flex absolute top-0 w-auto mr-3 ml-3 mt-2 items-center justify-evenly p-2">
        <div className="logo">
          <h1 className="text-lg font-bold tracking-wider text-stone-900">BYTE-BITES</h1>
        </div>
        
        <div className="search-box rounded-md border-slate-400 h-auto w-96 border-2 flex items-center p-1 justify-between ">
            <input type="text" className="text-base antialiased font-medium text-slate-400" placeholder="Search..."/>
          <FiSearch size={22} />
        </div>
        <div className="post_Btn ">
            <p className=" border-2 p-1 border-blue-600 text-blue-600/100 rounded-md text-base">Write a Article</p>
        </div>
        <FiBell size={22}/>
        <div className="avatar h-9 w-9 bg-slate-400 rounded-full overflow-hidden">
        <img src={dataUri} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
