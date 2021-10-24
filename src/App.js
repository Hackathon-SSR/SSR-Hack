import { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import UserAuth from "./components/login/UserAuth";
import AdminAuth from "./components/login/AdminAuth";
import NavLogin from "./components/navbar/NavLogin";
import EmpHome from "./pages/emp/EmpHome";
import { MultiStepForm } from "./components/form/MultiStepForm";
import BasicTable from "./components/roaster/BasicTable";

function App() {
  const [user, setUserLogin] = useState({});
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <NavLogin />
          <UserAuth setUserLogin={setUserLogin} />
        </Route>
        <Route path="/admin" exact>
          <NavLogin />
          <AdminAuth />
        </Route>
        {/* <Route path="/user">{user && user._id && <EmpHome />}</Route> */}
        <Route path="/home">
          <EmpHome />
        </Route>
        <Route path="/uprofile">
          <MultiStepForm />
        </Route>
        <Route path="/roaster">
          <BasicTable />
        </Route>
      </Switch>
    </>
  );
}

export default App;
