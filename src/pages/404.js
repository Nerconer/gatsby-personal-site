import * as React from "react"
import Header from '../components/Header';
import SocialList from '../components/SocialList';

const NotFoundPage = () => {
  return (
    <React.Fragment>
        <Header/>
        <SocialList/>
        <main>
          <h1>Not found :(</h1>
        </main>
    </React.Fragment>
  )
}

export default NotFoundPage;
