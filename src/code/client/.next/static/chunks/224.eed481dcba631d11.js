"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224,8340],{965:function(e,t,a){a.r(t),a.d(t,{ChatItem:function(){return p},ChatList:function(){return j}});var n=a(7437),s=a(5592),c=a(2532),i=a.n(c),l=a(8122),r=a(8566),d=a(4989),o=a(5954),h=a(9380),m=a(2142),u=a(2265),x=a(6537);function p(e){let t=(0,u.useRef)(null);return(0,u.useEffect)(()=>{if(e.selected&&t.current){var a;null===(a=t.current)||void 0===a||a.scrollIntoView({block:"center"})}},[e.selected]),(0,n.jsx)(l._l,{draggableId:"".concat(e.id),index:e.index,children:a=>(0,n.jsxs)("div",{className:"".concat(i()["chat-item"]," ").concat(e.selected&&i()["chat-item-selected"]),onClick:e.onClick,ref:e=>{t.current=e,a.innerRef(e)},...a.draggableProps,...a.dragHandleProps,title:"".concat(e.title,"\n").concat(d.ZP.ChatItem.ChatItemCount(e.count)),children:[e.narrow?(0,n.jsxs)("div",{className:i()["chat-item-narrow"],children:[(0,n.jsx)("div",{className:i()["chat-item-avatar"]+" no-dark",children:(0,n.jsx)(m.MaskAvatar,{mask:e.mask})}),(0,n.jsx)("div",{className:i()["chat-item-narrow-count"],children:e.count})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:i()["chat-item-title"],children:e.title}),(0,n.jsxs)("div",{className:i()["chat-item-info"],children:[(0,n.jsx)("div",{className:i()["chat-item-count"],children:d.ZP.ChatItem.ChatItemCount(e.count)}),(0,n.jsx)("div",{className:i()["chat-item-date"],children:e.time})]})]}),(0,n.jsx)("div",{className:i()["chat-item-delete"],onClickCapture:e.onDelete,children:(0,n.jsx)(s.Z,{})})]})})}function j(e){let[t,a,s,c]=(0,r.aK)(e=>[e.sessions,e.currentSessionIndex,e.selectSession,e.moveSession]),m=(0,r.aK)(),u=(0,o.s0)();return(0,n.jsx)(l.Z5,{onDragEnd:e=>{let{destination:t,source:a}=e;t&&(t.droppableId!==a.droppableId||t.index!==a.index)&&c(a.index,t.index)},children:(0,n.jsx)(l.bK,{droppableId:"chat-list",children:c=>(0,n.jsxs)("div",{className:i()["chat-list"],ref:c.innerRef,...c.droppableProps,children:[t.map((t,c)=>(0,n.jsx)(p,{title:t.topic,time:new Date(t.lastUpdate).toLocaleString(),count:t.messages.length,id:t.id,index:c,selected:c===a,onClick:()=>{u(h.y$.Chat),s(c)},onDelete:async()=>{(!e.narrow||await (0,x.i0)(d.ZP.Home.DeleteChat))&&m.deleteSession(c)},narrow:e.narrow,mask:t.mask},t.id)),c.placeholder]})})})}}}]);