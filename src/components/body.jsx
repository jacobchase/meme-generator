import React from "react"

export default function Body(){

    
    const [meme,setMeme] = React.useState({topText:"One does not simply", bottomText:"walk into Mordor", imageURL:"http://i.imgflip.com/1bij.jpg"})
    const [allMemes,setAllMemes] = React.useState([])

    React.useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes)
        )
    },[])

    function handleChange(event){
            const {value, name} = event.currentTarget
            setMeme(prevInfo => 
                ({...prevInfo, [name]: value})
            )
    }
    function getMemeImage(){

        const memeNumber=Math.floor(Math.random() * allMemes.length)
        const newMemeURL=allMemes[memeNumber].url
        setMeme(prevMeme => ({
            ...meme,
            imageURL:newMemeURL
        }))
    }

    return (
<main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageURL} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
        )
}