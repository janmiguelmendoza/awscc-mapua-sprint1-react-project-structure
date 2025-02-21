import Button from '../components/common/Button';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={() => alert('Clicked!')}>Click Me</Button>
    </div>
  );
};

export default Home;