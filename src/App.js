import React, { useState, useEffect } from 'react';

function App() {

  const [post, updatePosts] = useState(null);
  const [count, setCount] = useState(0);

  const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());

  useEffect(() => {
    (async () => {
      updatePosts(await getPost());
    })();
  }, []);

  if (!post) {
    return <div>Carregando...</div>
  }

  return (
    <div>
      <header className="container mx-auto px-4 space-y-3">

        <div class="grid grid-cols-13 gap-2"> 

        <div class="col-start-1 col-end-3">

        <label class='text-black text-lg'>Post</label>

            <div class="md:flex bg-white rounded-lg p-3 shadow-xl">
              <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src='./icon.png'/>
              <div class="text-center md:text-left">
                <h2 class="text-lg">{post.title}</h2>
                <div class="text-green-900">{post.body}</div>
                <div class="row-auto" > 
                <div class="md:flex" > 
                <div class="h-5 w-5 animate-pulse" onClick={() => setCount(count + 1)}> 
                  <svg xmlns="http://www.w3.org/2000/svg" style={{paddingTop: '2px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                  <div class=" md:text-left"> 
                    {count}
                  </div>
                </div>
              </div>
              </div>
            </div>

            </div>

            </div>

            <div class="grid grid-cols-13 gap-2"> 

             <div class="col-start-1 col-end-6"> 

              <label class='text-black text-lg'>GetPost</label>

                <div class="md:flex bg-white rounded-lg p-3 shadow-xl">

 <pre>{`
const[post,updatePosts]=useState(null);
constgetPost=()=>
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response=>response.json());

useEffect(()=>{
  (async()=>{
    updatePosts(await getPost());
  })();
},[]);

if(!post){
  return<div>Carregando...</div>
}

`}</pre>
  
                </div>

              </div>

              <div class="col-start-7 col-end-13"> 

              <label class='text-black text-lg'>SetCount</label>

                <div class="md:flex bg-white rounded-lg p-3 shadow-xl">

<pre>{`
const [count, setCount] = useState(0);

<div class="h-5 w-5 animate-pulse" onClick={() => setCount(count + 1)}> 
</div>

`}</pre>

              </div>

            </div>

        </div>

      </header>
    </div>
  );
}

export default App;
