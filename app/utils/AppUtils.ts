// ApiUtils.js
import axios from 'axios';

export const fetchDocuments = async (collectionName : string) => {
  try {
    
    var response = await fetch('/grade/api');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createDocument = async (collectionName : string, document : any) => {
  try {
    const response = await axios.post(`/api`, {
      collectionName, // Include collectionName in the request body
      document
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
