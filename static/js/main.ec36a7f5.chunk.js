(this.webpackJsonpcurrencyconverter=this.webpackJsonpcurrencyconverter||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(6),u=n.n(a),o=n(8),s=n(2),j=(n(13),n(1));var i=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"number",value:e.amount,onChange:e.onChangeAmount}),Object(j.jsx)("select",{name:"",id:"",value:e.selectedCurrency,onChange:e.onChangeCurrency,children:e.currencyOptions.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))})]})},b=n(7),O="http://data.fixer.io/api/latest?access_key=434653cdde5e98ee627ec2027917d78d&format=1";var h=function(){var e,t,n=Object(c.useState)([]),r=Object(s.a)(n,2),a=r[0],u=r[1],h=Object(c.useState)(),l=Object(s.a)(h,2),f=l[0],d=l[1],g=Object(c.useState)(),C=Object(s.a)(g,2),y=C[0],v=C[1],m=Object(c.useState)(1),p=Object(s.a)(m,2),x=p[0],S=p[1],F=Object(c.useState)(!0),k=Object(s.a)(F,2),w=k[0],A=k[1],E=Object(c.useState)(),B=Object(s.a)(E,2),I=B[0],J=B[1];return w?(t=x,e=x*I):(e=x,t=x/I),Object(c.useEffect)((function(){fetch(O).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];u([e.base].concat(Object(o.a)(Object.keys(e.rates)))),d(e.base),v(t),J(e.rates[t])}))}),[]),Object(c.useEffect)((function(){null!=f&&null!=y&&fetch("".concat(O,"?base=").concat(f,"&symbols=").concat(y)).then((function(e){return e.json()})).then((function(e){return J(e.rates[y])}))}),[f,y]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Currency Converter"}),Object(j.jsx)(i,{currencyOptions:a,selectedCurrency:f,onChangeCurrency:function(e){return d(e.target.value)},onChangeAmount:function(e){S(e.target.value),A(!0)},amount:t}),Object(j.jsx)("div",{className:"arrow",children:Object(j.jsx)(b.a,{})}),Object(j.jsx)(i,{currencyOptions:a,selectedCurrency:y,onChangeCurrency:function(e){return v(e.target.value)},onChangeAmount:function(e){S(e.target.value),A(!1)},amount:e})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),c(e),r(e),a(e),u(e)}))};u.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.ec36a7f5.chunk.js.map