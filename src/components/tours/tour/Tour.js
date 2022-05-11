import './tour.css'
function Tour(props) {

    return(

<>
                <div className='tours-section'>
                    <p>
                        {props.name}
                    </p>
                    <p>
                       id : {props.id}
                    </p>
                    <img src={props.image} alt="SSSS"/>

                </div>

                </>
        )
        
}
export default Tour;
