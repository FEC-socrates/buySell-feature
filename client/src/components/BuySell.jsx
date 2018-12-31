import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Form = styled.form`
background-color: rgb(255, 255, 255);
border-bottom-color: rgb(244, 244, 245);
border-bottom-left-radius: 2px;
border-bottom-right-radius: 2px;
border-bottom-style: none;
border-bottom-width: 0px;
border-image-outset: 0px;
border-image-repeat: stretch;
border-image-slice: 100%;
border-image-source: none;
border-image-width: 1;
border-left-color: rgb(244, 244, 245);
border-left-style: none;
border-left-width: 0px;
border-right-color: rgb(244, 244, 245);
border-right-style: none;
border-right-width: 0px;
border-top-color: rgb(244, 244, 245);
border-top-left-radius: 2px;
border-top-right-radius: 2px;
border-top-style: none;
border-top-width: 0px;
box-shadow: rgba(0, 0, 0, 0.01) 0px 0px 4px 1px, rgba(48, 51, 51, 0.09) 0px 3px 24px 0px;
box-sizing: border-box;
color: rgb(23, 23, 24);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
margin-top: 0px;
padding-bottom: 0px;
padding-left: 24px;
padding-right: 24px;
padding-top: 0px;
position: relative;
text-align: left;
text-size-adjust: 100%;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Header = styled.header`
align-items: center;
border-bottom-color: rgb(244, 244, 245);
border-bottom-style: solid;
border-bottom-width: 1px;
border-left-color: rgb(244, 244, 245);
border-right-color: rgb(244, 244, 245);
border-top-color: rgb(244, 244, 245);
box-sizing: border-box;
color: rgb(23, 23, 24);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 52px;
justify-content: space-between;
letter-spacing: 0.25px;
line-height: 19px;
margin-bottom: 0px;
margin-left: -24px;
margin-right: -24px;
margin-top: 0px;
padding-bottom: 0px;
padding-left: 24px;
padding-right: 24px;
padding-top: 4px;
text-align: left;
text-size-adjust: 100%;
width: 275.766px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-box-pack: justify;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const TitleHeader = styled.div`
align-items: center;
box-sizing: border-box;
color: rgb(23, 23, 24);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
position: relative;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s;
transition-duration: 0.25s;
transition-property: border-color;
transition-timing-function: ease;
width: 227.766px;
-webkit-box-align: center;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuySellDiv = styled.div`
box-sizing: border-box;
color: rgb(23, 23, 24);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
width: 114.828px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuySellDiv2 = styled.div`
box-sizing: border-box;
color: rgb(23, 23, 24);
display: flex;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
width: 114.828px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuyDiv = styled.div`
box-sizing: border-box;
color: rgb(23, 23, 24);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
overflow-x: hidden;
overflow-y: hidden;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s, 0s;
transition-duration: 0.25s, 0.25s;
transition-property: margin-right, opacity;
transition-timing-function: ease, ease;
white-space: nowrap;
width: 63px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BuyDiv2 = styled.div`
box-sizing: border-box;
color: rgb(23, 23, 24);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 13px;
font-weight: 400;
height: 47px;
letter-spacing: 0.25px;
line-height: 19px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s;
transition-duration: 0.25s;
transition-property: width;
transition-timing-function: ease;
white-space: nowrap;
width: 63px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Buy = styled.h3`
border-bottom-color: rgb(244, 85, 49);
border-bottom-style: solid;
border-bottom-width: 2px;
border-left-color: rgb(244, 85, 49);
border-right-color: rgb(244, 85, 49);
border-top-color: rgb(244, 85, 49);
box-sizing: border-box;
color: rgb(244, 85, 49);
display: block;
font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
font-size: 16px;
font-weight: 500;
height: 47px;
letter-spacing: normal;
line-height: 22px;
margin-block-end: 0px;
margin-block-start: 0px;
margin-bottom: 0px;
margin-inline-end: 12px;
margin-inline-start: 0px;
margin-left: 0px;
margin-right: 12px;
margin-top: 0px;
padding-top: 12px;
text-align: left;
text-size-adjust: 100%;
transition-delay: 0s, 0s;
transition-duration: 0.25s, 0.25s;
transition-property: border-color, color;
transition-timing-function: ease, ease;
white-space: nowrap;
width: 51px;
-webkit-box-direction: normal;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const SellDiv = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
47px
;
letter-spacing:
0.25px
;
line-height:
19px
;
overflow-x:
hidden
;
overflow-y:
hidden
;
text-align:
left
;
text-size-adjust:
100%
;
transition-delay:
0s, 0s
;
transition-duration:
0.25s, 0.25s
;
transition-property:
margin-right, opacity
;
transition-timing-function:
ease, ease
;
white-space:
nowrap
;
width:
51.8281px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const SellDiv2 = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
47px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
transition-delay:
0s
;
transition-duration:
0.25s
;
transition-property:
width
;
transition-timing-function:
ease
;
white-space:
nowrap
;
width:
51.8281px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Sell = styled.h3`
border-bottom-color:
rgba(0, 0, 0, 0)
;
border-bottom-style:
solid
;
border-bottom-width:
2px
;
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
cursor:
pointer
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
16px
;
font-weight:
500
;
height:
47px
;
letter-spacing:
normal
;
line-height:
22px
;
margin-block-end:
0px
;
margin-block-start:
0px
;
margin-bottom:
0px
;
margin-inline-end:
0px
;
margin-inline-start:
0px
;
margin-left:
0px
;
margin-right:
0px
;
margin-top:
0px
;
padding-top:
12px
;
text-align:
left
;
text-size-adjust:
100%
;
transition-delay:
0s, 0s
;
transition-duration:
0.25s, 0.25s
;
transition-property:
border-color, color
;
transition-timing-function:
ease, ease
;
white-space:
nowrap
;
width:
51.8281px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Body = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
302px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
227.766px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const MainBodyDiv = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
169px
;
letter-spacing:
0.25px
;
line-height:
19px
;
padding-bottom:
12px
;
padding-top:
12px
;
position:
relative
;
text-align:
left
;
text-size-adjust:
100%
;
width:
227.766px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const ButtonDiv = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
85px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
227.766px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const ButtonDiv2 = styled.div`
background-color:
rgb(255, 255, 255)
;
border-top-color:
rgba(0, 0, 0, 0)
;
border-top-style:
solid
;
border-top-width:
1px
;
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
85px
;
letter-spacing:
0.25px
;
line-height:
19px
;
margin-bottom:
0px
;
margin-left:
-24px
;
margin-right:
-24px
;
margin-top:
0px
;
padding-bottom:
24px
;
padding-left:
24px
;
padding-right:
24px
;
padding-top:
12px
;
text-align:
left
;
text-size-adjust:
100%
;
transition-delay:
0s
;
transition-duration:
0.25s
;
transition-property:
border-color
;
transition-timing-function:
ease
;
width:
275.766px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const ButtonDiv3 = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
48px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
227.766px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const BodyLabel = styled.label`
  width: 227.77px;
  height: 48px;
`;

