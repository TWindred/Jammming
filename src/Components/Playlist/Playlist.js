import React from 'react';

export class Playlist extends React.Component {
    render() {
        return(
            <div className="Playlist">
                <input defaultValue={'New Playlist'} />
                    {/* <TrackList /> */}
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}