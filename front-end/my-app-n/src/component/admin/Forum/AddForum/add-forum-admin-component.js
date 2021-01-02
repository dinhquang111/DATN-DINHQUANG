import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { addForumAction } from '../../../../store/actions/admin-action/forum-action/addForumAction'
import './add-forum-admin-component.css'
import { getListForumAction } from "../../../../store/actions/admin-action/forum-action/getlistForumAction"

class AddForumAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            isCheck: false,
            id_parents: '',
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)

    }
    componentDidMount() {
        this.props.getListForumAction()
    }
    handleonSubmit = async (event) => {
        event.preventDefault();
        let { name, id_parents } = this.state
        let forun = {
            name, id_parents
        }

        this.props.addForumAction(forun)
        setTimeout(
            function () {
                this.props.history.goBack()
            }
                .bind(this),
            200
        );

    }
    render() {
        var listForum = this.props.listforum.map((forum, index) => {
            if (forum.id_parents === '0') {
                return <option key={index} value={forum._id}>{forum.name}</option>
            }
        })
        return (
            <div>
                <div className="upload-component">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 m-auto">
                                <div className="brand">
                                    <h1>Forum</h1>
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
                                    {/* Choose Pets */}
                                    <div className="input-group my-4">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Parents</label>
                                        </div>
                                        <select className="custom-select" id="inputGroupSelect01"
                                            name="id_parents" value={this.state.id_parents}
                                            onChange={(event) => {
                                                this.setState({
                                                    id_parents: event.target.value
                                                })
                                            }}
                                        >
                                            <option defaultValue>Choose...</option>
                                            <option value={'0'}>None</option>
                                            {listForum}
                                        </select>
                                    </div>
                                    <div className="text-center mt-5">
                                        <button type="button" className="btn btn-primary btn-color mb-5 button-submit" onClick={() => {
                                            this.props.history.goBack()
                                        }}>Back</button>
                                        <button type="submit" className="btn btn-primary btn-color mb-5 button-submit ml-3"
                                            disabled={!this.state.name || !this.state.id_parents}
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
        listforum: store.getListForumsReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addForumAction,
        getListForumAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddForumAdminComponent));