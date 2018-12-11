import React from 'react';
import {Link } from 'react-router-dom';


class Header extends React.Component {

    render(){
        return (
                <header>
                    <h1>My React App</h1>
                    <nav>
                        <ul>
                            <li> <Link to="/"> Contacts </Link></li>
                            <li> <Link to="/about"> About </Link></li>
                        </ul>
                    </nav>
                </header>
            )
    }
}

export default Header;