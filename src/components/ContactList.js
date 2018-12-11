// This is the Contact List and Add Contact Component, Can split later...

import React from 'react';

class ContactList extends React.Component {
    constructor(props){
        super()
        this.handleData = this.handleData.bind(this);
        this.state = {
            firstName: 'Aimee',
            lastName: 'Tacchi',
            email: 'aimeetacchi@gmail.com',
            hobbies: ['photography', 'drawing', 'travel', 'swimming']
        }
    }

    handleData(data){
		this.setState({
			firstName: data
		});
	}

    

    render(){
        // Inline Styles
        let ContactListStyles = {
            border: '1px dashed blue'
        }
        
        let AddContactStyles = {
            border: '1px dashed red'
        };

        

        return (
            <div>
                {/* // This can be a component later ---- ContactsList */}
                <div style={ContactListStyles} id="contactList">
                    <h2>Contact List</h2>
                    {/* // Loop through contacts ---- */}
                    <div className="card">
                        <ul className="card-list">
                            <li>First Name: {this.state.firstName}</li>
                            <li>Last Name: {this.state.lastName} </li>
                            <li>Email:  {this.state.email}</li>
                            <li>Hobbies:{this.state.hobbies}</li>
                        </ul>
                    </div>
                
                </div>
                
                {/* // This could be a Add Contact Component Later -- */}
                <div style={AddContactStyles}>
                    <h2>Add Contact Component</h2>
                    <form>
                        <div className="form-input">
                            <label htmlFor="firstname">First Name:</label>
                            <input type="text" name="firstname" placeholder="First Name"/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="lastname">Last Name:</label>
                            <input type="text" name="lastname" placeholder="Last Name"/>
                        </div>
                        <input type="submit" value="Add Contact"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactList;