import React from "react";
import styled from "styled-components";
import { QR } from '../assets/index'

/**jose-profile page - version 2 - QRComponent Component - 
 * Features: 
 * 
 *      --> Importing, placing and styling 
 *          'QRComponent'. 
 * 
 * Notes: By this version i'll work on styling the app 
 * and add essential components
 * */

const QRComponent = () => {

    return(
        <QRWrapper>
            <img src={QR} alt='jose-qr-card' name='jose-qr-card'/>
        </QRWrapper>
    )
}

const QRWrapper = styled.div`
    

    img{
        width: 5rem;
        height: 5rem;
    }
`

export default QRComponent;