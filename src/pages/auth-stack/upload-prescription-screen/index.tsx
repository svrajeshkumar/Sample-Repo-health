import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import NavBar from "../../../components/navbar";
import ROUTES from "../../../navigation/routes";

const UploadingPrescriptionScreen: React.FC = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate(ROUTES.HOMESCREEN);
  };

  const webcamRef = React.useRef(null);
  const [imgSRC, setImgSRC] = useState('')
  const [files, setFile] = useState([]);
  const [cameraDialog, setCameraDialog] = useState(false)
  const fileHandler = (e: any) => {
    console.log(e.target.files);

    let allfiles = [];
    for (let i = 0; i < e.target.files.length; i++) {
      allfiles.push(e.target.files[i]);
    }
    if (allfiles.length > 0) {
      //@ts-ignore
      setFile(allfiles);
    }
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const decodeBase64 = (base64data: any) => {
    let base64ToString = Buffer.from(base64data, "base64").toString()
    return base64ToString
}


  const capturePhoto = React.useCallback(() => {
    //@ts-ignore
    const imageSrc = webcamRef?.current?.getScreenshot();
    if(imageSrc){
        setImgSRC(imageSrc)
        setCameraDialog(false)
    }
  }, [webcamRef]);

  return (
    <div>
      <Box>
        <Box display="flex" flexDirection="column" height={"100vh"} flex={1}>
          <NavBar />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            flex={0.92}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                marginLeft: "14vw",
                flex: 0.5,
              }}
            >
              {(files.length > 0 || imgSRC) ? (
                <Typography
                  sx={{
                    fontSize: "40px",
                  }}
                >
                  Here are your Prescriptions{" "}
                </Typography>
              ) : (
                <Typography
                  sx={{
                    fontSize: "40px",
                  }}
                >
                  Upload Prescriptions{" "}
                </Typography>
              )}
              {!(files.length > 0 || imgSRC) ? (
                <Typography
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  Upload your prescriptions, your doctor has prescribed to you.
                  We will reach out to them, and transfer it to us.
                </Typography>
              ) : (
               imgSRC ? 
               <img height={"500px"} width={"700px"}  src={imgSRC}  />
                  :
                files.map((file, key) => {
                  return (
                    <div key={key} className="Row">
                      <span className="Filename">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={
                            //@ts-ignore
                            file.name
                          }
                        />
                      </span>
                    </div>
                  );
                })
              )}
            </Box>

            <Box
              component="form"
              sx={{
                flex: 0.5,
                display: "flex",
                flexDirection: "column",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "30vh",
                marginRight: "10vw",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: "5vh",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  Select Prescriptions
                </Typography>
                <TextField
                  type="file"
                  onChange={(e) => {
                    fileHandler(e);
                  }}
                  variant="outlined"
                ></TextField>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: "5vh",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    marginTop: "40px",
                  }}
                >
                  OR
                </Typography>

                <Button
                  onClick={() => {
                    setCameraDialog(true)
                  }}
                  sx={{
                    backgroundColor: "#0074c0",
                    color: "white",
                    borderRadius: "20px",
                    alignSelf: "flex-start",
                    marginTop: "20px",
                    paddingRight: "100px",
                    paddingLeft: "100px",
                  }}
                >
                  Capture Photo
                </Button>
              </Box>
              <Button
                onClick={() => {
                  navigateToHome();
                }}
                sx={{
                  backgroundColor: "#0074c0",
                  color: "white",
                  borderRadius: "20px",
                  alignSelf: "flex-start",
                  marginTop: "20px",
                  paddingRight: "100px",
                  paddingLeft: "100px",
                }}
              >
                Upload
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog open={cameraDialog}
      onBackdropClick={() => setCameraDialog(false)}
      maxWidth="xl"
      sx={{
          alignSelf: "center"
      }}>
        <>
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <Button
          onClick={() => {
            capturePhoto()
          }}
          sx={{
            backgroundColor: "#0074c0",
            color: "white",
            borderRadius: "20px",
            alignSelf: "center",
            paddingRight: "100px",
            marginTop: "-100px",
            paddingLeft: "100px",
          }}
        >
          Capture Photo
        </Button></>
        
      </Dialog>
    </div>
  );
};

export default UploadingPrescriptionScreen;
