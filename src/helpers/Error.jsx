import { Result, Typography } from 'antd'
const { Paragraph, Text } = Typography
const Error = ({ error }) => {
  console.log('error ', error.stack)
  return (
    <Result status="error" title={error.name} subTitle={error?.message}>
      <div className="desc">
        <Paragraph>
          <Text
            strong
            style={{
              fontSize: 16,
            }}
          >
            An error occurred. We are working on a solution.
          </Text>
        </Paragraph>
        <Paragraph></Paragraph>
        <Text
          strong
          style={{
            fontSize: 20,
          }}
        >
          {' '}
          Sorry for the inconvenience
        </Text>
      </div>
    </Result>
  )
}

export default Error
