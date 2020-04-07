import React, { Component } from 'react';
import './App.css';
import Timer from './Component'



class App extends Component{
  
  render(){
  return (
    <div className="App">
      <Timer 
      time={30} 
      step={1} 
      autostart={true}
      onTick={(time) => console.log("Осталось времени: " + time)} 
      onTimeEnd={() => console.log("Время вышло!")}
      onTimeStart={(timeLeft) => console.log("Таймер запущен!")}
      onTimePause={(timeLeft) => console.log("Таймер на паузе!")}
      />
    </div>
  );
  }
}

export default App;
