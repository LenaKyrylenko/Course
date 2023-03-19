import { Row, Col, Space, Spin } from 'antd'

const Header = () =>
    <Row>
       
    <div className="header">
     <Col xl={{ offset: 2, span: 6 }}
        lg={{ offset: 4, span: 6 }}
        md={{ offset: 8, span: 10 }}
        sm={{ offset: 6, span: 10 }}
        xs={{ offset: 7, span: 10 }}>
                <div className="header logo" />
            </Col>
            <Col xl={{ offset: 8, span: 10 }}
        lg={{ offset: 1, span: 14 }}
        md={{ span: 0  }}
        sm={{span: 0  }}
        xs={{ span: 0  }}>
            
               <h1 className='motto'> self - development courses</h1>
            </Col>
            </div>
        
    </Row>

export default Header