'use client';
import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'

const NewGrade = () => {
  return (
    <>
      <div>NewGrade</div>
      <form>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="details"
              value="Your email"
            >
            </Label>
          </div>
          <TextInput
            id="details"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
          >
          </TextInput>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
      </form>
    </>
  )
}

export default NewGrade