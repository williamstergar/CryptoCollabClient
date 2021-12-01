import React from "react";
import DeleteMyCollab from "./DeleteMyCollab"
import UpdateMyCollab from "./UpdateMyCollab"
import AdminDeleteCollab from "../Admin/AdminDeleteCollabs"
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

class GetMyCollabs extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            collab: []
        }

        this.getMyCollabs = this.getMyCollabs.bind(this)
    }

    getMyCollabs() {
        fetch(`${APIURL}/collab/mine`, {
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

    showUpdate(id: number) {
        return (
            <div> <UpdateMyCollab collabId={id} sessionToken={this.props.sessionToken} /> </div>
        )
    }

    mapper() {
        return this.state.collab.map((collab, index) => {
            console.log(this.props, this.state)
            return (
                <ul key={index}>
                    <li> {collab.collabName} </li>
                    <li> {collab.collabDescription} </li>
                    <DeleteMyCollab collabId={collab.id} sessionToken={this.props.sessionToken} />
                    <UpdateMyCollab collabId={collab.id} sessionToken={this.props.sessionToken} />
                    {this.props.admin? <AdminDeleteCollab admin={this.props.admin} collabId={collab.id} sessionToken={this.props.sessionToken} />: null}
                </ul>
            )
        })
    }
    
    render() {
        return (
            <div>
                <h2> Get My Collabs </h2>
                <button onClick={this.getMyCollabs}> Get My Collabs </button>
                {this.mapper()}
            </div>
        )
    }
}

export default GetMyCollabs