import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddService from "../AddService/AddService";
import Sidebar from "../Sidebar/Sidebar";
import OrderList from "../OrderList/OrderList";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageService from "../ManageService/ManageService";
import Order from "../Order/Order";
import Review from "../Review/Review";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="content bg-light">
        <Switch>
          <Route exact path={`${path}/`}>
             <OrderList></OrderList>
          </Route>
          <Route path={`${path}/order/:serviceName`}>
             <Order></Order>
          </Route>
          <Route path={`${path}/orderList`}>
             <OrderList></OrderList>
          </Route>
          <Route path={`${path}/review`}>
             <Review></Review>
          </Route>
          <Route path={`${path}/addService`}>
             <AddService></AddService>
          </Route>
          <Route path={`${path}/makeAdmin`}>
             <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/manageService`}>
             <ManageService></ManageService>
          </Route>
        </Switch>

      </div>
    </div>
  );
};

export default Dashboard;
