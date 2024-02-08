import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CircularProgress from "@mui/material/CircularProgress";
import btn from "../app/assets/btn.png";
import usr from "../app/assets/usr.png";
import watch from "../app/assets/watch.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div>
          <img src={btn} alt="back-btn" />
        </div>
        <div>
          <img src={usr} alt="users" />
        </div>
      </div>
      <h1 className="my-4">Your Fitness Tracker</h1>
      <div className="d-flex justify-content-between">
        <span className="rounded-pill py-2 px-3 background-FF6020">
          Connected Device
        </span>

        <span className="background-F2F2F2 rounded-pill py-2 px-3">
          Statistics
        </span>
      </div>

      <div className="qw my-5 py-3 ">
        <div className="qr py-3">
          <div className="qt pt-3">
            <div className="d-flex justify-content-between">
              <div>
                <span className="color-FF8250">Smart Watch</span>
                <h1 className="color-FFFFFF">Fire Boltt</h1>
                <p className="color-gray">Scan the device QR to connect</p>
                <span className="color-FFFFFF scn ">Scan</span>
              </div>
              <div>
                <img src={watch} alt="watch" className="pos" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="background-2F2F2F px-5 py-3 mt-1">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="mt-2"
          >
            <CircularProgress size={100} sx={{ color: "#FF6020" }} />
            <Typography position="absolute" sx={{ color: "white" }}>
              {5233}
              <div className="color-FF8250">Steps</div>
            </Typography>
          </Box>
        </div>
        <div>
          <div className="background-FFF4EF text-center px-5">
            <span className="color-FF8250 ">Calories</span>
            <h4>1200 Kcal</h4>
          </div>
          <div className="background-FFF4EF text-center px-5 mt-3">
            <span className="color-FF8250">Water</span>
            <h4>1.8 Ltrs</h4>
          </div>
        </div>
      </div>

      <div className="background-FF6020 brd text-center my-5">
        <div className="color-FFFFFF my-2">Add Details</div>
        <input type="text" placeholder="Name" className="frm" />
        <br />
        <div className="my-3">
          <input type="number" placeholder="Age" className="frmc" />
          <input type="number" placeholder="Height" className="frmc mx-2" />
        </div>
        <select id="project" className="ps-1 frm">
          {["Are you gym member?", "yes", "No"].map((gender, ind) => (
            <option
              key={ind}
              value={ind === 0 ? "" : gender}
              disabled={ind === 0 && true}
              selected={ind === 0 && true}
              hidden={ind === 0 && true}
            >
              {gender}
            </option>
          ))}
        </select>
        <br />
        <select id="project" className="ps-1 frm my-3">
          {["Do you eat meat?", "yes", "No"].map((gender, ind) => (
            <option
              key={ind}
              value={ind === 0 ? "" : gender}
              disabled={ind === 0 && true}
              selected={ind === 0 && true}
              hidden={ind === 0 && true}
            >
              {gender}
            </option>
          ))}
        </select>
        <br />
        <select id="project" className="ps-1 frm">
          {["Are you a cyclist?", "yes", "No"].map((gender, ind) => (
            <option
              key={ind}
              value={ind === 0 ? "" : gender}
              disabled={ind === 0 && true}
              selected={ind === 0 && true}
              hidden={ind === 0 && true}
            >
              {gender}
            </option>
          ))}
        </select>
        <br />
        <input
          type="submit"
          value="Save Details"
          className="frm background-2F2F2F color-FFFFFF my-3"
        />
      </div>
    </div>
  );
}

export default App;
