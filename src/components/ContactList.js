// This is the Contact List and Add Contact Component, Can split later...

import React from 'react';
import axios from 'axios';

class ContactList extends React.Component {
    constructor(props){
        super()
        this.submitNewContact = this.submitNewContact.bind(this);
        this.state = {
            data: []
        }
    }

    // Lifecyle method - runs after component did mount, does a get request to the JSON Data, Fake API... and puts it into the State.
    componentDidMount(){
        console.log('component did mount...')
        axios.get(`http://localhost:3000/data.json`)
        .then(res => {
            const data = res.data;
            this.setState({ data });
        })
    }

    // submit function getting the values from the inputted fields.
    submitNewContact(e){
        e.preventDefault();
        const formData = {};
        for(const field in this.refs){
            formData[field] = this.refs[field].value
        }
        console.log(formData);
        this.state.data.push(formData);
        this.refs.submitnewContact.reset();
        console.log(this.state);
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
                    
                    {/* // Loop through contacts from state ---- */}

                    {this.state.data.map((contact, i) => 
                        <div key={i} className="card">
                            <ul className="card-list">
                                <li>First Name: {contact.firstName}</li>
                                <li>Last Name: {contact.lastName} </li>
                                <li>Email:  {contact.email}</li>
                                <li>Hobbies:{contact.hobbies}</li>
                            </ul>
                        </div>
                    )}
                    
                
                </div>
                
                {/* // This could be a Add Contact Component Later -- */}
                <div style={AddContactStyles}>
                    <h2>Add Contact Component</h2>
                    <form onSubmit={this.submitNewContact} ref="submitnewContact">
                        <div className="form-input">
                            <label htmlFor="firstname">First Name:</label>
                            <input type="text" name="firstname" placeholder="First Name"
                            ref="firstName"/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="lastname">Last Name:</label>
                            <input type="text" name="lastname" placeholder="Last Name"
                            ref="lastName"/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" placeholder="Email"
                            ref="email"/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="hobbies">Hobbies:</label>
                            <input type="text" name="hobbies" placeholder="Hobbies..."
                            ref="hobbies"/>
                        </div>
                        <input type="submit" value="Add Contact"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactList;