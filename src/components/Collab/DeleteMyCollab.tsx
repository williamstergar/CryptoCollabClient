import React from "react"
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

class DeleteMyCollab extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            collabName: "",
            collabDescription: "",
            owner_id: "",
            id: ""
        }

        this.deleteCollab = this.deleteCollab.bind(this)
    }

    collabName(event: any) {
        this.setState({ collabName: event.target.value})
    }

    collabDescription(event: any) {
        this.setState({ collabDescription: event.target.value })
    }

    deleteCollab(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        fetch(`${APIURL}/collab/delete/${this.props.collabId}`, {
            method: "DELETE",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))
    }

    componentDidMount(){
        console.log("inside delete collab component")
    }

    render() {
        return (
            <div>
               <h3>Delete Collab</h3>
               <button onClick={(e) => {this.deleteCollab(e)}}> Delete Collab </button>
            </div>
        )
    }
}

export default DeleteMyCollab