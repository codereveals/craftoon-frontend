import React from "react";

import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Shop", subMenu: true },
  { id: 4, name: "Gift", url: "/gift" },
  { id: 5, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Anniversary ", url: "/" },
  { id: 2, name: "Gift Data ", url: "/" },
  { id: 3, name: "Keyrings ", url: "/" },
  { id: 4, name: "Hamper ", url: "/" },
  { id: 5, name: "Sketch Lamp ", url: "/" },
];

const menubak = () => {
  return (
    <div>
      <ul className="hidden md:flex items-center gap-8 font-medium text-black">
        {data && data.length > 0
          ? data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  {!!item?.subMenu ? (
                    <li
                      className="cursor-pointer flex items-center p-2 hover:bg-black/[0.03] gap-2 relative"
                      onMouseEnter={() => setShowCatMenu(true)}
                      onMouseLeave={() => setShowCatMenu(false)}
                    >
                      {item.name}
                      <BsChevronDown />

                      {showCatMenu && (
                        <ul className="bg-white relative flex flex-col top-6 min-w-[250px] left-0 px-3 rounded py-4 text-black shadow-lg">
                          {subMenuData.map((submenu) => {
                            return (
                              <>
                                <Link href={submenu.url} key={submenu.id}>
                                  {submenu.name}
                                </Link>
                                {/* ---mega menu  */}
                              </>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li className="cursor-pointer hover:bg-black/[0.03] p-2">
                      <Link href="">{item.name}</Link>
                    </li>
                  )}
                </React.Fragment>
              );
            })
          : "No Data"}
      </ul>
    </div>
  );
};

export default menubak;
