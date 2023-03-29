import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Menubar from './Components/Menubar';
import Post from './Components/ProjectPost';
import Description from './Components/ProjectPostDescription';

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
