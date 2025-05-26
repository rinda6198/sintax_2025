import React from "react";
import { Outlet,Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full min-h-screen">
 <header className="w-full ">

        <nav className="flex flex-row justify-between bg-[#2f1f1b] ">
          <div >
           <img src="LOGO2.png" alt="logo kopi" width={80} />
            
          </div>
          <ul className="flex space-x-4 p-6 text-[#e4cbbb] ">
            <li>
              <Link to="/"className='hover:text-white transition '>Home</Link>
            </li>
            <li>
              <Link to="/about" className='hover:text-white transition '>Profile</Link>
            </li>
            <li>
              <Link to="/contact"className='hover:text-white transition '>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="h-screen" style={{ backgroundColor: "#876b5d" }}>
        <Outlet />
      </main>

      <footer className="bottom-0 w-full p-4 text-[#e4cbbb]  bg-[#2f1f1b]  ">
        <p>© 2025 MyWebsite</p>
      </footer>
    </div>
  );
}
