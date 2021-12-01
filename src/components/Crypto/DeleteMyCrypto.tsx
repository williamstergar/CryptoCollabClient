import React from "react"
import APIURL from "../../helpers/environment"

type Props = {
    // updateToken: (newToken: string) => void
    sessionToken: string | null | undefined
    cryptoId: number 
  }
  
  type State = {
    cryptoName: string
    cryptoDescription: string
    owner_id: any
    id: any
  }

class DeleteMyCrypto extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            cryptoName: "",
            cryptoDescription: "",
            owner_id: "",
            id: ""
        }

        this.deleteCrypto = this.deleteCrypto.bind(this)
    }

    collabName(event: any) {
        this.setState({ cryptoName: event.target.value})
    }

    collabDescription(event: any) {
        this.setState({ cryptoDescription: event.target.value })
    }

    deleteCrypto(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        console.log("deleteCrypto")
        fetch(`${APIURL}/crypto/delete/${this.props.cryptoId}`, {
            method: "DELETE",
            headers: new Headers({
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
        console.log("inside delete crypto component")
    }

    render() {
        return (
            <div>
                <h3> Delete Crypto </h3>
               <button onClick={(e) => {this.deleteCrypto(e)}}> Delete Crypto </button>
            </div>
        )
    }
}

export default DeleteMyCrypto