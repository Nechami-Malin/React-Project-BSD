import {observable,makeObservable,action} from 'mobx';
class GlobalStore
{
    isLogin=false;
    constructor(){
        //observable יצירת
        makeObservable(this,{
            isLogin:observable,
            setIsLogin:action,
        })
    }
    setIsLogin=(val)=>{
        this.isLogin=val;
    }
}
//יצירת מופע יחיד שאליו תמיד נפנה
export default new GlobalStore();
