import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.Languages}</em></p>
                      <p className="info">
                        {'Frameworks'}
                        <span>&bull;</span> <em className="date">{item.Frameworks}</em></p>
                      <p className="info">
                        {'Tools'}
                        <span>&bull;</span> <em className="date">{item.Tools}</em></p>
                      <p>
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>



      </section>
    );
  }
}
