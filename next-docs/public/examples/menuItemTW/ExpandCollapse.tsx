import { MenuItem } from "@heathmont/moon-core-tw";
import { ControlsChevronDown, ControlsChevronUp } from "@heathmont/moon-icons-tw";
import { useState } from "react";

const Example = () => {
  const [activeOpt, setActiveOpt] = useState(true);
  const [isOpen, setIsOpen] = useState(true)
  return (
  <>
    <div className="w-56 bg-white flex flex-col gap-2 rounded-moon-s-lg p-4">
      <MenuItem>
        Vision
      </MenuItem>
      <MenuItem>
        Getting started
      </MenuItem>
      <MenuItem isActive={activeOpt}>
        How to contribute?
      </MenuItem>
      <MenuItem>
        Colours palette
      </MenuItem>
      <MenuItem>
        Tokens
      </MenuItem>
      <MenuItem>
        Transform SVG
      </MenuItem>
      <MenuItem>
        Manifest
      </MenuItem>
      <MenuItem isActive={activeOpt}>
          Tailwind
          {isOpen ?
            <ControlsChevronUp onClick={() => setIsOpen(!isOpen)} />
          : <ControlsChevronDown onClick={() => setIsOpen(!isOpen)} />}
        </MenuItem>

        {isOpen && (
          <>
            <MenuItem>
              <ControlsChevronDown className="w-6 " color="transparent"  />
              <MenuItem.Title> Accordion</MenuItem.Title>
           </MenuItem>
            <MenuItem>
              <ControlsChevronDown className="w-6 " color="transparent"  />
              <MenuItem.Title> Avatar</MenuItem.Title>
            </MenuItem>
            <MenuItem>
              <ControlsChevronDown className="w-6 " color="transparent"  />
              <MenuItem.Title> Breadcrumb</MenuItem.Title>
            </MenuItem>
            <MenuItem>
              <ControlsChevronDown className="w-6 " color="transparent"  />
              <MenuItem.Title> Button</MenuItem.Title>
            </MenuItem>
            <MenuItem>
              <ControlsChevronDown className="w-6 " color="transparent"  />
              <MenuItem.Title> Checkbox</MenuItem.Title>
            </MenuItem>
          </>
        )}
      </div>
      
    <div className="w-56 bg-white flex flex-col gap-2 rounded-moon-s-lg p-4">
        <MenuItem>
            <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
            <p className='leading-4 font-semibold text-moon-10'>B</p>
          </span>
          <MenuItem.Title><p className="leading-6 text-moon-14 font-semibold">Bitcasino</p></MenuItem.Title>
         </MenuItem>
        <MenuItem>
          {isOpen ?
            <ControlsChevronUp onClick={() => setIsOpen(!isOpen)} />
          : <ControlsChevronDown onClick={() => setIsOpen(!isOpen)} />}
          <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
          <p className='leading-4 font-semibold text-moon-10'>CX</p>
          </span>
          <MenuItem.Title> Customer...</MenuItem.Title>
        </MenuItem>
        
          {isOpen && (
            <>
           <MenuItem>
            <ControlsChevronDown className="w-6 " color="transparent"  />
            <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
            <p className='leading-4 font-semibold text-moon-10'>S</p>
            </span>
            <MenuItem.Title>Sub nested item</MenuItem.Title>
           </MenuItem>
         <MenuItem>
            <ControlsChevronDown className="w-6 " color="transparent" onClick={() => ''} />
            <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
            <p className='leading-4 font-semibold text-moon-10'>S</p>
            </span>
             <MenuItem.Title>Sub nested item</MenuItem.Title>
         </MenuItem></>
          )}
      
        <MenuItem>
            <ControlsChevronDown className="w-6 " color="trunks" onClick={() => ''} />
            <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
            <p className='leading-4 font-semibold text-moon-10'>CX</p>
            </span>
            <MenuItem.Title>Quality...</MenuItem.Title>
          </MenuItem>
          <MenuItem>
            <ControlsChevronDown className="w-6 " color="trunks" onClick={() => ''} />
            <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
            <p className='leading-4 font-semibold text-moon-10'>RG</p>
            </span>
            <MenuItem.Title>Responsible...</MenuItem.Title>
          </MenuItem>
          <MenuItem>
              <ControlsChevronDown className="w-6 " color="trunks" onClick={() => ''} />
              <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
              <p className='leading-4 font-semibold text-moon-10'>RG</p>
              </span>
              <MenuItem.Title>Responsible...</MenuItem.Title>
        </MenuItem>
        <div className="mt-4">
          <MenuItem>
              <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
              <p className='leading-4 font-semibold text-moon-10'>S</p>
            </span>
            <MenuItem.Title><p className="leading-6 text-moon-14 font-semibold">Sportsbet</p></MenuItem.Title>
          </MenuItem>
          <MenuItem>
              <ControlsChevronDown className="w-6 " color="trunks" onClick={() => ''} />
              <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
              <p className='leading-4 font-semibold text-moon-10'>RG</p>
              </span>
              <MenuItem.Title>Customer...</MenuItem.Title>
          </MenuItem>
          <MenuItem>
              <ControlsChevronDown className="w-6 " color="trunks" onClick={() => ''} />
              <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
              <p className='leading-4 font-semibold text-moon-10'>CX</p>
              </span>
              <MenuItem.Title>Quality...</MenuItem.Title>
            </MenuItem>
          <MenuItem>
            <ControlsChevronDown className="w-6 " color="trunks" onClick={() => ''} />
            <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
            <p className='leading-4 font-semibold text-moon-10'>RG</p>
            </span>
            <MenuItem.Title>Responsible...</MenuItem.Title>
          </MenuItem>
          </div>
        <div className="mt-4">
        <MenuItem>
              <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
              <p className='leading-4 font-semibold text-moon-10'>L</p>
            </span>
            <MenuItem.Title><p className="leading-6 text-moon-14 font-semibold">Livecasino</p></MenuItem.Title>
          </MenuItem>
          <MenuItem>
              <ControlsChevronDown className="w-6 " color="trunks" onClick={() => ''} />
              <span className='bg-goku w-6 h-6 top-2 left-2 rounded-full flex justify-center items-center' >
              <p className='leading-4 font-semibold text-moon-10'>RG</p>
              </span>
              <MenuItem.Title>Customer...</MenuItem.Title>
          </MenuItem>
        </div>
          
    </div>
    </>
  )
}

export default Example;
