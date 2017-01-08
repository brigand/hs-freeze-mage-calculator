import React from 'react';
import Counter from './Counter';
import getDamage from './getDamage';
import './Calc.css';

const types = [
  {type: 'frostBolt', name: 'Frost Bolt'},
  {type: 'iceLance', name: 'Ice Lance'},
  {type: 'forgottenTorch', name: 'Forgotten Torch'},
  {type: 'fireBall', name: 'Fire Ball'},
  {type: 'spellDamage', name: 'Spell Damage'},
];

export default class Calc extends React.Component {
  constructor(props) {
    super(props);
    const typeState = types.reduce((acc, {type}) => {
      acc[type] = 0;
      return acc;
    }, {});
    this.state = {
      ...typeState,
    };
  }
  render() {
    return (
      <div className="Calc">
        {types.map(type => this.renderType(type))}
        <div className="Calc-damage">
          <div className="Calc-damage-number">
            {getDamage(this.state)}
          </div>
        </div>
      </div>
    );
  }

  renderType({type, name}) {
    return (
      <div className="Calc-type" key={type}>
        <span className="Calc-type-label">
          {name}
        </span>
        <span className="Calc-type-counter">
          <Counter
            value={this.state[type]}
            type={type}
            onChange={(value) => {
              this.setState({[type]: value});
            }}
          />
        </span>
      </div>
    );
  }
};

