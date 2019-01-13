import React, {Component} from 'react'
import NavBar from './Navbar'

export default class Header extends Component {

    render(){
        const logo = 'Home';
        return(
            <div>
                <NavBar logo={logo}/>
            </div>
        );
    }
}