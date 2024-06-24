import {Suspense, lazy} from "react";
import waiting from "./waiting";

const MyComponent = lazy(async()=>{
  await waiting(1000);
  return import('./lazyLoadedComponent');
})

function App(){
  return (
    <div>
      <h1>Welcome to My App</h1>
      {/* Use Suspense to show a fallback while MyComponent is loading */}
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
}

export default App;