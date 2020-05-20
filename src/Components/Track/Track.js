import React from "react";
import "./Track.css";

import PlayPause from "./Media/playPause.png";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      audio: new Audio(),
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button class="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button class="Track-action" onClick={this.addTrack}>
          +
        </button>
      );
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  playSong() {
    console.log("play");
    this.setState({ playing: true });
    this.state.audio.src = this.props.track.preview;
    this.state.audio.play();
  }

  pauseSong() {
    console.log("pause");
    this.setState({ playing: false });
    this.state.audio.pause();
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album} |{" "}
          </p>
        </div>
        <img
          className="playpause"
          src={PlayPause}
          onClick={this.state.playing ? this.pauseSong : this.playSong}
        />
        <button class="Track-action">{this.renderAction()}</button>
      </div>
    );
  }
}

export default Track;
