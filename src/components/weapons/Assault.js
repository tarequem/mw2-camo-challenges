import React from "react";

//imports of all camo images
import Scales from "../../assets/m4-scales.jpg";
import DesertHybrid from "../../assets/m4-desert-hybrid.jpg";
import DarkLeaves from "../../assets/m4-dark-leaves.jpg";
import NewUrban from "../../assets/m4-new-urban.jpg";

import HiddenSnake from "../../assets/taq-56-hidden-snake.jpg";
import Icepick from "../../assets/taq-56-icepick.jpg";
import StonewallDigital from "../../assets/taq-56-stonewall-digital.jpg";
import BackInBlue from "../../assets/taq-56-back-in-blue.jpg";

import UrbanFoliage from "../../assets/kastov-762-urban-foliage.jpg";
import RipNTear from "../../assets/kastov-762-rip-n-tear.jpg";
import ForestIce from "../../assets/kastov-762-forest-ice.jpg";
import RedTiger from "../../assets/kastov-762-red-tiger.jpg";

import Marshland from "../../assets/lachmann-556-marshland.jpg";
import Pine from "../../assets/lachmann-556-pine.jpg";
import DarkTigerDigital from "../../assets/lachmann-556-dark-tiger-digital.jpg";
import Cthulu from "../../assets/lachmann-556-cthulhu.jpg";

import SpongeTac from "../../assets/stb-556-sponge-tac.jpg";
import BlackTop from "../../assets/stb-556-black-top.jpg";
import Slate from "../../assets/stb-556-slate.jpg";
import NeonPink from "../../assets/stb-556-neon-pink.jpg";

import ModernWoodland from "../../assets/m16-modern-woodland.jpg";
import MarshDigital from "../../assets/m16-marsh-digital.jpg";
import DankForest from "../../assets/m16-dank-forest.jpg";
import Intoxicate from "../../assets/m16-intoxicate.jpg";

import RippleEffect from "../../assets/kastov-74u-ripple-effect.jpg";
/*import JungleDigital from "../../assets/kastov-74u-jungle-digital.jpg";
import CanaryStore from "../../assets/kastov-74u-canary-store.jpg";
import ChemicalReaction from "../../assets/kastov-74u-chemical-reaction.jpg";

import SnowDrift from "../../assets/kastov-545-snowdrift.jpg";
import MudSlide from "../../assets/kastov-545-mudslide.jpg";
import Savannah from "../../assets/kastov-545-savannah.jpg";
import PetriDigital from "../../assets/kastov-545-petri-digital.jpg";

import Charcoal from "../../assets/chimera-charcoal.jpg";
import Aztec from "../../assets/chimera-aztec.jpg";
import Diabolical from "../../assets/chimera-diabolical.jpg";
import SnowLeopard from "../../assets/chimera-snow-leopard.jpg";

import Tarnished from "../../assets/m13b-tarnished.jpg";
import FieldOps from "../../assets/m13b-field-ops.jpg";
import Projectile from "../../assets/m13b-projectile.jpg";
import IceCave from "../../assets/m13b-ice-cave.jpg";*/

import Gold from "../../assets/gold.jpg";
import Platinum from "../../assets/platinum.jpg";
import Polyatomic from "../../assets/polyatomic.jpg";
import Orion from "../../assets/orion.jpg";

