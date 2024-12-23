import styled from "styled-components"

/**Jose-profile web - version 3.00 - style.components - Features:
 * 
 *      --> writting 'IntroTitle' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
 */

export const IntroTitle = styled.h2`
   color: var(--clr-primary-13);
   font-weight: 700;
   text-transform: capitalize;
   font-size: var(--font-size-secondary-title);
`

export const IntroContainer = styled.section`
    display: grid;
    width: 30rem;
    height: fit-content;
    grid-column: center-start / col-end 3;
    grid-template-rows: repeat(2);
    background: white;
`