import { useEffect, useState } from 'react'
export const url = "https://api.wisey.app/api/v1/core/preview-courses"

export function fetchData ( url ){
  return( fetch(url,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ODdjYzQ2Mi1iYWY1LTQ0MTMtYmRmYS04YWVlNTFhYTY3ZmMiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5MDg1NzcsImV4cCI6MTY3OTgwODU3N30.ka9nOB-KAlu3G_g6c9IkhzUQeSXzaa5ko3wElLMCdpM '
        }})
        .then(res => (res.json())).then((data) => (data))
  )
      }        
export default fetchData