import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Router, Route, withRouter,Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import './App.css';
import homeComponent from './component/home/home-component';
import loginComponent from './component/login/login-component';
import adminComponent from './component/admin/admin-component';
import registerComponent from './component/register/register-component';
import { history } from './helps/history'
import googlemapComponent from './component/googlemap/googlemap-component';
import productComponent from './component/product/product-component';
import footerComponent from './component/footer/footer-component';
import upload from './component/upload/upload';
import ckeditor from './component/ckeditor/ckeditor';
import testLogin from './component/login/test-login';
import productCart from './component/product/product-cart/product-cart';
import blogComponent from './component/blog/blog-component';
import predictComponent from './component/predict/predict-component';
import forumComponent from './component/forum/forum-component';
import forumTopicComponent from './component/forum/forum-topic/forum-topic-component';
import forumTopicDetailComponent from './component/forum/forum-topic-detail/forum-topic-detail-component';
import {getListForumAction} from './store/actions/admin-action/forum-action/getlistForumAction'
import UserComponent from './component/user/user-component'
import ProductPurchaseComponent from './component/product/product-purchase/product-purchase-component'
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 1000) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

class App extends Component {
  state = {
    redirectToReferrer: false
  }
  componentDidMount(){
       
    setInterval(() => {
      if (localStorage.getItem("token")) {
        fakeAuth.authenticate(() => {
          this.setState(() => ({
            redirectToReferrer: true
          }))
        })
      }
      else{
        fakeAuth.signout()
      }
    }, 1000);
    
}
  render() {
    return (
      <div>
        <Router history={history}>
          <Route path={"/"} exact={true} component={homeComponent} />
          <Route path={"/login"} component={loginComponent} />
          <Route path={"/admin"} component={adminComponent} />
          <Route path={"/register"} component={registerComponent} />
          {/* <Route path={"/branch"} component={branch}/> */}
          <Route path={"/gg"} component={googlemapComponent} />
          {/* <Route path={"/news"} component={mapNewsComponent}/> */}
          <Route path={"/product"} component={productComponent} />
          <Route path={"/footer"} component={footerComponent} />
          <Route path={"/image"} component={upload} />
          <Route path={'/ck'} component={ckeditor}/>
          <Route path={'/testlogin'} component={testLogin} />
          <Route path={'/cart'} component={productCart}/>
          <PrivateRoute path={'/predict'} component={predictComponent}/>
          <Route path={'/blog'} component={blogComponent}/>
          <Route path={'/forum'}  component={forumComponent}/>
          <Route path={'/topic'} component={forumTopicComponent}/>
          <Route path={'/detailtopic'} component={forumTopicDetailComponent}/>
          <Route path={'/profile'} component={UserComponent} />
          <Route path={'/purchase'} component={ProductPurchaseComponent} />
        </Router>

      </div>
    )
  }
}
const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getListForumAction
    },dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
