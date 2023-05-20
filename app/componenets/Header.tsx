'use client';
import React from 'react';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';

const Header =  () => {
  return (
    <>
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-gray-700">
      Flowbite
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
   
    <Dropdown inline={true} label={<Navbar.Link >Human Resource</Navbar.Link>}
   >
            <Dropdown.Item>
              Geo Locations
            </Dropdown.Item>
            <Dropdown.Item>
              Departments
            </Dropdown.Item>
            <Dropdown.Item>
              Grades
            </Dropdown.Item>
            <Dropdown.Item>
              Employees
            </Dropdown.Item>
          </Dropdown>
          <Dropdown inline={true} label={<Navbar.Link >Time & Attendance</Navbar.Link>}
   >
            <Dropdown.Item>
             Roaster
            </Dropdown.Item>
            <Dropdown.Item>
              Shifts
            </Dropdown.Item>
            <Dropdown.Item>
              Holiday Types
            </Dropdown.Item>
            <Dropdown.Item>
              Devices
            </Dropdown.Item>
          </Dropdown>
          <Dropdown inline={true} label={<Navbar.Link >Leave Management</Navbar.Link>}
   >
            <Dropdown.Item>
             Leave Models
            </Dropdown.Item>
            <Dropdown.Item>
              Leave Types
            </Dropdown.Item>
          </Dropdown>
  </Navbar.Collapse>
</Navbar>
</>
  );
};

export default Header;
