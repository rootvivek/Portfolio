import React from 'react'
import Comp from './Comp';
import CompData1 from './CompData1';
import Navbar from './Navbar';
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

function Project1() {
  return (
    <div className="project_main mt-4">
      <Navbar />
      <Comp details = {CompData1} />
      <div className="pro1 py-5">
        <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-4">
                <h4 className='head-b'>Problem</h4>
                <h5 className='fw-bold'>Lack of Mental Health Resource</h5>
                <p className='pro1-st'>There is little support for mental health in an age where technology has allowed people to reach out quickly. How can we use utilize technology to create a remote platform that alleviates mental health issues effectively?</p>
              </div>
              <div className="col-5">
                <h4 className='head-b'>Solution</h4>
                <h5 className='fw-bold'>A Customized Toolkit</h5>
                <p className='pro1-st'>An interactive application that acts as a one-stop shop for mental health needs. The application should act as a support system and provide information on exercises, tools, coping mechanisms in an engaging manner rather than taking place of a therapist.</p>
              </div>
            </div>
          </div>
      </div>
      <div className="pro2 my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
                  <h4 className='head-b'>COMPETITIVE ANALYSIS</h4>
                  <h4 className='fw-bold py-1'>Exploring Solutions and Opportunities</h4>
                  <p className='pro1-st pb-5'>During COVID-19, the need for mental health applications became urgent. I explored some existing products to find solutions to learn what made them so successful along with any missed opportunities presented.</p>
                  <div className="pro-v1 d-flex">
                    <div className="row">
                      <h4 className='fw-bold'>Headspace</h4>
                      <p className='pro1-st'>Headspace is a startup that strives to make meditation open to everyone. The mobile app is enhanced by interactive audio sessions and aims to educate you about the fundamental aspects of meditation.</p>
                      <img className='my-5 w-100' src={p2} alt="" />
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
                    </div>
                  </div>
                  <div className="pro-v2 d-flex">
                    <div className="row">
                      <h4 className='fw-bold mt-5'>Mindshift</h4>
                      <p className='pro1-st'>MindShift uses scientifically proven strategies based on Cognitive Behavioural Therapy (CBT) to help you learn to relax and be mindful, develop more effective ways of thinking, and use active steps to take charge of your anxiety.</p>
                      <img className='my-5 w-100' src={p3} alt="" />
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
                    </div>
                  </div>
                  <div className="pro-v3 my-5">
                    <h4 className='head-b'>User Research</h4>
                    <h4 className='fw-bold py-1'>Quantitative Surveys and Qualitative Interviews Defined my Users and Identified User Needs and Struggles.</h4>
                      <p className='pro1-st py-2'>The surveys were completed via a google form. There were a total of 127 participants, mostly consisting of teenagers and college students. The interviews were completed in 30-minute intervals and included two students, one young adult, one parent, one social worker.</p>
                      <h4 className='py-3'><b>What I Learned...</b></h4>
                      <div className="pro6 py-3">
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
        <div className="row py-5 d-flex justify-content-center">
           <div className="col-3">
            <h3 className='fw-normal lh-base'>So how do we allow users to have an engaging experience in caring for their mental health?</h3>
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
      <div className="pro5 my-5">
        <div className="row justify-content-center">
           <div className="col-7">
          <h4 className='head-b'>USER PERSONAS</h4>
          <h4 className='fw-bold'>Utilizing my Research, I Created Three User Personas Based on the Idea of the Teenager, the Young Adult, and the Mid-life adult.</h4>
          <p>These also defined my target user groups. Many existing solutions are tailored more to teenagers and young adults, so I wanted to include mid-adults who have their struggles.</p>
          </div>
        </div>
      </div>
      <div className="pro7">
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
      <div className="pro8 pro1 my-5">
        <div className="row justify-content-center">
           <div className="col-7 py-5">
          <h4 className='head-b'>BRINGING THE SOLUTION TO LIFE</h4>
          <h4 className='fw-bold'>An Interactive Application that Identifies Mental Health Issues and Provides a Custom Toolkit of Exercises and Coping Mechanisms.</h4>
          <p>My solution focuses on creating a customized experience for every user. I am providing an experience that works well on a larger screen if that works better specifically for the user. For the younger generation, a similar experience would be present on their smartphones and smartwatches. This will allow users to access the application from the most convenient device to them at any given time.</p>
          </div>
        </div>
      </div>
      <div className="pro9 my-5">
        <div className="row justify-content-center">
           <div className="col-7 py-5">
            <h4 className='head-b'>RAPID PROTOYPING</h4>
            <h4 className='fw-bold'>Using Figma, I Created Several Iterations of my Product.</h4>
            <p>My first version was a chatbot-oriented approach. It however failed to provide the friendliness that I wanted to incorporate. In version 2, I kept the option for a chatbot but expanded to a voice-forward experience. This still felt clunky and In my third version, I took it out and developed my virtual assistant. View my final prototype in detail in my process deck.</p>
            <img src={f4} alt="" />
          </div>
        </div>
      </div>
      <div className="pro10 my-5">
        <div className="row justify-content-center">
           <div className="col-7">
            <h4 className='head-b'>VISUAL DESIGN</h4>
            <h4 className='fw-bold'>I focused on creating a friendly emotional connection.</h4>
            <p>The Initial visual explorations were inspired by designs and colors from dribble and Pinterest. Initially, I was focused on creating an aesthetic design but the following explorations did not communicate the simplicity of the application I needed to make sure to not overdesign. After several more iterations, I decided to go with a royal blue color palette to best evoke my emotional connection. The color represents compassion and support and creates a calm and soothing emotional connection while the teal highlights visual elements.</p>
            <img src={f5} alt="" />
          </div>
        </div>
      </div>
      <div className="pro11 my-5">
        <div className="row d-flex justify-content-center">
           <div className="col-7">
            <h4 className='fw-bold'>Type and Color</h4>
            <p>I decided to go with a purple-blue color palette to best evoke my emotional connection. The color represents compassion and support and creates a calm and soothing emotional connection while the teal highlights visual elements.</p>
            <p>Poppins has monolinear and geometric letterforms making it great for headlines. It has a modern, playful, but professional feel.</p>
            <p>Nunito is a rounded terminal sans-serif font. Its thin but uniform strokes make it work well for body type. It plays off the Poppins due to its playful nature and evokes that friendliness I wanted in my design.</p>
            <div className="col-3">
                <img src={f6} alt="" srcset="" />
            </div>
            <div className="col-4">
                <img src={f6} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Project1;