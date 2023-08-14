import { useState } from "react";


const ShowsNewForm = (props) => {


    const [newTitle, setNewTitle] = useState("");
    const [newCountry, setNewCountry] = useState("");
    const [newReleaseYear, setNewReleaseYear] = useState("1900");
    const [newRating, setNewRating] = useState("");
    const [newDuration, setNewDuration] = useState("");
    const [newListedIn, setNewListedIn] = useState("");
    const [newDescription, setNewDescription] = useState("");

    function handleNewShowFormSubmit(e) {

        e.preventDefault();
    }
    const newShowObj = {
        id: crypto.randomUUID();
        title: newTitle,
        type: "TV Show",
        dateAdded: "",

        country: newCountry,
        releaseYear: newReleaseYear,
        rating: newRating,
        Duration: newDuration,
        listedIn: newListedIn,
        description: newDescription,
    }

    console.log("newShowObj we are CREATING: ", newShowObj)


    //Post: [C]RUD :: CREATE

    const options = {

        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": 'application/json'
        },
        body: json.stringify(newShowObj)
    }


    fetch("http://localhost:8888/api/shows", options)
        .then(r => r.json())
        .then(console.log)
        .catch(err => console.log(err))



    //// Clearing the Form Inputs
    setNewTitle("");
    setNewCountry("");
    setNewReleaseYear("1900");
    setNewRating("");
    setNewDuration("");
    setNewListedIn("");
    setNewDescription("");

    return (
        <h1> Create a New Show 📺</h1> >
        <form onSubmit={handleNewShowFormSubmit}>
            <label for="title">
                Title of Show:
                <input type="text" id="title" value={newTitle} onChange={(se) => { setNewTitle(se.target.value) }} />
            </label> <br />
            <label for="country">
                Country for Show:
                <input type="text" id="country" value={newCountry} onChange={(se) => { setNewCountry(se.target.value) }} />
            </label><br />
            <label for="releaseYear">
                Release Year of Show:
                <input type="number" id="releaseYear" value={0} onChange={(se) => { setNewReleaseYear(se.target.value) }} />
            </label><br />
            <label for="rating">
                Rating for Show:
                <input type="text" id="rating" value={newRating} onChange={(se) => { setNewRating(se.target.value) }} />
            </label><br />
            <label for="duration">
                Duration of Show:
                <input type="text" id="duration" value={newDuration} onChange={(se) => { setNewDuration(se.target.value) }} />
            </label><br />
            <label for="listedIn">
                Genre Show is Listed:
                <input type="text" id="listedIn" value={newListedIn} onChange={(se) => { setNewListedIn(se.target.value) }} />
            </label><br />
            <label for="description">
                Description of Show:
                <input type="text" id="description" value={newDescription} onChange={(se) => { setNewDescription(se.target.value) }} />
            </label><br />

            <input type="submit" />

        </form>
    )



}


export default ShowsNewForm;