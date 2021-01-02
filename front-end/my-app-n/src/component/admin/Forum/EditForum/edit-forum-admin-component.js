import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getListForumAction } from "../../../../store/actions/admin-action/forum-action/getlistForumAction"
import { getOneForumRequestAction } from '../../../../store/actions/admin-action/forum-action/getOneForumAction'
import { editForumRequestAction } from '../../../../store/actions/admin-action/forum-action/editForumAction'
import './edit-forum-admin-component.css'
class EditForumAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id_parents: '',
            id: '',
            name: ''
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    componentDidMount() {
        let { match } = this.props
        let { id } = match.params
        this.props.getOneForumRequestAction(id)
        this.props.getListForumAction()
        this.setState({
            id
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.ItemForum) {
            let { ItemForum } = nextProps
            this.setState({
                id_parents: ItemForum.id_parents,
                name: ItemForum.name
            })
        }
    }
    handleonSubmit(event) {
        event.preventDefault();
        let { id_parents, name, id } = this.state
        let forum = {
            name, id_parents
        }
        this.props.editForumRequestAction(id, forum)
        this.setState({
            isCheck: true,
            name: '',
            id_parents: '',
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
        let { name } = this.state
        var listForum = this.props.listforum.map((forum, index) => {
            if (forum.id_parents === '0' && forum.name !== name) {
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
                                            value={this.state.name ? this.state.name : ''}
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
                                            name="id_parents" value={this.state.id_parents ? this.state.id_parents : ''}
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
        ItemForum: store.getOneForumReducers,
        listforum: store.getListForumsReducer

    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getOneForumRequestAction,
        getListForumAction,
        editForumRequestAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditForumAdminComponent));