import React from 'react';
import { Table } from 'react-bootstrap';

const CrudTable = ({users, fetchUpdateHandler, deleteHandler, startElement,showFormHandler }) => {
    console.log("StartElement => ", startElement);

    
    return (
        
        <Table responsive className="border border-secondary">
                
            <thead>
              
                <tr> 
                    
                    <th>ROLL NUM</th>
                    <th>NAME</th>
                    <th>LNAME</th>
                    <th>DAte Of Birth</th>
                    <th>PHONE NUM</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 && users.slice(startElement, startElement + 5).map((user, i) => {
                    console.log(users)
                    return (
                        <tr key={i}>
                            <td>{user.rollno}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.birthday}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td><button type="button" className="btn btn-info" onClick={() =>{showFormHandler(); fetchUpdateHandler(user.id);}}>Edit</button>
                            <button type="button" className="btn btn-danger" onClick={() => deleteHandler(user.id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
};

export default CrudTable;