import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// import { bindActionCreators } from 'redux';
import Slider from "react-slick";
import './category.css'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nav1: null,
            nav2: null,
          
        };
    }
    componentWillMount() {

    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    componentDidUpdate() {



    }
    
    
    showContentBranch = (branchs) => {
        
    }
   

    render() {
       
        return (
            <div>
               <div className="category">
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-4 cardS ">
                                <div className="row m-0 p-0 cardS-panner">
                                    <div className="col-4 p-3">
                                        <img className="card-imgS" src="https://static.chotot.com/storage/default/pty/cat-1.svg" alt=""/>
                                    </div>
                                    <div className="col-8  p-3 d-flex align-self-center">
                                        <div className="title">
                                            <div className="title-main">Mua Bán</div>
                                            <div className=" title-rep">1000 dự án</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 cardS ">
                                <div className="row m-0 p-0 cardS-panner">
                                    <div className="col-4 p-3">
                                        <img className="card-imgS" src="https://static.chotot.com/storage/default/pty/cat-2.svg" alt=""/>
                                    </div>
                                    <div className="col-8  p-3 d-flex align-self-center">
                                        <div className="title">
                                            <div className="title-main">Forum</div>
                                            <div className=" title-rep">1000 dự án</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 cardS ">
                                <div className="row m-0 p-0 cardS-panner ">
                                    <div className="col-4 p-3">
                                        <img className="card-imgS" src="https://static.chotot.com/storage/default/pty/cat-3.svg" alt=""/>
                                    </div>
                                    <div className="col-8  p-3 d-flex align-self-center">
                                        <div className="title">
                                            <div className="title-main">Dự án</div>
                                            <div className=" title-rep">1000 dự án</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div> 
               </div>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category))