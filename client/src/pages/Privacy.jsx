import React from 'react';
import { Box, Container, Typography, Link, List, ListItem } from '@mui/material';
import useStyles from '../styles/Static.style.js';
import { useSelector } from 'react-redux';

const Privacy = () => {
  const privacyPolicy = useSelector(state => state.static.privacyPolicy);
  const classes = useStyles();


  return (
    <Box className="Privacy" sx={{ minHeight: "100vh" }} >
      <Container maxWidth="xl" sx={{ paddingTop: "5%" }} >
        <Typography variant='h2' mb={2} >{privacyPolicy.ppContent.head}</Typography>
        <Typography variant='h6'>Your privacy is important to us. It is Kinoverse Corp&#39;s policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website,
          <Link href='https://Kinoverse.net'>https://Kinoverse.net</Link>
          , and other sites we own and operate. </Typography>
        <Typography variant='h6'>This policy is effective as of 15 February 2022 and was last updated on 15 February 2022. </Typography>

        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppInfoCollect.head}</Typography>
        {privacyPolicy.ppInfoCollect.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}



        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppLogData.head}</Typography>
        {privacyPolicy.ppLogData.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}

        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppPersonalInfo.head}</Typography>
        {privacyPolicy.ppPersonalInfo.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}
        <List> {privacyPolicy.ppPersonalInfo.lists.map((list, i) => (<ListItem className={classes.privacy_list_item} key={i} >{list}</ListItem>))}</List>



        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppReason.head}</Typography>
        {privacyPolicy.ppReason.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}




        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppCollections.head}</Typography>
        {privacyPolicy.ppCollections.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}
        <List> {privacyPolicy.ppCollections.lists.map((list, i) => (<ListItem className={classes.privacy_list_item} key={i} >{list}</ListItem>))}</List>


        <Typography variant='h4' mb={2} pt={5}></Typography>
        {privacyPolicy.ppPurpose.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}
        <List> {privacyPolicy.ppPurpose.lists.map((list, i) => (<ListItem className={classes.privacy_list_item} key={i} >{list}</ListItem>))}</List>
        <Typography variant='h6' >Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources.</Typography>



        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppSecurity.head}</Typography>
        {privacyPolicy.ppSecurity.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}



        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppKeep.head}</Typography>
        {privacyPolicy.ppKeep.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}



        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppChildren.head}</Typography>
        {privacyPolicy.ppChildren.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}



        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppInternational.head}</Typography>
        {privacyPolicy.ppInternational.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}



        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppRights.head}</Typography>
        {privacyPolicy.ppRights.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}





        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppCookies.head}</Typography>
        {privacyPolicy.ppCookies.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}



        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppLimits.head}</Typography>
        {privacyPolicy.ppLimits.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}


        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppChange.head}</Typography>
        {privacyPolicy.ppChange.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}


        <Typography variant='h4' mb={2} pt={5}>{privacyPolicy.ppContact.head}</Typography>
        {privacyPolicy.ppContact.paras.map((para, i) => (<Typography variant='h6' key={i}>{para}</Typography>))}




      </Container>
    </Box>
  )
}

export default Privacy;