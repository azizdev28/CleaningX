import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./page/Home";
import Main from "./components/Main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Home />
      <Main />
    </Fragment>
  );
}

export default App;
