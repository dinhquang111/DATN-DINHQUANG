import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { AddBrandRequestAction } from '../../../../store/actions/admin-action/brand-admin/addBrandAction'
import './add-brand-admin-component.css'
class AddBrandAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            introduction: '',
            context: '',
            isCheck: false,
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    handleonSubmit(event) {
        event.preventDefault();
        let {name,introduction,context} = this.state
        let brand = {
            name,
            introduction,
            context
        }
        this.props.AddBrandRequestAction(brand)
        this.setState({
            isCheck: true,
            name: '',
            introduction: '',
            context: '',
        })
        this.props.history.goBack()
    }
    Back = () =>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div>
                <div className="upload-component">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 m-auto">
                                <div className="brand">
                                    <h1>add brand</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-sm-6 m-auto">
                                <form onSubmit={this.handleonSubmit} encType="multipart/form-data">
                                    <div className="upload-margin">
                                        <span className="title pb-2">Name</span>
                                        <input className="form-control form-control-lg"
                                            name="name" type="text"
                                            value={this.state.name}
                                            onChange={(event)=>this.setState({
                                                name: event.target.value
                                            })}
                                        />
                                    </div>
                                    <div className="upload-margin">
                                        <span className="title pb-2">introduction</span>  <input className="form-control form-control-lg"
                                            name="introduction" type="text"
                                            onChange={(event)=>this.setState({
                                                introduction: event.target.value
                                            })}
                                            value={this.state.introduction}
                                        />
                                    </div>
                                    <div className="upload-margin">
                                        <span className="title pb-2">context</span><input className="form-control form-control-lg"
                                            name="context" type="text"
                                            onChange={(event)=>this.setState({
                                                context: event.target.value
                                            })}
                                            value={this.state.context}
                                        />
                                    </div>
                                    <div className="text-center mt-5">
                                        <button type="button" className="btn btn-primary btn-color mr-4" onClick={()=>this.Back()}>Back</button>
                                        <button type="submit" className="btn btn-primary btn-color"
                                        disabled={!this.state.name.trim() ||!this.state.introduction.trim()||!this.state.context.trim()}
                                        >Submit</button>
                                    </div>
                                </form>

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
        listBrands: store.brandReducer

    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        AddBrandRequestAction,
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddBrandAdminComponent));