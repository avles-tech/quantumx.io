import React from 'react'

const CustomeAlert = (props : any) => {
  return (
    <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
  <span className="font-medium">{props.text}!</span> 
</div>
  )
}

export default CustomeAlert