import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Accordion } from '@chakra-ui/react'
import { AccordionItem } from '@chakra-ui/react'
import { AccordionIcon } from '@chakra-ui/react'
import { AccordionButton } from '@chakra-ui/react'
import { AccordionPanel } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'


export const SideNav = () => {
  return (
    <section className="h-[87vh] w-1/5 p-4 grid grid-cols-1 bg-black text-white overflow-y-scroll custom-scrollbar">
      <div className="h-auto w-full my-2 flex items-center text-gray-400 hover:text-white">
        <FontAwesomeIcon icon={faCircleArrowLeft} />
        <p className="h-auto w-auto mx-2">Back to courses</p>
      </div>

      <div className="h-auto w-auto my-2 grid grid-cols-1 grid-rows-2">
         <p className="h-auto w-auto place-content-start text-gray-400">Course</p>
         <p className="h-auto w-auto place-content-start">Blender 3D Fundamentals</p>
      </div>

      {
        [
          [1,"Course Introduction",],
          [2,"Basics of Blender 3D"],
          [3,"Mesh Modeling"],
          [4,"Mesh Editing Operations"],
          [5,"Most Common Modifiers"],
          [6,"Orthographic Reference"],
          [7,"Sculpting"],
        ].map(([key,title]) => (
          <Accordion key={key} className="text-gray-400" defaultIndex={[0]} allowMultiple>
          <AccordionItem>
     
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                {title}
              </Box>
           <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
              <div className="h-auto w-auto flex items-center hover:text-white">
                 <p>1</p>
                 <p className="mx-2">Introduction</p>
              </div>
              <div className="h-auto w-auto flex items-center hover:text-white">
                 <p>2</p>
                 <p className="mx-2">Download Blender</p>
              </div>
              <div className="h-auto w-auto flex items-center hover:text-white">
                 <p>3</p>
                 <p className="mx-2">Settings and Prreference</p>
              </div>
              <div className="h-auto w-auto flex items-center hover:text-white">
                 <p>4</p>
                 <p className="mx-2">Blender Interface</p>
              </div>
           </AccordionPanel>
         </AccordionItem>
        </Accordion>
      ))}

    </section>
  )
}
