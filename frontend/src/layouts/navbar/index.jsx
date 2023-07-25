import {
  Image,
  Layout,
  Menu,
  Popover,
  Row,
  Space,
  Typography,
  theme,
} from "antd";
import userLogo from "../../assets/user_1.png";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const user = JSON.parse(localStorage.getItem('user')); 
  return (
    <Header
      style={{
        height: 50,
        width: "100%",
        position: "relative",
        backgroundColor: colorBgContainer,
      }}
    >
      {/* <Image
        src={userLogo}
        width={40}
        height={40}
        preview={false}
        style={{ verticalAlign: "baseline", float: "right" }}
      /> */}
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          height: 50,
        }}
      >
        <Popover
          content={
            <Menu mode="inline" theme="light" style={{ width: 200, margin: 0 }}>
              <Menu.Item>Quản trị tài khoản</Menu.Item>
              <Menu.Item
                onClick={() => {
                  // dispatch(authSlice.actions.logout());
                  navigate("login", { replace: true });
                }}
              >
                Đăng xuất
              </Menu.Item>
            </Menu>
          }
          trigger="click"
        >
          <Space
            direction="horizontal"
            style={{ marginLeft: "auto", height: 50 }}
          >
            <Image width={30} height={30} preview={false} src={userLogo} />
            <Typography.Text style={{ color: "#000", fontWeight: "bold" }}>
              {user.name}
            </Typography.Text>
          </Space>
        </Popover>
      </Row>
    </Header>
  );
};

export default Navbar;
