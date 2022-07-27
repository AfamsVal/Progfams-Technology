import React from 'react'
import image from "../../asset/images/digital.jpg"
import image2 from "../../asset/images/frontend4.png"
import image3 from "../../asset/images/backend2.jpeg"
import image4 from "../../asset/images/ui-ux.jpeg"
import image5 from "../../asset/images/mobile2.png"
// import image from "../../asset/images/kids.png"
import {Link} from "react-router-dom"

const CourseCard = ({title,lesson,details}) => {
  const cardArray = [
    {id:"1",
      image:image,
      title:"Complete Frontend Web development Bootcamp",
      lesson:"20 lesson",
      details:"Learn Digital Marketing Learn Digital Marketing Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicinglk"
     
    },
    {id:"2",
      image:image2,
      title:"Complete Backend Developer Bootcamp",
      lesson:"15 Lessons",
      details:"Learn Digital Marketing  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicingl."
     
    },
    {id:"3",
      image:image4,
      title:"UI/UX Design Course",
      lesson:"15 Lessons",
      details:"Learn Digital Marketing  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicingl."
     
    },
    {id:"4",
      image:image3,
      title:"Complete Moblie App Developer Bootcamp",
      lesson:"15 Lessons",
      details:"Learn Digital Marketing  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicingl."
     
    },
    {id:"5",
      image:image5,
      title:"Standard coding for kids complete course",
      lesson:"15 Lessons",
      details:"Learn Digital Marketing  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicingl."
     
    },
   
   ]

   
  return (
    <div>
      {cardArray.map((item) =>{
return(
<div className="row mx-5 course-card-border pb-5" key={item.id}>
  
      
<div className="row  pt-4 mb-2">
  <div className="col-12 col-md-4 pb-3 "  >
  <Link to="/course-details" >
<img src={item.image} alt="not found" className='' />
</Link>
  </div>
  <div className="col-12 col-md-8 pt-1 px-4 " >
  <Link to="/course-details" >

    <h5 className='font-weight-bold text-lighter'>{item.title}</h5>
   </Link>
    <p className="font-16 text-secondary">{item.lesson}</p>
    <p className=" font-14 text-secondary">{item.details}</p>
  </div>
</div>



</div>
     ) })}
       
    </div>
  )
}

export default CourseCard