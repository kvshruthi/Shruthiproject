import React, { Component, Link } from "react";
import "../CSS/admin.css";
import NavbarT from "./NavbarT";
import NavbarA from "./NavbarA";
import Dashboard from "./Dashboard";
import Addnews from "./Addnews";


import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // useParams,
  // useRouteMatch
} from "react-router-dom";
//import Category from "./Category";

export default class AHome extends Component {
  state = {
    users: [],
    
    publics: [],
  };

 

  getusers = async () => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const res1 = await axios.get(
        `http://localhost:5000/api/v1/users`,
        config
      );
      this.setState({
        users: res1.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  getusers = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/users`,
        config
      );
      this.setState({
        users: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  getpublic = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/public`,
        config
      );
      this.setState({
        publics: res.data.data,
      });
      console.log(res.data.data);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  
  render() {
    return (
      <Router>
        <div>
          <div className="container-scroller">
            <NavbarT />

            {/* <!-- partial --> */}
            <div className="container-fluid page-body-wrapper">
              {/* <!-- partial:partials/_sidebar.html --> */}
              <NavbarA />
              {/* <!-- partial --> */}
              <div className="main-panel">
                <Switch>
                   
                  <Route
                    exact
                    path={"/Admin"}
                    render={(props) => (
                      <Dashboard
                        {...props}
                        
                        getusers={this.getusers}
                        getpublic={this.getpublic}
                       
                        publics={this.state.publics}
                        
                        users={this.state.user}
                        
                      />

                    )}

                  />
                  <Route 
                
                  path={"/Admin/addnews"}

                  component={Addnews}
                  />

                </Switch>{" "}
                {/* <!-- main-panel ends --> */}
                <footer className="footer">
                  <div className="d-sm-flex justify-content-center justify-content-sm-between">
                    <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                      Copyright © 2020{" "}
                      {/* <Link to="https://www.bootstrapdash.com/" target="_blank">
                        BootstrapDash
                      </Link> */}
                      . All rights reserved.
                    </span>
                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                      Hand-crafted &amp; made with{" "}
                      <i className="mdi mdi-heart text-danger"></i>
                    </span>
                  </div>
                </footer>
              </div>
            </div>
            {/* <!-- page-body-wrapper ends --> */}
          </div>
        </div>
      </Router>
    );
  }
}
