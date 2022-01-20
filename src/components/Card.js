import '../css/Card.css';

export default function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={"images/" + props.image} alt={props.image} className="card-img" />
        <div className="card-body">
          <div className="location">
            <span className="country"> <span><i className="fas fa-map-marker-alt fa-2x"></i></span>{props.country}</span>
            <a href={props.locationLink} className="location-link">View on Google Maps</a>
          </div>
          <div className="title">
            {props.locationName}
          </div>
          <div className="perioud">
            <span className="start-time">{props.startTime}</span> -
            <span className="end-time">{props.endTime}</span>

          </div>
          <div className="body">
            &nbsp; &nbsp; {props.body}</div>
        </div>
      </div>
    </div>

  )
}