import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import { AiFillHome, AiOutlineArrowRight } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { Vendor, Device, Ham } from "./Svg";

function App() {
  const [data, setData] = useState([
    { name: "Dashboard", key: "ad", icon: AiFillHome, open: false },
    {
      name: "Inventory",
      children: [
        { name: "Service", key: "assetService" },
        { name: "Accessory", key: "assetAccezz" },
        { name: "Devices", key: "assetDevice" },
      ],
      icon: BsBarChartFill,
      open: false,
      key: "ai",
    },
    {
      name: "Device",
      children: [
        { name: "Assign Device", key: "assetAssign" },
        { name: "Order", key: "assetOrder" },
      ],
      icon: Device,
      open: false,
      key: "adevice",
    },
    { name: "Vendor", icon: Vendor, open: false, key: "av" },
  ]);

  const [dataLogistics, setDataLogistics] = useState([
    { name: "Dashboard", icon: AiFillHome, open: false, key: "ld" },
    {
      name: "Device",
      children: [
        { name: "Create Kit", key: "lck" },
        { name: "Assign Kit", key: "lak" },
        { name: "Maintanence", key: "lm" },
      ],
      icon: Device,
      open: false,
      key: "ldevice",
    },
    {
      name: "Logistics",
      children: [
        { name: "Queues", key: "logQ" },
        { name: "History", key: "logH" },
        { name: "Devices", key: "logD" },
      ],
      icon: BsBarChartFill,
      open: false,
      key: "ll",
    },
  ]);

  const [dataSupervisor, setDataSupervisor] = useState([
    { name: "Dashboard", icon: AiFillHome, open: false, key: "sd" },
    {
      name: "Supervisor Queue",
      icon: Device,
      open: false,
      key: "sq",
    },
    {
      name: "Report Panel",
      children: [
        { name: "Interim Report", key: "sui" },
        { name: "EOS Report", key: "sue" },
      ],
      icon: BsBarChartFill,
      open: false,
      key: "sr",
    },
    { name: "Admin", icon: Vendor, open: false, key: "sa" },
  ]);

  const [dataTechnician, setDataTechnician] = useState([
    { name: "Dashboard", icon: AiFillHome, open: false, key: "td" },
    { name: "Event Queue", icon: Vendor, open: false, key: "te" },
  ]);

  const [sidebar, setSidebar] = useState(true);

  console.log(data);

  const [active, setActive] = useState({
    name: "Dashboard",
    key: "ad",
    icon: AiFillHome,
    open: false,
  });
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
        <div className="heading">Asset Manager</div>
        {data &&
          data.map((ele) => (
            <div>
              <div
                className={`main-cont sidebar-content ${
                  ele.key === active.key && !ele.children
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
                  setActive({ ...ele });
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
                      item.key === active.key
                        ? "sidebar-collapse-content-active"
                        : ""
                    }`}
                    onClick={() => {
                      setActive({ ...item });
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

        <div className="heading">Device and Logistics</div>
        {dataLogistics &&
          dataLogistics.map((ele) => (
            <div>
              <div
                className={`main-cont sidebar-content ${
                  ele.key === active.key && !ele.children
                    ? "sidebar-collapse-content-active"
                    : ""
                } ${ele.children && ele.open ? "sidebar-content-expand" : ""} ${
                  sidebar ? "" : "main"
                }`}
                onClick={() => {
                  let datas = [];
                  console.log("call");
                  for (let i = 0; i < dataLogistics.length; i++) {
                    if (dataLogistics[i].name === ele.name) {
                      datas.push({
                        ...dataLogistics[i],
                        open: !dataLogistics[i].open,
                      });
                    } else {
                      datas.push(dataLogistics[i]);
                    }
                  }
                  setDataLogistics([...datas]);
                  setActive({ ...ele });
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
                      item.key === active.key
                        ? "sidebar-collapse-content-active"
                        : ""
                    }`}
                    onClick={() => {
                      setActive({ ...item });
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

        <div className="heading">Supervisor</div>
        {dataSupervisor &&
          dataSupervisor.map((ele) => (
            <div>
              <div
                className={`main-cont sidebar-content ${
                  ele.key === active.key && !ele.children
                    ? "sidebar-collapse-content-active"
                    : ""
                } ${ele.children && ele.open ? "sidebar-content-expand" : ""} ${
                  sidebar ? "" : "main"
                }`}
                onClick={() => {
                  let datas = [];
                  console.log("call");
                  for (let i = 0; i < dataSupervisor.length; i++) {
                    if (dataSupervisor[i].name === ele.name) {
                      datas.push({
                        ...dataSupervisor[i],
                        open: !dataSupervisor[i].open,
                      });
                    } else {
                      datas.push(dataSupervisor[i]);
                    }
                  }
                  setDataSupervisor([...datas]);
                  setActive({ ...ele });
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
                      item.key === active.key
                        ? "sidebar-collapse-content-active"
                        : ""
                    }`}
                    onClick={() => {
                      setActive({ ...item });
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

        <div className="heading">Technician</div>
        {dataTechnician &&
          dataTechnician.map((ele) => (
            <div>
              <div
                className={`main-cont sidebar-content ${
                  ele.key === active.key && !ele.children
                    ? "sidebar-collapse-content-active"
                    : ""
                } ${ele.children && ele.open ? "sidebar-content-expand" : ""} ${
                  sidebar ? "" : "main"
                }`}
                onClick={() => {
                  let datas = [];
                  console.log("call");
                  for (let i = 0; i < dataTechnician.length; i++) {
                    if (dataTechnician[i].name === ele.name) {
                      datas.push({
                        ...dataTechnician[i],
                        open: !dataTechnician[i].open,
                      });
                    } else {
                      datas.push(dataTechnician[i]);
                    }
                  }
                  setDataTechnician([...datas]);
                  setActive({ ...ele });
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
                      item.key === active.key
                        ? "sidebar-collapse-content-active"
                        : ""
                    }`}
                    onClick={() => {
                      setActive({ ...item });
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
      <div className="page">{active.name}</div>
    </div>
  );
}

export default App;
