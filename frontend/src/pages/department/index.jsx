import {
  Breadcrumb,
  Button,
  Divider,
  Popconfirm,
  Row,
  Space,
  Table,
  Tooltip,
} from "antd";
import { departmentColumn } from "./column";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import departmentsSlice from "../../toolkits/department/slice";
import * as icons from "react-icons/ai";
import ModalItem from "./modal";
import UpdateButton from "../../components/button/update.button";
import DeleteButton from "../../components/button/delete.button";
import CreateButton from "../../components/button/create.button";
import { HANDLE_TYPE } from "../../commons/constant";

const Departments = () => {
  const dispatch = useDispatch();
  const { departments, department } = useSelector((state) => state.departments);
  const [rowKey, setRowKey] = useState([]);
  const columns = [
    ...departmentColumn,
    {
      title: "Công cụ",
      key: "tool",
      align: "center",
      width: 140,
      render: (text, record) => (
        <Space
          direction="horizontal"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <CreateButton
            onClick={() =>
              handleModal({
                ...department,
                parent: {
                  ...record,
                },
              })
            }
          />
          <UpdateButton onClick={() => handleModal(record)} />
          <DeleteButton
            onClick={() =>
              dispatch(
                departmentsSlice.actions.processingDepartment({
                  item: record,
                  actionName: HANDLE_TYPE.DELETE_ITEM,
                })
              )
            }
          />
        </Space>
      ),
    },
  ];

  //handle open modal
  const handleModal = (_item) => {
    dispatch(departmentsSlice.actions.toggleModal(_item));
  };

  //function for create tree
  const generateChildNodes = (arr, parentId, key) => {
    let outputs = [];
    let index = 1;

    for (let element of arr) {
      if (element.parent?._id === parentId) {
        let newKey = key === "" ? `${index}` : `${key}.${index}`;
        let children = generateChildNodes(arr, element._id, newKey);

        let node = {
          ...element,
          key: newKey,
        };

        if (children) {
          node.children = children;
        }

        outputs.push(node);
        index++;
      }
    }
    return outputs;
  };

  const generateTrees = (arr) => {
    let trees = [];
    let index = 1;
    for (let element of arr) {
      if (element.parent === null) {
        let node = {
          ...element,
          key: index,
          children: [],
        };
        trees.push(node);
        index++;
      }
    }
    trees.forEach((element, index) => {
      let child = generateChildNodes(arr, element._id, element.key);
      trees[index].children = [...child];
    });
    return trees;
  };

  let dataSource = [];
  dataSource = generateTrees(departments);

  //effect
  useEffect(() => {
    dispatch(departmentsSlice.actions.getDepartments());
  }, [dispatch]);
  return (
    <div>
      <Row>
        <Breadcrumb
          style={{ margin: "auto", marginLeft: 0 }}
          items={[
            {
              title: "Chung",
            },
            {
              title: (
                <span style={{ fontWeight: "bold" }}>Quản lý phòng ban</span>
              ),
            },
          ]}
        />
        <CreateButton
          onClick={() => handleModal(null)}
          style={{ marginLeft: "auto" }}
          size="large"
        />
        <ModalItem />
        <Divider style={{ margin: "10px" }}></Divider>
      </Row>
      <Row>
        <Table
          style={{ width: "100%" }}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </Row>
    </div>
  );
};

export default Departments;
