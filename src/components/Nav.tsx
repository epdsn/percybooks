import Logo from "./Logo"
import {motion} from "framer-motion"
import { useState } from "react"

export default function Nav() {
    const [toggle, setToggled] = useState(false)
    return (
        <nav className="relative mx-8 mb-24">
            <h1>
            <Logo />     
            </h1>
        </nav>
    )
}