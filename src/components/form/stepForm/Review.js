import React from "react";
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export const Review = ({ formData, navigation }) => {
  const history = useHistory();
  const { go } = navigation;
  const {
    firstName,
    lastName,
    dob,
    email,
    phone,
    dept,
    empid,
    vac_name,
    first_dose,
    second_dose,
  } = formData;

  return (
    <Container maxWidth='sm'>
      <h3>Review</h3>
      <RenderAccordion summary="Personal Info" go={ go } details={[
        { 'First Name': firstName },
        { 'Last Name': lastName },
        { 'DoB': dob },
        { 'Email': email },
        { 'Phone': phone },
      ]} />
      <RenderAccordion summary="Employee Info" go={ go } details={[
        { 'Department': dept },
        { 'Employee ID': empid },
      ]} />
      <RenderAccordion summary="Vaccine Infpo" go={ go } details={[
        { 'Vaccine Name': vac_name },
        { 'First Dose': first_dose },
        { 'Second Dose': second_dose },
      ]} />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: '1.5rem' }}
        onClick={() => history.push('/home')}
      >
        Submit
      </Button>

    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        { details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        }) }
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        ><EditIcon /></IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
)
