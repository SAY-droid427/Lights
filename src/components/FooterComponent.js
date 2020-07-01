import React, { Component } from 'react'

class FooterComponent extends Component {
    
    render() {
        const footerStyle={
            fixed:"bottom"
        }
        return (
            <div className="container-fluid" style={footerStyle}>
                Made by Sayani Mallick
            </div>
        )
    }
}

export default FooterComponent;
