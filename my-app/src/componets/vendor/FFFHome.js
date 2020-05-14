// import React, { Component, Fragment } from "react";
// import logo from "../../assets/logo.png";
// import user from "../../assets/instants.jpg";
// import "../CSS/farm.css";
// import axios from "axios";

// class FHome extends Component {
//     constructor(props) {
//         super(props);

//         // this.getUser = this.getUser;
//         this.state = {

//             articles: ""
//             // email: "",
//             // password: "",
//             // items: [],
//             // user: "",
//             // isAuth: null,
//         };
//         // this.onLogout = this.onLogout.bind(this);
//     }

//     componentDidMount = async () => {
//         this.setState({ articles: this.props.location.state.articles });
//         // getting cart
//         const token = sessionStorage.getItem("token");
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 "Content-Type": "application/json",
//             },
//         };
//         try {
//             const result = await axios.get(
//                 `http://newsapi.org/v2/top-headlines?country=us&apiKey=0976e1460f954e439dc6f1938e0a096f`,
//                 config
//             );
//             this.setState({
//                 articles: result.data.data,
//             });
//             console.log(result);
//         } catch (err) {
//             console.log("Can't load the items");
//         }
//     };




//     // state={

//     //   articles:""
//     // }

//     // componentDidMount=async()=>{
//     //   const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=0976e1460f954e439dc6f1938e0a096f`;  //top live headlines
//     //   const response=await axios.get(url);
//     //   //const data=await response.json;
//     //   console.log(response.data.articles);
//     //   //this.setState({articles:data.source[0],loading:false});

//     // }

//     // state = {
//     //   articles: ""
//     // }

//     // componentDidMount = async () => {
//     //   const url = `http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0976e1460f954e439dc6f1938e0a096f`;   //top live headlines from specific news
//     //   const response = await axios.get(url);
//     //   //const data=await response.json();
//     //   console.log(response.data.articles);
//     // }
//     // componentDidMount = async () => {
//     //   const url = `http://newsapi.org/v2/everything?q=Apple&from=2020-04-29&sortBy=popularity&apiKey=0976e1460f954e439dc6f1938e0a096f`;  //searching new articles
//     //   const response = await axios.get(url);
//     //   //const data=await response.json();
//     //   console.log(response.data.articles);

//     // }





//     render() {
//         console.log(this.state.articles);
//         return (

//             // <Fragment>
//             <div>
//                 {/* <table>
//         {this.props.articles.map((articles) => (
//           <tr.Item key={articles._id}>
//             {articles.title}
//           </tr.Item>
//         ))}
//         </table> */}
//             </div>

//             //   <div className=" container-fluid mt-5" id="product">
//             //     $nbsp;

//             //     <h2> Latest</h2>

//             //     <div className="row">
//             //       <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
//             //         <div className="product-top">
//             //           <img
//             //             // src="https://cdn.shopify.com/s/files/1/1087/0872/products/Kerala_Prawn_Pickle_product_1_1525852674359_grande.jpg?v=1571607439"
//             //             src={user}
//             //             className="img1"
//             //             alt=""
//             //           />

//             //           <div className="overlay">
//             //             <button
//             //               type="button"
//             //               className="btn btn-secondary"
//             //               title="Quick Shop"
//             //               data-toggle="modal"
//             //               data-target="#quickModel"
//             //             >
//             //               <i className="fa fa-eye"></i>
//             //             </button>

//             //             <button
//             //               type="button"
//             //               className="btn btn-secondary"
//             //               title="Add to Cart"
//             //               data-toggle=""
//             //               data-target=""
//             //             >
//             //               <i className="fa fa-shopping-cart"></i>
//             //             </button>
//             //           </div>
//             //         </div>
//             //         <div className="product-bottom text-center">
//             //           <i className="fa fa-star"></i>
//             //           <i className="fa fa-star-half-o"></i>
//             //           <i className="fa fa-star-o"></i>
//             //           <h3>Product 1</h3>
//             //           <h5>₹300.00</h5>
//             //         </div>
//             //       </div>
//             //       {/*  */}
//             //       <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
//             //         <div className="product-top">
//             //           <img
//             //             src="https://cdn.shopify.com/s/files/1/1087/0872/products/Kerala_Prawn_Pickle_product_1_1525852674359_grande.jpg?v=1571607439"
//             //             className="img1"
//             //             alt=""
//             //           />
//             //           <div className="overlay">
//             //             <button
//             //               type="button"
//             //               className="btn btn-secondary"
//             //               title="Quick Shop"
//             //               data-toggle="modal"
//             //               data-target="#quickModel"
//             //             >
//             //               <i className="fa fa-eye"></i>
//             //             </button>

