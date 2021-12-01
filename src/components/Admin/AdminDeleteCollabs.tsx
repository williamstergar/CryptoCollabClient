import React from "react"
import APIURL from "../../helpers/environment"

type Props = {
    // updateToken: (newToken: string) => void
    sessionToken: string | null | undefined
    collabId: number
    admin: boolean
  }
  
  type State = {
    collabName: string
    collabDescription: string
    owner_id: any
    id: any
  }

class AdminDeleteCollab extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            collabName: "",
            collabDescription: "",
            owner_id: "",
            id: ""
        }

        this.adminDeleteCollab = this.adminDeleteCollab.bind(this)
    }

    collabName(event: any) {
        this.setState({ collabName: event.target.value})
    }

    collabDescription(event: any) {
        this.setState({ collabDescription: event.target.value })
    }

    adminDeleteCollab(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        fetch(`${APIURL}/collab/admin/collab/delete/${this.props.collabId}`, {
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
               <button onClick={(e) => {this.adminDeleteCollab(e)}}> Admin Delete Collab </button>
            </div>
        )
    }
}

export default AdminDeleteCollab