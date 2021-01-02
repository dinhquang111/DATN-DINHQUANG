import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getProfileRequestAction } from '../../../../store/actions/user-action/getuserAction'
import { editUserRequestAction } from '../../../../store/actions/user-action/edituserAction'
import './edit-user-admin-component.css'
class EditUserAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            id: '',
            numberphone: '',
            level: '',
            password: '',
            username: ''
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    componentDidMount() {
        let { match } = this.props
        let { id } = match.params
        this.props.getProfileRequestAction(id)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemUser) {
            let { itemUser } = nextProps
            this.setState({
                name: itemUser.name,
                id: itemUser._id,
                numberphone: itemUser.numberphone,
                level: itemUser.level,
                password: itemUser.password,
                username: itemUser.username
            })
        }
    }
    handleonSubmit(event) {
        event.preventDefault();
        let { id, name, numberphone, level, password, username } = this.state
        let user = {
            level
        }
        this.props.editUserRequestAction(id, user)
        this.setState({
            name: '',
            id: '',
            numberphone: '',
            level: '',
            password: '',
            username: ''
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
        let userLevel = localStorage.getItem('level')
        let UserLevel = [
            {
                name: 'Mod',
                level: 3
            },
            {
                name: 'Poster',
                level: 2
            },
            {
                name: 'Normal user',
                level: 1
            },
            {
                name: 'User banned',
                level: 0
            }
        ]
        var listUserLevel = UserLevel.map((user, index) => {
            if (user.level < 2 && userLevel == 3) {
                return <option key={index} value={user.level}>{user.name}</option>
            } else if (user.level < 4 && userLevel == 4) {
                return <option key={index} value={user.level}>{user.name}</option>
            }

        })
        return (
            <div>
                <div className="upload-component">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 m-auto">
                                <div className="brand">
                                    <h1>User</h1>
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
                                            disabled
                                        />
                                    </div>
                                    <div className="upload-margin">
                                        <span className="title pb-2">Account</span>
                                        <input className="form-control form-control-lg"
                                            name="username" type="text"
                                            value={this.state.username}
                                            onChange={(event) => {
                                                this.setState({
                                                    username: event.target.value
                                                })
                                            }}
                                            disabled
                                        />
                                    </div>
                                    <div className="upload-margin">
                                        <span className="title pb-2">password</span>
                                        <input className="form-control form-control-lg"
                                            name="password" type="password"
                                            value={this.state.password}
                                            onChange={(event) => {
                                                this.setState({
                                                    password: event.target.value
                                                })
                                            }}
                                            disabled
                                        />
                                    </div>
                                    <div className="upload-margin">
                                        <span className="title pb-2">numberphone</span>
                                        <input className="form-control form-control-lg"
                                            name="numberphone" type="number"
                                            value={this.state.numberphone}
                                            onChange={(event) => {
                                                this.setState({
                                                    name: event.target.value
                                                })
                                            }}
                                            disabled
                                        />
                                    </div>
                                    <div className="input-group my-4">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">User level</label>
                                        </div>
                                        <select className="custom-select" id="inputGroupSelect01"
                                            name="level"
                                            value={this.state.level}
                                            onChange={(event) => {
                                                this.setState({
                                                    level: event.target.value
                                                })
                                            }}
                                        >
                                            {listUserLevel}
                                        </select>
                                    </div>
                                    <div className="text-center btn-sb mt-5">
                                        <button type="button" className="btn btn-primary btn-color mb-5 button-submit"
                                            onClick={() => {
                                                this.props.history.goBack()
                                            }}
                                        >Back</button>
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
        itemUser: store.userProfileReducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getProfileRequestAction,
        editUserRequestAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUserAdminComponent));