import { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import UserAuth from "./components/login/UserAuth";
import AdminAuth from "./components/login/AdminAuth";
import NavLogin from "./components/navbar/NavLogin";
import EmpHome from "./pages/emp/EmpHome";
import { MultiStepForm } from "./components/form/MultiStepForm";
import BasicTable from "./components/roaster/BasicTable";
import AdminHome from "./pages/admin/AdminHome";

function App() {
  const [user, setUserLogin] = useState({});
  return (
    <>
      <Switch>
        <Route exact path="/home">
          <EmpHome />
        </Route>
        <Route exact path="/ahome">
          <AdminHome />
        </Route>
        <Route path="/uprofile">
          <MultiStepForm />
        </Route>
        <Route exact path="/roaster">
          <BasicTable />
        </Route>
        <Route exact path="/">
          <NavLogin />
          <UserAuth />
        </Route>
        <Route exact path="/admin">
          <NavLogin />
          <AdminAuth />
        </Route>
      </Switch>
    </>
  );
}

export default App;
