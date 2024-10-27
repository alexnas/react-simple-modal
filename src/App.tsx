import Button from '@/components/Button';

function App() {
  const handleClick1 = () => {
    console.log('hangleClick1');
  };
  const handleClick2 = () => {
    console.log('hangleClick2');
  };
  const handleClick3 = () => {
    console.log('hangleClick3');
  };
  return (
    <>
      <div className="h-screen bg-gray-200 p-3">
        <header>
          <div className="flex justify-end  items-center gap-3">
            <Button handleClick={handleClick1}>Button1</Button>
            <Button handleClick={handleClick2}>Button2</Button>
            <Button handleClick={handleClick3}>Button3</Button>
          </div>
        </header>
        <h1 className="text-3xl font-bold text-blue-800">Hello world!</h1>
      </div>
    </>
  );
}

export default App;
