import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Image from "../Image/Image.jsx";
import "./imageList.css";

function ImageList() {
    const [imageData, setImageData] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [offset, setOffset] = useState(5);
    async function downloadImage() {
        const imageUrl = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`;
        const promise = await axios.get(imageUrl);
        const promiseResult = promise.data.photos;
        setImageData(promiseResult);
        setIsDataLoading(false);
    }
    useEffect(() => {
        downloadImage()
    }, [offset]);

    function seturlForNext() {
        setOffset(offset+20);
    }
    function seturlForPrevious() {
        if(offset > 5) {
            setOffset(offset-20);
        }
    }
    return (
        <>
            <div className="imageList-wrapper">
                {(isDataLoading == true) ? "Data is loading...." : imageData.map((p) => <Image image={p.url} key={p.id} id={p.id} newOffset={offset} />)}
            </div>
            <div className="btn-container">
                <button className="btn" disabled={offset == 5}  onClick={() => { seturlForPrevious() }}>prev</button>
                <button className="btn" onClick={() => { seturlForNext()}}>next</button>
            </div>
        </>
    )
    
}

export default ImageList;