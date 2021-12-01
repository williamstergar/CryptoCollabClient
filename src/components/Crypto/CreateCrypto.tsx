import React from "react";
// import styled from "styled-components"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Row,
} from "reactstrap";
import APIURL from "../../helpers/environment"

type State = {
  cryptoName: string;
  cryptoDescription: string;
};

type Props = {
  // updateToken: (newToken: string) => void
  sessionToken: string | null | undefined
};

class CreateCrypto extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cryptoName: "",
      cryptoDescription: "",
    };

    this.createCrypto = this.createCrypto.bind(this);
  }

  cryptoName(event: any) {
    this.setState({ cryptoName: event.target.value });
  }

  cryptoDescription(event: any) {
    this.setState({ cryptoDescription: event.target.value });
  }

  createCrypto(e: any) {
    e.preventDefault()
    console.log(this.props)
    fetch(`${APIURL}/crypto/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `${this.props.sessionToken}`
      },
      body: JSON.stringify({
          cryptoName: this.state.cryptoName,
          cryptoDescription: this.state.cryptoDescription
      }),
    })
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data)
        alert("Crypto Created");
      })
      .catch((err) => console.log(err));
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
                  <Form onSubmit={this.createCrypto}>
                    <div> <h2>Create A Crypto</h2> </div>
                    <InputGroup>
                      <Input
                        type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          this.setState({ cryptoName: e.target.value });
                        }}
                        value={this.state.cryptoName}
                        placeholder="Crypto Name"
                      />
                    </InputGroup>
                    <InputGroup>
                      <Input
                        type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          this.setState({ cryptoDescription: e.target.value });
                        }}
                        value={this.state.cryptoDescription}
                        placeholder="Crypto Description"
                      />
                    </InputGroup>
                    <Button type="submit">Create Crypto</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateCrypto;