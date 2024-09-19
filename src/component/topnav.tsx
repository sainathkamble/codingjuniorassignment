import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

export const TopNav = () => {
  return (
    <section className="h-[8vh] w-full flex justify-between items-center bg-black">
      <div className="h-full w-1/4 flex items-center text-white">
         <FontAwesomeIcon icon={faBars} className="h-1/2 w-1/2 hover:text-gray-400" />
         <p className="h-auto w-auto font-semibold text-2xl">Quantum</p>
      </div>+

      <div className="h-full w-1/4 flex justify-evenly items-center text-white">
         <FontAwesomeIcon icon={faHeart} className="h-1/2 w-1/2 hover:text-gray-400" />
         <FontAwesomeIcon icon={faBagShopping} className="h-1/2 w-1/2 hover:text-gray-400" />
         <FontAwesomeIcon icon={faBell} className="h-1/2 w-1/2 hover:text-gray-400" />
      </div>
    </section>
  )
}
