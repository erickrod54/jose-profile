/**Jose-profile web - version 1 - data js - Features:
 * 
 *      --> Keeping the 'scheme' object
 *          can be useful later
 * 
 * Notes: For now all routes are targetting to
 * home, but eventually in next version i'll
 * fix it routing to each route matching the
 * right Component-Page
*/

export const scheme = [ 
    {
        id: 1,
        sectionname:'intro',
        name: 'jose antonio velazco pahmer',
        text: 'Although it is true that I am a young professional with less experience than other candidates, my learning and decision-making capacity makes me the ideal candidate for those companies that wish to create a young, innovative and demanding team.',
        url:'/intro'
    }, 
    {
        id:2,
        sectionname:'work experience',
        workexperience:[
            {
                id:'1',
                roltitle:'Data Analyst',
                company:'Cognizant',
                experience1:'I work with content and data both Spanish and English',
                experience2:'Specific teams to catalog the data according to different workflows and guidelines',
                experience3:' I work with Artificial Intelligence to teach the machine specific tasks for different types of data.',
                experience4:' Keep a very close contact between team coworkers and teamleads to coordinate the tasks.',
                year: '2021-(current)'
            }, 
            {
                id:'2',
                roltitle:'Intern',
                company: 'Fondazione Aligi Sassu e Helenita Olivares',
                experience1:' I  worked and lived for a little over two years at the Aligi Sassu and Helenita Olivares foundation in Mallorca-Spain',
                experience2:'The job was taking care of the foundation, organize and help with anything that was needed, there i developed my communication skills with italian language',
                year: '2018-2020'
            },
        ],
        url:'/work-experience'
    }, 
    {
        id: 3,
        sectionname:'skills',
        title:'skills',
        skill1:'Problem Solving and Decision Making',
        skill2:'Strong communication, creativity and team work',
        skill3:' Adaptability to new tasks and tools',
        skill4:'Microsoft Office Word, Excel, PowerPoint',
        url:'/skills'
    }
]