import "/node_modules/flag-icons/css/flag-icons.min.css";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**Jose-profile web - version 2.07 - data js - Features:
 * 
 *      --> Editing 'text' from 'headerData'.
 * 
 * Notes: Still pending to clean more the data 
*/

export const GitHubIcon =<FontAwesomeIcon icon={faSquareGithub} />

export const headerData = [
    {
        id: 1,
        sectionname:'JP | Jose Antonio Velasco Pahmer Profile',
        text: 'welcome to my website, checkout my experience !!',
    }
]

export const intro = [
    {
        id: 1,
        sectionname:'about me',
        text: 'Although it is true that I am a young professional with less experience than other candidates, my learning and decision-making capacity makes me the ideal candidate for those companies that wish to create a young, innovative and demanding team.',
    }
]

export const workExperience = [
    {
        id:1,
        roltitle:'Data Analyst Cognizant',
        company:'Cognizant',
        experience1:'I work with content and data both Spanish and English',
        experience2:'Specific teams to catalog the data according to different workflows and guidelines',
        experience3:' I work with Artificial Intelligence to teach the machine specific tasks for different types of data.',
        experience4:' Keep a very close contact between team coworkers and teamleads to coordinate the tasks.',
        year: '2021-(current)'
    }, 
    {
        id:2,
        roltitle:'Intern',
        company: 'Fondazione Aligi Sassu e Helenita Olivares',
        experience1:' I  worked and lived for a little over two years at the Aligi Sassu and Helenita Olivares foundation in Mallorca-Spain',
        experience2:'The job was taking care of the foundation, organize and help with anything that was needed, there i developed my communication skills with italian language',
        year: '2018-2020'
    }
]

export const skills = [
    {
        id: 1,
        title:'skills',
        skillname:'Problem Solving and Decision Making',
    },
    {
        id:2,       
        skillname:'Strong communication, creativity and team work',
    },
    {
        id:3,       
        skillname:' Adaptability to new tasks and tools',
    },
    {
        id:4,       
        skillname:'Microsoft Office Word, Excel, PowerPoint',
        },
]

export const languages = [
    {
     id:1,
     languagestitle:'languages',
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

export const sections = [
    {
        id: 1,
        sectionname:'intro',
        url:'/intro'
    },
    {
        id: 2,
        sectionname:'work experience',
        url:'/work-experience'
    },
    {
        id: 3,
        sectionname:'skills',
        url:'/skills'
    },
    {
        id:4,
        sectionname:'languages',
        url:'/languages'
    }
]