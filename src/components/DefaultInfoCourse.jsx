import { ClockCircleTwoTone } from '@ant-design/icons';
import { Divider, Space, Tag, Rate, Badge } from 'antd'
 const formattedDate = ({ launchDate }) => {
    const date = new Date(launchDate);
  
    const day = date.getDate().toString().padStart(2, '0'); 
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear().toString().substr(-2);
  
    return (`${day}/${month}/${year}`)
  }
  
 const formattedDuration = ({ duration }) => {
    const date = new Date(null);
    date.setSeconds(duration); 
    const timeString = date.toISOString().substr(14, 5);
    return timeString + " minutes"; 
    
}
  
const DefaultInfoCourse = ({ course }) =>
    <div key={course?.id}>
    <h2> {course?.title}</h2>
    <p className="course-card-description"> {course?.description}</p>
    <h3> <ClockCircleTwoTone twoToneColor="#eb2f96"/> Duration: {formattedDuration(course)} </h3>

    <p className="course-card-status"> {course?.status}</p>
    <h3> Start date : {formattedDate(course)}</h3>
        {course?.lessonsCount &&
            <p className="course-card-count">
                {' '}
                {course?.lessonsCount} lessons{' '}
            </p>
        }
    <p style={{ textAlign: 'left' }}>
      <Rate defaultValue={course?.rating} disabled />
    </p>
    <Divider orientation="left">Skills</Divider>
    <Space size={[0, 8]} wrap>
      {course?.meta['skills']?.map((el) => (
        <Tag orientation="left" color="#87d068">
          {' '}
          {el}{' '}
        </Tag>
      ))}
    </Space>
  </div>

export default DefaultInfoCourse