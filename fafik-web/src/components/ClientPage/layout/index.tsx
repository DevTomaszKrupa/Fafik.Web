import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = {

}
const ClientPageLayout = (props: Props & RouteComponentProps<{ clientName: string }>) => {
    console.log(props.match.params.clientName);
    return (
        <div>
            {props.match.params.clientName}
    </div>);
}

export { ClientPageLayout };
