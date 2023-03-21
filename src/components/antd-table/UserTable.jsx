import React, { useContext } from "react";
import { Table } from "antd";
import { TableContext } from "../../context/context/TableContext";

const UserTable = () => {
  const { dispatch } = useContext(TableContext);

  const handleRowClick = (record) => {
    dispatch({
      type: "SET_SELECTED_ROW",
      payload: record,
    });
  };

  const dataSource = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
      })}
    />
  );
};

export default UserTable;
