const MenuButton = ({ isSticked, isMenuOpen, setIsMenuOpen }) => {
  const barStyles = `block h-[3px] rounded-lg ${
    isSticked ? "bg-white" : "bg-clr-primary"
  } transition-all duration-300 ease-in-out`;

  return (
    <div
      className={`block md:hidden fixed top-[32.5px] right-[2.5%] z-top w-[40px] h-[35px]`}
    >
      <button
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent flex flex-col items-center justify-center p-[2px] w-full h-fit ${
          isMenuOpen ? "space-y-[3px]" : "space-y-[.3rem]"
        } focus:outline-none`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span
          className={`${barStyles} w-full ${
            isMenuOpen ? "rotate-45 translate-y-[7px] origin-top" : ""
          }`}
        ></span>
        <span
          className={`${barStyles} ${isMenuOpen ? "w-0" : "w-full"}`}
        ></span>
        <span
          className={`${barStyles} w-full ${
            isMenuOpen ? "rotate-[-45deg] translate-y-[-7px] origin-bottom" : ""
          }`}
        ></span>
      </button>
    </div>
  );
};

export default MenuButton;
