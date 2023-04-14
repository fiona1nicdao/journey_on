import clock from "../../assets/images/clocktower.jpeg"
import brandenburgGate from "../../assets/images/brandenburgGate.jpeg"
import zermatt from "../../assets/images/zermatt.jpeg"
import zurich from "../../assets/images/zurich.jpeg"

export default function Travel(){
    return(
        <section className="travel-page">
            <h1>Travel</h1>
            <div className="city-container">
                <div className="city-image-container">
                    <img className="image-city" alt="clock tower" src={clock}/>
                </div>
                <div className="city-image-container">
                    <img className="image-city" alt="brandenburg gate" src={brandenburgGate}/>

                </div>
                <div className="city-image-container">
                    <img className="image-city" alt="mattenhorn mountain" src={zermatt}/>

                </div>
                <div  className="city-image-container"> 
                    <img className="image-city" alt="zurich river view" src={zurich}/>
                </div>
                
            </div>
        </section>
    )
}