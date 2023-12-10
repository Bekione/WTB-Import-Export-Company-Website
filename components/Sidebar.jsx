const Sidebar = ({ isMenuOpen }) => {
  const classes =   `fixed top-0 bottom-0 right-0 w-[300px] h-full flex flex-col bg-clr-secondary shadow-lg transition-all duration-[250] ease-out z-[9999] transform ${isMenuOpen ? "active translate-x-0 opacity-1 visible pointer-events-auto" : "translate-x-[300px] opacity-0 invisible pointer-events-none"}`
  return (
    <aside className={`WTS_sidebar_menus `}>
      <div className="sidebar_header"></div>
      <nav className="side_navigation">
        <ul role="list">
          <li>
            <a href="index.html" className="links">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="links">
              About Us
            </a>
          </li>
          <li id="dropdown_toggle">
            <p className="sidebar_submenu links">
              <span className="dropdown_button">Our Services</span>
              <i className="fa-solid fa-caret-down"></i>
            </p>
          </li>
          <div className="sidebarmenu_dropdown">
            <ul className="sidebar_dropdown_list">
              <li id="side_dropdown_link">
                <a href="./import.html">Import</a>
              </li>
              <li id="side_dropdown_link">
                <a href="./export.html">Export</a>
              </li>
              <li id="side_dropdown_link">
                <a href="./itsolution.html">It Solution</a>
              </li>
              <li id="side_dropdown_link">
                <a href="./advertisment.html">Advertisment</a>
              </li>
            </ul>
          </div>
          <li>
            <a href="#" className="links">
              Contact Us
            </a>
          </li>
          <li>
            {/* <a
              href="javascript:void(0);"
              className="links"
            //   onclick="scrollToTestimonials();"
            > */}
              Testimonials
            {/* </a> */}
          </li>
        </ul>
      </nav>
      <div className="sidebar_footer">
        <p>
          <small>Version 1.0</small>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
