import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  // Put Header or Footer Here
  return (
    <div className='font-nunito '>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
