import React, { Component } from 'react';
import moment from 'moment';

class TimerConfig extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const newBaseTime = this.props.baseTime;

    if (ev.target.id === 'minutes') newBaseTime.subtract(this.props.baseTime.get('minutes'), 'minutes').add(parseInt(ev.target.value, 10), 'minutes');
    if (ev.target.id === 'seconds') newBaseTime.subtract(this.props.baseTime.get('seconds'), 'seconds').add(parseInt(ev.target.value, 10), 'seconds');

    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <div className="row">
        <h2 className="text-primary">Set Timer</h2>
        <div className="form-group">
          <label htmlFor="minutes">Minutes</label>
          <input
            className="form-control"
            type="number" id="minutes"
            defaultValue={this.props.baseTime.get('minutes')}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="seconds">Seconds</label>
          <input
            className="form-control"
            type="number" id="seconds"
            defaultValue={this.props.baseTime.get('seconds')}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default TimerConfig;
