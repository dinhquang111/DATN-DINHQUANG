import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class TotalPostComponent extends Component {
    render() {
        let moment = require('moment')
        let { _id, listChill } = this.props
        let totalPost = []
        listChill.map((chill, index) => {
            if (chill.id_category === _id) {
                totalPost.push(chill)
            }
            return -1
        })
        let total = totalPost.length
        totalPost.sort((a, b) => {
            return -1
        })
        let newH = totalPost.slice(0, 1)
        let disNewH = newH.map((last, index) => {
            return <li className="last-post text-color pl-3" key={index}>
                <span className="d-block">by {last.username} <i className="fas fa-arrow-right"></i></span>
                <span>{moment(last.created).format('llll')}</span>
            </li>
        })
        return (
            <div>
                <li className="posts text-color text-center">{total}</li>
                {disNewH}
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        listChill: store.allTopicChillReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TotalPostComponent))