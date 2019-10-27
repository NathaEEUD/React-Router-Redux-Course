import React, { useState, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { getVideoSource } from "../redux/actions";
import { Redirect } from "react-router-dom";
import "../assets/styles/components/Player.scss";

const Player = props => {
  const { id } = props.match.params;
  const [loading, changeLoading] = useState(true);
  const hasPlaying = Object.keys(props.playing).length > 0;

  useLayoutEffect(() => {
    props.getVideoSource(id);
    changeLoading(false);
  }, []);

  return loading ? (
    <h1>Cargando...</h1>
  ) : hasPlaying ? (
    <div className="player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to="/404/" />
  );
};

const mapStateToProps = state => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
