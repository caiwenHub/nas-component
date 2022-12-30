import { useState } from "react";
import Button from "./components/Button/button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button>我是按钮</Button>
      <br />
      <br />
      <Button btnType="primary" size="lg">
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button btnType="primary" size="sm">
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button btnType="primary">
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button btnType="danger" size="sm">
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button btnType="success" size="sm">
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button btnType="warning" size="sm">
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button btnType="text" size="sm" >
        按钮
      </Button>{" "}
      &nbsp;&nbsp;
      <Button btnType="link" href="#" size="sm">
        按钮
      </Button>
      <br />
      <br />
    </div>
  );
}

export default App;
