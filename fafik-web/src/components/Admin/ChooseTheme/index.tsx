import React from 'react';

import { useDocumentTitle } from '../../../shared';

const ChooseThemeLayout = () => {
    useDocumentTitle('Wybierz motyw');

    return (<div>
        <div>Romantic
            <div>Zobacz demo</div>
            <div>Zacznij konfigurować</div>
        </div>
        <br />
        <br />
        <div>Leaves
            <div>Zobacz demo</div>
            <div>Zacznij konfigurować</div>
        </div>
    </div>
    );
};

export default ChooseThemeLayout;
