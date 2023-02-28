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
                    <Typography 
                        className={admin.header__item}
                        onClick={() => router.push('/admin')}
                    >
                        Music
                    </Typography>
                    <Typography 
                        className={admin.header__item}
                        onClick={() => router.push('/admin/category')}
                    >
                        Category
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default AdminHeader;