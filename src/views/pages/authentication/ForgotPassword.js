// ** React Imports
import { Link, Navigate } from 'react-router-dom'

// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
  Card,
  CardBody
} from 'reactstrap'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Custom Hooks
// import { useSkin } from '@hooks/useSkin'

// ** Icons Imports
import { ChevronLeft } from 'react-feather'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

import logoImg from '../../../assets/images/logo/logo.svg'

const ForgotPassword = () => {
  // ** Hooks
  // const { skin } = useSkin()

  // const illustration =
  //     skin === 'dark'
  //       ? 'forgot-password-v2-dark.svg'
  //       : 'forgot-password-v2.svg',
  //   source = require(`@src/assets/images/pages/${illustration}`).default

  if (!isUserLoggedIn()) {
    return (
      <div className="auth-wrapper auth-basic px-2">
        <div className="auth-inner my-2">
          <Card className="mb-0">
            <CardBody>
              <Link
                className="brand-logo"
                to="/"
                onClick={(e) => e.preventDefault()}>
                <img src={logoImg} alt="logo" height={40} />
                <h1
                  className="brand-text text-primary ms-1"
                  style={{ fontSize: '2.5em' }}>
                  Hirconn
                </h1>
              </Link>
              <CardTitle tag="h4" className="mb-1">
                Forgot Password? 🔒
              </CardTitle>
              <CardText className="mb-2">
                Enter your email and we'll send you instructions to reset your
                password
              </CardText>
              <Form
                className="auth-forgot-password-form mt-2"
                onSubmit={(e) => e.preventDefault()}>
                <div className="mb-1">
                  <Label className="form-label" for="login-email">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="login-email"
                    placeholder="john@example.com"
                    autoFocus
                  />
                </div>
                <Button color="primary" block>
                  Send reset link
                </Button>
              </Form>
              <p className="text-center mt-2">
                <Link to="/">
                  <ChevronLeft className="rotate-rtl me-25" size={14} />
                  <span className="align-middle">Back to login</span>
                </Link>
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  } else {
    return <Navigate to="/" />
  }
}

export default ForgotPassword
