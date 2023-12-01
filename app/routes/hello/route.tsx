import { Button } from "antd";
import { useState } from "react";

import styles from "./style/index.module.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount((p) => p + 1)}>add one</Button>
      <div className={styles.title}>count: {count}</div>
    </div>
  );
};

export default App;
