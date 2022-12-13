import {useState, useEffect} from "react"
import axios from "axios"

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()

    useEffect(() => {
        axios.post("http://localhost:4000/authenticate").then((res) => {
            setAccessToken(res.data.token)
            // window.history.push({}, null, "/")
        }).catch((err) => {
            console.log(err)
            // window.location = "/"
        })
    }, [])


    return accessToken
}
