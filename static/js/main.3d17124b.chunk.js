(this["webpackJsonponion-connoisseur"]=this["webpackJsonponion-connoisseur"]||[]).push([[0],{384:function(e,t,o){},385:function(e,t,o){},393:function(e,t){},394:function(e,t){},402:function(e,t){},405:function(e,t){},406:function(e,t){},427:function(e,t,o){"use strict";o.r(t);var n=o(1),i=o.n(n),r=o(204),a=o.n(r),s=(o(384),o.p,o(385),o(79)),c=o(55),l=o(2),d=o(432),h=o(448),u=o(465),b=o(450),j=o(451),p=o(468),m=o(452),g=o(444),f=o(467),w=o(431),O=o(447),x=o(370),y=o(463),k=o(466),v=o(17);function I(e){return Object(v.jsx)(k.a,{label:e.label,children:Object(v.jsx)(g.a,{as:"b",color:"red.500",children:e.children})})}function C(){return Object(v.jsxs)(y.a,{children:[Object(v.jsx)(y.g,{children:Object(v.jsx)(g.a,{color:"gray.500",cursor:"pointer",children:"What Is This?"})}),Object(v.jsxs)(y.e,{children:[Object(v.jsx)(y.b,{}),Object(v.jsx)(y.d,{}),Object(v.jsx)(y.f,{as:"b",children:"What is this?"}),Object(v.jsxs)(y.c,{children:[Object(v.jsx)(g.a,{as:"p",children:"This is a fun little program I created with my friend for our final project in SI 206 at the University of Michigan."}),Object(v.jsx)("br",{}),Object(v.jsxs)(g.a,{as:"p",children:["We use a machine learning algorithm to determine if a provided article is likely to be satire. Try it below by pasting an ",Object(v.jsx)(I,{label:"Please paste the entire article. I have no idea why but the network doesn't work well on parts of articles. I've checked to make sure shorter articles are still categorized correctly, and the problem only occurs with incomplete articles. So just paste the whole article please.",children:"article"})," below!"]})]})]})]})}o(340);var T=o(364),S=o.n(T);function M(){var e=Object(d.b)(),t=e.colorMode,o=(e.toggleColorMode,Object(n.useState)("")),i=Object(l.a)(o,2),r=i[0],a=i[1],s=Object(n.useState)(!1),c=Object(l.a)(s,2),y=c[0],k=c[1],I=Object(n.useState)(!1),T=Object(l.a)(I,2),M=T[0],A=T[1],F=Object(n.useState)(!1),D=Object(l.a)(F,2),E=D[0],R=D[1],P=Object(n.useState)(!1),_=Object(l.a)(P,2),q=_[0],H=_[1];return Object(v.jsx)(h.a,{children:Object(v.jsxs)(u.a,{spacing:8,align:"center",w:["90%","90%","60%","50%","30%"],children:[Object(v.jsxs)(u.a,{justify:!0,align:"center",direction:"column",children:[Object(v.jsx)(b.a,{textAlign:"center",children:"The Onion Connoisseur"}),Object(v.jsx)(j.a,{ml:2,children:Object(v.jsx)(C,{})})]}),Object(v.jsx)(p.a,{placeholder:"Enter your article here",w:"100%",onChange:function(e){a(e.target.value)},minHeight:["35vh","35vh","30vh","30vh","30vh"]}),M?Object(v.jsx)(m.a,{justify:"center",w:"100%",textAlign:"center",children:Object(v.jsxs)(g.a,{children:["Your article has been determined as ",M<.5?Object(v.jsx)(g.a,{as:"span",color:"green",children:"real"}):Object(v.jsx)(g.a,{as:"span",color:"red",children:"opinionated/satirical"})," with a score of ",M,"."]})}):"",E?Object(v.jsx)(m.a,{justify:"center",textAlign:"center",children:Object(v.jsx)(g.a,{color:"light"===t?"red":"red.400",children:"An error occured while processing your request. Feel free tell me that my website is broken so that I can fix it."})}):"",Object(v.jsx)(f.a,{children:Object(v.jsx)(w.a,{in:q,direction:"bottom",unmountOnExit:!0,children:Object(v.jsxs)(u.a,{p:6,pt:3,pb:12,mt:"4",bg:"blue.500",rounded:"md",shadow:"md",color:"white",align:"center",direction:"column",children:[Object(v.jsx)(O.a,{alignSelf:"flex-end",onClick:function(){return H(!1)}}),Object(v.jsxs)(u.a,{direction:"column",align:"center",textAlign:"center",spacing:6,w:["100%","100%","100%","100%","60%"],children:[Object(v.jsx)(b.a,{children:"Taking too long?"}),Object(v.jsx)(g.a,{children:"If this is your first time running the application, you'll very likely get an error after a long wait. This is because the server that I use for this application is a free Heroku dyno, and because of this, it goes to sleep after 30 minutes of inactivity. Once you send the first request, it takes a second to wake up. Just give it a minute and try again. Any subsequent requests should all work swiftly."})]})]})})}),Object(v.jsx)(x.a,{w:"60%",onClick:function(){k(!0),R(!1),A(!1);var e=setTimeout((function(){return H(!0)}),5e3),t=new FormData;t.append("article-body",r),S.a.post("https://onion-connisseur.herokuapp.com/",t).then((function(e){console.log(e.data),A(e.data)})).catch((function(){R(!0)})).finally((function(){clearTimeout(e),k(!1),H(!1)}))},isDisabled:""==r,isLoading:y,loadingText:"This will take a second!",children:"Is it satire?"})]})})}var A=o(471);function F(e,t){var o=Object(d.b)(),n=o.colorMode;o.toggleColorMode;return Object(v.jsx)(m.a,{w:["100%","80%","70%","60%","50%"],py:24,ref:t,align:"center",flexDirection:"column",children:Object(v.jsxs)(u.a,{borderWidth:1,borderColor:"light"===n?"gray.100":"gray.700",p:4,direction:"column",align:"center",borderRadius:16,shadow:"light"===n?"base":"14px 14px 28px #171d28, -14px -14px 28px #1d2330;",spacing:12,children:[Object(v.jsx)(b.a,{textAlign:"center",children:"Who am I?"}),Object(v.jsx)(A.a,{borderRadius:"full",src:"/me_cropped.png",w:[40,48,64]}),Object(v.jsx)(g.a,{textAlign:"center",as:"b",children:"Hello! My name is Efe Akinci."}),Object(v.jsxs)(g.a,{textAlign:"center",as:"p",children:["I am currently a senior at Skyline High School, and I am planning on majoring in ",Object(v.jsx)(I,{label:"and maybe also math? or perhaps dual major in cs and business? or maybe a minor in math and a dual-major in business and cs? is that even possible?",children:"computer science"}),". I work with a research team at Michigan Medicine to apply machine learning and other computer science concepts to rare-diseases."]}),Object(v.jsxs)(g.a,{textAlign:"center",as:"p",children:["I also really enjoy doing robotics. In 2018-2019, I was the Engineering Projects lead for FIRST Robotics Team 6429 where I developed social media apps and websites, ",Object(v.jsx)(I,{label:"This is a thing in robotics where we collect data on other teams' robots to better choose teammates.",children:"scouting"})," programs, edited videos, and more. Our team has competed in ",Object(v.jsx)(I,{label:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"2018 Istanbul Off-Season - Winner"}),Object(v.jsx)("li",{children:"2019 Istanbul Regional - Engineering Inspiration"}),Object(v.jsx)("li",{children:"2019 Houston World Championship"})]}),children:"many competitions"}),", and is still successfully competing today. After moving to the United States, I led a team to build another scouting application for Team 3322."]}),Object(v.jsxs)(g.a,{textAlign:"center",children:["In addition to all of that, as you can probably tell from the entry screen, I like computer science and ",Object(v.jsx)(I,{label:"seriously, what do open sets mean? where did they come from? i'm going to take topology soon and I am genuinely scared.",children:"math"}),"! I lead the computer science portion of our school's Mathmematics & Computer Science Club, and I like learning more about ",Object(v.jsx)(I,{label:"i really enjoyed watching Stanford's CS 231n course recently if you're bored and looking for stuff to watch!",children:"computer science"})," in my free time. This means I make a lot of projects as well, some of which I have documented and put up on this website."]})]})})}var D=Object(n.forwardRef)(F);function E(){var e=Object(d.b)(),t=e.colorMode;e.toggleColorMode;return Object(v.jsx)(j.a,{w:"100%",borderWidth:1,borderColor:"light"===t?"gray.100":"gray.900"})}function R(e){return Object(v.jsx)(m.a,{h:"95vh",pt:"10vh",children:Object(v.jsxs)(u.a,{w:"100%",align:"center",spacing:6,children:[Object(v.jsx)(b.a,{textAlign:"center",children:"Hello!"}),Object(v.jsxs)(b.a,{textAlign:"center",children:["I love learning about computer science and ",Object(v.jsx)(I,{label:'but the words "open set" really, really scare me.',children:"math"}),"!"]}),Object(v.jsx)(x.a,{textAlign:"center",onClick:e.scrollTo,children:"Learn a bit about me!"})]})})}var P=o(470),_=o(453),q=o(469);function H(e){var t=Object(q.a)(!1,!0),o=Object(l.a)(t,2),n=o[0],i=o[1],r=Object(d.b)(),a=r.colorMode;r.toggleColorMode;return Object(v.jsx)(j.a,{children:Object(v.jsxs)(u.a,{borderWidth:1,borderColor:"light"===a?"gray.100":"gray.700",p:4,direction:"column",align:"center",borderRadius:16,shadow:"light"===a?"base":"14px 14px 28px #171d28, -14px -14px 28px #1d2330;",spacing:12,variant:"card",children:[Object(v.jsx)(b.a,{textAlign:"center",children:e.title}),Object(v.jsx)(m.a,{h:96,w:"100%",justify:"center",align:"center",children:e.src?Object(v.jsx)(A.a,{src:"project_photos/"+e.src,maxH:96,borderRadius:16}):""}),Object(v.jsx)(j.a,{w:"100%",children:Object(v.jsx)(_.a,{in:n,startingHeight:108,children:e.children})}),Object(v.jsx)(x.a,{onClick:i,children:n?"Show Less":"Show More"})]})})}function W(){var e=Object(d.b)(),t=e.colorMode,o=(e.toggleColorMode,"light"===t?"blue":"blue.200");return Object(v.jsxs)(u.a,{direction:"column",align:"center",w:"100%",pt:24,spacing:12,children:[Object(v.jsx)(b.a,{children:"Projects"}),Object(v.jsxs)(P.a,{columns:[1,1,1,1,3],gap:12,children:[Object(v.jsx)(H,{title:"Smart Mirror",src:"Mirror.png",children:Object(v.jsxs)(g.a,{children:["It's a smart mirror! About a year ago, I thought it would be really cool to make my own smart mirror from scratch \u2013 ",Object(v.jsx)(I,{label:"Not using libraries when you can is usually a terrible idea. Don't reinvent the wheel unless your new wheel has a measurable improvement on the wheel-making field or, as in this case, you're trying to learn how a wheel works.",children:"software and hardware"}),". So, I decided to see if I could build the mirror for less money and with fewer tools. The answer was yes! The mirror works by using a device that outputs to a ",Object(v.jsx)(I,{label:"Always try to recycle! Plus, used equipment ends up being cheaper anyway. You win, and the world wins; what more is there to want?",children:"recycled"})," monitor behind the glass. The glass has a one-way mirror film on it to give the mirror effect. I manually cut all of the wood because I didn\u2019t have electric tools, so some of the structure came out a bit uneven. This was my first real introduction to woodworking, and I think ",Object(v.jsx)(I,{label:"okay, this is a bit of a stretch. there are screws straight into the front of the mirror. but it doesn't look bad (i think)!",children:"it came out good despite that"}),". The software is a web page served by an Angular server and a Node.js backend. The backend also has Spotify integration. A Raspberry Pi works well as the video input, but anything that can display a webpage also works. In the end, the project helped me develop my woodworking and IOT skills, and I ended up with a pretty cool mirror."]})}),Object(v.jsx)(H,{title:"COVID-19 Check In App",src:"FDS_DESIGNER_CROP.png",children:Object(v.jsxs)(g.a,{children:["This is a cross-platform app made in ",Object(v.jsx)(I,{label:"I developed my first production (robotics) app in Android Studio. It sucked. Not only did it suck, it could only suck on Android because it couldn't even run on iOS in order to suck. Cross-platform development tools are very neat and useful for rapidly developed apps, be it robotics or pandemic-response.",children:"Flutter"})," that allows for the delivery of customized forms in health settings. The project started when I was working with a medical research team at the University of Michigan. Due to the current pandemic, the team I worked with asked me to build a COVID-19 focused application to manage appointments. I used Flutter because it provided ease of development for cross-platform applications as well as fast rendering. I first started with a quick proof-of-concept app that I then built into an app with 3 main sections \u2014 login, appointments, and check-ins. During check-ins, each answer can progress to the next question, ask another question, or switch to a different question set depending on the data from the backend. Our team has since migrated to using the ",Object(v.jsx)(I,{label:"Huge props to the team at Michigan for this app. The intergration with student testing has contributed in large way to safety on campus, and the app just works.",children:"ResponsiBlue Health Check-In System."})]})}),Object(v.jsxs)(H,{title:"Onion Connoisseur",src:"onion_connoisseur.png",children:["I created this project with my friend as our final project for SI 206 (Data-Oriented Programming) at the University of Michgian. The algorithm uses a neural network to determine wheter an article is satire or not. You can try this application out for yourself ",Object(v.jsx)(s.b,{to:"/onion_connoisseur",children:Object(v.jsx)(g.a,{as:"span",color:o,children:"here"})}),". Additionally, you can find source code on our ",Object(v.jsx)(s.b,{isExternal:!0,href:"https://github.com/efea-umich/SI-206-Final",children:Object(v.jsx)(g.a,{as:"span",color:o,children:"GitHub repository"})})," and more information on the project ",Object(v.jsx)(s.b,{isExternal:!0,href:"https://github.com/efea-umich/SI-206-Final/blob/3b619acd0efdf760ac17080838d3a31ec705c600/Final_Project_Report.pdf",children:Object(v.jsx)(g.a,{as:"span",color:o,children:" on our project report"})}),"."]})]}),Object(v.jsx)(s.b,{to:"/projects",children:Object(v.jsx)(x.a,{children:"View more projects here!"})})]})}function z(){var e=Object(n.useRef)(null);return Object(v.jsx)(u.a,{w:"100%",align:"center",direction:"column",spacing:16,children:Object(v.jsxs)(u.a,{direction:"column",w:["90%"],align:"center",children:[Object(v.jsx)(R,{scrollTo:function(){e&&e.current&&e.current.scrollIntoView({behavior:"smooth"})}}),Object(v.jsx)(E,{}),Object(v.jsx)(D,{ref:e}),Object(v.jsx)(W,{})]})})}var N=o(365),U=o(456),G=o(442),L=o(457),V=o(454),Y=o(115),B=o(210),J=o(455),Z=o(472);function Q(e){return Object(v.jsx)(j.a,{onClick:e.onClick,pb:2,borderBottomWidth:1,borderBlockEndColor:"gray.100",children:Object(v.jsx)(s.b,{to:e.to,children:Object(v.jsx)(g.a,{as:"b",fontSize:"md",display:"block",children:e.children})})})}function X(e){var t=e.isOpen,o=e.onClose,n=Object(d.b)(),i=n.colorMode,r=n.toggleColorMode;return Object(v.jsx)(V.a,{isOpen:t,onClose:o,placement:"right",children:Object(v.jsx)(Y.g,{children:Object(v.jsxs)(V.b,{children:[Object(v.jsx)(Y.c,{onClick:o}),Object(v.jsx)(Y.f,{children:"Navigation Menu"}),Object(v.jsx)(Y.b,{children:Object(v.jsxs)(u.a,{direction:"column",spacing:4,children:[Object(v.jsx)(Q,{onClick:o,to:"/",children:"Home"}),Object(v.jsx)(Q,{onClick:o,to:"/projects",children:"Projects"}),Object(v.jsx)(Q,{onClick:o,to:"/onion_connoisseur",children:"Featured App"})]})}),Object(v.jsx)(Y.e,{children:Object(v.jsxs)(B.a,{display:"flex",alignItems:"center",children:[Object(v.jsx)(J.a,{htmlFor:"dark-mode",mb:"0",children:"Enable Dark Mode"}),Object(v.jsx)(Z.a,{id:"dark-mode",isChecked:"dark"===i,onChange:r})]})})]})})})}function K(e){var t=Object(d.b)(),o=t.colorMode;t.toggleColorMode;return Object(v.jsx)(m.a,{as:"nav",justify:"center",position:"sticky",top:0,w:"100%",borderWidth:1,borderColor:"light"===o?"gray.100":"gray.900",p:4,bg:"light"===o?"white":"gray.800",zIndex:10,children:Object(v.jsx)(u.a,{w:e.w,direction:"row",spacing:12,justify:e.justify,align:"center",children:e.children})})}function $(){var e=Object(G.a)(),t=e.isOpen,o=e.onOpen,n=e.onClose,i=Object(d.b)(),r=i.colorMode;i.toggleColorMode;return Object(v.jsxs)(K,{justify:"flex-end",w:"100%",children:[Object(v.jsx)(U.a,{onClick:o,children:Object(v.jsx)(L.a,{color:"light"===r?"black":"white"})}),Object(v.jsx)(X,{isOpen:t,onClose:n})]})}var ee=o(458);function te(){var e=Object(d.b)(),t=(e.colorMode,e.toggleColorMode);return Object(v.jsxs)(K,{justify:"space-evenly",w:"60%",children:[Object(v.jsx)(s.b,{to:"/",children:Object(v.jsx)(g.a,{as:"b",fontSize:"md",display:"block",children:"Home"})}),Object(v.jsx)(s.b,{to:"/projects",children:Object(v.jsx)(g.a,{as:"b",fontSize:"md",display:"block",children:"Projects"})}),Object(v.jsx)(s.b,{to:"/onion_connoisseur",children:Object(v.jsx)(g.a,{as:"b",fontSize:"md",display:"block",children:"Featured App"})}),Object(v.jsx)(U.a,{onClick:t,bg:"transparent",children:Object(v.jsx)(ee.a,{})})]})}var oe=o(459);function ne(e){return Object(v.jsx)(oe.a,{children:Object(v.jsx)(s.b,{to:e.to,children:e.children})})}function ie(){var e=Object(d.b)();e.colorMode,e.toggleColorMode;return Object(v.jsx)(u.a,{w:"100%",align:"center",direction:"column",spacing:16,children:Object(v.jsx)(u.a,{direction:"column",w:["90%"],align:"center",children:Object(v.jsxs)(u.a,{direction:"column",align:"center",w:"100%",pt:0,spacing:12,children:[Object(v.jsx)(b.a,{children:"Projects"}),Object(v.jsxs)(P.a,{columns:[1,1,3,3],gap:12,children:[Object(v.jsx)(H,{title:"Smart Mirror",src:"Mirror.png",children:Object(v.jsxs)(g.a,{children:["It's a smart mirror! About a year ago, I thought it would be really cool to make my own smart mirror from scratch \u2013 ",Object(v.jsx)(I,{label:"Not using libraries when you can is usually a terrible idea. Don't reinvent the wheel unless your new wheel has a measurable improvement on the wheel-making field or, as in this case, you're trying to learn how a wheel works.",children:"software and hardware"}),". So, I decided to see if I could build the mirror for less money and with fewer tools. The answer was yes! The mirror works by using a device that outputs to a ",Object(v.jsx)(I,{label:"Always try to recycle! Plus, used equipment ends up being cheaper anyway. You win, and the world wins; what more is there to want?",children:"recycled"})," monitor behind the glass. The glass has a one-way mirror film on it to give the mirror effect. I manually cut all of the wood because I didn\u2019t have electric tools, so some of the structure came out a bit uneven. This was my first real introduction to woodworking, and I think ",Object(v.jsx)(I,{label:"okay, this is a bit of a stretch. there are screws straight into the front of the mirror. but it doesn't look bad (i think)!",children:"it came out good despite that"}),". The software is a web page served by an Angular server and a Node.js backend. The backend also has Spotify integration. A Raspberry Pi works well as the video input, but anything that can display a webpage also works. In the end, the project helped me develop my woodworking and IOT skills, and I ended up with a pretty cool mirror."]})}),Object(v.jsx)(H,{title:"COVID-19 Check In App",src:"FDS_DESIGNER_CROP.png",children:Object(v.jsxs)(g.a,{children:["This is a cross-platform app made in ",Object(v.jsx)(I,{label:"I developed my first production (robotics) app in Android Studio. It sucked. Not only did it suck, it could only suck on Android because it couldn't even run on iOS in order to suck. Cross-platform development tools are very neat and useful for rapidly developed apps, be it robotics or pandemic-response.",children:"Flutter"})," that allows for the delivery of customized forms in health settings. The project started when I was working with a medical research team at the University of Michigan. Due to the current pandemic, the team I worked with asked me to build a COVID-19 focused application to manage appointments. I used Flutter because it provided ease of development for cross-platform applications as well as fast rendering. I first started with a quick proof-of-concept app that I then built into an app with 3 main sections \u2014 login, appointments, and check-ins. During check-ins, each answer can progress to the next question, ask another question, or switch to a different question set depending on the data from the backend. Our team has since migrated to using the ",Object(v.jsx)(I,{label:"Huge props to the team at Michigan for this app. The intergration with student testing has contributed in large way to safety on campus, and the app just works.",children:"ResponsiBlue Health Check-In System."})]})}),Object(v.jsxs)(H,{title:"Onion Connoisseur",src:"onion_connoisseur.png",children:["I created this project with my friend as our final project for SI 206 (Data-Oriented Programming) at the University of Michgian. The algorithm uses a neural network to determine wheter an article is satire or not. You can try this application out for yourself ",Object(v.jsx)(ne,{to:"/onion_connoisseur",children:Object(v.jsx)(g.a,{as:"span",children:"here"})}),". Additionally, you can find source code on our ",Object(v.jsx)(oe.a,{isExternal:!0,href:"https://github.com/efea-umich/SI-206-Final",children:"GitHub repository"})," and more information on the project ",Object(v.jsx)(oe.a,{isExternal:!0,href:"https://github.com/efea-umich/SI-206-Final/blob/3b619acd0efdf760ac17080838d3a31ec705c600/Final_Project_Report.pdf",children:" on our project report"}),"."]}),Object(v.jsxs)(H,{title:"Team 3322 Scouting App",src:"3322_Scout.png",children:["This is a ",Object(v.jsx)(I,{label:"Okay, I think I should explain this a little. In FIRST Robotics, if you do well enough during the qualification rounds, you get to choose your teammates for the final rounds. You obviously want to pick teammates who are going to be able to cover your weaknesses, and hence you need data. The app I made allows you to collect and view this data easily.",children:"scouting application"})," I created during my time as scouting app lead on FRC Team 3322. I worked with two other people to create the application. The app itself is a responsive web application created in React for the frontend, Node.js for the backend, and Firebase\u2019s Firestore for our database. The app has two main components \u2014 data entry and data viewing. The data entry allows a scouter to add a new team in a new match and enter data in sections separated by game period. The scouter can then save this data for later viewing. The data viewer uses the Chart.js framework to display data. The client can pull data for different matches and view statistics for that team. These statistics are then displayed in expandable cards that give an overview of how a team is performing. A big problem we faced was making the website responsive for different devices, and so we used the ",Object(v.jsx)(I,{label:"I also really like Chakra UI (which is what this website uses). It's less grid based, but still works quite well. Give both a try!",children:"Material-UI"})," framework\u2019s responsive grid system for our website."]}),Object(v.jsxs)(H,{title:"Salt Grinder",src:"Salt_Grinder.png",children:["This is one of the smaller but funnier projects I have made, mainly due to its backstory. One day, I was cooking for my parents, and we had quite a lot of meat that I needed to salt and pepper. Our family uses Costco pepper and salt grinders that take an ",Object(v.jsx)(I,{label:"i get that it's fresher and whatnot, but there comes a certain point when grinding salt where you sort of understand why they sell this stuff pre-ground",children:"annoying amount of effort"})," to get salt out of, and so by the time I was halfway through the meat, I thought to myself, \u201cThere\u2019s got to be a better way to do this.\u201d Then, I thought that all I was doing was spinning the base of the pepper grinder while holding it. I also had a drill, which is also a thing that spins, and I thought that I could make something out of that fact. So, I took some measurements and printed out the part in the picture. Although I did get through all of the food that day through manual effort, now, all I have to do when I want copious amounts of salt or pepper is grab a drill."]}),Object(v.jsxs)(H,{title:"Team 6429 Videos",src:"Youtube_Logo.png",children:["During my time at Team 6429, I used Adobe Premiere to create and edit videos for our team. I have used these skills in creating a variety of videos for our projects including ",Object(v.jsx)(oe.a,{isExternal:!0,href:"https://www.youtube.com/watch?v=q4U0Mp3Dk9s&list=PLEpx9zcGIEUIP18TDXDtus8AN2r0G2Gzd",children:"educational science videos"}),", ",Object(v.jsx)(oe.a,{isExternal:!0,href:"https://youtu.be/thpSaoc3FDg",children:"promotional videos"}),", ",Object(v.jsx)(oe.a,{isExternal:!0,href:"https://youtu.be/Z_onrfRb8is",children:"and robot overview"})," videos. I also created, filmed, and voiced over ",Object(v.jsx)(oe.a,{isExternal:!0,href:"https://youtu.be/ElL86Z0yUds",children:"animations"}),"."]})]})]})})})}var re=o(460);function ae(){var e=Object(d.b)(),t=e.colorMode;e.toggleColorMode;return Object(v.jsx)(u.a,{minHeight:32,bg:"light"===t?"white":"gray.800",borderWidth:1,borderColor:"light"===t?"gray.200":"gray.900",w:"100%",justify:"center",children:Object(v.jsx)(u.a,{direction:"column",align:"center",children:Object(v.jsxs)(u.a,{direction:"row",align:"center",children:[Object(v.jsx)(re.a,{color:"light"==t?"gray.600":"gray.300"}),Object(v.jsx)(oe.a,{href:"mailto:efeakinciwork@gmail.com",color:"light"==t?"gray.600":"gray.300",size:"xs",children:"efeakinciwork@gmail.com"})]})})})}function se(){var e=Object(c.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),Object(v.jsx)(i.a.Fragment,{})}var ce=function(){var e=Object(N.useMediaQuery)({query:"(min-device-width: 48em)"});return Object(v.jsxs)(s.a,{children:[Object(v.jsx)(se,{}),Object(v.jsxs)(u.a,{direction:"column",spacing:"5vh",children:[e?Object(v.jsx)(te,{w:"75%"}):Object(v.jsx)($,{}),Object(v.jsx)(j.a,{minHeight:"100vh",children:Object(v.jsxs)(c.c,{children:[Object(v.jsx)(c.a,{exact:!0,path:"/",component:z}),Object(v.jsx)(c.a,{exact:!0,path:"/projects",component:ie}),Object(v.jsx)(c.a,{exact:!0,path:"/onion_connoisseur",component:M})]})}),Object(v.jsx)(ae,{})]})]})},le=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,473)).then((function(t){var o=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;o(e),n(e),i(e),r(e),a(e)}))},de=o(464),he=o(461),ue=Object(he.a)({config:{initialColorMode:"dark"},components:{Link:{baseStyle:function(e){return{color:"light"===e.colorMode?"blue":"blue.200"}}}}}),be=o(367);o.n(be).a.polyfill(),a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(de.a,{theme:ue,children:Object(v.jsx)(ce,{})})}),document.getElementById("root")),le()}},[[427,1,2]]]);
//# sourceMappingURL=main.3d17124b.chunk.js.map