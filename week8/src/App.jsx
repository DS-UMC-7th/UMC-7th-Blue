// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import MakeTodo from "./pages/makeTodo";
// import DetailTodo from "./pages/detailTodo";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MakeTodo />
//   },
//   {
//     path:'/:id',
//     element: <DetailTodo />
//   },
//   {
//     future: {
//       v7_fetcherPersist: true,  // fetcher 지속성 동작을 변경된 방식으로 활성화
//     },
//   }
// ])

// function App() {
//   return <RouterProvider router={router}/>
// }

// export default App

import UseQueryTodo from "./pages/useQueryTodo";

function App() {
  return(
    <>
      <UseQueryTodo />  
    </>
  );
}

export default App;
