import { useState } from "react"
import { observer } from "mobx-react"
import EditBusiness from "./editBusiness"
import AdminBusiness from "./adminBusiness"

const BusinessData = (observer(() => {
    const [editForm, setEditForm] = useState(false)
    return (
        <>
            {editForm ? <EditBusiness  setEditForm={setEditForm}/> : <AdminBusiness  setEditForm={setEditForm}/>}
        </>
    )
}))
export default BusinessData