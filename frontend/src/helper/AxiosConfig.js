import axios from "axios";

const myBackendUrl=process.env.BACKEND_MODE === 'Development'? "http://localhost:8000/api/v1" :process.env.BACHEND_MODE === 'staging'? "http://localhost:8000/api/v1" : "http://localhost:8000/api/v1"

const api=axios.create({baseURL: myBackendUrl})

export default api