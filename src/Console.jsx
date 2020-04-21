import React from 'react';
import Typical from 'react-typical';
import Prompt from './Prompt';

class Console extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      command: 'cat about.txt'
    }
    this.loadText = this.loadText.bind(this);
    this.showText = this.showText.bind(this);
  }

  loadText() {
    this.setState({ text: 'Hi! I\'m Manu. I love data and complex problems. \n Wamt to see some of my work? Click on one of my projecst below.' })
  }

  showText() {
    const { text, command } = this.state;
    return (
      <div>
        inManu@Bytes: $ {command}
        <br />
        {text}
        <Prompt command={''} waitBeforeShow={1000} />
      </div>
    )
  }

  componentDidMount() {
    setTimeout(this.loadText, 2*1000)
  }

  render() {
    const { text, command } = this.state;
    return (
      <div>
        { text.length > 0 ?
          this.showText() :
          <Prompt command={command} waitBeforeShow={0} />
        }
      </div>
    );
  }
}

export default Console;
