import slot1 from "../assets/slot1.jpg"
import slot2 from "../assets/slot2.jpg"
import slot3 from "../assets/apps.jpeg"
import slot4 from "../assets/apps2.jpg"
import slot5 from "../assets/bitcoin.jpg"
import slot6 from "../assets/nft.jpg"
import slot7 from "../assets/map.jpg"
import slot8 from "../assets/map1.jpg"
//import slot3 from "../assets/appoint1.AVIF"
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
        text="Slot booking allows voters to reserve a specific time slot to cast their vote, reducing the chances of long queues and crowding at polling stations.It can also help to manage the flow of voters and minimize wait times, which can improve the overall efficiency of the voting process."
        img1={slot1}
        img2={slot2}
        />
        <Featuredata
        className="first-feat-reverse" 
        heading="NFT" 
        text="NFTs (Non-Fungible Tokens) are becoming increasingly popular and have gained importance in several fields. NFTs are unique and cannot be duplicated .The use of blockchain technology to create NFTs allows for transparency in ownership and transaction history, making it easy to trace the ownership of a digital asset from its creation to its current owner."
        img1={slot5}
        img2={slot6}
        />
        <Featuredata 
        className="first-feat"
        heading="Election-gram" 
        text=" Community features can also help members to connect with each other, creating opportunities for networking and collaboration. This can be particularly important in professional or educational settings, where members may be looking to connect with others in their field.Community features can also provide a valuable source of feedback for businesses or creators, allowing them to gain insights into their audience and gather feedback on their products or services."
        img1={slot3}
        img2={slot4}
        />
        <Featuredata
        className="first-feat-reverse" 
        heading="Google-Map" 
        text="Google map is a tool that people nowadays may be installed in their smartphones. Not only this, maps are wisely used in different places such as theme parks for way finding purposes. However, it is different to know how the readability, usability of those maps. “Maps are graphic representations that facilitate a spatial understanding of things, concepts, conditions, processes, or events in the human world”"
        img1={slot7}
        img2={slot8}
        />
        </div>

    );
}
export default Feature;