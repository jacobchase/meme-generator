import React from "react"

export default function Body(){

    
    const [meme,setMeme] = React.useState({topText:"One does not simply", bottomText:"walk into Mordor", imageURL:"http://i.imgflip.com/1bij.jpg"})
    
    function handleChange(event){
            const {value, name} = event.currentTarget
            setMeme(prevInfo => 
                ({...prevInfo, [name]: value})
            )
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
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageURL} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
        )
}