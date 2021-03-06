import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FHome from "./FHome";
// import fRegistration from "./Registration";
import FNavbar from "./FNavbar";
import AddItems from "./addItems";
import showI from "./ShowI";
import Prof from "./Prof";
import editProf from "./editProf";
import orders from "./orders";
import Footer from "./Footer";
import Readmore from "./Readmore";
import Positive from "./Positive";
import Negative from "./Negative";
import Neutral from "./Neutral";

export default class AllF extends React.Component {
  state = {
    users: [],
    products: [],
    category: [],
  };

  getCategory = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/category/",
        config
      );
      this.setState({
        category: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  getproducts = async (catid) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/vendor/products`,
        config
      );
      this.setState({
        products: res.data.data,
      });
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  render() {
    return (
      <Router>
        <div className="">
          <FNavbar />
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

          <Switch>
            <Route exact path={"/vendor/Home"} component={FHome} />
            {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}

            <Route
              exact
              path={"/vendor/addItems"}
              render={(props) => (
                <AddItems
                  {...props}
                  getproducts={this.getproducts}
                  getCategory={this.getCategory}
                  products={this.state.products}
                  category={this.state.category}
                />
              )}
            />
            <Route path={"/vendor/showI"} component={showI} />
            <Route path={"/vendor/Profile"} component={Prof} />
            <Route path={"/vendor/editProfile"} component={editProf} />
            <Route path={"/vendor/orders"} component={orders} />
            <Route path={"/vendor/Readmore"} component={Readmore} />
            <Route path={"/vendor/Positive"} component={Positive} />
            <Route path={"/vendor/Negative"} component={Negative} />
            <Route path={"/vendor/Neutral"} component={Neutral} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
