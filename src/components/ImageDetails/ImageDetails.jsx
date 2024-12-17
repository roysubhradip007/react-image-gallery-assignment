import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./ImageDetails.css"

function ImageDetails(){
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [details, setDetails] = useState({});
    const {id , newOffset} = useParams();
    const id_int = parseInt(id.replace(':', '').trim());
    const offset_int = parseInt(newOffset.replace(':', '').trim());
    async function getDetails(){
        const promise = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset_int}&limit=20`);
        const promiseResult = promise.data.photos;
        const imageResult = promiseResult.find((e) => e.id === id_int);
        setDetails(imageResult);
        setIsDataLoading(false);
    }
    useState(() => {getDetails()}, [id]);
    return(
        <div className="image-details-wrapper">
            {(isDataLoading) ? "data is loading" : (<div className="image-details-container">
                <img src={(details.url) ? details.url : "image url is not there"} />
                <div className="details">
                    <h1>{details.title}</h1>
                    <p>{details.description}</p>
                </div>
            </div>)}
        </div>
    )
}

export default ImageDetails;