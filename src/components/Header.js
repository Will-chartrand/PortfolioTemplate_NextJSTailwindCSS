import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBarOption from './navbar/NavBarOption'

const inter = Inter({ subsets: ['latin'] })

function Header (props) {
  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-0.2 rounded rounded-t-none dark:bg-stone-900'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='/' className='flex items-center'>
          <img
            src='porsche.png'
            className='h-36 mr-2 sm:h-9'
            alt='Car Image'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            WillC
          </span>
        </a>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-stone-900 md:dark:bg-stone-900 dark:border-gray-900'>
            <NavBarOption title="About" url='#about'/>
            <NavBarOption title="Services" url='#services'/>
            <NavBarOption title="Pricing" url='#pricing'/>
            <NavBarOption title="Contact" url='#contact'/>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
