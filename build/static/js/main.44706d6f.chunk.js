(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{300:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),o=a(68),c=a.n(o),l=(a(79),a(69)),s=a(70),r=a(73),u=a(72),d=(a(80),a(81),a(71)),m=a.n(d),p=function(e){var t=e.handleSectionClick;return i.a.createElement("div",{className:"side-nav"},i.a.createElement("img",{className:"avatar",src:m.a,alt:"avatar"}),i.a.createElement("h2",{className:"main-name"}," Bala"),i.a.createElement("p",{className:"subtitle"},"A man with Dreams. . ."),i.a.createElement("div",{className:"sections-list"},i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("about")}},"About Me"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("projects")}},"Projects"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("skills")}},"Skills")))},g=(a(82),{heading:"Skills",quote:"Build your skills, not your resume",techSkills:["JavaScript","NodeJS","ReactJS","React Native","Redux","C++","C#","C","Java","Python","HTML","CSS","jQuery","Bootstrap","Material Design","MaterializeCSS","Git","GitHub","MongoDB"],industryKnowledge:["Software","Marketing","Publicity","Blogging","Content Writing","Creative Writing","Web Content","Frontend","Software","Backend","Design","Web","Android"],interpersonalSkills:["Communication","Teaching","Time Management","Leadership","Management"]}),h=(a(83),function(e){var t=e.skill;return i.a.createElement("div",{className:"skill-card"},t)}),f=function(e){return console.log(g),i.a.createElement("div",{className:"skill-container"},i.a.createElement("h3",null,"Industry Skill Container"),i.a.createElement("div",{className:"industry-skill-container"},g.industryKnowledge.map((function(e,t){return i.a.createElement(h,{skill:e})}))))},v={heading:"Projects",quote:"Ahh, Learning alone is boring, implementation is the real fun",projectList:[{name:"Project 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Project 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Project 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]},E=(a(84),function(e){var t=e.project;return i.a.createElement("div",{className:"project-card"},i.a.createElement("p",null,i.a.createElement("b",null,"Name:"),t.name),i.a.createElement("p",null,i.a.createElement("b",null,"Description:")," ",t.description))}),k=function(e){var t=e.projects;return i.a.createElement("div",{className:"projects-container"},i.a.createElement("div",{className:"industry-skill-container"},t.projectList.map((function(e){return i.a.createElement(E,{project:e})}))))},b=(a(85),function(e){return i.a.createElement("div",{className:"about-container"},i.a.createElement("p",null,e.about.bio))}),S=(a(86),function(e){var t=e.about,a=e.projects,n=e.skills,o=e.selectedHeading,c=e.selectedQuote,l=e.selectedSection;return i.a.createElement("div",{className:"section-container"},i.a.createElement("div",{className:"section-heading-container"},i.a.createElement("h1",{className:"main-heading"},o),i.a.createElement("p",{className:"main-quote"},c)),i.a.createElement("div",{className:"section-component"},{about:i.a.createElement(b,{about:t}),skills:i.a.createElement(f,{skills:n}),projects:i.a.createElement(k,{projects:a})}[l]))}),j=function(e){var t=e.handleSectionClick,a=e.about,n=e.projects,o=e.skills,c=e.selectedHeading,l=e.selectedQuote,s=e.selectedSection;return i.a.createElement("div",{className:"portfolio-container"},i.a.createElement("div",{className:"sidenav-container"},i.a.createElement(p,{handleSectionClick:t})),i.a.createElement("div",{className:"main-section-container"},i.a.createElement(S,{about:a,skills:o,projects:n,selectedHeading:c,selectedQuote:l,selectedSection:s})))},N=(a(87),{heading:"About Me",quote:"If you love life, don't waste time, \nfor time is what life is made up of",bio:"A candid by nature and a developer by passion, a tech enthusiast, going to be a full-stack JavaScript developer, blogger, and mentor for those who want to learn programming, development and recent technologies."}),C=(a(36),function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleSectionClick=function(t){e.setState({selectedSection:t,selectedHeading:e.state[t].heading,selectedQuote:e.state[t].quote})},e.state={selectedSection:"",selectedHeading:"",selectedQuote:"",about:null,skills:null,projects:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({selectedSection:"about",about:N,skills:g,projects:v,selectedHeading:N.heading,selectedQuote:N.quote})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"App"},i.a.createElement(j,{about:this.state.about,skills:this.state.skills,projects:this.state.projects,selectedHeading:this.state.selectedHeading,selectedQuote:this.state.selectedQuote,selectedSection:this.state.selectedSection,handleSectionClick:this.handleSectionClick})),i.a.createElement("div",{className:"particles"}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a.p+"static/media/bala.fddc9742.jpg"},74:function(e,t,a){e.exports=a(300)},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.44706d6f.chunk.js.map