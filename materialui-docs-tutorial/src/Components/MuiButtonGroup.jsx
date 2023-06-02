import { Button, ButtonGroup, Stack } from "@mui/material"

export const MuiButtonGroup = () => {
    return (
        <Stack spacing={4} direction='row'>
            <ButtonGroup disableElevation color="info" size="large" variant="contained">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Stack>
    )
}