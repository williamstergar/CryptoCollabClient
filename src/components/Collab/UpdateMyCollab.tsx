import React from "react"
import {
    Form,
    Input,
    InputGroup
  } from "reactstrap";
  import APIURL from "../../helpers/environment"

type Props = {
    // updateToken: (newToken: string) => void
    sessionToken: string | null | undefined
    collabId: number
  }
  
  type State = {
    collabName: string
    collabDescription: string
    owner_id: any
    id: any
  }

class UpdateMyCollab extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            collabName: "",
            collabDescription: "",
            owner_id: "",
            id: ""
        }

        this.updateCollab = this.updateCollab.bind(this)
    }

    collabName(event: any) {
        this.setState({ collabName: event.target.value})
    }

    collabDescription(event: any) {
        this.setState({ collabDescription: event.target.value })
    }

    updateCollab(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault()
      console.log("updateCollab", this.props.collabId)
      console.log(this.state.collabName, this.state.collabDescription)
        fetch(`${APIURL}/collab/update/${this.props.collabId}`, {
            method: "PUT",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            }),
            body: JSON.stringify({
              collab: {
                collabName: this.state.collabName,
                collabDescription: this.state.collabDescription
              }  
            }),
        })
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))
    }

    componentDidMount() {
      console.log("inside update collab component")
    }

    render() {
        return (
      <div>
        <Form>
          <InputGroup>
            <Input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                this.setState({ collabName: e.target.value });
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
              value={this.state.collabDescription} placeholder="Collab Description" />
          </InputGroup>
        </Form>
        <button onClick={(e) => {this.updateCollab(e)}}> {" "} Update Collab {" "}
        </button>
      </div>
        )
    }
}

export default UpdateMyCollab