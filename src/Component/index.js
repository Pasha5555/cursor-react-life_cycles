import React, { Component } from 'react';
import './timer.css'

export default class Timer extends Component{
    
    state = {
        count: this.props.time,
        start: true,
        autostart: this.props.autostart,
        width: 100,
    }

    componentDidMount() {
        
        if(this.state.autostart===true){
            this.Start();
            setInterval(() => {
                if(this.state.start===true){
                    if(this.state.count>=0){
                        this.DecrementTime();
                        this.changeWidth();
                        if(this.state.count>=0){
                            this.props.onTick(this.state.count);
                        }
                    } else {
                        this.Pause();
                    }
                } 
                if(this.state.count===0){
                    this.props.onTimeEnd();
                } 
                if(this.state.count<0){
                    this.Start();
                    this.setState({
                        count: this.props.time,
                    })
                    this.setState({
                        width: 100,
                    })
                }
            }, this.props.step*1000); 
        }
    }


    Start = () =>{
        this.setState({
            start: true,
        });
        this.props.onTimeStart()
    }

    DecrementTime = () =>{
        this.setState({
            
            count: this.state.count - this.props.step
        })
    }

    Pause = () =>{
        this.setState({
            start: false,
        });
        this.props.onTimePause()
    }

    changeWidth = () =>{
        this.setState({
            width: this.state.width - this.props.step*(100/this.props.time)
        })
    }


    render(){
        return(
            <div>
                <h2>
                    <div>{this.state.count} сек. </div>
                </h2>
                <div>
                    <button onClick={this.Start}>Start</button>
                    <button onClick={this.Pause}>Pause</button>
                </div>
                <br></br>
                <div className="Width" style={{ width: this.state.width + '%'}}>.</div>
            </div>
        );
    }
}