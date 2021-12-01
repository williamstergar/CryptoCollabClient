import React from "react"
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from "reactstrap"
import APIURL from "../../helpers/environment"

type State = {
    email: string,
    password: string,
    isUser: boolean,
    isAdmin: boolean
}
type Props = {
    updateUser: (newToken: string, admin: boolean) => void
    // updateLocalStorage: () => void
}

class Login extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            isUser: true,
            isAdmin: false
        }
        this.login = this.login.bind(this)
    }

    email(event: any) {
        this.setState({ email: event.target.value })
    }
    password(event: any) {
        this.setState({ password: event.target.value })
    }

    login(event: any) {
        event.preventDefault()
        fetch(`${APIURL}/user/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json" // APPLICATION instead of applicant, it was a typo error. Having it as applicant/json yields the error "UnhandledPromiseRejectionWarning: TypeError: Cannot destructure property 'email' of 'req.body.user' as it is undefined."
            },
            body: JSON.stringify({
                user:{
                    email: this.state.email,
                    password: this.state.password,
                    isUser: this.state.isUser,
                    isAdmin: this.state.isAdmin
                }
            })
        }).then((Response) => Response.json())
            .then((data) => {
                console.log(data)
                console.log(this.state.email)
                this.props.updateUser(data.SessionToken, data.user.admin)
                    alert("User Logged In")
                    console.log(Response)
            }).catch(err => console.log(err))
    }

    render() {
        return ( // return inside of render for class component, not for functional components (as entire JS function is the return)
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody> 
                                    <Form onSubmit={this.login}>
                                        <div> <h2> Login With Your Credentials </h2> </div>
                                        <InputGroup>
                                            <Input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ email: e.target.value }) }} value={this.state.email} placeholder="Email Address" />
                                        </InputGroup>
                                        <InputGroup>
                                            <Input type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ password: e.target.value }) }} value={this.state.password} placeholder="Password" />
                                        </InputGroup>
                                        <Button type="submit"> Login </Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login