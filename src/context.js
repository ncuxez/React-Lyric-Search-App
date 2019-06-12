import React, { Component } from 'react'

const Context = React.createContext();

class Provider extends Component {

    state = {
        heading: 'Top Tracks',
        trackList: [
            {
                track: { track_name: 'fuck-yeah' }
            },
            {
                track: { track_name: 'fuck-yeah_2' }
            },
            {
                track: { track_name: 'fuck-yeah_3' }
            }
        ],

    };

    componentDidMount() {

    }

    render() {
        return (
            <Context.Provider value={ this.state }>

                { this.props.children }

            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer;