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
                    <label>Update FirstName:</label>
                    <input/>
                </form>
            </div>
        )
    }
}

export default AddContact;