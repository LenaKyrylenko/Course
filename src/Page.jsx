 function Page ({id, link, title, launchDate, status,previewImageLink, duration, description}){
const date = new Date(launchDate);

const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
const hours = Math.floor(duration / 60);
const minutes = duration % 60;
const formattedDuration = hours + " hours " + minutes + " minutes"

     return (<>
        
        <div className="course-card">
             <div className="course-card-body">
             <div className="course-card-image" style={{ backgroundImage: `url(${previewImageLink +'/cover.webp'}) `}} > </div>

             <h2> {title}</h2>
             
                 <p className="course-card-description"> {description}</p>
             {/* <h3> Duration: {formattedDuration} </h3> */}
             
                 <p className="course-card-status"> {status}</p>
                 <h3> Start date : {formattedDate}</h3>
             </div></div>
         
    </>)
}
export default Page