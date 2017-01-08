import React, {PropTypes} from 'react';
import './Counter.css';

/*
const icons = {
};
*/

export default class Counter extends React.Component {
  static propTypes = {
    value: PropTypes.oneOf([0, 1, 2, 3, 4]).isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf([
        'frostBolt',
        'iceLance',
        'fireBall',
        'forgottenTorch',
        'spellDamage',
    ]).isRequired,
  };

  render() {
    return (
      <div className="Counter">
        <div className="Counter-content">
          {this.renderIcon(this.props.type)}
          {this.renderButton('0', 0)}
          {this.renderButton('1', 1)}
          {this.renderButton('2', 2)}
          {this.props.type === 'spellDamage' && this.renderButton('3', 3)}
          {this.props.type === 'spellDamage' && this.renderButton('4', 4)}
        </div>
      </div>
    );
  }

  renderIcon(type) {
    // TODO: enable this
    return null;
    /*
    const src = icons[type];
    return (
      <img
        className="Counter-icon"
        alt={type}
        src={src}
      />
    );
    */
  }

  renderButton(text, value) {
    let className = 'Counter-button';

    if (this.props.value === value) {
      className += ' Counter-button-active';
    }

    return (
      <div
        className={className}
        onClick={() => this.props.onChange(value)}
      >
        {text}
      </div>
    );
  }
};

