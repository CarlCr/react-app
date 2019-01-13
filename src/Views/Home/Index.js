import React, {Component} from 'react';
import Header from '../../SharedComponents/Header/Index'
import GroupCards from '../../Components/Home/GroupCards'
class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <GroupCards/>
            </div>
        );
    }
}

export default Home;