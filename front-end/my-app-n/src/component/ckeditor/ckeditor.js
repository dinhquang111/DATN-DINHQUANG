import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CKEditor from 'ckeditor4-react';
import './ckeditor.css'
class Ckeditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '<p>React is really <em>nice</em>!</p>'
        };
    }
    // onEditorChange(evt) {
    //     this.setState({
    //         data: evt.editor.getData()
    //     });
    //     // console.log(evt.target)
    //     console.log(evt.editor.name)
    // }
    loginn = () =>{
        document.getElementById("button").addEventListener("click",function(){
            document.querySelector(".popup").style.display ="flex"
        })
        document.querySelector(".close").addEventListener("click", function(){
            document.querySelector(".popup").style.display = "none"
        })
    }
    render() {
        return (
            <div className="">
                <div className="container2">
                    <h1>POPUP LOGIN</h1>
                    <a  className="btn" id="button" onClick={()=>this.loginn()}>Login</a>
                </div>
                <div className="popup">
                    <div className="popup-content">
                    <span className="close"><i className="far fa-times-circle"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProp = (store) => {
    return {}
}
const mapDispatchToProp = (dispatch) => {
    return {}
}

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(Ckeditor))