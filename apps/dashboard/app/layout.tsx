import React from 'react';

import '@core/styles/theme.scss';

import Main from '@/components/Main';

type TProps = {
    children: React.ReactNode;
};

const RootLayout = ({ children }: TProps) => {
    return (
        <html lang="en">
            <body>
                <Main>{children}</Main>
                <div id="portal"></div>
            </body>
        </html>
    );
};

export default RootLayout;
