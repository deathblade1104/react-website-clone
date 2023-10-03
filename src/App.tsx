import { Outlet } from "react-router-dom";
import Components from "./components";

function App() {
  return (
    <>
      <Components.Header />
      <Outlet />
      <Components.Footer />
    </>
  );
}

export default App;
