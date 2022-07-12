import React from 'react';
import classsnames from 'classnames';
import { Text } from '@components';
import * as Types from './types';

// STYLES
import './style.scss';

const Chip = (props: Types.Props): JSX.Element => {
  const { id, label, active } = props;

  return (
    <div id={id} data-testid={id} className={classsnames('Chip', {'Chip--active': active})}>
      <Text id={`${id}-label`} content={label} bold={active} />
    </div>
  )
}

export default Chip;