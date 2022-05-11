import Header from "../header/Header";
import Footer from "../footer/Footer";
import './Home.css'
// import Tours from '../tours/Tours';
import Tour from "../tours/tour/Tour";
import  cityData from '../data/db.json'
function Home(){
    return(
        <>
            <Header/>
            <div className="tour">
            {
            cityData.map(city=>{
                return(
                    <Tour name={city.name} image={city.image} id={city.id}/>

                )         
            })
        }
        </div>
            <Footer/>
        </>
    )
}
export default Home;




