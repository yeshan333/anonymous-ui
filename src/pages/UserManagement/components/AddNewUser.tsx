import React from 'react';
import { Form, Input, Button, Checkbox, Modal, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { connect } from 'umi';

const { Option } = Select;

const layout = {
    labelCol: { span: 4, justify: "end" },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
};


const NewUser = (props) => {

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const onRoleChange = value => {
        props.setRole(value);
        console.log("当前选择：", value);
    }

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="ID"
                name="id"
                rules={[{ required: true, message: 'Please input your ID!' }]}
            >
                <Input value={props.id} onChange={(e) => props.setID(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Username"
                name="user_name"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input value={props.user_name} onChange={(e) => props.setUsername(e.target.value)}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="pass_word"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password value={props.pass_word} onChange={(e) => props.setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item name="role" label="Role" rules={[{ required: true }]}>
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={onRoleChange}
                    allowClear
                >
                    <Option value="Role_ADMIN">Role_ADMIN</Option>
                    <Option value="Role_USER">Role_USER</Option>
                </Select>
            </Form.Item>
            {/*
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={props.handleSubmit} >
                    Submit
                </Button>
            </Form.Item>
            */}
        </Form>
    );
}


const AddNewUser = ({ userlist, dispatch }: any) => {
    const [id, setID] = React.useState('');
    const [user_name, setUsername] = React.useState('');
    const [pass_word, setPassword] = React.useState('');
    const [role, setRole] = React.useState('');
    const [visiable, setVisiable] = React.useState(false);


    const handleSubmit = () => {
        dispatch({
            type: 'user/addUser',
            payload: {
                // 'ID': id,
                'id': id,
                'user_name': user_name,
                'pass_word': pass_word,
                'Role': role,
                "student_code": id,
                "student_name": user_name,
            }
        })
    }

    return (
        <React.Fragment>
            <Button
                style={{ marginBottom: 11 }}
                type="primary" shape="round" icon={<PlusOutlined />}
                onClick={() => setVisiable(true)}
            >
                增加新用户
            </Button>
            <Modal
                title="新增用户"
                visible={visiable}
                onOk={() => {
                    handleSubmit();
                    setVisiable(false);
                }}
                onCancel={() => setVisiable(false)}
                width='1000px'
            >
                <NewUser
                  id={id}
                  setID={setID}
                  user_name={user_name}
                  setUsername={setUsername}
                  pass_word={pass_word}
                  setPassword={setPassword}
                  role={role}
                  setRole={setRole}
                  handleSubmit={handleSubmit}
                />
            </Modal>
        </React.Fragment>
    );
}

export default connect(({ user }: { user: any }) => ({
    userlist: user.userlist,
}))(AddNewUser);