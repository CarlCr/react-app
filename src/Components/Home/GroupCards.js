import React, { Component } from 'react';
import Cards from './Cards';
import {img1,img2,img3} from '../../SharedComponents/Images'

export default class GroupCards extends Component {
    homeCardPHP = {
        title: 'PHP',
        text: 'Manege PHP',
        img: img1,
        action: () => alert('PHP clicked')

    };
    homeCardPython = {
        title: 'Python',
        text: 'Manege Python',
        img: img2,
        action: () => alert('Python clicked')
    };
    homeCardNode= {
        title: 'Node.Js',
        text: 'Manege Node.Js',
        img: img3,
        action: () => alert('Node.Js clicked')
    };
    render() {
        return (
            <div className="container text-center" >
                <div className ="row">
                    <Cards title = {this.homeCardPHP.title}
                           text = {this.homeCardPHP.text}
                           img = {this.homeCardPHP.img }
                           action = {this.homeCardPHP.action}
                    />
                    <Cards {...this.homeCardPython }/>
                    <Cards {...this.homeCardNode }/>
                </div>
           </div>
        );
    }
}