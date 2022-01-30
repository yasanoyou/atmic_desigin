import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Input } from "../atoms/button/input/input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  aligin-items: center;
`
const SButtonWrapper = styled.div`
  oadding-left: 8px;
`