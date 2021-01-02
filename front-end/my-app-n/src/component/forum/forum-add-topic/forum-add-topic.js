import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, Redirect } from "react-router-dom";
import CKEditor from 'ckeditor4-react';
import './forum-add-topic.css';
import { AddTopicActionRequest } from '../../../store/actions/forum-action/addTopicAction'
import { bindActionCreators } from 'redux';
class ForumAddTopic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            content: '',
            title: '',
            id_category: '',
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }

    handleonSubmit(event) {
        event.preventDefault();
        let moment = require('moment')
        let created = moment(localStorage.getItem('create')).format('ll');
        let { match } = this.props;
        let { fid } = match.params
        let { content, title } = this.state
        let name = localStorage.getItem('name')
        let id_username = localStorage.getItem('id')
        let topic = {
            id_username,
            username: name,
            title: title,
            content: content,
            id_category: fid,
            join: created
        }
        this.setState = {
            username: '',
            content: '',
            title: '',
        }
        this.props.AddTopicActionRequest(topic);
        setTimeout(
            function () {
                this.props.history.goBack()
            }
                .bind(this),
            200
        );
    }
    render() {
        let { match } = this.props;
        let { fid } = match.params
        let { content, title } = this.state
        return (
            <div className="add-topic">
                <div className="container pt-5">
                    <form onSubmit={this.handleonSubmit} >
                        <div className="upload-margin mb-4">
                            <span className="title pb-2">title</span>
                            <input className="form-control form-control-lg mt-2"
                                name="title" type="text"
                                value={this.state.title}
                                onChange={(event) => {
                                    this.setState({
                                        title: event.target.value
                                    })
                                }}
                            />
                        </div>
                        <div className="upload-margin ">
                            <span className="title d-block mb-2">content</span>
                            <CKEditor
                                onChange={(event) => {
                                    this.setState({
                                        content: event.editor.getData()
                                    })
                                }}
                                data={this.state.content}
                            />
                        </div>
                        <div className="text-center btn-sb mt-5">
                            <button type="button" className="btn  btn-color mb-5 button-submit w-btn" onClick={() => {
                                this.props.history.push(`/forum/topic/${fid}`)
                            }}>Back</button>
                            <button type="submit" className="btn  btn-color mb-5 button-submit ml-3 w-btn"
                                disabled={!content || !title}

                            >Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
const mapStatusToProps = (store) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        AddTopicActionRequest
    }, dispatch)
}
export default withRouter(connect(mapStatusToProps, mapDispatchToProps)(ForumAddTopic))