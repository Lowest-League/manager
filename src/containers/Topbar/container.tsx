import React from 'react';
import { Title, Chip } from '@components';
import * as Types from './types';

// STYLE
import './style.scss';

const Topbar = (props: Types.Props): JSX.Element => {
  const { id } = props;

  function navigate(href?: string): Window {
		if(href) return window.open(href, '_blank');
	};

  return (
    <div className="Topbar" id={id} data-testid={id}>
      <div className="Topbar__content">
        <Title id={`${id}-title`} content="react-setup" classname="Topbar__title" size="sm" />
        <div className="Topbar__chips">
          <span onClick={() => navigate('https://github.com/cl4pper/react-setup')}><Chip id={`${id}-ts`} label="TS" active={true} /></span>
          <span onClick={() => navigate()}><Chip id={`${id}-ts`} label="JS" active={false} /></span>
        </div>
      </div>
    </div>
  )
}

export default Topbar;