import styled from "styled-components";
import { Card } from "../../atoms/button/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return(
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <dl>
        <dd>メール</dd>
        <dd>{user.email}</dd>
        <dd>TEL</dd>
        <dd>{user.phone}</dd>
        <dd>会社名</dd>
        <dd>{user.company.name}</dd>
        <dd>WEB</dd>
        <dd>{user.website}</dd>
      </dl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  text-aligin: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`
