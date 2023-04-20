import React from 'react'
import { useEffect } from 'react';
import C1 from './C1';
import CompData3 from './CompData3';
import C2 from './C2';
import Navbar from './Navbar';
import Footer from './Footer'

import p0 from '../img/p3/onboarding.png'
import p2 from '../img/p3/2.png'
import p3 from '../img/p3/3.png'
import p4 from '../img/p3/4.png'
import p5 from '../img/p3/5.png'
import p6 from '../img/p3/6.png'
import p7 from '../img/p3/7.png'
import p8 from '../img/p3/8.png'
import p9 from '../img/p3/9.png'
import p10 from '../img/p3/10.png'
import p11 from '../img/p3/11.png'
import p12 from '../img/p3/12.png'



function Project3() {
   useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className="project_main">
      <div className="pro3-cover parallex pt-3">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <C1 details = {CompData3} />
       <div className="pro-0">
          <div className="container py-5">
            <div className="row justify-content-center">
              <img className='w-100' src={p0} alt="" />
            </div>
           </div>
       </div> 
      <div className="pro3 pro1 py-5 text-center">
          <div className="container">
            <h4 className='py-3'><b>Process Part 1</b></h4>
            <h6>Brief, Research, Problem Statement, Goals and Solutions</h6>
          </div>
      </div>

      <div className="pro2">
        <div className="container">  
          <div className="row justify-content-center">  
            <div className="col-10">
                <C2 
                  // heading="The Problem"
                  title="The Problem"
                  subtitle1="As the professional workforce is growing fast into cities people are getting used to going out for dinner breakfast and lunch for lack of time. Restaurant owners want to create an experience better for the people so that the owner can increase the revenue and give the best service to the customer."
                />
                <C2 
                  heading="For Restaurant Owners"
                  subtitle1="As the technology is disrupting every industry with software tools people are now completely shifted to the internet. It’s hard sometimes to attract customer from outside to restaurants now people don’t only look for the best place to sit but also lot of other things they look before coming to restaurants like look before coming to restaurants like picture of place, What other says about the restaurants, about the timing and much more details they look for often before going out. It’s not easy to introduce all of the restaurant xperience at once without coming at place."
                  img={p2}
                />
                 <C2 
                  heading="For People(Customers)"
                  subtitle1="It’s so annoying and frustrating to find the best place nearby to dine or eat out. It really takes time to walk around the entire city or places then find a place to eat there, already It has taken enough time.Even after after finding the place to eat or to have dinner sometimes the experience comes unexpected and very worst eg. lack of food quality, service is not good, no good place to sit with family and friends and most importantly not finding a table at the right time.Sometimes it gets really critical when you’re hungry and asking people what is the best place to eat nearby or anywhere in the city."
                  subtitle2="Having proper information about the restaurants can help them to make their dining experience a lot better and memorable."
                  subtitle3="The basic idea was to create a link between restaurants owners and customers(people) for the betterment of both."
                  img={p2}
                />
                <div className="research" id='research'>
                        <C2
                        heading="User Research" 
                        title="The Indian Restaurant Industry"
                        subtitle1="1. India Foodservice market is forecasted to reach USD 95.75 billion by 2025, registering a CAGR of 10.3% during the forecast period."
                        subtitle2="2. Most restaurants in India and around the world work on slim 10%-15% EBITDA margins with hardly three weeks of cash flow."
                        subtitle3="3. One of the largest in the service sector, this industry contributes around 3% to the GDP of India and is its single largest employer with more than 73 lakhs people on its payrolls."
                        subtitle4="4. The size of India’s restaurant industry is estimated at Rs 4.2 lakh crore and organised restaurants account for 35 percent of the industry."
                        />
                        <C2 
                        heading="Goals"
                        subtitle1="To create a new method of checking the details and information of the restaurants which will help the customer to find all of their queries at one place. And also will surely help them choose whether restaurants are good or bad before going there."
                        subtitle2="To create a place where restaurant owners can put all of his experience out there on the internet so the finding could become simple and easy for customers."
                        />
                         <C2 
                        heading="The Idea"
                        subtitle1="Vegan is a mobile application for foodies to explore new places and check the timing availability of the table with their friends and family."
                        />
                  </div>
              </div>
           </div>
        </div>
      </div>
      <div className="pro3 pro1 py-5 text-center">
          <div className="container">
            <h4 className='py-3'><b>Process Part 2</b></h4>
            <h5>This section takes a clear deep dive into understanding the user by forming personas, user stories and articulating user journey and thus the Competitive Analysis.</h5>
          </div>
      </div>
      <div className="pro5 my-5" id="personas">
        <div className="container">
          <div className="row justify-content-center">
           <div className="col-8 justify-content-around py-5">
            <C2 
            heading="Figuring out the user"
            subtitle1="In order to create a better solution, I first needed to better understand the user and their problem. I used two tools, the User-Centered Design Canvas and the Customer Journey Map, to give me direction as I headed into user research. This clarified my once vague idea into one with potential features and user types."
            img={p3}
            />
            <C2
            title="Competitor"
            subtitle1="Now that I've defined the problem, it's the right time to move onwards and have a look at what the existing products are in the market of the same space. I researched and used a few of the most popular restaurant booking applications in the market to get a better understanding  of what strengths and weaknesses are. I quickly made into SWOT Profiles which really gave me a better understanding of the product and it’s user experience and design."
            img={p4}
            />
            <C2
            title="Surveys"
            subtitle1="As I did not have enough time for this project so I quickly surveyed 14 people on social media platforms. Majority of this population was 18–24, frequent social media users, and had full-time jobs. As I was interested in seeing what potential users of the app would want, I tried to send my survey to people who like to go out to eat and have an interest in food. True to this, 92% of them go out to eat at least once per week."
            subtitle2=" A younger population, these individuals were somewhat concerned with price (most of them rated their concern a 5 or 6 out of 7). This lined up with my interviewees, who said they try to eat cheap unless it was for a special occasion. I also learned that tracking and making lists of places they’ve been/ wanted to go wasn’t as important as I thought."
            />
          </div>
         </div>
        </div>
      </div>
      <div className="pro6">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={""} alt=""/>
            </div>
            <div className="col">
              <img src={""} alt=""/>
            </div>
            <div className="col">
              <img src={""} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="pro7 my-5" id="proccess">
        <div className="container">
          <div className="row justify-content-center">
           <div className="col-8 py-5">
            <C2 
            heading="Key Findings 1"
            title="Based on my depth interviews and survey responses here are some of my key findings:"
            subtitle1="The app should have an easy-to-use filtered search. A common problem was finding it difficult to search based on specific group dynamics and other desired features, such as an ability to take reservations. While platforms such as Zomato have filtered searches, they find it hard to use or unreliable. My survey results helped me identify price, location, food quality, cuisine types as important criteria."
            />
            <C2 
            heading="Key Finding 2"
            subtitle1="The design should allow for lots of photos. Two of three interviewees used Instagram as a tool to discover new restaurants. This allowed them to see pictures and see other’s opinions. While the survey results indicated that presentation wasn’t necessary for an enjoyable experience, they are often first drawn in by photos when searching up places to eat and expressed an interest in food photography."
            />
            <C2
            heading="Key Finding 3"
            subtitle1="Finding time is a huge problem for them. In the interviews, most interviewees mentioned that figuring out when to meet was a huge frustration for them. A few mentioned tools like polls or similar might be useful to navigate everyone’s busy schedules."
            />
            <C2
            heading="Key Finding 4"
            subtitle1="There should be a way to share plans. Most interviewees mentioned the use of group chats on applications like WhatsApp and Line to organize get-togethers. However, these group chats often become populated with side topics, leading to possible confusion among the group. One interviewee said, “often people will have restate plans over and over again for people who missed it like 300 messages earlier.” From this I knew the app would need a way to share plans with other people."
            />
            <C2
            heading="Key Finding 5"
            subtitle1="The app should have the ability to include multiple locations. Many interviewees enjoyed going for dessert, an activity, or some other location in addition to a meal. This is often because these interviewees have full-time jobs and are more available on the weekends, which leads them to plan full days of activities rather than just one meal. However, three mentioned their irritation at having to search each of these places individually and then piece together a plan that’s convenient and affordable for everyone."
            />
            <C2
            heading="Key Fiding 6"
            subtitle1="Maps are important for everyone. Whether they are directionally challenged or want to plan out a route for multiple locations, being able to visually see where they want to go and how to get there is important for every user. Interviewees who particularly enjoyed trying new places found maps especially important and used them both spontaneously, on-the-go and beforehand to plan."
            />
            <C2
            title="User Journey"
            subtitle1="Now that I know our audience I need to empathize with them while they begin their restaurant searching experience. I followed along on the journey discovering the frustrations and successes. I simplified their journey into stages that allowed me to understand what their pain points might be and how I can make this a more enjoyable experience."
            />
           </div>
          </div>
        </div>
      </div>
      <div className="pro6">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={p5} alt=""/>
            </div>
            <div className="col">
              <img src={p6} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="pro6">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={p7} alt=""/>
            </div>
            <div className="col">
              <img src={p8} alt=""/>
            </div>
          </div>
        </div>
      </div>
       <div className="pro3 pro1 py-5 my-5 text-center">
          <div className="container">
            <h4 className='py-3'><b>Process Part 3</b></h4>
            <h5>Feature categorization, Kano Analysis</h5>
          </div>
      </div>
      <div className="pro8 my-5">
        <div className="container">
          <div className="row justify-content-center">
           <div className="col-10 justify-content-center py-5">
                  <C2
                  title="Feature Categorization"
                  subtitle1="After interviewing people and brainstorming sessions, the features were categorized for the better understanding of the product and what does our user actually wants."
                  img={p9} 
                  />
                  <C2
                  heading="Kano Analysis"
                  subtitle1="After categorizing all the features that our user needed, I performed kano analysis to do the prioritization of features and short them into basic needs, satisfiers and delighters."
                  />
                  <div className="row">
                    <div className="col">
                      <img src={p10} alt=""/>
                    </div>
                    <div className="col">
                      <img src={p11} alt=""/>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div> 
      <div className="pro4 pro1 py-5 text-center">
          <div className="container">
            <h4 className='py-3'><b>Process Part 4</b></h4>
            <h5>Wireframing, Userflow, UI and Visual Design, Prototype</h5>
          </div>
      </div>
      <div className="pro9 my-5" id='solutions'>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 d-flex justify-content-around py-5">
                <div className="col-5">
                  <C2
                  title="App Flow 1"
                  subtitle1="The following flow was designed to help articulate how User would move out throughout the app and reach his goals."
                  subtitle2="You will notice upon reviewing the flow that there were some unnecessary steps that have since been crossed out to keep in line with the previously mentioned requirement etc."
                  subtitle3="Many of these steps required Users to opt in. Instead I went on with the approach/assumptions that Users wanted to be opted in to these things as they relevant towards his achieving goals." />
                  </div>
                  <div className="col-3">
                    <img src={""} alt=""/>
                  </div>
              </div>
            </div>
          </div>
      </div> 
      <div className="pro9 my-5" id='solutions'>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8 py-5 ">
                  <C2
                  heading="Sketches"
                  subtitle1="After understanding my users, their goals, and the features I wanted to include, I was ready to start designing my first sketches. I started with user flows and sketches on paper before generating a set of initial wireframes."
                  subtitle2="I tested my paper prototypes and wireframes with potential users. What I learned from my paper prototypes, is that I found a bottom-tab navigation to be “in the way” and “would rather see more of the screen”. "
                  />  
                   <div className="row">
                    <div className="col-6">
                      <img src={""} alt=""/>
                    </div>
                    <div className="col-6">
                      <img src={""} alt=""/>
                    </div>
                    <div className="col-6">
                      <img src={""} alt=""/>
                    </div>
                    <div className="col-6">
                      <img src={""} alt=""/>
                    </div>
                  </div>               
              </div>
            </div>
          </div>
      </div> 
      <div className="pro9 my-5" id='solutions'>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8 py-5 ">
                  <C2
                  heading="Wireframing"
                  title="Thinking back to Shruti's main goals."
                  subtitle1="Finding the best nearby restaurants "
                  subtitle2="Checking the details and timing about the restaurant."
                  subtitle3="Add to fav list for shortlisting - I designed some wireframes that focused on meeting these goals in this order."
                  />  
              </div>
            </div>
          </div>
      </div> 
      <div className="pro10 pro1">
        <div className="container py-5">
              <img src={p12} alt=""/>
           </div>
       </div>
       <div className="pro11 my-5">
          <div className="container">
            <div className="row justify-content-center">
               <div className="col-8 justify-content-center py-5">
                    <C2
                    heading="UI And Visual Design"
                    subtitle1="I wanted the feel of the app to be clean and fun, but not feel immature. With the aid of Sketch I built upon the mid-fidelity wireframes using a modern and vibrant color scheme. To balance the bright colors I used a good deal of white space, especially around the content so as to not distract from the overall goal, which is to enable our users to find restaurants and all its information."
                    subtitle2="Due to time constraints, I sourced the Illustrations from an open source site, undraw.co. And wasn’t able to focus on much depth UI details my primarily focus was build a interface to solve goals and needs. Using Illustrator I then edited the colors to match my scheme, adding and removing objects and making any other needed tweaks." />
                    <C2
                    title="Design Language"
                    subtitle1="I’ve used Material Design Guidelines throughout the entire UI design process. This creates consistency within the app and clearly defines our brand and perimeters. Due to time constraints I couldn’t show up the design system but I’ve followed every rules and principle of Material Design Guidelines."
                    />
              </div>
            </div>
          </div>
        </div>
       <div className="pro12 pro1">
          <div className="container py-5">
              <img src={""} alt=""/>
           </div>
       </div> 
      <div className="pro14 pro1">
          <div className="container py-5">
              <img src={""} alt=""/>
           </div>
       </div> 
        <div className="pro18 my-5" id='takeaways'>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8 justify-content-center">
                    <h6><b>Interactive Prototype</b></h6>
                    <p>To get sense for the flow and test experience, an interactive prototype was created of low fidelity wireframes.</p>
                    <p>The purpose of the prototype was to 
                    <a href="https://www.figma.com/proto/2UOw4AQhetEzaBal47Jvk6/Vegan-app-wireframe?node-id=7%3A494&scaling=scale-down" target="_blank" rel="noreferrer"><b> Link</b></a></p>
                </div>
              </div>  
            </div> 
        </div>
        <Footer />
      </div>
  )
}

export default Project3;