import { Modal } from "antd";
import styled from "styled-components";
const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    -webkit-box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
    pointer-events: auto;
    padding-bottom: 5px;
    border-radius: 0;
  }

  .ant-modal-header {
    border-bottom: 1px solid rgb(233, 233, 233);
  }

  .ant-modal-body {
    padding: 0px 0px 10px 0px;
    font-size: 13px;
    color: rgb(121, 121, 121);
    line-height: 1.5;
  }

  .ant-modal-footer {
    border-top: 1px solid rgb(233, 233, 233);
    padding: 10px 0px 10px 10px;
    text-align: right;
  }

  .ant-typography {
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .ant-image {
    margin: auto;
  }

  .ant-upload-wrapper {
    margin: auto;
  }

  .ant-btn {
    font-size: 12px;
    height: 32px;
    border-radius: 0px;
  }

  .ant-input,
  .ant-picker,
  .ant-input-number,
  .ant-select,
  .ant-select-selector,
  .ant-select-dropdown {
    border-radius: 0px;
  }
`;
export default ModalWrapper;
