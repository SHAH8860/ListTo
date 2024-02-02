import "./App.css";
import UseReduce from "./Hook/UseReduce";
import UseCallBack from "./Hook/UseCallBack";
import UseMemo from "./Hook/UseMemo";
import UseRef from "./Hook/UseRef";
import NavBar from "./component/NavBar";
import UserDetail from "./component/UserDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import AllHook from "./Hook/AllHook";

function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/useredue" element={<UseReduce />} />
          <Route path="/usecallback" element={<UseCallBack />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/detail" element={<UserDetail />} />
          <Route path="/hook" element={<AllHook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
