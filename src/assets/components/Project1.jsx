import React from 'react'
import C1 from './C1';
import CompData1 from './CompData1';
import C2 from './C2';
import Navbar from './Navbar';
import p1 from '../img/p1/1.png'
import p2 from '../img/p1/2.png'
import p3 from '../img/p1/3.png'
import p4 from '../img/p1/4.png'
import p5 from '../img/p1/5.png'
import p6 from '../img/p1/6.png'
import f1 from '../img/p1/f1.png'
import f2 from '../img/p1/f2.png'
import f3 from '../img/p1/f3.png'
import f4 from '../img/p1/f4.jpg'
import f5 from '../img/p1/f5.png'
import f6 from '../img/p1/f6.png'
import f7 from '../img/p1/f7.png'
import f8 from '../img/p1/f8.png'
import f9 from '../img/p1/f9.png'
import f10 from '../img/p1/Onboadring.gif'
import f11 from '../img/p1/f11.png'
import f12 from '../img/p1/f12.gif'
import f13 from '../img/p1/f13.png'
import f14 from '../img/p1/f14.gif'
import f15 from '../img/p1/f15.png'
import f16 from '../img/p1/f16.png'
import f17 from '../img/p1/f17.gif'
import f18 from '../img/p1/f18.png'


function Project1() {
  return (
    <div className="project_main mt-4">
      <Navbar />
      <C1 details = {CompData1} />
       <div className="pro14">
          <div className="container py-5">
              <img src={p1} alt="" srcset="" />
           </div>
       </div> 
      <div className="pro1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col d-flex justify-content-around py-5">
                <div className="col-5">
                <C2
                heading="Problem"
                title="Lack of Mental Health Resource"
                subtitle1="There is little support for mental health in an age where technology has allowed people to reach out quickly. How can we use utilize technology to create a remote platform that alleviates mental health issues effectively?"
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
      <div className="demo">
        <div className="container">  
          <div className="row justify-content-center">  
            <div className="col-8">
                <C2 
                  heading="COMPETITIVE ANALYSIS"
                  title="Exploring Solutions and Opportunities"
                  subtitle1="During COVID-19, the need for mental health applications became urgent. I explored some existing products to find solutions to learn what made them so successful along with any missed opportunities presented."
                />
                <C2 
                  title="Headspace"
                  subtitle1="Headspace is a startup that strives to make meditation open to everyone. The mobile app is enhanced by interactive audio sessions and aims to educate you about the fundamental aspects of meditation."
                  img={p2}
                />
                      <div className="row">
                        <div className="col">
                          <h4 className='fw-bold py-2 head-b'>Learnings</h4>
                          <p><b>For beginners -</b> approachable and efficient introduction to mindfulness and meditation.</p>
                          <p><b>Notification -</b> the app will provide you with daily reminders to maintain user retention.</p>
                          <p><b>Progression -</b> you can track your growth through the stats feature in the application.</p>
                      </div>
                      <div className="col">
                        <h4 className='fw-bold py-2 head-b'>Opportunities</h4>
                        <p><b>For everyone -</b> create a unique experience for users of all backgrounds</p>
                        <p><b>Reward system -</b> provide a non-invasive way to nudge the users.</p>
                      </div>
                      <C2
                          title="Mindshift"
                          subtitle1="MindShift uses scientifically proven strategies based on Cognitive Behavioural Therapy (CBT) to help you learn to relax and be mindful, develop more effective ways of thinking, and use active steps to take charge of your anxiety."
                          img={p3}
                      />
                       <div className="col">
                          <h4 className='fw-bold py-2 head-b'>Learnings</h4>
                          <p><b>Progression -</b> you can track your growth through the stats feature in the application.</p>
                          <p><b>Limited -</b> the app focuses on anxiety situations and has limited content.</p>
                          <p><b>Scientific -</b> uses evidence-based techniques developed by experts.</p>
                      </div>
                      <div className="col">
                        <h4 className='fw-bold py-2 head-b'>Opportunities</h4>
                        <p><b>Visualization -</b> create an exciting way to visualize the user’s progression.</p>
                        <p><b>Customized -</b> allow users to choose which content they want to be shown.</p>
                      </div>
                      <C2
                      heading="User Research" 
                      title="Quantitative Surveys and Qualitative Interviews Defined my Users and Identified User Needs and Struggles."
                      subtitle1="The surveys were completed via a google form. There were a total of 127 participants, mostly consisting of teenagers and college students. The interviews were completed in 30-minute intervals and included two students, one young adult, one parent, one social worker."
                      />
                         <div className="row">
                           <div className="col-6">
                              <h4 className='head-b'>1.Social Struggle</h4>
                              <p>Participants noticed that they have been more reclusive during the pandemic. Many are losing motivation and others are struggling to maintain a social life.</p>
                            </div>
                            <div className="col-6">
                              <h4 className='head-b'>2. Robotic Responses</h4>
                              <p>Multiple participants acknowledged generic responses that made the app feel less user-friendly as it often fell into looped responses.</p>
                            </div>
                            <div className="col-6">
                              <h4 className='head-b'>3. Choice Overload</h4>
                              <p>Users did not know which tools to use or how to answer thought-provoking questions. According to Hick's Law, "The time it takes to make a decision increases with the number and complexity of choices."</p>
                            </div>
                            <div className="col-6">
                              <h4 className='head-b'>1.4. Accessibility & Inclusivity</h4>
                              <p>Participants complained of complicated interfaces that were difficult to navigate. There was also little to no support for accessibility. </p>
                            </div>
                        </div>
                    </div>
              </div>
                </div>
              </div>
      </div>
      <div className="pro3 pro1 py-5">
        <div className="container">
           <div className="row">
            <h4 className='head-b pt-5'>Project Goals</h4>
            <h4><b>What Do I Want to Accomplish With Projects?</b></h4>
            <div className="col-4 my-4">
              <img className='pro3-img' src={p4} alt="" srcset="" />
              <h4 className='head-b'>Inclusivity</h4>
              <p>I want to create an experience that is transparent to all users. Therefore, the app will Incorporate standards that allow all users to use the app without hindering usability. </p>
            </div>
            <div className="col-4 my-4">
              <img className='pro3-img' src={p5} alt="" srcset="" />
              <h4 className='head-b'>Convenience</h4>
              <p>Due to my wide range in the audience, I want users to access the application on multiple devices wherever and whenever. Therefore, VIRA is flexible to your space.</p>
            </div>
            <div className="col-4 my-4">
              <img className='pro3-img' src={p6} alt="" srcset="" />
              <h4 className='head-b'>Companionship</h4>
              <p>83% of interviewees found themselves becoming more reclusive. Therefore, I want to create an experience that will empathize with human emotions through user-friendly visuals and interactions.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pro4 my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-3">
              <h3 className='fw-light lh-base'>So how do we allow users to have an engaging experience in caring for their mental health?</h3>
            </div>
            <div className="col-4">
              <ol>
                <li>Introduce a companion</li>
                <li>Deliver personalized responses</li>
                <li>Find tools specific to the user</li>
                <li>Allow for a flexible space </li>
                <li>Provide an inclusive experience</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="pro5 my-5">
        <div className="container">
          <div className="row justify-content-center">
           <div className="col-8 d-flex justify-content-around py-5">
            <C2 
            heading="USER PERSONAS"
            title="Utilizing my Research, I Created Three User Personas Based on the Idea of the Teenager, the Young Adult, and the Mid-life adult."
            subtitle1="These also defined my target user groups. Many existing solutions are tailored more to teenagers and young adults, so I wanted to include mid-adults who have their struggles."
            />
          </div>
         </div>
        </div>
      </div>
      <div className="pro6">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={f1} alt="" srcset="" />
            </div>
            <div className="col">
              <img src={f2} alt="" srcset="" />
            </div>
            <div className="col">
              <img src={f3} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pro7 my-5">
        <div className="container">
          <div className="row justify-content-center">
           <div className="col-8 py-5">
            <C2 
            heading="BRINGING THE SOLUTION TO LIFE"
            title="An Interactive Application that Identifies Mental Health Issues and Provides a Custom Toolkit of Exercises and Coping Mechanisms."
            subtitle1="My solution focuses on creating a customized experience for every user. I am providing an experience that works well on a larger screen if that works better specifically for the user. For the younger generation, a similar experience would be present on their smartphones and smartwatches. This will allow users to access the application from the most convenient device to them at any given time."
            />
            <C2 
            heading="RAPID PROTOYPING"
            title="Using Figma, I Created Several Iterations of my Product."
            subtitle1="My first version was a chatbot-oriented approach. It however failed to provide the friendliness that I wanted to incorporate. In version 2, I kept the option for a chatbot but expanded to a voice-forward experience. This still felt clunky and In my third version, I took it out and developed my virtual assistant. View my final prototype in detail in my process deck."
            img={f4}
            />
            <C2 
            heading="VISUAL DESIGN"
            title="I focused on creating a friendly emotional connection."
            subtitle1="The Initial visual explorations were inspired by designs and colors from dribble and Pinterest. Initially, I was focused on creating an aesthetic design but the following explorations did not communicate the simplicity of the application I needed to make sure to not overdesign. After several more iterations, I decided to go with a royal blue color palette to best evoke my emotional connection. The color represents compassion and support and creates a calm and soothing emotional connection while the teal highlights visual elements."
            img={f5}
            />
            <C2 
            heading="Type and Color"
            subtitle1="I decided to go with a purple-blue color palette to best evoke my emotional connection. The color represents compassion and support and creates a calm and soothing emotional connection while the teal highlights visual elements."
            subtitle2="Poppins has monolinear and geometric letterforms making it great for headlines. It has a modern, playful, but professional feel."
            subtitle3="Nunito is a rounded terminal sans-serif font. Its thin but uniform strokes make it work well for body type. It plays off the Poppins due to its playful nature and evokes that friendliness I wanted in my design."
            />
            <div className="row">
              <div className="col">
              <img className='w-80' src={f6} alt="" srcset="" />
              </div>
              <div className="col">
                <img className='w-80' src={f7} alt="" srcset="" />
              </div>
            </div>
            <C2 
            heading="THE USER EXPERIENCE"
            title="A Unique Perspective"
            subtitle1="To get deeper into the ability of the application, I wanted to highlight an extreme user and go through his user flows."
            subtitle2="I’m highlighting Warren to showcase the features you would otherwise see. Warren has a rather interesting use case due to his impaired vision and his need to multitask. In this instance, Warren will choose to connect to his TV to satisfy both his needs."
            />
            <C2 
            title="User Journey"
            subtitle1="This Journey tracks Warren's usage of the application along with his emotions. The application adapts to his feelings to allow for a safe and comfortable space to share his thoughts."
            img={f8}
            />
           </div>
          </div>
        </div>
      </div>
      <div className="pro8 pro1 my-5">
        <div className="container">
          <div className="row justify-content-center">
           <div className="col-8 d-flex py-5">
              <div className="col">
                  <C2
                  heading="INCORPERATING MY GOALS"
                  title="To ensure my goals were met, I incorporated them into the different depths of my solution" />
                  <p><span className='fw-bold'>First level -</span>An inclusive introduction that familiarizes users with the environment.</p>
                  <p><span className='fw-bold'>Second level -</span>a divergence of the original path (connection to another device) that allows for convenience.</p>
                  <p><span className='fw-bold'>Third level -</span>a selection that is made by the user that customizes and strengthens companionship with VIRA.</p>
                  </div>
                  <div className="col">
                    <img src={f9} alt="" srcset="" />
                  </div>
                </div>
            </div>
        </div>
      </div> 
      <div className="pro9 my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 d-flex justify-content-around py-5">
                <div className="col-6">
                  <C2
                  heading="FIRST LEVEL"
                  title="🧭 Discovery"
                  subtitle1="The onboarding experience exposes users to critical features. Through the use of custom Illustrations, a rich and entertaining experience quickly showcase the app's features."
                  subtitle2="During the process, the users can also choose to pair any nearby devices to quickly access later." />
                  </div>
                  <div className="col-3">
                    <img src={f10} alt="" srcset="" />
                  </div>
              </div>
            </div>
          </div>
      </div> 
      <div className="pro10 pro1">
        <div className="container py-5">
              <img src={f11} alt="" srcset="" />
           </div>
       </div>
       <div className="pro11 my-5">
        <div className="container">
          <div className="row justify-content-center">
           <div className="col-10 d-flex justify-content-around align-items-center py-5">
                  <div className="col-3">
                    <img src={f12} alt="" srcset="" />
                  </div>
                  <div className="col-6">
                    <C2
                    heading="FIRST LEVEL"
                    title="🧘🏻 Intake Session"
                    subtitle1="A brief questionnaire helps VIRA understand the user's mental and emotional distress and informs them of any potential diagnosis. This, in turn, will help customize their toolkit." />
                  </div>
            </div>
          </div>
        </div>
       </div>
       <div className="pro12 pro1">
          <div className="container py-5">
              <img src={f13} alt="" srcset="" />
           </div>
       </div> 
       <div className="pro13 my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 d-flex justify-content-around py-5">
                <div className="col-6">
                  <C2
                  heading="SECOND LEVEL"
                  title="💪🏼 Flexibility"
                  subtitle1="VIRA is a multi-platform application flexible to your space."
                  subtitle2="VIRA can switch over to other devices if need be. This is helpful to those who need to multitask or the visually impaired who need a larger screen, just like Frank."
                  subtitle3="The initial onboarding process should make it, so existing devices connect instantaneously since it was previously paired." />
                  </div>
                  <div className="col-3">
                    <img src={f14} alt="" srcset="" />
                  </div>
              </div>
            </div>
          </div>
      </div> 
      <div className="pro14 pro1">
          <div className="container py-5">
              <img src={f15} alt="" srcset="" />
           </div>
       </div> 
       <div className="pro15 my-5">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-8">
                   <C2
                      heading="VOICE EXPERIENCE" 
                      title="UX Heuristics of a Voice-Forward Experience"
                      />
                      <div className="col d-flex justify-content-around">
                           <div className="col-6">
                              <h6 className='fw-bold'>1. Surface Transparent Feedback</h6>
                              <p>Consistent feedback creates a fluid, engaging, and responsive human experience. This includes surfacing processing states.</p>
                              <h6 className='fw-bold'>2. Alternative Choices</h6>
                              <p>We can leverage AI to narrow the number of choices your users need to make or eliminate the need to choose altogether.</p>
                              <h6 className='fw-bold'>3. Personalization</h6>
                              <p>We could harness AI to select the best IxD experience given what we know about the customer and how he or she is using the app.</p>
                            </div>
                            <div className="col-6">
                              <img src={f16} alt="" srcset="" />
                            </div>
                      </div>
                </div>
             </div>
          </div>
        </div>
        <div className="pro16 my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 d-flex justify-content-between">
                  <div className="col-5">
                     <C2
                      heading="THIRD LEVEL"
                      title="😬 Mood Tracking"
                      subtitle1="One of the tools Warren uses to cope with his mental distress. Being more conscientious of his mood, Warren can better control his life's choices, take educated health decisions, mitigate or eliminate adverse mood causes, and achieve a higher quality of life." />
                  </div>
                  <div className="col-6">
                     <img className='pt-5' src={f17} alt="" srcset="" />
                  </div>
               </div>
             </div>
            </div>  
          </div>
        <div className="pro17 my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 d-flex justify-content-between">
                  <div className="col-6">
                     <img className='pt-5' src={f18} alt="" srcset="" />
                  </div>
                   <div className="col-5">
                     <C2
                      heading="THIRD INCLUSIVITY"
                      title="Providing an experience for all"
                      subtitle1="Open captions provide an experience for the deaf and hard of hearing without hindering a hearing person's experience. Voice provides an experience for the visually impaired."
                      subtitle2="All Colors have passed the Web Content Accessibility Guidelines, with at least AA providing enough contrast for all."
                      subtitle3="I've designed the larger screen to meet users (in this case, Frank) where they are and where they want to be. As a multi-platform application, it provides a unique experience for every user." />
                  </div>
                </div>
              </div>  
            </div> 
        </div>
        <div className="pro18 my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 d-flex justify-content-between">
                  <div className="col-5">
                    <C2
                      heading="TAKEAWAYS"
                      title="Playing the angles"
                      subtitle1="As a practicing designer, I don't know everything. It is important to bring in users and experts from different perspectives to create a well-rounded solution."
                      subtitle2="Although it is important to have many ideas, it is just as important to know when to let go during the project's duration. There is no one right solution; it is important to be open to many ideas and opportunities and not fear making mistakes."/>
                  </div>
                   <div className="col-6">
                     <C2
                      title="Customizability"
                      subtitle1="VIRA provides an inclusive experience, but what if it can be further customized instead of generalized? For example, how would it look different if it was a teenager using the application? In future iterations, I would incorporate a way to customize further the user experience based on the user's needs and wants."
                      subtitle2="Using methods such as usability testing will help understand users' behaviors, identify additional issues, and uncover even more opportunities to improve the product while learning about a more extensive user base."/>
                  </div>
                </div>
              </div>  
            </div> 
        </div>
        <h1 className='text-center fw-bold my-5 py-5'>Thank You</h1>
      </div>
  )
}

export default Project1;