import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';

class RegisterComponent extends Component {
    constructor(props) {
        super(props)
      
    }
    componentWillMount() {
    
    }

    componentDidUpdate() {
 
    }

   
    render() {
        return (
            <div>
           
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
    
    }
}
const mapDispatchToProps = (dispatch) => {
    return{ }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterComponent))