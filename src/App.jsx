import React from 'react';
import styles from './style';

import {Billing, Business, Button, CardDeal, Clients, CTA, FeedbackCard, Footer, 
  Hero, NavBar, Stats, Testimonials,} from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero></Hero>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients  />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App