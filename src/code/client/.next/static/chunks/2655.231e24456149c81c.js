"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2655],{42655:function(e,t,l){l.d(t,{diagram:function(){return y}});var a=l(84511),i=l(35772),n=l(17928),o=l(41200),s=l(33150);l(74548),l(41417),l(43571),l(35855),l(30152);let d=e=>o.e.sanitizeText(e,(0,o.c)()),r={dividerMargin:10,padding:5,textHeight:10,curve:void 0},c=function(e,t,l,a){let i=Object.keys(e);o.l.info("keys:",i),o.l.info(e),i.forEach(function(i){var n,s;let r=e[i],c={shape:"rect",id:r.id,domId:r.domId,labelText:d(r.id),labelStyle:"",style:"fill: none; stroke: black",padding:(null==(n=(0,o.c)().flowchart)?void 0:n.padding)??(null==(s=(0,o.c)().class)?void 0:s.padding)};t.setNode(r.id,c),p(r.classes,t,l,a,r.id),o.l.info("setNode",c)})},p=function(e,t,l,a,i){let n=Object.keys(e);o.l.info("keys:",n),o.l.info(e),n.filter(t=>e[t].parent==i).forEach(function(l){var n,s;let r=e[l],c=r.cssClasses.join(" "),p=r.label??r.id,b={labelStyle:"",shape:"class_box",labelText:d(p),classData:r,rx:0,ry:0,class:c,style:"",id:r.id,domId:r.domId,tooltip:a.db.getTooltip(r.id,i)||"",haveCallback:r.haveCallback,link:r.link,width:"group"===r.type?500:void 0,type:r.type,padding:(null==(n=(0,o.c)().flowchart)?void 0:n.padding)??(null==(s=(0,o.c)().class)?void 0:s.padding)};t.setNode(r.id,b),i&&t.setParent(r.id,i),o.l.info("setNode",b)})},b=function(e,t,l,a){o.l.info(e),e.forEach(function(e,n){var s,c;let p=e.text,b={labelStyle:"",shape:"note",labelText:d(p),noteData:e,rx:0,ry:0,class:"",style:"",id:e.id,domId:e.id,tooltip:"",type:"note",padding:(null==(s=(0,o.c)().flowchart)?void 0:s.padding)??(null==(c=(0,o.c)().class)?void 0:c.padding)};if(t.setNode(e.id,b),o.l.info("setNode",b),!e.class||!(e.class in a))return;let f=l+n,u={id:`edgeNote${f}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,o.o)(r.curve,i.c_6)};t.setEdge(e.id,e.class,u,f)})},f=function(e,t){let l=(0,o.c)().flowchart,a=0;e.forEach(function(e){var n;a++;let s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+a,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:g(e.relation.type1),arrowTypeEnd:g(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,o.o)(null==l?void 0:l.curve,i.c_6)};if(o.l.info(s,e),void 0!==e.style){let t=(0,o.k)(e.style);s.style=t.style,s.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(n=(0,o.c)().flowchart)?void 0:n.htmlLabels)??(0,o.c)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(o.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,s,a)})},u=async function(e,t,l,a){let d;o.l.info("Drawing class - ",t);let r=(0,o.c)().flowchart??(0,o.c)().class,u=(0,o.c)().securityLevel;o.l.info("config:",r);let g=(null==r?void 0:r.nodeSpacing)??50,y=(null==r?void 0:r.rankSpacing)??50,h=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:g,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),v=a.db.getNamespaces(),w=a.db.getClasses(),k=a.db.getRelations(),x=a.db.getNotes();o.l.info(k),c(v,h,t,a),p(w,h,t,a),f(k,h),b(x,h,k.length+1,w),"sandbox"===u&&(d=(0,i.Ys)("#i"+t));let m="sandbox"===u?(0,i.Ys)(d.nodes()[0].contentDocument.body):(0,i.Ys)("body"),T=m.select(`[id="${t}"]`),S=m.select("#"+t+" g");if(await (0,s.r)(S,h,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),o.u.insertTitle(T,"classTitleText",(null==r?void 0:r.titleTopMargin)??5,a.db.getDiagramTitle()),(0,o.p)(h,T,null==r?void 0:r.diagramPadding,null==r?void 0:r.useMaxWidth),!(null==r?void 0:r.htmlLabels)){let e="sandbox"===u?d.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let t of l){let l=t.getBBox(),a=e.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("rx",0),a.setAttribute("ry",0),a.setAttribute("width",l.width),a.setAttribute("height",l.height),t.insertBefore(a,t.firstChild)}}};function g(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}let y={parser:a.p,db:a.d,renderer:{setConf:function(e){r={...r,...e}},draw:u},styles:a.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,a.d.clear()}}}}]);