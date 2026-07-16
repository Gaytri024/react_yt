import React from 'react'
import { useParams} from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'

const CourseDetail = () => {
  const params = useParams()
  // const navigate = useNavigate()
  return (
    <div>
      <h1>{params.id} - Course Detail</h1>
      {/* <button
        onClick={() => navigate('/courses')}
        className="font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back to Courses
      </button> */}

    </div>
  )
}

export default CourseDetail
