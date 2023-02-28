import { useState } from "react";

const useValue = () => {
    const [value, setValue] = useState("")

    const handleChangeValue = (e) => {
        setValue(e.target.value)
    } 

    const clearValue = () => {
        setValue("")
    }

    return {value, handleChangeValue, clearValue}
}

export default useValue