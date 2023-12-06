import Header from './Hearder';
import Main from './Main';
import Footer from './Footer';
import SpecialSection from './SpecialSection';
import MenuSection from './MenuSection';

const HomePage = () => {
    return (
    <div className='app'>
       <Header />
       <Main />
       <SpecialSection />
       <MenuSection />
       <Footer />
     </div>
    );
};
export default HomePage;
