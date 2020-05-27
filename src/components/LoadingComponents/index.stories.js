/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
} from '@storybook/addon-knobs';

import LoadingComponent from '.'

storiesOf('Loading Component', module)
  .addDecorator(withKnobs)
  .add('Default Loading', () => 
    <LoadingComponent  />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Content Card Loading', () => 
    <LoadingComponent type="contentCard" />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Panoramic Slider Loading', () => 
    <LoadingComponent type="panoramicSlider" />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Video Clip Loading', () => 
    <LoadingComponent type="videoClip" />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Search Results Loading', () => 
    <LoadingComponent type="searchResults" />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Article Loading', () => 
    <LoadingComponent type="article" />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Gallery Loading', () => 
    <LoadingComponent type="gallery" />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Gallery title Loading', () => 
    <LoadingComponent type="galleryTitle" />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Programming Card Loading', () => 
    <LoadingComponent type="programmingCard" />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Programming Slider Loading', () => 
    <LoadingComponent type="programmingSlider" />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Character Highlight Loading', () => 
    <LoadingComponent type="characterHighlight" />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )