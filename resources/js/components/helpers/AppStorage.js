class AppStorage
{
    storeToken(token){
        localStorage.setItem('token', token);
    }
    storeUser(user){
        localStorage.setItem('user', user);
    }

    store(user,token){
        this.storeToken(token);
        this.storeUser(user);
    }

    getInfo(name){
        this.storeName(name);
    }

    clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    getToken(){
        return localStorage.getItem('token');
    }
    getUser(){
        let user = localStorage.getItem('user');
        return JSON.parse(user);
    }

}

export default AppStorage = new AppStorage();