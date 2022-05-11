import './Tours.css'
function Tours(props) {

    return(

<>
                <div className='tours-section'>
                    <p>
                        {props.name}
                    </p>
                    <img src={props.image} alt="SSSS"/>

                </div>

                </>
        )
        
}
export default Tours;
