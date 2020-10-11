import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Github from 'react-icons/lib/fa/github';
// import { ImPen } from 'react-icons/im';
import Envelope from 'react-icons/lib/fa/envelope';

import cupcake1 from './img/cupcake.jpg';
import cupcake2 from './img/cupcake2.jpg';

import Signature from './Signature';

const cupcakes = [cupcake1, cupcake2];

const Landing = () => (
  <main>
    <section className="panels" id="home">
      <div className="jumbotron">
        <h2 className="section-heading">Hi!, I'm Sualeh</h2>
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
          <p>
            Hello, hello hello! I'm Sualeh. I am a junior at MIT studying computer science, mathematics and theater. I am broadly interested in computational number theory, machine learning, performance engineering, arithmetic geometry and algorithms.
          </p>
          <p>
            I love theater and performance art. 
            In my free time, I 
          </p>

          <p style={{ fontSize: 14}}>
            This site randomizes many elements per load! Thanks to Carol Chen for the theme.
          </p>
        </Col>
        <Col xs={12} md={1} style={{ paddingTop: 50, fontSize: 40 }}>
          <a href="https://github.com/sualehasif" target="_blank" rel="noredirect no referrer"><Github /></a>
          {/* arxiv */}
          {/* blog */}
          {/* <a href="/blog" target="_blank" rel="noredirect no referrer"><ImPen /></a> */}
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
