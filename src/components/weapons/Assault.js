import React from "react";
import Scales from "../../assets/m4-scales.jpg";

export default function Assault() {
    const assault = [
        {
            id: 1,
            src: Scales,
            alt: "Scales. Get the M4 to level 2 - Get 50 kills with the M4",
            title: "Scales",
            description: "Get the M4 to level 2 - Get 50 kills with the M4"
        }
    ]
    return(
        <section name="assault">
            {assault.map(({ id, src, alt, title, description }) => (
                <div key={id}>
                    <h3>{title}</h3>
                    <br></br>
                    <img src={src} alt={alt} />
                    <br></br>
                    <span>{description}</span>
                    <input type="checkbox"></input>
                </div>
            ))}
        </section>
    )
}