// PAGE --- BASICALLY HOME PAGE ==

import React from 'react';
import ContactList from '../ContactList';

class Home extends React.Component {



    render(){
        let contactsStyles = {
            border: '1px dashed green',
            backgroundColor: '#0a0a0a'
        }
        return (
            <div style={contactsStyles}>
                <h1>This is the Home/Contacts Component/Page</h1>
                <ContactList />
            </div>
            
        )
    }

}

export default Home;