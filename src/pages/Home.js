import React from 'react'
import CategoryCard from '../components/CategoryCard';
import { useApiHooks } from '../hooks/apiHooks';
import LoadingCompo from '../components/LoadingCompo';

const Home = () => {
  const [load, err, data] = useApiHooks({ api: 'https://www.themealdb.com/api/json/v1/1/categories.php' });




  if (load) {
    return <LoadingCompo />

  }

  if (err) {
    return <h1>{err}</h1>
  }



  return (
    <div className='p-3 grid grid-cols-3 gap-4'>

      {data?.categories.map((cata, i) => {
        return <CategoryCard cata={cata} key={i} />
      })}





    </div>
  )
}

export default Home