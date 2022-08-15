import React from "react";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    /**here is data set and i'll  
     * get it using the provider on a destination 
     * component*/
    const scheme = [ 
        {
            id: 1,
            name: 'jose antonio velazco pahmer',
            intro: 'Although it is true that I am a young professional with less experience than other candidates, my learning and decision-making capacity makes me the ideal candidate for those companies that wish to create a young, innovative and demanding team.',
        }, 
        {
            id: 2,
            roltitle:'Data Analyst Cognizant',
            company:'',
            comment:'ramdom comment 2',
            experience1:'I work with content and data both Spanish and English',
            experience2:'Specific teams to catalog the data according to different workflows and guidelines',
            experience3:' I work with Artificial Intelligence to teach the machine specific tasks for different types of data.',
            experience4:' Keep a very close contact between team coworkers and teamleads to coordinate the tasks.',
            year: '2021-(current)'
        }, 
        {
            id: 3,
            roltitle:'Intern',
            company: 'Fondazione Aligi Sassu e Helenita Olivares',
            experience1:' I  worked and lived for a little over two years at the Aligi Sassu and Helenita Olivares foundation in Mallorca-Spain',
            experience2:'The job was taking care of the foundation, organize and help with anything that was needed, there i developed my communication skills with italian language',
            year: '2018-2020'
        }, 
        {
            id: 4,
            title:'skills',
            skill1:'Problem Solving and Decision Making',
            skill2:'Strong communication, creativity and team work',
            skill3:' Adaptability to new tasks and tools',
            skill4:'Microsoft Office Word, Excel, PowerPoint',
        }
    ]
    
    
    

return(
    /**here i pass everything throught the provider,
     * i spread/copy the state - initalState - and
     * 'handleShow' will keep the action dispatch */
    <AppContext.Provider value={{
        scheme
    }}>
        {children}
    </AppContext.Provider>
    )
} 



export { AppContext, AppProvider };