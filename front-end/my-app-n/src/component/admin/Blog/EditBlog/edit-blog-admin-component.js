import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { addBlogRequestAction } from '../../../../store/actions/blog-action/addBlogAction'
import { bindActionCreators } from 'redux'
import { getCategoryBlogAction } from "../../../../store/actions/blog-action/getCategoryBlogAction";
import { getDetailBlogRequestAction } from "../../../../store/actions/blog-action/getDetailBlogAction";
import { editBlogRequestAction, editBlogWithFileRequestAction } from '../../../../store/actions/blog-action/edittBlogAction'
import CKEditor from 'ckeditor4-react';

import './edit-blog-admin-component.css'
class EditBlogAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogImage: null,
            nameImage: '',
            title: '',
            introduction: '',
            context: '',
            id_categoryblog: '',
            id: '',
            isCheck: false,
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    componentDidMount() {
        let { match } = this.props
        let { id } = match.params
        this.setState({
            id
        })
        this.props.getCategoryBlogAction()
        this.props.getDetailBlogRequestAction(id)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.detailBlog) {
            let { detailBlog } = nextProps
            this.setState({
                nameImage: detailBlog.image,
                title: detailBlog.title,
                introduction: detailBlog.introduction,
                id_categoryblog: detailBlog.id_categoryblog,
            })
        }
    }
    handleonSubmit(event) {
        event.preventDefault();
        let { id, blogImage, nameImage, title, introduction, context, id_categoryblog } = this.state
        if (!blogImage) {
            let blog = {
                title, introduction, context, id_categoryblog,
                image: nameImage
            }
            this.props.editBlogRequestAction(id, blog)
        } else {
            let { id } = this.state
            const data = new FormData();
            data.append('id_categoryblog', this.state.id_categoryblog)
            data.append('title', this.state.title)
            data.append('introduction', this.state.introduction)
            data.append('blogImage', this.state.blogImage)
            data.append('context', this.state.context)
            this.props.editBlogWithFileRequestAction(id, data)
        }

        this.setState({
            blogImage: null,
            title: '',
            introduction: '',
            context: '',
            id_categoryblog: '',
            isCheck: true,
        })
        setTimeout(
            function () {
                this.props.history.goBack()
            }
                .bind(this),
            200
        );
    }

    render() {
        var listCategory = this.props.listCategory.map((Category, index) => {
            return <option key={index} value={Category._id}>{Category.name}</option>
        })
        let {detailBlog} = this.props
        return (
            <div>
                <div className="upload-component">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 m-auto">
                                <div className="brand">
                                    <h1>Edit Blog</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-sm-6 m-auto">
                                <form onSubmit={this.handleonSubmit} encType="multipart/form-data">
                                    <div className="upload-margin">
                                        <span className="title pb-2">Title</span>
                                        <input className="form-control form-control-lg"
                                            name="title" type="text"
                                            value={this.state.title ? this.state.title : ''}
                                            onChange={(event) => {
                                                this.setState({
                                                    title: event.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="upload-margin">
                                        <span className="title pb-2">Introduction</span><input className="form-control form-control-lg"
                                            name="introduction" type="text"
                                            onChange={(event) => {
                                                this.setState({
                                                    introduction: event.target.value
                                                })
                                            }}
                                            value={this.state.introduction ? this.state.introduction : ''}
                                        />
                                    </div>
                                    <div>
                                        {/* Choose Category */}
                                        <div className="input-group my-4">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                                            </div>
                                            <select className="custom-select" id="inputGroupSelect01"
                                                name="id_categoryblog" value={this.state.id_categoryblog ? this.state.id_categoryblog : ''}
                                                onChange={(event) => {
                                                    this.setState({
                                                        id_categoryblog: event.target.value
                                                    })
                                                }}
                                            >
                                                <option defaultValue>Choose...</option>
                                                {listCategory}
                                            </select>
                                        </div>
                                        {/* End - Choose Category*/}
                                        {/*Upload*/}
                                        <div className="input-group upload-cusntom-upload my-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" >Upload</span>
                                            </div>
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input"
                                                    name="blogImage"
                                                    onChange={(event) => {
                                                        this.setState({
                                                            blogImage: event.target.files[0]
                                                        })
                                                    }}

                                                />
                                                <p className="custom-file-label upload-file">{this.state.blogImage ? this.state.blogImage.name : this.state.nameImage}</p>
                                            </div>
                                        </div>
                                        {/*End-Upload*/}
                                    </div>

                                    {/*Content*/}
                                    <div className="upload-margin">
                                        <span className="title d-block mb-3">Content</span>
                                        <CKEditor
                                            onChange={(event) => {
                                                this.setState({
                                                    context: event.editor.getData()
                                                })
                                            }}
                                            data={this.state.context ? this.state.context :this.props.detailBlog.context}
                                            value={this.state.context ?this.state.context :this.props.detailBlog.context}
                                        />
                                    </div>
                                    {/*End - Content*/}

                                    <div className="text-center btn-sb mt-5">
                                        <button type="button" className="btn btn-primary btn-color mb-5 button-submit" onClick={() => this.props.history.goBack()}>Back</button>
                                        <button type="submit" className="btn btn-primary btn-color mb-5 button-submit ml-3">Submit</button>

                                    </div>

                                </form>

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
        listCategory: store.categoryblogreducers,
        detailBlog: store.getDetailBlogReducers,

    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addBlogRequestAction,
        getCategoryBlogAction,
        getDetailBlogRequestAction,
        editBlogRequestAction, editBlogWithFileRequestAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditBlogAdminComponent));