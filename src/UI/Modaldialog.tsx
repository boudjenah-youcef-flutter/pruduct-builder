import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ReactNode } from 'react';

interface IProps {
  title: string;
  isOpen: boolean;
  children?: ReactNode;
  close: () => void;
}

const Dealog = ({ title, isOpen, children, close }: IProps) => {
  return (
    <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
      <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md  rounded-xl bg-white/90 p-6 backdrop-blur-xl shadow-lg">
          <DialogTitle as="h3" className="text-lg font-medium text-gray-900">
            {title}
          </DialogTitle>

          <div className="mt-4">
            {children}
          </div>

          
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Dealog;
