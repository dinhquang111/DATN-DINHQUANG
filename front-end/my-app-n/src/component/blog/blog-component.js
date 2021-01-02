import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, Switch, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import MenuComponent from '../menu-header/menu-component'
import BlogSlider from './blog-slider/blog-slider'
import { getCategoryBlogAction } from "../../store/actions/blog-action/getCategoryBlogAction";
import { getAllblogsAction } from "../../store/actions/blog-action/getAllBlogAction";
import { getBlogByCategoryRequestAction } from '../../store/actions/blog-action/getBlogByCategoryAction'
import FooterComponent from '../footer/footer-component'
import './blog-component.css'
import router from './blog-router'
class BlogComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        // this.props.getCategoryBlogAction()
         this.props.getAllblogsAction();
    }
    SearchBlog=(id)=> {
        this.props.getBlogByCategoryRequestAction(id)
      
    }
    showContentRouter = (routes) => {
        let result = null
        if (routes.length > 0) {
            result = routes.map((routes, index) => {
                return <Route path={routes.path}
                    exact={routes.exact}
                    component={routes.main}
                    key={index} />
            })
        }
        return result
    }
    render() {
        // const disCategoryBlog = this.props.categoryBlog.map((blog, index) => {
        //     return <li className="border-0" key={index}><Link to={`/blog/search/${blog._id}`} className="" onClick={() => this.SearchBlog(blog._id)}>
        //         {blog.name}
        //     </Link></li>
        // })
       

        const routes = router.map((routes, index) => {
            return <Route path={routes.path} exact={routes.exact} Component={routes.main} key={index} />
        })
        return (
            <div>
                <MenuComponent />
                
                <div className="blog">
                    <div className="blog-hd">
                        <div className="blog-bg"></div>
                        <div className="blog-title">
                            <div className="blog-content">
                                <h2 className="header">BLog</h2>
                            </div>
                        </div>
                    </div>
                    {/* <div className="blog-search mb-5 ">
                        <div className="blog-search-hd">
                            <div className="blog-formSearch">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <ul className="catelogy-blog">
                                                 <BlogSlider/>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className=" blog-main container-fluid">
                        <div className="row" >
                            <div className="col-sm">
                                <Switch>
                                    <Route exact path={"/blog"}>
                                            <BlogSlider/>
                                    </Route>
                                    {this.showContentRouter(router)}
                                </Switch>
                            </div>
                            {/* <div className="col-sm-3">
                                <div>
                                    123123
                            </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <FooterComponent/> */}
            </div >
        )
    }
}

const mapStateToProps = (store) => {
    return {
        categoryBlog: store.categoryblogreducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getCategoryBlogAction,
        getAllblogsAction,
        getBlogByCategoryRequestAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogComponent))