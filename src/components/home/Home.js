import Header from "../header/Header";
import Footer from "../footer/Footer";

import Tours from '../tours/Tours';
import  cityData from '../data/db.json'
function Home(){
    return(
        <>
            <Header/>
            {
            cityData.map(city=>{
                return(
                    <Tours name={city.name} image={city.image}/>
                )         
            })
        }
            <Footer/>
        </>
    )
}
export default Home;




