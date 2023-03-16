 function Page ({title, launchDate, status}){
const date = new Date(launchDate);

const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

    return(<>
    <h1> {title}</h1>
   <h3> Дата : {formattedDate}</h3> 
<p> Статус: {status}</p>
    </>)
}
export default Page