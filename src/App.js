import React, {Component} from 'react';
import { Container, Image, Header, Popup, Icon, Grid } from 'semantic-ui-react'

import './App.css'

class App extends Component {

  constructor(props) {
    super(props);

    this.stateInicial = {
      footerMobile: false,
    };

    this.state = this.stateInicial;

  }
  render() {

    const { footerMobile } = this.state;

    return (
      <Container className="cont-main">

        <Grid stackable className='card-article'>

          <Grid.Row columns={2}>

          <Grid.Column width={6}>
            <Image src='/images/drawers.jpg' alt='Drawers' />
          </Grid.Column>
          
          <Grid.Column width={10} className='card-information'>
            <Header as="h2">Shift the overall look and feel by adding these wonderful touches to furniture in your home</Header>
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
          
            <Grid className={ `avatar-share ${ footerMobile ? 'none' : ''} `}>
              <Grid.Row>
                <Grid.Column width={10}>
                  <Image src='/images/avatar-michelle.jpg' alt='Avatar Michelle' avatar />
                  <div className='card-inf-avatar'>
                  <span className='avatar-name'>Michelle Appleton</span><br />
                    28 Jun 2020
                  </div>
                </Grid.Column>

                <Grid.Column textAlign='right' verticalAlign='middle' className='share-button' width={6} only='tablet computer'>

                  <Popup wide 
                    trigger={<Icon link circular inverted name='share' />} 
                    flowing 
                    inverted 
                    hoverable
                    position='top right' 
                    className='popup-share'
                    offset='3px, 5px'
                    pinned>
                    <Grid centered className="share-grid">
                      <Grid.Column textAlign='center' >
                        <span className='share-text'>S H A R E</span>
                        <Icon link inverted name='twitter' />
                        <Icon link inverted name='facebook' />
                        <Icon link inverted name='pinterest' />
                      </Grid.Column>
                    </Grid>
                  </Popup>

                </Grid.Column>

                <Grid.Column textAlign='right' verticalAlign='middle' className='share-button' width={6} only='mobile'>
                  <Icon link circular inverted name='share' onClick={() => {this.setState( ({footerMobile}) => ({footerMobile: !footerMobile}))}} />
                </Grid.Column>

              </Grid.Row>

            </Grid>
          
          </Grid.Column>

          </Grid.Row>

          <Grid.Row className={ `share-mobile-grid ${ footerMobile ? 'flex' : ''}` }>
              <Grid className='share-mobile-gridB'>
            <Grid.Column width={10} verticalAlign='middle'>
                    <span>S H A R E</span>
                    <Icon link inverted name='twitter' />
                    <Icon link inverted name='facebook' />
                    <Icon link inverted name='pinterest' />
            </Grid.Column>

            <Grid.Column textAlign='right' verticalAlign='middle' className='share-button' width={6} >
              <Icon link circular inverted name='share' onClick={() => {this.setState( ({footerMobile}) => ({footerMobile: !footerMobile}))}} />
            </Grid.Column>
            </Grid>
          </Grid.Row>
        </Grid>

      <Container className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer" >Frontend Mentor</a>. Coded by<a href="https://www.linkedin.com/in/paulohsz/" target="_blank" rel="noopener noreferrer" >Paulo Henrique Stocco Zancanaro</a>.
      </Container>
      </Container>
    );
  }
}

export default App;
