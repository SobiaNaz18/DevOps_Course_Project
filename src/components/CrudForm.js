import React from 'react';


const CrudForm = (props) => {
    const { rollno, firstName, lastName, birthday, phone, email, onChangeHandler, onSubmitHandler, updateEvent, cancelHandler, updateHandler } = props;
    return (
        <form onSubmit={onSubmitHandler} className="myboder">
             <div className="row">
                    <label htmlFor="rollno">Roll Number</label>
                <div className="form-group"> 
                    <input type="text" className="form-control" name="rollno" value={rollno} onChange={onChangeHandler} />
                </div>
                </div>
            <div className="row">
                    <label htmlFor="firstName">First Name</label>
                <div className="form-group">
                    <input type="text" className="form-control" name="firstName" value={firstName} onChange={onChangeHandler} />
                </div>
                </div>
                <div className="row">
                    <label htmlFor="lastName">Last Name</label>                        
                <div className="form-group ">
                    <input type="text" className="form-control" name="lastName" value={lastName} onChange={onChangeHandler} />
                </div>
            </div>
            <div className="row">
                    <label htmlFor="birthday">Date of birth </label>                        
                <div className="form-group ">
                    <input type="date"  className="form-control" name="birthday" value={birthday} onChange={onChangeHandler} /> 
                </div>
            </div>
            <div className="row">
                    <label htmlFor="phone">Mobile Phone</label>
                <div className="form-group ">
                    <input type="number" className="form-control" name="phone" value={phone} onChange={onChangeHandler} />
                </div>
                </div>
                <div className="row">
                    <label htmlFor="email">Email</label>
                <div className="form-group"> 
                    <input type="text" className="form-control" name="email" value={email} onChange={onChangeHandler} />
                </div>
                </div>
                
               
            {updateEvent ?
                <React.Fragment>
                    <button type="button" className="btn btn-primary" onClick={updateHandler}>Save</button>
                    <button type="button" className="btn btn-danger" onClick={cancelHandler}>Close</button>
                </React.Fragment>
                :
                <button type="submit" className="btn btn-primary">Create</button>
            }
        </form>
    );
};

export default CrudForm;