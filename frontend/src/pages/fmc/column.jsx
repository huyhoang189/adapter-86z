import { Table } from "antd";
import { formatDateAndTime } from "../../utils";

export const fmcColumn = [
  {
    title: "STT",
    dataIndex: "key",
    key: "key",
    width: 10,
    align: "center",
  },
  {
    title: "Tên FMC",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "Tên đơn vị",
    dataIndex: "parentName",
    key: "parentName",
    align: "center",
    render: (text, record) => {
      return `${record?.department?.name} / ${
        record?.department?.shortName || "BQP"
      }`;
    },
  },
  {
    title: "Cập nhật mới nhất",
    dataIndex: "updatedAt",
    key: "updatedAt",
    align: "center",
    render: (text, record) => {
      return formatDateAndTime(record?.updatedAt);
    },
  },
];
