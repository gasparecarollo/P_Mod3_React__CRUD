import { useEffect, useState } from "react";
import "./ShowsList.css"


const ShowsList = () => {

    const [allShows, setAllShows] = useState([]);

    console.log("STATE OF    allShows: ", allShows)

    useEffect(() => {

        fetch("http://localhost:8888/api/shows")
            .then(r => r.json())
            .then(arr => setAllShows(arr))
            .catch(err => console.log(err))
    }
        ,

        []
    )

    const showsToRender = allShows.map((eachShow) =>
        <div key={eachShow.id} className="shows-card-styles">

            <h4> {eachShow.title}</h4>
            <h6> {eachShow.duration}</h6>
        </div>
    )


    return (
        <div className="shows-list-styles">
            <h1>All Shows</h1>

            <div className="display-show-cards">
                {showsToRender}
            </div>
        </div>
    )




}


export default ShowsList;