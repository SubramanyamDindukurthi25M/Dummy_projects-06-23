import { useState,useEffect } from "react"
import { ButtonEle } from "./Components/ButtonEle"

export const App = () => {
    const [color, setColor] = useState('');

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color])

    return (
        <>
            <h2 className="text-center my-2 text-dark">
                Color Picker Assignment
            </h2>

            <div className="btn-section">
                <div className="row">
                    <ButtonEle
                        changeState = {setColor}
                    />
                </div>
            </div>
            <h3 className="text-center my-5">
                Background Color : {color}
            </h3>
        </>
    )
}