import { Link } from "react-router-dom";
import "./image.css";

function Image({image, id, newOffset}) {
    return (
        <Link to={`/details/:${id}/:${newOffset}`}>
            <div className="image-wrapper">
                <img src={image} alt="Image" className="eachImage"/>
            </div>
        </Link>
    )
}

export default Image;