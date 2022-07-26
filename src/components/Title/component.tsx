import React from 'react';
import classnames from 'classnames';
import * as Types from './types';

import './style.scss';

const Title = (props: Types.Props): JSX.Element => {
	const { id, classname, title, size, italic, bold } = props;
	return (
		<p
			id={id}
			data-testid={id}
			className={classnames(`Title ${classname}`, {
				'Title--small': size === 'sm',
				'Title--medium': !size || size === 'md',
				'Title--large': size === 'lg',
				'Title--bold': bold,
				'Title--italic': italic,
			})}
		>
			{title}
		</p>
	);
};

export default Title;
