import "./PreviewCard.css"



export default function PreviewCard({ vehicleName , vehicleDescription , vehicleImage, className }) {

    return (
        <>
  
                <div className={ `card ${className}`}>
                    <img src={vehicleImage} className="cardimg" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{ vehicleName}</h5>
                            <p className="card-text">{vehicleDescription}</p>
                    <button className="button-17" role="button">Learn More</button>    
                </div>
                </div>
               
               
          


        </>
    )


}