import trollface from "/src/assets/troll-face-png-1.png"

export default function Header() {
    return (
        <header className="header">
             <img 
                 src={trollface}
            />
            <h1>Meme Generator</h1>
        </header>
    )
}