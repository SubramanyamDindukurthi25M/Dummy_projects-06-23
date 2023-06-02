import { InputAdornment, Stack, TextField } from "@mui/material"
import { Visibility } from "@mui/icons-material"

export const MuiTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='First Name'
                    variant="filled"
                    size='small'
                    color="primary"
                />
                <TextField
                    label='Last Name'
                    variant="outlined"
                    size="normal"
                    color='secondary'
                    helperText='please enter your last name'
                />
                <TextField
                    label='Middle Name'
                    variant="standard"
                    color="success"
                    required
                />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField
                    label='With normal TextField'
                    InputProps={{
                        startAdornment:<InputAdornment position="start">$</InputAdornment>
                    }}
                />
                <TextField
                    helperText='Weight'
                    InputProps={{
                        endAdornment:<InputAdornment position="end">Kg</InputAdornment>
                    }}
                />
                <TextField
                    label='Password'
                    InputProps={{
                        endAdornment:<InputAdornment position="end">{<Visibility/>}</InputAdornment>
                    }}  
                />
            </Stack>
        </Stack>
    )
}