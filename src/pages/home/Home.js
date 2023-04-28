import earth from "../../assets/images/nasa-earth-nobackground.png"
import dramaMe from "../../assets/images/zurich-dramatic-me.jpeg"
export default function Home(){
    return(
        <section className="home-page">
            <div className="color-box"></div>
            <h1 className="home-page-title">My Journey Around the World</h1>
            <div className="container">
                {/* <div className="image-container"> 
                    <img className="earth" alt="earth" src={earth}/>
                </div> */}
                <div className="image-container"> 
                    <img className="dramaMe" alt="Fiona dramatic pose in Zurich" src={dramaMe}/>

                </div>
                {/* <div className="white-box"></div> */}
                <p className="home-page-content">
                    Hi!<br></br> This is my personal website. Here I test my new progamming skills, blog about my life, talk about new things I learn, and a little bit of every. <br></br>So join me in my journy around the world and living and hopefully thriving.  
                </p>
            </div>

        </section>
    )
}