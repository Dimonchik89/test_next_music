import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import AdminHeaderItem from "./AdminHeaderItem";
import { useRouter } from "next/router"

import admin from "../../styles/admin.module.scss";

const headerLinks = [
    {
        title: "Music",
        path: "/admin"
    },
    {
        title: "Category",
        path: "/admin/category"
    },
]

const AdminHeader = () => {
    const router = useRouter()
    const content = headerLinks.map((item, i) => <AdminHeaderItem key={i} title={item.title} path={item.path}/>)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar 
                    variant="dense"
                    sx={{display: "flex", justifyContent: "center"}}    
                >
                    {content}
                    {/* <span
                        className={`${admin.header__item} ${activeLink}`}
                        onClick={() => router.push('/admin')}
                    >
                        Music
                    </span>
                    <span
                        className={`${admin.header__item} ${activeLink}`}
                        onClick={() => router.push('/admin/category')}
                    >
                        Category
                    </span> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default AdminHeader;