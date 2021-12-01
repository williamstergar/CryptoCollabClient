import React from "react";
import {
  Button,
  Card,
  CardBody,
  Form,
  Container,
  Row,
  Col,
  Input,
  InputGroup
} from "reactstrap"
import APIURL from "../../helpers/environment"

type Props = {
  // updateToken: (newToken: string) => void
  sessionToken: string | null | undefined
}

type State = {
  collabName: string
  collabDescription: string
}

class CreateCollab extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      collabName: "",
      collabDescription: "",
    }

    this.createCollab = this.createCollab.bind(this)
  }

  collabName(event: any) {
    this.setState({ collabName: event.target.value })
  }

  collabDescription(event: any) {
    this.setState({ collabDescription: event.target.value })
  }

  createCollab(e: any) {
    e.preventDefault()
    console.log(APIURL)
    fetch(`${APIURL}/collab/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `${this.props.sessionToken}`
      },
      body: JSON.stringify({
          collabName: this.state.collabName,
          collabDescription: this.state.collabDescription
      }),
    })
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data)
        alert("Collab Created");
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      // return inside for class components, not for functional components (as entire JS function is the return)
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Form onSubmit={this.createCollab}>
                    <div> <h2>Create A Collab</h2> </div>
                    <InputGroup>
                      <Input
                        type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          this.setState({ collabName: e.target.value })
                        }}
                        value={this.state.collabName}
                        placeholder="Collab Name"
                      />
                    </InputGroup>
                    <InputGroup>
                      <Input
                        type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          this.setState({ collabDescription: e.target.value })
                        }}
                        value={this.state.collabDescription}
                        placeholder="Collab Description"
                      />
                    </InputGroup>
                    <Button type="submit">Create Collab</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    
    )}
}

  // render() {
  //   return (
  //     <div>
  //       <Card>
  //         <CardBody>
  //           <Form onSubmit>
  //           <CardTitle tag="h5">
  //             Card title
  //           </CardTitle>
  //           <CardSubtitle
  //             className="mb-2 text-muted"
  //             tag="h6">
  //             Card subtitle
  //           </CardSubtitle>
  //           <CardText>
  //             Some quick example text to build on the card title and make up the bulk of the card's content.
  //           </CardText>
  //           <Button>
  //             Button
  //           </Button>
  //           </Form>
  //         </CardBody>
  //       </Card>
  //     </div>
  //   )
  // }

export default CreateCollab