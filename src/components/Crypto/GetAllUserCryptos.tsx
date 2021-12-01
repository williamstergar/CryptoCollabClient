import React from "react"
import AdminDeleteCryptos from "../Admin/AdminDeleteCrypto"
import APIURL from "../../helpers/environment"

type Props = {
    // updateToken: (newToken: string) => void
    sessionToken: string | null | undefined
    admin: boolean
}

type State = {
    crypto: Array<iCrypto>
}

interface iCrypto {
    cryptoName: string,
    cryptoDescription: string,
    id: any
}

class GetAllUserCryptos extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            crypto: []
        }

        this.getAllUserCryptos = this.getAllUserCryptos.bind(this)
    }

    getAllUserCryptos() {
        fetch(`${APIURL}/crypto/all`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({ crypto: data })
                console.log(this.state.crypto)
            })
            .catch(err => console.log(err))

    }

    mapper() {
        return this.state.crypto.map((crypto, index) => {
            console.log(this.props, this.state)
            return (
                <ul key={index}>
                    <li> {crypto.cryptoName} </li>
                    <li> {crypto.cryptoDescription} </li>
                    <AdminDeleteCryptos admin={this.props.admin} cryptoId={crypto.id} sessionToken={this.props.sessionToken} />
                </ul>
            )
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.getAllUserCryptos}> Get All User Cryptos </button>
                {this.mapper()}
            </div>
        )
    }
}

export default GetAllUserCryptos