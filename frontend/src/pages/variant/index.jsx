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
import { variantColumn } from "./column";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import variantSlice from "../../toolkits/variant/slice";
import * as icons from "react-icons/ai";
import ModalItem from "./modal";
import { useParams } from "react-router-dom";

const Variants = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { variants } = useSelector((state) => state.variants);
  const columns = [
    ...variantColumn,
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
                variantSlice.actions.processingVariant({
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
  variants.map((e, i) => {
    dataSource.push({
      ...e,
      key: i + 1,
    });
  });
  //handle open modal
  const handleModal = (_item) => {
    dispatch(variantSlice.actions.toggleModal(_item));
  };
  useEffect(() => {
    const { id } = params;
    id && dispatch(variantSlice.actions.getVariants({ id: id }));
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
              title: "Mã độc",
            },
            {
              title: <span style={{ fontWeight: "bold" }}>Biến thể</span>,
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

export default Variants;
