import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import {  ReactNode } from 'react' 

interface IProps {
  title : string 
  isOpen : boolean
  children?: ReactNode
  close : ()=>void
}


const Dealog = ( {title , isOpen , children , close}: IProps) => {

  return (
    <>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                {title}
              </DialogTitle>
          
              <div className="mt-4">
                <Button
                  onClick={close}
                >
                  {children}
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
export default Dealog;
