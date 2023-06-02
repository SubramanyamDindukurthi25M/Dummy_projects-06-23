import zxcvbn from "zxcvbn"

export const PasswordStrengthMeter = ({passwordValue}) => {
    // Logic to collect score property
    const passwordStrength = zxcvbn(passwordValue)
    const scoreNumber = (passwordStrength.score * 100) / 4

    // Logic to change progressbar bg-color
    const changeBgColor = () => {
        switch (passwordStrength.score) {
            case 0:
                return '#828282';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none'
        }
    }

    // Logic to change text-color to password result
    const passwordLabel = () => {
        switch (passwordStrength.score) {
            case 0:
                return 'Very Weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Fear';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return ''
        }
    }

    const changePasswordStrengthColor = () => ({
        width: `${scoreNumber}%`,
        background: changeBgColor(),
        height: '15px'
    })
    return (
        <>
            <div className="progress mt-2" style={{height:'15px'}}>
                <div 
                    className="progress-bar text-dark"
                    style={changePasswordStrengthColor()}
                    >
                        {scoreNumber}%
                </div>
            </div>
            <p style={{color:changePasswordStrengthColor()}} className='text-right'>
                {passwordLabel()}
            </p>
        </>
    )
}