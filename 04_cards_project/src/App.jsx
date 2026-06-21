import Cards from './components/Cards.jsx'

const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/31D7kkBEy8qM76fXuv_mrgOimsqVjuTRkTHyYpfdkUU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vOXRvNWdv/b2dsZS5jb20vd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzQv/MjAyNS8wNS9Hb29n/bGUtMjAyNS1HLWxv/Z28ud2VicD9zc2w9/MQ",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/eMCQPEVLyU_iwRQW-j7nxgyv8R1-7oMOEdrR-w_KhHo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tZXRh/LWxvZ28td2hpdGUt/YmFja2dyb3VuZC12/ZWN0b3ItZm9ybS1s/b2dvdHlwZS1ibHVl/LWZhY2Vib29rLWlu/c3RhZ3JhbS1wYXJl/bnQtY29tcGFueS1k/ZXNpZ24tMzgyMDQ4/MjM4LmpwZw",
    company: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/GxVOq9xuqtiB4Tpa8JJxeWKumoDP0A9x9UXm7yU0e4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/s9I_yrkbAzfU85YgXIzAcKQHYpqYXn5ORe3CHTe-Eyg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDM0NTM3/OTAuanBn",
    company: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/iqCCbShTd2A16JgS668b2RaDIiDtelTPWJOnE9pFSDM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvTmV0ZmxpeC1F/bWJsZW0tNzAweDM5/NC5qcGc",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/zPIFOKb8jRxNbX9fmwqA1ZVo42Frnk6fpZ6ArP7iy5k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NkLzc3/L2UwL2NkNzdlMDRk/OWZlMWE0YWM2NmEy/NjY5M2QwNWUwMmM0/LmpwZw",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/dRCIJz3T31Hzt2V0yGqDin4ffw5SsgZtIQ_jqLgYpi4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xv/Z29wZWRpYS9pbWFn/ZXMvNy83YS9BZG9i/ZV8yMDIwX1N0YWNr/ZWQuc3ZnL3Jldmlz/aW9uL2xhdGVzdC9z/Y2FsZS10by13aWR0/aC1kb3duLzIwMD9j/Yj0yMDI1MTEwMTAx/MzU0Mw",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/FPBmsL8kHdGu-4qZQ70k0XcwVnNMsbKlrBHWdKcDsAs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI5LzIvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0yOTk2MzAu/cG5n",
    company: "Uber",
    datePosted: "2 weeks ago",
    post: "Node.js Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/yyug71OkbQF5cxqbjap3yrSPzDLi5r-HjvNAXGZcpZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzEwL2FpcmJuYi1s/b2dvLTAucG5n",
    company: "Airbnb",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/G_YruQ0yF_B_P-zm2zr6aKN30nomRPx4HT-FIZ0lQi0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MDg5NWVjN2Q1OThh/NTAwMDQ0OGVhOTcu/cG5n",
    company: "NVIDIA",
    datePosted: "12 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  }
];

// console.log(jobOpening);

  return(
    <div className='parent'>
      {jobOpenings.map(function(elem,idx) {
        return <div key={idx}>
          <Cards company={elem.company} post={elem.post} pay={elem.pay} tag1={elem.tag1} tag2={elem.tag2} datePosted = {elem.datePosted} location = {elem.location} brandLogo = {elem.brandLogo} />
          </div>
      })}
    </div>
  )
}

export default App
