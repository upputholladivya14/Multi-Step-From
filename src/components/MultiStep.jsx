import { useState } from "react"

function MultiStep() {
    const [step,setStep]=useState(1);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [gender,setGender]=useState();
    const [phone,setPhone]=useState();
    return(
       <div>
        <h1>Multi-Step Form</h1>
        {step==1 && (
            <div>
                <h2>Step 1 : Personal Details</h2>
                <input placeholder="Enter your name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <br/>
                <input placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <br/>
                <input placeholder="Enter your phone number"
                value= {phone}
                onChange={(e)=>setPhone(e.target.value)}/>
                <h3>Gender</h3>
                <input type="radio" name="gender" value="Male"
                onChange={(e)=>setGender(e.target.value)}/>
                <label>Male  </label>
                <input type="radio" name="gender" value="Female"
                onChange={(e)=>setGender(e.target.value)}/>
                <label>Female  </label>
                <input type="radio" name="gender" value="Other"
                onChange={(e)=>setGender(e.target.value)}/>
                <label>Other</label>
                <br/>
                <button onClick={()=>{
                    if(
                        name.trim() !== "" &&
                        email.trim() !== "" &&
                        gender !== "" &&
                        phone.trim() !== ""
                    ){
                        setStep(2)
                    } else {
                        alert("Please fill all the fields of step 1");
                    }
                }}>Next</button>
            </div>
        )}
        {step==2 && (
            <div>
                <h2>Step 2 : Education Details</h2>
                <input placeholder="Enter your college"/>
                <br/>
                <input placeholder="Enter your branch"/>
                <br/>
                <input placeholder="CGPA"/>
                <br/>
                <button onClick={()=>setStep(1)}>Previous</button>
                <button onClick={()=>setStep(3)}>Next</button>
            </div>
        )}
        { step==3 && (
            <div>
            <h2>step 3 : Skills</h2>
            <input placeholder=""/>
            <br/>
            <button onClick={()=>setStep(2)}>Previous</button>
            <button onClick={()=>setStep(4)}>Next</button>
            </div>
        )}
        { step==4 && (
            <div>
                <h2>Step 4 : Projects</h2>
                <input placeholder=""/>
                <br/>
                <button onClick={()=>setStep(3)}>Previous</button>
                <button type="submit" onClick={()=>alert("Form submitted successfully")}>Submit</button>
                
            </div>
        )}
       
       </div>
    )
}
export default MultiStep;