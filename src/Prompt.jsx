import React from 'react';
import Typical from 'react-typical';
import { Typography } from 'antd';
const { Text } = Typography;

class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidden: false })
    }, this.props.waitBeforeShow);
  }

  render() {
    const { hidden } = this.state;
    const { command } = this.props;
    return hidden ? null : (
      <div>
        <Text type="secondary">inManu@Bytes</Text>:<Text type="warning">~</Text><Text type="danger">$</Text> <Typical steps={[command]} wrapper="span" />
      </div>
    );
  }
}

export default Prompt;