(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var l=n(0),a=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=l,d=s["".concat(i,".").concat(b)]||s[b]||m[b]||r;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var l=n(3),a=n(7),r=(n(0),n(109)),i=["components"],o={title:"Wire frames"},p={unversionedId:"wire-frames",id:"wire-frames",isDocsHomePage:!1,title:"Wire frames",description:"What user will need for deployment",source:"@site/docs/wire-frames.md",slug:"/wire-frames",permalink:"/wire-frames",editUrl:"https://github.com/deployment-helper/docs-deployment-helper/tree/dev/docs/wire-frames.md",version:"current",sidebar:"docs",previous:{title:"Decisions",permalink:"/technical-design/decisions"},next:{title:"Template Management",permalink:"/technical-design/template-management"}},c=[{value:"What will be a template structure",id:"what-will-be-a-template-structure",children:[]},{value:"Deployment file/folder",id:"deployment-filefolder",children:[]},{value:"How to list and manage templates?",id:"how-to-list-and-manage-templates",children:[{value:"How this will help?",id:"how-this-will-help",children:[]},{value:"Template stats management",id:"template-stats-management",children:[]}]},{value:"User Journeys",id:"user-journeys",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,i);return Object(r.b)("wrapper",Object(l.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"What user will need for deployment"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A template"),Object(r.b)("li",{parentName:"ul"},"A deployment platform and strategy")),Object(r.b)("p",null,"What user inputs will require"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Template selection"),Object(r.b)("li",{parentName:"ul"},"Deployment platform and strategy selection"),Object(r.b)("li",{parentName:"ul"},"Platform tokens for deployment")),Object(r.b)("h2",{id:"what-will-be-a-template-structure"},"What will be a template structure"),Object(r.b)("p",null,"A Template will be have all initial code of the project with"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"deployment information"),Object(r.b)("li",{parentName:"ul"},"what need to be replaced with")),Object(r.b)("h2",{id:"deployment-filefolder"},"Deployment file/folder"),Object(r.b)("p",null,"Deployment file will have information about"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Supported deployment platforms"),Object(r.b)("li",{parentName:"ul"},"Supported tags"),Object(r.b)("li",{parentName:"ul"},"Required credentials"),Object(r.b)("li",{parentName:"ul"},"Required pre-requisites","[repo, database, other services]"),Object(r.b)("li",{parentName:"ul"},"Supported deployment engine"),Object(r.b)("li",{parentName:"ul"},"Template meta-data"),Object(r.b)("li",{parentName:"ul"},"Deployment engine definition","[ ::TODO::]")),Object(r.b)("h2",{id:"how-to-list-and-manage-templates"},"How to list and manage templates?"),Object(r.b)("p",null,"Management: Use a github project to manage all templates"),Object(r.b)("p",null,"Listing: We will use a JSON file to list all templates and JSON file will be generated automatically by scrapping all available repositories."),Object(r.b)("h3",{id:"how-this-will-help"},"How this will help?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To follow open standards"),Object(r.b)("li",{parentName:"ul"},"To track template changes"),Object(r.b)("li",{parentName:"ul"},"To incorporate open-source templates(By Forking in this project)")),Object(r.b)("h3",{id:"template-stats-management"},"Template stats management"),Object(r.b)("p",null,"How we will manage a template stats like"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Total number of deployments till today"),Object(r.b)("li",{parentName:"ul"},"Last deployment status"),Object(r.b)("li",{parentName:"ul"},"Deployment stats")),Object(r.b)("h2",{id:"user-journeys"},"User Journeys"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"User want to see all current and previous deployment status","[Dashboard]"),Object(r.b)("li",{parentName:"ul"},"User want to see all logs of the deployment"),Object(r.b)("li",{parentName:"ul"},"User want to trigger a new deployment"),Object(r.b)("li",{parentName:"ul"},"User want to save credentials for future deployments"),Object(r.b)("li",{parentName:"ul"},"User want to check status of supported services/platforms"),Object(r.b)("li",{parentName:"ul"},"User want to log an issue related to template deployment")))}s.isMDXComponent=!0}}]);