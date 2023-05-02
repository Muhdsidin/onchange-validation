
import {  useState } from "react"
import "./app.css"




function App() {
 const [formval , setFormVal] =useState({
  firstname : "",
  email : "",
  country : "",
  gender : "",
 })
 
 const [error , setError] = useState({
  firstname : false,
  email : false,
  country : false,
  gender : false
 })

 const sumbitData =(event)=>{
  event.preventDefault()
 }
 
 
 const handleChange = (event) => {
  setFormVal((prev) => ({
    ...prev,
    [event.target.name]: event.target.value,
  }));

  const { name, value } = event.target
  if(name === "firstname" && value===""  ){
    setError({firstname : true})
  }else if(name === "email" && value===""){
    setError({email : true})
  }else if(name === "gender" && value === ""){
    setError({gender : true})
  }else if(name === "country" && value === ""){
    setError({country:true})
  }
  else{
    setError({
      email:false,
      firstname : false,
      gender : false,
      country : false
    })
  }

  if(event.target.value > ""){
    console.log(formval)
  }
  
};
/*console.log(formval)*/



 
  return (
  <form action="" onSubmit={sumbitData}>
    <div className="input-section">
      <label htmlFor="">
        <label htmlFor="">FirstName</label> <span className="danger">*</span>
      </label>
      <input
        type="text"
        id=""
        name="firstname"
        onChange={handleChange}
      />
      {error.firstname ?  <p className="danger">FirstName is required</p>: ""}
       </div>
       <div className="input-section">
      <label htmlFor="">
        <label htmlFor="">Email</label> <span className="danger">*</span>
      </label>
      <input
        type="email"
        id=""
        name="email"
        onChange={handleChange}
      />
       {error.email ?  <p className="danger">Email is required</p>: ""}
       </div>
       <label htmlFor="">Gender</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={handleChange}
              
            />
            <label htmlFor="male" className="radio-buttons">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={handleChange}
            />
            <label htmlFor="female" className="radio-buttons">
              Female
            </label>
            {error.gender ?  <p className="danger">gender is required</p>: ""}
          </div>
        <div className="input-section dropdown-section">
          <label htmlFor="">Country</label>
          <select
            name="country"
            id=""
            onChange={handleChange}
            
          >
            <option value="">Select</option>
            <option value="uae">UAE</option>
            <option value="india">India</option>
            <option value="qatar">Qatar</option>
          </select>
          {error.country?  <p className="danger">Country is required</p>: ""}
        </div>

        <button>Sumbit</button>
        
       </form>
    

 )
}

export default App