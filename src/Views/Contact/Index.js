import React, {Component} from 'react';
import Header from '../../SharedComponents/Header/Index'
import Form from '../../Components/Contact/Form'
class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Form/>
            </div>
        );
    }
}

export default Contact;