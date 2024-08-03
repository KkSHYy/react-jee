import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import Blogs from './features/blog/Blogs';
import AddForm from './features/blog/AddForm';
import EditForm from './features/blog/EditForm';

const App = () => {


  // const person = {
  //   name: 'hari',
  //   age: 90
  // };

  // delete person.name;

  // console.log(person);


  // const pers = ['ram', 'shyam'];
  // console.log(pers.includes('shyam'));
  // const persons = [
  //   { id: 1, name: 'john' },
  //   { id: 2, name: 'riya' },
  //   { id: 3, name: 'shawn' },
  // ];

  // const m = persons.map((g) => {
  //   return g.id === 1 ? { id: 1, name: 'siya' } : g;
  // });

  // console.log(m);

  // persons.push({ id: 4, name: 'lita' });
  // console.log(persons);

  // persons.splice(1, 1);

  // console.log(persons);

  // const users = [
  //   { id: 1, name: 'john', genre: 'male' },
  //   { id: 2, name: 'riya', genre: 'male' },
  //   { id: 3, name: 'shawn', genre: 'female' },
  // ];

  // const g = [11, 22, 44, 55, 77];
  // g.splice(1, 1);
  // console.log(g);

  // const per = [11, 22, 44, 55];
  // console.log([...per, 99]);
  // const p = {
  //   name: 'ram'
  // };

  // console.log({ ...p, age: 90 });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Blogs />
        },
        {
          path: 'add-blog',
          element: <AddForm />
        },
        {
          path: 'edit-blog/:id',
          element: <EditForm />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App