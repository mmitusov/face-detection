(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{292:function(e,t,n){},294:function(e,t,n){},295:function(e,t,n){},296:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);var a=n(7),s=n.n(a),i=n(41),o=n.n(i),c=(n(79),n(18)),r=n(19),l=n(21),d=n(20),h=n(73),u=n.n(h),b=(n(292),n(2)),m=function(e){var t=e.imageUrl,n=e.box;return Object(b.jsx)("div",{className:"center ma",children:Object(b.jsxs)("div",{className:"absolute mt2",children:[Object(b.jsx)("img",{id:"inputimage",alt:"",src:t,width:"900px",heigh:"auto"}),Object(b.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})},p=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(b.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(b.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})}):Object(b.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(b.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(b.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://face-detection-backend-1.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(b.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(b.jsx)("main",{className:"pa4 black-80",children:Object(b.jsxs)("div",{className:"measure",children:[Object(b.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(b.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(b.jsxs)("div",{className:"mt3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(b.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(b.jsxs)("div",{className:"mv3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(b.jsx)("div",{className:"",children:Object(b.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(b.jsx)("div",{className:"lh-copy mt3",children:Object(b.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(s.a.Component),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://face-detection-backend-1.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(b.jsx)("main",{className:"pa4 black-80",children:Object(b.jsxs)("div",{className:"measure",children:[Object(b.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(b.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(b.jsxs)("div",{className:"mt3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(b.jsxs)("div",{className:"mt3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(b.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(b.jsxs)("div",{className:"mv3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(b.jsx)("div",{className:"",children:Object(b.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(s.a.Component),f=n(74),w=n.n(f),v=n.p+"static/media/i.34f09704.png",x=(n(294),function(){return Object(b.jsx)("div",{className:"ma4 mt0",children:Object(b.jsx)(w.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150},children:Object(b.jsx)("div",{className:"Tilt-inner pa3",children:Object(b.jsx)("img",{src:v,style:{paddingTop:"5px"},alt:"logo"})})})})}),O=(n(295),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"f3",children:"Want to detect face on your Image? Give it a try!"}),Object(b.jsx)("div",{className:"center",children:Object(b.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(b.jsx)("input",{type:"text",className:"f4 pa2 w-70 center",onChange:t}),Object(b.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),N=function(e){var t=e.name,n=e.entries;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"dark-blue f3",children:"".concat(t,", your current entry count is ")}),Object(b.jsx)("div",{className:"white f1",children:n})]})},C=(n(296),{particles:{number:{value:80,density:{enable:!0,value_area:1e3}}}}),y={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://face-detection-backend-1.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://face-detection-backend-1.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=y,e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,s=e.box;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u.a,{className:"particles",params:C}),Object(b.jsx)(p,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{}),Object(b.jsx)(N,{name:this.state.user.name,entries:this.state.user.entries}),Object(b.jsx)(O,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(b.jsx)(m,{box:s,imageUrl:n})]}):"signin"===a?Object(b.jsx)(j,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(b.jsx)(g,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(297);o.a.render(Object(b.jsx)(k,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/face-detection",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/face-detection","/service-worker.js");S?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):I(e)}))}}()},79:function(e,t,n){}},[[298,1,2]]]);
//# sourceMappingURL=main.5d461376.chunk.js.map