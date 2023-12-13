"use client";

import { useState } from "react";

import Nav from "./Nav";
import TopContactBar from "./TopContactBar";
import Sidebar from "@components/Sidebar";
import MenuButton from "@utils/MenuButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isSticked, setIsSticked] = useState(false);

  return (
    <header className="relative flex flex-col w-full">
      <TopContactBar />
      <Nav isSticked={isSticked} setIsSticked={setIsSticked} />
      {/* <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
      <MenuButton
        isSticked={isSticked}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
};

export default Header;
