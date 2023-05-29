import { Outlet } from 'react-router-dom';
import Header from "./Header";
import { Container } from 'react-bootstrap';
import '../assets/scss/styles.scss';
const Layout = () => {
    return (
      <main>
        <div className="pageWrapper">
          {/********Sidebar**********/}
          {/* <aside className="sidebarArea shadow" id="sidebarArea">
            <Sidebar />
          </aside> */}
          {/********Content Area**********/}
  
          <div className="contentArea">
            {/********header**********/}
            <Header />
            {/********Middle Content**********/}
            <Container className="wrapper mt-5">
              <Outlet />
            </Container>
          </div>
        </div>
      </main>
    );
  };
  
  export default Layout;