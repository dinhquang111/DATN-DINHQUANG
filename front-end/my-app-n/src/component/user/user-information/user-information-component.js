import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getProfileRequestAction } from '../../../store/actions/user-action/getuserAction'
import { bindActionCreators } from 'redux'
import './user-information-component.css'
class UserInFomationComponent extends Component {

    componentDidMount() {
        let id = localStorage.getItem('id')
        this.props.getProfileRequestAction(id)
    }
    render() {
        let { ItemUser } = this.props
        return (
            <div>
                <div className=" form-main container pt-4 ">
                    <div className="form-information">
                        <div className="topiclist shadow bg-white ">
                            <div>
                                <ul className="information-main ">
                                    <li className="header-name"><h1>Profile</h1></li>
                                </ul>
                                <ul className="information-category w-100 d-table position-relative user-information mt-3">
                                    <div className=" d-table-cell align-middle">
                                        <li className="header-name new-header-name">
                                            <p className="d-block hd-color"> <i className="fas fa-user mr-2"></i> Account</p>
                                        </li>
                                        <div>
                                            <li className="topics text-color text-center new-text-color">{ItemUser.username}</li>
                                        </div>
                                    </div>
                                </ul>
                                <ul className="information-category w-100 d-table position-relative user-information" >
                                    <div className=" d-table-cell align-middle">
                                        <li className="header-name new-header-name">
                                            <p className="d-block hd-color"><i className="fas fa-paw mr-1"></i> Name</p>
                                        </li>
                                        <div>
                                            <li className="topics text-color text-center new-text-color">{ItemUser.name}</li>
                                        </div>
                                    </div>
                                </ul>
                                <ul className="information-category w-100 d-table position-relative user-information" >
                                    <div className=" d-table-cell align-middle">
                                        <li className="header-name new-header-name">
                                            <p className="d-block hd-color"> <i className="fas fa-mobile-alt mr-2"></i> Number phone</p>
                                        </li>
                                        <div>
                                            <li className="topics text-color text-center new-text-color">{ItemUser.numberphone}</li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="upload-component pt-5">
                    <div className="">
                        <div className="row">
                            <div className="col-sm">
                                <div className="brand float-left">

                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-sm-6 m-auto">
                                <div className="upload-margin">
                                    <span className="title pb-2">Account</span>
                                </div>
                                <div className="upload-margin">
                                    <span className="title pb-2">Name</span>

                                </div>
                                <div className="upload-margin">
                                    <span className="title pb-2">Number phone</span>
                                </div>
                            </div>
                            <div className="col-sm-6 m-auto">
                                <div className="upload-margin">
                                    <span className="title pb-2">{ItemUser.username}</span>
                                </div>
                                <div className="upload-margin">
                                    <span className="title pb-2">{ItemUser.name}</span>

                                </div>
                                <div className="upload-margin">
                                    <span className="title pb-2">{ItemUser.numberphone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
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
    return bindActionCreators({ getProfileRequestAction }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInFomationComponent))