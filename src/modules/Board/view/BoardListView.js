import * as React from "react";
import { Table, Space, Tag } from "antd";
import Link from "next/link";
export class BoardListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = [
      {
        title: "작성자",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "제목",
        dataIndex: "title",
        key: "title",
        render: (text) => (
          <Link href={`/board/show/[${1}]`} passHref>
            {text}
          </Link>
        ),
      },
      {
        title: "작성일",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Link href="/">수정</Link>
            <Link href="/">삭제</Link>
          </Space>
        ),
      },
    ];
    const { data } = this.props;
    return (
      <React.Fragment>
        <Table columns={columns} dataSource={data} />
      </React.Fragment>
    );
  }
}