const BodyDiv = styled.div`
  border: 1px solid #ddd;
`;

const BodyInput = styled.input`
  width: 82px;
  height: 36px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
align-items:
center
;
background-attachment:
scroll
;
background-clip:
border-box
;
background-color:
rgb(244, 85, 49)
;
background-image:
none
;
background-origin:
padding-box
;
background-position-x:
0%
;
background-position-y:
0%
;
background-repeat-x:
;
background-repeat-y:
;
background-size:
auto
;
border-bottom-color:
rgb(244, 85, 49)
;
border-bottom-left-radius:
4px
;
border-bottom-right-radius:
4px
;
border-bottom-style:
solid
;
border-bottom-width:
1px
;
border-image-outset:
0px
;
border-image-repeat:
stretch
;
border-image-slice:
100%
;
border-image-source:
none
;
border-image-width:
1
;
border-left-color:
rgb(244, 85, 49)
;
border-left-style:
solid
;
border-left-width:
1px
;
border-right-color:
rgb(244, 85, 49)
;
border-right-style:
solid
;
border-right-width:
1px
;
border-top-color:
rgb(244, 85, 49)
;
border-top-left-radius:
4px
;
border-top-right-radius:
4px
;
border-top-style:
solid
;
border-top-width:
1px
;
box-sizing:
border-box
;
color:
rgb(255, 255, 255)
;
cursor:
pointer
;
display:
inline-flex
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-stretch:
100%
;
font-style:
normal
;
font-variant-caps:
normal
;
font-variant-east-asian:
normal
;
font-variant-ligatures:
normal
;
font-variant-numeric:
normal
;
font-weight:
500
;
height:
48px
;
justify-content:
center
;
letter-spacing:
normal
;
line-height:
14.95px
;
margin-bottom:
0px
;
margin-left:
0px
;
margin-right:
0px
;
margin-top:
0px
;
overflow-x:
visible
;
overflow-y:
visible
;
padding-bottom:
0px
;
padding-left:
32px
;
padding-right:
32px
;
padding-top:
0px
;
text-align:
center
;
text-indent:
0px
;
text-rendering:
auto
;
text-shadow:
none
;
text-size-adjust:
100%
;
text-transform:
none
;
width:
227.766px
;
word-spacing:
0px
;
writing-mode:
horizontal-tb
;
-webkit-appearance:
none
;
-webkit-box-align:
center
;
-webkit-box-direction:
normal
;
-webkit-box-pack:
center
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
-webkit-border-image:
none
;
`;

const BuyingPowerDiv = styled.div`
align-items:
center
;
border-bottom-color:
rgb(244, 244, 245)
;
border-left-color:
rgb(244, 244, 245)
;
border-right-color:
rgb(244, 244, 245)
;
border-top-color:
rgb(244, 244, 245)
;
border-top-style:
solid
;
border-top-width:
1px
;
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
flex
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
48px
;
justify-content:
center
;
letter-spacing:
0.25px
;
line-height:
19px
;
margin-bottom:
0px
;
margin-left:
-24px
;
margin-right:
-24px
;
margin-top:
0px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
275.766px
;
-webkit-box-align:
center
;
-webkit-box-direction:
normal
;
-webkit-box-pack:
center
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const FormGroup = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
48px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
227.766px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Label = styled.label`
align-items:
center
;
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
cursor:
default
;
display:
flex
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
48px
;
justify-content:
space-between
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
white-space:
nowrap
;
width:
227.766px
;
-webkit-box-align:
center
;
-webkit-box-direction:
normal
;
-webkit-box-pack:
justify
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const Shares = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
cursor:
default
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
19px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
white-space:
nowrap
;
width:
41.6719px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const SharesInputDiv = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
cursor:
default
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
36px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
white-space:
nowrap
;
width:
82px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const SharesInput = styled.input`
background-attachment:
scroll
;
background-clip:
border-box
;
background-color:
rgb(250, 250, 250)
;
background-image:
none
;
background-origin:
padding-box
;
background-position-x:
0%
;
background-position-y:
0%
;
background-repeat-x:
;
background-repeat-y:
;
background-size:
auto
;
border-bottom-color:
rgb(250, 250, 250)
;
border-bottom-left-radius:
4px
;
border-bottom-right-radius:
4px
;
border-bottom-style:
solid
;
border-bottom-width:
1px
;
border-image-outset:
0px
;
border-image-repeat:
stretch
;
border-image-slice:
100%
;
border-image-source:
none
;
border-image-width:
1
;
border-left-color:
rgb(250, 250, 250)
;
border-left-style:
solid
;
border-left-width:
1px
;
border-right-color:
rgb(250, 250, 250)
;
border-right-style:
solid
;
border-right-width:
1px
;
border-top-color:
rgb(250, 250, 250)
;
border-top-left-radius:
4px
;
border-top-right-radius:
4px
;
border-top-style:
solid
;
border-top-width:
1px
;
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
cursor:
text
;
display:
inline-block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-stretch:
100%
;
font-style:
normal
;
font-variant-caps:
normal
;
font-variant-east-asian:
normal
;
font-variant-ligatures:
normal
;
font-variant-numeric:
normal
;
font-weight:
400
;
height:
36px
;
letter-spacing:
normal
;
line-height:
19.5px
;
margin-bottom:
0px
;
margin-left:
0px
;
margin-right:
0px
;
margin-top:
0px
;
outline-color:
rgb(23, 23, 24)
;
outline-style:
none
;
outline-width:
0px
;
overflow-x:
visible
;
overflow-y:
visible
;
padding-bottom:
0px
;
padding-left:
13px
;
padding-right:
13px
;
padding-top:
0px
;
text-align:
right
;
text-indent:
0px
;
text-rendering:
auto
;
text-shadow:
none
;
text-size-adjust:
100%
;
text-transform:
none
;
transition-delay:
0s
;
transition-duration:
0.2s
;
transition-property:
border-color
;
transition-timing-function:
ease
;
white-space:
nowrap
;
width:
82px
;
word-spacing:
0px
;
writing-mode:
horizontal-tb
;
-webkit-appearance:
none
;
-webkit-box-direction:
normal
;
-webkit-rtl-ordering:
logical
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
-webkit-border-image:
none
;
`;

