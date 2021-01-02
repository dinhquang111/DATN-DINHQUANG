import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './forum-general-component.css'
import ForumGenralChillComponent from './forum-general-chill/forum-general-chill-component'
import { getAllTopicChillActionRequest } from '../../../store/actions/forum-action/getAllTopicChillAction'
import { getAllTopicActionRequest } from '../../../store/actions/forum-action/getAllTopicAction'
import { bindActionCreators } from 'redux'
class ForumGeneralComponent extends Component {
    componentDidMount() {
        this.props.getAllTopicChillActionRequest()
        this.props.getAllTopicActionRequest()
    }
    render() {
        let displayForum = this.props.listforum.map((forum, index) => {
            if (forum.id_parents === '0') {
                return <div className=" form-main container " key={index}>
                    <div className="form-information">
                        <div className="topiclist shadow bg-white ">
                            <div>
                                <ul className="information-main ">
                                    <li className="header-name">{forum.name}</li>
                                    <li className="topics text-color text-center">Topics</li>
                                    <li className="posts text-color text-center">Posts</li>
                                    <li className="last-post text-color pl-3">Last post</li>
                                </ul>
                                <ForumGenralChillComponent id_parents={forum._id} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        })
        return (
            <div>
                <div className="color-form pt-5">
                    {displayForum}
                </div>
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
    return bindActionCreators({
        getAllTopicChillActionRequest,
        getAllTopicActionRequest
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForumGeneralComponent))