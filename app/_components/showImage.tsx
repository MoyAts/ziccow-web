import React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useRef } from "react";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const ShowImage = ({
  imageLink,
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
  imageLink: string;
}) => {
  const zoomRef = useRef(null);
  return (
    <Lightbox
      open={open}
      plugins={[Zoom]}
      carousel={{ finite: true }}
      zoom={{
        ref: zoomRef,
        maxZoomPixelRatio: 10,
      }}
      close={() => setOpen(false)}
      slides={[
        {
          src: imageLink,
          alt: "profile ",
        },
      ]}
    />
  );
};

export default ShowImage;
