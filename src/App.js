import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Header />
                <Home />{" "}
              </Fragment>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <Fragment>
                <Header />
                <Checkout />{" "}
              </Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
