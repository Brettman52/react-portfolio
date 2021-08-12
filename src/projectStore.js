import notefulPic from './images/NotefulPic.png'
import reactPortPic from './images/react-port-pic.png'
import recipePic from './images/recipe-pic.png'

const projectData = [

    {
        heading: "Noteful",
        imageSrc: 
            notefulPic
        ,
        desc: "Noteful is an app developed to create, temporarily save, and delete notes within" +
                " a customer folder. This app was created using React, React Router, React Contex" +
                "t, Material-UI, Styled components and employs controlled components for real-tim" +
                "e field validation.",
        liveLink: "https://noteful-phi-seven.vercel.app/",
        codeLink: "https://github.com/Brettman52/Noteful/tree/main/src",
    }, 
    {
        heading: "Recipe Explorer",
        imageSrc: 
            recipePic
        ,
        desc: "One of my very first programs - The Recipe Explorer app. This app was created to help users browse recipes related to a food item entered. This app utilizes two separate APIs: one API returns \"paper\" recipes while the other returns YouTube videos. This app was built using HTML, CSS, Javascript, jQuery, and utilizes Fetch API.",
        liveLink:"https://brettman52.github.io/APICapstone/index.html",
        codeLink:"https://github.com/Brettman52/APICapstone"
    },
    {
        heading: "React Portfolio",
        imageSrc: 
            reactPortPic
        ,
        desc: "This is what you are looking at right now! My React portfolio was built using React, Styled Components, and the React-Animations library.",
        liveLink:"",
        codeLink:""
    },
  
]

export default projectData;