'use client'
import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, ThemeProvider } from 'react-admin';
import { fetchUtils } from 'ra-core';
import simpleRestProvider from 'ra-data-simple-rest';

import { GradeEdit, GradeList, GradeCreate } from "./grades";
import { DepartmentEdit, DepartmentList, DepartmentCreate } from "./departments";
import { ShiftEdit, ShiftList, ShiftCreate } from "./shifts";
import { GeoLocationEdit, GeoLocationList, GeoLocationCreate } from "./geoLocations";
import { LeaveModelEdit, LeaveModelList, LeaveModelCreate } from "./leaveModels";
import { LeaveTypeEdit, LeaveTypeList, LeaveTypeCreate } from "./LeaveTypes";
import { CompanyDetailsEdit, CompanyDetailsList, CompanyDetailsCreate } from "./companyDetails";
import { EmployeeEdit, EmployeeList, EmployeeCreate } from "./employees";
import { HolidayTypeEdit, HolidayTypeList, HolidayTypeCreate } from "./holidayTypes";
import { DevicesEdit, DevicesList, DevicesCreate } from "./devices";
import { RosterEdit, RosterList, RosterCreate } from "./roster";
import { green, purple ,indigo} from "@mui/material/colors";
import { QAppLayout } from "./QAppLayout";
import { createTheme } from "@mui/material";
import Dashboard from "./Dashboard";

const dataProvider = simpleRestProvider('/api', fetchUtils.fetchJson, 'X-Total-Count');

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // white background
      contrastText: '#000000', // black text
    },
    secondary: {
      main: green[500],
    },
  },
});



const App = () => {
  return (
    <ThemeProvider >
      <Admin dataProvider={dataProvider} theme={theme} layout={QAppLayout} dashboard={Dashboard}>
        <Resource name="grades" list={GradeList} edit={GradeEdit} create={GradeCreate}  />
        <Resource name="departments" list={DepartmentList} edit={DepartmentEdit} create={DepartmentCreate} />
        <Resource name="shifts" list={ShiftList} edit={ShiftEdit} create={ShiftCreate} recordRepresentation="shortCode" />
        <Resource name="geoLocations" list={GeoLocationList} edit={GeoLocationEdit} create={GeoLocationCreate} options={{ label: 'GEO Locations' }} />
        <Resource name="leaveModels" list={LeaveModelList} edit={LeaveModelEdit} create={LeaveModelCreate} options={{ label: 'Leave Models' }}/>
        <Resource name="leaveTypes" list={LeaveTypeList} edit={LeaveTypeEdit} create={LeaveTypeCreate} options={{ label: 'Leave Types' }}/>
        <Resource name="CompanyDetails" list={CompanyDetailsList} edit={CompanyDetailsEdit} create={CompanyDetailsCreate} options={{ label: 'Company Details' }}/>
        <Resource name="employee" list={EmployeeList} edit={EmployeeEdit} create={EmployeeCreate} />
        <Resource name="holidayTypes" list={HolidayTypeList} edit={HolidayTypeEdit} create={HolidayTypeCreate} options={{ label: 'Holiday Types' }}/>
        <Resource name="devices" list={DevicesList} edit={DevicesEdit} create={DevicesCreate} />
        <Resource name="roster" list={RosterList} edit={RosterEdit} create={RosterCreate} />
      </Admin>
    </ThemeProvider>

  )
}

export default App