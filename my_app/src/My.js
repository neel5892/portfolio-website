import React from 'react'
import { Link } from 'react-scroll'
import n1 from "./images/n1.jpg";

function My() {
  return (
    <div>
        <div>
            
            <nav className='Soni'>
             <ul className='link'>
                         {/* <li><a href="Data.js" target=''>Home</a></li>
                         <li><a href='about'>About</a></li>
                         <li><a href='contact'>Contact</a></li>
                         <li><a href='services'>Skills</a></li> */}
                         {/* <li><a href='services'>Services</a></li>
                          */}

<Link to={"firstComponent"} smooth={true} duration={500}>
              Home
            </Link>

            {/* </Link> */}
            <Link to={"about"} smooth={true} duration={500}>
              About Us
            </Link>

            <Link to={"service"} smooth={true} duration={500}>
              Skills
            </Link>

            <Link to={"diya"} smooth={true} duration={500}> 
            Resume
            </Link>
           
            <Link to={"badal"} smooth={true} duration={500}> 
            Services
            </Link>

            
            
            <Link to={"footer"} smooth={true} duration={500}>
            Contact Us
            </Link>

                 </ul>
         <img src='https://th.bing.com/th/id/OIP.5Mp6yO6ATD8XAhUTLt28TgHaH_?w=174&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7' className='logo'/>
         </nav>
         
       
       </div>

      <div id='firstComponent' className='name d-flex j-c-between'>
      
        <p>
          <h1><b>Neel Joshi</b></h1>
          <h3>It is my responsibility to design, code, test, and maintain software systems and applications. They employ their knowledge of programming languages, the fundamentals of software engineering, and problem-solving strategies to develop software solutions that satisfy particular user requirements or corporate goals..</h3>
        </p>
        
        <img src={n1} height={460}  width={460}>
       
         
        </img>
        
      </div>

      <div id='about' className='p2'>
      <img src='https://th.bing.com/th/id/OIP.Q5LQWTNOXgHbZlKgAD1zWQHaFL?w=269&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7' height={340} ></img>

        <div className='text-part'>
          <h1 ><b>About Us</b></h1>
          <h2>Hi, I'm Neel Joshi . I am a front-end developer with knowledge in HTML, CSS, JavaScript, and various front-end frameworks. I develop dynamic and responsive interfaces that meet client needs.</h2>
        </div>
        
      </div>

      <div id='service'>
          <section id="skills" className="skills">
      <h2>My Skills</h2>
      <ul>
        <li className="skill-item">
          <img src='https://th.bing.com/th/id/OIP.lrMPUKlpBVukVACvbhWD2QHaHZ?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'alt="JavaScript logo" className="skill-image" />
          <span>JavaScript</span>
        </li>
        <li className="skill-item">
          <img src='https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256' alt="React logo" className="skill-image" />
          <span>React</span>
        </li>
        <li className="skill-item">
          <img src='https://th.bing.com/th/id/OIP.sBEtb5XZ4bTUvOlUyr1LIgHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="CSS logo" className="skill-image" />
          <span>CSS</span>
        </li>
        <li className="skill-item">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6935wo8bLZh5FeafJEffqWKDOpNpx6UE5bg&s' alt="HTML logo" className="skill-image" />
          <span>HTML</span>
          </li>
          <li className="skill-item">
          <img src='https://th.bing.com/th?id=OIP.hED79iPpQEcVg4R7BJs3SAHaDt&w=349&h=174&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' alt="Git & GitHub logo" className="skill-image" />
          <span>Git & GitHub</span>
          </li>
          <li className="skill-item">
          <img src='https://th.bing.com/th?id=OIP.lzQGCXGFMU_awTDfrYK_GQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' alt="Problem Solving logo" className="skill-image" />
          <span>Problem Solving</span>
        </li>
      </ul> 
       </section> 
    </div> 



    <section id="resume" className="home-resume">
         <div id=''>
        <h2>Resume</h2>
        </div>
        <div id= "diya" className="resume-summary">
          <h3>Objectives</h3>
          <p>Understand how to create and structure web pages using HTML tags. 
            Be able to design and style web pages with CSS to make them look appealing.
            Write simple JavaScript code to make web pages interactive and dynamic.
            Learn to use tools like text editors, browsers.
            Learn to find and fix errors in HTML, CSS, and JavaScript code.</p>
        </div>
        <div className="resume-experience">
          <h3>Project Name: MY PORTFOLIO</h3>
          <div className="job">
            <h4>Project Description :</h4>
            <h4>Features:</h4>

 <p>Home Page: A welcoming page with an introduction and a brief overview of what I do.</p>
 <p>About Me: Information about who I am and my career.</p>
 <p>Projects: A gallery of my work with details and links to see more.</p>
 <p>Resume:A downloadable resume with my professional experience and education.</p>
 <p>Contact Form: A simple way for people to reach out to me.</p>
 <p>Responsive Design:* The site works well on both computers and mobile devices.</p>

<h4>Technologies Used:</h4>

<p>HTML: For creating the website’s structure.</p>
<p>CSS: For styling the website to look good.</p>
<p>React.js: For making the website interactive and easy to use.</p>

            
          </div>
          {/* Add more job sections as needed */}
        </div>
        <div className="resume-education">
          <h3>Education</h3>
          <div className="education-item">
            <h4>College Name:</h4>
            <p>SAL INSTITUTE OF TECHNOLOGY & ENGINEERING RESEARCH</p>
            <h4>Course Name:</h4>
            <p>Computer Engineering</p>
            <h4>Year:</h4>
            <p>2021-2025</p>
            <h4>LinkedIn :</h4>
            <a href='https://www.linkedin.com/in/neel-joshi-1b35422b4'>https://www.linkedin.com/in/neel-joshi-53a924239/</a>
          </div>
          {/* Add more education sections as needed */}
        </div>
        <div className="resume-skills">
          <h1>Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PROBLEM SOLVING</li>

            {/* Add more skills as needed */}
          </ul>
        </div>
          
        <div className="resume-projects">
          <h2>Technical Area Of Interest</h2>
          <div className="project">
          <p>Front-End Development: I enjoy creating websites and web pages using HTML, CSS, and
          JavaScript.</p>
          <p>Responsive Design:I’m interested in making websites look good on all devices, like phones
          and tablets.</p>
          <p>JavaScript Frameworks: I want to learn and use tools like React to build interactive websites.</p>
          <p>Web Performance: I care about making websites load quickly and work smoothly.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>





  {/* PAGE 4 */}
      <section id="services">
  <div id='badal' class="container">
    <h2>Services</h2>
    <div class="service">
      <h4>Web Development</h4>
      <p> We specialize in creating responsive , user-friendly websites that are tailored to meet your business needs. From e-commerce platforms to personal blogs, we ensure your site is fast, secure, and scalable.</p>
      <img src='https://th.bing.com/th/id/OIP.2OWHgfFXf3kzKRw37a4gfgHaHu?w=175&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'height={140}></img>
    </div>
    <div class="service">
      <h4>Graphic Design </h4>
      <p> We offer logo design, branding , marketing materials , and more . Our designs are not only visually appealing but also strategically crafted to communicate your brand’s message effectively.</p>
      <img src='https://th.bing.com/th/id/OIP.d_4eile44DMkYjLEy17MyAHaMW?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' height={150}></img>
    </div>
    <div class="service">
      <h4>Digital Marketing</h4>
       <p>  We provide SEO , PPC advertising , social media management , and content marketing to help you reach to your target audience and achieve your business goals.</p>
       <img src='data:image/jpeg;base64,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'height={150}></img>
  </div>
  <div class="service">
      <h4>SEO Optimization</h4>
       <p> Improving website visibility on search engines through on-page and off-page SEO techniques.</p>
       </div>
       </div>
</section>    
            {/* PAGE 5 */}

      <div id='footer' className='d-flex j-c-between'>
        <div >
          <h1>Contact Us.</h1>
          <h3>Drop a call or mail us if you want to <br></br> work together !</h3>
          <h2>Phone No :</h2>
          <p>9638380450</p>

          <h2> Email:</h2>
          <p>joshineel399@gmail.com</p>
          <p>abcxyz2024@gmail.com</p>


          
           <h1>LinkedIn:</h1>
           <a href='https://www.linkedin.com/in/neel-joshi-53a924239/'>https://www.linkedin.com/in/neel-joshi-53a924239/</a>
           
        </div>
        <div>
          <img src='https://th.bing.com/th/id/OIP.eogV6HntMBgYrcqnm5Cu1wHaE3?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'height={280}></img>
        </div>
       </div> 

        {/* footer */}

        <footer className="footer">
      <p>Thanks for visiting our website .</p>
    </footer>

    </div>
  )
}

export default My