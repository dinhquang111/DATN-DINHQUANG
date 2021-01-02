import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import './map_news_component.css'
import h4 from '../../image/Branch/h4.jpg'
import h1 from '../../image/map-news/h1.jpg'
import { getAllblogsAction } from '../../store/actions/blog-action/getAllBlogAction'
import { bindActionCreators } from 'redux'
class MapNewsComponent extends Component {
    componentDidMount() {
        this.props.getAllblogsAction()
    }
    render() {
        let { listBlog } = this.props
        let NewListBlog = listBlog.slice(0, 5)
        let displatNewListBlog = NewListBlog.map((blog, index) => {
            const indexs = "http://localhost:3000/" + blog.image
            return <div className="broad-news-itemlist" key={index}>
                <Link to={`/blog/detail/${blog._id}`} className="thumb">
                    <img src={indexs} alt="" />
                </Link>
                <div className="content">
                    <Link to={`/blog/detail/${blog._id}`} >
                        <h3>{blog.title}</h3>
                    </Link>
                    <p>{blog.introduction}</p>
                </div>
            </div >
        })
        return (
            <div>
                <div className="map-news container">
                    <div className="row">
                        <span className="imgpet"></span>
                        <div className="map col-sm-6">
                            <div className="title">
                                <h3>Company LOCATOR</h3>
                                <p>Do you want to know how much is your land price?  <br></br>Come here right now!
                                </p>
                            </div>
                            <div className="d-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.578840035912!2d108.22174781471577!3d16.035424988901788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d593cff84d%3A0xffcb1372e4a4991!2zQsOizIF0IMSRw7TMo25nIHNhzIluIMSRYcyAIG7Eg8yDbmcgLSBMaW5oIENoaSBMYW5k!5e0!3m2!1svi!2s!4v1604659741423!5m2!1svi!2s" width={530} height={420} frameBorder={0} style={{border: 0}} allowFullScreen></iframe>
                            </div>
                        </div>
                        
                        <div className="news col-sm-6 ml-auto">
                            <div className="title">
                                <h3>NEW BLOG</h3>
                                <p>Come to our blog to expand your eyes on home art</p>
                            </div>
                            <div className="broad-news">
                                <div className="broad-news-scroll">
                                    <div className="broad-news-list">
                                        <div className="broad-news-itemlist">
                                            <a href={1} className="thumb">
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8qHZgSwJGCQiEKCO3Ja86sq4MGW8LKjfnDQ&usqp=CAU' alt="" />
                                            </a>
                                            <div className="content">
                                                <a href={1} >
                                                    <h3>30 Stunning Modern Houses - Best Photos of Modern Exteriors</h3>
                                                </a>
                                                <p>There's nothing like a modern home exterior that boasts clean lines, expansive windows, and an undeniably sleekness.</p>
                                            </div>
                                        </div>
                                        <div className="broad-news-itemlist">
                                            <a href={1} className="thumb">
                                                <img src='https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg' alt="" />
                                            </a>
                                            <div className="content">
                                            <a href={1} >
                                                    <h3>The Best Ways to Make Your House Smell Good All the Time</h3>
                                                </a>
                                                <p>The Best Ways to Make Your House Smell Good All the Time · Clean your garbage disposal. · Refresh carpets and rugs. · Spruce up your trash can</p>
                                            </div>
                                        </div>
                                        {displatNewListBlog}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateTToProps = (store) => {
    return {
        listBlog: store.AllBlogsReducers,

    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getAllblogsAction }, dispatch)
}
export default withRouter(connect(mapStateTToProps, mapDispatchToProps)(MapNewsComponent))