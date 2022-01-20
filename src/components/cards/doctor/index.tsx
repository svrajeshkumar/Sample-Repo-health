import React from "react";
import { styled, Box, Typography, Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface cardProps {
  name: string;
  address?: any;
  onClickAdd?: (e: any) => void;
  contact?: string;
  showAddbtn?: boolean;
}

const DoctorSearchCard: React.FC<cardProps> = ({
  onClickAdd,
  name,
  address,
  showAddbtn,
  contact,
}) => {
  const [_address, setAddress] = React.useState("");

  React.useEffect(() => {
    console.log(address);
    if (address) {
      let adlbl = `${address.street1} ${address.city} ${address.state},${address.zip}`;
      setAddress(adlbl);
    }
  }, [address]);

  const StyledCardWrapper = styled(Box)(({ theme }) => ({
    padding: 12,
    backgroundColor: "#F9F9F9",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "10px",
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  }));

  const StyledCardHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  }));

  const StyledLinkButton = styled(Button)(({ theme }) => ({
    width: 100,
    fontSize: 12,
    textDecoration: "underline",
    height: 25,
  }));

  const StyledCardContent = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: 14,
    marginTop: 10,
    width: "95%",
  }));

  const StyledAddIcon = styled(AddCircleIcon)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginTop: 10,
    fontSize: "30px",
  }));
  const StyledAddText = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: "12px",
    fontWeight: 600,
  }));

  return (
    <StyledCardWrapper>
      <StyledCardHeader>
        <Box>
          <Typography
            sx={{ fontSize: "14px", fontWeight: 600 }}
            variant="body1"
          >
            {name}
          </Typography>
          <Box>
            <StyledCardContent variant="body1">{_address}</StyledCardContent>
          </Box>
          <Box>
            {contact && (
              <StyledCardContent variant="body1">
                Call:{contact}
              </StyledCardContent>
            )}
          </Box>
        </Box>

        {showAddbtn ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <IconButton onClick={onClickAdd} sx={{ padding: 0 }}>
                <StyledAddIcon />
              </IconButton>
            </Box>
            <StyledAddText>Add</StyledAddText>
          </Box>
        ) : (
          <StyledLinkButton>Change</StyledLinkButton>
        )}
      </StyledCardHeader>
    </StyledCardWrapper>
  );
};

export default DoctorSearchCard;
