import React from 'react';
import { Table, TableCell } from "semantic-ui-react";
import { connect } from 'react-redux';
import { getUsersList } from '../store/action/userAndBookAction';
class UserList extends React.Component {

    componentDidMount() {
        this.props.getUsersList();
    }

    render(){
        return(
            <React.Fragment>
                <h1>Users List</h1>
                <Table singleLine>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>User Type</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.props.userList && this.props.userList.map(user => (
                        <Table.Row key={user.email}>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user.firstName}</Table.Cell>
                            <Table.Cell>{user.lastName}</Table.Cell>
                            <Table.Cell>{user.userType.toUpperCase()}</Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userList: state.book.userList,
    }
  }

const mapDispatchToProps =(dispatch) => {
    return {
      getUsersList: ()  => dispatch(getUsersList())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(UserList);