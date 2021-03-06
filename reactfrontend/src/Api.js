import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:8000/api/"
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
export default {
    getAllPosts() {
        return axios.get('/posts/')
    },
    createPost(data) {
        return axios.post('/posts/', data).then((res) => {
            console.log(res)
        })
    },
    deletePost(id) {
        return axios.delete('/posts/' + String(id))
    },
    updatePost(id, data) {
        return axios.put('/posts/' + id, data)
    },
}