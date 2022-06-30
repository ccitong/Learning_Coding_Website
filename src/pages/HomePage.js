import "./Homepage.css"
const HomePage = () => {
    return(
        <div className="HomePage">
            <img src ='./data/background.jpg' className="picture"/>
            <h1 className="h1">Anyone Can Code</h1>
            <p className="p"> Learn to program in the most popular languages, in a format and time that suits your shceudle and lifestyle.</p>
            <button className="button"  type="button">Try for Free</button>
        </div>
    )
}
export default HomePage