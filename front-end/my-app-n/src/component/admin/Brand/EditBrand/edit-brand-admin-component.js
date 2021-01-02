import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { GetOneBrandRequestAction } from '../../../../store/actions/admin-action/brand-admin/getOneBrandAction'
import { EditBrandRequestAction } from '../../../../store/actions/admin-action/brand-admin/editBrandAction'
import './edit-brand-admin-component.css'
class EditBrandAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            introduction: '',
            context: '',
            id: ''
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    componentDidMount() {
        let { match } = this.props
        let { id } = match.params
        this.props.GetOneBrandRequestAction(id)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.ItemBrand) {
            let { ItemBrand } = nextProps
            this.setState({
                name: ItemBrand.name,
                introduction: ItemBrand.introduction,
                context: ItemBrand.context,
                id: ItemBrand._id
            })
        }
    }
    handleonSubmit(event) {
        event.preventDefault();
        let {id,name,introduction,context}= this.state
        let brand ={
            name ,
            introduction,
            context
        }
        this.props.EditBrandRequestAction(id,brand)
        this.setState({
            isCheck: true,
            name: '',
            introduction: '',
            context: '',
        })
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <div className="upload-component">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 m-auto">
                                <div className="brand">
                                    <h1>edit brand</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-sm-6 m-auto">
                                <form onSubmit={this.handleonSubmit} encType="multipart/form-data">
                                    <div className="upload-margin">
                                        <span className="title pb-2">Name</span>
                                        <input className="form-control form-control-lg"
                                            name="name" type="text"
                                            value={this.state.name}
                                            onChange={(event) => {
                                                this.setState({
                                                    name: event.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="upload-margin">
                                        <span className="title pb-2">introduction</span>  <input className="form-control form-control-lg"
                                            name="introduction" type="text"
                                            onChange={(event) => {
                                                this.setState({
                                                    introduction: event.target.value
                                                })
                                            }}
                                            value={this.state.introduction}
                                        />
                                    </div>
                                    <div className="upload-margin">
                                        <span className="title pb-2">context</span><input className="form-control form-control-lg"
                                            name="context" type="text"
                                            onChange={(event) => {
                                                this.setState({
                                                    context: event.target.value
                                                })
                                            }}
                                            value={this.state.context}
                                        />
                                    </div>
                                    <div className="text-center mt-5">
                                        <button type="button" className="btn btn-primary btn-color mb-5 button-submit" onClick={() => {
                                            this.props.history.push('/admin/brands')
                                        }}>Back</button>
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
        ItemBrand: store.OneBrandReducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        GetOneBrandRequestAction,
        EditBrandRequestAction,
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditBrandAdminComponent));