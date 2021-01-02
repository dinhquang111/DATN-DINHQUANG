import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './footer-component.css'
class FooterComponent extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="footer-copyright">
                            copyright : Nguyen Dinh Quang
                    </div>
                        {/* <div className="footer-infor">
                            <span>Kết nối với chúng tôi : </span><span><i className="fab fa-youtube pl-3"></i> <i className="fab fa-facebook-f pl-3"></i></span>
                        </div> */}
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
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FooterComponent))