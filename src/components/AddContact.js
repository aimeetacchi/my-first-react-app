import React from 'react';

class AddContact extends React.Component {
    constructor(props){
        super()
        this.state = {

        }
    }

    

    render(){
        // Inline Styles
        let AddContactStyles = {
            border: '1px dashed red'
        };

        return (
            <div style={AddContactStyles}>
                <h2>Update Contact Component</h2>
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
        )
    }
}

export default AddContact;