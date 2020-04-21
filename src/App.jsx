import React, { Component } from 'react';

// custom components
import utils from './utils';
import Console from './Console';

// components from antd
import { Input, Pagination, Layout, Row, Col, Divider, Empty, Affix, Statistic, Button } from 'antd';
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
          <Header>
            Last Login:{login}
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Console />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Manu ©2020</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;