import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "../../assets/style/modal-style";
import InputWrapper from "../../components/form/inputWrapper";
import { Input, InputNumber, Select, DatePicker, notification } from "antd";
import { useEffect } from "react";
import variantSlice from "../../toolkits/variant/slice";
import TextArea from "antd/es/input/TextArea";
import { useParams } from "react-router-dom";

export default function ModalItem() {
  const dispatch = useDispatch();
  const params = useParams();
  const { modalActive, selectedVariant, variants } = useSelector(
    (state) => state.variants
  );

  //use for change input component
  const onChangeInputRecord = (key, event) => {
    let record = Object.assign({}, selectedVariant);
    if (key) {
      record[key] = event.target.value;
    }
    dispatch(variantSlice.actions.updateSelectedVariantInput(record));
  };

  //use for change selected component
  const onChangeSelectedRecord = (key, event) => {
    let record = Object.assign({}, selectedVariant);
    if (key) {
      record[key] = event;
    }
    dispatch(variantSlice.actions.updateSelectedVariantInput(record));
  };

  const onProcessingRecord = (actionName, _item) => {
    //validate data here
    let newItem = Object.assign({}, _item);
    const { id } = params;
    if (id) {
      newItem.malwareId = id;
    }

    //call processing data
    dispatch(
      variantSlice.actions.processingVariant({
        item: newItem,
        actionName: actionName,
      })
    );
  };

  const handleModal = (_item) => {
    dispatch(variantSlice.actions.toggleModal(_item));
  };

  // side effect (call any state that you need for modal)

  return (
    <ModalWrapper
      okText="Chấp nhận"
      cancelText="Từ chối"
      // width={500}
      onCancel={() => handleModal(null)}
      open={modalActive}
      maskClosable={false}
      title={selectedVariant?._id ? "Cập nhật biến thể" : "Thêm mới biến thể"}
      onOk={
        selectedVariant._id
          ? () => onProcessingRecord("UPDATE_ITEM", selectedVariant)
          : () => onProcessingRecord("ADD_ITEM", selectedVariant)
      }
    >
      <InputWrapper title="Tên biến thể">
        <Input
          placeholder="Nhập tên biến thể"
          value={selectedVariant?.name}
          onChange={(e) => onChangeInputRecord("name", e)}
        />
      </InputWrapper>

      <InputWrapper title="Mã hash">
        <TextArea
          placeholder="Nhập mã hash"
          value={selectedVariant?.hash}
          onChange={(e) => onChangeInputRecord("hash", e)}
        />
      </InputWrapper>
    </ModalWrapper>
  );
}
