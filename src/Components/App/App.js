import React from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";
import Footer from "../Footer/Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: "XYZ",
      playlistTracks: [
        { name: "qqqqq", artist: "jjjjj", album: "kkkkkk", id: 5 },
        { name: "aaaaaa", artist: "hhhhhh", album: "rrrrrrr", id: 6 },
        { name: "sssss", artist: "ggggg", album: "eeeeeeee", id: 7 },
      ],

      searchResults: [
        { name: "name1", artist: "artist1", album: "album1", id: 1 },
        { name: "name2", artist: "artist2", album: "album2", id: 2 },
        { name: "name3", artist: "artist3", album: "album3", id: 3 },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div class="App">
          {/* Add a SearchBar component */}
          <SearchBar />
          <div className="App-playlist">
            {/* Add a SearchResults component */}
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            {/* Add a Playlist component */}
            <Playlist
              onNameChange={this.updatePlaylistName}
              onRemove={this.removeTrack}
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
