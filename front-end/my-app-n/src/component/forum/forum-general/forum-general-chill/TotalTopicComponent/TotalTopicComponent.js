import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class TotalTopicComponent extends Component {
    render() {
        let { _id,allTopic } = this.props
        let totalTopic = []
        allTopic.map((topic,index)=>{
            if(topic.id_category === _id){
                totalTopic.push(topic)
            }
        })
        let total = totalTopic.length
        return (
            <div>
                <li className="topics text-color text-center">{total}</li>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        allTopic: store.getAllTopicReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TotalTopicComponent))