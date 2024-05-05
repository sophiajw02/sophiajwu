import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Social, Footer } from '@components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isHome = location.pathname === '/';

    return (
      <>
        <div className='bg-background min-h-screen justify-between'
          id="root"
        >
            <Nav isHome={isHome} />
            <Social />
            <div className='flex flex-col justify-center items-center grid' 
              id="content"
            >
              {children}
              <Footer />
            </div>
        </div>

      </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;