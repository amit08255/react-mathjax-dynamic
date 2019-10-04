import React from 'react';
import './App.css';
const MathJaxLoader = require("./util/MathJax");

class App extends React.PureComponent{

  constructor(props){
    super(props);
    const mathjaxLoader = new MathJaxLoader();
    this.state = {
        loaded: false,
        mathjax: mathjaxLoader,
        initialValue: 1
    };
  }

  onFirstMathJax(){
      this.setState({
        loaded: true
      });
  }

  componentDidMount() {
      this.state.mathjax.initiateMathJax(this.onFirstMathJax.bind(this));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      this.state.mathjax.update();
  }

  onIncrementClick(){
    let initialValue = this.state.initialValue;
    this.setState({
      initialValue: initialValue + 1
    })
  }

  render(){

    return(

    <div className="container">
      <span>{"$" + this.state.initialValue + "^2$"}</span>
      <button onClick={this.onIncrementClick.bind(this)}>Increment</button>
    </div>

    );

  }


}

export default App;