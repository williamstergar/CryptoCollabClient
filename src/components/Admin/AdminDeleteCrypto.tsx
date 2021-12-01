import React from "react"
import APIURL from "../../helpers/environment"

type Props = {
    // updateToken: (newToken: string) => void
    sessionToken: string | null | undefined
    cryptoId: number
    admin: boolean
  }
  
  type State = {
    cryptoName: string
    cryptoDescription: string
    owner_id: any
    id: any
  }

class AdminDeleteCrypto extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            cryptoName: "",
            cryptoDescription: "",
            owner_id: "",
            id: ""
        }

        this.adminDeleteCrypto = this.adminDeleteCrypto.bind(this)
    }

    cryptoName(event: any) {
        this.setState({ cryptoName: event.target.value})
    }

    cryptoDescription(event: any) {
        this.setState({ cryptoDescription: event.target.value })
    }

    adminDeleteCrypto(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        fetch(`${APIURL}/crypto/admin/crypto/delete/${this.props.cryptoId}`, {
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
               <button onClick={(e) => {this.adminDeleteCrypto(e)}}> Admin Delete Crypto </button>
            </div>
        )
    }
}

export default AdminDeleteCrypto