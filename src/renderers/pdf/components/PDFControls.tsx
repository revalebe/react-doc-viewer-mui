import React, { FC, useContext } from "react";
import styled from "styled-components";
import { IStyledProps } from "../../..";
import { PDFContext } from "../state";
import { setZoomLevel } from "../state/actions";
import PDFPagination from "./PDFPagination";
import { IconButton } from "@mui/material";
import ZoomOutTwoToneIcon from "@mui/icons-material/ZoomOutTwoTone";
import ZoomInTwoToneIcon from "@mui/icons-material/ZoomInTwoTone";
import ZoomOutMapTwoToneIcon from "@mui/icons-material/ZoomOutMapTwoTone";

const PDFControls: FC<{}> = () => {
  const {
    state: { paginated, zoomLevel, numPages, zoomJump, defaultZoomLevel },
    dispatch,
  } = useContext(PDFContext);

  return (
    <Container id="pdf-controls">
      {paginated && numPages > 1 && <PDFPagination />}

      <IconButton
        aria-label="zoom out"
        color="primary"
        size="small"
        onClick={() => dispatch(setZoomLevel(zoomLevel - zoomJump))}
      >
        <ZoomOutTwoToneIcon />
      </IconButton>

      <IconButton
        aria-label="zoom in"
        color="primary"
        size="small"
        onClick={() => dispatch(setZoomLevel(zoomLevel + zoomJump))}
      >
        <ZoomInTwoToneIcon />
      </IconButton>

      <IconButton
        aria-label="zoom in"
        color="primary"
        size="small"
        disabled={zoomLevel === defaultZoomLevel}
        onClick={() => dispatch(setZoomLevel(defaultZoomLevel))}
      >
        <ZoomOutMapTwoToneIcon />
      </IconButton>
    </Container>
  );
};

export default PDFControls;

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  justify-content: flex-end;
  padding: 8px;
  background-color: ${(props: IStyledProps) => props.theme.tertiary};
  box-shadow: 0px 2px 3px #00000033;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;
