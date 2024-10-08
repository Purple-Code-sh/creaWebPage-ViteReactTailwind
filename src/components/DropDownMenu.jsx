import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import menuLogo from '../assets/menu.svg'
import { Link } from 'react-router-dom'

/* function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
} */

export default function DropDownMenu () {
  return (
    <Menu as='div'>
      <div>
        <Menu.Button>
          <img src={menuLogo} alt='menu' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-20 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-20 scale-95'
      >
        <Menu.Items className='absolute right-0 z-50 mt-1 w-36 origin-top-right rounded-md bg-bg_purple_dark shadow-lg ring-1 ring-black ring-opacity-20 bg-opacity-100'>
          <Menu.Item>
            <Link to='#' className='block px-4 py-2 my-3 text-sm hover:text-primary active:text-secondary'>
              Contacto
            </Link>

          </Menu.Item>
          <Menu.Item>
            <Link
              to='#'
              className='block px-4 py-2 my-3 text-sm hover:text-primary active:text-secondary'
            >
              Torneos
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to='/creaWebPage-ViteReactTailwind/about'
              className='block px-4 py-2 my-3 text-sm text-white hover:text-primary active:text-secondary font-semibold'
            >
              ¿Quiénes somos?
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
