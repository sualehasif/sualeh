import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Github from 'react-icons/lib/fa/github';
// import { ImPen } from 'react-icons/im';
// TODO: Fix the icon problems
import Envelope from 'react-icons/lib/fa/envelope';

import sualeh_1 from './img/sualeh_1.jpg';
import sualeh_2 from './img/sualeh_2.jpg';
import sualeh_3 from './img/sualeh_3.jpg';

import Signature from './Signature';

const pics = [sualeh_2, sualeh_3];
// const pics = [random];

const Landing = () => (
  <main>
    <section className="panels" id="home">
      <div className="jumbotron">
        <h2 className="section-heading">Hi! I'm Sualeh</h2>
        <Quote />
      </div>
    </section>
    <section id="about">
      <Row>
        <Col xs={12} md={5} style={{ paddingTop: 50 }}>
          <img src={pics[Math.floor(Math.random() * pics.length)]} className="img-responsive img-circle" alt="Sualeh at MIT" />
        </Col>
        <Col xs={12} md={6} style={{ paddingLeft: 50, paddingRight: 50 }}>
          <h2 className="section-heading">ABOUT ME</h2>
          <hr />
          <p>
            Hello, hello hello! I'm Sualeh. 
            I am a junior at MIT studying computer science, mathematics and theater. 
            I am broadly interested in computational number theory, machine learning, 
            performance engineering, arithmetic geometry and algorithms.
          </p>
          <p>
            I love theater and performance art. I am passionate about many vaguely 
            artisitc things and particularly enjoy shakesepare, lots of classical 
            literature, and English and Urdu poetry.
          </p>

          <p style={{ fontSize: 12}}>
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

var test_empty = (cstr) => {
  if (cstr !== ""){
    return(
      <br/>
    )
  }
}

const Quote = () => {
  const quotes = [
    {
      line1: '"Life’s but a walking shadow, a poor player',
      line2: 'That struts and frets his hour upon the stage,',
      line3: 'And then is heard no more. It is a tale',
      line4: 'Told by an idiot, full of sound and fury,', 
      line5: 'Signifying nothing."',
      author: 'Macbeth',
    },
    {
      line1: '“I wish it need not have happened in my time,” said Frodo.',
      line2: 'So do I,” said Gandalf, “and so do all who live to see such times.', 
      line3: 'But that is not for them to decide. ',
      line4: 'All we have to decide is what to do ',
      line5: 'with the time that is given us.”',
      author: 'Lord of the Rings',
    },
    {
      line1: '"I am a man of fortune and I must seek my fortune"',
      line2: '',
      line3: '',
      line4: '', 
      line5: '',
      author: 'Henry Avery',
    },
    {
      line1: '"Speak becuase your lips are free"',
      line2: '(Bol ke lab azad hain tere)',
      line3: '',
      line4: '', 
      line5: '',
      author: 'Faiz Ahmed Faiz',
    },

  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="quote">
      <p className="quote-content">
        {quote.line1}{test_empty(quote.line1)}
        {quote.line2}{test_empty(quote.line2)}
        {quote.line3}{test_empty(quote.line3)}
        {quote.line4}{test_empty(quote.line4)}
        {quote.line5}
      </p>
        <i>{quote.author}</i>
    </div>
  );
};

export default Landing;
