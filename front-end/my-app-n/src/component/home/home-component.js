import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
// import { bindActionCreators } from 'redux'
import './home-component.css';
// import {slider} from '../sliderlogin/slider';
import s1 from '../../image/Slide/s1.jpg'
import s2 from '../../image/Slide/s2.jpg'
import s3 from '../../image/Slide/s3.jpg'
import s4 from '../../image/Slide/s4.jpg'
import Slider from "react-slick";
import Branch from '../branch/branch'
import Category from '../category/category'
import MapNewsComponent from '../map_news/map-news-component'
import MenuComponent from '../menu-header/menu-component'
import FooterComponent from '../footer/footer-component'
import { getListProductRequestAction } from '../../store/actions/admin-action/product-admin/getListProductAction'
import { bindActionCreators } from 'redux';
import { getListCategoryAction } from '../../store/actions/admin-action/category-admin/getListCategoryAction'
class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            isCheck: false,

        }
    }
    componentDidMount(){
       
            let level = localStorage.getItem('level')
            if(level===4||level==='4'){
                this.props.history.push('/admin')
            }

    }
    componentWillReceiveProps(nextProps, nextContext) {
       
    }
    componentWillMount() {
        this.props.getListProductRequestAction()
    }
    componentWillMount() {
        this.props.getListCategoryAction()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    showContentSlider = (sliders) => {
        let result = null
        if (sliders.length > 0) {
            result = sliders.map((slider, index) => {
                console.log(slider.url)
                return <div key={index}>
                    <div className="single-slider" style={{ backgroundImage: `url(${slider.url})` }}>
                        <div className="slider-title">
                            <div className="table-cell bgn">
                                <h2 className="header">
                                    {slider.header}
                                </h2>
                                <p className="header-middle">{slider.body}</p>
                                <div className="share">
                                    <div className="share-d">
                                        <p className="icon">
                                            <span className="info px-5">
                                                <i className="fas fa-city  mgl sha"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <p className="info-slider">{slider.footer}</p>
                            </div>

                        </div>
                    </div>
                </div>
            })
        }
        return result
    }
    render() {
        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 600,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        let sliders = [
            {
                url: 'https://diaocminhtran.vn/wp-content/uploads/2019/11/da_na_2.jpg',
                header: `NEW CITY`,
                body: 'New ecological urban area',
                footer: 'The new eological urban area is arriving'
            },
            {
                url: 'https://cityapartment.com.vn/wp-content/uploads/2018/05/gioi-dau-tu-hong-kong-va-trung-quoc-do-bo-san-batdongsan-vietnam-cityapartment.com_.vn-4.jpg',
                header: `Lee Webster`,
                body: 'Hygiene Cosmetics For Cats',
                footer: 'Formulated from natural herbs, gently cleansed, absolutely safe.'
            },
            {
                url: 'https://4.bp.blogspot.com/-dgy5F44IZJY/W3gyH--s6WI/AAAAAAAAg9w/VWwJ-DhGB2Ym8GFlMENRpyWuLMaqafDoACLcBGAs/s640/Nhan-ky-gui-nha-dat-ha-noi.jpg',
                header: `Cozy house`,
                body: 'New cozy house',
                footer: 'Help your life be more comfortable, happier.'
            },
            {
                url: 'https://photo2.tinhte.vn/data/attachment-files/2020/01/4875839_united_arab_emirates_skyscrapers_dubai_megapolis-wallpaper-1920x1080.jpg',
                header: `The most mordern empire`,
                body: 'To be a mordern citizen',
                footer: 'Living like a supreme human in the future world'
            }
        ]
        return (
            <div>
                <MenuComponent />
                <div className="slider-area">
                    <Slider {...settings}>
                        {this.showContentSlider(sliders)}
                    </Slider>
                </div>
                <div>
                    <Branch />
                </div>
                <div>
                    <Category />
                </div>
                <div>
                    <MapNewsComponent />
                </div>
                <div>
                    <FooterComponent />
                </div>
            </div>
        )
    }
}
const mapStateToPops = (store) => {
    return {
        name: store.loginReducers.name,
        token: store.loginReducers.token,
        login: store.loginReducers.login,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getListProductRequestAction,
        getListCategoryAction
    }, dispatch)
}
export default withRouter(connect(mapStateToPops,mapDispatchToProps)(HomeComponent))