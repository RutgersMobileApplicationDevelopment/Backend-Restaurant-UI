import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";
import Axios from "axios";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

function genMenuItems(menuItems) {
  var output = []
  for (key in menuItems) {
    output.push(
      (
        <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Address"
                id="first-name"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  defaultValue: restaurantAddress
                }}
              />
            </GridItem>
          </GridContainer>
      )
    )
  }
  return output
}

export default function UserProfile(props) {
  const classes = useStyles();

  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState([])
  const [itemPrice, setItemPrice] = useState([])
  const [itemDescription, setItemDescription] = useState([])

  const restaurantId = props.location.restaurant.restaurantId;
  const restaurantName = props.location.restaurant.restaurantName;
  const restaurantAddress = props.location.restaurant.restaurantAddress;

  Axios.get("http://localhost:5000/restaurants/"+restaurantId+"/items")
    .then(function(res) {
      setItems(res);
    }).catch(function(err) {
      console.log(err);
    })

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Restaurant</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Restaurant Name"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue: restaurantName
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Address"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue: restaurantAddress
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Restaurant</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
      <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add Menu Item</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Item Name"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: function(val) {
                        setItemName(val.target.val)
                      }
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Description"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: function(val) {
                        setItemDescription(val.target.val)
                      }
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Price"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: function(val) {
                        setItemPrice(val.target.val)
                      }
                    }}
                  />
                </GridItem>
              </GridContainer>
              <Button color="primary" onClick={function(e) {
                Axios.post("http://localhost:5000/restaurants/"+restaurantId+"/items", {
                  name: itemName,
                  price: itemPrice,
                  description: itemDescription
                }).then(function(res) {
                  // reload jawn
                }).catch(function(err) {
                  console.log(err)
                })
              }}>Add Menu Item</Button>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Restaurant</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
