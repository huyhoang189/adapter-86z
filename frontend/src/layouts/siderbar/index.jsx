import Sider from "antd/es/layout/Sider";
import Logo from "../../assets/logo.png";
import { Image, Menu } from "antd";
import * as iconsAnt from "react-icons/ai";
import * as iconsBs from "react-icons/bs";
import * as iconFa from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
const items = [
  {
    label: "Dashboard",
    type: "group",
    children: [],
  },

  {
    label: "Chung",
    type: "group",
    children: [
      {
        key: "departments", // Add a unique key based on the label
        label: "Đơn vị",
        icon: <iconsAnt.AiFillHome />,
      },
      {
        key: "malwares",
        label: "Mã độc",
        icon: <iconsAnt.AiFillMail />,
      },
      {
        key: "category",
        label: "Danh mục báo cáo",
        icon: <iconsAnt.AiFillMail />,
      },
    ],
  },
  {
    label: "Quản lý trực",
    type: "group",
    children: [
      {
        key: "today",
        label: "Trong ngày",
        icon: <iconsAnt.AiFillMail />,
      },
      {
        key: "search",
        label: "Tìm kiếm",
        icon: <iconsAnt.AiFillMail />,
      },
    ],
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key);
  };

  // console.log(window.location);
  return (
    <Sider
      style={{ width: 210, height: "100%", position: "fixed", zIndex: 30 }}
    >
      <Image src={Logo} preview={false} style={{ padding: 5 }} />
      <Menu
        selectedKeys={window.location.pathname.split("/")[1]}
        items={items}
        theme="dark"
        onClick={onClick}
      />
    </Sider>
  );
};

export default Sidebar;
