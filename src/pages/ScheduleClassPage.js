import "./ScheduleClassPage.css"
import {Link} from "react-router-dom"
import {useEffect,useState} from "react"
const ScheduleClassPage = () => {
    //state variable
    const [classList,setClassList] = useState([])

    //read data from the jason file and output to the UI

    useEffect(()=>{
      console.log("class list page loaded")
      fetch("/data/schedule.json")
      .then((response)=>{return response.json()})
      .then((jsonData)=>{
        console.log(jsonData)
        //parsing
        const classData = jsonData
        console.log(classData)

        const tempListFromAPI = []
        for(let i=0;i<classData.length;i++){
          const currClass = classData[i]
          const classSubject = currClass["subject"]
          const classLanguage = currClass["language"]
          let classFormat = "Virtual"
          if(currClass["isVirtual"] === false){
            classFormat = "In Person"
          }
          
          //save it to an object
          const classFromAPI ={
            csubject:classSubject,
            clanguage:classLanguage,
            cformat:classFormat
          }

          console.log(classFromAPI)
          tempListFromAPI.push(classFromAPI)
        }

        setClassList(tempListFromAPI)
     
      })
      .catch((error)=>{
        console.log(error)
      })
    },[])



    return(
        <div className="ScheduleClassPage">

          <h1 className="h1">Book a Session</h1>
          <p className="p">Take a class that meets your shcedule and lifestyle.</p>
          {
            classList.map((currClass,index)=>{
              return(
                <div className = "classElement" key={index}>
                  <p className = "div1">{currClass.csubject} with {currClass.clanguage}</p>
                  <a href="" className = "link div2">read more</a>
                  <p className = "div3">45mins</p>
                  <p className = "div4">{currClass.cformat}</p>
                  <Link to = {`../book/${index + 1}`} className="div5" ><button className="button">Book Now</button></Link>
                </div>

              )
            })
          }


        </div>
    )
}
export default ScheduleClassPage