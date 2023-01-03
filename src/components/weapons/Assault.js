import React from "react";
import Scales from "../../assets/m4-scales.jpg";
import DesertHybrid from "../../assets/m4-desert-hybrid.jpg";
import DarkLeaves from "../../assets/m4-dark-leaves.jpg";
import NewUrban from "../../assets/m4-new-urban.jpg";
import Gold from "../../assets/gold.jpg";
import Platinum from "../../assets/platinum.jpg";
import Polyatomic from "../../assets/polyatomic.jpg";
import Orion from "../../assets/orion.jpg";

export default function Assault() {
    const assault = [
        {
            id: 1,
            src: Scales,
            alt: "Scales - Get the M4 to level 2 - Get 50 kills with the M4",
            title: "Scales",
            description: "Get the M4 to level 2 - Get 50 kills with the M4"
        },
        {
            id: 2,
            src: DesertHybrid,
            alt: "Desert Hybrid - Get the M4 to level 8 - Get 50 kills while ADS with the M4",
            title: "Desert Hybrid",
            description: "Get the M4 to level 8 - Get 50 kills while ADS with the M4"
        },
        {
            id: 3,
            src: DarkLeaves,
            alt: "Dark Leaves - Get the M4 to level 13 - Get 10 double kills with the M4",
            title: "Dark Leaves",
            description: "Get the M4 to level 13 - Get 10 double kills with the M4"
        },
        {
            id: 4,
            src: NewUrban,
            alt: "New Urban - Get the M4 to level 19 - Get 15 kills from behind with the M4",
            title: "New Urban",
            description: "Get the M4 to level 19 - Get 15 kills from behind with the M4"
        },
        {
            id: 37,
            src: Gold,
            alt: "Gold - Complete all base camo challenges - Get 3 kills without dying 10 times",
            title: "Gold",
            description: "Complete all base camo challenges - Get 3 kills without dying 10 times"
        },
        {
            id: 38,
            src: Platinum,
            alt: "Platinum - Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills",
            title: "Platinum",
            description: "Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills"
        },
        {
            id: 39,
            src: Polyatomic,
            alt: "Polyatomic - Complete 51 Platinum camo challenges - Get 25 headshot kills",
            title: "Polyatomic",
            description: "Complete 51 Platinum camo challenges - Get 25 headshot kills"
        },
        {
            id: 40,
            src: Orion,
            alt: "Orion. Complete 51 Polyatomic camo challenges",
            title: "Orion",
            description: "Complete 51 Polyatomic camo challenges"
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