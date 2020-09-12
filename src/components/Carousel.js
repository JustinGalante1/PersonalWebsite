import React, { Component } from 'react'

import bugpic from '../assets/images/bugpic.png';
import extraterrestrialpic from '../assets/images/extraterrestrialpic.png';
import gradetrackrpic from '../assets/images/gradetrackrpic.png';

//components
import Card from '../components/Card';

//bootstrap
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

class Carousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GradeTrackr',
                    subTitle: 'One Stop Shop for Grading Needs',
                    imgSrc: gradetrackrpic,
                    link: 'https://www.gradetrackr.com/index',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Bug, Not a Feature',
                    subTitle: 'My First Game!',
                    imgSrc: bugpic,
                    link: 'https://justingalante1.itch.io/bug-not-a-feature',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Extraterrestrial',
                    subTitle: 'Template E-commerce Website',
                    imgSrc: extraterrestrialpic,
                    link: 'https://extraterrestrial.herokuapp.com/',
                    selected: false
                },

            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item=>{
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel
