export const url = 'https://api.wisey.app/api/v1/core/preview-courses'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ODdjYzQ2Mi1iYWY1LTQ0MTMtYmRmYS04YWVlNTFhYTY3ZmMiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5MDg1NzcsImV4cCI6MTY3OTgwODU3N30.ka9nOB-KAlu3G_g6c9IkhzUQeSXzaa5ko3wElLMCdpM'

export async function fetchData() {
  return await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer  ${token}`,
    },
  }).then((res) => res.json())
}

export async function fetchCourse(id) {
  return await fetch(url + '/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer  ${token}`,
    },
  }).then((res) => res.json())
}

export const formattedDate = ({ launchDate }) => {
  const date = new Date(launchDate)

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString().substr(-2)

  return `${day}/${month}/${year}`
}

export const formattedDuration = ({ duration }) => {
  const minutes = Math.floor(duration / 60)
  const seconds = duration % 60
  return `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(
    2,
    '0',
  )} minutes`
}
