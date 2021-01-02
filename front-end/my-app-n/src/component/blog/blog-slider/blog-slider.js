import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Slider from "react-slick";
import './blog-slider.css'
import h1 from '../../../image/blog/h1.jpg'
import { getAllblogsAction } from "../../../store/actions/blog-action/getAllBlogAction";
import { bindActionCreators } from 'redux';
class BlogSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    componentWillMount() {
        this.props.getAllblogsAction()
      
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        let moment = require('moment')

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        let i = 1
        let listTure = []
        this.props.listBlog.map((Blog, index) => {
            // if (this.props.nameCategory._id === Blog.id_categoryblog) {
                console.log(Blog);
                listTure.push(Blog)
            // }
        })
        let listBlogWithCategorySilder = listTure.map((blog, index) => {
            let imagesrc = "http://localhost:3000/" + blog.image
            return <div className="d-inline mgl row" key={index}>
                <div className="card" style={{ width: '24rem' }}>
                    <Link className="img" to={`/blog/detail/${blog._id}`} >
                        <div className="include-img">
                            <img src={imagesrc} alt="..." className="img-thumbnail card-img-top" />
                            <span className='d-inline'>
                                <p className="price">
                                    <span className="d-block">{moment(`${blog.created}`).format('dddd')}</span>
                                    <span>{moment(`${blog.created}`).format('ll')}</span>
                                </p>
                            </span  >
                        </div>
                    </Link>
                    <div className="card-body ">
                        <Link className="blog-card-title" to={`/blog/detail/${blog._id}`} ><h3>{blog.title}</h3></Link>
                        <p className="blog-card-introduce">
                            {blog.introduction}
                        </p>
                        <Link to={`/blog/detail/${blog._id}`} className="information-img blog-card-detail" >
                            Chi tiết
                        </Link>
                    </div>
                </div>
            </div>
        })

        return (
            <div className="d-block w-100">
                {listTure.length !== 0 &&
                    <div className="product-list-d">
                        <div className="d-list">
                            <div className="product-slider ">
                                
                                <div className="design-slide">
                                    
                                    <div className="row">
                                    {listBlogWithCategorySilder}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        listBlog: store.AllBlogsReducers,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllblogsAction,
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogSlider))