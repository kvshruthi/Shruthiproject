import React, { Component } from "react";
import Category from "./Category";
import Addnews from "./Addnews";
// import React, { Component, useReducer } from "react";
// import Category from "./Category";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";



export default class Dashboard extends Component {
  state={
    publics:[]
  }
  componentDidMount=async()=> {
   
    this.props.getpublic();
    //this.props.getCategory();
    this.props.getusers();
   
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
          publics: res1.data.data,
        });
        console.log(this.state.publics);
      } catch (err) {
        console.log("Can't load the items");
      
    };

  }


  onDeleteUser = async (user, e) => {
    e.preventDefault();
    // console.log(user);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.delete(`http://localhost:5000/api/v1/users/${user}`, config);
      // await axios.delete(`http://localhost:5000/api/v1/public/${user}`, config);
      alert("User Deleted");
    } catch (err) {
      console.log("Can't load the items");
    }
  };
 
  // onDeleteUser = async (user, e) => {
  //   e.preventDefault();
  //   // console.log(user);
  //   const token = sessionStorage.getItem("token");
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     await axios.delete(`http://localhost:5000/api/v1/users/${user}`, config);
  //     //await axios.delete(`http://localhost:5000/api/v1/public/${user}`, config);
  //     alert("User Deleted");
  //   } catch (err) {
  //     console.log("Can't load the items");
  //   }
  // };






  render() {
    
    const publics = this.props.publics;
    const users=this.props.users;

    console.log(this.props);
    return (
      <div className="content-wrapper ">
        <div className="row d-none" id="proBanner"></div>
        <div className="page-header mb-5">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home "></i>
            </span>{" "}
            Dashboard{" "}
          </h3>
        </div>
       
        {/* User List */}
        <div className="row" id="vendor">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Users</h4>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> User Name </th>
                        {/* <th> Phone </th> */}
                        <th> email </th>

                        {/* <th> Address </th>
                        <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.publics.map((user) => (
                        <tr key={user._id}>
                          <td>
                            {/* <img
                              src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
                              className="mr-2"
                              alt=""
                              width="40px"
                            /> */}
                            {" "}
                            {user.name}
                          </td>
                          {/* <td>{user.phone} </td> */}
                          <td>
                            <label
                              className="badge text-bg"
                              style={{ fontSize: 14 + "px" }}
                            >
                              {user.email}
                            </label>
                          </td>

                          {/* <td> {user.address} </td> */}
                          <td className="actions" data-th="">
                            <button className="btn btn-info btn-sm">
                              <i className="fa fa-edit"></i>
                            </button>
                            <a className="btn btn-danger btn-sm"
                              onClick={(e) => this.onDeleteUser(user._id,e)}
                            
                            >

                              <i className="fa fa-trash-o"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Vendor List */}
       
        {/* <div className="row mt-5" id="category">
          <div className="col-6 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">News</h4>{" "}
                <div className="pull-right mb-2">
                  <Link
                    to="/user/editprofile"
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fa fa-plus fa-1x">Add News</i>
                  </Link>
                </div>
                <div className="table-responsive ">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> Name </th>

                        <th> Report </th>
                      </tr>
                    </thead> */}
                    {/* <tbody>
                      {this.props.category.map((category) => (
                        <tr key={category._id}>
                          <td>{category.catname} </td>

                          <td className="actions" data-th="">
                            <button className="btn btn-info btn-sm mr-4">
                              <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn btn-danger btn-sm">
                              <i className="fa fa-trash-o"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody> */}
                  {/* </table> */}
                {/* </div> */}
              {/* </div> */}
            
          
        

        
      </div>
    );
  }
}
