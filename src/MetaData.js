import React, { Component } from 'react'
import portPic from './images/react-port-pic.png'

export default class MetaData extends Component {
    render() {
        return (
            <div className="wrapper">
            <MetaTags>
              <title>Page 1</title>
              <meta name="description" content="Some description." />
              <meta property="og:title" content="MyApp" />
              <meta property="og:image" content={portPic} />
            </MetaTags>
            <div class="content"> Some Content </div>
          </div>
        )
    }
}
