'use client';
import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Link from 'next/link';

const SearchTop = (props) => {
  return (
    <div className=' m-8 grid grid-cols-2 content-evenly' >

      <h3 > {props.name}</h3>
      <div className='absolute right-0 mr-8'>
        <Link href={'/grade/create'}><AddRoundedIcon color='success' fontSize="large" > </AddRoundedIcon>    </Link>
      </div>
    </div>
  )
}

export default SearchTop