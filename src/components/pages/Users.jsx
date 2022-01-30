import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput";
import {UserCard} from "../../components/organisms/user/UserCard";
import { useLocation } from "react-router-dom";

const users = [...Array(10).keys()].map(((val)=>{
  return {
    id: val,
    name: `YUKI${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "@com",
    phone: "000-0000-0000",
    company: {
      name: "株式会社",
    },
    website: "https://www.google.com/"
  }
}))

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  console.log(state);
  return(
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin}/>
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;