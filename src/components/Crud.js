import React, { Component,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers, createUser, deleteUser, updateUser, cancel, fetchOneUser, changeEvent } from '../actions/user-action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

class Crud extends Component{
    
    state= {showForm: false}
    onSubmitHandler = (e) => {
        e.preventDefault();
        if (!this.validateForm()) {
            return false;
        }
        this.props.createUser().then(() => localStorage.setItem("users", JSON.stringify(this.props.users)));
        this.successMsg('Success');
        this.state.showForm=false;
    }
   showFormHandler = () => {
    this.state.showForm=true;
    }
    updateHandler = () => {
       
        this.props.updateUser().then(() => localStorage.setItem("users", JSON.stringify(this.props.users)));
        this.successMsg('Successfully updated');
    }
    deleteHandler = (id) => {
        this.props.deleteUser(id).then(() => localStorage.setItem("users", JSON.stringify(this.props.users)));
        this.successMsg('Deleted Successfully');
    }
    
    validateForm = () => {
        
        if (this.props.rollno === "" || this.props.firstName === "" || this.props.lastName === "" || this.props.birthday === "" || this.props.phone === "") {
            return this.errorMsg("Enter empty fields");
        }
        if (!(/^\d{1,4}$/.test(this.props.rollno))) {
            return this.errorMsg("Enter valid roll number");
        }
        if (!(/^[A-Za-z]+$/.test(this.props.firstName)) || !(/^[A-Za-z]+$/.test(this.props.lastName))) {
            return this.errorMsg("Enter valid name");
        }
        
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(this.props.email))) {
            return this.errorMsg("Enter valid  email address");
        }

        if(!(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(this.props.phone))) {
            return this.errorMsg("Enter valid phone number");
        }
        

        return true;
    }
    errorMsg = (msg) => {
        toast.error(msg, {
            position: toast.POSITION.BOTTOM_LEFT
        });
        return false;
    }
    successMsg = (msg) => {
        toast.success(msg, {
            position: toast.POSITION.BOTTOM_LEFT
        });
        return true;
    }

     ShowForm = () => {
        return (
          <div> 
          <CrudForm 
                        rollno={this.props.rollno}
                        firstName={this.props.firstName}
                        lastName={this.props.lastName}
                        birthday={this.props.birthday}
                        phone={this.props.phone}
                        email={this.props.email}
                        onChangeHandler={this.props.changeEvent}
                        onSubmitHandler={this.onSubmitHandler}
                        updateHandler={this.updateHandler}
                        cancelHandler={this.props.cancel}
                        updateEvent={this.props.updateEvent}
                        
                    />
           </div>
          );
      }


    render() {
        return (
            <div>
                <button type="submit" onClick={() => this.setState({showForm:!this.state.showForm})} className="btn btn-primary">Add</button>
                {this.state.showForm&&<this.ShowForm/>}
          
                
                <CrudTable 
                    users={this.props.users}
                    fetchUpdateHandler={this.props.fetchOneUser}
                    deleteHandler={this.deleteHandler}
                    startElement={this.props.startElement}
                    showFormHandler={this.showFormHandler}
                />
                <ToastContainer autoClose={4000} hideProgressBar/>
            </div>
        )
    }
}

Crud.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    fetchOneUser: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    changeEvent: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    selectPage: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    users: state.users.users,
    rollno: state.users.rollno,
    firstName: state.users.firstName,
    lastName: state.users.lastName,
    birthday: state.users.birthday,
    phone: state.users.phone,
    email: state.users.email,
    updateEvent: state.users.updateEvent,
    startElement: state.pagination.startElement,
    numberOfUsersOnePage: state.pagination.numberOfUsersOnePage,
   
    
});

export default connect(mapStateToProps, { fetchUsers, createUser, deleteUser, cancel, fetchOneUser, changeEvent, updateUser,})(Crud);
