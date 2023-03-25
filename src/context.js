import React, { useContext } from "react"
import { GitHubIcon, headerData, intro, languages, skills, workExperience } from "./data";

/**Jose-profile web - version 2.02 - JoseProfileContext - Features:
 * 
 *      --> Refactoring the context.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const JoseProfileContext = React.createContext();

export const JoseProfileProvider = ({ children }) => {

    
    
    return(
        <JoseProfileContext.Provider
        value={{
                headerData,
                intro,
                workExperience,
                skills,
                languages,
                GitHubIcon
                }}
        >
            {children}
        </JoseProfileContext.Provider>
    )
} 

export const useJoseProfileContext = () => {
    return useContext(JoseProfileContext)
}