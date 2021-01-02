import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// import { bindActionCreators } from 'redux';
import Slider from "react-slick";
import './branch.css'
import h1 from '../../image/Branch/h1.jpg'
import h2 from '../../image/Branch/h2.jpg'
import h3 from '../../image/Branch/h3.jpg'
import h4 from '../../image/Branch/h4.jpg'
import h5 from '../../image/Branch/h5.jpg'
import h7 from '../../image/Branch/h7.jpg'
import l1 from '../../image/logo-branch/logo1.jpg'
import l2 from '../../image/logo-branch/logo2.png'
import l3 from '../../image/logo-branch/logo3.jpg'
import l4 from '../../image/logo-branch/logo4.png'
import l5 from '../../image/logo-branch/logo5.png'
import l6 from '../../image/logo-branch/logo6.png'
class Branch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nav1: null,
            nav2: null,
            filterNameProduct: '',
            filterCategory: -1,
            filterBranch: -1,
            filterPet: -1
        };
    }
    componentWillMount() {

    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    componentDidUpdate() {



    }
    filterProduct = () => {
        let { FilterProduct } = this.props
        let { filterNameProduct, filterPet, filterCategory, filterBranch } = this.state
        let filter = {
            filterNameProduct, filterPet, filterCategory, filterBranch
        }
        FilterProduct(filter)
        this.setState({
            filterNameProduct: '',
            filterPet: -1,
            filterCategory: -1,
            filterBranch: -1
        })
        this.props.history.push('/product/filter')
    }
    showContentBranch = (branchs) => {
        let result = null
        if (branchs.length > 0) {
            result = branchs.map((branch, index) => {
                return <div key={index}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={branch.url} alt="hình ảnh" className="image-branch" />
                            </div>
                            <div className="col-sm branch-content">
                                <div className="new-header">
                                    <h2>{branch.header}</h2>
                                    <p>{branch.body}</p>
                                    </div> 
                                <p className="ell ellp">
                                    {branch.footer}
                                </p>
                                {/* <button className="btn view">detail</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
        return result
    }
    showImageBranch = (Images) => {
        let result = null
        if (Images.length > 0) {
            result = Images.map((image, index) => {
                return <div key={index} className="image-brand2">
                    <span className="img">
                        <img src={image.url} />
                    </span>
                </div>
            })
        }
        return result
    }

    render() {
        /**Auto slider */
        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 2000,        
        };
        let branch = [
            {
                url: 'https://media.baodautu.vn/Images/phuongthanh/2020/05/23/Park-Kiara.jpg',
                header: `HA NOI`,
                body: `Park Kiara project`,
                footer: ` Park Kiara is invested by the Vietnam International Urban Development Joint Stock Company (VIDC), a member of Perdana ParkCity Group (Kuala Lumpur).`
            },
            {
                url: 'https://canhoquan7.info/uploads/noidung/images/Eco-green-saigon/tong-quan-du-an-can-ho-ecogreen-saigon.jpg',
                header: `HO CHI MINH`,
                body: `Eco Green Saigon apartment`,
                footer: ` True to its name - "Eco Green" is really Green Ecological Area with more than 70%, internal park up to 3 hectares, located next to Huong Tram Park with 22 hectares wide.
                Handover Full high-class interior with 100% imported materials. Only 11 apartments / 1 floor. 100% apartments have large balcony with outward view.`
            },
            {
                url: 'https://img.ancu.me/single-images/201901/415/5c3ea7d16dfa0574805287/5c3ea7d16dfa0574805287.jpg',
                header: `DA NANG`,
                body: `Danang City Urban Project in Vietnam`,
                footer: `After collecting information about Real Estate, New Da Nang City project is an expected new urban area of Lien Chieu District. Here, the real estate segment is gradually developing and bringing a different perspective to the area. On the other hand, the New Da Nang City project owns a fairly large area, which is convenient for investors to design and apply large-scale and modern projects.`
            },
            {
                url: 'https://media.baodautu.vn/Images/phuongthanh/2020/05/23/Park-Kiara.jpg',
                header: `HA NOI`,
                body: `Park Kiara project`,
                footer: ` Park Kiara is invested by the Vietnam International Urban Development Joint Stock Company (VIDC), a member of Perdana ParkCity Group (Kuala Lumpur).`
            },
            {
                url: 'https://canhoquan7.info/uploads/noidung/images/Eco-green-saigon/tong-quan-du-an-can-ho-ecogreen-saigon.jpg',
                header: `HO CHI MINH`,
                body: ` Eco Green Saigon apartment`,
                footer: ` True to its name - "Eco Green" is really Green Ecological Area with more than 70%, internal park up to 3 hectares, located next to Huong Tram Park with 22 hectares wide.
                Handover Full high-class interior with 100% imported materials. Only 11 apartments / 1 floor. 100% apartments have large balcony with outward view..`
            },
            {
                url: 'https://img.ancu.me/single-images/201901/415/5c3ea7d16dfa0574805287/5c3ea7d16dfa0574805287.jpg',
                header: `DA NANG`,
                body: `Danang City Urban Project in Vietnam`,
                footer: `After collecting information about Real Estate, New Da Nang City project is an expected new urban area of Lien Chieu District. Here, the real estate segment is gradually developing and bringing a different perspective to the area. On the other hand, the New Da Nang City project owns a fairly large area, which is convenient for investors to design and apply large-scale and modern projects.`
            },
        ]
        let imagebranch = [//// phai lon > 6
            {
                url: l1
            },
            {
                url: l6
            },
            {
                url: l3
            },
            {
                url: l4
            },
            {
                url: l2
            },
            {
                url: l5
            },
        ]
        return (
            <div>
                <div className="branch">
                    <div className="branch-header container">
                        <h2>brand introduction</h2>
                    </div>
                    <div className="branch-slider-m">
                        <Slider
                            {...settings}
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                        >
                            {this.showContentBranch(branch)}
                        </Slider>
                    </div>


                    <div className="container footer-slider mt-4">
                        <div className="row">
                            <div className="col-sm">
                                <Slider
                                    asNavFor={this.state.nav1}
                                    ref={slider => (this.slider2 = slider)}
                                    slidesToShow={4}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    {this.showImageBranch(imagebranch)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Branch))