import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';
import Post from '../Project/ProjectPost';
import Description from '../Project/ProjectPostDescription';

function PostAProject() {
  return (
    <>
      <Header />
      <Menubar />
      <Post />
      <Description />
      <Footer />
    </>
  )
}

export default PostAProject;
