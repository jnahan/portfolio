import checkmate from "../images/card/checkmate.png"
import cibi from "../images/card/cibi.png"
import bondit from "../images/card/bondit.png"
import esp from "../images/card/esp.png"
import drawTog from "../images/card/draw-together.png"
import dailyUI from "../images/card/daily-ui.png"
import about from "../images/card/about.png"

export const projects = [
    {
        title: "Checkmate",
        description: "Habit tracker that actually holds you accountable", 
        link: "checkmate", 
        imgSrc: checkmate, 
        imgAlt: "Checkmate Case Study", 
        chips: [
            "UI Design",
            "UX Research",
            "User Testing"
        ],
        size: "card--large"
    },
    {
        title: "Bondit",
        description: "Helping college students bond", 
        link: "bondit", 
        imgSrc: bondit, 
        imgAlt: "Bondit Case Study", 
        chips: [
            "UX Research"
        ],
        size: "card--small"
    },
    {
        title: "Cibi",
        description: "Dine out for less", 
        link: "cibi", 
        imgSrc: cibi, 
        imgAlt: "Cibi Case Study", 
        chips: [
            "UI Design",
            "UX Research"
        ],
        size: "card--small"
    },
    {
        title: "Equitable Syllabus Project",
        description: "Resource hub to help professors create an equitable syllabus", 
        link: "equitable-syllabus-project", 
        imgSrc: esp, 
        imgAlt: "Equitable Syllabus Project Case Study", 
        chips: [
            "UI Design",
            "UX Research",
            "Web Dev"
        ],
        size: "card--large"
    },
    {
        title: "Draw Together",
        description: "Collaborative art games", 
        link: "draw-together", 
        imgSrc: drawTog, 
        imgAlt: "Draw Together Case Study", 
        chips: [
            "UI Design",
            "Web Dev"
        ]
    },
    {
        title: "Daily UI",
        description: "50 days of UI design", 
        link: "daily-ui", 
        imgSrc: dailyUI, 
        imgAlt: "Daily UI Challenge Case Study", 
        chips: [
            "UI Design",
            "Graphic Design"
        ]
    },
    {
        title: "About Me",
        description: "Learn more about me", 
        link: "about", 
        imgSrc: about, 
        imgAlt: "About Me", 
        chips: [
            "Jenna Han"
        ]
    }
]