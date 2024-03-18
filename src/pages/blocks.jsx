import React from 'react';

const blocks = () => {
    return (
        <div>
            <p>blocks</p>
        </div>
    );
};

export default blocks;

export function getStaticProps() {
    return {
      props: {},
      // returns the default 404 page with a status code of 404 in production
      notFound: process.env.NEXT_PUBLIC_NEXT_ENV === 'production'
    }
  }