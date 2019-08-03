import React from 'react';
import { Leaves } from '../components/Leaves/Leaves';

const SiteThemes: { [key: string]: (props: any) => JSX.Element } = {};
SiteThemes['leaves'] = (props: any) => <Leaves logoNames={props.logoNames}/>;

export { SiteThemes };
