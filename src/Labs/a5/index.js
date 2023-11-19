import Nav from "../../Nav";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import { COURSES_URL } from "../../constant";

function Assignment5() {
  console.log("COURSES_URL");
  console.log(COURSES_URL);
  return (
    <div>
      <Nav />
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a
            href="http://localhost:4000/a5/welcome"
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
