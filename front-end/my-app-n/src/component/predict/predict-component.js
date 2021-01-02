import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, Switch, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import MenuComponent from '../menu-header/menu-component'
import FooterComponent from '../footer/footer-component'
import './predict-component.css'
import axios from 'axios';

class PredictComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            square : '',
            ngang : '',
            duong: '',
            huong: '--',
            district: '',
            price: 0 ,
        };
        this.checkChange = this.checkChange.bind(this);
        this.sendInfo = this.sendInfo.bind(this);

    }
    checkChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })  
    }
    // checkBlur = 
    sendInfo=(event)=>{
        event.preventDefault();
        let { square, ngang, duong, direction,district} = this.state
        let predict = {
            square: (parseFloat(square) - 25) / (250 - 25).toString(),
            ngang: (parseFloat(ngang) - 3) / (9 - 3).toString(),
            duong: (parseFloat(duong) - 2) / (26 - 2).toString(),
            direction,
            district
        }
        let data= `?square=${predict.square}&ngang=${predict.ngang}&duong=${predict.duong}&huong_${predict.direction}=1&district_${predict.district}=1`;
         console.log(data)

        //  predictAction(data);
        var config = {
            "headers": {"Access-Control-Allow-Origin": "*"}
        }
        axios.get('http://127.0.0.1:8000/prediction/'+data,  { crossdomain: true })
          .then(res => {
            let Price = res.data.data;
            console.log(Price)
            if(Price<300){
                Price=300   
            }
            this.setState({ price: Price });
          })
          .catch(error => console.log(error));
    }
    shouldComponentUpdate(){
        // console.log('111')
        return true
    }
    componentWillUpdate() {
        if(this.props.price !=null){
        //    console.log(this.props.price)
        }
        // console.log(this.state.price)
    }
    render() {
        return ( 
            <div>
                <MenuComponent />
                <div className="predict">
                    <div className="predict-hd">
                        <div className="predict-bg"></div>
                        <div className="predict-title">
                            <div className="predict-content">
                                <h2 className="header">Predict</h2>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.sendInfo} className="form-input-predict p-5">
                        <div className="input-hd">
                            <h1>PREDICTION</h1>
                            <p>Input your property's information to get value prediction.</p>
                        </div>
                        <br/>
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                            <div className="input-group-text" id="btnGroupAddon2">Square</div>
                            </div>
                            <input name="square" 
                            onChange={this.checkChange} 
                            type="number" 
                            min="21"
                            max="300"
                            required
                            className="form-control"  
                            aria-label="Input group example"
                             aria-describedby="btnGroupAddon2"
                             placeholder='Input 21 - 300'/>
                        </div>
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                            <div className="input-group-text" id="btnGroupAddon2">Width</div>
                            </div>
                            <input type="number" 
                            name = 'ngang'
                            placeholder='Input 3 - 10'
                            onChange={this.checkChange} 
                            className="form-control" 
                            min="3"
                            max="10"
                            required
                            aria-label="Input group example" 
                            aria-describedby="btnGroupAddon2"/>
                        </div>
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                            <div className="input-group-text" id="btnGroupAddon2">Street</div>
                            </div>
                            <input 
                            name = 'duong'
                            type = "number"
                            placeholder='Input 2 - 30'
                            min="2"
                            max="30"
                            required
                            onChange={this.checkChange}
                            className="form-control" aria-label="Input group example" aria-describedby="btnGroupAddon2"/>
                        </div>
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                            <div className="input-group-text" id="btnGroupAddon2">Direction</div>
                            </div>
                            <select name='direction'
                            value = {this.state.direction}
                            onChange = {this.checkChange}
                            >
                                <option value="--">--</option>
                                <option value="W">W</option>
                                <option value="E">E</option>
                                <option value="S">S</option>
                                <option value="N">N</option>
                                <option value="WS">WS</option>
                                <option value="WN">WN</option>
                                <option value="ES">ES</option>
                                <option value="EN">EN</option>
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                            <div className="input-group-text" id="btnGroupAddon2">District</div>
                            </div>
                            <select
                            name='district'
                            value = {this.state.district}
                            onChange = {this.checkChange}>
                                <option value="cuchi">Cu Chi</option>
                                <option value="binhtan">Binh Tan</option>
                                <option value="nguhanhson">Ngu Hanh Son</option>
                                <option value="camle">Cam Le</option>
                                <option value="quan7">District 7</option>
                                <option value="sontra">Son Tra</option>
                                <option value="lienchieu">Lien Chieu</option>
                                <option value="thanhkhe">Thanh Khe</option>
                                <option value="badinh">Ba Dinh</option>
                                <option value="hoavang">Hoa Vang</option>
                                <option value="haibatrung">Hai Ba Trung</option>
                                <option value="caugiay">Cau Giay</option>
                                <option value="haichau">Hai Chau</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-info">Predict</button>
                    </form>
                    <p className='estimated-price'>ESTIMATED PRICE : {(this.state.price*1000000).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND</p>
                </div>
                <FooterComponent/>
            </div>
       )
    }
}
const mapStateToProps = (store) => {
    return {
        price: store.predictReducers.price
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PredictComponent))