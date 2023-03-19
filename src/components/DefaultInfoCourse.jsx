import { ClockCircleTwoTone } from '@ant-design/icons'
import { Divider, Space, Tag, Rate, Badge } from 'antd'
import { formattedDate, formattedDuration } from '../helpers'

const DefaultInfoCourse = ({ course }) => (
  <div key={course?.id}>
    <h2> {course?.title}</h2>
    <p className="course-card-description"> {course?.description}</p>
    <h3>
      {' '}
      <ClockCircleTwoTone twoToneColor="#eb2f96" /> Duration:{' '}
      {formattedDuration(course)}{' '}
    </h3>

    <p className="course-card-status"> {course?.status}</p>
    <h3> Start date : {formattedDate(course)}</h3>
    {course?.lessonsCount && (
      <p className="course-card-count"> {course?.lessonsCount} lessons </p>
    )}
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
)

export default DefaultInfoCourse
