import React from 'react';
import AddContact from '../AddContact';

class Home extends React.Component {


    render(){
        let contactsStyles = {
            border: '1px dashed green',
            backgroundColor: '#0a0a0a'
        }
        return (
            <div style={contactsStyles}>
                <h1>This is the Home/Contacts Component/Page</h1>
                <AddContact />
            </div>
            
        )
    }

}

export default Home;