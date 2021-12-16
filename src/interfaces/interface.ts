import { Set } from "typescript";

export interface ScandIt {
    barcodes?: (BarcodesEntity)[] | null;
    imageSettings: ImageSettings;
    imageData: Uint8Array[]
    rejectedCodes?: (Set<[]>) | null;
    rejectedTexts?: (Set<[]>)[] | null;
    texts?: string[] | null;
  }
  export interface BarcodesEntity {
    symbology: string;
    data: string;
    rawData: RawData;
    location: Location;
    compositeFlag: number;
    isGs1DataCarrier: boolean;
    encodingArray?: (EncodingArrayEntity)[] | null;
  }
  export interface RawData {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
  }
  export interface Location {
    topLeft: TopLeftOrTopRightOrBottomRightOrBottomLeft;
    topRight: TopLeftOrTopRightOrBottomRightOrBottomLeft;
    bottomRight: TopLeftOrTopRightOrBottomRightOrBottomLeft;
    bottomLeft: TopLeftOrTopRightOrBottomRightOrBottomLeft;
  }
  export interface TopLeftOrTopRightOrBottomRightOrBottomLeft {
    x: number;
    y: number;
  }
  export interface EncodingArrayEntity {
    encoding: string;
    endIndex: number;
    startIndex: number;
  }
  export interface ImageSettings {
    width: number;
    height: number;
    format: number;
  }
  