import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getOnePetRequestAction } from '../../../../store/actions/admin-action/pet-admin/getOnePetAction'
import { EditPetRequestAction } from '../../../../store/actions/admin-action/pet-admin/editPetAction'
import './edit-pet-admin-component.css'
class EditPetAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            id: ''
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    componentDidMount() {
        let { match } = this.props
        let { id } = match.params
        this.props.getOnePetRequestAction(id)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemPet) {
            let { itemPet } = nextProps
            this.setState({
                name: itemPet.name,
                id: itemPet._id
            })
        }
    }
    handleonSubmit(event) {
        event.preventDefault();
        let { id, name } = this.state
        let pet = {
            name
        }
        this.props.EditPetRequestAction(id, pet)
        this.setState({
            name: '',
            id: ''
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
        return (
            <div>
                <div className="upload-component">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 m-auto">
                                <div className="brand">
                                    <h1>Pet</h1>
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
                                    <div className="text-center btn-sb mt-5">
                                        <button type="button" className="btn btn-primary btn-color mb-5 button-submit"
                                            onClick={() => {
                                                this.props.history.push('/admin/pets')
                                            }}
                                        >Back</button>
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
        itemPet: store.OnePetReducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getOnePetRequestAction,
        EditPetRequestAction
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPetAdminComponent));