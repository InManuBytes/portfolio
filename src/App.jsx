import React, { Component } from 'react';

// custom components

// components from antd
import { Input, Pagination, Layout, Row, Col, Divider, Empty, Affix, Statistic, Button } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="scrollable-container" ref={node => {this.container = node;}}>
        <Layout>
          {/* move the header to the layout */}
          <Header style={{ color: 'white', position: 'fixed', zIndex: 1, width: '100%' }}>
            Portfolio
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            Take a look at my projects on GitHub
          </Content>
          <Footer style={{ textAlign: 'center' }}>Manu ©2020</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;