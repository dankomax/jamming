import React from 'react';
import './Track.css';


class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    //console.log(this.props.track);
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    //console.log('removing');
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    let button;
    if (this.props.isRemoval) {
      button = <button className="Track-action" onClick={this.removeTrack}>-</button>;
    } else {
      button = <button className="Track-action" onClick={this.addTrack} >+</button>;
    }
    return button;
  }

  
  render() {
    return (

      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }  
}

export default Track;
