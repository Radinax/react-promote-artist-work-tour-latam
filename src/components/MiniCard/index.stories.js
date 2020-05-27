/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Flex, Box } from 'rebass';

import MiniCard from '.';

const logo = "https://cdn.admin-discoverybrasil.com/sites/default/files/logos/hh.svg";

storiesOf('Mini Card', module)
  .add('with image', () => {
    return <Flex flexDirection="column"><Box width={[ 1 / 8 ]}><MiniCard logo={logo} title="Food" onClick={action('opened')} shortName="animalPlanet" key="hey" urlProgramming="/" idChannel="discovery" /></Box></Flex>
  });
