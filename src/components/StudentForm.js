import React, { useState, useEffect } from 'react';

 function StudentForm(props) {

    // Keep track of and update the student
   const [ newStudent, setNewStudent ] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    projects: "",
    projectdeadline: "",
    papers: "",
    paperdeadline: "",
  });

    // Runs when form is submitted (button click)
    const handleSubmit = (event) => {
    // Prevent browser refresh
    event.preventDefault();

    //Check if studentToEdit has props
    if( props.studentToEdit.name ) {
      props.editStudent(newStudent);
    } else {
    // Add the newStudent object in state to our list of students  
    props.addNewStudent(newStudent);
  }
    
    // Clear the input values
    setNewStudent({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    projects: "",
    projectdeadline: "",
    papers: "",
    paperdeadline: "",
    })
  };

    // Runs whenever theres a change event on our input elements
    const handleChange = event => {
    // Copy the current newStudent object in state and update the correct
    // property with the input value
    setNewStudent({...newStudent, [event.target.name]: event.target.value}); 
  };

    // When props.studentToEdit changes, update newStudent state object
    // with the correct data
    useEffect(() => {
      setNewStudent(props.studentToEdit);
  }, [props.studentToEdit])

   return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Student</h2>
      <label htmlFor="id" hidden>ID</label>
      <input
        type="text" 
        name="id" 
        placeholder="ID"
        value={newStudent.id}
        onChange={handleChange}
      />

      <label htmlFor="firstname" hidden>First Name</label>
      <input
        type="text" 
        name="firstname" 
        placeholder="FirstName"
        value={newStudent.firstname}
        onChange={handleChange}
      />

      <label htmlFor="lastname" hidden>Last Name</label>
      <input
        type="text" 
        name="lastname" 
        placeholder="LastName"
        value={newStudent.lastname}
        onChange={handleChange}
      />

      <label htmlFor="email" hidden>Email</label>
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={newStudent.email}
        onChange={handleChange} 
      />

      <label htmlFor="projects" hidden>Projects</label>
      <input 
        type="projects" 
        name="projects" 
        placeholder="Projects" 
        value={newStudent.projects}
        onChange={handleChange} 
      />

      <label htmlFor="deadline" hidden>Project Deadline</label>
      <input 
        type="projectdeadline" 
        name="projectdeadline" 
        placeholder="ProjectDeadline" 
        value={newStudent.projectdeadline}
        onChange={handleChange} 
      />

      <label htmlFor="papers" hidden>Papers</label>
      <input 
        type="papers" 
        name="papers" 
        placeholder="Papers" 
        value={newStudent.projects}
        onChange={handleChange} 
      />

      <label htmlFor="projects" hidden>Paper Deadline</label>
      <input 
        type="paperdeadline" 
        name="paperdeadline" 
        placeholder="PaperDeadline" 
        value={newStudent.paperdeadline}
        onChange={handleChange} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}


export default StudentForm;