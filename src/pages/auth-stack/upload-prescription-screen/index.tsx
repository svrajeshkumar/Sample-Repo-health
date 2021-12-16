import {
  Box,
  Button,
  Dialog,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { Barcode, ScanSettings } from "scandit-sdk";
import NavBar from "../../../components/navbar";
import ROUTES from "../../../navigation/routes";
import ScanditBarcodeScanner from "scandit-sdk-react";
import { KEYS } from "../../../constants/keys";
import { BarcodesEntity, ScandIt } from "../../../interfaces/interface";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
const UploadingPrescriptionScreen: React.FC = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate(ROUTES.HOMESCREEN);
  };

  const webcamRef = React.useRef(null);
  const [imgSRC, setImgSRC] = useState("");
  const [files, setFile] = useState<any[]>([]);
  const [cameraDialog, setCameraDialog] = useState(false);
  const fileHandler = (e: any) => {
    console.log(e.target.files);

    let allfiles: any[] = [];
    for (let i = 0; i < e.target.files.length; i++) {
      allfiles.push(e.target.files[i]);
    }
    if (allfiles.length > 0) {
      //@ts-ignore
      if (files.length > 0) {
        //@ts-ignore
        setFile(allfiles).push(...files);
      } else {
        setFile(allfiles);
      }
    }
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const decodeBase64 = (base64data: any) => {
    let base64ToString = Buffer.from(base64data, "base64").toString();
    return base64ToString;
  };

  const getScanSettings = () => {
    return new ScanSettings({
      enabledSymbologies: [
        Barcode.Symbology.CODE128,
        Barcode.Symbology.EAN13,
        Barcode.Symbology.EAN8,
      ],
    });
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [scanditData, setScanditData] = useState<ScandIt>();
  const capturePhoto = React.useCallback(() => {
    //@ts-ignore

    const imageSrc = webcamRef?.current?.getScreenshot();
    if (imageSrc) {
      setImgSRC(imageSrc);
      setCameraDialog(false);
    }
  }, [webcamRef]);

  useEffect(() => {
    //  console.log(scanditData)
    if (scanditData) {
      if (scanditData.barcodes) {
        if (scanditData.barcodes.length > 0) {
          console.log(scanditData.barcodes);
          setOpenSnackbar(true);
        }
      }
    }
  }, [scanditData]);

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const getSnackBar = () => {
    {
      scanditData.barcodes &&
        scanditData.barcodes.length > 0 &&
        scanditData.barcodes.map((value) => {
          return (
            <Snackbar
              open={openSnackbar}
              onClose={() => setOpenSnackbar(false)}
              message={value}
            />
          );
        });
    }
  };

  return (
    <div>
      <Box>
        <Box display="flex" flexDirection="column" height={"100vh"} flex={1}>
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
              {files.length > 0 || imgSRC ? (
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
              {!(files.length > 0) ? (
                <Typography
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  Upload your prescriptions, your doctor has prescribed to you.
                  We will reach out to them, and transfer it to us.
                </Typography>
              ) : (
                //  <img height={"500px"} width={"700px"}  src={imgSRC}  />

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
                  height: "20vh",
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
                    setCameraDialog(true);
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

              <Button
                onClick={() => {
                  setOpenDialog(true);
                }}
                sx={{
                  backgroundColor: "#0074c0",
                  color: "white",
                  borderRadius: "20px",
                  alignSelf: "flex-start",
                  marginTop: "10px",
                  paddingRight: "100px",
                  paddingLeft: "100px",
                }}
              >
                Scan It
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={cameraDialog}
        onBackdropClick={() => setCameraDialog(false)}
        maxWidth="xl"
        sx={{
          alignSelf: "center",
        }}
      >
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
              capturePhoto();
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
          </Button>
        </>
      </Dialog>
      <Dialog
        open={openDialog}
        onBackdropClick={() => setOpenDialog(false)}
        sx={{}}
      >
        {" "}
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <ScanditBarcodeScanner
            // Library licensing & configuration options (see https://docs.scandit.com/stable/web/globals.html#configure)
            licenseKey={KEYS.LICENSE_KEYS}
            engineLocation="https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build" // could also be a local folder, e.g. "build"
            // Picker events
            onReady={() => {
              console.log("ss");
            }}
            onScan={(data) => {
              setScanditData(data);
            }}
            onScanError={console.log}
            // Picker options
            playSoundOnScan={true}
            scanSettings={getScanSettings()}
            accessCamera={true}
            preloadBlurryRecognition={true}
            preloadEngine={true}
          />
        </Box>
      </Dialog>
      {scanditData &&
        scanditData.barcodes &&
        scanditData.barcodes.length > 0 &&
        scanditData.barcodes.map((value) => {
          return (
            <Snackbar
              open={openSnackbar}
              onClose={() => setOpenSnackbar(false)}
              // message={value.data}
              anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
              autoHideDuration={1500}
            >
              <Alert
                onClose={() => setOpenSnackbar(false)}
                severity="success"
                sx={{ width: "100%" }}
              >
                {`The scanned barcode is ${value.data}`}
              </Alert>
            </Snackbar>
          );
        })}
    </div>
  );
};

export default UploadingPrescriptionScreen;
