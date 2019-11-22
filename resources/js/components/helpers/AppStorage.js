class AppStorage
{
    storeToken(token){
        localStorage.setItem('token', token);
    }
    storeUser(user){
        localStorage.setItem('user', user);
    }
    storeName(name){
        localStorage.setItem('name', JSON.parse(name));
    }

    store(user,token, name){
        this.storeToken(token);
        this.storeUser(user);
        this.storeUser(name);
    }

    getInfo(name){
        this.storeName(name);
    }

    clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('name');
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