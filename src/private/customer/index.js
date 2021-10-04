import React from 'react';
import { connect } from 'react-redux';
import { logout } from './../../store/action/authAction';
class CustomerDashboard extends React.Component {

    logout = () => {
        this.props.logout();
        this.props.history.push('/');
    }

    render(){
        return(
            <>
            <a href="/" onClick={this.logout}>Logout</a>
            <h1>Dashboard of Customer</h1>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDashboard);