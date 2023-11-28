import React, { useState } from "react";
import ModalLayout from "../../components/ModalLayout";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./styles.css";
import upload from "../../assets/icons/upload.svg";
import succes from "../../assets/icons/succes.svg";
import { Grid, Menu, Table } from "@mui/material";
import filtericon from "../../assets/icons/filter_list.svg";
import searchicon from "../../assets/icons/search.svg";
import TablePagination from "../../components/TablePagination";
import DeleteModal from "../../components/DeleteModal";
import GreenCheckbox from "../../components/GreenCheckbox";
import placeholderuserimage from "../../assets/images/placeholder.svg";
import ThreeDotsDropdown from "../../components/ThreeDotsDropdown";
import cancellationimage from "../../assets/images/news (10) 1.svg";
import SuspendAgentModal from "../../components/SuspendAgentModal";
import TableLayout from "../../components/TableLayout";
import { useNavigate } from "react-router-dom";
import paperairplaneroundtheworld from "../../assets/images/submit image 1.svg";
import { TabContext } from "@mui/lab";
import { AntTab, AntTabs } from "../../components/CustomTab";

const ActiveTable = ({ type }) => {
  return (
    <td>
      <div
        className={
          type === "Active"
            ? "agent-listing-row-status-div"
            : "owner-listing-inactive"
        }
      >
        {type}
      </div>
    </td>
  );
};
export default function AddAdmin() {
  const [isEditAgentDetailsModalVisible, setIsEditAgentDetailsModalVisible] =
    useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [isAgentBookingsActive, setIsAgentBookingsActive] = useState(false);
  const [isAgentOverviewActive, setIsAgentOverviewActive] = useState(false);
  const [
    isCancellationReasonModalVisible,
    setIsCancellationReasonModalVisible,
  ] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [isSuspendAgentModalVisible, setIsSuspendAgentModalVisible] =
    useState(false);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const page = "owner-listing";
  const section = "owner-management";

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [tabValue, setTabValue] = useState("1");

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
        }}
      >
        <TabContext>
          <Box>
            <AntTabs
              value={tabValue}
              onChange={handleChangeTab}
              aria-label="ant example"
            >
              <AntTab value="1" label="Admin" />
              <AntTab value="2" label="Super Admin" />
            </AntTabs>
          </Box>
        </TabContext>

        <button
          onClick={() => setIsEditAgentDetailsModalVisible(true)}
          className="admin-btn-add-admin"
        >
          Add New
        </button>
      </div>
      <Grid container justifyContent="space-between" paddingTop={2}>
        <Grid item xs={12} md={6} lg={6}>
          <div className="listing-actions-div">
            <button onClick={handleOpenMenu} className="listing-filter-button">
              <img
                src={filtericon}
                alt="Filter Icon"
                className="listing-filter-icon"
              ></img>
              <span>Filter</span>
            </button>
            <div className="listing-search-div">
              <input
                placeholder="Search here"
                className="listing-search-input"
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <button className="listing-search-icon-button">
                <img
                  src={searchicon}
                  alt="Search Icon"
                  className="listing-search-icon"
                ></img>
              </button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} container justifyContent="flex-end">
          <div
            style={
              {
                // paddingTop: 26,
              }
            }
          >
            <div className="left-section">Total Admin: 100</div>
            <div className="left-section">Active: 100</div>
            <div className="left-section">In Active: 100</div>
          </div>
        </Grid>
      </Grid>

      <TableLayout
        headData={[
          "#",
          "Photo",
          "Name",
          "Email",
          "Role ",
          "Company ID",
          "Status",
          "Action ",
        ]}
        bodyData={[
          [
            1,
            <img
              src={placeholderuserimage}
              alt=""
              className="listing-table-placeholder-image"
            ></img>,

            <div className="table-green-text-status-div">John Peterson</div>,
            <div style={{ fontWeight: "400", fontFamily: "Barlow" }}>
              johnwick@gmail.com
            </div>,
            <div
              style={{
                color: "#00B074",
                fontWeight: "400",
                fontFamily: "Barlow",
              }}
            >
              Booking Manager
            </div>,
            <div style={{ fontWeight: "400", fontFamily: "Barlow" }}>
              CTA01234567
            </div>,
            <ActiveTable type={"Active"} />,

            <ThreeDotsDropdown
              page={"dashboard-add-admin"}
              section={section}
              setIsCancellationReasonModalVisible={
                setIsCancellationReasonModalVisible
              }
              navigate={() => navigate("/owner-profile")}
              setIsSelectAssignModalVisible={setIsSuspendAgentModalVisible}
              setIsDeleteModalVisible={setIsDeleteModalVisible}
              onOpenEdit={()=> setIsEditAgentDetailsModalVisible(true)}
            />,
          ],
        ]}
        dataObject={{ name: "John" }}
      />

      <ModalLayout
        size={"small"}
        state={showSuccess}
        stateFunction={setShowSuccess}
        content={
          <>
            <div className="action-modal-div">
              <img
                src={paperairplaneroundtheworld}
                alt=""
                className="paper-airplane-round-the-world"
              ></img>
              <p>Admin added successfully</p>
            </div>
          </>
        }
      />

      <ModalLayout
        size={"large"}
        state={isEditAgentDetailsModalVisible}
        stateFunction={setIsEditAgentDetailsModalVisible}
        content={
          <>
            <p className="edit-personal-details-paragraph">Add new admin</p>
            <div className="agent-edit-personal-details-form">
              <div className="agent-edit-input-grid-div-admin">
                <input
                  placeholder="First Name"
                  className="edit-agent-name-div-admin"
                />
                <input
                  placeholder="Last Name"
                  className="edit-agent-name-div-admin"
                />
              </div>
              <div className="agent-edit-input-grid-div-admin">
                <input
                  placeholder="Email"
                  className="edit-agent-name-div-admin"
                />
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <Select
                      className="admin-edit-password"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                      sx={{
                        "&:focus": {
                          outline: "none",
                        },
                        borderColor: "rgba(134, 134, 134, 0.5)",
                        borderWidth: "1px",
                      }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="agent-edit-input-grid-div-admin">
                <input
                  placeholder="Company ID"
                  className="edit-agent-name-div-admin"
                />
                <div className="admin-edit-password">
                  <input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className="admin-edit-password-input"
                  />
                  <div
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </div>
                </div>
              </div>
              <div className="agent-edit-input-grid-div-admin">
                <div className="admin-edit-password">
                  <div className="admin-edit-password-input">Profile Photo</div>
                  <div
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    className="admin-add-photo-btn"
                  >
                    <div className="admin-uploadBtn">
                      <img alt="" src={upload} />
                      <div>Upload</div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                style={{ height: 50 }}
                onClick={() => {
                  setIsEditAgentDetailsModalVisible(false);
                  setShowSuccess(true);
                }}
              >
                ADD
              </button>
            </div>
          </>
        }
      />
      <DeleteModal
        isDeleteModalVisible={isDeleteModalVisible}
        setIsDeleteModalVisible={setIsDeleteModalVisible}
        page={page}
      />

      <ModalLayout
        size={"medium"}
        state={isCancellationReasonModalVisible}
        stateFunction={setIsCancellationReasonModalVisible}
        content={
          <>
            <div className="action-modal-div">
              <img
                src={cancellationimage}
                alt=""
                className="cancellation-modal-image"
              ></img>
              <p>Suspension Reason</p>
              <input
                placeholder="This request is cancelled because the owner of the trash has not been present for
                        up to 10times for trash pickup."
                type="text"
                className="cancellation-modal-input"
              ></input>
            </div>
            <div className="cancellation-modal-button-div">
              <button className="cancellation-modal-submit-button">
                Submit
              </button>
              <button
                className="cancellation-modal-cancel-button"
                onClick={() => setIsCancellationReasonModalVisible(false)}
              >
                Cancel
              </button>
            </div>
          </>
        }
      />
      <SuspendAgentModal
        isSuspendAgentModalVisible={isSuspendAgentModalVisible}
        setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
        page={page}
      />

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <div>
          <MenuItem>Status</MenuItem>
          <MenuItem>Book Type</MenuItem>
        </div>
      </Menu>
    </>
  );
}
