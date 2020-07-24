import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BaseTable from '.';

storiesOf(
  'Common Component Guide',
  module
).add('base table without checkbox component', () => (
  <BaseTable onClickItemCard={action('click')} />
));
