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
import { categoryColumn } from "./column";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import categorySlice from "../../toolkits/category/slice";
import * as icons from "react-icons/ai";
import ModalItem from "./modal";

const Categorys = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const columns = [
    ...categoryColumn,
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
                categorySlice.actions.processingCategory({
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
  categories.map((e, i) => {
    dataSource.push({
      ...e,
      key: i + 1,
    });
  });
  //handle open modal
  const handleModal = (_item) => {
    dispatch(categorySlice.actions.toggleModal(_item));
  };
  useEffect(() => {
    dispatch(categorySlice.actions.getCategories());
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
                <span style={{ fontWeight: "bold" }}>Quản lý danh mục</span>
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

export default Categorys;
