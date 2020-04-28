import React from 'react';

import { Row, Col, Card, Avatar } from 'antd';
import { GithubOutlined, MoreOutlined } from '@ant-design/icons';
const { Meta } = Card;

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'Stock-Tracker',
          image: '',
          description: 'Backend for an app that charts stock price data',
          keywords: 'Databases, API, Caching, AWS, Stress-tesing, performance, querying',
          repo: '',
          link: ''
        },
        {
          name: 'RSVP-Up',
          image: '',
          description: 'Web Service to allow clients to rsvp to an event.',
          keywords: 'API, REST, microservice, responsive, proxy',
          repo: '',
          link: '',
        },
        {
          name: 'Tweet-ku',
          image: '',
          description: 'Tweet-powered AI haiku generator.',
          keywords: 'API, Twitter, IBM, NLP',
          repo: '',
          link: 'http://tweet-ku.herokuapp.com',
        }
      ]
    }
  }

  render() {
    const { projects } = this.state;
    return(
      <Row justify="space-around" align="middle">
        {/* For each project we want to render a column */}
        {projects.map( project => {
          return (
            <Col span={8}>
              <Card
                title={project.name}
                style={{ width: 300}}
                size="small"
                // cover={
                //   <img
                //     alt="example"
                //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                //   />
                // }
                extra={<a href={project.repo}>Code on <GithubOutlined key="github" /></a>}
              >
                <Meta
                  description={project.description}
                />
              </Card>
            </Col>
          )
        })}
      </Row>
    );
  }
}

export default Portfolio;
