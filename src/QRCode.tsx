/**
 * Component name: QRCode
 * Description: Handle the generation and the rendering of the QR Code in a canvas
 */

import { useEffect } from "react";
import qrcode from "qrcode";

type QRCodeProps = {
  data: string;
  errorCorrectionLevel: string | undefined;
  size: number;
  style?: any;
};

//let _canvas: HTMLCanvasElement | null;
const QRCode: React.FC<QRCodeProps> = ({
  data,
  errorCorrectionLevel,
  size,
  style,
}) => {
  function drawQRcode() {
    qrcode.toCanvas(_canvas, data, {
      width: size,
      margin: 0,
      errorCorrectionLevel:
        errorCorrectionLevel as qrcode.QRCodeErrorCorrectionLevel,
      color: {
        light: "#fff",
      },
    });
  }
  useEffect(() => {
    if (data) drawQRcode();
  });
  let _canvas: HTMLCanvasElement | null;
  return (
    <canvas
      style={style}
      ref={(n) => {
        _canvas = n;
      }}
    ></canvas>
  );
};

export default QRCode;
