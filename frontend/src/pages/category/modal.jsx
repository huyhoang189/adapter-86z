import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "../../assets/style/modal.style";
import InputWrapper from "../../components/form/inputWrapper.form";
import { Input, InputNumber, Select, DatePicker } from "antd";
import { useEffect } from "react";
import categorySlice from "../../toolkits/category/slice";

export default function ModalItem() {
  const dispatch = useDispatch();

  const { modalActive, selectedCategory, categories } = useSelector(
    (state) => state.categories
  );

  //use for change input component
  const onChangeInputRecord = (key, event) => {
    let record = Object.assign({}, selectedCategory);
    if (key) {
      record[key] = event.target.value;
    }
    dispatch(categorySlice.actions.updateSelectedCategoryInput(record));
  };

  //use for change selected component
  const onChangeSelectedRecord = (key, event) => {
    let record = Object.assign({}, selectedCategory);
    if (key) {
      record[key] = event;
    }
    dispatch(categorySlice.actions.updateSelectedCategoryInput(record));
  };

  const onProcessingRecord = (actionName, _item) => {
    //validate data here

    //call processing data
    dispatch(
      categorySlice.actions.processingCategory({
        item: _item,
        actionName: actionName,
      })
    );
  };

  const handleModal = (_item) => {
    dispatch(categorySlice.actions.toggleModal(_item));
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
      title={
        selectedCategory?._id ? "Cập nhật phòng ban" : "Thêm mới phòng ban"
      }
      onOk={
        selectedCategory._id
          ? () => onProcessingRecord("UPDATE_ITEM", selectedCategory)
          : () => onProcessingRecord("ADD_ITEM", selectedCategory)
      }
    >
      <InputWrapper title="Tên danh mục">
        <Input
          placeholder="Nhập tên danh mục"
          value={selectedCategory?.name}
          onChange={(e) => onChangeInputRecord("name", e)}
        />
      </InputWrapper>

      <InputWrapper title="Ghi chú">
        <Input
          placeholder="description"
          value={selectedCategory?.description}
          onChange={(e) => onChangeInputRecord("description", e)}
        />
      </InputWrapper>
    </ModalWrapper>
  );
}
