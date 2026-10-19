import React from "react";
function FormHandling(){
    const handleSubmit = (event)=>{
        event.preventDefault()
        alert("Student Registered Successfully")
    };
  return(
    <div>
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}
export default FormHandling;