const MarketPriceRow = styled.div`
align-items:
center
;
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
flex
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
48px
;
justify-content:
space-between
;
letter-spacing:
0.25px
;
line-height:
19px
;
padding-right:
12px
;
position:
relative
;
text-align:
left
;
text-size-adjust:
100%
;
white-space:
nowrap
;
width:
227.766px
;
-webkit-box-align:
center
;
-webkit-box-direction:
normal
;
-webkit-box-pack:
justify
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const MarketPriceDiv1 = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
48px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
white-space:
nowrap
;
width:
78.1719px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const MarketPriceDiv2 = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
400
;
height:
48px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
white-space:
nowrap
;
width:
78.1719px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const MarketPrice = styled.a`
align-items:
center
;
background-color:
rgba(0, 0, 0, 0)
;
border-bottom-color:
rgba(0, 0, 0, 0)
;
border-bottom-style:
solid
;
border-bottom-width:
2px
;
box-sizing:
border-box
;
color:
rgb(244, 85, 49)
;
cursor:
pointer
;
display:
flex
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
500
;
height:
48px
;
letter-spacing:
0.25px
;
line-height:
19px
;
padding-top:
2px
;
text-align:
left
;
text-decoration-color:
rgb(244, 85, 49)
;
text-decoration-line:
none
;
text-decoration-style:
solid
;
text-size-adjust:
100%
;
white-space:
nowrap
;
width:
78.1719px
;
-webkit-box-align:
center
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const MarketPriceSpan = styled.span`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
500
;
height:
19px
;
letter-spacing:
0.25px
;
line-height:
19px
;
overflow-x:
hidden
;
overflow-y:
hidden
;
text-align:
right
;
text-overflow:
ellipsis
;
text-size-adjust:
100%
;
white-space:
nowrap
;
width:
47.9219px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const EstimatedCostRow = styled.div`
border-bottom-color:
rgb(244, 244, 245)
;
border-left-color:
rgb(244, 244, 245)
;
border-right-color:
rgb(244, 244, 245)
;
border-top-color:
rgb(244, 244, 245)
;
border-top-style:
solid
;
border-top-width:
1px
;
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
500
;
height:
49px
;
letter-spacing:
0.25px
;
line-height:
19px
;
padding-right:
12px
;
text-align:
left
;
text-size-adjust:
100%
;
width:
227.766px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const EstimatedCostLabel = styled.label`
align-items:
center
;
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
cursor:
default
;
display:
flex
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
500
;
height:
48px
;
justify-content:
space-between
;
letter-spacing:
0.25px
;
line-height:
19px
;
min-height:
48px
;
text-align:
left
;
text-size-adjust:
100%
;
white-space:
nowrap
;
width:
215.766px
;
-webkit-box-align:
center
;
-webkit-box-direction:
normal
;
-webkit-box-pack:
justify
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const ECDiv1 = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
cursor:
default
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
500
;
height:
19px
;
letter-spacing:
0.25px
;
line-height:
19px
;
margin-right:
12px
;
min-width:
48px
;
overflow-x:
hidden
;
overflow-y:
hidden
;
text-align:
left
;
text-overflow:
ellipsis
;
text-size-adjust:
100%
;
white-space:
nowrap
;
width:
91.5469px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const ECDiv2 = styled.div`
box-sizing:
border-box
;
color:
rgb(23, 23, 24)
;
cursor:
default
;
display:
block
;
font-family:
"DIN Pro", -apple-system, system-ui, sans-serif
;
font-size:
13px
;
font-weight:
500
;
height:
19px
;
letter-spacing:
0.25px
;
line-height:
19px
;
text-align:
left
;
text-size-adjust:
100%
;
white-space:
nowrap
;
width:
33.5625px
;
-webkit-box-direction:
normal
;
-webkit-tap-highlight-color:
rgba(0, 0, 0, 0)
;
`;

const newOne = styled.div`

`;

class BuySell extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        stockName: props.stock.stockName,
        stockTicker: props.stock.stockTicker,
        currentPrice: props.stock.currentPrice,
        shares: 0,
        estimatedCost: 0
      }
      this.buyStock = this.buyStock.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    var cost = (e.target.value * this.state.currentPrice)
    this.setState({
      shares: e.target.value,
      estimatedCost: cost
    })
  }

  buyStock(e) {
    const transaction = {
      stockName: this.state.stockName,
      stockTicker: this.state.stockTicker,
      currentPrice: this.state.currentPrice,
      quantity: this.state.shares,
    };
    if (this.state.shares !== 0){
      axios.post('/transactions', transaction)
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }

  render() {
    return (
    <Form>
      <Header>
        <TitleHeader>
          <BuySellDiv>
            <BuySellDiv2>
              <BuyDiv>
                <BuyDiv2>
                  <Buy>
                  Buy {this.state.stockTicker}
                  </Buy>
                </BuyDiv2>
              </BuyDiv>
              <SellDiv>
                <SellDiv2>
                  <Sell>
                  Sell {this.state.stockTicker}
                  </Sell>
                </SellDiv2>
              </SellDiv>
            </BuySellDiv2>
          </BuySellDiv>
        </TitleHeader>
      </Header>
      <Body>
        <MainBodyDiv>
        <FormGroup>
          <Label>
            <Shares>Shares</Shares>
            <SharesInputDiv>
              <SharesInput onChange={this.handleChange}></SharesInput>
            </SharesInputDiv>
          </Label>
        </FormGroup>
        <MarketPriceRow>
          <MarketPriceDiv1>
            <MarketPriceDiv2>
              <MarketPrice>Market Price</MarketPrice>
            </MarketPriceDiv2>
            <MarketPriceSpan>{this.state.currentPrice}</MarketPriceSpan>
          </MarketPriceDiv1>
        </MarketPriceRow>
        <EstimatedCostRow>
          <EstimatedCostLabel>
            <ECDiv1>Estimated Cost</ECDiv1>
            <ECDiv2>{this.state.estimatedCost}</ECDiv2>
          </EstimatedCostLabel>
        </EstimatedCostRow>
        </MainBodyDiv>
        <ButtonDiv>
          <ButtonDiv2>
            <ButtonDiv3>
            <Button onClick={this.buyStock}>BUY</Button>
            </ButtonDiv3>
          </ButtonDiv2>
        </ButtonDiv>
        <BuyingPowerDiv>$95.42
          Buying Power Available
        </BuyingPowerDiv>
      </Body>
    </Form>
    );
  }
};

export default BuySell;
