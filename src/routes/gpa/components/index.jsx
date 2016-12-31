import React from 'react';
import InputBox from './inputBox';

export default class GPA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gradePoints: 0,
      credits: 0,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(grade, units) {
    const { gradePoints, credits } = this.state;
    //const totalPoints = (this.gradeToNumber(grade) * units) + gradePoints;
    const totalCredits = credits + units;
    this.setState({
      gradePoints: totalPoints,
      units: totalCredits,
    });
  }


  render() {
    return (
      <div
        className='container col-md-12'
        style={ { marginTop: '10%' } }
      >
        <div className='well infobox' style={ { margin: 'auto', width: '50%' } }>
          <InputBox inputCount='1' />
        </div>
      </div>
    );
  }
}
