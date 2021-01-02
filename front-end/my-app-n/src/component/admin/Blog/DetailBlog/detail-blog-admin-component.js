import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCategoryBlogAction } from '../../../../store/actions/blog-action/getCategoryBlogAction'
import { bindActionCreators } from 'redux'
import { getDetailBlogRequestAction } from '../../../../store/actions/blog-action/getDetailBlogAction'
import './detail-blog-admin-component.css'

class DetailBlogAdminComponent extends Component {
    componentDidMount() {
        let { match } = this.props
        let { id } = match.params
        this.props.getCategoryBlogAction()
        this.props.getDetailBlogRequestAction(id)
    }
    render() {
        console.log(this.props.detailBlog)
        // let Category = this.props.listCategory.map((Category, index) => {
        //     if (this.props.detailBlog.id_categoryblog === Category._id) {
        //         return Category.name
        //     }
        // })
        let moment = require('moment')
        return (
            <div className="blog-detail mb-5">
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
                            {/* <span className="info px-5">
                                <span className="sha"> Share :</span>
                                <i className="fab fa-facebook mgl sha"></i>
                                <i className="fab fa-twitter mgl sha"></i>
                                <i className="fab fa-google-plus-g mgl sha"></i>
                            </span> */}
                        </p>
                    </div>
                </div>
            </div>)
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailBlogAdminComponent))