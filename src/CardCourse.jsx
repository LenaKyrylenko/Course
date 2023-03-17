import { Divider, Space, Tag, Rate, Badge } from 'antd';
import { fetchCourse, url } from './helpers';
import { Link } from 'react-router-dom';

const CardCourse =({course })=> {
const date = new Date(course?.launchDate);

const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
const hours = Math.floor(course?.duration / 60);
const minutes = course?.duration % 60;
const formattedDuration = hours + " hours " + minutes + " minutes"

     return (<>
     
         <Link to={`/course/`+course?.id} onClick={() => fetchCourse(course?.id)}>
             <div key={ course?.id} className="course-card">
             <div className="course-card-body">
             <div className="course-card-image" style={{ backgroundImage: `url(${course?.previewImageLink +'/cover.webp'}) `}} > </div>

             <h2> {course?.title}</h2>
             
                 <p className="course-card-description"> {course?.description}</p>
             <h3> Duration: {formattedDuration} </h3>
             
                 <p className="course-card-status"> {course?.status}</p>
                 <h3> Start date : {course?.formattedDate}</h3>
                 {/* <h3>lessonsCount {lessonsCount}</h3> */}
                 <p className='course-card-count'> {course?.lessonsCount} lessons  </p>
                 <p style={{ textAlign: "left" }}> 
                 <Rate  defaultValue={course?.rating} disabled/>
                 </p>
                 <Divider orientation="left">Skills</Divider>
                 <Space size={[0, 8]} wrap>
                     {course?.meta["skills"]?.map((el) => <Tag  orientation="left" color="#87d068"> {el} </Tag>)}
                 
                 </Space>
                 </div></div>
         </Link>
    </>)
}
export default CardCourse