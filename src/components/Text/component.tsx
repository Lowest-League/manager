import React from 'react';
import classnames from 'classnames';
import * as Types from './types';

import './style.scss';

const Text = (props: Types.Props): JSX.Element => {
	const { id, classname, text, size, italic, bold } = props;
	return (
		<p
			id={id}
			data-testid={id}
			className={classnames(`Text ${classname}`, {
				'Text--small': size === 'sm',
				'Text--default': !size || size === 'md',
				'Text--large': size === 'lg',
				'Text--bold': bold,
				'Text--italic': italic,
			})}
		>
			{text}
		</p>
	);
};

export default Text;
