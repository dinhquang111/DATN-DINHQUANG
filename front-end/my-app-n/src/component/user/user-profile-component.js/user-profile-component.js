import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getProfileRequestAction } from '../../../store/actions/user-action/getuserAction'
import { bindActionCreators } from 'redux'
import {editUserRequestAction} from '../../../store/actions/user-action/edituserAction'
class UserProfileComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            username:'',
            numberphone:''
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    componentDidMount() {
        let id = localStorage.getItem('id')
        this.props.getProfileRequestAction(id)
    }
    componentWillReceiveProps(nextProps) {

        if (nextProps && nextProps.ItemUser) {
            let { ItemUser } = nextProps
            this.setState({
                name: ItemUser.name,
                username: ItemUser.username,
                numberphone: ItemUser.numberphone
            })
        }
    }
    handleonSubmit(event){
        event.preventDefault()
        let id = localStorage.getItem('id')
        let {name , username,numberphone} = this.state
        let user = {
            name,username,numberphone
        }
        console.log()
        this.props.editUserRequestAction(id,user)
        this.props.history.push('/profile')
    }
    render() {
        return (
            <div>
                <div className="upload-component pt-4">
                    <div className="">
                        <div className="row">
                            <div className="col-sm m-auto">
                                <div className="brand">
                                    <h1>Edit Information</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-sm m-auto">
                                <form onSubmit={this.handleonSubmit} encType="multipart/form-data">
                                    <div className="upload-margin">
                                        <span className="title pb-2">User name</span>
                                        <input className="form-control form-control-lg"
                                            name="name" type="text"
                                            value={this.state.username ? this.state.username : ''}
                                            onChange={(event) => {
                                                this.setState({
                                                    username: event.target.value
                                                })
                                            }}
                                        disabled/>
                                    </div>
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
                                    <div className="upload-margin">
                                        <span className="title pb-2">Number phone</span>
                                        <input className="form-control form-control-lg"
                                            name="numberphone" type="number"
                                            value={this.state.numberphone ? this.state.numberphone  : ''}
                                            onChange={(event) => {
                                                this.setState({
                                                    numberphone: event.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="text-center btn-sb mt-5">
                                        <button type="button" className="btn btn-primary btn-color mb-5 button-submit" onClick={() => {
                                            this.props.history.goBack()
                                        }}>Back</button>
                                        <button type="submit" className="btn btn-primary btn-color mb-5 button-submit ml-3">Edit</button>
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
        ItemUser: store.userProfileReducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getProfileRequestAction,
        editUserRequestAction
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfileComponent))