import React from 'react';
import Tracks from '../tracks/tracks';
import Search from "../tracks/search";

function Home() {

    return (
        <React.Fragment>
            <Search />
            <Tracks />
        </React.Fragment>
    );
}

export default Home;
