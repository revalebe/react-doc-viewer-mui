import React, { FC, useContext } from "react";
import styled from "styled-components";
import { Button } from "../../../components/common";
import { IStyledProps } from "../../..";
import { PDFContext } from "../state";
import { setCurrentPage } from "../state/actions";
import { useTranslation } from "../../../hooks/useTranslation";
import { IconButton } from "@mui/material";
import ArrowRightTwoToneIcon from "@mui/icons-material/ArrowRightTwoTone";
import ArrowLeftTwoToneIcon from "@mui/icons-material/ArrowLeftTwoTone";

const PDFPagination: FC<{}> = () => {
  const {
    state: { currentPage, numPages },
    dispatch,
  } = useContext(PDFContext);
  const { t } = useTranslation();

  return (
    <Container id="pdf-pagination">
      <IconButton
        color="primary"
        size="small"
        id="pdf-pagination-prev"
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
        disabled={currentPage === 1}
      >
        <ArrowLeftTwoToneIcon />
      </IconButton>

      <PageTag id="pdf-pagination-info">
        {t("pdfPluginPageNumber", {
          currentPage,
          allPagesCount: numPages,
        })}
      </PageTag>

      <IconButton
        id="pdf-pagination-next"
        color="primary"
        size="small"
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
        disabled={currentPage >= numPages}
      >
        <ArrowRightTwoToneIcon />
      </IconButton>
    </Container>
  );
};

export default PDFPagination;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const PageNavButtonLeft = styled(Button)`
  width: 30px;
  height: 30px;
  margin: 0 5px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
const PageNavButtonRight = styled(PageNavButtonLeft)`
  margin: 0 20px 0 5px;
`;

const PageTag = styled.div`
  color: ${(props: IStyledProps) => props.theme.textPrimary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
