import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { useRouter } from "next/router"

import admin from "../../styles/admin.module.scss";

const AdminHeader = () => {
    const router = useRouter()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar 
                    variant="dense"
                    sx={{display: "flex", justifyContent: "center"}}    
                >
                    <span
                        className={admin.header__item}
                        onClick={() => router.push('/admin')}
                    >
                        Music
                    </span>
                    <span
                        className={admin.header__item}
                        onClick={() => router.push('/admin/category')}
                    >
                        Category
                    </span>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default AdminHeader;