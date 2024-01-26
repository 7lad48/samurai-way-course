import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '96f8c027-3df4-47cf-a502-72d0421d4916'
    }
})

export const API = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {})
            .then((response) => {
                return response.data
            })
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then((response) => {
                return response.data
            })
    },
    authMe(){
        return instance.get('/auth/me')
            .then(response => {
                return response.data
            })
    },
    getProfile(userId: string){
        return instance.get(`/profile/${userId}`)
            .then(response => {
                return response.data
            })
    }


}