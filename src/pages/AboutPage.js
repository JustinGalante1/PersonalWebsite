import React, { Component } from 'react'
import Content from '../components/Content';

import Hero from '../components/Hero';

export class AboutPage extends Component {

    render() {
        return (
            <div>
                <Hero title={this.props.title}></Hero>

                <Content>
                    <p>
                        Yuh aye yuh aye yuh aye
                    </p>
                </Content>
            </div>
        )
    }
}

export default AboutPage
