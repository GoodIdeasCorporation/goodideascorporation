import React from 'react'
import { Button } from '@nextui-org/react';
import { MenuItemType , MenuItems} from "../assets/config";
import {Divider} from "@nextui-org/divider";
import { useRouter } from 'next/router';


type MenuProps = { 
  setIsOpen : any
}
const ResponsiveMenu : React.FC <MenuProps> = ({setIsOpen}) => {
  const router = useRouter();
  return (
     <div className="w-full pt-2 pb-2 text-black bg-white min-[700px]:hidden block">
        {MenuItems.map((item:MenuItemType , index : number) => {
          const isBottom =  index == MenuItems.length - 1
          return(
            <>
              <Button 
              key = {item.value}  
              variant="light" 
              className='w-full flex justify-start h-[50px] text-lg'
              onClick={() => {router.push(item.route); setIsOpen(false)}}
              >
                {item.label}
              </Button>
              {!isBottom && <Divider/>}
            </>
          )
        })}
 
     </div>
  )
}

export default ResponsiveMenu;