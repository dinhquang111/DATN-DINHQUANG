import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { addPetRequestAction } from '../../../../store/actions/admin-action/pet-admin/addPetAction'
import './add-pet-admin-component.css'
class AddPetAdminComponent extends Component {
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
        let pet = {
            name
        }
        this.props.addPetRequestAction(pet)
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
                                    <h1>Property Location</h1>
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
                                            onChange={(event) => {
                                                this.setState({
                                                    name: event.target.value
                                                })
                                            }}
                                        />
                                    </div>

                                    <div className="text-center btn-sb mt-5">
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
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addPetRequestAction,
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPetAdminComponent));