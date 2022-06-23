import "./style/styles.css";
import { Fa500Px } from "react-icons/fa";

const App = () => {
  return (
    <>
      <div className="topbar">Image</div>
      <div className="contents">
        <div className="menucolumn">
          <ul>
            <li>
              <Fa500Px className="icon" />
              <label>RoadMap</label>
            </li>
            <li>
              <Fa500Px className="icon" />
              <label>RoadMap</label>
            </li>
            <li>
              <Fa500Px className="icon" />
              <label>RoadMap</label>
            </li>
            <li>
              <Fa500Px className="icon" />
              <label>RoadMap</label>
            </li>
            <li>
              <Fa500Px className="icon" />
              <label>RoadMap</label>
            </li>
          </ul>
        </div>
        <div className="board">
          <div className="board_row1">
            <label>Projects / Test</label>
          </div>
          <div className="board_row2">
            <h2>TEST SPRINT</h2>
          </div>
          <div className="board_row3">
            <div className="todo boardbar">
              <label className="title">TODO</label>
              <div className="singletask">
                <label>Twar ia</label>
                <label>TEST EPIC</label>
                <div><Fa500Px /><label>TEST-3</label></div>
              </div>
            </div>
            <div className="inprogress boardbar">
              <label className="title">INPROGRESS</label>
              <div className="singletask">
                <label>Twar ia</label>
                <label>TEST EPIC</label>
                <div><Fa500Px /><label>TEST-3</label></div>
              </div>
            </div>
            <div className="onreview boardbar">
              <label className="title">TODO</label>
            </div>
            <div className="completed boardbar">
              <label className="title">TODO</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
