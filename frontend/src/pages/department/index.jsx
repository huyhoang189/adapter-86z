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
import { departmentColumn, departmentDatasource } from "./column";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import departmentsSlice from "../../toolkits/department/slice";
import * as icons from "react-icons/ai";
import ModalItem from "./modal";

const Departments = () => {
  const dispatch = useDispatch();
  const { departments } = useSelector((state) => state.departments);

  const columns = [
    ...departmentColumn,
    {
      title: "Công cụ",
      key: "tool",
      align: "center",
      width: 140,
      render: (text, row, index) => (
        <Space
          direction="horizontal"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <Tooltip title="Cập nhật dữ liệu">
            <Button
              className="yellow-button"
              icon={<icons.AiFillEdit />}
              type="none"
              onClick={() => handleModal(row)}
            />
          </Tooltip>

          <Popconfirm
            title="Bạn có muốn xoá bản ghi không ?"
            onConfirm={() =>
              dispatch(
                departmentsSlice.actions.processingDepartment({
                  item: row,
                  actionName: "DELETE_ITEM",
                })
              )
            }
            okText="Đồng ý"
            cancelText="Không đồng ý"
            placement="leftTop"
          >
            <Tooltip title="Xoá dữ liệu">
              <Button shape="retangle" danger icon={<icons.AiFillDelete />} />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  let dataSource = [];
  departments.map((e, i) => {
    dataSource.push({
      ...e,
      ParentName: e.Parent ? e.Parent.Name : "",
      key: i + 1,
    });
  });
  //handle open modal
  const handleModal = (_item) => {
    dispatch(departmentsSlice.actions.toggleModal(_item));
  };
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
        <Button
          type="primary"
          style={{ marginLeft: "auto", width: 100 }}
          className="blue-button"
          onClick={() => handleModal(null)}
        >
          Thêm mới
        </Button>
        <ModalItem />
        <Divider style={{ margin: "10px" }}></Divider>
      </Row>
      <Row>
        <Table
          style={{ width: "100%" }}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </Row>
    </div>
  );
};

export default Departments;
