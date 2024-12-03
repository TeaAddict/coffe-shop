import React from "react";

const Header = () => {
  return (
    <>
      
      <header className=" flex justify-between items-center m-3 font-medium ">
        <section className=" flex gap-1">
          <h1 >IMAJI</h1>
          <h1 className="text-[#9d7d5c] font-bold font-xl">Coffee.</h1>
        </section>
        <nav className=" flex gap-2 ">
          <button className=" font-medium">Home</button>
          <button className=" font-medium" >Story</button>
          <button className=" font-medium" >Story</button>
          <button className=" font-medium">Menu</button>
          <button className=" font-medium">Space</button>
          <button className=" font-medium">Community</button>
          <button className=" font-medium">News</button>
          <section className=" flex gap-2 items-center">
            <section className="  "> 
            <button className=" border border-[#9d7d5c] hover:bg-[#9d7d5c] p-3 font-medium">Order</button>
            </section>
            <section>
            <button className=" border border-[#9d7d5c] p-3 hover:bg-[#9d7d5c] font-medium">Sing in</button>
            </section>
          </section>
        </nav>
      </header>
      
    </>
  );
};

export default Header;
