import React from 'react';
import "./style.css";

function Portfolio(props) {
  return (
    <div className="portfolio">{props.children}</div>
  );
}

export default Portfolio;