import React from 'react';
import Header from '../Header/Header';
import MyLogin from '../Login/Login';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Container, Card } from 'react-bootstrap';
import styles from './layout.module.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container className='mt-4'>
        <MyLogin className={styles.myLogin} />
        <Card className={`py-5 px-4 ${styles.mainContent}`}>
          <Outlet />
        </Card>
      </Container>
      <Footer />
    </>
  );
};