//             //             <button
//             //               type="button"
//             //               className="btn btn-secondary"
//             //               title="Add to Cart"
//             //             >
//             //               <i className="fa fa-shopping-cart"></i>
//             //             </button>
//             //           </div>
//             //         </div>
//             //         <div className="product-bottom text-center">
//             //           <i className="fa fa-star"></i>
//             //           <i className="fa fa-star-half-o"></i>
//             //           <i className="fa fa-star-o"></i>
//             //           <h3>Product 1</h3>
//             //           <h5>₹300.00</h5>
//             //         </div>
//             //       </div>
//             //       {/*  */}

//             //       {/*  */}
//             //       <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
//             //         <div className="product-top">
//             //           <img
//             //             src="https://cdn.shopify.com/s/files/1/1087/0872/products/Kerala_Prawn_Pickle_product_1_1525852674359_grande.jpg?v=1571607439"
//             //             className="img1"
//             //             alt=""
//             //           />
//             //           <div className="overlay">
//             //             <button
//             //               type="button"
//             //               className="btn btn-secondary"
//             //               title="Quick Shop"
//             //               data-toggle="modal"
//             //               data-target="#quickModel"
//             //             >
//             //               <i className="fa fa-eye"></i>
//             //             </button>

//             //             <button
//             //               type="button"
//             //               className="btn btn-secondary"
//             //               title="Add to Cart"
//             //             >
//             //               <i className="fa fa-shopping-cart"></i>
//             //             </button>
//             //           </div>
//             //         </div>
//             //         <div className="product-bottom text-center">
//             //           <i className="fa fa-star"></i>
//             //           <i className="fa fa-star-half-o"></i>
//             //           <i className="fa fa-star-o"></i>
//             //           <h3>Product 1</h3>
//             //           <h5>₹300.00</h5>
//             //         </div>
//             //       </div>
//             //       {/*  */}
//             //       <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
//             //         <div className="product-top">
//             //           <img
//             //             src="https://cdn.shopify.com/s/files/1/1087/0872/products/Kerala_Prawn_Pickle_product_1_1525852674359_grande.jpg?v=1571607439"
//             //             className="img1"
//             //             alt=""
//             //           />
//             //           <div className="overlay">
//             //             <button
//             //               type="button"
//             //               className="btn btn-secondary"
//             //               title="Quick Shop"
//             //               data-toggle="modal"
//             //               data-target="#quickModel"
//             //             >
//             //               <i className="fa fa-eye"></i>
//             //             </button>

//             //             <button
//             //               type="button"
//             //               className="btn btn-secondary"
//             //               title="Add to Cart"
//             //             >
//             //               <i className="fa fa-shopping-cart"></i>
//             //             </button>
//             //           </div>
//             //         </div>
//             //         <div className="product-bottom text-center">
//             //           <i className="fa fa-star"></i>
//             //           <i className="fa fa-star-half-o"></i>
//             //           <i className="fa fa-star-o"></i>
//             //           <h3>Product 1</h3>
//             //           <h5>₹300.00</h5>
//             //         </div>
//             //       </div>
//             //     </div>
//             //     <div
//             //       className="modal show product-view"
//             //       id="quickModel"
//             //       role="dialog"
//             //     >
//             //       <div className="modal-dialog">
//             //         <div className="modal-header">
//             //           <button type="button" className="close" data-dismiss="modal">
//             //             &times;
//             //           </button>
//             //         </div>
//             //         <div className="modal-dialog product-big-img">
//             //           <img
//             //             src="https://recipes.timesofindia.com/recipes/homemade-chocolate/photo/54407737.cms"
//             //             className=" mt-2"
//             //             alt=""
//             //           />
//             //         </div>
//             //         <div className="product-big-desc">
//             //           <h2>Product 1</h2>
//             //           <h5>Product code : </h5>
//             //           <h5>Brand :</h5>
//             //           <h6>
//             //             <a href="">1 review</a>
//             //             <a href="">View all review</a>
//             //           </h6>
//             //           <div className="price">
//             //             <h4 className="oldprice">
//             //               <del>Rs. 3444</del>
//             //               <sup>
//             //                 <i> 25% OFF</i>
//             //               </sup>
//             //             </h4>
//             //             <h4 className="newprice">
//             //               Rs. 222 +<abbr>99 shipping</abbr>
//             //             </h4>
//             //           </div>
//             //           <button className="btn btn-warning buybutton">
//             //             Click to Buy
//             //           </button>
//             //           <p>
//             //             <b>Warranty :</b> 1 day warranty against manufactur defect.
//             //           </p>
//             //           <p>
//             //             <b>Shipping :</b> Dispatched within 2-3 work days.
//             //           </p>
//             //         </div>
//             //       </div>
//             //     </div>
//             //   </div>
//             //   <div className="container col-md-2">
//             //     <a className="btn shop text-center mx-auto block" href={"/Showitems"}>
//             //       Start Reading
//             //     </a>
//             //   </div>
//             //   {/* {/* End of Navbar */}

//             //   {/* <section id="sectionF1">
//             //     <div className="row container-fluid m-5 ">
//             //       <div className="col-md-3">
//             //         <div className="card p-3">
//             //           <div class="card text-center">
//             //             <img class="card-img-top" src={logo} alt="" /> 
//             //             <i className="fa fa-book fa-5x "></i>
//             //             <div class="card-body">
//             //               <h4 class="card-title">Products</h4>
//             //               <p class="card-text">lists</p>
//             //             </div>
//             //           </div>
//             //         </div>
//             //       </div>
//             //     </div>
//             //   </section>  */}

//             //   {/* <section class="counts section-bg mt-5">
//             //     <div class="container mt-5">
//             //       <div class="row">
//             //         <div
//             //           class="col-lg-3 col-md-6 text-center  animated fadeInUp wow animated"
//             //           data-aos="fade-up"
//             //         >
//             //           <div class="count-box">
//             //             <i
//             //               class="fa fa-smile-o fa-5x"
//             //               style={{ color: "#20b38e" }}
//             //             ></i>
//             //             <p>
//             //               <span className="counter-up animated swing">232</span>
//             //             </p>
//             //             <p>Happy Clients</p>
//             //           </div>
//             //         </div>

//             //         <div
//             //           class="col-lg-3 col-md-6 text-center animated fadeInUp wow animated"
//             //           data-aos="fade-up"
//             //           data-aos-delay="200"
//             //         >
//             //           <div class="count-box">
//             //             <i
//             //               class="fa fa-folder-open fa-5x"
//             //               style={{ color: "#c042ff" }}
//             //             ></i>
//             //             <p>
//             //               <span className="counter-up animated swing">521</span>
//             //             </p>
//             //             <p>Stock</p>
//             //           </div>
//             //         </div>

//             //         <div
//             //           class="col-lg-3 col-md-6 text-center animated fadeInUp wow animated"
//             //           data-aos="fade-up"
//             //           data-aos-delay="400"
//             //         >
//             //           <div class="count-box">
//             //             <i
//             //               class="fa fa-comments fa-5x"
//             //               style={{ color: "#46d1ff" }}
//             //             ></i>
//             //             <p>
//             //               <span className="counter-up animated swing">
//             //                 <i>1,463</i>
//             //               </span>
//             //             </p>
//             //             <p>Sold</p>
//             //           </div>
//             //         </div>

//             //         <div
//             //           class="col-lg-3 col-md-6 text-center animated fadeInUp wow animated"
//             //           data-aos="fade-up"
//             //           data-aos-delay="600"
//             //         >
//             //           <div class="count-box">
//             //             <i class="fa fa-users fa-5x" style={{ color: "#ffb459" }}></i>
//             //             <p>
//             //               {" "}
//             //               <span className="counter-up animated swing">15</span>
//             //             </p>
//             //             <p>Hard Workers</p>
//             //           </div>
//             //         </div>
//             //       </div>
//             //     </div>
//             //   </section> */}
//             // </Fragment>
//         );
//     }
// }

// export default FHome;


// import React, { Component, Fragment } from "react";
// import logo from "../../assets/logo.png";
// import user from "../../assets/instants.jpg";
// import "../CSS/farm.css";
// import axios from "axios";
// import { Redirect, Link } from "react-router-dom";
// import Sentiment from "sentiment";
// const sentiment = new Sentiment();

// class FHome extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//       sentimentScore: null,
//       generalSentiment: null,
//     };
//     this.findSentiment = this.findSentiment.bind(this);
//   }
//   findSentiment(event) {
//     const result = sentiment.analyze(event.target.value);
//     console.log(result);
//     this.setState({
//       sentimentScore: result.score,
//     });
//     if (result.score < 0) {
//       this.setState({
//         generalSentiment: "negative",
//       });
//     } else if (result.score > 0) {
//       this.setState({
//         generalSentiment: "positive",
//       });
//     } else {
//       this.setState({
//         generalSentiment: "neutral",
//       });
//     }
//   }
//   //{this.state.input >= 18 && this.submit ?  buttonTwo : buttonThree }   ternary operator
//   componentDidMount() {
//     //top live headlines
//     fetch(
//       "http://newsapi.org/v2/top-headlines?country=us&apiKey=0976e1460f954e439dc6f1938e0a096f"
//     )
//       .then((Response) => Response.json())
//       .then((findresponse) => {
//         console.log(findresponse.articles);
//         this.setState({
//           data: findresponse.articles,
//         });
//       });
//   }

//   //   async function quickstart() {
//   //   // Imports the Google Cloud client library
//   //   const language = require('@google-cloud/language');

//   //   // Instantiates a client
//   //   const client = new language.LanguageServiceClient();

//   //   // The text to analyze
//   //   const text = {dynamicData.title};

//   //   const document = {
//   //     content: text,
//   //     type: 'PLAIN_TEXT',
//   //   };

//   //   // Detects the sentiment of the text
//   //   const [result] = await client.analyzeSentiment({document: document});
//   //   const sentiment = result.documentSentiment;

//   //   console.log(`Text: ${text}`);
//   //   console.log(`Sentiment score: ${sentiment.score}`);
//   //   console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
//   // }
//   //  quickstart=async(text)=> {
//   //   // Imports the Google Cloud client library
//   //   const language = require('@google-cloud/language');

//   //   // Instantiates a client
//   //   const client = new language.LanguageServiceClient();

//   //   // The text to analyze
//   //   //const text = "hello";

//   //   const document = {
//   //     content: text,
//   //     type: 'PLAIN_TEXT',
//   //   };

//   //   // Detects the sentiment of the text
//   //   const [result] = await client.analyzeSentiment({document: document});
//   //   const sentiment = result.documentSentiment;

//   //   console.log(`Text: ${text}`);
//   //   console.log(`Sentiment score: ${sentiment.score}`);
//   //   console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
//   // }

//   render() {
//     return (
//       <Fragment>
//         <div className=" container-fluid mt-5" id="product">
//           $nbps;
//           <h2> Latest</h2>
//           {/* <textarea onChange={this.findSentiment}></textarea>
//           <p>sentiment score:{this.state.sentimentScore}</p>
//           <p>general sentiment:{this.state.generalSentiment}</p> */}
//           {/* <div className="row">
//             {this.state.data.map((dynamicData, key) => (
//               <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
//                 <div className="product-top">
//                   {/* {this.quickstart(dynamicData.title)} 
//                   <img src={dynamicData.urlToImage} className="img1" alt="" />
//                   <div className="overlay">
//                     <button
//                       type="button"
//                       className="btn btn-secondary"
//                       title="Quick Shop"

