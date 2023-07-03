import{r as c,R as e}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";function S({json:m,jsonClassName:{booleanClassName:i="",braceClassName:p="",bracketClassName:d="",className:X="",commaClassName:E="",falseClassName:b="",nullClassName:h="",numberClassName:O="",propertyClassName:N="",stringClassName:A="",tabSpaceClassName:J="",trueClassName:_=""}={},jsonStyle:{booleanStyle:y={},braceStyle:g={},bracketStyle:f={},commaStyle:j={},falseStyle:B={},nullStyle:D={},numberStyle:$={},propertyStyle:F={},stringStyle:q={},style:x={},tabSpaceStyle:V={},trueStyle:v={}}={},tabWith:W=2}){const k=c.useMemo(()=>JSON.parse(m),[m]),n=c.useCallback(t=>e.createElement("span",{className:J,style:V}," ".repeat(W*t)),[J,V,W]),l=c.useCallback((t,r)=>{switch(Object.prototype.toString.call(t)){case"[object Number]":return e.createElement("span",{className:O,style:$},t);case"[object String]":return e.createElement("span",{className:A,style:q},`"${t}"`);case"[object Boolean]":return t?e.createElement("span",{className:`${i} ${_}`,style:{...y,...v}},"true"):e.createElement("span",{className:`${i} ${b}`,style:{...y,...B}},"false");case"[object Object]":return e.createElement(e.Fragment,null,e.createElement("span",{className:p,style:g},"{"),e.createElement("br",null),Object.entries(t).map(([a,s],o,I)=>e.createElement(e.Fragment,{key:o},n(r+1),e.createElement("span",{className:N,style:F},`"${a}": `),l(s,r+1),o!==I.length-1&&e.createElement("span",{className:E,style:j},","),e.createElement("br",null))),n(r),e.createElement("span",{className:p,style:g},"}"));case"[object Array]":return e.createElement(e.Fragment,null,e.createElement("span",{className:d,style:f},"["),e.createElement("br",null),t.map((a,s,o)=>e.createElement(e.Fragment,{key:s},n(r+1),l(a,r+1),s!==o.length-1&&e.createElement("span",{className:E,style:j},","),e.createElement("br",null))),n(r),e.createElement("span",{className:d,style:f},"]"));case"[object Null]":return e.createElement("span",{className:h,style:D},"null");default:return e.createElement("span",null,"type error")}},[i,y,p,g,d,f,E,j,b,B,h,D,O,$,N,F,n,A,q,_,v]),z=c.useMemo(()=>l(k,0),[l,k]);return e.createElement("div",{className:X,style:x},e.createElement("div",null,z))}try{src.displayName="src",src.__docgenInfo={description:"A React component that formats and displays JSON data in a styled manner.",displayName:"src",props:{json:{defaultValue:null,description:"The JSON data to be formatted.",name:"json",required:!0,type:{name:"string"}},jsonClassName:{defaultValue:null,description:"Optional class names for different elements of the JSON formatter.",name:"jsonClassName",required:!1,type:{name:"JsonClassName"}},jsonStyle:{defaultValue:null,description:"Optional inline styles for different elements of the JSON formatter.",name:"jsonStyle",required:!1,type:{name:"JsonStyle"}},tabWith:{defaultValue:{value:"2"},description:"The width of the tab space. Default is 2.",name:"tabWith",required:!1,type:{name:"number"}}}}}catch{}const K={component:S},u={args:{json:`{
        "string":"ABCDE",
        "number":1,
        "null":null,
        "boolean":true,
        "object":{
           "string":"ABCDE",
           "number":1,
           "null":null,
           "boolean":true
        },
        "array":[
           1,
           2,
           3,
           4,
           {
           "string":"ABCDE",
           "number":1,
           "null":null,
           "boolean":true,
              "array":[
           1,
           2,
           3,
           4,
           {
           "string":"ABCDE",
           "number":1,
           "null":null,
           "boolean":true
        }
        ]
        }
        ]
     }
     `,jsonStyle:{numberStyle:{color:"darkorange"},propertyStyle:{color:"red"},stringStyle:{color:"green"}},tabWith:4}};var w,M,P;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    json: \`{
        "string":"ABCDE",
        "number":1,
        "null":null,
        "boolean":true,
        "object":{
           "string":"ABCDE",
           "number":1,
           "null":null,
           "boolean":true
        },
        "array":[
           1,
           2,
           3,
           4,
           {
           "string":"ABCDE",
           "number":1,
           "null":null,
           "boolean":true,
              "array":[
           1,
           2,
           3,
           4,
           {
           "string":"ABCDE",
           "number":1,
           "null":null,
           "boolean":true
        }
        ]
        }
        ]
     }
     \`,
    jsonStyle: {
      numberStyle: {
        color: 'darkorange'
      },
      propertyStyle: {
        color: 'red'
      },
      stringStyle: {
        color: 'green'
      }
    },
    tabWith: 4
  }
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const L=["Primary"];export{u as Primary,L as __namedExportsOrder,K as default};
//# sourceMappingURL=JsonFormatter.stories-23b06c4d.js.map
