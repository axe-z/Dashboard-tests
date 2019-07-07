import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Danger from "components/Typography/Danger.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info" stats icon>
            <CardIcon color="info">
              <Icon>face</Icon>
            </CardIcon>
            <p>Reviewed Cases</p>
            <h3>
              patient name <small>files</small>
            </h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}></div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h3 className={classes.cardTitleWhite}>Patient List</h3>
            <p className={classes.cardCategoryWhite}>ici on aurait des pastilles de filtre</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Time", "Name", "Latest Stats", "Last Seen"]}
              tableData={[
                ["10:15", "Martin Melancon", "80/120", "3 months ago"],
                ["10:30", "Vanessa Ferrer", "92/125", "2 months ago"],
                ["10:45", "Benoit Lafrance", "89/152", "6 months ago"],
                ["11:00", "Mats Naslund", "55/90", "3 years ago"],
                ["10:15", "Martin Melancon", "80/120", "3 months ago"],
                ["10:30", "Vanessa Ferrer", "92/125", "2 months ago"],
                ["10:45", "Benoit Lafrance", "89/152", "6 months ago"],
                ["11:00", "Mats Naslund", "55/90", "3 years ago"],
                ["10:15", "Martin Melancon", "80/120", "3 months ago"],
                ["10:30", "Vanessa Ferrer", "92/125", "2 months ago"],
                ["10:45", "Benoit Lafrance", "89/152", "6 months ago"],
                ["11:00", "Mats Naslund", "55/90", "3 years ago"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Table on Plain Background</h4>
            <p className={classes.cardCategoryWhite}>Here is a subtitle for this table</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
                ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem> */}
    </GridContainer>
  );
}

TableList.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(TableList);