//                       //data-toggle="modal"
//                       //data-target="#quickModel"
//                     >
//                       <i className="fa fa-eye"></i>
//                     </button>

//                     <button
//                       type="button"
//                       className="btn btn-secondary"
//                       title="Add to Cart"
//                     >
//                       <i className="fa fa-shopping-cart"></i>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="product-bottom text-center">
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star-half-o"></i>
//                   <i className="fa fa-star-o"></i>
//                   <h5>{dynamicData.title}</h5>
//                   <Link
//                     type="submit"
//                     className="btn input-btn"
//                     title="click here"
//                     to={{
//                       pathname: "/vendor/Readmore",
//                       state: {
//                         dynamicData: dynamicData,
//                         urlToImage: dynamicData.urlToImage,
//                         description: dynamicData.description,
//                       },
//                     }}
//                   >
//                     Read More
//                   </Link>
                
//                 </div>
//               </div>
//             ))}
//           </div> */}
//           <div className="row">
//             {this.state.data.map((dynamicData, key) => (
//               <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
//                 <div className="product-top">
//                   <textarea
//                     // type="text"
//                     value={dynamicData.title}
//                     onChange={this.findSentiment}
//                   />
//                   <p>sentiment score:{this.state.sentimentScore}</p>
//                   <p>general sentiment:{this.state.generalSentiment}</p>

//                   {/* <p>
//                     if({this.state.generalSentiment}=="positive")
//                     {<h5>{dynamicData.title}</h5>}
//                     else if(this.state.generalSentiment}=="negative")
//                     {<h5>{dynamicData.title}</h5>}}
//                   </p> */}
//                   {/* <img src={dynamicData.urlToImage} className="img1" alt="" /> */}
//                   {/* <div className="overlay">
//                      <button
//                       type="button"
//                       className="btn btn-secondary"
//                       title="Quick Shop"

                      
//                     >
//                       <i className="fa fa-eye"></i>
//                     </button> 

//                     <button
//                       type="button"
//                       className="btn btn-secondary"
//                       title="Add to Cart"
//                     >
//                       <i className="fa fa-shopping-cart"></i>
//                     </button> 
//                   </div> */}
//                 </div>
//                 {/* <div className="product-bottom text-center">
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star-half-o"></i>
//                   <i className="fa fa-star-o"></i>
//                   <h5>{dynamicData.title}</h5>
//                   <Link
//                     type="submit"
//                     className="btn input-btn"
//                     title="click here"
//                     to={{
//                       pathname: "/vendor/Readmore",
//                       state: {
//                         dynamicData: dynamicData,
//                         urlToImage: dynamicData.urlToImage,
//                         description: dynamicData.description,
//                       },
//                     }}
//                   >
//                     Read More
//                   </Link>
//                 </div> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </Fragment>
//     );
//   }
// }

// export default FHome;


import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/instants.jpg";
import "../CSS/farm.css";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import Sentiment from "sentiment";
const sentiment = new Sentiment();

class FHome extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      title: "",
      sentimentScore: null,
      generalSentiment: null,
    };
    this.findSentiment = this.findSentiment.bind(this);
  }
  findSentiment = (event, e) => {
    this.setState({
      title: event,
    });

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
  };
  //{this.state.input >= 18 && this.submit ?  buttonTwo : buttonThree }   ternary operator
  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=0976e1460f954e439dc6f1938e0a096f" //top live headlines
    )
      .then((Response) => Response.json())
      .then((findresponse) => {
        console.log(findresponse.articles);
        this.setState({
          data: findresponse.articles,
        });
      });
  }

  render() {
    return (
      <Fragment>
        <div className=" container-fluid mt-5" id="product">
          $nbps;
          <h2> Latest</h2>
          <textarea value={this.state.title}></textarea>
          <h6>score:{this.state.sentimentScore}</h6>
          <h6>Type of NEWS:{this.state.generalSentiment}</h6>
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
                    value="check"
                    onClick={(e) => this.findSentiment(dynamicData.title, e)}
                  ></input>

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
      </Fragment>
    );
  }
}

export default FHome;


