import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import CrossSvgColor from '../Svg/CrossSvgColor';
import Cities from './Cities';

const ModalSelectCity = ({ isOpen, setIsOpen, cities, message }) => {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* Contenido del modal */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl xs:w-80 w-44 rounded-xl">
              <div className="font-bold tracking-wider text-center text-chenkster-blue font-lato">
                <p>Please select a city to ask to the ai</p>
                <Cities cities={cities} message={message} />
                <div
                  className="flex items-center justify-center mt-4 text-center"
                  onClick={closeModal}
                >
                  <CrossSvgColor />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalSelectCity;
