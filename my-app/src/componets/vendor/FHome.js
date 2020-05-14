import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/instants.jpg";
import "../CSS/farm.css";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import Sentiment from 'sentiment';
const sentiment=new Sentiment();

class FHome extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      title:"",
      readmore:false,
      urlToImage:"",
      description:"",
      sentimentScore: null,
      generalSentiment: null,
    };
    this.findSentiment = this.findSentiment.bind(this);
  }
  findSentiment=(event,image,description,e)=> {
    this.setState({
      title:event,
      urlToImage:image,
      description:description,
      readmore:true
    
      
    })
     
    const result = sentiment.analyze(event);
    console.log(result);
    this.setState({
      sentimentScore: result.score,
    });
    if (result.score < 0) {
      this.setState({
        generalSentiment: "negative",
      });
    } else if (result.score > 0) {
      this.setState({
        generalSentiment: "positive",
      });
    } else {
      this.setState({
        generalSentiment: "neutral",
      });
    }
   console.log(this.state.generalSentiment);
  }
  //{this.state.input >= 18 && this.submit ?  buttonTwo : buttonThree }   ternary operator
  componentDidMount() {
    
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=0976e1460f954e439dc6f1938e0a096f" //top live headlines
    )
      .then((Response) => Response.json())
      .then((findresponse) => {
        console.log(findresponse.articles);
        this.setState({
          data: findresponse.articles
          
        });
      });
  }

  
  render() {
    return (

      <Fragment>
        {this.state.readmore?
          ((<Redirect to={{ pathname: "/vendor/Readmore",
            state: {
              dynamicData: this.state.title,
              urlToImage: this.state.urlToImage,
              description: this.state.description,
              score:this.state.sentimentScore,
              type: this.state.generalSentiment
            }      
        }}/>)):(
         

        <form>
        <div className=" container-fluid mt-5" id="product">
          $nbps;
          <h2> Latest</h2>
          {/* <textarea value={this.state.title}></textarea>
          <h6>Sentiment Score:{this.state.sentimentScore}</h6>
          <h6>Type of NEWS:{this.state.generalSentiment}</h6> */}
          {/* <textarea onChange={this.findSentiment}></textarea>
          <p>sentiment score:{this.state.sentimentScore}</p>
          <p>general sentiment:{this.state.generalSentiment}</p> */}
          {/* <div className="row">
            {this.state.data.map((dynamicData, key) => (
              <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
                <div className="product-top">
                  {/* {this.quickstart(dynamicData.title)} 
                  <img src={dynamicData.urlToImage} className="img1" alt="" />
                  <div className="overlay">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      title="Quick Shop"

                      //data-toggle="modal"
                      //data-target="#quickModel"
                    >
                      <i className="fa fa-eye"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      title="Add to Cart"
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-bottom text-center">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <i className="fa fa-star-o"></i>
                  <h5>{dynamicData.title}</h5>
                  <Link
                    type="submit"
                    className="btn input-btn"
                    title="click here"
                    to={{
                      pathname: "/vendor/Readmore",
                      state: {
                        dynamicData: dynamicData,
                        urlToImage: dynamicData.urlToImage,
                        description: dynamicData.description,
                      },
                    }}
                  >
                    Read More
                  </Link>
                
                </div>
              </div>
            ))}
          </div> */}
          <div className="row">
            {this.state.data.map((dynamicData, key) => (
              <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
                <div className="product-top">
                  <img src={dynamicData.urlToImage} className="img1" alt="" />
                  <input
                    type="text"
                    // onLoadedDataCapture={(e) => this.findSentiment(dynamicData.title, e)}
                    value={dynamicData.title}
                  ></input>
                  {/* <textarea
                    //type="text"
                    value={dynamicData.title}
                    onLoad={this.findSentiment}
                  /> */}
                  {/* <p>sentiment score:{this.state.sentimentScore}</p>
                  <p>general sentiment:{this.state.generalSentiment}</p> */}
                  <input
                    type="submit"
                    value="Click Here"
                    onClick={(e) => this.findSentiment(dynamicData.title, dynamicData.urlToImage, dynamicData.description, e)}
                  ></input>
                  {/* <Link
                    type="submit"
                    className="btn input-btn"
                    title="click here"
                    to={{
                      pathname: "/vendor/Readmore",
                      state: {
                        dynamicData: dynamicData,
                        urlToImage: dynamicData.urlToImage,
                        description: dynamicData.description,
                      },
                    }}
                  >
                    Read More
                  </Link> */}

                  {/* <img src={dynamicData.urlToImage} className="img1" alt="" /> */}
                  {/* <div className="overlay">
                     <button
                      type="button"
                      className="btn btn-secondary"
                      title="Quick Shop"

                      
                    >
                      <i className="fa fa-eye"></i>
                    </button> 

                    <button
                      type="button"
                      className="btn btn-secondary"
                      title="Add to Cart"
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </button> 
                  </div> */}
                </div>
                {/* <div className="product-bottom text-center">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <i className="fa fa-star-o"></i>
                  <h5>{dynamicData.title}</h5>
                  <Link
                    type="submit"
                    className="btn input-btn"
                    title="click here"
                    to={{
                      pathname: "/vendor/Readmore",
                      state: {
                        dynamicData: dynamicData,
                        urlToImage: dynamicData.urlToImage,
                        description: dynamicData.description,
                      },
                    }}
                  >
                    Read More
                  </Link>
                </div> */}
              </div>
            ))}
          </div>
        </div>
        </form>
        )}
      </Fragment>
    );
  }
}

export default FHome;
