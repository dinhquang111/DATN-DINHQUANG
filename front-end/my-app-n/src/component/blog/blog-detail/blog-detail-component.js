import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './blog-detail-component.css'
import { bindActionCreators } from 'redux'
import { getCategoryBlogAction } from '../../../store/actions/blog-action/getCategoryBlogAction'
import {getDetailBlogRequestAction} from '../../../store/actions/blog-action/getDetailBlogAction'
class BlogDetailComponent extends Component {
    componentDidMount() {
        this.props.getCategoryBlogAction()
        let { match} = this.props
        let {id} = match.params
        this.props.getDetailBlogRequestAction(id)
    }
    componentWillMount() {
        
        console.log('yu');
    }
    render() {
        let moment = require('moment')
        return (
            <div className="blog-detail mb-5 container">


                <div className="titleMan">
                    <h1>{this.props.detailBlog.title}</h1>
                    <div className="date">
                       {moment(`${this.props.detailBlog.created}`).format('dddd')} <span className="data-border"> {moment(`${this.props.detailBlog.created}`).format('ll')}</span>
                    </div>
                    <p className="position-relative">{this.props.detailBlog.introduction}</p>
                </div>
                <div className="content">
                    <p dangerouslySetInnerHTML={{ __html: this.props.detailBlog.context }}></p>
                </div>
                <div className="share">
                    <div className="share-d">
                        <p className="icon">
                            <span className="info px-5">
                                <span className="sha"> Share :</span>
                                <i className="fab fa-facebook mgl sha"></i>
                                <i className="fab fa-twitter mgl sha"></i>
                                <i className="fab fa-google-plus-g mgl sha"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        detailBlog: store.getDetailBlogReducers,
        listCategory: store.categoryblogreducers,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getCategoryBlogAction,
        getDetailBlogRequestAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogDetailComponent))