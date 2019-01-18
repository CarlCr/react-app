import React, {Component} from 'react';
import Header from '../../SharedComponents/Header/Index'
import GroupCards from '../../Components/Home/GroupCards'
import Slide from '../../Components/Home/Slide'
class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slide/>
                <GroupCards/>
            </div>
        );
    }
}

export default Home;