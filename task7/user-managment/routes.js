const url=import.meta.env.VITE_API_KEY;

export const routes={
    register:`${url}/api/signup/`,
    login:  `${url}/api/signin/`,
    logout:`${url}/api/signout/`,
    forgetpassword:`${url}/api/forgetpassword/`,
    verifyemail:`${url}/api/verifyemail/`,
    resetpassword: `${url}/api/resetpassword/`,
    getusers:`${url}/api/getusers/`,
    viewprofile:`${url}/api/viewprofile/`,
    editprofile:`${url}/api/editprofile/`,
}

export const adminroutes={
    adduser:`${url}/api/adduser/`,
    edituser:`${url}/api/edituser/`,
    deleteuser:`${url}/api/deleteuser/`,
    getusers:`${url}/api/getusers/`,

}



