import styled from "styled-components";
export const LayoutWrapper = styled("div")`
  #components-layout-demo-custom-trigger .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }

  .ant-modal-header {
    border-bottom: 1px solid rgb(233, 233, 233);
  }

  .ant-typography {
    margin-top: 0;
    margin-bottom: 0;
  }

  .ant-menu-horizontal > .ant-menu-item {
    top: 0px;
    margin-top: -1px;
    margin-bottom: 0;
    height: 40px;
    align-items: center;
    display: flex;
    border-radius: 0;
  }

  .ant-layout-sider {
    max-width: 210px !important;
    flex: 0 0 210px !important;
    width: 210px !important;
  }

  .ant-layout-sider-collapsed {
    max-width: 0 !important;
    flex: 0 0 0 !important;
    width: 0 !important;
    min-width: 0 !important;
  }

  .red-button {
    background-color: #C82121;
    border-color: #C82121;
    color: #fff;
  }

  .red-button:hover {
    brightness(0.5);
    background-color: #9a1919;
    border-color: #9a1919;
  }

  .blue-button {
    background-color: #1890ff;
    border-color: #1890ff;
    color: #fff;
  }

  .green-button {
    background-color: #269626;
    border-color: #269626;
    color: #fff;
  }

  .green-button:hover {
    brightness(0.5);
    background-color: #26965E;
    border-color: #26965E;
  }


  .yellow-button {
    background-color: #FFBF00;
    border-color: #FFBF00;
    color: #fff;
  }

  .yellow-button:hover {
    brightness(0.5);
    background-color: #E49B0F;
    border-color: #E49B0F;
  }

  .violet-button {
    background-color: #722ed1;
    border-color: #722ed1;
    color: #fff;
  }

  .violet-button:hover {
    brightness(0.5);
    background-color: #722ed1;
    border-color: #722ed1;
  }

  .ant-typography {
    margin-top: 0;
    margin-bottom: 0;
    font-size : 12px;
  }

  .ant-table-cell {
    padding: 6px 16px !important;
  }

  .ant-menu .ant-menu-item-group-title {
    padding: 8px 16px;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.5714285714285714;
    transition: all 0.3s;
  }

  .ant-menu .ant-menu-title-content {
    font-size: 12px;
  }

  .ant-menu,
  .ant-menu-item {
    border-radius: 0px;
  }

  .ant-btn {
    font-size: 12px;
    height: 32px;
    border-radius: 0px;
  }

  .icon-btn {
    padding :7px
  }

  .ant-table {
    font-size: 12px;
  }
  .ant-tag {
    border-radius: 0px !important;
    height: 32px;
    padding: 4px 16px;
    // width: 90px;
    text-align: center;
  }

  .ant-input,
  .ant-picker, .ant-input-number, .ant-select, .ant-select-selector {
    border-radius: 0px;
  }

  .ant-popover .ant-popover-inner {
    padding: 0px;
  }


  .ant-card {
    border-radius: 0px;

  }

  .ant-card .ant-card-head {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 45px;
    margin-bottom: -1px;
    padding: 0 24px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 600;
    font-size: 12px;
    background: transparent;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 8px 8px 0 0;

  }

  .ant-list .ant-list-item .ant-list-item-meta .ant-list-item-meta-title >a {
    font-size: 12px; 
  }


  .ant-list .ant-list-item .ant-list-item-meta .ant-list-item-meta-description {
    font-size: 12px;
  }

  .ant-divider-inner-text {
    font-size: 12px;
    font-weight : bold;
    text-transform: uppercase;
    color : #1677ff
  }


  .ant-collapse {
    border-radius: 0px;
  }

  .ant-collapse-item {
    border-radius: 0px;
  }

  .ant-collapse-item:last-child {
    border-radius: 0px;
  }

  .ant-collapse-header-text {
    font-size: 12px;
    font-weight : bold;
    text-transform: uppercase;
    color : #1677ff
  }

  .ant-breadcrumb {
    font-size: 12px;
    font-weight : bold;
    text-transform: uppercase;
    color : #1677ff
  }
`;
