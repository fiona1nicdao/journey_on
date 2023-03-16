import earth from "../../assets/images/nasa-earth-nobackground.png"
export default function Home(){
    return(
        <section className="home-page">
            <h1 className="home-page-title">My Journey Around the World</h1>
            <div className="container">
                <div className="image-container"> 
                    <img className="earth" alt="earth" src={earth}/>
                </div>
                <p className="home-page-content">
                    Hi! This is my personal website. Here I test my new progamming skills, blog about my life, talk about new things I learn, and a little bit of every. So join me in my journy around the world and living and hopefully thriving.  
                </p>
            </div>

        </section>
    )
}