import React from "react";
import DeleteMyCrypto from "./DeleteMyCrypto"
import UpdateMyCrypto from "./UpdateMyCrypto"
import APIURL from "../../helpers/environment"

type Props = {
    // updateToken: (newToken: string) => void
    sessionToken: string | null | undefined
}

type State = {
    crypto: Array<iCrypto>
}

interface iCrypto {
    cryptoName: string,
    cryptoDescription: string,
    id: any
}

class GetMyCryptos extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            crypto: []
        }

        this.getMyCryptos = this.getMyCryptos.bind(this)
    }

    getMyCryptos() {
        fetch(`${APIURL}/crypto/mine`, {
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

    showUpdate(id: number) {
        return (
            <div> <UpdateMyCrypto cryptoId={id} sessionToken={this.props.sessionToken} /> </div>
        )
    }


    mapper() {
        return this.state.crypto.map((crypto, index) => {
            console.log(crypto.id)
            return (
                <ul key={index}>
                    <li> {crypto.cryptoName} </li>
                    <li> {crypto.cryptoDescription} </li>
                    <DeleteMyCrypto cryptoId={crypto.id} sessionToken={this.props.sessionToken} />
                    <UpdateMyCrypto cryptoId={crypto.id} sessionToken={this.props.sessionToken} />
                </ul>
            )
        })
    }
    
    render() {
        return (
            <div>
                <h2> Get My Cryptos </h2>
                <button onClick={this.getMyCryptos}> Get My Cryptos </button>
                {this.mapper()}
            </div>
        )
    }
}

export default GetMyCryptos