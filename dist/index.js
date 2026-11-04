"use strict";var y=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var j=y(function(I,R){
var f=5;function h(e,r,o,c,v,q,p,a,m,g){var i,u,n,s,t;if(e<=0)return a;if(i=c,u=p,n=g,o===1&&q===1&&m===1){if(s=e%f,s>0)for(t=0;t<s;t++)a[n]=r[i]+v[u],i+=o,u+=q,n+=m;if(e<f)return a;for(t=s;t<e;t+=f)a[n]=r[i]+v[u],a[n+1]=r[i+1]+v[u+1],a[n+2]=r[i+2]+v[u+2],a[n+3]=r[i+3]+v[u+3],a[n+4]=r[i+4]+v[u+4],i+=f,u+=f,n+=f;return a}for(t=0;t<e;t++)a[n]=r[i]+v[u],i+=o,u+=q,n+=m;return a}R.exports=h
});var d=y(function(J,_){
var x=require('@stdlib/strided-base-stride2offset/dist'),k=j();function z(e,r,o,c,v,q,p){return k(e,r,o,x(e,o),c,v,x(e,v),q,p,x(e,p))}_.exports=z
});var O=y(function(K,M){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=d(),B=j();A(E,"ndarray",B);M.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=O(),l,b=D(C(__dirname,"./native.js"));F(b)?l=G:l=b;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
