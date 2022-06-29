import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmNhYTE1NTdhYzBlNTQ5NmEwNTJmYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTY1MzE1MTAsImV4cCI6MTY1Njc5MDcxMH0.hZ0sG7z54q6Z_wr_dt-JvH_leOg-_Tb31uPxQXIeMhQ"
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });