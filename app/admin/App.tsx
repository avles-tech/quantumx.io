'use client'
import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { fetchUtils } from 'ra-core';
import simpleRestProvider from 'ra-data-simple-rest';

import { GradeEdit, GradeList , GradeCreate } from "./grades";
import { DepartmentEdit, DepartmentList , DepartmentCreate } from "./departments";
import { ShiftEdit, ShiftList , ShiftCreate } from "./shifts";
import { GeoLocationEdit, GeoLocationList , GeoLocationCreate } from "./geoLocations";
import { LeaveModelEdit, LeaveModelList, LeaveModelCreate }  from "./leaveModels";
import { LeaveTypeEdit, LeaveTypeList, LeaveTypeCreate }  from "./LeaveTypes";
import { CompanyDetailsEdit, CompanyDetailsList, CompanyDetailsCreate }  from "./companyDetails";
import { EmployeeEdit, EmployeeList, EmployeeCreate }  from "./employees";
import {HolidayTypeEdit, HolidayTypeList, HolidayTypeCreate} from "./holidayTypes";
import { DevicesEdit, DevicesList, DevicesCreate } from "./devices";
import { RosterEdit, RosterList, RosterCreate } from "./roster";



const dataProvider = simpleRestProvider('/api', fetchUtils.fetchJson, 'X-Total-Count');

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
    <Resource name="grades" list={GradeList} edit={GradeEdit} create={GradeCreate}/>
    <Resource name="departments" list={DepartmentList} edit={DepartmentEdit} create={DepartmentCreate}/>
    <Resource name="shifts" list={ShiftList} edit={ShiftEdit} create={ShiftCreate} recordRepresentation="shortCode"/>
    <Resource name="geoLocations" list={GeoLocationList} edit={GeoLocationEdit} create={GeoLocationCreate}/>
    <Resource name="leaveModels" list={LeaveModelList} edit={LeaveModelEdit} create={LeaveModelCreate}/>
    <Resource name="leaveTypes" list={LeaveTypeList} edit={LeaveTypeEdit} create={LeaveTypeCreate}/>
    <Resource name="CompanyDetails" list={CompanyDetailsList} edit={CompanyDetailsEdit} create={CompanyDetailsCreate}/>
    <Resource name="employee" list={EmployeeList} edit={EmployeeEdit} create={EmployeeCreate}/>
    <Resource name="holidayTypes" list={HolidayTypeList} edit={HolidayTypeEdit} create={HolidayTypeCreate}/>
    <Resource name="devices" list={DevicesList} edit={DevicesEdit} create={DevicesCreate}/>
    <Resource name="roster" list={RosterList} edit={RosterEdit} create={RosterCreate}/>
  </Admin>
  )
}

export default App