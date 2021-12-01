import React from "react"
import "./App.css"
import Register from "./components/MainPage/Auth" //POST
import Login from "./components/MainPage/Login" //POST
import CreateCollab from "./components/Collab/CreateCollab" //POST
import CreateCrypto from "./components/Crypto/CreateCrypto" //POST
import GetMyCollab from "./components/Collab/GetMyCollab" //GET
import GetMyCrypto from "./components/Crypto/GetMyCrypto" //GET
import GetAllUserCollabs from "./components/Collab/GetAllUserCollabs" //GET
import GetAllUserCryptos from "./components/Crypto/GetAllUserCryptos" //GET
import WelcomeMessage from "./components/MainPage/WelcomeMessage" //Message

type State = {
  sessionToken: string | undefined | null
  admin: boolean
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      sessionToken: undefined,
      admin: false
    }

    this.updateUser = this.updateUser.bind(this)
    this.clearToken = this.clearToken.bind(this)
  }

componentDidMount() {
  // updateLocalStorage = (() => {
    if (localStorage.getItem('token')) {
      this.setState({ sessionToken: localStorage.getItem('token') })
    }
  }
  
  updateUser(newToken: string, admin: boolean) {
    localStorage.setItem("token", newToken)
    this.setState({ sessionToken: newToken, admin: admin })
  }

  clearToken() {
    localStorage.clear()
    this.setState({ sessionToken: "" })
  }

  checkAdmin() {
    if (this.state.admin === true) {
      return(
        <div>
          <GetAllUserCollabs admin={this.state.admin} sessionToken={this.state.sessionToken} />
          <br />
          <GetAllUserCryptos admin={this.state.admin} sessionToken={this.state.sessionToken} />
        </div>
      )
    } else { return(<div></div>)}
  }

  render() {
    return (
      <div>
        <WelcomeMessage />
        <Register updateUser={this.updateUser} />
        <Login updateUser={this.updateUser} />
        <CreateCollab sessionToken={this.state.sessionToken} />
        <CreateCrypto sessionToken={this.state.sessionToken} />
        <GetMyCollab admin={this.state.admin} sessionToken={this.state.sessionToken} />
        <GetMyCrypto sessionToken={this.state.sessionToken} />
        <br />
        {this.checkAdmin()}
        {/* <GetAllUserCollabs admin={this.props.admin} sessionToken={this.props.sessionToken} /> */}
      </div>
    )
  }
}

export default App

// style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(20%, 40%)"}}