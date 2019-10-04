## Introduction

This is simple ReactJS project which shows how to dynamically load MathJax and update DOM when data is updated without using any external dependency.
This technique can be used when you have several components in same page which loads latex and you don't want to load MathJax library for each component separately.

## Installation

To install dependencies of this project, use below command -

```sh
npm install
```

## Example Usage

```javascript
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
```

## Important Points

* Initialize MathJax loader in your component constructor.
* Load MathJax script inside componentDidMount.
* Call MathJax update inside componentDidUpdate.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Amit Kumar - [@amit08255](https://twitter.com/amit08255) - amitcute3@gmail.com

Project Link: [https://github.com/amit08255/react-mathjax-dynamic](https://github.com/amit08255/react-mathjax-dynamic)


