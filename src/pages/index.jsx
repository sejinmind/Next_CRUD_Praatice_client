import * as React from "react";
import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
export default class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        {Messages &&
          Messages?.map((Message, index) => (
            <MessageContainer key={`Message-${index}`}>
              <div className="profile">
                <UserOutlined />
                <span>{Message.name}</span>
              </div>
              <div className="msg">
                {Message.msg?.map((msg, idx) => (
                  <p key={idx}>
                    {"> "}
                    {msg}
                  </p>
                ))}
              </div>
            </MessageContainer>
          ))}
      </React.Fragment>
    );
  }
}

const MessageContainer = styled.div`
  padding: 0 10px;
  border-radius: 16px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
  .profile {
    padding: 10px;
    span {
      font-size: 16px;
      font-weight: 700;
    }
  }
  .msg {
    padding: 10px;
    p {
      padding-left: 20px;
      line-height: 0.8;
    }
  }
  margin-bottom: 20px;
`;

const Messages = [
  {
    name: "박주연 개발자",
    msg: [
      "간단한 게시판 CRUD (유저까지는 필요 없음)",
      "nextjs 사용할 것 > data fetching",
      "디비를 연결 한다면 검색창도 한번 구현해 볼 것 (graphql query 익숙해지기)",
      "작업 브랜치 : master, develop은 기본",
      "develop에서 작업 브랜치 여러개 따서 작업해 볼 것(ex. feat/input, style/input)",
      "퀘스트를 수락하시겠습니까?",
    ],
  },
  {
    name: "박준형 개발자",
    msg: ["(yes or no) : Y"],
  },
];
