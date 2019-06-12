import React, { Component } from 'react';
import axios from 'axios';

const trackAPI = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=`;
const API_Key = process.env.REACT_APP_MUSIC_API;

export default class Lyrics extends Component {

    state = {
      track: {},
      lyrics: {}
    };

    async componentDidMount() {
        console.log(this.props.match.params.id);
        try {
            const res = await axios.get(`${ trackAPI }${ this.props.match.params.id }&apikey=${ API_Key }`);
            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    render() {

        // console.log(this.props);

        return (
            <div>
                <h2>Lyrics</h2>

            </div>
        )
    }
}