import React from 'react'
import '../Branding/Branding.css'
import logo1 from '../Assets/logo1.png'
import logo2 from '../Assets/logo2.png'
import logo3 from '../Assets/logo3.png'

function Branding() {
    return (
        <div class='logossection'>
            <div class="textlogo">SOME OF THE WORLD'S MOST RESPECTED COMPANIES TRUST FLATPACK</div>

            <div class="paddingupdown">
            <img src={logo1}  height="38px" />
            <img src={logo2}  height="38px" />
            <img src={logo3}  height="38px" />
            </div>

        </div>
    )
}

export default Branding
