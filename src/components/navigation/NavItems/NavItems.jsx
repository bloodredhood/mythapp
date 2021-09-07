import React from "react"
import classes from "./NavItems.module.css"

const NavItems = (props) => {

    const pantheonsList = () => {
        fetch('https://localhost:3000/pantheons')
        .then(response => response.json())
        .then(response => console.log(response))
    }

    pantheonsList()

    const links = [
        { 
            name: "greek",
            link: "https://static.wikia.nocookie.net/smite_gamepedia/images/7/7f/NewUI_Pantheon_Greek.png"
        },
        { 
            name: "roman",
            link: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/18/NewUI_Pantheon_Roman.png"
        },
        { 
            name: "egyptian",
            link: "https://static.wikia.nocookie.net/smite_gamepedia/images/2/27/NewUI_Pantheon_Egyptian.png"
        },
        { 
            name: "norse",
            link: "https://static.wikia.nocookie.net/smite_gamepedia/images/2/2a/NewUI_Pantheon_Norse.png"
        },
        { 
            name: "celtic",
            link: "https://static.wikia.nocookie.net/smite_gamepedia/images/a/a7/NewUI_Pantheon_Celtic.png"
        },
        { 
            name: "slavic",
            link: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/1b/NewUI_Pantheon_Slavic.png"
        },
        { 
            name: "hindu",
            link: "https://static.wikia.nocookie.net/smite_gamepedia/images/f/f8/NewUI_Pantheon_Hindu.png"
        },
        { 
            name: "chinese",
            link: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/0e/NewUI_Pantheon_Chinese.png"
        },
        { 
            name: "japanese",
            link: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/10/NewUI_Pantheon_Japanese.png"
        },
        { 
            name: "maya",
            link: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/42/NewUI_Pantheon_Maya.png"
        },
    ]

    return (
        <div className={classes.maindiv}>
            {links.map(links => (
                <div className={classes.itemdiv}>
                    <img className={classes.images} src={links.link} alt={links.name} />
                </div>
            ))}
        </div>
    )
}

export default NavItems