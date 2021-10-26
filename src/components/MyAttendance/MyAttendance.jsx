import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Card, Modal, Button, Table } from "react-bootstrap";
const MyAttendance = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Wcounter = 0;
  const Dcounter = 0;
  const [selectedDate, setSelectedDate] = useState(null);
  const [attendance, setAttendance] = useState(null);
  const getAttendance = (sDate) => {
    let jsn = [
      [0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    return jsn;
  };
  useEffect(() => {
    setAttendance(getAttendance(null));
  }, [selectedDate]);

  return (
    <>
      <Card>
        <Card.Header onClick={handleShow}>My Attendance</Card.Header>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Attendance</Modal.Title>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM-yyyy"
            maxDate={new Date()}
            placeholderText="Month and Year"
            select
            showYearDropdown
            scrollableMonthYearDropdown
          />
        </Modal.Header>
        <Modal.Body>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
              {attendance == null
                ? console.log(attendance)
                : // <div>Please select date</div>
                  attendance.map((weeks) => (
                    <tr key={"W" + Wcounter}>
                      {weeks.map((day) => (
                        <td key={"D" + Dcounter}>
                          <input
                            type="checkbox"
                            defaultChecked={day}
                            disabled
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default MyAttendance;
