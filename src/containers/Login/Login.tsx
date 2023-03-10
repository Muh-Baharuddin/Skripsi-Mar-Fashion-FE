import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import { LoginForm } from './LoginForm'

export const Login = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
      <Container>
        <Row className="justify-content-center align-items-center px-3">
          <Col lg={8}>
            <Row>
              <Col md={7} className="bg-white border p-5">
                <div className="">
                  <h1>Login</h1>
                  <p className="text-black-50">Silahkan masukkan akun anda</p>
                    <LoginForm />
                </div>
              </Col>
              <Col
                md={5}
                className="bg-white border p-5 text-white d-flex align-items-center justify-content-center p-5"
              >
                <div className="text-center">
                  <Image src="/MarFashion.png" alt="Mar Fashion Logo" width={250} height={250} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
