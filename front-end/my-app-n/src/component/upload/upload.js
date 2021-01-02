import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { uploadAction } from '../../store/actions/uploadAction'
import { bindActionCreators } from 'redux'
// import { getlistBrandAction } from '../../store/actions/getlistBrandAction'
import './upload.css'
class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productImage: null,
            name: '',
            introduction: '',
            context: '',
            isCheck: false,
        }
        this.handleonChange = this.handleonChange.bind(this);
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    componentWillMount() {
        this.props.getlistBrandAction()
        console.log("chua co du lieju")
    }
    handleonChange(event) {
        let target = event.target;
        let name = target.name;
        let value = event.target.type === 'file' ? target.files[0] : target.value;
        this.setState({
            [name]: value
        })
        console.log()
    }
    handleonSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        data.append('name', this.state.name)
        data.append('productImage', this.state.productImage)
        data.append('introduction', this.state.introduction)
        data.append('context', this.state.context)
        console.log(data)
        this.props.uploadAction(data)
        this.props.getlistBrandAction()
        this.setState({
            isCheck: true,
            productImage: null,
            name: '',
            introduction: '',
            context: '',
        })
    }
    componentWillReceiveProps(newProps) {
        // if (newProps) {
        //     this.props.getlistBrandAction()
        // }
    }
    render() {

        // console.log("co chua nhi")
        // console.log(this.props.admc[1])
        // var i = 0;
        // var display = this.props.listBrands.map((brands, index) => {
        //     var indexs = "http://localhost:3000/" + brands.image
        //     return <tr key={index} >
        //         <th scope="row">{i++}</th>
        //         <td>{brands._id}</td>
        //         <td className="admin-brand-name"><p>{brands.name}</p></td>
        //         <td  className="admin-brand-name"><p>{brands.introduction}</p></td>
        //         <td  className="admin-brand-name"><p>{brands.context}</p></td>
        //         <td><img className="image-brand" src={indexs} /></td>

        //     </tr>
        // })
        return (
            <div>
                <div className="upload-component">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 m-auto">
                                <div className="brand">
                                    <h1>brand</h1>
                                </div>
                            </div>
                        </div>
                        {/* 
                        <div className="row ">
                            <div className="col-sm-6 m-auto">
                                <form onSubmit={this.handleonSubmit} encType="multipart/form-data">
                                    <div className="upload-margin">
                                        <span className="title pb-2">Name</span>
                                        <input className="form-control form-control-lg"
                                            name="name" type="text"
                                            value={this.state.name}
                                            onChange={this.handleonChange}
                                        />
                                    </div>
                                    <div className="upload-margin">
                                        <span className="title pb-2">introduction</span>  <input className="form-control form-control-lg"
                                            name="introduction" type="text"
                                            onChange={this.handleonChange}
                                            value={this.state.introduction}
                                        />
                                    </div>
                                    <div className="upload-margin">
                                        <span className="title pb-2">context</span><input className="form-control form-control-lg"
                                            name="context" type="text"
                                            onChange={this.handleonChange}
                                            value={this.state.context}
                                        />
                                    </div>

                                    <div className="input-group upload-cusntom-upload my-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" >Upload</span>
                                        </div>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input"
                                                name="productImage"
                                                onChange={this.handleonChange}
                                            />
                                            <p className="custom-file-label upload-file">{this.state.productImage ? this.state.productImage.name : "Choose file"}</p>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-color">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div> */}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">_id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col" >introduction</th>
                                    <th scope="col" >context</th>
                                    <th scope="col" >image</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                            {display}
                        </tbody> */}
                        </table>
                    </div>
                </div>
                </div>
                )
            }
        }
const mapStateToProps = (store) => {
    return {
                    // listBrands: store.brandReducer
        
            }
        }
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        // uploadAction,
        // getlistBrandAction 
    }, dispatch)
            }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Upload));