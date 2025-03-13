import logo from '../../../assets/image/logo.png'
import {NavLink} from "react-router";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <nav className={s.container}>
            <NavLink to={"/"} className={s.headerLink}>
                <img src={logo} alt='logotype' className={s.logo}/>
            </NavLink>

            <NavLink to={"/"} className={s.headerLink}>Home</NavLink>
            <NavLink to={"/characters"} className={s.headerLink}>Characters</NavLink>
            <NavLink to={"/locations"} className={s.headerLink}>Locations</NavLink>
            <NavLink to={"/episodes"} className={s.headerLink}>Episodes</NavLink>
        </nav>

    )
}