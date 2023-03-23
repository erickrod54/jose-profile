import React from "react";
import styled from "styled-components";
import { ErickQR as QR } from '../assets/index.assets';

/**Jose-profile web - version 2.02 - QRComponent - Features:
 * 
 *      --> Clearing code.
 * 
 *      --> Refactoring the app.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

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