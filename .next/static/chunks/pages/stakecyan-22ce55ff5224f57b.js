(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[629],{55024:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stakecyan",function(){return t(18659)}])},18659:function(e,n,t){"use strict";t.r(n);var o=t(47568),a=t(70655),r=t(85893),i=t(23645),c=t(35553),s=t(67294),l=t(214),_=t.n(l),d="0x53d8C843c4bc8DB24ec3cc53c41923Ef83B1C66d";n.default=function(){var e=(0,i.SF)(),n=(0,i.U6)(),t=(0,i.cq)("0x1dA8132502c71C49213B0A9D51c155F60e779234","nft-drop").contract,l=(0,i.cq)("0xa98FfDBAEE3F2b3BFCb3dbFd879a34e6aF0ba80e","token").contract,u=(0,i.cq)(d),m=u.contract,p=u.isLoading,h=(0,i.YZ)(t,e).data,f=(0,i.mM)(l,e).data,v=(0,s.useState)([]),x=v[0],H=v[1],B=(0,s.useState)(),g=B[0],k=B[1];function b(){return(b=(0,o.Z)((function(n){return(0,a.__generator)(this,(function(o){switch(o.label){case 0:return e?[4,null===t||void 0===t?void 0:t.isApproved(e,d)]:[2];case 1:return o.sent()?[3,3]:[4,null===t||void 0===t?void 0:t.setApprovalForAll(d,!0)];case 2:o.sent(),o.label=3;case 3:return[4,null===m||void 0===m?void 0:m.call("stake",n)];case 4:return o.sent(),[2]}}))}))).apply(this,arguments)}function N(){return(N=(0,o.Z)((function(e){return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return[4,null===m||void 0===m?void 0:m.call("withdraw",e)];case 1:return n.sent(),[2]}}))}))).apply(this,arguments)}function w(){return(w=(0,o.Z)((function(){return(0,a.__generator)(this,(function(e){switch(e.label){case 0:return[4,null===m||void 0===m?void 0:m.call("claimRewards")];case 1:return e.sent(),[2]}}))}))).apply(this,arguments)}return(0,s.useEffect)((function(){function n(){return n=(0,o.Z)((function(){var n,r;return(0,a.__generator)(this,(function(i){switch(i.label){case 0:return[4,null===m||void 0===m?void 0:m.call("getStakedTokens",e)];case 1:return n=i.sent(),[4,Promise.all(null===n||void 0===n?void 0:n.map(function(){var e=(0,o.Z)((function(e){return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return[4,null===t||void 0===t?void 0:t.get(e.tokenId)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}()))];case 2:return r=i.sent(),H(r),console.log("setStakedNfts",r),[2]}}))})),n.apply(this,arguments)}m&&e&&function(){n.apply(this,arguments)}()}),[e,m,t]),(0,s.useEffect)((function(){function n(){return(n=(0,o.Z)((function(){var n;return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return[4,null===m||void 0===m?void 0:m.call("availableRewards",e)];case 1:return n=t.sent(),console.log("Loaded claimable rewards",n),k(n),[2]}}))}))).apply(this,arguments)}m&&e&&function(){n.apply(this,arguments)}()}),[e,m]),p?(0,r.jsx)("div",{children:"Loading"}):(0,r.jsxs)("div",{className:_().container,children:[(0,r.jsx)("h1",{className:_().h1,children:"Stake Your NFTs"}),(0,r.jsx)("hr",{className:"".concat(_().divider," ").concat(_().spacerTop)}),e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:"Your Tokens"}),(0,r.jsxs)("div",{className:_().tokenGrid,children:[(0,r.jsxs)("div",{className:_().tokenItem,children:[(0,r.jsx)("h3",{className:_().tokenLabel,children:"Claimable Rewards"}),(0,r.jsxs)("p",{className:_().tokenValue,children:[(0,r.jsx)("b",{children:g?c.formatUnits(g,18):"Loading..."})," ",null===f||void 0===f?void 0:f.symbol]})]}),(0,r.jsxs)("div",{className:_().tokenItem,children:[(0,r.jsx)("h3",{className:_().tokenLabel,children:"Current Balance"}),(0,r.jsxs)("p",{className:_().tokenValue,children:[(0,r.jsx)("b",{children:null===f||void 0===f?void 0:f.displayValue})," ",null===f||void 0===f?void 0:f.symbol]})]})]}),(0,r.jsx)("button",{className:"".concat(_().mainButton," ").concat(_().spacerTop),onClick:function(){return function(){return w.apply(this,arguments)}()},children:"Claim Rewards"}),(0,r.jsx)("hr",{className:"".concat(_().divider," ").concat(_().spacerTop)}),(0,r.jsx)("h2",{children:"Your Staked NFTs"}),(0,r.jsx)("div",{className:_().nftBoxGrid,children:null===x||void 0===x?void 0:x.map((function(e){return(0,r.jsxs)("div",{className:_().nftBox,children:[(0,r.jsx)(i.CH,{metadata:e.metadata,className:_().nftMedia}),(0,r.jsx)("h3",{children:e.metadata.name}),(0,r.jsx)("button",{className:"".concat(_().mainButton," ").concat(_().spacerBottom),onClick:function(){return function(e){return N.apply(this,arguments)}(e.metadata.id)},children:"Withdraw"})]},e.metadata.id.toString())}))}),(0,r.jsx)("hr",{className:"".concat(_().divider," ").concat(_().spacerTop)}),(0,r.jsx)("h2",{children:"Your Unstaked NFTs"}),(0,r.jsx)("div",{className:_().nftBoxGrid,children:null===h||void 0===h?void 0:h.map((function(e){return(0,r.jsxs)("div",{className:_().nftBox,children:[(0,r.jsx)(i.CH,{metadata:e.metadata,className:_().nftMedia}),(0,r.jsx)("h3",{children:e.metadata.name}),(0,r.jsx)("button",{className:"".concat(_().mainButton," ").concat(_().spacerBottom),onClick:function(){return function(e){return b.apply(this,arguments)}(e.metadata.id)},children:"Stake"})]},e.metadata.id.toString())}))})]}):(0,r.jsx)("button",{className:_().mainButton,onClick:n,children:"Connect Wallet"})]})}},214:function(e){e.exports={connect:"Home_connect__lnU7w",btn:"Home_btn__UGRT9",address:"Home_address__UT_ly",container:"Home_container__bCOhY",page:"Home_page__0ydta",pageContainer:"Home_pageContainer__wDxoE",arrowButton:"Home_arrowButton__1aqew",owner:"Home_owner__58_U6",btnContainer:"Home_btnContainer__TOUPE",header:"Home_header__GCVRv",left:"Home_left__T7LhQ",right:"Home_right__TcB_0",secondaryButton:"Home_secondaryButton__QO332",mainButton:"Home_mainButton__dUc5h",ourCollection:"Home_ourCollection__OxOvN",collectionContainer:"Home_collectionContainer__pwAKU",h1:"Home_h1__7tdRW",explain:"Home_explain__KljHm",purple:"Home_purple__zOX0E",divider:"Home_divider__c4Nl_",smallDivider:"Home_smallDivider__wG_2a",textInput:"Home_textInput__cA71M",imageInput:"Home_imageInput__SjLEG",contractBoxGrid:"Home_contractBoxGrid__epSaY",contractBox:"Home_contractBox__bxUXm",nftBoxGrid:"Home_nftBoxGrid__qFzCk",nftBox:"Home_nftBox__woiq_",optionSelectBox:"Home_optionSelectBox__2Ehnv",selectBoxTitle:"Home_selectBoxTitle__rVZ7Z",selectBoxDescription:"Home_selectBoxDescription__QANhO",tokenGrid:"Home_tokenGrid__vsv91",tokenItem:"Home_tokenItem__HsZqC",tokenLabel:"Home_tokenLabel__X56dZ",tokenValue:"Home_tokenValue__PYZU2",center:"Home_center__4BFgC",spacerTop:"Home_spacerTop__RGZTg",bigSpacerTop:"Home_bigSpacerTop__YrAdY",spacerBottom:"Home_spacerBottom__JmsFH",cardName:"Home_cardName__wxcZw",cardDescription:"Home_cardDescription__iWMlk",headerLogo:"Home_headerLogo__qHj_d",verticalSpacer:"Home_verticalSpacer__W1YaR",codeSnippet:"Home_codeSnippet__gwZEn",noUnderline:"Home_noUnderline__SEtQc",detailPageContainer:"Home_detailPageContainer__7zwXF",detailPageHr:"Home_detailPageHr__JnD4B",lightPurple:"Home_lightPurple__8ghLL",nftMedia:"Home_nftMedia__0EkUL",amountToClaim:"Home_amountToClaim__p1NtW",noGapBottom:"Home_noGapBottom__KnGYx"}},47568:function(e,n,t){"use strict";function o(e,n,t,o,a,r,i){try{var c=e[r](i),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(o,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function c(e){o(i,a,r,c,s,"next",e)}function s(e){o(i,a,r,c,s,"throw",e)}c(void 0)}))}}t.d(n,{Z:function(){return a}})}},function(e){e.O(0,[774,888,179],(function(){return n=55024,e(e.s=n);var n}));var n=e.O();_N_E=n}]);