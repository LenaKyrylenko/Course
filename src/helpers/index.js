import { useEffect, useState } from 'react'
export const url = 'https://api.wisey.app/api/v1/core/preview-courses'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ODdjYzQ2Mi1iYWY1LTQ0MTMtYmRmYS04YWVlNTFhYTY3ZmMiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5MDg1NzcsImV4cCI6MTY3OTgwODU3N30.ka9nOB-KAlu3G_g6c9IkhzUQeSXzaa5ko3wElLMCdpM'
export async function fetchData(url) {
  return await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer  ${token}`,
    },
  }).then((res) => res.json())
}
export default fetchData
