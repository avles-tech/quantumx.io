'use client';
import AppSideBar from './componenets/AppSideBar';
import { useState } from 'react';
import dynamic from 'next/dynamic'

const Grades = dynamic(() => import('./componenets/Grades'))
const HomeComponent = dynamic(() => import('./componenets/HomeComponent'))
const Departments = dynamic(() => import('./componenets/Departments'))
const Employees = dynamic(() => import('./componenets/Employees'))
const GeoLocations = dynamic(() => import('./componenets/GeoLocation'))

 
export default function Home() {
  const [menuSelection, setMenuSelection] = useState("");

  const renderComponent = () => {
    switch(menuSelection) {
      case "grade":
        return <Grades/>;
        case "employee":
        return <Employees/>;
        case "department":
        return <Departments />;
      case "":
          return <HomeComponent />;
      default:
        return <HomeComponent />;
    }
  }

  return (
    <div className="flex flex-row">  {/* Added this */}
    <AppSideBar setMenuSelection={setMenuSelection}/>
    <main className="flex-1 overflow-auto p-4">
    {renderComponent()}
    </main>
  </div>
  )
}
