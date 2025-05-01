import React from 'react'
import SearchOption from '../SearchOption/SearchOption'
import Link from 'next/link'
import Notification from '../Notification/Notification'
import Account from '../Account/Account'

const TopMenus = () => {
  return (
    <div className='flex items-center gap-x-5'>
        <div className='max-sm:hidden'>
          <SearchOption/>
        </div>
        <Link href={'#'} className='text-white text-sm font-light max-sm:hidden'>Children</Link>
        <Notification/>
        <Account/>
    </div>
  )
}

export default TopMenus