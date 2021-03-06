import React from 'react';
import { connect } from 'umi';
import { PageLoading } from '@ant-design/pro-layout';
import { Table, Input, Button, Space, Modal, Tag, Tooltip, Popconfirm } from 'antd';
import { AreaChartOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import AddNewUser from './components/AddNewUser';
import SomeoneRecordsTable from './components/GetSomeoneRecords';

interface Item {
  key: string;
  id: string,
  user_name: string;
  ID: number, // 身份证号
  password: string;
}

const data = [
  {
    ID: '1',
    user_name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    role: 'admin',
  },
  {
    ID: '2',
    user_name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    role: 'admin',
  },
  {
    ID: '3',
    user_name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    role: 'admin',
  },
  {
    ID: '4',
    user_name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    role: 'user',
  },
];

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      visiable: false,  // 查看用户数据模态框控制
      searchText: '',
      searchedColumn: '',
    };

    this.getColumnSearchProps = this.getColumnSearchProps.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
          text
        ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  // 删除用户
  clickDelete = (record: any) => {
    this.props.dispatch({ // TODO: 错误提示？？？
      type: 'user/deleteUser',
      payload: record
    })
  }

  render() {

    const columns = [
      {
        title: 'ID（身份证号）',
        dataIndex: 'ID',
        key: 'ID',
        ...this.getColumnSearchProps('ID'),
        align: "center"
      },
      {
        title: 'Username（用户名）',
        dataIndex: 'user_name',
        key: 'user_name',
        ...this.getColumnSearchProps('user_name'),
        align: "center"
      },
      {
        title: 'Authority（权限）',
        dataIndex: 'role',
        key: 'role',
        ...this.getColumnSearchProps('role'),
        align: "center",
        render: (text: any) => <Tag color="success">{text}</Tag>
      },
      {
        title: 'operation（操作）',
        dataIndex: 'address',
        key: 'address',
        align: "center",
        render: (_: any, record: Item) => {
          return (
            <>
              <Tooltip placement="top" title={"查看用户所测数据"}>
                <Button
                  onClick={() => {
                    this.props.dispatch({
                      type: 'people/update',
                      username: record.user_name,
                    });
                    this.setState({ visiable: true });
                  }}
                  icon={<AreaChartOutlined />}
                >
                  data
                </Button>
              </Tooltip>
              <Modal
                title="某用户测试数据"
                visible={this.state.visiable}
                onOk={() => this.setState({ visiable: false })}
                onCancel={() => this.setState({ visiable: false })}
                width='1000px'
              >
                <SomeoneRecordsTable />
              </Modal>
              <Tooltip placement="top" title={"删除用户"}>
                <Popconfirm placement="top" title={"确定删除用户？"} onConfirm={() => this.clickDelete(record)} okText="Yes" cancelText="No">
                  <Button
                    style={{ marginLeft: 5 }}
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                    // onClick={() => this.clickDelete(record)}
                  />
                </Popconfirm>
              </Tooltip>
              {/*
              <Tooltip placement="top" title={"导出用户数据"}>
                <Button
                  icon={<DownloadOutlined />}
                  style={{ marginLeft: 5 }}
                  onClick={() => alert("未完工")}
                >
                </Button>
              </Tooltip>
              */}
            </>
          );
        }
      },
    ];
    return this.props.loading ? (<PageLoading />) : (
      <>
        <AddNewUser />
        <Table columns={columns} dataSource={this.props.userlist} bordered rowKey="id" />
      </>
    );
  }
}

export default connect(({ user, loading }: { user: any, loading: any }) => ({
  userlist: user.userlist,
  loading: loading.models.user,
}))(App);
