import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            className={classes.heading}
            style={{
              fontSize: "2rem",
            }}
          >
            Investment Advisory Services
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a suite of investment opportunities by carefully vetted
            external managers. Clients work with their Private Wealth Management
            teams to select from investment vehicles covering the entire asset
            spectrum—including cash, fixed income and equities, as well as a
            range of alternative offerings such as private equity and hedge
            funds. Our specialists also create custom investment vehicles that
            meet the needs of individual clients.
            <br />
            <br />
            Investment Strategy Group (ISG)—an independent team of global
            investment professionals—provides guidance on asset allocation and
            portfolio diversification. Clients can access ISG analyses of key
            investment issues and participate in timely discussions on market
            activity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            className={classes.heading}
            style={{
              fontSize: "2rem",
            }}
          >
            Trading, Hedging and Structuring Solutions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            we offer clients the ability to trade in multiple securities and
            asset classes around the world. Many of our clients look to us not
            only for our execution capabilities but also for hedging and
            structuring solutions that help them manage a broad spectrum of
            risks. By combining our understanding of a client’s objectives with
            our strong derivatives expertise, we provide industry-leading
            advice, solutions and liquidity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            className={classes.heading}
            style={{
              fontSize: "2rem",
            }}
          >
            Wealth Advisory Services
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To address client needs for income, estate planning, gift planning,
            generation-skipping tax planning and philanthropy, our Wealth
            Advisory Services group can help to craft and implement holistic
            wealth management solutions
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            className={classes.heading}
            style={{
              fontSize: "2rem",
            }}
          >
            Trust and Estate Administration Services
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The dedicated team administers a wide variety of trusts, estates,
            foundations, and other fiduciary mandates that integrate a broad
            spectrum of wealth advisory services and investment strategies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            className={classes.heading}
            style={{
              fontSize: "2rem",
            }}
          >
            Advisory Services for Select Institutions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For US clients and Global clients our capabilities extend to
            managing the investment needs of small- to mid-size institutions
            such as foundations and endowments. Our specialized support and
            advice can be tailored to the organization’s needs and goals.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
