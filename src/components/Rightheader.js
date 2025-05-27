//Import fontAwesome icons
import { faAdd, faFaceSmileBeam} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Rightheader = () => {
  return (
    <>
    <div className='rightheader'>
        <div className='fapersondiv'>
            <FontAwesomeIcon icon={faFaceSmileBeam} className='personicon'/>
        </div>
        <div className='faadddiv'>
            <FontAwesomeIcon icon={faAdd} className='addicon'/>
        </div>
    </div>
    </>
  )
}

export default Rightheader