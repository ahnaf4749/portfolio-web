import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Homes from "../Pages/Homes/Homes";
import Projects from "../Pages/Projects/Projects";
import ProjectsDetails from "../Pages/Projects/ProjectsDetails";
import Skill from "../Pages/Skill/Skill";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homes></Homes>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skills',
                element: <Skill></Skill>
            },
            {
                path: 'blog',
                // element:
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/projects/:id',
                element: <ProjectsDetails></ProjectsDetails>,
                loader: ({ params }) => fetch(`projects.json/projects/${params.id}`)
            }
        ]
    }
])