export default function Assault() {
    const m4 = [
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
            id: 5,
            src: Gold,
            alt: "Gold - Complete all base camo challenges - Get 3 kills without dying 10 times",
            title: "Gold",
            description: "Complete all base camo challenges - Get 3 kills without dying 10 times"
        },
        {
            id: 6,
            src: Platinum,
            alt: "Platinum - Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills",
            title: "Platinum",
            description: "Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills"
        },
        {
            id: 7,
            src: Polyatomic,
            alt: "Polyatomic - Complete 51 Platinum camo challenges - Get 25 headshot kills",
            title: "Polyatomic",
            description: "Complete 51 Platinum camo challenges - Get 25 headshot kills"
        },
        {
            id: 8,
            src: Orion,
            alt: "Orion. Complete 51 Polyatomic camo challenges",
            title: "Orion",
            description: "Complete 51 Polyatomic camo challenges"
        }
    ]

    const taq56 = [
        {
            id: 1,
            src: HiddenSnake,
            alt: "Hidden Snake - Get the TAQ-56 to level 2 - Get 50 kills with the TAQ-56",
            title: "Hidden Snake",
            description: "Get the TAQ-56 to level 2 - Get 50 kills with the TAQ-56"
        },
        {
            id: 2,
            src: Icepick,
            alt: "Icepick - Get the TAQ-56 to level 8 - Get 10 double kills with the TAQ-56",
            title: "Icepick",
            description: "Get the TAQ-56 to level 8 - Get 10 double kills with the TAQ-56"
        },
        {
            id: 3,
            src: StonewallDigital,
            alt: "Stonewall Digital - Get the TAQ-56 to level 13 - Get 50 kills while ADS with the TAQ-56",
            title: "Stonewall Digital",
            description: "Get the TAQ-56 to level 13 - Get 50 kills while ADS with the TAQ-56"
        },
        {
            id: 4,
            src: BackInBlue,
            alt: "Back in Blue - Get the TAQ-56 to level 19 - Get 15 hipfire kills with the TAQ-56",
            title: "Back in Blue",
            description: " Get the TAQ-56 to level 19 - Get 15 hipfire kills with the TAQ-56"
        },
        {
            id: 5,
            src: Gold,
            alt: "Gold - Complete all base camo challenges - Get 3 kills without dying 10 times",
            title: "Gold",
            description: "Complete all base camo challenges - Get 3 kills without dying 10 times"
        },
        {
            id: 6,
            src: Platinum,
            alt: "Platinum - Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills",
            title: "Platinum",
            description: "Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills"
        },
        {
            id: 7,
            src: Polyatomic,
            alt: "Polyatomic - Complete 51 Platinum camo challenges - Get 25 headshot kills",
            title: "Polyatomic",
            description: "Complete 51 Platinum camo challenges - Get 25 headshot kills"
        },
        {
            id: 8,
            src: Orion,
            alt: "Orion. Complete 51 Polyatomic camo challenges",
            title: "Orion",
            description: "Complete 51 Polyatomic camo challenges"
        }
    ]

    const kastov762 = [
        {
            id: 1,
            src: UrbanFoliage,
            alt: "Urban Foliage - Get the Kastov-762 to level 2 - Get 50 kills with the Kastov-762",
            title: "Urban Foliage",
            description: "Get the Kastov-762 to level 2 - Get 50 kills with the Kastov-762"
        },
        {
            id: 2,
            src: RipNTear,
            alt: "Rip N' Tear - Get the Kastov-762 to level 8 - Get 20 kills while mounted with the Kastov-762",
            title: "Rip N' Tear",
            description: "Get the Kastov-762 to level 8 - Get 20 kills while mounted with the Kastov-762"
        },
        {
            id: 3,
            src: ForestIce,
            alt: "Forest Ice - Get the Kastov-762 to level 14 - Get 50 kills while ADS with the Kastov-762",
            title: "Forest Ice",
            description: "Get the Kastov-762 to level 14 - Get 50 kills while ADS with the Kastov-762"
        },
        {
            id: 4,
            src: RedTiger,
            alt: "Red Tiger - Get the Kastov-762 to level 20 - Get 15 kills from behind with the Kastov-762",
            title: "Red Tiger",
            description: "Get the Kastov-762 to level 20 - Get 15 kills from behind with the Kastov-762"
        },
        {
            id: 5,
            src: Gold,
            alt: "Gold - Complete all base camo challenges - Get 3 kills without dying 10 times",
            title: "Gold",
            description: "Complete all base camo challenges - Get 3 kills without dying 10 times"
        },
        {
            id: 6,
            src: Platinum,
            alt: "Platinum - Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills",
            title: "Platinum",
            description: "Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills"
        },
        {
            id: 7,
            src: Polyatomic,
            alt: "Polyatomic - Complete 51 Platinum camo challenges - Get 25 headshot kills",
            title: "Polyatomic",
            description: "Complete 51 Platinum camo challenges - Get 25 headshot kills"
        },
        {
            id: 8,
            src: Orion,
            alt: "Orion. Complete 51 Polyatomic camo challenges",
            title: "Orion",
            description: "Complete 51 Polyatomic camo challenges"
        }
    ]

    const lachmann556 = [
        {
            id: 1,
            src: Marshland,
            alt: "Marshland - Get the Lachmann-556 to level 2 - Get 50 kills with the Lachmann-556",
            title: "Marshland",
            description: "Get the Lachmann-556 to level 2 - Get 50 kills with the Lachmann-556"
        },
        {
            id: 2,
            src: Pine,
            alt: "Pine - Get the Lachmann-556 to level 8 - Get 10 double kills with the Lachmann-556",
            title: "Pine",
            description: "Get the Lachmann-556 to level 8 - Get 10 double kills with the Lachmann-556"
        },
        {
            id: 3,
            src: DarkTigerDigital,
            alt: "Dark Tiger Digital - Get the Lachmann-556 to level 14 - Get 50 kills using a suppressor with the Lachmann-556",
            title: "Dark Tiger Digital",
            description: "Get the Lachmann-556 to level 14 - Get 50 kills using a suppressor with the Lachmann-556"
        },
        {
            id: 4,
            src: Cthulu,
            alt: "Cthulu - Get the Lachmann-556 to level 19 - Get 10 hipfire kills with the Lachmann-556",
            title: "Cthulu",
            description: "Get the Lachmann-556 to level 19 - Get 10 hipfire kills with the Lachmann-556"
        },
        {
            id: 5,
            src: Gold,
            alt: "Gold - Complete all base camo challenges - Get 3 kills without dying 10 times",
            title: "Gold",
            description: "Complete all base camo challenges - Get 3 kills without dying 10 times"
        },
        {
            id: 6,
            src: Platinum,
            alt: "Platinum - Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills",
            title: "Platinum",
            description: "Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills"
        },
        {
            id: 7,
            src: Polyatomic,
            alt: "Polyatomic - Complete 51 Platinum camo challenges - Get 25 headshot kills",
            title: "Polyatomic",
            description: "Complete 51 Platinum camo challenges - Get 25 headshot kills"
        },
        {
            id: 8,
            src: Orion,
            alt: "Orion. Complete 51 Polyatomic camo challenges",
            title: "Orion",
            description: "Complete 51 Polyatomic camo challenges"
        }
    ]

    const stb556 = [
        {
            id: 1,
            src: SpongeTac,
            alt: "Sponge Tac - Get the STB-556 to level 2 - Get 50 kills with the STB-556",
            title: "Sponge Tac",
            description: "Get the STB-556 to level 2 - Get 50 kills with the STB-556"
        },
        {
            id: 2,
            src: BlackTop,
            alt: "Black Top - Get the STB-556 to level 8 - Get 20 kills while mounted with the STB-556",
            title: "Black Top",
            description: "Get the STB-556 to level 8 - Get 20 kills while mounted with the STB-556"
        },
        {
            id: 3,
            src: Slate,
            alt: "Slate - Get the STB-556 to level 14 - Get 10 double kills with the STB-556",
            title: "Slate",
            description: "Get the STB-556 to level 14 - Get 10 double kills with the STB-556"
        },
        {
            id: 4,
            src: NeonPink,
            alt: "Neon Pink - Get the STB-556 to level 20 - Get 30 kills while crouched with the STB-556",
            title: "Neon Pink",
            description: "Get the STB-556 to level 20 - Get 30 kills while crouched with the STB-556"
        },
        {
            id: 5,
            src: Gold,
            alt: "Gold - Complete all base camo challenges - Get 3 kills without dying 10 times",
            title: "Gold",
            description: "Complete all base camo challenges - Get 3 kills without dying 10 times"
        },
        {
            id: 6,
            src: Platinum,
            alt: "Platinum - Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills",
            title: "Platinum",
            description: "Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills"
        },
        {
            id: 7,
            src: Polyatomic,
            alt: "Polyatomic - Complete 51 Platinum camo challenges - Get 25 headshot kills",
            title: "Polyatomic",
            description: "Complete 51 Platinum camo challenges - Get 25 headshot kills"
        },
        {
            id: 8,
            src: Orion,
            alt: "Orion. Complete 51 Polyatomic camo challenges",
            title: "Orion",
            description: "Complete 51 Polyatomic camo challenges"
        }
    ]

    const m16 = [
        {
            id: 1,
            src: ModernWoodland,
            alt: "Modern Woodland - Get the M16 to level 2 - Get 50 kills with the M16",
            title: "Modern Woodland",
            description: "Get the M16 to level 2 - Get 50 kills with the M16"
        },
        {
            id: 2,
            src: MarshDigital,
            alt: "Marsh Digital - Get the M16 to level 6 - Get 10 double kills with the M16",
            title: "Marsh Digital",
            description: "Get the M16 to level 6 - Get 10 double kills with the M16"
        },
        {
            id: 3,
            src: DankForest,
            alt: "Dank Forest - Get the M16 to level 11 - Get 30 kills while crouched with the M16",
            title: "Dank Forest",
            description: "Get the M16 to level 11 - Get 30 kills while crouched with the M16"
        },
        {
            id: 4,
            src: Intoxicate,
            alt: "Intoxicate - Get the M16 to level 15 - Get 20 kills while mounted with the M16",
            title: "Intoxicate",
            description: "Get the M16 to level 15 - Get 20 kills while mounted with the M16"
        },
        {
            id: 5,
            src: Gold,
            alt: "Gold - Complete all base camo challenges - Get 3 kills without dying 10 times",
            title: "Gold",
            description: "Complete all base camo challenges - Get 3 kills without dying 10 times"
        },
        {
            id: 6,
            src: Platinum,
            alt: "Platinum - Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills",
            title: "Platinum",
            description: "Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills"
        },
        {
            id: 7,
            src: Polyatomic,
            alt: "Polyatomic - Complete 51 Platinum camo challenges - Get 25 headshot kills",
            title: "Polyatomic",
            description: "Complete 51 Platinum camo challenges - Get 25 headshot kills"
        },
        {
            id: 8,
            src: Orion,
            alt: "Orion. Complete 51 Polyatomic camo challenges",
            title: "Orion",
            description: "Complete 51 Polyatomic camo challenges"
        }
    ]

    const kastov74u = [
        {
            id: 1,
            src: RippleEffect,
            alt: "Ripple Effect - Get the Kastov-74u to level 2 - Get 50 kills with the Kastov-74u",
            title: "Ripple Effect",
            description: "Get the Kastov-74u to level 2 - Get 50 kills with the Kastov-74u"
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
            id: 5,
            src: Gold,
            alt: "Gold - Complete all base camo challenges - Get 3 kills without dying 10 times",
            title: "Gold",
            description: "Complete all base camo challenges - Get 3 kills without dying 10 times"
        },
        {
            id: 6,
            src: Platinum,
            alt: "Platinum - Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills",
            title: "Platinum",
            description: "Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills"
        },
        {
            id: 7,
            src: Polyatomic,
            alt: "Polyatomic - Complete 51 Platinum camo challenges - Get 25 headshot kills",
            title: "Polyatomic",
            description: "Complete 51 Platinum camo challenges - Get 25 headshot kills"
        },
        {
            id: 8,
            src: Orion,
            alt: "Orion. Complete 51 Polyatomic camo challenges",
            title: "Orion",
            description: "Complete 51 Polyatomic camo challenges"
        }
    ]

    const kastov545 = [
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
            id: 5,
            src: Gold,
            alt: "Gold - Complete all base camo challenges - Get 3 kills without dying 10 times",
            title: "Gold",
            description: "Complete all base camo challenges - Get 3 kills without dying 10 times"
        },
        {
            id: 6,
            src: Platinum,
            alt: "Platinum - Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills",
            title: "Platinum",
            description: "Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills"
        },
        {
            id: 7,
            src: Polyatomic,
            alt: "Polyatomic - Complete 51 Platinum camo challenges - Get 25 headshot kills",
            title: "Polyatomic",
            description: "Complete 51 Platinum camo challenges - Get 25 headshot kills"
        },
        {
            id: 8,
            src: Orion,
            alt: "Orion. Complete 51 Polyatomic camo challenges",
            title: "Orion",
            description: "Complete 51 Polyatomic camo challenges"
        }
    ]

    const chimera = [
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
            id: 5,
            src: Gold,
            alt: "Gold - Complete all base camo challenges - Get 3 kills without dying 10 times",
            title: "Gold",
            description: "Complete all base camo challenges - Get 3 kills without dying 10 times"
        },
        {
            id: 6,
            src: Platinum,
            alt: "Platinum - Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills",
            title: "Platinum",
            description: "Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills"
        },
        {
            id: 7,
            src: Polyatomic,
            alt: "Polyatomic - Complete 51 Platinum camo challenges - Get 25 headshot kills",
            title: "Polyatomic",
            description: "Complete 51 Platinum camo challenges - Get 25 headshot kills"
        },
        {
            id: 8,
            src: Orion,
            alt: "Orion. Complete 51 Polyatomic camo challenges",
            title: "Orion",
            description: "Complete 51 Polyatomic camo challenges"
        }
    ]

    const m13b = [
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
            id: 5,
            src: Gold,
            alt: "Gold - Complete all base camo challenges - Get 3 kills without dying 10 times",
            title: "Gold",
            description: "Complete all base camo challenges - Get 3 kills without dying 10 times"
        },
        {
            id: 6,
            src: Platinum,
            alt: "Platinum - Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills",
            title: "Platinum",
            description: "Complete 8 Gold camo challenges with Assault Rifles - Get 25 longshot kills"
        },
        {
            id: 7,
            src: Polyatomic,
            alt: "Polyatomic - Complete 51 Platinum camo challenges - Get 25 headshot kills",
            title: "Polyatomic",
            description: "Complete 51 Platinum camo challenges - Get 25 headshot kills"
        },
        {
            id: 8,
            src: Orion,
            alt: "Orion. Complete 51 Polyatomic camo challenges",
            title: "Orion",
            description: "Complete 51 Polyatomic camo challenges"
        }
    ]

    return(
        <section name="assault">
            <h2>Assault Rifles</h2>
            <div className="md:grid-cols-4 items-center">
                <h3>M4</h3>
                {m4.map(({ id, src, alt, title, description }) => (
                    <div key={id}>
                        <h4>{title}</h4>
                        <img src={src} alt={alt} />
                        <span>{description}</span>
                        <input id={title} type="checkbox" class="checkbox"></input>
                    </div>
                ))}
            </div>

            <div className="md:grid-cols-4 items-center">
                <h3>TAQ-56</h3>
                {taq56.map(({ id, src, alt, title, description }) => (
                    <div key={id}>
                        <h4>{title}</h4>
                        <img src={src} alt={alt} />
                        <span>{description}</span>
                        <input id={title} type="checkbox" class="checkbox"></input>
                    </div>
                ))}
            </div>

            <div className="md:grid-cols-4 items-center">
                <h3>Kastov-762</h3>
                {kastov762.map(({ id, src, alt, title, description }) => (
                    <div key={id}>
                        <h4>{title}</h4>
                        <img src={src} alt={alt} />
                        <span>{description}</span>
                        <input id={title} type="checkbox" class="checkbox"></input>
                    </div>
                ))}
            </div>

            <div className="md:grid-cols-4 items-center">
                <h3>Lachmann-556</h3>
                {lachmann556.map(({ id, src, alt, title, description }) => (
                    <div key={id}>
                        <h4>{title}</h4>
                        <img src={src} alt={alt} />
                        <span>{description}</span>
                        <input id={title} type="checkbox" class="checkbox"></input>
                    </div>
                ))}
            </div>

            <div className="md:grid-cols-4 items-center">
                <h3>STB-556</h3>
                {stb556.map(({ id, src, alt, title, description }) => (
                    <div key={id}>
                        <h4>{title}</h4>
                        <img src={src} alt={alt} />
                        <span>{description}</span>
                        <input id={title} type="checkbox" class="checkbox"></input>
                    </div>
                ))}
            </div>

            <div className="md:grid-cols-4 items-center">
                <h3>M16</h3>
                {m16.map(({ id, src, alt, title, description }) => (
                    <div key={id}>
                        <h4>{title}</h4>
                        <img src={src} alt={alt} />
                        <span>{description}</span>
                        <input id={title} type="checkbox" class="checkbox"></input>
                    </div>
                ))}
            </div>

            <div className="md:grid-cols-4 items-center">
                <h3>Kastov-74u</h3>
                {kastov74u.map(({ id, src, alt, title, description }) => (
                    <div key={id}>
                        <h4>{title}</h4>
                        <img src={src} alt={alt} />
                        <span>{description}</span>
                        <input id={title} type="checkbox" class="checkbox"></input>
                    </div>
                ))}
            </div>

            <div className="md:grid-cols-4 items-center">
                <h3>Kastov-545</h3>
                {kastov545.map(({ id, src, alt, title, description }) => (
                    <div key={id}>
                        <h4>{title}</h4>
                        <img src={src} alt={alt} />
                        <span>{description}</span>
                        <input id={title} type="checkbox" class="checkbox"></input>
                    </div>
                ))}
            </div>

            <div className="md:grid-cols-4 items-center">
                <h3>Chimera</h3>
                {chimera.map(({ id, src, alt, title, description }) => (
                    <div key={id}>
                        <h4>{title}</h4>
                        <img src={src} alt={alt} />
                        <span>{description}</span>
                        <input id={title} type="checkbox" class="checkbox"></input>
                    </div>
                ))}
            </div>

            <div className="md:grid-cols-4 items-center">
                <h3>M13B</h3>
                {m13b.map(({ id, src, alt, title, description }) => (
                    <div key={id}>
                        <h4>{title}</h4>
                        <img src={src} alt={alt} />
                        <span>{description}</span>
                        <input id={title} type="checkbox" class="checkbox"></input>
                    </div>
                ))}
            </div>
        </section>
    )
}