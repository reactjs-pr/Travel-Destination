import Header from "../header/Header";
import Footer from "../footer/Footer";
import './Home.css'
import Tours from '../tours/Tours';
import  cityData from '../data/db.json'
function Home(){
    return(
        <>
            <Header/>
            <div className="tour">
            {
            cityData.map(city=>{
                return(
                    <Tours name={city.name} image={city.image}/>
                )         
            })
        }
        </div>
            <Footer/>
        </>
    )
}
export default Home;




