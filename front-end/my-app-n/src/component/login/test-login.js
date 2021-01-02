import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './test-login.css'
class TestLogin extends Component {
    render() {
        return (
            <div className="test-login">
                <div className="hero-bkg-animated">
                    <h1>Hero Headline</h1>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (store) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TestLogin))