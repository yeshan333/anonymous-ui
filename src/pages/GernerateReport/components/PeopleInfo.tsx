/*
  * 测试人员信息表
*/

import React from 'react';
import { connect, Dispatch } from 'umi';
import { Table, Alert } from 'antd';
/*
const dataSource = [
    {
        key: 1,  // 必须的
        ID: '1',
        Name: '汕头',
        Age: 32,
        Height: 500,
        Gender: 'male',
        DateTime: '2020-02-02 08:08:08',
    },
]; */

const columns = [
    {
        title: 'ID',
        dataIndex: 'ID',
        key: 'ID',
        align: 'center' as 'center',
    },
    {
        title: '姓名',
        dataIndex: 'Name',
        key: 'Name',
        align: 'center' as 'center',
    },
    {
        title: '年龄',
        dataIndex: 'Age',
        key: 'Age',
        align: 'center' as 'center',
    },
    {
        title: '性别',
        dataIndex: 'Gender',
        key: 'Gender',
        align: 'center' as 'center',
    },
    {
        title: '身高(cm)',
        dataIndex: 'Height',
        key: 'Height',
        align: 'center' as 'center',
        render: (text: any) => <p>{text} cm</p>
    },
    {
        title: '测试日期',
        dataIndex: 'DateTime',
        key: 'DateTime',
        align: 'center' as 'center',
    },
];

const PeopleInfo = ({ dispatch, singlerecords }: {dispatch: Dispatch, singlerecords: SingleRecords}) => {
    const {
        IDCard,
        Age,
        Gender,
        Height,
        DateTime
    } = singlerecords;

    const data = [
        {
            ID: IDCard,
            Age: Age,
            Gender: Gender,
            Height: Height,
            DateTime: DateTime
        }
    ]

    return (
        <>
            {Array.isArray(singlerecords) ?
                <><Alert
                    message="不可明说的错误"
                    description="我透，后端仔没给我数据或者他崩了，请看控制抬他给我的数据是啥"
                    type="error"
                    closable></Alert>
                    <Table dataSource={data} columns={columns} pagination={false} rowKey="ID" bordered />
                </> :
                <Table dataSource={data} columns={columns} pagination={false} rowKey="ID" bordered />
            }
        </>
    );
}

export default connect(({ singlerecords }: { singlerecords: SingleRecords }) => ({
    singlerecords,
}))(PeopleInfo);