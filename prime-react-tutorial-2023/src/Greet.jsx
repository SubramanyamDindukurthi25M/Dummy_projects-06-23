import { useRef, useState } from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import {InputText} from 'primereact/inputtext'
import {Toast} from 'primereact/toast'

export const Greet = () => {
    const [inputValue, setInputValue] = useState('')

    // Invoke useRef hook
    const toast = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.current.show({
            severity: 'info',
            summary: 'Greet Message',
            detail: inputValue
        })
        setInputValue('')
    }
    return (
        <div className="grid">
            <div className="col-4">
                <Card className="card bg-blue-400 p-2 text-white" title='Enter Message...'>
                    <InputText
                        placeholder='Enter Message'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className='outline-none'
                    />                        
                    <Toast
                        ref={toast}
                    />
                    <Button
                        label='Enter'
                        severity='secondary'
                        className='ml-2'
                        onClick={handleSubmit}
                    />
                </Card>
            </div>
        </div>
    )
}