import styled from "styled-components"

/**Jose-profile web - version 3.02 - style.components - Features:
 * 
 *      --> writting 'DescriptionWrapper' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
 */

export const DescriptionWrapper = styled.p`
    line-height: 1.5rem;
    margin: 1rem;
    padding: 1rem;
    font-size: calc(.7rem + 0.637vw);
`

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