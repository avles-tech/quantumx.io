'use client';
import React from 'react'
import { Sidebar } from 'flowbite-react';
import { Diversity3 , LocationCity ,Store ,Star , Event ,  Schedule} from '@mui/icons-material';

const AppSideBar = (props) => {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>

            <Sidebar.Collapse
              icon={Diversity3}
              label="Human Resource"
            >
              <Sidebar.Item href="#" >
                <div onClick={props.setMenuSelection}>Geo Location</div> 
              </Sidebar.Item>
              <Sidebar.Item href="#" >
               <div onClick={() => props.setMenuSelection('department')}>Departments</div> 
              </Sidebar.Item>
              <Sidebar.Item href="#"  >
              <div onClick={() => props.setMenuSelection('grade')} > Grades</div> 
              </Sidebar.Item>
              <Sidebar.Item href="#" >
                Employees
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              icon={Schedule}
              label="Time & Attendance"
            >
              <Sidebar.Item href="#"  >
                Roaster
              </Sidebar.Item>
              <Sidebar.Item href="#" >
                Shifts
              </Sidebar.Item>
              <Sidebar.Item href="#"  >
                Holidat Types
              </Sidebar.Item>
              <Sidebar.Item href="#" >
                Devices
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              icon={Event}
              label="Leave Management"
            >
              <Sidebar.Item href="#"  >
                Leave Models
              </Sidebar.Item>
              <Sidebar.Item href="#" >
                Leave Types
              </Sidebar.Item>
              
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
  )
}

export default AppSideBar