import React from 'react';
import Prompt from './Prompt';
import Portfolio from './Portfolio';

import { Typography } from 'antd';
const { Text } = Typography;

class Console extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: [],
      command: 'cat about.txt'
    }
    this.loadText = this.loadText.bind(this);
    this.showText = this.showText.bind(this);
  }

  loadText() {
    this.setState({ text: ['I love data and complex problems.', 'As a software engineer with a passion for the backend and databases, I believe a lot of the solutions to our most pressing problems are in the intersection between technology, data and community.', 'Want to see some of my work? Click on one of my projecst below.']})
  }

  showText() {
    const { text, command } = this.state;
    return (
      <div>
        <Text type="secondary">inManu@Bytes</Text>:<Text type="warning">~</Text><Text type="danger">$</Text> {command}
        <br />
        <br />
        {text.map(sentence => {
          return (
            <p>
              {sentence}
            </p>
          )
        })}
        <br />
        {/* Links to portfolio */}
        <Portfolio />
        <br />
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
