import NxWelcome from './nx-welcome';
export function App() {
  return (
    <div>
       <div className="bg-red-200 p-4">
      <h1 className="text-xl font-bold text-green-600">Tailwind Test</h1>
    </div>
      <NxWelcome title="@compute-kart/cloud-share" />
    </div>
  );
}

export default App;
