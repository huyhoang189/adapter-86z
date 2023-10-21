import { Breadcrumb, Divider, Row, Space, Table } from "antd";
import { fmcColumn } from "./column";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fmcSlice from "../../toolkits/fmc/slice";
import ModalItem from "./modal";
import UpdateButton from "../../components/button/update.button";
import DeleteButton from "../../components/button/delete.button";
import CreateButton from "../../components/button/create.button";
import { HANDLE_TYPE } from "../../commons/constant";

const Fmcs = () => {
  const dispatch = useDispatch();
  const { fmcs, total, page, limit } = useSelector((state) => state.fmcs);
  const columns = [
    ...fmcColumn,
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
          <UpdateButton onClick={() => handleModal(record)} />
          <DeleteButton
            onClick={() =>
              dispatch(
                fmcSlice.actions.processingFmc({
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
    dispatch(fmcSlice.actions.toggleModal(_item));
  };
  const handlePaginationChange = (current, pageSize) => {
    dispatch(
      fmcSlice.actions.getFmcs({
        limit: pageSize,
        page: current,
      })
    );
  };

  let dataSource = [];
  fmcs.map((e, i) => {
    dataSource.push({
      ...e,
      key: i + 1,
    });
  });

  //effect
  useEffect(() => {
    dispatch(
      fmcSlice.actions.getFmcs({
        page,
        limit,
      })
    );
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
              title: <span style={{ fontWeight: "bold" }}>Quản lý FMC</span>,
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
          pagination={{
            current: page,
            pageSize: limit,
            total: total,
            onChange: handlePaginationChange,
          }}
        />
      </Row>
    </div>
  );
};

export default Fmcs;
