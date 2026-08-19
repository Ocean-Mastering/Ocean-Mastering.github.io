(()=>{var fi=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),ed=(r,e,t)=>r+(e-r)*t,Ki=r=>{let e=fi(r);return e*e*(3-2*e)},Qn=[{id:"above",label:"Above the water",start:0,end:.08},{id:"signal",label:"Surface / signal",start:.08,end:.16},{id:"crossing",label:"Crossing the waterline",start:.16,end:.25},{id:"light",label:"Light",start:.25,end:.38},{id:"current",label:"Current",start:.38,end:.52},{id:"pressure",label:"Pressure",start:.52,end:.65},{id:"relationship",label:"Relationship",start:.65,end:.76},{id:"turn",label:"The turn",start:.76,end:.82},{id:"ascent",label:"Ascent",start:.82,end:.87},{id:"emergence",label:"Breaking the surface",start:.87,end:.91},{id:"revelation",label:"The ocean revealed",start:.91,end:1}],Uc=[.03,.12,.21,.31,.45,.59,.71,.79,.85,.895,.995],Fc=[{id:"opening",start:0,holdStart:0,holdEnd:.055,end:.105},{id:"submerge",start:.145,holdStart:.18,holdEnd:.26,end:.315},{id:"currents",start:.37,holdStart:.405,holdEnd:.485,end:.54},{id:"relationship",start:.625,holdStart:.67,holdEnd:.755,end:.805},{id:"ascent",start:.79,holdStart:.82,holdEnd:.865,end:.91},{id:"finale",start:.885,holdStart:.915,holdEnd:1,end:1}],$n=[{p:0,cameraX:0,cameraY:3.8,cameraZ:13,targetX:0,targetY:.2,targetZ:-20,fov:43,submersion:0,surfaceAmplitude:.18,surfaceDetail:.12,surfaceReveal:0,particleDensity:0,particleSpeed:.25,shimmer:0,currentVisibility:0,turbulence:1,coherence:0,pressure:0,caustic:0,beam:0,fogDensity:.005,exposure:.82,clarity:.2},{p:.08,cameraX:0,cameraY:1.15,cameraZ:10.5,targetX:0,targetY:.05,targetZ:-17,fov:44,submersion:0,surfaceAmplitude:.23,surfaceDetail:.27,surfaceReveal:.05,particleDensity:0,particleSpeed:.3,shimmer:0,currentVisibility:0,turbulence:1,coherence:0,pressure:0,caustic:0,beam:0,fogDensity:.006,exposure:.86,clarity:.25},{p:.14,cameraX:0,cameraY:.22,cameraZ:8.5,targetX:0,targetY:0,targetZ:-15,fov:46,submersion:.18,surfaceAmplitude:.28,surfaceDetail:.52,surfaceReveal:.08,particleDensity:.08,particleSpeed:.5,shimmer:.2,currentVisibility:0,turbulence:1,coherence:0,pressure:0,caustic:.12,beam:.05,fogDensity:.008,exposure:.86,clarity:.3},{p:.16,cameraX:0,cameraY:.07,cameraZ:7.6,targetX:0,targetY:-.05,targetZ:-14,fov:47,submersion:.42,surfaceAmplitude:.31,surfaceDetail:.62,surfaceReveal:.1,particleDensity:.18,particleSpeed:.7,shimmer:.5,currentVisibility:.04,turbulence:1,coherence:0,pressure:0,caustic:.28,beam:.12,fogDensity:.011,exposure:.84,clarity:.35},{p:.25,cameraX:.6,cameraY:-5.2,cameraZ:5,targetX:0,targetY:-.7,targetZ:-16,fov:49,submersion:1,surfaceAmplitude:.32,surfaceDetail:.68,surfaceReveal:.12,particleDensity:.82,particleSpeed:1,shimmer:1,currentVisibility:.12,turbulence:.95,coherence:0,pressure:.02,caustic:1,beam:.72,fogDensity:.018,exposure:.82,clarity:.55},{p:.38,cameraX:-1.4,cameraY:-15,cameraZ:1,targetX:1.5,targetY:-8,targetZ:-19,fov:51,submersion:1,surfaceAmplitude:.32,surfaceDetail:.7,surfaceReveal:.14,particleDensity:.82,particleSpeed:.82,shimmer:.62,currentVisibility:.55,turbulence:.9,coherence:0,pressure:.08,caustic:.62,beam:.7,fogDensity:.021,exposure:.7,clarity:.48},{p:.52,cameraX:2.2,cameraY:-31,cameraZ:-5,targetX:-1,targetY:-25,targetZ:-24,fov:52,submersion:1,surfaceAmplitude:.33,surfaceDetail:.72,surfaceReveal:.16,particleDensity:.58,particleSpeed:.62,shimmer:.25,currentVisibility:1,turbulence:1,coherence:.05,pressure:.22,caustic:.25,beam:.42,fogDensity:.026,exposure:.58,clarity:.38},{p:.65,cameraX:-1.1,cameraY:-51,cameraZ:-10,targetX:0,targetY:-30,targetZ:-29,fov:52,submersion:1,surfaceAmplitude:.34,surfaceDetail:.74,surfaceReveal:.18,particleDensity:.45,particleSpeed:.28,shimmer:.05,currentVisibility:.9,turbulence:.92,coherence:.12,pressure:1,caustic:.08,beam:.16,fogDensity:.034,exposure:.43,clarity:.24},{p:.76,cameraX:0,cameraY:-61.5,cameraZ:-12,targetX:0,targetY:-50,targetZ:-31,fov:53,submersion:1,surfaceAmplitude:.35,surfaceDetail:.76,surfaceReveal:.2,particleDensity:.54,particleSpeed:.32,shimmer:.06,currentVisibility:1,turbulence:.45,coherence:1,pressure:.82,caustic:.1,beam:.22,fogDensity:.031,exposure:.5,clarity:.5},{p:.79,cameraX:0,cameraY:-63,cameraZ:-12,targetX:0,targetY:-66,targetZ:-31,fov:53,submersion:1,surfaceAmplitude:.35,surfaceDetail:.76,surfaceReveal:.22,particleDensity:.56,particleSpeed:.34,shimmer:.08,currentVisibility:1,turbulence:.4,coherence:1,pressure:.7,caustic:.12,beam:.25,fogDensity:.029,exposure:.52,clarity:.56},{p:.82,cameraX:.5,cameraY:-59,cameraZ:-11,targetX:0,targetY:-25,targetZ:-29,fov:52,submersion:1,surfaceAmplitude:.36,surfaceDetail:.78,surfaceReveal:.28,particleDensity:.62,particleSpeed:.4,shimmer:.14,currentVisibility:1,turbulence:.38,coherence:1,pressure:.58,caustic:.18,beam:.3,fogDensity:.027,exposure:.58,clarity:.62},{p:.87,cameraX:-.7,cameraY:-10,cameraZ:-2,targetX:0,targetY:-3.5,targetZ:-18,fov:49,submersion:1,surfaceAmplitude:.38,surfaceDetail:.82,surfaceReveal:.52,particleDensity:.9,particleSpeed:.78,shimmer:.8,currentVisibility:.78,turbulence:.36,coherence:1,pressure:.22,caustic:.82,beam:.75,fogDensity:.017,exposure:.78,clarity:.85},{p:.9,cameraX:0,cameraY:-.55,cameraZ:4.2,targetX:0,targetY:0,targetZ:-15,fov:47,submersion:.82,surfaceAmplitude:.4,surfaceDetail:.86,surfaceReveal:.7,particleDensity:.58,particleSpeed:.9,shimmer:1,currentVisibility:.35,turbulence:.3,coherence:1,pressure:.08,caustic:1,beam:.8,fogDensity:.012,exposure:.96,clarity:.95},{p:.915,cameraX:0,cameraY:1.4,cameraZ:8,targetX:0,targetY:0,targetZ:-23,fov:46,submersion:.02,surfaceAmplitude:.43,surfaceDetail:.9,surfaceReveal:.88,particleDensity:.05,particleSpeed:.5,shimmer:.12,currentVisibility:.04,turbulence:.3,coherence:1,pressure:0,caustic:.08,beam:.04,fogDensity:.006,exposure:1.02,clarity:1},{p:.94,cameraX:0,cameraY:14,cameraZ:27,targetX:0,targetY:0,targetZ:-34,fov:50,submersion:0,surfaceAmplitude:.48,surfaceDetail:.96,surfaceReveal:.96,particleDensity:0,particleSpeed:.3,shimmer:0,currentVisibility:0,turbulence:.3,coherence:1,pressure:0,caustic:0,beam:0,fogDensity:.005,exposure:1.06,clarity:1},{p:.96,cameraX:0,cameraY:45,cameraZ:60,targetX:0,targetY:0,targetZ:-34,fov:55,submersion:0,surfaceAmplitude:.52,surfaceDetail:1,surfaceReveal:1,particleDensity:0,particleSpeed:.3,shimmer:0,currentVisibility:0,turbulence:.3,coherence:1,pressure:0,caustic:0,beam:0,fogDensity:.005,exposure:1.08,clarity:1},{p:.975,cameraX:0,cameraY:90,cameraZ:102,targetX:0,targetY:0,targetZ:-34,fov:60,submersion:0,surfaceAmplitude:.55,surfaceDetail:1,surfaceReveal:1,particleDensity:0,particleSpeed:.3,shimmer:0,currentVisibility:0,turbulence:.3,coherence:1,pressure:0,caustic:0,beam:0,fogDensity:.005,exposure:1.1,clarity:1},{p:.987,cameraX:0,cameraY:170,cameraZ:172,targetX:0,targetY:0,targetZ:-34,fov:66,submersion:0,surfaceAmplitude:.58,surfaceDetail:1,surfaceReveal:1,particleDensity:0,particleSpeed:.3,shimmer:0,currentVisibility:0,turbulence:.3,coherence:1,pressure:0,caustic:0,beam:0,fogDensity:.005,exposure:1.11,clarity:1},{p:1,cameraX:0,cameraY:320,cameraZ:270,targetX:0,targetY:0,targetZ:-34,fov:72,submersion:0,surfaceAmplitude:.6,surfaceDetail:1,surfaceReveal:1,particleDensity:0,particleSpeed:.3,shimmer:0,currentVisibility:0,turbulence:.3,coherence:1,pressure:0,caustic:0,beam:0,fogDensity:.005,exposure:1.12,clarity:1}];function td(r){for(let e=0;e<$n.length-1;e+=1){let t=$n[e],i=$n[e+1];if(r<=i.p)return{left:t,right:i,t:Ki((r-t.p)/(i.p-t.p))}}return{left:$n.at(-1),right:$n.at(-1),t:1}}function Oc(r,e){return r<e.start||r>e.end?0:r<=e.holdStart?e.holdStart===e.start?1:Ki((r-e.start)/Math.max(1e-4,e.holdStart-e.start)):r<=e.holdEnd||e.end===e.holdEnd?1:1-Ki((r-e.holdEnd)/Math.max(1e-4,e.end-e.holdEnd))}function Bc(r){let e=fi(r),t=Qn.findIndex(i=>e>=i.start&&e<=i.end);return Uc[Math.max(0,t)]??Uc.at(-1)}function no(r){let e=fi(r),{left:t,right:i,t:n}=td(e),s={};for(let[c,l]of Object.entries(t))c!=="p"&&(s[c]=ed(l,i[c],n));let a=Math.min(Qn.length-1,Qn.findIndex(c=>e>=c.start&&e<=c.end)),o=a<0?Qn.length-1:a;return{progress:e,storyTime:e*96,shot:Qn[o],shotIndex:o,camera:{x:s.cameraX,y:s.cameraY,z:s.cameraZ,targetX:s.targetX,targetY:s.targetY,targetZ:s.targetZ,fov:s.fov,submersion:s.submersion},surface:{amplitude:s.surfaceAmplitude,detail:s.surfaceDetail,reveal:s.surfaceReveal},particles:{density:s.particleDensity,speed:s.particleSpeed,shimmer:s.shimmer},currents:{visibility:s.currentVisibility,turbulence:s.turbulence,coherence:s.coherence},pressure:s.pressure,atmosphere:{caustic:s.caustic,beam:s.beam,fogDensity:s.fogDensity,exposure:s.exposure,clarity:s.clarity}}}var qr=class{constructor(e,t,i={}){this.section=e,this.onProgress=t,this.progress=0,this.targetProgress=0,this.velocity=0,this.active=!0,this.frame=0,this.lastTime=0,this.elapsed=0,this.continuous=i.continuous??!0,this.spring=i.spring??4,this.boundSample=this.sample.bind(this),this.boundTick=this.tick.bind(this)}read(){let e=this.section.getBoundingClientRect(),t=window.scrollY+e.top,i=Math.max(1,this.section.offsetHeight-window.innerHeight),n=fi((window.scrollY-t)/i),s=e.bottom>-window.innerHeight&&e.top<window.innerHeight*2;return{progress:n,active:s}}sample(){let e=this.read();this.targetProgress=e.progress,this.active=e.active,this.ensureFrame()}ensureFrame(){this.frame||document.hidden||(this.frame=requestAnimationFrame(this.boundTick))}tick(e){this.frame=0;let t=this.lastTime?Math.min(.05,(e-this.lastTime)/1e3):1/60;if(this.lastTime=e,this.continuous&&(this.elapsed+=t),this.continuous){let i=this.targetProgress-this.progress,n=i*this.spring**2-this.velocity*this.spring*2;this.velocity+=n*t,this.progress=fi(this.progress+this.velocity*t),Math.abs(i)<15e-6&&Math.abs(this.velocity)<15e-6&&(this.progress=this.targetProgress,this.velocity=0)}else this.progress=this.targetProgress,this.velocity=0;this.onProgress(this.progress,this.active,{elapsed:this.elapsed,velocity:this.velocity,targetProgress:this.targetProgress,settled:this.progress===this.targetProgress&&this.velocity===0}),this.active&&this.continuous&&this.ensureFrame()}start(){let e=this.read();this.progress=e.progress,this.targetProgress=e.progress,this.active=e.active,addEventListener("scroll",this.boundSample,{passive:!0}),addEventListener("resize",this.boundSample,{passive:!0}),addEventListener("visibilitychange",this.boundSample,{passive:!0}),this.ensureFrame()}finish(){this.progress=1,this.targetProgress=1,this.velocity=0,this.ensureFrame()}stop(){removeEventListener("scroll",this.boundSample),removeEventListener("resize",this.boundSample),removeEventListener("visibilitychange",this.boundSample),cancelAnimationFrame(this.frame),this.frame=0,this.lastTime=0}};var id=.9685,nd=.006;function zc(r){let e=new Map([...r.querySelectorAll("[data-copy]")].map(d=>[d.dataset.copy,d])),t=r.querySelector("[data-progress-line]"),i=r.querySelector("[data-shot-index]"),n=r.querySelector("[data-shot-label]"),s=r.querySelector("[data-depth-value]"),a=document.querySelector("[data-site-header]"),o=e.get("finale"),c=r.querySelector("[data-finale-title-before]"),l=r.querySelector("[data-finale-title-after]");function h(d){r.style.setProperty("--progress",d.progress.toFixed(5)),t&&(t.style.transform=`scaleX(${d.progress})`);for(let g of Fc)e.get(g.id)?.style.setProperty("--presence",Oc(d.progress,g).toFixed(3));let p=Ki((d.progress-id)/nd);o?.style.setProperty("--cloud-copy-swap",p.toFixed(4));let u=p>=.5;if(c?.setAttribute("aria-hidden",String(u)),l?.setAttribute("aria-hidden",String(!u)),i&&(i.textContent=String(d.shotIndex+1).padStart(2,"0")),n&&(n.textContent=d.shot.label),s){let g=d.camera.y;s.textContent=`${g>=0?"+":"\u2212"}${Math.abs(g).toFixed(1).padStart(4,"0")}m`}a?.classList.toggle("is-underwater",d.camera.submersion>.55)}return{update:h}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var gh=0,Ho=1,vh=2;var Dr=1,_h=2,Vn=3,ji=0,bt=1,Tt=2,hi=0,Nr=1,Kt=2,Wo=3,Xo=4,yh=5;var kn=100,xh=101,Sh=102,Mh=103,bh=104,Th=200,Eh=201,wh=202,Ah=203,Ch=204,Rh=205,Ph=206,Ih=207,Lh=208,Dh=209,Nh=210,Uh=211,Fh=212,Oh=213,Bh=214,jo=0,qo=1,Yo=2,_a=3,Zo=4,Jo=5,Ko=6,$o=7,zh=0,Gh=1,Vh=2,$t=0,Qo=1,el=2,tl=3,Ur=4,il=5,nl=6,rl=7;var sl=300,Hn=301,ln=302,ya=303,xa=304,Fr=306,Ts=1e3,Bi=1001,Es=1002,zt=1003,kh=1004;var Or=1005;var gt=1006,Sa=1007;var wi=1008;var Vt=1009,al=1010,ol=1011,Wn=1012,Ma=1013,Ai=1014,Qt=1015,ui=1016,ba=1017,Ta=1018,Xn=1020,ll=35902,cl=35899,Hh=1021,Wh=1022,ei=1023,qi=1026,cn=1027,hl=1028,Ea=1029,hn=1030,ul=1031;var dl=1033,wa=33776,Aa=33777,Ca=33778,Ra=33779,pl=35840,ml=35841,fl=35842,gl=35843,vl=36196,_l=37492,yl=37496,xl=37488,Sl=37489,Pa=37490,Ml=37491,bl=37808,Tl=37809,El=37810,wl=37811,Al=37812,Cl=37813,Rl=37814,Pl=37815,Il=37816,Ll=37817,Dl=37818,Nl=37819,Ul=37820,Fl=37821,Ol=36492,Bl=36494,zl=36495,Gl=36283,Vl=36284,Ia=36285,kl=36286;var lr=2300,ws=2301,Ss=2302,Lo=2303,Do=2400,No=2401,Uo=2402;var Hl=0,Xh=1,un="",yt="srgb",cr="srgb-linear",hr="linear",Xe="srgb";var nn=7680;var jh=512,qh=513,Yh=514,La=515,Zh=516,Jh=517,Da=518,Kh=519,Fo=35044;var Wl="300 es",bi=2e3,ur=2001;function rd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ln(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $h(){let r=Ln("canvas");return r.style.display="block",r}var Gc={},Dn=null;function Xl(...r){let e="THREE."+r.shift();Dn?Dn("log",e,...r):console.log(e,...r)}function Qh(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function be(...r){let e="THREE."+(r=Qh(r)).shift();if(Dn)Dn("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Te(...r){let e="THREE."+(r=Qh(r)).shift();if(Dn)Dn("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function rn(...r){let e=r.join(" ");e in Gc||(Gc[e]=!0,be(...r))}function eu(r,e,t){return new Promise(function(i,n){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var tu={[jo]:1,[Yo]:6,[Zo]:7,[_a]:5,[qo]:0,[Ko]:2,[$o]:4,[Jo]:3},li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ms=Math.PI/180,As=180/Math.PI;function jn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(xt[255&r]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]+"-"+xt[255&e]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[63&t|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[255&i]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Oe(r,e,t){return Math.max(e,Math.min(t,r))}function sd(r,e){return(r%e+e)%e}function ro(r,e,t){return(1-t)*r+t*e}function er(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Jl=class Jl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jl.prototype.isVector2=!0;var ie=Jl,Gt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],d=i[n+3],p=s[a+0],u=s[a+1],g=s[a+2],m=s[a+3];if(d!==m||c!==p||l!==u||h!==g){let _=c*p+l*u+h*g+d*m;_<0&&(p=-p,u=-u,g=-g,m=-m,_=-_);let f=1-o;if(_<.9995){let v=Math.acos(_),y=Math.sin(v);f=Math.sin(f*v)/y,c=c*f+p*(o=Math.sin(o*v)/y),l=l*f+u*o,h=h*f+g*o,d=d*f+m*o}else{c=c*f+p*o,l=l*f+u*o,h=h*f+g*o,d=d*f+m*o;let v=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=v,l*=v,h*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],d=s[a],p=s[a+1],u=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*u-l*p,e[t+1]=c*g+h*p+l*d-o*u,e[t+2]=l*g+h*u+o*p-c*d,e[t+3]=h*g-o*d-c*p-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),d=o(s/2),p=c(i/2),u=c(n/2),g=c(s/2);switch(a){case"XYZ":this._x=p*h*d+l*u*g,this._y=l*u*d-p*h*g,this._z=l*h*g+p*u*d,this._w=l*h*d-p*u*g;break;case"YXZ":this._x=p*h*d+l*u*g,this._y=l*u*d-p*h*g,this._z=l*h*g-p*u*d,this._w=l*h*d+p*u*g;break;case"ZXY":this._x=p*h*d-l*u*g,this._y=l*u*d+p*h*g,this._z=l*h*g+p*u*d,this._w=l*h*d-p*u*g;break;case"ZYX":this._x=p*h*d-l*u*g,this._y=l*u*d+p*h*g,this._z=l*h*g-p*u*d,this._w=l*h*d+p*u*g;break;case"YZX":this._x=p*h*d+l*u*g,this._y=l*u*d+p*h*g,this._z=l*h*g-p*u*d,this._w=l*h*d-p*u*g;break;case"XZY":this._x=p*h*d-l*u*g,this._y=l*u*d-p*h*g,this._z=l*h*g+p*u*d,this._w=l*h*d+p*u*g;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=i+o+d;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-l)*u,this._z=(a-n)*u}else if(i>o&&i>d){let u=2*Math.sqrt(1+i-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(n+a)/u,this._z=(s+l)/u}else if(o>d){let u=2*Math.sqrt(1+o-i-d);this._w=(s-l)/u,this._x=(n+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+d-i-o);this._w=(a-n)/u,this._x=(s+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kl=class Kl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=n+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return so.copy(this).projectOnVector(e),this.sub(so)}reflect(e){return this.sub(so.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kl.prototype.isVector3=!0;var A=Kl,so=new A,Vc=new Gt,$l=class $l{constructor(e,t,i,n,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l)}set(e,t,i,n,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],p=i[2],u=i[5],g=i[8],m=n[0],_=n[3],f=n[6],v=n[1],y=n[4],b=n[7],M=n[2],S=n[5],P=n[8];return s[0]=a*m+o*v+c*M,s[3]=a*_+o*y+c*S,s[6]=a*f+o*b+c*P,s[1]=l*m+h*v+d*M,s[4]=l*_+h*y+d*S,s[7]=l*f+h*b+d*P,s[2]=p*m+u*v+g*M,s[5]=p*_+u*y+g*S,s[8]=p*f+u*b+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,p=o*c-h*s,u=l*s-a*c,g=t*d+i*p+n*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return e[0]=d*m,e[1]=(n*l-h*i)*m,e[2]=(o*i-n*a)*m,e[3]=p*m,e[4]=(h*t-n*c)*m,e[5]=(n*s-o*t)*m,e[6]=u*m,e[7]=(i*c-l*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return rn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ao.makeScale(e,t)),this}rotate(e){return rn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return rn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$l.prototype.isMatrix3=!0;var Ie=$l,ao=new Ie,kc=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ad(){let r={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(n,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Xe&&(n.r=Mi(n.r),n.g=Mi(n.g),n.b=Mi(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Xe&&(n.r=In(n.r),n.g=In(n.g),n.b=In(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===""?hr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return rn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return rn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[cr]:{primaries:e,whitePoint:i,transfer:hr,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:i,transfer:Xe,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),r}var Ge=ad();function Mi(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function In(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var yn,Cs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yn===void 0&&(yn=Ln("canvas")),yn.width=e.width,yn.height=e.height;let n=yn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=yn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ln("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Mi(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Mi(t[i]/255)):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},od=0,Nn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(oo(n[a].image)):s.push(oo(n[a]))}else s=oo(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function oo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Cs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}var ld=0,lo=new A,Ct=class r extends li{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=jn(),this.name="",this.source=new Nn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lo).x}get height(){return this.source.getSize(lo).y}get depth(){return this.source.getSize(lo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i:be(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ts:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ts:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ct.DEFAULT_IMAGE=null,Ct.DEFAULT_MAPPING=sl,Ct.DEFAULT_ANISOTROPY=1;var Ql=class Ql{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],u=c[5],g=c[9],m=c[2],_=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-m)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+m)<.1&&Math.abs(g+_)<.1&&Math.abs(l+u+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,b=(u+1)/2,M=(f+1)/2,S=(h+p)/4,P=(d+m)/4,F=(g+_)/4;return y>b&&y>M?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=S/i,s=P/i):b>M?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=S/n,s=F/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=P/s,n=F/s),this.set(i,n,s,t),this}let v=Math.sqrt((_-g)*(_-g)+(d-m)*(d-m)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(_-g)/v,this.y=(d-m)/v,this.z=(p-h)/v,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ql.prototype.isVector4=!0;var Ye=Ql,Rs=class extends li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},s=new Ct(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Nn(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends Rs{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},dr=class extends Ct{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=zt,this.minFilter=zt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ps=class extends Ct{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=zt,this.minFilter=zt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var va=class va{constructor(e,t,i,n,s,a,o,c,l,h,d,p,u,g,m,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l,h,d,p,u,g,m,_)}set(e,t,i,n,s,a,o,c,l,h,d,p,u,g,m,_){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=p,f[3]=u,f[7]=g,f[11]=m,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new va().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/xn.setFromMatrixColumn(e,0).length(),s=1/xn.setFromMatrixColumn(e,1).length(),a=1/xn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let p=a*h,u=a*d,g=o*h,m=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+g*l,t[5]=p-m*l,t[9]=-o*c,t[2]=m-p*l,t[6]=g+u*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,u=c*d,g=l*h,m=l*d;t[0]=p+m*o,t[4]=g*o-u,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-g,t[6]=m+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,u=c*d,g=l*h,m=l*d;t[0]=p-m*o,t[4]=-a*d,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*h,t[9]=m-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,u=a*d,g=o*h,m=o*d;t[0]=c*h,t[4]=g*l-u,t[8]=p*l+m,t[1]=c*d,t[5]=m*l+p,t[9]=u*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,u=a*l,g=o*c,m=o*l;t[0]=c*h,t[4]=m-p*d,t[8]=g*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+g,t[10]=p-m*d}else if(e.order==="XZY"){let p=a*c,u=a*l,g=o*c,m=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+m,t[5]=a*h,t[9]=u*d-g,t[2]=g*d-u,t[6]=o*h,t[10]=m*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cd,e,hd)}lookAt(e,t,i){let n=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Pi.crossVectors(i,Pt),Pi.lengthSq()===0&&(Math.abs(i.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Pi.crossVectors(i,Pt)),Pi.normalize(),Yr.crossVectors(Pt,Pi),n[0]=Pi.x,n[4]=Yr.x,n[8]=Pt.x,n[1]=Pi.y,n[5]=Yr.y,n[9]=Pt.y,n[2]=Pi.z,n[6]=Yr.z,n[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],p=i[9],u=i[13],g=i[2],m=i[6],_=i[10],f=i[14],v=i[3],y=i[7],b=i[11],M=i[15],S=n[0],P=n[4],F=n[8],L=n[12],N=n[1],V=n[5],O=n[9],Z=n[13],H=n[2],k=n[6],q=n[10],W=n[14],te=n[3],de=n[7],Me=n[11],ge=n[15];return s[0]=a*S+o*N+c*H+l*te,s[4]=a*P+o*V+c*k+l*de,s[8]=a*F+o*O+c*q+l*Me,s[12]=a*L+o*Z+c*W+l*ge,s[1]=h*S+d*N+p*H+u*te,s[5]=h*P+d*V+p*k+u*de,s[9]=h*F+d*O+p*q+u*Me,s[13]=h*L+d*Z+p*W+u*ge,s[2]=g*S+m*N+_*H+f*te,s[6]=g*P+m*V+_*k+f*de,s[10]=g*F+m*O+_*q+f*Me,s[14]=g*L+m*Z+_*W+f*ge,s[3]=v*S+y*N+b*H+M*te,s[7]=v*P+y*V+b*k+M*de,s[11]=v*F+y*O+b*q+M*Me,s[15]=v*L+y*Z+b*W+M*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],u=e[14],g=e[3],m=e[7],_=e[11],f=e[15],v=c*u-l*p,y=o*u-l*d,b=o*p-c*d,M=a*u-l*h,S=a*p-c*h,P=a*d-o*h;return t*(m*v-_*y+f*b)-i*(g*v-_*M+f*S)+n*(g*y-m*M+f*P)-s*(g*b-m*S+_*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(s*h-o*c)+n*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],u=e[11],g=e[12],m=e[13],_=e[14],f=e[15],v=t*o-i*a,y=t*c-n*a,b=t*l-s*a,M=i*c-n*o,S=i*l-s*o,P=n*l-s*c,F=h*m-d*g,L=h*_-p*g,N=h*f-u*g,V=d*_-p*m,O=d*f-u*m,Z=p*f-u*_,H=v*Z-y*O+b*V+M*N-S*L+P*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/H;return e[0]=(o*Z-c*O+l*V)*k,e[1]=(n*O-i*Z-s*V)*k,e[2]=(m*P-_*S+f*M)*k,e[3]=(p*S-d*P-u*M)*k,e[4]=(c*N-a*Z-l*L)*k,e[5]=(t*Z-n*N+s*L)*k,e[6]=(_*b-g*P-f*y)*k,e[7]=(h*P-p*b+u*y)*k,e[8]=(a*O-o*N+l*F)*k,e[9]=(i*N-t*O-s*F)*k,e[10]=(g*S-m*b+f*v)*k,e[11]=(d*b-h*S-u*v)*k,e[12]=(o*L-a*V-c*F)*k,e[13]=(t*V-i*L+n*F)*k,e[14]=(m*y-g*M-_*v)*k,e[15]=(h*M-d*y+p*v)*k,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,p=s*l,u=s*h,g=s*d,m=a*h,_=a*d,f=o*d,v=c*l,y=c*h,b=c*d,M=i.x,S=i.y,P=i.z;return n[0]=(1-(m+f))*M,n[1]=(u+b)*M,n[2]=(g-y)*M,n[3]=0,n[4]=(u-b)*S,n[5]=(1-(p+f))*S,n[6]=(_+v)*S,n[7]=0,n[8]=(g+y)*P,n[9]=(_-v)*P,n[10]=(1-(p+m))*P,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=xn.set(n[0],n[1],n[2]).length(),o=xn.set(n[4],n[5],n[6]).length(),c=xn.set(n[8],n[9],n[10]).length();s<0&&(a=-a),jt.copy(this);let l=1/a,h=1/o,d=1/c;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=h,jt.elements[5]*=h,jt.elements[6]*=h,jt.elements[8]*=d,jt.elements[9]*=d,jt.elements[10]*=d,t.setFromRotationMatrix(jt),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),d=2*s/(i-n),p=(t+e)/(t-e),u=(i+n)/(i-n),g,m;if(c)g=s/(a-s),m=a*s/(a-s);else if(o===bi)g=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==ur)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);g=-a/(a-s),m=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),d=2/(i-n),p=-(t+e)/(t-e),u=-(i+n)/(i-n),g,m;if(c)g=1/(a-s),m=a/(a-s);else if(o===bi)g=-2/(a-s),m=-(a+s)/(a-s);else{if(o!==ur)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=-1/(a-s),m=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};va.prototype.isMatrix4=!0;var Ne=va,xn=new A,jt=new Ne,cd=new A(0,0,0),hd=new A(1,1,1),Pi=new A,Yr=new A,Pt=new A,Wc=new Ne,Xc=new Gt,zi=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],d=n[2],p=n[6],u=n[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},ud=0,jc=new A,Sn=new Gt,gi=new Ne,Zr=new A,tr=new A,dd=new A,pd=new Gt,qc=new A(1,0,0),Yc=new A(0,1,0),Zc=new A(0,0,1),Jc={type:"added"},md={type:"removed"},Mn={type:"childadded",child:null},co={type:"childremoved",child:null},Dt=class r extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new A,t=new zi,i=new Gt,n=new A(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Ie}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.multiply(Sn),this}rotateOnWorldAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.premultiply(Sn),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return jc.copy(e).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(tr,Zr,this.up):gi.lookAt(Zr,tr,this.up),this.quaternion.setFromRotationMatrix(gi),n&&(gi.extractRotation(n.matrixWorld),Sn.setFromRotationMatrix(gi),this.quaternion.premultiply(Sn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Te("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(md),co.child=e,this.dispatchEvent(co),co.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,dd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Dt.DEFAULT_UP=new A(0,1,0),Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var At=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fd={type:"move"},Un=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let m of e.hand.values()){let _=t.getJointPose(m,i),f=this._getHandJoint(l,m);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),u=.02,g=.005;l.inputState.pinching&&p>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fd)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new At;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function ho(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ge.workingColorSpace){if(e=sd(e,1),t=Oe(t,0,1),i=Oe(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ho(a,s,e+1/3),this.g=ho(a,s,e),this.b=ho(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,n),this}setStyle(e,t=yt){function i(s){s!==void 0&&parseFloat(s)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let i=iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Ge.workingToColorSpace(St.copy(this),e),65536*Math.round(Oe(255*St.r,0,255))+256*Math.round(Oe(255*St.g,0,255))+Math.round(Oe(255*St.b,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(St.copy(this),t);let i=St.r,n=St.g,s=St.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(n-s)/d+(n<s?6:0);break;case n:c=(s-i)/d+2;break;case s:c=(i-n)/d+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=yt){Ge.workingToColorSpace(St.copy(this),e);let t=St.r,i=St.g,n=St.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Jr);let i=ro(Ii.h,Jr.h,t),n=ro(Ii.s,Jr.s,t),s=ro(Ii.l,Jr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},St=new Be;Be.NAMES=iu;var mr=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},qt=new A,vi=new A,uo=new A,_i=new A,bn=new A,Tn=new A,Kc=new A,po=new A,mo=new A,fo=new A,go=new Ye,vo=new Ye,_o=new Ye,Si=class r{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),qt.subVectors(e,t),n.cross(qt);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){qt.subVectors(n,t),vi.subVectors(i,t),uo.subVectors(e,t);let a=qt.dot(qt),o=qt.dot(vi),c=qt.dot(uo),l=vi.dot(vi),h=vi.dot(uo),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let p=1/d,u=(l*c-o*h)*p,g=(a*h-o*c)*p;return s.set(1-u-g,g,u)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,_i)!==null&&_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,n,s,a,o,c){return this.getBarycoord(e,t,i,n,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_i.x),c.addScaledVector(a,_i.y),c.addScaledVector(o,_i.z),c)}static getInterpolatedAttribute(e,t,i,n,s,a){return go.setScalar(0),vo.setScalar(0),_o.setScalar(0),go.fromBufferAttribute(e,t),vo.fromBufferAttribute(e,i),_o.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(go,s.x),a.addScaledVector(vo,s.y),a.addScaledVector(_o,s.z),a}static isFrontFacing(e,t,i,n){return qt.subVectors(i,t),vi.subVectors(e,t),qt.cross(vi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),.5*qt.cross(vi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;bn.subVectors(n,i),Tn.subVectors(s,i),po.subVectors(e,i);let c=bn.dot(po),l=Tn.dot(po);if(c<=0&&l<=0)return t.copy(i);mo.subVectors(e,n);let h=bn.dot(mo),d=Tn.dot(mo);if(h>=0&&d<=h)return t.copy(n);let p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(bn,a);fo.subVectors(e,s);let u=bn.dot(fo),g=Tn.dot(fo);if(g>=0&&u<=g)return t.copy(s);let m=u*l-c*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Tn,o);let _=h*g-u*d;if(_<=0&&d-h>=0&&u-g>=0)return Kc.subVectors(s,n),o=(d-h)/(d-h+(u-g)),t.copy(n).addScaledVector(Kc,o);let f=1/(_+m+p);return a=m*f,o=p*f,t.copy(i).addScaledVector(bn,a).addScaledVector(Tn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zt=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(s,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kr.copy(i.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),$r.subVectors(this.max,ir),En.subVectors(e.a,ir),wn.subVectors(e.b,ir),An.subVectors(e.c,ir),Li.subVectors(wn,En),Di.subVectors(An,wn),$i.subVectors(En,An);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-$i.z,$i.y,Li.z,0,-Li.x,Di.z,0,-Di.x,$i.z,0,-$i.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-$i.y,$i.x,0];return!!yo(t,En,wn,An,$r)&&(t=[1,0,0,0,1,0,0,0,1],!!yo(t,En,wn,An,$r)&&(Qr.crossVectors(Li,Di),t=[Qr.x,Qr.y,Qr.z],yo(t,En,wn,An,$r)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Yt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new A,new A,new A,new A,new A,new A,new A,new A],Yt=new A,Kr=new Zt,En=new A,wn=new A,An=new A,Li=new A,Di=new A,$i=new A,ir=new A,$r=new A,Qr=new A,Qi=new A;function yo(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Qi.fromArray(r,s);let o=n.x*Math.abs(Qi.x)+n.y*Math.abs(Qi.y)+n.z*Math.abs(Qi.z),c=e.dot(Qi),l=t.dot(Qi),h=i.dot(Qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Qm=gd();function gd(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[256|c]=32768,n[c]=24,n[256|c]=24):l<-14?(i[c]=1024>>-l-14,i[256|c]=1024>>-l-14|32768,n[c]=-l-1,n[256|c]=-l-1):l<=15?(i[c]=l+15<<10,i[256|c]=l+15<<10|32768,n[c]=13,n[256|c]=13):l<128?(i[c]=31744,i[256|c]=64512,n[c]=24,n[256|c]=24):(i[c]=31744,i[256|c]=64512,n[c]=13,n[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var ht=new A,es=new ie,vd=0,at=class extends li{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fo,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var fr=class extends at{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var gr=class extends at{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var we=class extends at{constructor(e,t,i){super(new Float32Array(e),t,i)}},_d=new Zt,nr=new A,xo=new A,Jt=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):_d.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);let t=nr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(nr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(xo)),this.expandByPoint(nr.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yd=0,Bt=new Ne,So=new Dt,Cn=new A,It=new Zt,rr=new Zt,ft=new A,qe=class r extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?gr:fr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cn).negate(),this.translate(Cn.x,Cn.y,Cn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];It.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(e){let i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(It.min,rr.min),It.expandByPoint(ft),ft.addVectors(It.max,rr.max),It.expandByPoint(ft)):(It.expandByPoint(rr.min),It.expandByPoint(rr.max))}It.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)ft.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ft));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ft.fromBufferAttribute(o,l),c&&(Cn.fromBufferAttribute(e,l),ft.add(Cn)),n=Math.max(n,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===i.count||(a=new at(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let F=0;F<i.count;F++)o[F]=new A,c[F]=new A;let l=new A,h=new A,d=new A,p=new ie,u=new ie,g=new ie,m=new A,_=new A;function f(F,L,N){l.fromBufferAttribute(i,F),h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,N),p.fromBufferAttribute(s,F),u.fromBufferAttribute(s,L),g.fromBufferAttribute(s,N),h.sub(l),d.sub(l),u.sub(p),g.sub(p);let V=1/(u.x*g.y-g.x*u.y);isFinite(V)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(V),_.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(V),o[F].add(m),o[L].add(m),o[N].add(m),c[F].add(_),c[L].add(_),c[N].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,L=v.length;F<L;++F){let N=v[F],V=N.start;for(let O=V,Z=V+N.count;O<Z;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new A,b=new A,M=new A,S=new A;function P(F){M.fromBufferAttribute(n,F),S.copy(M);let L=o[F];y.copy(L),y.sub(M.multiplyScalar(M.dot(L))).normalize(),b.crossVectors(S,L);let N=b.dot(c[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,N)}for(let F=0,L=v.length;F<L;++F){let N=v[F],V=N.start;for(let O=V,Z=V+N.count;O<Z;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new at(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let p=0,u=i.count;p<u;p++)i.setXYZ(p,0,0,0);let n=new A,s=new A,a=new A,o=new A,c=new A,l=new A,h=new A,d=new A;if(e)for(let p=0,u=e.count;p<u;p+=3){let g=e.getX(p+0),m=e.getX(p+1),_=e.getX(p+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,_),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let p=0,u=t.count;p<u;p+=3)n.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h),u=0,g=0;for(let m=0,_=c.length;m<_;m++){u=o.isInterleavedBufferAttribute?c[m]*o.data.stride+o.offset:c[m]*h;for(let f=0;f<h;f++)p[g++]=l[u++]}return new at(p,h,d)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=e(n[o],i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let p=e(l[h],i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){let u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(n[c]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let p=0,u=d.length;p<u;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ef=new A;var xd=0,Gi=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nn,this.stencilZFail=nn,this.stencilZPass=nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:be(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var tf=new A,nf=new A,rf=new A,sf=new ie,af=new ie,of=new Ne,lf=new A,cf=new A,hf=new A,uf=new ie,df=new ie,pf=new ie;var mf=new A,ff=new A;var xi=new A,Mo=new A,ts=new A,Ni=new A,bo=new A,is=new A,To=new A,sn=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Mo.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Mo);let s=.5*e.distanceTo(t),a=-this.direction.dot(ts),o=Ni.dot(this.direction),c=-Ni.dot(ts),l=Ni.lengthSq(),h=Math.abs(1-a*a),d,p,u,g;if(h>0)if(d=a*c-o,p=a*o-c,g=s*h,d>=0)if(p>=-g)if(p<=g){let m=1/h;d*=m,p*=m,u=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=s,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-c),s),u=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),u=p*(p+2*c)+l):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-c),s),u=-d*d+p*(p+2*c)+l);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Mo).addScaledVector(ts,p),u}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let i=xi.dot(this.direction),n=xi.dot(xi)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,n=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,n=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||o>n?null:((o>i||i!=i)&&(i=o),(c<n||n!=n)&&(n=c),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,n,s){bo.subVectors(t,e),is.subVectors(i,e),To.crossVectors(bo,is);let a,o=this.direction.dot(To);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ni.subVectors(this.origin,e);let c=a*this.direction.dot(is.crossVectors(Ni,is));if(c<0)return null;let l=a*this.direction.dot(bo.cross(Ni));if(l<0||c+l>o)return null;let h=-a*Ni.dot(To);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ti=class extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$c=new Ne,en=new sn,ns=new Jt,Qc=new A,rs=new A,ss=new A,as=new A,Eo=new A,os=new A,eh=new A,ls=new A,$e=class extends Dt{constructor(e=new qe,t=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){os.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Eo.fromBufferAttribute(d,e),a?os.addScaledVector(Eo,h):os.addScaledVector(Eo.sub(t),h))}t.add(os)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(s),en.copy(e.ray).recast(e.near),ns.containsPoint(en.origin)===!1&&(en.intersectSphere(ns,Qc)===null||en.origin.distanceToSquared(Qc)>(e.far-e.near)**2))return;$c.copy(s).invert(),en.copy(e.ray).applyMatrix4($c),i.boundingBox!==null&&en.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,en)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,m=p.length;g<m;g++){let _=p[g],f=a[_.materialIndex];for(let v=Math.max(_.start,u.start),y=Math.min(o.count,Math.min(_.start+_.count,u.start+u.count));v<y;v+=3)n=cs(this,f,e,i,l,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,t.push(n))}else for(let g=Math.max(0,u.start),m=Math.min(o.count,u.start+u.count);g<m;g+=3)n=cs(this,a,e,i,l,h,d,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),t.push(n));else if(c!==void 0)if(Array.isArray(a))for(let g=0,m=p.length;g<m;g++){let _=p[g],f=a[_.materialIndex];for(let v=Math.max(_.start,u.start),y=Math.min(c.count,Math.min(_.start+_.count,u.start+u.count));v<y;v+=3)n=cs(this,f,e,i,l,h,d,v,v+1,v+2),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,t.push(n))}else for(let g=Math.max(0,u.start),m=Math.min(c.count,u.start+u.count);g<m;g+=3)n=cs(this,a,e,i,l,h,d,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}};function cs(r,e,t,i,n,s,a,o,c,l){r.getVertexPosition(o,rs),r.getVertexPosition(c,ss),r.getVertexPosition(l,as);let h=(function(d,p,u,g,m,_,f,v){let y;if(y=p.side===1?g.intersectTriangle(f,_,m,!0,v):g.intersectTriangle(m,_,f,p.side===0,v),y===null)return null;ls.copy(v),ls.applyMatrix4(d.matrixWorld);let b=u.ray.origin.distanceTo(ls);return b<u.near||b>u.far?null:{distance:b,point:ls.clone(),object:d}})(r,e,t,i,rs,ss,as,eh);if(h){let d=new A;Si.getBarycoord(eh,rs,ss,as,d),n&&(h.uv=Si.getInterpolatedAttribute(n,o,c,l,d,new ie)),s&&(h.uv1=Si.getInterpolatedAttribute(s,o,c,l,d,new ie)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,c,l,d,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new A,materialIndex:0};Si.getNormal(rs,ss,as,p.normal),h.face=p,h.barycoord=d}return h}var gf=new Ye,vf=new Ye,_f=new Ye,yf=new Ye,xf=new Ne,Sf=new A,Mf=new Jt,bf=new Ne,Tf=new sn;var Is=class extends Ct{constructor(e=null,t=1,i=1,n,s,a,o,c,l=1003,h=1003,d,p){super(null,a,o,c,l,h,n,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ef=new Ne,wf=new Ne;var Af=new Ne,Cf=new Ne;var Rf=new Zt,Pf=new Ne,If=new $e,Lf=new Jt;var wo=new A,Sd=new A,Md=new Ie,ai=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=wo.subVectors(i,t).cross(Sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Md.getNormalMatrix(e),n=this.coplanarPoint(wo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},tn=new Jt,bd=new ie(.5,.5),hs=new A,Vi=class{constructor(e=new ai,t=new ai,i=new ai,n=new ai,s=new ai,a=new ai){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],p=s[6],u=s[7],g=s[8],m=s[9],_=s[10],f=s[11],v=s[12],y=s[13],b=s[14],M=s[15];if(n[0].setComponents(l-a,u-h,f-g,M-v).normalize(),n[1].setComponents(l+a,u+h,f+g,M+v).normalize(),n[2].setComponents(l+o,u+d,f+m,M+y).normalize(),n[3].setComponents(l-o,u-d,f-m,M-y).normalize(),i)n[4].setComponents(c,p,_,b).normalize(),n[5].setComponents(l-c,u-p,f-_,M-b).normalize();else if(n[4].setComponents(l-c,u-p,f-_,M-b).normalize(),t===bi)n[5].setComponents(l+c,u+p,f+_,M+b).normalize();else{if(t!==ur)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(c,p,_,b).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tn)}intersectsSprite(e){tn.center.set(0,0,0);let t=bd.distanceTo(e.center);return tn.radius=.7071067811865476+t,tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(tn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(hs.x=n.normal.x>0?e.max.x:e.min.x,hs.y=n.normal.y>0?e.max.y:e.min.y,hs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},th=new Ne,Ls=class r{constructor(){this.coordinateSystem=bi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let s=t[n];th.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new Vi),i[n].setFromProjectionMatrix(th,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Vi),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new r().copy(this)}};var Oo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},Df=new Ne,Nf=new Be(1,1,1),Uf=new Vi,Ff=new Ls,Of=new Zt,Bf=new Jt,zf=new A,Gf=new A,Vf=new A,kf=new Oo,Hf=new $e;var Wf=new A,Xf=new A,jf=new Ne,qf=new sn,Yf=new Jt,Zf=new A,Jf=new A;var Kf=new A,$f=new A;var Ds=class extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ih=new Ne,Bo=new sn,us=new Jt,ds=new A,ki=class extends Dt{constructor(e=new qe,t=new Ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere),us.applyMatrix4(n),us.radius+=s,e.ray.intersectsSphere(us)===!1)return;ih.copy(n).invert(),Bo.copy(e.ray).applyMatrix4(ih);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null)for(let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);d<p;d++){let u=l.getX(d);ds.fromBufferAttribute(h,u),nh(ds,u,c,n,e,t,this)}else for(let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);d<p;d++)ds.fromBufferAttribute(h,d),nh(ds,d,c,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function nh(r,e,t,i,n,s,a){let o=Bo.distanceSqToPoint(r);if(o<t){let c=new A;Bo.closestPointToPoint(r,c),c.applyMatrix4(i);let l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var vr=class extends Ct{constructor(e=[],t=301,i,n,s,a,o,c,l,h){super(e,t,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ei=class extends Ct{constructor(e,t,i=1014,n,s,a,o=1003,c=1003,l,h=1026,d=1){if(h!==qi&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:d},n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ns=class extends Ei{constructor(e,t=1014,i=301,n,s,a=1003,o=1003,c,l=1026){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_r=class extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},an=class r extends qe{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],p=0,u=0;function g(m,_,f,v,y,b,M,S,P,F,L){let N=b/P,V=M/F,O=b/2,Z=M/2,H=S/2,k=P+1,q=F+1,W=0,te=0,de=new A;for(let Me=0;Me<q;Me++){let ge=Me*V-Z;for(let ve=0;ve<k;ve++){let ee=ve*N-O;de[m]=ee*v,de[_]=ge*y,de[f]=H,l.push(de.x,de.y,de.z),de[m]=0,de[_]=0,de[f]=S>0?1:-1,h.push(de.x,de.y,de.z),d.push(ve/P),d.push(1-Me/F),W+=1}}for(let Me=0;Me<F;Me++)for(let ge=0;ge<P;ge++){let ve=p+ge+k*Me,ee=p+ge+k*(Me+1),ce=p+(ge+1)+k*(Me+1),oe=p+(ge+1)+k*Me;c.push(ve,ee,oe),c.push(ee,ce,oe),te+=6}o.addGroup(u,te,L),u+=te,p+=W}g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Us=class r extends qe{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,p=t,u=2*d+p,g=2*i+s,m=n+1,_=new A,f=new A;for(let v=0;v<=g;v++){let y=0,b=0,M=0,S=0;if(v<=i){let L=v/i,N=L*Math.PI/2;b=-h-e*Math.cos(N),M=e*Math.sin(N),S=-e*Math.cos(N),y=L*d}else if(v<=i+s){let L=(v-i)/s;b=L*t-h,M=e,S=0,y=d+L*p}else{let L=(v-i-s)/i,N=L*Math.PI/2;b=h+e*Math.sin(N),M=e*Math.cos(N),S=e*Math.sin(N),y=d+p+L*d}let P=Math.max(0,Math.min(1,y/u)),F=0;v===0?F=.5/n:v===g&&(F=-.5/n);for(let L=0;L<=n;L++){let N=L/n,V=N*Math.PI*2,O=Math.sin(V),Z=Math.cos(V);f.x=-M*Z,f.y=b,f.z=M*O,o.push(f.x,f.y,f.z),_.set(-M*Z,S,M*O),_.normalize(),c.push(_.x,_.y,_.z),l.push(N+F,P)}if(v>0){let L=(v-1)*m;for(let N=0;N<n;N++){let V=L+N,O=L+N+1,Z=v*m+N,H=v*m+N+1;a.push(V,O,Z),a.push(O,H,Z)}}}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Fs=class r extends qe{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new A,h=new ie;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let u=i+d/t*n;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yr=class r extends qe{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],p=[],u=[],g=0,m=[],_=i/2,f=0;function v(y){let b=g,M=new ie,S=new A,P=0,F=y===!0?e:t,L=y===!0?1:-1;for(let V=1;V<=n;V++)d.push(0,_*L,0),p.push(0,L,0),u.push(.5,.5),g++;let N=g;for(let V=0;V<=n;V++){let O=V/n*c+o,Z=Math.cos(O),H=Math.sin(O);S.x=F*H,S.y=_*L,S.z=F*Z,d.push(S.x,S.y,S.z),p.push(0,L,0),M.x=.5*Z+.5,M.y=.5*H*L+.5,u.push(M.x,M.y),g++}for(let V=0;V<n;V++){let O=b+V,Z=N+V;y===!0?h.push(Z,Z+1,O):h.push(Z+1,Z,O),P+=3}l.addGroup(f,P,y===!0?1:2),f+=P}(function(){let y=new A,b=new A,M=0,S=(t-e)/i;for(let P=0;P<=s;P++){let F=[],L=P/s,N=L*(t-e)+e;for(let V=0;V<=n;V++){let O=V/n,Z=O*c+o,H=Math.sin(Z),k=Math.cos(Z);b.x=N*H,b.y=-L*i+_,b.z=N*k,d.push(b.x,b.y,b.z),y.set(H,S,k).normalize(),p.push(y.x,y.y,y.z),u.push(O,1-L),F.push(g++)}m.push(F)}for(let P=0;P<n;P++)for(let F=0;F<s;F++){let L=m[F][P],N=m[F+1][P],V=m[F+1][P+1],O=m[F][P+1];(e>0||F!==0)&&(h.push(L,N,O),M+=3),(t>0||F!==s-1)&&(h.push(N,V,O),M+=3)}l.addGroup(f,M,0),f+=M})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new we(d,3)),this.setAttribute("normal",new we(p,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fn=class r extends yr{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hi=class r extends qe{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(u,g,m,_){let f=_+1,v=[];for(let y=0;y<=f;y++){v[y]=[];let b=u.clone().lerp(m,y/f),M=g.clone().lerp(m,y/f),S=f-y;for(let P=0;P<=S;P++)v[y][P]=P===0&&y===f?b:b.clone().lerp(M,P/S)}for(let y=0;y<f;y++)for(let b=0;b<2*(f-y)-1;b++){let M=Math.floor(b/2);b%2==0?(c(v[y][M+1]),c(v[y+1][M]),c(v[y][M])):(c(v[y][M+1]),c(v[y+1][M+1]),c(v[y+1][M]))}}function c(u){s.push(u.x,u.y,u.z)}function l(u,g){let m=3*u;g.x=e[m+0],g.y=e[m+1],g.z=e[m+2]}function h(u,g,m,_){_<0&&u.x===1&&(a[g]=u.x-1),m.x===0&&m.z===0&&(a[g]=_/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}function p(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}(function(u){let g=new A,m=new A,_=new A;for(let f=0;f<t.length;f+=3)l(t[f+0],g),l(t[f+1],m),l(t[f+2],_),o(g,m,_,u)})(n),(function(u){let g=new A;for(let m=0;m<s.length;m+=3)g.x=s[m+0],g.y=s[m+1],g.z=s[m+2],g.normalize().multiplyScalar(u),s[m+0]=g.x,s[m+1]=g.y,s[m+2]=g.z})(i),(function(){let u=new A;for(let g=0;g<s.length;g+=3){u.x=s[g+0],u.y=s[g+1],u.z=s[g+2];let m=d(u)/2/Math.PI+.5,_=p(u)/Math.PI+.5;a.push(m,1-_)}(function(){let g=new A,m=new A,_=new A,f=new A,v=new ie,y=new ie,b=new ie;for(let M=0,S=0;M<s.length;M+=9,S+=6){g.set(s[M+0],s[M+1],s[M+2]),m.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),v.set(a[S+0],a[S+1]),y.set(a[S+2],a[S+3]),b.set(a[S+4],a[S+5]),f.copy(g).add(m).add(_).divideScalar(3);let P=d(f);h(v,S+0,g,P),h(y,S+2,m,P),h(b,S+4,_,P)}})(),(function(){for(let g=0;g<a.length;g+=6){let m=a[g+0],_=a[g+2],f=a[g+4],v=Math.max(m,_,f),y=Math.min(m,_,f);v>.9&&y<.1&&(m<.2&&(a[g+0]+=1),_<.2&&(a[g+2]+=1),f<.2&&(a[g+4]+=1))}})()})(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}},Os=class r extends Hi{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ps=new A,ms=new A,Ao=new A,fs=new Si,Bs=class extends qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(Ms*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),p={},u=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:m,b:_,c:f}=fs;if(m.fromBufferAttribute(o,l[0]),_.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),fs.getNormal(Ao),d[0]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,d[1]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,d[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let y=(v+1)%3,b=d[v],M=d[y],S=fs[h[v]],P=fs[h[y]],F=`${b}_${M}`,L=`${M}_${b}`;L in p&&p[L]?(Ao.dot(p[L].normal)<=s&&(u.push(S.x,S.y,S.z),u.push(P.x,P.y,P.z)),p[L]=null):F in p||(p[F]={index0:l[v],index1:l[y],normal:Ao.clone()})}}for(let g in p)if(p[g]){let{index0:m,index1:_}=p[g];ps.fromBufferAttribute(o,m),ms.fromBufferAttribute(o,_),u.push(ps.x,ps.y,ps.z),u.push(ms.x,ms.y,ms.z)}this.setAttribute("position",new we(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ut=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,c=0,l=s-1;for(;c<=l;)if(n=Math.floor(c+(l-c)/2),o=i[n]-a,o<0)c=n+1;else{if(!(o>0)){l=n;break}l=n-1}if(n=l,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),c=t||(a.isVector2?new ie:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,n=[],s=[],a=[],o=new A,c=new Ne;for(let u=0;u<=e;u++){let g=u/e;n[u]=this.getTangentAt(g,new A)}s[0]=new A,a[0]=new A;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),p=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),p<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(n[u-1],n[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Oe(n[u-1].dot(n[u]),-1,1));s[u].applyMatrix4(c.makeRotationAxis(o,g))}a[u].crossVectors(n[u],s[u])}if(t===!0){let u=Math.acos(Oe(s[0].dot(s[e]),-1,1));u/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(u=-u);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(n[g],u*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},On=class extends Ut{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ie){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,u=l-this.aY;c=p*h-u*d+this.aX,l=p*d+u*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zs=class extends On{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jl(){let r=0,e=0,t=0,i=0;function n(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){n(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let p=(a-s)/l-(o-s)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+d)+(c-o)/d;p*=h,u*=h,n(a,o,p,u)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var rh=new A,sh=new A,Co=new jl,Ro=new jl,Po=new jl,Gs=class extends Ut{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new A){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=n[(l-1)%s]:(sh.subVectors(n[0],n[1]).add(n[0]),o=sh);let d=n[l%s],p=n[(l+1)%s];if(this.closed||l+2<s?c=n[(l+2)%s]:(rh.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=rh),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(p),u),_=Math.pow(p.distanceToSquared(c),u);m<1e-4&&(m=1),g<1e-4&&(g=m),_<1e-4&&(_=m),Co.initNonuniformCatmullRom(o.x,d.x,p.x,c.x,g,m,_),Ro.initNonuniformCatmullRom(o.y,d.y,p.y,c.y,g,m,_),Po.initNonuniformCatmullRom(o.z,d.z,p.z,c.z,g,m,_)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(o.x,d.x,p.x,c.x,this.tension),Ro.initCatmullRom(o.y,d.y,p.y,c.y,this.tension),Po.initCatmullRom(o.z,d.z,p.z,c.z,this.tension));return i.set(Co.calc(h),Ro.calc(h),Po.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new A().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ah(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function ar(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function or(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var xr=class extends Ut{constructor(e=new ie,t=new ie,i=new ie,n=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ie){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(or(e,n.x,s.x,a.x,o.x),or(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vs=class extends Ut{constructor(e=new A,t=new A,i=new A,n=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new A){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(or(e,n.x,s.x,a.x,o.x),or(e,n.y,s.y,a.y,o.y),or(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sr=class extends Ut{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ks=class extends Ut{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mr=class extends Ut{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(ar(e,n.x,s.x,a.x),ar(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},br=class extends Ut{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(ar(e,n.x,s.x,a.x),ar(e,n.y,s.y,a.y),ar(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tr=class extends Ut{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(ah(o,c.x,l.x,h.x,d.x),ah(o,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ie().fromArray(n))}return this}},Hs=Object.freeze({__proto__:null,ArcCurve:zs,CatmullRomCurve3:Gs,CubicBezierCurve:xr,CubicBezierCurve3:Vs,EllipseCurve:On,LineCurve:Sr,LineCurve3:ks,QuadraticBezierCurve:Mr,QuadraticBezierCurve3:br,SplineCurve:Tr}),Ws=class extends Ut{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hs[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Hs[n.type]().fromJSON(n))}return this}},Er=class extends Ws{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Sr(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Mr(this.currentPoint.clone(),new ie(e,t),new ie(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new xr(this.currentPoint.clone(),new ie(e,t),new ie(i,n),new ie(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Tr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,s,a,o,c),this}absellipse(e,t,i,n,s,a,o,c){let l=new On(e,t,i,n,s,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},wr=class extends Er{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Er().fromJSON(n))}return this}};function Td(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=oh(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=(function(h,d,p,u){let g=[];for(let m=0,_=d.length;m<_;m++){let f=oh(h,d[m]*u,m<_-1?d[m+1]*u:h.length,u,!1);f===f.next&&(f.steiner=!0),g.push(Ld(f))}g.sort(Rd);for(let m=0;m<g.length;m++)p=Pd(g[m],p);return p})(r,e,s,t)),r.length>80*t){o=r[0],c=r[1];let h=o,d=c;for(let p=t;p<n;p+=t){let u=r[p],g=r[p+1];u<o&&(o=u),g<c&&(c=g),u>h&&(h=u),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Ar(s,a,t,o,c,l,0),a}function oh(r,e,t,i,n){let s;if(n===(function(a,o,c,l){let h=0;for(let d=o,p=c-l;d<c;d+=l)h+=(a[p]-a[d])*(a[d+1]+a[p+1]),p=d;return h})(r,e,t,i)>0)for(let a=e;a<t;a+=i)s=lh(a/i|0,r[a],r[a+1],s);else for(let a=t-i;a>=e;a-=i)s=lh(a/i|0,r[a],r[a+1],s);return s&&Bn(s,s.next)&&(Rr(s),s=s.next),s}function on(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!Bn(i,i.next)&&it(i.prev,i,i.next)!==0)i=i.next;else{if(Rr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Ar(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(c,l,h,d){let p=c;do p.z===0&&(p.z=zo(p.x,p.y,l,h,d)),p.prevZ=p.prev,p.nextZ=p.next,p=p.next;while(p!==c);p.prevZ.nextZ=null,p.prevZ=null,(function(u){let g,m=1;do{let _,f=u;u=null;let v=null;for(g=0;f;){g++;let y=f,b=0;for(let S=0;S<m&&(b++,y=y.nextZ,y);S++);let M=m;for(;b>0||M>0&&y;)b!==0&&(M===0||!y||f.z<=y.z)?(_=f,f=f.nextZ,b--):(_=y,y=y.nextZ,M--),v?v.nextZ=_:u=_,_.prevZ=v,v=_;f=y}v.nextZ=null,m*=2}while(g>1)})(p)})(r,i,n,s);let o=r;for(;r.prev!==r.next;){let c=r.prev,l=r.next;if(s?wd(r,i,n,s):Ed(r))e.push(c.i,r.i,l.i),Rr(r),r=l.next,o=l.next;else if((r=l)===o){a?a===1?Ar(r=Ad(on(r),e),e,t,i,n,s,2):a===2&&Cd(r,e,t,i,n,s):Ar(on(r),e,t,i,n,s,1);break}}}function Ed(r){let e=r.prev,t=r,i=r.next;if(it(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(n,s,a),d=Math.min(o,c,l),p=Math.max(n,s,a),u=Math.max(o,c,l),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=u&&sr(n,o,s,c,a,l,g.x,g.y)&&it(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wd(r,e,t,i){let n=r.prev,s=r,a=r.next;if(it(n,s,a)>=0)return!1;let o=n.x,c=s.x,l=a.x,h=n.y,d=s.y,p=a.y,u=Math.min(o,c,l),g=Math.min(h,d,p),m=Math.max(o,c,l),_=Math.max(h,d,p),f=zo(u,g,e,t,i),v=zo(m,_,e,t,i),y=r.prevZ,b=r.nextZ;for(;y&&y.z>=f&&b&&b.z<=v;){if(y.x>=u&&y.x<=m&&y.y>=g&&y.y<=_&&y!==n&&y!==a&&sr(o,h,c,d,l,p,y.x,y.y)&&it(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=u&&b.x<=m&&b.y>=g&&b.y<=_&&b!==n&&b!==a&&sr(o,h,c,d,l,p,b.x,b.y)&&it(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=f;){if(y.x>=u&&y.x<=m&&y.y>=g&&y.y<=_&&y!==n&&y!==a&&sr(o,h,c,d,l,p,y.x,y.y)&&it(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=u&&b.x<=m&&b.y>=g&&b.y<=_&&b!==n&&b!==a&&sr(o,h,c,d,l,p,b.x,b.y)&&it(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ad(r,e){let t=r;do{let i=t.prev,n=t.next.next;!Bn(i,n)&&ru(i,t,t.next,n)&&Cr(i,n)&&Cr(n,i)&&(e.push(i.i,t.i,n.i),Rr(t),Rr(t.next),t=r=n),t=t.next}while(t!==r);return on(t)}function Cd(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dd(a,o)){let c=su(a,o);return a=on(a,a.next),c=on(c,c.next),Ar(a,e,t,i,n,s,0),void Ar(c,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Rd(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Pd(r,e){let t=(function(n,s){let a=s,o=n.x,c=n.y,l,h=-1/0;if(Bn(n,a))return a;do{if(Bn(n,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let m=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,l=a.x<a.next.x?a:a.next,m===o))return l}a=a.next}while(a!==s);if(!l)return null;let d=l,p=l.x,u=l.y,g=1/0;a=l;do{if(o>=a.x&&a.x>=p&&o!==a.x&&nu(c<u?o:h,c,p,u,c<u?h:o,c,a.x,a.y)){let m=Math.abs(c-a.y)/(o-a.x);Cr(a,n)&&(m<g||m===g&&(a.x>l.x||a.x===l.x&&Id(l,a)))&&(l=a,g=m)}a=a.next}while(a!==d);return l})(r,e);if(!t)return e;let i=su(t,r);return on(i,i.next),on(t,t.next)}function Id(r,e){return it(r.prev,r,e.prev)<0&&it(e.next,r,r.next)<0}function zo(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Ld(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function nu(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function sr(r,e,t,i,n,s,a,o){return!(r===a&&e===o)&&nu(r,e,t,i,n,s,a,o)}function Dd(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&ru(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(Cr(r,e)&&Cr(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(it(r.prev,r,e.prev)||it(r,e.prev,e))||Bn(r,e)&&it(r.prev,r,r.next)>0&&it(e.prev,e,e.next)>0)}function it(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Bn(r,e){return r.x===e.x&&r.y===e.y}function ru(r,e,t,i){let n=vs(it(r,e,t)),s=vs(it(r,e,i)),a=vs(it(t,i,r)),o=vs(it(t,i,e));return n!==s&&a!==o||!(n!==0||!gs(r,t,e))||!(s!==0||!gs(r,i,e))||!(a!==0||!gs(t,r,i))||!(o!==0||!gs(t,e,i))}function gs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function vs(r){return r>0?1:r<0?-1:0}function Cr(r,e){return it(r.prev,r,r.next)<0?it(r,e,r.next)>=0&&it(r,r.prev,e)>=0:it(r,e,r.prev)<0||it(r,r.next,e)<0}function su(r,e){let t=Go(r.i,r.x,r.y),i=Go(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function lh(r,e,t,i){let n=Go(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Rr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Go(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Vo=class{static triangulate(e,t,i=2){return Td(e,t,i)}},oi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];ch(e),hh(i,e);let a=e.length;t.forEach(ch);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,hh(i,t[c]);let o=Vo.triangulate(i,n);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function ch(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function hh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Xs=class r extends qe{constructor(e=new wr([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:u-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Nd,y,b,M,S,P,F=!1;if(f){y=f.getSpacedPoints(h),F=!0,p=!1;let C=!!f.isCatmullRomCurve3&&f.closed;b=f.computeFrenetFrames(h,C),M=new A,S=new A,P=new A}p||(_=0,u=0,g=0,m=0);let L=o.extractPoints(l),N=L.shape,V=L.holes;if(!oi.isClockWise(N)){N=N.reverse();for(let C=0,U=V.length;C<U;C++){let x=V[C];oi.isClockWise(x)&&(V[C]=x.reverse())}}function O(C){let U=10000000000000001e-36,x=C[0];for(let D=1;D<=C.length;D++){let I=D%C.length,w=C[I],G=w.x-x.x,X=w.y-x.y,Y=G*G+X*X,re=Math.max(Math.abs(w.x),Math.abs(w.y),Math.abs(x.x),Math.abs(x.y));Y<=U*re*re?(C.splice(I,1),D--):x=w}}O(N),V.forEach(O);let Z=V.length,H=N;for(let C=0;C<Z;C++){let U=V[C];N=N.concat(U)}function k(C,U,x){return U||Te("ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(U,x)}let q=N.length;function W(C,U,x){let D,I,w,G=C.x-U.x,X=C.y-U.y,Y=x.x-C.x,re=x.y-C.y,_e=G*G+X*X,ye=G*re-X*Y;if(Math.abs(ye)>Number.EPSILON){let he=Math.sqrt(_e),Ae=Math.sqrt(Y*Y+re*re),Q=U.x-X/he,se=U.y+G/he,ne=((x.x-re/Ae-Q)*re-(x.y+Y/Ae-se)*Y)/(G*re-X*Y);D=Q+G*ne-C.x,I=se+X*ne-C.y;let pe=D*D+I*I;if(pe<=2)return new ie(D,I);w=Math.sqrt(pe/2)}else{let he=!1;G>Number.EPSILON?Y>Number.EPSILON&&(he=!0):G<-Number.EPSILON?Y<-Number.EPSILON&&(he=!0):Math.sign(X)===Math.sign(re)&&(he=!0),he?(D=-X,I=G,w=Math.sqrt(_e)):(D=G,I=X,w=Math.sqrt(_e/2))}return new ie(D/w,I/w)}let te=[];for(let C=0,U=H.length,x=U-1,D=C+1;C<U;C++,x++,D++)x===U&&(x=0),D===U&&(D=0),te[C]=W(H[C],H[x],H[D]);let de=[],Me,ge,ve=te.concat();for(let C=0,U=Z;C<U;C++){let x=V[C];Me=[];for(let D=0,I=x.length,w=I-1,G=D+1;D<I;D++,w++,G++)w===I&&(w=0),G===I&&(G=0),Me[D]=W(x[D],x[w],x[G]);de.push(Me),ve=ve.concat(Me)}if(_===0)ge=oi.triangulateShape(H,V);else{let C=[],U=[];for(let x=0;x<_;x++){let D=x/_,I=u*Math.cos(D*Math.PI/2),w=g*Math.sin(D*Math.PI/2)+m;for(let G=0,X=H.length;G<X;G++){let Y=k(H[G],te[G],w);me(Y.x,Y.y,-I),D===0&&C.push(Y)}for(let G=0,X=Z;G<X;G++){let Y=V[G];Me=de[G];let re=[];for(let _e=0,ye=Y.length;_e<ye;_e++){let he=k(Y[_e],Me[_e],w);me(he.x,he.y,-I),D===0&&re.push(he)}D===0&&U.push(re)}}ge=oi.triangulateShape(C,U)}let ee=ge.length,ce=g+m;for(let C=0;C<q;C++){let U=p?k(N[C],ve[C],ce):N[C];F?(S.copy(b.normals[0]).multiplyScalar(U.x),M.copy(b.binormals[0]).multiplyScalar(U.y),P.copy(y[0]).add(S).add(M),me(P.x,P.y,P.z)):me(U.x,U.y,0)}for(let C=1;C<=h;C++)for(let U=0;U<q;U++){let x=p?k(N[U],ve[U],ce):N[U];F?(S.copy(b.normals[C]).multiplyScalar(x.x),M.copy(b.binormals[C]).multiplyScalar(x.y),P.copy(y[C]).add(S).add(M),me(P.x,P.y,P.z)):me(x.x,x.y,d/h*C)}for(let C=_-1;C>=0;C--){let U=C/_,x=u*Math.cos(U*Math.PI/2),D=g*Math.sin(U*Math.PI/2)+m;for(let I=0,w=H.length;I<w;I++){let G=k(H[I],te[I],D);me(G.x,G.y,d+x)}for(let I=0,w=V.length;I<w;I++){let G=V[I];Me=de[I];for(let X=0,Y=G.length;X<Y;X++){let re=k(G[X],Me[X],D);F?me(re.x,re.y+y[h-1].y,y[h-1].x+x):me(re.x,re.y,d+x)}}}function oe(C,U){let x=C.length;for(;--x>=0;){let D=x,I=x-1;I<0&&(I=C.length-1);for(let w=0,G=h+2*_;w<G;w++){let X=q*w,Y=q*(w+1);$(U+D+X,U+I+X,U+I+Y,U+D+Y)}}}function me(C,U,x){c.push(C),c.push(U),c.push(x)}function De(C,U,x){R(C),R(U),R(x);let D=n.length/3,I=v.generateTopUV(i,n,D-3,D-2,D-1);T(I[0]),T(I[1]),T(I[2])}function $(C,U,x,D){R(C),R(U),R(D),R(U),R(x),R(D);let I=n.length/3,w=v.generateSideWallUV(i,n,I-6,I-3,I-2,I-1);T(w[0]),T(w[1]),T(w[3]),T(w[1]),T(w[2]),T(w[3])}function R(C){n.push(c[3*C+0]),n.push(c[3*C+1]),n.push(c[3*C+2])}function T(C){s.push(C.x),s.push(C.y)}(function(){let C=n.length/3;if(p){let U=0,x=q*U;for(let D=0;D<ee;D++){let I=ge[D];De(I[2]+x,I[1]+x,I[0]+x)}U=h+2*_,x=q*U;for(let D=0;D<ee;D++){let I=ge[D];De(I[0]+x,I[1]+x,I[2]+x)}}else{for(let U=0;U<ee;U++){let x=ge[U];De(x[2],x[1],x[0])}for(let U=0;U<ee;U++){let x=ge[U];De(x[0]+q*h,x[1]+q*h,x[2]+q*h)}}i.addGroup(C,n.length/3-C,0)})(),(function(){let C=n.length/3,U=0;oe(H,U),U+=H.length;for(let x=0,D=V.length;x<D;x++){let I=V[x];oe(I,U),U+=I.length}i.addGroup(C,n.length/3-C,1)})()}this.setAttribute("position",new we(n,3)),this.setAttribute("uv",new we(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Hs[n.type]().fromJSON(n)),new r(i,e.options)}},Nd={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],c=e[3*i+1],l=e[3*n],h=e[3*n+1];return[new ie(s,a),new ie(o,c),new ie(l,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*i],h=e[3*i+1],d=e[3*i+2],p=e[3*n],u=e[3*n+1],g=e[3*n+2],m=e[3*s],_=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new ie(a,1-c),new ie(l,1-d),new ie(p,1-g),new ie(m,1-f)]:[new ie(o,1-c),new ie(h,1-d),new ie(u,1-g),new ie(_,1-f)]}},js=class r extends Hi{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},qs=class r extends qe{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Oe(n,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new A,p=new ie,u=new A,g=new A,m=new A,_=0,f=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:_=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,u.x=1*f,u.y=-_,u.z=0*f,m.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:_=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,u.x=1*f,u.y=-_,u.z=0*f,g.copy(u),u.x+=m.x,u.y+=m.y,u.z+=m.z,u.normalize(),c.push(u.x,u.y,u.z),m.copy(g)}for(let v=0;v<=t;v++){let y=i+v*h*n,b=Math.sin(y),M=Math.cos(y);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*b,d.y=e[S].y,d.z=e[S].x*M,a.push(d.x,d.y,d.z),p.x=v/t,p.y=S/(e.length-1),o.push(p.x,p.y);let P=c[3*S+0]*b,F=c[3*S+1],L=c[3*S+0]*M;l.push(P,F,L)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let b=y+v*e.length,M=b,S=b+e.length,P=b+e.length+1,F=b+1;s.push(M,S,F),s.push(P,F,S)}this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("uv",new we(o,2)),this.setAttribute("normal",new we(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Ys=class r extends Hi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ci=class r extends qe{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,d=e/o,p=t/c,u=[],g=[],m=[],_=[];for(let f=0;f<h;f++){let v=f*p-a;for(let y=0;y<l;y++){let b=y*d-s;g.push(b,-v,0),m.push(0,0,1),_.push(y/o),_.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<o;v++){let y=v+l*f,b=v+l*(f+1),M=v+1+l*(f+1),S=v+1+l*f;u.push(y,b,S),u.push(b,M,S)}this.setIndex(u),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(m,3)),this.setAttribute("uv",new we(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Zs=class r extends qe{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],c=[],l=[],h=[],d=e,p=(t-e)/(n=Math.max(1,n)),u=new A,g=new ie;for(let m=0;m<=n;m++){for(let _=0;_<=i;_++){let f=s+_/i*a;u.x=d*Math.cos(f),u.y=d*Math.sin(f),c.push(u.x,u.y,u.z),l.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}d+=p}for(let m=0;m<n;m++){let _=m*(i+1);for(let f=0;f<i;f++){let v=f+_,y=v,b=v+i+1,M=v+i+2,S=v+1;o.push(y,b,S),o.push(b,M,S)}}this.setIndex(o),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Js=class r extends qe{constructor(e=new wr([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let d=n.length/3,p=h.extractPoints(t),u=p.shape,g=p.holes;oi.isClockWise(u)===!1&&(u=u.reverse());for(let _=0,f=g.length;_<f;_++){let v=g[_];oi.isClockWise(v)===!0&&(g[_]=v.reverse())}let m=oi.triangulateShape(u,g);for(let _=0,f=g.length;_<f;_++){let v=g[_];u=u.concat(v)}for(let _=0,f=u.length;_<f;_++){let v=u[_];n.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let _=0,f=m.length;_<f;_++){let v=m[_],y=v[0]+d,b=v[1]+d,M=v[2]+d;i.push(y,b,M),c+=3}}this.setIndex(i),this.setAttribute("position",new we(n,3)),this.setAttribute("normal",new we(s,3)),this.setAttribute("uv",new we(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},Wi=class r extends qe{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new A,p=new A,u=[],g=[],m=[],_=[];for(let f=0;f<=i;f++){let v=[],y=f/i,b=a+y*o,M=e*Math.cos(b),S=Math.sqrt(e*e-M*M),P=0;f===0&&a===0?P=.5/t:f===i&&c===Math.PI&&(P=-.5/t);for(let F=0;F<=t;F++){let L=F/t,N=n+L*s;d.x=-S*Math.cos(N),d.y=M,d.z=S*Math.sin(N),g.push(d.x,d.y,d.z),p.copy(d).normalize(),m.push(p.x,p.y,p.z),_.push(L+P,1-y),v.push(l++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){let y=h[f][v+1],b=h[f][v],M=h[f+1][v],S=h[f+1][v+1];(f!==0||a>0)&&u.push(y,b,S),(f!==i-1||c<Math.PI)&&u.push(b,M,S)}this.setIndex(u),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(m,3)),this.setAttribute("uv",new we(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ks=class r extends Hi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},$s=class r extends qe{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let c=[],l=[],h=[],d=[],p=new A,u=new A,g=new A;for(let m=0;m<=i;m++){let _=a+m/i*o;for(let f=0;f<=n;f++){let v=f/n*s;u.x=(e+t*Math.cos(_))*Math.cos(v),u.y=(e+t*Math.cos(_))*Math.sin(v),u.z=t*Math.sin(_),l.push(u.x,u.y,u.z),p.x=e*Math.cos(v),p.y=e*Math.sin(v),g.subVectors(u,p).normalize(),h.push(g.x,g.y,g.z),d.push(f/n),d.push(m/i)}}for(let m=1;m<=i;m++)for(let _=1;_<=n;_++){let f=(n+1)*m+_-1,v=(n+1)*(m-1)+_-1,y=(n+1)*(m-1)+_,b=(n+1)*m+_;c.push(f,v,b),c.push(v,y,b)}this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Qs=class r extends qe{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],c=[],l=[],h=[],d=new A,p=new A,u=new A,g=new A,m=new A,_=new A,f=new A;for(let y=0;y<=i;++y){let b=y/i*s*Math.PI*2;v(b,s,a,e,u),v(b+.01,s,a,e,g),_.subVectors(g,u),f.addVectors(g,u),m.crossVectors(_,f),f.crossVectors(m,_),m.normalize(),f.normalize();for(let M=0;M<=n;++M){let S=M/n*Math.PI*2,P=-t*Math.cos(S),F=t*Math.sin(S);d.x=u.x+(P*f.x+F*m.x),d.y=u.y+(P*f.y+F*m.y),d.z=u.z+(P*f.z+F*m.z),c.push(d.x,d.y,d.z),p.subVectors(d,u).normalize(),l.push(p.x,p.y,p.z),h.push(y/i),h.push(M/n)}}for(let y=1;y<=i;y++)for(let b=1;b<=n;b++){let M=(n+1)*(y-1)+(b-1),S=(n+1)*y+(b-1),P=(n+1)*y+b,F=(n+1)*(y-1)+b;o.push(M,S,F),o.push(S,P,F)}function v(y,b,M,S,P){let F=Math.cos(y),L=Math.sin(y),N=M/b*y,V=Math.cos(N);P.x=S*(2+V)*.5*F,P.y=S*(2+V)*L*.5,P.z=S*Math.sin(N)*.5}this.setIndex(o),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ea=class r extends qe{constructor(e=new br(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,c=new A,l=new ie,h=new A,d=[],p=[],u=[],g=[];function m(_){h=e.getPointAt(_/t,h);let f=a.normals[_],v=a.binormals[_];for(let y=0;y<=n;y++){let b=y/n*Math.PI*2,M=Math.sin(b),S=-Math.cos(b);c.x=S*f.x+M*v.x,c.y=S*f.y+M*v.y,c.z=S*f.z+M*v.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,d.push(o.x,o.y,o.z)}}(function(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),(function(){for(let _=0;_<=t;_++)for(let f=0;f<=n;f++)l.x=_/t,l.y=f/n,u.push(l.x,l.y)})(),(function(){for(let _=1;_<=t;_++)for(let f=1;f<=n;f++){let v=(n+1)*(_-1)+(f-1),y=(n+1)*_+(f-1),b=(n+1)*_+f,M=(n+1)*(_-1)+f;g.push(v,y,M),g.push(y,b,M)}})()})(),this.setIndex(g),this.setAttribute("position",new we(d,3)),this.setAttribute("normal",new we(p,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Hs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ta=class extends qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new A,s=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let d=c[l],p=d.start;for(let u=p,g=p+d.count;u<g;u+=3)for(let m=0;m<3;m++){let _=o.getX(u+m),f=o.getX(u+(m+1)%3);n.fromBufferAttribute(a,_),s.fromBufferAttribute(a,f),uh(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,d=3*o+(l+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),uh(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new we(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function uh(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Qf=Object.freeze({__proto__:null,BoxGeometry:an,CapsuleGeometry:Us,CircleGeometry:Fs,ConeGeometry:Fn,CylinderGeometry:yr,DodecahedronGeometry:Os,EdgesGeometry:Bs,ExtrudeGeometry:Xs,IcosahedronGeometry:js,LatheGeometry:qs,OctahedronGeometry:Ys,PlaneGeometry:ci,PolyhedronGeometry:Hi,RingGeometry:Zs,ShapeGeometry:Js,SphereGeometry:Wi,TetrahedronGeometry:Ks,TorusGeometry:$s,TorusKnotGeometry:Qs,TubeGeometry:ea,WireframeGeometry:ta});function dn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];if(dh(n))n.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(dh(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Et(r){let e={};for(let t=0;t<r.length;t++){let i=dn(r[t]);for(let n in i)e[n]=i[n]}return e}function dh(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ql(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var au={clone:dn,merge:Et},nt=class extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Be().setHex(n.value);break;case"v2":this.uniforms[i].value=new ie().fromArray(n.value);break;case"v3":this.uniforms[i].value=new A().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Ye().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ne().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ia=class extends nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var na=class extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ra=class extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _s(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}var Xi=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sa=class extends Xi{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Do,endingEnd:Do}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case No:s=e,o=2*t-i;break;case Uo:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case No:a=e,c=2*i-t;break;case Uo:a=1,c=i+n[1]-n[0];break;default:a=e-1,c=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,u=this._weightNext,g=(i-t)/(n-t),m=g*g,_=m*g,f=-p*_+2*p*m-p*g,v=(1+p)*_+(-1.5-2*p)*m+(-.5+p)*g+1,y=(-1-u)*_+(1.5+u)*m+.5*g,b=u*_-u*m;for(let M=0;M!==o;++M)s[M]=f*a[h+M]+v*a[l+M]+y*a[c+M]+b*a[d+M];return s}},aa=class extends Xi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),d=1-h;for(let p=0;p!==o;++p)s[p]=a[l+p]*d+a[c+p]*h;return s}},oa=class extends Xi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},la=class extends Xi{interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-t)/(n-t),m=1-g;for(let _=0;_!==o;++_)s[_]=a[l+_]*m+a[c+_]*g;return s}let p=2*o,u=e-1;for(let g=0;g!==o;++g){let m=a[l+g],_=a[c+g],f=u*p+2*g,v=d[f],y=d[f+1],b=e*p+2*g,M=h[b],S=h[b+1],P,F,L,N,V,O=(i-t)/(n-t);for(let Z=0;Z<8;Z++){P=O*O,F=P*O,L=1-O,N=L*L,V=N*L;let H=V*t+3*N*O*v+3*L*P*M+F*n-i;if(Math.abs(H)<1e-10)break;let k=3*N*(v-t)+6*L*O*(M-v)+3*P*(n-M);if(Math.abs(k)<1e-10)break;O-=H/k,O=Math.max(0,Math.min(1,O))}s[g]=V*m+3*N*O*y+3*L*P*S+F*_}return s}},Lt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new la(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case ws:t=this.InterpolantFactoryMethodLinear;break;case Ss:t=this.InterpolantFactoryMethodSmooth;break;case Lo:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return ws;case this.InterpolantFactoryMethodSmooth:return Ss;case this.InterpolantFactoryMethodBezier:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Te("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Te("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Te("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Te("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(n!==void 0&&rd(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){Te("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ss,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(n)c=!0;else{let h=o*i,d=h-i,p=h+i;for(let u=0;u!==i;++u){let g=t[h+u];if(g!==t[d+u]||g!==t[p+u]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Lt.prototype.ValueTypeName="",Lt.prototype.TimeBufferType=Float32Array,Lt.prototype.ValueBufferType=Float32Array,Lt.prototype.DefaultInterpolation=ws;var Fi=class extends Lt{constructor(e,t,i){super(e,t,i)}};Fi.prototype.ValueTypeName="bool",Fi.prototype.ValueBufferType=Array,Fi.prototype.DefaultInterpolation=lr,Fi.prototype.InterpolantFactoryMethodLinear=void 0,Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends Lt{constructor(e,t,i,n){super(e,t,i,n)}};ca.prototype.ValueTypeName="color";var ha=class extends Lt{constructor(e,t,i,n){super(e,t,i,n)}};ha.prototype.ValueTypeName="number";var ua=class extends Xi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)Gt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Pr=class extends Lt{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}};Pr.prototype.ValueTypeName="quaternion",Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Lt{constructor(e,t,i){super(e,t,i)}};Oi.prototype.ValueTypeName="string",Oi.prototype.ValueBufferType=Array,Oi.prototype.DefaultInterpolation=lr,Oi.prototype.InterpolantFactoryMethodLinear=void 0,Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends Lt{constructor(e,t,i,n){super(e,t,i,n)}};da.prototype.ValueTypeName="vector";var bs={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(ph(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!ph(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function ph(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var pa=class{constructor(e,t,i){let n=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){c++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,c),o===c&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let u=l[d],g=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ou=new pa,zn=class{constructor(e){this.manager=e!==void 0?e:ou,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};zn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rn=new WeakMap,ma=class extends zn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=bs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Rn.get(a);d===void 0&&(d=[],Rn.set(a,d)),d.push({onLoad:t,onError:n})}return a}let o=Ln("img");function c(){h(),t&&t(this);let d=Rn.get(this)||[];for(let p=0;p<d.length;p++){let u=d[p];u.onLoad&&u.onLoad(this)}Rn.delete(this),s.manager.itemEnd(e)}function l(d){h(),n&&n(d),bs.remove(`image:${e}`);let p=Rn.get(this)||[];for(let u=0;u<p.length;u++){let g=p[u];g.onError&&g.onError(d)}Rn.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),bs.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Ir=class extends zn{constructor(e){super(e)}load(e,t,i,n){let s=new Ct,a=new ma(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}};var eg=new Ne,tg=new A,ig=new A;var ys=new A,xs=new Gt,si=new A,Gn=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ys,xs,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ys,xs,si.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ys,xs,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ys,xs,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new A,mh=new ie,fh=new ie,Mt=class extends Gn{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*As*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ms*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*As*Math.atan(Math.tan(.5*Ms*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,mh,fh),t.subVectors(fh,mh)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ms*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Lr=class extends Gn{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ng=new Ne,rg=new Ne,sg=new Ne;var Pn=-90,fa=class extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Mt(Pn,1,e,t);n.layers=this.layers,this.add(n);let s=new Mt(Pn,1,e,t);s.layers=this.layers,this.add(s);let a=new Mt(Pn,1,e,t);a.layers=this.layers,this.add(a);let o=new Mt(Pn,1,e,t);o.layers=this.layers,this.add(o);let c=new Mt(Pn,1,e,t);c.layers=this.layers,this.add(c);let l=new Mt(Pn,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==ur)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;_=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,p,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ga=class extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ag=new A,og=new Gt,lg=new A,cg=new A,hg=new A;var ug=new A,dg=new Gt,pg=new A,mg=new A;var Yl="\\[\\]\\.:\\/",Ud=new RegExp("["+Yl+"]","g"),Io="[^"+Yl+"]",Fd="[^"+Yl.replace("\\.","")+"]",Od=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Io)+/(WCOD+)?/.source.replace("WCOD",Fd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Io)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Io)+"$"),Bd=["material","materials","bones","map"],Ke=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ud,"")}static parseTrackName(e){let t=Od.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Bd.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void be("PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material)return void Te("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Te("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Te("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(l!==void 0){if(e[l]===void 0)return void Te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[n];if(a===void 0)return void Te("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+n+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void Te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=class{constructor(r,e,t){let i=t||Ke.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray],Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fg=new Float32Array(1);var gg=new Ne;var ec=class ec{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};ec.prototype.isMatrix2=!0;var ko=ec,vg=new ie;var _g=new A,yg=new A,xg=new A,Sg=new A,Mg=new A,bg=new A,Tg=new A;var Eg=new A;var wg=new A,Ag=new Ne,Cg=new Ne;var Rg=new A,Pg=new Be,Ig=new Be;var Lg=new A,Dg=new A,Ng=new A;var Ug=new A,Fg=new Gn;var Og=new Zt;var Bg=new A;function Zl(r,e,t,i){let n=(function(s){switch(s){case Vt:case al:return{byteLength:1,components:1};case Wn:case ol:case ui:return{byteLength:2,components:1};case ba:case Ta:return{byteLength:2,components:4};case Ai:case Ma:case Qt:return{byteLength:4,components:1};case ll:case cl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)})(i);switch(t){case 1021:return r*e;case hl:case Ea:return r*e/n.components*n.byteLength;case 1030:case 1031:return r*e*2/n.components*n.byteLength;case 1022:return r*e*3/n.components*n.byteLength;case ei:case 1033:return r*e*4/n.components*n.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pu(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Gd(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=r.createBuffer(),d;if(r.bindBuffer(a,h),r.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=r.HALF_FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=r.SHORT;else if(o instanceof Uint32Array)d=r.UNSIGNED_INT;else if(o instanceof Int32Array)d=r.INT;else if(o instanceof Int8Array)d=r.BYTE;else if(o instanceof Uint8Array)d=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=r.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(r.bindBuffer(o,s),l.length===0)r.bufferSubData(o,0,c);else{l.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<l.length;d++){let p=l[h],u=l[d];u.start<=p.start+p.count+1?p.count=Math.max(p.count,u.start+u.count-p.start):(++h,l[h]=u)}l.length=h+1;for(let d=0,p=l.length;d<p;d++){let u=l[d];r.bufferSubData(o,u.start*c.BYTES_PER_ELEMENT,c,u.start,u.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var Ue={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );

		irradiance *= sheenEnergyComp;

	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER

		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {

	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif

				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN

		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;

	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},le={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},pi={basic:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Et([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Et([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Et([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Et([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Et([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Et([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Et([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Et([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Et([le.common,le.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Et([le.lights,le.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};pi.physical={uniforms:Et([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Na={r:0,b:0,g:0},Vd=new Ne,Iu=new Ie;function kd(r,e,t,i,n,s){let a=new Be(0),o,c,l=n===!0?0:1,h=null,d=0,p=null;function u(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){let f=m.backgroundBlurriness>0;_=e.get(_,f)}return _}function g(m,_){m.getRGB(Na,ql(r)),t.buffers.color.setClear(Na.r,Na.g,Na.b,_,s)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:function(m){let _=!1,f=u(m);f===null?g(a,l):f&&f.isColor&&(g(f,1),_=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,_){let f=u(_);f&&(f.isCubeTexture||f.mapping===Fr)?(c===void 0&&(c=new $e(new an(1,1,1),new nt({name:"BackgroundCubeMaterial",uniforms:dn(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,y,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=f,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vd.makeRotationFromEuler(_.backgroundRotation)).transpose(),f.isCubeTexture&&f.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Iu),c.material.toneMapped=Ge.getTransfer(f.colorSpace)!==Xe,h===f&&d===f.version&&p===r.toneMapping||(c.material.needsUpdate=!0,h=f,d=f.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new $e(new ci(2,2),new nt({name:"BackgroundMaterial",uniforms:dn(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=f,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.toneMapped=Ge.getTransfer(f.colorSpace)!==Xe,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),h===f&&d===f.version&&p===r.toneMapping||(o.material.needsUpdate=!0,h=f,d=f.version,p=r.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Hd(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=l(null),s=n,a=!1;function o(f){return r.bindVertexArray(f)}function c(f){return r.deleteVertexArray(f)}function l(f){let v=[],y=[],b=[];for(let M=0;M<t;M++)v[M]=0,y[M]=0,b[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:y,attributeDivisors:b,object:f,attributes:{},index:null}}function h(){let f=s.newAttributes;for(let v=0,y=f.length;v<y;v++)f[v]=0}function d(f){p(f,0)}function p(f,v){let y=s.newAttributes,b=s.enabledAttributes,M=s.attributeDivisors;y[f]=1,b[f]===0&&(r.enableVertexAttribArray(f),b[f]=1),M[f]!==v&&(r.vertexAttribDivisor(f,v),M[f]=v)}function u(){let f=s.newAttributes,v=s.enabledAttributes;for(let y=0,b=v.length;y<b;y++)v[y]!==f[y]&&(r.disableVertexAttribArray(y),v[y]=0)}function g(f,v,y,b,M,S,P){P===!0?r.vertexAttribIPointer(f,v,y,M,S):r.vertexAttribPointer(f,v,y,b,M,S)}function m(){_(),a=!0,s!==n&&(s=n,o(s.object))}function _(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(f,v,y,b,M){let S=!1,P=(function(F,L,N,V){let O=V.wireframe===!0,Z=i[L.id];Z===void 0&&(Z={},i[L.id]=Z);let H=F.isInstancedMesh===!0?F.id:0,k=Z[H];k===void 0&&(k={},Z[H]=k);let q=k[N.id];q===void 0&&(q={},k[N.id]=q);let W=q[O];return W===void 0&&(W=l(r.createVertexArray()),q[O]=W),W})(f,b,y,v);s!==P&&(s=P,o(s.object)),S=(function(F,L,N,V){let O=s.attributes,Z=L.attributes,H=0,k=N.getAttributes();for(let q in k)if(k[q].location>=0){let W=O[q],te=Z[q];if(te===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(te=F.instanceColor)),W===void 0||W.attribute!==te||te&&W.data!==te.data)return!0;H++}return s.attributesNum!==H||s.index!==V})(f,b,y,M),S&&(function(F,L,N,V){let O={},Z=L.attributes,H=0,k=N.getAttributes();for(let q in k)if(k[q].location>=0){let W=Z[q];W===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(W=F.instanceColor));let te={};te.attribute=W,W&&W.data&&(te.data=W.data),O[q]=te,H++}s.attributes=O,s.attributesNum=H,s.index=V})(f,b,y,M),M!==null&&e.update(M,r.ELEMENT_ARRAY_BUFFER),(S||a)&&(a=!1,(function(F,L,N,V){h();let O=V.attributes,Z=N.getAttributes(),H=L.defaultAttributeValues;for(let k in Z){let q=Z[k];if(q.location>=0){let W=O[k];if(W===void 0&&(k==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),k==="instanceColor"&&F.instanceColor&&(W=F.instanceColor)),W!==void 0){let te=W.normalized,de=W.itemSize,Me=e.get(W);if(Me===void 0)continue;let ge=Me.buffer,ve=Me.type,ee=Me.bytesPerElement,ce=ve===r.INT||ve===r.UNSIGNED_INT||W.gpuType===Ma;if(W.isInterleavedBufferAttribute){let oe=W.data,me=oe.stride,De=W.offset;if(oe.isInstancedInterleavedBuffer){for(let $=0;$<q.locationSize;$++)p(q.location+$,oe.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let $=0;$<q.locationSize;$++)d(q.location+$);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let $=0;$<q.locationSize;$++)g(q.location+$,de/q.locationSize,ve,te,me*ee,(De+de/q.locationSize*$)*ee,ce)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<q.locationSize;oe++)p(q.location+oe,W.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<q.locationSize;oe++)d(q.location+oe);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let oe=0;oe<q.locationSize;oe++)g(q.location+oe,de/q.locationSize,ve,te,de*ee,de/q.locationSize*oe*ee,ce)}}else if(H!==void 0){let te=H[k];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(q.location,te);break;case 3:r.vertexAttrib3fv(q.location,te);break;case 4:r.vertexAttrib4fv(q.location,te);break;default:r.vertexAttrib1fv(q.location,te)}}}}u()})(f,v,y,b),M!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(M).buffer))},reset:m,resetDefaultState:_,dispose:function(){m();for(let f in i){let v=i[f];for(let y in v){let b=v[y];for(let M in b){let S=b[M];for(let P in S)c(S[P].object),delete S[P];delete b[M]}}delete i[f]}},releaseStatesOfGeometry:function(f){if(i[f.id]===void 0)return;let v=i[f.id];for(let y in v){let b=v[y];for(let M in b){let S=b[M];for(let P in S)c(S[P].object),delete S[P];delete b[M]}}delete i[f.id]},releaseStatesOfObject:function(f){for(let v in i){let y=i[v],b=f.isInstancedMesh===!0?f.id:0,M=y[b];if(M!==void 0){for(let S in M){let P=M[S];for(let F in P)c(P[F].object),delete P[F];delete M[S]}delete y[b],Object.keys(y).length===0&&delete i[v]}}},releaseStatesOfProgram:function(f){for(let v in i){let y=i[v];for(let b in y){let M=y[b];if(M[f.id]===void 0)continue;let S=M[f.id];for(let P in S)c(S[P].object),delete S[P];delete M[f.id]}}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:u}}function Wd(r,e,t){let i;this.setMode=function(n){i=n},this.render=function(n,s){r.drawArrays(i,n,s),t.update(s,i,1)},this.renderInstances=function(n,s,a){a!==0&&(r.drawArraysInstanced(i,n,s,a),t.update(s,i,a))},this.renderMultiDraw=function(n,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,n,0,s,0,a);let o=0;for(let c=0;c<a;c++)o+=s[c];t.update(o,i,1)}}function Xd(r,e,t,i){let n;function s(h){if(h==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(be("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&l===!1&&be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(h){return h===ei||i.convert(h)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let d=h===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==Vt&&i.convert(h)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==Qt&&!d)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:r.getParameter(r.MAX_SAMPLES),samples:r.getParameter(r.SAMPLES)}}function jd(r){let e=this,t=null,i=0,n=!1,s=!1,a=new ai,o=new Ie,c={value:null,needsUpdate:!1};function l(h,d,p,u){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=c.value,u!==!0||m===null){let _=p+4*g,f=d.matrixWorldInverse;o.getNormalMatrix(f),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,y=p;v!==g;++v,y+=4)a.copy(h[v]).applyMatrix4(f,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||i!==0||n;return n=d,i=h.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,p){let u=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,_=r.get(h);if(!n||u===null||u.length===0||s&&!m)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let f=s?0:i,v=4*f,y=_.clippingState||null;c.value=y,y=l(u,d,v,p);for(let b=0;b!==v;++b)y[b]=t[b];_.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=f}}}Iu.set(-1,0,0,0,1,0,0,0,1);var lu=[.125,.215,.35,.446,.526,.582],Br=20,zr=new Lr,cu=new Be,tc=null,ic=0,nc=0,rc=!1,qd=new A,Fa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=qd}=s;tc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,ic,nc),this._renderer.xr.enabled=rc,e.scissorTest=!1,qn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hn||e.mapping===ln?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:ui,format:ei,colorSpace:cr,depthBuffer:!1},n=hu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,d=a-4+1+lu.length;for(let p=0;p<d;p++){let u=Math.pow(2,h);o.push(u);let g=1/u;p>a-4?g=lu[p-a+4-1]:p===0&&(g=0),c.push(g);let m=1/(u-2),_=-m,f=1+m,v=[_,_,f,_,f,f,_,_,f,f,_,f],y=6,b=6,M=3,S=2,P=1,F=new Float32Array(M*b*y),L=new Float32Array(S*b*y),N=new Float32Array(P*b*y);for(let O=0;O<y;O++){let Z=O%3*2/3-1,H=O>2?0:-1,k=[Z,H,0,Z+2/3,H,0,Z+2/3,H+1,0,Z,H,0,Z+2/3,H+1,0,Z,H+1,0];F.set(k,M*b*O),L.set(v,S*b*O);let q=[O,O,O,O,O,O];N.set(q,P*b*O)}let V=new qe;V.setAttribute("position",new at(F,M)),V.setAttribute("uv",new at(L,S)),V.setAttribute("faceIndex",new at(N,P)),l.push(new $e(V,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Br),h=new A(0,1,0);return new nt({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,c){return new nt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hi,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new $e(new qe,e);this._renderer.compile(t,zr)}_sceneToCubeUV(e,t,i,n,s){let a=new Mt(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,d=l.toneMapping;l.getClearColor(cu),l.toneMapping=$t,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new an,new Ti({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,u=p.material,g=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,g=!0):(u.color.copy(cu),g=!0);for(let _=0;_<6;_++){let f=_%3;f===0?(a.up.set(0,o[_],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[_],s.y,s.z)):f===1?(a.up.set(0,0,o[_]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[_],s.z)):(a.up.set(0,o[_],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[_]));let v=this._cubeSize;qn(n,f*v,_>2?v:0,v,v),l.setRenderTarget(n),g&&l.render(p,a),l.render(e,a)}l.toneMapping=d,l.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Hn||e.mapping===ln;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;qn(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,zr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h)*(0+1.25*l),{_lodMax:p}=this,u=this._sizeLods[i],g=3*u*(i>p-4?i-p+4:0),m=4*(this._cubeSize-u);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=p-t,qn(s,g,m,3*u,2*u),n.setRenderTarget(s),n.render(o,zr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=p-i,qn(e,g,m,3*u,2*u),n.setRenderTarget(e),n.render(o,zr)}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[n];h.material=l;let d=l.uniforms,p=this._sizeLods[i]-1,u=isFinite(s)?Math.PI/(2*p):2*Math.PI/39,g=s/u,m=isFinite(s)?1+Math.floor(3*g):Br;m>Br&&be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let _=[],f=0;for(let b=0;b<Br;++b){let M=b/g,S=Math.exp(-M*M/2);_.push(S),b===0?f+=S:b<m&&(f+=2*S)}for(let b=0;b<_.length;b++)_[b]=_[b]/f;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=u,d.mipInt.value=v-i;let y=this._sizeLods[n];qn(t,3*y*(n>v-4?n-v+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,zr)}};function hu(r,e,t){let i=new Nt(r,e,t);return i.texture.mapping=Fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qn(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function uu(){return new nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function du(){return new nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ba=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new vr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new an(5,5,5),s=new nt({name:"CubemapFromEquirect",uniforms:dn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bt,blending:hi});s.uniforms.tEquirect.value=t;let a=new $e(n,s),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=gt),new fa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}};function Yd(r){let e=new WeakMap,t=new WeakMap,i=null;function n(o,c){return c===ya?o.mapping=Hn:c===xa&&(o.mapping=ln),o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}return{get:function(o,c=!1){return o==null?null:c?(function(l){if(l&&l.isTexture){let h=l.mapping,d=h===ya||h===xa,p=h===Hn||h===ln;if(d||p){let u=t.get(l),g=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return i===null&&(i=new Fa(r)),u=d?i.fromEquirectangular(l,u):i.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{let m=l.image;return d&&m&&m.height>0||p&&m&&(function(_){let f=0,v=6;for(let y=0;y<v;y++)_[y]!==void 0&&f++;return f===v})(m)?(i===null&&(i=new Fa(r)),u=d?i.fromEquirectangular(l):i.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",a),u.texture):null}}}return l})(o):(function(l){if(l&&l.isTexture){let h=l.mapping;if(h===ya||h===xa){if(e.has(l))return n(e.get(l).texture,l.mapping);{let d=l.image;if(d&&d.height>0){let p=new Ba(d.height);return p.fromEquirectangularTexture(r,l),e.set(l,p),l.addEventListener("dispose",s),n(p.texture,l.mapping)}return null}}}return l})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function Zd(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&rn("WebGLRenderer: "+i+" extension not supported."),n}}}function Jd(r,e,t,i){let n={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let d in l.attributes)e.remove(l.attributes[d]);l.removeEventListener("dispose",a),delete n[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,d=c.attributes.position,p=0;if(d===void 0)return;if(h!==null){let m=h.array;p=h.version;for(let _=0,f=m.length;_<f;_+=3){let v=m[_+0],y=m[_+1],b=m[_+2];l.push(v,y,y,b,b,v)}}else{let m=d.array;p=d.version;for(let _=0,f=m.length/3-1;_<f;_+=3){let v=_+0,y=_+1,b=_+2;l.push(v,y,y,b,b,v)}}let u=new(d.count>=65535?gr:fr)(l,1);u.version=p;let g=s.get(c);g&&e.remove(g),s.set(c,u)}return{get:function(c,l){return n[l.id]===!0||(l.addEventListener("dispose",a),n[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Kd(r,e,t){let i,n,s;this.setMode=function(a){i=a},this.setIndex=function(a){n=a.type,s=a.bytesPerElement},this.render=function(a,o){r.drawElements(i,o,n,a*s),t.update(o,i,1)},this.renderInstances=function(a,o,c){c!==0&&(r.drawElementsInstanced(i,o,n,a*s,c),t.update(o,i,c))},this.renderMultiDraw=function(a,o,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,n,a,0,c);let l=0;for(let h=0;h<c;h++)l+=o[h];t.update(l,i,1)}}function $d(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:Te("WebGLInfo: Unknown draw mode:",i)}}}}function Qd(r,e,t){let i=new WeakMap,n=new Ye;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,d=i.get(a);if(d===void 0||d.count!==h){let F=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,u=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],f=a.morphAttributes.color||[],v=0;p===!0&&(v=1),u===!0&&(v=2),g===!0&&(v=3);let y=a.attributes.position.count*v,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*b*4*h),S=new dr(M,y,b,h);S.type=Qt,S.needsUpdate=!0;let P=4*v;for(let L=0;L<h;L++){let N=m[L],V=_[L],O=f[L],Z=y*b*4*L;for(let H=0;H<N.count;H++){let k=H*P;p===!0&&(n.fromBufferAttribute(N,H),M[Z+k+0]=n.x,M[Z+k+1]=n.y,M[Z+k+2]=n.z,M[Z+k+3]=0),u===!0&&(n.fromBufferAttribute(V,H),M[Z+k+4]=n.x,M[Z+k+5]=n.y,M[Z+k+6]=n.z,M[Z+k+7]=0),g===!0&&(n.fromBufferAttribute(O,H),M[Z+k+8]=n.x,M[Z+k+9]=n.y,M[Z+k+10]=n.z,M[Z+k+11]=O.itemSize===4?n.w:1)}}d={count:h,texture:S,size:new ie(y,b)},i.set(a,d),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let u=a.morphTargetsRelative?1:1-p;o.getUniforms().setValue(r,"morphTargetBaseInfluence",u),o.getUniforms().setValue(r,"morphTargetInfluences",c)}o.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}}}function ep(r,e,t,i,n){let s=new WeakMap;function a(o){let c=o.target;c.removeEventListener("dispose",a),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:function(o){let c=n.render.frame,l=o.geometry,h=e.get(o,l);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==c&&(t.update(o.instanceMatrix,r.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,r.ARRAY_BUFFER),s.set(o,c))),o.isSkinnedMesh){let d=o.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h},dispose:function(){s=new WeakMap}}}var tp={[Qo]:"LINEAR_TONE_MAPPING",[el]:"REINHARD_TONE_MAPPING",[tl]:"CINEON_TONE_MAPPING",[Ur]:"ACES_FILMIC_TONE_MAPPING",[nl]:"AGX_TONE_MAPPING",[rl]:"NEUTRAL_TONE_MAPPING",[il]:"CUSTOM_TONE_MAPPING"};function ip(r,e,t,i,n,s){let a=new Nt(e,t,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,depthTexture:n?new Ei(e,t):void 0}),o=new Nt(e,t,{type:ui,depthBuffer:!1,stencilBuffer:!1}),c=new qe;c.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new we([0,2,0,0,2,0],2));let l=new ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new $e(c,l),d=new Lr(-1,1,1,-1,0,1),p,u=null,g=null,m=!1,_=null,f=[],v=!1;this.setSize=function(y,b){a.setSize(y,b),o.setSize(y,b);for(let M=0;M<f.length;M++){let S=f[M];S.setSize&&S.setSize(y,b)}},this.setEffects=function(y){f=y,v=f.length>0&&f[0].isRenderPass===!0;let b=a.width,M=a.height;for(let S=0;S<f.length;S++){let P=f[S];P.setSize&&P.setSize(b,M)}},this.begin=function(y,b){if(m||y.toneMapping===$t&&f.length===0)return!1;if(_=b,b!==null){let M=b.width,S=b.height;a.width===M&&a.height===S||this.setSize(M,S)}return v===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=$t,!0},this.hasRenderPass=function(){return v},this.end=function(y,b){y.toneMapping=p,m=!0;let M=a,S=o;for(let P=0;P<f.length;P++){let F=f[P];if(F.enabled!==!1&&(F.render(y,S,M,b),F.needsSwap!==!1)){let L=M;M=S,S=L}}if(u!==y.outputColorSpace||g!==y.toneMapping){u=y.outputColorSpace,g=y.toneMapping,l.defines={},Ge.getTransfer(u)===Xe&&(l.defines.SRGB_TRANSFER="");let P=tp[g];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(_),y.render(h,d),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var Lu=new Ct,oc=new Ei(1,1),Du=new dr,Nu=new Ps,Uu=new vr,pu=[],mu=[],fu=new Float32Array(16),gu=new Float32Array(9),vu=new Float32Array(4);function Zn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=pu[n];if(s===void 0&&(s=new Float32Array(n),pu[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function pt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function mt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ga(r,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function np(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2fv(this.addr,e),mt(t,e)}}function sp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;r.uniform3fv(this.addr,e),mt(t,e)}}function ap(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4fv(this.addr,e),mt(t,e)}}function op(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;vu.set(i),r.uniformMatrix2fv(this.addr,!1,vu),mt(t,i)}}function lp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;gu.set(i),r.uniformMatrix3fv(this.addr,!1,gu),mt(t,i)}}function cp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;fu.set(i),r.uniformMatrix4fv(this.addr,!1,fu),mt(t,i)}}function hp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function up(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2iv(this.addr,e),mt(t,e)}}function dp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3iv(this.addr,e),mt(t,e)}}function pp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4iv(this.addr,e),mt(t,e)}}function mp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function fp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2uiv(this.addr,e),mt(t,e)}}function gp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3uiv(this.addr,e),mt(t,e)}}function vp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4uiv(this.addr,e),mt(t,e)}}function _p(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(oc.compareFunction=t.isReversedDepthBuffer()?Da:La,s=oc):s=Lu,t.setTexture2D(e||s,n)}function yp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Nu,n)}function xp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Uu,n)}function Sp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Du,n)}function Mp(r,e){r.uniform1fv(this.addr,e)}function bp(r,e){let t=Zn(e,this.size,2);r.uniform2fv(this.addr,t)}function Tp(r,e){let t=Zn(e,this.size,3);r.uniform3fv(this.addr,t)}function Ep(r,e){let t=Zn(e,this.size,4);r.uniform4fv(this.addr,t)}function wp(r,e){let t=Zn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ap(r,e){let t=Zn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cp(r,e){let t=Zn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Rp(r,e){r.uniform1iv(this.addr,e)}function Pp(r,e){r.uniform2iv(this.addr,e)}function Ip(r,e){r.uniform3iv(this.addr,e)}function Lp(r,e){r.uniform4iv(this.addr,e)}function Dp(r,e){r.uniform1uiv(this.addr,e)}function Np(r,e){r.uniform2uiv(this.addr,e)}function Up(r,e){r.uniform3uiv(this.addr,e)}function Fp(r,e){r.uniform4uiv(this.addr,e)}function Op(r,e,t){let i=this.cache,n=e.length,s=Ga(t,n),a;pt(i,s)||(r.uniform1iv(this.addr,s),mt(i,s)),a=this.type===r.SAMPLER_2D_SHADOW?oc:Lu;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function Bp(r,e,t){let i=this.cache,n=e.length,s=Ga(t,n);pt(i,s)||(r.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Nu,s[a])}function zp(r,e,t){let i=this.cache,n=e.length,s=Ga(t,n);pt(i,s)||(r.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Uu,s[a])}function Gp(r,e,t){let i=this.cache,n=e.length,s=Ga(t,n);pt(i,s)||(r.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Du,s[a])}var lc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return np;case 35664:return rp;case 35665:return sp;case 35666:return ap;case 35674:return op;case 35675:return lp;case 35676:return cp;case 5124:case 35670:return hp;case 35667:case 35671:return up;case 35668:case 35672:return dp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return fp;case 36295:return gp;case 36296:return vp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return Sp}})(t.type)}},cc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return Mp;case 35664:return bp;case 35665:return Tp;case 35666:return Ep;case 35674:return wp;case 35675:return Ap;case 35676:return Cp;case 5124:case 35670:return Rp;case 35667:case 35671:return Pp;case 35668:case 35672:return Ip;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Np;case 36295:return Up;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Gp}})(t.type)}},hc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},sc=/(\w+)(\])?(\[|\.)?/g;function _u(r,e){r.seq.push(e),r.map[e.id]=e}function Vp(r,e,t){let i=r.name,n=i.length;for(sc.lastIndex=0;;){let s=sc.exec(i),a=sc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===n){_u(t,l===void 0?new lc(o,r,e):new cc(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new hc(o),_u(t,h)),t=h}}}var Yn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);Vp(o,e.getUniformLocation(t,o.name),this)}let n=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function yu(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var kp=0,xu=new Ie;function Su(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=(r.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,c){let l=o.split(`
`),h=[],d=Math.max(c-6,0),p=Math.min(c+6,l.length);for(let u=d;u<p;u++){let g=u+1;h.push(`${g===c?">":" "} ${g}: ${l[u]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function Hp(r,e){let t=(function(i){Ge._getMatrix(xu,Ge.workingColorSpace,i);let n=`mat3( ${xu.elements.map(s=>s.toFixed(4))} )`;switch(Ge.getTransfer(i)){case hr:return[n,"LinearTransferOETF"];case Xe:return[n,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Wp={[Qo]:"Linear",[el]:"Reinhard",[tl]:"Cineon",[Ur]:"ACESFilmic",[nl]:"AgX",[rl]:"Neutral",[il]:"Custom"};function Xp(r,e){let t=Wp[e];return t===void 0?(be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ua=new A;function jp(){return Ge.getLuminanceCoefficients(Ua),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ua.x.toFixed(4)}, ${Ua.y.toFixed(4)}, ${Ua.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gr(r){return r!==""}function Mu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qp=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(r){return r.replace(qp,Zp)}var Yp=new Map;function Zp(r,e){let t=Ue[e];if(t===void 0){let i=Yp.get(e);if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");t=Ue[i],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return uc(t)}var Jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(r){return r.replace(Jp,Kp)}function Kp(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Eu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var $p={[Dr]:"SHADOWMAP_TYPE_PCF",[Vn]:"SHADOWMAP_TYPE_VSM"},Qp={[Hn]:"ENVMAP_TYPE_CUBE",[ln]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"},em={[ln]:"ENVMAP_MODE_REFRACTION"},tm={[zh]:"ENVMAP_BLENDING_MULTIPLY",[Gh]:"ENVMAP_BLENDING_MIX",[Vh]:"ENVMAP_BLENDING_ADD"};function im(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(V){return $p[V.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),l=(function(V){return V.envMap===!1?"ENVMAP_TYPE_CUBE":Qp[V.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(V){return V.envMap===!1?"ENVMAP_MODE_REFLECTION":em[V.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),d=(function(V){return V.envMap===!1?"ENVMAP_BLENDING_NONE":tm[V.combine]||"ENVMAP_BLENDING_NONE"})(t),p=(function(V){let O=V.envMapCubeUVHeight;if(O===null)return null;let Z=Math.log2(O)-2,H=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:H,maxMip:Z}})(t),u=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)})(t),g=(function(V){let O=[];for(let Z in V){let H=V[Z];H!==!1&&O.push("#define "+Z+" "+H)}return O.join(`
`)})(s),m=n.createProgram(),_,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),f.length>0&&(f+=`
`)):(_=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),f=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$t?"#define TONE_MAPPING":"",t.toneMapping!==$t?Ue.tonemapping_pars_fragment:"",t.toneMapping!==$t?Xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Hp("linearToOutputTexel",t.outputColorSpace),jp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),a=uc(a),a=Mu(a,t),a=bu(a,t),o=uc(o),o=Mu(o,t),o=bu(o,t),a=Tu(a),o=Tu(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=v+_+a,b=v+f+o,M=yu(n,n.VERTEX_SHADER,y),S=yu(n,n.FRAGMENT_SHADER,b);function P(V){if(r.debug.checkShaderErrors){let O=n.getProgramInfoLog(m)||"",Z=n.getShaderInfoLog(M)||"",H=n.getShaderInfoLog(S)||"",k=O.trim(),q=Z.trim(),W=H.trim(),te=!0,de=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,M,S);else{let Me=Su(n,M,"vertex"),ge=Su(n,S,"fragment");Te("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+k+`
`+Me+`
`+ge)}else k!==""?be("WebGLProgram: Program Info Log:",k):q!==""&&W!==""||(de=!1);de&&(V.diagnostics={runnable:te,programLog:k,vertexShader:{log:q,prefix:_},fragmentShader:{log:W,prefix:f}})}n.deleteShader(M),n.deleteShader(S),F=new Yn(n,m),L=(function(O,Z){let H={},k=O.getProgramParameter(Z,O.ACTIVE_ATTRIBUTES);for(let q=0;q<k;q++){let W=O.getActiveAttrib(Z,q),te=W.name,de=1;W.type===O.FLOAT_MAT2&&(de=2),W.type===O.FLOAT_MAT3&&(de=3),W.type===O.FLOAT_MAT4&&(de=4),H[te]={type:W.type,location:O.getAttribLocation(Z,te),locationSize:de}}return H})(n,m)}let F,L;n.attachShader(m,M),n.attachShader(m,S),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),this.getUniforms=function(){return F===void 0&&P(this),F},this.getAttributes=function(){return L===void 0&&P(this),L};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(m,37297)),N},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=S,this}var nm=0,dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new pc(e),t.set(e,i)),i}},pc=class{constructor(e){this.id=nm++,this.code=e,this.usedTimes=0}};function rm(r,e,t,i,n,s){let a=new pr,o=new dc,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,p=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,f,v,y,b){let M=v.fog,S=y.geometry,P=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?v.environment:null,F=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,L=e.get(m.envMap||P,F),N=L&&L.mapping===Fr?L.image.height:null,V=u[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&be("WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let O=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,Z=O!==void 0?O.length:0,H,k,q,W,te=0;if(S.morphAttributes.position!==void 0&&(te=1),S.morphAttributes.normal!==void 0&&(te=2),S.morphAttributes.color!==void 0&&(te=3),V){let kt=pi[V];H=kt.vertexShader,k=kt.fragmentShader}else{H=m.vertexShader,k=m.fragmentShader;let kt=o.getVertexShaderStage(m),Yi=o.getFragmentShaderStage(m);o.update(m,kt,Yi),q=kt.id,W=Yi.id}let de=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),ge=y.isInstancedMesh===!0,ve=y.isBatchedMesh===!0,ee=!!m.map,ce=!!m.matcap,oe=!!L,me=!!m.aoMap,De=!!m.lightMap,$=!!m.bumpMap&&m.wireframe===!1,R=!!m.normalMap,T=!!m.displacementMap,C=!!m.emissiveMap,U=!!m.metalnessMap,x=!!m.roughnessMap,D=m.anisotropy>0,I=m.clearcoat>0,w=m.dispersion>0,G=m.iridescence>0,X=m.sheen>0,Y=m.transmission>0,re=D&&!!m.anisotropyMap,_e=I&&!!m.clearcoatMap,ye=I&&!!m.clearcoatNormalMap,he=I&&!!m.clearcoatRoughnessMap,Ae=G&&!!m.iridescenceMap,Q=G&&!!m.iridescenceThicknessMap,se=X&&!!m.sheenColorMap,ne=X&&!!m.sheenRoughnessMap,pe=!!m.specularMap,Ze=!!m.specularColorMap,We=!!m.specularIntensityMap,st=Y&&!!m.transmissionMap,wt=Y&&!!m.thicknessMap,Se=!!m.gradientMap,je=!!m.alphaMap,Fe=m.alphaTest>0,vt=!!m.alphaHash,Je=!!m.extensions,ut=$t;m.toneMapped&&(de!==null&&de.isXRRenderTarget!==!0||(ut=r.toneMapping));let rt={shaderID:V,shaderType:m.type,shaderName:m.name,vertexShader:H,fragmentShader:k,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:W,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:ve,batchingColor:ve&&y._colorsTexture!==null,instancing:ge,instancingColor:ge&&y.instanceColor!==null,instancingMorph:ge&&y.morphTexture!==null,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:ee,matcap:ce,envMap:oe,envMapMode:oe&&L.mapping,envMapCubeUVHeight:N,aoMap:me,lightMap:De,bumpMap:$,normalMap:R,displacementMap:T,emissiveMap:C,normalMapObjectSpace:R&&m.normalMapType===Xh,normalMapTangentSpace:R&&m.normalMapType===Hl,packedNormalMap:R&&m.normalMapType===Hl&&(Ft=m.normalMap.format,Ft===hn||Ft===Pa||Ft===Ia),metalnessMap:U,roughnessMap:x,anisotropy:D,anisotropyMap:re,clearcoat:I,clearcoatMap:_e,clearcoatNormalMap:ye,clearcoatRoughnessMap:he,dispersion:w,iridescence:G,iridescenceMap:Ae,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:se,sheenRoughnessMap:ne,specularMap:pe,specularColorMap:Ze,specularIntensityMap:We,transmission:Y,transmissionMap:st,thicknessMap:wt,gradientMap:Se,opaque:m.transparent===!1&&m.blending===Nr&&m.alphaToCoverage===!1,alphaMap:je,alphaTest:Fe,alphaHash:vt,combine:m.combine,mapUv:ee&&g(m.map.channel),aoMapUv:me&&g(m.aoMap.channel),lightMapUv:De&&g(m.lightMap.channel),bumpMapUv:$&&g(m.bumpMap.channel),normalMapUv:R&&g(m.normalMap.channel),displacementMapUv:T&&g(m.displacementMap.channel),emissiveMapUv:C&&g(m.emissiveMap.channel),metalnessMapUv:U&&g(m.metalnessMap.channel),roughnessMapUv:x&&g(m.roughnessMap.channel),anisotropyMapUv:re&&g(m.anisotropyMap.channel),clearcoatMapUv:_e&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:se&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:ne&&g(m.sheenRoughnessMap.channel),specularMapUv:pe&&g(m.specularMap.channel),specularColorMapUv:Ze&&g(m.specularColorMap.channel),specularIntensityMapUv:We&&g(m.specularIntensityMap.channel),transmissionMapUv:st&&g(m.transmissionMap.channel),thicknessMapUv:wt&&g(m.thicknessMap.channel),alphaMapUv:je&&g(m.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(R||D),vertexNormals:!!S.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!S.attributes.uv&&(ee||je),fog:!!M,useFog:m.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||S.attributes.normal===void 0&&R===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:S.attributes.position!==void 0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:te,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:b.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&f.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:ee&&m.map.isVideoTexture===!0&&Ge.getTransfer(m.map.colorSpace)===Xe,decodeVideoTextureEmissive:C&&m.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(m.emissiveMap.colorSpace)===Xe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Tt,flipSided:m.side===bt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Je&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&m.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};var Ft;return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let f in m.defines)_.push(f),_.push(m.defines[f]);return m.isRawShaderMaterial===!1&&((function(f,v){f.push(v.precision),f.push(v.outputColorSpace),f.push(v.envMapMode),f.push(v.envMapCubeUVHeight),f.push(v.mapUv),f.push(v.alphaMapUv),f.push(v.lightMapUv),f.push(v.aoMapUv),f.push(v.bumpMapUv),f.push(v.normalMapUv),f.push(v.displacementMapUv),f.push(v.emissiveMapUv),f.push(v.metalnessMapUv),f.push(v.roughnessMapUv),f.push(v.anisotropyMapUv),f.push(v.clearcoatMapUv),f.push(v.clearcoatNormalMapUv),f.push(v.clearcoatRoughnessMapUv),f.push(v.iridescenceMapUv),f.push(v.iridescenceThicknessMapUv),f.push(v.sheenColorMapUv),f.push(v.sheenRoughnessMapUv),f.push(v.specularMapUv),f.push(v.specularColorMapUv),f.push(v.specularIntensityMapUv),f.push(v.transmissionMapUv),f.push(v.thicknessMapUv),f.push(v.combine),f.push(v.fogExp2),f.push(v.sizeAttenuation),f.push(v.morphTargetsCount),f.push(v.morphAttributeCount),f.push(v.numDirLights),f.push(v.numPointLights),f.push(v.numSpotLights),f.push(v.numSpotLightMaps),f.push(v.numHemiLights),f.push(v.numRectAreaLights),f.push(v.numDirLightShadows),f.push(v.numPointLightShadows),f.push(v.numSpotLightShadows),f.push(v.numSpotLightShadowsWithMaps),f.push(v.numLightProbes),f.push(v.shadowMapType),f.push(v.toneMapping),f.push(v.numClippingPlanes),f.push(v.numClipIntersection),f.push(v.depthPacking)})(_,m),(function(f,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),f.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),f.push(a.mask)})(_,m),_.push(r.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=u[m.type],f;if(_){let v=pi[_];f=au.clone(v.uniforms)}else f=m.uniforms;return f},acquireProgram:function(m,_){let f=h.get(_);return f!==void 0?++f.usedTimes:(f=new im(r,_,m,n),l.push(f),h.set(_,f)),f},releaseProgram:function(m){if(--m.usedTimes===0){let _=l.indexOf(m);l[_]=l[l.length-1],l.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){o.remove(m)},programs:l,dispose:function(){o.dispose()}}}function sm(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function am(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function wu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Au(){let r=[],e=0,t=[],i=[],n=[];function s(o){let c=0;return o.isInstancedMesh&&(c+=2),o.isSkinnedMesh&&(c+=1),c}function a(o,c,l,h,d,p){let u=r[e];return u===void 0?(u={id:o.id,object:o,geometry:c,material:l,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:d,group:p},r[e]=u):(u.id=o.id,u.object=o,u.geometry=c,u.material=l,u.materialVariant=s(o),u.groupOrder=h,u.renderOrder=o.renderOrder,u.z=d,u.group=p),e++,u}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(o,c,l,h,d,p){let u=a(o,c,l,h,d,p);l.transmission>0?i.push(u):l.transparent===!0?n.push(u):t.push(u)},unshift:function(o,c,l,h,d,p){let u=a(o,c,l,h,d,p);l.transmission>0?i.unshift(u):l.transparent===!0?n.unshift(u):t.unshift(u)},finish:function(){for(let o=e,c=r.length;o<c;o++){let l=r[o];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(o,c,l){t.length>1&&t.sort(o||am),i.length>1&&i.sort(c||wu),n.length>1&&n.sort(c||wu),l&&(t.reverse(),i.reverse(),n.reverse())}}}function om(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new Au,r.set(e,[n])):t>=i.length?(n=new Au,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function lm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Be};break;case"SpotLight":t={position:new A,direction:new A,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new A,halfWidth:new A,halfHeight:new A}}return r[e.id]=t,t}}}var cm=0;function hm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function um(r){let e=new lm,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new A);let n=new A,s=new Ne,a=new Ne;return{setup:function(o){let c=0,l=0,h=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let d=0,p=0,u=0,g=0,m=0,_=0,f=0,v=0,y=0,b=0,M=0;o.sort(hm);for(let P=0,F=o.length;P<F;P++){let L=o[P],N=L.color,V=L.intensity,O=L.distance,Z=null;if(L.shadow&&L.shadow.map&&(Z=L.shadow.map.texture.format===hn?L.shadow.map.texture:L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=N.r*V,l+=N.g*V,h+=N.b*V;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],V);M++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=L.shadow.matrix,_++}i.directional[d]=H,d++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(N).multiplyScalar(V),H.distance=O,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[u]=H;let k=L.shadow;if(L.map&&(i.spotLightMap[y]=L.map,y++,k.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[u]=k.matrix,L.castShadow){let q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.spotShadow[u]=q,i.spotShadowMap[u]=Z,v++}u++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(N).multiplyScalar(V),H.halfWidth.set(.5*L.width,0,0),H.halfHeight.set(0,.5*L.height,0),i.rectArea[g]=H,g++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let k=L.shadow,q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,i.pointShadow[p]=q,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=L.shadow.matrix,f++}i.point[p]=H,p++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(V),H.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[m]=H,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=l,i.ambient[2]=h;let S=i.hash;S.directionalLength===d&&S.pointLength===p&&S.spotLength===u&&S.rectAreaLength===g&&S.hemiLength===m&&S.numDirectionalShadows===_&&S.numPointShadows===f&&S.numSpotShadows===v&&S.numSpotMaps===y&&S.numLightProbes===M||(i.directional.length=d,i.spot.length=u,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=f,i.pointShadowMap.length=f,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=f,i.spotLightMatrix.length=v+y-b,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=M,S.directionalLength=d,S.pointLength=p,S.spotLength=u,S.rectAreaLength=g,S.hemiLength=m,S.numDirectionalShadows=_,S.numPointShadows=f,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=M,i.version=cm++)},setupView:function(o,c){let l=0,h=0,d=0,p=0,u=0,g=c.matrixWorldInverse;for(let m=0,_=o.length;m<_;m++){let f=o[m];if(f.isDirectionalLight){let v=i.directional[l];v.direction.setFromMatrixPosition(f.matrixWorld),n.setFromMatrixPosition(f.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),l++}else if(f.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(f.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(f.matrixWorld),n.setFromMatrixPosition(f.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),d++}else if(f.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(f.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(f.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(.5*f.width,0,0),v.halfHeight.set(0,.5*f.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(f.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(f.matrixWorld),v.position.applyMatrix4(g),h++}else if(f.isHemisphereLight){let v=i.hemi[u];v.direction.setFromMatrixPosition(f.matrixWorld),v.direction.transformDirection(g),u++}}},state:i}}function Cu(r){let e=new um(r),t=[],i=[],n=[],s={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,i.length=0,n.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)},pushLightProbeGrid:function(a){n.push(a)}}}function dm(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new Cu(r),e.set(t,[s])):i>=n.length?(s=new Cu(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var pm=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],mm=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Ru=new Ne,Vr=new A,ac=new A;function fm(r,e,t){let i=new Vi,n=new ie,s=new ie,a=new Ye,o=new na,c=new ra,l={},h=t.maxTextureSize,d={[ji]:bt,[bt]:ji,[Tt]:Tt},p=new nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),u=p.clone();u.defines.HORIZONTAL_PASS=1;let g=new qe;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new $e(g,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let f=this.type;function v(S,P){let F=e.update(m);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Nt(n.x,n.y,{format:hn,type:ui})),p.uniforms.shadow_pass.value=S.map.depthTexture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(P,null,F,p,m,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(P,null,F,u,m,null)}function y(S,P,F,L){let N=null,V=F.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(V!==void 0)N=V;else if(N=F.isPointLight===!0?c:o,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=N.uuid,Z=P.uuid,H=l[O];H===void 0&&(H={},l[O]=H);let k=H[Z];k===void 0&&(k=N.clone(),H[Z]=k,P.addEventListener("dispose",M)),N=k}return N.visible=P.visible,N.wireframe=P.wireframe,N.side=L===Vn?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:d[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,F.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(r.properties.get(N).light=F),N}function b(S,P,F,L,N){if(S.visible===!1)return;if(S.layers.test(P.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===Vn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld);let O=e.update(S),Z=S.material;if(Array.isArray(Z)){let H=O.groups;for(let k=0,q=H.length;k<q;k++){let W=H[k],te=Z[W.materialIndex];if(te&&te.visible){let de=y(S,te,L,N);S.onBeforeShadow(r,S,P,F,O,de,W),r.renderBufferDirect(F,null,O,de,S,W),S.onAfterShadow(r,S,P,F,O,de,W)}}}else if(Z.visible){let H=y(S,Z,L,N);S.onBeforeShadow(r,S,P,F,O,H,null),r.renderBufferDirect(F,null,O,H,S,null),S.onAfterShadow(r,S,P,F,O,H,null)}}let V=S.children;for(let O=0,Z=V.length;O<Z;O++)b(V[O],P,F,L,N)}function M(S){S.target.removeEventListener("dispose",M);for(let P in l){let F=l[P],L=S.target.uuid;L in F&&(F[L].dispose(),delete F[L])}}this.render=function(S,P,F){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||S.length===0)return;this.type===_h&&(be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Dr);let L=r.getRenderTarget(),N=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),O=r.state;O.setBlending(hi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Z=f!==this.type;Z&&P.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(k=>k.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,k=S.length;H<k;H++){let q=S[H],W=q.shadow;if(W===void 0){be("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let te=W.getFrameExtents();n.multiply(te),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/te.x),n.x=s.x*te.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/te.y),n.y=s.y*te.y,W.mapSize.y=s.y));let de=r.state.buffers.depth.getReversed();if(W.camera._reversedDepth=de,W.map===null||Z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Vn){if(q.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Nt(n.x,n.y,{format:hn,type:ui,minFilter:gt,magFilter:gt,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Ei(n.x,n.y,Qt),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=qi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=zt,W.map.depthTexture.magFilter=zt}else q.isPointLight?(W.map=new Ba(n.x),W.map.depthTexture=new Ns(n.x,Ai)):(W.map=new Nt(n.x,n.y),W.map.depthTexture=new Ei(n.x,n.y,Ai)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=qi,this.type===Dr?(W.map.depthTexture.compareFunction=de?Da:La,W.map.depthTexture.minFilter=gt,W.map.depthTexture.magFilter=gt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=zt,W.map.depthTexture.magFilter=zt);W.camera.updateProjectionMatrix()}let Me=W.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<Me;ge++){if(W.map.isWebGLCubeRenderTarget)r.setRenderTarget(W.map,ge),r.clear();else{ge===0&&(r.setRenderTarget(W.map),r.clear());let ve=W.getViewport(ge);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),O.viewport(a)}if(q.isPointLight){let ve=W.camera,ee=W.matrix,ce=q.distance||ve.far;ce!==ve.far&&(ve.far=ce,ve.updateProjectionMatrix()),Vr.setFromMatrixPosition(q.matrixWorld),ve.position.copy(Vr),ac.copy(ve.position),ac.add(pm[ge]),ve.up.copy(mm[ge]),ve.lookAt(ac),ve.updateMatrixWorld(),ee.makeTranslation(-Vr.x,-Vr.y,-Vr.z),Ru.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ru,ve.coordinateSystem,ve.reversedDepth)}else W.updateMatrices(q);i=W.getFrustum(),b(P,F,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Vn&&v(W,F),W.needsUpdate=!1}f=this.type,_.needsUpdate=!1,r.setRenderTarget(L,N,V)}}function gm(r,e){let t=new function(){let x=!1,D=new Ye,I=null,w=new Ye(0,0,0,0);return{setMask:function(G){I===G||x||(r.colorMask(G,G,G,G),I=G)},setLocked:function(G){x=G},setClear:function(G,X,Y,re,_e){_e===!0&&(G*=re,X*=re,Y*=re),D.set(G,X,Y,re),w.equals(D)===!1&&(r.clearColor(G,X,Y,re),w.copy(D))},reset:function(){x=!1,I=null,w.set(-1,0,0,0)}}},i=new function(){let x=!1,D=!1,I=null,w=null,G=null;return{setReversed:function(X){if(D!==X){let Y=e.get("EXT_clip_control");X?Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.ZERO_TO_ONE_EXT):Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.NEGATIVE_ONE_TO_ONE_EXT),D=X;let re=G;G=null,this.setClear(re)}},getReversed:function(){return D},setTest:function(X){X?oe(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(X){I===X||x||(r.depthMask(X),I=X)},setFunc:function(X){if(D&&(X=tu[X]),w!==X){switch(X){case jo:r.depthFunc(r.NEVER);break;case qo:r.depthFunc(r.ALWAYS);break;case Yo:r.depthFunc(r.LESS);break;case _a:r.depthFunc(r.LEQUAL);break;case Zo:r.depthFunc(r.EQUAL);break;case Jo:r.depthFunc(r.GEQUAL);break;case Ko:r.depthFunc(r.GREATER);break;case $o:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}w=X}},setLocked:function(X){x=X},setClear:function(X){G!==X&&(G=X,D&&(X=1-X),r.clearDepth(X))},reset:function(){x=!1,I=null,w=null,G=null,D=!1}}},n=new function(){let x=!1,D=null,I=null,w=null,G=null,X=null,Y=null,re=null,_e=null;return{setTest:function(ye){x||(ye?oe(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(ye){D===ye||x||(r.stencilMask(ye),D=ye)},setFunc:function(ye,he,Ae){I===ye&&w===he&&G===Ae||(r.stencilFunc(ye,he,Ae),I=ye,w=he,G=Ae)},setOp:function(ye,he,Ae){X===ye&&Y===he&&re===Ae||(r.stencilOp(ye,he,Ae),X=ye,Y=he,re=Ae)},setLocked:function(ye){x=ye},setClear:function(ye){_e!==ye&&(r.clearStencil(ye),_e=ye)},reset:function(){x=!1,D=null,I=null,w=null,G=null,X=null,Y=null,re=null,_e=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l={},h=new WeakMap,d=[],p=null,u=!1,g=null,m=null,_=null,f=null,v=null,y=null,b=null,M=new Be(0,0,0),S=0,P=!1,F=null,L=null,N=null,V=null,O=null,Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,k=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=k>=2);let W=null,te={},de=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),ge=new Ye().fromArray(de),ve=new Ye().fromArray(Me);function ee(x,D,I,w){let G=new Uint8Array(4),X=r.createTexture();r.bindTexture(x,X),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Y=0;Y<I;Y++)x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?r.texImage3D(D,0,r.RGBA,1,1,w,0,r.RGBA,r.UNSIGNED_BYTE,G):r.texImage2D(D+Y,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,G);return X}let ce={};function oe(x){o[x]!==!0&&(r.enable(x),o[x]=!0)}function me(x){o[x]!==!1&&(r.disable(x),o[x]=!1)}ce[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),oe(r.DEPTH_TEST),i.setFunc(_a),T(!1),C(Ho),oe(r.CULL_FACE),R(hi);let De={[kn]:r.FUNC_ADD,[xh]:r.FUNC_SUBTRACT,[Sh]:r.FUNC_REVERSE_SUBTRACT};De[Mh]=r.MIN,De[bh]=r.MAX;let $={[Th]:r.ZERO,[Eh]:r.ONE,[wh]:r.SRC_COLOR,[Ch]:r.SRC_ALPHA,[Nh]:r.SRC_ALPHA_SATURATE,[Lh]:r.DST_COLOR,[Ph]:r.DST_ALPHA,[Ah]:r.ONE_MINUS_SRC_COLOR,[Rh]:r.ONE_MINUS_SRC_ALPHA,[Dh]:r.ONE_MINUS_DST_COLOR,[Ih]:r.ONE_MINUS_DST_ALPHA,[Uh]:r.CONSTANT_COLOR,[Fh]:r.ONE_MINUS_CONSTANT_COLOR,[Oh]:r.CONSTANT_ALPHA,[Bh]:r.ONE_MINUS_CONSTANT_ALPHA};function R(x,D,I,w,G,X,Y,re,_e,ye){if(x!==hi){if(u===!1&&(oe(r.BLEND),u=!0),x===yh)G=G||D,X=X||I,Y=Y||w,D===m&&G===v||(r.blendEquationSeparate(De[D],De[G]),m=D,v=G),I===_&&w===f&&X===y&&Y===b||(r.blendFuncSeparate($[I],$[w],$[X],$[Y]),_=I,f=w,y=X,b=Y),re.equals(M)!==!1&&_e===S||(r.blendColor(re.r,re.g,re.b,_e),M.copy(re),S=_e),g=x,P=!1;else if(x!==g||ye!==P){if(m===kn&&v===kn||(r.blendEquation(r.FUNC_ADD),m=kn,v=kn),ye)switch(x){case Nr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kt:r.blendFunc(r.ONE,r.ONE);break;case Wo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xo:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Te("WebGLState: Invalid blending: ",x)}else switch(x){case Nr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kt:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wo:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xo:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",x)}_=null,f=null,y=null,b=null,M.set(0,0,0),S=0,g=x,P=ye}}else u===!0&&(me(r.BLEND),u=!1)}function T(x){F!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),F=x)}function C(x){x!==gh?(oe(r.CULL_FACE),x!==L&&(x===Ho?r.cullFace(r.BACK):x===vh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),L=x}function U(x,D,I){x?(oe(r.POLYGON_OFFSET_FILL),V===D&&O===I||(V=D,O=I,i.getReversed()&&(D=-D),r.polygonOffset(D,I))):me(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:oe,disable:me,bindFramebuffer:function(x,D){return l[x]!==D&&(r.bindFramebuffer(x,D),l[x]=D,x===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=D),x===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=D),!0)},drawBuffers:function(x,D){let I=d,w=!1;if(x){I=h.get(D),I===void 0&&(I=[],h.set(D,I));let G=x.textures;if(I.length!==G.length||I[0]!==r.COLOR_ATTACHMENT0){for(let X=0,Y=G.length;X<Y;X++)I[X]=r.COLOR_ATTACHMENT0+X;I.length=G.length,w=!0}}else I[0]!==r.BACK&&(I[0]=r.BACK,w=!0);w&&r.drawBuffers(I)},useProgram:function(x){return p!==x&&(r.useProgram(x),p=x,!0)},setBlending:R,setMaterial:function(x,D){x.side===Tt?me(r.CULL_FACE):oe(r.CULL_FACE);let I=x.side===bt;D&&(I=!I),T(I),x.blending===Nr&&x.transparent===!1?R(hi):R(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),i.setFunc(x.depthFunc),i.setTest(x.depthTest),i.setMask(x.depthWrite),t.setMask(x.colorWrite);let w=x.stencilWrite;n.setTest(w),w&&(n.setMask(x.stencilWriteMask),n.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),n.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),U(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:T,setCullFace:C,setLineWidth:function(x){x!==N&&(H&&r.lineWidth(x),N=x)},setPolygonOffset:U,setScissorTest:function(x){x?oe(r.SCISSOR_TEST):me(r.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=r.TEXTURE0+Z-1),W!==x&&(r.activeTexture(x),W=x)},bindTexture:function(x,D,I){I===void 0&&(I=W===null?r.TEXTURE0+Z-1:W);let w=te[I];w===void 0&&(w={type:void 0,texture:void 0},te[I]=w),w.type===x&&w.texture===D||(W!==I&&(r.activeTexture(I),W=I),r.bindTexture(x,D||ce[x]),w.type=x,w.texture=D)},unbindTexture:function(){let x=te[W];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(x){Te("WebGLState:",x)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(x){Te("WebGLState:",x)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(x){Te("WebGLState:",x)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(x){Te("WebGLState:",x)}},pixelStorei:function(x,D){c[x]!==D&&(r.pixelStorei(x,D),c[x]=D)},getParameter:function(x){return c[x]!==void 0?c[x]:r.getParameter(x)},updateUBOMapping:function(x,D){let I=a.get(D);I===void 0&&(I=new WeakMap,a.set(D,I));let w=I.get(x);w===void 0&&(w=r.getUniformBlockIndex(D,x.name),I.set(x,w))},uniformBlockBinding:function(x,D){let I=a.get(D).get(x);s.get(D)!==I&&(r.uniformBlockBinding(D,I,x.__bindingPointIndex),s.set(D,I))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(x){Te("WebGLState:",x)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(x){Te("WebGLState:",x)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(x){Te("WebGLState:",x)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(x){Te("WebGLState:",x)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(x){Te("WebGLState:",x)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(x){Te("WebGLState:",x)}},scissor:function(x){ge.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),ge.copy(x))},viewport:function(x){ve.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),ve.copy(x))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),o={},c={},W=null,te={},l={},h=new WeakMap,d=[],p=null,u=!1,g=null,m=null,_=null,f=null,v=null,y=null,b=null,M=new Be(0,0,0),S=0,P=!1,F=null,L=null,N=null,V=null,O=null,ge.set(0,0,r.canvas.width,r.canvas.height),ve.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function vm(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap,d=new Set,p,u=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,T){return g?new OffscreenCanvas(R,T):Ln("canvas")}function _(R,T,C){let U=1,x=$(R);if((x.width>C||x.height>C)&&(U=C/Math.max(x.width,x.height)),U<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let D=Math.floor(U*x.width),I=Math.floor(U*x.height);p===void 0&&(p=m(D,I));let w=T?m(D,I):p;return w.width=D,w.height=I,w.getContext("2d").drawImage(R,0,0,D,I),be("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+D+"x"+I+")."),w}return"data"in R&&be("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),R}return R}function f(R){return R.generateMipmaps}function v(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(R,T,C,U,x,D=!1){if(R!==null){if(r[R]!==void 0)return r[R];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let I;U&&(I=e.get("EXT_texture_norm16"),I||be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let w=T;if(T===r.RED&&(C===r.FLOAT&&(w=r.R32F),C===r.HALF_FLOAT&&(w=r.R16F),C===r.UNSIGNED_BYTE&&(w=r.R8),C===r.UNSIGNED_SHORT&&I&&(w=I.R16_EXT),C===r.SHORT&&I&&(w=I.R16_SNORM_EXT)),T===r.RED_INTEGER&&(C===r.UNSIGNED_BYTE&&(w=r.R8UI),C===r.UNSIGNED_SHORT&&(w=r.R16UI),C===r.UNSIGNED_INT&&(w=r.R32UI),C===r.BYTE&&(w=r.R8I),C===r.SHORT&&(w=r.R16I),C===r.INT&&(w=r.R32I)),T===r.RG&&(C===r.FLOAT&&(w=r.RG32F),C===r.HALF_FLOAT&&(w=r.RG16F),C===r.UNSIGNED_BYTE&&(w=r.RG8),C===r.UNSIGNED_SHORT&&I&&(w=I.RG16_EXT),C===r.SHORT&&I&&(w=I.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(C===r.UNSIGNED_BYTE&&(w=r.RG8UI),C===r.UNSIGNED_SHORT&&(w=r.RG16UI),C===r.UNSIGNED_INT&&(w=r.RG32UI),C===r.BYTE&&(w=r.RG8I),C===r.SHORT&&(w=r.RG16I),C===r.INT&&(w=r.RG32I)),T===r.RGB_INTEGER&&(C===r.UNSIGNED_BYTE&&(w=r.RGB8UI),C===r.UNSIGNED_SHORT&&(w=r.RGB16UI),C===r.UNSIGNED_INT&&(w=r.RGB32UI),C===r.BYTE&&(w=r.RGB8I),C===r.SHORT&&(w=r.RGB16I),C===r.INT&&(w=r.RGB32I)),T===r.RGBA_INTEGER&&(C===r.UNSIGNED_BYTE&&(w=r.RGBA8UI),C===r.UNSIGNED_SHORT&&(w=r.RGBA16UI),C===r.UNSIGNED_INT&&(w=r.RGBA32UI),C===r.BYTE&&(w=r.RGBA8I),C===r.SHORT&&(w=r.RGBA16I),C===r.INT&&(w=r.RGBA32I)),T===r.RGB&&(C===r.UNSIGNED_SHORT&&I&&(w=I.RGB16_EXT),C===r.SHORT&&I&&(w=I.RGB16_SNORM_EXT),C===r.UNSIGNED_INT_5_9_9_9_REV&&(w=r.RGB9_E5),C===r.UNSIGNED_INT_10F_11F_11F_REV&&(w=r.R11F_G11F_B10F)),T===r.RGBA){let G=D?hr:Ge.getTransfer(x);C===r.FLOAT&&(w=r.RGBA32F),C===r.HALF_FLOAT&&(w=r.RGBA16F),C===r.UNSIGNED_BYTE&&(w=G===Xe?r.SRGB8_ALPHA8:r.RGBA8),C===r.UNSIGNED_SHORT&&I&&(w=I.RGBA16_EXT),C===r.SHORT&&I&&(w=I.RGBA16_SNORM_EXT),C===r.UNSIGNED_SHORT_4_4_4_4&&(w=r.RGBA4),C===r.UNSIGNED_SHORT_5_5_5_1&&(w=r.RGB5_A1)}return w!==r.R16F&&w!==r.R32F&&w!==r.RG16F&&w!==r.RG32F&&w!==r.RGBA16F&&w!==r.RGBA32F||e.get("EXT_color_buffer_float"),w}function M(R,T){let C;return R?T===null||T===Ai||T===Xn?C=r.DEPTH24_STENCIL8:T===Qt?C=r.DEPTH32F_STENCIL8:T===Wn&&(C=r.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ai||T===Xn?C=r.DEPTH_COMPONENT24:T===Qt?C=r.DEPTH_COMPONENT32F:T===Wn&&(C=r.DEPTH_COMPONENT16),C}function S(R,T){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==gt?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function P(R){let T=R.target;T.removeEventListener("dispose",P),(function(C){let U=i.get(C);if(U.__webglInit===void 0)return;let x=C.source,D=u.get(x);if(D){let I=D[U.__cacheKey];I.usedTimes--,I.usedTimes===0&&L(C),Object.keys(D).length===0&&u.delete(x)}i.remove(C)})(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function F(R){let T=R.target;T.removeEventListener("dispose",F),(function(C){let U=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(U.__webglFramebuffer[D]))for(let I=0;I<U.__webglFramebuffer[D].length;I++)r.deleteFramebuffer(U.__webglFramebuffer[D][I]);else r.deleteFramebuffer(U.__webglFramebuffer[D]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[D])}else{if(Array.isArray(U.__webglFramebuffer))for(let D=0;D<U.__webglFramebuffer.length;D++)r.deleteFramebuffer(U.__webglFramebuffer[D]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let D=0;D<U.__webglColorRenderbuffer.length;D++)U.__webglColorRenderbuffer[D]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[D]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let x=C.textures;for(let D=0,I=x.length;D<I;D++){let w=i.get(x[D]);w.__webglTexture&&(r.deleteTexture(w.__webglTexture),a.memory.textures--),i.remove(x[D])}i.remove(C)})(T)}function L(R){let T=i.get(R);r.deleteTexture(T.__webglTexture);let C=R.source;delete u.get(C)[T.__cacheKey],a.memory.textures--}let N=0;function V(R,T){let C=i.get(R);if(R.isVideoTexture&&(function(U){let x=a.render.frame;h.get(U)!==x&&(h.set(U,x),U.update())})(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&C.__version!==R.version){let U=R.image;if(U===null)be("WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void te(C,R,T);be("WebGLRenderer: Texture marked for update but image is incomplete")}}else R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,C.__webglTexture,r.TEXTURE0+T)}let O={[Ts]:r.REPEAT,[Bi]:r.CLAMP_TO_EDGE,[Es]:r.MIRRORED_REPEAT},Z={[zt]:r.NEAREST,[kh]:r.NEAREST_MIPMAP_NEAREST,[Or]:r.NEAREST_MIPMAP_LINEAR,[gt]:r.LINEAR,[Sa]:r.LINEAR_MIPMAP_NEAREST,[wi]:r.LINEAR_MIPMAP_LINEAR},H={[jh]:r.NEVER,[Kh]:r.ALWAYS,[qh]:r.LESS,[La]:r.LEQUAL,[Yh]:r.EQUAL,[Da]:r.GEQUAL,[Zh]:r.GREATER,[Jh]:r.NOTEQUAL};function k(R,T){if(T.type!==Qt||e.has("OES_texture_float_linear")!==!1||T.magFilter!==gt&&T.magFilter!==Sa&&T.magFilter!==Or&&T.magFilter!==wi&&T.minFilter!==gt&&T.minFilter!==Sa&&T.minFilter!==Or&&T.minFilter!==wi||be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,O[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,O[T.wrapT]),R!==r.TEXTURE_3D&&R!==r.TEXTURE_2D_ARRAY||r.texParameteri(R,r.TEXTURE_WRAP_R,O[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Z[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Z[T.minFilter]),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,H[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===zt||T.minFilter!==Or&&T.minFilter!==wi||T.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function q(R,T){let C=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",P));let U=T.source,x=u.get(U);x===void 0&&(x={},u.set(U,x));let D=(function(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()})(T);if(D!==R.__cacheKey){x[D]===void 0&&(x[D]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,C=!0),x[D].usedTimes++;let I=x[R.__cacheKey];I!==void 0&&(x[R.__cacheKey].usedTimes--,I.usedTimes===0&&L(T)),R.__cacheKey=D,R.__webglTexture=x[D].texture}return C}function W(R,T,C){return Math.floor(Math.floor(R/C)/T)}function te(R,T,C){let U=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(U=r.TEXTURE_3D);let x=q(R,T),D=T.source;t.bindTexture(U,R.__webglTexture,r.TEXTURE0+C);let I=i.get(D);if(D.version!==I.__version||x===!0){if(t.activeTexture(r.TEXTURE0+C),!(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)){let se=Ge.getPrimaries(Ge.workingColorSpace),ne=T.colorSpace===un?null:Ge.getPrimaries(T.colorSpace),pe=T.colorSpace===un||se===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let w=_(T.image,!1,n.maxTextureSize);w=De(T,w);let G=s.convert(T.format,T.colorSpace),X=s.convert(T.type),Y,re=b(T.internalFormat,G,X,T.normalized,T.colorSpace,T.isVideoTexture);k(U,T);let _e=T.mipmaps,ye=T.isVideoTexture!==!0,he=I.__version===void 0||x===!0,Ae=D.dataReady,Q=S(T,w);if(T.isDepthTexture)re=M(T.format===cn,T.type),he&&(ye?t.texStorage2D(r.TEXTURE_2D,1,re,w.width,w.height):t.texImage2D(r.TEXTURE_2D,0,re,w.width,w.height,0,G,X,null));else if(T.isDataTexture)if(_e.length>0){ye&&he&&t.texStorage2D(r.TEXTURE_2D,Q,re,_e[0].width,_e[0].height);for(let se=0,ne=_e.length;se<ne;se++)Y=_e[se],ye?Ae&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Y.width,Y.height,G,X,Y.data):t.texImage2D(r.TEXTURE_2D,se,re,Y.width,Y.height,0,G,X,Y.data);T.generateMipmaps=!1}else ye?(he&&t.texStorage2D(r.TEXTURE_2D,Q,re,w.width,w.height),Ae&&(function(se,ne,pe,Ze){let We=se.updateRanges;if(We.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,pe,Ze,ne.data);else{We.sort((Fe,vt)=>Fe.start-vt.start);let st=0;for(let Fe=1;Fe<We.length;Fe++){let vt=We[st],Je=We[Fe],ut=vt.start+vt.count,rt=W(Je.start,ne.width,4),Ft=W(vt.start,ne.width,4);Je.start<=ut+1&&rt===Ft&&W(Je.start+Je.count-1,ne.width,4)===rt?vt.count=Math.max(vt.count,Je.start+Je.count-vt.start):(++st,We[st]=Je)}We.length=st+1;let wt=t.getParameter(r.UNPACK_ROW_LENGTH),Se=t.getParameter(r.UNPACK_SKIP_PIXELS),je=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,ne.width);for(let Fe=0,vt=We.length;Fe<vt;Fe++){let Je=We[Fe],ut=Math.floor(Je.start/4),rt=Math.ceil(Je.count/4),Ft=ut%ne.width,kt=Math.floor(ut/ne.width),Yi=rt;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ft),t.pixelStorei(r.UNPACK_SKIP_ROWS,kt),t.texSubImage2D(r.TEXTURE_2D,0,Ft,kt,Yi,1,pe,Ze,ne.data)}se.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,wt),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(r.UNPACK_SKIP_ROWS,je)}})(T,w,G,X)):t.texImage2D(r.TEXTURE_2D,0,re,w.width,w.height,0,G,X,w.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ye&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,re,_e[0].width,_e[0].height,w.depth);for(let se=0,ne=_e.length;se<ne;se++)if(Y=_e[se],T.format!==ei)if(G!==null)if(ye){if(Ae)if(T.layerUpdates.size>0){let pe=Zl(Y.width,Y.height,T.format,T.type);for(let Ze of T.layerUpdates){let We=Y.data.subarray(Ze*pe/Y.data.BYTES_PER_ELEMENT,(Ze+1)*pe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,Ze,Y.width,Y.height,1,G,We)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,w.depth,G,Y.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,re,Y.width,Y.height,w.depth,0,Y.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?Ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,w.depth,G,X,Y.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,re,Y.width,Y.height,w.depth,0,G,X,Y.data)}else{ye&&he&&t.texStorage2D(r.TEXTURE_2D,Q,re,_e[0].width,_e[0].height);for(let se=0,ne=_e.length;se<ne;se++)Y=_e[se],T.format!==ei?G!==null?ye?Ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,Y.width,Y.height,G,Y.data):t.compressedTexImage2D(r.TEXTURE_2D,se,re,Y.width,Y.height,0,Y.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?Ae&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Y.width,Y.height,G,X,Y.data):t.texImage2D(r.TEXTURE_2D,se,re,Y.width,Y.height,0,G,X,Y.data)}else if(T.isDataArrayTexture)if(ye){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,re,w.width,w.height,w.depth),Ae)if(T.layerUpdates.size>0){let se=Zl(w.width,w.height,T.format,T.type);for(let ne of T.layerUpdates){let pe=w.data.subarray(ne*se/w.data.BYTES_PER_ELEMENT,(ne+1)*se/w.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ne,w.width,w.height,1,G,X,pe)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,w.width,w.height,w.depth,G,X,w.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,re,w.width,w.height,w.depth,0,G,X,w.data);else if(T.isData3DTexture)ye?(he&&t.texStorage3D(r.TEXTURE_3D,Q,re,w.width,w.height,w.depth),Ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,w.width,w.height,w.depth,G,X,w.data)):t.texImage3D(r.TEXTURE_3D,0,re,w.width,w.height,w.depth,0,G,X,w.data);else if(T.isFramebufferTexture){if(he)if(ye)t.texStorage2D(r.TEXTURE_2D,Q,re,w.width,w.height);else{let se=w.width,ne=w.height;for(let pe=0;pe<Q;pe++)t.texImage2D(r.TEXTURE_2D,pe,re,se,ne,0,G,X,null),se>>=1,ne>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let se=r.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),w.parentNode!==se)return se.appendChild(w),d.add(T),se.onpaint=ne=>{let pe=ne.changedElements;for(let Ze of d)pe.includes(Ze.image)&&(Ze.needsUpdate=!0)},void se.requestPaint();if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,w);else{let pe=r.RGBA,Ze=r.RGBA,We=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,pe,Ze,We,w)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(_e.length>0){if(ye&&he){let se=$(_e[0]);t.texStorage2D(r.TEXTURE_2D,Q,re,se.width,se.height)}for(let se=0,ne=_e.length;se<ne;se++)Y=_e[se],ye?Ae&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,G,X,Y):t.texImage2D(r.TEXTURE_2D,se,re,G,X,Y);T.generateMipmaps=!1}else if(ye){if(he){let se=$(w);t.texStorage2D(r.TEXTURE_2D,Q,re,se.width,se.height)}Ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,G,X,w)}else t.texImage2D(r.TEXTURE_2D,0,re,G,X,w);f(T)&&v(U),I.__version=D.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function de(R,T,C,U,x,D){let I=s.convert(C.format,C.colorSpace),w=s.convert(C.type),G=b(C.internalFormat,I,w,C.normalized,C.colorSpace),X=i.get(T),Y=i.get(C);if(Y.__renderTarget=T,!X.__hasExternalTextures){let re=Math.max(1,T.width>>D),_e=Math.max(1,T.height>>D);x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?t.texImage3D(x,D,G,re,_e,T.depth,0,I,w,null):t.texImage2D(x,D,G,re,_e,0,I,w,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),me(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,x,Y.__webglTexture,0,oe(T)):(x===r.TEXTURE_2D||x>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,x,Y.__webglTexture,D),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(R,T,C){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer){let U=T.depthTexture,x=U&&U.isDepthTexture?U.type:null,D=M(T.stencilBuffer,x),I=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;me(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe(T),D,T.width,T.height):C?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe(T),D,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,D,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,I,r.RENDERBUFFER,R)}else{let U=T.textures;for(let x=0;x<U.length;x++){let D=U[x],I=s.convert(D.format,D.colorSpace),w=s.convert(D.type),G=b(D.internalFormat,I,w,D.normalized,D.colorSpace);me(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe(T),G,T.width,T.height):C?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe(T),G,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,G,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ge(R,T,C){let U=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!T.depthTexture||!T.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let x=i.get(T.depthTexture);if(x.__renderTarget=T,x.__webglTexture&&T.depthTexture.image.width===T.width&&T.depthTexture.image.height===T.height||(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U){if(x.__webglInit===void 0&&(x.__webglInit=!0,T.depthTexture.addEventListener("dispose",P)),x.__webglTexture===void 0){x.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,x.__webglTexture),k(r.TEXTURE_CUBE_MAP,T.depthTexture);let X=s.convert(T.depthTexture.format),Y=s.convert(T.depthTexture.type),re;T.depthTexture.format===qi?re=r.DEPTH_COMPONENT24:T.depthTexture.format===cn&&(re=r.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,re,T.width,T.height,0,X,Y,null)}}else V(T.depthTexture,0);let D=x.__webglTexture,I=oe(T),w=U?r.TEXTURE_CUBE_MAP_POSITIVE_X+C:r.TEXTURE_2D,G=T.depthTexture.format===cn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===qi)me(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,w,D,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,G,w,D,0);else{if(T.depthTexture.format!==cn)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");me(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,w,D,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,G,w,D,0)}}function ve(R){let T=i.get(R),C=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let U=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),U){let x=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,U.removeEventListener("dispose",x)};U.addEventListener("dispose",x),T.__depthDisposeCallback=x}T.__boundDepthTexture=U}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(C)for(let U=0;U<6;U++)ge(T.__webglFramebuffer[U],R,U);else{let U=R.texture.mipmaps;U&&U.length>0?ge(T.__webglFramebuffer[0],R,0):ge(T.__webglFramebuffer,R,0)}else if(C){T.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[U]),T.__webglDepthbuffer[U]===void 0)T.__webglDepthbuffer[U]=r.createRenderbuffer(),Me(T.__webglDepthbuffer[U],R,!1);else{let x=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,D=T.__webglDepthbuffer[U];r.bindRenderbuffer(r.RENDERBUFFER,D),r.framebufferRenderbuffer(r.FRAMEBUFFER,x,r.RENDERBUFFER,D)}}else{let U=R.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Me(T.__webglDepthbuffer,R,!1);else{let x=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,D=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,D),r.framebufferRenderbuffer(r.FRAMEBUFFER,x,r.RENDERBUFFER,D)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let ee=[],ce=[];function oe(R){return Math.min(n.maxSamples,R.samples)}function me(R){let T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function De(R,T){let C=R.colorSpace,U=R.format,x=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||C!==cr&&C!==un&&(Ge.getTransfer(C)===Xe?U===ei&&x===Vt||be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",C)),T}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=function(){let R=N;return R>=n.maxTextures&&be("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),N+=1,R},this.resetTextureUnits=function(){N=0},this.getTextureUnits=function(){return N},this.setTextureUnits=function(R){N=R},this.setTexture2D=V,this.setTexture2DArray=function(R,T){let C=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?te(C,R,T):(R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null),t.bindTexture(r.TEXTURE_2D_ARRAY,C.__webglTexture,r.TEXTURE0+T))},this.setTexture3D=function(R,T){let C=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?te(C,R,T):t.bindTexture(r.TEXTURE_3D,C.__webglTexture,r.TEXTURE0+T)},this.setTextureCube=function(R,T){let C=i.get(R);R.isCubeDepthTexture!==!0&&R.version>0&&C.__version!==R.version?(function(U,x,D){if(x.image.length!==6)return;let I=q(U,x),w=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+D);let G=i.get(w);if(w.version!==G.__version||I===!0){t.activeTexture(r.TEXTURE0+D);let X=Ge.getPrimaries(Ge.workingColorSpace),Y=x.colorSpace===un?null:Ge.getPrimaries(x.colorSpace),re=x.colorSpace===un||X===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let _e=x.isCompressedTexture||x.image[0].isCompressedTexture,ye=x.image[0]&&x.image[0].isDataTexture,he=[];for(let Se=0;Se<6;Se++)he[Se]=_e||ye?ye?x.image[Se].image:x.image[Se]:_(x.image[Se],!0,n.maxCubemapSize),he[Se]=De(x,he[Se]);let Ae=he[0],Q=s.convert(x.format,x.colorSpace),se=s.convert(x.type),ne=b(x.internalFormat,Q,se,x.normalized,x.colorSpace),pe=x.isVideoTexture!==!0,Ze=G.__version===void 0||I===!0,We=w.dataReady,st,wt=S(x,Ae);if(k(r.TEXTURE_CUBE_MAP,x),_e){pe&&Ze&&t.texStorage2D(r.TEXTURE_CUBE_MAP,wt,ne,Ae.width,Ae.height);for(let Se=0;Se<6;Se++){st=he[Se].mipmaps;for(let je=0;je<st.length;je++){let Fe=st[je];x.format!==ei?Q!==null?pe?We&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,je,0,0,Fe.width,Fe.height,Q,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,je,ne,Fe.width,Fe.height,0,Fe.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,je,0,0,Fe.width,Fe.height,Q,se,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,je,ne,Fe.width,Fe.height,0,Q,se,Fe.data)}}}else{if(st=x.mipmaps,pe&&Ze){st.length>0&&wt++;let Se=$(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,wt,ne,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(ye){pe?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,he[Se].width,he[Se].height,Q,se,he[Se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ne,he[Se].width,he[Se].height,0,Q,se,he[Se].data);for(let je=0;je<st.length;je++){let Fe=st[je].image[Se].image;pe?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,je+1,0,0,Fe.width,Fe.height,Q,se,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,je+1,ne,Fe.width,Fe.height,0,Q,se,Fe.data)}}else{pe?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Q,se,he[Se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ne,Q,se,he[Se]);for(let je=0;je<st.length;je++){let Fe=st[je];pe?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,je+1,0,0,Q,se,Fe.image[Se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,je+1,ne,Q,se,Fe.image[Se])}}}f(x)&&v(r.TEXTURE_CUBE_MAP),G.__version=w.version,x.onUpdate&&x.onUpdate(x)}U.__version=x.version})(C,R,T):t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+T)},this.rebindTextures=function(R,T,C){let U=i.get(R);T!==void 0&&de(U.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),C!==void 0&&ve(R)},this.setupRenderTarget=function(R){let T=R.texture,C=i.get(R),U=i.get(T);R.addEventListener("dispose",F);let x=R.textures,D=R.isWebGLCubeRenderTarget===!0,I=x.length>1;if(I||(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=T.version,a.memory.textures++),D){C.__webglFramebuffer=[];for(let w=0;w<6;w++)if(T.mipmaps&&T.mipmaps.length>0){C.__webglFramebuffer[w]=[];for(let G=0;G<T.mipmaps.length;G++)C.__webglFramebuffer[w][G]=r.createFramebuffer()}else C.__webglFramebuffer[w]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){C.__webglFramebuffer=[];for(let w=0;w<T.mipmaps.length;w++)C.__webglFramebuffer[w]=r.createFramebuffer()}else C.__webglFramebuffer=r.createFramebuffer();if(I)for(let w=0,G=x.length;w<G;w++){let X=i.get(x[w]);X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&me(R)===!1){C.__webglMultisampledFramebuffer=r.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let w=0;w<x.length;w++){let G=x[w];C.__webglColorRenderbuffer[w]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,C.__webglColorRenderbuffer[w]);let X=s.convert(G.format,G.colorSpace),Y=s.convert(G.type),re=b(G.internalFormat,X,Y,G.normalized,G.colorSpace,R.isXRRenderTarget===!0),_e=oe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,re,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+w,r.RENDERBUFFER,C.__webglColorRenderbuffer[w])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(C.__webglDepthRenderbuffer=r.createRenderbuffer(),Me(C.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(D){t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),k(r.TEXTURE_CUBE_MAP,T);for(let w=0;w<6;w++)if(T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)de(C.__webglFramebuffer[w][G],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+w,G);else de(C.__webglFramebuffer[w],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+w,0);f(T)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(I){for(let w=0,G=x.length;w<G;w++){let X=x[w],Y=i.get(X),re=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),k(re,X),de(C.__webglFramebuffer,R,X,r.COLOR_ATTACHMENT0+w,re,0),f(X)&&v(re)}t.unbindTexture()}else{let w=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(w=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(w,U.__webglTexture),k(w,T),T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)de(C.__webglFramebuffer[G],R,T,r.COLOR_ATTACHMENT0,w,G);else de(C.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,w,0);f(T)&&v(w),t.unbindTexture()}R.depthBuffer&&ve(R)},this.updateRenderTargetMipmap=function(R){let T=R.textures;for(let C=0,U=T.length;C<U;C++){let x=T[C];if(f(x)){let D=y(R),I=i.get(x).__webglTexture;t.bindTexture(D,I),v(D),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(me(R)===!1){let T=R.textures,C=R.width,U=R.height,x=r.COLOR_BUFFER_BIT,D=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=i.get(R),w=T.length>1;if(w)for(let X=0;X<T.length;X++)t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,I.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer);let G=R.texture.mipmaps;G&&G.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let X=0;X<T.length;X++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(x|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(x|=r.STENCIL_BUFFER_BIT)),w){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,I.__webglColorRenderbuffer[X]);let Y=i.get(T[X]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Y,0)}r.blitFramebuffer(0,0,C,U,0,0,C,U,x,r.NEAREST),c===!0&&(ee.length=0,ce.length=0,ee.push(r.COLOR_ATTACHMENT0+X),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ee.push(D),ce.push(D),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ce)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),w)for(let X=0;X<T.length;X++){t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,I.__webglColorRenderbuffer[X]);let Y=i.get(T[X]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,I.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.TEXTURE_2D,Y,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let T=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}},this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _m(r,e){return{convert:function(t,i=un){let n,s=Ge.getTransfer(i);if(t===Vt)return r.UNSIGNED_BYTE;if(t===ba)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Ta)return r.UNSIGNED_SHORT_5_5_5_1;if(t===ll)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===cl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===al)return r.BYTE;if(t===ol)return r.SHORT;if(t===Wn)return r.UNSIGNED_SHORT;if(t===Ma)return r.INT;if(t===Ai)return r.UNSIGNED_INT;if(t===Qt)return r.FLOAT;if(t===ui)return r.HALF_FLOAT;if(t===Hh)return r.ALPHA;if(t===Wh)return r.RGB;if(t===ei)return r.RGBA;if(t===qi)return r.DEPTH_COMPONENT;if(t===cn)return r.DEPTH_STENCIL;if(t===hl)return r.RED;if(t===Ea)return r.RED_INTEGER;if(t===hn)return r.RG;if(t===ul)return r.RG_INTEGER;if(t===dl)return r.RGBA_INTEGER;if(t===wa||t===Aa||t===Ca||t===Ra)if(s===Xe){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===wa)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Aa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Ca)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ra)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===wa)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Aa)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Ca)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ra)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===pl||t===ml||t===fl||t===gl){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===pl)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===ml)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===fl)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===gl)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===vl||t===_l||t===yl||t===xl||t===Sl||t===Pa||t===Ml){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===vl||t===_l)return s===Xe?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===yl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(t===xl)return n.COMPRESSED_R11_EAC;if(t===Sl)return n.COMPRESSED_SIGNED_R11_EAC;if(t===Pa)return n.COMPRESSED_RG11_EAC;if(t===Ml)return n.COMPRESSED_SIGNED_RG11_EAC}if(t===bl||t===Tl||t===El||t===wl||t===Al||t===Cl||t===Rl||t===Pl||t===Il||t===Ll||t===Dl||t===Nl||t===Ul||t===Fl){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===bl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Tl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===El)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===wl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Al)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Cl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Rl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Pl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Il)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Ll)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Dl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Nl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Ul)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Fl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Ol||t===Bl||t===zl){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===Ol)return s===Xe?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Bl)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===zl)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Gl||t===Vl||t===Ia||t===kl){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===Gl)return n.COMPRESSED_RED_RGTC1_EXT;if(t===Vl)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Ia)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===kl)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Xn?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new _r(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new nt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fc=class extends li{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,u=null,g=null,m=typeof XRWebGLBinding<"u",_=new mc,f={},v=t.getContextAttributes(),y=null,b=null,M=[],S=[],P=new ie,F=null,L=new Mt;L.viewport=new Ye;let N=new Mt;N.viewport=new Ye;let V=[L,N],O=new ga,Z=null,H=null;function k(ee){let ce=S.indexOf(ee.inputSource);if(ce===-1)return;let oe=M[ce];oe!==void 0&&(oe.update(ee.inputSource,ee.frame,l||a),oe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function q(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",W);for(let ee=0;ee<M.length;ee++){let ce=S[ee];ce!==null&&(S[ee]=null,M[ee].disconnect(ce))}Z=null,H=null,_.reset();for(let ee in f)delete f[ee];e.setRenderTarget(y),u=null,p=null,d=null,n=null,b=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}function W(ee){for(let ce=0;ce<ee.removed.length;ce++){let oe=ee.removed[ce],me=S.indexOf(oe);me>=0&&(S[me]=null,M[me].disconnect(oe))}for(let ce=0;ce<ee.added.length;ce++){let oe=ee.added[ce],me=S.indexOf(oe);if(me===-1){for(let $=0;$<M.length;$++){if($>=S.length){S.push(oe),me=$;break}if(S[$]===null){S[$]=oe,me=$;break}}if(me===-1)break}let De=M[me];De&&De.connect(oe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=M[ee];return ce===void 0&&(ce=new Un,M[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=M[ee];return ce===void 0&&(ce=new Un,M[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=M[ee];return ce===void 0&&(ce=new Un,M[ee]=ce),ce.getHandSpace()},this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return d===null&&m&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(ee){if(n=ee,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",q),n.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(P),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,oe=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?cn:qi,oe=v.stencil?Xn:Ai);let De={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(De),n.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new Nt(p.textureWidth,p.textureHeight,{format:ei,type:Vt,depthTexture:new Ei(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(n,t,ce),n.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Nt(u.framebufferWidth,u.framebufferHeight,{format:ei,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),ve.setContext(n),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let te=new A,de=new A;function Me(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(n===null)return;let ce=ee.near,oe=ee.far;_.texture!==null&&(_.depthNear>0&&(ce=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),O.near=N.near=L.near=ce,O.far=N.far=L.far=oe,Z===O.near&&H===O.far||(n.updateRenderState({depthNear:O.near,depthFar:O.far}),Z=O.near,H=O.far),O.layers.mask=6|ee.layers.mask,L.layers.mask=-5&O.layers.mask,N.layers.mask=-3&O.layers.mask;let me=ee.parent,De=O.cameras;Me(O,me);for(let $=0;$<De.length;$++)Me(De[$],me);De.length===2?(function($,R,T){te.setFromMatrixPosition(R.matrixWorld),de.setFromMatrixPosition(T.matrixWorld);let C=te.distanceTo(de),U=R.projectionMatrix.elements,x=T.projectionMatrix.elements,D=U[14]/(U[10]-1),I=U[14]/(U[10]+1),w=(U[9]+1)/U[5],G=(U[9]-1)/U[5],X=(U[8]-1)/U[0],Y=(x[8]+1)/x[0],re=D*X,_e=D*Y,ye=C/(-X+Y),he=ye*-X;if(R.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(he),$.translateZ(ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),U[10]===-1)$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let Ae=D+ye,Q=I+ye,se=re-he,ne=_e+(C-he),pe=w*I/Q*Ae,Ze=G*I/Q*Ae;$.projectionMatrix.makePerspective(se,ne,pe,Ze,Ae,Q),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}})(O,L,N):O.projectionMatrix.copy(L.projectionMatrix),(function($,R,T){T===null?$.matrix.copy(R.matrixWorld):($.matrix.copy(T.matrixWorld),$.matrix.invert(),$.matrix.multiply(R.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=2*As*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)})(ee,O,me)},this.getCamera=function(){return O},this.getFoveation=function(){if(p!==null||u!==null)return c},this.setFoveation=function(ee){c=ee,p!==null&&(p.fixedFoveation=ee),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(ee){return f[ee]};let ge=null,ve=new Pu;ve.setAnimationLoop(function(ee,ce){if(h=ce.getViewerPose(l||a),g=ce,h!==null){let oe=h.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let me=!1;oe.length!==O.cameras.length&&(O.cameras.length=0,me=!0);for(let $=0;$<oe.length;$++){let R=oe[$],T=null;if(u!==null)T=u.getViewport(R);else{let U=d.getViewSubImage(p,R);T=U.viewport,$===0&&(e.setRenderTargetTextures(b,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(b))}let C=V[$];C===void 0&&(C=new Mt,C.layers.enable($),C.viewport=new Ye,V[$]=C),C.matrix.fromArray(R.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(R.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(T.x,T.y,T.width,T.height),$===0&&(O.matrix.copy(C.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),me===!0&&O.cameras.push(C)}let De=n.enabledFeatures;if(De&&De.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&m){d=i.getBinding();let $=d.getDepthInformation(oe[0]);$&&$.isValid&&$.texture&&_.init($,n.renderState)}if(De&&De.includes("camera-access")&&m){e.state.unbindTexture(),d=i.getBinding();for(let $=0;$<oe.length;$++){let R=oe[$].camera;if(R){let T=f[R];T||(T=new _r,f[R]=T);let C=d.getCameraImage(R);T.sourceTexture=C}}}}for(let oe=0;oe<M.length;oe++){let me=S[oe],De=M[oe];me!==null&&De!==void 0&&De.update(me,ce,l||a)}ge&&ge(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}),this.setAnimationLoop=function(ee){ge=ee},this.dispose=function(){}}},ym=new Ne,Fu=new Ie;function xm(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===bt&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===bt&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(n.envMap.value=o,n.envMapRotation.value.setFromMatrix4(ym.makeRotationFromEuler(c)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&n.envMapRotation.value.premultiply(Fu),n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,ql(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,c){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?i(n,s):s.isMeshLambertMaterial?(i(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(n,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(n,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bt&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(n,s,c)):s.isMeshMatcapMaterial?(i(n,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(l,h,d,p){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=.5*p,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Sm(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(p,u,g,m){if((function(_,f,v,y){let b=_.value,M=f+"_"+v;if(y[M]===void 0)return typeof b=="number"||typeof b=="boolean"?y[M]=b:ArrayBuffer.isView(b)?y[M]=b.slice():y[M]=b.clone(),!0;{let S=y[M];if(typeof b=="number"||typeof b=="boolean"){if(S!==b)return y[M]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(S.equals(b)===!1)return S.copy(b),!0}}return!1})(p,u,g,m)===!0){let _=p.__offset,f=p.value;if(Array.isArray(f)){let v=0;for(let y=0;y<f.length;y++){let b=f[y],M=h(b);l(b,p.__data,v),typeof b=="number"||typeof b=="boolean"||b.isMatrix3||ArrayBuffer.isView(b)||(v+=M.storage/Float32Array.BYTES_PER_ELEMENT)}}else l(f,p.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,p.__data)}}function l(p,u,g){typeof p=="number"||typeof p=="boolean"?u[0]=p:p.isMatrix3?(u[0]=p.elements[0],u[1]=p.elements[1],u[2]=p.elements[2],u[3]=0,u[4]=p.elements[3],u[5]=p.elements[4],u[6]=p.elements[5],u[7]=0,u[8]=p.elements[6],u[9]=p.elements[7],u[10]=p.elements[8],u[11]=0):ArrayBuffer.isView(p)?u.set(new p.constructor(p.buffer,p.byteOffset,u.length)):p.toArray(u,g)}function h(p){let u={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(u.boundary=4,u.storage=4):p.isVector2?(u.boundary=8,u.storage=8):p.isVector3||p.isColor?(u.boundary=16,u.storage=12):p.isVector4?(u.boundary=16,u.storage=16):p.isMatrix3?(u.boundary=48,u.storage=48):p.isMatrix4?(u.boundary=64,u.storage=64):p.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(u.boundary=16,u.storage=p.byteLength):be("WebGLRenderer: Unsupported uniform value type.",p),u}function d(p){let u=p.target;u.removeEventListener("dispose",d);let g=a.indexOf(u.__bindingPointIndex);a.splice(g,1),r.deleteBuffer(n[u.id]),delete n[u.id],delete s[u.id]}return{bind:function(p,u){let g=u.program;i.uniformBlockBinding(p,g)},update:function(p,u){let g=n[p.id];g===void 0&&((function(f){let v=f.uniforms,y=0,b=16;for(let S=0,P=v.length;S<P;S++){let F=Array.isArray(v[S])?v[S]:[v[S]];for(let L=0,N=F.length;L<N;L++){let V=F[L],O=Array.isArray(V.value)?V.value:[V.value];for(let Z=0,H=O.length;Z<H;Z++){let k=h(O[Z]),q=y%b,W=q%k.boundary,te=q+W;y+=W,te!==0&&b-te<k.storage&&(y+=b-te),V.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=k.storage}}}let M=y%b;M>0&&(y+=b-M),f.__size=y,f.__cache={}})(p),g=(function(f){let v=(function(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=v;let y=r.createBuffer(),b=f.__size,M=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,b,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y})(p),n[p.id]=g,p.addEventListener("dispose",d));let m=u.program;i.updateUBOMapping(p,m);let _=e.render.frame;s[p.id]!==_&&((function(f){let v=n[f.id],y=f.uniforms,b=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let M=0,S=y.length;M<S;M++){let P=y[M];if(Array.isArray(P))for(let F=0,L=P.length;F<L;F++)c(P[F],M,F,b);else c(P,M,0,b)}r.bindBuffer(r.UNIFORM_BUFFER,null)})(p),s[p.id]=_)},dispose:function(){for(let p in n)r.deleteBuffer(n[p]);a=[],n={},s={}}}}Fu.set(-1,0,0,0,1,0,0,0,1);var Mm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null,za=class{constructor(e={}){let{canvas:t=$h(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:u=Vt}=e,g;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let m=u,_=new Set([dl,ul,Ea]),f=new Set([Vt,Ai,Wn,Xn,ba,Ta]),v=new Uint32Array(4),y=new Int32Array(4),b=new A,M=null,S=null,P=[],F=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$t,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,V=!1,O=null,Z=null,H=null,k=null;this._outputColorSpace=yt;let q=0,W=0,te=null,de=-1,Me=null,ge=new Ye,ve=new Ye,ee=null,ce=new Be(0),oe=0,me=t.width,De=t.height,$=1,R=null,T=null,C=new Ye(0,0,me,De),U=new Ye(0,0,me,De),x=!1,D=new Vi,I=!1,w=!1,G=new Ne,X=new A,Y=new Ye,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function ye(){return te===null?$:1}let he,Ae,Q,se,ne,pe,Ze,We,st,wt,Se,je,Fe,vt,Je,ut,rt,Ft,kt,Yi,ti,Ci,Hr,B=i;function _c(E,z){return t.getContext(E,z)}try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",xc,!1),t.addEventListener("webglcontextrestored",Sc,!1),t.addEventListener("webglcontextcreationerror",Mc,!1),B===null){let z="webgl2";if(B=_c(z,E),B===null)throw _c(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Te("WebGLRenderer: "+E.message),E}function yc(){he=new Zd(B),he.init(),ti=new _m(B,he),Ae=new Xd(B,he,e,ti),Q=new gm(B,he),Ae.reversedDepthBuffer&&p&&Q.buffers.depth.setReversed(!0),Z=B.createFramebuffer(),H=B.createFramebuffer(),k=B.createFramebuffer(),se=new $d(B),ne=new sm,pe=new vm(B,he,Q,ne,Ae,ti,se),Ze=new Yd(N),We=new Gd(B),Ci=new Hd(B,We),st=new Jd(B,We,se,Ci),wt=new ep(B,st,We,Ci,se),Ft=new Qd(B,Ae,pe),Je=new jd(ne),Se=new rm(N,Ze,he,Ae,Ci,Je),je=new xm(N,ne),Fe=new om,vt=new dm(he),rt=new kd(N,Ze,Q,wt,g,c),ut=new fm(N,wt,Ae),Hr=new Sm(B,se,Ae,Q),kt=new Wd(B,he,se),Yi=new Kd(B,he,se),se.programs=Se.programs,N.capabilities=Ae,N.extensions=he,N.properties=ne,N.renderLists=Fe,N.shadowMap=ut,N.state=Q,N.info=se}yc(),m!==Vt&&(L=new ip(m,t.width,t.height,o,n,s));let ot=new fc(N,B);function xc(E){E.preventDefault(),Xl("WebGLRenderer: Context Lost."),V=!0}function Sc(){Xl("WebGLRenderer: Context Restored."),V=!1;let E=se.autoReset,z=ut.enabled,j=ut.autoUpdate,K=ut.needsUpdate,J=ut.type;yc(),se.autoReset=E,ut.enabled=z,ut.autoUpdate=j,ut.needsUpdate=K,ut.type=J}function Mc(E){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function bc(E){let z=E.target;z.removeEventListener("dispose",bc),(function(j){(function(K){let J=ne.get(K).programs;J!==void 0&&(J.forEach(function(ae){Se.releaseProgram(ae)}),K.isShaderMaterial&&Se.releaseShaderCache(K))})(j),ne.remove(j)})(z)}function Tc(E,z,j){E.transparent===!0&&E.side===Tt&&E.forceSinglePass===!1?(E.side=bt,E.needsUpdate=!0,Xr(E,z,j),E.side=ji,E.needsUpdate=!0,Xr(E,z,j),E.side=Tt):Xr(E,z,j)}this.xr=ot,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(me,De,!1))},this.getSize=function(E){return E.set(me,De)},this.setSize=function(E,z,j=!0){ot.isPresenting?be("WebGLRenderer: Can't change size while VR device is presenting."):(me=E,De=z,t.width=Math.floor(E*$),t.height=Math.floor(z*$),j===!0&&(t.style.width=E+"px",t.style.height=z+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,E,z))},this.getDrawingBufferSize=function(E){return E.set(me*$,De*$).floor()},this.setDrawingBufferSize=function(E,z,j){me=E,De=z,$=j,t.width=Math.floor(E*j),t.height=Math.floor(z*j),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(m!==Vt){if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(E||[])}else Te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(E){return E.copy(ge)},this.getViewport=function(E){return E.copy(C)},this.setViewport=function(E,z,j,K){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,z,j,K),Q.viewport(ge.copy(C).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,z,j,K){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,z,j,K),Q.scissor(ve.copy(U).multiplyScalar($).round())},this.getScissorTest=function(){return x},this.setScissorTest=function(E){Q.setScissorTest(x=E)},this.setOpaqueSort=function(E){R=E},this.setTransparentSort=function(E){T=E},this.getClearColor=function(E){return E.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,j=!0){let K=0;if(E){let J=!1;if(te!==null){let ae=te.texture.format;J=_.has(ae)}if(J){let ae=te.texture.type,ue=f.has(ae),fe=rt.getClearColor(),xe=rt.getClearAlpha(),Ce=fe.r,Ve=fe.g,ke=fe.b;ue?(v[0]=Ce,v[1]=Ve,v[2]=ke,v[3]=xe,B.clearBufferuiv(B.COLOR,0,v)):(y[0]=Ce,y[1]=Ve,y[2]=ke,y[3]=xe,B.clearBufferiv(B.COLOR,0,y))}else K|=B.COLOR_BUFFER_BIT}z&&(K|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){t.removeEventListener("webglcontextlost",xc,!1),t.removeEventListener("webglcontextrestored",Sc,!1),t.removeEventListener("webglcontextcreationerror",Mc,!1),rt.dispose(),Fe.dispose(),vt.dispose(),ne.dispose(),Ze.dispose(),wt.dispose(),Ci.dispose(),Hr.dispose(),Se.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Ec),ot.removeEventListener("sessionend",wc),Zi.stop()},this.renderBufferDirect=function(E,z,j,K,J,ae){z===null&&(z=re);let ue=J.isMesh&&J.matrixWorld.determinantAffine()<0,fe=(function(ze,et,_t,Re,Le){et.isScene!==!0&&(et=re),pe.resetTextureUnits();let Ht=et.fog,Ka=Re.isMeshStandardMaterial||Re.isMeshLambertMaterial||Re.isMeshPhongMaterial?et.environment:null,jr=te===null?N.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ge.workingColorSpace,Kn=Re.isMeshStandardMaterial||Re.isMeshLambertMaterial&&!Re.envMap||Re.isMeshPhongMaterial&&!Re.envMap,ii=Ze.get(Re.envMap||Ka,Kn),fn=Re.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,mi=!!_t.attributes.tangent&&(!!Re.normalMap||Re.anisotropy>0),$a=!!_t.morphAttributes.position,gn=!!_t.morphAttributes.normal,Ku=!!_t.morphAttributes.color,Lc=$t;Re.toneMapped&&(te!==null&&te.isXRRenderTarget!==!0||(Lc=N.toneMapping));let Dc=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,$u=Dc!==void 0?Dc.length:0,Pe=ne.get(Re),Ji=S.state.lights;if(I===!0&&(w===!0||ze!==Me)){let ct=ze===Me&&Re.id===de;Je.setState(Re,ze,ct)}let Wt=!1;Re.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==Ji.state.version||Pe.outputColorSpace!==jr||Le.isBatchedMesh&&Pe.batching===!1?Wt=!0:Le.isBatchedMesh||Pe.batching!==!0?Le.isBatchedMesh&&Pe.batchingColor===!0&&Le.colorTexture===null||Le.isBatchedMesh&&Pe.batchingColor===!1&&Le.colorTexture!==null||Le.isInstancedMesh&&Pe.instancing===!1?Wt=!0:Le.isInstancedMesh||Pe.instancing!==!0?Le.isSkinnedMesh&&Pe.skinning===!1?Wt=!0:Le.isSkinnedMesh||Pe.skinning!==!0?Le.isInstancedMesh&&Pe.instancingColor===!0&&Le.instanceColor===null||Le.isInstancedMesh&&Pe.instancingColor===!1&&Le.instanceColor!==null||Le.isInstancedMesh&&Pe.instancingMorph===!0&&Le.morphTexture===null||Le.isInstancedMesh&&Pe.instancingMorph===!1&&Le.morphTexture!==null||Pe.envMap!==ii||Re.fog===!0&&Pe.fog!==Ht?Wt=!0:Pe.numClippingPlanes===void 0||Pe.numClippingPlanes===Je.numPlanes&&Pe.numIntersection===Je.numIntersection?(Pe.vertexAlphas!==fn||Pe.vertexTangents!==mi||Pe.morphTargets!==$a||Pe.morphNormals!==gn||Pe.morphColors!==Ku||Pe.toneMapping!==Lc||Pe.morphTargetsCount!==$u||!!Pe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Wt=!0):Wt=!0:Wt=!0:Wt=!0:Wt=!0:(Wt=!0,Pe.__version=Re.version);let Ri=Pe.currentProgram;Wt===!0&&(Ri=Xr(Re,et,Le),O&&Re.isNodeMaterial&&O.onUpdateProgram(Re,Ri,Pe));let Nc=!1,vn=!1,Qa=!1,tt=Ri.getUniforms(),Ot=Pe.uniforms;if(Q.useProgram(Ri.program)&&(Nc=!0,vn=!0,Qa=!0),Re.id!==de&&(de=Re.id,vn=!0),Pe.needsLights){let ct=(function(ri,to){if(ri.length===0)return null;if(ri.length===1)return ri[0].texture!==null?ri[0]:null;b.setFromMatrixPosition(to.matrixWorld);for(let _n=0,Qu=ri.length;_n<Qu;_n++){let io=ri[_n];if(io.texture!==null&&io.boundingBox.containsPoint(b))return io}return null})(S.state.lightProbeGridArray,Le);Pe.lightProbeGrid!==ct&&(Pe.lightProbeGrid=ct,vn=!0)}if(Nc||Me!==ze){Q.buffers.depth.getReversed()&&ze.reversedDepth!==!0&&(ze._reversedDepth=!0,ze.updateProjectionMatrix()),tt.setValue(B,"projectionMatrix",ze.projectionMatrix),tt.setValue(B,"viewMatrix",ze.matrixWorldInverse);let ct=tt.map.cameraPosition;ct!==void 0&&ct.setValue(B,X.setFromMatrixPosition(ze.matrixWorld)),Ae.logarithmicDepthBuffer&&tt.setValue(B,"logDepthBufFC",2/(Math.log(ze.far+1)/Math.LN2)),(Re.isMeshPhongMaterial||Re.isMeshToonMaterial||Re.isMeshLambertMaterial||Re.isMeshBasicMaterial||Re.isMeshStandardMaterial||Re.isShaderMaterial)&&tt.setValue(B,"isOrthographic",ze.isOrthographicCamera===!0),Me!==ze&&(Me=ze,vn=!0,Qa=!0)}if(Pe.needsLights&&(Ji.state.directionalShadowMap.length>0&&tt.setValue(B,"directionalShadowMap",Ji.state.directionalShadowMap,pe),Ji.state.spotShadowMap.length>0&&tt.setValue(B,"spotShadowMap",Ji.state.spotShadowMap,pe),Ji.state.pointShadowMap.length>0&&tt.setValue(B,"pointShadowMap",Ji.state.pointShadowMap,pe)),Le.isSkinnedMesh){tt.setOptional(B,Le,"bindMatrix"),tt.setOptional(B,Le,"bindMatrixInverse");let ct=Le.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),tt.setValue(B,"boneTexture",ct.boneTexture,pe))}Le.isBatchedMesh&&(tt.setOptional(B,Le,"batchingTexture"),tt.setValue(B,"batchingTexture",Le._matricesTexture,pe),tt.setOptional(B,Le,"batchingIdTexture"),tt.setValue(B,"batchingIdTexture",Le._indirectTexture,pe),tt.setOptional(B,Le,"batchingColorTexture"),Le._colorsTexture!==null&&tt.setValue(B,"batchingColorTexture",Le._colorsTexture,pe));let eo=_t.morphAttributes;if(eo.position===void 0&&eo.normal===void 0&&eo.color===void 0||Ft.update(Le,_t,Ri),(vn||Pe.receiveShadow!==Le.receiveShadow)&&(Pe.receiveShadow=Le.receiveShadow,tt.setValue(B,"receiveShadow",Le.receiveShadow)),(Re.isMeshStandardMaterial||Re.isMeshLambertMaterial||Re.isMeshPhongMaterial)&&Re.envMap===null&&et.environment!==null&&(Ot.envMapIntensity.value=et.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=(di===null&&(di=new Is(Mm,16,16,hn,ui),di.name="DFG_LUT",di.minFilter=gt,di.magFilter=gt,di.wrapS=Bi,di.wrapT=Bi,di.generateMipmaps=!1,di.needsUpdate=!0),di)),vn){if(tt.setValue(B,"toneMappingExposure",N.toneMappingExposure),Pe.needsLights&&(Xt=Qa,(ni=Ot).ambientLightColor.needsUpdate=Xt,ni.lightProbe.needsUpdate=Xt,ni.directionalLights.needsUpdate=Xt,ni.directionalLightShadows.needsUpdate=Xt,ni.pointLights.needsUpdate=Xt,ni.pointLightShadows.needsUpdate=Xt,ni.spotLights.needsUpdate=Xt,ni.spotLightShadows.needsUpdate=Xt,ni.rectAreaLights.needsUpdate=Xt,ni.hemisphereLights.needsUpdate=Xt),Ht&&Re.fog===!0&&je.refreshFogUniforms(Ot,Ht),je.refreshMaterialUniforms(Ot,Re,$,De,S.state.transmissionRenderTarget[ze.id]),Pe.needsLights&&Pe.lightProbeGrid){let ct=Pe.lightProbeGrid;Ot.probesSH.value=ct.texture,Ot.probesMin.value.copy(ct.boundingBox.min),Ot.probesMax.value.copy(ct.boundingBox.max),Ot.probesResolution.value.copy(ct.resolution)}Yn.upload(B,Pc(Pe),Ot,pe)}var ni,Xt;if(Re.isShaderMaterial&&Re.uniformsNeedUpdate===!0&&(Yn.upload(B,Pc(Pe),Ot,pe),Re.uniformsNeedUpdate=!1),Re.isSpriteMaterial&&tt.setValue(B,"center",Le.center),tt.setValue(B,"modelViewMatrix",Le.modelViewMatrix),tt.setValue(B,"normalMatrix",Le.normalMatrix),tt.setValue(B,"modelMatrix",Le.matrixWorld),Re.uniformsGroups!==void 0){let ct=Re.uniformsGroups;for(let ri=0,to=ct.length;ri<to;ri++){let _n=ct[ri];Hr.update(_n,Ri),Hr.bind(_n,Ri)}}return Ri})(E,z,j,K,J);Q.setMaterial(K,ue);let xe=j.index,Ce=1;if(K.wireframe===!0){if(xe=st.getWireframeAttribute(j),xe===void 0)return;Ce=2}let Ve=j.drawRange,ke=j.attributes.position,Ee=Ve.start*Ce,He=(Ve.start+Ve.count)*Ce;ae!==null&&(Ee=Math.max(Ee,ae.start*Ce),He=Math.min(He,(ae.start+ae.count)*Ce)),xe!==null?(Ee=Math.max(Ee,0),He=Math.min(He,xe.count)):ke!=null&&(Ee=Math.max(Ee,0),He=Math.min(He,ke.count));let dt=He-Ee;if(dt<0||dt===1/0)return;let lt;Ci.setup(J,K,fe,j,xe);let Qe=kt;if(xe!==null&&(lt=We.get(xe),Qe=Yi,Qe.setIndex(lt)),J.isMesh)K.wireframe===!0?(Q.setLineWidth(K.wireframeLinewidth*ye()),Qe.setMode(B.LINES)):Qe.setMode(B.TRIANGLES);else if(J.isLine){let ze=K.linewidth;ze===void 0&&(ze=1),Q.setLineWidth(ze*ye()),J.isLineSegments?Qe.setMode(B.LINES):J.isLineLoop?Qe.setMode(B.LINE_LOOP):Qe.setMode(B.LINE_STRIP)}else J.isPoints?Qe.setMode(B.POINTS):J.isSprite&&Qe.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Qe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let ze=J._multiDrawStarts,et=J._multiDrawCounts,_t=J._multiDrawCount,Re=xe?We.get(xe).bytesPerElement:1,Le=ne.get(K).currentProgram.getUniforms();for(let Ht=0;Ht<_t;Ht++)Le.setValue(B,"_gl_DrawID",Ht),Qe.render(ze[Ht]/Re,et[Ht])}else if(J.isInstancedMesh)Qe.renderInstances(Ee,dt,J.count);else if(j.isInstancedBufferGeometry){let ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,et=Math.min(j.instanceCount,ze);Qe.renderInstances(Ee,dt,et)}else Qe.render(Ee,dt)},this.compile=function(E,z,j=null){j===null&&(j=E),S=vt.get(j),S.init(z),F.push(S),j.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),E!==j&&E.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights();let K=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let ae=J.material;if(ae)if(Array.isArray(ae))for(let ue=0;ue<ae.length;ue++){let fe=ae[ue];Tc(fe,j,J),K.add(fe)}else Tc(ae,j,J),K.add(ae)}),S=F.pop(),K},this.compileAsync=function(E,z,j=null){let K=this.compile(E,z,j);return new Promise(J=>{function ae(){K.forEach(function(ue){ne.get(ue).currentProgram.isReady()&&K.delete(ue)}),K.size!==0?setTimeout(ae,10):J(E)}he.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Za=null;function Ec(){Zi.stop()}function wc(){Zi.start()}let Zi=new Pu;function Ja(E,z,j,K){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||D.intersectsSprite(E)){K&&Y.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);let ae=wt.update(E),ue=E.material;ue.visible&&M.push(E,ae,ue,j,Y.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||D.intersectsObject(E))){let ae=wt.update(E),ue=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Y.copy(E.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Y.copy(ae.boundingSphere.center)),Y.applyMatrix4(E.matrixWorld).applyMatrix4(G)),Array.isArray(ue)){let fe=ae.groups;for(let xe=0,Ce=fe.length;xe<Ce;xe++){let Ve=fe[xe],ke=ue[Ve.materialIndex];ke&&ke.visible&&M.push(E,ae,ke,j,Y.z,Ve)}}else ue.visible&&M.push(E,ae,ue,j,Y.z,null)}}let J=E.children;for(let ae=0,ue=J.length;ae<ue;ae++)Ja(J[ae],z,j,K)}function Ac(E,z,j,K){let{opaque:J,transmissive:ae,transparent:ue}=E;S.setupLightsView(j),I===!0&&Je.setGlobalState(N.clippingPlanes,j),K&&Q.viewport(ge.copy(K)),J.length>0&&Wr(J,z,j),ae.length>0&&Wr(ae,z,j),ue.length>0&&Wr(ue,z,j),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Cc(E,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[K.id]===void 0){let ke=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[K.id]=new Nt(1,1,{generateMipmaps:!0,type:ke?ui:Vt,minFilter:wi,samples:Math.max(4,Ae.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let J=S.state.transmissionRenderTarget[K.id],ae=K.viewport||ge;J.setSize(ae.z*N.transmissionResolutionScale,ae.w*N.transmissionResolutionScale);let ue=N.getRenderTarget(),fe=N.getActiveCubeFace(),xe=N.getActiveMipmapLevel();N.setRenderTarget(J),N.getClearColor(ce),oe=N.getClearAlpha(),oe<1&&N.setClearColor(16777215,.5),N.clear(),_e&&rt.render(j);let Ce=N.toneMapping;N.toneMapping=$t;let Ve=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),S.setupLightsView(K),I===!0&&Je.setGlobalState(N.clippingPlanes,K),Wr(E,j,K),pe.updateMultisampleRenderTarget(J),pe.updateRenderTargetMipmap(J),he.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ee=0,He=z.length;Ee<He;Ee++){let dt=z[Ee],{object:lt,geometry:Qe,material:ze,group:et}=dt;if(ze.side===Tt&&lt.layers.test(K.layers)){let _t=ze.side;ze.side=bt,ze.needsUpdate=!0,Rc(lt,j,K,Qe,ze,et),ze.side=_t,ze.needsUpdate=!0,ke=!0}}ke===!0&&(pe.updateMultisampleRenderTarget(J),pe.updateRenderTargetMipmap(J))}N.setRenderTarget(ue,fe,xe),N.setClearColor(ce,oe),Ve!==void 0&&(K.viewport=Ve),N.toneMapping=Ce}function Wr(E,z,j){let K=z.isScene===!0?z.overrideMaterial:null;for(let J=0,ae=E.length;J<ae;J++){let ue=E[J],{object:fe,geometry:xe,group:Ce}=ue,Ve=ue.material;Ve.allowOverride===!0&&K!==null&&(Ve=K),fe.layers.test(j.layers)&&Rc(fe,z,j,xe,Ve,Ce)}}function Rc(E,z,j,K,J,ae){E.onBeforeRender(N,z,j,K,J,ae),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(N,z,j,K,E,ae),J.transparent===!0&&J.side===Tt&&J.forceSinglePass===!1?(J.side=bt,J.needsUpdate=!0,N.renderBufferDirect(j,z,K,J,E,ae),J.side=ji,J.needsUpdate=!0,N.renderBufferDirect(j,z,K,J,E,ae),J.side=Tt):N.renderBufferDirect(j,z,K,J,E,ae),E.onAfterRender(N,z,j,K,J,ae)}function Xr(E,z,j){z.isScene!==!0&&(z=re);let K=ne.get(E),J=S.state.lights,ae=S.state.shadowsArray,ue=J.state.version,fe=Se.getParameters(E,J.state,ae,z,j,S.state.lightProbeGridArray),xe=Se.getProgramCacheKey(fe),Ce=K.programs;K.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,K.fog=z.fog;let Ve=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;K.envMap=Ze.get(E.envMap||K.environment,Ve),K.envMapRotation=K.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",bc),Ce=new Map,K.programs=Ce);let ke=Ce.get(xe);if(ke!==void 0){if(K.currentProgram===ke&&K.lightsStateVersion===ue)return Ic(E,fe),ke}else fe.uniforms=Se.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,j,fe),E.onBeforeCompile(fe,N),ke=Se.acquireProgram(fe,xe),Ce.set(xe,ke),K.uniforms=fe.uniforms;let Ee=K.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Ee.clippingPlanes=Je.uniform),Ic(E,fe),K.needsLights=(function(He){return He.isMeshLambertMaterial||He.isMeshToonMaterial||He.isMeshPhongMaterial||He.isMeshStandardMaterial||He.isShadowMaterial||He.isShaderMaterial&&He.lights===!0})(E),K.lightsStateVersion=ue,K.needsLights&&(Ee.ambientLightColor.value=J.state.ambient,Ee.lightProbe.value=J.state.probe,Ee.directionalLights.value=J.state.directional,Ee.directionalLightShadows.value=J.state.directionalShadow,Ee.spotLights.value=J.state.spot,Ee.spotLightShadows.value=J.state.spotShadow,Ee.rectAreaLights.value=J.state.rectArea,Ee.ltc_1.value=J.state.rectAreaLTC1,Ee.ltc_2.value=J.state.rectAreaLTC2,Ee.pointLights.value=J.state.point,Ee.pointLightShadows.value=J.state.pointShadow,Ee.hemisphereLights.value=J.state.hemi,Ee.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ee.spotLightMatrix.value=J.state.spotLightMatrix,Ee.spotLightMap.value=J.state.spotLightMap,Ee.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=S.state.lightProbeGridArray.length>0,K.currentProgram=ke,K.uniformsList=null,ke}function Pc(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=Yn.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Ic(E,z){let j=ne.get(E);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}Zi.setAnimationLoop(function(E){Za&&Za(E)}),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(E){Za=E,ot.setAnimationLoop(E),E===null?Zi.stop():Zi.start()},ot.addEventListener("sessionstart",Ec),ot.addEventListener("sessionend",wc),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0)return void Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(V===!0)return;O!==null&&O.renderStart(E,z);let j=ot.enabled===!0&&ot.isPresenting===!0,K=L!==null&&(te===null||j)&&L.begin(N,te);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ot.enabled!==!0||ot.isPresenting!==!0||L!==null&&L.isCompositing()!==!1||(ot.cameraAutoUpdate===!0&&ot.updateCamera(z),z=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,z,te),S=vt.get(E,F.length),S.init(z),S.state.textureUnits=pe.getTextureUnits(),F.push(S),G.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),D.setFromProjectionMatrix(G,bi,z.reversedDepth),w=this.localClippingEnabled,I=Je.init(this.clippingPlanes,w),M=Fe.get(E,P.length),M.init(),P.push(M),ot.enabled===!0&&ot.isPresenting===!0){let ae=N.xr.getDepthSensingMesh();ae!==null&&Ja(ae,z,-1/0,N.sortObjects)}Ja(E,z,0,N.sortObjects),M.finish(),N.sortObjects===!0&&M.sort(R,T,z.reversedDepth),_e=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,_e&&rt.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),I===!0&&Je.beginShadows();let J=S.state.shadowsArray;if(ut.render(J,E,z),I===!0&&Je.endShadows(),(K&&L.hasRenderPass())===!1){let ae=M.opaque,ue=M.transmissive;if(S.setupLights(),z.isArrayCamera){let fe=z.cameras;if(ue.length>0)for(let xe=0,Ce=fe.length;xe<Ce;xe++)Cc(ae,ue,E,fe[xe]);_e&&rt.render(E);for(let xe=0,Ce=fe.length;xe<Ce;xe++){let Ve=fe[xe];Ac(M,E,Ve,Ve.viewport)}}else ue.length>0&&Cc(ae,ue,E,z),_e&&rt.render(E),Ac(M,E,z)}te!==null&&W===0&&(pe.updateMultisampleRenderTarget(te),pe.updateRenderTargetMipmap(te)),K&&L.end(N),E.isScene===!0&&E.onAfterRender(N,E,z),Ci.resetDefaultState(),de=-1,Me=null,F.pop(),F.length>0?(S=F[F.length-1],pe.setTextureUnits(S.state.textureUnits),I===!0&&Je.setGlobalState(N.clippingPlanes,S.state.camera)):S=null,P.pop(),M=P.length>0?P[P.length-1]:null,O!==null&&O.renderEnd()},this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(E,z,j){let K=ne.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ne.get(E.texture).__webglTexture=z,ne.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let j=ne.get(E);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,j=0){te=E,q=z,W=j;let K=null,J=!1,ae=!1;if(E){let ue=ne.get(E);if(ue.__useDefaultFramebuffer!==void 0)return Q.bindFramebuffer(B.FRAMEBUFFER,ue.__webglFramebuffer),ge.copy(E.viewport),ve.copy(E.scissor),ee=E.scissorTest,Q.viewport(ge),Q.scissor(ve),Q.setScissorTest(ee),void(de=-1);if(ue.__webglFramebuffer===void 0)pe.setupRenderTarget(E);else if(ue.__hasExternalTextures)pe.rebindTextures(E,ne.get(E.texture).__webglTexture,ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ce=E.depthTexture;if(ue.__boundDepthTexture!==Ce){if(Ce!==null&&ne.has(Ce)&&(E.width!==Ce.image.width||E.height!==Ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(E)}}let fe=E.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(ae=!0);let xe=ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(K=Array.isArray(xe[z])?xe[z][j]:xe[z],J=!0):K=E.samples>0&&pe.useMultisampledRTT(E)===!1?ne.get(E).__webglMultisampledFramebuffer:Array.isArray(xe)?xe[j]:xe,ge.copy(E.viewport),ve.copy(E.scissor),ee=E.scissorTest}else ge.copy(C).multiplyScalar($).floor(),ve.copy(U).multiplyScalar($).floor(),ee=x;if(j!==0&&(K=Z),Q.bindFramebuffer(B.FRAMEBUFFER,K)&&Q.drawBuffers(E,K),Q.viewport(ge),Q.scissor(ve),Q.setScissorTest(ee),J){let ue=ne.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue.__webglTexture,j)}else if(ae){let ue=z;for(let fe=0;fe<E.textures.length;fe++){let xe=ne.get(E.textures[fe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+fe,xe.__webglTexture,j,ue)}}else if(E!==null&&j!==0){let ue=ne.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ue.__webglTexture,j)}de=-1},this.readRenderTargetPixels=function(E,z,j,K,J,ae,ue,fe=0){if(!E||!E.isWebGLRenderTarget)return void Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){Q.bindFramebuffer(B.FRAMEBUFFER,xe);try{let Ce=E.textures[fe],Ve=Ce.format,ke=Ce.type;if(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe),!Ae.textureFormatReadable(Ve))return void Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(ke))return void Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");z>=0&&z<=E.width-K&&j>=0&&j<=E.height-J&&B.readPixels(z,j,K,J,ti.convert(Ve),ti.convert(ke),ae)}finally{let Ce=te!==null?ne.get(te).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,z,j,K,J,ae,ue,fe=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){if(z>=0&&z<=E.width-K&&j>=0&&j<=E.height-J){Q.bindFramebuffer(B.FRAMEBUFFER,xe);let Ce=E.textures[fe],Ve=Ce.format,ke=Ce.type;if(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe),!Ae.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.bufferData(B.PIXEL_PACK_BUFFER,ae.byteLength,B.STREAM_READ),B.readPixels(z,j,K,J,ti.convert(Ve),ti.convert(ke),0);let He=te!==null?ne.get(te).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,He);let dt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await eu(B,dt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ae),B.deleteBuffer(Ee),B.deleteSync(dt),ae}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,j=0){let K=Math.pow(2,-j),J=Math.floor(E.image.width*K),ae=Math.floor(E.image.height*K),ue=z!==null?z.x:0,fe=z!==null?z.y:0;pe.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,ue,fe,J,ae),Q.unbindTexture()},this.copyTextureToTexture=function(E,z,j=null,K=null,J=0,ae=0){let ue,fe,xe,Ce,Ve,ke,Ee,He,dt,lt=E.isCompressedTexture?E.mipmaps[ae]:E.image;if(j!==null)ue=j.max.x-j.min.x,fe=j.max.y-j.min.y,xe=j.isBox3?j.max.z-j.min.z:1,Ce=j.min.x,Ve=j.min.y,ke=j.isBox3?j.min.z:0;else{let ii=Math.pow(2,-J);ue=Math.floor(lt.width*ii),fe=Math.floor(lt.height*ii),xe=E.isDataArrayTexture?lt.depth:E.isData3DTexture?Math.floor(lt.depth*ii):1,Ce=0,Ve=0,ke=0}K!==null?(Ee=K.x,He=K.y,dt=K.z):(Ee=0,He=0,dt=0);let Qe=ti.convert(z.format),ze=ti.convert(z.type),et;z.isData3DTexture?(pe.setTexture3D(z,0),et=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(pe.setTexture2DArray(z,0),et=B.TEXTURE_2D_ARRAY):(pe.setTexture2D(z,0),et=B.TEXTURE_2D),Q.activeTexture(B.TEXTURE0),Q.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),Q.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Q.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let _t=Q.getParameter(B.UNPACK_ROW_LENGTH),Re=Q.getParameter(B.UNPACK_IMAGE_HEIGHT),Le=Q.getParameter(B.UNPACK_SKIP_PIXELS),Ht=Q.getParameter(B.UNPACK_SKIP_ROWS),Ka=Q.getParameter(B.UNPACK_SKIP_IMAGES);Q.pixelStorei(B.UNPACK_ROW_LENGTH,lt.width),Q.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt.height),Q.pixelStorei(B.UNPACK_SKIP_PIXELS,Ce),Q.pixelStorei(B.UNPACK_SKIP_ROWS,Ve),Q.pixelStorei(B.UNPACK_SKIP_IMAGES,ke);let jr=E.isDataArrayTexture||E.isData3DTexture,Kn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let ii=ne.get(E),fn=ne.get(z),mi=ne.get(ii.__renderTarget),$a=ne.get(fn.__renderTarget);Q.bindFramebuffer(B.READ_FRAMEBUFFER,mi.__webglFramebuffer),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,$a.__webglFramebuffer);for(let gn=0;gn<xe;gn++)jr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.get(E).__webglTexture,J,ke+gn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.get(z).__webglTexture,ae,dt+gn)),B.blitFramebuffer(Ce,Ve,ue,fe,Ee,He,ue,fe,B.DEPTH_BUFFER_BIT,B.NEAREST);Q.bindFramebuffer(B.READ_FRAMEBUFFER,null),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||ne.has(E)){let ii=ne.get(E),fn=ne.get(z);Q.bindFramebuffer(B.READ_FRAMEBUFFER,H),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,k);for(let mi=0;mi<xe;mi++)jr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ii.__webglTexture,J,ke+mi):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ii.__webglTexture,J),Kn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fn.__webglTexture,ae,dt+mi):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fn.__webglTexture,ae),J!==0?B.blitFramebuffer(Ce,Ve,ue,fe,Ee,He,ue,fe,B.COLOR_BUFFER_BIT,B.NEAREST):Kn?B.copyTexSubImage3D(et,ae,Ee,He,dt+mi,Ce,Ve,ue,fe):B.copyTexSubImage2D(et,ae,Ee,He,Ce,Ve,ue,fe);Q.bindFramebuffer(B.READ_FRAMEBUFFER,null),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Kn?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(et,ae,Ee,He,dt,ue,fe,xe,Qe,ze,lt.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(et,ae,Ee,He,dt,ue,fe,xe,Qe,lt.data):B.texSubImage3D(et,ae,Ee,He,dt,ue,fe,xe,Qe,ze,lt):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ae,Ee,He,ue,fe,Qe,ze,lt.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ae,Ee,He,lt.width,lt.height,Qe,lt.data):B.texSubImage2D(B.TEXTURE_2D,ae,Ee,He,ue,fe,Qe,ze,lt);Q.pixelStorei(B.UNPACK_ROW_LENGTH,_t),Q.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Re),Q.pixelStorei(B.UNPACK_SKIP_PIXELS,Le),Q.pixelStorei(B.UNPACK_SKIP_ROWS,Ht),Q.pixelStorei(B.UNPACK_SKIP_IMAGES,Ka),ae===0&&z.generateMipmaps&&B.generateMipmap(et),Q.unbindTexture()},this.initRenderTarget=function(E){ne.get(E).__webglFramebuffer===void 0&&pe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?pe.setTextureCube(E,0):E.isData3DTexture?pe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?pe.setTexture2DArray(E,0):pe.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){q=0,W=0,te=null,Q.reset(),Ci.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var bm=`
  uniform float uStoryTime;
  uniform float uAmplitude;
  uniform float uDetail;
  uniform float uReveal;
  varying vec3 vWorldPosition;
  varying float vHeight;
  varying float vCrest;

  float waveField(vec2 point) {
    float broad = sin(point.x * 0.105 + point.y * 0.046 - uStoryTime * 0.075) * 0.56;
    broad += sin(point.x * 0.052 - point.y * 0.081 + uStoryTime * 0.042) * 0.31;
    float signal = sin(point.x * 0.43 + point.y * 0.018 - uStoryTime * 0.22) * 0.16;
    signal += sin(point.x * 0.91 - point.y * 0.026 + uStoryTime * 0.31) * 0.055;
    float detail = sin(point.x * 1.72 + point.y * 0.42 - uStoryTime * 0.52) * 0.022;
    float travelingSwell = exp(-pow((point.y + 10.0 - uStoryTime * 0.28) / 24.0, 2.0));
    travelingSwell *= sin(point.x * 0.12 - uStoryTime * 0.055) * 0.36;
    float opening = broad + travelingSwell;
    float revealed = broad * 0.92 + signal * mix(0.65, 1.0, uDetail) + detail * uDetail + travelingSwell;
    return mix(opening, revealed, uReveal);
  }

  void main() {
    vec3 transformed = position;
    vec2 normalizedPosition = position.xz;
    transformed.x = sign(normalizedPosition.x) * pow(abs(normalizedPosition.x), 1.85) * 3000.0;
    transformed.z = sign(normalizedPosition.y) * pow(abs(normalizedPosition.y), 1.85) * 3000.0;
    float field = waveField(transformed.xz);
    transformed.y += field * uAmplitude * 3.1;
    vHeight = transformed.y;
    vCrest = smoothstep(0.18, 0.9, field);
    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,Tm=`
  uniform float uSubmersion;
  uniform float uCaustic;
  uniform float uReveal;
  uniform float uClarity;
  uniform float uStoryTime;
  uniform float uDepth;
  varying vec3 vWorldPosition;
  varying float vHeight;
  varying float vCrest;

  void main() {
    vec3 tangentX = dFdx(vWorldPosition);
    vec3 tangentY = dFdy(vWorldPosition);
    vec3 normal = normalize(cross(tangentX, tangentY));
    if (!gl_FrontFacing) normal *= -1.0;
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float facing = abs(dot(normal, viewDirection));
    float fresnel = pow(1.0 - facing, 2.25);
    vec3 lightDirection = normalize(vec3(-0.42, 0.88, 0.2));
    float diffuse = max(0.0, dot(normal, lightDirection));
    float sparkle = pow(max(0.0, dot(reflect(-lightDirection, normal), viewDirection)), 42.0);
    float caustic = sin(vWorldPosition.x * 0.58 + vWorldPosition.z * 0.21 - uStoryTime * 0.44);
    caustic *= sin(vWorldPosition.z * 0.47 - vWorldPosition.x * 0.16 + uStoryTime * 0.31);
    caustic = pow(abs(caustic), 7.0) * uCaustic;

    vec3 aboveDeep = mix(vec3(0.01, 0.14, 0.36), vec3(0.025, 0.30, 0.60), uReveal);
    vec3 aboveLight = mix(vec3(0.05, 0.42, 0.82), vec3(0.24, 0.76, 1.0), uReveal);
    vec3 above = mix(aboveDeep, aboveLight, diffuse * 0.58 + fresnel * 0.64);
    above += vec3(0.70, 0.90, 1.0) * (sparkle * (0.36 + uReveal * 0.52) + vCrest * 0.045);

    float abyss = smoothstep(0.12, 0.9, uDepth);
    vec3 belowDeep = mix(vec3(0.006, 0.13, 0.34), vec3(0.001, 0.005, 0.026), abyss);
    vec3 belowLight = mix(vec3(0.025, 0.46, 0.86), vec3(0.008, 0.075, 0.24), abyss);
    belowLight = mix(belowLight * 0.72, belowLight, uClarity);
    vec3 below = mix(belowDeep, belowLight, fresnel * 0.54 + diffuse * 0.26);
    below += vec3(0.16, 0.55, 1.0) * caustic * mix(0.24, 0.08, abyss);
    below += vec3(0.46, 0.78, 1.0) * sparkle * 0.22;
    float abyssDepth = smoothstep(12.0, 58.0, -cameraPosition.y);
    float deepTrace = sin(vWorldPosition.x * 0.11 + vWorldPosition.z * 0.045 - uStoryTime * 0.07);
    deepTrace *= sin(vWorldPosition.z * 0.09 - vWorldPosition.x * 0.035 + uStoryTime * 0.04);
    deepTrace = smoothstep(0.42, 0.92, deepTrace) * abyssDepth;
    below += vec3(0.015, 0.065, 0.20) * abyssDepth * (0.42 + fresnel * 0.58);
    below += vec3(0.07, 0.24, 0.62) * deepTrace * 0.14;

    float cameraSide = smoothstep(-0.22, 0.22, cameraPosition.y);
    vec3 color = mix(below, above, cameraSide);
    float distanceHaze = clamp(length(cameraPosition - vWorldPosition) / 125.0, 0.0, 1.0);
    vec3 hazeColor = mix(vec3(0.001, 0.009, 0.04), vec3(0.04, 0.34, 0.68), (1.0 - uSubmersion) * (1.0 - abyss));
    color = mix(color, hazeColor, distanceHaze * mix(0.72, 0.28, uClarity));
    gl_FragColor = vec4(color, 1.0);
  }
`;function Ou(r){let e=new ci(2,2,r.waterX,r.waterZ);e.rotateX(-Math.PI/2);let t={uStoryTime:{value:0},uAmplitude:{value:.2},uDetail:{value:0},uReveal:{value:0},uSubmersion:{value:0},uCaustic:{value:0},uClarity:{value:.2},uDepth:{value:0}},i=new nt({uniforms:t,vertexShader:bm,fragmentShader:Tm,side:Tt,extensions:{derivatives:!0}}),n=new $e(e,i);n.position.z=-34,n.frustumCulled=!1;function s(o,c=0){t.uStoryTime.value=o.storyTime+c*.72,t.uAmplitude.value=o.surface.amplitude,t.uDetail.value=o.surface.detail,t.uReveal.value=o.surface.reveal,t.uSubmersion.value=o.camera.submersion,t.uCaustic.value=o.atmosphere.caustic,t.uClarity.value=o.atmosphere.clarity,t.uDepth.value=Math.min(1,Math.max(0,-o.camera.y/64))}function a(){e.dispose(),i.dispose()}return{mesh:n,update:s,dispose:a}}function Va(r,e){let t=Math.sin(r*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)}var Em=`
  uniform float uStoryTime;
  uniform float uDensity;
  uniform float uSpeed;
  uniform float uShimmer;
  uniform float uCurrents;
  uniform float uTurbulence;
  uniform float uCoherence;
  uniform float uPressure;
  uniform float uPixelRatio;
  attribute float aSeed;
  varying float vOpacity;
  varying float vGlow;

  void main() {
    vec3 transformed = position;
    float phase = aSeed * 6.28318;
    float time = uStoryTime * uSpeed;
    float depth = clamp(-position.y / 64.0, 0.0, 1.0);
    float currentPhase = position.y * 0.105 + position.z * 0.056 + time * 0.22 + phase;
    float wanderingX = sin(currentPhase) * (1.2 + uTurbulence * 2.4);
    float wanderingZ = cos(position.y * 0.082 - time * 0.17 + phase) * (0.8 + uTurbulence * 1.8);
    float coherentX = sin(position.y * 0.085 + time * 0.12 + phase * 0.18) * 2.6;
    transformed.x += mix(wanderingX, coherentX, uCoherence) * uCurrents;
    transformed.z += mix(wanderingZ, coherentX * 0.42, uCoherence) * uCurrents;
    float pressurePulse = sin(depth * 8.0 - uStoryTime * 0.09 + phase * 0.12);
    transformed.y += pressurePulse * uPressure * 2.8;
    transformed.x += pressurePulse * uPressure * 0.9;
    float nearSurface = 1.0 - smoothstep(0.0, 0.24, depth);
    float flicker = 0.52 + 0.48 * sin(time * 1.7 + phase * 4.0);
    vGlow = mix(0.25, flicker, nearSurface * uShimmer);
    vOpacity = uDensity * mix(0.46, 0.19, depth) * mix(0.72, 1.0, uShimmer * nearSurface);
    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    float size = mix(1.7, 4.2, nearSurface * uShimmer) * mix(1.0, 0.62, depth);
    gl_PointSize = clamp(size * uPixelRatio * (240.0 / max(1.0, -viewPosition.z)), 1.0, 10.0);
    gl_Position = projectionMatrix * viewPosition;
  }
`,wm=`
  varying float vOpacity;
  varying float vGlow;
  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float distanceToCenter = length(point);
    float alpha = smoothstep(0.5, 0.05, distanceToCenter) * vOpacity;
    vec3 color = mix(vec3(0.20, 0.52, 0.94), vec3(0.82, 0.95, 1.0), vGlow);
    gl_FragColor = vec4(color, alpha);
  }
`;function Bu(r){let e=r.particles,t=new Float32Array(e*3),i=new Float32Array(e);for(let h=0;h<e;h+=1)t[h*3]=(Va(h,1)-.5)*72,t[h*3+1]=-.7-Va(h,2)*66,t[h*3+2]=18-Va(h,3)*92,i[h]=Va(h,4);let n=new qe;n.setAttribute("position",new at(t,3)),n.setAttribute("aSeed",new at(i,1));let s={uStoryTime:{value:0},uDensity:{value:0},uSpeed:{value:0},uShimmer:{value:0},uCurrents:{value:0},uTurbulence:{value:1},uCoherence:{value:0},uPressure:{value:0},uPixelRatio:{value:1}},a=new nt({uniforms:s,vertexShader:Em,fragmentShader:wm,transparent:!0,depthWrite:!1,blending:Kt}),o=new ki(n,a);o.frustumCulled=!1;function c(h,d,p=0){s.uStoryTime.value=h.storyTime+p*.46,s.uDensity.value=h.particles.density,s.uSpeed.value=h.particles.speed,s.uShimmer.value=h.particles.shimmer,s.uCurrents.value=h.currents.visibility,s.uTurbulence.value=h.currents.turbulence,s.uCoherence.value=h.currents.coherence,s.uPressure.value=h.pressure,s.uPixelRatio.value=d}function l(){n.dispose(),a.dispose()}return{points:o,update:c,dispose:l}}function gc(r,e){let t=Math.sin(r*91.137+e*17.713)*16384.491;return t-Math.floor(t)}var Am=`
  uniform float uStoryTime;
  uniform float uVisibility;
  uniform float uTurbulence;
  uniform float uCoherence;
  uniform float uPressure;
  uniform float uPixelRatio;
  uniform float uVolumeScale;
  attribute float aT;
  attribute float aLane;
  attribute vec3 aJitter;
  varying float vOpacity;
  varying float vLane;

  void main() {
    float laneCentered = aLane - 2.0;
    float phase = aLane * 1.37;
    float x = (aT - 0.5) * 88.0;
    float baseY = -13.0 - aLane * 10.0;
    float independentY = sin(aT * (7.0 + aLane * 0.45) + phase + uStoryTime * (0.06 + aLane * 0.008));
    independentY *= 3.0 + uTurbulence * 2.7;
    float independentZ = cos(aT * 5.4 - phase + uStoryTime * 0.045) * (4.0 + uTurbulence * 3.2);
    float sharedArc = sin(aT * 6.4 + uStoryTime * 0.055) * 3.8;
    float supportedY = sharedArc + laneCentered * 6.2;
    float supportedZ = cos(aT * 4.8 + uStoryTime * 0.04) * 4.2 + laneCentered * 1.9;
    vec3 transformed;
    transformed.x = x + aJitter.x * mix(5.2, 3.6, uCoherence);
    transformed.y = mix(baseY + independentY, -50.0 + supportedY, uCoherence) + aJitter.y * mix(4.2, 2.6, uCoherence);
    transformed.z = -24.0 + mix(independentZ + laneCentered * 4.0, supportedZ, uCoherence) + aJitter.z * 8.0;
    float pressurePulse = sin(aT * 2.8 - uStoryTime * 0.075 + phase) * uPressure;
    transformed.y += pressurePulse * 3.6;
    transformed.z += pressurePulse * 1.8;
    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    float centerWeight = 1.0 - abs(aT - 0.5) * 1.55;
    vOpacity = uVisibility * max(0.16, centerWeight) * mix(0.56, 0.78, uCoherence);
    vLane = aLane / 4.0;
    float pointSize = (8.0 + aJitter.z * 2.5) * uPixelRatio * (82.0 / max(6.0, -viewPosition.z));
    gl_PointSize = clamp(pointSize * uVolumeScale, 1.4, mix(14.0, 56.0, step(1.01, uVolumeScale)));
    gl_Position = projectionMatrix * viewPosition;
  }
`,Cm=`
  uniform float uVolumeOpacity;
  varying float vOpacity;
  varying float vLane;
  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float radius = length(point);
    float alpha = smoothstep(0.5, 0.0, radius) * vOpacity * uVolumeOpacity;
    vec3 low = vec3(0.10, 0.36, 0.78);
    vec3 high = vec3(0.38, 0.76, 1.0);
    gl_FragColor = vec4(mix(low, high, vLane), alpha);
  }
`;function zu(r,e){return{uStoryTime:{value:0},uVisibility:{value:0},uTurbulence:{value:1},uCoherence:{value:0},uPressure:{value:0},uPixelRatio:{value:1},uVolumeScale:{value:r},uVolumeOpacity:{value:e}}}function Gu(r){let e=r.currentLanes,t=r.currentParticles,i=e*t,n=new Float32Array(i*3),s=new Float32Array(i),a=new Float32Array(i),o=new Float32Array(i*3);for(let y=0;y<e;y+=1)for(let b=0;b<t;b+=1){let M=y*t+b;s[M]=b/(t-1),a[M]=e===1?2:y/(e-1)*4,o[M*3]=gc(M,1)-.5,o[M*3+1]=gc(M,2)-.5,o[M*3+2]=gc(M,3)-.5}let c=new qe;c.setAttribute("position",new at(n,3)),c.setAttribute("aT",new at(s,1)),c.setAttribute("aLane",new at(a,1)),c.setAttribute("aJitter",new at(o,3));let l=zu(1,.66),h=zu(4.2,.052),d=y=>new nt({uniforms:y,vertexShader:Am,fragmentShader:Cm,transparent:!0,depthWrite:!1,blending:Kt}),p=d(h),u=d(l),g=new ki(c,p),m=new ki(c,u);g.frustumCulled=!1,m.frustumCulled=!1;let _=new At;_.add(g,m);function f(y,b,M=0){for(let S of[h,l])S.uStoryTime.value=y.storyTime+M*.38,S.uVisibility.value=y.currents.visibility,S.uTurbulence.value=y.currents.turbulence,S.uCoherence.value=y.currents.coherence,S.uPressure.value=y.pressure,S.uPixelRatio.value=b}function v(){c.dispose(),p.dispose(),u.dispose()}return{group:_,update:f,dispose:v}}function Vu(){let r=new At,e=new Fn(9,72,24,1,!0),t=[];[[-19,-36,-34,-.08],[-6,-35,-19,.05],[9,-37,-29,-.04],[21,-35,-12,.07]].forEach(([a,o,c,l],h)=>{let d=new Ti({color:h%2?7129855:4427496,transparent:!0,opacity:0,side:Tt,depthWrite:!1,blending:Kt}),p=new $e(e,d);p.position.set(a,o,c),p.rotation.z=l,p.scale.x=.7+h*.12,r.add(p),t.push(p)});function n(a,o=0){t.forEach((c,l)=>{c.material.opacity=a.atmosphere.beam*(.017+l*.004)*a.atmosphere.clarity,c.rotation.y=(a.storyTime+o*.45)*.0025+l*.6})}function s(){e.dispose(),t.forEach(a=>a.material.dispose())}return{group:r,update:n,dispose:s}}var Rm=`
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,Pm=`
  uniform float uOpacity;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  void main() {
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float edge = pow(1.0 - abs(dot(normalize(vNormal), viewDirection)), 4.2);
    float alpha = smoothstep(0.02, 0.92, edge) * uOpacity;
    gl_FragColor = vec4(vec3(0.34, 0.72, 1.0), alpha);
  }
`;function ku(){let r=new At,e=new Wi(1,34,20),t=[];for(let s=0;s<4;s+=1){let a=new nt({uniforms:{uOpacity:{value:0}},vertexShader:Rm,fragmentShader:Pm,transparent:!0,depthWrite:!1,depthTest:!1,side:Tt,blending:Kt,toneMapped:!1}),o=new $e(e,a);o.position.set((s-1.5)*3.2,-47+s*2.3,-29-s*3.2),r.add(o),t.push(o)}function i(s,a=0){t.forEach((o,c)=>{let h=8+(Math.sin((s.storyTime+a*.42)*.075+c*1.2)*.5+.5)*25+c*4.5;o.scale.setScalar(h),o.material.uniforms.uOpacity.value=s.pressure*(.016+c*.0035)})}function n(){e.dispose(),t.forEach(s=>s.material.dispose())}return{group:r,update:i,dispose:n}}var Im=[{file:"assets/clouds/cc0-cloud-layer-05.png",reveal:.925,y:34,x:-14,z:50,width:250,depth:190,rotation:-.12,opacity:.56,drift:.42},{file:"assets/clouds/generated-cirrus-layer.png",reveal:.942,y:74,x:24,z:84,width:350,depth:260,rotation:.2,opacity:.7,drift:-.3},{file:"assets/clouds/cc0-cloud-layer-07.png",reveal:.956,y:118,x:-8,z:122,width:440,depth:325,rotation:-.06,opacity:.43,drift:.2},{file:"assets/clouds/generated-cirrus-layer.png",reveal:.971,y:190,x:45,z:182,width:590,depth:430,rotation:.34,opacity:.36,drift:-.24},{file:"assets/clouds/cc0-cloud-layer-05.png",reveal:.983,y:258,x:-55,z:235,width:760,depth:545,rotation:-.22,opacity:.29,drift:.16}];function Hu(){let r=new At,e=new ci(1,1);e.rotateX(-Math.PI/2);let t=new Ir,i=Im.map((a,o)=>{let c=t.load(a.file);c.colorSpace=yt,c.minFilter=wi,c.magFilter=gt;let l=new Ti({map:c,color:o===0?15924223:15005183,transparent:!0,opacity:0,depthWrite:!1,side:ji,toneMapped:!1}),h=new $e(e,l);return h.position.set(a.x,a.y,a.z),h.scale.set(a.width,1,a.depth),h.rotation.y=a.rotation,h.renderOrder=20+o,h.frustumCulled=!1,r.add(h),{mesh:h,material:l,texture:c,settings:a}});r.visible=!1;function n(a,o=0){r.visible=a.progress>.922,i.forEach(({mesh:c,material:l,settings:h},d)=>{let p=Ki((a.progress-h.reveal)/.014);l.opacity=h.opacity*p,c.position.x=h.x+Math.sin(o*.028+d*1.9)*h.drift,c.position.z=h.z+Math.cos(o*.021+d)*Math.abs(h.drift)*.7})}function s(){e.dispose(),i.forEach(({material:a,texture:o})=>{a.dispose(),o.dispose()})}return{group:r,update:n,dispose:s}}var Lm=`
  varying vec3 vDirection;
  void main() {
    vDirection = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Dm=`
  uniform float uSubmersion;
  uniform float uReveal;
  uniform float uClarity;
  uniform float uDepth;
  varying vec3 vDirection;
  void main() {
    float vertical = clamp(vDirection.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 airZenith = mix(vec3(0.035, 0.28, 0.72), vec3(0.055, 0.38, 0.82), uReveal);
    vec3 airHorizon = mix(vec3(0.23, 0.68, 0.96), vec3(0.40, 0.80, 1.0), uReveal);
    vec3 air = mix(airHorizon, airZenith, smoothstep(0.45, 0.88, vertical));
    float upGlow = pow(vertical, 3.2);
    float abyss = smoothstep(0.12, 0.92, uDepth);
    vec3 deep = mix(vec3(0.004, 0.095, 0.28), vec3(0.001, 0.004, 0.022), abyss);
    vec3 shallow = mix(vec3(0.02, 0.42, 0.80), vec3(0.008, 0.065, 0.20), abyss);
    shallow = mix(shallow * 0.78, shallow, uClarity);
    vec3 underwater = mix(deep, shallow, upGlow * mix(0.92, 0.52, abyss));
    underwater += mix(vec3(0.015, 0.24, 0.52), vec3(0.005, 0.025, 0.10), abyss) * smoothstep(0.55, 1.0, vertical);
    gl_FragColor = vec4(mix(air, underwater, uSubmersion), 1.0);
  }
`;function Nm(){let r=matchMedia("(max-width: 760px)").matches,e=navigator.deviceMemory&&navigator.deviceMemory<=4||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;return r||e?{tier:"mobile",dpr:1.25,waterX:86,waterZ:110,particles:1100,currentLanes:3,currentParticles:220}:innerWidth<1300||devicePixelRatio>2?{tier:"balanced",dpr:1.45,waterX:138,waterZ:164,particles:2200,currentLanes:4,currentParticles:330}:{tier:"high",dpr:1.75,waterX:180,waterZ:210,particles:3400,currentLanes:5,currentParticles:460}}function Wu(r,e=!1){let t;try{t=new za({canvas:r,antialias:devicePixelRatio<2,powerPreference:"high-performance"})}catch{return{available:!1,quality:"fallback",render(){},resize(){},dispose(){}}}let i=Nm(),n=new mr,s=new Mt(45,1,.08,7500),a=new Wi(210,36,20),o={uSubmersion:{value:0},uReveal:{value:0},uClarity:{value:.2},uDepth:{value:0}},c=new nt({uniforms:o,vertexShader:Lm,fragmentShader:Dm,side:bt,depthWrite:!1}),l=new $e(a,c);l.renderOrder=-10,n.add(l);let h=Ou(i),d=Bu(i),p=Gu(i),u=Vu(),g=ku(),m=Hu();n.add(u.group,g.group,d.points,p.group,h.mesh,m.group),t.outputColorSpace=yt,t.toneMapping=Ur,t.setClearColor(67090,1);let _=1,f=new A;function v(){let M=r.clientWidth||innerWidth,S=r.clientHeight||innerHeight;_=Math.min(devicePixelRatio||1,i.dpr),t.setPixelRatio(_),t.setSize(M,S,!1),s.aspect=M/Math.max(1,S),s.updateProjectionMatrix()}function y(M,S=0){let P=e?0:S,F=M.storyTime+P*.42,L=Math.sin(F*.075)*M.pressure;s.position.set(M.camera.x+L*.18,M.camera.y+L*.32,M.camera.z),f.set(M.camera.targetX,M.camera.targetY,M.camera.targetZ),s.fov=M.camera.fov,s.updateProjectionMatrix(),s.lookAt(f),l.position.copy(s.position),o.uSubmersion.value=M.camera.submersion,o.uReveal.value=M.surface.reveal,o.uClarity.value=M.atmosphere.clarity,o.uDepth.value=Math.min(1,Math.max(0,-M.camera.y/64)),t.toneMappingExposure=M.atmosphere.exposure,h.update(M,P),d.update(M,_,P),p.update(M,_,P),u.update(M,P),g.update(M,P),m.update(M,P),t.render(n,s)}function b(){h.dispose(),d.dispose(),p.dispose(),u.dispose(),g.dispose(),m.dispose(),a.dispose(),c.dispose(),t.dispose()}return v(),{available:!0,quality:i.tier,render:y,resize:v,dispose:b}}var ka=[{title:"City of the Violet Crown",artist:"JFI",duration:"3:57",file:"assets/audio/01-city-of-the-violet-crown.mp3"},{title:"AC Current",artist:"Randomonium Studios",duration:"2:54",file:"assets/audio/02-ac-current.mp3"},{title:"Flat Top Mash",artist:"Origami Pigeon",duration:"2:33",file:"assets/audio/03-flat-top-mash.mp3"},{title:"You Keep Going",artist:"Mood Craft",duration:"2:29",file:"assets/audio/04-you-keep-going.mp3"},{title:"Perfect",artist:"JFI",duration:"4:05",file:"assets/audio/05-perfect.mp3"},{title:"Set the World On Fire",artist:"Ferrairi Tzar",duration:"3:02",file:"assets/audio/06-set-the-world-on-fire.mp3"},{title:"Jazzify",artist:"Jonathan Boyle",duration:"2:36",file:"assets/audio/07-jazzify.mp3"},{title:"Chris Phaze",artist:"The Game On",duration:"2:21",file:"assets/audio/08-chris-phaze.mp3"},{title:"Zincon",artist:"HVB Music Group",duration:"2:24",file:"assets/audio/09-zincon.mp3"},{title:"Like Bubble Gum",artist:"Where Is Lulu",duration:"2:22",file:"assets/audio/10-like-bubble-gum.mp3"}];function Xu(r){return Number.isFinite(r)?`${Math.floor(r/60)}:${String(Math.floor(r%60)).padStart(2,"0")}`:"0:00"}function Um(r,e){if(!r)return{start(){},draw(){},dispose(){}};let t=r.getContext("2d"),i,n,s,a=0,o=0,c;function l(){let _=Math.min(devicePixelRatio||1,2),f=r.getBoundingClientRect(),v=Math.max(1,Math.round(f.width*_)),y=Math.max(1,Math.round(f.height*_));(r.width!==v||r.height!==y)&&(r.width=v,r.height=y)}function h(){if(i)return;let _=window.AudioContext||window.webkitAudioContext;_&&(i=new _,n=i.createAnalyser(),n.fftSize=256,n.smoothingTimeConstant=.82,s=i.createMediaElementSource(e),s.connect(n),n.connect(i.destination),c=new Uint8Array(n.frequencyBinCount))}function d(){a=0,l();let _=r.width,f=r.height;t.clearRect(0,0,_,f),o+=e.paused?.006:.024,n&&!e.paused&&n.getByteTimeDomainData(c);let v=t.createLinearGradient(0,0,_,0);v.addColorStop(0,"rgba(78, 184, 241, 0)"),v.addColorStop(.28,"rgba(111, 211, 255, .62)"),v.addColorStop(.72,"rgba(206, 242, 255, .9)"),v.addColorStop(1,"rgba(78, 184, 241, 0)");for(let y=0;y<3;y+=1){t.beginPath();let b=f*(.52+y*.075),M=f*(.035+y*.012);for(let S=0;S<=_;S+=Math.max(3,_/180)){let P=S/_,F=c?Math.min(c.length-1,Math.floor(P*c.length)):0,L=c&&!e.paused?(c[F]-128)/128:0,N=Math.sin(P*Math.PI*(5+y)+o+y*1.7),V=b+(N*.34+L*.88)*M;S===0?t.moveTo(S,V):t.lineTo(S,V)}t.strokeStyle=v,t.globalAlpha=.72-y*.18,t.lineWidth=Math.max(1,r.width/680),t.stroke()}t.globalAlpha=1,e.paused||(a=requestAnimationFrame(d))}function p(){h(),i?.resume(),a||(a=requestAnimationFrame(d))}function u(){a||(a=requestAnimationFrame(d))}let g=new ResizeObserver(u);g.observe(r),u();function m(){cancelAnimationFrame(a),g.disconnect(),s?.disconnect(),n?.disconnect(),i?.close()}return{start:p,draw:u,dispose:m}}function Fm(){let r=document.querySelector("[data-ocean-player]");if(!r)return{dispose(){}};let e=r.querySelector("[data-player-audio]"),t=r.querySelector("[data-player-title]"),i=r.querySelector("[data-player-artist]"),n=r.querySelector("[data-player-index]"),s=r.querySelector("[data-player-current]"),a=r.querySelector("[data-player-duration]"),o=r.querySelector("[data-player-seek]"),c=r.querySelector("[data-player-volume]"),l=r.querySelector('[data-player-action="play"]'),h=r.querySelector("[data-player-icon]"),d=[...r.querySelectorAll("[data-track-index]")],p=Um(r.querySelector("[data-player-visualizer]"),e),u=0;function g(){let f=Number.isFinite(e.duration)&&e.duration>0?e.currentTime/e.duration:0;o.value=String(Math.round(f*1e3)),o.style.setProperty("--range-progress",`${f*100}%`),s.textContent=Xu(e.currentTime)}function m(){let f=!e.paused;r.classList.toggle("is-playing",f),h.textContent=f?"\u2161":"\u25B6",l.setAttribute("aria-label",`${f?"Pause":"Play"} ${ka[u].title}`),f?p.start():p.draw()}function _(f,v=!1){u=(f+ka.length)%ka.length;let y=ka[u];e.src=y.file,e.load(),t.textContent=y.title,i.textContent=y.artist,n.textContent=String(u+1).padStart(2,"0"),a.textContent=y.duration,s.textContent="0:00",o.value="0",o.style.setProperty("--range-progress","0%"),d.forEach((b,M)=>{let S=M===u;b.classList.toggle("is-current",S),S?b.setAttribute("aria-current","true"):b.removeAttribute("aria-current")}),v&&e.play().catch(()=>m())}return l.addEventListener("click",()=>{e.paused?e.play().catch(()=>m()):e.pause()}),r.querySelector('[data-player-action="previous"]').addEventListener("click",()=>_(u-1,!e.paused)),r.querySelector('[data-player-action="next"]').addEventListener("click",()=>_(u+1,!e.paused)),d.forEach(f=>f.addEventListener("click",()=>_(Number(f.dataset.trackIndex),!0))),o.addEventListener("input",()=>{Number.isFinite(e.duration)&&(e.currentTime=Number(o.value)/1e3*e.duration,g())}),c.addEventListener("input",()=>{e.volume=Number(c.value)}),e.addEventListener("play",m),e.addEventListener("pause",m),e.addEventListener("timeupdate",g),e.addEventListener("loadedmetadata",()=>{a.textContent=Xu(e.duration),g()}),e.addEventListener("ended",()=>_(u+1,!0)),e.volume=Number(c.value),{dispose(){e.pause(),p.dispose()}}}function Om(){let r=document.querySelector("[data-credit-dialog]");if(!r)return;let e=r.querySelector("[data-credit-image]"),t=r.querySelector("[data-credit-dialog-title]"),i=r.querySelector("[data-credit-dialog-artist]");document.querySelectorAll("[data-credit-src]").forEach(n=>{n.addEventListener("click",()=>{e.src=n.dataset.creditSrc,e.alt=`${n.dataset.creditTitle} by ${n.dataset.creditArtist} cover`,t.textContent=n.dataset.creditTitle,i.textContent=n.dataset.creditArtist,typeof r.showModal=="function"?r.showModal():r.setAttribute("open","")})}),r.querySelector("[data-credit-close]").addEventListener("click",()=>r.close()),r.addEventListener("click",n=>{n.target===r&&r.close()})}function Bm(){document.querySelectorAll("[data-mailto-form]").forEach(r=>{r.addEventListener("submit",e=>{if(e.preventDefault(),!r.reportValidity())return;let t=[...new FormData(r).entries()].map(([n,s])=>`${n}: ${s}`),i=r.dataset.mailtoSubject||"Ocean Mastering inquiry";location.href=`mailto:ocean.mastering@gmail.com?subject=${encodeURIComponent(i)}&body=${encodeURIComponent(t.join(`

`))}`})})}function zm(){let r=[...document.querySelectorAll("[data-reveal]")];if(matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window)){r.forEach(t=>t.classList.add("is-revealed"));return}document.documentElement.classList.add("has-interactions");let e=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(i.target.classList.add("is-revealed"),e.unobserve(i.target))})},{rootMargin:"0px 0px -10%",threshold:.08});r.forEach(t=>e.observe(t))}function ju(){let r=Fm();return Om(),Bm(),zm(),{dispose(){r.dispose()}}}var Gm=.985,Ha=.7,vc=.91,qu=.9998,Vm=8e-4,km=.003;function Hm(r){let e=fi(r);if(e<=Ha)return e/Ha*vc;let t=fi((e-Ha)/(Gm-Ha));return vc+t*(1-vc)}var Xa=document.querySelector("[data-cinematic]"),Wm=document.querySelector("[data-ocean-canvas]"),Ju=new URLSearchParams(location.search),ja=Ju.has("reduced-motion")||matchMedia("(prefers-reduced-motion: reduce)").matches,Xm=Ju.has("visual-only"),jm=zc(Xa),mn=Wu(Wm,ja),qm=ju();document.documentElement.classList.toggle("visual-only",Xm);document.documentElement.classList.toggle("has-webgl",mn.available);document.documentElement.dataset.quality=mn.quality;document.querySelector("[data-year]").textContent=String(new Date().getFullYear());var qa=no(0),Ya=null;try{Ya=location.hash?document.querySelector(location.hash):null}catch{Ya=null}var Jn=!!Ya?.closest(".after-story"),Wa=!1,Yu=scrollY,kr=new qr(Xa,(r,e,t)=>{let i=Hm(r),n=ja?Bc(i):i;qa=no(n);let s=Xa.offsetTop+Xa.offsetHeight,a=s-innerHeight,o=scrollY,c=o<Yu-.5&&o<s&&(Jn||Wa);c&&(Jn=!1,Wa=!1),Yu=o;let l=i>=qu&&t.targetProgress>=qu&&Math.abs(t.targetProgress-r)<=Vm&&Math.abs(t.velocity)<=km;!c&&!Jn&&o<=a+1&&l&&(Wa=!0);let h=Jn||Wa;document.documentElement.classList.toggle("story-complete",h),!h&&o>a&&scrollTo({top:a,behavior:"instant"}),document.querySelector("[data-site-header]")?.classList.toggle("is-light",o>=s-1),jm.update(qa),e&&mn.render(qa,ja?0:t.elapsed)},{continuous:!ja,spring:4});document.documentElement.classList.add("app-ready");kr.start();Jn&&(document.documentElement.classList.add("story-complete"),kr.finish(),requestAnimationFrame(()=>Ya.scrollIntoView()));document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",()=>{document.querySelector(r.getAttribute("href"))?.closest(".after-story")&&(Jn=!0,document.documentElement.classList.add("story-complete"),kr.finish())})});var Zu=0;addEventListener("resize",()=>{cancelAnimationFrame(Zu),Zu=requestAnimationFrame(()=>{mn.resize(),mn.render(qa,0)})},{passive:!0});addEventListener("pagehide",r=>{kr.stop(),r.persisted||(qm.dispose(),mn.dispose())});addEventListener("pageshow",r=>{r.persisted&&(mn.resize(),kr.start())});})();
