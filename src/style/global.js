// IMPORTS
import { createGlobalStyle } from 'styled-components'

// COMPONENTS
import reset from "./components/reset"
import fonts from "./components/fonts"
import common from "./components/common"

export default createGlobalStyle`
    ${reset}
    ${fonts}
    ${common}

    body {
        background-color: #111;
        color: #ccc;
    }
`