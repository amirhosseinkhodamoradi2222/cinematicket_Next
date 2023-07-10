import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import ButtonIcon from '@/components/Button/ButtonIcon';

const DropDown = ({ title, Icon, Image, children }) => (
    <Menu>
        <Menu.Button>
            <ButtonIcon
                Icon={Icon}
                Img={Image}
                text={title}
            />
        </Menu.Button>
        <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'>
            <Menu.Items>
                <div
                    className='absolute left-0 top-8 mt-2 w-56 rounded-md bg-white shadow-md border flex flex-col gap-3 justify-between p-3 min-w-[300px]'
                    role='menu'
                    tabIndex='0'>
                    {children}
                </div>
            </Menu.Items>
        </Transition>
    </Menu>
);

export default DropDown;
