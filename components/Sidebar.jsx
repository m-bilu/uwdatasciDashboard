import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {Calendar, Camera, Folder, Users, LogOut} from 'react-feather'

const SiderBar = ({children}) => {
    const router = useRouter();
    const currentRoute = router.pathname;
    console.log(currentRoute)


    return (
        <div className='flex'>
            <div className='fixed w-[300px] h-screen p-8 dark:bg-sidebar-purple flex flex-col'>
                
                <div className={`flex flex-col items-left pt-[87px] pb-[20px]`}>
                    <Link href='/events'>
                        <div className={`dark:text-icon-purple rounded-xl flex ${currentRoute === '/events' ? 'dark:border-icon-purple border-[1px]' : ''}`}>
                            <div className='m-2 flex'>
                                    <Calendar />
                                    <h2 className='px-5 font-bold text-lg'>Events</h2>
                                </div>
                            </div>
                    </Link>
                </div>

                <div className='flex flex-col items-left py-[20px]'>
                    <Link href='/recordings'>
                        <div className={`dark:text-icon-purple rounded-xl flex ${currentRoute === '/recordings' ? 'dark:border-icon-purple border-[1px]' : ''}`}>
                            <div className='m-2 flex'>
                                <Camera />
                                <h2 className='px-5 font-bold text-lg'>Recordings</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='flex flex-col items-left py-[20px]'>
                    <Link href='/resources'>
                        <div className={`dark:text-icon-purple rounded-xl flex ${currentRoute === '/resources' ? 'dark:border-icon-purple border-[1px]' : ''}`}>
                            <div className='m-2 flex'>
                                <Folder />
                                <h2 className='px-5 font-bold text-lg'>Resources</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='flex flex-col items-left py-[20px]'>
                    <Link href='/team'>
                        <div className={`dark:text-icon-purple rounded-xl flex ${currentRoute === '/team' ? 'dark:border-icon-purple border-[1px]' : ''}`}>
                            <div className='m-2 flex'>
                                <Users />
                                <h2 className='px-5 font-bold text-lg'>Team</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                
                <div className='py-[200px] justidy'></div>

                <span className='border-[1px] dark:border-icon-purple'></span>

                <div className='p-8 flex dark:text-icon-purple'>
                    <LogOut />
                    <h2 className='px-5 font-bold'>Log Out</h2>
                </div>
                
            </div>

            <main className='ml-[300px] w-full'>
                {children}
            </main>

        </div>
    )
}

export default SiderBar