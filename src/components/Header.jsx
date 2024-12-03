import React from "react";

const Header = () => {
  return (
    <>
      <header className=" flex justify-between items-center">
        <section className=" flex gap-1">
          <h1 className="text-[]">IMAJI</h1>
          <h1>Coffee.</h1>
        </section>
        <nav className=" flex gap-2 ">
          <button>Home</button>
          <button>Story</button>
          <button>Menu</button>
          <button>Space</button>
          <button>Community</button>
          <button>News</button>
          <section className=" flex gap-2 items-center">
            <section className="  "> 
            <button className=" border border-[#9d7d5c] hover:border-[#9d7d5c] p-3 ">Order</button>
            </section>
            <section>
            <button className=" border border-[#9d7d5c] p-3 hover:border-[#9d7d5c]">Sing in</button>
            </section>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Header;
