import { Route, Routes } from "react-router-dom";
import ImageList from "../components/ImageList/ImageList";
import ImageDetails from "../components/ImageDetails/ImageDetails";

function CustomRoute(){
    return(
        <Routes>
            <Route path="/" element={<ImageList/>} />
            <Route path="/details/:id/:newOffset" element={<ImageDetails/>} />
        </Routes>
    )
}

export default CustomRoute;