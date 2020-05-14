import React, { Component } from "react";
import "../CSS/App.css";
export default class editProf extends Component {
  render() {
    return (
      <div className="proftop profile">
        <div className="container">
          {" "}
          <legend className="pt-4 title text-light">
            
            <center>Add News</center>{" "}
          </legend>
          <div
            className=""
            // style={{ background: "transperent" }}
          >
            {" "}
            <div class=" p-t-50 p-b-50">
              <div class=" jumbotron text-black">
                <form class="form-horizontal" role="form">
                  <fieldset>
                    <div class="form-group">
                      <label class="control-label" for="Date Of Birth">
                        <h5>Title</h5>
                      </label>
                      <div class="">
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-user fa-2x p-1"></i>
                          </div>
                          <input
                            id="Name (Full name)"
                            name="Name (Full name)"
                            type="text"
                            placeholder="NEWS Tilte"
                            class="form-control input-md"
                          />
                        </div>
                      </div>
                    </div>


                    <div class=" form-group">
                      <label
                        class="control-label col-xs-12"
                        for="NEWS Description"
                      >
                        <h5>Description</h5>
                      </label>
                     
                       <div className="row mt-2">
                       
                        <div class="col-md-12  col-xs-12">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="Address"
                            class="form-control input-md "
                          />
                        </div>
                      </div> 
                    </div> 




            
                    
                  
                    
                    <div class="form-group row justify-content-center">
                      <div class="col-md-6 ">
                        <a href="#" class="btn btn-success">
                          <span class="glyphicon glyphicon-thumbs-up"></span>{" "}
                          Submit
                        </a>
                        <a href="#" class="btn btn-danger ml-2" value="">
                          <span class="glyphicon glyphicon-remove-sign"></span>{" "}
                          Clear
                        </a>
                      </div>
                    </div>


                    
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
         
         
        </div>
        
      </div>
      
    );
  }
}
