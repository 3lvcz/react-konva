import React from 'react';
import ReactDOM from 'react-dom';
import Konva from 'konva';
import Container from './abstract/Container';

class Stage extends Container {

  displayName = 'Stage';

  createKonvaNode() {
    return new Konva.Stage({
      container: ReactDOM.findDOMNode(this.refs.canvas)
    });
  }

  render() {
    return (
        <div>
          <div ref="canvas"></div>
          {React.Children.map(this.props.children, child => child ? React.cloneElement(child) : null)}
        </div>
    );
  }

}

Stage.propTypes = {
  children: React.PropTypes.any
};

export default Stage;
