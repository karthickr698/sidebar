import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import { AiFillHome, AiOutlineArrowRight } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { Vendor, Device, Ham } from "./Svg";

function App() {
  const [data, setData] = useState([
    { name: "Dashboard", icon: AiFillHome, open: false },
    {
      name: "Inventory",
      children: [
        { name: "Service" },
        { name: "Accessory" },
        { name: "Devices" },
      ],
      icon: BsBarChartFill,
      open: false,
    },
    {
      name: "Device",
      children: [{ name: "Assign Device" }, { name: "Order" }],
      icon: Device,
      open: false,
    },
    { name: "Vendor", icon: Vendor, open: false },
  ]);

  const [sidebar, setSidebar] = useState(true);

  console.log(data);

  const [active, setActive] = useState("Dashboard");
  return (
    <div className="container">
      <div className={`sidebar ${!sidebar ? "sidebar-active" : ""}`}>
        <div
          className="ham"
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <Ham />
        </div>
        {data &&
          data.map((ele) => (
            <div>
              <div
                className={`main-cont sidebar-content ${
                  ele.name === active && !ele.children
                    ? "sidebar-collapse-content-active"
                    : ""
                } ${ele.children && ele.open ? "sidebar-content-expand" : ""} ${
                  sidebar ? "" : "main"
                }`}
                onClick={() => {
                  let datas = [];
                  console.log("call");
                  for (let i = 0; i < data.length; i++) {
                    if (data[i].name === ele.name) {
                      datas.push({ ...data[i], open: !data[i].open });
                    } else {
                      datas.push(data[i]);
                    }
                  }
                  setData([...datas]);
                  setActive(ele.name);
                  if (ele.children) {
                    //setSidebar(!sidebar);
                  }
                }}
              >
                <div className={` ${sidebar ? "icon" : "icon1"}`}>
                  <ele.icon />
                </div>
                {sidebar && <div>{ele.name}</div>}

                {ele.children && sidebar && (
                  <div className="arrow">
                    {ele.open ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
                  </div>
                )}
              </div>
              {ele.open &&
                sidebar &&
                ele.children &&
                ele.children.map((item) => (
                  <div
                    className={`main-cont sidebar-collapse-content ${
                      item.name === active
                        ? "sidebar-collapse-content-active"
                        : ""
                    }`}
                    onClick={() => {
                      setActive(item.name);
                    }}
                  >
                    <div className="icon">
                      <AiOutlineArrowRight />
                    </div>

                    <div>{item.name}</div>
                  </div>
                ))}
            </div>
          ))}
      </div>
      <div className="page">{active}</div>
    </div>
  );
}

export default App;
