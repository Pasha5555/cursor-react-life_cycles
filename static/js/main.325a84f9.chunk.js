(this["webpackJsonpcursor-react-life_cycles"]=this["webpackJsonpcursor-react-life_cycles"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports=n(15)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),s=(n(12),n(1)),i=n(2),u=n(3),l=n(4),p=(n(13),n(14),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={count:t.props.time,start:!0,autostart:t.props.autostart,width:100},t.Start=function(){t.setState({start:!0}),t.props.onTimeStart()},t.DecrementTime=function(){t.setState({count:t.state.count-t.props.step})},t.Pause=function(){t.setState({start:!1}),t.props.onTimePause()},t.changeWidth=function(){t.setState({width:t.state.width-t.props.step*(100/t.props.time)})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;!0===this.state.autostart&&(this.Start(),setInterval((function(){!0===t.state.start&&(t.state.count>=0?(t.DecrementTime(),t.changeWidth(),t.state.count>=0&&t.props.onTick(t.state.count)):t.Pause()),0===t.state.count&&t.props.onTimeEnd(),t.state.count<0&&(t.Start(),t.setState({count:t.props.time}),t.setState({width:100}))}),1e3*this.props.step))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,o.a.createElement("div",null,this.state.count," \u0441\u0435\u043a. ")),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.Start},"Start"),o.a.createElement("button",{onClick:this.Pause},"Pause")),o.a.createElement("br",null),o.a.createElement("div",{className:"Width",style:{width:this.state.width+"%"}},"."))}}]),n}(a.Component)),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,{time:30,step:1,autostart:!0,onTick:function(t){return console.log("\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: "+t)},onTimeEnd:function(){return console.log("\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0448\u043b\u043e!")},onTimeStart:function(t){return console.log("\u0422\u0430\u0439\u043c\u0435\u0440 \u0437\u0430\u043f\u0443\u0449\u0435\u043d!")},onTimePause:function(t){return console.log("\u0422\u0430\u0439\u043c\u0435\u0440 \u043d\u0430 \u043f\u0430\u0443\u0437\u0435!")}}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.325a84f9.chunk.js.map