import { useState } from "react";
import Button from "./components/Button/button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button type="text" danger size="sm">我是按钮</Button>
      <br />
      <Button type="link" danger size="sm">我是按钮</Button>
      <br />
      <br />
      <Button type="primary" danger size="lg" >
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button type="primary" size="sm"  >
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button type="primary" warning>
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button  size="sm" success>
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button size="sm" danger>
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button  size="sm">
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button  size="sm" >
        按钮
      </Button>{" "}
      &nbsp;&nbsp;
      <Button type="link" href="#" size="sm">
        按钮
      </Button>
      <br />
      <br />
    </div>
  );
}

export default App;
