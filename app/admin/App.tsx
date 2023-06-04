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
import { LeaveTypeEdit, LeaveTypeList, LeaveTypeCreate } from "./leaveTypes";
import { CompanyDetailsEdit, CompanyDetailsList, CompanyDetailsCreate } from "./companyDetails";
import { EmployeeEdit, EmployeeList, EmployeeCreate } from "./employees";
import { HolidayTypeEdit, HolidayTypeList, HolidayTypeCreate } from "./holidayTypes";
import { DevicesEdit, DevicesList, DevicesCreate } from "./devices";
import { RosterEdit, RosterList, RosterCreate } from "./roster";
import { green, purple ,indigo} from "@mui/material/colors";
import { QAppLayout } from "./QAppLayout";
import { createTheme } from "@mui/material";
import Dashboard from "./Dashboard";
import BookIcon from '@mui/icons-material/Book';
import HMobiledataIcon from '@mui/icons-material/HMobiledata';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import TuneIcon from '@mui/icons-material/Tune';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AodIcon from '@mui/icons-material/Aod';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TimerIcon from '@mui/icons-material/Timer';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

const dataProvider = simpleRestProvider('/api', fetchUtils.fetchJson, 'X-Total-Count');

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500], // white background
      contrastText: 'white', // black text
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
        <Resource name="grades" list={GradeList} edit={GradeEdit} create={GradeCreate} icon={BookIcon} />
        <Resource name="departments" list={DepartmentList} edit={DepartmentEdit} create={DepartmentCreate} icon={AccountTreeIcon}/>
        <Resource name="shifts" list={ShiftList} edit={ShiftEdit} create={ShiftCreate} recordRepresentation="shortCode" icon={ManageHistoryIcon} />
        <Resource name="geoLocations" list={GeoLocationList} edit={GeoLocationEdit} create={GeoLocationCreate} options={{ label: 'Locations' }} icon={LocationCityIcon} />
        <Resource name="leaveModels" list={LeaveModelList} edit={LeaveModelEdit} create={LeaveModelCreate} options={{ label: 'Leave Models' }} icon={SettingsEthernetIcon} />
        <Resource name="leaveTypes" list={LeaveTypeList} edit={LeaveTypeEdit} create={LeaveTypeCreate} options={{ label: 'Leave Types' }} icon={TuneIcon} />
        {/* <Resource name="CompanyDetails" list={CompanyDetailsList} edit={CompanyDetailsEdit} create={CompanyDetailsCreate} options={{ label: 'Company Details' }}/> */}
        <Resource name="employee" list={EmployeeList} edit={EmployeeEdit} create={EmployeeCreate} icon={ManageAccountsIcon} />
        <Resource name="holidayTypes" list={HolidayTypeList} edit={HolidayTypeEdit} create={HolidayTypeCreate} options={{ label: 'Holiday Types' }} icon={HMobiledataIcon}/>
        <Resource name="devices" list={DevicesList} edit={DevicesEdit} create={DevicesCreate} icon={AodIcon} />
        <Resource name="roster" list={RosterList} edit={RosterEdit} create={RosterCreate} icon={ScheduleIcon}/>
      </Admin>
    </ThemeProvider>

  )
}

export default App