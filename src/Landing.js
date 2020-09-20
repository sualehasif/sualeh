import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Github from 'react-icons/lib/fa/github';
import Instagram from 'react-icons/lib/fa/instagram';
import Twitter from 'react-icons/lib/fa/twitter';
import Envelope from 'react-icons/lib/fa/envelope';

import cupcake1 from './img/cupcake.jpg';
import cupcake2 from './img/cupcake2.jpg';

import Signature from './Signature';

const cupcakes = [cupcake1, cupcake2];

const Landing = () => (
  <main>
    <section className="panels" id="home">
      <div className="jumbotron">
        <h2 className="section-heading">🧁Hi! I like Cupcakes</h2>
        <Quote />
      </div>
    </section>
    <section id="about">
      <Row>
        <Col xs={12} md={5} style={{ paddingTop: 50 }}>
          <img src={cupcakes[Math.floor(Math.random() * cupcakes.length)]} className="img-responsive img-circle" alt="carol at hackathon" />
        </Col>
        <Col xs={12} md={6} style={{ paddingLeft: 50, paddingRight: 50 }}>
          <h2 className="section-heading">ABOUT ME</h2>
          <hr />
          <p style={{ fontSize: 14}}>
            🧁 this site randomizes many elements per load! I did this because choosing things is hard.
          </p>
          <p>
            My name is Sualeh.
          </p>
          <p>
            I am a junior at MIT, interested in number theory, computer science and theater. 
          </p>
        </Col>
        <Col xs={12} md={1} style={{ paddingTop: 50, fontSize: 40 }}>
          <a href="https://github.com/sualehasif" target="_blank" rel="noredirect no referrer"><Github /></a>
          <a href="{{🧁https://twitter.com/username}}" target="_blank" rel="noredirect no referrer"><Twitter /></a>
          <a href="{{🧁https://instagram.com/username}}/" target="_blank" rel="noredirect no referrer"><Instagram /></a>
          <a href="mailto:sualeh@mit.edu" target="_blank" rel="nnoredirect no referrer"><Envelope /></a>
        </Col>
      </Row>
    </section>
    <Signature />
  </main>
);

const Quote = () => {
  const quotes = [
    {
      quote: 'I love 🧁🧁🧁🧁',
      author: 'yeet',
    },
    {
      quote: 'mmmmmm 🧁',
      author: 'yuuuuuum',
    },
    {
      quote: '🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁😮',
      author: 'someone eating a delicious cupcake',
    },
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="quote">
      <p className="quote-content">
        &#34;{quote.quote}&#34;
      </p>
        <i>{quote.author}</i>
    </div>
  );
};

export default Landing;
