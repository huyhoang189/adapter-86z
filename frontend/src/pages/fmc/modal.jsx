import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "../../assets/style/modal.style";
import InputWrapper from "../../components/form/inputWrapper.form";
import TextArea from "antd/es/input/TextArea";
import { Input, InputNumber, Select, DatePicker, TreeSelect } from "antd";
import fmcSlice from "../../toolkits/fmc/slice";
import departmentSlice from "../../toolkits/department/slice";
import { HANDLE_TYPE } from "../../commons/constant";
import { useEffect } from "react";
import { generateTrees } from "../../utils";

export default function ModalItem() {
  const dispatch = useDispatch();

  const { modalActive, selectedFmc, page, limit } = useSelector(
    (state) => state.fmcs
  );
  const { departmentsRaw } = useSelector((state) => state.departments);

  //use for change input component
  const onChangeInputRecord = (key, event) => {
    let record = Object.assign({}, selectedFmc);
    if (key) {
      record[key] = event.target.value;
    }
    dispatch(fmcSlice.actions.updateSelectedFmcInput(record));
  };

  //use for change selected component
  const onChangeSelectedRecord = (key, event) => {
    let record = Object.assign({}, selectedFmc);
    if (key) {
      let temp = departmentsRaw.find((e) => e._id === event);
      record[key] = temp;
    }
    dispatch(fmcSlice.actions.updateSelectedFmcInput(record));
  };

  const onProcessingRecord = (actionName, _item) => {
    //validate data here

    //call processing data
    dispatch(
      fmcSlice.actions.processingFmc({
        item: _item,
        actionName: actionName,
        page,
        limit,
      })
    );
  };

  const handleModal = (_item) => {
    dispatch(fmcSlice.actions.toggleModal(_item));
  };

  // side effect (call any state that you need for modal)
  useEffect(() => {
    if (modalActive === true) {
      dispatch(departmentSlice.actions.getRaw());
    }
  }, [modalActive]);

  let treeData = [];
  treeData = generateTrees(departmentsRaw);

  return (
    <ModalWrapper
      okText="Chấp nhận"
      cancelText="Từ chối"
      // width={500}
      onCancel={() => handleModal(null)}
      open={modalActive}
      maskClosable={false}
      title={selectedFmc?._id ? "Cập nhật máy chủ FMC" : "Thêm mới máy chủ FMC"}
      onOk={
        selectedFmc._id
          ? () => onProcessingRecord(HANDLE_TYPE.UPDATE_ITEM, selectedFmc)
          : () => onProcessingRecord(HANDLE_TYPE.ADD_ITEM, selectedFmc)
      }
    >
      <InputWrapper title="Tên máy chủ">
        <Input
          placeholder="Nhập tên định danh của máy chủ"
          value={selectedFmc?.name}
          onChange={(e) => onChangeInputRecord("name", e)}
        />
      </InputWrapper>

      <InputWrapper title="Đặt tại">
        <TreeSelect
          treeLine={true}
          style={{
            width: "100%",
            maxHeight: 800,
          }}
          treeData={treeData}
          value={selectedFmc?.department?._id}
          onChange={(e) => onChangeSelectedRecord("department", e)}
        />
      </InputWrapper>
    </ModalWrapper>
  );
}
