import React from 'react'
import Navbar from './Navbar';
import CompData2 from './CompData2';
import C1 from './C1';
import C2 from './C2';
import p2 from '../img/p2/p2-2.png'
import p3 from '../img/p2/p2-3.png'
import p4 from '../img/p2/p2-4.png'
import p5 from '../img/p2/p2-5.png'
import p6 from '../img/p2/p2-6.png'


function Project2() {
  return (
    <div className="project_main">
      <div className="pro1-cover parallex pt-3">
        <Navbar />
      </div>
      <C1 details = {CompData2} />
       <div className="pro-0">
          <div className="container py-5">
            <div className="row justify-content-center">
              <img className='w-75' src={p2} alt="" />
            </div>
           </div>
       </div> 
          <div className="pro1" id="problem">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col d-flex justify-content-around py-5">
                <div className="col-5">
                <C2
                heading="Problem"
                title="Lack of insurance information"
                subtitle1="Our Users want to Invest into non-risky best insurance and FD’s investment plans. They want all details about the plans like Premium term, Tenure, extra benefits and so many other important information about the plan before investing money.They also want to pay their premium online and after reviewing all the details about plans they want to make purchase online."
                />
                </div>
                <div className="col-5">
                <C2
                heading="Solution"
                title="A Customized Toolkit"
                subtitle1="An interactive application that acts as a one-stop shop for mental health needs. The application should act as a support system and provide information on exercises, tools, coping mechanisms in an engaging manner rather than taking place of a therapist."
                />
                </div>
              </div>   
            </div>
          </div>
          </div>
          <div className="pro2">
            <div className="container">  
              <div className="row justify-content-center">  
                <div className="col-8">
                  <C2
                  title="Research"
                  subtitle1="67% Indian Households still buy insurance via normal Agents by Mint Report.‍Even Today’s time almost 95% of online sales of investment products such as Life Insurance, Health Insurance, Ulip plans assisted by call center executives.India Had about 328 million Life Insurance Policies in 2017."
                  />
                  <C2 
                  heading="COMPETITIVE ANALYSIS"
                  title="Exploring Solutions and Opportunities"
                  subtitle1="Now that We’ve defined the problem,and must understand what products already exist in the market, what they do better, and how I can improve upon them. I researched and reviewed a few of the more popular products like PolicyBazar, Indmoney conducting a competitor analysis to see where we might fit in. I made the findings into S.W.C.D.U.X.O profiles, which gave me a better understanding of the overall landscape and where our app would be most useful for users.Find S.W.C.D.U.X.O PROFILES"
                  img={p2}
                />
                  <div className="research" id='research'>
                        <C2
                        heading="User Research" 
                        title="Quantitative Surveys and Qualitative Interviews Defined my Users and Identified User Needs and Struggles."
                        subtitle1="Before getting started thinking about users I already had an idea of I need to make the interface very user friendly and With a focus on creating the best experience for our users, I set forth to understand who they are, what their motivations might be, what successes and frustrations they have had, and ultimately the why. Why would they use Investogram while researching and planning to purchase Insurance Plans?"
                        subtitle2="I started my journey by conducting 5 in-person interviews and received 18 responses to a survey about what they look for while purchasing insurance plans online. This qualitative and quantitative data were then sorted using an affinity map to look for patterns, frustrations, wants and needs, and more. Once I was able to organize the data and take a step back, I then needed to personalize the information. With our users in mind, 3 distinct personas were born to best guide our future decisions."
                         />
                         <C2
                         title="What I hoped to learn"
                         subtitle1="Multiple participants acknowledged generic responses that made the app feel less user-friendly as it often fell into looped responses."
                         />
                          <div className="col-12">
                                <ol>
                                  <li>Introduce a companion</li>
                                  <li>Deliver personalized responses</li>
                                  <li>Find tools specific to the user</li>
                                  <li>Allow for a flexible space </li>
                                  <li>Provide an inclusive experience</li>
                                </ol>
                            </div>
                      </div>
                   <C2
                      title="2. Surveys"
                      subtitle1="With some qualitative data now collected, I wanted some quantitative as well, which allowed me to review responses from a broader audience. I created a 5-minute survey using a Google Form posted to my Facebook network and 2 UX/UI groups. In total, 24 participants answered 14 questions giving me valuable information and insights"
                      />
                      <div className="col-12">
                        <ol>
                            <li>Introduce a companion</li>
                            <li>Deliver personalized responses</li>
                            <li>Find tools specific to the user</li>
                            <li>Allow for a flexible space </li>
                            <li>Provide an inclusive experience</li>
                         </ol>
                      </div>
                      <C2
                      title="3. Key Findings"
                      />
                      <div className="col-12">
                        <ol>
                            <li>A online insurance was a new concept for most of these participants.</li>
                            <li>The correct details is the biggest factor in deciding on a what insurance to purchase.</li>
                            <li>Reading verified details would be helpful.</li>
                            <li>A robust sorting feature to find customs would be nice.</li>
                            <li>64% won’t trust on market insurance agents</li>
                         </ol>
                      </div>
                      <C2
                      title=""
                      subtitle1="Now that I know our audience I need to empathize with them while they begin their Insurance experience. I followed along on the journey discovering the frustrations and successes. I simplified their journey into stages that allowed me to understand what their pain points might be and how I can make this a more enjoyable experience."
                      img={p3}
                      />
                       <C2
                      title="User Personas"
                      subtitle1="Now that I know our audience I need to empathize with them while they begin their Insurance experience. I followed along on the journey discovering the frustrations and successes. I simplified their journey into stages that allowed me to understand what their pain points might be and how I can make this a more enjoyable experience."
                      />
                    </div>
                 </div>
              </div>
          </div>            
            <div className="pro3">
                <div className="container">
                  <img src={p4} alt="" srcset="" />
                  </div>
            </div>
            <div className="pro4">
                <div className="container">  
                    <div className="row justify-content-center">  
                        <div className="col-8">
                          <C2
                          title="Task Analysis and Userflows"
                          subtitle1="I know my audience and have defined our personas. I’ve been with them while they ride a roller coaster of emotions. Now I need to optimize the flows so they can accomplish their goals as efficiently as possible. With our personas goals in mind, I created three flows breaking down each action into a step. With this laid out, I optimized the task into an intuitive, streamlined process to take our protagonists from A-Z as quickly and painlessly as possible."
                          />
                        </div>
                      </div>
                    </div>
            </div>
            <div className="pro5">
                <div className="container">
                  <img src={p5} alt="" srcset="" />
                  </div>
            </div>
            <div className="pro6">
                <div className="container">  
                    <div className="row justify-content-center">  
                        <div className="col-8">
                          <C2
                          heading="Foundation of Design"
                          subtitle1="I reviewed the data from my user research and now have a better idea of what our users need and want. I used my persona's flows to create a site map that I iterated upon when new information or testing warranted changes. Once I had the cement poured, I started building out my app; This happened in several stages, starting with paper sketches and then creating mid-fidelity wireframes that I could use for testing before getting too far into the project."
                          />
                        </div>
                      </div>
                    </div>
            </div>
            <div className="pro7">
                <div className="container">
                  <img src={p6} alt="" srcset="" />
                  </div>
            </div>
             <div className="pro6">
                <div className="container">  
                    <div className="row justify-content-center">  
                        <div className="col-8">
                          <C2
                          title="Creating Wireframes"
                          subtitle1="Using the crazy eights method, I sketched a large number of paper sketches. I then choose the options that would best fit the needs of my users. I took these sketches and created mid-fidelity versions in Figma that I would later be able to use to create a prototype during my usability testing."
                          />
                        </div>
                      </div>
                    </div>
            </div>
            <div className="pro7">
                <div className="container">
                  <img src={p6} alt="" srcset="" />
                  </div>
            </div>
          </div>
  )
}

export default Project2;