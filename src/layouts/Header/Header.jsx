import React, { useContext } from 'react'
import { Link, } from 'react-router-dom'
import { AppContext } from '@/context/AppContext'
import { useDataGetter } from './data';

/**
 * The Header component renders the main header of the application.
 *
 * @param {Object} props
 * @param {Function} props.setIsExpanded - A function to set the expanded state of the menu.
 * @returns {JSX.Element} The Header component.
 */
export default function Header({ setIsExpanded }) {

  const { user } = useContext(AppContext);

  /**
   * Get the data from the data hook.
   *
   * @returns {Object} The data from the data hook.
   */
  const { handleLogout } = useDataGetter();

  return (
    <header className='px-6 py-4 flex items-center justify-between'>

      {/* The menu button. */}
      <i onClick={_ => setIsExpanded(perv => !perv)} className="fa-solid fa-bars text-[20px] cursor-pointer text-gray"></i>

      {/* The user details. */}
      <div className='text-gray flex items-center sm:gap-4 text-[20px]'>

        {/* The logout button. */}
        <i className="fa-light fa-right-from-bracket cursor-pointer" onClick={handleLogout}></i>

        {/* The vertical divider. */}
        <div className='mx-4 w-[2px] h-[36px] bg-[#F0F1F3]'></div>

        {/* The user profile. */}
        <Link to={'/profile'} className='flex items-center gap-3'>

          {/* The user image. */}
          <div className='size-[32px] rounded-full relative'>

            <img src={user?.avatar} className='size-[32px] object-cover rounded-full' alt="" />

            {/* The online status indicator. */}
            <div className='absolute -right-0 bottom-0 bg-[#3DA172] border border-white rounded-full size-[10px]'></div>

          </div>

          {/* The user details. */}
          <div>
            <h2 className='text-white text-[14px] font-medium line-clamp-1 w-[70px] sm:w-fit'>{user?.first_name} {user?.last_name}</h2>
            <p className='text-[12px] font-medium text-gray'>Admin</p>
          </div>

        </Link>

      </div>

    </header>
  )
}
