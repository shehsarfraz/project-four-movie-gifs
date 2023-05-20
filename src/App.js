import Header from './components/Header';
import GifSection from './components/GifSection';
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Header />
        <main>
            <GifSection />
            <Search />
        </main>
        <Footer />
    </>
  );
}

export default App;
