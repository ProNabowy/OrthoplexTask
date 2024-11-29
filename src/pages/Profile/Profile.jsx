import React, { useContext } from 'react'
import { AppContext } from '@/context/AppContext';
import background_image from '/images/login-background.webp'
/**
 * The Profile component renders the profile page.
 *
 * The component receives the user object from the AppContext and displays the user's
 * details, including their profile picture, name, email, phone, country, city, province,
 * and status.
 *
 * @returns {React.ReactElement} The Profile component.
 */
export default function Profile() {

    /**
     * Get the user object from the AppContext.
     */
    const { user } = useContext(AppContext);

    return (
        <div className='relative'>

            <div className='rounded-sm min-h-[530px] sm:min-h-[636px] sm:mb-10 relative  overflow-hidden'>

                <div className='w-full h-[333px] relative z-10'>

                    <img
                        src={background_image}
                        className='w-full h-[333px] rounded-t-sm object-cover'
                        // The background image should be the same as the one in the user's profile.
                        alt={`${user?.name} background image`}
                    />

                </div>

                <div className='relative flex-center  flex-col mt-[-89px]'>

                    <div className='relative mb-6 z-20'>

                        <img
                            src={user?.avatar}
                            className='size-[200px] sm:size-[250px] rounded-full object-fit border-[2px]  bg-white border-primary'
                            // The profile image should be the same as the one in the user's profile.
                            alt={`${user?.name} profile image`}
                        />

                    </div>

                    <div className='flex items-center flex-wrap sm:flex-nowrap justify-center sm:justify-normal text-gray mb-4 capitalize text-[14px] sm:text-[20px]'>

                        <h2 className='text-[20px] sm:text-[32px] text-white font-[600] w-full sm:w-fit text-center sm:text-start'>
                            {user?.name}
                        </h2>

                        <span className='mx-2 sm:text-[25px] text-white hidden sm:inline'>/</span>

                        <span className='text-white lowercase w-full text-center sm:w-fit block sm:inline '>
                            {
                                user?.email
                            }
                        </span>

                        <sup className='text-white ms-1 hidden sm:inline'>
                            {
                                user?.role
                            }
                        </sup>

                        <span className='text-white lowercase w-full text-center sm:w-fit block sm:hidden'>
                            01125480514
                        </span>

                    </div>

                    <div className='flex items-center flex-row flex-wrap gap-3 text-gray mb-1 text-[13px] sm:text-[16px]'>

                        <span className='font-medium'>Egypt</span>

                        <span className='hidden sm:block px-4'>|</span>

                        <span className='font-medium'>Cairo</span>

                        <span className='hidden sm:block px-4'>|</span>

                        <span className='font-medium'>Shoubra</span>

                        <span className='hidden sm:block px-4'>|</span>

                        <span className='font-medium'>{user?.creationAt}</span>

                    </div>

                    <p className='text-[13px] sm:text-[18px] text-center text-gray max-w-[900px] mb-8 line-clamp-3'>
                        {user?.description || 'No description'}
                    </p>

                </div>

            </div>

        </div>
    )
}
