import { useState } from "react"
import { PasswordStrengthMeter } from "./PasswordStrengthMeter"

export const App = () => {
    const [password, setPassword] = useState('')

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="container">
            <h2 className="text-center text-capitalize mb-0 text-secondary">
                password strength
            </h2>
            <div className="mx-auto underline-text bg-warning"></div>
            <div className="row">
                <div className="col-lg-8 mx-auto mt-5">
                    <form>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control shadow-none"
                                placeholder="Password"
                                value={password}
                                onChange={handlePassword}
                            />
                            <PasswordStrengthMeter
                                passwordValue = {password}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}