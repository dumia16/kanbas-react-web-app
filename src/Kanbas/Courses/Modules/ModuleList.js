import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const { courseId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId, dispatch]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };

  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //     ...modules,
  //   ]);
  // };

  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter((module) => module._id !== moduleId));
  // };

  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // };

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "50%" }}>
            <input
              style={{ width: "50%" }}
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <br />
            <br />
            <textarea
              style={{ width: "50%" }}
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </div>

          <button className="btn btn-primary" onClick={handleUpdateModule}>
            Update
          </button>
          <button className="btn btn-success" onClick={handleAddModule}>
            Add
          </button>
        </div>
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h3>{module.name}</h3>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteModule(module._id)}
              >
                Delete
              </button>

              <button
                className="btn btn-success"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
            </div>

            <p>{module.description}</p>
            {module.lessons && (
              <ul className="list-group">
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="list-group-item">
                    <h4>{lesson.name}</h4>
                    <p>{lesson.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
