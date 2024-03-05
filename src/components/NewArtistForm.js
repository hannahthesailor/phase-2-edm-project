import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function NewArtistForm(){

    const [formData, setFormData] = useState({
        name: "",
        genre: "",
        image: "",
        spotify: ""
    })
    const navigate = useNavigate()
        const {addArtist} = (useOutletContext())
        
    function handleSubmit(event){
        event.preventDefault()

        addArtist(formData)

        setFormData({name: "", genre: "", image: "", spotify: ""})

        navigate('/artists')

    }
    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <h4>
            <p>Do you have an artist you feel should be showcased on our page?
                <br/> Use the form below to do just that!
            </p>
        <br/>
        <form onSubmit={handleSubmit}>
            <label>Name:
            <input onChange={updateFormData} type="text" name="name" placeholder="Artist Name..." value={formData.name}/></label>
            <br/>
            <label>Genre:
            <input onChange={updateFormData} type="text" name="genre" placeholder="Subgenre..." value={formData.genre}/></label>
            <br/>
            <label>Image:
            <input onChange={updateFormData} type="text" name="image" placeholder="Image Link..." value={formData.image}/></label>
            <br/>
            <label>Spotify:
            <input onChange={updateFormData} type="text" name="spotify" placeholder="Spotify Link..." value={formData.spotify}/></label>
            <br/>
            <button type="submit">Add Artist</button>
        </form></h4>
    )
}

export default NewArtistForm;