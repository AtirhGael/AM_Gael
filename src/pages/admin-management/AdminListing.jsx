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
import { Grid, Menu, Table, Tabs, styled } from "@mui/material";
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
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const AntTabs = styled(Tabs)({
    backgroundColor: 'white',
    width: 270,
    borderRadius:10,
    height: 55,
    display: 'flex',
    justifyContent: 'center',
  "& .MuiTabs-indicator": {
    backgroundColor: "#4CAC3E",
    height: 3
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    // minWidth: 0,
    width: 130,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(1),
    color: "black",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
    //   color: "#4CAC3E",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#4CAC3E",
      fontWeight: theme.typography.fontWeightBold,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

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

export default function AdminListing() {
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

  const [anchorEl, setAnchorEl] = useState(null);
  const page = "owner-listing";
  const section = "owner-management";
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState("1");

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
        <TabPanel value="1">
          <>
            <Grid container justifyContent="space-between" paddingTop={2}>
              <Grid item xs={12} md={6} lg={6}>
                <div className="listing-actions-div">
                  <button
                    onClick={handleOpenMenu}
                    className="listing-filter-button"
                  >
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

                  <div className="table-green-text-status-div">
                    John Peterson
                  </div>,
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
                    setIsSelectAssignModalVisible={
                      setIsSuspendAgentModalVisible
                    }
                    setIsDeleteModalVisible={setIsDeleteModalVisible}
                  />,
                ],
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
                    setIsSelectAssignModalVisible={
                      setIsSuspendAgentModalVisible
                    }
                    setIsDeleteModalVisible={setIsDeleteModalVisible}
                  />,
                ],
              ]}
              dataObject={{ name: "John" }}
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
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
      {tabValue === "1" && (
        <>
          <Grid container justifyContent="space-between" paddingTop={2}>
            <Grid item xs={12} md={6} lg={6}>
              <div className="listing-actions-div">
                <button
                  onClick={handleOpenMenu}
                  className="listing-filter-button"
                >
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

                <div className="table-green-text-status-div">
                  John Peterson
                </div>,
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
                />,
              ],
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
                />,
              ],
            ]}
            dataObject={{ name: "John" }}
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
      )}
      {tabValue === "2" && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
          }}
        >
          <div
            className="admin-button-tab-div"
            style={{ margin: "10px 0px 0px 0px" }}
          >
            <button
              onClick={() => {
                setIsAgentOverviewActive(true);
                setIsAgentBookingsActive(false);
              }}
              className={isAgentOverviewActive ? "sactive" : ""}
            >
              Admin
            </button>
            <button
              onClick={() => {
                setIsAgentBookingsActive(true);
                setIsAgentOverviewActive(false);
              }}
              className={isAgentBookingsActive ? "sactive" : ""}
            >
              Super Admin
            </button>
          </div>
        </div>
      )}
    </>
  );
}