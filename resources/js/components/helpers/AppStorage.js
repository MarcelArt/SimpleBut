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
    storeId(id){
        localStorage.setItem('id', JSON.parse(id));
    }

    store(user,token,name,id){
        this.storeToken(token);
        this.storeUser(user);
        this.storeName(name);
        this.storeId(id);
    }

    getInfo(name, id){
        this.storeName(name);
        this.storeId(id);
    }

    clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('name');
        localStorage.removeItem('id');
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