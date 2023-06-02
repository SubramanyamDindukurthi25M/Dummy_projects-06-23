import { Typography } from "@mui/material"

export const MuiTypography = () => {
    return (
        <>
            <Typography variant="h1" gutterBottom>
                Hello Quora,World!
            </Typography>
            <Typography variant="h2">
                Hello Quora,World!
            </Typography>
            <Typography variant="h3">
                Hello Quora,World!
            </Typography>
            <Typography variant="h4">
                Hello Quora,World!
            </Typography>
            <Typography variant="h5">
                Hello Quora,World!
            </Typography>
            <Typography variant="h6">
                Hello Quora,World!
            </Typography>

            {/* For paragraphs */}
            <Typography variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, aut!</Typography>
            <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, aut!</Typography>
        </>
    )
}