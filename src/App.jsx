import React, { Component } from 'react';

// custom components
import utils from './utils';
import Console from './Console';

// components from antd
import { Typography, Layout } from 'antd';
const { Text } = Typography;
const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastLogin: new Date(),
    };
  }

  render() {
    const { lastLogin } = this.state;
    const login = utils.getLoginDate(lastLogin);
    return (
      <div className="scrollable-container" ref={node => {this.container = node;}}>
        <Layout>
          {/* move the header to the layout */}
          <Content style={{ padding: '0px 50px', minHeight: '1000px' }}>
            <Text type="secondary">
              Last Login:{login}
              <br />
              <br />
              <pre>
                ██╗  ██╗██╗       ██╗███╗   ███╗    ███╗   ███╗ █████╗ ███╗   ██╗██╗   ██╗ <br />
                ██║  ██║██║       ██║████╗ ████║    ████╗ ████║██╔══██╗████╗  ██║██║   ██║ <br />
                ███████║██║       ██║██╔████╔██║    ██╔████╔██║███████║██╔██╗ ██║██║   ██║ <br />
                ██╔══██║██║       ██║██║╚██╔╝██║    ██║╚██╔╝██║██╔══██║██║╚██╗██║██║   ██║ <br />
                ██║  ██║██║▄█╗    ██║██║ ╚═╝ ██║    ██║ ╚═╝ ██║██║  ██║██║ ╚████║╚██████╔╝██╗ <br />
                ╚═╝  ╚═╝╚═╝╚═╝    ╚═╝╚═╝     ╚═╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝ <br />
              </pre>
            </Text>
            <Console />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Manu ©2020</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;