import "./BookingForm.css"
import {useState} from "react"

const BookingForm = () => {
  const [NameFormFieldValue, setNameForFieldValue] = useState(null)
  const [emailFormFieldValue, setEmailForFieldValue] = useState(null)
  const [formOutput, setFormOutput] = useState(null)
  const [checkboxValueFromUI, setcheckboxValueFromUI] = useState(true)

  const NameFieldChanged =(evt)=>{
    const NameEntered = evt.target.value
    setNameForFieldValue(NameEntered)
  }

  const emailFieldChanged =(evt)=>{
    const emailEntered = evt.target.value
    setEmailForFieldValue(emailEntered)
  }

  const checkBoxChanged=(evt)=>{
    setcheckboxValueFromUI(evt.target.value)
    console.log(evt.target.value)
  }

  const submitButtonPressed =()=>{
    let msgToDisplay
    if(emailFormFieldValue ===null || NameFormFieldValue === null){
      //render error msg
      msgToDisplay = <p className="error">Error: You must enter all form field data.</p>
    }
    else if(checkboxValueFromUI === "Yes"){
      //render confirmation
      msgToDisplay = <p className="confirmation">Class booked! Confirmation sent to {emailFormFieldValue}</p>
    }
    else{
      //reder Thank you!
      msgToDisplay= <p className="confirmation">Thank you!</p>
    }
    const element = (
      <div>
        {msgToDisplay}
      </div>
    )
    setFormOutput(element)
  }

    return(
        <div className="BookingForm">
          <p className="title">Enter Your information to book the class</p>
          <input type="text" className="input" placeholder="Enter your name" onChange={NameFieldChanged}/>
          <br/>
          <input type="text" className="input" placeholder="Enter your email" onChange={emailFieldChanged}/>
          <p className="title">Would you like to receive updates about your class?</p>
          <input type = "radio" name = "toc" onChange={checkBoxChanged} value = "Yes"/>
          <label htmlFor="toc" >Yes </label>
          <input type = "radio" name = "toc" onChange={checkBoxChanged} value = "No"/>
          <label htmlFor="toc" >No </label>
          <p className="terms"><span>By Pressing submit, you are agreeing to our Terms and Conditions:</span> Learners are required to abide by the Code of Conduct and Terms of Service. Disruptive behaviour is not tolerated and learners who do not comply will be removed from the class. For virtual classes, learners must provide their own computers, speakers, and microphones. In person classes are held at our location at 1 Main Street. All class bookings are final, and no refunds or exchanges will be issued.</p>
          <button onClick={submitButtonPressed} className="button">Submit</button>
          {formOutput}
        </div>
    )
}
export default BookingForm;