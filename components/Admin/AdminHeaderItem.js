import { useRouter } from "next/router";

import admin from "../../styles/admin.module.scss";

const AdminHeaderItem = ({title, path}) => {
    const router = useRouter()

    const activeLink = router.asPath === path ? admin.header__item_active : ""

    console.log(`router.asPath`, router.asPath);
    console.log(title, path);

    return (
        <span
            className={`${admin.header__item} ${activeLink}`}
            onClick={() => router.push(path)}
        >
            {title}
        </span>
    )
}
export default AdminHeaderItem