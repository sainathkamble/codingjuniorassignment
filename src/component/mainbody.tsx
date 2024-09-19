import React from 'react'

export const MainBody = () => {
  return (
    <section className="h-[87vh] w-4/5 p-4 bg-white text-black ml-4 rounded-2xl bg-ehite">
      <div className="h-auto w-1/2 grid grid-cols-1">
        <img src="./background.jpeg"
        className="h-3/5 w-full rounded-2xl" />

        <div className="h-1/10 w-full flex justify-between items-center">
          <div className="h-full w-auto flex">
            <img src="./profile.jpeg" 
            className="h-full w-full rounded-full bg-cover"/>
            <p className="h-auto w-auto text-black">Ryan Gossling</p>
            <p className="h-auto w-auto text-gray-400">Publisher</p>
          </div>  
          <div className="h-full w-auto">

          </div>
        </div>
      </div>

      <div className="h-auto w-1/2 grid grid-cols-1">

      </div>
    </section>
  )
}
