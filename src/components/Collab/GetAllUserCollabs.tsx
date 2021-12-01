import React from "react"
import AdminDeleteCollabs from "../Admin/AdminDeleteCollabs"
import APIURL from "../../helpers/environment"

type Props = {
    // updateToken: (newToken: string) => void
    sessionToken: string | null | undefined
    admin: boolean
}

type State = {
    collab: Array<iCollab>
}

interface iCollab {
    collabName: string,
    collabDescription: string,
    id: any
}

class GetAllUserCollabs extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            collab: []
        }

        this.getAllUserCollabs = this.getAllUserCollabs.bind(this)
    }

    getAllUserCollabs() {
        fetch(`${APIURL}/collab/all`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({ collab: data })
                console.log(this.state.collab)
            })
            .catch(err => console.log(err))

    }

    mapper() {
        return this.state.collab.map((collab, index) => {
            console.log(this.props, this.state)
            return (
                <ul key={index}>
                    <li> {collab.collabName} </li>
                    <li> {collab.collabDescription} </li>
                    <AdminDeleteCollabs admin={this.props.admin} collabId={collab.id} sessionToken={this.props.sessionToken} />
                </ul>
            )
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.getAllUserCollabs}> Get All User Collabs </button>
                {this.mapper()}
            </div>
        )
    }
}

export default GetAllUserCollabs