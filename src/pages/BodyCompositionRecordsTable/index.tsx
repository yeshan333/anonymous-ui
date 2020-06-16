/*
  * 学生设备测得的人体信息表
*/

import React from "react";
import { connect } from 'umi';
import styles from "./index.less";
import { Table, Button } from "antd";

// TODO：列表项类型，没定义完
interface Item {
  key: number,
  name: string,
}

const BodyCompositionRecordsTable = ({ dispatch, bodycompositionrecords }: any) => {

  const columns = [
    {
      title: "ID",
      width: 100,
      dataIndex: "ID",
      key: "ID",
      fixed: "left"
    },
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left"
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "left"
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "1",
      width: 150
    },
    {
      title: "Test Date",
      dataIndex: "testdate",
      key: "2",
      width: 200
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "3",
      width: 90
    },
    {
      title: "Lower Limit(Weight Normal Range)",
      dataIndex: "Lower_Limit",
      key: "4",
      width: 150
    },
    {
      title: "Column 5",
      dataIndex: "address",
      key: "5",
      width: 150
    },
    {
      title: "Column 6",
      dataIndex: "address",
      key: "6",
      width: 150
    },
    {
      title: "Column 7",
      dataIndex: "address",
      key: "7",
      width: 150
    },
    { title: "Column 8", dataIndex: "address", key: "8" },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (_: any, record: Item) => <Button danger onClick={() => dispatch({ type: 'bodycompositionrecords/delete', record_key: record.key })}>delete {record.key}</Button>
    }
  ];

  return (
    <div className={styles.container}>
      <div id="components-table-demo-fixed-columns-header">
        <Table columns={columns} dataSource={bodycompositionrecords} scroll={{ x: 1500, y: 300 }} />
      </div>
    </div>
  );
}

/*
  * bodycompositionrecords: 人体成分记录
*/

export default connect(({ bodycompositionrecords }: { bodycompositionrecords: any }) => ({
  bodycompositionrecords,
}))(BodyCompositionRecordsTable);
