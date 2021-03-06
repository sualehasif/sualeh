import React, { Component } from 'react';
import Slider from 'rc-slider';
import { Row, Col } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import 'rc-slider/assets/index.css';

const data = require('./portfolio.json');

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      slider: 2, // default slider index
    };
  }
  render() {
    return (
      <main>
        <section id="portfolio">
          <h2 className="section-heading">Portfolio section</h2>
          <center>
            <span style={{color: '#808080'}}>Last updated on November 30, 2020</span>
            <Slider
              defaultValue={2}
              min={1}
              max={5}
              marks={{
                1: 'Less things',
                2: 'Default',
                3: 'Lots of things',
                4: 'Publications',
                5: 'Coursework',
              }}
              dots
              onChange={v => this.setState({ slider: v })}
            />
          </center>
          <div className="portfolio-box">
            <Row>
              <Col xs={12} md={6} className="item">
                <PortfolioSection
                  data={this.state.data.education}
                  title="Education"
                  slider={this.state.slider}
                />
                {[1, 2, 3].includes(this.state.slider)  && 
                  <PortfolioSection
                      data={this.state.data.awards}
                      title="Awards"
                      slider={this.state.slider}
                  />
                }
                {[1, 2, 3].includes(this.state.slider)  && 
                  <PortfolioSection
                      data={this.state.data.leadership}
                      title="Leadership Roles"
                      slider={this.state.slider}
                  />
                }
                
                
                {[1, 2, 3].includes(this.state.slider)  && 
                  <PortfolioSection
                  data={this.state.data.events}
                  title="Things I've Been To"
                  slider={this.state.slider}
                  />
                }

                {[2, 3].includes(this.state.slider)  && 
                  <PortfolioSection
                  data={this.state.data.theater}
                  title="Theater Productions"
                  slider={this.state.slider}
                  />
                }
              </Col>
              <Col xs={12} md={6} className="item">
                {[1, 2, 3].includes(this.state.slider) && 
                  <PortfolioSection
                  data={this.state.data.experience}
                  title="Employment"
                  slider={this.state.slider}
                />
                }
                {[1, 2, 3, 5].includes(this.state.slider) && 
                  <PortfolioSection
                  data={this.state.data.teaching}
                  title="Teaching"
                  slider={this.state.slider}
                />
                }
                {[1, 2, 3, 4].includes(this.state.slider) && 
                  <PortfolioSection
                  data={this.state.data.publications}
                  title="Publications"
                  slider={this.state.slider}
                />
                }
              </Col>
            </Row>
          </div>
        </section>
      </main>
    );
  }
}

class PortfolioSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      title: props.title,
      slider: props.slider
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.slider !== prevProps.slider) {
      this.setState({
        slider: this.props.slider
      })
    }
  }

  render() {
    return (
      <div className="portfolio-section">
        <h1>{this.state.title}</h1>
        {
          this.state.data.map((item) => {
            let showItem = item.toggle.indexOf(this.state.slider) !== -1;
            const points = item.points.map((p) => {
              let showPoint = p.toggle.indexOf(this.state.slider) !== -1;
              if (p.bold === "1"){
                return (
                  <CSSTransition
                    classNames="points"
                    appear
                    in={showPoint}
                    unmountOnExit
                    mountOnEnter
                    timeout={{enter: 1500, exit: 300}}
                  >
                    <li className="points-bold" dangerouslySetInnerHTML={{ __html: p.content }} />
                  </CSSTransition>
                );
              } else {
                return (
                  <CSSTransition
                    classNames="points"
                    appear
                    in={showPoint}
                    unmountOnExit
                    mountOnEnter
                    timeout={{enter: 1500, exit: 300}}
                  >
                    <li normal='True' dangerouslySetInnerHTML={{ __html: p.content }} />
                  </CSSTransition>
                );
              }
            });
            return (
              <CSSTransition
                classNames="points"
                appear
                in={showItem}
                unmountOnExit
                mountOnEnter
                timeout={{enter: 1500, exit: 300}}
              >
                <div className="portfolio-item">
                  <div className="header">
                    <span className="title">{item.thing}</span>
                    <span className="divider-strong"> // </span>
                    <span className="desc">{item.description}</span>
                    <span className="divider-weak"> // </span>
                    <span className="date"> {item.date}</span>
                  </div>
                  <ul>
                    {points}
                  </ul>
                </div>
              </CSSTransition>
            );
          })
        }
      </div>
    )
  }
}

export default Portfolio;
