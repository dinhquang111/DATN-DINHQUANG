import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter,Link } from 'react-router-dom'
import TotalTopicComponent from './TotalTopicComponent/TotalTopicComponent'
import TotalPostComponent from './TotalPostComponent/TotalPostComponent'
class ForumGenralChillComponent extends Component {
    render() {
        let {match, id_parents} = this.props;
        let url = match.url
        let arrChill = []
        this.props.listforum.map((forumchill, index) => {
            if (forumchill.id_parents === id_parents) {
                arrChill.push(forumchill)
            }
        })
        if(arrChill.length===1){
            var displayForumChill1 = arrChill.map((forumchill,index)=>{
               return <ul className="information-category w-100 d-table position-relative" key={index}>
                <div className="bg-last 
                    d-table-cell align-middle">
                    <li className="header-name">
                        <Link  to={`${url}/topic/${forumchill._id}`}className="d-block hd-color"><i className="far fa-folder"></i> {forumchill.name}</Link>
                        {/* <span className="dec-color">Description</span> */}
                    </li>
                    <TotalTopicComponent _id={forumchill._id}></TotalTopicComponent>
                    <TotalPostComponent _id={forumchill._id}></TotalPostComponent>
                </div>
            </ul>
            })
        }else if(arrChill.length>1){
                var countChill = arrChill.length
                let lastArrChill = arrChill.slice(arrChill.length-1,arrChill.length);
                arrChill.pop();
                var displayForumChill2 = arrChill.map((forumchill,index)=>{
                return   <ul className="information-category w-100 d-table position-relative" key={index}>
                <div className="bg-icon 
                    d-table-cell align-middle">
                    <li className="header-name">
                        <Link className="d-block hd-color" to={`${url}/topic/${forumchill._id}`}> <i className="far fa-folder"></i> {forumchill.name}</Link>
                        {/* <span className="dec-color">Description</span> */}
                    </li>
                    <TotalTopicComponent _id={forumchill._id}></TotalTopicComponent>
                    <TotalPostComponent _id={forumchill._id}></TotalPostComponent>
                </div>
            </ul>
            })
            var displayLastArrChill = lastArrChill.map((forumchill,index)=>{
                return <ul className="information-category w-100 d-table position-relative" key={index}>
                <div className="bg-last 
                    d-table-cell align-middle">
                    <li className="header-name">
                        <Link className="d-block hd-color" to={`${url}/topic/${forumchill._id}`}> <i className="far fa-folder"></i> {forumchill.name}</Link>
                        {/* <span className="dec-color">Description</span> */}
                    </li>
                    <TotalTopicComponent _id={forumchill._id}></TotalTopicComponent>
                    <TotalPostComponent _id={forumchill._id}></TotalPostComponent>
                </div>
            </ul>
            })
        }
        
        console.log()
        return (
            <div>
                {arrChill.length===1&&displayForumChill1}
                {countChill > 1 &&displayForumChill2 }
                {countChill > 1 &&displayLastArrChill}
            </div>
        )
    }
     
    }


const mapStateToProps = (store) => {
    return {
        listforum: store.getListForumsReducer,
     
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForumGenralChillComponent))