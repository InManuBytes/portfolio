import React from 'react';
import Typical from 'react-typical';

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
        inManu@bytes: $ <Typical steps={[command]} wrapper="span" />
      </div>
    );
  }
}

export default Prompt;