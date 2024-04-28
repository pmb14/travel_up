import React, { useEffect, useState } from 'react'

const Home = () => {
    const [newsapi, setnewsapi] = useState([])
    const newData= async()=>{
        let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=c9057dc9f6a14045b5cd04341bba2556")
        let data = await res.json()
        setnewsapi(data.articles)
        console.log(data.articles)
        
    }
    useEffect(() => {
      newData()
    
     
    }, [])
    
  return (
    <>
    <div className=''>
       
     <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel ">
        
  <div className="carousel-inner">
    
    <div className="carousel-item active" data-bs-interval={3000}>
      <img src={"https://manybackgrounds.com/images/hd/hd-sunset-at-beach-w5ped7x6g3uo2o76.jpg"} className="d-block w-100 h-[500px]" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src={"https://c4.wallpaperflare.com/wallpaper/474/130/406/cascading-waterfalls-in-between-rocks-tarn-hows-tarn-hows-wallpaper-preview.jpg"} className="d-block w-100 h-[500px]" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={"https://www.pixel4k.com/wp-content/uploads/2018/03/Peaceful%20Dock547301086.jpg.webp"} className="d-block w-100 h-[500px]" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className='h-[100px] w-[auto] text-[50px] text-center pt-2 mt-2 mb-2 text-[black]'>
<h2>Our Bolg</h2>
</div>

        <div className='d-flex w-[90%] justify-center m-auto '> 

    
            
        <div className='h-[400px] w-[50%]  gap-8 mt-7'>
        <img src="https://us.123rf.com/450wm/alyoshine/alyoshine2208/alyoshine220800033/190614263-silhouette-woman-with-guitar-in-the-sunset-musician-holding-guitar-in-hand-of-silhouette-on-sunset.jpg?ver=6" alt="" height={"500px"} width={"500px"}/>
        <p></p>
        </div>
        <div className='h-[400px] w-[50%] pl-6 mt-7'>
            <h1 className='text-center text-[30px] mb-4 mt-2 '>About Sun images</h1>
       <p>The sun is the star located in the core or center of our solar system. Its bright radiating sunshine is the prime source of energy and life on our planet earth. Within our collection, you'll find all sort and styles depicting our sun in all its glory and its many roles. Find sunny landscapes and rolling grass-filled pastures in the background, sometimes adorned with clouds. Our contributors have also helped to illustrate the sun in many ways - often times happy, at times cartoon like. We also have stock photos covering many themes and situations from it shining and radiating its heavenly rays brightly from the sky to having just penetrated through some cloud cover that evokes a feeling of awe and wonder.</p>
        
        </div>
            
        {/* {newsapi.map((ele,index)=>{
            return <div className="  card col-span-4" style={{width: '18rem'}}>
  <img src={ele.urlToImage} className="card-img-top h-[150px] w-[auto]" alt="..." />
  <div className="card-body h-[300px] items-center">
    <h5 className="card-title font-bold">{ele.title}</h5>
    <p className="card-text h-[120px] overflow-hidden pt-[20px] pb-[20px]">{ele.description}</p>
    <a href="#" className="btn btn-primary mt-[20px]">Go somewhere</a>
  </div>
</div>

        })} */}
      
       </div>
</div>
     
</>
  )
}

export default Home
