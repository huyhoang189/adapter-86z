const { query } = require("express");
const departmentModel = require("../models/department.model");

class DepartmentService {
  // Get all departments that are active and match the keyword (case-insensitive search).
  // Paginate the results based on the given offset and limit.
  getAll = async (keyword = "", offset, limit) => {
    // Create a query object to find active departments with a case-insensitive search for name or shortName.
    const query = {
      status: "active",
      $or: [
        { name: { $regex: keyword, $options: "i" } }, // Case-insensitive regex search for name
        { shortName: { $regex: keyword, $options: "i" } }, // Case-insensitive regex search for shortName
      ],
    };

    // Find departments based on the query, limit, and offset.
    const departments = await departmentModel
      .find(query)
      .limit(limit)
      .skip(offset);

    // Get the total count of active departments that match the query (without pagination).
    const total = await departmentModel.countDocuments(query);

    return { departments: await addParentName(departments), total };
  };

  // Get all departments (without any filtering or pagination).
  getAllRaw = async () => {
    // Find all departments without any query or filters.
    const departments = await departmentModel.find({});

    // Get the total count of all departments.
    const total = await departmentModel.countDocuments({});

    return { departments, total };
  };

  // Get a department by its unique _id (MongoDB ID) and ensure it is active.
  getById = async (_id) => {
    return await departmentModel.findOne({ _id: _id, status: "active" });
  };

  // Check if a department with the given name or shortName already exists.
  // Used for validating before creating a new department.
  validateName = async (name, shortName) => {
    return await departmentModel.find({
      $or: [
        { name: name }, // Case exact search for name
        { shortName: shortName }, // Case exact search for shortName
      ],
    });
  };

  // Create a new department with the provided information.
  create = async (name, shortName, code, parentId, level) => {
    return await departmentModel.create({
      name,
      shortName,
      code,
      parentId: parentId ? parentId : null,
      level: level ? level : 1,
      status: "active",
    });
  };

  // Update a department by its _id with the provided data.
  updateItem = async (id, department) => {
    return await departmentModel.findByIdAndUpdate(id, department, {
      new: true,
    });
  };

  // Soft delete a department by its _id (set status to "inactive").
  deleteItem = async (id) => {
    return await departmentModel.findByIdAndUpdate(
      id,
      {
        status: "inactive",
      },
      { new: true }
    );
  };
}

module.exports = DepartmentService;

const addParentName = async (departments) => {
  const data = await Promise.all(
    departments.map(async (e, i) => {
      const temp = await departmentModel.findById(e.parentId);
      return {
        ...e._doc,
        parentName: temp?.name || "",
      };
    })
  );

  return data;
};
