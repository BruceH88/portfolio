import React from 'react';
// import './Portfolio.css';


const Portfolio = (props) => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div classname="card">
              <img className="w-75" src="images/technics-q-c-640-480-1.jpg" alt="Word Guess" />
              <div className="card-body">
                <h3 className="card-title">Word Guess</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div classname="card">
              <img className="w-75" src="images/technics-q-c-640-480-2.jpg" alt="RPG Game" />
              <div className="card-body">
                <h3 className="card-title">RPG Game</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div classname="card">
              <img className="w-75" src="images/technics-q-c-640-480-5.jpg" alt="Trivia Game" />
              <div className="card-body">
                <h3 className="card-title">Trivia Game</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div classname="card">
              <img className="w-75" src="images/technics-q-c-640-480-7.jpg" alt="Rutgers Info Widget" />
              <div className="card-body">
                <h3 className="card-title">Rutgers Info Widget</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div classname="card">
              <img className="w-75" src="images/technics-q-c-640-480-9.jpg" alt="Rock Paper Scissors" />
              <div className="card-body">
                <h3 className="card-title">Rock Paper Scissors</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div classname="card">
              <div className="card-body">
                <h3 className="card-title"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;