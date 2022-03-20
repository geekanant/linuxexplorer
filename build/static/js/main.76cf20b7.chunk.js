(this.webpackJsonplinuxexplorer=this.webpackJsonplinuxexplorer||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/github.121398c0.svg"},19:function(e,a,t){e.exports=t.p+"static/media/github-green.9fd953dd.svg"},21:function(e,a,t){e.exports=t.p+"static/media/clipboard.da2b051d.svg"},29:function(e,a,t){e.exports=t(47)},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(3),i=t.n(o),r=t(14),s=t(15),c=t(16),u=t(27),d=t(17),m=t(28),f=t(18),g=t.n(f),h=t(19),p=t.n(h),v=function(e){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"logo"},l.a.createElement("a",{href:"https://github.com/geekanant/linuxexplorer",rel:"noopener noreferrer",target:"_blank"},e.dark?l.a.createElement("img",{src:p.a,alt:"Github Logo",className:"logo--github"}):l.a.createElement("img",{src:g.a,alt:"Github Logo",className:"logo--github"}))),l.a.createElement("p",{className:"footer__copyright dark-white"},"Made with ",l.a.createElement("span",null,"\u2764")," by"," ",l.a.createElement("a",{href:"https://www.anantpatni.com",target:"_blank",rel:"noopener noreferrer"},"geekanant"),l.a.createElement("a",{href:"https://instagram.com/geekanant",target:"_blank",rel:"noopener noreferrer",className:"footer__link"},"Instagram")))},b=function(e){var a=e.checked,t=e.leftLabel,n=e.name,o=e.onChange,i=e.rightLabel;return l.a.createElement("div",{className:"toggle"},l.a.createElement("p",{className:"toggle__option toggle__option--left dark-white"},t),l.a.createElement("div",{className:"toggler"},l.a.createElement("label",{htmlFor:n},l.a.createElement("input",{type:"checkbox",id:n,checked:a,onChange:o}),l.a.createElement("span",{className:"switch"}),l.a.createElement("span",{className:"button"}," "))),l.a.createElement("p",{className:"toggle__option toggle__option--right dark-white"},i))},w=function(e){var a=e.fastType,t=e.mode,n=e.onToggle;return l.a.createElement("nav",{className:"nav"},l.a.createElement(b,{checked:a,leftLabel:"Normal type speed",name:"fastType",onChange:n,rightLabel:"Fast type speed"}),l.a.createElement(b,{checked:t,leftLabel:"Light Mode",name:"dark",onChange:n,rightLabel:"Dark Mode"}))},y=t(5),E=t.n(y),_=t(20),k=[{value:"list",label:"list"},{value:"create",label:"create"},{value:"remove",label:"remove"},{value:"move",label:"move"},{value:"navigate",label:"navigate"},{value:"change",label:"change"},{value:"view",label:"view"},{value:"copy",label:"copy"},{value:"find",label:"find"},{value:"execute",label:"execute"},{value:"sort",label:"sort"},{value:"count",label:"count"}].sort((function(e,a){return e.value<a.value?-1:e.value>a.value?1:0})),N={change:[{value:"owner",label:"the owner of a file",usage:"chown <owner> <file>"},{value:"directory",label:"the ownership of a directory, and recursively all the files contained, plus all the subdirectories and the files contained in them, too.",usage:"chown -R <owner> <folder>"},{value:"group-permissions",label:"the group of a file",usage:"chgrp <group> <filename>"},{value:"file-permissions",label:"the permissions given to a file",usage:"chmod <permissions> <filename>"}],copy:[{value:"copy-files",label:"the contents of one file to another file",usage:"cp <file_1> <file_2>"},{value:"copy-file-location",label:"file from one location to another",usage:"cp <file_name> <location>"},{value:"copy-folder",label:"folder from one place to another",usage:"cp -r <folder_1> <location>"},{value:"copy-multiple",label:"multiple files to a single location",usage:"cp <file_1> <file_2> ... <location>"}],count:[{value:"count-files",label:"files in a directory",usage:"ls | wc -l"},{value:"count-lines",label:"lines in a file",usage:"wc -l <filename>"},{value:"count-words",label:"number of words in a file",usage:"wc -w <filename>"},{value:"count-bytes",label:"number of bytes and characters",usage:"wc -c <filename>"}],create:[{value:"new-file",label:"a new file",usage:"touch <filename>"},{value:"new-folder",label:"a new folder",usage:"mkdir <foldername>"}],execute:[{value:"execute-file",label:"a file",usage:"./<filename>"}],find:[{value:"find-file",label:"a file with specific name in current directory",usage:"find . -name <filename>"},{value:"find-empty",label:"empty files and directories in the current directory",usage:"find . -empty"},{value:"find-file-perm",label:"a file with entered permissions in the current directory",usage:"find . -perm <permissions>"}],list:[{value:"all files and directories in the present working directory",label:"all files and directories in the present working directory",usage:"ls",nb:""},{value:"files in sub-directories as well",label:"files in sub-directories as well",usage:"ls -R"},{value:"hidden files as well",label:"hidden files as well",usage:"ls -a"},{value:"ls -al",label:"ls -al",usage:"files and directories with detailed information like permissions,size, owner, etc"}],move:[{value:"move-file",label:"file from one folder to another",usage:"mv <source> <destination>"},{value:"move-files",label:"many files from one place to another",usage:"mv <file1> <file2> ... <filen> <destination>"}],navigate:[{value:"nav-dir",label:"to a specific directory",usage:"cd <dir_path>"},{value:"nav-parent",label:"to the parent directory",usage:"cd ../"},{value:"nav-home",label:"to the home directory",usage:"cd ~"}],remove:[{value:"rm-file",label:"a single file",usage:"rm <filename>"},{value:"rm-files",label:"multiple files",usage:"rm <file1> <file2>"},{value:"rm-dir",label:"an empty directory",usage:"rmdir <directory-name>"},{value:"rm-file-dir",label:"non-empty directories and all file within them",usage:"rm -r <dirname>"}],sort:[{value:"sort",label:"contents of a file",usage:"sort <file name>",nb:"This command does not actually change the input file"},{value:"sort-new",label:"and write the output to a new file",usage:"sort -o <output-file> <input-file>"}],view:[{value:"view",label:"contents of a file",usage:"cat <file-name>"}]},S=t(7),C=t(21),x=t.n(C),O=t(22),T=t.n(O),L=t(6),A=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).initReactGA=function(){L.a.initialize("UA-134750291-3"),L.a.pageview("homepage")},t.handleToggle=function(e){var a=e.target.id;t.setState((function(e){return Object(r.a)({},a,!e[a])}),(function(){localStorage.setItem(a,t.state[a])}))},t.onFirstChange=function(e){t.state.secondOption?t.setState({firstOption:e,showSecond:!0,secondOption:null,showThird:!1,nb:"",usage:""}):1===N[e.value].length?(t.setState({firstOption:e,showSecond:!0}),t.onSecondChange(N[e.value][0])):t.setState({firstOption:e,showSecond:!0})},t.onSecondChange=function(e){e.usage?t.setState({nb:"",usage:""},(function(){t.setState({secondOption:e,showThird:!1,nb:e.nb,usage:e.usage,thirdOption:null})})):t.setState({secondOption:e,showThird:!0,thirdOption:null,nb:"",usage:""})},t.onThirdChange=function(e){t.setState({nb:"",usage:""},(function(){t.setState({thirdOption:e,nb:e.nb,usage:e.usage})}))},t.onCopy=function(){t.setState({copied:!0},(function(){t.timeout&&clearInterval(t.timeout),t.timeout=setTimeout((function(){t.setState({copied:!1})}),1e3)}))},t.copyUsage=function(){var e=document.createElement("textarea");e.value=t.state.usage,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e);var a=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);e.select(),document.execCommand("copy"),document.body.removeChild(e),t.onCopy(),a&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(a))},t.state={dark:!0,fastType:JSON.parse(localStorage.getItem("fastType"))||!1,firstOption:null,showSecond:!1,secondOption:null,showThird:!1,thirdOption:null,nb:"",usage:"",copied:!1},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.initReactGA()}},{key:"render",value:function(){var e=this.state,a=e.dark,t=e.firstOption,n=e.secondOption,o=e.showSecond,i=e.fastType,r=e.nb,s=e.usage,c=e.copied,u=i?0:50;return l.a.createElement("div",{className:T()("home",{dark:a})},l.a.createElement("div",{className:"container home__container"},l.a.createElement(w,{mode:a,onToggle:this.handleToggle,fastType:i}),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5"},l.a.createElement("h2",{className:"content__title  dark-white"},"Linux ",l.a.createElement("span",null,"Command")," Explorer"),l.a.createElement("p",{className:"content__subtitle dark-grey"},"Find the right commands you need without digging through the web."),l.a.createElement("div",{className:"options"},l.a.createElement("h4",{className:"options__title"},"I want to:"),l.a.createElement(S.a,{placeholder:"...",className:"options-select",classNamePrefix:"options-select",isSearchable:!0,onChange:this.onFirstChange,value:t,options:k}),o?l.a.createElement(S.a,{placeholder:"...",className:"options-select",classNamePrefix:"options-select",isSearchable:!0,onChange:this.onSecondChange,value:n,options:N[t.value]}):null)),l.a.createElement("div",{className:"col-7 boards"},l.a.createElement("div",{className:"board__group board__group--1 ".concat(_.isMobile&&!s?" d-none":"")},l.a.createElement("h2",{className:"board__title  dark-white"},"Usage"),l.a.createElement("div",{className:"board board--1"},l.a.createElement("pre",null,s.length?l.a.createElement(E.a,{avgTypingDelay:u,cursor:{show:!1}},s):l.a.createElement("div",null)),s.length?l.a.createElement("div",{className:"copy"},l.a.createElement("span",{className:"copy__popover ".concat(c?"show":"")},"command copied"),l.a.createElement("img",{className:"copy__image",onClick:this.copyUsage,src:x.a,alt:"Clipboard"})):null),r?l.a.createElement("div",{className:"board__group board__group--2"},l.a.createElement("h2",{className:"board__title  dark-white"},"Note"),l.a.createElement("div",{className:"board board--2"},l.a.createElement("pre",null,l.a.createElement(E.a,{avgTypingDelay:u,cursor:{show:!1}},r)))):null)))),l.a.createElement(v,{dark:a})))}}]),a}(n.Component),R=(t(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function j(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(l.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");R?(!function(e,a){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):j(a,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.76cf20b7.chunk.js.map