import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Moment from 'react-moment';
import Loading from "../layout/loading";

const lyricsAPI = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=`;
const trackAPI = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=`;
const API_Key = process.env.REACT_APP_MUSIC_API;

export default class Lyrics extends Component {

    state = {
      track: {},
      lyrics: {}
    };

    async componentDidMount() {
        console.log(this.props.match.params.id);
        try {
            const res = await axios.get(`${ lyricsAPI }${ this.props.match.params.id }&apikey=${ API_Key }`);
            console.log(res.data);
            this.setState({ lyrics: res.data.message.body.lyrics});

            const res2 = await axios.get(`${ trackAPI }${ this.props.match.params.id }&apikey=${ API_Key }`);
            console.log(res2.data);
            this.setState({ track: res2.data.message.body.track});
        } catch (e) {
            console.log(e);
        }
    }

    render() {

        const { track, lyrics } = this.state;

        if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
            return <Loading />
        } else {
            return (
                <>
                    <Link to="/" className="btn btn-dark btn-sm my-3">back Home</Link>
                    <div className="card">
                        <h4 className="p-3">You're viewing the lyrics for</h4>
                        <div className="card-header">
                            <h5>{ track.track_name }</h5> <p>by</p> <h5>{ track.artist_name }</h5>
                        </div>
                        <div className="card-body">
                            { lyrics.explicit === 0 ? (null) : (<span className="text-danger">Warning: Explicit lyrics!</span>) }
                            <p className="card-text">
                                { lyrics.lyrics_body }
                            </p>
                        </div>
                    </div>

                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Album</strong>: { track.album_name }
                        </li>
                        <li className="list-group-item">
                            <strong>Release date</strong>: <Moment format="MMMM DD, YYYY">{ track.updated_time }</Moment>
                        </li>
                        <li className="list-group-item">
                            <strong>Album ID</strong>: { track.album_id }
                        </li>
                        <li className="list-group-item">
                        <strong>Track ID</strong>: { track.track_id }
                        </li>
                        <li className="list-group-item">
                            <strong>Artist ID</strong>: { track.artist_id }
                        </li>
                        <li className="list-group-item">
                            <strong>Common track ID</strong>: { track.commontrack_id }
                        </li>
                    </ul>




                </>
            )
        }
    }
}