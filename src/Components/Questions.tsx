import React, { Component } from 'react';
import '../styles/Questions.css';
import CreateQuestions from './CreateQuestions';
interface QuestionsState {
    isBookingDivVisible: boolean;
  }
  export default class Questions extends Component<{}, QuestionsState> {
    constructor(props: {}) {
        super(props);
        this.state = {
          isBookingDivVisible: false,
        };
      }
    handleRequestMeeting = () => {
        // Implement your request meeting action here
      };
      Reschedule = () => {
        // Implement your back action here
      };
      handleButtonClick = () => {
        this.setState({ isBookingDivVisible: true });
      };
     
  render() {
    return (
      <>
        {!this.state.isBookingDivVisible && (
          <div>
            <CreateQuestions questionSubmit={this.handleButtonClick} />
          </div>
        )}
        {this.state.isBookingDivVisible && (
          <div id="bookingDiv">
            <div className="button-container">
              <button className="outline-button" onClick={this.Reschedule}>Reschedule</button>
              <button className="primary-button" onClick={this.handleRequestMeeting}>Request Meeting</button>
            </div>
            <iframe
              src="https://outlook.office365.com/owa/calendar/TestMeeting@waiin.com/bookings/"
              width="100%"
              height="500px"
              style={{ border: 'none' }}
              allowFullScreen
              title="Microsoft Bookings"
            ></iframe>
          </div>
        )}
      </>
    );
  }
}