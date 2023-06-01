'use client';
import AppSideBar from './componenets/AppSideBar';
import { useState } from 'react';
import dynamic from 'next/dynamic'
import type { NextPage } from "next";

const Grades = dynamic(() => import('./componenets/grade/Grades'))
const HomeComponent = dynamic(() => import('./componenets/HomeComponent'))
const Departments = dynamic(() => import('./componenets/department/Departments'))
const Employees = dynamic(() => import('./componenets/employee/Employees'))
const GeoLocations = dynamic(() => import('./componenets/geolocation/GeoLocations'))
const Roasters = dynamic(() => import('./componenets/roaster/Roasters'))
const Devices = dynamic(() => import('./componenets/device/Devices'))
const HolidayTypes = dynamic(() => import('./componenets/holidaytype/HolidayTypes'))
const Shifts = dynamic(() => import('./componenets/shift/Shifts'))
const LeaveModels = dynamic(() => import('./componenets/leavemodel/LeaveModels'))
const LeaveTypes = dynamic(() => import('./componenets/leavetype/LeaveTypes'))


export default function Home() {
  const [menuSelection, setMenuSelection] = useState("");

  const renderComponent = () => {
    switch (menuSelection) {
      case "grade":
        return <Grades />;
      case "employee":
        return <Employees />;
      case "department":
        return <Departments />;
      case "geolocation":
        return <GeoLocations />;
      case "raoster":
        return <Roasters />;
      case "device":
        return <Devices />;
      case "leavemodel":
        return <LeaveModels />;
      case "leavetype":
        return <LeaveTypes data={[]} alertItemDeletedInfo={function (): void {
            throw new Error('Function not implemented.');
        } } alertItemUpdatedInfo={function (): void {
            throw new Error('Function not implemented.');
        } } setReload={function (): void {
            throw new Error('Function not implemented.');
        } } />;
      case "holidaytype":
        return <HolidayTypes />;
      case "shift":
        return <Shifts />;
      case "":
        return <HomeComponent />;
      default:
        return <HomeComponent />;
    }
  }

  return (
    <div className="flex flex-row">  {/* Added this */}
      <AppSideBar setMenuSelection={setMenuSelection} />
      <main className="flex-1 overflow-auto p-4">
        {renderComponent()}
      </main>
    </div>
  )
}
