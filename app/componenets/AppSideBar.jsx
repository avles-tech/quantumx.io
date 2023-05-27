'use client';
import React from 'react'
import { Sidebar } from 'flowbite-react';
import { Diversity3, Event, Schedule } from '@mui/icons-material';

const AppSideBar = (props) => {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse
            icon={Diversity3}
            label="Human Resource"
          >
            <Sidebar.Item href="#">
              <div onClick={() => props.setMenuSelection('geolocation')}>GeoLocations</div>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div onClick={() => props.setMenuSelection('department')}>Departments</div>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div onClick={() => props.setMenuSelection('grade')}>Grades</div>
            </Sidebar.Item>
            <Sidebar.Item href="#">
            <div onClick={() => props.setMenuSelection('employee')}>Employees</div>
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={Schedule}
            label="Time & Attendance"
          >
            <Sidebar.Item href="#">
              <div onClick={() => props.setMenuSelection('roaster')}>Roaster</div>

            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div onClick={() => props.setMenuSelection('shift')}>Shifts</div>

            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div onClick={() => props.setMenuSelection('holidaytype')}>Holiday Types</div>

            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div onClick={() => props.setMenuSelection('device')}>Devices</div>

            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={Event}
            label="Leave Management"
          >
            <Sidebar.Item href="#">
              <div onClick={() => props.setMenuSelection('leavemodel')}> Leave Models</div>

            </Sidebar.Item>
            <Sidebar.Item href="#">
              <div onClick={() => props.setMenuSelection('leavetype')}>Leave Types</div>

            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default AppSideBar;
