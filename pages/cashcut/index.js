import React from "react";
import { Table, Space, Tag, Button } from "antd";
import { getSession } from "next-auth/client";
import { HTTP } from "/config/http";
import { validationSessionUser } from "@teparuiz69/config/utils";
import { useRouter } from 'next/router';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const CashCut = (props) => {

  const router = useRouter();
  return (
    <div className="container-fluid">
      <h1> Corte de caja</h1>
      <Button onClick={() => router.push('/cashcut/new')}> Nuevo corte </Button>
      <Table dataSource={data} columns={columns} />;
    </div>
  );
};
export async function getServerSideProps(context) {
  const session = await getSession(context);
  let user;

  if (!session) {
    return {
      redirect: {
        destination: "/account/login",
        permanent: false,
      },
    };
  }

  try {
    user = await HTTP("GET", "/user", {}, session.accessToken);
    if (user) validationSessionUser(user);
  } catch (err) {
    validationSessionUser(user);
  }

  return {
    props: {
      session,
      accessToken: session?.accessToken,
      user: user?.data,
    },
  };
}
export default CashCut;
