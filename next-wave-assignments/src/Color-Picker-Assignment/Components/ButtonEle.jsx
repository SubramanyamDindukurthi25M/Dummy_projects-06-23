export const ButtonEle = ({changeState}) => {
    const btnColors = ['e0e0e0', '6fcf97', '56ccf2', 'bb6bd9'];
    const hexSymbol = "#";

    const handleBgColor = (e) => {
        changeState(e.target.value);
    }
    return (
        <>
            {
                btnColors.map((ele,i) => {
                    const result = `${hexSymbol}${ele}`;
                    return (
                        <div className="col-lg-2 mx-auto mt-2" key={i}>
                            <button
                                type="button"
                                className='btn rounded'
                                style={{backgroundColor:result}}
                                value={result}
                                onClick={handleBgColor}
                            >
                                {result}
                            </button>
                        </div>
                    )
                })
            }
        </>
    )
}