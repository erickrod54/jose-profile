import React, { useContext } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

/**Jose-profile web - version 1 - context js - Features:
 * 
 *      --> Setting the context with 'AppContext',
 *          'AppProvider' and 'useAppContext'
 * 
 *      --> Building the 'intro', 'workexperience',
 *          'skills', 'languages' and 'sections'
 *          and providing it throught the
 *          provider.
 * 
 * Notes: For now all routes are targetting to
 * home, but eventually in next version i'll
 * fix it routing to each route matching the
 * right Component-Page
*/
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    /**here is data set and i'll  
     * get it using the provider on a destination 
     * component*/

const intro = [
    {
        id: 1,
        sectionname:'intro',
        name: 'jose antonio velazco pahmer',
        text: 'Although it is true that I am a young professional with less experience than other candidates, my learning and decision-making capacity makes me the ideal candidate for those companies that wish to create a young, innovative and demanding team.',
    }
]

const workexperience = [
    {
        id:'2',
        roltitle:'Data Analyst Cognizant',
        company:'',
        experience1:'I work with content and data both Spanish and English',
        experience2:'Specific teams to catalog the data according to different workflows and guidelines',
        experience3:' I work with Artificial Intelligence to teach the machine specific tasks for different types of data.',
        experience4:' Keep a very close contact between team coworkers and teamleads to coordinate the tasks.',
        year: '2021-(current)'
    }, 
    {
        id:'3',
        roltitle:'Intern',
        company: 'Fondazione Aligi Sassu e Helenita Olivares',
        experience1:' I  worked and lived for a little over two years at the Aligi Sassu and Helenita Olivares foundation in Mallorca-Spain',
        experience2:'The job was taking care of the foundation, organize and help with anything that was needed, there i developed my communication skills with italian language',
        year: '2018-2020'
    },
]

const skills = [
    {
    id: 4,
    sectionname:'skills',
    title:'skills',
    skill1:'Problem Solving and Decision Making',
    skill2:'Strong communication, creativity and team work',
    skill3:' Adaptability to new tasks and tools',
    skill4:'Microsoft Office Word, Excel, PowerPoint',
    }
]

const languages = [
    {
     id:1,
     languagename:'spanish', 
     icon: <span className='fi fi-ve'/>
    },
    {
     id:2,
     languagename:'italian',
     icon: <span className='fi fi-it'/>
    },
    {
     id:3,
     languagename:'english',
     icon: <span className='fi fi-us'/>
    }
]

const sections = [
    {
        id: 5,
        sectionname:'intro',
        url:'/intro'
    },
    {
        id: 6,
        sectionname:'work experience',
        url:'/work-experience'
    },
    {
        id: 7,
        sectionname:'skills',
        url:'/skills'
    },
    {
        id:8,
        sectionname:'languages',
        url:'/languages'
    }
]
    

return(
    /**here i pass everything throught the provider,
     * i spread/copy the state - initalState - and
     * 'handleShow' will keep the action dispatch */
    <AppContext.Provider value={{
        intro,
        workexperience,
        skills,
        sections,
        languages 
    }}>
        {children}
    </AppContext.Provider>
    )
} 

export const useAppContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider };