import { Space,Spin } from 'antd'

const Loading = () => <div className="content" >
<Space  direction="vertical"
 delay="10" >
<Spin tip="Loading..." size="large">

</Spin>
</Space>
</div>
export default Loading