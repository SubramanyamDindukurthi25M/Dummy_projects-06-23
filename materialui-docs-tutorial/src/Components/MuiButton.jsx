import { Button, IconButton, Stack } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'

export const MuiButton = () => {
    return (
        <Stack spacing={4} direction='row'>
            <Button variant='text'>Submit</Button>
            <Button variant='contained' color='secondary'>Login</Button>
            <Button variant='outlined' color='error' size="large">Logout</Button>
            <Button disabled>Sign Up</Button>
            <Button variant="contained" startIcon={<SendIcon/>} disableElevation>
                Button With icon
            </Button>
            <Button variant="contained" endIcon={<SendIcon/>}>
                Button With icon
            </Button>
            <IconButton color="error" size="large">
                <SendIcon/>
            </IconButton>
        </Stack>
    )
}