import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { addCategoryRequestAction } from '../../../../store/actions/admin-action/category-admin/addCategoryAction'
import './add-category-admin-component.css'
class AddOriginAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            isCheck: false,
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    handleonSubmit(event) {
        event.preventDefault();
        let { name } = this.state
        let category = {
            name
        }
        this.props.addCategoryRequestAction(category)
        this.setState({
            isCheck: true,
            name: '',
        })
        setTimeout(
            function () {
                this.props.history.goBack()
            }
                .bind(this),
            200
        );
    }
    render() {
        return (
            <div>
                <div className="upload-component">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 m-auto">
                                <div className="brand">
                                    <h1>Price range</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-sm-6 m-auto">
                                <form onSubmit={this.handleonSubmit} >
                                    <div className="upload-margin">
                                        <span className="title pb-2">Name</span>
                                        <input className="form-control form-control-lg"
                                            name="name" type="text"
                                            value={this.state.name}
                                            onChange={(event) => {
                                                this.setState({
                                                    name: event.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="text-center mt-5">
                                        <button type="button" className="btn btn-primary btn-color mb-5 button-submit" onClick={() => {
                                            this.props.history.goBack()
                                        }}>Back</button>
                                        <button type="submit" className="btn btn-primary btn-color mb-5 button-submit ml-3">Submit</button>
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
        origin: store.OneOriginReducers.name
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addCategoryRequestAction,
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddOriginAdminComponent));