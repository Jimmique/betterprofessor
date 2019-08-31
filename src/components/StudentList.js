import React, { useState } from 'react';
import StudentForm from './StudentForm.js';
import { Accordian, Icon } from 'semantic-ui-react'

function StudentList() {

  // Keep track of and update the student list
  const [ newStudents, setnewStudents ] = useState(
    [{
      id: 1,
      firstname: 'Jillian',
      lastname: 'Hartmann',
      email: 'Imelda_Mann47@gmail.com', 
      projects: 'NA',
      projectdeadline: 'NA',
      papers: 'The Basics of Javascript',
      paperdeadline: '10/17/19',
    },
  
    {
      id: 2,
      firstname: 'Mckayla',
      lastname: 'Steuber',
      email: 'Antonio_Hilpert58@yahoo.com',
      projects: 'Single Page Application',
      projectdeadline: '12/16/19',
      papers: 'Intro to React',
      paperdeadline: '01/12/20',
    },

    {
      id: 3,
      firstname: 'Holden',
      lastname: 'Gusikowski',
      email: 'Melisa_King0@yahoo.com',
      projects: 'Buildweek 2',
      projectdeadline: '11/05/19',
      papers: 'NA',
      paperdeadline: 'NA'
    }]
  );

  // Keep track of and update the student to edit
  const [ studentToEdit, setStudentToEdit ] = useState({});

  // Adds a new student to our list
  // Runs when the form is submitted
  const addNewStudent = (student) => {
    setnewStudents([...newStudents, student]);
  };

  // Edit a student in our list
  // Runs when the form is submitted
  const editStudent = (updatedStudent, idx) => {
    setnewStudents([...newStudents][idx] = updatedStudent );
  }


  return (
    <div className="StudentList">
    <h1>Students</h1>
      {/* Map over the list of students and return a div with student info for
            each student */}
      {newStudents.map( (student, idx) => {
        return (
          <div key={idx}>
            <p>ID: {student.id}</p>
            <p>First Name: {student.firstname}</p>
            <p>Last Name: {student.lastname}</p>
            <p>Email: {student.email}</p>
            <p>Projects: {student.projects}</p>
            <p>Project Deadline: {student.projectdeadline}</p>
            <p>Papers: {student.papers}</p>
            <p>Paper Deadline: {student.paperdeadline}</p>
            <p><i 
              className="fas fa-edit fa-lg"
              value={idx}
              onClick={(e) => setStudentToEdit([...newStudents][idx])}></i>
              </p>
          </div>
        )
      })}
      <StudentForm 
        addNewStudent={addNewStudent} 
        studentToEdit={studentToEdit}
        editStudent={editStudent}
      />  
    </div>
  );
}

export default StudentList;
