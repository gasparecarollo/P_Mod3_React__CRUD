import { useEffect, useState } from "react";


const ShowsList = () => {

    const [allShows, setAllShows] = useState([])

    console.log("STATE OF    allShows: ", allShows)

    useEffect(() => {

        fetch("http://localhost:8888/api/shows")
            .then(r => r.json())
            .then(arr => setAllShows(arr))





    }

        ,

        []

    )

    const showsToRender = allShows.map((eachShow) =>


        <div>
            <h4> {eachShow.title}</h4>

        </div>
    )




    return (
        <div>
            <h1>All Shows</h1>
            {showsToRender}

        </div>
    )




}


export default ShowsList;