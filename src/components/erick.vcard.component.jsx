import React from "react";
import styled from "styled-components";
import { ErickQR } from '../assets/index'

/**jose-profile page - version 2 - QRDev Component- 
 * Features: 
 * 
 *      --> Importing, placing and styling 
 *          'ErickQR'. 
 * 
 * Notes: By this version i'll work on styling the app 
 * and add essential components
 * */

const QRDev = () => {

    return(
        <QRWrapper>
            <img src={ErickQR} alt='jose-qr-card' name='jose-qr-card'/>
        </QRWrapper>
    )
}

const QRWrapper = styled.div`
    

    img{
        width: 5rem;
        height: 5rem;
    }
`

export default QRDev;