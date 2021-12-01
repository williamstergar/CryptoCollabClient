let APIURL = ""

switch (window.location.hostname) {
    case "localhost" || "127.0.0.1":
        APIURL = "http://localhost:5000"
        break

    case "cryptocollabclient.herokuapp.com":

        APIURL = "https://cryptocollabserver.herokuapp.com"
}

export default APIURL