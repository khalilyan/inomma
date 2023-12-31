import React from 'react'
import './Footer.css'
import './Responsive.css'
import Navigation from '../Navigation/Navigation'
import facebook from '../../../assets/facebook.svg'
import linkedIn from '../../../assets/linkedIn.svg'
import SymbolRender from '../../symbolRender/SymbolRender'
import LogoLarge from './LogoLarge'

export default function Footer() {
  return (
    <footer>
        <div className='footerContain' >

            <Navigation/>

            <div className="footerSlice2">
                <LogoLarge/>
                <p>Copy of inomma Website</p>
            </div>

            <div className="footerSlice3">
                <ul className="socialList">
                    <li>
                        <a href='https://www.facebook.com/' >
                            <img src={facebook} alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/'>
                            <img src={linkedIn} alt="linkedIn" />
                        </a>
                    </li>
                </ul>
                <a>{<SymbolRender header={false} text={'hello@inomma.com'} />}</a>
            </div>
            
        </div>
    </footer>
  )
}
