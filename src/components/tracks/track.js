import React from 'react';
import { Link } from "react-router-dom";

export default function Track({ track }) {

    return (
        <div className="col-md-6">
            <div className="card shadow-sm mb-3">
                <div className="card-body">
                    <h5>{ track.artist_name }</h5>
                    <p className="card-text">
                        <strong><i className="fas fa-play"></i> Track</strong>: { track.track_name } <br />
                        <strong><i className="fas fa-compact-disc"></i> Album</strong>: { track.album_name }
                    </p>
                    <Link to={ `lyrics/track/${track.track_id}` } target="_blank" className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"></i> View lyrics
                    </Link>
                </div>
            </div>
        </div>
    )
}
