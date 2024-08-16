import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {
    let courses=props.courses;
    function getCourses(){
    //console.log(props.category);
    //console.log(props.courses);

    //let category = props.category;
    //const [likedCourses, setLikedCourses] = useState([]);
       let allCourses = [];

    // It Returns list of all courses received from the api Response

    // const getCourses = () => {
         Object.values(courses).forEach(array => {
             array.forEach(courseData => {
                 allCourses.push(courseData);
             })
         })
         return allCourses;
     }

    // function getCourses() {
    //     if (category === "All") {
    //         let allCourses = [];
    //         Object.values(props.courses).forEach((array) => {
    //             array.forEach((courseData) => {
    //                 allCourses.push(courseData);
    //             });
    //         });
    //         return allCourses;
    //     }
    //     else
    //     {
    //         return props.courses[category];
    //     }
    // }

    //   console.log(allCourse);
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => (
                     <Card key={course.id}course={course}/>
                ))
            }
        </div>
    )
}

export default Cards;
