import React, { Component } from 'react'

export default class Readmore extends Component {
    state={
        dynamicData: this.props.location.state.dynamicData,
        urlToImage: this.props.location.state.urlToImage,
        description: this.props.location.state.description,
        score: this.props.location.state.score,
        type: this.props.location.state.type

    };
    // componentDidMount=async()=>{
    //     this.setState({dynamicData:this.props.location.state.dynamicData});
    //     this.setState({ urlToImage: this.props.location.state.urlToImage });

    // };
    render() {
        console.log(this.state);
        // const{urlToImage,title,description}=this.state.dynamicData;
        return (
        //     <div className=" container-fluid mt-5">
        //         <div className="row">
        //         <h1>{title}</h1>
        //            <img
        //            src={urlToImage}
        //            alt="image"
        //            width="50%"
        //            height="50%"/>
        //             <h1>{description}</h1>

        //         </div> 
        //     </div>
            <div className="content-wrapper ">
        <center>
            <div className="row mb-5">
                <div className="col-md-4 stretch-card grid-margin ">
                    <div className="card bg-gradient-danger card-img-holder text-white">
                        <div className="card-body">
                           
                            <h4 className="font-weight-normal mb-3">
                                
                  {/* <i className="mdi mdi-chart-line mdi-24px float-right"></i> */}
                            </h4>
                            
                                    <h1 className=" mt-5 pt-5">Type of News: {this.state.type}</h1>
                                    <h1> Sentiment Score:{this.state.score}</h1>
                            <h2 className="mb-5 mt-5 pt-5">{this.state.dynamicData}</h2>
                            <img
                                src={this.state.urlToImage}
                                alt="image"
                                 width="50%"
                                 height="50%"/>
                            <h4 className="card-text">{this.state.description}</h4>
                        </div>
                    </div>
                </div>
                </div>
            </center>
            </div>

         )
    }
}

