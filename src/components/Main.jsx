import React from 'react'
import { data } from "../data"

const Main = () => {
    const [value, setValue] = React.useState(data)
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>

            {
                value.map((item) => {
                    return (
                        <div className="meme" key={item.id}>
                            <img src={item.imageUrl} />
                            <span className="top">{item.topText}</span>
                            <span className="bottom">{item.bottomText}</span>
                        </div>

                    )

                })
            }


        </main>
    )
}

export default Main
