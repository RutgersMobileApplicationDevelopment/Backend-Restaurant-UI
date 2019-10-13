import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardActionArea from '@material-ui/core/CardActionArea';

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const rname = "Tacoria"

function GenCards(restaraunts){
  const classes = useStyles();
  var output = []
  for (var key in restaraunts){
    console.log(restaraunts)
    output.push(
      (
        <GridItem xs={12} sm={6} md={3}>
        <Card>
        <CardActionArea >
          <CardHeader color="success" stats icon>
            <CardIcon color="success">
              <Store />
            </CardIcon>
            <h1 className={classes.cardTitle}>{restaraunts[key].name}</h1>
          </CardHeader>
          <CardFooter stats>
          </CardFooter>
          </CardActionArea>
        </Card>
      </GridItem>
    )
    )
  }
  return output
}


export default function Dashboard() {
  const classes = useStyles();
  
  return (
    <div>
      <GridContainer>
        {GenCards([{name:"tacoria"},{name:"stuffs"}])}
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <CardActionArea >
            <CardHeader color="primary">
              <h1 className={classes.cardTitleWhiteCenter}>Add New Restaraunts</h1>
            </CardHeader>
        </CardActionArea>
        </GridItem>
      </GridContainer>
    </div>
  );
}
