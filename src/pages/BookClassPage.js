import "./BookClassPage.css"
import BookingForm from '../components/BookingForm';
import { useParams } from "react-router-dom";
import {useEffect,useState} from "react"

import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";

const BookClassPage = () => {
  const [currentClass,setCurrentClass] = useState([])
    let params = useParams()
    console.log(params.classId)
    useEffect(()=>{
      fetch("/data/schedule.json")
      .then((response)=>{return response.json()})
      .then((jsonData)=>{
        
        const classData = jsonData
        console.log(classData)
         let result = classData.find(({id})=> id == params.classId)
         console.log(result)
  
         const classFromAPI ={
          csubject:result.subject,
          clanguage:result.language,
          cformat: ""
        }
  
         if (result.isVirtual===true){
          classFromAPI.cformat = "Virtual"
         }
         else{
          classFromAPI.cformat = "In Person"
         }
         setCurrentClass(classFromAPI)
      })

    },[])

    

    return(
        <div className="BookClassPage">
            <BookingForm/>
            <div className = "ClassSummary"> 
              <h2>Class Summary</h2>
              <p className = "title">CLASS NAME</p>
              <p>{currentClass.csubject}</p>
              <p className = "title">LANGUAGE</p>
              <p>{currentClass.clanguage}</p>
              <p className = "title">DELIVERY MODE</p>
              <p>{currentClass.cformat}</p>

            </div>
        </div>
    )
}
export default BookClassPage