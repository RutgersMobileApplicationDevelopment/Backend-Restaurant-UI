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
import EditIcon from '@material-ui/icons/Edit';
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
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
const Link1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

function GenCards(Restaurants){
  const classes = useStyles();
  var output = []
  for (var key in Restaurants){
    output.push(
      (
        <GridItem xs={12} sm={6} md={3}>
        <Card>
        <CardActionArea component={Link1} to={{
          pathname: '/admin/table',
          restaurant: Restaurants[key]
        }}>
          <CardHeader color="success" stats icon>
            <CardIcon color="success">
              <Store />
            </CardIcon>
            <h1 className={classes.cardTitle}>{Restaurants[key].restaurantName}</h1>
          </CardHeader>
          <CardFooter stats>
          </CardFooter>
          </CardActionArea>
          <CardActionArea component={Link1} to={{
            pathname: '/admin/user',
            restaurant: Restaurants[key]
          }}>
            <CardFooter>
              <EditIcon />
              <h4>Edit</h4>
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
        {GenCards([{restaurantName:"tacoria", restaurantId:"asdf", restaurantAddress:"123 main St."},{restaurantName:"stuffs", restaurantId: "abcd", restaurantAddress: "7 College Ave."}])}
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <CardActionArea >
            <CardHeader color="primary">
              <h1 className={classes.cardTitleWhiteCenter}>Add New Restaurants</h1>
            </CardHeader>
        </CardActionArea>
        </GridItem>
      </GridContainer>
    </div>
  );
}
