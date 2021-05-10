import requests from './requests'
import Row from './Row';

function App() {
  return (
    <>
     <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title='Trending' fetchUrl={requests.fetchTrending}/>
    </>
  );
}

export default App;
