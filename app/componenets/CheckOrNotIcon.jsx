'use client';
import React from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const CheckOrNotIcon = (props) => {
  return (
    <>{props.value == true ? <CheckCircleOutlineOutlinedIcon color="success"></CheckCircleOutlineOutlinedIcon> : <CancelOutlinedIcon color="error"></CancelOutlinedIcon>}</>

  );
}

export default CheckOrNotIcon