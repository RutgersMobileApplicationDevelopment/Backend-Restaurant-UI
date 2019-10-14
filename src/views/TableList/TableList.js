import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Axios from "axios";
import { Button } from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput.js";


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

const useStyles = makeStyles(styles);

export default function TableList(props) {
  const {restaurantId, restaurantName, restaurantAddress} = props;
  const [items, setItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  Axios.get("localhost:5000/restaurants/" + restaurantId + "/items")
    .then(function(res) {
      const items = []
      var i;
      for (i in res) {
        items.push([i.name, i.description, i.price])
      }
      setItems(items)
    })

  Axios.get("localhost:5000/restaurants/" + restaurantId + "/reviews")
    .then(function(res) {
      var r;
      const reviews = []
      for (r in res) {
        reviews.push([r.name, r.stars, r.comment])
      }
      setReviews(reviews)
    })

  const classes = useStyles();
  return (
    <GridContainer>
    <h1>{restaurantName}</h1>
    <p>{restaurantAddress}</p>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Menu</h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Description", "Price"]}
              tableData={items}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Reviews
            </h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Stars", "Comment"]}
              tableData={reviews}
            />
          </CardBody>
        </Card>
      </GridItem>

      <CustomInput
        labelText="Full Name"
        id="full-name"
        formControlProps={{
          fullWidth: true
        }}
      />
      <CustomInput
        labelText="Number of Stars"
        id="stars"
        formControlProps={{
          fullWidth: true
        }}
      />
      <CustomInput
        labelText="Comment"
        id="comment"
        formControlProps={{
          fullWidth: true
        }}
      />
      <Button color="primary">Add new review</Button>
    </GridContainer>
    
  );
}
