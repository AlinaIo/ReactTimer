var React = require('react');
var Nav = require('Nav');
var Timer = require('Timer');
var Clock = require('Clock');
var Controls = require('Controls');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav/>
          <Timer/>
          <Clock/>
          <Controls/>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
