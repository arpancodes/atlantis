import React, {useState} from 'react';
import {ScrollView, ImageBackground, DatePickerAndroid} from 'react-native';

import backgroundImage from '../assets/images/backimage.jpg';
import SearchBar from '../components/search-bar/search-bar';
import Header from '../components/header/header';
import NavContainer from '../components/nav-container/nav-container';
import Features from '../components/features/features';
import AgroTourism from '../components/AgroTourism/AgroTourism';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          title: 'COFFEE',
          desc:
            'Click here to add your own content, or connect to data from your collections',
          chosenDate: null,
          pic: 'coffee',
        },
        {
          title: 'MULBERRY',
          desc:
            'Click here to add your own content, or connect to data from your collections',
          chosenDate: null,
          pic: 'mulberry',
        },
        {
          title: 'DRAGON FRUIT',
          desc:
            'Click here to add your own content, or connect to data from your collections',
          chosenDate: null,
          pic: 'dragon-fruit',
        },
      ],
      inputText: '',
    };
  }

  onChange = text => this.setState({inputText: text});
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={{backgroundColor: '#effafd'}}>
        <ImageBackground
          source={backgroundImage}
          style={{
            width: '100%',
            height: 400,
            justifyContent: 'space-around',
            backgroundAttachment: 'fixed',
          }}>
          <Header />
          <SearchBar
            placeholder="Where will like to go today?"
            inputText={this.state.inputText}
            onChange={this.onChange}
          />
        </ImageBackground>
        <NavContainer />
        <Features />
        <AgroTourism services={this.state.services} navigation={navigation} />
      </ScrollView>
    );
  }
}

export default Homepage;
