import { Button, Empty, message } from "antd";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import { fetchInfo, updateInfo } from "../fetch";

interface IInfo {
  version: string;
  tag: string;
  count: number;
}

export const loader = async () => {
  const info = await fetchInfo();
  return json({
    info,
  });
};

const App = () => {
  const { info } = useLoaderData<{ info: IInfo }>();
  const [messageApi, contextHolder] = message.useMessage();

  const handleClick = async () => {
    const res = await updateInfo();
    messageApi.info(res.count);
  };

  return (
    <div>
      {contextHolder}
      <div>this is index page</div>
      <div>{info?.version}</div>
      <div>{info?.tag}</div>
      <div>{info?.count}</div>
      <Button onClick={handleClick}>update</Button>
      <div>
        <Link to="/hello">hello</Link>
      </div>
      <Empty />
    </div>
  );
};

export default App;
