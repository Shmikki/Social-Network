import axios from "axios";


export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "b6d68778-a69a-45fd-9609-1071119b3bcc"
    }
});


export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    setFollow(userID) {
        return instance.post(`/follow/${userID}`)
    },

    setUnFollow(userID) {
        return instance.delete(`/follow/${userID}`)
    },

}


export const profileAPI = {

    getProfile(userID) {
        return instance.get(`/profile/${userID}`);
    },

    getStatusProfile(userID){
        return instance.get(`/profile/status/${userID}`);
    },

    setStatusProfile(status){
        return instance.put(`/profile/status`, {status: status});
    }
}

export const authAPI = {

    logIn(email,password,rememberMe){
        return instance.post(`/auth/login`,{Email : email,
                                        password: password,
                                        RememberMe:rememberMe});
    },

    logOut(){
        return instance.delete(`/auth/login`);
    },

    getAuth(){
        return instance.get("/auth/me");
    }

}
