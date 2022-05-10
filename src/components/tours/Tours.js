import Footer from "../footer/Footer";
function Tours(props) {
    return(
        <>
        <div>
        <p>
            {props.name}
        </p>
        <img src={props.image} alt="SSSS"/> 

        </div>
        </>
        )
}
export default Tours;
