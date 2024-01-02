import GlobalStore from "../AppStore/globalStore";
import BusinessAdmin from "./businessAdmin";
import Login from "./login";
import {observer} from 'mobx-react'

const Admin = observer(()=>{
    return (
         <>  
            {!GlobalStore.isLogin?<Login/> :
              <BusinessAdmin/>
            }
         </>
    )
})
export default Admin;