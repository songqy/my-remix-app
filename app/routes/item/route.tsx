import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import { Menu } from "antd";

const menuItems = [
  {
    label: "Index",
    key: "/item",
  },
  {
    label: "List",
    key: "/item/list",
  },
];

const ItemLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = ({ key }) => {
    navigate(key);
  };
  return (
    <div>
      <Menu
        onClick={handleClick}
        selectedKeys={[location.pathname]}
        items={menuItems}
        mode="horizontal"
      />
      <Outlet />
    </div>
  );
};

export default ItemLayout;
