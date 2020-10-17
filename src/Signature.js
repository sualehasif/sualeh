import React from 'react';
import Typist from 'react-typist';

class Signature extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      typing: true
    }
  }
done = () => {
  this.setState({ typing: false }, () => {
    this.setState({ typing: true })
  });
}

  render() {
    return (
      <div>
        <div className="triangle" />
        {this.state.typing
            ? <Typist className="signature" avgTypingDelay={40} onTypingDone={this.done}>
              <span>Sualeh Asif</span>
              <Typist.Backspace count={11} delay={1000} />
              <span>Math (mostly Number Theory)</span>
              <Typist.Backspace count={"Math (mostly Number Theory)".length} delay={200} />
              <span>Theater and Art Enthusiast</span>
              <Typist.Backspace count={"Theater and Art enthusiast".length} delay={200} />
              <span>Theoretical Computer Science</span>
              <Typist.Backspace count={"Theoretical Computer Science".length} delay={200} />
              <span>Software Engineering</span>
              <Typist.Backspace count={"Software Engineering".length} delay={200} />
              <span>Machine Learning</span>
              <Typist.Backspace count={"Machine Learning".length} delay={200} />
              </Typist>
            : ''
          }
      </div>
    );
  }
}

export default Signature;
