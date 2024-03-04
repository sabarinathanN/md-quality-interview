import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from 'react';
import LoginPage from './organism/Login-page';
import LoggedInPage from "./organism/LoggedInUser";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/loggedin" element={<LoggedInPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
