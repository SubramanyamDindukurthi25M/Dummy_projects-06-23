import { createContext } from "react"

// 1) Invoke createContext hook
export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {
    <ShopContext.Provider>
        {props.children}
    </ShopContext.Provider>
}