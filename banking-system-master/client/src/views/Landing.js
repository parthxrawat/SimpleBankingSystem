import React from 'react';
import { Button, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const BackgroundImage = styled('div')({
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '75vh', // Adjust height as needed
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.95,
  backgroundColor: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Overlay = styled('span')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.65)',
});

const ContentContainer = styled(Container)({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
});

const Section = styled('section')({
  paddingBottom: '20px',
  backgroundColor: '#f5f5f5',
  marginTop: '-24px',
});

const SectionTitle = styled(Typography)({
  marginBottom: '24px',
  fontSize: '24px',
  fontWeight: 600,
});

const InfoCard = styled(Paper)({
  padding: '16px',
  textAlign: 'center',
  marginBottom: '16px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
});

const InfoIcon = styled('div')({
  width: '48px',
  height: '48px',
  marginBottom: '16px',
  borderRadius: '50%',
  backgroundColor: '#ff5722',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '24px',
});

const DetailsSection = styled('section')({
  backgroundColor: '#212121',
  color: 'white',
  padding: '40px 0',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
});

const Highlight = styled('span')({
  color: '#ff5722',
  fontWeight: 700,
});

const GithubButton = styled(Button)({
  marginTop: '16px',
  fontWeight: 600,
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: '#ff5722',
  },
});

export default function Landing() {
  return (
    <main>
      <BackgroundImage
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFua3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
        }}
      >
        <Overlay />
        <ContentContainer>
          <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '100%' }}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" color="white" fontWeight="bold">
                Banking System App
              </Typography>
              <Typography variant="body1" color="gray" marginTop="16px">
                This is a simple banking system app through which you can
                create an account and transfer money with each other and see
                the details of it.
              </Typography>
            </Grid>
          </Grid>
        </ContentContainer>
      </BackgroundImage>

      <Section>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <InfoCard>
                <InfoIcon>
                  <i className="fas fa-award" />
                </InfoIcon>
                <Typography variant="h6">1. Create Account</Typography>
                <Typography variant="body2">
                  Add the basic details about yourself and some bank details
                  to open an account.
                </Typography>
              </InfoCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <InfoCard>
                <InfoIcon>
                  <i className="fas fa-retweet" />
                </InfoIcon>
                <Typography variant="h6">2. Transfer Money</Typography>
                <Typography variant="body2">
                  Go to the customer page and transfer money to any person
                  by clicking on transfer.
                </Typography>
              </InfoCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <InfoCard>
                <InfoIcon>
                  <i className="fas fa-fingerprint" />
                </InfoIcon>
                <Typography variant="h6">3. Transaction History</Typography>
                <Typography variant="body2">
                  Check the amount transfer amount in transactions.
                </Typography>
              </InfoCard>
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="textSecondary">
                Working of the New Customer
              </Typography>
              <Typography variant="body1" marginTop="16px">
                It is a three-step process: first, provide your details, then
                enter the bank details, and finally, verify all your details.
                Ensure you fill out all fields accurately, as this data will
                be displayed on the customers page. Alerts will notify you if
                any required fields are missing.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>
                <img
                  alt="Form illustration"
                  src="./assets/images/form.svg"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Paper>
                <img
                  alt="Customers illustration"
                  src="./assets/images/customers.svg"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="textSecondary">
                Customers
              </Typography>
              <Typography variant="body1" marginTop="16px">
                This section lists all the customers with their account balance.
                You can send and receive money by selecting a customer and
                entering the amount. Click the send button to complete the
                transaction.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="textSecondary">
                Transactions
              </Typography>
              <Typography variant="body1" marginTop="16px">
                The transactions page displays a list of transactions, showing
                who sent money, how much, and to whom. The data is presented
                clearly for easy reading.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>
                <img
                  alt="Transactions illustration"
                  src="./assets/images/transactions.svg"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Section>

      <DetailsSection>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={8}>
              <Typography variant="h2">
                Details of the Website
              </Typography>
              <Typography variant="body1" color="gray" marginTop="16px">
                You can find the source code of this website in my{' '}
                <Highlight>GitHub repo</Highlight>.
              </Typography>
              <GithubButton
                variant="contained"
                color="primary"
                href="https://github.com/parthxrawat/SimpleBankingSystem"
              >
                View on GitHub
              </GithubButton>
            </Grid>
          </Grid>
        </Container>
      </DetailsSection>
    </main>
  );
}
