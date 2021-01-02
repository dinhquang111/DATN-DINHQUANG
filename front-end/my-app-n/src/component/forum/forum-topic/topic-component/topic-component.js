import React , {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'
import {viewTopicActionRequest} from '../../../../store/actions/forum-action/viewTopicAction'
import '../forum-topic-component.css'
import { bindActionCreators } from 'redux'

class TopicComponent extends Component {

    IncreaseView = (id)=>{
        this.props.viewTopicActionRequest(id)
    }
    render(){
        let moment = require('moment');
        let { match } = this.props;
        let { fid } = match.params
        let {_id,title,time,username,view,listChill} = this.props
        let reply  = []
        listChill.map((chill,index)=>{
            if(chill.id_topic===_id){
                reply.push(chill)
            }
        })
        let total = reply.length
        reply.sort((a,b)=>{
            return -1
        })
        let newH = reply.slice(0,1)
        let disNewH = newH.map((last,index)=>{
            return <li className="last-post text-color pl-3" key ={index}>
        <span className="d-block">by {last.username}  <i className="fas fa-arrow-right"></i></span>
            <span> {moment(last.created).format('llll')}</span>
        </li>
        })
        return( 
            <div>
                <ul className="information-category w-100 d-table position-relative">
                    <div className="bg-icon 
                        d-table-cell align-middle">
                        <li className="header-name">
                            <Link  to={`/forum/detail/${fid}/${_id}`} className="d-block hd-color" onClick={()=>{
                                this.IncreaseView(_id)
                            }}>{title}</Link>
                            <span className="dec-color">by {username}  <i className="fas fa-arrow-right"></i>  {time}</span>
                        </li>
                        <li className="topics text-color text-center">{total}</li>
                        <li className="posts text-color text-center">{view}</li>
                        {disNewH}
                    </div>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (store) =>{
    return {
        listChill : store.allTopicChillReducer
    }
}
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        viewTopicActionRequest
    },dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TopicComponent))