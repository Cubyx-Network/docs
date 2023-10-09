"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[667],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>p});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),d=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},o=function(e){var n=d(e.components);return r.createElement(a.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=d(t),h=i,p=c["".concat(a,".").concat(h)]||c[h]||m[h]||l;return t?r.createElement(p,s(s({ref:n},o),{},{components:t})):r.createElement(p,s({ref:n},o))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=h;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u[c]="string"==typeof e?e:i,s[1]=u;for(var d=2;d<l;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const l={},s="Richtlinie f\xfcr Pull Requests",u={unversionedId:"guidelines/pull-requests",id:"guidelines/pull-requests",title:"Richtlinie f\xfcr Pull Requests",description:"Was ist ein Pull Request?",source:"@site/docs/guidelines/pull-requests.md",sourceDirName:"guidelines",slug:"/guidelines/pull-requests",permalink:"/docs/guidelines/pull-requests",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"generalSidebar",previous:{title:"Richtlinie f\xfcr Commits",permalink:"/docs/guidelines/commits"},next:{title:"Automatische Changelogs mit Release Please",permalink:"/docs/guidelines/release-please"}},a={},d=[{value:"Was ist ein Pull Request?",id:"was-ist-ein-pull-request",level:2},{value:"Was sollte beachtet werden?",id:"was-sollte-beachtet-werden",level:2},{value:"Erstellung",id:"erstellung",level:3},{value:"Review",id:"review",level:3},{value:"CI und Checks",id:"ci-und-checks",level:3},{value:"Merge",id:"merge",level:3}],o={toc:d},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"richtlinie-f\xfcr-pull-requests"},"Richtlinie f\xfcr Pull Requests"),(0,i.kt)("h2",{id:"was-ist-ein-pull-request"},"Was ist ein Pull Request?"),(0,i.kt)("p",null,"Gerade bei gro\xdfen Projekten ist es wichtig einen \xdcberblick zu behalten und schadhafte \xc4nderungen auf dem main-Branch zu vermeiden. Aus diesem Grund werden neue Features oder Bugfixes zun\xe4chst auf einem seperaten Branch entwickelt. Wenn die \xc4nderungen fertig sind, wird ein Pull Request erstellt. Dieser Pull Request wird dann von einem Maintainer gepr\xfcft und anschlie\xdfend gemerged. Dabei wird der Code auf dem main-Branch aktualisiert und die \xc4nderungen sind f\xfcr alle sichtbar."),(0,i.kt)("h2",{id:"was-sollte-beachtet-werden"},"Was sollte beachtet werden?"),(0,i.kt)("h3",{id:"erstellung"},"Erstellung"),(0,i.kt)("p",null,"Ein Pull Request braucht zu aller erst einen Titel. Dieser sollte in wenigen Worten die \xc4nderung beschreiben. Das ",(0,i.kt)("a",{parentName:"p",href:"commits"},"Conventional Commits"),"-Format sollte dabei auch hier eingehalten werden. Au\xdferdem sollte der Pull Request eine Beschreibung haben, die die \xc4nderungen genauer beschreibt."),(0,i.kt)("p",null,"Oftmals entstehen Pull Requests aus Issues heraus. In diesem Fall sollte der Pull Request mit dem Issue verlinkt werden. Dazu muss einfach das Issue mit einem Keyword in der Beschreibung verlinkt werden. Eine \xdcbersicht \xfcber die Keywords gibt es ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue"},"hier"),"."),(0,i.kt)("p",null,"Wenn m\xf6glich sollte der Pull Request auch den bestehenden Labels zugeordnet werden. Diese helfen dabei, den Pull Request zu kategorisieren und zu priorisieren. Sollte ein Entwickler nicht die Berechtigung haben, Labels zu setzen, wird dies von einem Maintainer \xfcbernommen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fix: Rechtschreibfehler in der README.md behoben\n\nIn der README.md war ein Rechtschreibfehler. Dieser wurde behoben.\nfixes #123\n\nLabels: bug, documentation\n")),(0,i.kt)("h3",{id:"review"},"Review"),(0,i.kt)("p",null,"Damit nicht ungewollte \xc4nderungen auf den main-Branch gelangen, sollte jeder Pull Request von mindestens einem Maintainer gesichtet werden. Dabei wird der Code auf Fehler und Sicherheitsl\xfccken gepr\xfcft. Au\xdferdem wird gepr\xfcft, ob der Code den Richtlinien entspricht. Sollte der Code nicht den Richtlinien entsprechen, wird der Pull Request abgelehnt oder der Maintainer fordert \xc4nderungen an. Sollte der Pull Request abgelehnt werden, wird dies mit einem Kommentar begr\xfcndet."),(0,i.kt)("h3",{id:"ci-und-checks"},"CI und Checks"),(0,i.kt)("p",null,"Oftmals werden bei Pull Requests automatische Tests ausgef\xfchrt. Diese Tests pr\xfcfen, ob der Code den Richtlinien entspricht und ob der Code funktioniert. Sollte ein Test fehlschlagen, wird der Pull Request nicht gemerged. In diesem Fall sollte der Entwickler den Fehler beheben und den Pull Request erneut erstellen."),(0,i.kt)("h3",{id:"merge"},"Merge"),(0,i.kt)("p",null,"Kann ein Pull Request germerged werden, wird dies von einem Maintainer \xfcbernommen. Dabei werden die \xc4nderungen auf den main-Branch \xfcbertragen. Anschlie\xdfend wird der Pull Request geschlossen und der damit verbundene Branch gel\xf6scht."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Damit keine Probleme mit der Changelog-Generierung entstehen, sollte der Pull Request mit der Squash-Option gemerged werden. Dabei werden alle Commits zu einem Commit zusammengefasst, welcher den ",(0,i.kt)("a",{parentName:"p",href:"commits"},"Conventional Commits"),"-Richtlinien entspricht.\nDieser Commit wird dann als Merge-Commit verwendet und erscheint im Changelog.")))}m.isMDXComponent=!0}}]);