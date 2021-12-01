import React from "react";
import { Form, InputGroup, Input } from "reactstrap";
import APIURL from "../../helpers/environment"

type Props = {
  // updateToken: (newToken: string) => void
  sessionToken: string | null | undefined;
  cryptoId: number;
};

type State = {
  cryptoName: string;
  cryptoDescription: string;
  owner_id: any;
  id: any;
};

class UpdateMyCrypto extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cryptoName: "",
      cryptoDescription: "",
      owner_id: "",
      id: ""
    };

    this.updateCrypto = this.updateCrypto.bind(this);
  }

  cryptoName(event: any) {
    this.setState({ cryptoName: event.target.value });
  }

  cryptoDescription(event: any) {
    this.setState({ cryptoDescription: event.target.value });
  }

  updateCrypto(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log("updateCrypto", this.props.cryptoId);
    fetch(`${APIURL}/crypto/update/${this.props.cryptoId}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `${this.props.sessionToken}`,
      }),
      body: JSON.stringify({
        crypto: {
          cryptoName: this.state.cryptoName,
          cryptoDescription: this.state.cryptoDescription,
        },
      }),
    })
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    console.log("inside update crypto component");
  }

  render() {
    return (
      <div>
        <Form>
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
                this.setState({ cryptoDescription: e.target.value })
              }}
              value={this.state.cryptoDescription} placeholder="Crypto Description" />
          </InputGroup>
        </Form>
        <button onClick={(e) => {this.updateCrypto(e)}}> {" "} Update Crypto {" "}
        </button>
      </div>
    );
  }
}

export default UpdateMyCrypto;