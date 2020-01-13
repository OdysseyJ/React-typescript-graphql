import React from "react";
import ContentPaper from "../../common/ContentPaper";
import YscecBoardDetailTitle from "./YscecBoardDetailTitle";
import YscecBoardDetailContent from "./YscecBoardDetailContent";
import BackButton from "../../common/BackButton";

const YscecBoardDetail = () => {
  return (
    <ContentPaper>
      <BackButton></BackButton>
      <YscecBoardDetailTitle
        date={"12월 11일"}
        title={"최종출결 및 ACA자격증 제출자 명단(수정)"}
      ></YscecBoardDetailTitle>
      <YscecBoardDetailContent>{`1. <최종 출결>

최종 출결 명단은 사생활 보호를 위해 게시하지 않을 예정입니다.

본인의 YSCEC에서 확인하신 후, 변동사항이 있으신 분은 12월 11일 오후 11시 59분까지 메일 보내주시기 바랍니다.



2. <ACA 자격증 제출자 명단>

<ACA 자격증 제출자 명단>을 아래와 같이 첨부합니다. 변동사항이 있으신 분은 12월 11일 오후 11시 59분까지 메일 보내주시기 바랍니다.`}</YscecBoardDetailContent>
    </ContentPaper>
  );
};

export default YscecBoardDetail;
