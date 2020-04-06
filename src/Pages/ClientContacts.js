import React, { useEffect, forwardRef } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
		},
		background: {
			default: grey[900],
			paper: blueGrey[700]
		},
		text: {
			primary: "#fff"
		},
		divider: blueGrey["A200"],
  },
});

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const CLIENT_CONTACTS = gql`
	{
  client_contacts {
    id
    name
    companyName
		title
    address
    industry
  }
}
`

const ClientContacts = () => {
	const { loading, error, data } = useQuery(CLIENT_CONTACTS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
	return (
		<div>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title={"Client Contacts"}
          icons={tableIcons}
					options={{
						pageSize: 10
					}}
          columns={[
            { title: "Id", field: "id" },
            { title: "Name", field: "name" },
						{title: "Title", field: "title"},
            { title: "Company Name", field: "companyName" },
            { title: "Address", field: "address" },
            { title: "Industry", field: "industry" },
          ]}
          data={data.client_contacts}
          editable={true}
        />
      </MuiThemeProvider>
    </div>
	)
}

export default ClientContacts
