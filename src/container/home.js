import React, { Component } from 'react';
import HomeCard from '../UI/HomeCard';

export default class Home extends Component {
    homeCardReleases = {
        title: 'Releases',
        text: 'Manege Release',
        img: 'https://static.noticiasaominuto.com/stockimages/gallery/1920/naom_5a689afbb0e6e.jpg',
        action: () => alert('Release clicked')

    }
    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manege Backlog',
        img: 'https://static.noticiasaominuto.com/stockimages/gallery/1920/naom_5a684fed56105.jpg',
        action: () => alert('Backlog clicked')
    }
    homeCardSprints = {
        title: 'Sprints',
        text: 'Manege Sprints',
        img: 'https://static.noticiasaominuto.com/stockimages/gallery/1920/naom_5a684feb971b3.jpg',
        action: () => alert('Sprints clicked')
    }
    render() {
        return ( <
            div className = "container text-center" >
            <
            div className = "row" >
            <
            HomeCard title = { this.homeCardReleases.title }
            text = { this.homeCardReleases.text }
            img = { this.homeCardReleases.img }
            action = { this.homeCardReleases.action }
            /> <
            HomeCard {...this.homeCardBacklog }
            /> <
            HomeCard {...this.homeCardSprints }
            /> < /
            div > <
            /div>
        );
    }
}