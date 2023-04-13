import slot1 from "../assets/first.jpg"
import slot2 from "../assets/second.jpg"
import slot3 from "../assets/third.jpg"
import slot4 from "../assets/fourth.jpg"
import "./feature.css" 
import Featuredata from "./Featuredata"
const Feature = () =>{
    return (
        <div className="feature">
        <h1>Our Features</h1>
        <p className="par">Special Features of our websites</p>
        <Featuredata 
        className="first-feat"
        heading="Slot Booking" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img1={slot1}
        img2={slot2}
        />
        <Featuredata
        className="first-feat-reverse" 
        heading="NFT" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img1={slot3}
        img2={slot4}
        />
        </div>

    );
}
export default Feature;