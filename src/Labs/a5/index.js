import Nav from "../../Nav";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import { API_BASE, COURSES_URL } from "../../constant";

function Assignment5() {
  return (
    <div>
      <Nav />
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a
            // href="http://localhost:4000/a5/welcome"
            href={`${API_BASE}/a5/welcome`}
            className="list-group-item"
          >
            Welcome
          </a>
        </div>
        {/* <SimpleAPIExamples /> */}
        <EncodingParametersInURLs />
        <WorkingWithObjects />
        <WorkingWithArrays />
      </div>
    </div>
  );
}
export default Assignment5;
