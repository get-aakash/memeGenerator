import React from 'react'

const Main = () => {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [value, setValue] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    function handleChange(event) {
        console.log(event.currentTarget)
        const { value, name } = event.currentTarget
        setValue(prevData => ({ ...prevData, [name]: value }))
    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setStarWarsData(data.data.memes))

    }, [])
    function handleButtonClick() {
        const randomItem = starWarsData[Math.floor(Math.random() * starWarsData.length)];
        setValue(prevData=> ({...prevData, imageUrl: randomItem.url}))

    }




    return (
        <main>

            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not si mply"
                        name="topText"
                        onChange={handleChange}
                        value={value.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={value.bottomText}
                    />
                </label>
                <button onClick={handleButtonClick}>Get a new meme image 🖼</button>
            </div>

            {

                <div className="meme" key={value.id}>
                    <img src={value.imageUrl} />
                    <span className="top">{value.topText}</span>
                    <span className="bottom">{value.bottomText}</span>
                </div>




            }


        </main>
    )
}

export default Main
