import { TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { Strings } from "../../constants/strings"

interface LabelTextFieldProps {
    label: string
    placeholder: string
    isDate?: boolean
}

const LabelTextField:React.FC<LabelTextFieldProps> = ({label,placeholder,isDate = false}) => {
    return (
        <Box style={{display: 'flex',flexDirection: 'column', paddingTop: "10px"}}>
              <Typography sx={{
                marginBottom: '2px'
              }}>
                {label}
              </Typography>
            <TextField
              fullWidth
              type={isDate ? "date" : "text"}
              placeholder={placeholder}
              sx={{
                paddingRight: "10px",
              }}
            ></TextField>
            </Box>
    )
}

export default LabelTextField