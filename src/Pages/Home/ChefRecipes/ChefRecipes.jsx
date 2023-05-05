import React from 'react';
import './ChefRecipes.css'
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import LazyLoad from 'react-lazyload';


const ChefRecipes = () => {
    const data = useLoaderData()
    const { id, chefsName, chefsPicture, country, bio, likes, recipes, years_experience } = data;

    return (
        <section className="text-white">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={chefsPicture} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Hello Myself {chefsName}</h3>
                        <span className="text-xs dark:text-gray-400">I am from {country}</span>
                        <p>I have {years_experience} years of experience. I know more than {recipes.length} recipes & almost {likes} peoples likes my dishes</p>
                        <p>"{bio}"</p>
                    </div>
                </a>
                {/* <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={chefsPicture} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5 banner-text">
                        <h1 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Hello Myself {chefsName}</h1>
                        <span className="text-xs dark:text-gray-400">I am from {country}</span>
                        <h3>I have {years_experience} years of experience. I know more than {recipes.length} recipes & almost {likes} peoples likes my dishes</h3>
                        <h6>"{bio}"</h6>
                    </div>
                </a> */}
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        recipes.map((recipe, i) => <Recipes
                            key={i}
                            recipe={recipe}
                        ></Recipes>)
                    }
                </div>
            </div>
        </section>

    );
};

export default ChefRecipes;