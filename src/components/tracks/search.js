import React, { Component } from 'react';
import axios from 'axios';
import {Consumer} from "../../context";

const corsURL = `https://cors-anywhere.herokuapp.com/`;
const API_Key = process.env.REACT_APP_MUSIC_API;

export default class Search extends Component {

    state = {
      trackTitle: '',
    };

    onSearchInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        try {
            let res = await axios.get(`${ corsURL }https://api.musixmatch.com/ws/1.1/track.search?q_track=${ this.state.trackTitle }&page=1&page_size=10&f_has_lyrics=1&apikey=${ API_Key }`);
            console.log(res.data);
            dispatch({ type: 'SEARCH_TRACKS', payload: res.data.message.body.track_list });
        } catch (e) {
            console.log(e)
        }
        this.setState({ trackTitle: '' });
    };

    render() {

        return (
            <Consumer>
               {
                   value => {
                       const { dispatch } = value;
                       return (
                           <div className="card card-body mb-3 p-4">
                               <h1 className="text-center display-4">
                                   <i className="fas fa-music"></i> Search for a Song
                               </h1>
                               <p className="lead text-center">Get the lyrics for any song!</p>
                               <form onSubmit={ this.onSubmit.bind(this, dispatch) }>
                                   <div className="form-group">
                                   <input
                                       name="trackTitle"
                                       value={ this.state.trackTitle }
                                       onChange={ this.onSearchInput }
                                       placeholder="Song title"
                                       className="form-control form-control-lg"/>
                                   </div>
                                   <input type="submit" value="Search" className="btn btn-primary btn-lg btn-block"/>
                               </form>

                           </div>
                       )
                   }
               }
            </Consumer>
        )
    }
}