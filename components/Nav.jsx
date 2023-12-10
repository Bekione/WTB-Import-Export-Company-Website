"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isSticked, setIsSticked }) => {
  const [sticky, setSticky] = useState("");

  const [dropdownClass, setDropdownClass] = useState("");
  const currentRoute = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    window.addEventListener("load", isSticky);
    window.addEventListener("resize", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
      window.removeEventListener("load", isSticky);
      window.removeEventListener("resize", isSticky);
    };
  }, []);

  useEffect(() => {
    const pathsToCompare = [
      "/itsolution",
      "/advertisment",
      "/import",
      "/export",
    ];
    if (pathsToCompare.includes(currentRoute)) {
      setDropdownClass("text-clr-secondary");
    } else setDropdownClass("");
  }, [currentRoute]);

  const isSticky = () => {
    const offsetTop = window.innerWidth <= 768 ? 1 : 52;
    const scrollTop = window.scrollY;
    const stickyClass =
      scrollTop >= offsetTop
        ? "sticked fixed top-0 left-0 w-full !bg-clr-header z-50"
        : "";
    setSticky(stickyClass);
    scrollTop >= offsetTop ? setIsSticked(true) : setIsSticked(false);
  };

  const navListClasses = (path) =>
    `nav_list ${currentRoute === path ? "active" : ""}`;
  const dropdownListClasses = (path) =>
    `group/list dropdown_list ${
      currentRoute === path ? "before:h-full bg-white bg-opacity-40" : ""
    }`;
  const dropdownLinkClass = (path) =>
    `dropdown_link ${currentRoute === path ? "!text-clr-primary" : ""}`;

    const navTextColor = isSticked ? "-white" : "-clr-primary"
  return (
    <div className={`main_header  ${sticky}`}>
      <div className={`dotted_bg`}></div>
      <div className="Wts_logo flex">
        <Link href="/" title={"WTS Import Export"}>
          <Image
            src={
              !isSticked
                ? "/assets/images/logos/main-logo-dark.svg"
                : "/assets/images/logos/main-logo-light.svg"
            }
            alt="Logo"
            width={252}
            height={81}
            className="transform scale-90 sm:scale-100"
            priority
          />
        </Link>
      </div>
      <nav className="WTS_menus desktop hidden md:flex flex-1 items-center justify-end">
        <ul role="list" className="menu_list flex gap-6">
          <li className={navListClasses("/")}>
            <Link href="/" className={`${'text'.concat(navTextColor)} nav_link`}>
              Home
            </Link>
          </li>
          <li className={navListClasses("/about-us")}>
            <Link href="/about-us" className={`${'text'.concat(navTextColor)} nav_link`}>
              About Us
            </Link>
          </li>
          <li className="group relative">
            <span
              className={`${'text'.concat(navTextColor)} cursor-default nav_link`}
            >
              <span className={dropdownClass}>Our Services</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`ml-1.5 -mb-[.20rem] ${dropdownClass}`}
              />
            </span>
            <div className="dropdown_lists">
              <ul className="flex flex-col list-none bg-clr-secondary mt-[40px]">
                <li className={dropdownListClasses("/import")}>
                  <Link href="/import" className={dropdownLinkClass("/import")}>
                    Import
                  </Link>
                </li>
                <li className={dropdownListClasses("/export")}>
                  <Link href="/export" className={dropdownLinkClass("/export")}>
                    Export
                  </Link>
                </li>
                <li className={dropdownListClasses("/itsolution")}>
                  <Link
                    href="/itsolution"
                    className={dropdownLinkClass("/itsolution")}
                  >
                    It Solution
                  </Link>
                </li>
                <li className={dropdownListClasses("/advertisment")}>
                  <Link
                    href="/advertisment"
                    className={dropdownLinkClass("/advertisment")}
                  >
                    Advertisment
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={navListClasses("/contact-us")}>
            <Link
              href="/contact-us"
              className={`${"text" + navTextColor} nav_link`}
            >
              Contact Us
            </Link>
          </li>
          {/* <li className={navListClasses("/testimonial")}>
            <Link
              href="/testimonials"
              className={`${'text' + navTextColor} nav_link`}
              // onclick="scrollToTestimonials();"
            >
              Testimonials
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
