import React from "react";
import "./style.css";
function Loader() {
  return (
    <div className="loaderr">
      <div className="content">
        <div className="planet">
          <div className="ring" />
          <div className="cover-ring" />
          <div className="spots">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <h1>loading</h1>
      </div>
    </div>
  );
}

export default Loader;
