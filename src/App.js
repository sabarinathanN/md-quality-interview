import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from 'react';
import LoginPage from './organism/Login-page';
import LoggedInPage from "./organism/LoggedInUser";
import SignUp from "./organism/SignUp";
import CountryCodeList from "./organism/testing";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/loggedin" element={<LoggedInPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/testing" element={<CountryCodeList />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
