import React, { Component } from 'react'
import axios from 'axios';

const musicAPI = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1`;
const API_Key = process.env.REACT_APP_MUSIC_API;

const Context = React.createContext();
const Consumer = Context.Consumer;

class Provider extends Component {

    state = {
        heading: 'Top Tracks',
        trackList: [
        ],

    };

    async componentDidMount() {
        try {
            let res = await axios.get(`${ musicAPI }&apikey=${ API_Key }`);
            // console.log(res.data);
            this.setState({ trackList: res.data.message.body.track_list });
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <Context.Provider value={ this.state }>

                { this.props.children }

            </Context.Provider>
        )
    }
}


export { Provider, Context, Consumer };
