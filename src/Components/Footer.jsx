import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

const Footer = () => {

  const { theme } = useContext(ContextGlobal);

  return (
    <footer style={{width: 'auto'}} className={`footer ${theme}`}>
        <p>Made with  ♥  in  </p>
        <img src="/images/DH.png" alt='DH-logo' />   
    </footer>
  )
}

export default Footer
