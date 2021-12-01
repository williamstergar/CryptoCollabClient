// CLASS COMPONENT
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
}

class Register extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            isUser: true,
            isAdmin: false
        }

        this.register = this.register.bind(this)
    }

    email(event: any) {
        this.setState({ email: event.target.value })
    }

    password(event: any) {
        this.setState({ password: event.target.value })
    }

    isUser(event: any) {
        this.setState({ isUser: event.target.value })
    }

    isAdmin(event: any) {
        this.setState({ isAdmin: event.target.value })
    }

    register(event: any) {
        event.preventDefault()
        fetch(`${APIURL}/user/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    password: this.state.password,
                    isUser: this.state.isUser,
                    isAdmin: false
                }
            })
        }).then((Response) => Response.json())
            .then((data) => {
                console.log(data)
                this.props.updateUser(data.SessionToken, data.user.admin)
                    alert("User Registered")
            }).catch(err => console.log(err))
    }

    render() {
        return ( // return inside for class components, not for functional components (as entire JS function is the return)
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <Form onSubmit={this.register}>
                                        <div> <h2> Register Your Account </h2> </div>
                                        <InputGroup>
                                            <Input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ email: e.target.value }) }} value={this.state.email} placeholder="Email Address" />
                                        </InputGroup>
                                        <InputGroup>
                                            <Input type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ password: e.target.value }) }} value={this.state.password} placeholder="Password" />
                                        </InputGroup>
                                        <Button type="submit">Register</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )}
} 

export default Register