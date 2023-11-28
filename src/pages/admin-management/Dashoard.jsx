import { Box, FormControl, Grid, Select, Stack } from "@mui/material";
import React, { useState } from "react";
import ButtonDropdown from "../../components/ButtonDropdown";
import BlueButtonGainLossCard from "../../components/BlueButtonGainLossCard";
import HomeCharts from "../../components/HomeCharts";
import placeholderuserimage from "../../assets/images/placeholder.svg";
import vipTrophy from "../../assets/icons/vipTrophy.svg";
import TrashDetailsModal from "../../components/TrashDetailsModal";
import "./styles.css";
import searchicon from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";
import filtericon from "../../assets/icons/filter_list.svg";
import TableLayout from "../../components/TableLayout";
import ThreeDotsDropdown from "../../components/ThreeDotsDropdown";
import Gift from "../../assets/icons/celebrate.svg";
import deleteicon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import threedot from "../../assets/icons/more_horiz.svg";
import { AntTab, AntTabs } from "../../components/CustomTab";
import { TabContext } from "@mui/lab";
import ModalLayout from "../../components/ModalLayout";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function AdminManagemtDashoard() {
  const [isTrashAgentModalVisible, setIsTrashAgentModalVisible] =
    useState(false);
    const [isEditAgentDetailsModalVisible, setIsEditAgentDetailsModalVisible] =
    useState(false);
  const [tabValue, setTabValue] = useState("1");

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
      <Stack direction="horizontal" style={{ justifyContent: "space-between" }}>
        <div className="heading-text"></div>
        <ButtonDropdown page={"admin-management"} />
      </Stack>
      <div className="agent-bookings-stats-content-div">
        <Grid container spacing={1.5}>
          <Grid item xs={6} md={4} lg={3}>
            <BlueButtonGainLossCard
              name={"Total Request"}
              status={"gain"}
              percent={10}
              number={60}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <BlueButtonGainLossCard
              name={"Canceled Request"}
              status={"lose"}
              percent={10}
              number={60}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <BlueButtonGainLossCard
              name={"Canceled Request"}
              status={"gain"}
              percent={10}
              number={60}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <BlueButtonGainLossCard
              name={"Average Wait Time"}
              status={"gain"}
              percent={10}
              number={60}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1.5} paddingBottom={2}>
          <Grid item xs={12} lg={6} md={6} className="admin-dasboard-chart">
            <HomeCharts type={"lineChart"} />
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <div className="white-box">
              <div
                style={{
                  padding: 20,
                  gap: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: 20,
                    lineHeight: 1,
                    fontStyle: "Barlow",
                  }}
                >
                  Top 5 performance admin
                </span>
                <img alt="" src={Gift} />
              </div>

              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                sx={{ paddingLeft: 3, paddingRight: 3, alignItems: "center" }}
              >
                <Stack direction={"row"} alignItems={"center"} gap={3}>
                  <img
                    src={vipTrophy}
                    alt=""
                    style={{ display: "-ms-grid", height: 24, width: 24 }}
                  />
                  <img
                    src={placeholderuserimage}
                    alt=""
                    style={{ height: 45, width: 35 }}
                  ></img>
                  <div>
                    <div className="subs-text">John Peterson</div>
                    <div className="image-name-date-id-para">1st</div>
                  </div>
                </Stack>
                <div
                  style={{ color: "#0D77B9", fontWeight: "400", fontSize: 18 }}
                >
                  100 hours
                </div>
                <button
                  className="admin-view-button"
                  onClick={() => setIsTrashAgentModalVisible(true)}
                >
                  View
                </button>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                sx={{
                  paddingLeft: 3,
                  paddingRight: 3,
                  alignItems: "center",
                  paddingTop: 3,
                }}
              >
                <Stack direction={"row"} alignItems={"center"} gap={3}>
                  <img
                    src={vipTrophy}
                    alt=""
                    style={{ display: "-ms-grid", height: 24, width: 24 }}
                  />
                  <img
                    src={placeholderuserimage}
                    alt=""
                    style={{ height: 45, width: 35 }}
                  ></img>
                  <div>
                    <div className="subs-text">John Peterson</div>
                    <div className="image-name-date-id-para">1st</div>
                  </div>
                </Stack>
                <div
                  style={{ color: "#0D77B9", fontWeight: "400", fontSize: 18 }}
                >
                  100 hours
                </div>
                <button
                  className="admin-view-button"
                  onClick={() => setIsTrashAgentModalVisible(true)}
                >
                  View
                </button>
              </Stack>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={1.5}>
          <Grid item xs={12} md={6} lg={6} paddingTop={1}>
            <div style={{ fontWeight: 500, fontSize: 20, marginBottom: 10 }}>Admin Listing</div>
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
            <Grid container justifyContent="space-between" paddingTop={2}>
              <Grid item xs={12} md={6} lg={6}>
                <div className="listing-actions-div-for-admin">
                  <button className="listing-filter-button">
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
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                container
                justifyContent="flex-end"
              >
                <div
                  style={
                    {
                      // paddingTop: 26,
                    }
                  }
                >
                  <button
                    className="agent-listing-see-all-button"
                    onClick={() => {
                      // setPage('agent-listing');
                      navigate("/admin-management/admin-listing");
                    }}
                  >
                    See all
                  </button>
                </div>
              </Grid>
            </Grid>
            <TableLayout
              headData={["#", "Photo", "Name", "Role ", "Action "]}
              bodyData={[
                [
                  1,
                  <img
                    src={placeholderuserimage}
                    alt=""
                    className="listing-table-placeholder-image"
                  ></img>,

                  <div className="table-green-text-status-div">
                    John Peterson
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

                  <div className="div-del-edit">
                    <div>
                      <img
                        src={deleteicon}
                        alt="Delete Icon"
                        className="agent-listing-delete-icon"
                      ></img>
                    </div>
                    <div>
                      <img
                        src={editIcon}
                        alt="Delete Icon"
                        className="agent-listing-delete-icon"
                      ></img>
                    </div>
                    <button
                      className="agent-listing-action-button"
                      onClick={handleOpenMenu}
                    >
                      <img
                        src={threedot}
                        alt="Three Dots Icon"
                        className="agent-listing-three-dots-icon"
                      ></img>
                    </button>
                  </div>,
                ],
              ]}
              dataObject={{ name: "John" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div className="white-box">
              <HomeCharts type={"trash"} calender={true} seeDetails={true} />
            </div>
          </Grid>
        </Grid>
      </div>

      <TrashDetailsModal
        isTrashDetailsModalVisible={isTrashAgentModalVisible}
        setIsTrashDetailsModalVisible={setIsTrashAgentModalVisible}
        page={"agent-profile"}
      />

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={navigate}>View Profile</MenuItem>
        <MenuItem
        onClick={() => setIsEditAgentDetailsModalVisible(true)}
        >
          Edit Profile
        </MenuItem>
      </Menu>
      <ModalLayout
            size={"large"}
            state={isEditAgentDetailsModalVisible}
            stateFunction={setIsEditAgentDetailsModalVisible}
            content={
              <>
                <p className="edit-personal-details-paragraph">Edit admin</p>
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
                      <div className="admin-edit-password-input">
                        Profile Photo
                      </div>
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
                    //   setShowSuccess(true);
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </>
            }
          />
    </>
  );
}
