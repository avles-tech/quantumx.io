import React, { Suspense } from 'react'
import Grades from '../componenets/Grades'
import SearchTop from '../componenets/SearchTop'


const GradesPage =  () => {
 
  return (
    <>
   <SearchTop name='Grades'></SearchTop>
     <Suspense fallback={<div className='h-screen flex items-center justify-center'>Loading ...</div>}>
      <Grades></Grades>
      </Suspense>
    </>
  )
}

export default GradesPage