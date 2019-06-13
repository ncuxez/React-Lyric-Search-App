import React, { Component } from 'react';
import { Consumer } from '../../context';
import Loading from '../layout/loading';
import Track from './track';

export default class Tracks extends Component {


    render() {
        return (
            <Consumer>
                { value => {
                    const { trackList, heading } = value;
                    if(trackList === undefined || trackList.length == 0) {
                        return <Loading />
                    } else {
                        return(
                            <>
                                <h2 className="text-center my-3">{ heading }</h2>
                                <div className="row">
                                    { trackList.map(track => {
                                       return <Track key={ track.track.track_id } track={ track.track } />
                                    }) }
                                </div>
                            </>
                        )
                    }

                } }

            </Consumer>
        )
    }
}