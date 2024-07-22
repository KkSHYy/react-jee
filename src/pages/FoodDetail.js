import React from 'react'
import { useParams } from 'react-router'
import { useApiHooks } from '../hooks/apiHooks';
import LoadingCompo from '../components/LoadingCompo';


const FoodDetail = () => {
  const { id } = useParams();

  const [load, err, data] = useApiHooks({
    api: 'https://www.themealdb.com/api/json/v1/1/lookup.php',
    id
  });



  if (load) {
    return <LoadingCompo />
  }

  if (err) {
    return <h1>{err}</h1>
  }

  const meal = data?.meals[0];
  const url = meal?.strYoutube?.split('=');


  return (
    <div className='p-3 space-y-4'>
      {url && <iframe className="w-[40%] h-[40%] aspect-video" src={`https://www.youtube.com/embed/${url[1]}`} allowFullScreen></iframe>}

      <div className="meal-info grid grid-cols-2 gap-5">
        <div className="meal-img">
          <img className='h-[400px]' src={meal?.strMealThumb} alt="" />
        </div>
        <div className="meal-instruction">
          <p>{meal?.strInstructions}</p>
        </div>
      </div>




    </div>
  )
}

export default FoodDetail