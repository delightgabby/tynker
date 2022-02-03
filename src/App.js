import "./App.css";
import logo from "./images/2.png";
import game from "./images/g.png";
import svg1 from "./images/6.png";
import svg2 from "./images/7.png";
import svg3 from "./images/8.png";
import pic2 from "./images/p1.png";
import pic1 from "./images/5.png";
import icon1 from "./images/a.png";
import icon2 from "./images/b.png";
import icon3 from "./images/c.jpeg";
import round1 from "./images/3a.png";
import round2 from "./images/3b.png";
import footer from "./images/ty1.png";
import big from "./images/big.png";
import map from "./images/map.png";
import icona from "./images/a1.png";
import iconb from "./images/a2.png";
import iconc from "./images/a3.png";
import icond from "./images/a4.png";
import icone from "./images/a5.png";
import iconf from "./images/a6.png";
import icong from "./images/a7.png";
import iconh from "./images/a8.png";
import gm from "./images/gm.png";
import gicon1 from "./images/z1.png";
import gicon2 from "./images/z2.png";
import gicon3 from "./images/z3.png";
import etron from "./images/elect.png";






const App = () => {
  return (
    <div>
      <div className="sec1">
        <header>
        <div className="ihd1">
        <div className="hd1"><img class="lg" src={logo} alt="logo"/></div>
         <div className="hd2">
        <img class="g" src={game} alt="logo"/>PLAY
        <span>PARENTS</span>
        <span>EDUCATORS</span>
        <span>WHY CODE?</span>
        </div>
        <div className="hd3">JOIN FOR FREE</div>
        <div className="hd4">LOG IN</div>
        </div>
        </header>

    
        <div className="ihd2">
          <div className="isec2h">
        <div className="herohead">Coding Made Easy</div>
        <br />
        The fun way to learn programming and develop
        <br />
        problem-solving & critical thinking skills! Ages 5-18
        <br />
        <br />
        <button className="btn1">GET STARTED FOR FREE</button>
        At-home plans from $9 per month
        </div>
        <img class="herop" src={pic1} alt="logo"/>
      </div>
  
      <img class="svg1" src={svg1} alt="logo"/>
      </div>
      
{/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
  
      <div className="sec2">
     <div className="isec2">
     <div className="box1">
    <h2>The #1 Coding Platform for Kids</h2>
    Tynker powers the creativity of over 60 million kids and serves thousands of schools and educators worldwide.
    <br />
    <br />
    Our interactive story-based learning allows kids to learn the basics with easy block-based coding challenges before seamlessly transitioning to real-world text-based languages like JavaScript and Python.
    <br />
    <br />
    With 65+ award-winning courses, there’s a learning path for every kid, no matter their age or level. We have over 5,000 learning modules, backed by hundreds of built-in tutorials and hands-on projects.
    <button className="btn2">START CODING NOW</button>
    </div>
    <div className="box2">
    <div className=""> <img class="img1" src={pic2} alt="logo"/></div>
    </div>
     </div>
     <h2>Tynker has been busy. Good Busy. Check out what’s NEW!</h2>
     
     <div className="isec2a">
     <br />
     <div className="imgcon1"> <></><img class="con1" src={icon1} alt="logo"/>
      AP Computer Science<br />
      2 New AP® CS courses endorsed by the College Board.  <br />
      Learn More
     </div > 
     <div className="imgcon1"><img class="con1" src={icon2} alt="logo"/>
       Live Classes<br />
       Live coding classes with a private teacher<br />
      Learn More
</div>
     <div className="imgcon1"> <img class="con1" src={icon3} alt="logo"/>
     Tynker + BYJU’S<br />
      Tynker has joined the BYJU’S family of brands.<br />
     Learn More
     </div>
     </div>
      </div>
 
{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
    <div className="sec3">
    <img class="svg1a" src={svg2} alt="logo"/>
    <div className="isec3">

    <div  className="div1">
    <div className="3box1"><img class="img11" src={round1} alt="logo"/> </div>
    <div className="3box2">
    <div>
   <h2> Educators</h2>
Join over 100,000 schools that use Tynker to engage students with coding and connect with other educators who love to code!
<br />
<br />
Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can create a free account, set up your virtual classroom, and assign ready-made lesson plans!
<br />
<br />
Tynker empowers K-12 educators with free PD, standards-aligned curricula, cross-curricular STEM coding, AP Computer Science courses, and many great coding resources. 
<button className="btn3">LEARN MORE</button>
    </div>
    </div>
    </div>

    <div  className="div2">
    <div className="3box1a">
    <h2> Parents</h2> 
Coding is quickly becoming an essential skill, one that will prepare your kids to succeed in an increasingly digital world.
<br />
<br />
Tynker offers a range of options to learn coding: Your children can learn to code with our self-paced, immersive game-like courses, and then advance to learning real-world Python and JavaScript.
<br />
<br />
Select the option that’s best for your child!
<button className="btn3">LEARN MORE</button>
 </div>
    <div className="3box2a">
    <div className=""> <img class="img2" src={round2} alt="logo"/></div> 
    </div>
    </div>

      </div>
      <img class="svg1a" src={svg3} alt="logo"/>
    </div>
   
{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
<div className="sec4">
<div className="isec4">
<h2>3 Highly-Rated Mobile Apps for Learning Code</h2>
Download Tynker apps and learn to code on the go.
<button className="btn4">LEARN MORE</button>
    </div>
    <div className="isec4ab">
      <div className="mbox1"><img class="gmp" src={gm} alt="logo"/></div>
      <div className="mbox2">
      <div className="imbox1"><img class="gic" src={gicon1} alt="logo"/>
        <h4>Tynker Junior</h4>
Tap-Tap picture coding with voice-overs. Pre-readers solve story-based puzzles and build their first programs in coding sandboxes. Ages 5-7

    
4.52,200+ reviews</div>
      <div className="imbox1"><img class="gic" src={gicon2} alt="logo"/>
        <h4>Tynker</h4>
Drag-and-drop block coding with a full-featured workshop. Build games and apps, compose music and art, control smart devices, and much, much more. Ages 6-11

    
4.710,400+ reviews</div>
      <div className="imbox1"><img class="gic" src={gicon3} alt="logo"/>
        <h4>Mod Creator</h4>
Drag-and-drop Minecraft modding. Design skins, blocks and items. Modify mob behaviors. Create mods and add ons. Explore worlds! Ages 6-11

    
4.03,300+ reviews</div>
      </div>
    </div>
    </div>
{/* +++++++++++++++++ */}
    <div className="sec4x">
<div className="isec4x">
<h2>A Mini-Computer for the Internet of Things!</h2>
    </div>
    <div className="isec4abx">
      <div className="ambox1">
The BBC Doctor Who HiFive Inventor is a visually stunning IoT-enabled hand-shaped mini-computer designed to teach kids how to control robots or interface with IoT systems to investigate the world around them.
<br />
<br />
Younger students will begin their learning journey with visual block coding and advanced students with Micropython.
<br />
<br />
The HiFive Inventor was developed by Tynker in collaboration with BBC Learning and SiFive, a fabless RISC-V semiconductor company.
<br />
<br />
Learn More:
<br />
www.HiFiveInventor.com</div>
      <div  className="ambox2" ><img class="gmp" src={etron} alt="logo"/></div>
       
      </div>
    </div>

    <img class="svg1aa" src={svg2} alt="logo"/>
 
 {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
{/* 
 <div className="secd">
<div className="isecd">
<h2>A Mini-Computer for the Internet of Things!</h2>
Download Tynker apps and learn to code on the go.
<button className="btn4">LEARN MORE</button>
    </div>
    <div className="isec4ab">
      
       
      </div>
    </div>
  */}

   
 


{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}



<div className="sec5">
<div className="isec51">
<h2>Why Should Kids Learn to Code with Tynker?</h2>
    </div>
    <div className="isec52">
      <div className="isec52a">
    Because technology is so integrated into virtually every aspect of our lives, learning about it is more important than ever. For kids, our coding platform makes it convenient and fun to gain knowledge that will serve them well throughout their lives. You can count on our trusted methods to help them develop and grow their capabilities with computers.
    <br />
    <br />

Tynker isn’t just for schools and coding camps, though. Parents who value STEM education and want their children to know how to learn to code should know that our kids programming platform can be used at home, too. There are individual and family home plans, and our online coding classes for kids are a great way for them to gain the supplemental STEM skills needed for the world of the future.
</div>
    </div>

    <div className="isec53">
      <div className="isec53">1</div>
      <div className="isec53">2</div>
      <div className="isec53">3</div>
      <div className="isec53">4</div>
    </div>


    </div>

    <img class="map" src={map} alt="logo"/>
    <div className="bigone">
    <img class="big" src={big} alt="logo"/>
    </div>

    <div className="iconlist">
    <img class="ic" src={icona} alt="logo"/>
    .....................
    <img class="ic" src={iconb} alt="logo"/>
    .....................
    <img class="ic" src={iconc} alt="logo"/>
    .....................
    <img class="ic" src={icond} alt="logo"/>
    .....................
    <img class="ic" src={icone} alt="logo"/>
    .....................
    <img class="ic" src={iconf} alt="logo"/>
    .....................
    <img class="ic" src={icong} alt="logo"/>
    .....................
    <img class="ic" src={iconh} alt="logo"/>
    .....................
    </div>
 {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
 <div className="footer">
 <div className="if4">
    <div className="f1">ABOUT<br />
Tynker is the world’s leading K-12 <br />
creative coding platform, enabling <br />
students of all ages to learn to code at <br />
home, school, and on the go. Tynker’s <br />
highly successful coding curriculum <br />
has been used by one in three U.S. K-8 <br />
schools, 100,000 schools globally, and <br />
 over 60 million kids across 150 <br />
 countries.</div>
 
    <div className="f1">RESOURCES<br />
Blog<br />
About Us<br />
Press<br />
Jobs<br />
Mobile Apps<br />
Coding eBooks<br />
Scholarship<br />
Forum<br />
Store<br />
CS Authors</div>
    <div className="f1">PARENTS<br />
Overview<br />
Live Coding Classes<br />
Give a Gift<br />
Redeem<br />
Why Coding<br />
Featured Makers</div>
    <div className="f1">EDUCATORS<br />
Overview<br />
Elementary<br />
Middle School<br />
High School<br />
AP CS Courses<br />
PD<br />
Hour of Code<br />
STEM Projects<br />
Request a Quote</div>
  <div className="f1">PARENT NEWSLETTER<br />
  <input type="text" placeholder="Enter Your Email"/>
  <button>OK</button>
  </div>
</div>


<div className="if4a">
<img class="fimg" src={footer} alt="logo"/>
<span>© 2022 Neuron Fuel &#160;&#160;&#160;Terms & Conditions&#160;&#160;&#160;</span>
<span>|&#160;&#160; PRIVACY POLICY &#160;&#160;</span>
<span>| &#160;&#160;&#160; Kids & Online Safety </span>
<span>|&#160;&#160;&#160;About Us |&#160;&#160;&#160; Contact Us</span>

</div>
    </div>



 {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
    <div className="dfooter">

    </div>
      </div>
 
  );
}

export default App;
