'use client'
import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { fetchUtils } from 'ra-core';
import simpleRestProvider from 'ra-data-simple-rest';

import { GradeEdit, GradeList , GradeCreate } from "./grades";
import { DepartmentEdit, DepartmentList , DepartmentCreate } from "./departments";
import { ShiftEdit, ShiftList , ShiftCreate } from "./shifts";
import { GeoLocationEdit, GeoLocationList , GeoLocationCreate } from "./geoLocations";

const dataProvider = simpleRestProvider('/api', fetchUtils.fetchJson, 'X-Total-Count');

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
    <Resource name="grades" list={GradeList} edit={GradeEdit} create={GradeCreate}/>
    <Resource name="departments" list={DepartmentList} edit={DepartmentEdit} create={DepartmentCreate}/>
    <Resource name="shifts" list={ShiftList} edit={ShiftEdit} create={ShiftCreate} recordRepresentation="shortCode"/>
    <Resource name="geoLocations" list={GeoLocationList} edit={GeoLocationEdit} create={GeoLocationCreate}/>
   
  </Admin>
  )
}

export default App