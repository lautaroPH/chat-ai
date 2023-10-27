/* eslint-disable @next/next/no-img-element */

import GoBack from '../GoBack';
import ThreePointSvg from '../Svg/ThreePointSvg';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const ProfileTop = ({ avatar, username, handleOpenModal }) => {
  return (
    <div className="relative flex flex-col w-full h-16 px-4 my-4 bg-transparent sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center">
        <div className="mr-4">
          <GoBack url={'/welcome'} />
        </div>
        <div className="flex items-center">
          <img
            className="object-cover w-10 h-10 mr-2 rounded-full"
            src={avatar}
            alt="avatar"
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-bold text-chenkster-blue font-lato">
              {username}
            </h4>
          </div>
        </div>
      </div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="px-2">
            <ThreePointSvg />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-20 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 py-2 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleOpenModal()}
                    className={`${
                      active
                        ? 'bg-chenkster-blue-light text-white'
                        : 'text-gray-900'
                    } flex w-full items-center rounded-md p-2 text-sm`}
                  >
                    Select city
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ProfileTop;
