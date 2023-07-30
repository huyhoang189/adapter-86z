import { Breadcrumb, Button, Divider, Row } from "antd";

export default function ReportToday() {
  const handleModal = (_item) => {
    // dispatch(departmentsSlice.actions.toggleModal(_item));
  };

  return (
    <div>
      <Row>
        <Breadcrumb
          style={{ margin: "auto", marginLeft: 0 }}
          items={[
            {
              title: "Quản lý giám sát",
            },
            {
              title: (
                <span style={{ fontWeight: "bold" }}>Tổng hợp trong ngày</span>
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
        {/* <ModalItem /> */}
        <Divider style={{ margin: "10px" }}></Divider>
      </Row>
    </div>
  );
}
