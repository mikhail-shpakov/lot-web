(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l,u,d={},f=[],p=/^m(i|n|o|s|text|space)$/,m=Array.isArray,h=f.slice,g=Object.assign;function _(e){e&&e.parentNode&&e.remove()}function v(n,r,i,a,o){var s={type:n,props:r,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o||++t,__i:-1,__u:0};return!o&&e.vnode&&e.vnode(s),s}function y(e){return e.children}function b(e,t){this.props=e,this.context=t,this.__g=0}function x(e,t){if(t==null)return e.__&&x(e.__,e.__i+1);for(var n;t<e.__k.length;t++)if((n=e.__k[t])&&n.__e)return n.__e;return typeof e.type!=`function`||e.props.__P?null:x(e)}function S(e){if((e=e.__)&&e.__c&&!e.props.__P)return e.__e=null,e.__k.some(function(t){return t&&(e.__e=t.__e)}),S(e)}function C(t){(8&t.__g||(t.__g|=8,n.push(t),i++))&&r==e.debounceRendering||((r=e.debounceRendering)||queueMicrotask)(ee)}function ee(){var t,o,s,c,l,u,d,f,p;try{for(o=1;n.length;)n.length>o&&n.sort(a),t=n.shift(),o=n.length,8&t.__g&&(c=void 0,l=void 0,u=(l=(s=t).__v).__e,d=[],f=[],(p=s.__P)&&((c=g({constructor:void 0},l)).__v=l.__v+1,e.vnode&&e.vnode(c),ie(p,c,l,s.__n,p.namespaceURI,32&l.__u?[u]:null,d,u||x(l),32&l.__u,f),c.__v=l.__v,c.__.__k[c.__i]=c,se(d,c,f),l.__=l.__e=null,c.__e!=u&&S(c)))}finally{(i=n.length)&&(r||queueMicrotask)(ee)}}function te(e,t,n,r,i,a,o,s,c,l,u){var p,m,h,g,_,v,y=r.__k||f,b=t.length;for(c=w(n,t,y,c,b),p=0;p<b;p++)(h=n.__k[p])!=null&&(m=~h.__i&&y[h.__i]||d,h.__i=p,v=ie(e,h,m,i,a,o,s,c,l,u),g=h.__e,(m.ref!=h.ref||8&m.__u)&&(m.ref&&le(m.ref,null,h,m),h.ref&&u.push(h.ref,h.__c||g,h)),_||=g,4&h.__u?(c=T(h,c,e,!m.__v),m.__e&&(m.__e=null)):typeof h.type==`function`&&v!==void 0?c=v:g&&(c=g.nextSibling),h.__u&=-21);return n.__e=_,c}function w(e,t,n,r,i){var a,o,s,c,l,u,d,f,p,h=n.length,g=h,_=0,b=0,S=e.__k=Array(i);for(a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o!=`object`||o.constructor==String?o=S[a]=v(null,o):m(o)?o=S[a]=v(y,{children:o}):o.constructor===void 0&&o.__b?o=S[a]=v(o.type,o.props,o.key,o.ref,o.__v):S[a]=o,c=a+_,o.__=e,o.__b=e.__b+1,s=null,~(l=o.__i=E(o,n,c,g))&&(g--,(s=n[l])&&(s.__u|=2)),s&&s.__v?(o.__u|=16,l==c-1?_--:l==c+1?_++:l!=c&&(l>c?_--:_++,b=1)):(~l||(i>h?_--:i<h&&_++),typeof o.type!=`function`&&(o.__u|=4))):S[a]=null;if(b){for(u=[],d=[],a=0;a<i;a++)if((o=S[a])&&16&o.__u){for(_=0,f=u.length;_<f;)u[p=_+f>>1]<o.__i?_=p+1:f=p;u[_]=o.__i,d[a]=_+1}for(_=u.length;a--;)d[a]&&(d[a]==_?_--:S[a].__u|=4)}if(g)for(a=0;a<h;a++)!(s=n[a])||2&s.__u||(s.__e==r&&(r=x(s)),ue(s,s));return r}function T(e,t,n,r){var i,a,o,s;if(typeof e.type==`function`){if(e.props.__P)return t;if(i=e.__k)for(a=0;a<i.length;a++)i[a]&&(i[a].__=e,t=T(i[a],t,n,!1));return t}for(t&&!t.parentNode&&(t=x(e))&&!t.parentNode&&(t=null),o=e.__e,s=t;s&&s.nodeType==8;)s=s.nextSibling;for(o!=s&&(!r&&n.moveBefore&&o.parentNode?n.moveBefore(o,t):n.insertBefore(o,t||null)),t=o;(t&&=t.nextSibling)&&t.nodeType==8&&!t.data.startsWith(`$s`););return t}function E(e,t,n,r){var i,a=e.key,o=e.type,s=t[n],c=s&&!(2&s.__u);if(s===null&&a==null||c&&a==s.key&&o==s.type)return n;if(r>+!!c){for(i=n-1;i>=0;i--)if((s=t[i])&&!(2&s.__u)&&a==s.key&&o==s.type)return i;for(i=n+1;i<t.length;i++)if((s=t[i])&&!(2&s.__u)&&a==s.key&&o==s.type)return i}return-1}function D(e,t,n){n??=``,t[0]==`-`?e.setProperty(t,n):e[t]=n}function ne(e,t,n,r,i){var a,o;if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||D(e.style,t);if(n)for(t in n)r&&n[t]==r[t]||D(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)(e.__e||={})[t]=n,n&&r||(o=l[t]||(l[t]=re(t)),(e.__a||={})[t]=c,a=t!=(t=t.replace(s,`$1`)),(t=t.slice(2))[0]<`a`&&(t=t.toLowerCase()),n?e.addEventListener(t,o,a):e.removeEventListener(t,o,a));else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;return}catch{}if(typeof n==`function`)return;n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n)}}function re(t){return function(n){var r=this.__e;if(r){if(r=r[t],n[o]==null)n[o]=c++;else if(n[o]<this.__a[t])return;return r(e.event?e.event(n):n)}}}function ie(t,n,r,i,a,o,s,c,l,u){var d,p,h,v,S,C,ee,w,T,E,D,ne,re,ie,se,le,fe,pe,me=n.type;if(n.constructor!==void 0)return null;128&r.__u&&(l=32&r.__u,d=r.__c.__z)&&(n.__u|=l,p=o=[],d.nodeType==8?c=ae(d,o):o.push(d),c=o[0]||c),(d=e.__b)&&d(n);n:if(typeof me==`function`){h=s.length;try{if(w=n.props,T=(d=me.prototype)&&d.render,E=(d=me.contextType)&&i[d.__c],D=d?E?E.props.value:d.__:i,(v=r.__c)?(n.__c=v,2&v.__g&&(v.__g|=1)):(T?n.__c=v=new me(w,D):(n.__c=v=new b(w,D),v.constructor=me,v.render=de),E&&E.sub(v),v.state||(v.state={}),v.__n=i,v.__g|=8,v.__h=[],v.__k=[]),T&&(v.__s||(v.__s=v.state),me.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=g({},v.__s)),g(v.__s,me.getDerivedStateFromProps(w,v.__s)))),S=v.props,C=v.state,v.__v=n,r.__c){if(w!==S&&T&&!me.getDerivedStateFromProps&&v.componentWillReceiveProps&&v.componentWillReceiveProps(w,D),n.__v==r.__v&&!(8&v.__g)||!(4&v.__g)&&v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(w,v.__s,D)){n.__v!=r.__v&&(v.props=w,v.state=v.__s,v.__g&=-9),n.__e=r.__e,n.__k=r.__k,n.__k.some(function(e){e&&(e.__=n)}),f.push.apply(v.__h,v.__k),v.__k=[],v.__h.length&&s.push(v),c=x(r);break n}v.componentWillUpdate&&v.componentWillUpdate(w,v.__s,D),T&&v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(S,C,ee)})}else T&&!me.getDerivedStateFromProps&&v.componentWillMount&&v.componentWillMount(),T&&v.componentDidMount&&v.__h.push(v.componentDidMount);if(v.context=D,v.props=w,v.__P=t,v.__g&=-5,ne=e.__r,re=0,T)v.state=v.__s,v.__g&=-9,ne&&ne(n),d=v.render(v.props,v.state,v.context),f.push.apply(v.__h,v.__k),v.__k=[];else do v.__g&=-9,ne&&ne(n),d=v.render(v.props,v.state,v.context),v.state=v.__s;while(8&v.__g&&++re<25);v.state=v.__s,v.getChildContext&&(i=g({},i,v.getChildContext())),T&&r.__c&&v.getSnapshotBeforeUpdate&&(ee=v.getSnapshotBeforeUpdate(S,C)),ie=d&&d.type===y&&d.key==null?d.props.children:d,w.__P&&(d=c,a=(t=w.__P).namespaceURI,l=o=null,r.props&&r.props.__P!=t&&(r.__k.some(function(e){e&&ue(e,e)}),r.__k=null),c=r.__k?x(r,0):null),c=te(t,m(ie)?ie:[ie],n,r,i,a,o,s,c,l,u),w.__P&&(n.__e=null,c=d),n.__u&=-161,p&&p.some(_),v.__h.length&&s.push(v),1&v.__g&&(v.__g&=-4)}catch(t){if(s.length=h,n.__v=null,l||o){if(t.then){if(se=0,n.__u|=128|l,o){for(~(fe=o.indexOf(c||void 0))||(fe=o.length);(pe=o[fe-1])&&pe.nodeType==8;)fe--;for(;fe<o.length;fe++)if(pe=o[fe]){if(o[fe]=null,pe.nodeType==8){if(pe.data.startsWith(`$s`))se++||(le=pe);else if(se&&pe.data.startsWith(`/$s`)&&!--se)break}else if(!se)break}}if(!le){for(;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;le=c}(d=ae(le=n.__c.__z||(n.__c.__z=le)))?(n.__e=le,c=d):n.__e=c,c&&=c.nextSibling}else o&&o.some(_)}else n.__e=r.__e;n.__k||=r.__k||[],t.then||oe(n),e.__e(t,n,r)}}else c=n.__e=ce(r.__e,n,r,i,a,o,s,l,u,t);return(d=e.diffed)&&d(n),c}function ae(e,t){if(e&&e.nodeType==8&&e.data.startsWith(`$s`))for(var n=1;e=e.nextSibling;){if(e.nodeType==8){if(e.data.startsWith(`$s`))n++;else if(e.data.startsWith(`/$s`)&&!--n)return e}t&&t.push(e)}}function oe(e){e&&(e.__c&&(e.__c.__g|=4),e.__k&&e.__k.some(oe))}function se(t,n,r){for(var i=0;i<r.length;)le(r[i++],r[i++],r[i++]);e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function ce(t,n,r,i,a,o,s,c,l,u){var f,g,v,y,b,S,C,ee,w,T=r.props||d,E=n.props,D=n.type;if(D==`svg`?a=`http://www.w3.org/2000/svg`:D==`math`?a=`http://www.w3.org/1998/Math/MathML`:a||=`http://www.w3.org/1999/xhtml`,o){for(f=0;f<o.length;f++)if((b=o[f])&&(D?b.localName==D:b.nodeType==3)){t=b,o[f]=null;break}}if(!t){if(ee=u.ownerDocument||document,!D)return ee.createTextNode(E);t=ee.createElementNS(a,D,E.is&&E),c&&=(e.__m&&e.__m(n,o),!1),o=null}if(D){if(u=D==`template`?t.content:t,o=D==`textarea`&&E.defaultValue!=null?null:o&&h.call(u.childNodes),!c&&o)for(T={},f=0;f<t.attributes.length;f++)T[(b=t.attributes[f]).name]=b.value;for(f in T)b=T[f],f==`dangerouslySetInnerHTML`?v=b:f==`children`||f in E||f==`value`&&`defaultValue`in E||f==`checked`&&`defaultChecked`in E||ne(t,f,null,b,a);for(f in w=1&r.__u,E)b=E[f],f==`children`?y=b:f==`dangerouslySetInnerHTML`?g=b:f==`value`?S=b:f==`checked`?C=b:c&&typeof b!=`function`||!(T[f]!==b||w&&b!=null)||ne(t,f,b,T[f],a);g?(c||v&&(g.__html==v.__html||g.__html==t.innerHTML)||(t.innerHTML=g.__html),n.__k=[]):(v&&(t.textContent=``),(D==`foreignObject`||a==`http://www.w3.org/1998/Math/MathML`&&p.test(D))&&(a=`http://www.w3.org/1999/xhtml`),te(u,m(y)?y:[y],n,r,i,a,o,s,o?o[0]:r.__k&&x(r,0),c,l),o&&o.some(_)),c&&D!=`textarea`||(f=`value`,D==`progress`&&S==null?t.removeAttribute(f):S==null||S===t[f]&&(D!=`progress`||S)||ne(t,f,S,T[f],a),f=`checked`,C!=null&&C!=t[f]&&ne(t,f,C,T[f],a))}else T===E||c&&t.data==E||(t.data=E);return t}function le(t,n,r,i){try{typeof t==`function`?n?n.__x=t(n)||1:(i&&=i.__c||i.__e)&&(n=i.__x)&&(i.__x=null,typeof n==`function`?n():t(null)):t.current=n}catch(t){e.__e(t,r)}}function ue(t,n,r){var i,a,o,s;if(e.unmount&&e.unmount(t),!(i=t.ref)||i.current&&i.current!=t.__e||le(i,null,n,t),i=t.__c){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){e.__e(t,n)}i.__P=i.__n=null}if(i=t.__k)for(s=0;s<i.length;s++)i[s]&&ue(i[s],n,typeof t.type!=`function`||r&&!t.props.__P);!r&&(i=t.__c)&&(i=i.__z)&&(a=ae(i,o=[]))&&(i==t.__e&&o.some(_),_(a),_(i)),(i=t.__e)&&(r||_(i),i.__e&&(i.__e=null)),t.__e=t.__c=t.__=null}function de(e,t,n){return this.constructor(e,n)}function fe(t,n){var r,i,a,o;e.__&&e.__(t,n),n.nodeType==9&&(n=n.documentElement),i=(r=t&&32&t.__u)?null:n.__k,n.__k=v(y,{children:[t]}),a=[],o=[],ie(n,n.__k,i||d,d,n.namespaceURI,i?null:n.firstChild?h.call(n.childNodes):null,a,i?i.__e:n.firstChild,r,o),se(a,n.__k,o),n.__k.props.children=null}function pe(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__g|=4,C(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.delete(e),t&&t.call(e)}}),e.children}return t.__c=`__cC`+u++,t.__=e,t.Provider=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}e={__e:function(e,t,n,r){for(var a,o,s;t=t.__;)if((a=t.__c)&&!(1&a.__g)){a.__g|=4;try{if((s=(o=a.constructor)&&o.getDerivedStateFromError)&&a.setState(o.getDerivedStateFromError(e)),a.componentDidCatch&&(a.componentDidCatch(e,r||{}),s=1),s&&8&a.__g)return void(a.__g|=2)}catch(t){e=t}}throw i=0,e}},t=0,b.prototype.setState=function(e,t){var n=this.__s;n&&n!=this.state||(n=this.__s=g({},this.state)),typeof e==`function`&&(e=e(g({},n),this.props)),e&&(g(n,e),this.__v&&(t&&this.__k.push(t),C(this)))},b.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),C(this))},b.prototype.render=y,n=[],i=0,a=function(e,t){return e.__v.__b-t.__v.__b},o=Symbol(),s=/(PointerCapture)$|Capture$/i,c=0,l={},u=0;var me=`# group	kind	tags	ru	en	need
anc	c		{Собирал|Собирала} колоски за жнецами. Мать тебя хвалит.	You gather the ears of grain behind the reapers. Mother praises you.	
anc	c		{Видел|Видела} праздник бога реки: в воду бросали цветы.	You see the feast of the river god: flowers are thrown into the water.	
anc	c		Младший брат умер от лихорадки. Ему было три года.	Your little brother dies of a fever. He was three.	
anc	c		{Пас|Пасла} коз на склоне и {знал|знала} каждую по голосу.	You herd goats on the slope and know each one by its voice.	
anc	c		Отец вылепил тебе глиняного бычка на колёсиках.	Father makes you a clay bull on little wheels.	
anc	c	cn in	Весь день стоишь в воде на рисовом поле и гоняешь птиц.	All day you stand in the water of the rice field, chasing off birds.	
anc	c	eg	Пришёл разлив, поле стало морем. Плаваешь на связке тростника.	The flood comes and the field becomes a sea. You float on a bundle of reeds.	
anc	c	med	Смотришь, как в гавань входит корабль с пурпурным парусом.	You watch a ship with a purple sail come into the harbour.	
anc	c	cn	Дед учит тебя кланяться табличкам предков. Ты путаешь, кто из них кто.	Grandfather teaches you to bow to the ancestor tablets. You mix up who is who.	
anc	c	cn	Мать кормит шелкопрядов листьями шелковицы. Велят не шуметь: они пугаются.	Mother feeds the silkworms mulberry leaves. You are told to keep quiet: they take fright.	
anc	c	cn	Сидишь на краю просяного поля с трещоткой и гоняешь воробьёв.	You sit at the edge of the millet field with a rattle, chasing sparrows.	
anc	c	cn	Тебе сшили первую рубаху из конопли. Колется.	You get your first shirt of hemp. It itches.	
anc	c	in	Пришли дожди. Бегаешь голышом под ливнем вместе с братьями.	The rains come. You run naked in the downpour with your brothers.	
anc	c	in	Тебе впервые доверили корову. Ведёшь её к реке и очень гордишься.	For the first time you are trusted with the cow. You lead her to the river, very proud.	
anc	c	in	Учитель заставляет повторять гимн, пока не скажешь его без единой ошибки.	The teacher makes you repeat the hymn until you say it without a single slip.	m r3
anc	c	me	Лепишь из глины табличку и царапаешь её палочкой, как писец.	You shape a clay tablet and scratch it with a stick, like a scribe.	
anc	c	me	Отец взял тебя чистить канал. Стоишь по пояс в тёплом иле.	Father takes you to clear the canal. You stand waist-deep in warm silt.	
anc	c	me	С крыши видна ступенчатая башня храма. Ты думаешь, что наверху живёт бог.	From the roof you can see the temple's stepped tower. You think the god lives at the top.	
anc	c	eg	Мать варит пиво из хлеба. Тебе дают облизать сладкую гущу.	Mother brews beer from bread. You are allowed to lick the sweet mash.	
anc	c	eg	Гоняешь гусей с поля и боишься крокодила в канаве.	You chase the geese off the field and fear the crocodile in the ditch.	
anc	c	eg	Дядя ушёл строить гробницу фараону. Вернулся с мозолями и новыми песнями.	Your uncle goes off to build the pharaoh's tomb. He comes back with calluses and new songs.	
anc	c	med	Давишь ногами виноград в каменной давильне. Ноги потом три дня лиловые.	You tread grapes in the stone press. Your feet stay purple for three days.	
anc	c	med	Сбиваешь палкой оливки, а младшие собирают их в корзины.	You beat the olives down with a stick while the little ones gather them into baskets.	
anc	c	med	Ловишь осьминога у камней. Он обвивает тебе руку.	You catch an octopus by the rocks. It wraps itself round your arm.	
anc	c	af	Помогаешь матери толочь ямс в ступе. Пест почти с тебя ростом.	You help your mother pound yams in the mortar. The pestle is nearly as tall as you.	
anc	c	af	Сидишь у плавильной печи и смотришь, как из красного камня выходит железо.	You sit by the smelting furnace and watch iron come out of red stone.	after:-500
anc	c	meso	Бабушка учит тебя растирать маис на камне. Пальцы ноют.	Grandmother teaches you to grind maize on the stone. Your fingers ache.	
anc	c	meso	На празднике тебе дали глоток какао с перцем. Горько, а ты просишь ещё.	At a feast you get a sip of cacao with chilli. Bitter, and still you ask for more.	
anc	c	andes	Пасёшь лам на склоне. Одна плюнула тебе в лицо.	You herd llamas on the slope. One spits in your face.	
anc	c	andes	Носишь камни для новой террасы. По одному, зато весь день.	You carry stones for a new terrace. One at a time, all day long.	
anc	c	au	Бабушка показывает, где под песком прячется вода.	Grandmother shows you where water hides under the sand.	
anc	c	au	Учишься выкапывать ямс палкой и оставлять в земле мелкие клубни.	You learn to dig yams with a stick and leave the small ones in the ground.	
anc	c	au	Старики поют песню о пути через эти холмы. Ты засыпаешь на середине.	The old people sing the song of the path across these hills. You fall asleep halfway.	
anc	c		{Упал|Упала} с дерева и {сломал|сломала} руку. Знахарка привязала к ней палки.	You fall from a tree and break your arm. The healer binds sticks to it.	
anc	c		Мать родила двойню. В доме теперь никто не спит.	Mother has twins. Now nobody in the house gets any sleep.	
anc	c		Соседская собака пошла за тобой и осталась жить у вас.	The neighbours' dog follows you home and stays.	
anc	c		Тебя продали вместе с матерью. Хорошо, что вместе.	You are sold together with your mother. Good that it is together.	r0
anc	c		В мастерской отца тебе дали ком глины. Горшок вышел кривой, но его обожгли со всеми.	In your father's workshop you get a lump of clay. Your pot comes out crooked, but it is fired with the rest.	r2
anc	c	me eg in	Ночью у загона выли шакалы. Отец не спал до рассвета.	At night jackals howl by the pen. Father stays awake till dawn.	
anc	c		Голодной весной {ел|ела} коренья и {варил|варила} с матерью траву.	In a hungry spring you eat roots and boil grass with your mother.	
anc	c		Всё лето {ходил|ходила} с отцом на дальнее поле. Спали под звёздами.	All summer you go with father to the far field. You sleep under the stars.	
anc	c		Мать заплетает тебе волосы и рассказывает, как была маленькой.	Mother braids your hair and tells you about when she was little.	
anc	y		В деревню пришёл сборщик податей с писцом. Писец пересчитал даже кур.	The tax collector comes with a scribe. The scribe counts even the hens.	
anc	y		Впервые {увидел|увидела} город: стены выше десяти человек.	You see a city for the first time: walls taller than ten men.	
anc	y	eg me	Разлив был хороший: год будет сытый.	The flood is good: a year of full bellies.	
anc	y		На сезон тебя отправили на царскую стройку.	You are sent for a season to work on the king's building.	
anc	y		На празднике тебя {заметил|заметила} кто-то из соседней деревни.	At the feast someone from the next village notices you.	
anc	y	cn me eg med	Тебя внесли в списки и дали копьё с бронзовым наконечником.	You are put on the muster roll and given a bronze-tipped spear.	m after:-3000
anc	y	cn	В доме господина гадатель жжёт черепаший панцирь и читает трещины. Ты {смотрел|смотрела} из-за двери.	In the lord's house the diviner scorches a turtle shell and reads the cracks. You watch from behind the door.	
anc	y	cn	Тебя учат ткать шёлк. Нить рвётся, мать молча связывает её снова.	You are taught to weave silk. The thread breaks; mother ties it again without a word.	f
anc	y	in	Тебя сосватали. {Невесту|Жениха} ты {видел|видела} только издали, у колодца.	You are betrothed. You have seen your {bride|groom} only from afar, at the well.	single !monk
anc	y	in	Тебе надели священный шнур. Теперь ты дважды рождённый.	You receive the sacred thread. Now you are twice-born.	m r3
anc	y	in	В деревню пришёл отшельник, весь в пепле. Ты носишь ему рис.	A hermit comes to the village, covered in ash. You bring him rice.	
anc	y	me	В школе писцов тебя бьют палкой за кривой клин.	At the scribes' school you are caned for a crooked wedge.	m r3
anc	y	me	Отец впервые взял тебя на суд у городских ворот.	Father takes you for the first time to the court at the city gate.	m
anc	y	eg	Ты выучил песню, под которую тянут камень. Голос у тебя громкий.	You learn the song for hauling stone. You have a loud voice.	m
anc	y	eg	Ты научилась подводить глаза чёрной краской. Мать говорит, что это от мух.	You learn to line your eyes with black paint. Mother says it keeps the flies away.	f
anc	y	med	Впервые вышел в море с рыбаками. Тошнило до вечера.	You go to sea with the fishermen for the first time. You are sick till evening.	m +sea
anc	y	med	На празднике бога вина пьяны все, даже жрец.	At the wine god's feast everyone is drunk, even the priest.	
anc	y	med	Бежал на играх в честь бога. Пришёл третьим, венок достался другому.	You run in the games for the god. You come third; the wreath goes to another.	m
anc	y	af	Тебя увели в лес на обряд. Назад ты приходишь со шрамами и новым именем.	You are taken into the forest for the rite. You come back with scars and a new name.	
anc	y	af	Всю ночь {раздувал|раздувала} мехи у плавильной печи. Руки не поднимаются.	All night you work the bellows at the smelting furnace. You can't lift your arms.	after:-500
anc	y	meso	Впервые играешь в мяч на площадке. Бедро всё в синяках.	For the first time you play the ballgame in the court. Your hip is black and blue.	m
anc	y	meso	Жрец проколол себе язык шипом. Ты {смотрел|смотрела} и не {мог|могла} отвести глаз.	The priest pierces his tongue with a thorn. You watch and cannot look away.	
anc	y	andes	Тебя послали на общие работы: месяц строишь дорогу в горах.	You are sent for the common labour: a month building a road in the mountains.	
anc	y	andes	Старик показывает тебе шнурок с узелками: это, говорит, урожаи за десять лет.	An old man shows you a cord of knots: this, he says, is ten years of harvests.	
anc	y	au	Тебе разрешили слушать песни, которые поют только мужчины.	You are allowed to hear the songs only men may sing.	m
anc	y	au	Выследил эму и принёс мясо. У костра тебя впервые хвалят вслух.	You track an emu and bring back the meat. By the fire they praise you aloud for the first time.	m
anc	y		Ты {влюбился|влюбилась}. Знает вся деревня, кроме {неё|него}.	You fall in love. The whole village knows, except {her|him}.	single
anc	y		Хозяин отдал тебя в работу гончару. Глина слушается тебя лучше, чем люди.	The master hires you out to a potter. The clay obeys you better than people do.	r0
anc	y		Отец отдал тебя в ученики к меднику. Первый месяц ты только таскаешь уголь.	Father apprentices you to a coppersmith. For the first month you only carry charcoal.	r2
anc	y		Первый раз {напился|напилась} пива. Утром мать над тобой смеётся.	You get drunk on beer for the first time. In the morning mother laughs at you.	
anc	y		Ты впервые сама соткала покрывало. Его отложили в приданое.	You weave a whole blanket by yourself for the first time. It is put away for your dowry.	f
anc	a		Неурожай. Пришлось занять зерно у храма под проценты.	A bad harvest. You must borrow grain from the temple at interest.	!town
anc	a		Через селение прошло войско. Забрали всё сено.	An army passes through the village. It takes all the hay.	!town
anc	a		Построили новый дом из сырцового кирпича.	You build a new house of mud brick.	
anc	a		Отдал{|а} последнюю козу за лекарство для ребёнка. Ребёнок выжил.	You give your last goat for medicine for a child. The child lives.	kids !town
anc	a		Сосед продал себя в рабство за долги. Ты помнишь его лицо.	A neighbour sells himself into slavery for his debts. You remember his face.	
anc	a		Впервые {держал|держала} в руках бронзовый нож. Он стоит дороже коровы.	For the first time you hold a bronze knife. It is worth more than a cow.	after:-3000 !town
anc	a	cn	Весной всей деревней чините дамбу на Жёлтой реке. Земля сыплется из корзин.	In spring the whole village mends the dyke on the Yellow River. Earth spills from the baskets.	!town
anc	a	cn	Приносишь предкам просо и вино. Просишь у них сына.	You offer millet and wine to the ancestors. You ask them for a son.	married
anc	a	cn	Пришёл указ: каждая семья даёт одного человека на стену.	An order arrives: every family gives one man for the wall.	
anc	a	cn	Носишь траур по отцу: три года грубая одежда и никакого мяса.	You mourn your father: three years of coarse clothes and no meat.	
anc	a	cn	Пишешь кистью на бамбуковых планках. Ошибёшься — планку скоблят ножом.	You write with a brush on bamboo slips. Make a mistake and the slip is scraped with a knife.	r3 lit
anc	a	in	Жрец назначил свадьбу дочери по звёздам. Ждать ещё два месяца.	The priest sets your daughter's wedding by the stars. Two more months to wait.	kids grown
anc	a	in	Муссон запаздывает. Каждое утро вся деревня смотрит на небо.	The monsoon is late. Every morning the whole village looks at the sky.	
anc	a	in	Брахман пришёл петь гимны над новым домом. Ты {отдал|отдала} ему тёлку.	A Brahmin comes to chant hymns over the new house. You give him a heifer.	
anc	a	in	Отец лепил горшки, ты лепишь горшки, и сын будет лепить. Такая у вас каста.	Father made pots, you make pots, and your son will too. That is your caste.	r2 kids
anc	a	in	Корова отелилась. Первое молоко отдаёшь богам.	The cow calves. The first milk goes to the gods.	!town
anc	a	me	Писец храма выдаёт тебе ячмень и пиво: плата за месяц на канале.	The temple scribe hands out barley and beer: your pay for a month on the canal.	
anc	a	me	Долг записан на табличке. Табличка лежит в храме, а ты дома не спишь.	The debt is written on a tablet. The tablet lies in the temple, and you lie awake at home.	
anc	a	me	Новый царь простил все долги. Ты {плакал|плакала} у ворот храма.	The new king cancels all debts. You weep at the temple gate.	
anc	a	me	Земля на поле белая от соли. Ячмень с каждым годом всё хуже.	The soil of your field is white with salt. The barley is worse every year.	!town
anc	a	me	Пишешь письмо за купца. Он диктует, ты выдавливаешь клинья.	You write a letter for a merchant. He dictates; you press the wedges.	r3 lit
anc	a	eg	После разлива землемер заново размечает поле. Ты следишь, чтобы верёвка шла ровно.	After the flood the surveyor marks out the field again. You make sure the rope runs straight.	!town
anc	a	eg	Ты в артели на гробнице. Дают хлеб, лук и пиво.	You work in a gang building a tomb. They give you bread, onions and beer.	m
anc	a	eg	Рабочим не выдали зерно. Артель бросила работу и села у храма.	The workers' grain does not come. The gang downs tools and sits down by the temple.	m
anc	a	eg	Пересчитываешь мешки в царском амбаре. Цифры сходятся, и это главное.	You count sacks in the royal granary. The figures add up, which is what matters.	r3 lit !town
anc	a	eg	Печёшь хлеб и варишь пиво на весь дом. Соседки приходят занять закваски.	You bake bread and brew beer for the whole house. The neighbour women come to borrow leaven.	f
anc	a	med	Оливки собраны. Масло в этом году светлое и горькое, как надо.	The olives are in. This year's oil is pale and bitter, just right.	!town
anc	a	med	На собрании спорят о войне. Ты голосуешь поднятой рукой.	At the assembly they argue about war. You vote with a raised hand.	m
anc	a	med	Гребёшь на военном корабле. Ладони стёрты до мяса.	You row in a warship. Your palms are rubbed raw.	m
anc	a	med	Финикийский купец сбил цену на твои горшки вдвое. Всё равно {продал|продала}.	A Phoenician merchant beats down the price of your pots by half. You sell anyway.	r2
anc	a	med	Хозяин обещал отпустить тебя на волю, когда умрёт. Он здоров как бык.	Your master has promised to free you when he dies. He is as healthy as an ox.	r0
anc	a		Кувшин масла разбился по дороге с рынка. Полдня работы в пыль.	A jar of oil breaks on the way back from market. Half a day's work into the dust.	
anc	a	af	Расчищаешь лес под поле: рубишь, жжёшь, сажаешь ямс в золу.	You clear forest for a field: cut, burn, plant yams in the ash.	!town
anc	a	af	Старейшины сели под большим деревом. Говорили до темноты, решили через месяц.	The elders sit down under the big tree. They talk till dark and decide a month later.	
anc	a	af	Лепишь из глины голову с огромными глазами. Её поставят на алтарь.	You model a clay head with huge eyes. It will stand on the altar.	r2
anc	a	meso	Сажаешь в одну лунку маис, бобы и тыкву. Пусть растут вместе.	You plant maize, beans and squash in one hole. Let them grow together.	!town
anc	a	meso	Платишь подать хлопковыми плащами. Ткали полгода.	You pay the tribute in cotton cloaks. They took half a year to weave.	
anc	a	meso	Меняешь на рынке перец на горсть какао-бобов. Ими можно платить.	At the market you trade chillies for a handful of cacao beans. They pass as money.	
anc	a	andes	Стрижёшь лам. Из этой шерсти вся семья будет прясть до зимы.	You shear the llamas. The whole family will spin this wool till winter.	
anc	a	andes	Сушишь картошку на морозе: ночью она мёрзнет, днём ты её топчешь.	You freeze-dry potatoes: by night they freeze, by day you tread them.	
anc	a	andes	Чинишь стену террасы, которую клал ещё дед твоего деда.	You mend a terrace wall laid by your grandfather's grandfather.	
anc	a	au	Поджигаешь сухую траву, чтобы кенгуру пришли на свежие побеги.	You set the dry grass alight so the kangaroos come to the fresh shoots.	
anc	a	au	Ваша группа встретилась с соседями у реки. Меняетесь охрой, песнями и новостями.	Your band meets the neighbours at the river. You trade ochre, songs and news.	
anc	a		Жена родила сына. Три дня ходишь, не чуя под собой ног.	Your wife gives birth to a son. For three days your feet hardly touch the ground.	m married !widowed
anc	a		Родила. Повитуха говорит, что ты кричала громче всех в деревне.	You give birth. The midwife says you screamed louder than anyone in the village.	f married
anc	a	cn in me eg med	Сын провёл свою первую борозду. Кривую. Ты молчишь.	Your son ploughs his first furrow. Crooked. You say nothing.	kids !town
anc	a		Ребёнок умер, не дожив до зимы. Ты кладёшь ему в могилу бусину.	A child of yours dies before winter. You put a bead in the grave.	kids
anc	a		{Поссорился|Поссорилась} с братом из-за поля. Год не разговариваете.	You quarrel with your brother over a field. You do not speak for a year.	!town
anc	a		Тебя продали в другой дом. Новая хозяйка злее прежней.	You are sold to another house. The new mistress is crueller than the old.	r0
anc	a		Таскаешь воду с рассвета. Хозяйские дети думают, что ты не умеешь говорить.	You haul water from dawn. The master's children think you cannot speak.	r0
anc	a		{Устроил|Устроила} пир на сорок гостей. Певцы пели твоё имя.	You give a feast for forty guests. The singers sing your name.	r3
anc	a	me eg	Ведёшь ослов с медью через пустыню. До города двадцать дней.	You lead donkeys loaded with copper across the desert. Twenty days to the city.	m r2
anc	a	cn in me eg med	Бык пал. Пашете с братом, впрягшись сами.	The ox dies. You and your brother plough with yourselves in the harness.	!town
anc	a		Сосед передвинул межевой камень. Ты видишь это каждое утро.	A neighbour has moved the boundary stone. You see it every morning.	
anc	a		Лихорадка трясёт тебя неделю. Знахарка лечит горькой травой и заговором.	A fever shakes you for a week. The healer treats you with a bitter herb and a charm.	
anc	a		Дочь {выдал|выдала} замуж в соседнюю деревню. В доме стало тихо.	You marry your daughter off into the next village. The house goes quiet.	kids grown
anc	a		Чужой человек попросился на ночлег. Ты {накормил|накормила} его, а утром он ушёл.	A stranger asks to stay the night. You feed him, and in the morning he is gone.	
anc	j		Свадьба у соседей: три дня ели мясо и плясали.	The neighbours' wedding: three days of meat and dancing.	
anc	j		Первый раз {попробовал|попробовала} мёд с финиками.	For the first time you taste honey with dates.	
anc	j		Сказитель на площади пел о героях. {Слушал|Слушала} до ночи.	A storyteller in the square sings of heroes. You listen till night.	
anc	j		Урожай такой, что зерно не помещается в яму.	The harvest is so big the grain won't fit in the pit.	!town
anc	j		{Выменял|Выменяла} на рынке бусы из синего камня.	At the market you trade for beads of blue stone.	
anc	j		Вечером на крыше смотришь с детьми на звёзды.	In the evening you watch the stars from the roof with the children.	kids
anc	j	cn	Новый год: на дверях свежие обереги из персикового дерева, в котле мясо.	New Year: fresh peach-wood charms on the doors, meat in the pot.	
anc	j	cn	Шёлковый пояс, первый в жизни. Надеваешь его только по праздникам.	A silk sash, the first in your life. You wear it only on feast days.	
anc	j	cn	{Выиграл|Выиграла} у соседа в кости кувшин просяного вина.	You win a jar of millet wine from a neighbour at dice.	
anc	j	in	Первый ливень после жары. Вся деревня стоит под ним и смеётся.	The first downpour after the heat. The whole village stands in it, laughing.	
anc	j	in	{Выменял|Выменяла} у торговца горсть перца. Еда теперь жжётся и радует.	You trade for a handful of pepper. Now the food bites, and it is a joy.	!town
anc	j	me	Новый год: бога везут на лодке по реке, весь город на берегу.	New Year: the god rides a boat down the river, the whole city on the bank.	
anc	j	me	Пьёте с друзьями пиво из одного кувшина через тростинки.	You and your friends drink beer from one jar through reed straws.	
anc	j	me	Переписываешь сказание о Гильгамеше и смеёшься в том же месте, что и в первый раз.	You copy out the tale of Gilgamesh and laugh at the same place as the first time.	lit r3
anc	j	eg	Праздник в долине: пьёшь у гробницы предков и поёшь им.	The Feast of the Valley: you drink at your ancestors' tomb and sing to them.	
anc	j	eg	{Поймал|Поймала} в Ниле рыбу длиннее руки.	You catch a fish in the Nile longer than your arm.	
anc	j	med	В театре дают комедию про богов. Хохочешь так, что икаешь до самого дома.	At the theatre they play a comedy about the gods. You laugh so hard you hiccup all the way home.	
anc	j	med	Первая смоква с твоего дерева. Съедаешь её сам{|а}, никому не показав.	The first fig from your own tree. You eat it yourself and show no one.	
anc	j	med	В праздник рабов сажают за стол с хозяевами. Один день как равные.	At the feast the slaves sit at table with the masters. For one day, as equals.	r0
anc	j	af	Пляски при луне под барабаны. Пляшешь, пока ноги держат.	Dancing under the moon to the drums. You dance as long as your legs hold.	
anc	j	af	Гриот спел о твоём роде. Теперь и твоё имя в песне.	The griot sings of your family. Now your name is in the song too.	
anc	j	meso	На празднике тебе досталась целая лепёшка с индюшатиной.	At the feast you get a whole tortilla with turkey.	
anc	j	andes	Праздник урожая: пьёте чичу, пока солнце не сядет за гору.	Harvest feast: you drink chicha till the sun sets behind the mountain.	!town
anc	j	andes	У ламы родился белый детёныш. Все приходят посмотреть.	A llama gives birth to a white young one. Everyone comes to look.	
anc	j	au	Поймали дюгоня. Пир на всю стоянку, пока не кончится жир.	A dugong is caught. A feast for the whole camp until the fat runs out.	
anc	j	au	Цветёт акация. Старики говорят: пора идти к морю.	The wattle is in flower. The old people say it is time to go to the sea.	
anc	j		Ребёнок впервые позвал тебя. Ты всё {бросил|бросила} и {побежал|побежала}.	Your child calls for you for the first time. You drop everything and run.	kids
anc	j		Вечером сидите с {женой|мужем} у огня и молчите. Хорошо.	In the evening you sit by the fire with your {wife|husband}, saying nothing. It is good.	married !widowed
anc	j		{Нашёл|Нашла} на берегу красивую раковину. Носишь её на шее.	You find a pretty shell on the shore. You wear it round your neck.	+sea
anc	j		Гости хвалят твою похлёбку и просят ещё.	The guests praise your stew and ask for more.	
anc	j		После жатвы спишь в тени до самого вечера. Никто не будит.	After the harvest you sleep in the shade till evening. No one wakes you.	!town
anc	j		Старый друг пришёл издалека, через десять лет. {Узнал|Узнала} его по смеху.	An old friend comes from far away after ten years. You know him by his laugh.	
anc	j		Хозяин уехал на неделю. Можно спать до восхода.	The master is away for a week. You can sleep till sunrise.	r0
anc	j		Твою работу купил человек из далёкого города. Заплатил не торгуясь.	A man from a far city buys your work. He pays without haggling.	r2
anc	j	cn in me eg med	Ласточки вернулись под крышу. Год будет добрый.	The swallows are back under the roof. It will be a good year.	
anc	j		Тихий вечер: все сыты, никто не болен.	A quiet evening: everyone fed, nobody ill.	
anc	o		Внуки бегают по двору. Ты рассказываешь им про год, когда река не пришла.	The grandchildren run about the yard. You tell them of the year the river did not come.	kids grand
anc	o		Колени болят. Сидишь у порога и плетёшь корзины.	Your knees ache. You sit at the door weaving baskets.	
anc	o		Тебя зовут рассудить спор о меже: ты помнишь, где она была.	They call you to settle a quarrel over a boundary: you remember where it was.	!town
anc	o		Ты {пережил|пережила} трёх царей и ни одного не {видел|видела}.	You outlive three kings and never see one of them.	
anc	o		Собираешь себе в последний путь: горшок, гребень, немного зерна.	You gather things for your last journey: a pot, a comb, a little grain.	
anc	o	cn	Сын уже заказал тебе гроб. По обычаю это почёт.	Your son has already had a coffin made for you. By custom it is an honour.	kids
anc	o	cn	На Новый год внуки кланяются тебе. Ты раздаёшь им сушёный унаби.	At New Year the grandchildren bow to you. You hand out dried jujubes.	kids grand
anc	o	in	Старые законы велят уйти в лес и жить отшельником. Но жалко внуков.	The old laws say to go to the forest and live as a hermit. But you would miss the grandchildren.	kids grand
anc	o	in	Просишь, чтобы прах опустили в реку. Сын кивает.	You ask for your ashes to be given to the river. Your son nods.	kids
anc	o	me	Диктуешь писцу, кому что оставить. Он берёт за это овцу.	You dictate to a scribe who gets what after you. He charges a sheep for it.	!town
anc	o	me	Река ушла в сторону. В детстве деревня стояла у воды, теперь кругом пыль.	The river has moved away. In your childhood the village stood by the water; now there is dust all round.	
anc	o	eg	Всю жизнь {копил|копила} на гроб. Теперь он стоит у стены, расписной.	All your life you saved for a coffin. Now it stands against the wall, painted.	
anc	o	eg	Видишь пятидесятый разлив. Помнишь каждый плохой.	You see your fiftieth flood. You remember every bad one.	
anc	o	med	Сидишь на скамье у пристани и по парусу узнаёшь, чей корабль.	You sit on the bench by the quay and know by the sail whose ship it is.	
anc	o	med	Оливу ты {посадил|посадила} в молодости. Теперь с неё собирают внуки.	You planted the olive tree when you were young. Now your grandchildren pick it.	kids !town grand
anc	o	af	Ты старше всех в деревне. Молодые приходят за советом и несут пиво.	You are the oldest in the village. The young come for advice and bring beer.	
anc	o	meso	Тебе пятьдесят два года, круг замкнулся. Новый огонь зажгли и для тебя.	You are fifty-two: the circle is closed. The new fire is lit for you too.	
anc	o	andes	Просишь похоронить тебя в пещере над полями, откуда видна вся долина.	You ask to be buried in the cave above the fields, where the whole valley can be seen.	
anc	o	au	Ты знаешь песню всей дороги до моря. Учишь ей внука, по строчке в день.	You know the song of the whole way to the sea. You teach it to your grandson, a line a day.	kids grand
anc	o	in me eg med	Зубов почти не осталось. Хлеб тебе размачивают в молоке.	Hardly a tooth left. They soak your bread in milk.	
anc	o		Глаза почти не видят. Узнаёшь людей по шагам.	Your eyes are nearly gone. You know people by their steps.	
anc	o		Ты {пережил|пережила} всех, с кем {играл|играла} в детстве.	You have outlived everyone you played with as a child.	
anc	o		{Жена умерла|Муж умер} весной. Ты всё ещё ставишь на стол две миски.	Your {wife|husband} died in spring. You still set two bowls on the table.	married +widowed
anc	o		Мясо тебе подают {первому|первой}. Так здесь чтут стариков.	You are served the meat first. That is how the old are honoured here.	
anc	o		Хозяин отпустил тебя: старый раб ему не нужен. Идти некуда.	Your master sets you free: an old slave is no use to him. You have nowhere to go.	r0
anc	o		Руки трясутся, работать не можешь. Сидишь в мастерской и ворчишь на учеников.	Your hands shake and you can't work. You sit in the workshop grumbling at the apprentices.	r2
anc	o	me eg	Велишь высечь на камне свои дела. Половину резчик приукрашивает сам.	You have your deeds carved in stone. Half of it the carver embellishes himself.	r3
anc	o		Правнук сидит у тебя на коленях. Никак не вспомнишь, как его зовут.	A great-grandchild sits on your knee. You cannot remember his name.	kids grand
anc	o		Ночами мёрзнешь даже под двумя шкурами. Спишь у самого очага.	At night you are cold even under two hides. You sleep right by the hearth.	
anc	o		Каждое утро выходишь посмотреть на поле. Работают на нём уже другие.	Every morning you go out to look at the field. Others work it now.	!town
anc	o		Соседи приходят послушать, как было раньше. Ты немного привираешь.	The neighbours come to hear how things used to be. You fib a little.	
anc	x		Война между царями: деревню сожгли.	War between kings: the village is burned.	
anc	x		Засуха третий год подряд.	Drought, the third year in a row.	
anc	x		Саранча съела всё за один день.	Locusts eat everything in one day.	
anc	x		Мор. Мёртвых не успевают хоронить.	Plague. There is no time to bury the dead.	
anc	x	cn	Жёлтая река прорвала дамбы. Вода стоит там, где было село.	The Yellow River breaks its dykes. Water stands where the village was.	
anc	x	in	Муссон не пришёл. Колодцы пересохли, коровы падают.	The monsoon fails. The wells run dry and the cows drop.	!town
anc	x	me	Горцы спустились в долину и разорили город. Храм горит.	Hill tribes come down and sack the city. The temple is burning.	
anc	x	me	Царь угоняет людей в свою землю. Твою деревню целиком.	The king drives whole peoples off to his own land. Your village goes, every soul.	!town
anc	x	eg	Разлив слишком низкий. Зерна не хватит до следующего.	The flood is too low. The grain will not last until the next one.	
anc	x	med	Ночью высадились пираты. Утром недосчитались детей.	Pirates land in the night. In the morning children are missing.	
anc	x	meso	Дожди не пришли. Жрецы говорят, что боги хотят крови.	The rains do not come. The priests say the gods want blood.	
anc	x	andes	Земля тряслась. Террасы съехали в реку вместе с урожаем.	The earth shook. The terraces slid into the river with the harvest.	!town
anc	x	au	Огонь пошёл не туда, куда его вели. Горит всё до горизонта.	The fire goes where it was not led. Everything is burning to the horizon.	
anc	x	af	Скот болеет от лесной мухи. Стадо тает на глазах.	The forest fly sickens the cattle. The herd melts away before your eyes.	!town
anc	x		Хозяин разгневался и велел тебя бить. Спина не заживает месяц.	Your master is angry and has you beaten. Your back does not heal for a month.	r0
anc	x	cn in me eg med af	Падёж скота. Через месяц загон пуст.	The cattle die. A month later the pen is empty.	!town
anc	c		Старшая сестра носит тебя на спине, пока мать работает.	Your big sister carries you on her back while mother works.	
anc	c		Ночью гроза. Ты {залез|залезла} к матери под бок и {считал|считала} раскаты.	A storm in the night. You crawl in beside mother and count the thunderclaps.	
anc	c		Впервые идёшь за водой без взрослых. {Донёс|Донесла} половину, зато сам{|а}.	For the first time you fetch water without a grown-up. You bring back half, but on your own.	
anc	c		Дети играют в похороны: хоронят жука и плачут понарошку.	The children play at funerals: they bury a beetle and weep for show.	
anc	c		Выпал первый зуб. Бабушка велит бросить его через плечо и не оглядываться.	Your first tooth falls out. Grandmother tells you to throw it over your shoulder and not look back.	
anc	c		Дед вырезал тебе свистульку из тростника. Свистишь, пока не прогонят.	Grandfather cuts you a reed whistle. You whistle until they chase you off.	
anc	c		Все думают, что ты спишь. А ты слушаешь, как взрослые говорят о тебе.	Everyone thinks you are asleep. You lie listening to the grown-ups talk about you.	
anc	c		{Обжёгся|Обожглась} у очага. Мать мажет ожог жиром и ругает тебя.	You burn yourself at the hearth. Mother smears fat on the burn and scolds you.	
anc	c		Тебе дали подержать новорождённого брата. Он сжал твой палец и не отпускает.	You are given your newborn brother to hold. He grips your finger and won't let go.	
anc	c		Ты {потерялся|потерялась} и до темноты {сидел|сидела} под кустом. Нашла тебя собака.	You get lost and sit under a bush till dark. It is the dog that finds you.	
anc	c		Пчела ужалила тебя в губу. Губу раздуло, смеётся даже мать.	A bee stings your lip. It swells up, and even mother laughs.	
anc	c		Лепишь из грязи человечков и даёшь им имена соседей.	You make little people out of mud and give them the neighbours' names.	
anc	c		Взрослые делят мясо. Ты стоишь рядом и ждёшь, когда тебе дадут кость.	The grown-ups share out the meat. You stand by, waiting to be given a bone.	
anc	c		Старшие не берут тебя в игру. Ты {кидал|кидала} в них камешки из кустов.	The big ones won't let you play. You throw pebbles at them from the bushes.	
anc	c		Дед ночью показывает тебе звёзды и говорит, как зовут каждую.	At night grandfather shows you the stars and tells you each one's name.	
anc	c	cn in me eg med af meso andes	Тебе дали свою грядку. Каждое утро бегаешь смотреть, не взошло ли.	You are given your own patch. Every morning you run to see if anything has come up.	
anc	c	cn in me eg med af meso andes	Носишь жнецам воду. Кувшин тяжёлый, но ты ни разу его не {уронил|уронила}.	You carry water to the reapers. The jar is heavy, but you never once drop it.	
anc	c	cn in me eg med af	Козлёнок родился слабым. Ты {держал|держала} его у огня и {поил|поила} молоком с пальца.	A kid is born weak. You keep it by the fire and feed it milk from your finger.	
anc	c	cn in me eg med af	Отец посадил тебя на спину быка. Высоко и страшно, и слезать не хочется.	Father sets you on the ox's back. It is high and frightening, and you don't want to get down.	
anc	c	af	Ловишь термитов, когда они вылетают после дождя. Мать жарит их на черепке.	You catch termites as they swarm after the rain. Mother roasts them on a potsherd.	
anc	c	af	Сидишь на дереве у поля и кидаешь комья в обезьян, которые лезут к сорго.	You sit in a tree by the field, throwing clods at the monkeys after the sorghum.	
anc	c	af	Сестра сделала тебе куклу из тыквы-горлянки и обмотала её бусами.	Your sister makes you a doll from a gourd and winds beads round it.	
anc	c	af	Учишься носить на голове кувшин с водой. Первый разбился у самого дома.	You learn to carry a water jar on your head. The first one breaks right by the house.	
anc	c	af	Вечером бабушка рассказывает про паука-хитреца. Тебе страшно, и ты просишь ещё.	In the evening grandmother tells of the trickster spider. You are scared and beg for more.	
anc	c	af	Гонишь коров на водопой. Самая старая корова знает дорогу лучше тебя.	You drive the cows to water. The oldest cow knows the way better than you.	
anc	c	meso	Младшему брату привязали к голове дощечки, чтобы лоб стал красивым.	Boards are tied to your little brother's head so his forehead grows handsome.	
anc	c	meso	Отец учит тебя трубить в раковину, как на празднике. Выходит только хрип.	Father teaches you to blow the conch shell as at the feast. All that comes out is a wheeze.	
anc	c	meso	Помогаешь матери варить маис с известью. Руки потом щиплет.	You help mother boil maize with lime. Afterwards your hands sting.	
anc	c	meso	Сидишь в шалаше на краю маисового поля и гоняешь енотов.	You sit in a shelter at the edge of the maize field, chasing off raccoons.	
anc	c	meso	Дед показывает на Плеяды: когда они уходят, пора сеять.	Grandfather points at the Pleiades: when they go, it is time to sow.	
anc	c	andes	Мать полет поле, а ты сидишь у неё на спине в платке и смотришь на мир через её плечо.	Mother weeds the field with you tied on her back in a shawl. You see the world over her shoulder.	
anc	c	andes	Морские свинки бегают по кухне и пищат. Ты даёшь каждой имя, хотя их едят.	Guinea pigs run squeaking round the kitchen. You name every one, though they get eaten.	
anc	c	andes	Носишь отцу в поле жареную кукурузу в узелке.	You carry toasted maize in a bundle to father in the field.	
anc	c	andes	Ночью холодно до звона. Спишь между братьями под шерстяным одеялом.	The night is bitterly cold. You sleep between your brothers under a wool blanket.	
anc	c	andes	Ветер с ледника сорвал с тебя шапку. Ты бежишь за ней вниз по склону.	The wind off the glacier snatches your cap. You run after it down the slope.	
anc	c	au	Учишься ловить ящериц руками. Первую ты {отпустил|отпустила}: жалко.	You learn to catch lizards with your hands. The first one you let go: you feel sorry for it.	
anc	c	au	Бабушка печёт черепаху прямо в панцире. Ты сидишь рядом и ждёшь.	Grandmother roasts a turtle in its shell. You sit beside her and wait.	
anc	c	au	Ныряешь с матерью за ракушками. Набираешь полную сумку из коры.	You dive for shellfish with your mother and fill a bark bag.	
anc	c	au	Тебя учат читать следы. По отпечатку в песке ты уже знаешь, чей он.	You are taught to read tracks. You can tell from a print in the sand whose it is.	
anc	c	in	Мажешь с матерью пол коровьим навозом. Он сохнет и пахнет травой.	You and mother smear the floor with cow dung. It dries and smells of grass.	
anc	c	in	Дед обвязывает тебе запястье ниткой от сглаза.	Grandfather ties a thread round your wrist against the evil eye.	
anc	c	in	Через деревню прошёл слон. Дети бежали за ним до самой реки.	An elephant walks through the village. The children run after it all the way to the river.	
anc	c	me	Отец лезет на финиковую пальму опылять её. Ты держишь внизу верёвку.	Father climbs the date palm to pollinate it. You hold the rope below.	
anc	c	me	Летом спишь во дворе под навесом. Ночью рядом вздыхает осёл.	In summer you sleep in the yard under an awning. At night the donkey sighs beside you.	
anc	c	med	Играешь в бабки овечьими косточками. {Выиграл|Выиграла} у старшего брата.	You play knucklebones with sheep's ankle bones. You beat your big brother.	
anc	c	med	После дождя собираешь улиток к ужину.	After the rain you gather snails for supper.	
anc	c	med	По жаре носишь отцу воду на виноградник.	In the heat you carry water to father in the vineyard.	
anc	c	cn	Ловишь цикад и держишь их в клетке из соломы.	You catch cicadas and keep them in a straw cage.	
anc	c	cn	Сидишь на буйволе, пока отец пашет. Буйвол медленный, а ты как князь.	You sit on the buffalo while father ploughs. The buffalo is slow, and you feel like a prince.	
anc	c	eg	Тебе обрили голову и оставили одну прядь сбоку. Так ходят все дети.	Your head is shaved but for one lock at the side. All the children wear it so.	
anc	c		Ты ещё мал{|а}, а уже носишь воду хозяйским детям.	You are still small, and already carry water for the master's children.	r0
anc	c		Хозяйские дети играют с тобой, пока никто не видит.	The master's children play with you when no one is looking.	r0
anc	c		Отец даёт тебе раздувать мехи. Искры летят, а ты смеёшься.	Father lets you work the bellows. Sparks fly and you laugh.	r2 after:-3000
anc	c	med	Тебя водят в школу с рабом-провожатым. Учитель бьёт за ошибки в счёте.	A slave walks you to school. The teacher beats you for mistakes in sums.	m r3 after:-500
anc	c	in	Монах в жёлтом погладил тебя по голове и пошёл дальше с пустой чашей.	A monk in yellow pats your head and walks on with his empty bowl.	after:-450
anc	y		Тебя впервые посадили со взрослыми, когда решают дела. Молчать трудно.	For the first time you sit with the grown-ups while they settle matters. Keeping quiet is hard.	
anc	y		Ночью {сбежал|сбежала} с друзьями купаться. Утром все сонные и врут одно и то же.	At night you slip off with friends to swim. In the morning you are all sleepy and tell the same lie.	
anc	y		Старуха бросила для тебя камешки и говорит: проживёшь долго.	An old woman casts pebbles for you and says you will live long.	
anc	y		Весь день {просидел|просидела} у реки, чтобы будто случайно встретить {её|его}.	You spend all day by the river, to meet {her|him} as if by chance.	
anc	y		{Подрался с лучшим другом|Подралась с лучшей подругой}. К вечеру помирились.	You fight with your best friend. By evening you have made it up.	
anc	y		Ты впервые {ушёл|ушла} так далеко, что не видно своих холмов.	For the first time you go so far that your own hills are out of sight.	
anc	y		Тебе доверили нести огонь на новое место. Угли в горшке, ронять нельзя.	You are trusted to carry the fire to the new place. Embers in a pot, not to be dropped.	
anc	y		Тебя впервые позвали плясать со взрослыми. Ноги путаются, но никто не смеётся.	For the first time you are called to dance with the grown-ups. Your feet tangle, but nobody laughs.	
anc	y		Умер дед. Тебя впервые поставили рядом со взрослыми у могилы.	Grandfather dies. For the first time you stand with the grown-ups at the grave.	
anc	y	cn in me eg med af	Впервые жнёшь наравне со взрослыми. К вечеру спина не разгибается.	For the first time you reap alongside the grown-ups. By evening your back won't straighten.	!town
anc	y	cn in me eg med af	Тебе доверили стадо на всё лето. Ночуешь в шалаше на пастбище.	You are trusted with the herd for the whole summer. You sleep in a hut on the pasture.	!town
anc	y	cn in me eg med af meso andes	Торговец обсчитал отца. Ты {заметил|заметила} и {промолчал|промолчала}.	A trader cheats your father in the sums. You notice and say nothing.	
anc	y	cn	На весеннем празднике у реки парни и девушки поют друг другу песни. Ты {отвечал|отвечала} громче всех.	At the spring feast by the river boys and girls sing songs to each other. You answer loudest of all.	
anc	y	cn	Тебя забрали на общие работы: месяц трамбуешь землю для стены уезда.	You are taken for common labour: a month ramming earth for the county wall.	
anc	y	cn	Ночью встаёшь кормить шелкопрядов. Они жуют так громко, будто идёт дождь.	At night you get up to feed the silkworms. They chew so loudly it sounds like rain.	
anc	y	cn	После жатвы ты впервые пьёшь с мужчинами просяное вино. Домой тебя несут.	After the harvest you drink millet wine with the men for the first time. They carry you home.	m !town
anc	y	cn	Тебе закололи волосы шпилькой. Теперь ты невеста.	Your hair is pinned up. Now you are of an age to marry.	f !monk
anc	y	cn	Сосед вернулся с войны. Хвалится, что за отрезанные уши врагов дают землю.	A neighbour comes back from the war. He boasts that land is given for enemies' ears.	after:-350
anc	y	in	Учишься доить так, чтобы телёнку тоже осталось.	You learn to milk so that something is left for the calf.	
anc	y	in	Мальчишки поймали кобру в корзину. Ты {держал|держала} крышку.	The boys catch a cobra in a basket. You hold the lid.	
anc	y	in	Бродячий певец поёт о войне двух родов. Ты {запомнил|запомнила} целую песню.	A wandering singer sings of the war between two clans. You learn a whole song by heart.	
anc	y	in	В сезон дождей пасёшь коров в лесу. Пиявки, гром и никого из взрослых.	In the rains you graze the cows in the forest. Leeches, thunder and no grown-ups.	!town
anc	y	me	Тебя учат печь лепёшки на стенке глиняной печи. Пальцы в ожогах.	You are taught to bake flatbread on the wall of the clay oven. Your fingers are burnt.	
anc	y	me	В богатом доме играют на лире с бычьей головой. Ты {слушал|слушала} у ворот.	In a rich house they play a lyre with a bull's head. You listen at the gate.	
anc	y	me	С гор спустились пастухи с овцами. Ты {выменял|выменяла} у них сыр на финики.	Shepherds come down from the hills with their flocks. You trade them dates for cheese.	!town
anc	y	me	Отец учит тебя по запаху ветра узнавать, будет ли пыльная буря.	Father teaches you to tell from the smell of the wind whether a dust storm is coming.	
anc	y	eg	Впервые {плыл|плыла} на лодке на большой рынок. Туда несло течение, назад гнал ветер.	For the first time you take a boat to the big market. The current carries you there, the wind brings you back.	
anc	y	eg	Месишь ногами глину для кирпичей. К вечеру ты по пояс в грязи.	You tread clay for bricks. By evening you are mud to the waist.	
anc	y	med	Бабушка учит тебя прясть. Нить у тебя тонкая, и она довольна.	Grandmother teaches you to spin. Your thread is fine, and she is pleased.	
anc	y	med	Брат нанялся гребцом на корабль за море. Ты долго {стоял|стояла} на берегу.	Your brother signs on as an oarsman on a ship overseas. You stand on the shore a long time.	+sea
anc	y	med	Ночью стережёшь виноградник от лис. В деревне лают собаки.	At night you guard the vineyard from foxes. Dogs bark down in the village.	!town
anc	y	med	На празднике ты впервые {пел|пела} в хоре для богини. Сердце колотится.	At the feast you sing in the chorus for the goddess for the first time. Your heart is pounding.	
anc	y	med	Отец учит тебя ставить сети на тунца.	Father teaches you to set the nets for tuna.	
anc	y	af	Толчёте просо вдвоём в одной ступе, по очереди, под песню.	Two of you pound millet in one mortar, taking turns, to a song.	!town
anc	y	af	Купцы с севера привели ослов с солью. Ты впервые {видел|видела} соль плитами.	Traders from the north bring donkeys loaded with salt. For the first time you see salt in slabs.	
anc	y	af	В соседнем роду тебе показали {девушку|юношу}. Теперь ваши отцы считают коров.	In the next clan you are shown a {girl|young man}. Now your fathers are counting cows.	!town
anc	y	af	Вечером юноши борются на песке у деревни. Ты {кричал|кричала} громче всех.	In the evening the young men wrestle on the sand by the village. You shout loudest of all.	
anc	y	af	Пасёшь скот с другими юношами на дальнем пастбище. Пьёте молоко с кровью.	You herd cattle with the other youths on the far pasture. You drink milk mixed with blood.	m !town
anc	y	meso andes	Тебя учат ткать на поясном станке: один конец привязан к дереву, другой к тебе.	You learn to weave on the backstrap loom: one end tied to a tree, the other to you.	
anc	y	meso	Впервые {пошёл|пошла} с отцом на большой рынок. Там продают обсидиан, перья и собак.	For the first time you go with father to the big market. They sell obsidian, feathers and dogs.	
anc	y	meso	Ночью пьёте с парнями перебродивший сок агавы. Узнают старики — будет беда.	At night you drink fermented agave sap with the lads. If the old men find out, there will be trouble.	
anc	y	meso	Жрец посмотрел твой день по священному счёту. Говорит, ты {рождён|рождена} для торговли.	The priest looks up your day in the sacred count. He says you were born for trade.	
anc	y	andes	Впервые {спустился|спустилась} с ламами в тёплые долины. Там растут перец и кока.	For the first time you go down with the llamas to the warm valleys. Chillies and coca grow there.	
anc	y	andes	Впервые жуёшь листья коки со взрослыми. Щека немеет.	For the first time you chew coca leaves with the grown-ups. Your cheek goes numb.	
anc	y	andes	На празднике тебе впервые дали маску и место в хороводе.	At the feast you are given a mask and a place in the round dance for the first time.	
anc	y	au	Тебе нанесли на тело первые узоры охрой и белой глиной.	Your body is painted for the first time in ochre and white clay.	
anc	y	au	Ты {ушёл|ушла} с родней в горы, где созрели орехи. Там сотни людей и много песен.	You go with your kin to the hills where the nuts are ripe. Hundreds of people and many songs.	
anc	y	au	Старики показали тебе, где ходить можно, а где нельзя: там спят предки.	The old people show you where you may walk and where not: there the ancestors sleep.	
anc	y	au	Учишься бить рыбу острогой с лодки из коры.	You learn to spear fish from a bark canoe.	
anc	y	au	Плетёшь сумку из травы. Узор выходит такой же, как у бабушки.	You weave a grass bag. The pattern comes out just like grandmother's.	
anc	y		Хозяин продал твою сестру. Ты не {успел|успела} попрощаться.	The master sells your sister. You have no time to say goodbye.	r0
anc	y		Тебя впервые позвали шить с женщинами. Сплетни интереснее шитья.	For the first time you are asked to sew with the women. The gossip is better than the sewing.	f
anc	y	cn	Учитель велел написать знак сто раз. Кисть дрожит.	The teacher tells you to write the character a hundred times. The brush trembles.	lit r3
anc	a		Ты {сложил|сложила} новый очаг. Первый огонь в нём {зажёг|зажгла} от старого.	You build a new hearth. The first fire in it you light from the old one.	
anc	a		Брат ушёл в чужие края. Каждую весну ты ждёшь вестей.	Your brother has gone to foreign parts. Every spring you wait for news.	
anc	a		Зуб ныл всю зиму. Весной он выпал сам, и ты {проспал|проспала} целую ночь.	A tooth aches all winter. In spring it falls out by itself, and you sleep a whole night through.	
anc	a		Кто-то таскает ваши запасы. Ты {просидел|просидела} в засаде до рассвета.	Someone is stealing your stores. You lie in wait till dawn.	
anc	a		Жена брата умерла родами. Её ребёнка ты берёшь в свой дом.	Your brother's wife dies in childbirth. You take her baby into your home.	
anc	a		Старик-сосед учит тебя заговору от змей. Ты не веришь, но запоминаешь.	An old neighbour teaches you a charm against snakes. You don't believe it, but you learn it.	
anc	a		{Повредил|Повредила} ногу. Всю весну работу за тебя делают родные, и ты злишься.	You hurt your leg. All spring your family does your work, and it makes you angry.	
anc	a		{Нашёл|Нашла} в старой яме чужие кости и {закопал|закопала} их обратно.	You find a stranger's bones in an old pit and bury them again.	
anc	a		Умер твой лучший друг. Ты долго не можешь есть.	Your best friend dies. For a long time you cannot eat.	
anc	a		Теперь на сходе тебя слушают. Говоришь мало, и от этого слушают ещё внимательней.	Now they listen to you at the gathering. You say little, and so they listen harder.	
anc	a		Ты с {женой|мужем} в ссоре третий день. Помирились за общей миской.	You and your {wife|husband} have quarrelled for three days. You make it up over a shared bowl.	married !widowed
anc	a	cn in me eg med af meso andes	Сеешь и смотришь на небо: не рано ли. Сосед посеял ещё вчера.	You sow and look at the sky: is it too early? Your neighbour sowed yesterday.	!town
anc	a	cn in me eg med af meso andes	Мыши добрались до зерна в яме. Половину пришлось выбросить.	Mice get into the grain pit. Half has to be thrown away.	
anc	a	cn in me eg med af meso andes	Пришли люди господина и забрали десятую часть урожая. Потом пришли ещё раз.	The lord's men come and take a tenth of the harvest. Then they come again.	!town
anc	a	cn in me eg med af meso andes	Град побил поле за одну грозу. Осталась одна солома.	Hail flattens the field in a single storm. Only straw is left.	!town
anc	a	cn in me eg med af meso andes	С рассвета мелешь зерно на каменной зернотёрке. Поёшь одну и ту же песню, чтобы не уснуть.	From dawn you grind grain on the stone quern. You sing the same song over so as not to fall asleep.	
anc	a	cn in med af meso	{Расчистил|Расчистила} новое поле у леса. Ночами туда ходят дикие свиньи.	You clear a new field by the forest. At night wild pigs come into it.	!town
anc	a	in me eg med af	{Купил|Купила} осла. Он упрямый, но таскает вдвое больше тебя.	You buy a donkey. He is stubborn, but carries twice what you can.	
anc	a	cn in me med	Волк унёс козу из загона. Теперь ночуешь у загона с собакой.	A wolf takes a goat from the pen. Now you sleep by the pen with the dog.	!town
anc	a	cn in me eg med	Пашешь деревянной сохой. Бык упрямится на каждом повороте.	You plough with a wooden ard. The ox balks at every turn.	!town
anc	a	cn	Варишь просяную кашу в треногом горшке. Дым ест глаза.	You cook millet porridge in the three-legged pot. The smoke stings your eyes.	
anc	a	cn	Весь день в залитом поле. Пиявки висят на ногах, как бусы.	All day in the flooded field. Leeches hang on your legs like beads.	!town
anc	a	cn	Свинья принесла десять поросят. Спишь у хлева, чтобы она их не задавила.	The sow has ten piglets. You sleep by the sty so she doesn't crush them.	!town
anc	a	cn	По дороге прошли барабаны и знамёна: князь идёт на князя. Ваших парней забрали в обоз.	Drums and banners pass along the road: lord marches on lord. Your lads are taken for the baggage train.	
anc	a	cn	Копаешь новую пещеру в лёссовом обрыве. Зимой в ней тепло.	You dig a new cave home into the loess cliff. It is warm in winter.	
anc	a	cn	Квасишь овощи на зиму в глиняном чане.	You pickle vegetables for winter in a clay vat.	
anc	a	cn	Платишь подать коноплёй и шёлком. Мотки пересчитывают дважды.	You pay the tax in hemp and silk. The skeins are counted twice.	
anc	a	cn	Поле разделено на девять частей, как знак колодца. Среднюю пашете все вместе для господина.	The land is split in nine like the sign for a well. The middle part you all plough together for the lord.	after:-1000 before:-350 !town
anc	a	cn	Отливаешь бронзовый сосуд в глиняной форме. Треснет — месяц работы зря.	You cast a bronze vessel in a clay mould. If it cracks, a month's work is lost.	r2 after:-1600
anc	a	cn	Медные монеты с дыркой нанизаны на верёвку. Ты {продал|продала} свинью за целую связку.	Copper coins with a hole are strung on a cord. You sell a pig for a whole string.	after:-350 !town
anc	a	cn	Мотыга теперь железная, казённой работы. Земля поддаётся легче.	Your hoe is iron now, made in the state workshops. The soil gives more easily.	after:-400 !town
anc	a	cn	Новый указ: меры и знаки по всей стране одни. Ты учишь письмо заново.	A new decree: one set of measures and characters for the whole land. You learn to write all over again.	lit r3 after:-221
anc	a	in	Поишь быков у пруда, пока не спадёт жара. Сам{|а} сидишь в воде по шею.	You water the oxen at the pond until the heat breaks. You sit in the water up to your neck.	!town
anc	a	in	Брахман сказал: сегодня сеять нельзя, звёзды плохие. Сосед посеял, и ничего.	The Brahmin says today is bad for sowing, the stars are wrong. Your neighbour sows anyway, and nothing happens.	!town
anc	a	in	Сезон дождей: одежда не сохнет, змеи заползают в дом от воды.	The rainy season: clothes never dry, and snakes come into the house to escape the water.	
anc	a	in	Варишь в котле сок сахарного тростника. Пахнет на всю деревню, дети не отходят.	You boil sugar-cane juice in a cauldron. The whole village smells of it, and the children won't leave.	
anc	a	in	Прядёшь хлопок так тонко, что нить почти не видна.	You spin cotton so fine the thread can hardly be seen.	
anc	a	in	Обезьяны таскают с крыши сушёный перец. Ты гоняешь их палкой.	Monkeys steal the dried chillies off the roof. You chase them with a stick.	
anc	a	in	Слон господина пасётся на твоём поле. Прогнать его нельзя.	The lord's elephant is grazing in your field. You may not drive it off.	!town
anc	a	in	Монах в жёлтом остановился у дома. Ты {положил|положила} ему в чашу риса, и он ушёл молча.	A monk in yellow stops at your house. You put rice in his bowl and he leaves without a word.	after:-450
anc	a	in	У дороги на камне высекли указ царя: не убивать животных зря. Тебе его прочли вслух.	The king's edict is carved on a stone by the road: do not kill animals needlessly. Someone reads it aloud to you.	after:-260
anc	a	me	Пускаешь воду на поле через канавку и заваливаешь её землёй, когда хватит.	You let water into the field through a channel and block it with earth when there is enough.	!town
anc	a	me	Стрижёшь храмовых овец. Шерсть идёт в мастерскую, тебе дают ячмень.	You shear the temple sheep. The wool goes to the workshop, you get barley.	!town
anc	a	me	Летом вся семья спит на крыше. Ночью слышно, как храпит сосед через двор.	In summer the whole family sleeps on the roof. At night you can hear the neighbour snoring across the yard.	
anc	a	me	Финики собрали. Нанизываешь их на нитки и вешаешь сушиться.	The dates are in. You string them up to dry.	
anc	a	me	Пыльная буря три дня. Песок в хлебе, в постели, на зубах.	A dust storm for three days. Sand in the bread, in the bed, between your teeth.	
anc	a	me	Ты {поклялся|поклялась} богом в суде, что не {брал|брала} овцу. Судья поверил.	You swear by the god in court that you did not take the sheep. The judge believes you.	!town
anc	a	me eg	Весь день черпаешь воду журавлём и льёшь в канавку на огород.	All day you lift water with the swing-beam and pour it into the channel for the garden.	!town
anc	a	me	Прокатываешь печать по сырой глине: под договором стоит твой знак.	You roll your seal across the wet clay: your mark stands under the contract.	r2 r3
anc	a	me	Ткёшь в храмовой мастерской. Надсмотрщица пересчитывает нити.	You weave in the temple workshop. The overseer counts the threads.	f r0
anc	a	me med	В город пришли монеты. Торговцы пробуют их на зуб.	Coins come to town. The traders test them with their teeth.	after:-600 !town
anc	a	me	По царской дороге мимо деревни скачут гонцы на сменных конях.	Along the royal road, messengers gallop past the village on fresh horses.	after:-520
anc	a	me	С караваном пришли верблюды. Дети прячутся за стену и смотрят.	Camels come with the caravan. The children hide behind the wall and stare.	after:-1000
anc	a	me med	Кузнец выковал тебе железный серп. Он режет лучше бронзового и стоит дешевле.	The smith forges you an iron sickle. It cuts better than bronze and costs less.	after:-1000 !town
anc	a	eg	Ловишь рыбу с папирусной лодки. Крокодил смотрит на тебя из воды.	You fish from a papyrus boat. A crocodile watches you from the water.	
anc	a	eg	Пришли писцы считать скот. Ты гонишь коров мимо них, а они пишут.	The scribes come to count the cattle. You drive the cows past them while they write.	!town
anc	a	eg	Сеешь прямо в мокрый ил, а свиньи втаптывают зерно.	You sow straight into the wet silt, and the pigs tread the seed in.	!town
anc	a	eg	В городе теперь правят греки. Писец ведёт счёт на двух языках.	Greeks rule the city now. The scribe keeps the accounts in two languages.	after:-330
anc	a	med	Сушишь на крыше смоквы на зиму. Осы не дают покоя.	You dry figs on the roof for winter. The wasps give you no peace.	
anc	a	med	Делаешь сыр из козьего молока и кладёшь его в рассол.	You make cheese from goat's milk and put it in brine.	
anc	a	med	Корабль с зерном не пришёл. Хлеб на рынке подорожал вдвое.	The grain ship does not come. Bread at the market costs twice as much.	
anc	a	med	Сосед-рыбак принёс корзину сардин. Солишь их в амфоре.	A fisherman neighbour brings a basket of sardines. You salt them in an amphora.	
anc	a	med	Держишь пчёл в глиняных трубах. Мёд пахнет тимьяном.	You keep bees in clay pipes. The honey smells of thyme.	
anc	a	med	{Нанялся|Нанялась} собирать оливки к богатому соседу. Платят маслом.	You hire yourself out to pick olives for a rich neighbour. He pays in oil.	!town
anc	a	med	Рубишь лес на холме для корабелов. Через год склон пополз вниз.	You fell trees on the hill for the shipbuilders. A year later the slope starts to slide.	
anc	a	med	Хозяин отпустил тебя на волю. Ты {свободен|свободна}, а работаешь у него же.	Your master frees you. You are free, and you work for him just the same.	r0
anc	a	med	Римские солдаты строят дорогу через вашу долину. Прямую, как струна.	Roman soldiers build a road through your valley, straight as a bowstring.	after:-300
anc	a	med	Ты стоишь в строю с чужим бронзовым щитом: свой ушёл за долги.	You stand in the line with a borrowed bronze shield: your own went for debts.	m
anc	a	af	Сажаешь просо после первых дождей. Если второй дождь не придёт, всё пропадёт.	You sow millet after the first rains. If a second rain doesn't come, it is all lost.	!town
anc	a	af	Строишь амбар на сваях, чтобы до зерна не добрались крысы и термиты.	You build a granary on stilts so the rats and termites can't get at the grain.	!town
anc	a	af	Обмазываешь круглую хижину свежей глиной, пока не пошли дожди.	You plaster the round hut with fresh clay before the rains come.	
anc	a	af	Кочевники пригнали стада к вашей реке. Меняете просо на молоко.	Herders bring their cattle to your river. You trade millet for milk.	!town
anc	a	af	Варишь масло из орехов ши. Руки пахнут дымом до самой ночи.	You boil butter from shea nuts. Your hands smell of smoke till night.	
anc	a	af	Несёшь горшки на рынок, день пути, на голове. Обратно несёшь соль.	You carry pots on your head to the market, a day's walk. You carry salt back.	
anc	a	af	Чинишь рыболовные корзины к разливу реки.	You mend the fish traps for the river's flood.	
anc	a	af	Собака выгнала из травы цесарок. Вечером в похлёбке мясо.	The dog flushes guinea fowl from the grass. There is meat in the stew tonight.	
anc	a	af	Колдун ищет, кто наслал болезнь на соседского ребёнка. Все косятся на старую вдову.	The diviner seeks who sent the sickness on the neighbour's child. Everyone looks sideways at the old widow.	
anc	a	af	Кузнец взял за мотыгу козу. Его боятся, и дружить с ним выгодно.	The smith takes a goat for a hoe. People fear him, and it pays to be his friend.	after:-500 !town
anc	a	meso	Выжигаешь лес под новое поле. Через три года земля устанет, и всё сначала.	You burn the forest for a new field. In three years the soil will tire and it starts again.	!town
anc	a	meso	Ведёшь на рынок индюков на верёвке. Один всё время ложится.	You lead turkeys to market on a string. One keeps lying down.	
anc	a	meso	Белишь стены дома известью. На солнце они слепят.	You whitewash the house with lime. In the sun it is blinding.	
anc	a	meso	Новый обсидиановый нож такой острый, что ты {порезался|порезалась} в первый же день.	The new obsidian knife is so sharp you cut yourself on the first day.	
anc	a	meso	Несёшь маис для храма в корзине с ремнём через лоб. Шея гудит.	You carry maize for the temple in a basket with a strap across your forehead. Your neck aches.	!town
anc	a	meso	В колодах у дома живут пчёлы без жала. Их мёд ценят дороже маиса.	Stingless bees live in logs by the house. Their honey is worth more than maize.	!town
anc	a	meso	Плетёшь циновки для всего дома. Спать на новой циновке мягко.	You weave mats for the whole house. A new mat is soft to sleep on.	
anc	a	meso	С гор привезли огромный камень. Его тянули тысячи людей полгода.	A huge stone is brought down from the mountains. Thousands hauled it for half a year.	after:-1200 before:-400
anc	a	andes	Пускаешь воду по каменному жёлобу на террасы. Соседи сверху всегда берут больше.	You lead water down the stone channel to the terraces. The neighbours above always take more.	
anc	a	andes	Делаешь лунки палкой с упором для ноги. За тобой идут и кладут клубни.	You make holes with a foot-plough. Others follow, dropping in the tubers.	
anc	a	andes	Сушишь мясо ламы на ветру. Выходит твёрдое и солёное.	You dry llama meat in the wind. It comes out hard and salty.	
anc	a	andes	Рыбачишь на камышовом плоту на высоком озере.	You fish from a reed raft on the high lake.	
anc	a	andes	Помогаешь соседям строить дом: сегодня ты им, завтра они тебе. Хозяева поят чичей.	You help the neighbours build a house: today you for them, tomorrow they for you. The hosts pour chicha.	
anc	a	andes	Собираешь на островах птичий помёт для полей. Вонь страшная, урожай будет.	You gather bird droppings on the islands for the fields. The stench is awful, but there will be a harvest.	!town
anc	a	andes	Ткёшь плащ с узором вашего рода. По нему тебя узнают за три долины.	You weave a cloak with your clan's pattern. People three valleys away will know you by it.	
anc	a	andes	Мороз среди лета побил ботву. Ты всё утро ходишь по полю молча.	A frost in midsummer blackens the potato leaves. You walk the field all morning in silence.	!town
anc	a	au	Сухой сезон. Перекочёвываете к последнему источнику, а там уже ждут соседи.	The dry season. You move to the last spring, and the neighbours are already there.	
anc	a	au	Растираешь семена травы между камнями и печёшь лепёшки прямо в золе.	You grind grass seed between stones and bake the cakes straight in the ashes.	
anc	a	au	Делаешь новое копьё: древко правишь над огнём, наконечник крепишь смолой.	You make a new spear: you straighten the shaft over the fire and fix the head with resin.	
anc	a	au	Чистишь каменные протоки для угрей. Осенью угри пойдут, и будет пир.	You clear the stone channels for the eels. In autumn the eels will run and there will be a feast.	
anc	a	au	Обходишь дальние места своей земли: вода, деревья, рисунки на скалах. Всё на месте.	You walk the far places of your country: water, trees, paintings on the rocks. All is in order.	!town
anc	a	au	Подновляешь охрой рисунок на скале. Его рисовали деды дедов.	You freshen a rock painting with ochre. Your grandfathers' grandfathers painted it.	
anc	a	au	Спор с соседями решили копьями: бросали, пока не пролилась кровь. Потом мирились у костра.	The quarrel with the neighbours is settled with spears: thrown until blood is drawn. Then peace by the fire.	
anc	a	au	Вымачиваешь в ручье ядовитые орехи. Неделями, пока их не станет можно есть.	You soak poisonous nuts in the stream for weeks, until they are safe to eat.	
anc	j		Ночью {лежал|лежала} на спине и {считал|считала} падающие звёзды, пока не {сбился|сбилась}.	At night you lie on your back counting shooting stars until you lose count.	
anc	j		Первый тёплый день. Сидишь на солнце и ничего не делаешь.	The first warm day. You sit in the sun and do nothing.	
anc	j		Над водой стоит радуга, целиком, от края до края.	A rainbow stands over the water, whole, from end to end.	
anc	j		Соседский малыш уснул у тебя на руках. Ты не шевелишься, чтобы не разбудить.	The neighbours' baby falls asleep in your arms. You keep still so as not to wake it.	
anc	j		Пели всю ночь у огня. Утром голоса нет, а на душе легко.	You sing all night by the fire. In the morning your voice is gone and your heart is light.	
anc	j		Купаешься в реке после жаркого дня. Вода холодная до визга.	You bathe in the river after a hot day. The water is cold enough to make you shriek.	
anc	j		Ты {рассмешил|рассмешила} весь дом своей историей. Смеётся даже дед.	You make the whole house laugh with your story. Even grandfather laughs.	
anc	j		Тебе приснилась мать, молодая и ласковая. Утро светлое.	You dream of your mother, young and gentle. The morning is bright.	
anc	j		Первые спелые ягоды. Рты у всех синие.	The first ripe berries. Everyone's mouth is blue.	
anc	j	cn in me eg med af meso andes	Праздник урожая: все в чистом и с утра навеселе.	Harvest feast: everyone in clean clothes and merry from morning on.	!town
anc	j	cn in me eg med af	Последний сноп увезли с поля, и тут пошёл дождь. Успели.	The last sheaf leaves the field and then the rain starts. Just in time.	!town
anc	j	cn in me eg med af	Коза принесла тройню, и все трое на ногах.	The goat has triplets, and all three are standing.	!town
anc	j	cn	Весной всей деревней идёте к реке смывать болезни. Девушки дарят орхидеи.	In spring the whole village goes to the river to wash away sickness. The girls hand out orchids.	
anc	j	cn	Персики поспели. Ешь, пока сок не потечёт по локтям.	The peaches are ripe. You eat until the juice runs down to your elbows.	
anc	j	cn	Зимой пьёшь с братом подогретое просяное вино. Дед поёт старую песню.	In winter you drink warm millet wine with your brother. Grandfather sings an old song.	
anc	j	in	На свадьбе у соседей молодые делают семь шагов вокруг огня. Ты считаешь вслух со всеми.	At the neighbours' wedding the couple take seven steps round the fire. You count aloud with everyone.	
anc	j	in	Поспели манго. Дети сидят на дереве и швыряют косточки.	The mangoes are ripe. The children sit in the tree throwing the stones.	
anc	j	in	После жатвы быков моют в реке и красят им рога.	After the harvest the oxen are washed in the river and their horns are painted.	!town
anc	j	in	Павлины пляшут перед дождём. Значит, скоро польёт.	The peacocks dance before the rain. It will pour soon.	
anc	j	in	В деревню пришли бродячие плясуны с барабанами. Два дня никто не работает.	Wandering dancers come to the village with drums. For two days no one works.	
anc	j	me	Свежие финики прямо с пальмы. Сладко до ломоты в зубах.	Fresh dates straight off the palm. So sweet your teeth ache.	
anc	j	me	Играешь с соседом в игру на доске с двадцатью клетками. Три раза подряд {выиграл|выиграла}.	You play the game of twenty squares with a neighbour. You win three times running.	
anc	j	me	Пришёл караван с юга. На рынке пахнет благовониями, и ты дышишь, пока не прогонят.	A caravan comes from the south. The market smells of incense, and you breathe it in till you are chased off.	
anc	j	me	Сестра выходит замуж. Гуляют семь дней, и все сыты.	Your sister marries. The feast lasts seven days and everyone eats their fill.	
anc	j	eg	Праздник опьянения: пьёте до упаду ради богини. Так положено.	The Feast of Drunkenness: you drink till you drop, for the goddess. It is expected.	
anc	j	eg	Вода ушла, и на чёрной земле проступила первая зелень.	The water has gone, and the first green shows on the black earth.	
anc	j	med	Открыли молодое вино. Пьёшь его неразбавленным, как варвар.	The new wine is opened. You drink it unmixed, like a barbarian.	
anc	j	med	Поймали тунца больше человека. Его делит вся деревня.	A tuna bigger than a man is caught. The whole village shares it.	
anc	j	med	Мимо идёт свадьба с факелами: невесту везут на повозке в дом мужа.	A wedding passes by torchlight: the bride is driven on a cart to her husband's house.	
anc	j	med	Макаешь хлеб в свежее масло с солью. Больше ничего не нужно.	You dip bread in new oil with salt. Nothing more is needed.	
anc	j	med	Певец с лирой поёт про Трою. Ты знаешь конец, но всё равно слушаешь.	A singer with a lyre sings of Troy. You know the ending and listen anyway.	after:-700
anc	j	med	На празднике бьются гладиаторы. Ты {кричал|кричала} до хрипоты.	At the festival the gladiators fight. You shout yourself hoarse.	after:-250
anc	j	af	Под деревом играешь в лунки с камешками. {Обыграл|Обыграла} самого старосту.	Under the tree you play the pit-and-pebble game. You beat the headman himself.	
anc	j	af	Начались дожди. Земля пахнет так, что хочется её есть.	The rains begin. The earth smells so good you want to eat it.	!town
anc	j	af	Барабан выговорил твоё имя, и вся площадь обернулась на тебя.	The drum speaks your name, and the whole square turns to look at you.	
anc	j	af	Ешь печёный ямс с пальмовым маслом. Больше ничего не надо.	You eat roast yam with palm oil. You want nothing else.	
anc	j	af	Сосед принёс с охоты антилопу. Мясо делят на всю деревню, жир отдают детям.	A neighbour brings back an antelope from the hunt. The meat is shared round the village, the fat goes to the children.	
anc	j	meso	Праздник: дым копала, глиняные флейты, все в цветах.	A feast: copal smoke, clay flutes, everyone in flowers.	
anc	j	meso	Ешь тамаль с бобами, завёрнутый в лист. Он ещё горячий.	You eat a bean tamale wrapped in a leaf. It is still hot.	
anc	j	meso	На площадке играют в мяч. Ваши выиграли, и ты {охрип|охрипла}.	The ballgame is played in the court. Your side wins and you are hoarse.	
anc	j	meso	Колибри зависла перед самым лицом. Ты не дышишь.	A hummingbird hovers right in front of your face. You hold your breath.	
anc	j	meso	Тебе подарили бусину из зелёного камня. Дороже у тебя ничего нет.	You are given a bead of green stone. You own nothing more precious.	
anc	j	meso	Холодное утро. Мать даёт тебе горячей маисовой каши с перцем.	A cold morning. Mother gives you hot maize gruel with chilli.	
anc	j	andes	Варите картошку и мясо в земляной яме на горячих камнях. Пар пахнет на всю долину.	You cook potatoes and meat in an earth pit on hot stones. The steam smells across the valley.	!town
anc	j	andes	Играешь на склоне на тростниковой флейте. Ламы поворачивают уши.	You play a reed pipe on the slope. The llamas turn their ears.	
anc	j	andes	На свадьбе молодым дарят ламу и мешок картошки. Пляшут все.	At the wedding the couple get a llama and a sack of potatoes. Everyone dances.	
anc	j	andes	Солнце вышло после бури, и снег на вершине горит розовым.	The sun comes out after the storm, and the snow on the peak glows pink.	
anc	j	andes	В самую длинную ночь никто не спит. Ждёте солнце над горой, и оно приходит.	On the longest night nobody sleeps. You wait for the sun over the mountain, and it comes.	
anc	j	au	Гроза после засухи. Лягушки поют всю ночь.	A storm after the drought. The frogs sing all night.	
anc	j	au	Нашли личинок в корнях акации. Печёте их в золе, по вкусу как орехи.	You find grubs in the wattle roots. Roasted in the ashes, they taste of nuts.	
anc	j	au	Пляски у костра: все расписаны белым, палки стучат в такт.	Dancing by the fire: everyone painted white, sticks clapping in time.	
anc	j	au	{Нашёл|Нашла} гнездо диких пчёл. Мёд тёмный и кисловатый, все облизывают пальцы.	You find a wild bees' nest. The honey is dark and sour, and everyone licks their fingers.	
anc	j	au	Кефаль идёт косяком, сама лезет в сети. Едите, пока не надоест.	The mullet run so thick they swim into the nets. You eat until you are sick of it.	
anc	j		Хозяйка подарила тебе старое платье. Ты носишь его как новое.	The mistress gives you an old dress. You wear it as if it were new.	f r0
anc	j		Мастер при всех похвалил твою работу.	The master praises your work in front of everyone.	r2
anc	j		Дочь вышла плясать на празднике, и все смотрят только на неё.	Your daughter dances at the feast, and everyone watches only her.	kids
anc	o		Лица матери ты уже не помнишь. Помнишь только голос.	You no longer remember your mother's face. Only her voice.	
anc	o		Встаёшь раньше всех и раздуваешь огонь. Теперь это твоя работа.	You rise before everyone and blow the fire to life. That is your job now.	
anc	o		Молодые поют твою старую песню, но не так. Ты поправляешь, они смеются.	The young sing your old song, but wrong. You correct them and they laugh.	
anc	o		Тебя спрашивают о травах: какая от чего. Ты помнишь все.	They ask you about herbs: which one for what. You remember them all.	
anc	o		Ночью снится, что ты {молод|молода} и бежишь. Просыпаешься с улыбкой.	At night you dream you are young and running. You wake up smiling.	
anc	o		Уши подводят. Сначала переспрашиваешь, потом просто киваешь.	Your ears fail you. At first you ask again, then you just nod.	
anc	o		Твоя собака тоже состарилась. Лежите вдвоём на солнце.	Your dog has grown old too. The two of you lie in the sun.	
anc	o		Умер твой ровесник. На похоронах ты стоишь впереди и думаешь, кто следующий.	Someone your age dies. At the burial you stand at the front and wonder who is next.	
anc	o		Сидишь с малышами, пока все работают. Любой плач умеешь унять.	You mind the little ones while everyone works. You can hush any crying.	
anc	o		По цвету неба угадываешь, какой будет год. Молодые спорят, а потом приходят спросить.	You read the coming year from the colour of the sky. The young argue, then come to ask.	
anc	o	cn	Тебе за шестьдесят. По обычаю на работы для князя тебя больше не гонят.	You are past sixty. By custom you are no longer called up for the lord's labour.	
anc	o	cn	Сидишь у ворот на солнце и рассказываешь детям, как звали прежнего князя.	You sit at the gate in the sun telling the children the old lord's name.	
anc	o	cn	Ты сам{|а} {выбрал|выбрала} место для могилы: на склоне, лицом к реке. Гадатель одобрил.	You choose the place for your grave yourself: on the slope, facing the river. The diviner approves.	
anc	o	cn	Каждый день кланяешься табличкам предков. Скоро и твоя встанет рядом.	Every day you bow to the ancestor tablets. Soon yours will stand beside them.	
anc	o	cn	Зимой не слезаешь с тёплого места у очага. Тебе приносят туда кашу.	In winter you never leave the warm place by the hearth. They bring you porridge there.	
anc	o	in	До рассвета идёшь к реке омыться. Холодная вода будит лучше сына.	Before dawn you go to the river to bathe. Cold water wakes you better than any son.	kids
anc	o	in	Рассказываешь детям сказки про говорящих зверей. Ты их слышал{|а} от деда.	You tell the children tales of talking animals. You heard them from your grandfather.	
anc	o	in	Сидишь со стариками под деревом у храма. Спорите о дождях прошлых лет.	You sit with the old men under the tree by the shrine. You argue about the rains of years gone by.	
anc	o	in	На берегу горит погребальный костёр соседа. Ты смотришь и думаешь о своём.	A neighbour's pyre burns on the riverbank. You watch and think of your own.	
anc	o	me	Сидишь у ворот со стариками. Обсуждаете каждого, кто проходит.	You sit at the gate with the old men. You discuss everyone who goes by.	
anc	o	me	Ты помнишь прежнего царя, и он был лучше. Все старики помнят такого.	You remember the old king, and he was better. Every old person remembers one like that.	
anc	o	eg	Носишь хлеб и пиво на могилу родителей. Скоро кто-то будет носить тебе.	You take bread and beer to your parents' tomb. Soon someone will bring them to you.	
anc	o	med	Сидишь на пристани и чинишь сети. Пальцы ещё помнят.	You sit on the quay mending nets. Your fingers still remember.	
anc	o	med	Рассказываешь молодым про большую войну. С каждым годом врагов в рассказе больше.	You tell the young about the great war. Every year there are more enemies in the story.	
anc	o	med	Разбавляешь вино всё меньше. Говоришь, что для здоровья.	You water your wine less and less. You say it is for your health.	
anc	o	af	Ты помнишь имена предков рода до девятого колена. Молодые просят повторить.	You know the names of your forebears back nine generations. The young ask you to say them again.	
anc	o	af	Сидишь в тени у хижины и плетёшь циновки. Мимо идёт вся деревня, и каждый здоровается.	You sit in the shade by the hut weaving mats. The whole village passes, and everyone greets you.	
anc	o	af	Показываешь молодым, где лежат предки: у этого баобаба, у того камня.	You show the young where the ancestors lie: by this baobab, by that stone.	
anc	o	af	Ты помнишь, где был лес. Теперь там поля до самого горизонта.	You remember where the forest was. Now there are fields to the horizon.	!town
anc	o	meso	Лущишь маис на пороге. Початков больше, чем сил.	You shell maize on the doorstep. There are more cobs than strength.	!town
anc	o	meso	На твоих глазах в городе выросла пирамида. Теперь её уже надстраивают.	You saw the pyramid in town go up. Now they are already building on top of it.	
anc	o	meso	Смотришь, как молодая соседка мелет маис, и поправляешь ей руку.	You watch a young neighbour grind maize and correct her hand.	
anc	o	meso	Просишь, чтобы после смерти тебе положили в рот зелёную бусину.	You ask for a green bead to be put in your mouth when you die.	
anc	o	andes	Ты знаешь, какие камни на склоне священные. Молодые уже путают.	You know which stones on the slope are holy. The young mix them up already.	
anc	o	andes	Жуёшь коку с утра до вечера, и ноги ещё носят тебя в гору.	You chew coca from morning to night, and your legs still carry you uphill.	
anc	o	andes	Ткёшь себе погребальный плащ. Узор выбираешь долго.	You weave your burial cloak. You take a long time choosing the pattern.	
anc	o	andes	Помнишь год, когда снег лёг в разгар лета. Молодые не верят.	You remember the year snow fell in midsummer. The young don't believe you.	
anc	o	au	Теперь ты хранишь песни своей земли. Их доверили тебе, когда умер прежний хранитель.	Now you keep the songs of your country. They came to you when the old keeper died.	!town
anc	o	au	Сидишь в тени и правишь каменные лезвия. Молодые несут тебе лучшее мясо.	You sit in the shade sharpening stone blades. The young bring you the best meat.	
anc	o	au	Идти к дальнему источнику ты уже не можешь. Тебя несут на руках.	You can no longer walk to the far spring. They carry you.	
anc	o	au	Учишь девушек, какие травы лечат, а какие убивают.	You teach the girls which plants heal and which kill.	
anc	o	au	Показываешь молодым тёмного эму в Млечном Пути. Когда он встаёт так, пора искать яйца.	You show the young the dark emu in the Milky Way. When it stands like that, it is time to look for eggs.	
anc	o	au	Ты помнишь берег, где {родился|родилась}. Его давно забрало море.	You remember the shore where you were born. The sea took it long ago.	before:-4000 +sea
anc	o		Тебя зовут на роды в каждый дом. Через твои руки прошла половина деревни.	They call you to every birth. Half the village has passed through your hands.	f
anc	o		Ученик работает уже лучше тебя. Ты делаешь вид, что не замечаешь.	Your apprentice works better than you now. You pretend not to notice.	r2
anc	o		Ты слишком {стар|стара} для поля. Хозяин поставил тебя сторожить гусей.	You are too old for the fields. The master sets you to mind the geese.	r0 !town
anc	x		Ночью река вышла из берегов. Всё, что было в доме, унесло.	The river bursts its banks in the night. Everything in the house is swept away.	
anc	x		Чужаки напали ночью и увели людей.	Strangers attack in the night and carry people off.	
anc	x		Затряслась земля. Дом рухнул, а в нём была мать.	The earth shakes. The house falls in, and mother was inside.	!town
anc	x		Ты тяжело {заболел|заболела} и неделями не встаёшь. Всё хозяйство валится из рук родных.	You fall gravely ill and cannot get up for weeks. Everything slips from your family's hands.	
anc	x		Ночью огонь перекинулся с соседской крыши. К утру от дома одни угли.	In the night fire leaps from the neighbour's roof. By morning your house is just embers.	
anc	x	cn in me eg med af meso andes	Холодное лето: зерно не вызрело.	A cold summer: the grain does not ripen.	
anc	x	cn in me eg med af meso andes	Ливень смыл поле вместе с семенами. Сеять больше нечем.	A downpour washes away the field and the seed with it. There is nothing left to sow.	!town
anc	x	cn in me eg af	Набег кочевников: угнали весь скот.	Nomads raid: all the cattle are driven off.	!town
anc	x	cn	Князь собирает войско. Из вашего дома уходят все мужчины, и никто не знает, на сколько.	The lord raises an army. Every man in your house goes, and no one knows for how long.	
anc	x	cn	Зима без снега, весна без дождя. Просо не взошло.	A winter without snow, a spring without rain. The millet does not come up.	!town
anc	x	in	Тигр повадился в деревню. Унёс уже двоих.	A tiger has taken to coming into the village. It has carried off two already.	
anc	x	in	Дикие слоны за одну ночь вытоптали всё поле.	Wild elephants trample the whole field in one night.	!town
anc	x	me	Канал занесло, а чинить некому: всех угнали на войну. Поля сохнут.	The canal silts up and there is no one to clear it: all are taken for the war. The fields dry out.	!town
anc	x	med	Враги вырубили ваши оливы. Новые дадут плод, когда ты будешь {стар|стара}.	The enemy cuts down your olive trees. New ones will bear when you are old.	!town
anc	x	med	Шторм разбил лодки у берега. В деревне три новые вдовы.	A storm smashes the boats on the shore. Three new widows in the village.	
anc	x	med	Пришли римляне. Город, что сопротивлялся, продали в рабство целиком.	The Romans come. The town that resisted is sold into slavery, every soul.	after:-250
anc	x	af	Дожди начались и сразу кончились. Просо засохло по колено.	The rains start and stop at once. The millet withers knee-high.	!town
anc	x	af	Река поднялась на месяц раньше. Просо ушло под воду.	The river rises a month early. The millet goes under water.	!town
anc	x	meso	Проснулся вулкан. Пепел засыпал поля по колено.	The volcano wakes. Ash buries the fields knee-deep.	!town
anc	x	meso	Буря с моря сорвала крыши и положила маис.	A storm from the sea tears off the roofs and flattens the maize.	+sea
anc	x	meso	Война с соседним городом. Пленных ведут на жертвенник, и твой брат среди них.	War with the next city. The captives are led to the altar, and your brother is among them.	
anc	x	andes	С гор сошёл сель. Деревня внизу исчезла за одну ночь.	A mudslide comes down the mountain. The village below is gone in a night.	
anc	x	andes	Мор среди лам: стадо лежит в загоне и не встаёт.	Plague among the llamas: the herd lies in the pen and won't get up.	
anc	x	andes	Море у берега стало тёплым. Рыба ушла, а ливни смывают дома.	The sea by the shore turns warm. The fish leave, and downpours wash the houses away.	+sea
anc	x	au	Самая долгая засуха на памяти стариков. Ямы с водой в песке пусты.	The longest drought the old people remember. The water holes in the sand are empty.	
anc	x	au	Циклон с моря. Деревья лежат, стоянку смыло.	A cyclone from the sea. The trees are down and the camp is washed away.	+sea
anc	x	au	Чужие пришли на вашу землю с копьями. Началась кровная месть.	Strangers come onto your land with spears. A blood feud begins.	!town
anc	c		Мать перестала кормить тебя грудью: родился младший.	Your mother stops nursing you: a younger one has been born.	small
anc	c		Ты {сделал|сделала} первые шаги — прямо к огню. Мать успела.	You take your first steps, straight towards the fire. Your mother is quicker.	small
anc	c		Твоё первое слово — «дай».	Your first word is "give".	small
anc	c		Спишь между матерью и старшей сестрой. Там теплее всего.	You sleep between your mother and your older sister. It is the warmest place.	small
anc	c		Тебя носят за спиной, пока мать работает. Мир ты видишь через её плечо.	You are carried on your mother's back while she works. You see the world over her shoulder.	small
anc	c		Тебя чуть не унесла лихорадка. Бабка просидела рядом три ночи.	A fever nearly takes you. Your grandmother sits by you for three nights.	small
anc	c		Ты {съел|съела} горсть земли и {остался|осталась} очень {доволен|довольна}.	You eat a handful of earth and are very pleased with yourself.	small
anc	c		Боишься петуха. Он ходит за тобой по всему двору.	You are afraid of the rooster. It follows you all round the yard.	small
anc	c		Старшие дети таскают тебя за собой, как куклу.	The older children drag you about like a doll.	small
anc	c		Засыпаешь под песню, которую мать поёт без слов.	You fall asleep to a song your mother hums without words.	small
anc	c		Ты {упал|упала} и {рассёк|рассекла} лоб. Шрам останется на всю жизнь.	You fall and cut your forehead. The scar will stay for life.	small
anc	c		Плачешь, когда отец уходит, и смеёшься, когда он возвращается.	You cry when your father leaves and laugh when he comes back.	small
anc	c		Таскаешь собаку за хвост, а она терпит.	You pull the dog's tail, and it puts up with it.	small
anc	c		Тебе дали первую ложку. Половина каши на полу.	You are given your first spoon. Half the porridge ends up on the floor.	small
anc	c		Ты {спрятался|спряталась} под лавку, и тебя полдня искали всей семьёй.	You hide under the bench, and the whole family searches for you half the day.	small
anc	c		Ты всё время тянешь в рот блестящее. Мать вынимает и смеётся.	You keep putting shiny things in your mouth. Your mother takes them out and laughs.	small
anc	c		Сидишь у порога и встречаешь каждого, кто входит, своим словом.	You sit by the door and greet everyone who comes in with your own word.	small
anc	c		Тебе повесили на шею оберег от злых духов. Ты всё время его грызёшь.	A charm against evil spirits is hung round your neck. You chew it all the time.	small
`,he=`# group	kind	tags	ru	en	need
# --- childhood
early	c		На ярмарке {увидел|увидела} первую печатную картинку — лубок.	At the fair you see your first printed picture.	
early	c		Оспа прошла по деревне. На лице остались метки.	Smallpox goes through the village. It leaves marks on your face.	
early	c		Отец привёз из города кусок сахара. Делили на всех.	Father brings a lump of sugar from town. It is shared among everyone.	
early	c		{Научился|Научилась} плавать: брат бросил тебя в реку и хохотал.	You learn to swim: your brother throws you in the river and laughs.	
early	c		Первые сапоги. Носишь их в руках, чтобы не стоптать.	Your first boots. You carry them in your hands so as not to wear them out.	
early	c	jp	Бабушка учит тебя складывать журавлей из бумаги.	Grandmother teaches you to fold paper cranes.	
early	c	in	На Холи все обсыпают друг друга цветным порошком.	At Holi everyone throws coloured powder at each other.	
early	c	jp	На Обон {пустил|пустила} по реке бумажный фонарик — за деда.	At Obon you float a paper lantern down the river, for grandfather.	
early	c	cn	Мать бреет тебе лоб и заплетает косу. Так велено всем мужчинам.	Mother shaves your forehead and braids your queue. Every man must wear it so.	m
early	c	cn	Мать бинтует тебе ноги. Ночью плачешь, днём заново учишься ходить.	Mother binds your feet. At night you cry; by day you learn to walk again.	f
early	c	ru	Пасёшь барских гусей. За каждого пропавшего — розги.	You mind the master's geese. For every one lost, the birch.	r0
early	c	ru	На Масленицу {катался|каталась} с ледяной горы на рогоже.	At Shrovetide you slide down the ice hill on a bast mat.	
early	c	ru	По субботам баня. Мать хлещет тебя веником до красноты.	On Saturdays the bathhouse. Mother whisks you with birch twigs till you're red.	
early	c	ru de	Зимой спите все у печи, вместе с телёнком.	In winter you all sleep by the stove, the calf with you.	
early	c	en	Гоняешь ворон с пашни трещоткой. Пенни в день.	You scare crows off the field with a rattle. A penny a day.	
early	c	en	В воскресной школе учишь буквы по Библии.	At Sunday school you learn your letters from the Bible.	
early	c	af	Мать толчёт просо, а ты спишь у неё на спине.	Mother pounds millet while you sleep on her back.	
early	c	af	Вечером старик рассказывает про паука Ананси. Все хохочут.	In the evening an old man tells stories of Anansi the spider. Everyone roars.	
early	c	us latam	Ты ещё мал{|а}, а уже носишь воду в поле. Мать работает там же и не поднимает головы.	You are still small, but you carry water to the field. Mother works there and never looks up.	r0
early	c	latam	Падре в миссии учит детей молитве на чужом языке.	The padre at the mission teaches the children a prayer in a foreign tongue.	
early	c	in	Сидишь у отцовского станка и подаёшь нитки.	You sit by your father's loom and hand him the threads.	r2
early	c	in	Бабушка рассказывает про Кришну, пока ты не уснёшь.	Grandmother tells of Krishna until you fall asleep.	
early	c	au	Бабушка показывает, где под корой спят жирные личинки.	Grandmother shows you where the fat grubs sleep under the bark.	
early	c	au	Учишься читать следы на песке: где прошёл кенгуру, где ящерица.	You learn to read tracks in the sand: here a kangaroo, there a lizard.	
early	c	me	В мектебе сидишь на полу и твердишь суры за учителем.	At the mosque school you sit on the floor and repeat the suras after the teacher.	m
early	c	fr de en ru	Гувернантка учит тебя делать реверанс. Ты падаешь, все смеются.	The governess teaches you to curtsy. You fall over; everyone laughs.	f r3
early	c	sea cn	Отец берёт тебя на рисовое поле ловить лягушек и мальков.	Father takes you to the rice field to catch frogs and little fish.	
early	c	jp	В школе при храме учишься писать кистью. Тушь на носу до вечера.	At the temple school you learn to write with a brush. Ink on your nose till evening.	
early	c	us	В бревенчатой школе один учитель на всех. Буквы учишь по букварю.	The log schoolhouse has one teacher for everyone. You learn your letters from a primer.	
early	c	fr de en it ru	{Нашёл|Нашла} на пашне старую монету с чужим королём.	You find an old coin in the furrow, with a foreign king on it.	
early	c		Младший брат умер на втором году. Мать не плачет при людях.	Your little brother dies in his second year. Mother does not cry in front of people.	
early	c		Пасёшь овец. {Вырезал|Вырезала} себе дудку из ивы.	You mind the sheep. You cut yourself a willow pipe.	
early	c	fr de en it ru us latam	Дед вырезал тебе деревянную лошадку.	Grandfather carves you a wooden horse.	
# --- youth
early	y	fr de en it ru	Привезли картофель — странный новый корень.	Potatoes arrive: a strange new root.	
early	y	fr de en it ru latam us	При церкви открыли школу — на одну зиму.	A school opens at the church, for one winter.	
early	y	ru	Соседского парня забрали в рекруты. На двадцать пять лет.	The neighbour's son is taken as a recruit. For twenty-five years.	
early	y		Впервые {увидел|увидела} часы. Тикают, как живые.	You see a clock for the first time. It ticks like something alive.	
early	y	fr de en it ru	Почтовая карета прошла через село. Все выбежали смотреть.	The mail coach passes through the village. Everyone runs out to look.	
early	y	ru	Рекрутский набор. Сход тянет жребий, кому идти.	The recruit levy. The commune draws lots for who must go.	m
early	y	ru	Девичник. Подруги расплетают тебе косу и голосят.	The maiden's evening. Your friends unbraid your plait and wail.	f
early	y	ru	{Выучился|Выучилась} грамоте по Псалтыри у дьячка.	The sexton teaches you to read from the Psalter.	
early	y	cn	Едешь на экзамены в главный город провинции. Три дня в каменной келье, с кистью и рисом.	You travel to the provincial capital for the examinations. Three days in a stone cell with a brush and rice.	m lit
early	y	jp	Тебя отдали в ученики к мастеру в Эдо. Первый год только метёшь и носишь воду.	You are apprenticed to a master in Edo. The first year you only sweep and carry water.	
early	y	jp	В деревню пришла бродячая труппа кабуки. Неделю ни о чём другом не говорят.	A travelling kabuki troupe comes to the village. For a week nobody talks of anything else.	
early	y	en	На ярмарке {нанялся|нанялась} в работники на год. Хозяин дал шиллинг задатка.	At the hiring fair you take service for a year. The master gives you a shilling to seal it.	
early	y	fr it	Сбор винограда. Ноги лиловые по колено.	The grape harvest. Your legs are purple to the knee.	!town
early	y	de	Уходишь подмастерьем странствовать. В котомке книжка с печатями цехов.	You set off wandering as a journeyman. In your pack is a book of guild stamps.	m r2 +town
early	y	us	Семья уходит на запад, за горы. Повозка, корова и мешок семян.	Your family goes west over the mountains. A wagon, a cow and a sack of seed.	!town
early	y	latam	Тебя гонят на серебряный рудник. Солнце видишь по воскресеньям.	You are sent down the silver mine. You see the sun on Sundays.	m r0
early	y	af	Тебе режут на щеках знаки рода. Нельзя ни крикнуть, ни дёрнуться.	They cut your clan marks on your cheeks. You must not cry out or flinch.	
early	y	in	Свадьбу сыграли ещё в детстве. Теперь тебя везут в дом мужа.	You were married as a child. Now they take you to your husband's house.	f !monk
early	y	me	Отец впервые взял тебя в кофейню. Мужчины спорят о цене шёлка.	Father takes you to the coffee house for the first time. The men argue over the price of silk.	m
early	y	au	Старики уводят тебя в буш. Вернёшься мужчиной.	The elders take you into the bush. You will come back a man.	m
early	y	sea	На один сезон дождей тебя отдали в монастырь. Бреют голову, учат сутры.	For one rainy season you are sent to the monastery. They shave your head and teach you the sutras.	m
early	y		Отец отдал тебя в услужение в город. Спишь на кухне под столом.	Father puts you into service in town. You sleep under the kitchen table.	town
early	y		Первая любовь. Проходишь мимо её дома по три раза на дню.	First love. You walk past her house three times a day.	m
early	y		Первая любовь. Он прошёл мимо колодца и даже не обернулся.	First love. He walks past the well and doesn't even turn.	f
# --- grown-up years
early	a		Приехал землемер. Делят землю.	The surveyor arrives. The land is divided up.	!town
early	a		Неурожай: хлеб подорожал втрое.	A bad harvest: bread costs three times as much.	!town
early	a	ru	Письмо от брата из города. Читал дьячок, а ты {просил|просила} ещё и ещё.	A letter from your brother in town. The sexton reads it, and you ask for it again and again.	
early	a		Перекрыли крышу. Впервые за много лет не течёт.	You put a new roof on. For the first time in years it doesn't leak.	
early	a	ru	Барин проиграл деревню в карты. Новый барин строже.	The master loses the village at cards. The new master is harder.	r0
early	a		Ребёнку сделали прививку от оспы — первому в селе.	Your child is vaccinated against smallpox, the first in the village.	kids
early	a	ru	Три дня в неделю на барщине, остальные — на своей полосе.	Three days a week on the master's land, the rest on your own strip.	r0 !town
early	a	ru	Староста собирает оброк. Чтобы набрать, продаёшь холст.	The steward collects the quitrent. You sell your linen to make it up.	r0 !town
early	a	ru	Сход переделил полосы. Тебе досталась у болота.	The commune redivides the strips. Yours is down by the marsh.	
early	a	ru	Барин отпустил на заработки в Москву. Возишь кирпич, половину шлёшь на оброк.	The master lets you go to Moscow to earn. You haul bricks and send half home for the quitrent.	m r0 !town
early	a	ru	Барыня взяла тебя в кормилицы. Твоего ребёнка свекровь кормит жёваным хлебом.	The mistress takes you as a wet nurse. Your mother-in-law feeds your own baby chewed bread.	f r0 kids
early	a	ru	{Ходил|Ходила} пешком на богомолье, за двести вёрст.	You walk two hundred versts on pilgrimage.	
early	a	cn sea	Сажаешь рис по колено в воде. Спина не разгибается до темноты.	You plant rice knee-deep in water. Your back won't straighten till dark.	
early	a	cn	Сплавляешь фарфор баржами в Кантон. Каждую чашку перекладывают соломой.	You take porcelain by barge down to Canton. Every cup is packed in straw.	r2
early	a	cn	Чайный лист собирают с рассвета. Пальцы зелёные до самой зимы.	Tea is picked from dawn. Your fingers stay green till winter.	
early	a	jp	Чиновник мерит урожай. Рисовый налог — сорок мешков из ста.	The official measures the harvest. The rice tax is forty bales in a hundred.	!town
early	a	jp	Твоя лавка в Эдо сгорала дважды. Строишь в третий раз.	Your shop in Edo has burned down twice. You build it a third time.	r2
early	a	in	Приказчики Компании берут ткань по своей цене. Торговаться не дают.	The Company's agents take your cloth at their own price. They won't let you haggle.	r2
early	a	in	Сборщик заминдара пришёл за своей долей. Твоя теперь меньше.	The zamindar's collector comes for his share. Yours is now the smaller one.	
early	a	af	На рынке меняешь орехи кола на соль.	At the market you trade kola nuts for salt.	
early	a	us	С рассвета до темноты в табаке. Надсмотрщик считает листья.	Dawn to dark in the tobacco. The overseer counts the leaves.	r0
early	a	us latam	Воскресенье — ваше. Копаешь свой огород и поёшь.	Sunday is yours. You dig your own garden and sing.	r0 !town
early	a	us	Сход в молитвенном доме: решают, где ставить мельницу.	A meeting in the meeting house: where to put the mill.	
early	a	us	Расчищаешь лес под поле. Пни горят всю осень.	You clear the forest for a field. The stumps burn all autumn.	m !town
early	a	latam	На гасиенде записали за тобой долг. Он растёт быстрее, чем ты работаешь.	At the hacienda they write down a debt against you. It grows faster than you can work.	
early	a	latam	Ты метис. В церковной книге тебя записали не так, как отца.	You are a mestizo. The parish book writes you down differently from your father.	
early	a	en	Мировой судья оштрафовал тебя за силок на зайца.	The magistrate fines you for a hare snare.	m
early	a	en	Приход даёт пособие хлебом. Брать стыдно, не брать — голодно.	The parish gives relief in bread. It is shameful to take it and hungry not to.	
early	a	en	Общинный луг огородили. Корову теперь пасти негде.	The common is fenced off. There is nowhere to graze the cow now.	!town
early	a	en de fr	Прядёшь шерсть на скупщика. Колесо гудит до полуночи.	You spin wool for the clothier. The wheel hums till midnight.	f
early	a	fr	Соль покупаешь только казённую, по казённой цене.	You may buy only the king's salt, at the king's price.	
early	a	fr de en it	Десятину сдали снопами. Священник пересчитал дважды.	The tithe is paid in sheaves. The priest counts them twice.	
early	a	it	Хозяин забрал половину оливок. Так заведено испокон.	The landlord takes half the olives. It has always been so.	!town
early	a	de en	В город пришли вербовщики с барабаном. Пьяных записывают в солдаты.	Recruiters come to town with a drum. They sign up the drunk ones.	m
early	a	me	Сборщик подати пришёл с янычарами. Отдали последнего барана.	The tax collector comes with janissaries. You give up your last ram.	
early	a	me	Твой караван три недели шёл до Алеппо. Привёз шёлк и новости.	Your caravan takes three weeks to Aleppo. It brings back silk and news.	r2
early	a	sea	Голландцы велели сажать кофе вместо риса.	The Dutch order you to plant coffee instead of rice.	
early	a	au	Ходите по своей земле от воды к воде, как ходили деды.	You walk your country from water to water, as your grandfathers did.	
early	a	au	На берегу поселились белые. Рубят деревья у вашей воды.	White people have settled on the shore. They cut the trees by your water.	
early	a		Пишешь письма в столицу. Ответ идёт полгода.	You write letters to the capital. A reply takes half a year.	r3 lit
early	a	fr de en it ru latam	В твоём приходе триста душ. Всех помнишь по имени.	Your parish has three hundred souls. You know them all by name.	m r3
early	a		В мастерской трое учеников. Младший таскает хлеб, ты делаешь вид, что не видишь.	Three apprentices in your workshop. The youngest steals bread; you pretend not to see.	r2
early	a		Старший сын ушёл в город и не пишет.	Your eldest son has gone to town and doesn't write.	kids grown
early	a		Свекровь отдала тебе ключи от кладовой. Теперь ты хозяйка.	Your mother-in-law hands you the larder keys. Now you are mistress of the house.	f married
early	a		Ночь просидел{|а} с больной коровой. К утру она встала.	You sit up all night with a sick cow. By morning she is on her feet.	!town
# --- small joys
early	j		Купили медный котёл. Соседи приходили смотреть.	You buy a copper pot. The neighbours come to look.	
early	j		Первый раз в жизни {пил|пила} чай. Горько и весело.	For the first time in your life you drink tea. Bitter and merry.	
early	j		Кукольник на площади. Смеялись так, что болели щёки.	A puppeteer in the square. You laugh till your cheeks ache.	
early	j	fr de en it ru	Праздник: на столе белый хлеб.	A feast day: white bread on the table.	
early	j		Дети нашли в поле ёжика и неделю кормили его молоком.	The children find a hedgehog in the field and feed it milk for a week.	!town
early	j		Вечером под окнами пели — сватались к соседской дочери.	In the evening they sing under the windows, courting the neighbour's daughter.	
early	j	ru	На Троицу завивали берёзки. Ты {пел|пела} громче всех.	At Trinity you braid the birch branches. You sing loudest of all.	
early	j	jp	Всей улицей сидите под цветущей сакурой. Сакэ, рисовые колобки.	The whole street sits under the cherry blossom. Sake and rice balls.	
early	j	cn	Новый год: красная бумага на дверях, хлопушки, пельмени.	New Year: red paper on the doors, firecrackers, dumplings.	
early	j	en	Чай с сахаром по воскресеньям. Пусть и спитой.	Tea with sugar on Sundays, even if the leaves are used twice.	
early	j	in	Дивали: на каждом окне масляный светильник.	Diwali: an oil lamp in every window.	
early	j	me	Полдня в бане с подругами. Дыни, сплетни, хна.	Half a day at the bathhouse with your friends. Melons, gossip, henna.	f
early	j	latam	Праздник святого покровителя: процессия, ракеты, бой быков.	The patron saint's fiesta: a procession, rockets, a bullfight.	
early	j	us	Всем миром ставили соседу амбар. Вечером плясали на новом полу.	The whole neighbourhood raises a barn. In the evening you dance on the new floor.	!town
early	j	af	Собрали ямс. Пляшете под барабаны до утра.	The yams are in. You dance to the drums till morning.	
early	j	sea	Театр теней до рассвета. Ты знаешь все слова наизусть.	A shadow play till dawn. You know every word by heart.	
early	j	au	Пошла черепаха. Вечером жарите мясо на берегу, все сыты.	The turtles are running. In the evening you roast meat on the shore and everyone is full.	+sea
early	j	fr it	Молодое вино разлили по бочкам. Пробуешь прямо из чана.	The new wine goes into the casks. You taste it straight from the vat.	
early	j		Младший сделал первые шаги — прямо к тебе.	Your youngest takes their first steps, straight to you.	kids
early	j		Корова отелилась двойней.	The cow has twin calves.	!town
early	j	ru de	Соседка принесла лукошко первой земляники.	The neighbour brings a basket of the first wild strawberries.	!town
early	j		Вся деревня гуляла на свадьбе. Три дня ели и плясали.	The whole village at a wedding. Three days of eating and dancing.	
early	j		{Купил|Купила} у разносчика книжку. Читаешь её всю зиму.	You buy a book from a pedlar. You read it all winter.	lit
early	j		Тёплый дождь после засухи. Дети бегают под ним голышом.	Warm rain after the drought. The children run about in it naked.	
early	j		Муж вернулся с ярмарки и привёз тебе платок.	Your husband comes back from the fair with a shawl for you.	f married !widowed
early	j		Жена ни с того ни с сего испекла пирог.	Your wife bakes a pie for no reason at all.	m married !widowed
# --- old age
early	o	fr de en it ru us	Внук читает тебе вслух газету. Половину слов ты не понимаешь.	A grandson reads you the newspaper aloud. You understand half the words.	kids grand
early	o		Ты пережил{|а} всех своих ровесников.	You outlive everyone your age.	
early	o		Сидишь на лавке у ворот. Мимо идёт вся улица, и все здороваются.	You sit on the bench by the gate. The whole street goes by, and everyone greets you.	
early	o		Дети просят рассказать о большой войне. Ты рассказываешь о хлебе.	The children ask about the great war. You tell them about bread.	
early	o		Очки! Ты снова видишь иголку.	Spectacles! You can see a needle again.	
early	o	ru	Хозяйство отдал{|а} сыну. Теперь твоё место на печи.	You hand the farm to your son. Your place now is on the stove.	kids
early	o	ru	Барин дал тебе вольную, когда ты уже не можешь работать.	The master sets you free once you can no longer work.	r0
early	o	cn	На Новый год внуки кланяются тебе до земли.	At New Year the grandchildren bow to the ground before you.	kids !town grand
early	o	cn	Сыновья заранее купили тебе гроб. Ты им гордишься.	Your sons have bought your coffin in advance. You are proud of it.	kids
early	o	jp	{Отошёл|Отошла} от дел и {взял|взяла} новое имя. Пишешь хокку.	You retire from the house and take a new name. You write haiku.	lit
early	o	me	Сидишь во дворе мечети, пока не позовут к молитве.	You sit in the mosque courtyard until the call to prayer.	m
early	o	af	Ты старейшина. Споры о земле теперь решают под твоим деревом.	You are an elder now. Land quarrels are settled under your tree.	m
early	o	au	Поёшь детям песни своей земли, чтобы они не заблудились.	You sing the children the songs of your country so they will not get lost.	!town
early	o	en	Впереди только работный дом. Говорят, мужей и жён там селят порознь.	Only the workhouse is left. They say husbands and wives are kept apart there.	married
early	o	us au	Ты помнишь, когда здесь был лес и ни одной дороги.	You remember when this was all forest and not a single road.	
early	o	latam	Каждое утро ходишь к мессе. Падре моложе твоего внука.	Every morning you go to mass. The padre is younger than your grandson.	kids grand
early	o		Переписываешь завещание каждую весну.	You rewrite your will every spring.	r3 lit
early	o		Зубов не осталось. Хлеб размачиваешь в молоке.	No teeth left. You soak your bread in milk.	
early	o		Учишь внучку прясть. Она уже ловчее тебя.	You teach your granddaughter to spin. She is already quicker than you.	f kids grand
early	o		Внуки дёргают тебя за бороду, а ты притворяешься, что спишь.	The grandchildren tug at your beard while you pretend to sleep.	m kids grand
early	o		Тебя зовут, когда надо вспомнить, где шла старая межа.	They call for you when someone needs to remember where the old boundary ran.	!town
early	o		{Овдовел|Овдовела}. По привычке ставишь на стол вторую миску.	Widowed. Out of habit you still put out a second bowl.	married +widowed
early	o		На кладбище ходишь чаще, чем в гости.	You go to the graveyard more often than to the neighbours.	
# --- hard times
early	x		Голод.	Famine.	
early	x		Война с соседней державой.	War with the neighbouring power.	
early	x		Холера. Колодцы заколотили.	Cholera. The wells are boarded up.	
early	x		Бунт, а потом каратели.	A revolt, and then the soldiers who put it down.	
early	x		Пожар. Выгорела вся улица.	Fire. The whole street burns down.	
early	x		Мор на скотину. За неделю пало всё стадо.	Cattle plague. In a week the whole herd is dead.	!town
early	x	af	Ночью в соседнюю деревню пришли ловцы людей. Утром там пусто.	In the night the slave raiders come to the next village. By morning it is empty.	!town
early	x	us latam	Твоих детей продали в другое имение. Ты знаешь только его название.	Your children are sold to another estate. You know only its name.	r0 kids
early	x	ru	Новый управляющий. Порет всех и за всё.	A new steward. He flogs everyone for everything.	r0
early	x	jp	Третий год неурожай. Едите солому и коренья.	The third failed harvest. You eat straw and roots.	!town
early	x	cn	Река прорвала дамбы. Поля под водой до самого горизонта.	The river breaks the dikes. The fields are under water to the horizon.	!town
early	x	en	Общинную землю огородили. Остаётся идти в город.	The common land is enclosed. There is nothing left but to go to town.	!town
early	x	au	Пришла болезнь белых людей. Хоронить некому.	The white men's sickness comes. There is no one left to bury the dead.	
# --- childhood (wave 2)
early	c		{Нашёл|Нашла} в траве гнездо с пёстрыми яйцами. Никому не {сказал|сказала}.	You find a nest of speckled eggs in the grass. You tell no one.	
early	c		Тебя ужалила оса. Бабушка приложила к щеке мокрую землю.	A wasp stings you. Grandmother presses wet earth to your cheek.	
early	c		Ночью гроза. Вся семья сидит без сна и слушает.	A storm in the night. The whole family sits awake and listens.	
early	c		{Заблудился|Заблудилась} и до темноты {сидел|сидела} под деревом. Нашёл тебя дядя.	You get lost and sit under a tree till dark. Your uncle finds you.	
early	c		Мать всегда поёт одну и ту же песню. Слов ты не знаешь, а мотив помнишь всю жизнь.	Mother always sings the same song. You never learn the words, but you keep the tune all your life.	
early	c		Старшая сестра носит тебя на бедре, хотя сама чуть выше тебя.	Your big sister carries you on her hip, though she is barely taller than you.	
early	c		Упал{|а} с дерева и сломал{|а} руку. Срослась криво.	You fall out of a tree and break your arm. It mends crooked.	
early	c	cn	Дед учит тебя считать на счётах. Костяшки стучат, как дождь.	Grandfather teaches you to count on the abacus. The beads click like rain.	
early	c	cn sea	Пасёшь буйвола, сидя у него на спине. Он идёт куда хочет.	You herd the buffalo sitting on its back. It goes where it pleases.	
early	c	sea	Дом стоит на сваях. Под полом хрюкают свиньи и ходят куры.	Your house stands on stilts. Under the floor the pigs grunt and the hens wander.	
early	c	me	Бабушка рассказывает про джиннов. Теперь страшно ходить за водой.	Grandmother tells of the jinn. Now you are afraid to fetch water.	
early	c	me	Носишь отцу в лавку горячие лепёшки, завёрнутые в платок.	You carry hot flatbread wrapped in a cloth to your father's shop.	
early	c	me	В Рамадан тебе разрешили поститься полдня. Ждёшь пушки на закате.	In Ramadan you are allowed to fast for half a day. You wait for the sunset cannon.	
early	c	in	Каждое утро мать рисует у порога узор рисовой мукой. К полудню его растаскивают муравьи.	Every morning mother draws a pattern of rice flour at the door. By noon the ants have carried it off.	
early	c	af	Стоишь на помосте посреди проса и гоняешь птиц пращой.	You stand on a platform in the millet and drive off the birds with a sling.	
early	c	latam	Мать печёт лепёшки на глиняном круге. Первая — тебе.	Mother cooks tortillas on the clay griddle. The first one is yours.	
early	c	au	Ныряешь с матерью за ракушками. Сетка полная, губы синие.	You dive for shellfish with your mother. The net is full, your lips are blue.	
early	c	us	Отец принёс с охоты оленя. Шкуру растянули на стене сарая.	Father brings a deer home from the hunt. The hide is stretched on the barn wall.	
early	c	ru	Старшие взяли тебя в ночное. Кони, костёр и страшные рассказы до утра.	The older boys take you to graze the horses at night. Horses, a fire and frightening stories till dawn.	m
early	c	fr de en it ru	Звонарь пустил тебя на колокольню. Оттуда видно три деревни.	The bell-ringer lets you up the bell tower. From there you can see three villages.	
early	c	jp	На Новый год запускаешь с братьями змея. На нём нарисован воин.	At New Year you fly a kite with your brothers. A warrior is painted on it.	
# --- youth (wave 2)
early	y		Впервые {сказал|сказала} отцу «нет». Он промолчал.	For the first time you say no to your father. He says nothing.	
early	y		{Подрался|Подралась} с {парнем|девчонкой} из соседней деревни. Потом всю жизнь дружили.	You fight a {boy|girl} from the next village. You stay friends for life.	
early	y		Тебе отдали отцовский нож. Носишь его на поясе и то и дело трогаешь.	You are given your father's knife. You wear it at your belt and keep touching it.	
early	y		Ты уже выше матери. Она смеётся и смотрит на тебя снизу вверх.	You are taller than your mother now. She laughs and looks up at you.	
early	y		Впервые взрослые позвали тебя в круг — плясать.	For the first time the grown-ups call you into the dance.	
early	y		Впервые идёшь один{|а} к дальней родне. Три дня пути, и всё сам{|а}.	For the first time you walk alone to far-off kin. Three days on the road, all on your own.	
early	y		Всю ночь {пролежал|пролежала} без сна под звёздами. {Думал|Думала}, какой будет твоя жизнь.	You lie awake all night under the stars, wondering what your life will be.	
early	y		Взрослые замолкают, когда ты входишь. Значит, говорят о твоей свадьбе.	The grown-ups fall silent when you come in. So they are talking about your wedding.	!monk
early	y	cn	Пришла сваха с красной карточкой. На ней восемь знаков твоего рождения.	The matchmaker comes with a red card. On it are the eight characters of your birth.	
early	y	cn	Тебя отдали в ученики к лекарю. Толчёшь корни в ступке и учишь их имена.	You are apprenticed to a herb doctor. You pound roots in a mortar and learn their names.	
early	y	cn	Праздник драконьих лодок. Гребёшь со всей деревней, барабан бьёт прямо в грудь.	The dragon boat festival. You row with the whole village; the drum beats right in your chest.	
early	y	cn	На празднике фонарей {увидел|увидела} {её|его} у моста. Загадку на фонаре так и не {отгадал|отгадала}.	At the lantern festival you see {her|him} by the bridge. You never solve the riddle on the lantern.	
early	y	cn	Ходишь за шелкопрядом. Ночью слышно, как черви едят листья.	You tend the silkworms. At night you can hear them eating the leaves.	
early	y	in	С семьёй {дошёл|дошла} до Ганга. Окунаешься трижды, вода уносит твой венок.	You walk with your family all the way to the Ganges. You dip three times; the water carries off your garland.	
early	y	in	Мать учит тебя ткать. Узор нельзя сбить ни на нитку.	Mother teaches you to weave. The pattern must not slip by a single thread.	
early	y	in	На ярмарке верблюдов больше, чем людей. Ты {истратил|истратила} всё на медный браслет.	At the fair there are more camels than people. You spend everything on a brass bangle.	
early	y	in	Под баньяном старик ночь за ночью поёт «Рамаяну». Ты бегаешь слушать тайком.	Under the banyan an old man sings the Ramayana night after night. You slip out to listen.	
early	y	in	Дядя водит тебя в борцовскую яму. Тело натирают маслом, землю — молитвой.	Your uncle takes you to the wrestling pit. Bodies are rubbed with oil, the earth with prayers.	m
early	y	sea	Праздник воды: обливают всех подряд. Тебе достаётся больше всех.	The water festival: everyone gets soaked. You get it worst of all.	
early	y	sea	Тебе подпиливают зубы и чернят их. Теперь ты красив{|а}.	They file your teeth and blacken them. Now you are beautiful.	
early	y	sea	Отец берёт тебя в море на лодке с балансиром. Тебя мутит, он смеётся.	Father takes you to sea in the outrigger. You are sick; he laughs.	+sea
early	y	sea	На жатве парни и девушки перекидываются стихами через поле. Тебе ответили.	At harvest the boys and girls toss verses across the field. Someone answers yours.	!town
early	y	sea	Петушиный бой. Ты {поставил|поставила} на рыжего и {проиграл|проиграла}.	A cockfight. You bet on the red one and lose.	
early	y	jp	Совершеннолетие: новая причёска, взрослое имя. Мать долго на тебя смотрит.	Coming of age: a new hairstyle, a grown-up name. Mother looks at you for a long time.	
early	y	jp	Всей деревней идёте на поклонение в Исэ. Деньги на дорогу копили два года.	The whole village goes on pilgrimage to Ise. You saved two years for the road.	
early	y	jp	Хозяин послал тебя с письмом по Токайдо. Соломенные сандалии стёрлись за три дня.	The master sends you down the Tokaido with a letter. Your straw sandals wear through in three days.	
early	y	me	Свадьба сестры. Женщины кричат так, что дрожит улица.	Your sister's wedding. The women ululate till the street shakes.	
early	y	me	Тебя отдали в ученики к меднику на базаре. Стук в ушах и ночью.	You are apprenticed to a coppersmith in the bazaar. The hammering stays in your ears all night.	
early	y	me	Пасёшь отцовских коз в горах. Ночуешь с дядей в шатре из чёрной шерсти.	You herd your father's goats in the mountains. You sleep with your uncle in a tent of black wool.	!town
early	y	me	Вернулись паломники из Мекки. Всю ночь {слушал|слушала} их рассказы.	The pilgrims come back from Mecca. You listen to their stories all night.	
early	y	me	В ночь хны подруги расписывают тебе ладони. Утром тебя увезут.	On the henna night your friends paint your palms. In the morning they will take you away.	f
early	y	af	При луне парни и девушки пляшут на площадке за деревней.	By moonlight the boys and girls dance on the ground beyond the village.	
early	y	af	{Ходил|Ходила} с дядей на рынок за три дня пути. Там говорят на пяти языках.	You go with your uncle to a market three days away. Five languages are spoken there.	
early	y	af	Все, кто родился с тобой в один год, — одна ватага. Вместе работаете, вместе отвечаете.	Everyone born in your year is one band. You work together and answer together.	
early	y	af	Кузнец взял тебя в подручные. Раздуваешь меха до темноты в глазах.	The smith takes you as his helper. You work the bellows till your eyes go dark.	m
early	y	latam	Первая работа: гонишь скот с вакеро. Лошадь старше тебя.	Your first job: driving cattle with the vaqueros. The horse is older than you.	!town
early	y	latam	На фиесте {танцевал|танцевала} с {ней|ним} до утра. Мать смотрела в другую сторону.	At the fiesta you dance with {her|him} till morning. Mother looks the other way.	
early	y	latam	Ведёшь мулов с кофе по горной тропе. Дядя идёт первым и ругает каждый камень.	You lead coffee mules along a mountain path. Your uncle walks ahead, cursing every stone.	
early	y	us	Лущите кукурузу всей округой. Кто найдёт красный початок, тот целует кого хочет.	The whole district husks corn together. Whoever finds a red ear may kiss anyone they like.	
early	y	us	Тебя отдали в ученики к кузнецу. По договору — на семь лет.	You are bound apprentice to a blacksmith. Seven years, by the indenture.	
early	y	us	Проповедь в лесу, у костров. Люди падают и плачут. Ты тоже.	A preaching in the woods, by the fires. People fall down and weep. So do you.	
early	y	au	Первую свою добычу по обычаю отдаёшь старшим. Себе — ни кусочка.	By custom your first catch goes to the elders. Not a bite for you.	
early	y	au	Кланы сошлись на праздник у реки. Слушаешь чужие наречия и чужие песни.	The clans gather at the river for a feast. You hear other tongues and other songs.	
early	y	au	Поджигаешь с роднёй сухую траву. После пала придут зелень и кенгуру.	With your kin you set the dry grass alight. After the burn come green shoots and kangaroos.	
early	y	au	Ночью у костра тебе впервые доверили песню о звёздах.	At the fire one night you are trusted with the song of the stars for the first time.	
early	y	au	Старики говорят, с кем тебе можно сойтись. Сердцу не прикажешь.	The elders tell you whom you may marry. The heart does not listen.	
early	y	au	Тётки учат тебя женским песням. Мужчинам их слышать нельзя.	Your aunts teach you the women's songs. Men must never hear them.	f
early	y	de en	Конфирмация. Отвечаешь пастору катехизис без запинки, а колени дрожат.	Confirmation. You answer the pastor's catechism without a stumble, but your knees shake.	
early	y	fr	Зимние посиделки в хлеву: прядут, поют, сватаются. Тебя проводили до дому.	Winter evenings in the cowshed: spinning, singing, courting. Someone walks you home.	!monk !town
early	y	it	Палио: скачки без седла вокруг площади. Ты орёшь за свой квартал до хрипоты.	The palio: bareback racing round the square. You shout for your quarter till you are hoarse.	
early	y	en de	Майское дерево. Ленты перепутались, и вы со смехом путаетесь вместе с ними.	The maypole. The ribbons tangle, and you laugh as you tangle with them.	
early	y	ru	Посиделки в избе: девки прядут, парни балагурят. Лучина трещит, все смеются.	An evening gathering in a hut: girls spin, boys joke. The splinter-light crackles; everyone laughs.	
early	y	en us	{Прокатился|Прокатилась} по железной дороге до города. Быстрее любой лошади.	You ride the railway into town. Faster than any horse.	after:1830
early	y	de fr ru	{Прокатился|Прокатилась} по железной дороге. Дым, свист, и поля несутся назад.	You ride the railway. Smoke, a whistle, and the fields rush backwards.	after:1840
# --- grown-up years (wave 2)
early	a		Брат вернулся через десять лет. {Узнал|Узнала} его по голосу.	Your brother comes back after ten years. You know him by his voice.	
early	a		Летом пересох ближний ручей. За водой теперь полдня ходу.	In summer the near stream dries up. Fetching water now takes half a day.	
early	a		С соседом не разговариваете третий год. Из-за чего — уже не помнишь.	You and your neighbour have not spoken for three years. You no longer remember why.	
early	a		Вечером к огню вышел чужой человек. Накормили, оставили ночевать. Утром его уже не было.	At dusk a stranger comes to your fire. You feed him and let him stay. By morning he is gone.	
early	a		Хоронили друга детства, твоего ровесника. Впервые думаешь и о своей смерти.	You bury a childhood friend, the same age as you. For the first time you think of your own death.	
early	a		Год выдался добрый. Впервые запасов хватило до весны.	A good year. For the first time the stores last till spring.	
early	a		Сломал{|а} ногу в самую страду. Твою работу сделали соседи.	You break your leg at the height of the harvest. The neighbours do your work.	
early	a	cn	Тянешь джонку бечевой вверх по реке. Песня держит шаг.	You haul a junk upriver on a towrope. The song keeps the step.	
early	a	cn	Старейшина вписал в родословную книгу твоё имя. Кистью, рядом с дедовым.	The clan elder writes your name in the genealogy, with a brush, beside your grandfather's.	
early	a	cn	Носишь ил из пруда под тутовые деревья. В пруду рыба, на деревьях шелкопряд.	You carry silt from the pond to the mulberry trees. Fish in the pond, silkworms in the trees.	
early	a	cn sea	Буйвол — всё твоё богатство. Моешь его в реке чаще, чем детей.	The buffalo is all your wealth. You wash it in the river more often than the children.	kids
early	a	in	Бык ходит по кругу у колодца, кожаный мешок тянет воду на поле. Ты погоняешь с рассвета.	An ox walks round the well; a leather bag lifts water to the field. You drive it from dawn.	!town
early	a	in	Из красильни индиго так несёт, что соседи обходят твой двор стороной.	Your indigo vats stink so much that the neighbours walk round your yard.	
early	a	in	Панчаят под деревом решил ваш спор о меже. Недовольны обе стороны.	The village council under the tree settles your boundary quarrel. Both sides are unhappy.	!town
early	a	in	Муссон запаздывает. Каждое утро вся деревня смотрит на небо.	The monsoon is late. Every morning the whole village looks at the sky.	
early	a	in	Трое парней из деревни ушли в сипаи к Компании. Платят серебром.	Three young men from the village have joined the Company's sepoys. They are paid in silver.	after:1750
early	a	sea	Возишь по реке на рынок сушёную рыбу. Лодка тебе и дом.	You take dried fish downriver to market. The boat is your home too.	
early	a	sea	Перец сдаёшь на голландский склад. Вес считают их гирями.	You hand in pepper at the Dutch warehouse. It is weighed with their weights.	
early	a	sea	Помогаешь соседям поднять новый дом на сваях. Вся деревня тянет одну верёвку.	You help the neighbours raise a new house on stilts. The whole village pulls one rope.	
early	a	jp	Налог платит пятидворье. Сосед не сдал рис — платите вы.	The five households pay the tax together. If a neighbour falls short, you pay.	
early	a	jp	Вечерами плетёшь соломенные сандалии. Сотня пар — мешок риса.	In the evenings you plait straw sandals. A hundred pairs make a bale of rice.	
early	a	jp	Староста читает указ: шёлк крестьянам носить запрещено.	The headman reads out an edict: peasants may not wear silk.	
early	a	jp	Сушишь водоросли на кольях у берега. Руки пахнут морем круглый год.	You dry seaweed on poles by the shore. Your hands smell of the sea all year.	+sea
early	a	jp	Зимой уходишь в город варить сакэ. Возвращаешься весной с деньгами и кашлем.	In winter you go to town to brew sake. You come back in spring with money and a cough.	m
early	a	me	Всю зиму ткёшь ковёр. Узор знаешь наизусть, как молитву.	All winter you weave a carpet. You know the pattern by heart, like a prayer.	
early	a	me	Спор о воде решил кади. Теперь поливаешь по вторникам и пятницам.	The qadi settles the water dispute. Now you irrigate on Tuesdays and Fridays.	!town
early	a	me	В бурю упала финиковая пальма. Её сажал прадед.	The date palm falls in a storm. Your great-grandfather planted it.	
early	a	me	Возишь на осле воду в город, в бурдюках. За день — двенадцать ходок.	You bring water into town by donkey, in skins. Twelve trips a day.	
early	a	af	Строите с соседями дом. Глину на стены мажете руками.	You build a house with the neighbours. You smear the clay on the walls by hand.	
early	a	af	Кузнец выковал тебе новую мотыгу. Платишь ему двумя курами.	The smith forges you a new hoe. You pay him two chickens.	!town
early	a	af	Выжигаешь кусты под новое поле. Через три года уйдёте на другое место.	You burn the bush for a new field. In three years you will move on again.	!town
early	a	af	Река отступила. Сеешь в ил, пока он мокрый.	The river falls back. You sow in the mud while it is still wet.	!town
early	a	af	С севера пришли верблюды с солью. Плиту соли меняют на золото.	Camels come from the north with salt. A slab of salt is traded for gold.	
early	a	latam	Варишь сахар на сахарной мельнице. Котлы кипят день и ночь.	You boil sugar at the mill. The kettles boil day and night.	
early	a	latam	Два дня пути до рынка с корзиной перца за спиной.	Two days' walk to market with a basket of chillies on your back.	
early	a	latam	Ставишь в поле крест из цветов, чтобы град обошёл кукурузу.	You set a cross of flowers in the field so the hail will pass the maize by.	!town
early	a	us	С соседями варите кленовый сок. Котёл кипит в лесу всю ночь.	With the neighbours you boil maple sap. The kettle boils in the woods all night.	
early	a	us	Меняешь шкуры на порох в фактории. Торговец обвешивает и не скрывает.	You trade pelts for powder at the post. The trader cheats on the weight and doesn't hide it.	
early	a	us	В лавке всё пишут в долг до урожая. Осенью платишь зерном.	At the store everything goes on credit till harvest. In autumn you pay in grain.	!town
early	a	us	Сбиваешь масло, пока не заломит руки. По субботам возишь его в город.	You churn butter till your arms ache. On Saturdays you take it to town.	
early	a	au	Ловишь рыбу в каменных запрудах. Их строили ещё деды дедов.	You catch fish in the stone traps your grandfathers' grandfathers built.	
early	a	au	Ходишь к соседнему народу менять охру на камень для топоров.	You go to the next people to trade ochre for axe stone.	
early	a	au	Копаешь палкой ямс. К вечеру полное деревянное блюдо.	You dig yams with a stick. By evening the wooden dish is full.	
early	a	au	Чужаки привели овец на ваши луга. Вода в ручье теперь мутная.	Strangers bring sheep onto your grasslands. The water in the creek is muddy now.	after:1788 !town
early	a	fr de en it ru	Всю зиму молотишь цепом на гумне. Стук слышно на всю деревню.	All winter you thresh with a flail in the barn. The whole village hears the beat.	!town
early	a	fr de en it ru	Сено сметали в стога. Гроза прошла стороной — успели.	The hay is stacked. The storm passes by — you made it in time.	!town
early	a	de fr it	Гонишь коров на горное пастбище на всё лето.	You drive the cows up to the mountain pasture for the whole summer.	!town
early	a	de	Сплавляешь лес по Рейну на плоту величиной с деревню.	You float timber down the Rhine on a raft the size of a village.	m
early	a	de	Летом уходишь в Голландию косить. Домой несёшь гульдены в поясе.	In summer you go to Holland to mow. You bring the guilders home in your belt.	
early	a	de	Князь поменял веру. Через год поменяли и пастора.	The prince changes his faith. A year later the pastor is changed too.	
early	a	fr	Сборщик тальи ходит по дворам. Окорок прячешь под солому.	The taille collector goes from house to house. You hide the ham under the straw.	
early	a	it	Таскаешь с поля камни и складываешь в стенку террасы. Дед делал так же.	You carry stones off the field and build them into the terrace wall. Grandfather did the same.	!town
early	a	it	Кормишь шелкопряда тутовым листом. Коконы купец увозит в Милан.	You feed the silkworms mulberry leaves. A merchant takes the cocoons to Milan.	
early	a	en	В городе открыли фабрику. Прясть теперь будет машина.	A mill opens in town. A machine will do the spinning now.	after:1780
early	a	ru	Зимой ходишь в извоз. Санный обоз до самой Москвы.	In winter you go carting. A sledge train all the way to Moscow.	m
early	a	fr de	Картофель кладёшь в погреб на всю зиму. Без него теперь не прожить.	You put the potatoes in the cellar for the winter. You couldn't live without them now.	after:1750
# --- small joys (wave 2)
early	j		Вечером сидите всей семьёй у огня. Никто никуда не спешит.	In the evening the whole family sits by the fire. Nobody is in a hurry.	
early	j		Старый друг пришёл издалека. Проговорили до рассвета.	An old friend comes from far away. You talk till dawn.	
early	j		Все наелись досыта, и ещё осталось.	Everyone has eaten their fill, and there is still some left.	
early	j		Над рекой двойная радуга. Все бросили работу и смотрят.	A double rainbow over the river. Everyone stops work to look.	
early	j		{Поймал|Поймала} рыбу больше локтя. Несёшь её домой через всю деревню.	You catch a fish longer than your forearm. You carry it home through the whole village.	
early	j		Ночью падают звёзды. {Загадал|Загадала} желание и никому не {сказал|сказала}.	Stars fall in the night. You make a wish and tell no one.	
early	j	cn	Праздник середины осени. Лунные пряники, вся семья смотрит на луну.	The Mid-Autumn festival. Mooncakes, and the whole family watching the moon.	
early	j	in	Мимо прошёл слон раджи, весь в золоте. Дети бегут следом.	The raja's elephant goes by, all in gold. The children run after it.	
early	j	sea	Гонки лодок после разлива. Ваша пришла первой.	Boat races after the flood. Yours comes in first.	
early	j	jp	Сидишь в горячем источнике, а в воду падает снег.	You sit in a hot spring while snow falls into the water.	
early	j	me	Первый кофе утром с соседом, на ступеньках лавки.	The first coffee of the morning with your neighbour, on the shop steps.	
early	j	me	Поспели дыни. Самую большую режешь прямо на бахче.	The melons are ripe. You cut the biggest one right there in the patch.	
early	j	af	Гриот пел на празднике о твоём деде. Все смотрели на тебя.	At the feast the griot sings of your grandfather. Everyone looks at you.	
early	j	latam	В День мёртвых несёшь на могилу деда его любимую еду. Сидите там до утра.	On the Day of the Dead you take grandfather's favourite food to his grave. You sit there till morning.	
early	j	us	Скрипач играл до рассвета. Ты {стёр|стёрла} башмаки до дыр.	The fiddler plays till dawn. You dance holes in your shoes.	
early	j	au	{Нашёл|Нашла} в дупле дикий мёд. Едите прямо с воском.	You find wild honey in a hollow tree. You eat it wax and all.	
early	j	ru	Наварили пива к престольному празднику. Пели всей деревней.	Beer is brewed for the village saint's day. The whole village sings.	
# --- old age (wave 2)
early	o		Руки помнят работу, а ноги уже не держат.	Your hands remember the work; your legs no longer hold you.	
early	o		Тебе снится мать, совсем молодая. Проснувшись, долго лежишь.	You dream of your mother, still young. When you wake you lie there a long time.	
early	o		Зовёшь соседских детей именами их дедов.	You call the neighbours' children by their grandfathers' names.	
early	o		С тобой советуются, когда ждать дождя. Ты помнишь шестьдесят вёсен.	They ask you when the rain will come. You remember sixty springs.	
early	o		Спишь мало. Встаёшь затемно и слушаешь, как просыпается мир.	You sleep little. You rise in the dark and listen to the world waking up.	
early	o		Ещё раз {поднялся|поднялась} на холм, откуда видна вся округа. Знаешь, что в последний.	Once more you climb the hill that looks over the whole country. You know it is the last time.	
early	o		Молодые поют твою песню и не знают, что она твоя.	The young sing your song and don't know it is yours.	
early	o	in	Сидишь на пороге и перебираешь чётки. Мимо идёт вся деревня.	You sit on the doorstep telling your beads. The whole village walks past.	
early	o	jp	Сидишь на веранде и слушаешь цикад. Жара тебе больше не мешает.	You sit on the veranda listening to the cicadas. The heat no longer bothers you.	
# --- hard times (wave 2)
early	x		Засуха. Второй год без дождя.	Drought. A second year without rain.	
early	x		Лихорадка. Слегла половина деревни.	A fever. Half the village is down with it.	
early	x		Саранча. За один день не осталось ничего зелёного.	Locusts. In a single day nothing green is left.	
early	x		Наводнение. Вода неделю стоит в домах.	A flood. For a week the water stands in the houses.	
early	x	jp latam	Землетрясение, а следом пожар.	An earthquake, and then fire.	
early	x	in	Муссон не пришёл. Колодцы пусты, амбары тоже.	The monsoon never comes. The wells are empty, and so are the granaries.	!town
early	x	de fr it	Солдаты встали на постой на всю зиму. Съели всё, что было.	Soldiers are quartered on you all winter. They eat everything you have.	
early	x	me	Чума в городе. Караваны не ходят, базар закрыт.	Plague in the city. The caravans stop; the bazaar is shut.	
early	y		Послушание тебе дали самое простое: носить воду на кухню. Сорок вёдер в день.	Your first task is the simplest: carrying water to the kitchen. Forty buckets a day.	monk
early	y	cn jp sea in	Тебе обрили голову. Ветер впервые холодит макушку.	Your head is shaved. For the first time the wind is cold on your crown.	monk
early	y	cn jp	Учишь сутру наизусть. Наставник стучит палкой об пол, когда ты сбиваешься.	You learn a sutra by heart. Your teacher strikes the floor with a stick when you stumble.	monk
early	y		Мать приходила к воротам. Тебя к ней не выпустили, только передали её хлеб.	Your mother came to the gate. You were not let out to her; they only passed you her bread.	monk
early	y		Ночью в общей спальне кто-то плачет. Утром никто не признаётся.	Someone cries in the dormitory at night. In the morning nobody owns up.	monk
early	y	eu ru	Тебя поймали со сливой из монастырского сада. Неделю ешь стоя.	You are caught with a plum from the monastery garden. For a week you eat standing up.	monk
early	y		Старш{ий брат|ая сестра} учит тебя растирать краски для книг.	An older {brother|sister} teaches you to grind colours for the books.	monk
early	y		Ты {принял|приняла} постриг. Тебе дали новое имя, и ты не сразу на него {откликался|откликалась}.	You take your vows. You are given a new name, and at first you do not answer to it.	monk
early	y	eu ru	Всю ночь перед постригом стоишь на коленях. К утру не чувствуешь ног.	You kneel all night before your vows. By morning you cannot feel your legs.	monk
early	y	sea in	С чашей для подаяния идёшь по деревне. Тебе кладут рис и не смотрят в глаза.	You walk through the village with your alms bowl. They put rice in it without meeting your eyes.	monk
early	y	eu ru	Тайком {залез|залезла} на колокольню. Оттуда видно, как далеко тянется мир.	You sneak up the bell tower. From there you can see how far the world goes.	monk
early	a		Тебя поставили на кухню. Варишь кашу на сорок человек и молчишь.	You are put in the kitchen. You cook porridge for forty and keep silent.	monk
early	a	eu ru	В обитель пришёл странник. Ты моешь ему ноги, как положено по уставу.	A pilgrim comes to the monastery. You wash his feet, as the rule says.	monk
early	a		Смотришь за пасекой. Пчёлы тебя не жалят, и {братия|сёстры} зовут это чудом.	You keep the bees. They never sting you, and the others call it a miracle.	monk
early	a		Неделя молчания. Ты понимаешь, сколько слов {говорил|говорила} зря.	A week of silence. You learn how many of your words were wasted.	monk
early	a	cn jp sea in	Сидишь в медитации с рассвета. Ноги затекли, а мысли всё бегут.	You sit in meditation from dawn. Your legs go numb and your thoughts keep running.	monk
early	a	eu ru	Обители принадлежат три деревни. Ты {ездил|ездила} за оброком и {вернулся|вернулась} ни с чем: там нечего взять.	The monastery owns three villages. You go to collect the dues and come back empty-handed: they have nothing to give.	monk
early	a		Лечишь травами. К воротам приходят больные со всей округи.	You heal with herbs. The sick come to the gate from all around.	monk
early	a		Тебе велели учить послушников. Самый младший очень похож на тебя в детстве.	You are set to teach the novices. The youngest is very like you as a child.	monk
early	a	ru	Пишешь икону. Лицо не выходит третий месяц.	You paint an icon. The face has not come right for three months.	monk
early	a	eu ru	Звонишь к вечерне. Руки знают верёвку лучше, чем губы — слова молитвы.	You ring for vespers. Your hands know the rope better than your lips know the prayer.	monk
early	a	cn jp	Метёшь двор храма. Листья падают снова, и ты метёшь снова.	You sweep the temple yard. The leaves fall again, and you sweep again.	monk
early	a		Тебя послали с поручением в город. Ты {отвык|отвыкла} от шума и людей.	You are sent on an errand to the town. You have lost the habit of noise and crowds.	monk
early	a	eu	Латынь ты знаешь так, что думаешь на ней.	You know Latin well enough to think in it.	monk lit
early	a	cn jp	Переписываешь сутры. Каждый знак — поклон.	You copy the sutras. Every character is a bow.	monk lit
early	a	eu ru	В обитель привезли печатные книги. Переписывать больше незачем, а руки привыкли.	Printed books arrive at the monastery. There is no more need to copy, but your hands are used to it.	monk lit
early	j		Первый снег на монастырских крышах. Во дворе тихо, как на чистой странице.	The first snow on the monastery roofs. The yard is as quiet as a clean page.	monk
early	j	eu ru	На Пасху звонят все колокола. Тебе разрешили съесть крашеное яйцо.	At Easter all the bells ring. You are allowed a painted egg.	monk
early	j		Кот приходит в твою келью греться. Ты делишься с ним хлебом.	A cat comes to your cell for warmth. You share your bread with it.	monk
early	j		Сегодня пение сложилось так, что у тебя мурашки по рукам.	Today the chant comes together so well it raises the hair on your arms.	monk
early	j	jp	Зацвела сакура у храма. Наставник позволил весь день смотреть на неё.	The cherry by the temple blooms. Your teacher lets you spend the whole day looking at it.	monk
early	j		{Закончил|Закончила} переписывать книгу. На последней странице оставляешь свою маленькую молитву.	You finish copying a book. On the last page you leave a small prayer of your own.	monk lit
early	j		В окне кельи все звёзды. Смотришь на них до утренней службы.	All the stars show in your cell window. You watch them till the morning office.	monk
early	j		Первые огурцы с монастырского огорода. Ешь с солью и улыбаешься.	The first cucumbers from the monastery garden. You eat them with salt and smile.	monk
early	j		Ласточки свили гнездо над входом в храм. Каждое утро ты с ними здороваешься.	Swallows build a nest over the temple door. Every morning you greet them.	monk
early	j		Праздник в обители: на столе рыба и мёд. Едите молча, но все улыбаются.	A feast day in the monastery: fish and honey on the table. You eat in silence, but everyone is smiling.	monk
early	j		Тебе поручили разобрать библиотеку. В одной книге нашёлся засушенный цветок.	You are set to sort the library. In one book there is a pressed flower.	monk lit
early	j	cn jp sea in	Медитация на рассвете. На миг мыслей нет совсем.	Meditation at dawn. For a moment there are no thoughts at all.	monk
early	j	eu	Обитель варит пиво. Тебе доверили его пробовать.	The monastery brews beer. You are trusted to taste it.	monk
early	o		Ты старше всех в обители. Послушники приходят спросить, как было раньше.	You are the oldest in the monastery. The novices come to ask how things used to be.	monk
early	o		Тебя {сделали настоятелем|сделали настоятельницей}. Ключи тяжелее, чем ты {думал|думала}.	You are made {abbot|abbess}. The keys are heavier than you thought.	monk
early	o		Слух уходит. Службу ты знаешь наизусть и поёшь её про себя.	Your hearing goes. You know the office by heart and sing it to yourself.	monk
early	o		Тебе отвели келью потеплее, у кухни. Тебе неловко, но ты {рад|рада}.	You are given a warmer cell, by the kitchen. You are embarrassed and glad.	monk
early	o		Молод{ой брат|ая сестра} читает тебе вслух: твои глаза больше не видят букв.	A young {brother|sister} reads aloud to you: your eyes no longer see the letters.	monk
early	o		Сажаешь в саду яблоню. Плоды достанутся тем, кто придёт после.	You plant an apple tree in the garden. The fruit is for those who come after.	monk
early	o		Ты сорок лет не {выходил|выходила} за ворота. Мир, говорят, стал совсем другим.	You have not gone past the gate in forty years. The world, they say, is quite different now.	monk
early	o	cn jp	Ученики спорят о сутре. Ты молчишь, и они тоже замолкают.	The disciples argue over a sutra. You say nothing, and they fall silent too.	monk
early	o		Ночами не спится. Сидишь в храме один, со светильником.	You cannot sleep at night. You sit alone in the temple with a lamp.	monk
early	x		Мор пришёл в обитель. Хоронили по трое в день.	Plague reaches the monastery. Three are buried a day.	monk
early	x		Обитель загорелась от свечи. Книги выносили на руках, спасли половину.	The monastery catches fire from a candle. You carry the books out by hand and save half.	monk
early	x		Неурожай. Монастырь кормит всю округу, пока хватает зерна. Потом не хватает.	A failed harvest. The monastery feeds the whole district while the grain lasts. Then it does not.	monk
early	x	eu ru	Солдаты неделю стояли в обители. Увели коней, выпили вино, сняли колокол.	Soldiers are quartered in the monastery for a week. They take the horses, drink the wine and take down the bell.	monk
early	x		Зимой замёрз колодец. Воду топите из снега в котле.	In winter the well freezes. You melt snow in a cauldron for water.	monk
early	x		Ты тяжело {заболел|заболела}. Над тобой молились три ночи, и ты {встал|встала}.	You fall gravely ill. They pray over you for three nights, and you get up.	monk
early	x	cn	Чиновники пересчитали монахов и половину отправили обратно в мир.	Officials count the monks and send half of them back into the world.	monk
early	x	cn jp	Землетрясение повалило пагоду. Разбираете камни руками.	An earthquake brings down the pagoda. You clear the stones by hand.	monk
early	x		Разбойники вломились в обитель. Ты {отсиделся|отсиделась} в погребе с книгами.	Robbers break into the monastery. You hide in the cellar with the books.	monk
early	x	eu ru	Обитель закрыли указом. {Братию|Сестёр} развезли по другим монастырям.	The monastery is closed by decree. Its people are scattered among other houses.	monk after:1764
early	c		Мать перестала кормить тебя грудью: родился младший.	Your mother stops nursing you: a younger one has been born.	small
early	c		Ты {сделал|сделала} первые шаги — прямо к огню. Мать успела.	You take your first steps, straight towards the fire. Your mother is quicker.	small
early	c		Твоё первое слово — «дай».	Your first word is "give".	small
early	c		Спишь между матерью и старшей сестрой. Там теплее всего.	You sleep between your mother and your older sister. It is the warmest place.	small
early	c		Тебя носят за спиной, пока мать работает. Мир ты видишь через её плечо.	You are carried on your mother's back while she works. You see the world over her shoulder.	small
early	c		Тебя чуть не унесла лихорадка. Бабка просидела рядом три ночи.	A fever nearly takes you. Your grandmother sits by you for three nights.	small
early	c		Ты {съел|съела} горсть земли и {остался|осталась} очень {доволен|довольна}.	You eat a handful of earth and are very pleased with yourself.	small
early	c		Боишься петуха. Он ходит за тобой по всему двору.	You are afraid of the rooster. It follows you all round the yard.	small
early	c		Старшие дети таскают тебя за собой, как куклу.	The older children drag you about like a doll.	small
early	c		Засыпаешь под песню, которую мать поёт без слов.	You fall asleep to a song your mother hums without words.	small
early	c		Ты {упал|упала} и {рассёк|рассекла} лоб. Шрам останется на всю жизнь.	You fall and cut your forehead. The scar will stay for life.	small
early	c		Плачешь, когда отец уходит, и смеёшься, когда он возвращается.	You cry when your father leaves and laugh when he comes back.	small
early	c		Таскаешь собаку за хвост, а она терпит.	You pull the dog's tail, and it puts up with it.	small
early	c		Тебе дали первую ложку. Половина каши на полу.	You are given your first spoon. Half the porridge ends up on the floor.	small
early	c		Ты {спрятался|спряталась} под лавку, и тебя полдня искали всей семьёй.	You hide under the bench, and the whole family searches for you half the day.	small
early	c		Ты всё время тянешь в рот блестящее. Мать вынимает и смеётся.	You keep putting shiny things in your mouth. Your mother takes them out and laughs.	small
early	c		Сидишь у порога и встречаешь каждого, кто входит, своим словом.	You sit by the door and greet everyone who comes in with your own word.	small
early	c	eu ru	Тебя крестили зимой в холодной церкви. Ты {кричал|кричала} так, что священник улыбнулся.	You are baptised in winter in a cold church. You scream so hard the priest smiles.	small
`,ge=`# group	kind	tags	ru	en	need
ind	c		Впервые {увидел|увидела} паровоз и {убежал|убежала} от свиста.	You see a steam engine for the first time and run from the whistle.	
ind	c		Три зимы в начальной школе.	Three winters in elementary school.	
ind	c		Фотограф снял всю семью. Карточку повесили на самое видное место.	A photographer takes the whole family. The picture goes in pride of place.	
ind	c		Мать берёт тебя на фабрику. Сидишь под станками и подбираешь нитки.	Mother takes you to the mill: you sit under the machines picking up threads.	r1
ind	c		В школе дали книжку с картинками. Ты знаешь её наизусть.	At school you are given a picture book. You know it by heart.	
ind	c		Впервые {увидел|увидела} электрический фонарь. Вокруг кружат мотыльки.	You see an electric street lamp for the first time. Moths circle it.	
ind	c		Бегаешь за околицу смотреть, как кладут рельсы. Рабочие дают подержать костыль.	You run out past the village to watch them lay rails. The workers let you hold a spike.	
ind	c	cn	Дед курит трубку и рассказывает про длинноволосых бунтовщиков.	Grandfather smokes his pipe and tells of the long-haired rebels.	
ind	c	cn	Мать бинтует тебе ноги. По ночам ты плачешь в подушку.	Mother binds your feet. At night you cry into the pillow.	f
ind	c	jp	В школе учитель велит кланяться портрету императора.	At school the teacher has you bow to the Emperor's portrait.	
ind	c	in	Собираешь чайный лист рядом с матерью. Корзина за спиной больше тебя.	You pick tea beside your mother. The basket on your back is bigger than you.	r1
ind	c	us	Собираешь хлопок рядом с матерью. Мешок волочится по земле.	You pick cotton beside your mother. The sack drags along the ground.	r1
ind	c	ru	Зимой ходишь в школу за пять вёрст. Каждый несёт полено для печки.	In winter you walk three miles to school. Each child brings a log for the stove.	
ind	c	en us	Продаёшь газеты на углу. Выкрикиваешь заголовки, которых не можешь прочесть.	You sell newspapers on the corner, shouting headlines you can't read.	illit
ind	c		Отец привёз с ярмарки жестяную лошадку на колёсиках.	Father brings a tin horse on wheels from the fair.	
ind	c	fr de en us	Старший брат учит тебя ездить на велосипеде. Всё лето колени в ссадинах.	Your elder brother teaches you to ride a bicycle. Your knees are scabbed all summer.	r2 r3
ind	c		Гувернантка учит тебя французскому. Ты прячешься от неё в саду.	A governess teaches you French. You hide from her in the garden.	r3
ind	c	af	Миссионер раздаёт детям грифельные доски. Ты пишешь своё имя.	A missionary hands out slates. You write your name.	
ind	c	sea	Отец уходит до рассвета надрезать каучуковые деревья. Ты носишь за ним чашки.	Father leaves before dawn to tap the rubber trees. You carry his cups.	r1
ind	c	latam	На эстансии тебе дали первого коня. В первый же день ты {упал|упала}.	On the estancia you are given your first horse. You fall off the first day.	r1
ind	c	au	Отец моет золото в ручье. Ты высматриваешь блёстки в лотке.	Father washes for gold in the creek. You look for specks in the pan.	
ind	c		Родился брат. Тебя отправили к соседке, пока всё не кончится.	A brother is born. You are sent to the neighbour's until it's over.	
ind	c		Корью болеет вся улица. Ты {выжил|выжила}, а двое соседских — нет.	The whole street has measles. You live; two of the neighbours' children don't.	
ind	c		Мать стирает чужое бельё. Ты разносишь его по домам в корзине.	Mother takes in washing. You carry it round the houses in a basket.	r1
ind	c	me	В мектебе сидишь с мальчишками на полу и хором повторяешь суры.	At the mosque school you sit on the floor with the boys and chant the suras.	m
ind	c	it	Отец уехал в Аргентину на жатву. Вернётся весной.	Father has gone to Argentina for the harvest. He'll be back in spring.	r1
ind	c	ru	На Пасху катаешь крашеные яйца с горки.	At Easter you roll painted eggs down a slope.	
ind	c		{Нашёл|Нашла} на дороге подковный гвоздь. Носишь его в кармане на счастье.	You find a horseshoe nail on the road. You keep it in your pocket for luck.	
ind	c	jp	Летом ловишь светлячков и выпускаешь их под москитную сетку.	In summer you catch fireflies and let them go under the mosquito net.	
ind	c		В лавке на углу за одну монетку дают горсть леденцов.	At the corner shop one coin buys a handful of boiled sweets.	
ind	c		Тебя впервые везут в город поездом. Всю дорогу стоишь у окна.	You are taken to town by train for the first time. You stand at the window the whole way.	
ind	c	in	Бабушка рассказывает про Раму, пока мать печёт лепёшки.	Grandmother tells of Rama while mother bakes the flatbread.	
ind	y		{Уехал|Уехала} в город на заработки.	You go to the city for work.	+town
ind	y		Сосед вернулся из Америки и рассказывает про небоскрёбы.	A neighbour is back from America and talks about skyscrapers.	
ind	y		{Записался|Записалась} в вечернюю школу для рабочих.	You sign up for night school for workers.	town
ind	y		Первое жалованье. {Купил|Купила} матери платок.	Your first wages. You buy your mother a shawl.	
ind	y		На сходке говорят о восьмичасовом дне. Ты слушаешь до темноты.	At a meeting they talk of the eight-hour day. You listen until dark.	r1
ind	y	ru	Тебя отдали в ученье к сапожнику. Первый год только бегаешь по поручениям.	You are apprenticed to a cobbler. The first year you just run errands.	m
ind	y		Тебя наняли прислугой в городской дом. Спишь на кухне за ширмой.	You go into service in a town house. You sleep in the kitchen behind a screen.	f
ind	y	cn	Сваха унесла красную бумажку с днём и часом твоего рождения.	The matchmaker takes away a red paper with the day and hour of your birth.	
ind	y	jp	Тебя отправили на шелкомотальную фабрику. Всё жалованье уходит домой.	You are sent to the silk-reeling mill. Every wage goes home.	f r1 +town
ind	y	ru	В избе-читальне {выучился|выучилась} читать по газете.	In the village reading room you learn to read from a newspaper.	
ind	y		Тайком {выкурил|выкурила} первую папиросу. Тошнило до вечера.	You secretly smoke your first cigarette. You feel sick until evening.	
ind	y		На свадьбе у соседей {проплясал|проплясала} до утра.	At the neighbours' wedding you dance until morning.	
ind	y	us	Тебя взяли на постройку железной дороги. Доллар в день.	You are hired on the railroad gang. A dollar a day.	m
ind	y	in	Отец отдал тебя в английскую школу. Учитель бьёт линейкой за каждую ошибку.	Father sends you to the English school. The master raps you with a ruler for every mistake.	r2 r3
ind	y		Первый раз спускаешься в шахту. Свет только от лампы.	You go down the pit for the first time. The only light is your lamp.	m r1
ind	y	latam	Учишься бросать лассо. Старый гаучо смеётся над тобой.	You learn to throw the lasso. An old gaucho laughs at you.	m
ind	y		{Сбежал|Сбежала} с бродячим цирком. Через три дня вернули домой.	You run off with a travelling circus. Three days later you are brought home.	
ind	y		Экзамен в гимназию. Мать ждёт у ворот.	Your entrance exam at the grammar school. Mother waits at the gate.	lit r2 r3
ind	y	af	Вербовщик набирает парней на рудники. Ты едешь с ними.	A recruiter signs up the young men for the mines. You go with them.	m
ind	y		Первое любовное письмо. Прячешь его между страниц книги.	Your first love letter. You hide it between the pages of a book.	lit
ind	y	sea cn in	Ходишь за буйволом на рисовом поле. Тебя он слушается лучше, чем отца.	You drive the buffalo in the rice field. It minds you better than your father.	r1 !town
ind	y	it de ru	Мать собирает тебе узелок: ты едешь в Америку к дяде.	Mother packs you a bundle: you are going to your uncle in America.	+abroad
ind	a		В дом провели электричество. Лампочка под потолком ярче десяти свечей.	Electricity comes into the house. The bulb under the ceiling is brighter than ten candles.	
ind	a		Стачка на заводе. Две недели без денег.	A strike at the works. Two weeks without pay.	r1 +town
ind	a		Пришло письмо от брата — он за океаном.	A letter from your brother: he is across the ocean.	
ind	a		Ребёнка вылечили новым лекарством. Врач говорит: десять лет назад он бы умер.	A new medicine cures your child. The doctor says ten years ago the child would have died.	kids
ind	a		Переехали в квартиру с водопроводом.	You move into a flat with running water.	town
ind	a		Всей улицей слушаете радио у одного приёмника.	The whole street listens to the radio round one set.	
ind	a	ru	Корову свели на колхозный двор. Ты ходишь туда на неё посмотреть.	Your cow is led off to the kolkhoz yard. You go there to look at her.	r1 after:1930 !town
ind	a	cn jp	Возишь рикшу по городу. К вечеру ноги гудят.	You pull a rickshaw through the city. By evening your legs ache.	m r1
ind	a	in	Плантатор велит сеять индиго вместо риса.	The planter makes you sow indigo instead of rice.	r1 !town
ind	a	us	Половина хлопка уходит хозяину земли, вторая — за долги в лавке.	Half the cotton goes to the landowner, the other half to the store debt.	r1 !town
ind	a		Ты у ткацких станков: их шесть, и все грохочут.	You work the looms: six of them, all thundering.	r1
ind	a		С восьми до шести переписываешь цифры в конторскую книгу.	From eight to six you copy figures into the ledger.	r2 lit +town
ind	a		{Открыл|Открыла} свою лавку. Над дверью вывеска с твоим именем.	You open your own shop. Over the door hangs a sign with your name.	r2
ind	a		Купили швейную машинку. По ночам шьёшь на заказ.	You buy a sewing machine. At night you sew for others.	f
ind	a		Живёшь по гудку: гудок будит, гудок отпускает.	You live by the factory whistle: it wakes you and it lets you go.	r1 town
ind	a		{Женился|Вышла замуж}. У фотографа снялись в чужих нарядах.	You marry. At the photographer's you pose in borrowed clothes.	married !widowed
ind	a		Дети пошли в школу. Ты учишься читать по их букварю.	Your children start school. You learn to read from their primer.	kids illit school
ind	a	cn	Через деревню протянули телеграф. Старики говорят, столбы тревожат предков.	The telegraph runs through the village. The old men say the poles disturb the ancestors.	
ind	a	jp	По новому указу отрезал пучок. Отец месяц не разговаривает с тобой.	By the new decree you cut off your topknot. Father won't speak to you for a month.	m
ind	a	cn	Отрезал косу. Мать спрятала её в сундук.	You cut off your queue. Mother keeps it in a chest.	m
ind	a		Нанялся кочегаром на пароход.	You sign on a steamer as a stoker.	m
ind	a		Сдаёшь угол жильцу. За занавеской кашляет чужой человек.	You let a corner to a lodger. A stranger coughs behind the curtain.	r1 r2
ind	a	in	Едешь в Калькутту третьим классом. В вагоне не повернуться.	You ride third class to Calcutta. There's no room to turn round.	
ind	a	me	Ткёшь ковёр для купца из Тебриза. Платит он мало и поздно.	You weave a carpet for a merchant from Tabriz. He pays little and late.	f
ind	a	af	Налог теперь берут деньгами, а не зерном. Идёшь работать на ферму к белым.	The tax is now taken in coin, not grain. You go to work on a white man's farm.	r1
ind	a	sea	Работаешь на оловянном руднике. С утра до ночи по колено в воде.	You work at the tin mine. Knee-deep in water from dawn to dark.	m r1
ind	a	latam	Пасёшь скот на эстансии. Хозяин приезжает из города раз в год.	You herd cattle on the estancia. The owner comes out from the city once a year.	m r1 !town
ind	a	au	Стрижёшь овец от фермы к ферме. За сезон проходишь сотни миль.	You shear sheep from station to station. Hundreds of miles on foot a season.	m !town
ind	a	fr it	По воскресеньям — кафе, стакан вина и домино.	On Sundays: the café, a glass of wine and dominoes.	m
ind	a	de	Тебя записали в больничную кассу. Теперь врач бесплатно.	You are enrolled in the sickness fund. Now the doctor costs nothing.	r1 r2
ind	a		После смены в шахте моешься в корыте у огня. Вода сразу чёрная.	After the shift in the pit you wash in a tub by the fire. The water turns black at once.	m r1
ind	a	it	Сажаешь рис, стоя по колено в воде. Поёте всем полем, чтобы не так ныла спина.	You plant rice knee-deep in water. The whole field sings so your backs ache less.	f r1
ind	a	ru	Зиму работаешь в городе, лето — дома в поле.	Winters you work in the city, summers in the field at home.	m r1 !town
ind	a		Взяли в банке ссуду под дом. Каждый месяц носишь деньги к окошку.	You take a bank loan on the house. Every month you carry money to the counter.	r2
ind	a		Едешь на воды лечиться. Пьёшь из кружки с носиком и гуляешь под оркестр.	You go to the spa for a cure. You drink from a spouted cup and stroll to the band.	r3
ind	a		У тебя дома телефон. Когда звонишь в контору, слышит весь дом.	You have a telephone at home. When you ring the office, the whole house hears.	r3 town
ind	a		Ребёнок родился в больнице. Первый в семье, кто родился не дома.	Your child is born in a hospital, the first in the family not born at home.	kids
ind	a	us	Заказываешь по каталогу. Посылка идёт три недели.	You order from the mail-order catalogue. The parcel takes three weeks.	
ind	a		Старший уехал в Америку. Его письма хранишь в жестяной коробке.	Your eldest has gone to America. You keep the letters in a tin box.	kids
ind	a		Первый раз голосуешь. Бюллетень держишь обеими руками.	You vote for the first time. You hold the ballot in both hands.	m
ind	a		Полжизни сбережений — в акции железной дороги.	Half a lifetime's savings go into railway shares.	r2 r3
ind	j		Впервые {услышал|услышала} граммофон. Голос из трубы, а человека нет.	You hear a gramophone for the first time. A voice from the horn, and no one there.	
ind	j		В город приехал цирк с аэропланом.	A circus with an aeroplane comes to town.	
ind	j		В синематографе на зал мчится поезд. Все пригибаются.	In the cinema a train rushes at the hall. Everyone ducks.	
ind	j		{Купил|Купила} велосипед в рассрочку. Ездишь на нём на работу.	You buy a bicycle on instalments. You ride it to work.	
ind	j	ru	Воскресенье у реки: самовар, гармонь, все свои.	Sunday by the river: a samovar, an accordion, all your own people.	
ind	j		Пришла посылка от родни из-за океана: шоколад и фотография.	A parcel from family across the ocean: chocolate and a photograph.	
ind	j		Первый апельсин. Корки сушишь на окне.	Your first orange. You dry the peel on the windowsill.	
ind	j		Над деревней пролетел аэроплан. Все бросили работу и смотрят, пока не скрылся.	An aeroplane flies over the village. Everyone stops work and watches until it's gone.	
ind	j		В парке играет духовой оркестр. Ты покупаешь мороженое.	A brass band plays in the park. You buy an ice cream.	town
ind	j	cn	Новый год: хлопушки, пельмени, новая стёганая куртка.	New Year: firecrackers, dumplings, a new padded jacket.	
ind	j	jp	Любуетесь с соседями сакурой. Пьёте сакэ под деревьями.	You view the cherry blossom with the neighbours, drinking sake under the trees.	
ind	j	in	Дивали: ставишь масляные светильники по краю крыши.	Diwali: you set oil lamps along the edge of the roof.	
ind	j	ru	Субботняя баня, а потом чай с вареньем.	The bathhouse on Saturday, then tea with jam.	
ind	j		Ребёнок сделал первые шаги — прямо к тебе.	Your child takes its first steps, straight to you.	kids
ind	j		{Выиграл|Выиграла} гуся в лотерею на благотворительном базаре.	You win a goose in the raffle at the charity bazaar.	
ind	j		Поездом к морю, на один день. Столько воды ты никогда не {видел|видела}.	A day trip to the sea by train. You have never seen so much water.	+sea
ind	j	us	Ярмарка в округе: колесо обозрения и жареная кукуруза.	The county fair: a Ferris wheel and roast corn.	
ind	j	latam	Карнавал. Танцуешь три ночи подряд.	Carnival. You dance three nights running.	
ind	j		Первые ботинки из магазина, а не от деревенского сапожника.	Your first shop-bought boots, not the village cobbler's.	
ind	j		В газете печатают роман с продолжением. Ждёшь каждый номер.	The newspaper runs a serial novel. You wait for every issue.	lit
ind	j	en de fr it latam	По воскресеньям футбол на пустыре. Ты кричишь громче всех.	Football on the waste ground on Sundays. You shout loudest of all.	
ind	j	af	Свадьба у соседей. Барабаны до утра.	A wedding next door. Drums until morning.	
ind	j	au	Пикник у реки, чай в котелке над костром.	A picnic by the river, tea boiled in a billy over the fire.	
ind	j	me	Вечер в кофейне: сказитель читает про Рустама.	An evening at the coffee house: a storyteller tells of Rustam.	m
ind	j		Кошка окотилась в корзине с бельём.	The cat has kittens in the laundry basket.	
ind	o		Внук показывает тебе радио. Ты заглядываешь за ящик: где же там люди?	Your grandson shows you the radio. You look behind the box for the people.	kids grand
ind	o		Пенсии нет. Живёшь у дочери.	No pension. You live with your daughter.	kids
ind	o		Ты помнишь лошадей на улицах. Теперь по ним ездят автомобили.	You remember horses in the streets. Now cars drive on them.	town
ind	o		Пишешь внукам крупными печатными буквами. По-другому не умеешь.	You write to the grandchildren in big block letters. It's the only way you know.	lit kids grand
ind	o		Тебя снова фотографируют — через шестьдесят лет после первого раза.	You are photographed again, sixty years after the first time.	
ind	o	de en	Тебе назначили пенсию. Первый раз в жизни деньги ни за что.	You are granted a pension. For the first time in your life, money for nothing.	r1 r2
ind	o		Внучка читает тебе письма и пишет ответы под твою диктовку.	Your granddaughter reads you the letters and writes your answers as you dictate.	illit kids grand
ind	o		Ты помнишь, когда здесь не было железной дороги. Внуки не верят.	You remember when there was no railway here. The grandchildren don't believe you.	kids grand
ind	o	cn	Сыновья заранее купили тебе гроб. Ты с гордостью показываешь его гостям.	Your sons have bought your coffin in good time. You proudly show it to guests.	kids
ind	o	jp	Сын стал главой дома. Ты {перебрался|перебралась} в маленькую комнату у сада.	Your son becomes head of the house. You move to the small room by the garden.	kids
ind	o	in	Едешь на поезде в Бенарес. Входишь в Ганг по пояс и молишься.	You go by train to Benares. You wade into the Ganges to the waist and pray.	
ind	o	ru	Лежишь на печи и узнаёшь внуков по голосам.	You lie on the stove and know the grandchildren by their voices.	kids grand
ind	o		Сидишь у проходной и смотришь, как молодые идут на твоё место.	You sit by the factory gate and watch the young ones go in to your old place.	r1
ind	o		Первый раз в жизни едешь в автомобиле. Держишься за шляпу.	You ride in a motorcar for the first time in your life. You hold on to your hat.	
ind	o		Пальто, сшитое к свадьбе, ещё служит. Перелицовываешь его второй раз.	The coat made for your wedding still serves. You turn it a second time.	married
ind	o		Внуки бегают в кино. Ты так ни разу и не {сходил|сходила}: боишься тёмного зала.	The grandchildren run to the cinema. You have never been: the dark hall frightens you.	kids grand
ind	o	us	Сидишь в качалке на веранде. Мимо тарахтит соседский «форд».	You sit in a rocker on the porch. The neighbour's Ford rattles by.	
ind	o	it	{Вернулся|Вернулась} из Америки, чтобы умереть в своей деревне.	You come back from America to die in your own village.	
ind	o		Похоронил{|а} последнего друга детства. Некому теперь сказать: «А помнишь?»	You bury your last childhood friend. No one is left to say "remember?"	
ind	o		Каждое утро ждёшь почтальона: внук на войне.	Every morning you wait for the postman: your grandson is at the war.	kids grand
ind	o	latam	Сидишь на пороге с калебасой мате. Солнце садится за пампу.	You sit on the doorstep with a gourd of mate. The sun goes down over the pampas.	
ind	o	af	Дети ушли в город на рудники. Мотыгу берёшь сам{|а}, а внуки помогают.	The children have gone to the mines in town. You take up the hoe yourself; the grandchildren help.	kids !town grand
ind	x		Война. Мужчин забирают на фронт.	War. The men are taken to the front.	
ind	x		Холера. Каждый день кого-то несут на кладбище.	Cholera. Every day someone is carried to the graveyard.	
ind	x		Завод закрылся. Половина улицы без работы.	The works close. Half the street is out of work.	r1
ind	x		Неурожай и голод.	Crop failure and hunger.	!town
ind	x	ru	Отряд из города выгреб зерно до последнего мешка.	A detachment from the town takes the grain, down to the last sack.	r1
ind	x		Тиф. Слегли всей семьёй.	Typhus. The whole family is down with it.	
ind	x	cn	Хуанхэ прорвала дамбы. Деревня под водой.	The Yellow River breaks its dikes. The village is under water.	
ind	x	in	Муссон не пришёл. На базаре нет зерна, а что есть — увозят по железной дороге.	The monsoon fails. There's no grain in the market, and what there is goes away by rail.	
ind	x		Взрыв в шахте. Вся улица ждёт у ствола.	An explosion in the pit. The whole street waits at the shaft head.	r1
ind	x		Банк лопнул. Сбережения пропали за одно утро.	The bank fails. Your savings are gone in one morning.	r2 r3
ind	x		Пожар на фабрике. Двери были заперты.	A fire at the mill. The doors were locked.	r1
ind	x	jp	Землетрясение. Город горит три дня.	An earthquake. The city burns for three days.	
ind	x		Хозяин выселяет за долги. Вещи стоят на улице.	The landlord evicts you for debt. Your things stand in the street.	r1 r2
ind	c		Тебе поручили кур. Каждое утро ищешь, где они снеслись.	You are put in charge of the hens. Every morning you hunt for where they have laid.	
ind	c		Младшего брата носишь на спине, пока мать в поле.	You carry your little brother on your back while mother is in the field.	
ind	c		Дед вырезал тебе свисток из ивовой ветки. Свистишь, пока не отберут.	Grandfather cuts you a whistle from a willow twig. You blow it until it is taken away.	
ind	c		Тебя послали к соседям за огнём. Несёшь уголёк в черепке и дуешь на него.	You are sent to the neighbours for fire. You carry an ember in a potsherd, blowing on it.	
ind	c		Первые башмаки тебе велики. Мать набила носки тряпками.	Your first shoes are too big. Mother stuffs the toes with rags.	
ind	c		Старшие пугают тебя колодцем: там, мол, кто-то живёт.	The older children scare you with the well: something lives down there, they say.	
ind	c		Ты {донёс|донесла} ведро до дома и ни капли не {расплескал|расплескала}. Мать хвалит при всех.	You carry the bucket home without spilling a drop. Mother praises you in front of everyone.	
ind	c	ru	Зимой катаешься с горы на ледянке. Валенки полны снега.	In winter you slide down the hill on a board of ice. Your felt boots fill with snow.	
ind	c	en us	В воскресной школе за выученный стих дают картинку с ангелом.	At Sunday school you get a picture of an angel for a verse learned by heart.	
ind	c	de fr	В школу идёшь с грифельной доской. Из ранца на верёвочке болтается тряпка.	You go to school with a slate. A rag dangles from your satchel on a string.	
ind	c	cn	Стоишь под окном деревенской школы и слушаешь, как ученики хором твердят иероглифы.	You stand under the village school window listening to the pupils chant their characters.	
ind	c	cn	Летом спишь во дворе на бамбуковой лежанке. Бабушка обмахивает тебя веером.	In summer you sleep in the yard on a bamboo bed. Grandmother fans you.	
ind	c	jp	На Новый год запускаешь змея с нарисованным воином.	At New Year you fly a kite with a warrior painted on it.	
ind	c	in	Мать рисует у порога узор рисовой мукой. Ты стараешься на него не наступить.	Mother draws a pattern in rice flour at the door. You try not to step on it.	
ind	c	sea	Ловишь рыбёшек в канаве у рисового поля. Домой несёшь в половинке кокоса.	You catch little fish in the ditch by the paddy and carry them home in half a coconut.	
ind	c	af	Сторожишь просо от птиц. С утра до вечера кричишь и машешь пращой.	You guard the millet from the birds. From dawn to dusk you shout and swing a sling.	
ind	c	me it	Несёшь пекарю тесто на доске. Обратно — горячий хлеб.	You carry the dough to the baker on a board. You bring back hot bread.	
ind	c	latam it	Мать молится Деве у домашнего алтаря. Свечку зажигаешь ты.	Mother prays to the Virgin at the home altar. You are the one who lights the candle.	
ind	c	us au	Школа в одну комнату. Младшие сидят впереди, старшие сзади.	A one-room school. The little ones sit at the front, the big ones at the back.	
ind	c	au us	В школу ездишь верхом. Лошадь пасётся у ограды до конца уроков.	You ride to school. The horse grazes by the fence until lessons are over.	
ind	c	it fr	Давишь виноград ногами вместе со взрослыми. Пятки потом неделю лиловые.	You tread the grapes with the grown-ups. Your heels stay purple for a week.	
ind	c		В деревню пришёл первый трактор. Бежишь за ним до самого поля.	The first tractor comes to the village. You run behind it all the way to the field.	after:1925
ind	c	ru	В школе вместо икон — портреты. Учительница стрижена под мальчика.	At school there are portraits instead of icons. The teacher has her hair cut like a boy's.	after:1925
ind	y		Первый раз жнёшь наравне со взрослыми. К вечеру не разогнуться.	For the first time you reap alongside the grown-ups. By evening you can't straighten up.	!town
ind	y		Тебя впервые послали на базар продавать без старших. Обратно несёшь всё до копейки.	For the first time you are sent to sell at the market alone. You bring back every last coin.	
ind	y		Праздничную одежду тебе перешили из отцовской. Ходишь в ней осторожно.	Your feast-day clothes are cut down from your father's. You move carefully in them.	
ind	y		Ночью с друзьями бегаешь на реку купаться. Дома никто не знает.	At night you slip off to the river with friends to swim. No one at home knows.	
ind	y		Брата забрали в солдаты. Теперь из детей ты старше всех.	Your brother is taken for a soldier. Now you are the eldest child at home.	
ind	y		Первый раз всерьёз {поругался|поругалась} с отцом. Ночуешь у тётки.	You quarrel with your father in earnest for the first time. You spend the night at your aunt's.	
ind	y		Богатый сосед взял тебя в работники. Платит едой.	The rich neighbour takes you on as a hand. The pay is food.	
ind	y		Тебе доверили отвести скотину на продажу в соседнее село. Торгуешься, как отец.	You are trusted to take a beast to sell in the next village. You haggle just like your father.	!town
ind	y		Старуха-соседка гадает тебе по руке. Говорит, уедешь далеко.	The old woman next door reads your palm. She says you will go far away.	
ind	y	ru	На посиделки парни приносят гармонь. Девушки прядут и поют.	The lads bring an accordion to the evening gathering. The girls spin and sing.	
ind	y	cn	Учишься считать на счётах: дядя берёт тебя в лавку.	You learn the abacus: your uncle is taking you into his shop.	
ind	y	jp	Ходишь в деревенский союз молодёжи. Чините дорогу и разучиваете песни.	You join the village youth group. You mend the road and learn the songs.	
ind	y	af	Обряд взросления. Неделю живёте за деревней, старики учат вас.	The coming-of-age rite. A week outside the village, while the elders teach you.	
ind	y	me	Учишься у ткача на базаре. Мастер кормит тебя обедом и бьёт за спутанную нить.	You learn from a weaver in the bazaar. The master feeds you lunch and beats you for a tangled thread.	
ind	y	latam	Сафра. Рубишь тростник мачете с рассвета до темноты.	The zafra. You cut cane with a machete from dawn to dark.	
ind	y	au	Объезжаешь лошадей на соседней станции. Падаешь чаще, чем сидишь в седле.	You break horses on the next station. You fall off more than you stay on.	
ind	y	us	Нанимаешься на жатву в прериях. Ночуешь в стогах.	You hire on for the harvest on the plains. You sleep in haystacks.	!town
ind	y	en	По субботам танцы в зале над пабом.	On Saturdays there are dances in the room above the pub.	
ind	y	it fr	Сбор винограда кончился. Вечером танцуешь на току под скрипку.	The grape harvest is over. In the evening you dance on the threshing floor to a fiddle.	!town
ind	y	in	Тебя выдали замуж ещё девочкой. Теперь пора переезжать в дом мужа.	You were married as a little girl. Now it is time to move to your husband's house.	f !monk
ind	y	de	Подмастерьем идёшь из города в город. В каждом цеху дают ночлег и хлеб.	As a journeyman you walk from town to town. Every guild gives you a bed and bread.	m +town
ind	y	sea	Тебя на три месяца отдали в монастырь послушником. Бреют голову.	You are sent to the monastery as a novice for three months. They shave your head.	m
ind	y	ru	Отец берёт тебя в извоз до губернского города. Ночуете на постоялом дворе.	Father takes you carting to the provincial town. You sleep at a coaching inn.	m
ind	a		Весной зерно кончилось. Занимаешь мешок у соседа до нового урожая.	In spring the grain runs out. You borrow a sack from the neighbour until the new harvest.	!town
ind	a		Чинишь крышу перед дождями. Сосед подаёт снизу.	You mend the roof before the rains. The neighbour hands things up.	
ind	a		Продаёшь на базаре яйца. До полудня держишь цену, потом уступаешь.	You sell eggs at the market. You hold your price until noon, then give way.	
ind	a		{Похоронил|Похоронила} отца. На поминки занимали у всей родни.	You bury your father. You borrow from the whole family for the funeral feast.	
ind	a		В деревне сборщик налогов. Всё лучшее прячешь подальше.	The tax collector is in the village. You hide the best of everything.	
ind	a		Сосед передвинул межевой камень. Ссоритесь целый год.	The neighbour moves the boundary stone. You quarrel for a whole year.	
ind	a		Помогаешь соседям ставить дом. Хозяин кормит всех, кто пришёл.	You help the neighbours put up their house. The owner feeds everyone who came.	
ind	a		Перекупщик из города берёт урожай на корню. Платит вперёд, но вдвое дешевле.	A dealer from town buys the crop in the field. He pays in advance, but at half the price.	!town
ind	a		Цены на зерно упали вдвое. Говорят, это из-за пароходов из-за моря.	Grain prices halve. They say it's the steamers from across the sea.	
ind	a		Гостю отдали лучшее место. Сам{|а} спишь на полу.	The guest gets the best bed. You sleep on the floor.	
ind	a		Долг лавочнику отдаёшь зерном. Взвешивает он на своих весах.	You pay off the shopkeeper in grain. He weighs it on his own scales.	
ind	a		В деревне открыли школу. Учитель живёт у старосты.	A school opens in the village. The teacher lodges with the headman.	
ind	a		Едешь в уездный город к писарю: нужна бумага на землю.	You go to the district town to see the clerk: you need a paper for your land.	!town
ind	a		Кончилась соль. За ней полдня ходьбы.	The salt has run out. It's half a day's walk to get more.	
ind	a		Брат просит в долг. Даёшь, хоть и знаешь, что не вернёт.	Your brother asks for a loan. You give it, though you know you won't see it again.	
ind	a		Говорят, в городе строят фабрику и нанимают всех подряд. Ты идёшь посмотреть.	They say a factory is going up in town and they're hiring anyone. You go to have a look.	
ind	a		Выдаёте замуж младшую сестру. Готовились целый год.	Your younger sister is married off. The family prepared for a whole year.	
ind	a	cn	Половину урожая забирает помещик. Он стоит у тока со своими весами.	Half the harvest goes to the landlord. He stands by the threshing floor with his own scales.	!town
ind	a	in	Ростовщик записывает твой долг в свою книгу. Что там на самом деле, знает только он.	The moneylender writes your debt in his book. Only he knows what it really says.	
ind	a	jp	Земельный налог берут деньгами. Чтобы заплатить, продаёшь рис ещё зелёным.	The land tax must be paid in money. To pay it you sell your rice while it's still green.	
ind	a	sea	Чиновник из колониальной конторы считает пальмы у тебя во дворе. С каждой — налог.	An official from the colonial office counts the palms in your yard. Each one is taxed.	
ind	a	af	Сажаешь арахис на продажу. Купец платит тканью и солью.	You grow groundnuts to sell. The trader pays in cloth and salt.	
ind	a	me	Весной уходите с отарой на горные пастбища. Шатёр везёт верблюд.	In spring you take the flock up to the mountain pastures. A camel carries the tent.	!town
ind	a	latam	Хозяин асьенды платит жестяными жетонами. Берут их только в его лавке.	The hacienda owner pays in tin tokens. Only his own store takes them.	
ind	a	us	Первый дом в прерии сложен из пластов дёрна. С потолка сыплется земля.	Your first house on the prairie is built of sod. Earth sifts down from the ceiling.	!town
ind	a	au	Почта приходит на станцию раз в месяц, с караваном верблюдов.	The mail reaches the station once a month, with the camel train.	
ind	a	en	Платишь по пенни в неделю в похоронный клуб, чтобы не лечь в общую могилу.	You pay a penny a week into the burial club, so you won't end in a pauper's grave.	
ind	a	de	По вечерам поёшь в хоровом обществе. Готовитесь к празднику песни.	In the evenings you sing in the choral society, practising for the song festival.	
ind	a	fr	Каждое утро сдаёшь молоко в сыроварню. Там записывают, сколько литров.	Every morning you take your milk to the cheese dairy. They write down how many litres.	
ind	a	it	Все оливки — под хозяйский пресс. Твоё масло отмеряют ковшом.	All the olives go to the landlord's press. Your share of the oil is measured out by the ladle.	!town
ind	a	jp cn	Выкармливаешь шелкопряда. Неделю спишь урывками: черви едят и ночью.	You raise silkworms. For a week you sleep in snatches: they feed all night.	
ind	a	ru	Сход переделил землю по едокам. Тебе досталась полоса у оврага.	The village assembly shares out the land by mouths. You get a strip by the ravine.	before:1930 !town
ind	a	ru	На трудодни выдали полмешка ржи за весь год.	For a year of workdays on the kolkhoz you are paid half a sack of rye.	after:1932 r1
ind	a		В поле пришёл трактор. Пашет за день столько, сколько ты за неделю.	A tractor comes to the fields. It ploughs in a day what you plough in a week.	after:1930 r1 !town
ind	j		Урожай собран. Вечером на току поют до темноты.	The harvest is in. In the evening they sing on the threshing floor until dark.	!town
ind	j		{Купил|Купила} на ярмарке зеркальце. Смотришься в него украдкой.	You buy a little mirror at the fair. You glance into it on the sly.	
ind	j		У вас ночует странник. До полуночи рассказывает про дальние края.	A wanderer stays the night. He talks of far-off lands until midnight.	
ind	j		Перекрыли крышу. В первый дождь лежишь и слушаешь: не каплет.	The roof is redone. In the first rain you lie listening: no drips.	
ind	j		Через двадцать лет зашёл друг детства. Ты {узнал|узнала} его по смеху.	A childhood friend calls after twenty years. You know him by his laugh.	
ind	j		Коза принесла тройню.	The goat has triplets.	!town
ind	j	ru	Масленица: блины, катание на тройках, взятие снежного городка.	Shrovetide: pancakes, troika rides, storming the snow fort.	
ind	j	cn	В чайной слушаешь сказителя: сегодня про Троецарствие.	In the teahouse you listen to the storyteller: tonight it's the Three Kingdoms.	
ind	j	af	После работы в поле пальмовое вино идёт по кругу.	After the work in the fields, palm wine goes round.	!town
ind	j	in	Холи. До вечера ходишь в цветной пыли.	Holi. You go about covered in coloured powder until evening.	
ind	j	sea	Праздник воды: обливаете друг друга из ковшей.	The water festival: you drench each other from ladles.	
ind	j	jp	Бон: танцуете в кругу под фонарями.	Obon: you dance in the ring under the lanterns.	
ind	j	de	Пиво в саду под каштанами. По воскресеньям играет оркестр.	Beer in the garden under the chestnut trees. On Sundays a band plays.	
ind	j	fr it	Праздник святого покровителя: танцы на площади до утра.	The patron saint's feast: dancing in the square until morning.	
ind	j	en	Выходной на взморье: ослики, моллюски в кульке, оркестр на пирсе.	A bank holiday at the seaside: donkey rides, a paper cone of cockles, a band on the pier.	
ind	j	us au	Танцы в амбаре. Скрипач играет, пока не лопнет струна.	A barn dance. The fiddler plays until a string snaps.	!town
ind	j	me	Курбан-байрам. Режете барана, мясо разносишь соседям.	Eid al-Adha. A ram is slaughtered and you take the meat round to the neighbours.	
ind	j	latam	Петушиные бои в воскресенье. {Поставил|Поставила} и {выиграл|выиграла}.	The cockfight on Sunday. You place a bet and win.	
ind	j	au	Скачки в посёлке. Все ставят на коня соседа.	Race day in the township. Everyone backs the neighbour's horse.	
ind	o		Ноги уже не носят в поле. Сидишь у ворот и лущишь бобы.	Your legs won't carry you to the field any more. You sit by the gate shelling beans.	!town
ind	o		Зубов почти не осталось. Тебе варят кашу отдельно.	You have hardly a tooth left. They cook your porridge separately.	
ind	o		Смертная одежда готова и лежит в сундуке. Иногда достаёшь её проверить.	Your burial clothes are ready in the chest. Now and then you take them out to check.	
ind	o		Ночью почти не спишь. Слушаешь, как дышит дом.	You hardly sleep at night. You listen to the house breathing.	
ind	o		Только ты помнишь, где шла старая дорога, пока её не распахали.	Only you remember where the old road ran before it was ploughed under.	
ind	o		Глаза уже не те. Нитку в иголку тебе вдевает соседская девочка.	Your eyes are not what they were. The neighbour's girl threads your needle.	
ind	o		Тебе дают за столом лучший кусок. Ты отдаёшь его детям.	At the table they give you the best piece. You pass it to the children.	kids
ind	o		Целый день греешься на солнце у стены. Рядом спит кошка.	All day you warm yourself in the sun by the wall. The cat sleeps beside you.	
ind	o		Молодые смеются над твоими приметами. А дождь всё-таки пошёл.	The young laugh at your weather signs. But the rain comes all the same.	
ind	o		На свадьбе тебя посадили на самое почётное место. Ты {задремал|задремала}.	At the wedding they seat you in the place of honour. You doze off.	
ind	o		Ходишь с палкой. С ней ходил ещё твой отец.	You walk with a stick. Your father walked with it before you.	
ind	o	ru	Зимой плетёшь лапти на всю семью.	In winter you weave bast shoes for the whole family.	
ind	o	cn	Каждое утро выносишь клетку с птицей под деревья и слушаешь, как она поёт.	Every morning you carry your bird's cage out under the trees and listen to it sing.	
ind	o	in	По вечерам у храма слушаешь, как читают Рамаяну. Знаешь её наизусть, а всё равно плачешь.	In the evenings you listen to the Ramayana read at the temple. You know it by heart and still you cry.	
ind	o	jp cn	Каждое утро ставишь рис на алтарь предков.	Every morning you set rice on the ancestors' altar.	
ind	o	af	У вечернего огня рассказываешь внукам про паука Ананси.	By the evening fire you tell the grandchildren about Anansi the spider.	kids grand
ind	o	me	Перебираешь чётки на пороге и здороваешься с каждым прохожим.	You tell your beads on the doorstep and greet everyone who passes.	
ind	o	sea in	Жуёшь бетель. Зубы красные, как были у твоей бабки.	You chew betel. Your teeth are red, as your grandmother's were.	
ind	o	latam	Плетёшь шляпы из пальмового листа. Сын возит их в город на продажу.	You weave palm-leaf hats. Your son takes them to town to sell.	kids grown
ind	o	us	Сидишь у печки в лавке и споришь со стариками о выборах.	You sit by the stove in the general store arguing with the old men about the election.	
ind	o	en	Ходишь в паб на одну пинту. Твоё место у камина никто не занимает.	You go to the pub for one pint. No one takes your seat by the fire.	
ind	o	fr de it	После мессы сидишь на лавке у церкви, пока не позовут обедать.	After mass you sit on the bench by the church until they call you to dinner.	
ind	o	au us	Ты помнишь, как здесь стояла одна палатка. Теперь тут улица и банк.	You remember one tent standing here. Now there's a street and a bank.	
ind	x		Оспа в деревне. Детей не выпускают из дому.	Smallpox in the village. The children are kept indoors.	
ind	x		Ночью сгорел дом. Вынесли только детей и одеяло.	The house burns down in the night. You save only the children and a blanket.	
ind	x		Колодцы пересохли. Воду возят издалека и продают.	The wells run dry. Water is carted from far away and sold.	
ind	x		Отец умер в одночасье. Его долги теперь на тебе.	Father dies suddenly. His debts are now yours.	
ind	x		Мор на скотину. За месяц не осталось ни одной головы.	A cattle plague. In a month not one beast is left.	!town
ind	x		Пришли солдаты. Забрали лошадей и зерно.	Soldiers come. They take the horses and the grain.	
ind	x	ru	Пожар: изба за избой выгорела половина деревни.	Fire: house after house, half the village burns.	
ind	x	cn	Бандиты захватили деревню и требуют выкуп серебром.	Bandits seize the village and demand a ransom in silver.	
ind	x	in	Чума. Санитары окуривают дома и уводят больных.	Plague. Inspectors fumigate the houses and take the sick away.	
ind	x	af	Твою землю отдали под ферму белым. Вас переселили на сухие холмы.	Your land is given to a white farmer. You are moved to the dry hills.	!town
ind	x	us au	Град за десять минут положил всю пшеницу.	In ten minutes the hail flattens the whole wheat crop.	!town
ind	x	jp	Волна смыла рыбацкий посёлок.	A great wave washes the fishing village away.	
ind	x	latam	Жёлтая лихорадка в порту. Заколачивают дома.	Yellow fever in the port. Houses are boarded up.	
ind	x	au	Засуха. Овцы падают у пересохших запруд.	Drought. The sheep drop by the dry dams.	!town
ind	x	it fr	Филлоксера. Виноградник сохнет лоза за лозой.	Phylloxera. The vineyard dies, vine after vine.	!town
ind	x		Испанка. За месяц умерло больше, чем за всю войну.	The Spanish flu. More die in a month than in the whole war.	after:1918 before:1920
ind	c		Мать перестала кормить тебя грудью: родился младший.	Your mother stops nursing you: a younger one has been born.	small
ind	c		Ты {сделал|сделала} первые шаги — прямо к лестнице. Мать успела.	You take your first steps, straight towards the stairs. Your mother is quicker.	small
ind	c		Твоё первое слово — «дай».	Your first word is "give".	small
ind	c		Спишь между матерью и старшей сестрой. Там теплее всего.	You sleep between your mother and your older sister. It is the warmest place.	small
ind	c		Тебя носят за спиной, пока мать работает. Мир ты видишь через её плечо.	You are carried on your mother's back while she works. You see the world over her shoulder.	small
ind	c		Тебя чуть не унесла лихорадка. Бабка просидела рядом три ночи.	A fever nearly takes you. Your grandmother sits by you for three nights.	small
ind	c		Ты {съел|съела} горсть земли и {остался|осталась} очень {доволен|довольна}.	You eat a handful of earth and are very pleased with yourself.	small
ind	c		Боишься петуха. Он ходит за тобой по всему двору.	You are afraid of the rooster. It follows you all round the yard.	small
ind	c		Старшие дети таскают тебя за собой, как куклу.	The older children drag you about like a doll.	small
ind	c		Засыпаешь под песню, которую мать поёт без слов.	You fall asleep to a song your mother hums without words.	small
ind	c		Ты {упал|упала} и {рассёк|рассекла} лоб. Шрам останется на всю жизнь.	You fall and cut your forehead. The scar will stay for life.	small
ind	c		Плачешь, когда отец уходит, и смеёшься, когда он возвращается.	You cry when your father leaves and laugh when he comes back.	small
ind	c		Таскаешь собаку за хвост, а она терпит.	You pull the dog's tail, and it puts up with it.	small
ind	c		Тебе дали первую ложку. Половина каши на полу.	You are given your first spoon. Half the porridge ends up on the floor.	small
ind	c		Ты {спрятался|спряталась} под лавку, и тебя полдня искали всей семьёй.	You hide under the bench, and the whole family searches for you half the day.	small
ind	c		Ты всё время тянешь в рот блестящее. Мать вынимает и смеётся.	You keep putting shiny things in your mouth. Your mother takes them out and laughs.	small
ind	c		Сидишь у порога и встречаешь каждого, кто входит, своим словом.	You sit by the door and greet everyone who comes in with your own word.	small
ind	c	eu ru	Тебя крестили зимой в холодной церкви. Ты {кричал|кричала} так, что священник улыбнулся.	You are baptised in winter in a cold church. You scream so hard the priest smiles.	small
ind	c		Тебя сфотографировали первый раз. Ты сидишь у матери на коленях и не понимаешь, куда смотреть.	You are photographed for the first time. You sit on your mother's lap and don't know where to look.	small
`,_e=`# group	kind	tags	ru	en	need
med	c		Чуть не {утонул|утонула} в пруду. Вытащил сосед.	You nearly drown in the pond. A neighbour pulls you out.	
med	c	eu ru	На ярмарке {видел|видела} медведя на цепи и человека, что глотает огонь.	At the fair you see a bear on a chain and a man who swallows fire.	
med	c		Зимой умерли двое младших. Мать долго молчала.	Two of the little ones die in winter. Mother is silent for a long time.	
med	c	eu ru cn	{Пас|Пасла} гусей и всех {знал|знала} по именам.	You herd geese and know them all by name.	
med	c	eu ru	Дед вырезал тебе свистульку из ивы.	Grandfather carves you a willow whistle.	
med	c	cn sea	Зимний праздник: фонари, хлопушки, сладкие клёцки.	The winter feast: lanterns, firecrackers, sweet dumplings.	
med	c	eu ru	На Рождество в церкви столько свечей, что светло как днём.	At Christmas there are so many candles in church it is as bright as day.	
med	c	me in	Отец взял тебя на базар. Ты {потерялся|потерялась} среди мешков с пряностями. Этот запах помнишь всю жизнь.	Father takes you to the bazaar. You get lost among the sacks of spice. You remember that smell all your life.	
med	c		Мать повязала тебе на запястье красную нитку от сглаза.	Mother ties a red thread round your wrist against the evil eye.	
med	c	eu ru cn in me eg af jp sea meso andes	{Нашёл|Нашла} в поле ржавый наконечник стрелы. {Носил|Носила} за пазухой, пока не {потерял|потеряла}.	You find a rusty arrowhead in the field. You keep it in your shirt until you lose it.	
med	c	eu ru cn in me eg af jp sea meso andes	С рассвета до темноты гоняешь птиц с поля трещоткой.	From dawn till dark you scare birds off the field with a rattle.	
med	c		Тебе дали подержать новорождённого брата. Он красный и кричит.	They let you hold your newborn brother. He is red and screaming.	
med	c		Молния ударила в старое дерево у дороги. Взрослые шептались до ночи.	Lightning strikes the old tree by the road. The grown-ups whisper about it till night.	
med	c	cn	Весь день {стоял|стояла} по колено в воде на рисовом поле. Пиявки, солнце и мамина песня.	All day you stand knee-deep in the rice field. Leeches, sun and your mother's song.	
med	c	cn	Сыновей богатого соседа водят к учителю. Ты {слушал|слушала} под окном и {выучил|выучила} десять иероглифов.	The rich neighbour's sons go to a teacher. You listen under the window and learn ten characters.	
med	c	cn	Дед учит тебя считать на счётах. Косточки стучат, как дождь по крыше.	Grandfather teaches you to count on the abacus. The beads click like rain on the roof.	
med	c	in	В дожди вода подошла к самому порогу. Ты {пускал|пускала} по ней лодочки из листьев.	In the rains the water comes up to the doorstep. You float little boats of leaves on it.	
med	c	in	Бабушка рассказывает, как маленький Кришна воровал масло. Ты смеёшься каждый раз.	Grandmother tells how little Krishna stole the butter. You laugh every time.	
med	c	me eg	Учишь Коран наизусть в школе при мечети. Учитель бьёт палочкой по пальцам.	You learn the Quran by heart at the mosque school. The teacher raps your fingers with a stick.	m
med	c	me eg	Мать берёт тебя с собой в хаммам. Там пар, сплетни и гранаты на обед.	Mother takes you to the hammam. There is steam, gossip and pomegranates for lunch.	
med	c	eu	Осенью {собирал|собирала} в господском лесу жёлуди для свиней.	In autumn you gather acorns for the pigs in the lord's wood.	
med	c	eu	Священник учит детей «Отче наш» на латыни. Ты не понимаешь ни слова, но помнишь всё.	The priest teaches the children the Our Father in Latin. You understand not a word, but you remember it all.	
med	c	ru	Бабушка ставит тебя молиться в красный угол. Ты смотришь, как пляшет огонёк лампадки.	Grandmother sets you to pray in the icon corner. You watch the little lamp flame dance.	
med	c	ru	{Ходил|Ходила} с сёстрами по малину. Увидели медведя и бежали до самой деревни.	You go raspberry picking with your sisters. You see a bear and run all the way home.	
med	c	ru	После бани тебя вываляли в снегу. Ты {визжал|визжала} на всю округу.	After the bathhouse they roll you in the snow. You shriek so the whole village hears.	
med	c	af	Гриот пел про старых царей. Ты {запомнил|запомнила} только имя царского коня.	The griot sings of the old kings. All you remember is the name of the king's horse.	
med	c	af	Отец дал тебе пожевать орех колы. Горько, и сердце стучит.	Father gives you a kola nut to chew. It is bitter and your heart races.	
med	c	jp	Вечером бьёт храмовый колокол. Значит, пора домой.	In the evening the temple bell rings. That means it is time to go home.	
med	c	jp	Летом {ловил|ловила} светлячков и {сажал|сажала} их в бумажный фонарик.	In summer you catch fireflies and put them in a paper lantern.	
med	c	meso	Мать мелет кукурузу на камне ещё до рассвета. Ты просыпаешься под этот звук.	Mother grinds maize on the stone before dawn. You wake to the sound.	
med	c	meso	На празднике тебе дали глоток какао. Горький, в пене. Ты {попросил|попросила} ещё.	At the feast they give you a sip of cacao. Bitter and frothy. You ask for more.	
med	c	andes	{Пас|Пасла} лам высоко в горах. Ночью холодно, грелись о них.	You herd llamas high in the mountains. At night it is cold and you warm yourself against them.	
med	c	andes	У старосты верёвка с узелками. Он говорит, в ней записано всё селение.	The headman has a cord full of knots. He says the whole village is written in it.	
med	c	au	Тётки учат тебя искать под землёй сладкие клубни. Палка-копалка выше тебя.	Your aunts teach you to find sweet tubers underground. The digging stick is taller than you.	
med	c	au	У костра старик рассказывал, как предки сделали эту реку.	By the fire an old man tells how the ancestors made this river.	
med	c	au	Отец учит тебя читать следы на песке. Ты путаешь эму с дрофой.	Father teaches you to read tracks in the sand. You mix up the emu and the bustard.	
med	c	sea	Тебя впервые посадили на буйвола. Он шёл медленно, а ты {сидел|сидела} гордо.	For the first time they put you on the buffalo. It walks slowly and you sit proudly.	
med	c	eu ru cn in me eg af jp sea meso andes	{Свалился|Свалилась} с дерева и {сломал|сломала} руку. Костоправ вправил, ты {орал|орала}.	You fall out of a tree and break your arm. The bonesetter sets it while you howl.	
med	c		Брат научил тебя свистеть в два пальца.	Your brother teaches you to whistle with two fingers.	
med	c		Ты долго {болел|болела}. Когда {встал|встала}, мать дала тебе мёду.	You are ill for a long time. When you get up, mother gives you honey.	
med	c	it fr	Давишь виноград босыми ногами в большом чане. Ноги потом красные до колен.	You tread grapes barefoot in the big vat. Afterwards your legs are red to the knee.	
med	c	en de	На Майский день плясали вокруг шеста с лентами.	On May Day you dance round the pole with ribbons.	
med	c	eu ru cn in me eg af jp sea meso andes	Через деревню проскакал чужой всадник. Все дети бежали за ним до околицы.	A strange rider gallops through the village. All the children run after him to the edge of it.	
med	y	eu ru cn in me eg af jp sea meso andes	Сгорел амбар. Отстраивали всем миром.	The barn burns down. The whole village builds it again.	!town
med	y	eu ru cn in me eg af jp sea meso andes	Господин поднял подати.	The lord raises the dues.	
med	y	eu ru cn in me eg af jp sea meso andes	Впервые {увидел|увидела} книгу — у писаря. Она пахнет кожей и воском.	For the first time you see a book, the scribe's. It smells of leather and wax.	
med	y		На посиделках пели до полуночи. Одну песню ты {запомнил|запомнила} на всю жизнь.	At the evening gathering you sing till midnight. You keep one song all your life.	
med	y	eu ru cn in me eg af jp sea meso andes	Через деревню шли паломники. Один рассказывал про город с золотыми крышами.	Pilgrims pass through the village. One tells of a city with golden roofs.	
med	y	eu ru	Отец впервые пустил тебя за плуг одного. Борозда вышла кривая.	For the first time father lets you plough alone. The furrow comes out crooked.	m !town
med	y		Мать учит тебя ткать. Первый холст вышел кривой, но его всё равно пустили на рубахи.	Mother teaches you to weave. The first cloth comes out crooked, but it still goes into shirts.	f
med	y	eu ru cn in me eg af jp sea meso andes	Тебе нравится {дочь|сын} кузнеца. Ты по три раза на дню {ходил|ходила} мимо кузни.	You like the smith's {daughter|son}. You walk past the forge three times a day.	
med	y	cn	Дядя в третий раз едет сдавать экзамены. Вся семья копила ему на кисти и бумагу.	Your uncle goes to sit the examinations for the third time. The whole family saved for his brushes and paper.	
med	y	cn	Мать учит тебя кормить шелкопряда. Он ест день и ночь и шуршит, как дождь.	Mother teaches you to feed the silkworms. They eat day and night and rustle like rain.	f
med	y	in	Родители нашли тебе {невесту|жениха} из своей касты. Ты {видел|видела} {её|его} один раз, на празднике.	Your parents find you a {bride|groom} of your own caste. You have seen {her|him} once, at a festival.	!monk
med	y	in	На Холи тебя обсыпали красным порошком с головы до ног. {Отмывался|Отмывалась} три дня.	At Holi they cover you in red powder from head to foot. It takes three days to wash off.	
med	y	me	Дядя взял тебя с караваном в соседний город. Ночью погонщики верблюдов пели у костра.	Your uncle takes you with the caravan to the next town. At night the camel drivers sing by the fire.	m
med	y	ru	На Купалу прыгали через костёр парами. Ты {прыгал|прыгала} с тем, с кем {хотел|хотела}.	On Kupala night you jump over the fire in pairs. You jump with the one you wanted.	
med	y	ru	Отец взял тебя в лес бить белку. Шкурки пойдут на дань.	Father takes you into the forest to hunt squirrel. The pelts will go for the tribute.	m
med	y	af	Купцы привезли с севера соль большими плитами. За неё платят золотым песком.	Merchants bring salt from the north in great slabs. It is paid for in gold dust.	
med	y	jp	Приехали сборщики риса от даймё. Отец кланялся им до земли.	The daimyo's rice collectors come. Father bows to them down to the ground.	
med	y	meso	Тебя отдали в школу при храме. Там учат петь, плясать и молчать.	You are sent to the temple school. They teach you to sing, to dance and to keep quiet.	
med	y	andes	Первая мита: месяц таскаешь камни на дорогу Инки.	Your first mit'a: a month hauling stones for the Inca's road.	m
med	y	eu	Подрался с парнями из соседней деревни. Неделю ходил с подбитым глазом.	You fight the lads from the next village. You go about with a black eye for a week.	m
med	y		Впервые {увидел|увидела} море. Оно никак не кончалось.	You see the sea for the first time. It goes on and on.	+sea !sea
med	y	eu ru cn in me eg af jp sea meso andes	Тебя отдали в монастырь. Первую зиму ты {плакал|плакала} по ночам.	You are given to the monastery. The first winter you cry at night.	monk
med	y		Весной ты {влюбился|влюбилась}. Никому не {сказал|сказала}.	In spring you fall in love. You tell no one.	
med	y	eu ru cn in me eg af jp sea meso andes	{Ушёл|Ушла} в город наниматься. Первую ночь {спал|спала} под мостом.	You go to town to find work. The first night you sleep under a bridge.	town
med	y	eu ru cn in me eg af jp sea meso andes	Умер отец. Теперь на тебе весь дом.	Father dies. Now the whole house is on you.	
med	y	sea	Танцовщицы готовятся к храмовому празднику. Ты {смотрел|смотрела} на них сквозь щель в стене.	The dancers are getting ready for the temple feast. You watch them through a gap in the wall.	
med	y	au	Тебя ведут на посвящение. О том, что там было, нельзя говорить никому.	You are taken to be initiated. What happens there you may tell no one.	
med	y	en	На Майский день тебя выбрали королевой праздника.	On May Day you are chosen Queen of the May.	f
med	y	eu ru af	Первый раз {напился|напилась} на соседской свадьбе. Худо было до утра.	You get drunk for the first time at a neighbour's wedding. You are sick till morning.	
med	y		Тебе приснился вещий сон. Бабка растолковала: будет дальняя дорога.	You have a prophetic dream. Grandmother reads it: a long road lies ahead.	
med	y	meso	Мать учит тебя ткать на поясном станке. Один конец привязан к дереву, другой к тебе.	Mother teaches you to weave on the backstrap loom. One end is tied to a tree, the other to you.	f
med	y	cn	Тебя отдали в ученики к лавочнику в уездный город. Спишь под прилавком.	You are apprenticed to a shopkeeper in the county town. You sleep under the counter.	town
med	a	eu ru	Голодный год. Ели лебеду.	A hungry year. You eat goosefoot.	
med	a		{Ходил|Ходила} на богомолье за три дня пути.	You go on pilgrimage, three days on foot.	
med	a	eu ru in me af	Купили вторую корову. Теперь молока хватает всем детям.	You buy a second cow. Now there is milk for all the children.	kids !town
med	a	eu ru cn in me eg af jp sea meso andes	Мельник обвесил. Ты {промолчал|промолчала}: он родня господину.	The miller cheats on the weight. You say nothing: he is the lord's kin.	
med	a	eu ru cn in me eg af jp sea meso andes	Пожар перекинулся с соседнего двора. Спасли детей и сундук.	Fire jumps from the next yard. You save the children and the chest.	kids
med	a		Год без войны и без мора. Старики такого не помнят.	A year with no war and no plague. The old folk do not remember one like it.	
med	a	eu	Три дня в неделю работаешь на господском поле. Своё ждёт.	Three days a week you work the lord's field. Your own one waits.	r0 !town
med	a	eu	В этом году твоя полоса под паром. Пасёшь на ней овец.	This year your strip lies fallow. You graze sheep on it.	!town
med	a	en	Тебя выбрали церковным старостой. Теперь ключ от приходского сундука у тебя.	You are chosen churchwarden. Now you keep the key to the parish chest.	m
med	a	fr de	Молоть можно только на мельнице сеньора. Он берёт каждый шестнадцатый мешок.	You may only grind at the lord's mill. He takes every sixteenth sack.	!town
med	a	fr de en	Строят новый собор. Ты всё лето {возил|возила} камень за похлёбку и отпущение грехов.	They are building a new cathedral. All summer you haul stone for soup and the forgiveness of sins.	
med	a	it	Держишь лавку у моста. Торгуешь сукном, считаешь на доске с камешками.	You keep a shop by the bridge. You sell cloth and reckon on a counting board.	r2
med	a	it	Купец привёз шёлк с Востока. Ты {потрогал|потрогала} его, он как вода.	A merchant brings silk from the East. You touch it, it is like water.	
med	a	ru	{Ездил|Ездила} в город на торг с мёдом и воском.	You go to the town market with honey and wax.	
med	a	ru	Отвезли дань ордынскому баскаку. Себе осталось только на семена.	The tribute goes to the Horde's collector. You are left with only the seed grain.	
med	a	ru	По субботам топишь баню. Паришься берёзовым веником, потом квас.	On Saturdays you heat the bathhouse. A birch switch, then kvass.	
med	a	ru	Боярин забрал тебя с лошадью в обоз на всё лето.	The boyar takes you and your horse into his baggage train for the whole summer.	m
med	a	ru	Сгорел весь посад. Через месяц снова стучали топоры.	The whole town quarter burns. A month later the axes are knocking again.	
med	a	cn	Чиновник обмерил твою землю и записал в книгу. Налог теперь больше.	An official measures your land and writes it in his book. The tax is higher now.	!town
med	a	cn	Сын едет сдавать экзамены. Ты {продал|продала} свинью ему на дорогу.	Your son goes to sit the examinations. You sell the pig to pay his way.	kids !town
med	a	cn	После сбора пьёшь чай с соседом. Он хвалит твой рис, ты его детей.	After the harvest you drink tea with your neighbour. He praises your rice, you praise his children.	
med	a	cn	Возишь соль на барже по Великому каналу. За лето три раза туда и обратно.	You carry salt by barge on the Grand Canal. Three times there and back in a summer.	m r2
med	a	in	Дожди запаздывают. Каждое утро смотришь на небо и носишь воду в храм.	The rains are late. Every morning you look at the sky and carry water to the temple.	
med	a	in	Пришли люди раджи. Забрали шестую часть урожая.	The raja's men come. They take a sixth of the harvest.	!town
med	a	in	Ткёшь хлопок. Купец забирает всё и везёт к морю.	You weave cotton. A merchant takes it all and carries it to the sea.	r2
med	a	in	Каждое утро рисуешь у порога узор из рисовой муки. Муравьи съедают его к полудню.	Every morning you draw a pattern in rice flour at the door. By noon the ants have eaten it.	f
med	a	in	Брахман не пустил тебя к храмовому колодцу. Ходишь за водой к реке.	The Brahmin will not let you near the temple well. You fetch water from the river.	r0
med	a	me	В пятницу идёшь в соборную мечеть. На ступенях после молитвы продают арбузы.	On Friday you go to the great mosque. After prayers they sell melons on the steps.	m
med	a	me	Держишь лавку на крытом базаре. Сосед чеканит медь и стучит весь день.	You keep a stall in the covered bazaar. Your neighbour beats copper all day long.	r2
med	a	eg	Нил поднялся как надо. В деревне режут барана.	The Nile rises just right. The village slaughters a ram.	
med	a	eg	Месяц чистишь каналы по приказу эмира. В иле по пояс.	For a month you clear the canals on the emir's orders, waist-deep in silt.	
med	a	af	Меняешь сушёную рыбу на соль у купцов с севера.	You trade dried fish for salt with the merchants from the north.	
med	a	af	Вождь созвал всех расчищать новое поле. Жгли кустарник три дня.	The chief calls everyone to clear a new field. You burn the bush for three days.	!town
med	a	af	Ходил с караваном в Тимбукту. Там глиняная мечеть выше любого дерева.	You go with a caravan to Timbuktu. Its mud mosque is taller than any tree.	m r2
med	a	jp	Сажаете рис всей деревней. Поют, чтобы держать шаг.	The whole village plants rice together. They sing to keep the pace.	
med	a	jp	Даймё воюет с соседом. Забрали лошадь и двух парней.	The daimyo is at war with his neighbour. They take a horse and two young men.	
med	a	sea	Строят храм для царя. Ты всё сухое время {возил|возила} песчаник с реки.	They are building a temple for the king. All the dry season you haul sandstone from the river.	
med	a	sea	Царские водохранилища полны. Значит, будет два урожая.	The king's reservoirs are full. That means two harvests.	!town
med	a	meso	Жрец сосчитал дни и сказал: сеять через неделю.	The priest counts the days and says: sow in a week.	!town
med	a	meso	Несёшь дань в город: плащи и мешок какао.	You carry the tribute to the city: cloaks and a sack of cacao.	
med	a	meso	Тебя забрали на войну за пленниками. Ты вернулся живой и с пленником.	You are taken to war to catch captives. You come back alive, with a captive.	m
med	a	andes	Твоя очередь на миту. Месяц строишь террасы для Инки.	Your turn for mit'a. A month building terraces for the Inca.	
med	a	andes	Сушишь картофель на морозе: топчешь его ногами, пока не выйдет вся вода.	You freeze-dry potatoes: you tread them until all the water is out.	
med	a	au	Выжигаете сухую траву, чтобы весной пришли кенгуру.	You burn the dry grass so the kangaroos come in spring.	
med	a	au	Весь род ушёл к реке, где пошла рыба. Там встретили соседей и пели три ночи.	The whole clan goes to the river where the fish are running. You meet the neighbours there and sing for three nights.	
med	a		Поругались с {женой|мужем} из-за курицы. Мирились до вечера.	You quarrel with your {wife|husband} over a hen. Making up takes till evening.	married !widowed
med	a	eu ru cn in me eg af jp sea meso andes	Дети выросли и ушли в поле без тебя.	The children are grown and go to the field without you.	kids !town
med	a	eu ru cn in me eg af jp sea meso andes	Сосед одолжил тебе вола. Весной отработаешь.	A neighbour lends you his ox. You will pay him in work in spring.	!town
med	a		Принимаешь гостей. Повар режет третьего барана.	You have guests. The cook slaughters a third ram.	r3
med	a		Пишешь письмо брату в столицу. Ответа ждать полгода.	You write to your brother in the capital. The answer will take half a year.	lit
med	a		Переписываешь книгу. Чернила въелись в палец навсегда.	You copy a book. The ink is in your finger for good.	monk lit
med	a		Встаёшь к полуночной службе. В храме такой холод, что видно дыхание.	You rise for the midnight office. The temple is so cold you can see your breath.	monk
med	a		{Взял|Взяла} ученика. Ленивый, но руки хорошие.	You take an apprentice. Lazy, but good hands.	r2
med	a		Родила третьего. Повитуха говорит, легко отделалась.	You give birth to your third. The midwife says you got off lightly.	f married
med	a	eu ru cn in me eg af jp sea meso andes	Выдали дочь замуж в соседнюю деревню. Дома стало тише.	Your daughter is married off to the next village. The house is quieter.	kids grown
med	a	eu ru cn in me eg af jp sea meso andes	Живёшь у городских ворот. Днём шум, ночью стража. Тишины не бывает.	You live by the town gate. Noise by day, the watch by night. It is never quiet.	town
med	a	eu ru	Волки задрали овцу. Всю зиму {сторожил|сторожила} стадо с собакой.	Wolves kill a sheep. All winter you guard the flock with the dog.	!town
med	a		Бродячий знахарь вырвал тебе зуб. Ты неделю {ругался|ругалась}.	A travelling healer pulls your tooth. You curse for a week.	
med	a	de	{Возил|Возила} на ярмарку в город сыр и шерсть. Обратно — соль и новый нож.	You take cheese and wool to the town fair. You come back with salt and a new knife.	
med	a	en	Лорд огородил общий луг. Теперь там пасутся только его овцы.	The lord fences off the common meadow. Now only his sheep graze there.	!town
med	a	jp	Возишь хворост в город при замке. Самураи на тебя даже не смотрят.	You haul firewood to the castle town. The samurai do not even look at you.	
med	a	cn	Весной чинишь дамбу вместе со всей волостью.	In spring you mend the dyke with the whole district.	
med	a	eu ru cn in me eg af jp sea meso andes	Твой урожай в этом году лучший в деревне. Соседи косятся.	Your harvest is the best in the village this year. The neighbours look askance.	!town
med	j	eu ru cn in me eg af jp sea meso andes	Праздник урожая: плясали до утра.	The harvest feast: you dance till morning.	!town
med	j	eu ru cn in me eg af jp sea meso andes	Бродячий музыкант остался на ночь и играл для всей деревни.	A wandering musician stays the night and plays for the whole village.	
med	j	eu ru in af	Родилась тёлка — праздник для всего дома.	A heifer calf is born: a feast for the whole house.	
med	j	eu ru	{Купил|Купила} на ярмарке настоящие стеклянные бусы.	At the fair you buy real glass beads.	
med	j	eu ru	Первый снег. Дети катаются с горы на мёрзлой коровьей шкуре.	First snow. The children slide down the hill on a frozen cowhide.	!town
med	j	eu ru me	Весной цветут яблони. Ты сидишь под ними целый час, просто так.	In spring the apple trees bloom. You sit under them for an hour, for no reason.	
med	j	cn	Новый год: на двери красные надписи, пельмени лепят всей семьёй.	New Year: red sayings on the door, the whole family making dumplings.	
med	j	cn	Сосед привёз из города свежий чай. Пили весь вечер и говорили о дожде.	A neighbour brings fresh tea from town. You drink all evening and talk about rain.	
med	j	cn	Праздник середины осени. Едите лунные пряники и смотрите на луну.	The Mid-Autumn feast. You eat mooncakes and look at the moon.	
med	j	in	На Дивали зажгли сто глиняных светильников. Деревня светится в темноте.	At Diwali a hundred clay lamps are lit. The village glows in the dark.	
med	j	in	Первый дождь после жары. Дети пляшут под ним, и ты с ними.	The first rain after the heat. The children dance in it, and you with them.	
med	j	me eg	Праздник разговения. Гости, сладости, соседи несут блюда до полуночи.	The feast that ends the fast. Guests, sweets, neighbours bringing dishes till midnight.	
med	j	me eg	Целый день в хаммаме. {Вышел|Вышла} как заново {родился|родилась}.	A whole day in the hammam. You come out as if newborn.	
med	j	af	Свадьба у соседей. Барабаны слышно за три деревни.	A wedding next door. The drums carry three villages away.	
med	j	af	Гриот спел о твоём деде. Ты {отдал|отдала} ему козу и не {пожалел|пожалела}.	The griot sings of your grandfather. You give him a goat and do not regret it.	!town
med	j	jp	У храма зацвела слива. Ты {ходил|ходила} смотреть дважды.	The plum tree by the temple blossoms. You go to look at it twice.	
med	j	jp	Праздник мёртвых: зажигаете огни и танцуете в кругу.	The feast of the dead: you light fires and dance in a ring.	
med	j	ru	Масленица. Блины, катание с горы, кулачный бой на льду.	Shrovetide. Pancakes, sledging, fist fights on the ice.	
med	j	ru	{Нашёл|Нашла} в лесу дупло с диким мёдом.	You find a hollow tree full of wild honey.	
med	j	eu	Праздник святого покровителя. Пирог с салом и танцы у церкви.	The patron saint's day. Bacon pie and dancing by the church.	
med	j	fr it	Пробуешь молодое вино прямо из бочки.	You taste the new wine straight from the barrel.	
med	j	meso	Праздник: лепёшки с мёдом, флейты, цветы на каждой улице.	A feast: honey cakes, flutes, flowers on every street.	
med	j	andes	Праздник урожая. Пьёшь чичу, весь склон поёт.	The harvest feast. You drink chicha, the whole hillside sings.	!town
med	j	au	Ночь у костра. Поют о дороге, которой шли предки.	A night by the fire. They sing of the road the ancestors walked.	
med	j	sea	Новый год: все обливают друг друга водой и хохочут.	New Year: everyone throws water at each other and laughs.	
med	j		Ребёнок впервые сам поймал рыбу. Несёт её, как царь.	Your child catches a fish alone for the first time. Carries it like a king.	kids
med	j	eu ru cn in me eg af jp sea meso andes	{Жена принесла|Муж принёс} тебе в поле горячую лепёшку.	Your {wife|husband} brings you a hot flatbread in the field.	married !town !widowed
med	j	eu ru cn in me eg af jp sea meso andes	{Нашёл|Нашла} в огороде старую монету. Никому не {сказал|сказала}.	You find an old coin in the garden. You tell no one.	!town
med	j		{Выспался|Выспалась}. Впервые за всю страду.	You sleep your fill. The first time all harvest.	
med	j		Тёплый дождь после засухи. Стоишь под ним с открытым ртом.	Warm rain after the drought. You stand in it with your mouth open.	
med	j		Внук сказал первое слово. Твоё имя.	Your grandchild says a first word. Your name.	kids grand
med	j	eu me	Соколиная охота. Сокол взял цаплю с первого раза.	Hawking. The falcon takes a heron at the first try.	r3
med	j		{Справил|Справила} себе новую обувь. Носишь только по праздникам.	You get yourself new shoes. You wear them only on feast days.	
med	j		{Помирился|Помирилась} с братом после долгой ссоры. Сидели вместе до ночи.	You make peace with your brother after a long quarrel. You sit together till night.	
med	j		В монастырском саду поспели груши. {Настоятель|Настоятельница} разрешил{|а} взять одну.	The pears ripen in the monastery garden. The abbot allows you one.	monk
med	j		Тебе дали книгу на одну ночь. Ты так и не {лёг|легла}.	You are lent a book for one night. You never go to bed.	lit
med	o		Ты помнишь три голодных года и одну комету.	You remember three hungry years and one comet.	
med	o	eu ru	Сидишь у печи и чинишь сети.	You sit by the stove mending nets.	
med	o		Внучка спрашивает, какой была твоя мать. Ты рассказываешь до темноты.	Your granddaughter asks what your mother was like. You tell her till dark.	kids grand
med	o		Глаза уже не те, но руки сами помнят, как прясть.	Your eyes are not what they were, but your hands remember how to spin.	f
med	o	eu ru	Ты {крёстный|крёстная} половине деревни.	You are godparent to half the village.	
med	o	eu ru cn in me eg af jp sea meso andes	Тебя позвали рассудить спор о меже. Только ты помнишь, где стоял старый камень.	They call you to settle a quarrel over a boundary. Only you remember where the old stone stood.	!town
med	o		Тебя кормят дети. Ты стараешься есть поменьше.	Your children feed you now. You try to eat less.	kids
med	o	cn	На Новый год внуки кланяются тебе. Даёшь каждому по медной монетке.	At New Year your grandchildren bow to you. You give each a copper coin.	kids grand
med	o	cn	Гроб тебе купили заранее. Сын каждый год его подкрашивает.	Your coffin was bought in good time. Your son repaints it every year.	kids
med	o	in	Ты {отправился|отправилась} к Гангу, пока есть силы. Хочешь войти в его воду.	You set out for the Ganges while you still have strength. You want to step into its water.	
med	o	me	Сидишь со стариками на солнце у мечети. Спорите, чей виноград слаще.	You sit in the sun by the mosque with the old men. You argue whose grapes are sweeter.	m
med	o	ru	Лежишь на печи. Слышишь всё, что говорят в избе.	You lie on the stove. You hear everything said in the house.	
med	o	ru	Ты {пережил|пережила} трёх князей. Дань у каждого своя, а поле то же.	You have outlived three princes. Each had his own tribute, the field stayed the same.	!town
med	o	af	Учишь внуков именам предков. Девять колен без запинки.	You teach your grandchildren the names of the ancestors. Nine generations, without a stumble.	kids grand
med	o	jp	На старости лет {постригся|постриглась} при храме, как многие.	In old age you take the tonsure at the temple, as many do.	
med	o	meso	Ты {дожил|дожила} до Нового огня. Все очаги погасили, жрецы зажгли новый.	You live to see the New Fire. Every hearth is put out and the priests light a new one.	
med	o	andes	Ты слишком {стар|стара} для миты. Плетёшь верёвки для висячих мостов.	You are too old for mit'a. You twist rope for the hanging bridges.	
med	o	au	Ты знаешь песни пути лучше всех. Молодые приходят слушать.	You know the songs of the tracks better than anyone. The young ones come to listen.	
med	o	ru eu	Сидишь на завалинке и смотришь на дорогу.	You sit on the bench by the wall and watch the road.	
med	o		Зубов почти не осталось. Тебе варят кашу помягче.	You have hardly any teeth left. They cook your porridge softer.	
med	o		Хоронишь последнего друга детства.	You bury the last friend of your childhood.	
med	o		Правнук спит у тебя на коленях.	Your great-grandchild sleeps on your lap.	kids grand
med	o	eu	{Заказал|Заказала} заупокойные мессы на сто лет вперёд.	You pay for requiem masses a hundred years ahead.	r3
med	o		Встать к ночной службе уже не можешь. Брат приносит свечу тебе в келью.	You can no longer rise for the night office. A brother brings a candle to your cell.	monk
med	o		Рассказываешь молодым, как раньше всё было дешевле.	You tell the young how everything used to be cheaper.	
med	o		Ты {пережил|пережила} {жену|мужа}. По вечерам говоришь с {ней|ним} вслух.	You have outlived your {wife|husband}. In the evenings you talk to {her|him} out loud.	married !widowed
med	o	sea	Сидишь в тени у храма и плетёшь корзины для риса.	You sit in the shade by the temple weaving rice baskets.	
med	o		Знаешь все травы. Соседки идут к тебе с каждой хворью.	You know every herb. The neighbour women come to you with every ailment.	f
med	o		Из всех, с кем ты {рос|росла}, остались двое.	Of all you grew up with, two are left.	
med	o	eg	Ты видишь разлив Нила в шестидесятый раз.	You see the Nile flood for the sixtieth time.	
med	o	en de	Отдал{|а} хозяйство сыну. По уговору у тебя угол за печью и мешок зерна в год.	You hand the farm to your son. By the agreement you get the corner by the stove and a sack of grain a year.	kids
med	x	eu ru cn in me eg af jp sea meso andes	Неурожай, а за ним мор.	A bad harvest, and plague after it.	!town
med	x	eu ru cn in me eg af jp sea meso andes	Пришло войско чужого князя.	A foreign prince's army comes.	
med	x	eu ru cn in me eg af jp sea meso andes	Река разлилась и унесла скот.	The river floods and carries off the cattle.	!town
med	x	eu ru cn in me eg af jp sea meso andes	Набег. Горят соседние сёла.	A raid. The next villages are burning.	
med	x	eu	Моровое поветрие. В церкви звонят по покойникам каждый день.	The pestilence. The church bell tolls for the dead every day.	
med	x	ru	Ордынцы пришли за данью сами. Кому нечем было платить, тех угнали.	The Horde comes for the tribute itself. Those who cannot pay are driven off.	
med	x	cn	Хуанхэ прорвала дамбы. Вода стоит до самого горизонта.	The Yellow River breaks its dykes. Water stretches to the horizon.	
med	x	cn	В уезде мятеж. Чиновники бежали, амбары разграблены.	Rebellion in the county. The officials have fled, the granaries are looted.	!town
med	x	in	Муссон не пришёл. Колодцы высохли до дна.	The monsoon fails. The wells are dry to the bottom.	
med	x	jp	Кланы воюют. Самураи жгут поля, чтобы оставить врага без риса.	The clans are at war. Samurai burn the fields to leave the enemy without rice.	!town
med	x	af	Ловцы рабов схватили людей прямо с соседнего поля.	Slavers seize people straight from the next field.	!town
med	x	me eg af	Саранча. Потемнело небо, к вечеру не осталось ни листа.	Locusts. The sky goes dark, and by evening not a leaf is left.	
med	x	meso andes	Третий год засуха. Жрецы говорят, боги гневаются.	The third year of drought. The priests say the gods are angry.	
med	x	eu ru cn in me eg af jp sea meso andes	Умер старый господин. Новый вдвое строже.	The old lord dies. The new one is twice as harsh.	r0
med	x	cn in me eg eu ru af jp	Оспа. В каждом доме кто-нибудь лежит в жару.	Smallpox. In every house someone lies in fever.	
med	x	eu ru cn in me eg af jp sea meso andes	Пожар в городе. Сгорела половина улиц и твой дом.	Fire in the town. Half the streets burn, and your house with them.	town
med	x	sea	Проснулась гора. Пепел засыпал поля на три дня пути.	The mountain wakes. Ash buries the fields for three days' walk around.	!town
med	x	au	Пересохли все водоёмы на пути. Идёте к дальнему колодцу, о котором помнят только старики.	Every waterhole on the way is dry. You walk to a far well that only the old ones remember.	
med	c		Ночью тебя разбудила гроза. Ты {залез|залезла} к матери под бок.	A storm wakes you in the night. You crawl in next to your mother.	
med	c		Старшая сестра носит тебя на спине, куда бы ни пошла.	Your big sister carries you on her back wherever she goes.	
med	c		{Нашёл|Нашла} птичье гнездо, а в нём три яйца. Бегаешь смотреть каждый день.	You find a bird's nest with three eggs in it. You run to look every day.	
med	c		Оса ужалила тебя прямо в губу. Смеялись все, кроме тебя.	A wasp stings you right on the lip. Everyone laughs but you.	
med	c		Дед показал тебе звёзды, по которым находят дорогу ночью.	Grandfather shows you the stars that find the way at night.	
med	c		Бабушка рассказала страшную сказку. Потом ты долго {боялся|боялась} темноты.	Grandmother tells a frightening tale. For a long time after you are afraid of the dark.	
med	c		Ты {выпросил|выпросила} щенка и {спал|спала} с ним в обнимку.	You beg for a puppy and sleep with it in your arms.	
med	c		Дети играют в войну на палках. Тебе всегда выпадает быть врагом.	The children play war with sticks. You always have to be the enemy.	
med	c		{Залез|Залезла} на самое высокое дерево. Оттуда видно дым чужих костров.	You climb the tallest tree. From there you can see the smoke of strangers' fires.	
med	c		Ты {заблудился|заблудилась} в зарослях. Нашли к вечеру — по рёву.	You get lost in the scrub. They find you by evening, by your howling.	
med	c	eu ru cn in me eg af jp sea meso andes	Тебе велели носить воду. Кувшин тяжёлый, половину ты {расплескал|расплескала}.	You are set to carrying water. The jar is heavy, and you spill half.	
med	c	eu ru cn in me eg af jp sea meso andes	{Спрятался|Спряталась} от работы за амбаром и {уснул|уснула}. Искали до темноты.	You hide from work behind the granary and fall asleep. They search for you till dark.	
med	c	eu ru cn in me eg af jp sea meso andes	Гончар дал тебе комок глины. Ты {слепил|слепила} собаку, её обожгли вместе с горшками.	The potter gives you a lump of clay. You make a dog, and it is fired with the pots.	
med	c	cn	Запускаешь с отцом бумажного змея над рисовыми полями.	You fly a paper kite with father over the rice fields.	
med	c	cn	Тебе начали бинтовать ноги. Ты плачешь по ночам, бабушка говорит: терпи.	They begin to bind your feet. You cry at night, and grandmother says: bear it.	f after:1100
med	c	in	Через деревню вели слона раджи. Он взял банан прямо с твоей ладони.	The raja's elephant is led through the village. It takes a banana straight from your palm.	
med	c	in	Сидишь у ног сказителя. Он поёт Рамаяну третью ночь подряд.	You sit at the storyteller's feet. He has been singing the Ramayana three nights running.	
med	c	me eg	Летом спите на плоской крыше. Ты считаешь звёзды и засыпаешь на третьей сотне.	In summer you sleep on the flat roof. You count the stars and fall asleep past three hundred.	
med	c	me eg	На праздник жертвы тебе дали подержать ягнёнка. Ты {плакал|плакала}, когда его увели.	At the Feast of Sacrifice you are given the lamb to hold. You cry when they lead it away.	
med	c	eg	{Ловил|Ловила} рыбу в канале руками. {Поймал|Поймала} одну, с ладошку.	You fish in the canal with your hands. You catch one, the size of your palm.	
med	c	af	Вечером у огня рассказывают про хитрого паука Ананси. Ты знаешь все истории наизусть.	In the evening by the fire they tell of Anansi the clever spider. You know every story by heart.	
med	c	af	Тебе вырезали деревянную куклу. Носишь её за спиной, как мать носит брата.	Someone carves you a wooden doll. You carry it on your back, the way mother carries your brother.	
med	c	jp	На Новый год толчёшь с отцом рис в ступе для моти. Колотушка тяжелее тебя.	At New Year you pound rice for mochi with father. The mallet is heavier than you.	
med	c	jp	Монах из храма научил тебя писать своё имя. Пишешь его палкой на песке.	A monk from the temple teaches you to write your name. You write it with a stick in the sand.	
med	c	sea	Мать жуёт бетель, губы у неё красные. Ты {просил|просила} попробовать, не дали.	Mother chews betel and her lips are red. You beg to try, and they won't let you.	
med	c	sea	Сидишь в лодке, пока отец ставит сети на залитом поле. Вода тёплая, как молоко.	You sit in the boat while father sets nets in the flooded field. The water is warm as milk.	
med	c	sea	Смотришь театр теней до рассвета. Засыпаешь на самом страшном месте.	You watch the shadow play till dawn. You fall asleep at the scariest part.	
med	c	meso	Ты {смотрел|смотрела}, как писец рисует книгу на оленьей коже. Краски он трёт сам.	You watch a scribe paint a book on deerskin. He grinds his own colours.	
med	c	meso	Брат учит тебя бить мяч бедром. Синяки не сходят всё лето.	Your brother teaches you to hit the ball with your hip. The bruises last all summer.	
med	c	meso	На рассвете отец бросает в огонь щепоть смолы копал. Дым пахнет сладко.	At dawn father throws a pinch of copal on the fire. The smoke smells sweet.	
med	c	andes	Тебя впервые постригли. Вся родня по очереди отрезала прядь и дарила подарок.	Your first haircut. Each relative in turn cuts a lock and gives you a gift.	
med	c	andes	Дома под ногами бегают морские свинки. Ты каждой {дал|дала} имя.	Guinea pigs run about the floor at home. You have named every one.	
med	c	andes	На перевале ты {положил|положила} камень в общую кучу, как все путники.	At the top of the pass you add a stone to the heap, as every traveller does.	
med	c	au	Ловите ящериц всей ватагой. Самую большую зажарили на углях.	The children catch lizards together. The biggest one is roasted on the coals.	
med	c	au	Бабушка раскопала медовых муравьёв. Ты {высасывал|высасывала} мёд у них из брюшка.	Grandmother digs up honey ants. You suck the honey from their bellies.	
med	c	au	Ныряешь за ракушками в реке. Мать печёт их в золе.	You dive for mussels in the river. Mother bakes them in the ashes.	
med	c	au	Тебе расписали тело белой глиной. Ты боишься шевельнуться, чтобы узор не стёрся.	They paint your body with white clay. You are afraid to move in case the pattern rubs off.	
med	c	au	Дядя учит тебя кидать бумеранг. Он возвращается куда угодно, только не к тебе.	Your uncle teaches you to throw the boomerang. It comes back anywhere but to you.	
med	c	au	Старики показали тебе в небе эму: тёмные пятна в Млечном Пути.	The old people show you the emu in the sky: the dark patches in the Milky Way.	
med	c	au	Идёте всей семьёй на новую стоянку. Ты несёшь свою палку-копалку и щенка динго.	The family moves to a new camp. You carry your digging stick and a dingo pup.	
med	c	fr de it en	Учитель показал вам печатную книгу. Буквы в ней одинаковые, как горошины.	The teacher shows you a printed book. All its letters are alike, like peas.	after:1470
med	c	eu	Тебя отдали в подпаски к чужим людям. За лето обещали рубаху и хлеб.	You are sent to mind other people's cattle. For the summer they promise a shirt and bread.	r0 r1
med	c	eu ru me cn in jp	Тебе подарили деревянный меч и посадили на коня. Ноги не достают до стремян.	They give you a wooden sword and set you on a horse. Your feet don't reach the stirrups.	m r3
med	c	eu ru me eg in cn	Мать учит тебя прясть. Веретено то и дело падает и катится под лавку.	Mother teaches you to spin. The spindle keeps dropping and rolling away.	f
med	y		{Подрался|Подралась} с лучшим другом из-за пустяка. Месяц не разговаривали.	You fight your best friend over nothing. You don't speak for a month.	
med	y		Тебе впервые доверили стеречь огонь всю ночь. Ты ни разу не {задремал|задремала}.	For the first time you are trusted to keep the fire all night. You do not doze once.	
med	y		Старуха нагадала тебе {жену|мужа} издалека. Ты {посмеялся|посмеялась}, но {запомнил|запомнила}.	An old woman foretells you a {wife|husband} from far away. You laugh, but you remember.	
med	y		Ты впервые {обогнал|обогнала} старшего брата. Он делает вид, что поддался.	For the first time you outrun your big brother. He pretends he let you win.	
med	y	eu ru cn in me eg af jp sea meso andes	Ночью {убежал|убежала} с друзьями к реке. Купались при луне, и дома никто не узнал.	At night you slip off to the river with friends. You swim by moonlight, and no one at home finds out.	
med	y		Мать сказала, что ты теперь {взрослый|взрослая}. Ты не знаешь, радоваться или нет.	Mother says you are grown now. You don't know whether to be glad.	
med	y		Умерла бабушка. Больше некому рассказывать старые сказки.	Grandmother dies. There is no one left to tell the old tales.	
med	y	eu ru cn in me eg af jp sea meso andes	Тебя впервые отправили на рынок без старших. Всё {продал|продала} и {купил|купила} себе сладкого.	For the first time you go to market without the grown-ups. You sell everything and buy yourself something sweet.	
med	y	eu ru cn in me eg af jp sea meso andes	Этим летом ты {работал|работала} в поле наравне со взрослыми. К вечеру не чуешь спины.	This summer you work the field as hard as the grown-ups. By evening you can't feel your back.	!town
med	y	me	Тебя отдали учиться к ковровщику. Вяжешь узлы, пока не немеют пальцы.	You are apprenticed to a carpet weaver. You tie knots till your fingers go numb.	
med	y	me eg	На свадьбе женщины пели и били в бубен. Ты {подпевал|подпевала} громче всех.	At the wedding the women sing and beat the tambourine. You sing along louder than anyone.	
med	y	me eg	Всё лето {гонял|гоняла} быка по кругу у водяного колеса. Скрип слышишь даже во сне.	All summer you drive the ox round the water wheel. You hear it creak even in your sleep.	!town
med	y	andes	На празднике молодые танцуют всю ночь. Ты {выбрал|выбрала}, с кем попробуешь жить.	At the feast the young dance all night. You choose the one you will try living with.	
med	y	andes	Ты {бежал|бежала} наперегонки с царским гонцом. Он даже не обернулся.	You race one of the royal runners. He does not even look round.	
med	y	andes	Тебя отправили с ламами в долину за солью. Обратно шли десять дней.	You are sent down to the valley with the llamas for salt. The way back takes ten days.	
med	y	cn	На празднике фонарей ты {потерял|потеряла} в толпе сестру. Нашлась у лотка со сладостями.	At the Lantern Festival you lose your sister in the crowd. She turns up at a sweet stall.	
med	y	jp	Ты {научился|научилась} плести соломенные сандалии. Пары хватает на десять дней.	You learn to plait straw sandals. A pair lasts ten days.	
med	y	sea	Учишься играть на гонгах в деревенском оркестре. Тебе достался самый маленький.	You learn the gongs in the village orchestra. You get the smallest one.	
med	y	meso	Четыре дня ты {постился|постилась} перед праздником. Потом жрец проколол тебе ухо шипом агавы.	You fast four days before the feast. Then the priest pierces your ear with an agave thorn.	
med	y	eu ru	На Пасху бьются крашеными яйцами. Твоё ни разу не треснуло.	At Easter you knock painted eggs together. Yours never cracks.	
med	y	ru	На Святки ряженые ходили по дворам. В вывернутом тулупе тебя никто не узнал.	At Yuletide the mummers go from house to house. In a sheepskin turned inside out nobody knows you.	
med	y	in	Тебя впервые взяли в город на храмовый праздник. Колесницу с богом тянут тысячи людей.	For the first time you are taken to the temple festival in town. Thousands of people pull the god's chariot.	
med	y	af	Всех твоих ровесников на месяц увели в лес. Вернулись вы с новыми именами.	All of your age set are taken into the bush for a month. You come back with new names.	
med	y	au	Тебя отправили к родне за три дня пути: с вестью и палочкой-посланием.	You are sent to kin three days away with news and a message stick.	
med	y	au	Учишься вить сеть из волокон коры. Первую тебе велели распустить.	You learn to make a net from bark fibre. You are told to unpick the first one.	
med	y	au	На большом сборе родов ты впервые {увидел|увидела} столько людей сразу.	At the great gathering of clans you see so many people at once for the first time.	
med	y	au	{Жену|Мужа} тебе выбрали старики, когда ты ещё не {родился|родилась}. Теперь ты знаешь, кого.	The old people chose your {wife|husband} before you were born. Now you know who.	
med	y	au	Учишься добывать огонь, крутя палочку в ладонях. Ладони в волдырях.	You learn to make fire by spinning a stick between your palms. Your palms are blistered.	
med	y	au	Тебе объяснили, с кем из родни теперь нельзя говорить. Их больше, чем ты {думал|думала}.	They explain which of your kin you may no longer speak to. There are more than you thought.	
med	y	au	Плывёшь с дядей по реке в лодке из коры. Он бьёт рыбу острогой, ты держишь равновесие.	You go downriver with your uncle in a bark canoe. He spears fish, you keep the balance.	
med	y	au	Ты {добыл|добыла} первого кенгуру. По обычаю сам ты его не ешь: всё отдаёшь родне.	You kill your first kangaroo. By custom you eat none of it yourself: it all goes to your kin.	m
med	y	eu ru me	Тебя сосватали. Будущая свекровь пришла смотреть, как ты месишь тесто.	You are spoken for. Your mother-in-law-to-be comes to watch you knead the dough.	f !monk
med	y	eu	Тебя отдали в ученики к кожевнику. Руки теперь пахнут дубильной ямой.	You are apprenticed to a tanner. Your hands smell of the tanning pit now.	m r2
med	y	eu ru	Ты {выучился|выучилась} читать по Псалтыри. По вечерам читаешь вслух соседям.	You learn to read from the Psalter. In the evenings you read aloud to the neighbours.	lit
med	y	de	Разносчик продаёт листки с картинками про какой-то спор попов. Ты {купил|купила} один ради картинки.	A pedlar sells printed sheets about some quarrel of the priests. You buy one for the picture.	after:1520
med	y	eu ru	Тебя учат петь псалмы. Голос ломается на самой высокой ноте.	They teach you to sing the psalms. Your voice cracks on the highest note.	m monk
med	a		{Порезал|Порезала} ногу о камень. Рана гноилась, но обошлось.	You cut your foot on a stone. The wound festers, but it heals.	
med	a		К вам прибился чужой человек. Говорит плохо, зато работает за двоих.	A stranger attaches himself to your people. He speaks badly, but he works for two.	
med	a		Ты лучше всех знаешь, где что растёт и когда. Тебя спрашивают даже старики.	You know better than anyone what grows where and when. Even the old ones ask you.	
med	a		Затмение. Среди дня почернело солнце, завыли собаки. Через час всё вернулось.	An eclipse. The sun goes black at midday and the dogs howl. An hour later it is all back.	
med	a		Ночью тряхнуло землю. Утром ни о чём другом не говорили.	In the night the ground shakes. In the morning nobody talks of anything else.	!town
med	a		{Ходил|Ходила} к дальней родне за четыре дня пути. Угощали три дня.	You walk four days to distant kin. They feast you for three.	
med	a		Тебя укусила змея. Ты {выжил|выжила}, но нога болела ещё год.	A snake bites you. You live, but your leg aches for a year.	
med	a		Ты {вытащил|вытащила} из реки чужого ребёнка. Его мать с тех пор зовёт тебя роднёй.	You pull someone else's child out of the river. Ever since, the mother calls you kin.	
med	a		Такой жары ты не {помнил|помнила}. Даже собаки лежат и не шевелятся.	You cannot remember heat like it. Even the dogs lie without moving.	
med	a		Ты {выучил|выучила} песню соседнего народа. Поёшь её неправильно, и они смеются.	You learn a song of the neighbouring people. You sing it wrong, and they laugh.	
med	a		Твой друг ушёл жить к родне жены, далеко за реку. Видитесь раз в несколько лет.	Your friend goes to live with his wife's kin, far across the river. You meet once every few years.	
med	a		{Сорвался|Сорвалась} с обрыва и {ушиб|ушибла} спину. Теперь она ноет к дождю.	You fall from a bank and hurt your back. Now it aches before rain.	
med	a		Ты {поспорил|поспорила} со старейшиной при всех. Он этого не забыл.	You argue with an elder in front of everyone. He does not forget it.	
med	a		Чужаки принесли на обмен вещи, каких ты никогда не {видел|видела}. Ты {выменял|выменяла} одну просто так.	Strangers bring things to trade such as you have never seen. You swap for one just because.	
med	a		Ребёнок горел в жару три ночи. Ты не {спал|спала}. На четвёртое утро он попросил есть.	Your child burns with fever for three nights. You do not sleep. On the fourth morning the child asks for food.	kids
med	a	eu ru cn in me eg af jp sea meso andes	Крыша потекла в самый ливень. Под капли поставили все горшки, какие были.	The roof leaks in the worst of the rain. You set every pot you own under the drips.	
med	a	eu ru cn in me eg af jp sea meso andes	Староста собрал всех и объявил указ из столицы. Никто толком не понял, что теперь нельзя.	The headman gathers everyone and announces a decree from the capital. No one quite grasps what is now forbidden.	
med	a	eu ru cn in me eg af jp sea meso andes	Посеяли поздно, но осень стояла тёплая. Успели.	You sow late, but the autumn stays warm. You get it all in.	
med	a	eu ru cn in me eg af jp sea meso andes	Три свадьбы в деревне за одну неделю. Ты {был|была} на всех.	Three weddings in the village in one week. You go to every one.	
med	a	eu ru cn in me eg af jp sea meso andes	Всей улицей копали новый колодец. Вода пошла на двенадцатом локте.	The whole street digs a new well. Water comes at the twelfth cubit.	
med	a	eu ru cn in me eg af jp sea meso andes	Сосед повадился пускать воду на своё поле через твоё. Ругаетесь каждую неделю.	Your neighbour has taken to running water to his field through yours. You quarrel every week.	!town
med	a	eu ru cn in me eg af jp sea meso	{Ходил|Ходила} в город на торг. Тебя обсчитали, а ты {понял|поняла} это только дома.	You go to market in town. They short-change you, and you only notice at home.	
med	a	eu ru cn in me eg af jp sea	Мыши добрались до зерна. Завели кошку, а она ловит только птиц.	The mice get into the grain. You get a cat, and it only catches birds.	
med	a	eu ru	В Великий пост едите репу и сушёную рыбу. К Пасхе снится мясо.	In Lent you eat turnips and dried fish. By Easter you dream of meat.	
med	a	eu	Священник опять застрял в городе. Мессу служит его помощник и путается в латыни.	The priest is stuck in town again. His curate says Mass and stumbles over the Latin.	
med	a	it	Твой город воюет с соседним. Ваш квартал выставил сто человек.	Your city is at war with the next one. Your quarter sends a hundred men.	
med	a	ru	Весной лезешь на сосну к своей борти. Пчёлы злые после зимы.	In spring you climb the pine to your wild hive. The bees are angry after the winter.	
med	a	ru eu	Осенью молотите цепами на гумне. Стук слышно по всей деревне.	In autumn you thresh with flails on the threshing floor. The knocking carries through the village.	!town
med	a	cn	Носишь овощи в город на коромысле. Двадцать ли туда, двадцать обратно.	You carry vegetables to town on a shoulder pole. Twenty li there, twenty back.	
med	a	cn	В день поминовения подметаешь могилы предков. Оставляешь им рис и вино.	On Tomb-Sweeping Day you sweep the ancestors' graves. You leave them rice and wine.	
med	a	cn	Весной собираешь чай на склоне. Брать можно только два верхних листка.	In spring you pick tea on the slope. Only the top two leaves will do.	
med	a	cn	Мимо пронесли чиновника в паланкине. Все стоят у дороги на коленях.	An official is carried past in a sedan chair. Everyone kneels by the road.	
med	a	cn	Тебя записали в десятидворку. Провинится сосед — отвечать всем.	You are entered in a group of ten households. If a neighbour does wrong, you all answer for it.	after:1070
med	a	cn	Тебе заплатили бумажными деньгами. Ты долго не {верил|верила}, что это деньги.	You are paid in paper money. For a long time you don't believe it is money.	after:1030
med	a	cn	Сосед посадил на склоне заморское зерно, кукурузу. Растёт там, где рис не растёт.	A neighbour plants a grain from over the sea on the hillside: maize. It grows where rice won't.	after:1560
med	a	in	Пускаешь воду на поле из общего пруда. Твоя очередь — ночью.	You let water into your field from the village tank. Your turn comes at night.	!town
med	a	in	Гончар носит тебе горшки, цирюльник бреет. Платишь им зерном раз в год.	The potter brings you pots, the barber shaves you. You pay them in grain once a year.	
med	a	in	Брахман назначил по звёздам день свадьбы сестры. Готовиться целый год.	The Brahmin fixes your sister's wedding day by the stars. A whole year to get ready.	
med	a	in	Собираешь хлопок. Пальцы исцарапаны коробочками в кровь.	You pick cotton. The bolls scratch your fingers till they bleed.	
med	a	me	Спускаешься чистить подземный канал, что несёт воду с гор. Темно и тесно.	You go down to clear the underground channel that brings water from the hills. It is dark and tight.	
med	a	me eg	Собираешь финики. Лезешь на пальму, обвязавшись верёвкой.	You pick dates. You climb the palm with a rope round your waist.	
med	a	me eg	На базаре смотритель проверил весы у торговца и разбил его гирю.	At the bazaar the market inspector checks a trader's scales and smashes his weight.	!town
med	a	me eg	Через город шёл караван паломников в Мекку. Ты {вынес|вынесла} им воды и {попросил|попросила} помолиться за тебя.	A caravan of pilgrims bound for Mecca passes through. You bring them water and ask them to pray for you.	
med	a	af	После дождей обмазываешь глиной стену мечети. Лезешь вверх по торчащим брёвнам.	After the rains you replaster the mosque wall with mud, climbing the jutting beams.	
med	a	af	Базар раз в пять дней. Там узнаёшь и цены, и все новости.	The market comes round every fifth day. There you hear the prices and all the news.	
med	a	af	Растишь ямс. Самый большой клубень относишь вождю.	You grow yams. The biggest one goes to the chief.	
med	a	af	Кузнец в деревне человек особый. Его боятся и ходят к нему за амулетами.	The village smith is a man apart. People fear him and go to him for charms.	
med	a	af	В гавань пришли корабли с востока. Ты {выменял|выменяла} бивень на синюю чашку.	Ships from the east come into the harbour. You trade a tusk for a blue bowl.	
med	a	af	Сосед посадил заморское зерно, кукурузу. Говорят, её привезли португальцы.	A neighbour plants a grain from over the sea: maize. They say the Portuguese brought it.	after:1550
med	a	jp	Помогаешь соседям перекрыть соломенную крышу. Через год они помогут тебе.	You help the neighbours rethatch their roof. Next year they will help you.	
med	a	jp	Уходишь в горы жечь уголь. Неделю живёшь в шалаше у печи.	You go into the hills to burn charcoal. For a week you live in a hut by the kiln.	
med	a	jp	Деревня собралась у святилища делить воду. Спорили до темноты.	The village meets at the shrine to share out the water. They argue till dark.	
med	a	sea	Твоё поле кормит храм. Половину риса отвозят монахам.	Your field feeds the temple. Half the rice goes to the monks.	!town
med	a	sea	Утром кладёшь рис в чаши монахам. Они не благодарят, так положено.	In the morning you put rice in the monks' bowls. They do not thank you; that is the custom.	
med	a	sea	Вода в большом озере уходит. Рыбы столько, что берёте её руками.	The water in the great lake goes down. There are so many fish you take them by hand.	
med	a	sea	Ставишь новый дом на сваях. Под полом будут жить свиньи и куры.	You put up a new house on stilts. The pigs and hens will live under the floor.	!town
med	a	meso	Сажаешь в одну лунку кукурузу, бобы и тыкву. Они растут, держась друг за друга.	You plant maize, beans and squash in one hole. They grow up holding on to each other.	
med	a	meso	Надрезаешь агаву и собираешь сок. Через три дня будет пульке.	You cut the agave and collect the sap. In three days it will be pulque.	
med	a	meso	На большом рынке всё считают на бобы какао. За индюшку отдаёшь сотню.	At the great market everything is priced in cacao beans. A turkey costs you a hundred.	
med	a	meso	Насыпаешь на озере грядку из ила и тростника. Твоя у самого канала.	You build a garden bed of mud and reeds out on the lake. Yours lies right by the canal.	
med	a	andes	Сажаете картофель всей общиной. Мужчины рыхлят землю ножным плугом, женщины кладут клубни.	The whole community plants potatoes. The men turn the soil with the foot plough, the women drop the tubers.	!town
med	a	andes	Стрижёшь альпак. Лучшая шерсть уходит Инке, остальное тебе.	You shear the alpacas. The best wool goes to the Inca, the rest is yours.	
med	a	andes	Варишь чичу: жуёшь кукурузу и сплёвываешь в горшок.	You brew chicha: you chew the maize and spit it into the pot.	
med	a	andes	На праздник выносите мумию предка. Его поят и кормят, как живого.	For the feast you carry out an ancestor's mummy. He is given drink and food as if alive.	
med	a	andes	Всем селением сплели новый висячий мост из травы. Старый сожгли.	The whole village weaves a new hanging bridge of grass. The old one is burnt.	
med	a	au	Ставишь каменные запруды на угрей. Ловушки плетёшь из травы.	You build stone weirs for the eels. You weave the traps from grass.	
med	a	au	Собираешь семена травы, трёшь между камнями и печёшь лепёшку в золе.	You gather grass seed, grind it between stones and bake a cake in the ashes.	
med	a	au	Ты {выменял|выменяла} у соседнего народа красную охру на камень для топора.	You trade red ochre with the neighbouring people for axe stone.	
med	a	au	Выкапываешь жирных личинок из корней акации. Дети ходят за тобой следом.	You dig fat grubs from the acacia roots. The children follow you about.	
med	a	au	Человек из соседнего рода нарушил закон. Старейшины разбирают дело три дня.	A man of a neighbouring clan has broken the law. The elders sit over it for three days.	
med	a	au	Плетёшь из коры сумку для еды. Узор тот же, что у твоей бабки.	You weave a food bag of bark fibre. The pattern is your grandmother's.	
med	a	au	{Пошёл|Пошла} по песне туда, где ещё не {бывал|бывала}. Песня знает дорогу лучше тебя.	You follow a song to country you have never seen. The song knows the way better than you.	
med	a	au	Бьёшь рыбу острогой на мелководье. Вода обманывает глаз, ты учишься брать ниже.	You spear fish in the shallows. The water fools the eye, and you learn to aim low.	
med	a	au	Зацвело дерево у стоянки. Значит, пора идти к устью: пошла рыба.	The tree by the camp flowers. That means it is time to go down to the river mouth: the fish are running.	
med	a	au	Роешь яму в сухом русле. К вечеру в ней собирается мутная вода.	You dig a hole in the dry riverbed. By evening muddy water seeps into it.	
med	a	au	Подновляешь охрой рисунки на скале у стоянки. Их оставили ещё деды дедов.	You freshen the ochre paintings on the rock by the camp. The grandfathers' grandfathers left them.	
med	a	au	Выкурил{|а} опоссума из дупла. Из шкурок сошьёте плащ на зиму.	You smoke a possum out of its hollow. The skins will make a cloak for winter.	
med	a	eu ru cn in me eg af jp sea meso andes	Живёшь в доме мужа. Свекровь говорит, что ты всё делаешь не так.	You live in your husband's house. His mother says you do everything wrong.	f married !widowed
med	a	eu ru cn in me eg af jp sea meso andes	Тебя забрали в войско. Вернулся через год, без двух пальцев.	You are taken for the army. You come home a year later, two fingers short.	m
med	a	eu ru cn in me eg af jp sea meso andes	Обжиг удался: из всей печи не треснул ни один горшок.	The firing goes well: not one pot in the kiln has cracked.	r2
med	a	eu ru	Тяжба за спорную деревню идёт пятый год. Богатеют только писцы.	The lawsuit over the disputed village is in its fifth year. Only the clerks grow rich.	r3
med	a	eu ru cn in me eg af jp sea	Соседи просят тебя писать им письма. Платят яйцами.	The neighbours ask you to write their letters. They pay in eggs.	lit
med	a	fr de it en	В городе завели печатню. Ты {видел|видела}, как листы снимают с пресса ещё мокрыми.	A printing shop has opened in town. You watch the sheets come off the press still wet.	after:1460
med	a	fr de it en	После мора земли много, а рук мало. Господин впервые торгуется с тобой о плате.	After the great dying there is land to spare and too few hands. For the first time the lord bargains with you over pay.	after:1350 before:1450 !town
med	a	jp cn in me af	Купцы привезли табак. Мужчины передают трубку по кругу.	Merchants bring tobacco. The men pass the pipe round.	after:1590
med	a	eu ru cn in me eg af jp sea meso andes	Хозяин продал поле вместе с тобой. Новый даже не спросил, как тебя зовут.	The master sells the field and you with it. The new one does not even ask your name.	r0 !town
med	a	eu ru cn in me eg af jp sea meso andes	Ты {бежал|бежала} от господина. Через неделю тебя вернули.	You run away from your master. A week later you are brought back.	r0
med	a	eu	Тебя сделали {келарем|келаршей}. Теперь ты знаешь, сколько в монастыре сыра.	You are made cellarer. Now you know how much cheese the monastery has.	monk
med	j		Тёплая ночь. Лежишь на спине и смотришь, как падают звёзды.	A warm night. You lie on your back and watch the stars fall.	
med	j		Утро такое тихое, что слышно реку за холмом.	A morning so still you can hear the river beyond the hill.	
med	j		Рыба шла косяком. Ели все, пока не надоело.	The fish run thick. Everyone eats till they are sick of it.	
med	j		Соседский младенец уснул у тебя на руках.	The neighbours' baby falls asleep in your arms.	
med	j		Ты {рассмешил|рассмешила} всех так, что старуха поперхнулась.	You make everyone laugh so hard the old woman chokes.	
med	j		Вернулся тот, кого считали мёртвым. Плакали все.	Someone given up for dead comes home. Everyone weeps.	
med	j		После голодной поры — первая свежая зелень. Ешь и не можешь остановиться.	After the lean season, the first fresh greens. You eat and can't stop.	
med	j		Приснилась покойная мать. Она улыбалась.	You dream of your dead mother. She is smiling.	
med	j		Двойная радуга над рекой. Все высыпали смотреть.	A double rainbow over the river. Everyone comes out to look.	
med	j		Ты {запел|запела} у огня, и все замолчали, чтобы слушать.	You start to sing by the fire, and everyone goes quiet to listen.	
med	j		Ты {приручил|приручила} ворону. Она таскает у соседей всё блестящее.	You tame a crow. It steals everything shiny from the neighbours.	
med	j		Целый день ничего не случилось. Хороший день.	Nothing at all happens all day. A good day.	
med	j		Ты {обогнал|обогнала} в беге всех молодых. Не поверили, побежали ещё раз.	You outrun all the young ones. They don't believe it and race you again.	
med	j		Твою шутку пересказывают по всей округе. Уже не помнят, что она твоя.	Your joke goes round the whole district. Nobody remembers now that it was yours.	
med	j	eu ru cn in me eg af jp sea meso andes	Горячая похлёбка после целого дня под дождём.	Hot soup after a whole day in the rain.	
med	j	eu ru cn in me eg af jp sea meso andes	Свадьба у родни. Ты так {сплясал|сплясала}, что об этом говорили неделю.	A wedding in the family. You dance so that people talk of it for a week.	
med	j	eu ru cn in me eg af jp sea meso andes	Новый горшок не треснул на огне. Мелочь, а приятно.	The new pot does not crack on the fire. A small thing, but it pleases you.	
med	j	cn	На улице представление: акробаты, кукольник, человек с обезьянкой.	A show in the street: acrobats, a puppeteer, a man with a monkey.	
med	j	in	Сказитель развернул свиток с картинками и пел про каждую. Ты {отдал|отдала} ему горсть риса.	A storyteller unrolls a painted scroll and sings each picture. You give him a handful of rice.	
med	j	me eg	В саду зацвели розы. Ты {сварил|сварила} из лепестков варенье.	The roses bloom in the garden. You make jam from the petals.	
med	j	me	В городе открылась кофейня. Сидишь до полуночи и слушаешь сказочника.	A coffee house has opened in town. You sit there till midnight listening to the storyteller.	m after:1550
med	j	af	Борьба после урожая. Твой родич положил силача из соседней деревни.	Wrestling after the harvest. Your kinsman throws the strongman from the next village.	!town
med	j	jp	Осенью клёны на горе покраснели. Ты {остановился|остановилась} посреди дороги и долго {смотрел|смотрела}.	In autumn the maples on the hill turn red. You stop in the middle of the road and look for a long time.	
med	j	jp	Горячий источник в горах. Сидишь в нём, пока не пошёл снег.	A hot spring in the hills. You sit in it until it starts to snow.	
med	j	sea	Гонки лодок на празднике воды. Ваша деревня пришла второй.	Boat races at the water festival. Your village comes second.	
med	j	sea	Спелый дуриан. Пахнет ужасно, а ты {съел|съела} целый.	A ripe durian. It smells awful, and you eat a whole one.	
med	j	sea	На празднике пляшут в масках. Ты {узнал|узнала} соседа по походке.	At the feast they dance in masks. You know your neighbour by his walk.	
med	j	meso	Праздник цветов: несёшь богине венки из бархатцев.	The flower feast: you carry marigold garlands to the goddess.	
med	j	meso	Летуны спускаются на верёвках с высокого шеста, кружась. Ты {забыл|забыла} дышать.	The flyers come down on ropes from the tall pole, circling. You forget to breathe.	
med	j	meso	Едите горячие тамали прямо из листьев. Тебе мать положила мёду.	You eat hot tamales straight from the husks. Mother has put honey in yours.	
med	j	andes	На празднике зажарили морскую свинку. Тебе достался самый хрустящий кусок.	At the feast a guinea pig is roasted. You get the crispest piece.	
med	j	andes	Вечером играешь на тростниковой флейте. С того склона отвечает эхо.	In the evening you play the reed panpipes. The echo answers from the far slope.	
med	j	andes	Твоя ткань вышла тоньше материнской. Мать это признала.	Your cloth comes out finer than your mother's. She admits it.	
med	j	au	Ты {нашёл|нашла} гнездо диких пчёл. Мёд с воском и пчёлами, все пальцы липкие.	You find a wild bees' nest. Honey, wax and bees together, every finger sticky.	
med	j	au	Большой сбор: пляшут всю ночь, поют песни трёх родов разом.	The great gathering: dancing all night, the songs of three clans at once.	
med	j	au	Дети притащили черепаху. Её запекли целиком в углях.	The children drag in a turtle. It is baked whole in the coals.	
med	j	au	Цветут водяные лилии. Весь день ныряешь за их корнями.	The waterlilies are in bloom. All day you dive for their roots.	
med	j	au	Лето в горах: все роды сошлись есть жирных мотыльков. Жарите их на камнях.	Summer in the mountains: all the clans meet to eat fat moths. You roast them on the stones.	
med	j	au	Дождь прошёл ночью. Утром вся земля в цветах.	Rain falls in the night. In the morning the whole land is in flower.	!town
med	j	en fr de	Двенадцатая ночь. В пирог запекли боб, и он достался тебе. Ты {король|королева} вечера.	Twelfth Night. A bean is baked in the cake, and you get it. You are {king|queen} of the evening.	
med	j	ru	Морозное утро, снег скрипит. Хлеб только из печи.	A frosty morning, the snow squeaking. Bread straight from the oven.	
med	j	it	Летом на площади играют в мяч квартал на квартал. Твой победил.	In summer the quarters play ball against each other in the square. Yours wins.	
med	j	eu ru	{Наловил|Наловила} в ручье раков. Сварили целый котёл.	You catch crayfish in the stream. You boil a whole pot of them.	
med	j	eu	Пир у господина. Павлина подали в его собственных перьях.	A feast at the lord's. The peacock is served in its own feathers.	r3
med	j	eu ru cn in me eg af jp sea meso andes	Звонарь дал тебе ударить в большой колокол. Гул стоял в груди до вечера.	The bell-ringer lets you strike the great bell. The hum stays in your chest till evening.	monk
med	j	eu ru	Вечером женщины собрались прясть. Тебе дали запевать.	In the evening the women gather to spin. They let you lead the song.	f
med	j		Дети принесли тебе первые ягоды, что сами нашли. Немытые, мятые. Вкуснее не бывает.	The children bring you the first berries they found themselves. Unwashed, squashed. Nothing tastes better.	kids
med	o		Ноги далеко не носят. Новости тебе приносят дети.	Your legs won't carry you far now. The children bring you the news.	kids
med	o		Ты {забыл|забыла}, как звали брата. Ночью {вспомнил|вспомнила} и всех {разбудил|разбудила}.	You forget your brother's name. You remember it in the night and wake everyone.	
med	o		Тебе снится, что ты снова {молод|молода}.	You dream you are young again.	
med	o		Молодые спрашивают тебя, будет ли дождь. Ты почти всегда угадываешь.	The young ask you whether it will rain. You are nearly always right.	
med	o		Ты {пережил|пережила} всех своих врагов. Даже скучно.	You have outlived all your enemies. It is almost dull.	
med	o		Сидишь на солнце и греешь колени. Больше ничего не надо.	You sit in the sun warming your knees. You need nothing more.	
med	o		Ты плохо слышишь. Иногда это даже удобно.	Your hearing is going. Sometimes that is handy.	
med	o		Тебя позвали дать имя новорождённому.	They ask you to name a newborn.	
med	o		Ты в третий раз за вечер {рассказал|рассказала} ту же историю. Никто не перебил.	You tell the same story for the third time in an evening. Nobody interrupts.	
med	o		Чувствуешь, что эта зима может стать последней. Раздаёшь свои вещи.	You feel this winter may be your last. You give your things away.	
med	o	eu ru cn in me eg af jp sea meso andes	Чужие дети зовут тебя {дедом|бабушкой}.	Other people's children call you {grandfather|grandmother}.	
med	o		Ты {видел|видела} две большие засухи. Молодые думают, что нынешняя первая.	You have seen two great droughts. The young think this one is the first.	
med	o		Встаёшь до света по привычке. Делать нечего, а встаёшь.	You rise before dawn out of habit. There is nothing to do, but you rise.	
med	o	eu ru cn in me eg af jp sea meso andes	Ходишь по деревне с палкой и всех поучаешь. Тебя терпят.	You go round the village with a stick, telling everyone how to do things. They put up with you.	
med	o	eu ru cn in me eg af jp sea meso andes	Ты помнишь, как на месте этого поля шумел лес.	You remember when this field was forest.	!town
med	o	cn	Тебе шестьдесят. Начался новый круг лет, внуки поднесли персики долголетия.	You turn sixty. A new cycle of years begins, and the grandchildren bring you peaches of long life.	kids grand
med	o	cn	Сидишь у реки с птицей в клетке. Птица поёт, ты дремлешь.	You sit by the river with your bird in its cage. The bird sings, you doze.	
med	o	cn	Ты помнишь каждый год, когда прорывало дамбу. Чиновники ходят к тебе спрашивать.	You remember every year the dyke broke. Officials come to ask you.	
med	o	cn	Ты старше всех в деревне. Из уезда тебе прислали шёлк и мясо.	You are the oldest in the village. The county sends you silk and meat.	
med	o	cn	Сын наконец сдал экзамен. Ты {поклонился|поклонилась} табличкам предков и {заплакал|заплакала}.	Your son has passed the examination at last. You bow to the ancestors' tablets and weep.	kids
med	o	in	Ты {оставил|оставила} дом детям и {поселился|поселилась} у храма. Ешь раз в день.	You leave the house to your children and settle by the temple. You eat once a day.	kids
med	o	in	По утрам перебираешь чётки с именами богов. Сбиваешься и начинаешь сначала.	Each morning you tell the gods' names on your beads. You lose count and start again.	
med	o	in	На совете под баньяном ты говоришь последним. Тебя ждут.	At the council under the banyan you speak last. They wait for you.	m
med	o	in	Под баньяном женщины ждут, что скажешь ты. Ты говоришь последней.	Under the banyan the women wait to hear what you will say. You speak last.	f
med	o	me eg	Ты так и не {дошёл|дошла} до Мекки. {Отдал|Отдала} деньги соседу, чтобы сходил за тебя.	You never got to Mecca. You give a neighbour money to go in your place.	
med	o	me eg	Играешь с соседом в нарды в тени лозы. Он жульничает, ты делаешь вид, что не видишь.	You play backgammon with your neighbour in the shade of the vine. He cheats, and you pretend not to see.	
med	o	me eg	Саван у тебя готов заранее. Лежит в сундуке, сложенный.	Your shroud is ready in good time. It lies folded in the chest.	
med	o	eu	Ты {обещал|обещала} святому свечу, если доживёшь до весны. {Дожил|Дожила}.	You promise the saint a candle if you live to spring. You do.	
med	o	af	Сидишь в тени дерева, где собираются старики. Решаете, кто кому должен.	You sit in the shade of the tree where the old ones gather. You settle who owes whom.	
med	o	af	Сидишь на пороге и плетёшь циновки. Узор знаешь с детства.	You sit on the doorstep weaving mats. You have known the pattern since you were small.	
med	o	af	Загадываешь детям загадки. Ни одной не отгадали.	You set the children riddles. They don't guess a single one.	
med	o	af	Когда выбирали нового вождя, пришли спросить и тебя.	When a new chief is chosen, they come to ask you too.	
med	o	jp	Осенней ночью смотришь на луну и складываешь стих. Выходит про рис.	On an autumn night you look at the moon and make up a poem. It comes out about rice.	
med	o	jp	Сидишь у очага в полу и кормишь огонь по одной веточке.	You sit by the sunken hearth feeding the fire one twig at a time.	
med	o	jp	Ухаживаешь за придорожным Дзидзо. Повязал{|а} ему новый красный нагрудник.	You look after the roadside Jizō. You tie a new red bib on him.	
med	o	sea	Каждый день носишь цветы и рис духам дома.	Every day you bring flowers and rice to the spirits of the house.	
med	o	sea	Сидишь на веранде, жуёшь бетель и смотришь на реку.	You sit on the veranda chewing betel and watching the river.	
med	o	sea	Лечишь соседей заговорами. Помогает через раз.	You heal the neighbours with charms. It works every other time.	
med	o	meso	Старикам можно пить пульке. Ты пьёшь и не боишься наказания.	The old may drink pulque. You drink without fear of punishment.	
med	o	meso	Ты знаешь все дни календаря по именам. Молодые просят выбрать день для свадьбы.	You know every day of the calendar by name. The young ask you to choose a wedding day.	
med	o	meso	Сидишь у порога и лущишь кукурузу на всю семью.	You sit at the door shelling maize for the whole family.	
med	o	andes	В поле тебя больше не берут. Прядёшь шерсть на ходу, не глядя на веретено.	You are past field work. You spin wool as you walk, without looking at the spindle.	!town
med	o	andes	Перед каждым делом даришь Матери-Земле несколько листьев коки.	Before every task you give a few coca leaves to Mother Earth.	
med	o	andes	Смотришь сверху на террасы, которые {строил|строила} молодым. Стоят.	You look down on the terraces you built when young. They are holding.	
med	o	au	Ты знаешь, где искать воду в любую засуху за сорок лет.	You know where to find water in any drought of the last forty years.	
med	o	au	Тебе приносят с охоты лучшие куски, помягче.	They bring you the best bits from the hunt, the soft ones.	
med	o	au	Учишь молодых песне, которую поют только у одной скалы.	You teach the young a song that is sung at one rock only.	
med	o	au	Где ставить стоянку на зиму, решать теперь тебе.	Where to camp this winter is now for you to decide.	
med	o	au	Пальцы скрючило, но сеть ты ещё вяжешь сам{|а}.	Your fingers are bent, but you still knot the net yourself.	
med	o	au	Ты рассказываешь, как в детстве {видел|видела} пожар, что шёл три дня.	You tell how as a child you saw a fire that burned for three days.	
med	o	it fr de en	У торговца в городе {купил|купила} очки. Снова видишь игольное ушко.	You buy spectacles from a trader in town. You can see the eye of the needle again.	after:1300 !town
med	o	eu ru cn in me eg af jp sea meso andes	Ты {переписал|переписала} сорок книг. Теперь глаза не видят букв.	You have copied forty books. Now your eyes can't see the letters.	monk lit
med	o	eu ru	Пишешь завещание: кому лес, кому серебро, кому молитвы.	You make your will: the wood to one, the silver to another, prayers to a third.	r3
med	o		Ты принимала роды у половины округи. Теперь принимаешь у тех, кого принимала.	You have delivered half the district. Now you deliver the babies of the babies you delivered.	f
med	x		Лихорадка с болот. Слегла половина ваших.	Fever from the marshes. Half your people are down with it.	
med	x		Засуха. Земля трескается, звери уходят.	Drought. The ground cracks and the animals go away.	!town
med	x		Огонь пошёл по сухой траве прямо на вас. Бежали к реке.	Fire runs through the dry grass straight at you. You run for the river.	
med	x		Из-за гребня пришли чужие и убили двоих у воды.	Strangers come over the ridge and kill two of your people at the water.	
med	x	eu ru cn in me eg af jp sea meso andes	Сборщики забрали зерно, отложенное на семена.	The collectors take the grain put by for seed.	
med	x	eu ru cn in me eg af jp sea meso andes	Град выбил всё поле за четверть часа.	Hail beats down the whole field in a quarter of an hour.	!town
med	x	cn	Всех мужчин угнали на казённые работы. В поле остались женщины и старики.	All the men are taken for state labour. Only women and the old are left in the fields.	!town
med	x	in	Чужие конники сожгли храм и угнали скот.	Foreign horsemen burn the temple and drive off the cattle.	!town
med	x	me	Кочевники угнали верблюдов и разграбили караван с вашим товаром.	Nomads drive off the camels and loot the caravan carrying your goods.	
med	x	eg me	Нил не поднялся. Хлеб дорожает каждый день.	The Nile does not rise. Bread costs more every day.	
med	x	eu	Шайка наёмников встала в деревне на зиму. Едят всё подчистую.	A band of mercenaries settles in the village for the winter. They eat everything.	
med	x	ru	Ранний мороз побил рожь на корню.	An early frost kills the rye where it stands.	
med	x	af	Мухи погубили весь скот у реки.	The flies kill all the cattle by the river.	!town
med	x	jp	Земля тряслась, а потом с моря пришла волна.	The earth shakes, and then a wave comes in from the sea.	!town +sea
med	x	sea	Войско соседнего царя пришло на слонах. Угоняют людей целыми деревнями.	The next king's army comes on elephants. They drive off whole villages.	
med	x	sea	Буря с моря сорвала крыши и положила рис.	A storm off the sea tears away the roofs and flattens the rice.	+sea
med	x	meso	Ранний заморозок побил всю кукурузу.	An early frost kills all the maize.	
med	x	meso	Воины соседнего города увели пленников для жертвы.	Warriors from the next city carry off captives for sacrifice.	
med	x	andes	Землетрясение обрушило террасы на целом склоне.	An earthquake brings down the terraces on a whole slope.	
med	x	andes	Море потеплело, рыба ушла, а на побережье льёт, как никогда.	The sea turns warm, the fish leave, and it rains on the coast as never before.	+sea
med	x	au	Чужие пришли охотиться на вашей земле. Будет бой.	Strangers come to hunt on your country. There will be a fight.	
med	x	au	Река вышла из берегов среди ночи. Пропало всё, что не успели унести.	The river breaks its banks in the night. Everything you could not carry is lost.	
med	x	au	Кто-то нарушил закон, и теперь между родами вражда.	Someone has broken the law, and now there is a feud between the clans.	
med	x	au	Умерла бабка, что знала дорогу к дальним колодцам.	The grandmother who knew the way to the far waterholes dies.	
med	x	au	По стоянке пошёл кашель. Старики умирают один за другим.	A cough goes through the camp. The old ones die one after another.	
med	x	au	Пыльная буря три дня. Ни зверя, ни следа.	A dust storm for three days. No game, no tracks.	
med	x	eu ru me eg	Чёрная смерть. Бубон под мышкой, на третий день человек мёртв. Хоронят в общих ямах.	The Black Death. A swelling in the armpit, and on the third day a man is dead. They bury them in pits.	after:1347 before:1353
med	x	fr de it en	Под стенами города бьют пушки. Ядра проламывают стену.	Cannon pound the town walls. The balls break through.	after:1420
med	x	en fr	С моря пришли длинные корабли. Монастырь у бухты сожгли.	Longships come in from the sea. The monastery by the bay is burnt.	after:790 before:1070 +sea
med	x	cn me ru	Пришли монголы. Город, что не открыл ворота, вырезали весь.	The Mongols come. The town that did not open its gates is put to the sword.	after:1210 before:1290
med	x	jp	У врага теперь ружья. Твоих родичей убили издалека, мечи даже не скрестились.	The enemy has guns now. Your kinsmen are killed from afar before a sword is drawn.	after:1550
med	x	in	Через ваши поля прошло войско султана. Храм разобрали на камень.	The sultan's army crosses your fields. The temple is pulled down for its stone.	after:1200 !town
med	y		Послушание тебе дали самое простое: носить воду на кухню. Сорок вёдер в день.	Your first task is the simplest: carrying water to the kitchen. Forty buckets a day.	monk
med	y	cn jp sea in	Тебе обрили голову. Ветер впервые холодит макушку.	Your head is shaved. For the first time the wind is cold on your crown.	monk
med	y	cn jp	Учишь сутру наизусть. Наставник стучит палкой об пол, когда ты сбиваешься.	You learn a sutra by heart. Your teacher strikes the floor with a stick when you stumble.	monk
med	y		Мать приходила к воротам. Тебя к ней не выпустили, только передали её хлеб.	Your mother came to the gate. You were not let out to her; they only passed you her bread.	monk
med	y		Ночью в общей спальне кто-то плачет. Утром никто не признаётся.	Someone cries in the dormitory at night. In the morning nobody owns up.	monk
med	y	eu ru	Тебя поймали со сливой из монастырского сада. Неделю ешь стоя.	You are caught with a plum from the monastery garden. For a week you eat standing up.	monk
med	y		Старш{ий брат|ая сестра} учит тебя растирать краски для книг.	An older {brother|sister} teaches you to grind colours for the books.	monk
med	y		Ты {принял|приняла} постриг. Тебе дали новое имя, и ты не сразу на него {откликался|откликалась}.	You take your vows. You are given a new name, and at first you do not answer to it.	monk
med	y	eu ru	Всю ночь перед постригом стоишь на коленях. К утру не чувствуешь ног.	You kneel all night before your vows. By morning you cannot feel your legs.	monk
med	y	sea in	С чашей для подаяния идёшь по деревне. Тебе кладут рис и не смотрят в глаза.	You walk through the village with your alms bowl. They put rice in it without meeting your eyes.	monk
med	y	eu ru	Тайком {залез|залезла} на колокольню. Оттуда видно, как далеко тянется мир.	You sneak up the bell tower. From there you can see how far the world goes.	monk
med	a		Тебя поставили на кухню. Варишь кашу на сорок человек и молчишь.	You are put in the kitchen. You cook porridge for forty and keep silent.	monk
med	a	eu ru	В обитель пришёл странник. Ты моешь ему ноги, как положено по уставу.	A pilgrim comes to the monastery. You wash his feet, as the rule says.	monk
med	a		Смотришь за пасекой. Пчёлы тебя не жалят, и {братия|сёстры} зовут это чудом.	You keep the bees. They never sting you, and the others call it a miracle.	monk
med	a		Неделя молчания. Ты понимаешь, сколько слов {говорил|говорила} зря.	A week of silence. You learn how many of your words were wasted.	monk
med	a	cn jp sea in	Сидишь в медитации с рассвета. Ноги затекли, а мысли всё бегут.	You sit in meditation from dawn. Your legs go numb and your thoughts keep running.	monk
med	a	eu ru	Обители принадлежат три деревни. Ты {ездил|ездила} за оброком и {вернулся|вернулась} ни с чем: там нечего взять.	The monastery owns three villages. You go to collect the dues and come back empty-handed: they have nothing to give.	monk
med	a		Лечишь травами. К воротам приходят больные со всей округи.	You heal with herbs. The sick come to the gate from all around.	monk
med	a		Тебе велели учить послушников. Самый младший очень похож на тебя в детстве.	You are set to teach the novices. The youngest is very like you as a child.	monk
med	a	ru	Пишешь икону. Лицо не выходит третий месяц.	You paint an icon. The face has not come right for three months.	monk
med	a	eu ru	Звонишь к вечерне. Руки знают верёвку лучше, чем губы — слова молитвы.	You ring for vespers. Your hands know the rope better than your lips know the prayer.	monk
med	a	cn jp	Метёшь двор храма. Листья падают снова, и ты метёшь снова.	You sweep the temple yard. The leaves fall again, and you sweep again.	monk
med	a		Тебя послали с поручением в город. Ты {отвык|отвыкла} от шума и людей.	You are sent on an errand to the town. You have lost the habit of noise and crowds.	monk
med	a	eu	Латынь ты знаешь так, что думаешь на ней.	You know Latin well enough to think in it.	monk lit
med	a	cn jp	Переписываешь сутры. Каждый знак — поклон.	You copy the sutras. Every character is a bow.	monk lit
med	j		Первый снег на монастырских крышах. Во дворе тихо, как на чистой странице.	The first snow on the monastery roofs. The yard is as quiet as a clean page.	monk
med	j	eu ru	На Пасху звонят все колокола. Тебе разрешили съесть крашеное яйцо.	At Easter all the bells ring. You are allowed a painted egg.	monk
med	j		Кот приходит в твою келью греться. Ты делишься с ним хлебом.	A cat comes to your cell for warmth. You share your bread with it.	monk
med	j		Сегодня пение сложилось так, что у тебя мурашки по рукам.	Today the chant comes together so well it raises the hair on your arms.	monk
med	j	jp	Зацвела сакура у храма. Наставник позволил весь день смотреть на неё.	The cherry by the temple blooms. Your teacher lets you spend the whole day looking at it.	monk
med	j		{Закончил|Закончила} переписывать книгу. На последней странице оставляешь свою маленькую молитву.	You finish copying a book. On the last page you leave a small prayer of your own.	monk lit
med	j		В окне кельи все звёзды. Смотришь на них до утренней службы.	All the stars show in your cell window. You watch them till the morning office.	monk
med	j		Первые огурцы с монастырского огорода. Ешь с солью и улыбаешься.	The first cucumbers from the monastery garden. You eat them with salt and smile.	monk
med	j		Ласточки свили гнездо над входом в храм. Каждое утро ты с ними здороваешься.	Swallows build a nest over the temple door. Every morning you greet them.	monk
med	j		Праздник в обители: на столе рыба и мёд. Едите молча, но все улыбаются.	A feast day in the monastery: fish and honey on the table. You eat in silence, but everyone is smiling.	monk
med	j		Тебе поручили разобрать библиотеку. В одной книге нашёлся засушенный цветок.	You are set to sort the library. In one book there is a pressed flower.	monk lit
med	j	cn jp sea in	Медитация на рассвете. На миг мыслей нет совсем.	Meditation at dawn. For a moment there are no thoughts at all.	monk
med	o		Ты старше всех в обители. Послушники приходят спросить, как было раньше.	You are the oldest in the monastery. The novices come to ask how things used to be.	monk
med	o		Тебя {сделали настоятелем|сделали настоятельницей}. Ключи тяжелее, чем ты {думал|думала}.	You are made {abbot|abbess}. The keys are heavier than you thought.	monk
med	o		Слух уходит. Службу ты знаешь наизусть и поёшь её про себя.	Your hearing goes. You know the office by heart and sing it to yourself.	monk
med	o		Тебе отвели келью потеплее, у кухни. Тебе неловко, но ты {рад|рада}.	You are given a warmer cell, by the kitchen. You are embarrassed and glad.	monk
med	o		Молод{ой брат|ая сестра} читает тебе вслух: твои глаза больше не видят букв.	A young {brother|sister} reads aloud to you: your eyes no longer see the letters.	monk
med	o		Сажаешь в саду яблоню. Плоды достанутся тем, кто придёт после.	You plant an apple tree in the garden. The fruit is for those who come after.	monk
med	o		Ты сорок лет не {выходил|выходила} за ворота. Мир, говорят, стал совсем другим.	You have not gone past the gate in forty years. The world, they say, is quite different now.	monk
med	o	cn jp	Ученики спорят о сутре. Ты молчишь, и они тоже замолкают.	The disciples argue over a sutra. You say nothing, and they fall silent too.	monk
med	o		Ночами не спится. Сидишь в храме один, со светильником.	You cannot sleep at night. You sit alone in the temple with a lamp.	monk
med	x		Мор пришёл в обитель. Хоронили по трое в день.	Plague reaches the monastery. Three are buried a day.	monk
med	x		Обитель загорелась от свечи. Книги выносили на руках, спасли половину.	The monastery catches fire from a candle. You carry the books out by hand and save half.	monk
med	x		Неурожай. Монастырь кормит всю округу, пока хватает зерна. Потом не хватает.	A failed harvest. The monastery feeds the whole district while the grain lasts. Then it does not.	monk
med	x	eu ru	Солдаты неделю стояли в обители. Увели коней, выпили вино, сняли колокол.	Soldiers are quartered in the monastery for a week. They take the horses, drink the wine and take down the bell.	monk
med	x		Зимой замёрз колодец. Воду топите из снега в котле.	In winter the well freezes. You melt snow in a cauldron for water.	monk
med	x		Ты тяжело {заболел|заболела}. Над тобой молились три ночи, и ты {встал|встала}.	You fall gravely ill. They pray over you for three nights, and you get up.	monk
med	x	cn	Чиновники пересчитали монахов и половину отправили обратно в мир.	Officials count the monks and send half of them back into the world.	monk
med	x	cn jp	Землетрясение повалило пагоду. Разбираете камни руками.	An earthquake brings down the pagoda. You clear the stones by hand.	monk
med	x		Разбойники вломились в обитель. Ты {отсиделся|отсиделась} в погребе с книгами.	Robbers break into the monastery. You hide in the cellar with the books.	monk
med	c		Мать перестала кормить тебя грудью: родился младший.	Your mother stops nursing you: a younger one has been born.	small
med	c		Ты {сделал|сделала} первые шаги — прямо к огню. Мать успела.	You take your first steps, straight towards the fire. Your mother is quicker.	small
med	c		Твоё первое слово — «дай».	Your first word is "give".	small
med	c		Спишь между матерью и старшей сестрой. Там теплее всего.	You sleep between your mother and your older sister. It is the warmest place.	small
med	c		Тебя носят за спиной, пока мать работает. Мир ты видишь через её плечо.	You are carried on your mother's back while she works. You see the world over her shoulder.	small
med	c		Тебя чуть не унесла лихорадка. Бабка просидела рядом три ночи.	A fever nearly takes you. Your grandmother sits by you for three nights.	small
med	c		Ты {съел|съела} горсть земли и {остался|осталась} очень {доволен|довольна}.	You eat a handful of earth and are very pleased with yourself.	small
med	c		Боишься петуха. Он ходит за тобой по всему двору.	You are afraid of the rooster. It follows you all round the yard.	small
med	c		Старшие дети таскают тебя за собой, как куклу.	The older children drag you about like a doll.	small
med	c		Засыпаешь под песню, которую мать поёт без слов.	You fall asleep to a song your mother hums without words.	small
med	c		Ты {упал|упала} и {рассёк|рассекла} лоб. Шрам останется на всю жизнь.	You fall and cut your forehead. The scar will stay for life.	small
med	c		Плачешь, когда отец уходит, и смеёшься, когда он возвращается.	You cry when your father leaves and laugh when he comes back.	small
med	c		Таскаешь собаку за хвост, а она терпит.	You pull the dog's tail, and it puts up with it.	small
med	c		Тебе дали первую ложку. Половина каши на полу.	You are given your first spoon. Half the porridge ends up on the floor.	small
med	c		Ты {спрятался|спряталась} под лавку, и тебя полдня искали всей семьёй.	You hide under the bench, and the whole family searches for you half the day.	small
med	c		Ты всё время тянешь в рот блестящее. Мать вынимает и смеётся.	You keep putting shiny things in your mouth. Your mother takes them out and laughs.	small
med	c		Сидишь у порога и встречаешь каждого, кто входит, своим словом.	You sit by the door and greet everyone who comes in with your own word.	small
med	c		Тебе повесили на шею оберег от злых духов. Ты всё время его грызёшь.	A charm against evil spirits is hung round your neck. You chew it all the time.	small
`,ve=`# group	kind	tags	ru	en	need
mod	c		Прививка от кори. {Плакал|Плакала}, зато не {заболел|заболела}.	A measles jab. You cry, but you don't get ill.	
mod	c		Впервые {смотрел|смотрела} телевизор — у соседей, всей улицей.	You watch television for the first time, at the neighbours', with the whole street.	
mod	c	af in	Каждое утро носишь воду из колодца за километр.	Every morning you carry water from a well a kilometre away.	
mod	c		Первый день в школе. Форма велика на два размера.	First day at school. The uniform is two sizes too big.	
mod	c		Бабушка учит тебя считать на пальцах до ста.	Grandmother teaches you to count to a hundred on your fingers.	
mod	c		{Упал|Упала} с дерева и {сломал|сломала} руку. Гипс расписал весь класс.	You fall from a tree and break your arm. The whole class signs the cast.	
mod	c	cn ru	Красный галстук. Мать гладит его каждый вечер.	The red neckerchief. Your mother irons it every evening.	
mod	c	cn ru	Детский сад при заводе. Мать забирает тебя прямо со смены.	The factory kindergarten. Your mother collects you straight from her shift.	
mod	c	cn	В школу едешь на багажнике отцовского велосипеда.	You ride to school on the rack of your father's bicycle.	
mod	c	in	Муссон. Двор залило, пускаешь бумажные кораблики.	The monsoon. The yard floods and you sail paper boats.	
mod	c	in	Дед, дядья, их жёны, двоюродные — восемнадцать человек в одном доме. Летом спите на крыше.	Grandfather, uncles, their wives, cousins: eighteen people in one house. In summer you sleep on the roof.	
mod	c	in	Крикет на пустыре. Вместо калитки — три кирпича.	Cricket on waste ground. Three bricks for a wicket.	
mod	c	sea	Едешь на мотобайке между отцом и матерью. Младший брат сидит впереди.	You ride the motorbike wedged between father and mother. Your little brother sits in front.	
mod	c	sea	Пока взрослые жнут рис, ты гоняешь уток по стерне.	While the grown-ups reap the rice, you chase ducks across the stubble.	r1
mod	c	af	Учишь буквы палочкой на земле. Тетрадь одна на троих.	You learn your letters with a stick in the dirt. One exercise book for three.	
mod	c	af	Пасёшь коз с братом. Лепёшку делите пополам.	You herd goats with your brother. You split one flatbread between you.	r1
mod	c	af sea in	Малярия. Мать не отходит от тебя неделю.	Malaria. Your mother doesn't leave your side for a week.	
mod	c	latam	Футбол в переулке фавелы. Мяч скатан из носков.	Football in a favela alley. The ball is rolled from socks.	r0
mod	c	latam	Вечером вся семья смотрит теленовеллу. Тебе велят молчать.	In the evening the whole family watches the telenovela. You are told to hush.	
mod	c	ru	Лето у бабушки на даче. Клубнику ешь прямо с грядки.	Summer at grandmother's dacha. You eat strawberries straight from the bed.	
mod	c	ru	В коммуналке у каждой семьи свой выключатель в уборной.	In the kommunalka every family has its own light switch for the toilet.	+town
mod	c	jp	Жёлтая шапочка, тяжёлый ранец. До школы идёшь {один|одна}.	A yellow cap, a heavy satchel. You walk to school alone.	
mod	c	me	Летом спите на крыше. Вечером мать поливает её водой, чтобы остыла.	In summer you sleep on the roof. In the evening your mother wets it to cool it down.	
mod	c	us	Жёлтый школьный автобус. Место у окна — твоё.	The yellow school bus. The window seat is yours.	
mod	c	au	Рождество в жару. Обед на пляже, песок в бутербродах.	Christmas in the heat. Lunch on the beach, sand in the sandwiches.	
mod	c		Мать шьёт тебе платье из старой занавески.	Your mother sews you a dress from an old curtain.	f
mod	c		Корова отелилась ночью. Тебя разбудили посмотреть.	The cow calves in the night. They wake you to see.	r1
mod	c		Брат родился дома. Тебя на ночь отправили к соседям.	Your brother is born at home. You are sent to the neighbours for the night.	
mod	c		Учитель бьёт линейкой по пальцам за кляксы.	The teacher raps your knuckles with a ruler for ink blots.	
mod	c		Отец впервые берёт тебя на базар. Ты держишься за его рубашку.	Father takes you to the market for the first time. You hold on to his shirt.	
mod	c		Лето в деревне у деда. Учишься плавать в реке.	Summer in your grandfather's village. You learn to swim in the river.	
mod	c		У тебя своя комната и пианино. Учительница музыки приходит по средам.	You have your own room and a piano. The music teacher comes on Wednesdays.	r3
mod	y		{Купил|Купила} первый телефон.	You buy your first phone.	town
mod	y		{Уехал|Уехала} в город. Комната на шестерых.	You move to the city. One room for six.	town
mod	y		{Сдал|Сдала} выпускные экзамены. Мать раздала соседям сладости.	You pass your final exams. Your mother hands out sweets to the neighbours.	lit
mod	y		Первая работа: ночная смена на складе.	Your first job: the night shift at a warehouse.	+town
mod	y		Друзья уехали за границу. Ты {остался|осталась}.	Your friends go abroad. You stay.	
mod	y	cn	Гаокао. Два дня экзаменов, дома все ходят на цыпочках.	The gaokao. Two days of exams; at home everyone tiptoes.	lit
mod	y	in	Результаты экзаменов за десятый класс печатают в газете. Отец ищет твою фамилию.	The tenth-standard results are printed in the paper. Father looks for your name.	lit
mod	y	in	Тебе уже ищут пару. Мать показывает фотографии.	They are already looking for a match for you. Mother shows you photographs.	
mod	y	af	Чтобы платить за школу, торгуешь арахисом на автостанции.	To pay for school you sell groundnuts at the bus station.	r0 r1
mod	y	af	Едешь в город на матату. Двадцать человек в машине на четырнадцать.	You ride to town in a matatu. Twenty people in a car for fourteen.	
mod	y	latam	Тебе пятнадцать. Белое платье, вальс с отцом, вся улица в гостях.	Your quinceañera. A white dress, a waltz with your father, the whole street invited.	f
mod	y	latam	Играешь за районную команду. Говорят, на тебя приезжал смотреть тренер из клуба.	You play for the neighbourhood team. They say a club coach came to watch you.	m
mod	y	ru	Выпускной. Всем классом встречаете рассвет на набережной.	Graduation night. The whole class watches the sunrise on the embankment.	
mod	y	ru	{Поступил|Поступила} в техникум. Общежитие, одна плитка на этаж.	You get into technical college. A hostel, one hotplate per floor.	+town
mod	y	jp	После уроков — курсы. Домой едешь последним поездом.	After school, cram school. You go home on the last train.	lit
mod	y	sea	Работаешь на швейной фабрике. Половину денег шлёшь домой.	You work at a garment factory. You send half your pay home.	town
mod	y	me	Летом помогаешь дяде в лавке. Учишься торговаться.	In summer you help your uncle in his shop. You learn to haggle.	
mod	y	us	Летняя работа: жаришь котлеты для бургеров. Первые свои деньги.	A summer job flipping burgers. Your first money of your own.	
mod	y		Первая любовь. Записки на уроках через три парты.	First love. Notes passed in class across three desks.	lit
mod	y		Призыв. Мать плачет на вокзале.	The call-up. Your mother cries at the station.	m
mod	y		Отец умер. Ты {бросил|бросила} школу, чтобы кормить младших.	Your father dies. You leave school to feed the younger ones.	r0 r1
mod	y		Подрабатываешь на стройке. Ладони в мозолях.	You take odd jobs on a building site. Your palms are all blisters.	m r0 r1
mod	y		{Выучил|Выучила} английский по песням с кассет.	You learn English from songs on cassettes.	lit
mod	y		Первый ребёнок. Тебе семнадцать.	Your first child. You are seventeen.	f kids
mod	a		{Взял|Взяла} кредит. Теперь считаешь каждую монету.	You take out a loan. Now you count every coin.	
mod	a		Первый раз в жизни {летел|летела} на самолёте.	For the first time in your life you fly.	
mod	a		Отправляешь деньги родителям в деревню.	You send money to your parents in the village.	town
mod	a		{Купил|Купила} холодильник. Мать открывает его, просто чтобы посмотреть.	You buy a fridge. Your mother opens it just to look.	
mod	a		Ребёнок поступил в университет — первый в семье.	Your child gets into university, the first in the family.	kids
mod	a		Работаешь на двух работах. Детей видишь по воскресеньям.	You work two jobs. You see the children on Sundays.	kids
mod	a	cn	Данвэй дал квартиру: одна комната, кухня в коридоре на три семьи.	The danwei gives you a flat: one room, a kitchen in the corridor shared by three families.	+town
mod	a	cn	Едешь домой на Новый год. Сорок часов стоя в поезде.	You go home for the New Year. Forty hours standing on the train.	town
mod	a	cn	Копишь сыну на квартиру. Без квартиры невесты не найти.	You save for a flat for your son. Without a flat there will be no bride.	kids +town
mod	a	cn	Работаешь на фабрике в большом городе. Ребёнка растят дед с бабушкой.	You work at a factory in a big city. Grandparents raise your child.	kids town
mod	a	in	В доме свёкра встаёшь первой, ложишься последней.	In your father-in-law's house you are the first up and the last to bed.	f married
mod	a	in	Пришёл муссон — сеешь рис. Опоздаешь на неделю, пропадёт год.	The monsoon comes and you sow the rice. A week late and the year is lost.	r1 !town
mod	a	in	На работу ездишь пригородным поездом. Висишь на подножке.	You commute on the suburban train, hanging from the footboard.	town
mod	a	in	{Уехал|Уехала} на стройку в Залив. Паспорт забрал хозяин.	You go to a building site in the Gulf. The boss keeps your passport.	r0 r1
mod	a	sea	Возишь людей на мотобайке. Знаешь каждый переулок.	You carry passengers on your motorbike. You know every alley.	m r0 r1
mod	a	sea	Жатва риса. Всей деревней, по очереди на каждом поле.	The rice harvest. The whole village, field by field in turn.	r1 !town
mod	a	sea in	Работаешь домработницей за границей. Своих детей видишь раз в два года.	You work as a maid abroad. You see your own children every two years.	f kids
mod	a	af	В деревне пробурили скважину. За водой к реке больше не ходят.	A borehole is drilled in the village. Nobody walks to the river for water any more.	
mod	a	af	Торгуешь на рынке: помидоры, лук, спички. Место занимаешь затемно.	You sell at the market: tomatoes, onions, matches. You claim your spot before dawn.	f
mod	a	af in	{Вступил|Вступила} в общую кассу. Раз в год все деньги — твои.	You join a savings circle. Once a year the whole pot is yours.	
mod	a	latam	Строишь дом своими руками, по воскресеньям. Второй этаж — потом.	You build your house with your own hands, on Sundays. The second floor can wait.	r0 r1
mod	a	latam	Брат в Штатах прислал денег. На них перекрыли крышу.	Your brother in the States sends money. It buys a new roof.	
mod	a	latam	До работы два часа на автобусе. Спишь стоя.	Two hours by bus to work. You sleep standing up.	town
mod	a	ru	Очередь за колбасой. Берёшь и на соседку.	A queue for sausage. You buy some for your neighbour too.	
mod	a	ru	Выходные на даче: картошка, баня, шашлык.	Weekends at the dacha: potatoes, the banya, shashlik.	
mod	a	ru	{Получил|Получила} квартиру от завода. Ждали двенадцать лет.	The factory gives you a flat. You waited twelve years.	+town
mod	a	jp	Последняя электричка, галстук ослаблен. Начальник опять звал выпить.	The last train, tie loosened. The boss asked you out drinking again.	m r2
mod	a	jp	Новогодние дни у родни мужа. Ты на кухне с утра до ночи.	New Year at your husband's family. You are in the kitchen from dawn to night.	f married !widowed
mod	a	me	Рамадан. Вечером вся семья ждёт выстрела пушки, чтобы сесть за стол.	Ramadan. In the evening the whole family waits for the cannon to sit down to eat.	
mod	a	eu us	{Взял|Взяла} ипотеку на двадцать пять лет.	You take out a twenty-five-year mortgage.	r2 r3
mod	a	us	Страховка не покрыла операцию. Платишь в рассрочку.	The insurance won't cover the operation. You pay in instalments.	
mod	a	au	Работаешь на руднике: две недели там, неделя дома.	You work at a mine: two weeks there, one week home.	m
mod	a		Родился первенец. Третью ночь не спишь, не насмотришься.	Your first child is born. Third night without sleep; you can't stop looking.	kids
mod	a		Учишься водить в сорок лет. Дети смеются.	You learn to drive at forty. The children laugh.	kids
mod	a		Вечерами учишься на бухгалтера. Засыпаешь над тетрадью.	In the evenings you study bookkeeping. You fall asleep over the notebook.	lit
mod	a		Бумаги в конторе. Обед — за рабочим столом.	Papers at the office. Lunch at your desk.	r2 +town
mod	a		{Купил|Купила} машину. Всей семьёй едете к морю.	You buy a car. The whole family drives to the sea.	r2 r3 +sea
mod	a		У детей няня и шофёр. С няней они говорят на её языке.	The children have a nanny and a driver. They speak the nanny's language with her.	r3 kids
mod	a		Профсоюз объявил забастовку. Неделю стоите у ворот.	The union calls a strike. For a week you stand at the gates.	r1
mod	a		Свекровь учит тебя готовить по-своему.	Your mother-in-law teaches you to cook her way.	f married
mod	a		Ночь у отца в больнице. Утром — на работу.	A night at your father's hospital bed. In the morning, work.	
mod	a		{Развёлся|Развелась}. Дети у тебя по выходным.	You divorce. The children are with you at weekends.	kids
mod	a		Соседи сверху залили. Сначала ругались, потом вместе пили чай.	The upstairs neighbours flood your flat. First you quarrel, then you drink tea together.	town
mod	a		Сын родился в больнице. Ты сам{|а} — дома, на циновке.	Your son is born in a hospital. You were born at home, on a mat.	kids r0 r1
mod	j		Первый раз в жизни {ел|ела} мороженое.	For the first time in your life you eat ice cream.	
mod	j		Дети прислали фотографию с моря.	The children send a photo from the seaside.	kids
mod	j		Футбол во дворе до темноты.	Football in the yard till dark.	
mod	j		{Купил|Купила} подержанный мопед. Ветер в лицо.	You buy a second-hand moped. Wind in your face.	
mod	j		На свадьбе брата {танцевал|танцевала} до утра.	At your brother's wedding you dance till morning.	
mod	j		{Нашёл|Нашла} старую фотографию прадеда. Вы похожи.	You find an old photo of your great-grandfather. You look alike.	
mod	j	in	Финал по крикету. Весь переулок у одного телевизора. Наши выиграли!	The cricket final. The whole lane round one television. Our side wins!	
mod	j	cn	Новый год: всей семьёй лепите пельмени, во дворе трещат хлопушки.	New Year: the whole family makes dumplings, firecrackers crackle in the yard.	
mod	j	af	Свадьба двоюродного брата. Три дня танцев.	Your cousin's wedding. Three days of dancing.	
mod	j	latam	Твоя команда взяла кубок. Всю ночь гуляете по улицам.	Your team wins the cup. You are out in the streets all night.	
mod	j	ru	Белые грибы. Целая корзина, и ещё в кепку.	Porcini. A whole basket, and more in your cap.	
mod	j	jp	Ханами: обед под цветущей сакурой с сослуживцами.	Hanami: lunch under the cherry blossom with your colleagues.	r2
mod	j	sea	Ночной рынок: лапша за гроши, музыка из каждой лавки.	The night market: noodles for pennies, music from every stall.	
mod	j	me	Свадьба сестры. Женщины поют до утра.	Your sister's wedding. The women sing till morning.	
mod	j	us	Четвёртое июля: барбекю у соседей, салют над озером.	The Fourth of July: a barbecue next door, fireworks over the lake.	
mod	j	au	Рыбалка с пирса. Ничего не {поймал|поймала}, а день хороший.	Fishing off the jetty. You catch nothing, but it's a good day.	
mod	j	af in	Дождь после засухи. Дети бегают под ним голышом.	Rain after the drought. The children run naked in it.	r1
mod	j		Ребёнок сказал первое слово.	Your child says the first word.	kids
mod	j		Дали премию. Всем {купил|купила} подарки.	A bonus at work. You buy everyone presents.	r1 r2
mod	j		{Помирился|Помирилась} с братом после десяти лет молчания.	You make peace with your brother after ten years of silence.	
mod	j		Соседка принесла горячего хлеба.	The neighbour brings hot bread.	
mod	j		Впервые {увидел|увидела} море. Вода и правда солёная.	You see the sea for the first time. The water really is salty.	+sea !sea
mod	j		Сын позвонил просто так.	Your son calls, just because.	kids
mod	j		Вечер на крыше с друзьями. Песни под гитару.	An evening on the roof with friends. Songs to a guitar.	
mod	j		Помидоров уродилось столько, что раздаёшь соседям.	So many tomatoes this year you give them to the neighbours.	r1
mod	o		Внуки звонят по видео из другой страны.	The grandchildren video-call from another country.	kids grand
mod	o		Пьёшь таблетки, которых не было, когда ты {родился|родилась}.	You take pills that did not exist when you were born.	
mod	o		Внучка учит тебя пользоваться телефоном. Ты учишь её лепить пельмени.	Your granddaughter teaches you to use the phone. You teach her to make dumplings.	kids grand
mod	o		Ты помнишь жизнь без электричества. Внуки не верят.	You remember life without electricity. The grandchildren don't believe you.	kids grand
mod	o		Каждое утро гуляешь в парке. Здороваешься с одними и теми же собаками.	Every morning you walk in the park and greet the same dogs.	
mod	o	cn	По утрам танцуешь с соседками на площади под магнитофон.	In the mornings you dance with the neighbours on the square to a tape player.	f
mod	o	cn	Растишь внука, пока сын работает в другом городе.	You raise your grandson while your son works in another city.	kids grand
mod	o	in	Живёшь у старшего сына. Невестка приносит чай ровно в шесть.	You live with your eldest son. His wife brings tea at six sharp.	kids
mod	o	af	Сын каждый месяц шлёт деньги на телефон.	Every month your son sends money to your phone.	kids
mod	o	af	Под деревом разбираешь споры деревни. Тебя слушают.	Under the tree you settle the village's quarrels. People listen.	m
mod	o	latam	Смотришь сериал и споришь с соседкой о героях, как о родне.	You watch the soap and argue with the neighbour about the characters as if they were kin.	
mod	o	ru	Пенсии хватает до двадцатого. Выручает дача.	The pension lasts till the twentieth. The dacha gets you through.	
mod	o	ru	Варишь варенье. Банок больше, чем внуков.	You make jam. More jars than grandchildren.	kids grand
mod	o	jp	Утренняя гимнастика по радио, как в детстве.	Morning exercises to the radio, just like in childhood.	
mod	o	sea	Сидишь у дома и смотришь, как правнуки гоняют на мопедах.	You sit outside the house watching the great-grandchildren race on mopeds.	kids grand
mod	o	me	Кофе с соседями после пятничной молитвы.	Coffee with the neighbours after Friday prayers.	m
mod	o	us	{Переехал|Переехала} во Флориду. Гольф по вторникам.	You move to Florida. Golf on Tuesdays.	r2 r3 +town
mod	o	eu	Каждый день забираешь внуков из школы.	Every day you pick the grandchildren up from school.	kids grand
mod	o		Плохо слышишь. Телевизор на всю громкость.	Your hearing fails. The television at full volume.	
mod	o		{Пережил|Пережила} всех друзей детства.	You outlive all your childhood friends.	
mod	o		Подписываешь старые фотографии, чтобы внуки знали, кто есть кто.	You label old photographs so the grandchildren know who is who.	lit kids grand
mod	o		На рынок ходишь не за покупками, а поговорить.	You go to the market not to buy, but to talk.	
mod	o		{Похоронил|Похоронила} {жену|мужа}. По привычке ставишь на стол две чашки.	You bury your {wife|husband}. Out of habit you set out two cups.	married +widowed
mod	x		Завод закрыли. Ты {остался|осталась} без работы.	The factory shuts. You are out of work.	r1 r2
mod	x		Засуха. Урожай сгорел на корню.	Drought. The harvest withers in the field.	r1 !town
mod	x		Наводнение. Вода стояла в доме по пояс.	A flood. Water waist-high in the house.	
mod	x		Война докатилась до вашего города.	The war reaches your town.	
mod	x	cn jp me latam	Землетрясение. Ночь под открытым небом, дом трещит.	An earthquake. A night under the open sky while the house groans.	
mod	x	af	Эпидемия. Хоронят каждый день.	An epidemic. Funerals every day.	
mod	x	ru latam af	Деньги обесценились за месяц. Сбережений больше нет.	The money loses its worth in a month. Your savings are gone.	
mod	x	sea jp	Тайфун снёс крышу и лодку.	A typhoon takes the roof and the boat.	
mod	x	af in me	Саранча. За день от поля остались стебли.	Locusts. In a day the field is bare stalks.	r1 !town
mod	x		Дом снесли под новую дорогу. Денег не дали.	Your house is pulled down for a new road. No money is paid.	r0
mod	x	us	Банк забрал дом за долги.	The bank takes the house for debt.	r2
mod	x	af latam	Ночью в деревню пришли вооружённые люди.	Armed men come to the village at night.	
mod	c		Первая стрижка у парикмахера. В зеркале кто-то чужой.	Your first haircut at a barber's. Someone else looks back from the mirror.	
mod	c		Выпал первый зуб. Бабушка знает, куда его спрятать на счастье.	Your first tooth comes out. Grandmother knows where to hide it for luck.	
mod	c		Целую неделю учишься свистеть. Получилось — и свистишь без остановки.	For a whole week you try to whistle. Once you can, you never stop.	
mod	c		Дома пристраивают комнату. Ты таскаешь кирпичи по одному.	They are adding a room to the house. You carry the bricks one at a time.	
mod	c		{Потерялся|Потерялась} на рынке. Торговка усадила тебя на ящик и кормила, пока не прибежала мать.	You get lost at the market. A stallholder sits you on a crate and feeds you till your mother comes running.	
mod	c		Боишься соседской собаки. Каждый день обходишь её двор стороной.	You are afraid of the neighbour's dog. Every day you go the long way round its yard.	
mod	c		Врач слушает тебя холодной трубкой и велит покашлять.	The doctor listens to your chest with a cold tube and tells you to cough.	
mod	c		Старшая сестра учит тебя читать по вывескам.	Your big sister teaches you to read from the shop signs.	
mod	c		Тебя впервые оставили смотреть за младшими. Весь день ходишь {важный|важная}.	You are left to mind the little ones for the first time. You strut about all day.	
mod	c		На праздник тебе дали монету. Полдня решаешь, на что её потратить.	You are given a coin for the holiday. You spend half a day deciding what to spend it on.	
mod	c	af in sea latam	Дождь стучит по жестяной крыше. Ты засыпаешь под него.	Rain drums on the tin roof. You fall asleep to it.	
mod	c	cn	Ходишь в штанишках с разрезом сзади. Присесть можно где угодно.	You wear split trousers. You can squat anywhere.	
mod	c	cn	Утром вся школа делает зарядку во дворе под громкоговоритель.	In the morning the whole school does exercises in the yard to the loudspeaker.	
mod	c	in	По воскресеньям мать втирает тебе в голову кокосовое масло.	On Sundays your mother rubs coconut oil into your hair.	
mod	c	in	В поезде чай продают в глиняных стаканчиках. Пустой ты выбрасываешь в окно.	On the train they sell tea in clay cups. You throw the empty one out of the window.	
mod	c	sea af	Спишь с братьями и сёстрами под одной москитной сеткой.	You sleep under one mosquito net with your brothers and sisters.	
mod	c	sea	Купаешься в канале вместе с буйволами.	You swim in the canal alongside the buffaloes.	
mod	c	jp	Ловишь цикад сачком. Коробка на полке стрекочет всю ночь.	You catch cicadas with a net. The box on the shelf shrills all night.	
mod	c	jp	После уроков всем классом моете полы. Ты трёшь тряпкой коридор.	After lessons the whole class cleans the school. You scrub the corridor with a rag.	
mod	c	me	Бегаешь в пекарню. Лепёшки ещё горячие, несёшь их на плече.	You run to the bakery. The flatbreads are still hot; you carry them on your shoulder.	
mod	c	me af	Учишь суры наизусть. За каждую выученную — конфета.	You learn suras by heart. A sweet for every one.	
mod	c	af	Согнул{|а} из проволоки машинку и катаешь её на палке по всей деревне.	You bend wire into a toy car and push it on a stick all round the village.	
mod	c	af	Бабушка рассказывает сказку у огня. Ты засыпаешь до конца.	Grandmother tells a story by the fire. You fall asleep before the end.	
mod	c	latam	У школьных ворот покупаешь манго с солью и перцем.	At the school gate you buy mango with salt and chili.	
mod	c	latam	Пиньята на дне рождения двоюродного брата. Ты бьёшь мимо.	A piñata at your cousin's birthday. You miss.	
mod	c	us	Продаёшь лимонад у дороги. Покупает только сосед.	You sell lemonade by the road. Only the neighbour buys.	
mod	c	au us	Ловишь головастиков в запруде на ферме.	You catch tadpoles in the farm dam.	
mod	c	eu ru	Зимой катаешься на санках с горки за школой. Домой — затемно.	In winter you sledge down the hill behind the school. Home after dark.	
mod	c	eu latam	Каждое воскресенье обед у бабушки. Сидишь за столом три часа.	Every Sunday, lunch at grandmother's. You sit at the table for three hours.	
mod	c	ru	Ходишь в музыкальную школу с папкой для нот. Во дворе дразнят.	You go to music school with a folder of sheet music. The yard teases you.	
mod	c	cn	На столбе у дома громкоговоритель. Утром он будит тебя песней.	There is a loudspeaker on the pole by the house. In the morning it wakes you with a song.	before:1980
mod	c		В выходные встаёшь раньше всех, чтобы смотреть мультфильмы.	At weekends you get up before everyone to watch cartoons.	after:1990
mod	c		Смотришь мультики на отцовском телефоне, пока он не сядет.	You watch cartoons on your father's phone until the battery dies.	after:2010
mod	y		Тебе нравится кто-то с соседней улицы. Ходишь мимо по три раза на дню.	You like someone from the next street. You walk past three times a day.	
mod	y		Поругались с матерью из-за одежды. Ты всё равно {ушёл|ушла} так.	A row with your mother about your clothes. You go out like that anyway.	
mod	y		Учитель оставил тебя после уроков и сказал: из тебя выйдет толк.	A teacher keeps you after class to tell you that you'll make something of yourself.	
mod	y		Отец впервые говорит с тобой как со взрослым.	Your father talks to you like a grown-up for the first time.	
mod	y		{Скопил|Скопила} на часы. Носишь их, закатав рукав.	You save up for a watch. You wear it with your sleeve rolled up.	
mod	y		Лучший друг переехал. Вы обещаете писать.	Your best friend moves away. You promise to write.	
mod	y		Первая драка всерьёз. Мать молча отстирывает рубашку.	Your first real fight. Your mother washes the shirt without a word.	
mod	y		Всю ночь с друзьями говорите о том, кем станете.	All night with your friends, talking about who you will become.	
mod	y		В каникулы помогаешь отцу на работе. Он показывает тебя всем.	In the holidays you help your father at work. He shows you off to everyone.	
mod	y		Песню, которую всё лето крутят по радио, знаешь наизусть.	The song the radio plays all summer: you know every word.	
mod	y		Младший брат ходит за тобой по пятам. Тебе это надоело — и приятно.	Your little brother follows you everywhere. It annoys you, and you like it.	
mod	y		Тебя впервые позвали на свадьбу как {взрослого|взрослую}. Ты во всём новом.	For the first time you are invited to a wedding as a grown-up. You wear new clothes.	
mod	y	cn	В интернате вечером одна лампа на восьмерых. Учишь при ней до отбоя.	At boarding school one lamp serves eight of you. You study by it until lights out.	
mod	y	in	На крыше запускаешь змея и режешь чужие нитки.	On the roof you fly your kite and cut other kites loose.	
mod	y	sea	На храмовом празднике танцуешь под живой оркестр.	At the temple fair you dance to a live band.	
mod	y	jp	Секция после уроков: бейсбол до темноты, потом ровняешь поле граблями.	After-school club: baseball till dark, then you rake the field smooth.	
mod	y	me af latam in	Летом едешь в деревню к родне. Там тебя считают городским.	In summer you go to the family's village. There they call you the city kid.	
mod	y	af	До школы час пешком. Ботинки несёшь в руках, чтобы дольше носились.	An hour's walk to school. You carry your shoes so they will last longer.	
mod	y	latam	Работаешь в мастерской у дяди. Руки пахнут бензином.	You work in your uncle's garage. Your hands smell of petrol.	
mod	y	us	Права в шестнадцать. По субботам отец даёт ключи от пикапа.	A driving licence at sixteen. On Saturdays your father lends you the pickup.	
mod	y	us	Выпускной бал в спортзале. Над головой крутится зеркальный шар.	Prom in the school gym. A mirror ball turns overhead.	
mod	y	au	До школы катаешься на доске. В класс приходишь с мокрыми волосами.	You surf before school. You come to class with wet hair.	
mod	y	eu	Летом разносишь кофе в кафе у моря. Чаевые прячешь в коробку из-под обуви.	In summer you wait tables at a seaside café. You hide the tips in a shoebox.	+sea
mod	y	eu	С друзьями до полуночи сидите на ступенях у фонтана.	You sit with your friends on the fountain steps until midnight.	
mod	y	ru	Сидите компанией на подоконнике в подъезде. Соседи гонят.	You and your friends sit on the stairwell windowsill. The neighbours chase you off.	+town
mod	y	ru	Гитара во дворе. Знаешь три аккорда и все песни.	A guitar in the yard. You know three chords and every song.	
mod	y	cn	После школы тебя отправили в деревню. Жать учит старая крестьянка.	After school you are sent down to the countryside. An old peasant woman teaches you to reap.	before:1979
mod	y	ru	Летом трудовой лагерь: полешь колхозную свёклу, вечером танцы.	A summer labour camp: weeding kolkhoz beets, dancing in the evening.	before:1992
mod	y		Ночью под одеялом переписываешься с друзьями в телефоне.	At night under the blanket you text your friends.	after:2008
mod	y		Голос ломается. Стараешься говорить пореже.	Your voice is breaking. You try to talk as little as you can.	m
mod	y	af	Пасёшь отцовское стадо уже один, с копьём.	You herd your father's cattle on your own now, with a spear.	m !town
mod	a		{Одолжил|Одолжила} другу денег. Он вернул через три года, с подарком.	You lend a friend money. He pays it back three years later, with a present.	
mod	a		Зарплату задерживают второй месяц.	Your pay is two months late.	
mod	a		Переехали. Первую ночь спите на полу среди узлов.	You move house. The first night you sleep on the floor among the bundles.	
mod	a		Свет отключили на весь вечер. Сидите при свечке и рассказываете истории.	The power is out all evening. You sit by a candle telling stories.	
mod	a		Друг детства разбогател. При встрече вы оба не знаете, о чём говорить.	A childhood friend has got rich. When you meet, neither of you knows what to say.	
mod	a		Болит зуб. Неделю копишь на врача.	A tooth aches. You save for a week to see the dentist.	
mod	a		Новый начальник моложе тебя.	The new boss is younger than you.	
mod	a		Отец впервые спрашивает у тебя совета.	Your father asks your advice for the first time.	
mod	a		Цены опять выросли. Покупаешь то же, что всегда, а платишь больше.	Prices are up again. You buy what you always buy and pay more.	
mod	a		Навещаешь родную деревню. Школа та же, а река обмелела.	You visit your home village. The school is the same, but the river has shrunk.	
mod	a		В автобусе вытащили кошелёк. Хуже всего — пропали документы.	Your pocket is picked on the bus. Worst of all, your papers are gone.	
mod	a		Двадцать лет стрижёшься у одного мастера. Он знает о тебе всё.	Twenty years with the same barber. He knows everything about you.	
mod	a		Ремонт своими руками. Месяц живёте в пыли.	You do the house up yourselves. A month of living in dust.	
mod	a		Спишь по пять часов. Думаешь, что так живут все.	You sleep five hours a night. You think everyone does.	
mod	a		Умер сосед. Вся улица несёт еду его вдове.	A neighbour dies. The whole street brings food to his widow.	
mod	a	cn	По утрам торгуешь паровыми булочками у проходной. К восьми всё продано.	In the mornings you sell steamed buns at the factory gate. Sold out by eight.	
mod	a	cn	На работу едешь на велосипеде в потоке из тысяч таких же.	You cycle to work in a stream of thousands just like you.	
mod	a	in	Вечером стоишь с вёдрами в очереди к цистерне с водой.	In the evening you queue with buckets for the water tanker.	
mod	a	in	Едешь на свадьбу двоюродного брата за тысячу километров. Весь отпуск уходит на неё.	You travel a thousand kilometres to your cousin's wedding. It takes your whole leave.	
mod	a	sea	Работаешь на плантации масличной пальмы. Каждая гроздь — как мешок цемента.	You work on an oil-palm estate. Every bunch weighs like a sack of cement.	!town
mod	a	sea	Перед работой кладёшь рис в чаши монахам.	Before work you put rice in the monks' bowls.	
mod	a	jp	Квартира в шесть татами. Днём футон убираешь в стенной шкаф.	A flat of six tatami. By day the futon goes in the wall cupboard.	+town
mod	a	me	Чай с будущей роднёй: три стакана, и только потом о деле.	Tea with the family you are marrying into: three glasses before anyone talks business.	
mod	a	af	Работаешь в городе, семья в деревне. Домой — на Рождество.	You work in the city; the family stays in the village. You go home at Christmas.	
mod	a	af	Шьёшь на машинке под навесом у рынка. Заказчики ждут тут же.	You sew on a machine under an awning by the market. Customers wait right there.	
mod	a	latam	Собираешь кофе на финке. Платят за корзину.	You pick coffee on a finca. Paid by the basket.	
mod	a	latam	Воскресный обед у матери. Приходят все, никто не предупреждает.	Sunday lunch at your mother's. Everyone comes; no one says so beforehand.	
mod	a	us	Две недели отпуска в году. Снимаете домик у озера.	Two weeks off a year. You rent a cabin by the lake.	
mod	a	us	Работаешь в ночную на заправке у трассы.	You work nights at a gas station by the highway.	
mod	a	au	Работаешь на скотоводческой станции. До ближайших соседей час езды.	You work on a cattle station. The nearest neighbours are an hour's drive away.	!town
mod	a	eu	Поезд в 7:12. Каждое утро одни и те же лица.	The 7.12 train. The same faces every morning.	
mod	a	eu	Ты с юга, работаешь на заводе на севере. В августе едешь домой с полной машиной подарков.	You are from the south, working at a factory in the north. In August you drive home with the car full of presents.	+town
mod	a	ru	До ночи на кухне с друзьями: чай, споры, дым коромыслом.	Late into the night in the kitchen with friends: tea, arguments, smoke.	
mod	a	af	Платишь за всё с телефона. Банка в деревне так и нет.	You pay for everything by phone. There is still no bank in the village.	after:2008
mod	a		Развозишь еду на мопеде. Приложение считает каждую минуту.	You deliver food on a moped. The app counts every minute.	after:2015 town
mod	a	ru	На машину стоишь в очереди восемь лет. Наконец открытка: можно забирать.	Eight years on the waiting list for a car. At last the postcard comes: you can collect it.	before:1992
mod	a	in	В деревню провели свет. Первым делом {купил|купила} вентилятор.	Electricity reaches the village. The first thing you buy is a fan.	after:1985
mod	a		{Перевёл|Перевела} деньги брату за границу с телефона за минуту. Раньше на это уходил месяц.	You send money to your brother abroad from your phone in a minute. It used to take a month.	after:2012
mod	j		Сорок лет. Друзья пришли без приглашения.	Forty. Your friends turn up without being asked.	
mod	j		Наконец {выспался|выспалась}. Впервые за месяц.	At last you sleep your fill. The first time in a month.	
mod	j		Незнакомый человек догнал тебя и вернул кошелёк.	A stranger runs after you to give back your purse.	
mod	j		Дерево, которое ты {посадил|посадила} у дома, впервые дало плоды.	The tree you planted by the house bears fruit for the first time.	
mod	j		Дождь застал на улице. Ты не бежишь, идёшь медленно.	Caught in the rain, you don't run. You walk slowly.	
mod	j		На свадьбе тебя попросили спеть, и ты не {отказался|отказалась}.	At a wedding they ask you to sing, and you don't say no.	
mod	j		Весь вечер играете с друзьями в карты. Никто не помнит, кто выиграл.	A whole evening of cards with friends. No one remembers who won.	
mod	j		Новые туфли. Идёшь и смотришь под ноги.	New shoes. You walk along looking at your feet.	
mod	j	cn	Праздник середины осени. Едите на крыше пряники и смотрите на полную луну.	The Mid-Autumn Festival. You eat mooncakes on the roof and look at the full moon.	
mod	j	in	Новый фильм в кинотеатре. Весь зал подпевает.	A new film at the cinema. The whole hall sings along.	
mod	j	sea	Свежий дуриан с рынка. Едите во дворе, соседи морщатся.	A durian fresh from the market. You eat it in the yard while the neighbours wrinkle their noses.	
mod	j	jp	Горячий источник с сослуживцами. Сидишь в воде, на голове полотенце.	A hot spring with your workmates. You sit in the water, a towel on your head.	
mod	j	me	Ночи Рамадана: улицы в фонариках, гуляете до утра.	Ramadan nights: the streets hung with lanterns, out walking until dawn.	
mod	j	af	Сборная вышла в финал. Вся улица поёт.	The national team reaches the final. The whole street sings.	
mod	j	latam	Асадо у шурина. Мясо до полуночи, гитара до утра.	An asado at your brother-in-law's. Meat until midnight, guitar until morning.	
mod	j	us	День благодарения: индейка, вся родня и футбол по телевизору.	Thanksgiving: turkey, the whole family and football on TV.	
mod	j	au	Барбекю у реки. Пиво в ведре со льдом.	A barbecue by the river. Beer in a bucket of ice.	
mod	j	eu	Две недели у моря. Ни разу не {посмотрел|посмотрела} на часы.	Two weeks by the sea. You never once look at a clock.	+sea
mod	j	ru	Уха у костра на рыбалке. Комары и звёзды.	Fish soup by the fire on a fishing trip. Mosquitoes and stars.	
mod	j		Видеозвонок брату за границу. Ты {показал|показала} ему весь дом.	A video call to your brother abroad. You show him the whole house.	after:2012
mod	o		К врачу ходишь как на работу. Знаешь всех в очереди.	You go to the doctor as if to work. You know everyone in the queue.	
mod	o		Первое утро на покое. Всё равно {проснулся|проснулась} затемно.	Your first morning in retirement. You wake before dawn anyway.	
mod	o		Очки на лбу. Ты ищешь их по всему дому.	Your glasses are on your forehead. You search the whole house for them.	
mod	o		Вечером сидишь на стуле у дома. Все прохожие здороваются.	In the evening you sit on a chair outside the house. Everyone who passes says hello.	
mod	o		Колени ноют к дождю. Погоду ты знаешь лучше радио.	Your knees ache before rain. You know the weather better than the radio.	
mod	o		По выходным готовишь на всех. Едят мало, и ты обижаешься.	At weekends you cook for everyone. They eat too little, and you are hurt.	
mod	o		Родне твои истории надоели. Зато их слушает соседский мальчишка.	Your family is tired of your stories. But the neighbour's boy listens.	
mod	o		Друзей всё меньше. На похоронах вы встречаетесь, как раньше на свадьбах.	Your friends are thinning out. You meet at funerals the way you once met at weddings.	
mod	o		Тебе точно известно, что раньше хлеб был вкуснее.	You know for a fact that bread used to taste better.	
mod	o		В доме слишком тихо. Включаешь радио, чтобы кто-то говорил.	The house is too quiet. You turn on the radio so someone is talking.	
mod	o		Тебе впервые уступили место в автобусе. И обидно, и приятно.	Someone gives you their seat on the bus for the first time. It stings, and it's nice.	
mod	o	cn	Играешь в парке в шахматы. Вокруг десять советчиков.	You play Chinese chess in the park. Ten people stand around giving advice.	
mod	o	in	Утром ходишь в храм, вечером — на скамейку к таким же старикам.	In the morning you go to the temple; in the evening, to a bench with the other old folk.	
mod	o	sea	В полнолуние идёшь в храм и несёшь монахам еду.	At the full moon you go to the temple and take food for the monks.	
mod	o	jp	Тебе за восемьдесят, а ты всё ещё в поле. Молодых в деревне нет.	Past eighty, you still work your field. There are no young people left in the village.	!town
mod	o	me af	{Совершил|Совершила} хадж. Теперь тебя зовут хаджи.	You make the hajj. Now they call you Hajji.	
mod	o	af	{Вернулся|Вернулась} из города доживать в деревню. Сажаешь маниок.	You come back from the city to live out your days in the village. You plant cassava.	
mod	o	latam	По воскресеньям танцуешь на площади дансон.	On Sundays you dance the danzón in the plaza.	
mod	o	us	Пенсии не хватает. Укладываешь покупки на кассе в супермаркете.	The pension isn't enough. You bag groceries at the supermarket.	
mod	o	au	{Перебрался|Перебралась} в домик у моря. Каждое утро плаваешь.	You move to a little house by the sea. You swim every morning.	+sea
mod	o	eu	С клубом пенсионеров ездишь на автобусе по чужим странам.	You tour foreign countries by coach with the pensioners' club.	
mod	o	ru	Сидишь на лавочке у подъезда. Знаешь, кто во сколько пришёл.	You sit on the bench by the entrance. You know who came home when.	+town
mod	x		Пожар. Сгорели все документы и фотографии.	A fire. Every paper and photograph burns.	
mod	x		Тяжёлая болезнь. Лечение стоит больше, чем у вас есть.	A serious illness. The treatment costs more than you have.	
mod	x		Хозяин поднял плату за жильё вдвое. Ищешь, куда съехать.	The landlord doubles the rent. You look for somewhere else.	
mod	x		Авария на дороге. Месяц в больнице.	A road accident. A month in hospital.	
mod	x		Новая болезнь. Город закрыт, на улицах пусто.	A new disease. The city is shut, the streets empty.	
mod	x		Беспорядки на улицах. Неделю не выходите из дома.	Riots in the streets. For a week you don't leave the house.	
mod	x		Брата арестовали. Никто не говорит, за что.	Your brother is arrested. No one will say why.	
mod	x		Неурожай. Продаёшь скотину, чтобы купить зерно.	The harvest fails. You sell the livestock to buy grain.	!town
mod	x		Мошенник выманил все сбережения.	A swindler talks you out of all your savings.	
mod	x	in sea	Циклон. Всей деревней пережидаете ночь в бетонной школе.	A cyclone. The whole village sits out the night in the concrete school.	
mod	x	af	В соседней стране война. В деревне беженцы, еды не хватает.	War in the next country. Refugees in the village, not enough food.	
mod	x	me	Взрыв на рынке. Ты {был|была} в соседнем квартале.	A bomb at the market. You were one street away.	
mod	x	latam	Ночью с холма сошёл сель. Улицы больше нет.	A mudslide comes down the hill in the night. The street is gone.	
mod	x	us	По улице прошёл торнадо. Ваш дом цел, соседский — нет.	A tornado comes down the street. Your house stands; the neighbour's doesn't.	
mod	x	au	Лесной пожар. Уезжаете с тем, что успели закинуть в машину.	A bushfire. You leave with whatever you could throw in the car.	
mod	x	eu us	Тебя сократили в пятьдесят два. Новой работы нет.	You are laid off at fifty-two. No new job comes.	
mod	x	jp	Фирма разорилась. Семье сказать стыдно, и каждое утро ты уходишь будто на работу.	The firm goes under. Too ashamed to tell the family, you leave every morning as if for work.	
mod	x	sea latam	Извержение вулкана. Пепел засыпал поля.	The volcano erupts. Ash buries the fields.	!town
mod	x	cn	Соседа объявили правым. Здороваться с ним теперь опасно.	Your neighbour is branded a rightist. It is dangerous now even to greet him.	before:1979
mod	x	ru	Зарплату не платят полгода. Завод расплачивается посудой.	No wages for six months. The factory pays in crockery.	after:1992 before:2000
mod	c		Мать перестала кормить тебя грудью: родился младший.	Your mother stops nursing you: a younger one has been born.	small
mod	c		Ты {сделал|сделала} первые шаги — прямо к лестнице. Мать успела.	You take your first steps, straight towards the stairs. Your mother is quicker.	small
mod	c		Твоё первое слово — «дай».	Your first word is "give".	small
mod	c		Спишь между матерью и старшей сестрой. Там теплее всего.	You sleep between your mother and your older sister. It is the warmest place.	small
mod	c		Тебя чуть не унесла лихорадка. Бабка просидела рядом три ночи.	A fever nearly takes you. Your grandmother sits by you for three nights.	small
mod	c		Ты {съел|съела} горсть земли и {остался|осталась} очень {доволен|довольна}.	You eat a handful of earth and are very pleased with yourself.	small
mod	c		Боишься петуха. Он ходит за тобой по всему двору.	You are afraid of the rooster. It follows you all round the yard.	small
mod	c		Старшие дети таскают тебя за собой, как куклу.	The older children drag you about like a doll.	small
mod	c		Засыпаешь под песню, которую мать поёт без слов.	You fall asleep to a song your mother hums without words.	small
mod	c		Ты {упал|упала} и {рассёк|рассекла} лоб. Шрам останется на всю жизнь.	You fall and cut your forehead. The scar will stay for life.	small
mod	c		Плачешь, когда отец уходит, и смеёшься, когда он возвращается.	You cry when your father leaves and laugh when he comes back.	small
mod	c		Таскаешь собаку за хвост, а она терпит.	You pull the dog's tail, and it puts up with it.	small
mod	c		Тебе дали первую ложку. Половина каши на полу.	You are given your first spoon. Half the porridge ends up on the floor.	small
mod	c		Ты {спрятался|спряталась} под лавку, и тебя полдня искали всей семьёй.	You hide under the bench, and the whole family searches for you half the day.	small
mod	c		Ты всё время тянешь в рот блестящее. Мать вынимает и смеётся.	You keep putting shiny things in your mouth. Your mother takes them out and laughs.	small
mod	c		Сидишь у порога и встречаешь каждого, кто входит, своим словом.	You sit by the door and greet everyone who comes in with your own word.	small
mod	c		Тебя сфотографировали первый раз. Ты сидишь у матери на коленях и не понимаешь, куда смотреть.	You are photographed for the first time. You sit on your mother's lap and don't know where to look.	small
mod	c		Тебя впервые отвели в ясли. Ты {проревел|проревела} до обеда.	You are taken to nursery for the first time. You cry till lunch.	small
mod	c		Мультики по телевизору. Ты пляшешь под заставку.	Cartoons on the television. You dance to the opening tune.	small
mod	c		Тебе сделали прививку. На врача ты {обижался|обижалась} целую неделю.	You are vaccinated. You sulk at the doctor for a whole week.	small
`,ye=`# group	kind	tags	ru	en	need
stone	c	eu cn	Впервые {увидел|увидела} мамонта — издалека, с холма. Земля дрожала.	You see a mammoth for the first time, from far off on a hill. The ground shakes.	
stone	c		Зимой все спят вплотную у огня. Старуха рассказывает, откуда взялась луна.	In winter everyone sleeps pressed together by the fire. The old woman tells where the moon came from.	
stone	c		{Нашёл|Нашла} пещеру с ладонями на стенах. Чьими — не помнит никто.	You find a cave with hands on its walls. Whose, nobody remembers.	
stone	c		Укусила змея. Знахарь жевал травы и пел всю ночь — {выжил|выжила}.	A snake bites you. The healer chews herbs and sings all night, and you live.	
stone	c		Тебе дали первую свою бусину — просверленную ракушку.	You are given your first bead of your own: a shell with a hole drilled through.	
stone	c		{Потерялся|Потерялась} в высокой траве. Нашли по голосу к вечеру.	You get lost in the tall grass. They find you by your voice towards evening.	
stone	c	af	Ночью у стоянки ходил лев. Взрослые жгли огонь до рассвета.	A lion walks round the camp at night. The grown-ups keep the fire high till dawn.	
stone	c	eu	Снег лежит почти круглый год. Ты знаешь двадцать слов для разного снега.	Snow lies nearly all year. You know twenty words for different snow.	
stone	c	af	Мать несёт тебя за спиной и копает коренья. Ты засыпаешь под стук палки.	Your mother carries you on her back and digs roots. You fall asleep to the knock of her stick.	
stone	c	af	Тебе дали нести страусиное яйцо с водой. Ты {шёл|шла} очень медленно.	You are given an ostrich egg full of water to carry. You walk very slowly.	
stone	c	au	Бабушка ведёт тебя по песне: у каждого камня свой куплет.	Your grandmother leads you along a song: every rock has its own verse.	
stone	c	au	{Гнался|Гналась} за кенгурёнком, пока не {упал|упала} в песок. Смеялись все.	You chase a young kangaroo until you fall in the sand. Everyone laughs.	
stone	c	eu	Отец вырезал тебе из бивня зверька. Ты спишь, зажав его в кулаке.	Your father carves you a little animal from ivory. You sleep with it in your fist.	
stone	c	am	Мимо полдня шло стадо бизонов. Тебя держали за руку, чтобы не {убежал|убежала} к ним.	A bison herd passes for half a day. They hold your hand so you won't run to them.	
stone	c	in	В дождь все сидят под скалой. Ты рисуешь углём на камне тигра.	When it rains everyone sits under the rock. You draw a tiger on the stone with charcoal.	
stone	c	cn	Старший брат сделал тебе свисток из бамбука. Птицы отвечают.	Your elder brother makes you a bamboo whistle. The birds answer it.	
stone	c	me	С матерью {собирал|собирала} дикие колосья. Руки исколоты, зато вечером лепёшка на горячем камне.	You gather wild grain with your mother. Your hands are pricked, but in the evening there is flatbread on a hot stone.	
stone	c		{Залез|Залезла} на дерево выше всех. Оттуда видно дым чужой стоянки.	You climb a tree higher than anyone. From there you see the smoke of a strange camp.	
stone	c		Выпал зуб. Мать закопала его под корнями большого дерева.	A tooth falls out. Your mother buries it under the roots of a big tree.	
stone	c	af au	Весь день {собирал|собирала} ракушки на отмели. Ели их тут же, сырыми.	All day you gather shellfish on the shallows. You eat them right there, raw.	
stone	c	eu	Взрослые рисуют в глубине пещеры. Жировая лампа чадит, бык на стене будто дышит.	The grown-ups paint deep in the cave. The fat lamp smokes, and the bull on the wall seems to breathe.	
stone	c		{Обжёгся|Обожглась} у костра. Мазали жиром, ты {плакал|плакала} до самого сна.	You burn yourself at the fire. They rub fat on it, and you cry until you fall asleep.	
stone	y		Впервые {ушёл|ушла} со взрослыми на большую охоту. Вернулись с оленем.	For the first time you go on the great hunt. You come back with a deer.	
stone	y		Стоянка снялась с места: зверь ушёл к реке.	The camp moves on: the game has gone to the river.	
stone	y		{Научился|Научилась} добывать огонь за одну песню.	You learn to make fire in the time of one song.	
stone	y		Старики показали тебе путь к соляному озеру. Чужим его не говорят.	The old ones show you the way to the salt lake. It is not told to strangers.	
stone	y		Тебе нанесли первые знаки на кожу — теперь ты {взрослый|взрослая}.	They mark your skin for the first time: now you are grown.	
stone	y	af	Три дня гнал антилопу по жаре, пока она не легла. Теперь ты охотник.	For three days you run an antelope down in the heat until it lies down. Now you are a hunter.	m
stone	y		Бабушка учит тебя, какие травы помогают в родах. Говорит шёпотом.	Your grandmother teaches you which herbs help in childbirth. She speaks in a whisper.	f
stone	y	eu	{Сшил|Сшила} себе первую парку из оленьих шкур. Костяной иглой.	You sew your first parka from reindeer hides, with a bone needle.	
stone	y	au	Тебя впервые взяли жечь сухую траву. К весне на гарь придут кенгуру.	For the first time they take you to burn the dry grass. By spring the kangaroos will come to the new shoots.	
stone	y	am	Твоё копьё первым вошло в бок мастодонта.	Your spear is the first into the mastodon's side.	m
stone	y		На сходе родов {заметил|заметила} {девушку|парня} из чужой стоянки. Весь вечер {смотрел|смотрела} только туда.	At the gathering of bands you notice a {girl|boy} from another camp. All evening you look nowhere else.	
stone	y		{Ушёл|Ушла} {один|одна} за кремнём к дальнему обрыву. {Вернулся|Вернулась} через четыре дня.	You go alone for flint to the far cliff. You come back four days later.	
stone	y	me	Весной газели идут через долину. Ты {стоял|стояла} в цепи загонщиков и {кричал|кричала} что есть сил.	In spring the gazelles pass through the valley. You stand in the line of beaters and shout with all your might.	
stone	y	in	Ночью {караулил|караулила} ягодник. В темноте рядом дышали слоны.	At night you guard the berry bushes. In the dark, elephants breathe close by.	
stone	y		Тебя отдают в соседний род, к огню жениха. Мать плачет и смеётся.	You are given to the next band, to your husband's fire. Your mother cries and laughs.	f !monk
stone	a		Зима затянулась. Грызли кожу с шалашей.	The winter drags on. You chew the hides off the shelters.	
stone	a		У реки встретили чужой род. Обменялись ракушками и не стали драться.	At the river you meet a strange band. You trade shells and do not fight.	
stone	a		{Приложил|Приложила} ладонь к стене пещеры и {обдул|обдула} её охрой.	You lay your hand on the cave wall and blow ochre round it.	
stone	a		{Сделал|Сделала} лучший наконечник в роду. Его выменяли за шкуру.	You make the best spearpoint in the band. It is traded for a hide.	
stone	a	sea	Пришли к большой воде. Она солёная, и другого берега нет.	You come to great water: it is salty and has no other shore.	
stone	a		{Сломал|Сломала} ногу на охоте. Месяц несли на шкуре — не бросили.	You break a leg on the hunt. For a month they carry you on a hide; they do not leave you.	
stone	a	af	Выдавливаешь яд из личинок жука на наконечники. Детей гонишь подальше.	You squeeze poison from beetle grubs onto the arrowheads. You chase the children away.	
stone	a	au	Сняли кору с большого эвкалипта и сделали лодку. Плывёте бить рыбу.	You strip bark from a big gum tree and make a canoe. You paddle out to spear fish.	
stone	a	eu	Строите дом из костей мамонта: челюсти внизу, бивни сверху, шкуры поверх.	You build a house of mammoth bones: jaws below, tusks above, hides on top.	
stone	a	am	Много лун шли по льду и тундре. Впереди земля, где нет людей.	For many moons you walk over ice and tundra. Ahead is a land with no people.	!town
stone	a	me	Режешь дикий ячмень серпом с кремнёвыми вкладышами. Зерна хватит до весны.	You cut wild barley with a sickle set with flints. The grain will last till spring.	!town
stone	a		Твой малыш пошёл — прямо к огню. Ты {успел|успела} поймать.	Your little one walks for the first time, straight to the fire. You catch it just in time.	kids
stone	a		Родила у ручья, на корточках. К вечеру уже шла со всеми.	You give birth by a stream, squatting. By evening you walk on with the others.	f kids
stone	a		Лучший кусок мяса отдаёшь родителям жены. Так положено.	You give the best cut of meat to your wife's parents. That is the custom.	m married !widowed
stone	a		Умер старик. Положили его на бок, посыпали охрой, рядом — его копьё.	The old man dies. They lay him on his side, scatter ochre on him, and put his spear beside him.	
stone	a		{Выменял|Выменяла} у горцев красную охру. Отдали за неё три шкуры.	You trade the hill people for red ochre. It costs three hides.	
stone	a	cn	Бьёшь рыбу острогой с костяными зубцами. К вечеру на плече связка рыбы.	You spear fish with a bone-toothed leister. By evening a string of fish hangs from your shoulder.	
stone	a	in	Пришли дожди. Весь род перебрался под нависшую скалу и ждёт сухих дней.	The rains come. The whole band moves under an overhanging rock and waits for dry days.	
stone	a		{Выходил|Выходила} чужого ребёнка: листья на грудь и песня каждую ночь.	You nurse someone else's child back to health: leaves on the chest and a song every night.	
stone	a		Двое парней подрались из-за девушки. Ты {разнял|разняла} их и {отправил|отправила} за дровами — вместе.	Two young men fight over a girl. You pull them apart and send them for firewood, together.	
stone	a	au	На большом сходе меняли каменные топоры на перламутр с побережья.	At the great gathering, stone axes are traded for mother-of-pearl from the coast.	
stone	a	am	Загнали стадо бизонов к обрыву. Мяса столько, что сушите его неделю.	You drive a bison herd over a cliff. There is so much meat it takes a week to dry.	
stone	a	eu	Ставишь силки на песцов. Белый мех пойдёт малышу на шапку.	You set snares for arctic foxes. The white fur will make a hat for your little one.	kids
stone	a		Летом стоите у реки, зимой уходите в холмы. Ты знаешь там каждую тропу.	In summer you camp by the river, in winter you go up into the hills. You know every path there.	
stone	a		Учишь младших выбирать кремень: хороший звенит.	You teach the young ones to choose flint: good flint rings.	
stone	j		Нашли дерево, полное мёда. Пчёлы покусали, но мёда хватило всем.	You find a tree full of honey. The bees sting, but there is honey for everyone.	
stone	j		Весь род пел у костра до утра — просто так, потому что тепло.	The whole band sings by the fire till morning, just because it is warm.	
stone	j	eu	{Сделал|Сделала} флейту из птичьей кости. Звук держится в ушах весь день.	You make a flute from a bird's bone. The sound stays in your ears all day.	
stone	j		Река вынесла столько рыбы, что ловили руками.	The river brings so much fish you catch it with your hands.	
stone	j		Ребёнок сестры впервые засмеялся у тебя на руках.	Your sister's baby laughs for the first time in your arms.	
stone	j		По небу прошла хвостатая звезда. Все смотрели молча.	A star with a tail crosses the sky. Everyone watches without a word.	
stone	j	af	Добыли канну. Весь лагерь пляшет до утра, жир течёт по пальцам.	You bring down an eland. The whole camp dances till morning, fat running down your fingers.	
stone	j	au	Нашли гнездо эму — девять зелёных яиц. Пекли в золе.	You find an emu nest with nine green eggs. You bake them in the ashes.	
stone	j	eu	Первая оттепель. Ты {снял|сняла} меховую рубаху и {стоял|стояла} на солнце, пока не {замёрз|замёрзла}.	The first thaw. You take off your fur shirt and stand in the sun until you get cold.	
stone	j		Ребёнок уснул у тебя на коленях. Ты {сидел|сидела} не шевелясь, пока не затекли ноги.	A child falls asleep on your lap. You sit without moving until your legs go numb.	
stone	j		{Нашёл|Нашла} в ручье кремень без единой трещины. Хватит на десять ножей.	You find a flint in the stream without a single crack. Enough for ten knives.	
stone	j	me	На склоне поспели дикие фисташки. Щёлкали их весь день.	The wild pistachios ripen on the slope. You crack them all day long.	
stone	j	am	Лосось пошёл вверх по реке. Его столько, что вода красная.	The salmon run up the river. There are so many the water is red.	
stone	j	in	Набрели на дикое манго. Ели, пока сок не потёк до локтей.	You come upon a wild mango tree. You eat until the juice runs down to your elbows.	
stone	j	cn	Нашли горячий источник. Сидели в нём всем родом, а сверху шёл снег.	You find a hot spring. The whole band sits in it while snow falls from above.	
stone	j		{Жена|Муж} до сих пор смеётся над твоими шутками.	Your {wife|husband} still laughs at your jokes.	married !widowed
stone	j		Тёплый день посреди зимы. Весь род сидит на солнце и молчит от удовольствия.	A warm day in the middle of winter. The whole band sits in the sun, silent with pleasure.	
stone	j		Твой ребёнок принёс первую добычу — ящерицу. Её съели все, по кусочку, с почётом.	Your child brings home a first kill: a lizard. Everyone eats a morsel of it, with honour.	kids
stone	j		В дождь {спал|спала} под навесом из коры до полудня. Никто не будил.	In the rain you sleep under a bark lean-to till noon. Nobody wakes you.	
stone	j	au	Ночь такая ясная, что в тёмных пятнах Млечного Пути виден эму.	The night is so clear that you can see the emu in the dark patches of the Milky Way.	
stone	o		Ты — самый старый в роду. Тебя слушают, когда решают, куда идти.	You are the oldest in the band. They listen to you when deciding where to go.	
stone	o		Зубы стёрлись. Внуки разжёвывают тебе мясо.	Your teeth are worn down. The grandchildren chew your meat for you.	kids grand
stone	o		Ты помнишь, где была вода сорок зим назад. Это спасло всех.	You remember where there was water forty winters ago. It saves everyone.	
stone	o		Учишь детей песне, в которую зашита дорога на юг.	You teach the children a song with the road south sewn into it.	
stone	o		Сидишь у огня и чинишь сети. Руки помнят сами.	You sit by the fire mending nets. The hands remember by themselves.	
stone	o		На охоту больше не ходишь. Сидишь с малышами и рассказываешь, кто раньше жил в этих горах.	You no longer go hunting. You sit with the little ones and tell who lived in these hills before.	
stone	o		Ты {пережил|пережила} всех, с кем {рос|росла}. Их имена теперь помнишь только ты.	You have outlived everyone you grew up with. Only you remember their names now.	
stone	o	au	Ведёшь молодых к священному месту. Поёшь им ту часть песни, что поют только здесь.	You lead the young ones to the sacred place. You sing them the part of the song that is sung only here.	
stone	o	eu	Руки уже не держат резец. Ты показываешь, как вырезать лошадь, а режет внук.	Your hands can no longer hold the graver. You show how to carve a horse, and your grandson cuts it.	kids grand
stone	o		Ты приняла роды почти у всех женщин стоянки. Полрода прошло через твои руки.	You have delivered the babies of nearly every woman in the camp. Half the band has passed through your hands.	f
stone	o		На переходах ты отстаёшь. Внуки ждут тебя у каждого ручья.	On the march you fall behind. The grandchildren wait for you at every stream.	kids grand
stone	o	af	Ты лучше всех понимаешь птицу-медоуказчика. Идёшь за ней медленно, но идёшь.	You understand the honeyguide bird better than anyone. You follow it slowly, but you follow it.	
stone	o	am	Ты ещё помнишь холодную землю за спиной. Молодые думают, что это сказка.	You still remember the cold land behind you. The young ones think it is a tale.	!town
stone	o		Внучка нацепила твоё ожерелье из волчьих зубов и важно ходит по стоянке.	Your granddaughter puts on your wolf-tooth necklace and struts around the camp.	kids grand
stone	o		Каждый вечер садишься лицом к закату. Говоришь, что там тебя ждут.	Every evening you sit facing the sunset. You say someone is waiting for you there.	
stone	x		Пришла засуха. Звери ушли, и вы пошли за ними.	Drought comes. The game leaves, and you follow it.	
stone	x	eu am	Ледник подступил: зима не кончалась.	The ice creeps closer: the winter does not end.	
stone	x		Чужой род пришёл на ваши угодья с копьями.	A strange band comes onto your grounds with spears.	
stone	x		Лихорадка прошла по стоянке. Умерли трое.	A fever goes through the camp. Three die.	
stone	x	af	Загорелась степь. Бежали к реке, бросив всё.	The grassland catches fire. You run for the river, leaving everything.	
stone	x	eu	Пещерный медведь проснулся раньше срока и пришёл к стоянке.	A cave bear wakes too early and comes to the camp.	
stone	x		Ночью разлилась река и унесла стоянку.	The river floods in the night and carries off the camp.	
stone	x	au	Море поднялось и залило земли предков. Где были холмы, теперь острова.	The sea rises over the lands of the ancestors. Where there were hills, there are islands now.	!town +sea
stone	x	am	Большой зверь пропал. Охотники ходят неделями и возвращаются пустыми.	The great beasts are gone. The hunters walk for weeks and come back empty-handed.	
stone	x		С неба падает пепел, как снег. Трава почернела, вода горчит.	Ash falls from the sky like snow. The grass turns black, the water tastes bitter.	
stone	c		Тебе велели сторожить вяленое мясо от собак. Ты {уснул|уснула}, а собаки — нет.	You are told to guard the dried meat from the dogs. You fall asleep; the dogs do not.	
stone	c		Дед учит тебя ходить по следу. Сломанная травинка ещё мокрая, говорит он: зверь рядом.	Grandfather teaches you to track. This broken grass is still wet, he says: the beast is close.	
stone	c	me	Ваш дом наполовину в земле, круглый, из камня. Зимой в нём тепло, летом прохладно.	Your house is half sunk in the ground, round, of stone. Warm in winter, cool in summer.	
stone	c	me	Щенок спит с тобой под одной шкурой. Мать ворчит, но не гонит.	A puppy sleeps under the same hide as you. Your mother grumbles but doesn't chase it out.	
stone	c	me	Тебе доверили каменную ступку. Толчёшь жёлуди, пока руки не отвалятся.	You are trusted with the stone mortar. You pound acorns until your arms nearly drop off.	
stone	c	in	Обезьяны утащили у тебя связку плодов. Ты {гнался|гналась} за ними до самого обрыва.	Monkeys steal your bunch of fruit. You chase them all the way to the cliff edge.	
stone	c	in	На стене под скалой нарисованы люди в пляске. Ты {пытался|пыталась} встать так же, как они.	On the wall of the rock shelter people are painted dancing. You try to stand the way they stand.	
stone	c	in	Павлин раскрыл хвост прямо у стоянки. Ты {замер|замерла} и {забыл|забыла} дышать.	A peacock spreads its tail right by the camp. You freeze and forget to breathe.	
stone	c	am	Дед показал, как делать наконечник с желобком посередине. У тебя он раскололся пополам.	Grandfather shows you how to make a point with a groove down the middle. Yours splits in two.	
stone	c	am	Медведь ловит рыбу на перекате. Вы смотрите из кустов и не дышите.	A bear is fishing on the riffle. You watch from the bushes, holding your breath.	
stone	c	am	Тебе сшили первую обувь из бизоньей шкуры. Весь день {ходил|ходила} и {смотрел|смотрела} на ноги.	They sew you your first shoes from bison hide. All day you walk around looking at your feet.	
stone	c	cn	Мать лепит из глины горшок и ставит его в костёр. Вечером в нём булькает похлёбка из улиток.	Your mother shapes a pot from clay and sets it in the fire. In the evening snail broth bubbles in it.	
stone	c	cn	Бамбуковая роща шумит всю ночь. Ты {думал|думала}, это ходят духи.	The bamboo grove rustles all night. You think it is spirits walking.	
stone	c	au	Дядя учит тебя бросать бумеранг. Тот возвращается — прямо тебе в лоб.	Your uncle teaches you to throw the boomerang. It comes back, straight into your forehead.	
stone	y		Старый охотник отдал тебе свой нож. Сказал: у меня будет новый, а у тебя это первый.	The old hunter gives you his knife. He says: I'll get a new one, but this is your first.	
stone	y		Всю ночь {просидел|просидела} {один|одна} в лесу у огня. Утром тебе дали новое имя.	All night you sit alone in the forest by a fire. In the morning you are given a new name.	
stone	y	af	На озере учишься бить рыбу гарпуном с костяными зубцами. Большой окунь тащит тебя в воду.	On the lake you learn to spear fish with a bone-barbed harpoon. A big perch drags you into the water.	
stone	y	cn	Дед учит тебя точить топор о мокрый песчаник. День за днём, пока лезвие не заблестит.	Grandfather teaches you to grind an axe on wet sandstone. Day after day, until the edge shines.	
stone	y	am	В лодке из шкур {плыл|плыла} вдоль берега. На камнях ревут котики, под водой лес из водорослей.	In a hide boat you paddle along the coast. Seals roar on the rocks, a forest of kelp below.	
stone	y	me	Тебя взяли на праздник к камням на холме. Там столько людей, сколько ты не {видел|видела} за всю жизнь.	They take you to the feast at the stones on the hill. There are more people there than you have seen in your life.	
stone	y	eu	На осенней переправе ты впервые {стоял|стояла} в реке с копьём. Олени шли так близко, что брызги летели в лицо.	At the autumn crossing you stand in the river with a spear for the first time. The deer pass so close the spray hits your face.	
stone	y	in	Тебе доверили лезть за мёдом на скалу. Висишь на верёвке из лиан, внизу ущелье.	You are trusted to climb the cliff for honey. You hang on a vine rope, the gorge below.	
stone	y	au	Старшие увели тебя на много дней. {Вернулся|Вернулась} с новым шрамом и новыми песнями.	The elders take you away for many days. You come back with a new scar and new songs.	
stone	y		Тебе впервые дали копьеметалку. Твоё копьё улетело дальше отцовского.	For the first time you are given the spear-thrower. Your spear flies further than your father's.	m
stone	a		К огню вышел чужак — один, без копья. Его накормили, а утром он ушёл.	A stranger comes to the fire alone, without a spear. He is fed, and in the morning he goes.	
stone	a	af	Нанизываешь бусы из скорлупы страусиных яиц. Нитку отдашь другу из дальнего рода: он вспомнит о тебе в голодный год.	You string beads of ostrich eggshell. The string goes to a friend in a far band, who will remember you in a hungry year.	
stone	a	me	Ставите новый дом рядом со старым. Камни для стен всё лето {носил|носила} с реки.	You build a new house beside the old one. All summer you carried stones for the walls up from the river.	
stone	a	eu	Режешь из кости гарпуны с зубцами. Весной в реку придёт лосось.	You carve barbed harpoons from bone. In spring the salmon will come up the river.	
stone	a	in	На рассвете собираешь опавшие цветы махуа. Они сладкие, их сушат впрок.	At dawn you gather fallen mahua flowers. They are sweet, and are dried to keep.	
stone	a	cn	Собираешь дикое просо по краю степи. Зёрна мелкие, зато их много.	You gather wild millet at the edge of the steppe. The grains are small, but there are many.	
stone	a	cn	Тянешь из реки сеть с каменными грузилами. Её всю зиму плели женщины рода.	You haul a net weighted with stones out of the river. The women of the band wove it all winter.	
stone	a	am	Копаешь луковицы камаса на сыром лугу. Потом их два дня томят в земляной яме.	You dig camas bulbs in the wet meadow. Then they are slow-baked for two days in an earth pit.	!town
stone	a		Каждую ночь рассказываешь детям одну и ту же сказку. Пропустишь слово — поправят.	Every night you tell the children the same tale. Skip a word and they correct you.	kids
stone	a		Женщины рода ушли вместе за кореньями на три дня. Мужчин оставили с детьми.	The women of the band go off together for roots for three days. The men are left with the children.	f
stone	j		Рассказываешь у огня, как прошла охота, — и все смеются в нужных местах.	You tell at the fire how the hunt went, and everyone laughs in the right places.	
stone	j		{Проснулся|Проснулась} до рассвета: все спят, огонь ещё тлеет, и тебе тепло.	You wake before dawn: everyone asleep, the fire still glowing, and you are warm.	
stone	j	af	Первый дождь после сухой поры. Дети пляшут в лужах, взрослые тоже.	The first rain after the dry season. The children dance in the puddles, and so do the grown-ups.	
stone	j	me	Весной склон за стоянкой красный от маков. Ты {пролежал|пролежала} в них полдня.	In spring the slope behind the camp is red with poppies. You lie among them half the day.	
stone	j	in	В жару весь род лежит в реке, только головы торчат. Буйволы рядом делают то же самое.	In the heat the whole band lies in the river, only heads showing. The buffalo nearby do the same.	
stone	j	cn	Осенью в горах поспели дикие каштаны. Пекли их на углях всю ночь.	In autumn the wild chestnuts ripen in the hills. You roast them on the coals all night.	
stone	j	am	Перезимовали в землянке. Весной вышли — а вся долина гудит от гусей.	You winter in the earth lodge. In spring you come out, and the whole valley is loud with geese.	!town
stone	j	eu	Зимой {катался|каталась} с горы на шкуре прямо на речной лёд, как ребёнок.	In winter you slide down the hill on a hide right onto the river ice, like a child.	
stone	j	au	Поспели орехи бунья. Со всех сторон сходятся роды, и пир идёт целую луну.	The bunya nuts are ripe. Bands come in from every side, and the feast lasts a whole moon.	
stone	j		Вы с {женой|мужем} ушли от стоянки на целый день. Вернулись с пустыми руками и довольные.	You and your {wife|husband} slip away from the camp for a whole day. You come back empty-handed and pleased.	married !widowed
stone	o		Глаза уже плохо видят. Зато ты узнаёшь каждого в роду по шагам.	Your eyes are failing. But you know everyone in the band by their footsteps.	
stone	o		Молодые поют твою любимую песню на новый лад. Ты {ворчал|ворчала}, а потом {стал|стала} подпевать.	The young ones sing your favourite song to a new tune. You grumble, and then you sing along.	
stone	o		За водой ты больше не ходишь. Её приносят тебе {первому|первой} — так положено старшим.	You no longer fetch water. It is brought to you first: that is due to the eldest.	
stone	o	me	Тебе выкопали место под полом дома. Ты {попросил|попросила}: положите со мной собаку.	A place is dug for you under the floor of the house. You ask them to lay the dog with you.	
stone	o	eu	Зимой остаёшься на стоянке с малышами, пока все на охоте. Шьёшь и рассказываешь, как когда-то ходили на мамонта.	In winter you stay in camp with the little ones while everyone hunts. You sew and tell how people once went after mammoth.	
stone	o	in	Подновляешь под скалой старый рисунок. Краска облезла, а зверь должен жить.	Under the rock you touch up an old painting. The paint has flaked, but the beast must live.	
stone	o	cn	Только ты знаешь, где в горах растёт трава от жара. Молодые ходят за тобой и запоминают.	Only you know where in the hills the herb against fever grows. The young follow you and learn.	
stone	o	af	Сидишь в тени и сверлишь бусины из скорлупы. Пальцы медленные, но ни одна не треснула.	You sit in the shade drilling eggshell beads. Your fingers are slow, but not one has cracked.	
stone	o	am	Ты ещё {застал|застала} мамонтов в этих местах. Молодые не верят, что зверь бывает выше дерева.	You still saw mammoths in these parts. The young don't believe a beast can be taller than a tree.	
stone	o		Правнук спит у тебя на животе. Ты {дожил|дожила} до этого — немногие доживают.	Your great-grandchild sleeps on your belly. You have lived to see this; few do.	kids grand
stone	x		Охотники не вернулись. Ждали три дня, потом пошли искать.	The hunters do not come back. You wait three days, then go looking.	
stone	x	af	Высохло озеро. Рыба лежит в грязи, а пить нечего.	The lake dries up. Fish lie in the mud, and there is nothing to drink.	
stone	x	me	Вернулись холода. Дикое зерно не родится, газели ушли.	The cold has come back. The wild grain fails, and the gazelles are gone.	
stone	x	me	Соседний род пришёл ночью за вашими запасами зерна.	The next band comes by night for your stores of grain.	
stone	x	in	Вокруг стоянки ходит тигр-людоед. Уже унёс двоих.	A man-eating tiger circles the camp. It has taken two already.	
stone	x	in	Дожди не пришли. Ягодник засох, ручьи стоят пустые.	The rains do not come. The berry bushes wither, the streams lie empty.	
stone	x	cn	Река вышла из берегов и стоит над долиной целую луну. Живёте на холме и едите кору.	The river breaks its banks and lies over the valley for a whole moon. You live on a hill and eat bark.	
stone	x	cn	Земля затряслась, и пещера, где вы зимовали, обрушилась.	The earth shakes, and the cave where you wintered falls in.	!town
stone	x	au	Лето без дождя. Роды сходятся к последнему колодцу и ссорятся из-за воды.	A summer without rain. The bands crowd round the last waterhole and quarrel over the water.	
stone	c		Мать перестала кормить тебя грудью: родился младший.	Your mother stops nursing you: a younger one has been born.	small
stone	c		Ты {сделал|сделала} первые шаги — прямо к огню. Мать успела.	You take your first steps, straight towards the fire. Your mother is quicker.	small
stone	c		Твоё первое слово — «дай».	Your first word is "give".	small
stone	c		Спишь между матерью и старшей сестрой. Там теплее всего.	You sleep between your mother and your older sister. It is the warmest place.	small
stone	c		Тебя носят за спиной, пока мать работает. Мир ты видишь через её плечо.	You are carried on your mother's back while she works. You see the world over her shoulder.	small
stone	c		Тебя чуть не унесла лихорадка. Бабка просидела рядом три ночи.	A fever nearly takes you. Your grandmother sits by you for three nights.	small
stone	c		Ты {съел|съела} горсть земли и {остался|осталась} очень {доволен|довольна}.	You eat a handful of earth and are very pleased with yourself.	small
stone	c		Старшие дети таскают тебя за собой, как куклу.	The older children drag you about like a doll.	small
stone	c		Засыпаешь под песню, которую мать поёт без слов.	You fall asleep to a song your mother hums without words.	small
stone	c		Ты {упал|упала} и {рассёк|рассекла} лоб. Шрам останется на всю жизнь.	You fall and cut your forehead. The scar will stay for life.	small
stone	c		Плачешь, когда отец уходит, и смеёшься, когда он возвращается.	You cry when your father leaves and laugh when he comes back.	small
stone	c		Таскаешь собаку за хвост, а она терпит.	You pull the dog's tail, and it puts up with it.	small
stone	c		Ты всё время тянешь в рот блестящее. Мать вынимает и смеётся.	You keep putting shiny things in your mouth. Your mother takes them out and laughs.	small
stone	c		Сидишь у порога и встречаешь каждого, кто входит, своим словом.	You sit by the door and greet everyone who comes in with your own word.	small
stone	c		На переходах тебя несут в шкуре за спиной. Ты спишь всю дорогу.	On the moves you are carried in a hide on someone's back. You sleep the whole way.	small
stone	c		Тебе дали погрызть мозговую кость. Счастливее тебя нет никого у огня.	You are given a marrow bone to gnaw. Nobody by the fire is happier.	small
stone	c		Засыпаешь у огня, {завёрнутый|завёрнутая} в шкуру с головой.	You fall asleep by the fire, wrapped in a hide up to your head.	small
`,be=`# Forks for those who took vows. Id prefix k_. A monk meets only forks that need monk.

id: k_copy_error
groups: med early
tags: *
need: monk lit
ages: 19-64
weight: 1
q: Тебе велят переписать старую книгу. В ней ошибка, и ты её видишь. | You are told to copy an old book. There is a mistake in it, and you can see it.
door: Переписать, как велено | Copy it as you are told
out: 70 | Ошибка переходит в новую книгу. Ты помнишь о ней до старости. | The mistake passes into the new book. You remember it into old age. |
out: 30 | Через годы кто-то находит ошибку и в старой книге, и в твоей. | Years later someone finds the mistake in the old book and in yours. |
door: Исправить молча | Correct it quietly
out: 60 | Никто не замечает. Новая книга вернее старой. | Nobody notices. The new book is truer than the old. |
out: 40 | Старшие заметили и велели переписать заново, с ошибкой. | The elders notice and have you copy it again, mistake and all. |
ep: {Исправил|Исправила} чужую ошибку. | Corrected someone else's mistake.
door: Сказать старшим | Tell the elders
out: 50 | Старшие думают неделю и разрешают исправить. | The elders think it over for a week and let you correct it. | faith
out: 50 | Тебе велят не умничать и переписывать. | You are told not to be clever and to copy. |
ask: Где ты видишь ошибку, которую все повторяют? | Where do you see a mistake that everyone repeats?

id: k_pilgrimage
groups: med early
tags: *
need: monk
ages: 19-51
weight: 1
q: Обитель отправляет одного в дальнее паломничество, к святым местам. Нужен тот, кто вынесет дорогу. | The monastery is sending one of its own on a long pilgrimage to the holy places. It needs someone who can bear the road.
door: Вызваться | Volunteer
shut: poor | Обитель обеднела, и денег на дорогу нет. | The monastery has grown poor; there is no money for the road.
out: 50 | Год пути. Ты {видел|видела} море, чужие города и святыню, о которой читал{|а}. | A year on the road. You see the sea, strange cities and the shrine you read of. | sea moved faith
out: 30 | Дошёл{|ла}, но на обратном пути долго болел{|а}. | You get there, but on the way back you are ill a long time. | moved risk15
out: 20 | Из паломничества ты не вернул{ся|ась}. | You do not come back from the pilgrimage. | risk60
ep: {Дошёл|Дошла} до святых мест. | Reached the holy places.
door: Уступить место другому | Let another go
out: 100 | Другой уходит. Ты ждёшь его писем и молишься за его дорогу. | The other leaves. You wait for word and pray for the road. |
ask: Куда ты давно собираешься и всё уступаешь дорогу другим? | Where have you long meant to go, while always letting others go first?

id: k_fugitive
groups: med early
tags: *
need: monk
ages: 19-64
weight: 1
q: Ночью в ворота стучит беглый. За ним погоня, к утру будут здесь. | At night a fugitive knocks at the gate. They are after him and will be here by morning.
door: Спрятать | Hide him
out: 60 | Утром погоня обыскивает двор и уходит ни с чем. Беглый уходит через неделю. | In the morning they search the yard and leave with nothing. The fugitive leaves a week later. | kind brave
out: 40 | Его находят. Тебя секут при всей {братии|общине}. | They find him. You are flogged before the whole house. | kind brave risk10
ep: {Спрятал|Спрятала} беглого. | Hid a fugitive.
door: Дать хлеба и показать тропу | Give him bread and show him a path
out: 100 | Он уходит в темноту. Ты так и не узнаешь, ушёл ли он. | He goes off into the dark. You never learn whether he got away. | kind
door: Не открывать | Keep the gate shut
out: 100 | Стук стихает. Утром на дороге следы коней. | The knocking stops. In the morning there are hoofprints on the road. |
ask: Кому ты не {открыл|открыла}, когда стучали? | Whom did you not open to when they knocked?

id: k_silence
groups: med early
tags: *
need: monk
ages: 27-64
weight: 1
q: Наставник предлагает тебе обет молчания на год. | Your teacher offers you a vow of silence for a year.
door: Принять | Take it
out: 70 | Год без слов. Ты слышишь то, чего раньше не {слышал|слышала}: шаги, ветер, своё сердце. | A year without words. You hear what you never heard before: footsteps, wind, your own heart. | faith
out: 30 | К середине года ты едва не {сорвался|сорвалась}. Но {дотерпел|дотерпела}. | Halfway through you nearly break it. But you hold out. | faith
ep: Год {молчал|молчала}. | Kept silent for a year.
door: Отказаться | Decline
out: 100 | Наставник кивает и больше не предлагает. | Your teacher nods and never offers again. |
ask: Что ты {услышал|услышала} бы, если бы год молчал{|а}? | What would you hear if you kept silent for a year?

id: k_leave_vows
groups: med early
tags: *
need: monk
ages: 19-39
weight: 1
q: Приходит весть: дома умер отец, мать одна, хозяйство гибнет. Тебя зовут вернуться в мир. | Word comes: your father has died at home, your mother is alone, the farm is going to ruin. They ask you to come back into the world.
door: Остаться в обители | Stay in the monastery
out: 70 | Ты {остался|осталась}. Мать прислала один раз хлеб, без письма. | You stay. Once your mother sends bread, with no letter. | faith
out: 30 | Ты {остался|осталась} и посылаешь домой всё, что можно. Этого мало. | You stay and send home all you can. It is not enough. | kind
door: Отпроситься домой на лето | Ask leave to go home for the summer
shut: r0 | Тебя не отпустят. | You will not be let go.
out: 100 | Лето в поле, как в детстве. Осенью ты возвращаешься за ворота. | A summer in the fields, as when you were small. In autumn you go back through the gate. | kind
ask: Кого ты {оставил|оставила}, чтобы остаться верн{ым|ой} своему? | Whom did you leave behind to stay true to your own?
`,xe=`# Second wave of forks, all eras. Id prefix m_. {m|f} marks are allowed inside door/out/ep lines.

id: m_stone_wolf
groups: stone
tags: *
need:
ages: 19-51
weight: 1
q: В логове убитой волчицы скулит волчонок. Один, ещё слепой. | In the den of the she-wolf you killed, a cub whimpers. Just one, its eyes still shut.
door: Взять к огню и выкормить | Take it to the fire and raise it
out: 50 | Волчонок растёт у твоих ног. На охоте он первым чует зверя. | The cub grows up at your feet. On the hunt he is the first to scent game. | kind wealth+1
out: 30 | Старшие ворчат: волк есть волк. Весной он уходит в лес и не возвращается. | The elders grumble: a wolf is a wolf. In spring he goes into the forest and doesn't come back. | kind
out: 20 | Подросший волк кусает ребёнка. Его убивают, а тебя с тех пор сторонятся. | The grown wolf bites a child. They kill it, and from then on people keep away from you. |
ep: {Вырастил|Вырастила} волка у своего огня. | Raised a wolf by your own fire.
ask: Кто однажды пришёл чужим, а стал своим? | Who once came as a stranger and became one of your own?
door: Забрать шкурку | Take the pelt
out: 100 | Из шкурки выходит тёплая рукавица. | The pelt makes a warm mitten. |
door: Оставить в логове | Leave it in the den
out: 70 | Ты уходишь. Ночью тебе всё кажется, что слышен писк. | You walk away. All night you seem to hear it squeaking. |
out: 30 | Через год у стоянки бродит молодой волк и не боится огня. | A year later a young wolf prowls round the camp and isn't afraid of the fire. |

id: m_stone_twins
groups: stone
tags: *
need:
ages: 19-39
weight: 1
q: У соседки родилась двойня. Молока на двоих не хватает, а до весны далеко. | Your neighbour has had twins. There isn't milk enough for two, and spring is far off.
door: Кормить одного своей грудью | Nurse one of them yourself
shut: m | Молока у тебя нет. | You have no milk.
shut: f !kids | Своего грудного у тебя нет, а значит, нет и молока. | You have no baby of your own, and so no milk.
out: 70 | Два малыша спят у тебя на руках, свой и чужой. Выживают оба. | Two babies sleep in your arms, yours and hers. Both live. | kind love
out: 30 | Молока мало обоим. Свой плачет по ночам. | There is too little milk for both. Your own cries at night. | kind
ep: Выкормила чужого ребёнка. | Nursed another woman's child.
door: Носить ей лучший жир с охоты | Bring her the best fat from the hunt
out: 60 | Молоко прибывает. Двойня растёт, крикливая и толстая. | Her milk comes in. The twins grow, loud and fat. | kind
out: 40 | К зиме одного из двоих не стало. | By winter one of the two is gone. |
door: Отдать одного бездетным из соседнего рода | Give one to a childless couple in the next band
out: 70 | Те плачут от радости. Через годы мальчик приходит на сход и ищет глазами мать. | They weep for joy. Years later the boy comes to the gathering, his eyes searching for his mother. |
out: 30 | Мать не может этого простить. С тобой она больше не говорит. | The mother can't forgive it. She never speaks to you again. |
ask: Что пришлось отдать, чтобы сберечь остальное? | What have you had to give away to keep the rest?

id: m_stone_healer
groups: stone
tags: *
need:
ages: 27-51
weight: 1
q: Старая знахарка выбрала тебя. Хочет передать свои травы и песни, пока жива. | The old healer has chosen you. She wants to pass on her herbs and songs while she lives.
door: Сесть рядом с ней | Sit down beside her
out: 60 | Год ты ходишь за ней по склонам. Потом жар и роды несут уже к тебе. | For a year you follow her over the slopes. Then people bring their fevers and births to you. | faith kind
out: 40 | Она умирает раньше, чем успевает всё рассказать. Остальное ты додумываешь {сам|сама}. | She dies before she can tell it all. The rest you work out for yourself. | faith
ep: {Знал|Знала} травы от жара и песни от страха. | Knew herbs for fever and songs for fear.
ask: Чему научили старики, кроме слов? | What did the old ones teach you that wasn't words?
door: Отказаться: на охоте ты нужнее | Refuse: you are needed more on the hunt
out: 70 | Она выбирает другого. Иногда у огня ты ловишь её взгляд. | She chooses someone else. Sometimes across the fire you catch her eye. |
out: 30 | После её смерти никто не помнит, от чего горькая трава. Зимой умирает ребёнок. | After her death nobody remembers what the bitter herb is for. In winter a child dies. |

id: m_stone_ice
groups: stone
tags: eu am cn
need:
ages: 19-51
weight: 1
q: Лёд на озере уже потемнел. В обход — три дня, напрямик — полдня. | The ice on the lake has already turned dark. Round it is three days; straight across, half a day.
door: Идти по льду | Cross the ice
out: 70 | Лёд трещит, но держит. Вы на месте раньше всех. | The ice cracks but holds. You get there before anyone else. | brave
out: 30 | Лёд расходится под ногами. Тебя вытаскивают за волосы. | The ice opens under your feet. They drag you out by the hair. | risk20 brave
ask: Когда короткий путь стоил риска? | When was the short way worth the risk?
door: Обойти берегом | Go round by the shore
out: 80 | Три дня по камням. Ноги сбиты, зато все живы. | Three days over stones. Feet raw, but everyone alive. |
out: 20 | Пока вы шли, лучшую стоянку занял чужой род. | While you were walking, another band took the best camp. | wealth-1

id: m_stone_winter_old
groups: stone
tags: *
need:
ages: 51-70
weight: 1
q: Зима будет голодной, это видно уже сейчас. Ты старше всех, а ешь наравне со всеми. | The winter will be hungry, you can see it already. You are the oldest, and you eat the same share as everyone.
door: Отдавать свою долю внукам | Give your share to the grandchildren
shut: !kids | Внуков у тебя нет. | You have no grandchildren.
out: 60 | Ты худеешь, они нет. К весне ты ещё {жив|жива}. | You grow thin, they don't. By spring you are still alive. | kind risk15
out: 40 | В самый мороз ты {слёг|слегла}. Внуки сидят рядом и греют тебе руки. | In the hardest frost you take to your bed. The grandchildren sit beside you and warm your hands. | kind risk40
ep: Последнее мясо {отдавал|отдавала} внукам. | Gave the last of the meat to the grandchildren.
door: Уйти от огня, как уходили старики до тебя | Walk away from the fire, as the old did before you
out: 100 | Ты прощаешься с каждым и уходишь в снег. Род доживает до весны. | You say goodbye to each of them and walk into the snow. The band lives to see spring. | risk60 brave
ep: {Ушёл|Ушла} в снег, чтобы другим хватило. | Walked into the snow so the others would have enough.
ask: Что можно отдать, чтобы другим хватило? | What could you give up so that others have enough?
door: Есть как все | Eat like everyone else
out: 60 | Зима тянется. Ты рассказываешь сказки, и дети меньше просят есть. | The winter drags on. You tell stories, and the children ask less for food. |
out: 40 | К весне умирает младенец. Ты долго не поднимаешь глаз. | By spring a baby dies. For a long time you don't look up. |

id: m_stone_south
groups: stone
tags: am
need:
ages: 19-39
weight: 1
q: Охотники нашли проход меж ледников на юг. Старшие говорят: там ещё не ступал человек. | The hunters have found a way south between the glaciers. The elders say no one has ever set foot there.
door: Идти на юг | Go south
out: 60 | Звери там не знают человека и подпускают близко. Мяса вдоволь. | The beasts there don't know people and let you come close. Meat in plenty. | moved wealth+1 brave
out: 40 | Перевалы, метели. Из десятерых доходят семеро. | Passes, blizzards. Of ten, seven get through. | moved risk25 brave
ep: {Пришёл|Пришла} туда, где до тебя не было людей. | Went where no one had been before.
ask: Куда тянет, хотя там ещё никого нет? | What draws you, though nobody is there yet?
door: Остаться у знакомых рек | Stay by the rivers you know
out: 70 | Река та же, рыба та же. Тех, кто ушёл, ты больше не видишь. | The same river, the same fish. You never see those who left again. |
out: 30 | Зверя с каждой зимой меньше. | There is less game every winter. | wealth-1

id: m_stone_rock
groups: stone
tags: au
need: !town
ages: 39-64
weight: 1
q: Старики говорят: пора подновить рисунки на священной скале. Идти целую луну, через чужие земли. | The old ones say it is time to repaint the pictures on the sacred rock. A moon's walk, through other people's country.
door: Идти к мужской скале | Go to the men's rock
shut: f | Это мужская песня и мужская скала. | It is a men's song and a men's rock.
out: 70 | У каждого колодца ты поёшь, и чужие роды тебя пропускают. Новая охра ложится на старую. | At every waterhole you sing, and the other bands let you pass. New ochre goes over the old. | faith moved
out: 30 | В пути кончилась вода. Ты вернулся худым, но дошёл. | Water ran out on the way. You came back thin, but you got there. | faith risk15
ep: Подновил рисунки на священной скале. | Repainted the pictures on the sacred rock.
door: Идти к женскому месту | Go to the women's place
shut: m | Женское место мужчине видеть нельзя. | A man may not look on the women's place.
out: 70 | Вы идёте впятером и поёте всю дорогу. Девочки впервые слышат свою часть песни. | Five of you walk and sing all the way. The girls hear their part of the song for the first time. | faith moved
out: 30 | Одна из старух умирает в пути. Её песню теперь знаешь только ты. | One of the old women dies on the way. Now only you know her song. | faith
door: Послать молодых | Send the young ones
out: 60 | Молодые возвращаются гордые. Рисунок, говорят, стал ярче прежнего. | The young come back proud. The pictures, they say, are brighter than before. |
out: 40 | Они сбились с песни и ушли не той дорогой. Ты ждёшь их до первых дождей. | They lost the song and took the wrong way. You wait for them until the first rains. |
ask: Что держится только на том, что его повторяют? | What lasts only because people keep repeating it?

id: m_stone_seed
groups: stone
tags: me cn
need: !town
ages: 27-64
weight: 1
q: Там, где в прошлом году просыпали зерно, взошли колосья. Можно остаться и посеять. | Where grain was spilled last year, ears have come up. You could stay and sow.
door: Остаться и посеять | Stay and sow
out: 50 | Колосья встают густо. Впервые вы зимуете на одном месте. | The ears come up thick. For the first time you winter in one place. | wealth+1
out: 50 | Птицы склёвывают всё. Род ушёл, и ты {остался|осталась} ни с чем. | The birds eat it all. The band has gone on, and you are left with nothing. | wealth-1
ep: {Посеял|Посеяла} зерно там, где его раньше только собирали. | Sowed grain where before it was only gathered.
ask: Что начато без уверенности, что взойдёт? | What have you started without knowing if it would grow?
door: Уйти с родом за газелями | Go with the band after the gazelles
out: 80 | Знакомые тропы, знакомые стоянки. Через год на том месте одна трава. | Familiar paths, familiar camps. A year later there is only grass in that spot. |
out: 20 | Газелей много. Колоски ты вспоминаешь только во сне. | Plenty of gazelles. You remember the ears of grain only in dreams. | wealth+1

id: m_stone_dream
groups: stone
tags: *
need:
ages: 19-64
weight: 1
q: Тебе приснилось, что олени ушли за северные холмы. Сны в роду принято рассказывать. | You dreamed the deer had gone beyond the northern hills. In your band dreams are told aloud.
door: Рассказать у огня | Tell it at the fire
out: 50 | Род снимается и идёт на север. Олени там. Теперь тебя слушают. | The band packs up and heads north. The deer are there. Now they listen to you. | faith moved wealth+1
out: 50 | На севере пусто. Возвращаетесь голодные, и на тебя косятся. | The north is empty. You come back hungry, and people look at you askance. | moved wealth-1
ask: Каким своим снам можно верить? | Which of your dreams can you trust?
door: Промолчать | Keep quiet
out: 70 | Охотники уходят на юг и возвращаются пустыми. Ты молчишь и дальше. | The hunters go south and come back with nothing. You go on saying nothing. |
out: 30 | Сон забывается. Охота и так удачная. | The dream fades. The hunting is good anyway. |

id: m_anc_tablet
groups: anc
tags: me
need: !town
ages: 27-64
weight: 1
q: Сосед продаёт поле и зовёт тебя в свидетели. Ты знаешь: половина поля — брата, который ушёл с войском. | Your neighbour is selling a field and asks you to witness. You know half of it is his brother's, who went off with the army.
door: Приложить печать к табличке | Press your seal into the tablet
shut: r0 | Раба в свидетели не зовут. | No one calls a slave as witness.
out: 60 | Сосед ставит пиво. Брат так и не возвращается. | The neighbour stands the beer. The brother never comes back. | wealth+1
out: 40 | Через три года брат возвращается и идёт к судьям. Табличку читают вслух, и твоё имя тоже. | Three years later the brother comes back and goes to the judges. The tablet is read aloud, your name with it. | wealth-1
door: Отказаться | Refuse
out: 70 | Сосед находит другого свидетеля и перестаёт с тобой здороваться. | The neighbour finds another witness and stops greeting you. |
out: 30 | Брат возвращается и приносит тебе кувшин масла. | The brother comes back and brings you a jar of oil. | wealth+1 kind
ask: Когда молчание было бы выгоднее правды? | When would silence have paid better than the truth?

id: m_silkworms
groups: anc med
tags: cn
need:
ages: 19-51
weight: 1
q: У соседки погибли шелкопряды, все до одного. Она просит у тебя грену на новый выводок. | Your neighbour's silkworms have died, every one. She asks you for eggs for a new brood.
door: Поделиться | Share
out: 60 | Её черви растут. Осенью она приносит тебе отрез шёлка. | Her worms thrive. In autumn she brings you a length of silk. | kind wealth+1
out: 40 | Её черви снова гибнут: видно, порча в доме. А твоих стало меньше. | Her worms die again: there must be a blight on that house. And you have fewer of your own. | kind wealth-1
ask: Чем делишься, когда и своего мало? | What do you share when you have little yourself?
door: Сказать, что лишней нет | Say you have none to spare
out: 70 | Она кивает и уходит. На празднике садится от тебя подальше. | She nods and goes. At the festival she sits far away from you. |
out: 30 | Твой выводок даёт двойной шёлк. Подать уплачена до срока. | Your brood gives double the silk. The tax is paid early. | wealth+1
door: Продать за зерно | Sell them for grain
out: 100 | Она отдаёт последний мешок проса. Зимой ты видишь, как её дети собирают жёлуди. | She hands over her last sack of millet. In winter you see her children gathering acorns. | wealth+1

id: m_colony
groups: anc
tags: med
need: !town
ages: 19-27
weight: 1
q: Город снаряжает корабли за море: основать поселение на чужом берегу. Каждому обещан надел. | The city is fitting out ships to found a settlement on a far shore. Everyone is promised a plot.
door: Плыть | Sail
shut: f | Корабли берут мужчин. Жён потом найдут среди местных. | The ships take men. Wives will be found later among the locals.
shut: r0 | Рабу надела не положено. | No plot is due to a slave.
out: 50 | Чужой берег, чужие люди. Через пять лет у тебя оливы и дом с видом на море. | A strange shore, strange people. In five years you have olives and a house looking out to sea. | sea moved wealth+2
out: 30 | Местные приходят ночью с огнём. Стену строите все вместе, днём и ночью. | The locals come by night with fire. You all build the wall together, day and night. | sea moved risk20 brave
out: 20 | В пути буря. Из трёх кораблей до берега доходят два. | A storm on the way. Of three ships, two reach the shore. | sea risk40
ep: Основал город на чужом берегу. | Founded a city on a foreign shore.
ask: Где можно было бы начать всё заново? | Where could you start over?
door: Остаться дома | Stay home
out: 80 | Отцовский надел мал, зато свой. Корабли уходят без тебя. | Your father's plot is small, but it's yours. The ships sail without you. |
out: 20 | Через годы приходят вести: поселение богатеет. | Years later word comes: the settlement is growing rich. |

id: m_letter_dead
groups: anc
tags: eg
need:
ages: 27-64
weight: 1
q: Тебе снится покойный отец, и он сердит. Жрец советует написать ему письмо и оставить в гробнице. | You dream of your dead father, and he is angry. The priest advises writing him a letter and leaving it in the tomb.
door: Нанять писца и написать | Hire a scribe and write
shut: poor | Писцу заплатить нечем. | You have nothing to pay a scribe with.
out: 70 | Писец выводит на чаше: «Чем я тебя {обидел|обидела}?» Сны уходят. | The scribe writes on a bowl: "How have I wronged you?" The dreams go away. | faith
out: 30 | Сны не уходят. Зато ты наконец плачешь по отцу. | The dreams don't go. But at last you weep for your father. | faith
ask: Что осталось несказанным тем, кого уже нет? | What was left unsaid to those who are gone?
door: Отнести хлеб и пиво к гробнице | Take bread and beer to the tomb
out: 60 | Ты ставишь кувшин у двери гробницы. Ночью спишь спокойно. | You set the jar by the tomb door. That night you sleep in peace. | faith
out: 40 | Сны тянутся до самого разлива. | The dreams go on until the flood. |
door: Не обращать внимания | Pay it no mind
out: 100 | К осени сны стихают сами. | By autumn the dreams fade on their own. |

id: m_milpa
groups: anc med
tags: meso
need: !town
ages: 27-51
weight: 1
q: Поле на склоне выдохлось: третий год кукуруза мелкая. Можно выжечь новый участок в лесу. | The hillside field is worn out: for the third year the maize is small. You could burn a new patch in the forest.
door: Рубить и жечь лес | Cut and burn the forest
out: 60 | Месяц топора и дыма. На новой земле кукуруза по плечо. | A month of axe and smoke. On the new land the maize stands shoulder-high. | wealth+1
out: 40 | Огонь уходит в сухой лес и горит три дня. С соседями теперь не помириться. | The fire runs into the dry woods and burns for three days. There's no making it up with the neighbours now. | wealth-1 risk5
door: Сажать на старом, с бобами и тыквой | Plant the old field again, with beans and squash
out: 70 | Бобы держат землю. Урожай небогатый, но есть. | The beans hold the soil. Not a rich harvest, but a harvest. |
out: 30 | Год сухой, и старое поле почти ничего не даёт. | A dry year, and the old field gives almost nothing. | wealth-1
ask: Что лучше беречь, чем начинать заново? | What is better looked after than started over?

id: m_llamas
groups: anc med
tags: andes
need:
ages: 19-39
weight: 1
q: Караван лам спускается с гор к морю: шерсть менять на сушёную рыбу. Нужен погонщик. | A llama caravan is going down from the mountains to the sea, to trade wool for dried fish. It needs a drover.
door: Идти с караваном | Go with the caravan
shut: f kids | Грудного на месяц в горы не возьмёшь. | You can't take a baby at the breast into the mountains for a month.
out: 60 | Месяц спуска. Ты впервые видишь море и ешь рыбу, которой не знаешь названия. | A month going down. You see the sea for the first time and eat a fish you have no name for. | sea wealth+1
out: 40 | На перевале холод. Две ламы падают, и отвечать за них тебе. | Cold on the pass. Two llamas die, and you must answer for them. | sea wealth-1 risk5
ask: Что ещё ни разу не довелось увидеть своими глазами? | What have you never yet seen with your own eyes?
door: Остаться при картофеле | Stay with the potatoes
out: 80 | Картофель вымерз и высох на солнце. Чуньо хватит до весны. | The potatoes are frozen and dried in the sun. The chuño will last till spring. |
out: 20 | Караван возвращается с морской солью и перьями. Тебе не досталось ничего. | The caravan comes back with sea salt and feathers. None for you. |

id: m_grain_ship
groups: anc med
tags: med it me eg
need:
ages: 27-64
weight: 1
q: В городе голод. В гавань пришёл корабль с зерном, а торговец просит втрое. | Famine in the city. A grain ship is in harbour, but the merchant holds the price at three times over.
door: Отдать всё, что есть, за мешок | Give all you have for a sack
shut: poor | Отдавать нечего. | You have nothing to give.
out: 70 | Мешок зерна у очага. В сундуке пусто, в доме сыто. | A sack of grain by the hearth. The chest is empty, the house is fed. | wealth-1
out: 30 | Сверху зерно хорошее, а внизу гнилое. | The grain is good on top and rotten underneath. | wealth-2
door: Пойти с толпой к его складу | Go with the crowd to his storehouse
shut: r3 | Тебе, человеку из совета, идти с толпой не к лицу. | It would not do for a man of the council to go with the mob.
out: 50 | Двери выломаны. Ты приносишь домой зерно в подоле. | The doors are broken down. You carry grain home in your lap. | brave
out: 30 | Стражники бьют дубинками у самых ворот склада. | The guards lay into you with clubs at the very gate of the store. | risk10 brave
out: 20 | Стража хватает зачинщиков. Ты среди них. | The watch seize the ringleaders. You are among them. | risk30 brave
ask: Когда приходилось идти со всеми, хотя было страшно? | When did you go along with everyone, though you were afraid?
door: Ждать раздачи | Wait for the dole
out: 60 | Через неделю у храма раздают хлеб. Стоишь в очереди с рассвета. | A week later bread is handed out at the temple. You queue from dawn. |
out: 40 | Раздачи нет. Неделю едите отруби с водой. | There is no dole. For a week you eat bran and water. | risk5

id: m_forest_dwelling
groups: anc med early
tags: in
need: kids grand
ages: 51-70
weight: 1
q: Внуки подросли. По древнему обычаю пора оставить дом сыновьям и уйти жить в лес. | The grandchildren are grown. By old custom it is time to leave the house to your sons and go to live in the forest.
door: Уйти в лес | Go to the forest
shut: f !married | Одинокой женщине уходить в лес не велят. | A woman on her own is not allowed to go to the forest.
out: 60 | Хижина у реки. Утром молитва, вечером тишина. Сын навещает раз в месяц. | A hut by the river. Prayer in the morning, quiet in the evening. Your son comes once a month. | faith moved
out: 40 | Зимой в лесу сыро. Кашель не уходит до весны. | The forest is damp in winter. The cough stays with you till spring. | faith risk20
ep: {Ушёл|Ушла} в лес, оставив дом сыновьям. | Went to the forest and left the house to the sons.
ask: Что можно отпустить уже сейчас? | What could you let go of now?
door: Остаться и нянчить внуков | Stay and mind the grandchildren
out: 70 | Ты сидишь на веранде, а внуки лазают по тебе, как по дереву. | You sit on the veranda, and the grandchildren climb over you like a tree. | love
out: 30 | Невестка ворчит: в доме лишний рот, да ещё и всех учит. | Your daughter-in-law grumbles: an extra mouth, and one that tells everyone how to do things. |

id: m_mourning_hut
groups: anc med
tags: cn
need: !town m
ages: 27-64
weight: 1
q: Умерла мать. По обычаю почтительный сын три года живёт в шалаше у её могилы. | Your mother has died. By custom a dutiful son lives three years in a hut by her grave.
door: Жить у могилы | Live by the grave
shut: f | Это долг сына. Дочь ушла в семью мужа. | That is a son's duty. A daughter belongs to her husband's family.
out: 60 | Три года в шалаше. Начальник уезда ставит тебя всем в пример. | Three years in the hut. The county magistrate holds you up as an example to all. | faith wealth-1
out: 40 | Поле зарастает. Жена с детьми кормятся у её родни. | The field goes to weeds. Your wife and children eat at her family's table. | faith wealth-2
ep: Три года жил у материнской могилы. | Lived three years by his mother's grave.
door: Носить траур и работать | Wear mourning and keep working
out: 70 | Белая одежда, ни мяса, ни вина. Поле вспахано. | White clothes, no meat, no wine. The field is ploughed. |
out: 30 | Соседи шепчутся, что ты {непочтителен|непочтительна}. | The neighbours whisper that you lack respect. |
ask: Как ты помнишь своих умерших? | How do you remember your dead?

id: m_iron
groups: anc med
tags: af
need:
ages: 19-27
weight: 1
q: Кузнец за рекой плавит железо в глиняной печи. Ищет, кто будет носить уголь и качать мехи. | The smith across the river smelts iron in a clay furnace. He is looking for someone to carry charcoal and work the bellows.
door: Пойти к нему | Go to him
shut: f | К плавке женщин не подпускают: говорят, железо не родится. | Women are kept away from the smelting: they say the iron won't be born.
out: 60 | Годы у горна. Твои мотыги берут в трёх деревнях. | Years at the furnace. Three villages buy your hoes. | wealth+1 moved
out: 40 | Кузнецов уважают и побаиваются. Теперь и тебя. | Smiths are respected and a little feared. Now so are you. | wealth+1
ep: Ковал мотыги на три деревни. | Forged hoes for three villages.
door: Остаться при просе | Stay with the millet
out: 80 | Просо, сорго, дожди. Мотыгу ты покупаешь у него же. | Millet, sorghum, rain. You buy your hoe from him. |
out: 20 | Засуха. Кузнецу платят зерном, а ты своё съедаешь. | Drought. The smith is paid in grain, and you eat yours. | wealth-1
ask: Какому делу хотелось бы выучиться? | What trade would you like to have learned?

id: m_sold_son
groups: anc med
tags: me eg med
need: r0 kids
ages: 27-51
weight: 1
q: Хозяин решил продать твоего сына в дом за рекой. | Your master has decided to sell your son to a house across the river.
door: Упасть хозяину в ноги | Throw yourself at the master's feet
out: 40 | Хозяин машет рукой: пусть остаётся. Почему — ты так и не узнаешь. | The master waves his hand: let him stay. You never learn why. | love
out: 60 | Сына уводят утром. Тебе разрешают проводить его до ворот. | Your son is led away in the morning. You are allowed to walk him to the gate. |
ask: За кого приходилось просить, забыв о гордости? | For whom have you begged, forgetting your pride?
door: Бежать с ним ночью | Run with him by night
out: 30 | Вы уходите в горы, к людям, которые ни о чём не спрашивают. | You get away to the hills, to people who ask no questions. | free moved brave
out: 70 | Вас ловят у брода. Сына продают дальше, чем собирались. | You are caught at the ford. Your son is sold further away than planned. | risk15 brave
ep: Не {отдал|отдала} сына без боя. | Did not give up a son without a fight.
door: Просить управителя того дома приглядеть за ним | Ask the steward of that house to look after him
out: 100 | Управитель обещает. Через год ты узнаёшь: сын жив и учится счёту. | The steward promises. A year later you hear: your son is alive and learning to count. |

id: m_games
groups: anc
tags: med
need:
ages: 19-27
weight: 1
q: Скоро большие игры в честь бога. Ты бегаешь быстрее всех в округе. | The great games for the god are coming. You are the fastest runner in the district.
door: Идти на игры | Go to the games
shut: f | Женщинам на игры нельзя даже смотреть. | Women may not even watch the games.
shut: r0 | Рабов к бегу не допускают. | Slaves are not allowed to run.
out: 20 | Ты приходишь первым. Масличный венок, и родной город кормит тебя до старости. | You come in first. An olive wreath, and your home town feeds you to old age. | wealth+2 brave
out: 60 | Ты третий в забеге. Никто, кроме матери, этого не помнит. | You come third. Nobody but your mother remembers. | brave
out: 20 | На жаре у тебя рвётся жила в ноге. | In the heat a sinew snaps in your leg. | risk5
ask: В чём ты лучше всех, хоть никто и не знает? | What are you best at, though nobody knows it?
door: Остаться на сборе олив | Stay for the olive harvest
out: 100 | Олив в этот год много. Об играх ты слушаешь от тех, кто вернулся. | Plenty of olives this year. You hear about the games from those who come back. |

id: m_hand_over
groups: anc med early ind
tags: *
need: kids !town grown
ages: 51-70
weight: 2
q: Сил всё меньше. Старший сын ждёт, когда ты отдашь ему дом и землю. | Your strength is going. Your eldest son is waiting for you to hand him the house and land.
door: Отдать сейчас | Hand it over now
out: 60 | Сын теперь хозяин. Ты сидишь у очага, и у тебя спрашивают, когда сеять. | Your son is master now. You sit by the hearth, and they ask you when to sow. | kind
out: 40 | Невестка считает каждый твой кусок. Сын молчит. | Your daughter-in-law counts every bite you take. Your son says nothing. |
ep: Вовремя {отдал|отдала} дом детям. | Gave the house to the children in good time.
ask: Что пора отдать в другие руки? | What is it time to put in other hands?
door: Держать, пока {жив|жива} | Keep it while you live
out: 60 | Ты {хозяин|хозяйка} до конца. Сын седеет в ожидании. | You are master to the end. Your son goes grey waiting. |
out: 40 | Сын не дожидается и уходит в город. | Your son tires of waiting and leaves for the town. |
door: Отдать младшему | Give it to the youngest
shut: f | Землю по обычаю наследуют сыновья, и решаешь не ты. | By custom the land goes to the sons, and the choice isn't yours.
out: 50 | Младший рад и бережёт тебя. Старший больше не приходит. | The youngest is glad and looks after you. The eldest stops coming. | love
out: 50 | Братья судятся до самой твоей смерти. | The brothers go to law until the day you die. | wealth-1

id: m_inherit
groups: anc med early ind mod
tags: *
need:
ages: 39-64
weight: 2
q: Похоронили мать. За столом брат объявляет: дом ему, он за ней ходил. | You have buried your mother. At the table your brother announces: the house is his, he looked after her.
door: Согласиться | Agree
out: 70 | Брат оттаивает. На праздники зовёт тебя в мамин дом. | Your brother softens. On holidays he invites you to your mother's house. | kind
out: 30 | Через год он продаёт дом чужим людям. | A year later he sells the house to strangers. |
ask: Что дороже: доля или родня? | Which is dearer: your share or your kin?
door: Требовать свою долю | Demand your share
out: 40 | Делите пополам. Говорите теперь только через соседей. | You split it down the middle. Now you speak only through the neighbours. | wealth+1
out: 60 | Тяжба тянется годами. Деньги уходят на писарей и стряпчих. | The case drags on for years. The money goes on clerks and lawyers. | wealth-1
door: Уступить, но взять одну её вещь | Give way, but take one of her things
out: 100 | Ты уносишь только её старую чашку. Брат не спорит. | You take only her old cup. Your brother doesn't argue. | love

id: m_old_secret
groups: stone anc med early ind mod
tags: *
need:
ages: 51-70
weight: 1
q: Давным-давно ты {видел|видела}, кто на самом деле украл. Выгнали другого, а ты {промолчал|промолчала}. Оба ещё живы. | Long ago you saw who really stole. Another was driven out, and you kept quiet. Both are still alive.
door: Рассказать всем | Tell everyone
out: 50 | Изгнанный плачет и обнимает тебя. Тот, другой, отворачивается. | The one who was driven out weeps and embraces you. The other turns away. | brave kind
out: 50 | Тебе не верят: старость, мол, всё путает. | Nobody believes you: old age muddles everything, they say. | brave
ep: Перед смертью {сказал|сказала} правду. | Told the truth before dying.
ask: О чём ещё не поздно сказать? | What is it not too late to tell?
door: Сказать только тому, кого выгнали | Tell only the one who was driven out
out: 70 | Он долго молчит, потом говорит: «Я знал». | He is silent a long time, then says: "I knew." | kind
out: 30 | Он не прощает. Ни тебя, ни того. | He forgives neither you nor the other. |
door: Унести с собой | Take it with you
out: 100 | Ты молчишь и дальше. По ночам подолгу не спишь. | You go on keeping quiet. At night you lie awake for a long time. |

id: m_second_marriage
groups: anc med early ind mod
tags: *
need: single
ages: 51-70
weight: 1
q: {Вдова|Вдовец} с соседней улицы зовёт тебя жить вместе. Говорит: вдвоём теплее. | A {widow|widower} from the next street asks you to live together. Two are warmer than one, {she|he} says.
door: Согласиться | Say yes
out: 60 | Вы сходитесь без свадьбы и шума. По вечерам вам хорошо молчать вдвоём. | You come together without a wedding or fuss. In the evenings you are good at being quiet together. | love married
out: 40 | Дети против: делят дом ещё при живых. Вы всё равно вместе. | The children object: they're dividing up the house while you still live. You're together anyway. | love married
ep: На старости лет {полюбил|полюбила} снова. | Fell in love again in old age.
ask: Для чего никогда не поздно? | What is it never too late for?
door: Отказать | Say no
out: 70 | Вы так и остаётесь соседями. Иногда {она|он} заходит с пирогом. | You stay neighbours. Sometimes {she|he} drops by with a pie. |
out: 30 | Зимой одиноко. Ты разговариваешь с кошкой. | Winter is lonely. You talk to the cat. |

id: m_grandson
groups: ind mod
tags: *
need: kids grown
ages: 51-70
weight: 2
q: Дочь уезжает на заработки в город и оставляет тебе сына. На год, говорит, может, на два. | Your daughter is going to the city for work and leaving her son with you. A year, she says, maybe two.
door: Взять внука | Take the boy
out: 70 | Ты снова встаёшь в шесть, водишь в школу, проверяешь уроки. Тебе снова сорок. | You're up at six again, taking him to school, checking his homework. You feel forty again. | love kind
out: 30 | Сил не хватает. Мальчик растёт сам по себе, на улице. | Your strength isn't enough. The boy grows up on his own, in the street. | kind
ep: {Вырастил|Вырастила} внука. | Raised a grandson.
ask: Кто растил тебя, кроме родителей? | Who raised you, besides your parents?
door: Сказать, чтобы взяла его с собой | Tell her to take him with her
out: 50 | Они уезжают вдвоём. Звонят по воскресеньям. | They leave together. They call on Sundays. |
out: 50 | Дочь так и не уезжает. Денег в доме меньше, ссор больше. | Your daughter doesn't go after all. Less money in the house, more quarrels. | wealth-1

id: m_home_village
groups: anc med early ind
tags: *
need:
ages: 51-70
weight: 1
q: Пока ноги ходят, хочется ещё раз увидеть деревню, где ты {родился|родилась}. Путь неблизкий. | While your legs still carry you, you want to see the village where you were born once more. It's a long way.
door: Пойти | Go
shut: poor | Денег на дорогу нет. | There's no money for the journey.
shut: r0 | Тебя никто не отпустит. | No one will let you go.
out: 60 | Дом другой, люди другие. Но речка та же, и ты долго стоишь у воды. | The house is different, the people are different. But the stream is the same, and you stand by the water a long time. |
out: 25 | У колодца тебя окликают детским прозвищем. | At the well someone calls you by your childhood name. | love
out: 15 | В дороге ты {заболел|заболела}. | You fall ill on the road. | risk20
ep: Перед смертью {повидал|повидала} родную деревню. | Saw the home village once more before dying.
ask: Куда тянет вернуться? | Where do you long to go back to?
door: Остаться | Stay
out: 100 | Ты рассказываешь о той деревне всем, кто готов слушать. | You tell anyone who'll listen about that village. |

id: m_move_to_children
groups: mod
tags: *
need: kids !town grown
ages: 58-70
weight: 1
q: Дети зовут к себе в город: {одному|одной} в деревне тебе тяжело. Квартира на девятом этаже. | The children want you to move to the city: it's hard for you alone in the village. The flat is on the ninth floor.
door: Переехать к детям | Move in with the children
out: 60 | Лифт, балкон, внуки за стенкой. Ты скучаешь по огороду и сажаешь лук в ящике. | A lift, a balcony, grandchildren through the wall. You miss your garden and plant onions in a box. | moved town love
out: 40 | Ты никому не мешаешь и молчишь целыми днями. | You're in nobody's way, and you say nothing for days on end. | moved town
ask: Где твой дом, если честно? | Where is your home, honestly?
door: Остаться у себя | Stay put
out: 70 | Соседка заглядывает каждый день. Дети звонят по воскресеньям. | The neighbour looks in every day. The children call on Sundays. |
out: 30 | Зимой ты падаешь во дворе и час лежишь на снегу. | In winter you fall in the yard and lie in the snow for an hour. | risk20

id: m_compostela
groups: med
tags: eu fr de it en
need:
ages: 39-64
weight: 1
q: Соседи собираются в Компостелу, к святому Иакову. Туда и обратно — полгода пешком. | The neighbours are setting off for Compostela, to Saint James. There and back is half a year on foot.
door: Идти с ними | Go with them
shut: r0 | Господин не отпустит тебя на полгода. | Your lord won't let you go for half a year.
out: 60 | Пыль, монастыри, чужие языки. Ты возвращаешься с ракушкой на шляпе. | Dust, monasteries, strange tongues. You come home with a scallop shell on your hat. | faith moved
out: 25 | В горах вас грабят. Дальше идёте с пустыми сумами и просите хлеба. | In the mountains you are robbed. You go on with empty bags, begging bread. | faith risk10
out: 15 | В пути лихорадка. До святого доходят не все. | Fever on the road. Not everyone reaches the saint. | faith risk35
ep: {Дошёл|Дошла} до святого Иакова. | Walked to Saint James.
ask: Куда бы пойти пешком, будь у тебя полгода? | Where would you walk if you had half a year?
door: Дать денег на свечу и остаться | Give money for a candle and stay
out: 100 | Соседи ставят свечу и за тебя. Пока их нет, ты убираешь их хлеб. | The neighbours light a candle for you too. While they're away, you bring in their harvest. | kind

id: m_biwa
groups: med
tags: jp
need: !town
ages: 19-64
weight: 1
q: В деревню забрёл слепой монах с бивой. Споёт о гибели дома Тайра, если накормят. А год неурожайный. | A blind monk with a biwa has wandered into the village. He'll sing of the fall of the Taira if he's fed. And the harvest was poor.
door: Отдать горсть риса | Give a handful of rice
out: 70 | Всю ночь он поёт, и вся деревня плачет о чужих героях. | All night he sings, and the whole village weeps for other people's heroes. | kind faith
out: 30 | Утром он уходит, а риса потом не хватает на неделю. | In the morning he goes, and later you run a week short of rice. | kind wealth-1
ask: За какую песню не жалко отдать последнее? | What song is worth giving your last for?
door: Пожалеть рис | Keep the rice
out: 100 | Его голос слышен из соседнего дома. Слов не разобрать. | You hear his voice from the house next door. You can't make out the words. |

id: m_fire_next_door
groups: med early
tags: ru
need: !town
ages: 19-64
weight: 1
q: Ночью загорелся соседский двор. Ветер несёт искры на твою крышу. | At night the neighbour's yard catches fire. The wind carries sparks onto your roof.
door: Бежать с вёдрами к соседу | Run to the neighbour's with buckets
out: 50 | Отстояли всей улицей. Сосед потом весь год зовёт тебя {кумом|кумой}. | The whole street saves it. All year the neighbour calls you kin. | kind brave
out: 30 | Сгорел его двор, а за ним и твой. Зимуете вместе в одной бане. | His yard burns, and yours after it. You winter together in one bathhouse. | kind wealth-2
out: 20 | С крыши рушится горящая балка. | A burning beam crashes down from the roof. | risk25 brave
ask: Чей дом бросишься спасать прежде своего? | Whose house would you run to save before your own?
door: Поливать свою крышу и выносить добро | Soak your own roof and carry your things out
out: 70 | Твоя изба цела. Сосед стоит на пепелище и не смотрит на тебя. | Your house stands. The neighbour stands in the ashes and won't look at you. |
out: 30 | Огонь всё равно перекидывается. Спасли только икону и корову. | The fire jumps anyway. Only the icon and the cow are saved. | wealth-2

id: m_feet
groups: med early
tags: cn
need: kids after:1100 !town
ages: 27-39
weight: 1
q: Дочери пять лет. Старшие в доме говорят: пора бинтовать ноги, иначе в хорошую семью её не возьмут. | Your daughter is five. The elders of the house say it is time to bind her feet, or no good family will take her.
door: Бинтовать | Bind them
out: 60 | Год она плачет по ночам. Потом ходит мелкими шажками, и сваха довольна. | For a year she cries at night. Then she walks in tiny steps, and the matchmaker is pleased. | wealth+1
out: 40 | Ступня гноится. Месяц девочка горит в жару. | The foot festers. For a month the girl burns with fever. |
door: Не бинтовать | Leave them unbound
shut: f | Решаешь не ты, а свекровь. | It is not your decision but your mother-in-law's.
out: 50 | Она бегает по двору с братьями. Свахи из хороших домов не идут. | She runs about the yard with her brothers. No matchmakers come from the good houses. | love
out: 50 | Её берут в семью, где нужны руки в поле. Она работает и не жалуется. | She is taken into a family that needs hands in the fields. She works and doesn't complain. |
ep: Не дал бинтовать ноги дочери. | Would not let his daughter's feet be bound.
door: Бинтовать, но некрепко | Bind them, but loosely
out: 70 | Ноги у неё «половинные». Ходит сама, сваха морщится. | She has "half" feet. She walks on her own; the matchmaker frowns. |
out: 30 | Бабка замечает и перебинтовывает сама. | Her grandmother notices and rebinds them herself. |
ask: Какую боль терпят ради чужого одобрения? | What pain is borne for other people's approval?

id: m_cloves
groups: med early
tags: sea
need: !town
ages: 19-39
weight: 1
q: Капитан торгового судна набирает гребцов до островов, где растёт гвоздика. Месяц по морю. | A trading captain is hiring rowers for the islands where cloves grow. A month at sea.
door: Наняться | Sign on
shut: f | Женщин на судно не берут. | Women aren't taken aboard.
out: 50 | Острова пахнут гвоздикой за день до берега. Ты привозишь матери мешочек. | You smell the cloves a day before landfall. You bring your mother a little bag. | sea wealth+1
out: 30 | У пролива пираты. Судно уходит, но двое гребцов остаются в воде. | Pirates at the strait. The ship gets away, but two rowers stay in the water. | sea risk20 brave
out: 20 | Ты остаёшься на островах: там девушка и кокосовая роща. | You stay on the islands: there's a girl and a coconut grove. | sea moved love
ask: Какой запах зовёт в дорогу? | What smell calls you to the road?
door: Остаться на рисовом поле | Stay in the rice field
out: 100 | Вода по щиколотку, буйвол медленный. Гвоздику ты пробуешь на свадьбе сестры. | Ankle-deep water, a slow buffalo. You taste cloves at your sister's wedding. |

id: m_baghdad
groups: med
tags: me
need: after:820 before:1250
ages: 19-27
weight: 1
q: Дядя служит в Доме мудрости в Багдаде: там переводят книги греков. Ему нужен переписчик. | Your uncle works in the House of Wisdom in Baghdad, where they translate the books of the Greeks. He needs a copyist.
door: Ехать в Багдад | Go to Baghdad
shut: !lit | Писать ты не умеешь. | You can't write.
shut: f | Девушку туда не возьмут. | They won't take a girl there.
out: 70 | Ты переписываешь Евклида и не понимаешь и половины. Потом понимаешь. | You copy Euclid without understanding half of it. Then you do. | town moved wealth+1
out: 30 | От лампы слабеют глаза. Через десять лет строку едва видно. | Your eyes weaken in the lamplight. In ten years you can barely see the line. | town moved
ep: Переписывал в Багдаде книги греков. | Copied the books of the Greeks in Baghdad.
door: Остаться при отцовской лавке | Stay in your father's shop
out: 100 | Финики, весы, соседские долги. Дядины письма читают вслух всей улице. | Dates, scales, the neighbours' debts. Your uncle's letters are read aloud to the whole street. |
ask: Какую книгу хотелось бы переписать от руки? | Which book would you like to copy out by hand?

id: m_rainmaker
groups: anc med early
tags: af
need: !town
ages: 27-64
weight: 1
q: Третий месяц нет дождя. Вызыватель дождя просит с каждого двора по козе за обряд. | No rain for three months. The rainmaker asks a goat from every household for the rite.
door: Отдать козу | Give a goat
shut: poor | Козы у тебя нет. | You have no goat.
out: 50 | Через три дня гремит гром. Все пляшут под ливнем. | Three days later the thunder rolls. Everyone dances in the downpour. | faith
out: 50 | Обряд прошёл, а небо чистое. Козу съели. | The rite is done, and the sky stays clear. The goat was eaten. | faith wealth-1
ask: Во что верится на всякий случай? | What do you believe in, just in case?
door: Не давать | Refuse
out: 60 | Дождь приходит сам, через неделю. Вызыватель говорит, что это его работа. | The rain comes by itself a week later. The rainmaker says it was his doing. |
out: 40 | Соседи шепчутся, что небо сухое из-за тебя. | The neighbours whisper that the sky is dry because of you. |
door: Копать колодец глубже | Dig the well deeper
out: 60 | На глубине трёх ростов сырая глина, потом вода. | Three men deep there's wet clay, then water. | brave
out: 40 | Стенка осыпается. | The wall caves in. | risk20 brave

id: m_master_widow
groups: med early
tags: eu fr de it en
need: m r2
ages: 19-39
weight: 1
q: Умер твой мастер. Вдова, старше тебя на пятнадцать лет, предлагает пожениться — тогда мастерская твоя. | Your master has died. His widow, fifteen years older than you, offers to marry you, and the workshop would be yours.
door: Жениться | Marry her
shut: married | Ты уже женат. | You're already married.
out: 60 | Ты мастер с цеховой печатью. Она учит тебя вести книги и не ворчит. | You're a master with the guild seal. She teaches you to keep the books and doesn't nag. | wealth+2 married
out: 40 | Дело идёт, а дома тихо и холодно. | The business does well, and the house is quiet and cold. | wealth+1 married
door: Уйти странствовать подмастерьем | Go on the road as a journeyman
out: 70 | Три года чужих городов и мастерских. | Three years of strange towns and workshops. | moved town
out: 30 | Своего у тебя так ничего и не будет. | You never have anything of your own. | moved
ask: От чего можно отказаться ради свободы? | What would you give up to stay free?

id: m_kentucky
groups: early
tags: us
need: after:1775 before:1820 !town
ages: 19-39
weight: 1
q: Сосед продал ферму и уходит за горы, в Кентукки. Говорит, земля там чёрная, как порох. | Your neighbour has sold his farm and is going over the mountains to Kentucky. He says the soil there is black as gunpowder.
door: Продать всё и идти с ним | Sell up and go with him
shut: r0 | Тебя самого продают и покупают. | You yourself are bought and sold.
out: 50 | Год в шалаше из жердей, потом бревенчатый дом и кукуруза выше головы. | A year in a pole shelter, then a log house and corn over your head. | moved wealth+1
out: 30 | Земля чёрная, но лихорадка валит всю семью по очереди. | The soil is black, but the ague lays the whole family low in turn. | moved risk20
out: 20 | Из леса стреляют: на этой земле уже живут. | Shots from the woods: people already live on this land. | moved risk25
ask: Чья земля была под твоим домом раньше? | Whose land was under your house before?
door: Остаться на старой ферме | Stay on the old farm
out: 100 | Земля здесь каменистая, но своя. Письма из Кентукки приходят раз в год. | The soil here is stony, but it's yours. Letters come from Kentucky once a year. |

id: m_fiesta
groups: early ind mod
tags: latam
need:
ages: 39-51
weight: 1
q: Деревня выбрала тебя устроителем праздника святого. Почёт на всю жизнь, но ракеты, музыку и угощение оплачиваешь ты. | The village has chosen you to sponsor the saint's fiesta. Honour for life, but the rockets, the band and the food are on you.
door: Принять | Accept
out: 60 | Три дня музыки, ракет и танцев. Ты в долгах на два года, и все кланяются тебе на улице. | Three days of music, rockets and dancing. You're in debt for two years, and everyone bows to you in the street. | wealth-2 faith
out: 40 | Половину стада приходится продать. Зато святого несут мимо твоего дома. | Half the herd has to be sold. But the saint is carried past your house. | wealth-2 faith
ep: {Справил|Справила} праздник святого на всю деревню. | Threw the saint's fiesta for the whole village.
ask: На что не жалко потратить всё? | What is worth spending everything on?
door: Отказаться | Decline
out: 70 | Выбирают соседа. Ты пляшешь на его празднике и считаешь его ракеты. | They choose your neighbour. You dance at his fiesta and count his rockets. |
out: 30 | Говорят, святой обиделся. Весной у тебя падает мул. | They say the saint is offended. In spring your mule dies. | wealth-1

id: m_photograph
groups: ind
tags: *
need: after:1860
ages: 27-64
weight: 1
q: На ярмарку приехал фотограф. Карточка всей семьёй стоит недельного заработка. | A photographer has come to the fair. A family picture costs a week's wages.
door: Сняться всей семьёй | Have the whole family taken
shut: poor | Недельного заработка у тебя в руках не бывало. | You've never held a week's wages in your hands.
out: 70 | Все замерли, младший моргнул. Карточка сто лет висит над столом. | Everyone holds still; the youngest blinks. The picture hangs over the table for a hundred years. | love wealth-1
out: 30 | Карточка вышла тёмной, лиц почти не видно. Всё равно висит на стене. | The picture comes out dark, the faces barely visible. It goes on the wall anyway. | wealth-1
ask: Какую фотографию стоит спасти из огня? | Which photograph is worth saving from a fire?
door: Пожалеть денег | Keep the money
out: 100 | Деньги ушли на сапоги. Лица родителей потом приходится вспоминать. | The money goes on boots. Later you have to work to remember your parents' faces. |

id: m_khadi
groups: ind
tags: in
need: kids after:1919 before:1947
ages: 27-64
weight: 1
q: Конгресс зовёт жечь английскую ткань на площади. В сундуке у тебя три отреза манчестерского ситца — на свадьбу дочери. | Congress calls for English cloth to be burned in the square. In your chest are three lengths of Manchester calico, for your daughter's wedding.
door: Бросить в костёр | Throw them on the fire
out: 70 | Ситец горит быстро. Дочь выходит замуж в грубом домотканом и смеётся. | The calico burns fast. Your daughter marries in coarse homespun, laughing. | brave wealth-1
out: 30 | Полиция переписывает всех, кто стоял у костра. | The police take the names of everyone at the fire. | brave wealth-1 risk5
ep: {Сжёг|Сожгла} английский ситец на площади. | Burned English cloth in the square.
ask: От какого удобства можно отказаться ради правого дела? | What comfort would you give up for a cause?
door: Оставить на свадьбу | Keep it for the wedding
out: 60 | Свадьба в ситце. Соседи косятся, но едят и пляшут. | A wedding in calico. The neighbours look askance, but they eat and dance. |
out: 40 | Кто-то пишет углём на твоих воротах: «Здесь носят Манчестер». | Someone writes in charcoal on your gate: "Manchester is worn here." |
door: Сесть за прялку и спрясть своё | Sit down at the wheel and spin your own
out: 100 | Нитка рвётся, пальцы в мозолях. К свадьбе готов один отрез — твой. | The thread snaps, your fingers blister. By the wedding one length is ready: yours. | brave

id: m_silk_mill
groups: ind
tags: jp
need: kids after:1880 before:1940 !town
ages: 39-51
weight: 1
q: Вербовщик с шёлковой фабрики в Нагано даёт задаток за дочь: год работы. Деньги нужны на земельный налог. | A recruiter from a silk mill in Nagano offers an advance for your daughter: a year's work. The money would pay the land tax.
door: Взять задаток | Take the advance
out: 50 | Через год она возвращается с деньгами и кашлем. | A year later she comes home with money and a cough. | wealth+1
out: 30 | Она остаётся в городе, пишет редко, потом выходит там замуж. | She stays in the town, writes seldom, then marries there. | wealth+1
out: 20 | Зимой приходит письмо: в общежитии чахотка. | In winter a letter comes: consumption in the dormitory. | kids-1 wealth+1
door: Отказать и заложить землю | Refuse and mortgage the land
out: 60 | Через пять лет землю удаётся выкупить. Дочь всё это время рядом. | In five years you manage to buy the land back. Your daughter is by your side all along. | wealth-1 love
out: 40 | Выкупить не выходит. Теперь вы арендуете своё же поле. | You can't buy it back. Now you rent your own field. | wealth-2
ask: Чьим будущим платили за твоё настоящее? | Whose future has paid for your present?

id: m_bank_run
groups: ind
tags: us en de fr
need: after:1929 before:1934
ages: 27-64
weight: 1
q: Говорят, банк в городе вот-вот лопнет. Там всё, что ты {отложил|отложила} за двенадцать лет. | They say the bank in town is about to fail. Everything you've saved in twelve years is in it.
door: Ехать и забирать деньги | Go and take the money out
out: 50 | Очередь до угла. Ты {успел|успела}: кассир отдаёт последнюю пачку. | A queue round the corner. You make it: the teller hands over the last bundle. |
out: 50 | Двери заперты, на них приколота бумажка. | The doors are locked, with a notice pinned to them. | wealth-2
door: Верить банку | Trust the bank
out: 30 | Банк выстоял. Ты спокойно ждёшь, пока утихнет паника. | The bank holds. You wait calmly for the panic to pass. |
out: 70 | Банк лопнул. Двенадцать лет — за одну ночь. | The bank fails. Twelve years gone in a night. | wealth-2
ask: Кому можно доверить отложенное? | Whom can you trust with what you've saved?

id: m_scam_call
groups: mod
tags: *
need: kids grand
ages: 58-70
weight: 1
q: Звонок с чужого номера: внук попал в аварию, деньги нужны прямо сейчас. Голос в трубке плачет. | A call from an unknown number: your grandson has had an accident, the money is needed right now. The voice on the line is crying.
door: Собрать деньги и отдать курьеру | Gather the money and give it to the courier
out: 70 | Вечером внук звонит сам, весёлый. Денег нет, и детям стыдно сказать. | In the evening your grandson calls himself, cheerful. The money's gone, and you're too ashamed to tell the children. | wealth-2
out: 30 | Соседка видит курьера и вызывает полицию. Деньги возвращают. | The neighbour sees the courier and calls the police. You get the money back. |
door: Положить трубку и позвонить внуку | Hang up and call your grandson
out: 90 | Внук на лекции, всё хорошо. Ты час не можешь успокоиться. | Your grandson is in a lecture, all fine. It takes you an hour to calm down. |
out: 10 | Внук не берёт трубку. До вечера ты обзваниваешь больницы. Потом он перезванивает. | Your grandson doesn't answer. You ring round the hospitals till evening. Then he calls back. |
ask: Кому звонишь, когда страшно? | Whom do you call when you're scared?

id: m_county_flat
groups: mod
tags: cn
need: kids
ages: 51-64
weight: 1
q: Невеста сына ставит условие: квартира в уездном городе. Это все ваши сбережения и долг у родни. | Your son's bride has a condition: a flat in the county town. That's all your savings and a loan from the relatives.
door: Купить квартиру | Buy the flat
out: 60 | Свадьба на сорок столов. Долг ты отдаёшь до самой старости. | A wedding with forty tables. You pay off the debt into old age. | wealth-2
out: 40 | Молодые уезжают на заработки, квартира стоит пустая. Ключи у тебя. | The young couple go off to work elsewhere, and the flat stands empty. You keep the keys. | wealth-2
ask: Что хочется дать детям из того, чего не было у самих? | What do you want to give your children that you never had?
door: Отказать | Refuse
out: 50 | Свадьба расстраивается. Сын год с тобой не разговаривает. | The wedding falls through. Your son doesn't speak to you for a year. |
out: 50 | Невеста уступает. Пока живут у вас, в его старой комнате. | The bride gives way. For now they live with you, in his old room. | love

id: m_caste_love
groups: mod
tags: in
need: kids
ages: 39-64
weight: 1
q: Дочь говорит, что выйдет только за однокурсника. Он из другой касты, и вся родня против. | Your daughter says she will marry no one but a fellow student. He is from another caste, and the whole family is against it.
door: Благословить | Give your blessing
out: 60 | Свадьба маленькая, половина родни не пришла. Через год все по очереди держат внука на руках. | A small wedding; half the family stays away. A year later everyone takes turns holding the grandchild. | love brave
out: 40 | Брат перестаёт приходить на праздники. Навсегда. | Your brother stops coming for the festivals. For good. | love brave
ep: {Благословил|Благословила} дочь против воли всей родни. | Blessed a daughter against the will of the whole family.
ask: Против кого из своих приходилось идти? | Whom of your own have you had to go against?
door: Запретить | Forbid it
out: 50 | Её выдают за того, кого нашли вы. Она звонит по праздникам, вежливо. | She is married to the man you found. She calls on festivals, politely. |
out: 50 | Она уходит из дома с одной сумкой. Через три года присылает фотографию малыша. | She leaves home with one bag. Three years later she sends a photo of a baby. |

id: m_greenhouses
groups: mod
tags: af
need: !town
ages: 39-64
weight: 1
q: Инвестор хочет взять родовую землю под теплицы для роз. Деньги сразу, и работа в теплицах тоже. | An investor wants the family land for rose greenhouses. Money now, and jobs in the greenhouses too.
door: Подписать | Sign
shut: f | Землю делят мужчины рода. Твоей подписи никто не ждёт. | The men of the family divide the land. Nobody is waiting for your signature.
out: 50 | Деньги уходят на школу для детей и новую крышу. Ты срезаешь розы для Европы. | The money goes on the children's school and a new roof. You cut roses for Europe. | wealth+1
out: 50 | За два года денег не стало. Теплицы остались, земли нет. | In two years the money is gone. The greenhouses remain; the land doesn't. | wealth-1
ask: Что можно продать только один раз? | What can only be sold once?
door: Не продавать | Don't sell
out: 70 | Кукуруза и бобы, как при деде. Сыновья уезжают в город. | Maize and beans, as in grandfather's day. The sons leave for the city. |
out: 30 | Сосед продал, и теперь ручей пахнет удобрениями. | The neighbour sold, and now the stream smells of fertiliser. |

id: m_empty_house
groups: mod
tags: jp
need: kids
ages: 58-70
weight: 1
q: Дети в Токио и не вернутся. Сельская управа ищет дома для молодых семей из города. | The children are in Tokyo and won't be back. The village office is looking for houses for young families from the city.
door: Пустить семью и жить во флигеле | Let a family in and live in the annex
out: 70 | У них двое детей и собака. Ты учишь их сажать рис, они тебя — обращаться с телефоном. | They have two children and a dog. You teach them to plant rice; they teach you the phone. | kind love
out: 30 | Через год им становится скучно, и они уезжают. В доме снова тихо. | After a year they get bored and leave. The house is quiet again. | kind
ask: Кому достанется твой дом? | Who will your house go to?
door: Ждать детей | Wait for the children
out: 60 | Сын приезжает на Обон, моет могилы и уезжает. | Your son comes for Obon, washes the graves and leaves. |
out: 40 | Внук говорит, что будет жить здесь, когда вырастет. Ты записываешь это на календаре. | Your grandson says he'll live here when he grows up. You write it on the calendar. | love

id: m_shuttle
groups: mod
tags: ru
need: after:1991 before:2000 !town
ages: 27-51
weight: 1
q: Завод стоит, зарплату дают кастрюлями. Знакомая зовёт челноком в Стамбул: туда с пустыми сумками, обратно с кожанками. | The factory has stopped; wages are paid in saucepans. A friend asks you to go shuttle-trading to Istanbul: out with empty bags, back with leather jackets.
door: Ехать | Go
shut: poor | На первую поездку нужны деньги, а у тебя только кастрюли. | The first trip takes money, and all you have is saucepans.
out: 50 | Клетчатые сумки, рынок на стадионе, своё место в ряду. Дети одеты. | Checked bags, the stadium market, a pitch of your own. The children have clothes. | wealth+1 sea
out: 30 | На таможне отбирают половину. Остальное уходит на долги. | Customs takes half. The rest goes on debts. | wealth-1 sea
out: 20 | На трассе останавливают бандиты. Ты отдаёшь всё и рад{|а}, что {жив|жива}. | Bandits stop you on the highway. You hand over everything and are glad to be alive. | wealth-2 risk5
ask: Чему пришлось научиться, когда всё рухнуло? | What did you have to learn when everything fell apart?
door: Ждать, пока завод заработает | Wait for the factory to start again
out: 40 | Через три года завод оживает. Тебя берут обратно, на ту же смену. | In three years the factory comes back to life. You're taken back, on the same shift. |
out: 60 | Завод режут на металл. Всю семью кормит огород. | The factory is cut up for scrap. The vegetable plot feeds the family. | wealth-1

id: m_mother_memory
groups: mod
tags: *
need:
ages: 39-64
weight: 2
q: Мать перестала узнавать соседей и дважды забыла выключить газ. Одной ей жить нельзя. | Your mother no longer knows the neighbours and has twice left the gas on. She can't live alone.
door: Забрать к себе | Take her in
out: 50 | Она живёт в твоей комнате и зовёт тебя именем сестры. По вечерам вы поёте старые песни. | She lives in your room and calls you by your sister's name. In the evenings you sing old songs together. | kind love
out: 50 | По ночам она бродит по квартире. Через год ты {сам|сама} едва держишься на ногах. | At night she wanders the flat. After a year you can barely stand yourself. | kind risk5
ep: До конца {ухаживал|ухаживала} за матерью. | Cared for a mother to the end.
ask: Кто будет рядом, когда станет трудно? | Who will be beside you when things get hard?
door: Нанять сиделку | Hire a carer
shut: poor | Сиделка стоит больше, чем ты зарабатываешь. | A carer costs more than you earn.
out: 70 | Сиделка добрая и строгая. Ты приезжаешь по выходным и привозишь её любимые пряники. | The carer is kind and firm. You come at weekends with your mother's favourite gingerbread. | wealth-1
out: 30 | Сиделки меняются каждые три месяца. Мать каждый раз пугается. | The carers change every three months. Each time your mother is frightened. | wealth-1
door: Устроить в казённый интернат | Get her into a state home
out: 60 | Ты ездишь к ней по субботам. Она радуется тебе, как гостю. | You visit her on Saturdays. She is glad to see you, as if you were a guest. |
out: 40 | Шесть коек в палате. Родня шепчется, что ты сдал{|а} мать. | Six beds to a ward. The family whispers that you've put your mother away. |

id: m_hong_kong
groups: mod
tags: sea
need: f kids
ages: 27-39
weight: 1
q: Агентство набирает домработниц в Гонконг. Два года, платят впятеро больше. Детей придётся оставить. | An agency is hiring maids for Hong Kong. Two years, five times the pay. You'd have to leave the children.
door: Ехать | Go
shut: !lit | Анкету надо заполнить по-английски, а ты и на своём не пишешь. | The form has to be filled in in English, and you can't write even in your own language.
out: 60 | По воскресеньям сидишь на площади с такими же, как ты. Дома строят второй этаж. | On Sundays you sit in the square with others like you. At home a second storey goes up. | moved town wealth+2
out: 40 | При встрече младший прячется за бабушку. | When you come back, your youngest hides behind his grandmother. | moved town wealth+1
ep: Два года мыла чужие полы, чтобы дети учились. | Scrubbed strangers' floors for two years so the children could study.
ask: Что упущено ради заработка? | What has been missed for the sake of a wage?
door: Остаться | Stay
out: 70 | Рынок, рис, дети под боком. Старшему на учёбу не хватает. | The market, rice, the children close by. There isn't enough for the eldest's schooling. | love
out: 30 | Вместо тебя уходит муж — матросом на девять месяцев. | Your husband goes instead, as a sailor, for nine months. |

id: m_loan_friend
groups: med early ind mod
tags: *
need:
ages: 19-64
weight: 2
q: Друг детства просит в долг. Прошлый он так и не вернул. | A childhood friend asks for a loan. He never paid back the last one.
door: Дать | Lend it
shut: poor | Тебе бы кто дал. | You could do with a loan yourself.
out: 40 | Он возвращает всё и ещё приносит гостинцев. | He pays it all back and brings presents besides. | kind
out: 60 | Денег ты больше не видишь. Друга тоже. | You never see the money again. Or the friend. | kind wealth-1
ask: Кому можно дать в долг, не надеясь на возврат? | Whom would you lend to without expecting it back?
door: Отказать | Refuse
out: 60 | Он кивает: понимаю. Но на свадьбу дочери тебя не зовёт. | He nods: I understand. But he doesn't invite you to his daughter's wedding. |
out: 40 | Он занимает у другого и выкручивается. Через год вы снова друзья. | He borrows elsewhere and gets by. A year later you are friends again. |

id: m_foundling
groups: anc med early ind
tags: *
need:
ages: 27-51
weight: 1
q: Утром у порога корзина. В ней младенец, завёрнутый в чужую рубаху. | In the morning there's a basket on the doorstep. In it, a baby wrapped in a stranger's shirt.
door: Оставить себе | Keep it
shut: r0 | Ты и {сам|сама} себе не принадлежишь: ребёнка заберёт хозяин. | You don't even belong to yourself: the master would take the child.
out: 70 | Ребёнок растёт у вас как свой. О корзине никто не вспоминает вслух. | The child grows up with you as your own. Nobody mentions the basket aloud. | kids+1 love kind
out: 30 | Через три года приходит женщина и плачет у калитки. | Three years later a woman comes and weeps at the gate. | kids+1 kind
ep: {Вырастил|Вырастила} подкидыша. | Raised a foundling.
ask: Кого можно назвать своим не по крови? | Whom can you call your own, not by blood?
door: Отнести туда, где берут подкидышей | Take it where foundlings are taken in
out: 60 | Тебе говорят, что о нём позаботятся. Как — ты не спрашиваешь. | They tell you it'll be looked after. You don't ask how. |
out: 40 | Иногда ты приходишь посмотреть на него издали. | Sometimes you come to look at it from a distance. | kind
door: Искать мать | Look for the mother
out: 50 | Ты находишь её: шестнадцать лет, одна. Помогаешь чем можешь. | You find her: sixteen and alone. You help however you can. | kind
out: 50 | Никто ничего не знает. Всю дорогу младенец кричит у тебя на руках. | Nobody knows anything. The whole way the baby screams in your arms. |

id: m_children_feud
groups: med early ind mod
tags: *
need: kids
ages: 58-70
weight: 1
q: Двое твоих детей не разговаривают друг с другом десять лет. Из-за чего, толком уже никто не помнит. | Two of your children haven't spoken to each other for ten years. Nobody quite remembers why.
door: Позвать обоих, не предупредив | Invite them both without telling either
out: 50 | Сначала молчат, потом спорят, потом смеются над старой историей. | At first they're silent, then they argue, then they laugh about the old story. | love
out: 50 | Старший разворачивается в дверях. Младший остаётся и ужинает с тобой. | The elder turns round in the doorway. The younger stays and has supper with you. |
ask: С кем пора помириться? | Whom is it time to make peace with?
door: Не вмешиваться | Stay out of it
out: 100 | Они приходят к тебе по очереди, в разные дни. Встретятся на похоронах. | They visit you in turns, on different days. They'll meet at the funeral. |

id: m_apprentice_old
groups: anc med early ind
tags: *
need: r2 kids grown
ages: 51-70
weight: 1
q: Чужой парень просится к тебе в ученики. Твои дети за ремесло так и не взялись. | A lad from outside the family asks to be your apprentice. Your own children never took up the trade.
door: Взять и учить всему | Take him and teach him everything
out: 60 | Через пять лет его работу не отличить от твоей. На вывеске теперь два имени. | In five years his work can't be told from yours. There are two names on the sign now. | kind
out: 40 | Выучившись, он открывает свою лавку через улицу. | Once he's trained, he opens his own shop across the street. | wealth-1
ep: {Передал|Передала} ремесло в чужие руки. | Handed the trade on to other hands.
ask: Что умеешь такого, чему стоит научить? | What do you know that's worth teaching?
door: Учить, но не всему | Teach him, but not everything
out: 100 | Самый главный секрет ты оставляешь себе. | The main secret you keep to yourself. |
door: Отказать | Refuse
out: 100 | Мастерская закроется вместе с тобой. | The workshop will close when you do. |

id: m_ox
groups: anc med early
tags: *
need: !town
ages: 27-64
weight: 1
q: У соседа пал вол. В самую пахоту ему не на чем пахать, и он просит твоего. | Your neighbour's ox has died. At the height of ploughing he has nothing to plough with, and he asks for yours.
door: Дать вола после своей пахоты | Lend the ox once you've ploughed
shut: poor | Вола у тебя нет. Ты и {сам|сама} просишь у людей. | You have no ox. You borrow from others yourself.
out: 60 | Сосед сеет на неделю позже, но сеет. Осенью приносит мешок зерна. | The neighbour sows a week late, but he sows. In autumn he brings you a sack of grain. | kind
out: 40 | Вол надрывается и хромает до зимы. | The ox strains itself and limps until winter. | kind wealth-1
door: Дать сразу, а своё вспахать после | Lend it now and plough your own later
shut: poor | Вола у тебя нет. Ты и {сам|сама} просишь у людей. | You have no ox. You borrow from others yourself.
out: 50 | Его поле всходит дружно. Твоё так себе. | His field comes up evenly. Yours, so-so. | kind wealth-1
out: 50 | Дождь приходит вовремя для обоих. В деревне это запомнят. | The rain comes in time for both. The village won't forget it. | kind
ep: {Отдавал|Отдавала} соседу своего вола в самую пахоту. | Lent a neighbour the ox at the height of ploughing.
ask: Чем можно поделиться в самую горячую пору? | What can you share at the busiest time?
door: Сказать, что не можешь | Say you can't
out: 70 | Сосед впрягается в соху сам, с сыновьями. Ты отводишь глаза. | The neighbour pulls the plough himself, with his sons. You look away. |
out: 30 | Сосед продаёт тебе свою полосу за бесценок. | The neighbour sells you his strip for next to nothing. | wealth+1

id: m_wedding_debt
groups: anc med early ind
tags: *
need: kids !town grown
ages: 39-51
weight: 1
q: Дочь выходит замуж. По обычаю гулять должна вся деревня, а денег нет. | Your daughter is getting married. Custom says the whole village must feast, and there's no money.
door: Занять и гулять три дня | Borrow and feast for three days
out: 60 | Три дня гуляет вся деревня. Долг ты отдаёшь пять лет. | The whole village feasts for three days. You pay the debt off over five years. | wealth-2 love
out: 40 | Свадьба лучшая в округе. Ростовщик забирает поле. | The best wedding in the district. The moneylender takes the field. | wealth-2
ask: Какой праздник в жизни стоил своих денег? | Which celebration in your life was worth what it cost?
door: Скромно, только родня | Something small, just family
out: 70 | Соседи судачат о скупости. Молодые всё равно счастливы. | The neighbours gossip about meanness. The young couple are happy anyway. |
out: 30 | Родня жениха обижена. Дочери в новом доме это долго припоминают. | The groom's family is offended. In her new home your daughter hears about it for years. |

id: m_deserter
groups: med early ind
tags: *
need: !town
ages: 27-64
weight: 1
q: Ночью в сарае прячется беглый солдат. Совсем мальчишка. | At night a runaway soldier is hiding in your barn. Just a boy.
door: Накормить и спрятать | Feed him and hide him
out: 60 | Три дня он сидит на сеновале, потом уходит лесом. Через годы приходит письмо без подписи. | Three days in the hayloft, then he slips away through the woods. Years later a letter comes, unsigned. | kind brave
out: 40 | Его находят. Тебя забирают вместе с ним. | They find him. They take you away with him. | kind brave risk40
ep: {Спрятал|Спрятала} беглого солдата. | Hid a runaway soldier.
ask: Кого не выдать, даже если спросят? | Whom would you never give away, even if asked?
door: Дать хлеба и прогнать | Give him bread and send him off
out: 100 | До рассвета его уже нет. Дошёл ли — ты так и не узнаешь. | He's gone before dawn. Whether he made it, you'll never know. | kind
door: Сказать старосте | Tell the headman
out: 70 | Его уводят. Староста хвалит тебя при всех. | He is led away. The headman praises you in front of everyone. | wealth+1
out: 30 | Его уводят. Потом его мать приходит и молча стоит у твоей калитки. | He is led away. Later his mother comes and stands silent at your gate. |

id: m_boiler
groups: ind mod
tags: *
need: after:1900
ages: 27-51
weight: 1
q: Ты знаешь, что на заводе подделывают проверки котлов. Начальник просит подписать акт не глядя. | You know the boiler inspections at the works are being faked. The boss asks you to sign the report without looking.
door: Подписать | Sign
out: 70 | Акт подписан, премия в конверте. Котлы пока держат. | The report is signed, the bonus in an envelope. The boilers hold, for now. | wealth+1
out: 30 | Через год котёл взрывается в ночную смену. Твоя подпись в акте третья. | A year later a boiler blows on the night shift. Your signature is third on the report. | wealth-1
ask: Под чем стоит твоя подпись, хотя не стоило бы? | What bears your signature that shouldn't?
door: Отказаться и пойти выше | Refuse and go over his head
out: 40 | Приезжает комиссия, котлы меняют. Тебя переводят на склад. | Inspectors come, the boilers are replaced. You're moved to the stores. | brave
out: 60 | Тебя увольняют за нарушение дисциплины. | You're sacked for a breach of discipline. | brave wealth-1
ep: Не {подписал|подписала} ложь. | Would not sign a lie.
door: Уйти на больничный | Call in sick
out: 100 | Подписывает кто-то другой. На ночные смены ты теперь выходишь с тяжёлым сердцем. | Someone else signs. Now you go to night shifts with a heavy heart. |

id: m_monastery_old
groups: med early
tags: ru
need: !town
ages: 58-70
weight: 1
q: Подступила старость. Многие в твои годы уходят в монастырь — доживать и молиться. | Old age has come. Many at your age go into a monastery to live out their days in prayer.
door: Принять постриг | Take the vows
shut: poor | Монастырь ждёт вклада, а дать тебе нечего. | The monastery expects a gift, and you have nothing to give.
out: 70 | Келья, служба, огород. Ты молишься за всех своих поимённо. | A cell, the services, a garden. You pray for all your people by name. | faith moved
out: 30 | Дома без тебя ссорятся. Ты узнаёшь об этом от богомольцев. | At home they quarrel without you. You hear of it from pilgrims. | faith moved
ep: Последние годы {провёл|провела} в монастыре. | Spent the last years in a monastery.
ask: Где хочется провести последние годы? | Where would you like to spend your last years?
door: Остаться в семье | Stay with the family
out: 100 | Ты сидишь на печи и знаешь всё про всех. | You sit up on the stove and know everyone's business. | love
`,Se=`# Everyday forks for the later eras (early, ind, mod). Id prefix n_.
# Note: the validator splits door/out/ep/ask lines on "|", so {m|f} marks cannot be used in them;
# gendered past-tense forms are avoided, or the dilemma's need is m or f.

id: n_america
groups: early ind
tags: eu de en it fr ru
need: !town
ages: 19-39
weight: 2
q: Двоюродный брат пишет из Америки: работы много, земля дешёвая. Билет стоит как корова. | A cousin writes from America: plenty of work, cheap land. The ticket costs as much as a cow.
door: Продать корову и плыть | Sell the cow and sail
shut: poor | Коровы у тебя нет, и продать нечего. | You have no cow and nothing to sell.
out: 45 | Две недели в трюме. Потом Нью-Йорк и улица, где говорят на твоём языке. | Two weeks in the hold. Then New York, and a street where they speak your tongue. | sea moved town wealth+1
out: 35 | Земля в прерии твёрдая, зима злая. Но земля твоя. | The prairie soil is hard, the winter cruel. But the land is yours. | sea moved wealth+1
out: 20 | В трюме тиф. До берега доходят не все. | Typhus in the hold. Not everyone reaches the shore. | sea moved risk40
ep: Через океан — с одним сундуком. | Across the ocean with one trunk.
ask: Что держит тебя на месте? | What keeps you where you are?
door: Остаться | Stay
out: 70 | Корова доится. Письма из Америки читают вслух всей деревней. | The cow gives milk. The letters from America are read aloud to the whole village. |
out: 30 | Неурожай. Вспоминаешь про билет, но уже поздно. | A bad harvest. You think of the ticket, but it is too late. | wealth-1

id: n_shilling
groups: early
tags: en
need: m !town
ages: 19-27
weight: 1
q: В трактире вербовщик ставит всем пиво и кладёт на стол шиллинг: «Возьмёшь — и ты солдат короля». | In the tavern a recruiting sergeant buys the beer and lays a shilling down: "Take it and you're the King's man."
door: Взять шиллинг | Take the shilling
out: 40 | Красный мундир, сапоги, мясо по воскресеньям. Тебя отправляют за море. | A red coat, boots, meat on Sundays. They ship you over the sea. | sea moved brave
out: 35 | Фландрия. Грязь, лихорадка и ядро в двух шагах от тебя. | Flanders. Mud, fever, and a cannonball two steps from you. | moved brave risk30
out: 25 | Через семь лет приходишь домой с пенсией в три пенса и без пальца. | Seven years on you come home with a threepenny pension and a finger short. | wealth+1
ep: Служил королю за шиллинг. | Served the King for a shilling.
door: Допить и уйти | Finish the beer and go
out: 80 | Утром голова тяжёлая, но ты дома. Пора пахать. | Your head is heavy in the morning, but you're home. Time to plough. |
out: 20 | Монету тебе всё-таки подкинули в кружку. Утром уводят силой. | They slipped the coin into your mug after all. In the morning they take you by force. | moved risk20

id: n_rekrut
groups: early
tags: ru
need: m
ages: 19-39
weight: 1
q: Барин велел дать со двора рекрута. Служить двадцать пять лет. Брат женат, у него трое детей. | The master wants a recruit from your household. Twenty-five years of service. Your brother is married, with three children.
door: Пойти вместо брата | Go in your brother's place
shut: married kids | Мир не пустит: у тебя самого дети. | The village won't allow it: you have children of your own.
out: 50 | Провожают тебя с воем, как покойника. Кавказ, лихорадка, штыки. | They see you off wailing, as if you were dead. The Caucasus, fever, bayonets. | moved brave kind free risk25
out: 50 | Из солдат выходишь вольным и седым. В деревне тебя уже никто не узнаёт. | You leave the army free and grey. Nobody in the village knows you any more. | moved kind free
ep: Пошёл в солдаты за брата. | Went for a soldier in his brother's place.
ask: За кого не жалко отдать годы? | Whom would you give years of your life for?
door: Промолчать | Keep quiet
out: 60 | Брата забирают. Его детей кормишь ты. | They take your brother. You feed his children. | wealth-1
out: 40 | Невестка не говорит с тобой до самой смерти. | Your sister-in-law doesn't speak to you till the day she dies. |

id: n_strike
groups: ind
tags: *
need: r1
ages: 19-51
weight: 2
q: Хозяин снизил расценки. Вечером в пивной решают: завтра никто не выходит на смену. | The owner has cut the piece rate. In the pub that night they decide: tomorrow nobody goes in.
door: Бастовать со всеми | Strike with the others
out: 40 | Через три недели хозяин уступает. Прибавка — ваша. | Three weeks later the owner gives in. The raise is yours. | brave wealth+1
out: 35 | Приезжает конная полиция. Твоё имя попадает в чёрный список. | Mounted police arrive. Your name goes on the blacklist. | brave wealth-1
out: 25 | У ворот стреляют. | They shoot at the gate. | brave risk30
ep: У ворот фабрики — со всеми. | At the factory gate, with everyone.
ask: Ради чего не жалко потерять заработок? | What would be worth losing a wage over?
door: Выйти на смену | Go in to work
out: 60 | Работаешь под охраной. На улице тебе плюют вслед. | You work under guard. In the street they spit after you. | wealth+1
out: 40 | Стачка проваливается, а мастер тебя запоминает. С хорошей стороны. | The strike fails, and the foreman remembers you. Kindly. | wealth+1

id: n_kolkhoz
groups: ind
tags: ru
need: r1 !town
ages: 19-64
weight: 2
q: Уполномоченный из района кладёт на стол бумагу. Подпишешь — лошадь и плуг уйдут в колхоз. | The man from the district lays a paper on the table. Sign, and your horse and plough go to the collective farm.
door: Подписать | Sign
out: 60 | Лошадь стоит в общей конюшне и худеет. Работаешь за трудодни. | Your horse stands in the common stable and grows thin. You work for labour-days. | wealth-1
out: 40 | Тебя ставят бригадиром. Паёк больше, соседи злее. | They make you a team leader. Bigger rations, angrier neighbours. |
door: Не подписывать | Refuse
out: 40 | Тебе назначают налог, который не выплатить. Весной всё равно подписываешь. | They set you a tax that can't be paid. In spring you sign anyway. | wealth-2
out: 35 | Ночью стучат. Подвода, станция, вагон на север. | A knock at night. A cart, the station, a wagon heading north. | moved risk40 wealth-2
out: 25 | Режешь скотину и уходишь в город, на стройку. | You slaughter the stock and leave for a building site in town. | town moved
ask: Что трудно отдать, даже когда всё решили за тебя? | What is hard to give up, even when it has been decided for you?

id: n_school_girl
groups: ind mod
tags: *
need: kids !town school
ages: 39-51
weight: 2
q: Учительница приходит сама: старшая дочь способная, ей бы в городскую школу. А кто будет полоть? | The teacher comes herself: your eldest girl is clever, she should go to the town school. But who will do the weeding?
door: Отправить в город | Send her to town
shut: poor | В городе ей не на что жить: ни угла, ни башмаков. | There's nothing to keep her in town: no room, no shoes.
out: 60 | Она пишет домой ровным почерком. Приезжает на каникулы чужая и родная. | She writes home in a neat hand. In the holidays she comes back a stranger and your own. | kind
out: 25 | Она становится учительницей и забирает тебя к себе на старость. | She becomes a teacher and takes you to live with her when you are old. | kind town wealth+1
out: 15 | Город её проглатывает. Писем всё меньше. | The town swallows her. Fewer and fewer letters. |
ask: Кого трудно отпустить? | Who is hard to let go?
door: Оставить дома | Keep her at home
out: 70 | Огород чистый. Дочь выходит замуж через три двора. | The garden is weeded. Your daughter marries three houses down. |
out: 30 | Она не простит. Скажет тебе об этом через сорок лет. | She won't forgive it. She'll tell you so forty years later. |

id: n_singer
groups: ind
tags: *
need:
ages: 27-51
weight: 1
q: Агент «Зингера» оставляет швейную машинку: плати понемногу каждую неделю. | The Singer agent leaves a sewing machine: pay a little every week.
door: Взять в рассрочку | Buy on instalments
out: 55 | По вечерам шьёшь на соседей. Машинка окупается за год. | In the evenings you sew for the neighbours. The machine pays for itself in a year. | wealth+1
out: 45 | Пропускаешь три платежа. Агент увозит машинку, а деньги не возвращает. | You miss three payments. The agent takes the machine back and keeps the money. | wealth-1
door: Отказаться | Say no
out: 100 | Шьёшь по-прежнему руками, при лампе. | You go on sewing by hand, by the lamp. |

id: n_cousin_abroad
groups: mod
tags: *
need:
ages: 19-39
weight: 2
q: Звонит двоюродный брат из-за границы: на стройке нужны люди, койку дают. | A cousin calls from abroad: the building site needs hands, and a bed comes with the job.
door: Ехать | Go
shut: f married kids | Детей не на кого оставить. | There's nobody to leave the children with.
out: 50 | Работаешь по двенадцать часов. Домой переводишь больше, чем здесь платят за год. | You work twelve-hour days. You send home more than a year's pay here. | moved wealth+1
out: 30 | Бригадир забирает паспорт. Полгода работаешь за койку. | The foreman keeps your passport. Six months you work for a bed. | moved wealth-1
out: 20 | Леса не закреплены. Падаешь с четвёртого этажа. | The scaffolding isn't fixed. You fall from the fourth floor. | moved risk40
door: Остаться | Stay
out: 100 | Брат присылает фотографии на фоне чужих машин. | Your cousin sends photos of himself beside other people's cars. |

id: n_rent
groups: early ind
tags: en fr de it
need: r1 !town
ages: 27-64
weight: 2
q: Управляющий поднимает аренду на треть. Говорит, за твой участок другие дадут больше. | The agent raises the rent by a third. He says others will pay more for your plot.
door: Платить | Pay
out: 60 | Продаёте свинью и держитесь ещё год. | You sell the pig and hold on another year. | wealth-1
out: 40 | Платишь, а через год он поднимает снова. | You pay, and a year later he raises it again. | wealth-2
door: Сговориться с соседями и не платить всем | Agree with the neighbours that nobody pays
out: 50 | Управляющий отступает: пустую землю сдавать некому. | The agent backs down: there's nobody to rent empty land to. | brave
out: 50 | Тебя выселяют первым, в пример другим. Крышу разбирают у тебя на глазах. | You are evicted first, as a lesson. They pull the roof down before your eyes. | brave moved wealth-2
door: Уйти в город | Leave for town
out: 100 | Комната в подвале у фабрики. Платить и тут, зато работа рядом. | A cellar room by the mill. Rent here too, but the work is close. | town moved

id: n_report
groups: ind mod
tags: ru de cn
need:
ages: 27-64
weight: 1
q: Тебя вызывают и просят рассказать о соседе: что говорит, кто к нему ходит. | They call you in and ask about your neighbour: what he says, who comes to see him.
door: Рассказать | Tell them
out: 50 | Соседа увозят. Его комнату отдают тебе. | The neighbour is taken away. His room is given to you. | wealth+1
out: 50 | Через год вызывают уже о тебе. Кто-то тоже рассказал. | A year later they call someone in about you. Someone told as well. | risk30
door: Сказать, что ничего не знаешь | Say you know nothing
out: 60 | Отпускают. Сосед так и не узнает, чем тебе обязан. | They let you go. The neighbour never learns what he owes you. | brave kind
out: 40 | С работы увольняют. Детям в каждой анкете теперь писать про тебя лишнюю строчку. | You lose your job. Your children have one more line to write about you on every form. | brave wealth-1
ep: Ни одного доноса. | Never informed on anyone.
ask: Когда молчание — поступок? | When is silence a deed?

id: n_smallpox
groups: early
tags: *
need: kids
ages: 19-51
weight: 1
q: Лекарь берёт гной у больного оспой и царапает им руку здоровым детям. Говорит, это спасёт. Старухи говорят — грех. | The doctor takes pus from a smallpox sore and scratches it into healthy children's arms. He says it saves them. The old women call it a sin.
door: Привить детей | Have the children inoculated
out: 70 | Три дня жара, потом корочка. Когда приходит оспа, твоих детей она обходит. | Three days of fever, then a scab. When smallpox comes, it passes your children by. | kind
out: 30 | Младший горит неделю и больше не встаёт. | The youngest burns for a week and never gets up again. | kids-1
ask: Чему приходится верить, не понимая? | What do you trust without understanding it?
door: Не давать | Refuse
out: 50 | В тот год оспа обходит деревню стороной. | That year smallpox passes the village by. |
out: 50 | Оспа приходит зимой. Хоронят каждого пятого ребёнка, и твоего тоже. | Smallpox comes in winter. One child in five is buried, and yours among them. | kids-1

id: n_microloan
groups: mod
tags: in sea af latam
need: f !town
ages: 19-51
weight: 1
q: Женщины с твоей улицы собирают группу: банк даёт заём пятерым, и каждая отвечает за всех. | The women on your street are forming a group: the bank lends to five, and each answers for all.
door: Взять заём | Take the loan
out: 50 | Покупаешь козу, потом вторую. Молоко продаёшь у школы. | You buy a goat, then another. You sell the milk by the school. | wealth+1
out: 30 | Покупаешь швейную машинку. Весь квартал ходит в школу в твоей форме. | You buy a sewing machine. The whole block goes to school in uniforms you sewed. | wealth+1
out: 20 | Деньги уходят на лечение отца. Платить всё равно надо, и соседки приходят каждую неделю. | The money goes on your father's doctor. You still have to pay, and the women come every week. | wealth-1
ask: За кого не страшно поручиться? | Whom would you vouch for?
door: Отказаться | Say no
out: 100 | Группа собирается без тебя. Через год у соседки своя лавочка. | The group forms without you. A year on, your neighbour has her own little shop. |

id: n_engagement
groups: ind mod
tags: in cn me
need: f single
ages: 19-27
weight: 1
q: Родители договорились о свадьбе. Жениха ты видела один раз, на смотринах. | Your parents have arranged the wedding. You have seen the groom once, at the viewing.
door: Согласиться | Agree
out: 50 | Он оказывается тихим и добрым. К тридцати вы смеётесь над одним и тем же. | He turns out quiet and kind. By thirty you laugh at the same things. | married love
out: 50 | Свекровь считает каждую лепёшку. Ты терпишь. | Your mother-in-law counts every flatbread. You endure. | married
door: Отказаться | Refuse
shut: !lit poor | Без грамоты и без денег из отцовского дома некуда уйти. | Without letters or money there is nowhere to go from your father's house.
out: 40 | Отец год с тобой не говорит. Потом ты выходишь за того, кого выбрала сама. | Your father doesn't speak to you for a year. Then you marry the one you chose. | brave married love
out: 35 | Уезжаешь в город, на швейную фабрику. Живёшь в общежитии с восемью девушками. | You leave for a garment factory in town. You share a dorm with eight other girls. | brave town moved
out: 25 | Позор на всю родню. Сёстрам теперь труднее найти мужей. | Shame on the whole family. Your sisters will find husbands harder now. | brave
ep: Сказала отцу «нет». | Said no to her father.
ask: Чьё решение до сих пор живёт в твоей жизни? | Whose decision still lives in your life?

id: n_far_job
groups: mod
tags: *
need:
ages: 27-51
weight: 2
q: Предлагают работу вдвое дороже, но в другом городе. Родителям за семьдесят. | A job at twice the pay, but in another city. Your parents are past seventy.
door: Уехать | Go
out: 60 | Звонишь по воскресеньям. Приезжаешь на праздники и видишь, как они сдали. | You call on Sundays. You come for the holidays and see how they have aged. | moved town wealth+1
out: 40 | Отец падает зимой на крыльце, а ты в шести часах езды. | Your father falls on the steps in winter, and you are six hours away. | moved town wealth+1
door: Остаться рядом | Stay close
out: 70 | По четвергам возишь маму по врачам. Денег впритык. | On Thursdays you drive your mother to the doctors. Money is tight. | kind
out: 30 | Отец живёт ещё пятнадцать лет и успевает научить внуков рыбачить. | Your father lives fifteen more years and teaches the grandchildren to fish. | kind
ask: Сколько стоит час рядом с родителями? | What is an hour with your parents worth?

id: n_son_calls
groups: mod
tags: *
need: kids
ages: 51-64
weight: 1
q: Звонит сын. Вы не разговаривали семь лет. Он молчит в трубку, потом говорит: «Это я». | Your son calls. You haven't spoken in seven years. Silence on the line, then: "It's me."
door: Сказать: «Приезжай» | Say "Come over"
out: 60 | Он приезжает с внучкой. Ей уже шесть. | He comes with a granddaughter. She is six already. | love kind
out: 40 | Разговор не клеится. Но в декабре он звонит снова. | The talk is stiff. But in December he calls again. | kind
door: Припомнить старое | Bring up the old wrong
out: 50 | Ругаетесь, как семь лет назад. Он бросает трубку. | You fight as you did seven years ago. He hangs up. |
out: 50 | Он выслушивает всё и говорит: «Знаю. Прости». | He hears it all and says, "I know. I'm sorry." | love
door: Положить трубку | Hang up
out: 100 | Номер остаётся в телефоне. Стереть его ты не можешь. | The number stays in the phone. You can't bring yourself to delete it. |
ask: Кому давно пора позвонить? | Who is long overdue a call?

id: n_retire
groups: mod
tags: *
need: !town
ages: 58-70
weight: 2
q: На работе намекают: пора на пенсию, твоё место ждёт молодой. | At work they hint: time to retire, a young one is waiting for your place.
door: Уйти на покой | Retire
shut: poor | Пенсии не хватит даже на хлеб. | The pension won't even buy bread.
out: 50 | Первый месяц спишь до девяти. Потом заводишь огород и кур. | The first month you sleep till nine. Then you start a garden and keep hens. |
out: 50 | Дни становятся длинными. Ходишь к проходной просто так. | The days grow long. You walk to the works gate for no reason. |
door: Держаться за место | Hold on to the job
out: 60 | Учишь молодого. Он слушает вполуха, но учится. | You teach the young one. He half-listens, but he learns. | wealth+1
out: 40 | Сердце прихватывает прямо в цеху. | Your heart seizes right on the shop floor. | risk20
ep: До последнего дня — на работе. | At work to the last day.
ask: Кем ты будешь, когда работа кончится? | Who will you be when the work is over?

id: n_gi_bill
groups: mod
tags: us
need: m !town
ages: 19-27
weight: 1
q: Ты вернулся из армии. Правительство платит за колледж. Отец зовёт на ферму: одному ему не справиться. | You're back from the army. The government will pay for college. Your father wants you on the farm: he can't manage alone.
door: Колледж | College
shut: !lit | Без школы в колледж не берут. | No college takes a man without schooling.
out: 60 | Диплом инженера, дом в пригороде, две машины в гараже. | An engineering degree, a house in the suburbs, two cars in the garage. | town moved wealth+2
out: 40 | Днём работаешь, ночью учишься. Бросаешь на третьем курсе, но в контору берут. | You work by day and study by night. You drop out in the third year, but an office takes you on. | town wealth+1
ep: Первый в роду с дипломом. | The first in the family with a degree.
door: Ферма | The farm
out: 50 | Покупаете трактор. Урожай хороший, цены плохие. | You buy a tractor. The crop is good, the prices bad. |
out: 50 | Через десять лет ферму забирает банк. | Ten years on, the bank takes the farm. | wealth-1

id: n_gaokao
groups: mod
tags: cn
need: kids
ages: 39-51
weight: 1
q: Сыну не хватило шести баллов на гаокао. Ещё год подготовки — это все ваши сбережения. | Your son missed the gaokao by six points. Another year of cramming will take all your savings.
door: Пусть сдаёт ещё раз | Let him sit it again
shut: poor | Сбережений нет. Есть только долг за его школу. | There are no savings. Only the debt for his schooling.
out: 55 | Со второго раза поступает. Ты рассказываешь об этом всему рынку. | He gets in the second time. You tell the whole market. | wealth-1
out: 45 | Снова не хватает трёх баллов. Он уезжает на завод в Шэньчжэнь. | Three points short again. He leaves for a factory in Shenzhen. | wealth-1
door: Пусть идёт работать | Let him go to work
out: 60 | Он собирает телефоны в Дунгуане и к Новому году присылает деньги. | He assembles phones in Dongguan and sends money for New Year. | wealth+1
out: 40 | Он открывает лапшичную. Через пять лет у него их три. | He opens a noodle shop. Five years later he has three. | wealth+1
ask: Что ты ставишь на одну попытку? | What do you stake on a single try?

id: n_shenzhen
groups: mod
tags: cn
need: r1
ages: 19-27
weight: 2
q: Девушки из деревни приезжают на Новый год в джинсах. Говорят, в Шэньчжэне на фабрику берут без вопросов. | The village girls come home for New Year in jeans. They say the Shenzhen factories take anyone, no questions asked.
door: Ехать на юг | Go south
out: 55 | Общежитие на двенадцать коек, смена по двенадцать часов. Половину денег отсылаешь домой. | A dorm with twelve bunks, twelve-hour shifts. You send half your pay home. | moved town wealth+1
out: 25 | Через три года ты старший на линии. Через шесть — свой цех на окраине. | In three years you lead the line. In six, your own workshop on the edge of town. | moved town wealth+2
out: 20 | Прописка у тебя деревенская: заболел — лечись дома. Кашель не проходит год. | Your hukou is rural: fall ill and you go home for treatment. The cough lasts a year. | moved town risk15
door: Остаться в деревне | Stay in the village
out: 100 | Деревня пустеет. Ты растишь чужих детей, пока их родители на юге. | The village empties. You raise other people's children while their parents are in the south. | kind

id: n_sea_jump
groups: mod
tags: cn
need:
ages: 27-51
weight: 1
q: Друг зовёт «прыгнуть в море»: уйти с завода и торговать. А на заводе квартира, столовая, железная чашка риса. | A friend asks you to "jump into the sea": leave the factory and trade. The factory gives you a flat, a canteen, the iron rice bowl.
door: Прыгнуть | Jump
out: 45 | Возите джинсы из Гуанчжоу. Через два года у тебя первый на лестнице холодильник. | You run jeans up from Guangzhou. Two years on you own the first fridge on your stairwell. | wealth+2
out: 35 | Компаньон исчезает с товаром. Обратно на завод не берут. | Your partner vanishes with the goods. The factory won't take you back. | wealth-2
out: 20 | Перебиваешься. Ни богатства, ни чашки. | You scrape by. No fortune, and no rice bowl. | wealth-1
door: Держаться за завод | Hold on to the factory
out: 60 | В девяносто восьмом завод закрывают. Тебе пятьдесят, и ты на улице. | In ninety-eight the factory closes. You're fifty and out on the street. | wealth-1
out: 40 | Завод выживает. Квартиру тебе потом продают за копейки. | The factory survives. Later they sell you the flat for next to nothing. | wealth+1

id: n_joint_family
groups: ind mod
tags: in
need: m !town
ages: 27-39
weight: 1
q: Младший брат хочет делиться: свой очаг, своя доля земли. Отец стар и смотрит на тебя, на старшего. | Your younger brother wants to split off: his own hearth, his share of the land. Your father is old and looks to you, the eldest.
door: Отпустить его с долей | Let him go with his share
out: 60 | Поле теперь узкое, как полотенце. Зато в доме тихо. | The field is narrow as a towel now. But the house is quiet. | wealth-1 kind
out: 40 | Брат продаёт свою долю и уезжает в Бомбей. Ты выкупаешь землю обратно, в долг. | Your brother sells his share and leaves for Bombay. You buy the land back on a loan. | wealth-1
door: Держать семью вместе | Keep the family together
out: 50 | Живёте под одной крышей. Ссоры жён слышно на всю улицу. | You live under one roof. The wives' quarrels carry down the street. |
out: 50 | Вместе покупаете насос для колодца. Урожая хватает на всех. | Together you buy a pump for the well. The harvest feeds everyone. | wealth+1
ask: Кого ты держишь рядом, а кого отпускаешь? | Whom do you hold close, and whom do you let go?

id: n_dowry
groups: mod
tags: in
need: kids
ages: 39-51
weight: 1
q: Родня жениха намекает: к приданому неплохо бы мотоцикл. | The groom's family hints that a motorcycle would go well with the dowry.
door: Занять у ростовщика | Borrow from the moneylender
out: 55 | Свадьба пышная, на всю деревню. Долг выплачиваете девять лет. | A grand wedding for the whole village. You pay off the debt for nine years. | wealth-2
out: 45 | Через год просят ещё. Дочь приезжает домой с синяком и уезжает обратно. | A year later they ask for more. Your daughter comes home with a bruise and goes back. | wealth-2
door: Отказать | Refuse
out: 50 | Свадьбу отменяют. Через год дочь выходит за учителя, которому ничего не нужно. | The wedding is called off. A year later she marries a teacher who wants nothing. | brave love
out: 50 | По деревне ползут разговоры. Сватов больше не присылают. | The village talks. No more matchmakers come. | brave
ask: Сколько ты платишь, чтобы не было стыдно перед людьми? | What do you pay so as not to be ashamed before people?

id: n_gulf
groups: mod
tags: in
need:
ages: 19-39
weight: 2
q: Агент обещает работу в Дубае. Виза стоит столько, сколько ты зарабатываешь за год. | An agent promises work in Dubai. The visa costs a year's earnings.
door: Платить агенту | Pay the agent
shut: poor | Таких денег не даст даже ростовщик. | Not even the moneylender will lend that much.
out: 50 | Стройка в пустыне, сорок пять в тени. Дома на твои деньги кроют крышу черепицей. | A building site in the desert, forty-five in the shade. At home your money puts a tiled roof on the house. | moved wealth+2
out: 30 | Хозяин держит паспорт и платит через месяц. Через три года приезжаешь с пустыми руками. | The boss keeps your passport and pays every other month. Three years on you come home empty-handed. | moved wealth-1
out: 20 | Агент исчезает с деньгами. Визы никакой не было. | The agent vanishes with the money. There never was a visa. | wealth-2
door: Остаться дома | Stay home
out: 100 | Соседи строят дома на деньги из Залива. Твой дом всё тот же. | The neighbours build houses with Gulf money. Your house stays as it was. |

id: n_nairobi
groups: mod
tags: af
need:
ages: 19-39
weight: 2
q: Брат зовёт в Найроби: в городе есть работа. Деньги домой можно слать прямо с телефона. | Your brother calls you to Nairobi: there's work in the city. You can send money home straight from your phone.
door: Ехать в город | Go to the city
out: 50 | По пятницам у матери пищит телефон: пришли деньги. Она платит за школу младших. | On Fridays your mother's phone beeps: the money has come. She pays the little ones' school fees. | moved town wealth+1 kind
out: 30 | Комната в трущобах, работа через день. Домой шлёшь мелочь, и звонить стыдно. | A room in the slum, work every other day. You send home coins, and you're ashamed to call. | moved town
out: 20 | Ночью на дороге тебя сбивает грузовик. | A lorry hits you on the road at night. | moved town risk35
door: Остаться на земле | Stay on the land
out: 60 | Дождей хватает. Кукуруза выше головы. | The rains are enough. The maize stands taller than you. |
out: 40 | Засуха. Брат шлёт деньги на телефон, и вы покупаете муку. | Drought. Your brother sends money to the phone, and you buy flour. | wealth-1

id: n_hacienda
groups: early ind
tags: latam
need: r0 r1
ages: 19-39
weight: 1
q: Управляющий асьенды предлагает аванс в счёт будущей работы. Деньги нужны на свадьбу сестры. | The hacienda manager offers an advance against your future labour. The money is needed for your sister's wedding.
door: Взять аванс | Take the advance
out: 60 | Долг записывают в книгу. Каждый год он почему-то растёт. | The debt is written in the book. Somehow it grows every year. | wealth-1
out: 40 | Сестру выдают с музыкой. Ты отрабатываешь пять лет, и твоё имя вычёркивают. | Your sister is married with music. You work five years, and your name is struck out. | kind
door: Обойтись | Make do without
out: 70 | Свадьба скромная, зато в книге управляющего твоего имени нет. | A modest wedding, but your name is not in the manager's book. |
out: 30 | Родня жениха недовольна. Сестра плачет весь вечер. | The groom's family sulks. Your sister cries all evening. |
door: Уйти в город | Leave for the city
shut: r0 | Беглых возвращают с собаками. | Runaways are brought back with dogs.
out: 60 | В порту таскаешь мешки. Платят мало, но сразу. | You haul sacks at the port. Low pay, but cash in hand. | town moved sea
out: 40 | Управляющий посылает людей: ты у него в должниках. Тебя возвращают. | The manager sends men: you're in his book as a debtor. They bring you back. | wealth-1

id: n_north
groups: mod
tags: latam
need:
ages: 19-39
weight: 2
q: Двоюродный брат уже в Лос-Анджелесе. Проводник берёт за переход границы три тысячи долларов. | Your cousin is in Los Angeles already. The coyote charges three thousand dollars to take you across.
door: Идти на север | Go north
shut: poor | Трёх тысяч нет ни у тебя, ни у всей родни разом. | Neither you nor your whole family together has three thousand.
out: 50 | Три ночи в пустыне. Потом кухня ресторана, где никто не спрашивает фамилию. | Three nights in the desert. Then a restaurant kitchen where nobody asks your surname. | moved town wealth+1
out: 30 | Ловят на границе и отправляют назад. Деньги пропали. | Caught at the border and sent back. The money is gone. | wealth-1
out: 20 | В пустыне кончается вода. | In the desert the water runs out. | moved risk45
ask: Что приходится оставить, чтобы начать заново? | What must be left behind to start again?
door: Остаться | Stay
out: 100 | Каждое воскресенье ждёшь звонка из Лос-Анджелеса. | Every Sunday you wait for the call from Los Angeles. |

id: n_homestead
groups: ind
tags: us
need: !town
ages: 19-39
weight: 1
q: Говорят, на Западе землю дают даром: сто шестьдесят акров тому, кто проживёт на ней пять лет. | They say out West the land is free: a hundred and sixty acres to whoever lives on it five years.
door: Грузить фургон | Load the wagon
out: 45 | Землянка в прерии, саранча, метели. Через пять лет — бумага с печатью: земля твоя. | A sod house on the prairie, locusts, blizzards. Five years on, a paper with a seal: the land is yours. | moved brave wealth+2
out: 35 | Засуха выжигает три урожая подряд. Возвращаетесь на восток с пустым фургоном. | Drought burns three crops in a row. You go back east with an empty wagon. | moved wealth-1
out: 20 | Зимой в землянке лихорадка. | Fever in the sod house in winter. | moved risk35
door: Остаться | Stay
out: 100 | Нанимаешься к соседу. Земля на Западе снится по ночам. | You hire out to a neighbour. The western land comes to you in dreams. |

id: n_transfer
groups: mod
tags: jp
need:
ages: 27-51
weight: 1
q: Начальник предлагает перевод в филиал в Осаке. Отказываться в компании не принято. Семья остаётся в Токио. | Your boss offers a transfer to the Osaka branch. In the company one does not refuse. The family stays in Tokyo.
door: Ехать без семьи | Go without the family
out: 60 | Шесть лет в служебной квартире, домой раз в месяц. Повышение. | Six years in a company flat, home once a month. A promotion. | moved wealth+1
out: 40 | Дети вырастают без тебя. Говорят с тобой вежливо, как с гостем. | The children grow up without you. They speak to you politely, as to a guest. | moved wealth+1
door: Отказаться | Decline
out: 60 | Твой стол переставляют к окну. Так здесь дают понять, что поручений больше не будет. | They move your desk to the window. That's how they tell you there'll be no more assignments. |
out: 40 | Начальник морщится, но через год забывает. Ужинаешь с семьёй каждый вечер. | The boss frowns, but forgets within the year. You have dinner with your family every night. | love
ask: Чем ты платишь за своё место? | What do you pay for your place?

id: n_guestworker
groups: mod
tags: it me eu
need:
ages: 19-39
weight: 1
q: Приехали вербовщики из Германии. Врачи смотрят зубы и руки. Поезд на Мюнхен — через неделю. | Recruiters have come from Germany. Doctors look at your teeth and hands. The train to Munich leaves in a week.
door: Сесть в поезд | Take the train
out: 50 | Конвейер в Кёльне, барак на восьмерых. Каждый месяц перевод домой, на дом, который строят без тебя. | An assembly line in Cologne, a barracks for eight. Every month money home, for a house being built without you. | moved town wealth+1
out: 30 | Едешь на два года, а остаёшься на всю жизнь. Дети говорят по-немецки. | You go for two years and stay a lifetime. Your children speak German. | moved town wealth+1
out: 20 | Врач находит пятно на лёгком. Домой отправляют тем же поездом. | The doctor finds a spot on your lung. They send you home on the same train. |
door: Остаться | Stay
out: 100 | Половина мужчин уезжает. На свадьбах танцуют одни женщины. | Half the men leave. At weddings only the women dance. |

id: n_dacha
groups: mod
tags: ru
need: kids
ages: 51-64
weight: 1
q: Сын затевает своё дело и просит продать дачу. Там твоя яблоня и баня, срубленная твоими руками. | Your son is starting a business and asks you to sell the dacha. Your apple tree is there, and the bathhouse you built with your own hands.
door: Продать | Sell
out: 50 | Сын открывает ларёк, потом магазин. Возит тебя к морю, в Турцию. | Your son opens a kiosk, then a shop. He takes you to the seaside in Turkey. | sea wealth+1 kind
out: 50 | Через год ларёк сгорает. Ни денег, ни дачи. | A year later the kiosk burns down. No money, no dacha. | wealth-1 kind
door: Отказать | Refuse
out: 60 | Сын не звонит до осени. Осенью приезжает за яблоками. | Your son doesn't call till autumn. In autumn he comes for apples. |
out: 40 | Сын берёт деньги у других людей. У каких — лучше не спрашивать. | Your son borrows from other people. Better not to ask which. |
ask: Что из сделанного своими руками ты никому не отдашь? | What made with your own hands would you never give away?

id: n_barin_wedding
groups: early
tags: ru
need: r0 f single
ages: 19-27
weight: 1
q: Барин решил женить своих крепостных по списку. Тебе назначен вдовый конюх. | The master has decided to marry off his serfs by list. You are assigned a widowed stableman.
door: Покориться | Submit
out: 60 | Конюх оказывается не злым. Пьёт только по праздникам. | The stableman turns out not unkind. He drinks only on feast days. | married
out: 40 | Трое его детей от первой жены зовут тебя мамкой. | His three children by his first wife call you mama. | married kind
door: Броситься в ноги барыне | Throw yourself at the mistress's feet
out: 50 | Барыня жалеет тебя и берёт в горничные. Конюху ищут другую. | The mistress pities you and takes you as a maid. They find the stableman someone else. | brave
out: 50 | Барин в гневе. Тебя отдают в дальнюю деревню, за кого похуже. | The master is furious. You are sent to a far village, to a worse man. | brave married moved
ep: Не побоялась барыни. | Was not afraid of the mistress.

id: n_freedom_price
groups: early
tags: latam
need: r0 kids
ages: 27-51
weight: 1
q: Деньги за годы ночной работы наконец собраны. Хватит на одну вольную: твою или ребёнка. | The money from years of night work is saved at last. Enough for one freedom paper: yours or your child's.
door: Выкупить себя | Buy your own freedom
out: 60 | Бумага с печатью лежит за пазухой. Теперь копишь на ребёнка. | The paper with the seal is inside your shirt. Now you save for your child. | free
out: 40 | Хозяин умирает, и наследники продают ребёнка в другую провинцию. | The master dies, and the heirs sell your child to another province. | free
door: Выкупить ребёнка | Buy your child's freedom
out: 70 | Ребёнок вырастет свободным. Ты — нет. | Your child will grow up free. You will not. | kind
out: 30 | Хозяин берёт деньги и дописывает в бумаге: «после моей смерти». | The master takes the money and adds to the paper: "after my death". | kind
ep: Вольная — ребёнку. | The freedom went to the child.
ask: Что ты откладываешь для других? | What do you put aside for others?
door: Копить дальше | Keep saving
out: 50 | Через четыре года хватает на обоих. | Four years later there is enough for both. | free kind
out: 50 | Хозяин находит деньги и забирает. | The master finds the money and takes it. | wealth-1

id: n_mill
groups: ind
tags: *
need: r1 !town
ages: 19-27
weight: 2
q: В соседнем городе открыли ткацкую фабрику. Платят деньгами, каждую субботу. | A weaving mill has opened in the next town. They pay in money, every Saturday.
door: Идти на фабрику | Go to the mill
out: 50 | От грохота глохнешь на одно ухо. Зато по субботам в кармане звенит. | The din makes you deaf in one ear. But on Saturdays your pocket jingles. | town moved wealth+1
out: 30 | На танцах в фабричном клубе встречаешь кого-то из соседнего цеха. | At a dance in the mill club you meet someone from the next shed. | town moved love
out: 20 | Хлопковая пыль в лёгких. К весне кашель не проходит. | Cotton dust in the lungs. By spring the cough hasn't gone. | town moved risk20
door: Остаться на земле | Stay on the land
out: 100 | Пашешь, как отец. Фабричный гудок слышно, когда ветер с той стороны. | You plough as your father did. You can hear the mill whistle when the wind is from that way. |

id: n_new_seed
groups: mod
tags: in sea latam af
need: r1 !town
ages: 19-51
weight: 1
q: Агроном привозит новые семена: урожай вдвое. Но нужны удобрения и полив, а это в долг. | The agronomist brings new seed: twice the harvest. But it needs fertiliser and water, and that means debt.
door: Сеять новое | Sow the new seed
out: 55 | Поле стоит стеной. Покупаешь радио и отдаёшь долг за один сезон. | The field stands like a wall. You buy a radio and pay off the debt in one season. | wealth+2
out: 45 | Дождя нет, солярки для насоса тоже. Долг остаётся, урожая нет. | No rain, and no diesel for the pump. The debt stays; the harvest doesn't. | wealth-2
door: Сеять, как дед | Sow as your grandfather did
out: 70 | Урожай невелик, зато весь твой. Соседи с новыми семенами посмеиваются. | A small harvest, but all yours. The neighbours with the new seed smirk. |
out: 30 | Соседи строят кирпичные дома, а ты всё в глинобитном. | The neighbours build brick houses, and you are still in mud. |

id: n_draft
groups: ind mod
tags: *
need: m
ages: 19-27
weight: 2
q: Пришла повестка. Друг знает врача, который за деньги найдёт у тебя порок сердца. | A call-up notice has come. A friend knows a doctor who, for money, will find a heart defect in you.
door: Идти служить | Report for service
out: 50 | Два года в казарме. Учишься водить грузовик. | Two years in barracks. You learn to drive a lorry. | moved
out: 30 | Начинается война. Твой полк уходит первым. | War breaks out. Your regiment goes first. | moved brave risk35
out: 20 | Возвращаешься с медалью и больше не можешь спать без света. | You come back with a medal and can no longer sleep without a light. | moved brave
door: Заплатить врачу | Pay the doctor
shut: poor | Таких денег у тебя нет. | You have no such money.
out: 60 | Справка в кармане. Друзья уходят, ты остаёшься. | The certificate is in your pocket. Your friends leave; you stay. |
out: 40 | Врача арестовывают. В его тетради есть и твоё имя. | The doctor is arrested. Your name is in his notebook. | risk15 wealth-1
ask: Кому принадлежит твоя жизнь? | Whom does your life belong to?

id: n_savings_bank
groups: ind
tags: *
need: r2
ages: 27-51
weight: 1
q: Открылась сберегательная касса. Конторщик обещает проценты. А деньги у тебя пока в чулке под половицей. | A savings bank has opened. The clerk promises interest. Your money is in a stocking under the floorboard.
door: Отнести в кассу | Take it to the bank
out: 60 | Раз в год конторщик вписывает проценты в книжку. Немного, зато сами растут. | Once a year the clerk writes the interest in your book. Not much, but it grows by itself. | wealth+1
out: 40 | Касса лопается. У дверей толпа, двери заперты. | The bank fails. A crowd at the doors, the doors locked. | wealth-2
door: Оставить под половицей | Leave it under the floor
out: 70 | Деньги лежат, где лежали. | The money lies where it lay. |
out: 30 | Пожар. Половица горит вместе с чулком. | A fire. The floorboard burns, and the stocking with it. | wealth-2

id: n_north_star
groups: early
tags: us
need: r0 !town
ages: 19-39
weight: 1
q: Ночью в хижину стучат: в субботу двое уходят на север, за реку. Есть место для третьего. | A knock on the cabin at night: on Saturday two are going north, across the river. There's room for a third.
door: Уйти с ними | Go with them
shut: kids | Детей с собой не унести, а без них уйти нельзя. | You can't carry the children, and you won't go without them.
out: 40 | Две недели лесами, по звёздам. Квакер в Огайо прячет вас в амбаре. Дальше — воля. | Two weeks through the woods, by the stars. A Quaker in Ohio hides you in his barn. Beyond it, freedom. | free moved brave
out: 35 | На третий день вас находят собаки. Возвращают и клеймят. | On the third day the dogs find you. You are brought back and branded. | brave risk20
out: 25 | Река в ту ночь вышла из берегов. | The river was in flood that night. | brave moved risk50
ep: Ночью — на север, по звёздам. | North by night, by the stars.
ask: Чего стоило бы уйти? | What would it cost to leave?
door: Остаться | Stay
out: 100 | В воскресенье утром две лежанки пусты. Надсмотрщик зол на всех. | On Sunday morning two pallets are empty. The overseer takes it out on everyone. |

id: n_city_rent
groups: mod
tags: *
need: r0 r1 r2
ages: 19-51
weight: 1
q: Хозяин квартиры поднимает плату. Можно съехать на окраину — два часа до работы. | The landlord raises the rent. You could move out to the edge of town: two hours to work.
door: Платить | Pay
out: 60 | Мясо теперь по праздникам. По субботам подрабатываешь. | Meat only on holidays now. You take extra work on Saturdays. | wealth-1
out: 40 | Через полгода хозяин продаёт квартиру. Съезжать всё равно. | Half a year later the landlord sells the flat. You have to move anyway. | wealth-1 moved
door: Переехать на окраину | Move to the edge of town
out: 70 | Встаёшь в пять. В автобусе высыпаешься лучше, чем дома. | You get up at five. You sleep better on the bus than at home. | moved
out: 30 | На окраину тянут метро. Через три года ты в получасе от всего. | They build the metro out your way. Three years on you're half an hour from everything. | moved wealth+1

id: n_enclosure
groups: early
tags: en
need: r1 !town
ages: 27-51
weight: 1
q: Сквайр огораживает общинный выгон и предлагает деньги за твою полосу земли. | The squire is enclosing the common and offers money for your strip of land.
door: Продать | Sell
out: 50 | На эти деньги открываешь лавку в местечке. | With the money you open a shop in the market town. | town moved wealth+1
out: 50 | Деньги кончаются за две зимы. Нанимаешься батраком к тому же сквайру. | The money runs out in two winters. You hire on as a labourer for the same squire. | wealth-1
door: Не продавать | Refuse
out: 60 | Полосу оставляют, но корову теперь пасти негде. | They leave you the strip, but now there's nowhere to graze the cow. | wealth-1
out: 40 | Землю всё равно забирают, через суд. И платят меньше. | They take the land anyway, through the courts. And pay less. | wealth-2
door: Ночью свалить новую изгородь | Pull down the new fence at night
out: 50 | Изгородь горит. Сквайр ставит новую, со сторожем. | The fence burns. The squire puts up a new one, with a watchman. | brave
out: 50 | Тебя узнают. Суд, каторга в Австралии. | You are recognised. A trial, transportation to Australia. | brave sea moved risk20

id: n_sunday_school
groups: early ind
tags: *
need: illit
ages: 19-39
weight: 1
q: По воскресеньям учитель даром учит взрослых грамоте. А воскресенье — твой единственный свободный день. | On Sundays the schoolmaster teaches grown-ups to read, for free. And Sunday is your only day off.
door: Ходить учиться | Go and learn
shut: r0 | Хозяин не пускает: грамота тебе ни к чему. | The master won't let you go: you've no need of letters, he says.
out: 60 | К весне читаешь вывески. К осени — газету, по слогам. | By spring you read shop signs. By autumn, a newspaper, syllable by syllable. | lit
out: 40 | Пальцы привыкли к лопате и не держат перо. Но своё имя вывести уже можешь. | Fingers used to a spade won't hold a pen. But you can write your name now. | lit
ask: Чему всё ещё хочется научиться? | What do you still want to learn?
door: Отдыхать | Rest
out: 100 | Спишь до полудня. Письма тебе по-прежнему читает сосед. | You sleep till noon. The neighbour still reads your letters to you. |

id: n_keju
groups: early
tags: cn
need: kids !town
ages: 39-51
weight: 1
q: Учитель говорит: у сына голова для экзаменов. Но учёба до первой степени — это годы и все ваши деньги. | The tutor says your son has a head for the examinations. But study for the first degree means years and all your money.
door: Учить сына | Pay for his study
shut: poor | Учителю платить нечем. Сын нужен в поле. | There's nothing to pay the tutor with. The boy is needed in the field.
out: 25 | Сын сдаёт уездный экзамен. Над воротами вешают доску, и вся деревня кланяется. | Your son passes the county examination. A board goes up over the gate, and the whole village bows. | wealth+1
out: 50 | Он проваливается три раза подряд и становится деревенским учителем. | He fails three times running and becomes the village teacher. | wealth-1
out: 25 | Он сидит над книгами до сорока лет, седой и злой. | He sits over the books till forty, grey and bitter. | wealth-2
door: Оставить на земле | Keep him on the land
out: 100 | Сын хорошо пашет. Иногда пишет палочкой иероглифы на песке. | Your son ploughs well. Sometimes he writes characters in the sand with a stick. |
ask: На чью мечту уходят твои силы? | Whose dream does your strength go to?

id: n_sepoy
groups: early
tags: in
need: m !town
ages: 19-27
weight: 1
q: Компания набирает сипаев. Жалованье каждый месяц, мундир, пенсия. Но могут послать за море. | The Company is recruiting sepoys. Pay every month, a uniform, a pension. But they may send you over the sea.
door: Записаться | Enlist
out: 50 | Жалованье уходит домой. Отец покупает ещё одно поле. | Your pay goes home. Your father buys another field. | moved wealth+1
out: 30 | Тебя везут в Бирму. После моря родня смотрит на тебя как на нечистого. | They ship you to Burma. After the crossing your kin look on you as unclean. | sea moved brave
out: 20 | Лихорадка в лагере. | Fever in camp. | moved risk30
door: Остаться в деревне | Stay in the village
out: 100 | Всё как у отца: поле, вода, долг ростовщику. | Everything as your father had it: the field, the water, the debt to the moneylender. |

id: n_edo
groups: early
tags: jp
need:
ages: 19-27
weight: 1
q: Торговый дом в Эдо берёт учеников из деревень. Десять лет без жалованья, за еду и угол. | A merchant house in Edo takes apprentices from the villages. Ten years without wages, for food and a corner.
door: Ехать в Эдо | Go to Edo
shut: f | В лавку берут только мальчиков. | The shop takes only boys.
out: 50 | Через десять лет хозяин даёт тебе новое имя и лавку под своим знаком. | Ten years on, the master gives you a new name and a shop under his sign. | town moved wealth+2
out: 50 | В Эдо пожар. Торговый дом сгорает, а с ним твои десять лет. | Fire in Edo. The house burns, and your ten years with it. | town moved risk15
door: Остаться в деревне | Stay in the village
out: 100 | Сажаешь рис по колено в воде. Эдо так и остаётся словом из рассказов. | You plant rice knee-deep in water. Edo stays a word from stories. |
`,Ce=`# Forks of the older eras: stone, anc, med (some also early). Id prefix o_.

id: o_stranger_night
groups: anc med early
tags: af me eg med eu fr de it en ru in cn jp sea
need: !town
ages: 19-64
weight: 2
q: Под вечер в дверь стучит чужой человек. Просит пустить переночевать. | At dusk a stranger knocks at the door and asks to stay the night.
door: Пустить к очагу | Let him in by the hearth
shut: f !married | Незамужней пускать в дом чужого мужчину нельзя. | An unmarried woman cannot let a strange man into the house.
out: 60 | Он ест молча, а утром оставляет на лавке хороший нож. | He eats in silence and in the morning leaves a good knife on the bench. | wealth+1 kind
out: 25 | Он до полуночи рассказывает о дальних землях. Дети помнят его годами. | He tells of far lands till midnight. The children remember him for years. | kind
out: 15 | Утром его нет. Нет и твоего плаща. | In the morning he is gone. So is your cloak. | wealth-1
ep: Никого не {оставлял|оставляла} ночью за дверью. | Never left anyone outside at night.
ask: Кого ты пустишь к себе переночевать? | Whom would you let sleep under your roof?
door: Не открывать | Keep the door shut
out: 70 | Шаги уходят в темноту. Ты долго не можешь уснуть. | The footsteps go off into the dark. You lie awake a long time. |
out: 30 | Наутро у соседей пропадает овца. Может, это он. | Next morning the neighbours are missing a sheep. Maybe it was him. |

id: o_sister_given
groups: stone anc med early
tags: *
need: !town !r0
ages: 19-39
weight: 1
q: Старшие решили отдать твою сестру за вдовца вдвое старше её. | The elders have decided to give your sister to a widower twice her age.
door: Промолчать | Say nothing
out: 60 | Свадьба. Вдовец оказывается не злым. Сестра привыкает. | A wedding. The widower turns out not unkind. Your sister gets used to it. | wealth+1
out: 40 | Сестра уходит к нему и почти перестаёт смеяться. | Your sister goes to him and almost stops laughing. |
door: Заступиться перед старшими | Speak up before the elders
shut: f | Женщину старшие не слушают. | The elders don't listen to a woman.
out: 50 | Старшие ворчат, но ждут до осени. Осенью к сестре сватается парень из соседнего рода. | The elders grumble but wait till autumn. In autumn a lad from the next clan asks for her. | kind
out: 50 | Тебя не слушают. Свадьбу играют всё равно, а родня жениха тебя запоминает. | Nobody listens. The wedding goes ahead, and the groom's kin remember you. |
ask: Когда в последний раз пришлось заступиться за родного человека? | When did you last stand up for one of your own?
door: Помочь ей бежать | Help her run away
out: 40 | Сестра уходит ночью с тем, кого любит. Через год приходит весть: жива. | Your sister leaves by night with the one she loves. A year later word comes: she is alive. | kind brave
out: 60 | Её ловят на второй день. Позор на всю семью, а тебя бьют. | She is caught on the second day. Shame on the whole family, and you are beaten. | risk5 brave

id: o_sister_master
groups: anc med early
tags: *
need: r0
ages: 19-39
weight: 1
q: Хозяин решил отдать твою сестру за своего старого конюха. Её никто не спрашивал. | The master has decided to give your sister to his old groom. Nobody asked her.
door: Промолчать | Say nothing
out: 60 | Свадьбу играют на заднем дворе. Конюх оказывается не злым, и сестра привыкает. | The wedding is held in the back yard. The groom turns out not unkind, and your sister gets used to it. |
out: 40 | Сестра уходит в его каморку и почти перестаёт смеяться. | Your sister moves into his corner and almost stops laughing. |
door: Упасть хозяину в ноги | Throw yourself at the master's feet
out: 40 | Хозяин смеётся, но откладывает свадьбу. К осени он о ней забывает. | The master laughs, but puts off the wedding. By autumn he has forgotten it. | kind brave
out: 60 | Хозяин велит тебя высечь, чтобы не {лез|лезла} не в своё дело. Свадьба через неделю. | The master has you flogged for meddling. The wedding is a week later. | brave risk5
ask: Когда в последний раз пришлось заступиться за родного человека? | When did you last stand up for one of your own?
door: Помочь ей бежать | Help her run away
out: 30 | Сестра уходит ночью. Её ищут с собаками и не находят. | Your sister slips away by night. They hunt for her with dogs and don't find her. | kind brave
out: 70 | Беглянку ловят на второй день. Её продают на сторону, а тебя бьют при всех. | The runaway is caught on the second day. She is sold away, and you are beaten in front of everyone. | risk10 brave

id: o_stone_stranger
groups: stone
tags: *
need:
ages: 19-51
weight: 1
q: К вашему огню выходит чужак. Один, без копья, худой. | A stranger comes up to your fire. Alone, no spear, thin.
door: Дать ему мяса и место у огня | Give him meat and a place by the fire
out: 50 | Он остаётся на зиму и показывает, как ставить силки по-своему. | He stays the winter and shows you his own way with snares. | kind wealth+1
out: 30 | Весной он уходит и уводит с собой девушку из вашего рода. | In spring he leaves and takes a girl of your band with him. | kind
out: 20 | Вместе с ним приходит кашель. Кашляют все, двое стариков умирают. | A cough comes with him. Everyone coughs; two of the old die. | kind risk10
ask: Кого ты считаешь своими? | Whom do you count as your own?
door: Прогнать камнями | Drive him off with stones
out: 80 | Он уходит и всё оглядывается. | He goes, looking back again and again. |
out: 20 | Через три луны приходят его люди. С копьями. | Three moons later his people come. With spears. | risk15 brave

id: o_stone_river
groups: stone
tags: *
need:
ages: 19-64
weight: 1
q: Река пересохла. Старшие спорят: идти к горам или к морю. | The river has dried up. The elders argue: the hills or the sea.
door: К горам, за стадами | To the hills, after the herds
out: 60 | В горах ручьи и олени. Зима долгая, но сытая. | The hills have streams and deer. A long winter, but a full one. | moved
out: 40 | На перевале вас застают холодные дожди. Доходят не все. | Cold rains catch you on the pass. Not everyone gets through. | moved risk20
door: К морю, за ракушками | To the sea, for shellfish
out: 70 | Море кормит всех: ракушки, рыба, птичьи яйца на скалах. | The sea feeds everyone: shellfish, fish, birds' eggs on the rocks. | sea moved wealth+1
out: 30 | На берегу уже живёт чужой род. За каждую отмель приходится драться. | Another band already lives on the shore. You fight for every sandbank. | sea moved risk10
door: Остаться и копать воду в русле | Stay and dig for water in the riverbed
out: 50 | Под песком находится вода. Мало, но хватает. | There is water under the sand. Not much, but enough. | brave
out: 50 | Звери ушли. Вы едите коренья и жуёте ремни. | The game is gone. You eat roots and chew leather straps. | risk15 wealth-1
ask: Куда ты пойдёшь, когда пересохнет твоя река? | Where will you go when your river runs dry?

id: o_stone_old
groups: stone
tags: *
need:
ages: 27-64
weight: 1
q: Пора уходить к новым угодьям. А бабка, что тебя вырастила, идти уже не может. | Time to move to new grounds. The grandmother who raised you can no longer walk.
door: Нести её на спине | Carry her on your back
out: 60 | Шесть дней ты несёшь её. Она поёт тебе те же песни, что в детстве. | Six days you carry her. She sings you the songs of your childhood. | kind love
out: 40 | Ты отстаёшь от своих и долго ищешь их следы. | You fall behind and search a long time for their tracks. | kind risk10
ep: Эта спина шесть дней несла старую бабку. | This back carried an old grandmother for six days.
door: Оставить ей огонь и еду | Leave her a fire and food
out: 100 | Она сама говорит: иди. Ты оглядываешься до самого холма. | She tells you to go herself. You look back all the way to the hill. |
ask: Кого пришлось оставить позади? | Whom have you had to leave behind?
door: Остаться с ней | Stay with her
shut: kids | У тебя дети. Их надо кормить в пути. | You have children. They must be fed on the way.
out: 50 | Через луну она умирает. Ты догоняешь своих по старым кострищам. | Within a moon she dies. You catch up with your people by their old fire pits. | kind risk15
out: 50 | Своих ты больше не находишь. Тебя принимает чужой род. | You never find your people again. A strange band takes you in. | moved risk10

id: o_stone_hunt
groups: stone
tags: *
need:
ages: 19-39
weight: 2
q: Охотники собираются на большого зверя. Зовут и тебя. | The hunters are going after big game. They call you too.
door: Пойти с копьём | Go with a spear
shut: f kids | У тебя грудной ребёнок. Его не оставишь. | You have a baby at the breast. You can't leave it.
out: 50 | Зверь падает. Мяса хватит до весны, а тебе достаётся клык на шею. | The beast falls. Meat till spring, and a tusk for you to wear round your neck. | wealth+1 brave
out: 30 | Раненый зверь уходит. Три дня вы идёте по кровавому следу. | The wounded beast gets away. Three days you follow the blood. | brave
out: 20 | Зверь разворачивается. | The beast turns. | risk30 brave
ask: Чего ты боишься и всё равно делаешь? | What do you fear and do anyway?
door: Остаться собирать | Stay and gather
out: 100 | Охотники приходят пустыми. Весь род ест твои орехи и коренья. | The hunters come back empty-handed. The whole band eats your nuts and roots. | kind

id: o_stone_hurt
groups: stone
tags: *
need:
ages: 19-51
weight: 1
q: На переходе охотник сломал ногу. Род ждать не может. | On the trek a hunter has broken his leg. The band can't wait.
door: Сделать волокушу и тащить его | Make a drag and haul him
out: 60 | Нога срастается криво. Он хромает, но учит мальчишек метать копьё. | The leg heals crooked. He limps, but teaches the boys to throw a spear. | kind
out: 40 | Вы отстаёте от рода и неделю идёте вдвоём. | You fall behind the band and walk a week, just the two of you. | kind risk15
ep: Не {бросил|бросила} раненого. | Did not leave the wounded behind.
ask: Кого ты потащишь на себе, если придётся? | Whom would you carry, if it came to that?
door: Идти дальше со всеми | Go on with the others
out: 100 | Ты оставляешь ему огонь и копьё. Он кивает. | You leave him fire and a spear. He nods. |

id: o_stone_fire
groups: stone
tags: *
need:
ages: 19-51
weight: 1
q: Ночью дождь залил огонь. Ближний огонь — у чужого рода за рекой. | The rain put out the fire in the night. The nearest fire is with a strange band across the river.
door: Идти к чужим за огнём | Go to the strangers for fire
out: 60 | Чужие дают тлеющий трут в раковине. Взамен берут твои бусы. | The strangers give you smouldering tinder in a shell. They take your beads in return. | brave
out: 25 | Тебя кормят и зовут на праздник. Так начинается дружба двух родов. | They feed you and ask you to their feast. So begins a friendship between two bands. | brave love
out: 15 | Чужие встречают тебя копьями. | The strangers meet you with spears. | risk25 brave
ask: У кого ты просишь огня, когда гаснет свой? | Whom do you ask for fire when your own goes out?
door: Добывать огонь трением | Make fire by friction
out: 50 | Два дня ты трёшь палку о палку. На третий идёт дымок. | Two days you rub stick on stick. On the third, a wisp of smoke. |
out: 50 | Дерево сырое. Неделю вы едите сырое мясо и мёрзнете. | The wood is wet. A week of raw meat and cold. | risk5

id: o_stone_kill
groups: stone
tags: *
need:
ages: 19-51
weight: 1
q: Далеко от стоянки, без свидетелей, ты валишь оленя. | Far from camp, with no one watching, you bring down a deer.
door: Принести в род, всем поровну | Bring it to the band, shares for all
out: 80 | Едят все. Старшие отдают тебе печень. | Everyone eats. The elders give you the liver. | kind
out: 20 | Делят так, что тебе достаются кишки. | It's shared so that you get the guts. | kind
door: Наесться и спрятать мясо | Eat your fill and hide the meat
out: 60 | Три дня ты ешь досыта. На переходе у тебя сил больше всех. | Three days you eat your fill. On the trek you are the strongest of all. | wealth+1
out: 40 | Тайник находят дети. С тобой перестают делиться. | Children find your cache. People stop sharing with you. |
ask: Чем труднее всего делиться? | What is hardest to share?

id: o_stone_cave
groups: stone
tags: *
need:
ages: 19-27
weight: 1
q: Старшие зовут тебя в глубь пещеры, где на стенах звери. Оттуда выходят взрослыми. | The elders call you deep into the cave, where beasts are painted on the walls. You come out a grown-up.
door: Пойти в темноту | Go into the dark
out: 60 | Тебе дают охру. Ты кладёшь свою ладонь рядом с ладонями предков. | They give you ochre. You set your hand beside the hands of the ancestors. | faith brave
out: 40 | Лампа гаснет. До утра ты сидишь во тьме и слышишь, как дышат стены. | The lamp goes out. Till morning you sit in the dark and hear the walls breathe. | faith brave
ep: Ладонь этого человека осталась на стене пещеры. | This hand is still on a cave wall.
ask: Где останется след твоей руки? | Where will the print of your hand remain?
door: Не ходить | Stay outside
out: 100 | Больше тебя не зовут. На охоте твоё место — в хвосте. | They never ask again. On the hunt your place is at the back. |

id: o_stone_gathering
groups: stone
tags: *
need: single
ages: 19-27
weight: 1
q: На большом сборе родов у реки тебе улыбается человек из чужого рода. | At the great gathering of bands by the river, someone from another band smiles at you.
door: Уйти в чужой род | Go to their band
out: 70 | Чужой род принимает тебя. Ты учишь их слова и их песни. | The other band takes you in. You learn their words and their songs. | love married moved
out: 30 | Тебя принимают, но до конца так и не считают своими. Ты тоскуешь по реке детства. | They take you in, but never quite as one of them. You miss the river of your childhood. | married moved
ask: Ради кого можно оставить свой род? | For whom would you leave your own people?
door: Остаться со своими | Stay with your own
out: 60 | Улыбка остаётся на том берегу. Через год сбор снова. | The smile stays on the far bank. Next year the gathering comes again. |
out: 40 | Через год свои находят тебе пару. | A year later your own band finds you a match. | married

id: o_purse_road
groups: anc med early
tags: af me eg med eu fr de it en ru in cn jp sea
need: !town
ages: 19-64
weight: 1
q: На дороге лежит кошель. Тяжёлый. Вокруг никого. | A purse lies on the road. Heavy. No one around.
door: Взять себе | Keep it
out: 60 | Серебра хватает на корову. Никто ни о чём не спрашивает. | There's silver enough for a cow. Nobody asks a thing. | wealth+1
out: 25 | Через неделю по сёлам ездит слуга и расспрашивает о кошеле. Ты закапываешь его под порогом. | A week later a servant rides round the villages asking about a purse. You bury it under the doorstep. | wealth+1
out: 15 | Хозяин находит тебя. Тебя секут на площади. | The owner finds you. You are flogged in the square. | risk5 wealth-1
door: Отнести старосте | Take it to the headman
shut: r0 | Найдут серебро у раба — никто не поверит, что найдено. | If silver turns up on a slave, nobody believes it was found.
out: 50 | Хозяин — купец. Он даёт тебе монету и при всех называет честным человеком. | The owner is a merchant. He gives you a coin and calls you honest in front of everyone. | kind
out: 50 | Староста забирает кошель. Больше его никто не видит. | The headman takes the purse. Nobody sees it again. |
ep: {Вернул|Вернула} хозяину найденное серебро. | Returned silver found on the road.
door: Пройти мимо | Walk past
out: 100 | Ты обходишь его стороной. Мало ли чьё. | You walk round it. Who knows whose it is. |
ask: Какая находка так и осталась у тебя? | What have you found and kept?

id: o_widow
groups: anc med early
tags: af me eg med eu fr de it en ru in cn jp sea
need: !town
ages: 27-64
weight: 2
q: Вдова на краю деревни осталась совсем одна. Крыша течёт, дров нет. | The widow at the edge of the village is all alone now. The roof leaks, and there's no firewood.
door: Взять её к себе | Take her in
shut: poor | Вам самим едва хватает. | You barely have enough yourselves.
out: 60 | Она прядёт за двоих и знает траву от любой хвори. | She spins for two and knows a herb for every ailment. | kind wealth+1
out: 40 | Она ворчит с утра до ночи. Но дети её любят. | She grumbles from dawn to dusk. But the children love her. | kind
door: Носить ей дрова и хлеб | Bring her wood and bread
out: 70 | Она доживает до весны. У колодца при всех кланяется тебе в пояс. | She lives till spring. At the well she bows low to you in front of everyone. | kind
out: 30 | В самые холода она всё равно умирает. Твой голос — последний, что она слышала. | In the worst of the cold she dies all the same. Yours was the last voice she heard. | kind
ep: Эти руки носили дрова одинокой вдове. | These hands carried wood to a lonely widow.
door: Это забота её родни | That's for her kin to see to
out: 70 | Родни нет. Весной дом стоит пустой, и ты забираешь её козу. | There are no kin. In spring the house stands empty and you take her goat. | wealth+1
out: 30 | Её находят в самые холода. Деревня долго об этом говорит. | She is found in the worst of the cold. The village talks of it a long time. |
ask: Кто рядом с тобой живёт совсем один? | Who near you lives all alone?

id: o_cure_seller
groups: anc med early
tags: af me eg med eu fr de it en ru in cn jp sea meso andes
need: kids
ages: 19-51
weight: 1
q: У ребёнка жар. На базаре человек продаёт снадобье и просит половину всего, что у вас есть. | Your child has a fever. At the market a man sells a cure and asks half of all you have.
door: Купить | Buy it
shut: poor | Отдать нечего: у вас нет и половины. | You have nothing to give: you don't have even half that.
out: 50 | На третий день жар спадает. Снадобье или время — кто знает. | On the third day the fever breaks. The cure or time, who knows. | wealth-1
out: 30 | Это мел с мёдом. Ребёнок поправляется сам. | It's chalk and honey. The child gets well on its own. | wealth-1
out: 20 | Не помогает. Ты хоронишь ребёнка и годами обходишь этот базар. | It doesn't help. You bury the child and for years go round that market. | wealth-1 kids-1
door: Лечить по-старому: отвар, молитва, тепло | Treat it the old way: brew, prayer, warmth
out: 70 | Три ночи ты не спишь. На четвёртую ребёнок просит есть. | Three nights you don't sleep. On the fourth the child asks for food. | faith
out: 30 | К весне ребёнок угасает. | By spring the child fades away. | kids-1
ask: Что ты отдашь за здоровье близкого? | What would you give for the health of someone close?

id: o_harvest_feast
groups: anc med early
tags: af me eg med eu fr de it en ru in cn jp sea meso andes
need: kids !town
ages: 19-51
weight: 1
q: Праздник урожая: вся деревня пляшет до утра. А у младшего кашель. | Harvest festival: the whole village dances till dawn. And the youngest has a cough.
door: Пойти на праздник | Go to the festival
out: 60 | Ты пляшешь до рассвета. Дома ребёнок спит у бабки на руках. | You dance till dawn. At home the child sleeps in grandmother's arms. | love
out: 25 | За ковшом пива сосед предлагает тебе выгодный обмен. | Over a dipper of beer a neighbour offers you a good trade. | wealth+1
out: 15 | К утру у ребёнка жар. Ты сидишь у постели и коришь себя. | By morning the child is burning. You sit by the bed blaming yourself. |
door: Остаться дома | Stay at home
out: 100 | Издалека слышна музыка. Ребёнок засыпает у тебя на коленях. | You hear the music from afar. The child falls asleep on your lap. | kind
ask: Какой праздник пришлось пропустить ради близкого? | What celebration have you missed for someone close?

id: o_pig_feud
groups: anc med early
tags: af me eg med eu fr de it en ru in cn jp sea
need: !town
ages: 19-55
weight: 2
q: Соседский сын украл у вас свинью. Все знают, но никто не видел. | The neighbour's son has stolen your pig. Everyone knows, but nobody saw.
door: Пойти к ним с братьями | Go round with your brothers
shut: f | Женщине не идти с дубьём на соседский двор. | A woman can't take a club to the neighbour's yard.
out: 50 | Свинью возвращают. С тех пор вы не здороваетесь. | The pig comes back. You stop greeting each other. | brave
out: 30 | Драка. Сосед ломает тебе руку, ты ему — нос. | A fight. The neighbour breaks your arm; you break his nose. | brave risk5
out: 20 | Вражда тянется до внуков. | The feud runs on to the grandchildren. |
door: Пойти к старосте | Go to the headman
shut: r0 | Слово холопа против слова свободного ничего не стоит. | A bondsman's word is worth nothing against a free man's.
out: 60 | Староста велит отдать двух поросят. Сосед приводит самых тощих. | The headman orders two piglets in return. The neighbour brings the scrawniest. | wealth+1
out: 40 | Староста соседу кум. Дело тянется, свинью давно съели. | The headman is the neighbour's godfather. The case drags on; the pig is long eaten. |
door: Забыть | Let it go
out: 70 | Через год сосед молча приносит мешок зерна. | A year later the neighbour brings a sack of grain without a word. | kind
out: 30 | Летом у вас пропадает гусь. | In summer you lose a goose. | wealth-1
ask: Какую обиду проще забыть, чем помнить? | Which grudge is easier to forget than to keep?

id: o_bandits
groups: anc med early
tags: af me eg med eu fr de it en ru in cn jp sea
need:
ages: 19-64
weight: 1
q: Ночью к дому выходят трое с ножами. Просят хлеба и не уходят. | Three men with knives come to the house at night. They want bread and won't leave.
door: Отдать, что просят | Give them what they ask
out: 70 | Они едят, забирают мешок муки и уходят. Зима будет голодной. | They eat, take a sack of flour and go. The winter will be hungry. | wealth-1
out: 30 | Старший кланяется на пороге. Весной у калитки находят мешок соли. | The leader bows at the door. In spring a sack of salt is left at your gate. | wealth+1 kind
door: Взять топор | Take up the axe
out: 40 | Они уходят. Видно, искали лёгкой добычи. | They go. They wanted easy pickings. | brave
out: 60 | Тебя ранят. Уходя, они поджигают крышу. | You are wounded. As they go, they set the roof alight. | risk25 wealth-1 brave
door: Тайком послать сына за соседями | Quietly send your son for the neighbours
shut: !kids | Послать некого: детей у тебя нет. | There's no one to send: you have no children.
out: 50 | Сбегается полдеревни с вилами. Разбойников ведут к господину. | Half the village comes running with pitchforks. The robbers are taken to the lord. | brave
out: 50 | Соседи боятся и не идут. А разбойники замечают, что мальчишка пропал. | The neighbours are afraid and don't come. And the robbers notice the boy is gone. | risk15
ask: Чего тебе страшнее всего лишиться? | What are you most afraid to lose?

id: o_plague
groups: med early
tags: af me eg med eu fr de it en ru in cn jp sea
need: !town
ages: 19-64
weight: 1
q: В деревне мор. Мёртвые лежат по дворам, хоронить некому. | Plague in the village. The dead lie in the yards with no one to bury them.
door: Остаться и хоронить | Stay and bury them
out: 50 | Неделю ты копаешь ямы. Хворь тебя обходит. | A week you dig graves. The sickness passes you by. | kind faith
out: 50 | На десятый день под мышкой вздувается шишка. | On the tenth day a lump swells under your arm. | kind risk40
ep: {Хоронил|Хоронила} мёртвых в мор, когда другие бежали. | Buried the dead in the plague when others fled.
door: Бежать в лес | Flee to the woods
shut: r0 | Холопу бежать некуда: беглых ловят и клеймят. | A bondsman has nowhere to run: runaways are caught and branded.
out: 60 | До холодов вы живёте в шалаше. Возвращаетесь в полупустую деревню, где земли теперь вдоволь. | You live in a hut of branches till the cold. You come back to a half-empty village with land to spare. | wealth+1
out: 40 | Хворь бежит вместе с вами. | The sickness flees with you. | risk25
ask: Что значит не бросить своих? | What does it mean not to abandon your own?

id: o_merchant_coast
groups: anc med early
tags: af me eg med eu fr de it en ru in cn jp sea
need:
ages: 19-27
weight: 1
q: Купец набирает людей в обоз до моря. Платит мало, зато обещает показать мир. | A merchant is hiring for a caravan to the coast. Low pay, but he promises to show you the world.
door: Пойти с обозом | Go with the caravan
shut: f | Женщин в обоз не берут. | Women aren't taken on the caravan.
shut: r0 | Хозяин тебя не отпустит. | Your master won't let you go.
out: 50 | Ты видишь море. Солёное, без другого берега. Домой везёшь деньги и рассказы. | You see the sea. Salt, with no far shore. You bring home money and stories. | sea wealth+1
out: 30 | В порту ты остаёшься насовсем. Домой шлёшь поклоны с купцами. | You stay in the port for good. You send greetings home with merchants. | sea moved town
out: 20 | На перевале обоз грабят. Домой ты бредёшь пешком, без гроша. | Robbers take the caravan on a pass. You walk home without a coin. | risk15
ep: {Ушёл|Ушла} с обозом к морю. | Went with a caravan to the sea.
door: Остаться дома | Stay at home
out: 80 | Обоз уходит на рассвете. Ты долго смотришь ему вслед. | The caravan leaves at dawn. You watch it go a long time. |
out: 20 | С обозом уходит твой друг. Он не возвращается. | Your friend goes with the caravan. He never comes back. |
ask: Куда тебя давно тянет уехать? | Where have you long wanted to go?

id: o_boundary
groups: anc med early
tags: af me eg med eu fr de it en ru in cn jp sea
need: !town
ages: 27-64
weight: 1
q: Ночью ты видишь, как сосед двигает межевой камень. На три шага в свою сторону. | At night you see your neighbour move the boundary stone. Three paces his way.
door: Передвинуть обратно ночью | Move it back at night
out: 60 | Камень стоит, где стоял. Сосед молчит, и ты молчишь. | The stone stands where it stood. The neighbour says nothing, and nor do you. |
out: 40 | Он передвигает снова. И так до весны. | He moves it again. And so till spring. |
door: Созвать сход | Call the village meeting
shut: f | На сход ходят мужчины. | Only men go to the meeting.
shut: r0 | Холопа на сходе не слушают. | Nobody at the meeting listens to a bondsman.
out: 60 | Старики помнят, где шла межа. Камень возвращают, соседа стыдят. | The old men remember the line. The stone goes back; the neighbour is shamed. | wealth+1
out: 40 | Сход делит спор пополам. Ты теряешь полтора шага земли и друга. | The meeting splits the difference. You lose a pace and a half of land, and a friend. |
door: Оставить как есть | Leave it be
out: 70 | Три шага — это сноп в год. Эти снопы ты считаешь всю жизнь. | Three paces is a sheaf a year. You count those sheaves all your life. | wealth-1
out: 30 | В голодный год сосед делится с тобой зерном. Может, из-за камня. | In a hungry year the neighbour shares his grain with you. Perhaps because of the stone. | kind
ask: Какую свою межу ты не отдашь? | Which of your boundaries will you never give up?

id: o_wetnurse
groups: anc med early
tags: af me eg med eu fr de it en ru in cn jp sea
need: f
ages: 19-39
weight: 1
q: Богатому дому нужна кормилица. Платят хорошо, но жить придётся у них. | A rich house needs a wet nurse. The pay is good, but you'd have to live with them.
door: Пойти в кормилицы | Become the wet nurse
shut: !kids | Молока у тебя нет: своего младенца нет. | You have no milk: you have no baby of your own.
out: 50 | Господский ребёнок растёт на твоём молоке, твой — на козьем. | The master's child grows on your milk, yours on goat's milk. | wealth+1
out: 30 | Выкормыш любит тебя всю жизнь и навещает в старости. | The nursling loves you all its life and visits you when you are old. | wealth+1 love
out: 20 | Без тебя твой младенец слабеет. | Without you, your own baby weakens. | wealth+1 kids-1
door: Отказать | Refuse
out: 100 | Ты кормишь своего. Денег нет, зато он спит у тебя на груди. | You nurse your own. No money, but he sleeps at your breast. |
ask: Чьё детство тебе довелось беречь? | Whose childhood have you watched over?

id: o_apprentice
groups: med early
tags: af me eg med eu fr de it en ru in cn jp sea
need: !town
ages: 19-27
weight: 1
q: Кузнец в городе ищет подмастерье. Семь лет учёбы за хлеб и угол. | A smith in town wants an apprentice. Seven years of learning for bread and a corner to sleep in.
door: Пойти в учение | Take the apprenticeship
shut: f | Девушек в кузню не берут. | Girls aren't taken in a smithy.
shut: r0 | Господин не отпустит тебя в город. | Your lord won't let you go to town.
out: 60 | Через семь лет у тебя своё клеймо. | Seven years on, you have your own maker's mark. | town wealth+1
out: 25 | Мастер бьёт и ничему не учит. На пятый год ты уходишь. | The master beats you and teaches nothing. In the fifth year you walk out. | town
out: 15 | Искра попадает в глаз. | A spark flies into your eye. | town risk5
ep: {Ушёл|Ушла} в учение к кузнецу. | Was apprenticed to a smith.
door: Остаться в деревне | Stay in the village
out: 100 | Ты пашешь, как отец. Подковы возишь чинить в город. | You plough like your father. You take the horseshoes to town to be mended. |
ask: Чему стоит учиться семь лет? | What is worth seven years of learning?

id: o_steward
groups: med
tags: eu fr de it en
need: kids !town
ages: 35-55
weight: 1
q: Управляющий господина хочет забрать твою дочь на кухню в усадьбу. | The lord's steward wants your daughter for the manor kitchen.
door: Отпустить | Let her go
out: 50 | Она сыта, в тепле и носит домой объедки с господского стола. | She is fed and warm, and brings home scraps from the lord's table. | wealth+1
out: 30 | Через год она выходит за конюха. Видитесь по праздникам. | A year later she marries a groom. You see her on feast days. | love
out: 20 | Через год она возвращается беременной. От кого — молчит. | After a year she comes home pregnant. She won't say by whom. | wealth-1
door: Сказать, что она нужна дома | Say she is needed at home
shut: r0 | Вы с дочерью принадлежите господину. Отказывать некому. | You and your daughter belong to the lord. There's no one to refuse.
out: 60 | Управляющий пожимает плечами и берёт соседскую. | The steward shrugs and takes the neighbour's girl. |
out: 40 | Управляющий запоминает. На другой год вам прибавляют барщины. | The steward remembers. Next year your labour dues go up. | wealth-1
door: Пойти на кухню вместо неё | Go to the kitchen in her place
shut: m | Мужчин на господскую кухню не берут. | Men aren't taken for the manor kitchen.
out: 100 | Ты печёшь хлеб на сорок ртов. Дочь растёт дома. | You bake bread for forty mouths. Your daughter grows up at home. | kind
ask: От чего хочется уберечь своих детей? | What would you keep your children from?

id: o_monk_letters
groups: med
tags: eu ru
need: kids
ages: 27-55
weight: 1
q: Странствующий монах берётся выучить твоего сына грамоте. Зиму он проживёт у вас. | A wandering monk offers to teach your son his letters. He'll spend the winter with you.
door: Оставить монаха на зиму | Keep the monk for the winter
shut: poor | Самим бы дотянуть до весны. Лишний рот не прокормить. | You'll barely last till spring yourselves. One more mouth is too many.
out: 50 | К весне сын читает Псалтирь. Его зовут читать над покойниками. | By spring your son reads the Psalter. He's called to read over the dead. | wealth+1 faith
out: 30 | Сын уходит с монахом. Через десять лет от него приходит письмо, а прочесть некому. | Your son goes off with the monk. Ten years later a letter comes from him, and no one can read it. | faith
out: 20 | Монах учит и тебя. Буквы у тебя кривые, но свои. | The monk teaches you too. Your letters are crooked, but they are yours. | lit
ep: {Кормил|Кормила} монаха всю зиму, чтобы сын знал буквы. | Fed a monk all winter so a son could learn his letters.
door: Отказать: руки нужнее букв | Refuse: hands matter more than letters
out: 70 | Сын пашет с тобой. Весной он нужнее любого монаха. | Your son ploughs with you. In spring he's worth more than any monk. | wealth+1
out: 30 | Монах зимует у соседей. Их мальчишка потом служит писарем у господина. | The monk winters with the neighbours. Their boy later becomes the lord's clerk. |
ask: Чему тебя научил чужой человек? | What did a stranger once teach you?

id: o_crusade
groups: med
tags: eu fr de it en
need: !town
ages: 19-39
weight: 1
q: На площади проповедник зовёт в крестовый поход. Обещает отпущение всех грехов. | In the square a preacher calls for a crusade. He promises every sin forgiven.
door: Нашить крест | Sew on the cross
shut: r0 | Господин своих людей не отпускает. | The lord won't let his people go.
out: 30 | Ты доходишь до Иерусалима. Сил хватает только плакать. | You reach Jerusalem. You have strength only to weep. | faith moved sea risk20
out: 40 | Через четыре года ты возвращаешься, без друзей и без денег. | Four years later you come back, with no friends and no money. | faith sea wealth-1 risk15
out: 30 | До моря вы так и не доходите. Людей косит лихорадка. | You never even reach the sea. Fever cuts people down. | risk50 faith
ep: {Нашил|Нашила} крест и {ушёл|ушла} в поход. | Took the cross and went.
door: Остаться дома | Stay at home
out: 70 | Ты пашешь поле соседа, ушедшего в поход. Он не возвращается. | You plough the field of a neighbour who went. He doesn't come back. | wealth+1
out: 30 | Проповедник проклинает оставшихся. Он потом долго снится тебе по ночам. | The preacher curses those who stay. You dream of him for a long time after. |
ask: Во что хотелось бы верить так же сильно? | What would you like to believe in that strongly?

id: o_burial_fee
groups: med
tags: eu fr de it en
need: !town
ages: 27-55
weight: 1
q: Умер отец. Священник требует за отпевание вторую корову. Так заведено. | Your father has died. The priest claims your second-best cow for the burial. That is the custom.
door: Отдать корову | Give the cow
out: 80 | Отца хоронят у церкви, под колокол. Мать спокойна. | Your father is buried by the church, to the bell. Your mother is at peace. | faith wealth-1
out: 20 | У священника корова телится двойней. Одну тёлочку он отдаёт тебе. | At the priest's the cow calves twins. He gives you one of the heifers. | faith
door: Предложить вместо коровы работу | Offer work instead of the cow
out: 50 | Всё лето ты чинишь церковную крышу. Священник доволен. | All summer you mend the church roof. The priest is satisfied. |
out: 50 | Священник не согласен. Отца хоронят за оградой, без колокола. | The priest refuses. Your father is buried outside the wall, without the bell. |
door: Похоронить самим, ночью | Bury him yourselves, at night
out: 60 | Вы копаете могилу под старым дубом. Мать сама поёт над ним. | You dig the grave under the old oak. Your mother sings over him herself. |
out: 40 | Об этом узнают. Тебя не пускают в церковь до Пасхи. | It comes out. You are kept out of church till Easter. |
ask: Как бы хотелось, чтобы тебя проводили? | How would you like to be seen off?

id: o_horde_tax
groups: med
tags: ru
need: !town
ages: 19-64
weight: 1
q: Приехал ордынский баскак, переписывает дворы. За недоимку уводят в полон. | The Horde's tax man has come and is counting the households. Those who fall short are led away as captives.
door: Отдать последнее | Give your last
out: 70 | Баскак уезжает. Зиму вы живёте на мякине. | The tax man rides off. You live on chaff all winter. | wealth-1
out: 30 | Отдали, а через месяц едут снова. | You've paid, and a month later they come again. | wealth-2
door: Спрятать семью в лесу | Hide the family in the woods
out: 50 | Неделю вы сидите в овраге. Двор пуст, и баскак проезжает мимо. | A week in a ravine. The yard stands empty, and the tax man rides past. | wealth+1
out: 50 | Двор сожгли. Новый вы ставите в лесу. | They burn the yard. You build a new one in the woods. | wealth-1 moved
door: Подняться всем селом | Rise up with the whole village
out: 30 | Баскака выгоняют. Потом князь сам возит дань в Орду. | You drive the tax man out. After that the prince takes the tribute to the Horde himself. | brave
out: 70 | Через месяц приходит отряд. Село жгут. | A month later a troop comes. The village is burned. | brave risk30 wealth-2
ep: {Гнал|Гнала} баскака из своего села. | Drove the Horde's tax man out of the village.
ask: Где граница, после которой терпеть уже нельзя? | Where is the line past which you can't endure any more?

id: o_yuriev
groups: med
tags: ru
need: r1 !town
ages: 19-51
weight: 1
q: Подошёл Юрьев день. Соседний боярин зовёт к себе: три года без податей. | St George's Day is here. A neighbouring boyar invites you onto his land: three years free of dues.
door: Уйти к новому боярину | Move to the new boyar
shut: poor | Чтобы уйти, надо заплатить пожилое. Платить нечем. | To leave you must pay the departure fee. You have nothing to pay with.
out: 60 | Три года без податей. Ты ставишь новую избу на расчищенной земле. | Three years without dues. You raise a new hut on cleared ground. | moved wealth+1
out: 40 | На новом месте лес да болото. Льготные годы кончаются, а земля так и не родит. | The new place is forest and bog. The free years end, and the land still won't yield. | moved wealth-1
door: Остаться у своего | Stay with your own lord
out: 70 | Свой боярин строг, но знаком. И могилы родни рядом. | Your own boyar is strict, but you know him. And your kin's graves are near. |
out: 30 | Ходят слухи, что скоро уходить в Юрьев день запретят. | There's talk that leaving on St George's Day will soon be forbidden. |
ask: Где твоё место: там, где родня, или там, где лучше? | Where do you belong: with your kin, or where life is better?

id: o_corvee_canal
groups: anc med
tags: cn
need: !town
ages: 19-39
weight: 1
q: Пришёл указ: от каждого двора по человеку — копать канал. На полгода. | An order has come: one person from every household to dig the canal. For half a year.
door: Пойти самому | Go yourself
shut: f | На канал гонят мужчин. | They send men to the canal.
out: 50 | Полгода в глине по колено. Возвращаешься кожа да кости. | Half a year knee-deep in clay. You come home skin and bone. |
out: 30 | На канале у тебя появляется друг с юга. Он учит тебя считать. | On the canal you make a friend from the south. He teaches you to count. |
out: 20 | По лагерю ходит лихорадка. | Fever goes round the camp. | risk25
door: Отправить младшего брата | Send your younger brother
out: 60 | Брат возвращается к жатве. Злой, но живой. | Your brother is back by harvest. Angry, but alive. |
out: 40 | Брат не возвращается. Мать до самой смерти не говорит с тобой. | Your brother doesn't come back. Your mother doesn't speak to you till she dies. |
door: Откупиться у чиновника | Pay off the official
shut: poor | Откупиться нечем. | You have nothing to pay with.
out: 70 | Чиновник берёт двух свиней и вычёркивает ваш двор. | The official takes two pigs and crosses out your household. | wealth-1
out: 30 | Деньги взяты, а через месяц приходит новый чиновник с тем же указом. | The money is taken, and a month later a new official comes with the same order. | wealth-2
ask: Какую повинность ты несёшь, не выбирая? | What duty do you carry without ever choosing it?

id: o_exam_cn
groups: med early
tags: cn
need: kids !town
ages: 35-55
weight: 1
q: Учитель говорит: у твоего сына голова для экзаменов. Нужен наставник, а это три урожая. | The teacher says your son has a head for the examinations. That means a tutor, and three harvests' worth of money.
door: Продать поле и учить сына | Sell a field and educate your son
shut: poor | Продавать нечего: поле не ваше, вы его арендуете. | There's nothing to sell: the field isn't yours, you rent it.
out: 25 | Сын сдаёт уездный экзамен. В деревне с вами теперь говорят иначе. | Your son passes the county examination. The village speaks to you differently now. | wealth+2
out: 50 | Сын трижды проваливается. Учит детей грамоте в соседнем селе. | Your son fails three times. He teaches children their letters in the next village. | wealth-1
out: 25 | Сын проваливается, а к плугу вернуться не может. Пьёт. | Your son fails and can't go back to the plough. He drinks. | wealth-2
ep: {Продал|Продала} поле, чтобы сын учился. | Sold a field so a son could study.
door: Оставить сына в поле | Keep your son in the fields
out: 70 | Сын пашет и женится. Иногда палочкой выводит иероглифы на земле. | Your son ploughs and marries. Sometimes he writes characters in the dirt with a stick. |
out: 30 | Сын этого так и не прощает. | Your son never forgives you for it. |
ask: Чем пришлось пожертвовать ради чужого будущего? | What have you given up for someone else's future?

id: o_varanasi
groups: anc med early
tags: in
need:
ages: 39-64
weight: 1
q: Соседи идут в Варанаси, к Гангу. Зовут с собой. Месяц пути пешком. | The neighbours are going on pilgrimage to Varanasi, to the Ganges. They ask you along. A month on foot.
door: Пойти | Go
shut: r0 | Хозяин не отпустит тебя на месяц. | Your master won't spare you for a month.
out: 60 | На рассвете ты входишь в Ганг вместе с тысячами других. Домой несёшь кувшин священной воды. | At dawn you step into the Ganges among thousands. You carry home a jar of holy water. | faith
out: 25 | Жрецы у реки берут за каждую молитву. До дома ты доходишь без гроша. | The priests by the river charge for every prayer. You reach home without a coin. | faith wealth-1
out: 15 | В Варанаси лихорадка. | There's fever in Varanasi. | risk25 faith
ep: Эти ноги дошли до Ганга. | These feet walked to the Ganges.
door: Остаться и передать горсть риса для жрецов | Stay, and send a handful of rice for the priests
out: 100 | Соседи возвращаются с водой из Ганга и делятся с тобой каплей. | The neighbours come back with Ganges water and share a drop with you. |
ask: Куда хотелось бы дойти пешком? | Where would you like to walk to?

id: o_caste_council
groups: med early
tags: in
need:
ages: 27-64
weight: 1
q: Совет касты требует штраф: твой брат ел с людьми чужой касты. | The caste council demands a fine: your brother ate with people of another caste.
door: Заплатить и устроить обед для всей касты | Pay, and give a feast for the whole caste
shut: poor | Обед на всю касту вам не по силам. | A feast for the whole caste is beyond you.
out: 80 | Брата снова пускают к общему колодцу. Ты два года в долгах. | Your brother is let back to the common well. You're two years in debt. | wealth-1 kind
out: 20 | Обед выходит богатым. Старейшины говорят о тебе с уважением. | It's a rich feast. The elders speak of you with respect. | wealth-1
door: Отречься от брата | Disown your brother
out: 60 | Брат уходит в город. Больше ты его не видишь. | Your brother goes off to the city. You never see him again. |
out: 40 | Брат прижился у тех, с кем ел. Говорят, он счастлив. | Your brother has settled with those he ate with. He's happy, they say. |
door: Спорить с советом | Argue with the council
shut: f | Женщину на совет не зовут. | Women aren't called to the council.
out: 30 | Один старик встаёт на твою сторону. Штраф уменьшают вдвое. | One old man takes your side. The fine is halved. | brave
out: 70 | Совет запрещает всей семье брать воду из общего колодца. | The council bars your whole family from the common well. | wealth-1 brave
ask: С кем тебе не позволяли сидеть за одним столом? | Whom were you not allowed to sit at the table with?

id: o_caravan
groups: med early
tags: me
need:
ages: 19-39
weight: 1
q: Хозяин каравана нанимает погонщиков до Дамаска. Сорок дней через пустыню. | The caravan master is hiring drivers to Damascus. Forty days across the desert.
door: Наняться | Sign on
shut: f | Женщин в погонщики не берут. | Women aren't taken as drivers.
out: 50 | В Дамаске базар торгует шёлком и стеклом. Тебе платят серебром. | In Damascus the bazaar sells silk and glass. You're paid in silver. | wealth+1 town
out: 30 | В пустыне пустеют два бурдюка. Три дня ты пьёшь верблюжье молоко. | Two waterskins run dry in the desert. For three days you drink camel's milk. | brave
out: 20 | На караван нападают кочевники. | Nomads attack the caravan. | risk20
door: Остаться в оазисе | Stay in the oasis
out: 100 | Финики созревают в срок. Караван уходит без тебя. | The dates ripen on time. The caravan leaves without you. |
ask: Какой дальний путь до сих пор зовёт? | What long road still calls you?

id: o_qadi
groups: med early
tags: me
need:
ages: 27-55
weight: 1
q: Сосед взял у тебя в долг и не отдаёт. Можно пойти к кади. | A neighbour borrowed from you and won't pay it back. You could go to the qadi.
door: Пойти к кади | Go to the qadi
shut: r0 | Раб со свободным не судится. | A slave can't take a free man to court.
out: 50 | Кади выслушивает обоих и велит соседу вернуть долг до праздника. | The qadi hears you both and orders the neighbour to pay before the feast. | wealth+1
out: 30 | Нужны два свидетеля, а у тебя один. Дело проиграно. | You need two witnesses and have one. The case is lost. |
out: 20 | Сосед приводит трёх свидетелей, что долг отдан. Все трое лгут. | The neighbour brings three witnesses that the debt was paid. All three lie. | wealth-1
door: Простить долг | Forgive the debt
out: 60 | Соседу стыдно. Через год он приносит больше, чем брал. | The neighbour is ashamed. A year later he brings back more than he took. | kind wealth+1
out: 40 | Деньги пропали. Зато теперь сосед кланяется тебе первым. | The money is gone. But now the neighbour bows to you first. | kind
ask: Какой долг легче простить, чем требовать? | Which debt is easier to forgive than to claim?

id: o_griot
groups: med early
tags: af
need: !town
ages: 19-51
weight: 1
q: На свадьбе гриот обещает вставить твой род в песню. Просит за это козу. | At a wedding the griot promises to put your family in his song. He asks a goat for it.
door: Отдать козу | Give the goat
shut: poor | Козы у вас нет. | You have no goat.
out: 70 | Твоё имя поют на свадьбах ещё сорок лет. | Your name is sung at weddings for forty years. | wealth-1
out: 30 | Гриот путает имена. Песня выходит про чужой род. | The griot mixes up the names. The song comes out about another family. | wealth-1
ep: Это имя пели гриоты. | The griots sang this name.
door: Оставить козу себе | Keep the goat
out: 80 | Песня про соседей. Ты подпеваешь. | The song is about the neighbours. You sing along. |
out: 20 | Гриот поёт про скупых. Все понимают, про кого. | The griot sings about misers. Everyone knows whom he means. |
ask: Кто будет помнить твоё имя через сорок лет? | Who will remember your name in forty years?

id: o_salt
groups: med
tags: af
need: !town
ages: 19-39
weight: 1
q: Караван уходит на север, в Тагазу, за солью. Нужны молодые. | A caravan is leaving north for Taghaza, for salt. They need young people.
door: Уйти с караваном | Go with the caravan
shut: f | В соляной караван женщин не берут. | Women don't go with the salt caravan.
out: 50 | Через три месяца ты возвращаешься с плитой соли. Её меняют почти на тот же вес золота. | Three months later you return with a slab of salt. It trades for nearly its weight in gold. | wealth+2
out: 30 | В Тагазе даже дома из соли, и вода солёная. Домой ты приходишь больным. | In Taghaza even the houses are salt, and so is the water. You come home sick. | risk15 wealth+1
out: 20 | Песчаная буря разбивает караван. | A sandstorm breaks up the caravan. | risk30
door: Остаться и сеять просо | Stay and sow millet
out: 100 | Просо всходит. Караван возвращается без двоих. | The millet comes up. The caravan returns two men short. |

id: o_mita
groups: med
tags: andes
need: !town
ages: 19-51
weight: 1
q: Пришла очередь вашей семьи в миту: год работы на дороге инки. | Your family's turn for the mit'a has come: a year's work on the Inca's road.
door: Пойти | Go
out: 60 | Год ты кладёшь камни на горном перевале. Кормят со складов инки, сытнее, чем дома. | A year laying stones on a mountain pass. You're fed from the Inca's storehouses, better than at home. | wealth+1
out: 25 | На стройке ты встречаешь человека из дальней долины. Домой вы возвращаетесь вдвоём. | On the works you meet someone from a far valley. You come home together. | love married
out: 15 | С перевала срывается камень. | A stone breaks loose on the pass. | risk20
door: Просить у курака отсрочки | Ask the kuraka for a delay
shut: r0 | Ты слуга инки. Тебя не спрашивают. | You are the Inca's servant. Nobody asks you.
out: 50 | Курака соглашается: дети у тебя ещё малы. Пойдёшь через год. | The kuraka agrees: your children are still small. You'll go next year. |
out: 50 | Курака отказывает и запоминает просьбу. Тебе дают самый дальний участок. | The kuraka says no and remembers that you asked. You get the farthest stretch. | risk10
ask: Какую работу ты делаешь только потому, что так надо? | What work do you do only because it must be done?

id: o_flower_war
groups: med
tags: meso
need:
ages: 19-27
weight: 1
q: Объявлена цветочная война с соседним городом. Юноши должны взять пленника для жертвы. | A flower war is declared with the next city. The young men must take a captive for the sacrifice.
door: Пойти в бой | Go into battle
shut: f | Женщин на войну не берут. | Women don't go to war.
out: 40 | Ты берёшь пленника. Тебе дают право носить плащ с узором. | You take a captive. You earn the right to wear a patterned cloak. | brave wealth+1
out: 40 | Ты возвращаешься ни с чем. Девушки смеются тебе вслед. | You come back with nothing. The girls laugh behind your back. | brave
out: 20 | В плен берут тебя. | You are the one taken captive. | risk60 brave
door: Провожать и ждать | See them off and wait
out: 100 | Ты ждёшь у дороги с водой и лепёшками. Возвращаются не все. | You wait by the road with water and tortillas. Not all of them come back. |
ask: Чем в твоё время доказывают смелость? | How do people prove their courage in your time?

id: o_cacao
groups: med
tags: meso
need: !town
ages: 19-39
weight: 1
q: Купец-почтека берёт носильщиков на юг, за какао и перьями кецаля. Полгода пути. | A pochteca merchant is taking porters south, for cacao and quetzal feathers. Half a year on the road.
door: Пойти носильщиком | Go as a porter
shut: f | Носильщики — мужчины. | Porters are men.
out: 50 | Ты возвращаешься с мешочком какао-бобов. На них можно купить индюка. | You come back with a bag of cacao beans. They'll buy a turkey. | wealth+1
out: 30 | Ты видишь море и город, где говорят на чужом языке. | You see the sea, and a city where they speak another tongue. | sea
out: 20 | В горах на носильщиков нападают. | The porters are attacked in the hills. | risk20
door: Остаться дома | Stay at home
out: 100 | Ты сажаешь на одном поле маис, бобы и тыкву. | You plant maize, beans and squash in one field. |

id: o_ikki
groups: med
tags: jp
need: !town
ages: 19-55
weight: 1
q: Окрестные деревни поднимаются против нового рисового налога. Гонец зовёт и вашу. | The villages round about are rising against the new rice tax. A runner calls on yours too.
door: Пойти с бамбуковыми копьями | Go with bamboo spears
out: 40 | Управляющий бежит. Налог отменяют — до следующего князя. | The steward flees. The tax is lifted, until the next lord. | brave wealth+1
out: 40 | Зачинщиков казнят у дороги. Тебя отпускают. | The ringleaders are executed by the road. You are let go. | brave
out: 20 | Самураи разгоняют толпу. | The samurai break up the crowd. | risk30 brave
ask: Ради чего можно выйти вместе со всеми? | What would bring you out to stand with everyone?
door: Остаться на рисовом поле | Stay in the paddy
out: 70 | Ты сажаешь рис. Налог платят все: и кто ходил, и кто нет. | You plant the rice. Everyone pays the tax, those who went and those who didn't. |
out: 30 | Вернувшись, соседи с тобой не здороваются. | When they come back, the neighbours won't greet you. |

id: o_tithe
groups: anc
tags: me eg
need: !town
ages: 19-64
weight: 1
q: Храм требует десятую часть урожая. А урожай скудный. | The temple wants a tenth of the harvest. And the harvest is thin.
door: Отдать всё, что положено | Give all that is due
out: 60 | Писец храма ставит отметку в списке. Весной вы едите лебеду. | The temple scribe makes a mark in his list. In spring you eat weeds. | wealth-1 faith
out: 40 | В засуху храм раздаёт зерно. Твоё имя есть в списке. | In the drought the temple hands out grain. Your name is on the list. | faith
door: Спрятать часть зерна в кувшине под полом | Hide some grain in a jar under the floor
out: 60 | Никто не находит. Дети едят до весны. | Nobody finds it. The children eat till spring. | wealth+1
out: 40 | Сосед доносит. У ворот храма тебя бьют палками. | A neighbour informs. You are beaten with rods at the temple gate. | wealth-1 risk5
door: Попросить писца записать долг на будущий год | Ask the scribe to enter it as a debt for next year
shut: poor | Писцу полагается подарок, а дарить нечего. | The scribe expects a gift, and you have nothing to give.
out: 50 | Следующий год щедрый. Ты расплачиваешься, и ещё остаётся. | Next year is generous. You pay up and there's some left over. |
out: 50 | Долг растёт. Через три года за него уходит поле. | The debt grows. In three years a field goes to pay it. | wealth-2
ask: Какой долг висит на тебе дольше всего? | Which debt has hung on you the longest?

id: o_freedom_war
groups: anc med
tags: af me eg med eu fr de it en ru in cn jp sea meso andes
need: r0
ages: 19-39
weight: 1
q: Хозяину нужны люди на войну. Кто пойдёт, тому обещана свобода. | Your master needs men for the war. Whoever goes is promised freedom.
door: Пойти | Go
shut: f | Женщин на войну не берут. | Women aren't taken to war.
out: 40 | Ты возвращаешься со шрамом и свободой. | You come back with a scar and your freedom. | free brave
out: 30 | Ты возвращаешься, а хозяин уже не помнит обещания. | You come back, and the master no longer remembers his promise. | brave
out: 30 | Битва страшнее, чем рассказывали. Из десятка ваших возвращаются трое. | The battle is worse than they said. Of your ten, three come back. | risk40 brave
ask: Чем можно заплатить за свободу? | What can freedom be paid for with?
door: Остаться | Stay
out: 70 | Ты работаешь за ушедших. Их доля теперь твоя. | You work for those who left. Their share is yours now. |
out: 30 | Ушедших вернулось мало. Хозяин в нужде продаёт часть людей, и тебя тоже. | Few of those who went come back. The master, in need, sells some of his people, you among them. | moved

id: o_scribe_school
groups: anc
tags: me eg
need: kids !town
ages: 27-51
weight: 1
q: Писец при храме берёт мальчиков в ученики. Учёба долгая, платить зерном. | The temple scribe takes boys as pupils. The study is long, and paid in grain.
door: Отдать сына | Send your son
shut: poor | Зерна на плату нет. | There's no grain for the fee.
shut: r0 | Детей раба в писцы не берут. | A slave's children are not taken as scribes.
out: 50 | Сын становится писцом. Соседи теперь кланяются тебе первыми. | Your son becomes a scribe. The neighbours bow to you first now. | wealth+2
out: 30 | Учитель бьёт палкой. На третий год сын сбегает домой. | The teacher beats with a stick. In the third year your son runs home. | wealth-1
out: 20 | Сын учит и тебя: пять знаков, твоё имя. | Your son teaches you too: five signs, your name. | lit
door: Оставить его на поле | Keep him in the fields
out: 100 | Сын работает рядом с тобой. В разлив вы вдвоём ловите рыбу. | Your son works beside you. In the flood season you fish together. |
ask: Какая учёба изменила твою жизнь? | What learning changed your life?

id: o_debt
groups: anc
tags: me med
need: kids !town
ages: 27-51
weight: 1
q: Долг ростовщику не отдать. По закону он может забрать в дом на три года тебя или ребёнка. | You can't pay the moneylender. By law he may take you or your child into his house for three years.
door: Пойти к нему самому | Go to him yourself
out: 60 | Три года ты мелешь его зерно. На четвёртый тебя отпускают. | Three years you grind his grain. In the fourth you are let go. |
out: 40 | Пока тебя нет, дома голодают. | While you're gone, they go hungry at home. | wealth-1
door: Отдать ребёнка | Give the child
out: 60 | Через три года ребёнок возвращается. Выросший и чужой. | Three years later the child comes back. Grown, and a stranger. |
out: 40 | Хозяин оказывается добрым. Ребёнок выучился у него счёту. | The master turns out kind. The child has learned to reckon from him. |
door: Продать поле | Sell the field
shut: poor | Поля у тебя нет. Есть только долг. | You have no field. Only the debt.
out: 100 | Долг закрыт. Теперь ты пашешь чужую землю за треть урожая. | The debt is cleared. Now you work another man's land for a third of the crop. | wealth-2
ask: Чем однажды пришлось заплатить за долг? | What have you once had to pay a debt with?

id: o_nile_tomb
groups: anc
tags: eg
need: !town
ages: 19-39
weight: 1
q: Нил разлился, поля под водой. Писцы набирают людей таскать камни для гробницы фараона. | The Nile is up and the fields are under water. Scribes are gathering men to haul stone for Pharaoh's tomb.
door: Пойти на стройку | Go to the works
shut: f | Женщин на стройку не берут. | Women aren't taken for the works.
out: 60 | Три месяца ты тянешь канат вместе с отрядом. Кормят хлебом, луком и пивом. | Three months on a rope with your gang. You're fed bread, onions and beer. | wealth+1
out: 25 | Ваш отряд выцарапывает своё имя на камне. Оно останется там надолго. | Your gang scratches its name on a block. It will stay there a long time. | brave
out: 15 | Срывается блок. | A block slips. | risk25
ep: {Таскал|Таскала} камни для гробницы фараона. | Hauled stone for Pharaoh's tomb.
door: Переждать разлив дома | Wait out the flood at home
out: 100 | Ты чинишь сети и плетёшь корзины. К осени вода уходит. | You mend nets and weave baskets. By autumn the water goes down. |
ask: Что из сделанного тобой переживёт тебя? | What that you've made will outlive you?

id: o_ostrakon
groups: anc
tags: med
need: !town
ages: 19-64
weight: 0.5
q: Город голосует черепками: кого изгнать на десять лет. На площади раздают черепки. | The city votes with potsherds: whom to exile for ten years. Shards are handed out in the square.
door: Нацарапать имя богача, что скупил землю | Scratch the name of the rich man who bought up the land
shut: f | Женщины не голосуют. | Women don't vote.
shut: r0 | Рабы не голосуют. | Slaves don't vote.
shut: !lit | Букв ты не знаешь. | You don't know your letters.
out: 60 | Богача изгоняют. Его земля дешевеет, и ты покупаешь клочок. | The rich man is exiled. His land goes cheap, and you buy a strip. | wealth+1
out: 40 | Изгоняют другого. А богач узнаёт, кто писал его имя. | Someone else is exiled. And the rich man learns who wrote his name. | wealth-1
door: Стоять в стороне | Stand aside
out: 100 | Ты смотришь, как растёт гора черепков. | You watch the pile of shards grow. |
ask: Когда у тебя в последний раз был голос? | When did you last have a say?

id: o_legion
groups: anc med
tags: med it
need: !town
ages: 19-27
weight: 1
q: Вербовщик набирает в легион. Двадцать лет службы, потом — земля. | A recruiter is enlisting for the legion. Twenty years' service, then land.
door: Записаться | Sign up
shut: f | Женщин в легион не берут. | Women aren't taken into the legion.
shut: r0 | Рабов в легион не берут. | Slaves aren't taken into the legion.
out: 40 | Через двадцать лет ты получаешь надел у чужой реки и ставишь дом. | Twenty years on you get a plot by a foreign river and build a house. | moved wealth+1 brave
out: 30 | Ты видишь Рейн, Дунай и море на краю света. Дома тебя уже не узнают. | You see the Rhine, the Danube and the sea at the edge of the world. At home nobody knows you any more. | moved sea brave
out: 30 | Чужой лес. Из твоей когорты не возвращается никто. | A foreign forest. Nobody from your cohort comes back. | risk50 brave
door: Остаться на отцовской земле | Stay on your father's land
out: 70 | Виноградник родит. Ты возишь вино в город. | The vineyard bears. You take wine to town. | wealth+1
out: 30 | Земли мало, братьев много. Ты идёшь в город таскать мешки. | Little land, many brothers. You go to town to carry sacks. | town
`,O=class e{ru;en;constructor(e,t){this.ru=e,this.en=t}of(e){return e?this.ru:this.en}g(t){return new e(e.mark(this.ru,t),e.mark(this.en,t))}plus(t){return new e(this.ru+t.ru,this.en+t.en)}equals(e){return!!e&&e.ru===this.ru&&e.en===this.en}static mark(e,t){return e.replace(/\{([^|}]*)\|([^}]*)\}/g,(e,n,r)=>t===`M`?n:r)}},we=class e{eraI;area;sex;constructor(e=null,t=null,n=null){this.eraI=e,this.area=t,this.sex=n}get any(){return this.eraI==null&&this.area==null&&this.sex==null}copy(t){return new e(t.eraI===void 0?this.eraI:t.eraI,t.area===void 0?this.area:t.area,t.sex===void 0?this.sex:t.sex)}encode(){return[this.eraI??``,this.area??``,this.sex??``].join(`,`)}static decode(t){let n=t?.split(`,`);if(!n||n.length!==3)return new e;let r=/^-?\d+$/.test(n[0])?parseInt(n[0],10):null;return new e(r,n[1]||null,n[2]===`M`||n[2]===`F`?n[2]:null)}},k=(e,t)=>new O(e,t),A=(...e)=>e,j=(...e)=>new Set(e),Te=(e,t,n)=>[e,t,n],Ee=e=>`#`+(e&16777215).toString(16).padStart(6,`0`);function De(e,t,n,r,i,a,o,s,c,l,u,d,f,p){return{i:e,group:t,name:n,span:r,from:i,to:a,births:o,q0:s,die:c,lit:l,fert:u,color:Ee(d),regions:f,estates:p}}function M(e,t,n,r,i,a,o,s,c=!1){return{key:e,name:k(t,n),w:r,lon:i,lat:a,cult:o,tags:new Set(s.split(` `)),sea:c}}function N(e,t,n,r,i,a,o,s=null){return{key:e,of:k(t,n),w:r,rank:i,work:k(a,o),only:s==null?null:new Set(s.split(` `))}}function P(e,t,n){return{key:e,name:t,regions:n}}var Oe=k(`{Пашешь с отцом.|Прядёшь, жнёшь и смотришь за младшими.}`,`{You plough with your father.|You spin, reap and mind the little ones.}`);function ke(e){return A(N(`farm`,`крестьян`,`peasants`,78,1,Oe.ru,Oe.en),N(`bond`,`холопов`,`bondsmen`,e*100,0,`Работаешь на господском дворе без платы.`,`You work in the lord's yard for no pay.`),N(`craft`,`ремесленников`,`craftsmen`,8,2,`{Стоишь у горна.|Помогаешь в лавке.}`,`{You stand at the forge.|You help in the shop.}`),N(`trade`,`торговцев`,`merchants`,4,2,`Считаешь мешки и учишь цены.`,`You count sacks and learn the prices.`),N(`temple`,`служителей храма`,`temple servants`,2.5,3,`Подметаешь храм и учишь молитвы.`,`You sweep the temple and learn the prayers.`),N(`war`,`воинов`,`warriors`,2,2,`{Чистишь коня и оружие.|Шьёшь и стряпаешь на всю дружину.}`,`{You groom the horse and clean the arms.|You sew and cook for the whole band.}`),N(`noble`,`знатного рода`,`a noble house`,1.5,3,`Учишься держаться в седле и при гостях.`,`You learn to sit a horse and to sit with guests.`))}var F=A(De(0,`STONE`,k(`Каменный век`,`Stone Age`),k(`до 8000 до н.э.`,`before 8000 BC`),-5e4,-8e3,9,.45,Te(8,30,70),0,4,4285221419,A(M(`eaf`,`Восточная Африка`,`East Africa`,30,36,0,`stone`,`af`),M(`me`,`Ближний Восток`,`Near East`,13,40,32,`stone`,`me`),M(`eur`,`Европа, у ледника`,`Europe, by the ice`,8,15,48,`stone`,`eu med`),M(`sas`,`Южная Азия`,`South Asia`,22,78,22,`stone`,`in`,!0),M(`eas`,`Восточная Азия`,`East Asia`,17,112,34,`stone`,`cn`,!0),M(`am`,`Америка`,`The Americas`,6,-100,38,`stone`,`am meso`),M(`au`,`Австралия`,`Australia`,4,135,-25,`au`,`au`,!0)),A(N(`band`,`охотников и собирателей`,`hunter-gatherers`,100,1,`{Ходишь со взрослыми на зверя: тебя уже берут в загон.|Ходишь с женщинами за кореньями и учишься находить съедобное.}`,`{You go after game with the grown-ups: they let you drive the herd.|You go with the women for roots and learn what can be eaten.}`))),De(1,`ANC`,k(`Древний мир`,`Ancient world`),k(`8000 до н.э. – 1 н.э.`,`8000 BC – AD 1`),-8e3,1,37,.42,Te(8,38,80),.02,6,4287588911,A(M(`cn`,`Китай, Жёлтая река`,`China, the Yellow River`,24,112,35,`cn`,`cn`),M(`in`,`Индия, Ганг`,`India, the Ganges`,24,82,25,`in`,`in`),M(`mes`,`Месопотамия`,`Mesopotamia`,9,45,32,`mes`,`me`),M(`eg`,`Египет, Нил`,`Egypt, the Nile`,7,31,27,`eg`,`eg`,!0),M(`med`,`Средиземноморье`,`The Mediterranean`,12,18,40,`gr`,`med it eu`,!0),M(`waf`,`Западная Африка`,`West Africa`,9,0,11,`af`,`af`),M(`meso`,`Мезоамерика`,`Mesoamerica`,4,-98,19,`am`,`meso am`),M(`andes`,`Анды`,`The Andes`,2,-73,-13,`am`,`andes am`),M(`au`,`Австралия`,`Australia`,.5,135,-25,`au`,`au`,!0)),A(N(`farm`,`земледельцев`,`farmers`,70,1,`Работаешь в поле с отцом и у очага с матерью.`,`You work the field with your father and the hearth with your mother.`),N(`slave`,`рабов`,`slaves`,12,0,`Работаешь, как прикажут. Тебя могут продать.`,`You work as you are told. You can be sold.`),N(`craft`,`ремесленников`,`craftsmen`,9,2,`Помогаешь в мастерской: месишь глину, раздуваешь горн.`,`You help in the workshop: kneading clay, pumping the bellows.`),N(`scribe`,`писцов при храме`,`temple scribes`,4,3,`Носишь таблички за писцами.`,`You carry the tablets behind the scribes.`),N(`war`,`воинов`,`warriors`,4,2,`{Учишься держать копьё.|Мелешь зерно для всей дружины.}`,`{You learn to hold a spear.|You grind grain for the whole war band.}`),N(`noble`,`знатного рода`,`a noble house`,1,3,`Учишься приказывать слугам.`,`You learn to give orders to servants.`))),De(2,`MED`,k(`Раннее средневековье`,`Early Middle Ages`),k(`1 – 1200`,`1 – 1200`),1,1200,27,.4,Te(8,42,85),.05,6,4284247610,A(M(`cn`,`Китай`,`China`,26,112,33,`cn`,`cn`),M(`in`,`Индия`,`India`,24,79,22,`in`,`in`),M(`me`,`Ближний Восток`,`The Middle East`,10,42,33,`me`,`me eg`),M(`fr`,`Франция`,`France`,5,2,47,`fr`,`eu fr`),M(`it`,`Италия`,`Italy`,4,12,43,`it`,`eu it med`,!0),M(`de`,`Германия`,`Germany`,3,10,51,`de`,`eu de`),M(`ru`,`Русь`,`Rus'`,3,37,55,`ru`,`ru`),M(`waf`,`Западная Африка`,`West Africa`,11,0,11,`af`,`af`),M(`jp`,`Япония`,`Japan`,3,138,36,`jp`,`jp`,!0),M(`sea`,`Юго-Восточная Азия`,`Southeast Asia`,5,104,13,`sea`,`sea`,!0),M(`meso`,`Мезоамерика`,`Mesoamerica`,4,-98,19,`am`,`meso am`),M(`andes`,`Анды`,`The Andes`,2,-73,-13,`am`,`andes am`),M(`au`,`Австралия`,`Australia`,.5,135,-25,`au`,`au`,!0)),ke(.04)),De(3,`MED`,k(`Позднее средневековье`,`Late Middle Ages`),k(`1200 – 1650`,`1200 – 1650`),1200,1650,12,.4,Te(8,44,85),.1,6,4282346090,A(M(`cn`,`Китай`,`China`,24,112,33,`cn`,`cn`),M(`in`,`Индия`,`India`,22,79,22,`in`,`in`),M(`sea`,`Юго-Восточная Азия`,`Southeast Asia`,6,104,13,`sea`,`sea`,!0),M(`jp`,`Япония`,`Japan`,4,138,36,`jp`,`jp`,!0),M(`me`,`Ближний Восток`,`The Middle East`,7,42,33,`me`,`me eg`),M(`fr`,`Франция`,`France`,5,2,47,`fr`,`eu fr`),M(`de`,`Германия`,`Germany`,4,10,51,`de`,`eu de`),M(`it`,`Италия`,`Italy`,4,12,43,`it`,`eu it med`,!0),M(`en`,`Англия`,`England`,2,-1,52,`en`,`eu en`,!0),M(`ru`,`Русь`,`Rus'`,3,37,55,`ru`,`ru`),M(`waf`,`Западная Африка`,`West Africa`,12,0,11,`af`,`af`),M(`meso`,`Мезоамерика`,`Mesoamerica`,4,-98,19,`am`,`meso am`),M(`andes`,`Анды`,`The Andes`,3,-73,-13,`am`,`andes am`),M(`au`,`Австралия`,`Australia`,.4,135,-25,`au`,`au`,!0)),ke(.02)),De(4,`EARLY`,k(`Новое время`,`Early modern`),k(`1650 – 1850`,`1650 – 1850`),1650,1850,9,.37,Te(8,48,90),.25,6,4282208122,A(M(`cn`,`Китай`,`China`,30,112,33,`cn`,`cn`),M(`in`,`Индия`,`India`,20,79,22,`in`,`in`),M(`sea`,`Юго-Восточная Азия`,`Southeast Asia`,6,104,13,`sea`,`sea`,!0),M(`jp`,`Япония`,`Japan`,4,138,36,`jp`,`jp`,!0),M(`me`,`Ближний Восток`,`The Middle East`,5,42,33,`me`,`me eg`),M(`fr`,`Франция`,`France`,4,2,47,`fr`,`eu fr`),M(`de`,`Германия`,`Germany`,4,10,51,`de`,`eu de`),M(`en`,`Англия`,`England`,3,-1,52,`en`,`eu en`,!0),M(`it`,`Италия`,`Italy`,3,12,43,`it`,`eu it med`,!0),M(`ru`,`Россия`,`Russia`,6,38,55,`ru`,`ru`),M(`waf`,`Западная Африка`,`West Africa`,10,0,11,`af`,`af`),M(`latam`,`Латинская Америка`,`Latin America`,4,-60,-12,`la`,`latam meso andes am`),M(`us`,`Северная Америка`,`North America`,1.5,-78,40,`us`,`us`,!0),M(`au`,`Австралия`,`Australia`,.2,135,-25,`au`,`au`,!0)),A(N(`farm`,`крестьян`,`peasants`,66,1,Oe.ru,Oe.en),N(`serf`,`крепостных`,`serfs`,14,0,`Работаешь три дня в неделю на барина, остальное — на себя.`,`Three days a week you work for the master, the rest for yourselves.`,`ru`),N(`slave`,`невольников`,`enslaved people`,6,0,`Работаешь на плантации от рассвета до темноты.`,`You work on the plantation from dawn to dark.`,`latam us af`),N(`craft`,`ремесленников`,`craftsmen`,9,2,`{Стоишь у горна.|Шьёшь на заказ.}`,`{You stand at the forge.|You sew to order.}`),N(`trade`,`торговцев`,`merchants`,6,2,`Стоишь за прилавком.`,`You stand behind the counter.`),N(`clergy`,`духовенства`,`clergy`,2,3,`Помогаешь отцу в храме: свечи, молитвы, похороны.`,`You help your father at the temple: candles, prayers, funerals.`),N(`noble`,`дворян`,`gentry`,2,3,`Учишься письму, верховой езде и манерам.`,`You learn letters, riding and manners.`))),De(5,`IND`,k(`Век машин`,`Age of machines`),k(`1850 – 1950`,`1850 – 1950`),1850,1950,8,.28,Te(8,58,95),.5,5,4285153134,A(M(`cn`,`Китай`,`China`,22,112,33,`cn`,`cn`),M(`in`,`Индия`,`India`,18,79,22,`in`,`in`),M(`sea`,`Юго-Восточная Азия`,`Southeast Asia`,7,104,13,`sea`,`sea`,!0),M(`jp`,`Япония`,`Japan`,4,138,36,`jp`,`jp`,!0),M(`me`,`Ближний Восток`,`The Middle East`,5,42,33,`me`,`me eg`),M(`fr`,`Франция`,`France`,4,2,47,`fr`,`eu fr`),M(`de`,`Германия`,`Germany`,4,10,51,`de`,`eu de`),M(`en`,`Англия`,`England`,4,-1,52,`en`,`eu en`,!0),M(`it`,`Италия`,`Italy`,4,12,43,`it`,`eu it med`,!0),M(`ru`,`Россия`,`Russia`,9,38,55,`ru`,`ru`),M(`af`,`Африка`,`Africa`,10,15,5,`af`,`af`),M(`latam`,`Латинская Америка`,`Latin America`,6,-60,-12,`la`,`latam meso andes am`),M(`us`,`США`,`The United States`,5,-90,40,`us`,`us`,!0),M(`au`,`Австралия`,`Australia`,.5,145,-32,`au`,`au`,!0)),A(N(`farm`,`крестьян`,`peasants`,52,1,Oe.ru,Oe.en),N(`mill`,`фабричных рабочих`,`mill hands`,20,1,`Идёшь на фабрику: двенадцать часов у станка.`,`You go to the mill: twelve hours at the machine.`),N(`craft`,`ремесленников`,`craftsmen`,10,2,`Учишься ремеслу отца.`,`You learn your father's trade.`),N(`shop`,`лавочников`,`shopkeepers`,8,2,`Стоишь за прилавком.`,`You stand behind the counter.`),N(`clerk`,`служащих`,`clerks`,6,2,`Переписываешь бумаги в конторе.`,`You copy papers in an office.`),N(`rich`,`богатых`,`the wealthy`,1.5,3,`Учишься музыке и языкам.`,`You learn music and languages.`))),De(6,`MOD`,k(`Наше время`,`Our time`),k(`1950 – 2026`,`1950 – 2026`),1950,2026,15,.07,Te(10,74,100),.85,2.6,4287573794,A(M(`cn`,`Китай`,`China`,18,112,33,`cn`,`cn`),M(`in`,`Индия`,`India`,19,79,22,`in`,`in`),M(`sea`,`Юго-Восточная Азия`,`Southeast Asia`,9,104,13,`sea`,`sea`,!0),M(`jp`,`Япония`,`Japan`,2,138,36,`jp`,`jp`,!0),M(`me`,`Ближний Восток`,`The Middle East`,7,42,33,`me`,`me eg`),M(`eu`,`Европа`,`Europe`,6,10,49,`de`,`eu de fr it en`),M(`ru`,`Россия`,`Russia`,3,38,55,`ru`,`ru`),M(`af`,`Африка`,`Africa`,22,15,5,`af`,`af`),M(`latam`,`Латинская Америка`,`Latin America`,9,-60,-12,`la`,`latam meso andes am`),M(`us`,`США`,`The United States`,5,-90,40,`us`,`us`,!0),M(`au`,`Австралия`,`Australia`,.4,145,-32,`au`,`au`,!0)),A(N(`farm`,`крестьян`,`smallholders`,33,1,`Работаешь в поле до и после школы.`,`You work the field before and after school.`),N(`work`,`рабочих`,`workers`,25,1,`Подрабатываешь на рынке.`,`You earn a little at the market.`),N(`poor`,`городской бедноты`,`the urban poor`,15,0,`Продаёшь воду на перекрёстке.`,`You sell water at a crossroads.`),N(`office`,`служащих`,`office workers`,19,2,`Делаешь уроки за кухонным столом.`,`You do your homework at the kitchen table.`),N(`well`,`обеспеченных`,`the well-off`,6,3,`Ходишь в кружок робототехники.`,`You go to a robotics club.`),N(`rich`,`очень богатых`,`the very rich`,1,3,`На каникулы летаешь в другие страны.`,`You fly abroad for the holidays.`)))),Ae=A(P(`cn`,k(`Китай`,`China`),j(`cn`,`eas`)),P(`in`,k(`Индия`,`India`),j(`in`,`sas`)),P(`me`,k(`Ближний Восток`,`The Middle East`),j(`me`,`mes`,`eg`)),P(`eu`,k(`Европа`,`Europe`),j(`eur`,`med`,`fr`,`it`,`de`,`en`,`eu`)),P(`ru`,k(`Россия`,`Russia`),j(`ru`)),P(`af`,k(`Африка`,`Africa`),j(`eaf`,`waf`,`af`)),P(`jp`,k(`Япония`,`Japan`),j(`jp`)),P(`sea`,k(`Юго-Восточная Азия`,`Southeast Asia`),j(`sea`)),P(`am`,k(`Америка`,`The Americas`),j(`am`,`meso`,`andes`,`latam`,`us`)),P(`au`,k(`Австралия`,`Australia`),j(`au`))),je=F.flatMap(e=>e.regions);function Me(e,t){return F[t].regions.find(t=>t.key===e)??je.find(t=>t.key===e)}function Ne(e){return Ae.find(t=>t.key===e)}function Pe(e,t){let n=Ne(t);return!n||F.filter(t=>e==null||t.i===e).some(e=>e.regions.some(e=>n.regions.has(e.key)))}function Fe(e){let t;for(let n of F)e>=n.from&&(t=n);return t??F[0]}function Ie(e,t){return e.cult===`am`&&t>1540?`la`:e.cult===`au`&&t>1850?`en`:e.cult}var Le={c:`CHILD`,j:`JOY`,y:`YOUTH`,a:`ADULT`,o:`OLD`,x:`HARD`},Re=new Set([`lit`,`married`,`kids`]),ze=/^r[0-3]$/,Be=class e{ranks;after;before;rest;sets;constructor(e){this.ranks=new Set(e.filter(e=>ze.test(e)).map(e=>e.charCodeAt(1)-48));let t=e.find(e=>e.startsWith(`after:`)),n=e.find(e=>e.startsWith(`before:`));this.after=t==null?null:parseInt(t.slice(t.indexOf(`:`)+1),10),this.before=n==null?null:parseInt(n.slice(n.indexOf(`:`)+1),10),this.rest=new Set(e.filter(e=>!(ze.test(e)||e.includes(`:`)||e.startsWith(`+`)))),this.sets=e.filter(e=>e.startsWith(`+`)).map(e=>e.slice(1))}names(e){return this.rest.has(e)}holdsOnlyOutsideTown(){return this.rest.has(`!town`)}holds(e){if(this.ranks.size>0&&!this.ranks.has(e.rank))return!1;for(let t of this.rest)if(!(t.startsWith(`!`)&&!Re.has(t.slice(1))?!e.has(t.slice(1)):e.has(t)))return!1;return(this.after==null||e.now>=this.after)&&(this.before==null||e.now<this.before)}static ANY=new e([]);static of(t){return t.trim()===``?e.ANY:new e(t.trim().split(` `))}},Ve=class{group;kind;tags;text;need;constructor(e,t,n,r,i){this.group=e,this.kind=t,this.tags=n,this.text=r,this.need=i}fits(e){if(this.tags.size===0)return!0;for(let t of this.tags)if(t===`sea`?e.sea:e.tags.has(t))return!0;return!1}},He=class{id;tags;from;to;meet;text;constructor(e,t,n,r,i,a){this.id=e,this.tags=t,this.from=n,this.to=r,this.meet=i,this.text=a}fits(e,t,n){if(n<this.from-1||n>this.to+1)return!1;if(this.tags.has(`*`))return t>=5;for(let t of this.tags)if(e.tags.has(t))return!0;return!1}get mid(){return Math.trunc((this.from+this.to)/2)}},Ue=class{id;groups;tags;need;ages;weight;q;doors;constructor(e,t,n,r,i,a,o,s){this.id=e,this.groups=t,this.tags=n,this.need=r,this.ages=i,this.weight=a,this.q=o,this.doors=s}fits(e){if(this.tags.has(`*`)||this.tags.size===0)return!0;for(let t of this.tags)if(e.tags.has(t))return!0;return!1}};function We(e){return e.split(/\r?\n/).filter(e=>e.trim()!==``&&!e.startsWith(`#`)).map(e=>e.split(`	`))}function Ge(e){return e.trim()===``?new Set:new Set(e.trim().split(` `))}var Ke=/\|(?![^{]*\})/;function qe(e){return e.split(Ke).map(e=>e.trim())}function Je(e){let t=qe(e);return new O(t[0],t[1])}function Ye(e,t){let n=e.indexOf(t);return n<0?e:e.slice(0,n)}function Xe(e,t){let n=e.indexOf(t);return n<0?e:e.slice(n+1)}function Ze(e){let t=[];for(let n of e.split(/\n\s*\n/)){let e=n.trim().split(/\r?\n/).filter(e=>e.trim()!==``&&!e.startsWith(`#`));if(e.length===0)continue;let r=new Map,i=[];for(let t of e){let e=Ye(t,`:`).trim(),n=Xe(t,`:`).trim();e===`door`?i.push({text:n,shut:[],out:[]}):(e===`shut`||e===`out`)&&i.length>0?i[i.length-1][e].push(n):(e===`ep`||e===`ask`)&&i.length>0?i[i.length-1][e]=n:r.set(e,n)}let a=e=>{let t=r.get(e);if(t==null)throw Error(`dilemma without ${e}`);return t},[o,s]=a(`ages`).split(`-`).map(e=>parseInt(e.trim(),10)),c=r.get(`weight`),l=c!=null&&c.trim()!==``&&!isNaN(Number(c))?Number(c):1;t.push(new Ue(a(`id`),new Set(a(`groups`).split(` `).filter(e=>e.trim()!==``).map(e=>e.toUpperCase())),Ge(r.get(`tags`)??``),Be.of(r.get(`need`)??``),[o,s],l,Je(a(`q`)),i.map(e=>({text:Je(e.text),shut:e.shut.map(e=>{let t=qe(e);return{conds:t[0].split(` `).filter(e=>e.trim()!==``),why:new O(t[1],t[2])}}),outs:e.out.map(e=>{let t=qe(e);return{weight:Number(t[0]),text:new O(t[1],t[2]),fx:(t[3]??``).split(` `).filter(e=>e.trim()!==``)}}),ep:e.ep==null?null:Je(e.ep),ask:e.ask==null?null:Je(e.ask)}))))}return t}var Qe=class e{lines;hist;dilemmas;byKey=new Map;constructor(e,t,n=[]){this.lines=e,this.hist=t,this.dilemmas=n;for(let t of e){let e=t.group+t.kind,n=this.byKey.get(e);n?n.push(t):this.byKey.set(e,[t])}}linesFor(e,t,n){return(this.byKey.get(e+t)??[]).filter(e=>e.fits(n))}static read(t,n,r){let i=t.flatMap(We).map(e=>new Ve(e[0].toUpperCase(),Le[e[1][0]],Ge(e[2]),new O(e[3],e[4]),Be.of(e[5]??``))),a=We(n).map((e,t)=>new He(t,Ge(e[0]),parseInt(e[1],10),parseInt(e[2],10),e[3]===`1`,new O(e[4],e[5]))),o=r.flatMap(Ze);return new e(i,a,o)}},$e=`# tags	from	to	meet	ru	en
# Real history, reaching a life from the side. "*" means anywhere from 1850 on. meet = 1 for a person someone later wrote books about.
eg	-2600	-2450	0	В сезон разлива мужчин зовут строить гору для царя. Кормят луком и хлебом.	In the flood season the men are called to build a mountain for the king. They are fed onions and bread.
me	-1792	-1750	0	Царь Хаммурапи велел высечь законы на камне. Теперь за выбитый глаз — глаз.	King Hammurabi has the laws cut into stone. Now an eye costs an eye.
med	-1200	-1150	0	С моря пришли чужие корабли. Города на побережье горят один за другим.	Strange ships come from the sea. The coastal towns burn one after another.
cn	-520	-479	1	Через деревню проходил учитель Кун с учениками. Говорил, что правитель должен быть как отец.	Master Kong passes through the village with his pupils. He says a ruler should be like a father.
in	-500	-410	1	По дорогам ходит аскет, ученики зовут его Пробуждённым. Говорят, он нашёл конец страданию.	An ascetic walks the roads; his followers call him the Awakened One. They say he has found the end of suffering.
med	-430	-399	1	На площади лысый чудак Сократ полчаса спорил с тобой, что такое справедливость.	In the square a bald oddity called Socrates argues with you for half an hour about what justice is.
med eg me	-334	-323	1	Мимо прошло войско молодого царя Александра. Говорят, он хочет дойти до края земли.	The army of young King Alexander marches past. They say he means to reach the end of the earth.
in	-268	-232	0	Царь Ашока велел высечь на камне: не убивать живое. Камень стоит у дороги.	King Ashoka has it carved in stone: do not kill living things. The stone stands by the road.
cn	-221	-206	0	Император Цинь сгоняет людей строить Длинную стену. Из ушедших возвращается мало кто.	The Qin emperor drives people to build the Long Wall. Few of those who go come back.
cn me	-130	1300	0	Через край идёт караван с шёлком. Ты впервые {видишь|видишь} верблюда.	A silk caravan comes through. You see a camel for the first time.
med it	-49	-44	1	В Рим вернулся Цезарь. Говорят, он стал выше закона.	Caesar is back in Rome. They say he has put himself above the law.
it med	79	79	0	Гора над Помпеями взорвалась. Пепел дошёл и до вас.	The mountain above Pompeii explodes. The ash reaches you too.
it med	400	480	0	Рим разграблен. Беженцы идут по дорогам с узлами.	Rome is sacked. Refugees walk the roads with bundles.
me eg	541	549	0	Чума Юстиниана. Говорят, в столице умирает по десять тысяч в день.	The plague of Justinian. They say ten thousand a day are dying in the capital.
me	610	632	0	В Мекке купец Мухаммад говорит, что Бог един. Его слова пересказывают на всех рынках.	In Mecca a merchant named Muhammad says that God is one. His words are repeated in every market.
cn	618	907	0	Империя Тан: в столице живёт миллион человек, на рынках — люди со всего света.	The Tang empire: a million people live in the capital, and the markets hold people from all over the world.
fr de it	768	814	1	Король Карл велел открыть школы при монастырях. Даже он сам учится писать.	King Charles orders schools opened at the monasteries. He is learning to write himself.
en fr de	793	1066	0	С севера приходят ладьи с драконами на носах.	Longships with dragons on their prows come from the north.
ru	988	988	0	Князь велел всем идти в реку креститься. Старых богов бросили в воду.	The prince orders everyone into the river to be baptised. The old gods are thrown into the water.
meso	900	1100	0	Большой город с пирамидами опустел. Никто не говорит почему.	The great city of pyramids stands empty. Nobody says why.
fr de it en me	1096	1099	0	Рыцари идут на восток, к Иерусалиму. Многие не вернутся.	Knights march east to Jerusalem. Many will not return.
cn ru me	1206	1260	0	С востока пришли монгольские тумены. Города, что не открыли ворота, сожжены.	The Mongol hosts come from the east. The cities that did not open their gates are burned.
cn me	1271	1295	1	На постоялом дворе молодой венецианец Марко расспрашивал всех про бумажные деньги.	At the inn a young Venetian named Marco asks everyone about paper money.
af me in	1325	1354	1	В город пришёл странник из Танжера, Ибн Баттута. Записывал всё, даже как ты печёшь хлеб.	A traveller from Tangier, Ibn Battuta, comes to town. He writes everything down, even how you bake bread.
af	1324	1325	0	Мимо прошёл царь Манса Муса со своим караваном. Золота столько, что оно подешевело.	King Mansa Musa passes by with his caravan. There is so much gold that gold grows cheap.
fr de it en ru me	1346	1353	0	Пришла «чёрная смерть». Из каждых трёх соседей не стало одного.	The Black Death comes. One neighbour in three is gone.
cn sea in af	1405	1433	0	У берега встал флот с кораблями размером с деревню. Адмирал Чжэн Хэ дарит шёлк.	A fleet of ships the size of villages anchors off the coast. Admiral Zheng He gives away silk.
de	1450	1500	0	В городе печатают книги на машине. Одна книга стоит теперь как корова, а не как дом.	In town they print books on a machine. A book now costs a cow, not a house.
fr	1429	1431	1	Через деревню проехала девушка в латах. Говорят, ей являются святые.	A girl in armour rides through the village. They say saints appear to her.
meso	1519	1550	0	Пришли бородатые люди с железом, а с ними болезнь. От оспы вымирают целые улицы.	Bearded men come with iron, and sickness with them. Smallpox empties whole streets.
andes	1532	1572	0	Чужаки взяли в плен Инку. Солнце больше не правит.	Strangers have taken the Inca prisoner. The Sun no longer rules.
de	1517	1525	0	Монах прибил к церковной двери листок. Теперь спорят все — и потом дерутся.	A monk nails a sheet to a church door. Now everyone argues, and then fights.
af	1550	1850	0	Из соседних деревень уводят людей к побережью, к кораблям. Обратно не возвращается никто.	People are taken from the nearby villages to the coast, to the ships. Nobody comes back.
latam us	1600	1865	0	С кораблей сгоняют людей в цепях. Их продают на площади, как скот.	People in chains are driven off the ships and sold in the square like cattle.
de fr	1618	1648	0	Тридцатилетняя война. Деревни переходят из рук в руки, пока не пустеют.	The Thirty Years' War. Villages change hands until they are empty.
en	1665	1666	0	Чума в Лондоне, а следом великий пожар.	Plague in London, and then the great fire.
jp	1650	1850	0	Двести лет без войны. Самураи пишут стихи и служат в канцеляриях.	Two hundred years without war. Samurai write poems and work in offices.
ru	1703	1725	0	Царь велел брить бороды и строить город на болоте. Туда сгоняют людей со всей страны.	The tsar orders beards shaved and a city built on a swamp. People are driven there from all over the land.
de	1762	1791	1	Сосед по улице — мальчик Вольфганг. Играет ночами, вся улица слушает.	The boy next door is called Wolfgang. He plays at night, and the whole street listens.
fr	1789	1794	0	В Париже взяли крепость. Хлеб дорогой, на площадях рубят головы.	In Paris they have stormed the fortress. Bread is dear, and heads roll in the squares.
ru fr	1812	1812	0	Через деревню шла на Москву огромная армия. Потом шла обратно — по снегу.	A huge army marches through the village to Moscow. Later it comes back, through the snow.
in ru me	1817	1860	0	Холера. Умирают за один день.	Cholera. People die within a day.
en	1845	1852	0	Картофель сгнил в земле. Ирландцы бегут через океан.	The potatoes rot in the ground. The Irish flee across the ocean.
en	1830	1860	0	Через долину провели железную дорогу. Поезд идёт быстрее лошади.	A railway is laid through the valley. The train is faster than a horse.
cn	1850	1864	0	Тайпинское восстание. Говорят, погибли миллионы.	The Taiping Rebellion. They say millions have died.
us	1861	1865	0	Война Севера и Юга. Брат идёт на брата.	War between North and South. Brother against brother.
ru	1861	1861	0	Объявили волю. Крепостных больше нет — но землю надо выкупать.	Freedom is proclaimed. There are no more serfs, but the land must be bought back.
jp	1868	1890	0	Самураям велели снять мечи. По улицам Токио ходят люди в шляпах.	Samurai are told to put away their swords. People in hats walk the streets of Tokyo.
ru	1880	1910	1	Седой граф из Ясной Поляны пахал рядом с мужиками. Говорил, что богатство — грех.	The grey-bearded count of Yasnaya Polyana ploughs beside the peasants. He says wealth is a sin.
af	1884	1914	0	Европейцы поделили землю по линейке. Теперь у вас другая страна и чужие начальники.	The Europeans have divided the land with a ruler. You now live in another country, with foreign masters.
in	1876	1878	0	Великий голод. Зерно вывозят в порт, а люди умирают у дорог.	The great famine. Grain is shipped to the port while people die by the roads.
eu ru fr de en it us	1914	1918	0	Большая война. В окопах гибнут миллионы.	The great war. Millions die in the trenches.
*	1918	1920	0	Испанка. Болеет каждый третий.	The Spanish flu. One in three falls ill.
ru	1917	1922	0	Революция и гражданская война. Власть меняется пять раз за лето.	Revolution and civil war. Power changes hands five times in a summer.
us de en fr	1929	1933	0	Великая депрессия. Очереди за супом длиной в квартал.	The Great Depression. Soup lines a block long.
ru	1932	1933	0	Голод. Из деревни выгребли всё зерно.	Famine. Every grain is taken from the village.
in	1930	1930	1	Худой старик Ганди шёл мимо к морю — выпаривать соль назло англичанам. Ты {прошёл|прошла} с ним милю.	A thin old man called Gandhi walks by on his way to the sea to make salt in defiance of the British. You walk a mile with him.
eu ru fr de en it jp cn us	1939	1945	0	Мировая война. Похоронки приходят в каждый дом.	The world war. The death notices come to every house.
jp	1945	1945	0	Над Хиросимой вспыхнуло второе солнце.	A second sun flares over Hiroshima.
in	1947	1947	0	Раздел страны. Миллионы идут через новую границу в обе стороны.	Partition. Millions cross the new border in both directions.
cn	1959	1961	0	«Большой скачок». Голод.	The Great Leap Forward. Famine.
af	1957	1975	0	Независимость! На площади поднимают новый флаг, все поют.	Independence! A new flag goes up in the square, and everyone sings.
*	1957	1957	0	Ночью по небу ползёт яркая точка — спутник. Вся улица стоит задрав головы.	At night a bright dot crawls across the sky: a satellite. The whole street stands with heads tipped back.
*	1969	1969	0	По телевизору показали человека на Луне.	The television shows a man on the Moon.
in	1965	1980	0	Новые сорта пшеницы: урожай вырос вдвое.	New wheat: the harvest doubles.
cn	1978	1990	0	Разрешили торговать. Сосед открыл лавку и через год купил телевизор.	Trading is allowed. A neighbour opens a shop and a year later buys a television.
af	1994	1994	0	Человек, который сидел в тюрьме двадцать семь лет, стал президентом.	The man who was in prison for twenty-seven years becomes president.
de	1989	1989	0	Стену разбирают руками. Ты {унёс|унесла} домой кусок бетона.	The Wall is taken apart by hand. You carry home a piece of concrete.
ru	1991	1991	0	Страна, в которой ты {родился|родилась}, исчезла за три дня.	The country you were born in disappears in three days.
sea	2004	2004	0	Цунами. Море отступило, а потом вернулось стеной.	The tsunami. The sea draws back, then returns as a wall.
*	2005	2026	0	В деревню провели мобильную связь. Теперь всё время видно, как живут другие.	Mobile coverage reaches the village. Now you can always see how others live.
*	2020	2022	0	Пандемия. Два года в масках.	The pandemic. Two years in masks.
me	-9600	-8200	0	Со всей округи сошлись люди ставить каменные столбы. На столбах — лисы, змеи и кабаны.	People gather from all around to raise stone pillars. Foxes, snakes and boars are carved on them.
eu	-9700	-8000	0	Лёд уходит на север. Где деды гоняли оленей, теперь растёт лес.	The ice is retreating north. Where your grandfathers hunted reindeer, a forest now grows.
cn	-3500	-2000	0	С юга принесли зерно, что растёт в воде. Старики не верят, что из него выйдет толк.	Grain that grows in water has come from the south. The old people doubt it will come to anything.
cn	-1250	-1046	0	Гадатели жгут черепаший панцирь и читают трещины. По трещинам решают, когда сеять.	The diviners burn a turtle shell and read the cracks. The cracks decide when to sow.
cn	-500	-300	0	Из города привезли железный лемех. Пашется легче, но стоит он как вол.	An iron ploughshare has come from town. It ploughs easier, but it costs as much as an ox.
cn	-213	-210	0	Император велел сжечь книги. Учитель замуровал свои свитки в стене.	The emperor orders the books burned. The teacher walls his scrolls up inside the house.
cn	-126	-126	1	Через уезд проехал посол Чжан Цянь — тринадцать лет пропадал на западе. Рассказывал про коней, что потеют кровью.	The envoy Zhang Qian rides through the county after thirteen years in the west. He tells of horses that sweat blood.
cn	2	2	0	Писцы обошли каждый двор: сколько ртов, сколько земли. В столице сложили — почти шестьдесят миллионов.	Scribes go round every household: how many mouths, how much land. In the capital they add it up: nearly sixty million.
in	-2600	-1900	0	Купцы с запада принесли печати с быком и непонятными знаками. Говорят, у них города из обожжённого кирпича.	Traders from the west bring seals with a bull and strange signs. They say their cities are built of fired brick.
in	-1000	-600	0	Лес у реки рубят железными топорами. На вырубках сеют рис.	The forest by the river is felled with iron axes. Rice is sown in the clearings.
in	-540	-527	1	Мимо прошёл голый монах Махавира. Перед каждым шагом он смотрит под ноги, чтобы не раздавить муравья.	A naked monk called Mahavira walks by. Before every step he looks down so as not to crush an ant.
in	-302	-290	1	В Паталипутре грек Мегасфен расспрашивал тебя, правда ли, что здесь никто не держит рабов.	In Pataliputra a Greek called Megasthenes asks you whether it is true that nobody here keeps slaves.
in	-250	1	0	У дороги строят ступу. Монахи просят на неё по горсти риса с дома.	A stupa is being built by the road. The monks ask a handful of rice from every house.
me	-8000	-6500	0	Соседи перестали кочевать. Бросают зёрна в землю и ждут, когда взойдут.	The neighbours have stopped wandering. They put grain into the ground and wait for it to sprout.
me	-3500	-3000	0	У соседа телега на колёсах. За раз увозит столько, сколько раньше носили впятером.	The neighbour has a cart on wheels. It carries in one trip what five people used to carry.
me	-3300	-3000	0	В храме писец выдавливает на глине значки. Теперь каждый мешок ячменя на счету.	In the temple a scribe presses marks into clay. Now every sack of barley is counted.
me	-2400	-1700	0	Поле побелело от соли. Пшеница не всходит, сеют один ячмень.	The field has turned white with salt. Wheat will not come up; only barley is sown.
me	-745	-627	0	Ассирийцы угоняют целые города на чужие земли. Мимо идёт колонна, дети сидят у отцов на плечах.	The Assyrians drive whole cities off to foreign lands. A column passes, children riding on their fathers' shoulders.
me	-597	-539	0	В Вавилон пригнали пленных из Иудеи. Вечерами они сидят у каналов и поют о своём городе.	Captives from Judah have been brought to Babylon. In the evenings they sit by the canals and sing of their city.
me	-539	-537	0	Персидский царь Кир вошёл в Вавилон без боя. Пленным разрешил вернуться домой.	The Persian king Cyrus enters Babylon without a fight. He lets the captives go home.
eg	-3100	-3000	0	Царь Юга надел и белую корону, и красную. Теперь страна одна.	The king of the South wears both the white crown and the red. Now the land is one.
eg	-2200	-2150	0	Который год Нил не поднимается. Храмовые амбары пусты.	Year after year the Nile does not rise. The temple granaries are empty.
eg	-1650	-1550	0	Чужеземцы с севера привели коней. Таких зверей здесь никто не видел.	Foreigners from the north have brought horses. No one here has seen such beasts.
eg	-1350	-1334	0	Фараон велел молиться одному солнечному диску. Жрецы Амона молчат и ждут.	Pharaoh orders prayers to the sun disc alone. The priests of Amun keep silent and wait.
eg	-1157	-1155	0	Строители царских гробниц бросили работу и сели у храма. Им второй месяц не выдают зерна.	The builders of the royal tombs down tools and sit by the temple. They have had no grain for two months.
eg	-331	-331	0	На берегу размечают новый город. Улицы чертят ячменной мукой, а птицы тут же её склёвывают.	A new city is being marked out on the shore. The streets are drawn in barley flour, and birds peck it up at once.
med	-776	-393	0	Сосед вернулся из Олимпии. Обогнал всех в беге и получил венок из оливы.	A neighbour is back from Olympia. He outran everyone and won a crown of olive.
med	-480	-479	0	Персидское войско идёт на Грецию. Кто может, уходит на корабли.	The Persian army marches on Greece. Whoever can gets onto the ships.
med	-230	-212	1	В Сиракузах старик Архимед чертил круги на песке. Ты {подошёл|подошла} совсем близко, а он даже не поднял головы.	In Syracuse old Archimedes is drawing circles in the sand. You come right up close, and he does not even look up.
it med	-264	-146	0	Рим воюет с Карфагеном. Забирают всех, у кого есть надел.	Rome is at war with Carthage. Every man with a plot of land is called up.
it med	-218	-216	0	Говорят, через горы перешли слоны. Карфагенянин Ганнибал уже в Италии.	They say elephants have crossed the mountains. Hannibal of Carthage is already in Italy.
it med	-73	-71	0	Беглые гладиаторы во главе со Спартаком громят поместья. Рабы бегут к ним толпами.	Runaway gladiators led by Spartacus are sacking the estates. Slaves flock to them.
med it	-27	14	0	Через долину проложили мощёную дорогу. На столбе написано, сколько миль до Рима.	A paved road is laid through the valley. A milestone says how many miles it is to Rome.
af	-3500	-2500	0	Озеро в степи пересохло. Пастухи гонят скот на юг.	The lake on the plain has dried up. The herders drive their cattle south.
af	-1500	-500	0	В низине у реки стали сеять красный рис.	In the river bottoms people have begun to sow red rice.
af	-800	-200	0	В соседней долине плавят железо в глиняных печах. Мотыга из него служит годами.	In the next valley they smelt iron in clay furnaces. A hoe made from it lasts for years.
af	-1000	1	0	Часть рода ушла на юг, в лес. Унесли мотыги и клубни ямса.	Part of the clan has gone south into the forest, taking hoes and yam tubers.
af	-250	1	0	На разливе Нигера вырос город. Туда везут рыбу и рис, оттуда — железо и бусы.	A town has grown on the Niger floodplain. Fish and rice go in; iron and beads come out.
meso	-5000	-3000	0	Женщины оставляют на семена самые крупные початки. Колос с каждым годом длиннее.	The women keep the biggest cobs for seed. Each year the ears grow longer.
meso	-1200	-400	0	Олмеки сплавляют по реке на плотах каменную голову ростом с хижину.	The Olmecs float a stone head as tall as a hut down the river on rafts.
meso	-300	1	0	В лесу поднимаются пирамиды выше деревьев. Строит весь край.	Pyramids taller than the trees rise in the forest. The whole land builds them.
andes	-4500	-3000	0	Пастухи приручили диких лам. Шерсть больше не нужно добывать охотой.	The herders have tamed wild llamas. Wool no longer has to be hunted.
andes	-900	-200	0	Люди ходят на поклон в Чавин. Там под землёй живёт бог с клыками.	People go to Chavín to bow down. A god with fangs lives under the ground there.
andes	-200	1	0	На пустынном плато чертят огромного паука. Целиком его разглядит разве что птица.	A huge spider is being drawn on the desert plain. Only a bird could see the whole of it.
au	-8000	-6500	0	Море подошло ближе. Земля, по которой деды ходили на юг, стала проливом.	The sea has come closer. The land your grandfathers walked south across is now a strait.
au	-6600	-4000	0	Старики роют в застывшей лаве канавы для угрей. Угри сами заплывают в плетёные ловушки.	The old men dig channels in the cold lava for eels. The eels swim into the woven traps by themselves.
au	-3500	-2000	0	С севера пришли рыжие собаки. Теперь они спят у костров.	Red dogs have come from the north. Now they sleep by the fires.
cn	105	200	0	В уезде пишут на новом материале из коры и тряпья. Дешевле шёлка, легче бамбука.	In the county they write on a new stuff made of bark and rags. Cheaper than silk, lighter than bamboo.
cn	605	611	0	Император велел рыть канал от Хуанхэ до Янцзы. Мужчин гонят на работы сотнями тысяч.	The emperor orders a canal dug from the Yellow River to the Yangtze. Men are driven to the work by the hundred thousand.
cn	744	762	1	На постоялом дворе пьяный поэт Ли Бо читал стихи луне. Потом заплатил за всех.	At the inn a drunken poet named Li Bai recites verses to the moon. Then he pays for everyone.
cn	755	763	0	Мятеж Ань Лушаня. Столица пала, император бежал. По дорогам идут голодные.	The An Lushan rebellion. The capital has fallen and the emperor has fled. Hungry people fill the roads.
cn	1000	1300	0	Сын старосты сдал экзамен на чин. Деревня гуляла три дня.	The headman's son has passed the examination. The village feasts for three days.
cn	1012	1100	0	Из Чампы привезли скороспелый рис. Теперь снимают два урожая в год.	Quick-ripening rice has come from Champa. Now there are two harvests a year.
cn	1024	1100	0	Купцы в Сычуани платят бумажками с печатью. Сосед им не верит и прячет медь в горшке.	Merchants in Sichuan pay with stamped paper notes. The neighbour does not trust them and hides his copper in a pot.
cn	1080	1084	1	Ссыльный чиновник Су Ши сам пашет склон за городом. Угостил тебя свининой, тушённой по своему рецепту.	Su Shi, an official in exile, ploughs a hillside outside town himself. He treats you to pork stewed his own way.
cn	1570	1650	0	Подать теперь берут серебром. Говорят, серебро везут с другого края света.	Taxes are now paid in silver. They say the silver comes from the other side of the world.
cn	1594	1650	0	Из-за моря привезли сладкие клубни. Растут на склонах, где рис не родится.	Sweet tubers have come from over the sea. They grow on slopes where rice won't.
cn	1645	1650	0	Маньчжуры велели мужчинам брить лоб и носить косу. Кто откажется, лишится головы.	The Manchus order every man to shave his forehead and wear a queue. Whoever refuses loses his head.
in	375	455	0	При государе из рода Гуптов на дорогах тихо. Купцы ходят без охраны.	Under the Gupta king the roads are quiet. Merchants travel without guards.
in	450	1190	0	Брат ушёл учиться в Наланду. Говорят, там тысячи монахов и книги до потолка.	Your brother has gone to study at Nalanda. They say there are thousands of monks there and books up to the ceiling.
in	630	643	1	Мимо прошёл китайский монах Сюаньцзан. За ним везут целую повозку свитков.	A Chinese monk called Xuanzang walks by. A whole cart of scrolls follows him.
in	1206	1300	0	В Дели теперь султан. Сборщики подати говорят на чужом языке.	There is a sultan in Delhi now. The tax collectors speak a foreign tongue.
in	1460	1510	1	В Бенаресе ткач Кабир поёт за станком, что Бога не надо искать ни в храме, ни в мечети.	In Benares a weaver called Kabir sings at his loom that you need not look for God in temple or mosque.
in	1564	1605	0	Падишах Акбар отменил налог с иноверцев. Говорят, он слушает и брахманов, и мулл.	Emperor Akbar has abolished the tax on unbelievers. They say he listens to Brahmins and mullahs alike.
in	1550	1650	0	Купцы привезли из-за моря жгучий красный перец. Теперь его кладут во всё.	Merchants bring a fiery red pepper from over the sea. Now it goes into everything.
in	1632	1648	0	В Агре строят гробницу для любимой жены падишаха. Белый мрамор везут на слонах.	In Agra they are building a tomb for the emperor's beloved wife. White marble comes on elephants.
me	27	30	1	У озера проповедник из Назарета говорил с рыбаками. Ты {постоял|постояла} в толпе и {пошёл|пошла} домой.	By the lake a preacher from Nazareth talks to the fishermen. You stand in the crowd a while, then go home.
eg	390	415	1	В Александрии учёная женщина Ипатия объясняет, как ходят звёзды. Ты {слушал|слушала} у двери.	In Alexandria a learned woman, Hypatia, explains how the stars move. You listen at the door.
me eg	636	700	0	Пришли арабы. Кто не принял их веру, платит подушную подать.	The Arabs have come. Those who do not take their faith pay a head tax.
eg	1065	1072	0	Нил опять не поднялся. Хлеб в Фустате дороже серебра.	Again the Nile has not risen. Bread in Fustat costs more than silver.
me	1100	1187	0	В замке на холме сидит франкский рыцарь. Половину урожая теперь возят ему.	A Frankish knight sits in the castle on the hill. Half the harvest now goes to him.
eg	1168	1204	1	В Фустате лекарь Маймонид лечил тебя от лихорадки. Велел пить куриный бульон.	In Fustat the physician Maimonides treats your fever. He tells you to drink chicken broth.
me	1245	1273	1	В Конье проповедник Руми закружился посреди улицы под стук молоточков золотых дел мастера.	In Konya a preacher named Rumi starts whirling in the street to the tapping of a goldsmith's hammers.
me	1258	1260	0	Монголы взяли Багдад. Говорят, Тигр почернел от чернил утопленных книг.	The Mongols have taken Baghdad. They say the Tigris ran black with ink from the drowned books.
eg	1382	1406	1	В Каире седой судья Ибн Хальдун расспрашивал тебя, откуда пришёл твой род и почему осел здесь.	In Cairo a grey-haired judge named Ibn Khaldun asks you where your family came from and why it settled here.
me	1453	1460	0	Султан взял Константинополь. У большого храма ставят минареты.	The sultan has taken Constantinople. Minarets are going up beside the great church.
me eg	1550	1650	0	В городе открыли кофейню. Мужчины сидят там до ночи, а муллы ворчат.	A coffee house has opened in town. The men sit there till night, and the mullahs grumble.
fr	496	510	0	Король франков Хлодвиг крестился в Реймсе. С ним крестились три тысячи воинов.	Clovis, king of the Franks, is baptised at Reims. Three thousand of his warriors are baptised with him.
fr de	1000	1200	0	Кузнец сделал тяжёлый плуг с отвалом. Тянут его восемь волов со всей деревни.	The smith has made a heavy plough with a mouldboard. It takes eight oxen, gathered from all over the village.
fr de en	1315	1317	0	Третье лето льют дожди. Хлеб гниёт на корню.	For the third summer the rain does not stop. The grain rots in the fields.
fr	1340	1450	0	Англичане опять жгут деревни. Крестьяне прячутся в церкви вместе со скотиной.	The English are burning villages again. The peasants hide in the church with their animals.
fr	1572	1573	0	В Париже за одну ночь перебили гугенотов. Колокола звонили до утра.	In Paris the Huguenots are massacred in a single night. The bells ring until morning.
it	1205	1226	1	На краю поля босой человек из Ассизи проповедовал птицам. Ты {засмеялся|засмеялась}, а он помахал тебе рукой.	At the edge of the field a barefoot man from Assisi preaches to the birds. You laugh, and he waves to you.
it de fr	1100	1300	0	Из Венеции привезли перец и сахар. Сахар продают в аптеке, как лекарство.	Pepper and sugar have come from Venice. Sugar is sold at the apothecary's, as a medicine.
it	1482	1499	1	В Милане бородатый мастер Леонардо долго рисовал твоё лицо. Потом дал монетку и ушёл.	In Milan a bearded master called Leonardo draws your face for a long time. Then he gives you a coin and leaves.
de	9	12	0	В лесу германцы перебили три римских легиона. Вожди делят римских орлов.	In the forest the Germans have destroyed three Roman legions. The chiefs share out the eagles.
de	1150	1300	0	Сеньор зовёт переселенцев на восток, на новые земли. Обещает десять лет без подати.	A lord calls for settlers to go east to new lands. He promises ten years without dues.
de	1522	1522	1	На постоялом дворе в Йене рыцарь с чёрной бородой читал книгу на древнем языке. Потом сказали, что это был Лютер.	At an inn in Jena a black-bearded knight is reading a book in an ancient tongue. Later they say it was Luther.
de	1524	1525	0	Мужики поднялись под знаменем с башмаком. Требуют отменить барщину.	The peasants rise under a banner with a boot on it. They want an end to forced labour.
en	1350	1400	0	После мора рук не хватает. Ты {запросил|запросила} двойную плату — и тебе заплатили.	After the plague there are too few hands. You ask for double pay, and you get it.
en	1381	1381	0	Мужики идут на Лондон. Поп Джон Болл спрашивает: когда Адам пахал, а Ева пряла, кто был господином?	The peasants march on London. The priest John Ball asks: when Adam delved and Eve span, who was then the gentleman?
en	1387	1399	1	По дороге в Кентербери полный господин Чосер просил каждого паломника рассказать историю.	On the road to Canterbury a stout gentleman named Chaucer asks every pilgrim to tell a story.
en	1490	1640	0	Общинный луг обнесли изгородью. Теперь там пасутся овцы лорда.	The common has been fenced in. Now the lord's sheep graze there.
en	1594	1611	1	В лондонском трактире актёр Шекспир слушал, как ты ругаешься, и что-то записывал.	In a London tavern an actor called Shakespeare listens to you swearing and writes something down.
ru	862	900	0	Из-за моря позвали варяжского князя. Теперь дань везут ему.	A Varangian prince has been called from over the sea. Now the tribute goes to him.
ru	1050	1450	0	Сосед пишет жене на бересте: пришли рубаху. Она отвечает так же.	The neighbour scratches a note to his wife on birch bark: send me a shirt. She answers the same way.
ru	1350	1392	1	В лесу у Радонежа игумен Сергий сам колол дрова. Благословил тебя и дал хлеба.	In the forest near Radonezh the abbot Sergius chops his own wood. He blesses you and gives you bread.
ru	1405	1427	1	Инок Андрей Рублёв расписывал собор. Попросил тебя подержать лестницу.	The monk Andrei Rublev is painting the cathedral. He asks you to hold the ladder.
ru	1497	1600	0	Уйти от хозяина теперь можно только раз в год — неделю около Юрьева дня.	Now you may leave your master only once a year, in the week around St George's Day.
ru	1565	1572	0	По дороге скачут опричники с собачьими головами у сёдел. Соседнее село сожгли.	Oprichniki ride down the road with dogs' heads at their saddles. The next village is burned.
ru	1601	1603	0	Третий год неурожай. В Москве царь раздаёт хлеб, и туда идут тысячами.	The third year of failed harvests. The tsar gives out bread in Moscow, and thousands go there.
af	330	360	0	Купцы с востока говорят: царь Аксума принял веру в распятого бога. На его монетах теперь крест.	Traders from the east say the king of Axum has taken up the faith of the crucified god. His coins now bear a cross.
af	300	800	0	Через пески пришли люди на верблюдах. Меняют соль на золото.	Men on camels have come across the sands. They trade salt for gold.
af	1220	1450	0	Говорят, далеко на юге царь живёт за высокими каменными стенами. Простой люд селится внизу.	They say that far to the south a king lives behind high stone walls. The common folk live below.
af	1235	1260	0	Сундиата разбил царя-колдуна Сумангуру. Гриоты поют об этом на каждом празднике.	Sundiata has beaten the sorcerer-king Sumanguru. The griots sing of it at every feast.
af	1327	1400	0	В Томбукту выстроили мечеть из глины. После каждых дождей её обмазывают заново всем городом.	A mosque of clay has been built in Timbuktu. After every rainy season the whole town plasters it again.
af	1550	1650	0	Португальцы привезли из-за моря новое зерно — маис. Растёт быстрее проса.	The Portuguese bring a new grain from over the sea: maize. It grows faster than millet.
jp	646	700	0	Землю переписали и поделили по едокам. Подать платят рисом, тканью и работой.	The land has been surveyed and divided by mouths to feed. Taxes are paid in rice, cloth and labour.
jp	743	752	0	По всей стране собирают на огромного бронзового Будду в Наре. Хоть горсть риса, хоть веточку.	All over the land they collect for a huge bronze Buddha in Nara. A handful of rice will do, or a single twig.
jp	1281	1281	0	Монгольский флот у Хакаты. Ночью налетел тайфун и разметал корабли.	The Mongol fleet is off Hakata. In the night a typhoon scatters the ships.
jp	1543	1560	0	На Танэгасиму приплыли чужеземцы с огнестрельными палками. Князь купил две и велел кузнецам сделать такие же.	Foreigners with fire-sticks land on Tanegashima. The lord buys two and has his smiths copy them.
jp	1549	1551	1	Чужеземный монах Франциск рассказывал через толмача о своём боге. Ты {послушал|послушала} и {пошёл|пошла} по делам.	A foreign monk named Francis speaks of his god through an interpreter. You listen, then go about your business.
jp	1588	1590	0	Хидэёси велел собрать у крестьян все мечи. Говорят, их переплавят на гвозди для храма.	Hideyoshi orders all swords taken from the peasants. They say they will be melted into nails for a temple.
sea	680	1100	0	Корабли Шривиджаи ждут ветра в проливе. Купцы платят пошлину и молятся в монастырях.	Srivijaya's ships wait for the wind in the strait. The merchants pay their dues and pray at the monasteries.
sea	780	830	0	На Яве строят каменную гору, а на ней сотни будд. Камень носят всей округой.	On Java they are building a mountain of stone with hundreds of Buddhas on it. The whole district carries stone.
sea	1050	1150	0	Царь велел вырыть водоём длиной в полдня пути. Теперь рис растёт и в сухой сезон.	The king has a reservoir dug half a day's walk long. Now rice grows even in the dry season.
sea	1296	1297	1	Китайский посол Чжоу Дагуань записывал, как женщины на базаре торгуются за каждую рыбу.	A Chinese envoy called Zhou Daguan writes down how the women in the market haggle over every fish.
sea	1414	1500	0	Князь Малакки принял ислам. Следом за ним принимают купцы, а потом и рыбаки.	The prince of Malacca has taken up Islam. The merchants follow him, and then the fishermen.
sea	1571	1650	0	Из Манилы раз в год уходит за океан большой корабль. Возвращается с серебром.	Once a year a great ship leaves Manila to cross the ocean. It comes back with silver.
meso	200	550	0	В большом городе на нагорье живут сто тысяч человек. Туда несут обсидиан и перья.	A hundred thousand people live in the great city on the plateau. Obsidian and feathers are carried there.
meso	800	950	0	Дожди не приходят. Город пустеет, люди уходят в лес.	The rains do not come. The city empties, and people go off into the forest.
meso	1450	1454	0	Мороз побил маис. Люди продают себя в рабство за корзину початков.	Frost has killed the maize. People sell themselves into slavery for a basket of cobs.
meso	1450	1519	0	Цветочная война. Юношей берут в плен не ради выкупа, а для алтаря.	A flower war. Young men are taken captive not for ransom but for the altar.
meso andes	1550	1650	0	Испанские коровы забрели в маисовое поле. Жаловаться некому.	Spanish cows wander into the maize field. There is no one to complain to.
andes	100	700	0	Гончары лепят кувшины с лицами — смешными, больными, знакомыми.	The potters make jugs with faces: funny ones, sick ones, familiar ones.
andes	500	1000	0	Из Тиуанако пришли люди с посохами. Учат поднимать грядки на берегу озера.	Men with staffs have come from Tiwanaku. They teach how to raise beds on the lakeshore.
andes	1440	1532	0	Инка велел проложить дорогу через горы. На каждом переходе — склад с зерном и одеждой.	The Inca has a road built across the mountains. At every stage there is a storehouse of grain and cloth.
andes	1450	1532	0	Подошла твоя очередь на миту: месяц таскать камни для крепости.	It is your turn for the mit'a: a month of hauling stone for the fortress.
andes	1470	1532	0	Мимо пробежал гонец с раковиной. Говорят, свежая рыба с моря доходит до Куско за два дня.	A runner with a conch shell goes past. They say fresh fish from the sea reaches Cusco in two days.
andes	1573	1650	0	Испанцы забирают каждого седьмого на серебряную гору Потоси. Многие не возвращаются.	The Spaniards take one man in seven to the silver mountain of Potosí. Many never come back.
au	1	1650	0	Раз в несколько лет, когда родят сосны бунья, сходятся сотни людей. Песни, обмен, свадьбы.	Every few years, when the bunya pines bear, hundreds of people gather. Songs, trading, weddings.
au	1	1650	0	Из-за пустыни принесли сушёные листья питури. Их жуют на больших сборищах.	Dried pituri leaves have come from across the desert. They are chewed at great gatherings.
au	1606	1644	0	С моря видели большую лодку с белыми крыльями. Постояла и ушла.	A great canoe with white wings was seen at sea. It stayed a while and left.
cn	1720	1820	0	Земли не хватает. Распахивают горы под маис, а после дождей склоны съезжают в реку.	There is not enough land. Hillsides are ploughed for maize, and after the rains they slide into the river.
cn	1820	1850	0	Сын старосты курит опиум. Сначала продал быка, потом землю.	The headman's son smokes opium. First he sold the ox, then the land.
in	1769	1771	0	Голод в Бенгалии. Умер каждый третий, а налог не снизили.	Famine in Bengal. One in three dies, and the tax is not lowered.
in	1815	1850	0	На рынок привезли дешёвую английскую ткань. Ткачи сидят без работы.	Cheap English cloth has reached the market. The weavers sit idle.
sea	1815	1815	0	Взорвалась гора Тамбора. Три дня темно, как ночью.	Mount Tambora explodes. For three days it is dark as night.
jp	1689	1689	1	Странствующий поэт Басё заночевал у вас и всю ночь ворчал на блох. Утром оставил стишок.	A wandering poet called Bashō spends the night with you and grumbles about the fleas all night. In the morning he leaves a poem.
jp	1830	1849	1	Старик Хокусай сидел у дороги и рисовал Фудзи. Тебя тоже вписал — крошечной фигуркой на мосту.	Old Hokusai sits by the road drawing Mount Fuji. He puts you in too, a tiny figure on a bridge.
me	1683	1684	0	Мужчин забрали в поход на Вену. Вернулись немногие.	The men are taken for the campaign against Vienna. Few come back.
eg	1820	1848	0	Паша велел сеять хлопок на продажу. Мужчин забирают рыть каналы и в солдаты.	The pasha orders cotton sown for sale. The men are taken to dig canals and to be soldiers.
fr	1709	1709	0	Великий мороз. Вино замёрзло в бочках, птицы падают на лету.	The Great Frost. Wine freezes in the casks, and birds drop from the sky.
de	1746	1770	0	Король велел сажать картофель. Сажают, но есть пока боятся.	The king orders potatoes planted. People plant them, but are afraid to eat them.
de	1776	1830	1	В Веймаре важный господин Гёте спрашивал у тебя, как называются травы на лугу.	In Weimar a grand gentleman named Goethe asks you the names of the meadow plants.
en	1770	1840	0	В долине поставили прядильную фабрику. Детей берут с восьми лет.	A spinning mill has been built in the valley. They take children from the age of eight.
en	1834	1850	0	Помощь бедным теперь только в работном доме. Мужей и жён там держат порознь.	Poor relief now means the workhouse. Husbands and wives are kept apart there.
fr de en it us	1816	1816	0	Летом выпал снег. К зиме хлеб подорожал вдвое.	Snow falls in summer. By winter bread costs twice as much.
it	1796	1800	0	Пришли французы и посадили на площади дерево свободы. Церковное серебро увезли в Париж.	The French arrive and plant a liberty tree in the square. The church silver is carted off to Paris.
ru	1653	1700	0	Велят креститься тремя перстами. Бабка крестится по-старому и прячет иконы.	Now you must cross yourself with three fingers. Grandmother crosses herself the old way and hides the icons.
ru	1793	1850	0	Рекрутский набор. Парня забрили на двадцать пять лет — провожали, как покойника.	Conscription. A lad is taken for twenty-five years, and seen off like a dead man.
ru	1820	1836	1	На почтовой станции курчавый барин ждал лошадей и смешил смотрителя. Потом сказали — Пушкин.	At the posting station a curly-haired gentleman waits for horses and makes the stationmaster laugh. Later they say it was Pushkin.
af	1720	1850	0	Король меняет пленных у белых на ружья. Ружья нужны, чтобы брать новых пленных.	The king trades captives to the white men for guns. The guns are for taking more captives.
af	1804	1812	0	Шейх Усман дан Фодио поднял правоверных против царей хауса.	Sheikh Usman dan Fodio raises the faithful against the Hausa kings.
latam	1695	1760	0	В Минас-Жерайс нашли золото. Хозяин гонит туда всех рабов.	Gold has been found in Minas Gerais. The master drives all his slaves there.
latam	1799	1804	1	Немецкий барон Гумбольдт мерил в деревне высоту вулкана. Дал тебе посмотреть в свою трубу.	A German baron called Humboldt measures the height of the volcano by the village. He lets you look through his telescope.
latam	1813	1825	0	Через долину прошла армия Боливара. Говорят, испанцам конец.	Bolívar's army passes through the valley. They say the Spaniards are finished.
us	1775	1783	0	Ополченцы собираются на лугу с ружьями. Король далеко, а налог близко.	The militia gathers on the green with muskets. The king is far away, but the tax is close.
us	1838	1839	0	Чероки гонят на запад, за Миссисипи. По дороге умирает каждый четвёртый.	The Cherokee are driven west, beyond the Mississippi. One in four dies on the way.
us	1848	1855	0	В Калифорнии нашли золото. Сосед бросил ферму и уехал.	Gold has been found in California. A neighbour leaves his farm and goes.
au	1788	1790	0	На берег высадились люди с ружьями и коровами. Поставили флаг.	People with guns and cows land on the shore. They raise a flag.
cn	1876	1879	0	Великий голод на севере. У дорог стоят дети с соломинкой в волосах — на продажу.	The great famine in the north. Children stand by the roads with straw in their hair: for sale.
cn	1911	1912	0	Республика! На базаре мужчинам отрезают косы прямо ножницами.	A republic! In the market men's queues are cut off with shears on the spot.
jp	1873	1880	0	Землю оценили в деньгах. Налог тоже деньгами, хоть урожай пропади.	The land has been valued in money. The tax is in money too, harvest or no harvest.
jp	1923	1923	0	Землетрясение в Канто. Токио горит два дня.	The Kantō earthquake. Tokyo burns for two days.
in	1857	1858	0	Сипаи восстали из-за патронов в сале. Англичане вешают на деревьях у дороги.	The sepoys have risen over cartridges greased with fat. The British hang men from the trees along the road.
in	1901	1941	1	Седобородый поэт Тагор учит детей под деревьями. Ты {постоял|постояла} и {послушал|послушала}, как они поют.	A grey-bearded poet named Tagore teaches children under the trees. You stop and listen to them sing.
in	1943	1944	0	Голод в Бенгалии. В Калькутте у ворот просят не риса, а рисового отвара.	Famine in Bengal. At the gates in Calcutta people beg not for rice but for the water it was boiled in.
sea	1892	1896	1	В Дапитане ссыльный доктор Рисаль учит деревенских детей и бесплатно лечит глаза.	In Dapitan an exiled doctor named Rizal teaches the village children and treats eyes for free.
sea	1900	1940	0	На месте леса разбили каучуковую плантацию. Платят мало, зато деньгами.	The forest has been cleared for a rubber plantation. The pay is poor, but it is in money.
me	1915	1916	0	Армянских соседей угнали в сторону пустыни. Через неделю в их доме жили другие.	The Armenian neighbours are marched off toward the desert. A week later others are living in their house.
me	1948	1949	0	Война. Соседи ушли из деревни, забрав ключ от дома, — думали, на неделю.	War. The neighbours leave the village taking the house key, thinking it is for a week.
fr	1870	1871	0	Париж в осаде. В мясной лавке продают крыс.	Paris is under siege. The butcher sells rats.
fr	1888	1889	1	В Арле рыжий голландец Винсент писал поле, пока ты {жал|жала} пшеницу.	In Arles a red-haired Dutchman named Vincent paints the field while you reap the wheat.
de	1923	1923	0	Хлеб стоит миллиард марок. Зарплату несут домой в корзине.	Bread costs a billion marks. Wages are carried home in a basket.
de	1938	1942	0	Соседа-еврея увели ночью. Его лавку отдали другому.	The Jewish neighbour is taken away in the night. His shop is given to someone else.
it	1880	1914	0	Брат уплыл в Америку. Через год прислал денег и карточку, где он в шляпе.	Your brother has sailed to America. A year later he sends money and a photograph of himself in a hat.
ru	1891	1892	0	Голод на Волге. Пекут хлеб с лебедой.	Famine on the Volga. Bread is baked with goosefoot.
ru	1892	1898	1	Доктор Чехов в Мелихове вылечил тебе кашель и денег не взял.	Doctor Chekhov at Melikhovo cures your cough and takes no money.
ru	1929	1933	0	В колхоз забрали корову и лошадь. Кто не пошёл, того раскулачили.	The cow and the horse are taken into the collective farm. Those who refuse are dekulakised.
ru	1937	1938	0	Ночью приехала машина. Соседа увезли, больше его никто не видел.	A car comes in the night. The neighbour is taken away, and nobody sees him again.
af	1853	1873	1	Худой белый лекарь Ливингстон спросил, куда течёт ваша река, и записал ответ в книжку.	A thin white doctor called Livingstone asks where your river flows and writes the answer in his notebook.
af	1889	1897	0	Мор на скот. Пали почти все коровы, пастухи голодают.	A cattle plague. Nearly all the cows are dead, and the herders go hungry.
af	1900	1930	0	Сосед посадил какао. Через пять лет у него железная крыша.	A neighbour has planted cocoa. Five years later he has an iron roof.
latam	1888	1888	0	Принцесса подписала указ: рабства в Бразилии больше нет.	The princess signs the decree: there is no more slavery in Brazil.
latam	1910	1920	0	Сапата говорит: земля тому, кто её пашет. Мужчины уходят к нему.	Zapata says the land belongs to those who till it. The men go off to join him.
us	1849	1860	1	Долговязый адвокат Линкольн рассказал в суде анекдот. Смеялся даже судья.	A lanky lawyer named Lincoln tells a joke in court. Even the judge laughs.
us	1934	1937	0	Пыльные бури. Днём темно, на зубах песок. Семьи грузят всё на машину и едут в Калифорнию.	Dust storms. It is dark at noon and there is grit in your teeth. Families load everything into a car and head for California.
au	1851	1860	0	Нашли золото. Из города уехали все мужчины, даже полицейские.	Gold has been found. Every man has left town, even the police.
*	1903	1950	0	Над деревней пролетел аэроплан. Собаки лаяли, пока он не скрылся.	An aeroplane flies over the village. The dogs bark until it is gone.
cn	1980	2015	0	Второго ребёнка нельзя. Штраф — годовой доход.	A second child is not allowed. The fine is a year's income.
cn	1990	2020	0	Соседская дочь уехала на фабрику в Шэньчжэнь. Домой приезжает раз в год, на Новый год.	The neighbours' daughter has gone to a factory in Shenzhen. She comes home once a year, for the New Year.
in	1970	1996	0	В деревне открыли молочный кооператив. Молоко сдают дважды в день, деньги дают сразу.	A milk cooperative has opened in the village. Milk is brought in twice a day and paid for on the spot.
in	1976	1977	0	Чрезвычайное положение. Мужчин уговаривают на стерилизацию, а иногда и не уговаривают.	The Emergency. Men are talked into sterilisation, and sometimes not talked into it.
sea	1965	1975	0	Над рисовыми полями летают самолёты. Деревню переселили за колючую проволоку.	Aeroplanes fly over the rice fields. The village has been moved behind barbed wire.
sea	1975	1979	0	Красные кхмеры выгнали всех из городов в поле. Очки на носу — уже повод убить.	The Khmer Rouge drive everyone out of the cities into the fields. Wearing glasses is reason enough to be killed.
jp	1964	1964	0	Пустили поезд-пулю. До Осаки теперь четыре часа.	The bullet train opens. Osaka is four hours away now.
me	1973	1980	0	Нефть подорожала вчетверо. В городе растут стеклянные башни, строить их едут люди из Индии.	Oil has quadrupled in price. Glass towers rise in the city, and workers come from India to build them.
me	2011	2020	0	Война. Семья уходит через границу, в палаточный лагерь.	War. The family crosses the border to a tent camp.
eu	1948	1960	0	Пришла американская помощь. Поля пашут новым трактором.	American aid arrives. The fields are ploughed with a new tractor.
de	1961	1961	0	За ночь город перегородили колючей проволокой. Тётя осталась по ту сторону.	Overnight the city is cut in two with barbed wire. Your aunt is left on the other side.
ru	1961	1961	1	В Москве в открытой машине проехал Гагарин. Улыбнулся прямо в твою сторону.	In Moscow Gagarin rides past in an open car. He smiles right in your direction.
ru	1986	1986	0	Под Чернобылем взорвалась станция. Детей увозят, яблоки из сада есть нельзя.	The plant near Chernobyl has exploded. Children are taken away, and the apples from the garden must not be eaten.
af	1990	2010	0	На кладбище каждую неделю хоронят молодых. Внуков растят бабушки.	Every week the young are buried in the graveyard. Grandmothers raise the grandchildren.
af	2007	2026	0	Племянник прислал деньги из города прямо на телефон. Ты {получил|получила} их в лавке через минуту.	A nephew sends money from the city straight to your phone. You collect it at the shop a minute later.
latam	1955	1990	0	Семья перебралась в город, на склон над рекой. Дом собрали из того, что нашли.	The family moves to the city, onto a hillside above the river. The house is built from whatever could be found.
latam	1973	1990	0	Власть взяли военные. Студента с соседней улицы забрали, мать ходит с его фотографией.	The army has taken power. A student from the next street is taken, and his mother walks with his photograph.
us	1955	1965	0	Чернокожие бойкотируют автобусы. Месяцами ходят на работу пешком.	Black people boycott the buses. For months they walk to work.
us	1963	1963	1	В Вашингтоне проповедник Кинг говорил о своей мечте. Ты {стоял|стояла} так далеко, что {видел|видела} только белую рубашку.	In Washington a preacher named King speaks of his dream. You stand so far back you can see only a white shirt.
au	1948	1970	0	Пароходом привезли переселенцев из Европы. Новые соседи говорят по-гречески.	A ship brings settlers from Europe. The new neighbours speak Greek.
au	1967	1967	0	Референдум: коренных жителей будут считать в переписи. Дед долго молчит.	A referendum: Aboriginal people will be counted in the census. Grandfather says nothing for a long time.
am	-11000	-9500	0	Больших зверей всё меньше. Охотники ходят за ними по нескольку дней и часто приходят ни с чем.	The great beasts grow scarce. The hunters follow them for days and often come back with nothing.
cn	-18000	-12000	0	Женщины лепят из глины горшки и обжигают в костре. Теперь можно варить.	The women shape pots from clay and fire them in the hearth. Now food can be boiled.
cn	-1900	-1500	0	У князя появились котлы из бронзы. В них варят мясо для предков.	The lord has cauldrons of bronze now. Meat for the ancestors is cooked in them.
cn	-1046	-1040	0	Чжоуский князь разбил Шан. Новые хозяева говорят, что Небо отвернулось от старых.	The lord of Zhou has crushed the Shang. The new masters say Heaven has turned away from the old ones.
cn	-475	-221	0	Царства воюют без конца. Из деревни опять забирают каждого пятого.	The kingdoms are at war without end. Again one man in five is taken from the village.
cn	-117	-81	0	Соль и железо теперь продаёт только казна. Соль подорожала, а мотыги стали хуже.	Salt and iron are now sold only by the state. Salt is dearer and the hoes are worse.
in	-1500	-1000	0	С северо-запада пришли люди на колесницах. Поют гимны огню и пьют сому.	People in chariots come from the north-west. They sing hymns to fire and drink soma.
in	-320	-185	0	Царские люди меряют поле верёвкой. Четверть урожая — царю.	The king's men measure the field with a rope. A quarter of the harvest goes to the king.
in	-180	-10	0	На базаре ходят монеты с греческим царём. С одной стороны надпись по-гречески, с другой — по-нашему.	Coins with a Greek king pass in the market. Greek on one side, our own letters on the other.
me	-2334	-2279	0	Саргон из Аккада подчинил все города. Теперь подать везут ему.	Sargon of Akkad has conquered all the cities. Now the tribute goes to him.
me	-2112	-2050	0	В Уре строят ступенчатую гору для бога Луны. Каждая семья даёт кирпичи.	In Ur they are building a stepped mountain for the Moon god. Every family gives bricks.
me	-612	-610	0	Ниневия пала. Беженцы говорят, что от города остались одни холмы золы.	Nineveh has fallen. The refugees say nothing is left of the city but mounds of ash.
me	-520	-330	0	По царской дороге скачут гонцы. На каждой станции их ждёт свежий конь.	Couriers gallop along the royal road. At every station a fresh horse is waiting.
eg	-280	-200	0	В Александрии с каждого корабля забирают книги и переписывают. Хозяину возвращают копию.	In Alexandria they take the books off every ship to copy them. The owner gets the copy back.
eg	-47	-47	0	По Нилу плывёт царица Клеопатра на золочёной барке. Весь берег высыпал смотреть.	Queen Cleopatra sails up the Nile on a gilded barge. The whole bank turns out to watch.
med	-750	-550	0	Молодые садятся на корабли — основывать новый город за морем. Уплыл и брат матери.	The young men take ship to found a new city over the sea. Your mother's brother goes too.
med	-600	-500	0	На рынке платят кусочками серебра с печатью. Раньше меняли зерно на горшки.	In the market they pay with little stamped pieces of silver. Before, grain was traded for pots.
med	-430	-426	0	Чума в Афинах. Люди умирают прямо в храмах.	Plague in Athens. People die in the temples.
med	-430	-380	1	На Косе лекарь Гиппократ осмотрел тебя. Велел есть ячменную кашу и не тратиться на жрецов.	On Kos the physician Hippocrates examines you. He tells you to eat barley gruel and save your money on priests.
it med	-71	-70	0	Вдоль дороги на Капую поставили шесть тысяч крестов.	Six thousand crosses stand along the road to Capua.
af	-900	1	0	Мастер лепит из глины головы с огромными глазами. Их ставят на алтари.	A craftsman models clay heads with huge eyes. They are set on the altars.
meso	-1400	1	0	На площадке играют в каучуковый мяч. Бить можно только бедром.	On the court they play with a rubber ball. It may only be struck with the hip.
meso	-500	-100	0	На срезанной вершине горы строят город. Вода далеко внизу, носить её приходится на себе.	A city is being built on a levelled mountaintop. The water is far below, and must be carried up on your back.
andes	-2600	-2000	0	На побережье насыпают каменные холмы для праздников. Строителям платят сушёной рыбой.	On the coast they raise stone mounds for the festivals. The builders are paid in dried fish.
cn	9	23	0	Ван Ман объявил всю землю царской. Продавать её нельзя, а деньги меняют чуть не каждый год.	Wang Mang declares all land the emperor's. It may not be sold, and the money changes almost every year.
cn	184	192	0	Крестьяне в жёлтых повязках поднялись против двора. Говорят, синее небо умерло.	Peasants in yellow headbands rise against the court. They say the blue sky is dead.
cn	860	960	0	В монастыре печатают сутры с досок. Свиток стоит связку монет.	At the monastery they print sutras from wooden blocks. A scroll costs a string of coins.
cn	1069	1085	0	Казна весной даёт крестьянам зерно в долг. Осенью забирает с лихвой.	In spring the treasury lends grain to the peasants. In autumn it takes it back with interest.
cn	1127	1130	0	Чжурчжэни взяли Кайфын. Двор бежит на юг, а следом бегут все.	The Jurchens have taken Kaifeng. The court flees south, and everyone flees after it.
cn	1344	1348	0	Хуанхэ ушла в новое русло. Половину уезда смыло.	The Yellow River has jumped its course. Half the county is washed away.
cn	1368	1370	0	Бывший нищий монах Чжу Юаньчжан выгнал монголов. Теперь он император.	Zhu Yuanzhang, once a beggar monk, has driven out the Mongols. Now he is emperor.
cn	1406	1420	0	В Пекине строят дворец для императора. Брёвна сплавляют с юго-запада годами.	In Beijing a palace is being built for the emperor. The logs take years to float down from the south-west.
in	550	700	0	Сыновья старосты играют на доске в войну: слоны, кони, колесницы.	The headman's sons play war on a board: elephants, horses, chariots.
in	1001	1026	0	Из-за гор пришёл Махмуд Газневи. Ограбил храм и увёл слонов.	Mahmud of Ghazni comes over the mountains. He loots the temple and takes the elephants.
in	1300	1316	0	Султан велел продавать зерно по одной цене. Торговца, что обвешивал, высекли на базаре.	The sultan orders grain sold at one price. A trader who gave short weight is flogged in the market.
in	1327	1335	0	Султан велел всей столице переселиться на юг. Через несколько лет — вернуться обратно.	The sultan orders the whole capital to move south. A few years later, to move back.
in	1398	1399	0	Тимур взял Дели. Говорят, из голов сложили башни.	Timur has taken Delhi. They say towers were built of heads.
in	1498	1510	0	В Каликут пришли корабли с крестами на парусах. Чужаки ищут перец.	Ships with crosses on their sails have come to Calicut. The strangers want pepper.
in	1526	1530	0	При Панипате султана разбил пришелец Бабур. У него пушки, грохочут как гром.	At Panipat the sultan is beaten by a newcomer called Babur. He has cannon that roar like thunder.
in	1630	1632	0	Второй год нет дождей. Из деревни уходят целыми семьями.	No rain for the second year. Whole families leave the village.
me	70	73	0	Римляне сожгли Иерусалимский храм. Пленных гонят в Рим.	The Romans have burned the Temple in Jerusalem. Captives are marched to Rome.
me	260	270	0	Персидский шах взял в плен римского императора. Говорят, тот подставляет спину, когда шах садится на коня.	The Persian shah has captured a Roman emperor. They say he must bend his back for the shah to mount his horse.
me	762	766	0	Халиф строит на Тигре круглый город. Каменщиков зовут со всей страны.	The caliph is building a round city on the Tigris. Masons are called from all over the land.
me	794	850	0	В Багдаде делают бумагу. Говорят, секрет выведали у пленных китайцев.	Paper is made in Baghdad. They say the secret came from Chinese prisoners.
me	869	883	0	Рабы на солончаках у Басры восстали. Их вождь обещает каждому дом и своих рабов.	The slaves on the salt flats near Basra have risen. Their leader promises each a house and slaves of his own.
eg	969	975	0	С запада пришли новые халифы и заложили город Каир.	New caliphs come from the west and found a city called Cairo.
me	1098	1110	0	Франки взяли Иерусалим. Беженцы рассказывают такое, что дети не спят.	The Franks have taken Jerusalem. The refugees tell things that keep the children awake.
me	1187	1190	0	Салах ад-Дин отбил Иерусалим. Полы в мечети моют розовой водой.	Saladin has retaken Jerusalem. The mosque floors are washed with rosewater.
me eg	1260	1262	0	Мамлюки разбили монголов у Айн-Джалута. Впервые их кто-то остановил.	The Mamluks have beaten the Mongols at Ain Jalut. For the first time someone has stopped them.
me	1501	1524	0	Шах Исмаил велел всем молиться по-шиитски. Кто против, того казнят.	Shah Ismail orders everyone to pray the Shia way. Whoever objects is executed.
eg	1517	1520	0	Турки вошли в Каир. Последнего мамлюкского султана повесили на воротах Зувейла.	The Turks have entered Cairo. The last Mamluk sultan is hanged at the Zuwayla gate.
fr	732	735	0	У Пуатье франки разбили сарацин. Через деревню везут раненых.	Near Poitiers the Franks have beaten the Saracens. The wounded are carried through the village.
fr	1140	1300	0	В городе строят собор. Говорят, достроят его разве что внуки.	A cathedral is going up in town. They say only the grandchildren will see it finished.
fr	1209	1229	0	С севера пришли крестоносцы на здешних еретиков. В Безье перебили весь город.	Crusaders come from the north against the heretics here. In Béziers the whole town is slaughtered.
fr	1358	1358	0	Мужики поднялись на господ. Через месяц их вешали на каждом дубе.	The peasants rise against the lords. A month later they are hanged from every oak.
fr	1598	1610	0	Король Генрих хочет, чтобы по воскресеньям у каждого крестьянина в горшке была курица.	King Henry wants every peasant to have a chicken in the pot on Sundays.
it	1497	1498	0	Во Флоренции монах Савонарола велел жечь зеркала и наряды. Соседка бросила в огонь свою лютню.	In Florence the friar Savonarola has mirrors and finery burned. A neighbour throws her lute on the fire.
it	1527	1527	0	Наёмники императора разграбили Рим. Говорят, сам папа прятался в крепости.	The emperor's mercenaries have sacked Rome. They say the pope himself hid in the fortress.
it	1630	1631	0	Чума в Милане. Говорят, её разносят мазальщики, что мажут двери ядом.	Plague in Milan. They say it is spread by anointers who smear poison on the doors.
de	1241	1242	0	Монголы разбили рыцарей у Легницы. Говорят, у убитых отрезали по уху и набрали девять мешков.	The Mongols have beaten the knights at Legnica. They say they cut an ear from each of the dead and filled nine sacks.
de ru	1350	1494	0	Ганзейские купцы привезли из Новгорода меха и воск. Обратно повезут сукно и соль.	Hanseatic merchants bring furs and wax from Novgorod. They will take back cloth and salt.
de	1580	1650	0	В соседнем селе сожгли женщину за колдовство. Говорят, она навела град.	In the next village a woman is burned for witchcraft. They say she called down the hail.
en	1215	1216	0	Бароны заставили короля Иоанна приложить печать к грамоте. Говорят, теперь и король под законом.	The barons force King John to seal a charter. They say now even the king is under the law.
en	1337	1453	0	Король набирает лучников. По воскресеньям мужчины стреляют на лугу у церкви.	The king wants archers. On Sundays the men shoot at the butts by the church.
en	1536	1541	0	Королевские люди закрыли монастырь. Свинец с крыши увезли, монахи разошлись.	The king's men close the abbey. The lead is stripped from the roof and the monks scatter.
en	1588	1588	0	На холмах зажгли сигнальные костры. Испанский флот у берега.	Beacon fires are lit on the hills. The Spanish fleet is off the coast.
ru	1016	1054	0	Князь Ярослав записал Правду: за убитого смерда — пять гривен.	Prince Yaroslav has the law written down: five grivnas for a killed peasant.
ru	1257	1300	0	Ордынские писцы переписали всех. Дань теперь с каждого дыма.	The Horde's scribes have counted everyone. Now tribute is taken from every hearth.
ru	1380	1380	0	Князь Дмитрий собирает рать на Мамая. Из села ушли все мужики.	Prince Dmitry is raising an army against Mamai. Every man has left the village.
ru	1480	1482	0	На Угре постояли против ордынцев и разошлись. Говорят, дани больше не будет.	On the Ugra the armies faced the Horde and then parted. They say there will be no more tribute.
ru	1582	1585	0	Казаки ушли за Камень воевать Сибирь. Вернулись с соболями.	The Cossacks have gone beyond the Stone to conquer Siberia. They come back with sables.
ru	1605	1613	0	Смута. Цари меняются один за другим, по дорогам ходят шайки.	The Time of Troubles. Tsars come and go, and bands of robbers roam the roads.
af	800	1076	0	Царь Ганы сидит в шатре, у входа собаки в золотых ошейниках. Каждый может прийти к нему с жалобой.	The king of Ghana sits in his pavilion, with dogs in gold collars at the door. Anyone may come to him with a grievance.
af	1000	1500	0	Торговцы рассказывают про порты на восточном берегу: туда приходят корабли из Аравии и Индии за золотом и слоновой костью.	Traders tell of ports on the eastern shore where ships from Arabia and India come for gold and ivory.
af	1400	1650	0	Литейщики при дворе обы отливают из бронзы головы предков.	The casters at the Oba's court cast the heads of ancestors in bronze.
af	1496	1498	0	Аския Мухаммад едет в Мекку. С ним полторы тысячи всадников и мешки золота.	Askia Muhammad sets out for Mecca, with fifteen hundred horsemen and sacks of gold.
af	1591	1595	0	Марокканцы с ружьями разбили войско сонгаев. Томбукту разграблен.	Moroccans with muskets have routed the Songhai army. Timbuktu is plundered.
jp	250	550	0	Для умершего князя насыпают курган. Вокруг ставят глиняных воинов и коней.	A mound is raised for the dead lord. Clay warriors and horses are set around it.
jp	552	585	0	Из Пэкче привезли статую Будды. Начался мор, и статую бросили в канал.	A statue of the Buddha is brought from Paekche. A plague starts, and the statue is thrown into a canal.
jp	735	737	0	Оспа пришла с материка. Умер каждый третий.	Smallpox comes from the mainland. One in three dies.
jp	1180	1185	0	Война Тайра и Минамото. Воины забирают рис прямо с поля.	War between the Taira and the Minamoto. Soldiers take the rice straight from the field.
jp	1428	1500	0	Крестьяне всей округи сговорились и выгнали ростовщиков. Долговые расписки сожгли.	The peasants of the whole district band together and drive out the moneylenders. The debt papers are burned.
jp	1467	1477	0	Война Онин. Киото горит десять лет подряд.	The Ōnin War. Kyoto burns for ten years.
jp	1637	1650	0	Страну закрыли для чужеземцев. За крест на шее — смерть.	The country is closed to foreigners. A cross around the neck means death.
sea	100	500	0	В порту меняют рис на индийские бусы. Попадаются и монеты с чужим царём из-за моря.	In the port rice is traded for Indian beads. Sometimes coins turn up with a foreign king from over the sea.
sea	1113	1150	0	Под Ангкором строят новый храм. Тесать камень сгоняют из всех деревень.	A new temple is being built at Angkor. Men from every village are driven there to cut stone.
sea	1511	1515	0	Португальцы взяли Малакку. Купцы уводят корабли в другие порты.	The Portuguese have taken Malacca. The merchants take their ships to other ports.
meso	300	800	0	Писцы высекают на камне, какой царь и в какой день взял в плен соседнего.	Scribes carve in stone which king captured which neighbour, and on what day.
meso	950	1150	0	В Толлане правят воины-ягуары. Говорят, крышу храма там держат каменные воины.	Jaguar warriors rule in Tollan. They say stone warriors hold up the roof of the temple there.
meso	1325	1340	0	На острове посреди озера видели орла на кактусе. Мешики строят там город.	An eagle was seen on a cactus on an island in the lake. The Mexica are building a city there.
meso	1521	1521	0	Испанцы и их союзники осадили Теночтитлан. Каналы забиты мёртвыми.	The Spaniards and their allies besiege Tenochtitlan. The canals are choked with the dead.
andes	900	1450	0	Чиму роют канал из соседней долины. Вода пойдёт туда, куда скажет царь.	The Chimú are digging a canal from the next valley. The water will go where the king says.
andes	1450	1532	0	Учётчик завязал узлы на шнурке: столько-то душ, столько-то лам.	The tally-keeper ties knots in a cord: so many souls, so many llamas.
andes	1529	1532	0	Сыновья покойного Инки воюют за трон. Каждый сгоняет людей в своё войско.	The dead Inca's sons are at war over the throne. Each drives men into his own army.
andes	1600	1601	0	Вулкан Уайнапутина взорвался. Пепел лежит на полях по колено.	The volcano Huaynaputina has exploded. Ash lies knee-deep on the fields.
cn	1661	1669	0	Велено уйти от моря на тридцать ли. Дома сожгли, чтобы никто не вернулся.	Everyone is ordered thirty li back from the sea. The houses are burned so no one returns.
cn	1793	1794	0	Говорят, английский посол привёз императору подарки. Император ответил, что Китаю ничего не нужно.	They say an English envoy brought the emperor gifts. The emperor answered that China needs nothing.
cn	1839	1842	0	Английские корабли обстреливают побережье. Говорят, из-за опиума.	English ships shell the coast. Over opium, they say.
in	1707	1720	0	Падишах умер, сыновья делят трон. Подать собирают по три раза.	The emperor is dead, and his sons fight for the throne. Taxes are collected three times over.
in	1765	1790	0	Налог теперь собирает английская компания. Сборщики те же, только жёстче.	An English company collects the taxes now. The same collectors, only harsher.
in	1810	1850	0	Плантатор-англичанин велел сеять индиго вместо риса. Спорить нельзя.	An English planter orders indigo sown instead of rice. There is no arguing.
sea	1650	1760	0	Голландцы рубят лишние гвоздичные деревья, чтобы гвоздика не дешевела.	The Dutch cut down surplus clove trees so that cloves stay dear.
sea	1825	1830	0	Принц Дипонегоро поднял Яву против голландцев. Война идёт пятый год.	Prince Diponegoro has raised Java against the Dutch. The war is in its fifth year.
sea	1830	1850	0	Голландцы велели засадить пятую часть земли кофе и сахарным тростником — для них.	The Dutch order a fifth of the land planted with coffee and sugar cane, for them.
jp	1783	1787	0	Вулкан Асама засыпал поля пеплом. Потом три года голод.	Mount Asama buries the fields in ash. Three years of famine follow.
jp	1830	1830	0	Вся деревня ушла на богомолье в Исэ, не спросясь старосты. Говорят, с неба падают амулеты.	The whole village goes off to Ise on pilgrimage without asking the headman. They say charms are falling from the sky.
me	1803	1806	0	Ваххабиты взяли Мекку. Паломники боятся идти.	The Wahhabis have taken Mecca. Pilgrims are afraid to go.
eg	1798	1801	0	Французы высадились в Египте. С ними учёные — меряют пирамиды.	The French have landed in Egypt. Scholars come with them and measure the pyramids.
fr	1720	1721	0	Бумаги банка Лоу ничего не стоят. Сосед отдал за них виноградник.	John Law's bank notes are worthless. A neighbour sold his vineyard for them.
fr	1785	1800	0	Говорят, картофель есть можно: сам король носит его цветок в петлице.	They say potatoes are fit to eat: the king himself wears the flower in his buttonhole.
fr	1830	1830	0	В Париже три дня строят баррикады. Короля опять сменили.	In Paris they build barricades for three days. The king has been changed again.
de	1740	1786	0	Прусские вербовщики поят парней в трактире. Утром те уже солдаты.	Prussian recruiters buy the lads drinks at the inn. By morning they are soldiers.
de	1830	1855	0	Полдеревни продаёт всё и уезжает в Америку.	Half the village sells up and leaves for America.
de	1844	1844	0	Ткачи в Силезии разгромили дом фабриканта. Пришли солдаты.	The weavers in Silesia wreck the mill owner's house. The soldiers come.
en	1739	1741	1	Проповедник Уайтфилд говорил прямо в поле перед углекопами. По чёрным щекам текли светлые дорожки слёз.	The preacher Whitefield speaks in an open field to the colliers. Tears leave white streaks down their black cheeks.
en	1811	1813	0	Ночью люди генерала Лудда разбили станки у фабриканта.	In the night General Ludd's men smash the mill owner's frames.
it	1656	1657	0	Чума в Неаполе. Мёртвых не успевают хоронить.	Plague in Naples. The dead cannot be buried fast enough.
it	1848	1849	0	Восстания по всей Италии. Студенты строят баррикады и поют.	Uprisings all over Italy. Students build barricades and sing.
ru	1670	1671	0	Стенька Разин гуляет по Волге. Боярские усадьбы горят.	Stenka Razin roams the Volga. The boyars' manors burn.
ru	1773	1775	0	Пугачёв называет себя царём Петром. Мужики вешают помещиков на воротах.	Pugachev calls himself Tsar Peter. The peasants hang landowners from their gates.
af	1701	1720	0	В Кумаси с неба опустился золотой стул. Говорят, в нём душа всего народа ашанти.	In Kumasi a golden stool has come down from the sky. They say the soul of the whole Asante people is in it.
af	1818	1830	0	Торговцы говорят: на юге вождь Чака собрал войско с короткими копьями. Оттуда бегут толпами.	Traders say that in the south a chief called Shaka has raised an army with short spears. People flee from there in crowds.
latam andes	1780	1782	0	Тупак Амару поднял индейцев против коррехидоров. Говорят, Инка вернулся.	Túpac Amaru raises the Indians against the corregidores. They say the Inca has returned.
latam us	1791	1804	0	На сахарном острове рабы восстали — и победили.	On the sugar island the slaves have risen, and won.
us	1692	1693	0	В Сейлеме вешают ведьм. Девочки кричат и показывают пальцем.	In Salem they are hanging witches. The girls scream and point.
us	1825	1850	0	По новому каналу баржи идут прямо до Нью-Йорка. За пшеницу дают больше.	Barges go all the way to New York on the new canal. Wheat fetches more.
au	1720	1850	0	С севера на лодках пришли макассарцы за трепангом. Привезли табак и ножи.	Makassar men come in boats from the north for sea cucumbers. They bring tobacco and knives.
au	1789	1790	0	Оспа пришла в стойбища. Мёртвые лежат у воды.	Smallpox reaches the camps. The dead lie by the water.
au	1820	1850	0	Белые пасут овец на ваших землях. Колодцы теперь их.	White men graze sheep on your country. The waterholes are theirs now.
cn	1900	1901	0	Ихэтуани рвут телеграфные провода и жгут миссии. Потом пришли иностранные войска.	The Boxers tear down telegraph wires and burn the missions. Then foreign armies come.
cn	1905	1906	0	Экзамены на чин отменили. Деревенский учитель сжёг свои прописи.	The civil examinations are abolished. The village teacher burns his copybooks.
cn	1934	1935	0	Через уезд прошли красные. За рис, что брали, платили.	The Reds pass through the county. They pay for the rice they take.
cn	1937	1945	0	Японцы заняли уезд. Взрослые учат детей кланяться часовому.	The Japanese occupy the county. The grown-ups teach the children to bow to the sentry.
jp	1930	1934	0	Шёлк подешевел втрое. На севере крестьяне продают дочерей в город.	Silk has lost two-thirds of its price. In the north peasants sell their daughters to the city.
in	1860	1900	0	Через округу провели железную дорогу. До города теперь полдня, а не неделя.	The railway has come through the district. Town is half a day away now, not a week.
in	1896	1902	0	Голод, а за ним чума. Санитары ходят по домам и жгут постели.	Famine, and plague after it. Inspectors go from house to house burning the bedding.
sea	1883	1883	0	Взорвался Кракатау. Грохот слышали за тысячи вёрст, волна смыла прибрежные деревни.	Krakatoa explodes. The roar is heard thousands of miles away, and a wave sweeps away the coastal villages.
sea	1945	1949	0	Объявили независимость. Голландцы вернулись с войсками, и в деревне снова стреляют.	Independence is declared. The Dutch come back with troops, and there is shooting in the village again.
eg	1869	1869	0	Прорыли канал от моря до моря. На открытие приехала французская императрица.	A canal has been cut from sea to sea. A French empress comes to open it.
me	1908	1930	0	Англичане нашли нефть. В пустыне выросли вышки, пахнет как от лампы.	The English have struck oil. Derricks rise in the desert, and it smells like a lamp.
me	1915	1918	0	Саранча и блокада. В горах едят траву.	Locusts and blockade. In the mountains people eat grass.
fr	1863	1890	0	Тля погубила виноградники. Винодел выкорчевал лозы и уехал в Алжир.	An aphid has killed the vineyards. The winegrower grubs up the vines and leaves for Algeria.
fr	1936	1936	0	Рабочим дали оплачиваемый отпуск. Ты впервые {увидел|увидела} море.	Workers get paid holidays. You see the sea for the first time.
de	1871	1871	0	В Версале провозгласили германскую империю. В деревне звонят колокола.	A German empire is proclaimed at Versailles. The village bells ring.
en	1870	1890	0	Открыли школу для всех. Дети пишут на грифельных досках.	A school for everyone has opened. The children write on slates.
en	1926	1926	0	Всеобщая стачка. Трамваи стоят, по улицам ходят солдаты.	The General Strike. The trams stand still, and soldiers walk the streets.
en	1948	1952	0	К врачу теперь можно бесплатно. Бабушка наконец вставила зубы.	The doctor is free now. Grandmother finally gets her false teeth.
it	1908	1908	0	Землетрясение в Мессине. Город рухнул за полминуты.	The Messina earthquake. The city falls in half a minute.
it	1922	1925	0	Чернорубашечники поят несогласных касторкой. Соседу досталось при всех.	The Blackshirts dose those who disagree with castor oil. A neighbour gets it in front of everyone.
ru	1896	1914	0	Переселенцам дают землю в Сибири. Сосед погрузил семью в вагон и уехал.	Settlers are given land in Siberia. A neighbour loads his family into a railway car and goes.
af	1890	1908	0	Агенты требуют каучук. Кто не принёс нормы, тому рубят руку.	The agents demand rubber. Whoever falls short of the quota has a hand cut off.
af	1935	1936	0	Итальянцы напали на Эфиопию. С самолётов льют отраву.	The Italians invade Ethiopia. They spray poison from aeroplanes.
latam	1879	1912	0	В лесу на Амазонке собирают каучук. Сборщики должны хозяину больше, чем заработают за всю жизнь.	Rubber is tapped in the Amazon forest. The tappers owe the boss more than they will earn in a lifetime.
latam	1904	1914	0	Через перешеек роют канал. Работают люди со всех островов, малярия косит их сотнями.	A canal is being dug across the isthmus. Men from every island work on it, and malaria cuts them down by the hundred.
us	1862	1890	0	По новому закону можно взять сто шестьдесят акров. Надо только прожить на них пять лет.	Under the new law you can claim a hundred and sixty acres. You only have to live on them five years.
us	1892	1924	0	Через остров Эллис идут пароходы с переселенцами. Новым соседям переделали имена на американский лад.	Steamers full of immigrants come through Ellis Island. The new neighbours have had their names made American.
au	1901	1901	0	Колонии объединились в одну страну. Пикник и речи на площади.	The colonies have joined into one country. A picnic and speeches in the square.
au	1915	1915	0	Из городка ушли в Галлиполи двадцать парней. Вернулись девять.	Twenty young men left the town for Gallipoli. Nine came back.
*	1920	1960	0	У соседа появилось радио. Вечером слушают всей улицей.	A neighbour has a wireless. In the evening the whole street listens.
cn	1966	1969	0	Учителя водят по улице в бумажном колпаке. Ученики кричат.	The teacher is paraded through the street in a paper dunce's cap. The pupils shout.
cn	2008	2020	0	Провели скоростную дорогу. До столицы провинции теперь час.	A high-speed line has been built. The provincial capital is an hour away now.
in	1991	2010	0	Племянник работает в Бангалоре на компьютерах и шлёт деньги домой.	A nephew works with computers in Bangalore and sends money home.
sea	1965	1966	0	Ночью забирают тех, кого назвали коммунистами. Река несёт тела.	In the night those named as communists are taken. The river carries bodies.
jp	1991	2000	0	Пузырь лопнул. Акции соседа стоят как бумага, а кредит остался.	The bubble has burst. A neighbour's shares are worth paper, but the loan remains.
jp	2011	2011	0	Землетрясение и волна. Из зоны вокруг станции всех вывезли, кошки остались.	An earthquake and a wave. Everyone is moved out of the zone around the plant; the cats stay behind.
me	1979	1979	0	Шах бежал. Женщинам велели покрыть голову.	The shah has fled. Women are told to cover their heads.
me	1980	1988	0	Война с соседней страной. Мальчиков отправляют на минные поля.	War with the neighbouring country. Boys are sent onto the minefields.
it	1955	1970	0	Сосед уехал с юга на завод в Турин. Вернулся на «фиате».	A neighbour leaves the south for a factory in Turin. He comes back in a Fiat.
fr	1968	1968	0	В Париже студенты строят баррикады. Заводы бастуют.	In Paris students build barricades. The factories strike.
en	1979	1990	0	Шахту закрыли. Половина улицы без работы.	The pit is closed. Half the street is out of work.
eu	2002	2002	0	Новые деньги — евро. Бабушка всё пересчитывает на старые.	New money: the euro. Grandmother converts everything back into the old.
ru	1954	1960	0	Комсомольцы едут поднимать целину. Сосед уехал в Казахстан.	Young Communists go to plough the virgin lands. A neighbour leaves for Kazakhstan.
ru	1992	1998	0	Выдали ваучер. Ты {отдал|отдала} его за две бутылки водки.	You are issued a voucher. You trade it for two bottles of vodka.
af	1967	1970	0	Война в Биафре. Дети с раздутыми животами.	The war in Biafra. Children with swollen bellies.
af	1984	1985	0	Засуха в Эфиопии. Мир смотрит по телевизору, а здесь умирают.	Drought in Ethiopia. The world watches on television while people die here.
af	1994	1994	0	Сто дней резни. Соседи убивают соседей мачете.	A hundred days of slaughter. Neighbours kill neighbours with machetes.
latam	1959	1961	0	На Кубе победили бородачи. Землю делят между крестьянами.	The bearded ones have won in Cuba. The land is shared among the peasants.
latam	1982	1990	0	Цены растут каждый день. Зарплату сразу меняют на доллары.	Prices rise every day. Wages are changed into dollars at once.
us	1965	1973	0	Соседского парня забрали во Вьетнам. Мать держит на окне флажок.	The boy next door is drafted for Vietnam. His mother keeps a little flag in the window.
us	1950	1970	0	Семья купила дом в пригороде. Газон, машина, у всех одинаковые крыши.	The family buys a house in the suburbs. A lawn, a car, and all the roofs the same.
us	2001	2001	0	По телевизору горят две башни. Весь день никто не работает.	On television two towers are burning. Nobody works all day.
au	2008	2008	0	Премьер-министр попросил прощения у украденных детей. Тётя плачет у телевизора.	The prime minister apologises to the stolen children. Your aunt cries in front of the television.
`,et=Object.assign({"../../content/lines/anc.tsv":me,"../../content/lines/early.tsv":he,"../../content/lines/ind.tsv":ge,"../../content/lines/med.tsv":_e,"../../content/lines/mod.tsv":ve,"../../content/lines/stone.tsv":ye}),tt=Object.assign({"../../content/dilemmas_cloister.txt":be,"../../content/dilemmas_more.txt":xe,"../../content/dilemmas_new.txt":Se,"../../content/dilemmas_old.txt":Ce}),nt=e=>Object.keys(e).sort().map(t=>e[t]),rt=Qe.read(nt(et),$e,nt(tt)),I=class{sur;male;female;surnameFirst;feminine;constructor(e,t,n,r={}){this.sur=it(e),this.male=it(t),this.female=it(n),this.surnameFirst=r.surnameFirst??!1,this.feminine=r.feminine??!1}};function it(e){return e===``?[]:e.split(`, `).map(e=>{let[t,n]=e.split(`|`);return new O(t,n)})}var at={stone:new I(``,`Быстроногий|Swift-Foot, Сын Ворона|Son of Raven, Тот-кто-видит-зверя|Sees-the-Beast, Длиннорукий|Long-Arm, Смеющийся|Laughing One, Молчун|Silent One, Кремень|Flint, Рыжий Лис|Red Fox, Тот-кто-бежит-с-ветром|Runs-with-the-Wind, Сын Лосихи|Son of the Elk Cow, Огниво|Firestone, Косолапый|Bear-Foot, Ночной Глаз|Night Eye, Рыболов|Fisher, Певун|Singer`,`Дочь Реки|River's Daughter, Находящая воду|Finds-Water, Тихая|Quiet One, Ловкая|Nimble, Помнящая травы|Knows-the-Herbs, Пятнистая|Speckled, Ракушка|Shell, Утренняя|Morning One, Дочь Ветра|Wind's Daughter, Ягодница|Berry Picker, Ласточка|Swallow, Сказительница|Tale Keeper, Белая Сова|White Owl, Та-что-видит-сны|Dreamer`),au:new I(``,`Билби|Bilby, Сын Эму|Son of Emu, Тот-кто-поёт-дорогу|Sings-the-Way, Бумеранг|Boomerang, Красная Земля|Red Earth, Дальний Огонь|Far Fire`,`Дочь Дождя|Rain's Daughter, Знающая воду|Knows-the-Water, Звёздная|Star One, Тихий Ручей|Quiet Creek, Охра|Ochre, Ящерка|Little Lizard`),cn:new I(`Ли|Li, Ван|Wang, Чжан|Zhang, Лю|Liu, Чэнь|Chen, Ян|Yang, Чжао|Zhao, Хуан|Huang, Цзя|Jia, Гао|Gao, Сунь|Sun, Чжоу|Zhou, Ма|Ma, Го|Guo`,`Вэй|Wei, Мин|Ming, Цзюнь|Jun, Бо|Bo, Хао|Hao, Юн|Yong, Цян|Qiang, Пин|Ping, Тао|Tao, Гуан|Guang, Чэн|Cheng, Дэ|De, Шэн|Sheng, Фу|Fu`,`Мэй|Mei, Лань|Lan, Сюэ|Xue, Хуа|Hua, Лин|Ling, Фан|Fang, Цзин|Jing, Юй|Yu, Сяо|Xiao, Хун|Hong, Сю|Xiu, Ин|Ying, Чунь|Chun, Цяо|Qiao`,{surnameFirst:!0}),jp:new I(`Танака|Tanaka, Сато|Sato, Ямада|Yamada, Ито|Ito, Накамура|Nakamura, Кобаяси|Kobayashi`,`Таро|Taro, Дзиро|Jiro, Хироси|Hiroshi, Кэндзи|Kenji, Исаму|Isamu, Сёта|Shota, Горо|Goro, Масао|Masao, Тадаси|Tadashi, Ёсио|Yoshio`,`Ханако|Hanako, Юки|Yuki, Сакура|Sakura, Харуко|Haruko, Мити|Michi, Аяко|Ayako, Кику|Kiku, Тиё|Chiyo, Фуми|Fumi, Сидзу|Shizu`,{surnameFirst:!0}),in:new I(`Шарма|Sharma, Сингх|Singh, Ядав|Yadav, Гупта|Gupta, Пиллаи|Pillai, Дас|Das, Рао|Rao, Патель|Patel, Мишра|Mishra, Наир|Nair`,`Арджун|Arjun, Рави|Ravi, Виджай|Vijay, Кумар|Kumar, Анил|Anil, Девдас|Devdas, Мохан|Mohan, Гопал|Gopal, Шанкар|Shankar, Хари|Hari, Рамеш|Ramesh, Бхим|Bhim`,`Сита|Sita, Лакшми|Lakshmi, Радха|Radha, Мира|Meera, Гита|Gita, Парвати|Parvati, Камала|Kamala, Сарасвати|Saraswati, Девика|Devika, Кальяни|Kalyani, Шанти|Shanti, Уша|Usha`),mes:new I(``,`Лугаль|Lugal, Ипхур|Ipkhur, Шамаш-иддин|Shamash-iddin, Набу|Nabu, Ур-Нанше|Ur-Nanshe, Энмен|Enmen`,`Нин-Ана|Nin-Ana, Геме|Geme, Шат-Иштар|Shat-Ishtar, Амат-Мамму|Amat-Mammu, Белтани|Beltani, Илтани|Iltani`),eg:new I(``,`Хеси|Hesy, Небамон|Nebamun, Пенту|Pentu, Ипи|Ipi, Сенеб|Seneb, Мерира|Meryra`,`Нефер|Nefer, Мерит|Merit, Тия|Tiye, Ити|Iti, Хенут|Henut, Небет|Nebet`),gr:new I(``,`Никий|Nikias, Филон|Philon, Деметрий|Demetrios, Луций|Lucius, Гай|Gaius, Марк|Marcus`,`Ирина|Eirene, Клео|Kleo, Юлия|Julia, Ливия|Livia, Фила|Phila, Агата|Agathe`),me:new I(``,`Юсуф|Yusuf, Хасан|Hasan, Али|Ali, Омар|Omar, Ибрагим|Ibrahim, Самир|Samir, Халид|Khalid, Мустафа|Mustafa, Салих|Salih, Карим|Karim, Тарик|Tariq, Яхья|Yahya`,`Фатима|Fatima, Лейла|Layla, Зейнаб|Zaynab, Амина|Amina, Мариам|Maryam, Халима|Halima, Нур|Nur, Хадиджа|Khadija, Сальма|Salma, Рукайя|Ruqayya, Сафия|Safiya, Ясмин|Yasmin`),fr:new I(`Дюбуа|Dubois, Мартен|Martin, Бернар|Bernard, Леруа|Leroy, Моро|Moreau, Дюран|Durand`,`Жан|Jean, Пьер|Pierre, Жак|Jacques, Гийом|Guillaume, Николя|Nicolas, Этьен|Étienne`,`Мари|Marie, Жанна|Jeanne, Анна|Anne, Маргарита|Marguerite, Изабо|Isabeau, Катрин|Catherine`),de:new I(`Мюллер|Müller, Шмидт|Schmidt, Шнайдер|Schneider, Фишер|Fischer, Вебер|Weber, Бауэр|Bauer`,`Ганс|Hans, Йохан|Johann, Петер|Peter, Фриц|Fritz, Конрад|Konrad, Генрих|Heinrich`,`Анна|Anna, Грета|Greta, Эльза|Elsa, Марта|Martha, Барбара|Barbara, Урсула|Ursula`),it:new I(`Росси|Rossi, Бруно|Bruno, Риччи|Ricci, Конти|Conti, Эспозито|Esposito, Галло|Gallo`,`Пьетро|Pietro, Джованни|Giovanni, Марко|Marco, Лука|Luca, Антонио|Antonio, Франческо|Francesco`,`Мария|Maria, Лючия|Lucia, Франческа|Francesca, Джулия|Giulia, Анна|Anna, Клара|Chiara`),en:new I(`Смит|Smith, Тейлор|Taylor, Купер|Cooper, Миллер|Miller, Бейкер|Baker, Уокер|Walker`,`Джон|John, Уильям|William, Томас|Thomas, Ричард|Richard, Генри|Henry, Роберт|Robert`,`Мэри|Mary, Элис|Alice, Агнес|Agnes, Джоан|Joan, Элизабет|Elizabeth, Энн|Anne`),ru:new I(`Иванов|Ivanov, Кузнецов|Kuznetsov, Попов|Popov, Смирнов|Smirnov, Волков|Volkov, Соколов|Sokolov`,`Иван|Ivan, Фёдор|Fyodor, Пётр|Pyotr, Никита|Nikita, Савва|Savva, Гаврила|Gavrila, Тимофей|Timofey, Степан|Stepan, Егор|Yegor, Афанасий|Afanasy, Прохор|Prokhor, Михаил|Mikhail`,`Марья|Marya, Аграфена|Agrafena, Пелагея|Pelageya, Дарья|Darya, Анна|Anna, Ульяна|Ulyana, Акулина|Akulina, Евдокия|Yevdokia, Прасковья|Praskovya, Матрёна|Matryona, Татьяна|Tatyana, Ефросинья|Yefrosinya`,{feminine:!0}),af:new I(``,`Кваме|Kwame, Мамаду|Mamadou, Секу|Sekou, Нкози|Nkosi, Адебайо|Adebayo, Коффи|Kofi, Чиди|Chidi, Окоро|Okoro, Бакари|Bakari, Тунде|Tunde, Йаа|Yaw, Муса|Musa, Жабари|Jabari`,`Амина|Amina, Нья|Nya, Айя|Aya, Фату|Fatou, Абена|Abena, Зола|Zola, Нгози|Ngozi, Ифеома|Ifeoma, Адвоа|Adwoa, Кадиату|Kadiatou, Ньямбура|Nyambura, Мариама|Mariama`),sea:new I(``,`Минь|Minh, Бао|Bao, Сомчай|Somchai, Нгок|Ngoc, Тхань|Thanh, Агус|Agus, Сурия|Surya, Вирой|Viroj, Хиеу|Hieu, Ракай|Rakai`,`Лан|Lan, Мали|Mali, Хоа|Hoa, Ньян|Nhan, Суда|Suda, Деви|Dewi, Кхань|Khanh, Ратна|Ratna, Ньюнг|Nyung, Сари|Sari`),am:new I(``,`Ицкоатль|Itzcoatl, Куаутли|Cuauhtli, Тупак|Tupac, Йольотль|Yollotl, Титу|Titu, Ачик|Achik`,`Шочитль|Xochitl, Ситлали|Citlali, Кусикойльюр|Cusicoyllur, Имасумак|Imasumac, Метцли|Metztli, Окльо|Ocllo`),la:new I(`Гарсия|García, Лопес|López, Силва|Silva, Перейра|Pereira, Мартинес|Martínez, Рамирес|Ramírez`,`Хосе|José, Хуан|Juan, Франсиско|Francisco, Жоао|João, Мигель|Miguel, Педру|Pedro, Луис|Luis, Антонио|Antonio, Мануэль|Manuel, Рафаэль|Rafael`,`Мария|María, Хосефа|Josefa, Ана|Ana, Луиса|Luisa, Тереза|Teresa, Росарио|Rosario, Каталина|Catalina, Инес|Inés, Гуадалупе|Guadalupe, Кармен|Carmen`),us:new I(`Джонсон|Johnson, Миллер|Miller, Браун|Brown, Уильямс|Williams, Дэвис|Davis, Кларк|Clark`,`Джон|John, Уильям|William, Джеймс|James, Роберт|Robert, Чарльз|Charles, Джордж|George`,`Мэри|Mary, Элизабет|Elizabeth, Сара|Sarah, Маргарет|Margaret, Энни|Annie, Хелен|Helen`)};function ot(e){return at[e]??at.stone}function st(e,t){return ot(e).sur.length>0&&(t>=3||e===`cn`&&t>=1)}function ct(e,t,n,r,i,a){let o=ot(e);if(e===`stone`||e===`au`)return r;if(i!=null){let e=n===`F`&&o.feminine?new O(i.ru+`а`,i.en+`a`):i;return o.surnameFirst?new O(`${e.ru} ${r.ru}`,`${e.en} ${r.en}`):new O(`${r.ru} ${e.ru}`,`${r.en} ${e.en}`)}let s=a.nextIntUntil(o.male.length),c=o.male[s].equals(r)?o.male[(s+1)%o.male.length]:o.male[s];return new O(`${r.ru}, ${n===`M`?`сын`:`дочь`} ${lt(c.ru)}`,`${r.en}, ${n===`M`?`son`:`daughter`} of ${c.en}`)}function lt(e){let t=e[e.length-1],n=e.length>=2?e[e.length-2]:null;return t===`й`||t===`ь`?e.slice(0,-1)+`я`:t===`а`?e.slice(0,-1)+(n!=null&&`гкхжшщч`.includes(n)?`и`:`ы`):t===`я`?e.slice(0,-1)+`и`:`оиуеюэы`.includes(t)?e:e+`а`}var ut=class{x;y;z;w;v;addend;constructor(e){let t=BigInt.asIntN(64,e),n=Number(BigInt.asIntN(32,t)),r=Number(BigInt.asIntN(32,t>>32n));this.x=n,this.y=r,this.z=0,this.w=0,this.v=~n,this.addend=n<<10^r>>>4;for(let e=0;e<64;e++)this.nextInt()}nextInt(){let e=this.x;e^=e>>>2,this.x=this.y,this.y=this.z,this.z=this.w;let t=this.v;return this.w=t,e=e^e<<1^t^t<<4,this.v=e|0,this.addend=this.addend+362437|0,e+this.addend|0}nextBits(e){return this.nextInt()>>>32-e&-e>>31}nextIntUntil(e){let t=e|0;if(t<=0)throw Error(`bound must be positive: ${e}`);if((t&-t)===t)return this.nextBits(31-Math.clz32(t));let n,r;do n=this.nextInt()>>>1,r=n%t;while((n-r+(t-1)|0)<0);return r}nextDouble(){let e=this.nextBits(26),t=this.nextBits(27);return(e*134217728+t)/9007199254740992}nextFloat(){return this.nextBits(24)/16777216}nextBoolean(){return this.nextBits(1)!==0}nextLong(){let e=BigInt(this.nextInt()),t=BigInt(this.nextInt());return BigInt.asIntN(64,(e<<32n)+t)}pick(e){if(e.length===0)throw Error(`Collection is empty.`);return e[this.nextIntUntil(e.length)]}pickOrNull(e){return e.length===0?null:e[this.nextIntUntil(e.length)]}};function dt(){let e=new Uint32Array(2);return crypto.getRandomValues(e),BigInt.asIntN(64,BigInt(e[0])<<32n|BigInt(e[1]))}var ft=class{key;group;shape;name;tags;constructor(e,t,n,r,i=new Set){this.key=e,this.group=t,this.shape=n,this.name=r,this.tags=i}fits(e){if(this.tags.size===0)return!0;for(let t of this.tags)if(e.tags.has(t))return!0;return!1}};function L(e,t,n,r){return new ft(`${e.toLowerCase()}.${t.toLowerCase()}`,e,t,new O(n,r))}function R(e,t,n,r,i,a){return new ft(`${e.toLowerCase()}.${n}`,e,t,new O(i,a),new Set(r.split(` `).filter(e=>e.trim()!==``)))}var pt=[L(`STONE`,`NEEDLE`,`костяная игла`,`a bone needle`),L(`STONE`,`FLINT`,`кремнёвый скребок`,`a flint scraper`),L(`STONE`,`BEADS`,`бусы из ракушек`,`a string of shell beads`),L(`STONE`,`POUCH`,`мешочек с охрой`,`a pouch of ochre`),L(`STONE`,`FLUTE`,`флейта из птичьей кости`,`a bird-bone flute`),L(`ANC`,`TABLET`,`глиняная табличка с долгом`,`a clay tablet recording a debt`),L(`ANC`,`MIRROR`,`бронзовое зеркальце`,`a bronze hand mirror`),L(`ANC`,`AMULET`,`амулет из синего камня`,`a blue stone amulet`),L(`ANC`,`COIN`,`медная монета`,`a copper coin`),L(`ANC`,`CUP`,`глиняная чашка`,`a clay cup`),L(`MED`,`SPOON`,`деревянная ложка`,`a wooden spoon`),L(`MED`,`CHARM`,`оловянный оберег`,`a pewter charm`),L(`MED`,`COIN`,`серебряная монетка`,`a little silver coin`),L(`MED`,`COMB`,`костяной гребень`,`a bone comb`),L(`MED`,`WHISTLE`,`ивовая свистулька`,`a willow whistle`),L(`EARLY`,`CHARM`,`медный амулет на шнурке`,`a copper charm on a cord`),L(`EARLY`,`PIPE`,`глиняная трубка`,`a clay pipe`),L(`EARLY`,`LETTER`,`письмо, которое некому было прочитать`,`a letter nobody could read`),L(`EARLY`,`SPOON`,`расписная ложка`,`a painted spoon`),L(`EARLY`,`GLASSES`,`очки в проволочной оправе`,`wire-rimmed spectacles`),L(`IND`,`BUTTON`,`пуговица от шинели`,`a greatcoat button`),L(`IND`,`PHOTO`,`фотокарточка в картонной рамке`,`a photograph in a card frame`),L(`IND`,`TICKET`,`железнодорожный билет`,`a railway ticket`),L(`IND`,`THIMBLE`,`напёрсток`,`a thimble`),L(`IND`,`WATCH`,`карманные часы`,`a pocket watch`),L(`MOD`,`PHONE`,`кнопочный телефон`,`a push-button phone`),L(`MOD`,`LETTER`,`школьный аттестат`,`a school certificate`),L(`MOD`,`KEY`,`ключ от квартиры`,`a flat key`),L(`MOD`,`BEADS`,`пластиковые бусы`,`plastic beads`),L(`MOD`,`CASSETTE`,`кассета с песнями`,`a mixtape`),R(`STONE`,`AMULET`,`bear`,`eu`,`зуб пещерного медведя на шнурке`,`a cave bear's tooth on a cord`),R(`STONE`,`CHARM`,`ivory`,`eu`,`фигурка из бивня мамонта`,`a mammoth-ivory figurine`),R(`STONE`,`BEADS`,`ostrich`,`af`,`бусы из скорлупы страусиных яиц`,`ostrich-eggshell beads`),R(`ANC`,`AMULET`,`jade`,`cn`,`нефритовая подвеска`,`a jade pendant`),R(`ANC`,`COIN`,`spade`,`cn`,`бронзовая монета в виде лопатки`,`a bronze spade coin`),R(`ANC`,`AMULET`,`scarab`,`eg`,`фаянсовый скарабей`,`a faience scarab`),R(`ANC`,`CUP`,`lamp`,`med me`,`глиняный светильник`,`a clay oil lamp`),R(`ANC`,`BEADS`,`quipu`,`andes`,`шнурок с узелками кипу`,`a knotted quipu cord`),R(`ANC`,`BEADS`,`jadeite`,`meso`,`бусина из жадеита`,`a jadeite bead`),R(`ANC`,`LETTER`,`palm`,`in`,`листья пальмы с письменами`,`a palm-leaf manuscript`),R(`ANC`,`BEADS`,`cowrie`,`af in`,`нитка раковин каури`,`a string of cowrie shells`),R(`MED`,`BEADS`,`rosary`,`me in jp sea`,`чётки`,`prayer beads`),R(`MED`,`LETTER`,`birch`,`ru`,`берестяная грамота`,`a birch-bark letter`),R(`MED`,`CUP`,`tea`,`cn jp`,`чайная чашка`,`a tea bowl`),R(`MED`,`CHARM`,`cross`,`eu ru`,`медный нательный крестик`,`a small copper cross`),R(`MED`,`AMULET`,`scallop`,`eu`,`раковина паломника`,`a pilgrim's scallop shell`),R(`MED`,`TABLET`,`salt`,`af`,`плитка соли`,`a slab of salt`),R(`MED`,`TICKET`,`jiaozi`,`cn`,`бумажная ассигнация`,`a paper banknote`),R(`MED`,`POUCH`,`cacao`,`meso`,`мешочек какао-бобов`,`a pouch of cacao beans`),R(`MED`,`CUP`,`ewer`,`me eg`,`медный кувшинчик`,`a little copper ewer`),R(`EARLY`,`CUP`,`porcelain`,`cn`,`фарфоровая чашка`,`a porcelain cup`),R(`EARLY`,`POUCH`,`tobacco`,`eu ru us latam`,`кисет`,`a tobacco pouch`),R(`EARLY`,`NEEDLE`,`quill`,`eu ru en fr de it`,`гусиное перо`,`a goose quill`),R(`EARLY`,`LETTER`,`freedom`,`ru latam us`,`вольная грамота`,`a letter of freedom`),R(`EARLY`,`COIN`,`real`,`latam`,`серебряный реал`,`a silver real`),R(`EARLY`,`BEADS`,`netsuke`,`jp`,`нэцкэ на шнурке`,`a netsuke on a cord`),R(`IND`,`LETTER`,`postcard`,`eu ru it de en fr`,`открытка из Америки`,`a postcard from America`),R(`IND`,`BUTTON`,`medal`,`eu ru de fr en it us`,`медаль за войну`,`a war medal`),R(`IND`,`TICKET`,`union`,`eu en de us`,`профсоюзный билет`,`a union card`),R(`IND`,`KEY`,`chest`,``,`ключ от сундука`,`a key to the chest`),R(`MOD`,`PHONE`,`radio`,``,`транзисторный приёмник`,`a transistor radio`),R(`MOD`,`BUTTON`,`badge`,`ru`,`комсомольский значок`,`a Komsomol badge`),R(`MOD`,`TICKET`,`pass`,``,`пропуск на завод`,`a factory pass`),R(`MOD`,`PHOTO`,`wedding`,``,`свадебная фотография`,`a wedding photograph`)];function mt(e,t,n){return n.pick(pt.filter(n=>n.group===e&&n.fits(t)))}function ht(e){return pt.find(t=>t.key===e)??pt[0]}function gt(e){return pt.filter(t=>t.group===e)}function _t(e,t){return String(e).split(``).reverse().join(``).match(/.{1,3}/g).join(t).split(``).reverse().join(``)}function vt(e){if(e<-9e3){let t=Math.abs(Math.trunc(e/1e3))*1e3;return new O(`ок. ${_t(t,` `)} до н.э.`,`c. ${_t(t,`,`)} BC`)}return e<0?new O(`${-e} до н.э.`,`${-e} BC`):new O(`${e}`,`${e}`)}function yt(e){return e.endsWith(`.`)?e:`${e}.`}function bt(e){if(e<-9e3){let t=Math.abs(Math.trunc(e/1e3))*1e3;return new O(`около ${_t(t,` `)} года до н.э.`,`around ${_t(t,`,`)} BC`)}return e<0?new O(`в ${-e} году до н.э.`,`in ${-e} BC`):new O(`в ${e} году`,`in ${e}`)}function xt(e,t,n,r){let i=Math.abs(e)%100,a=i%10;return i>=11&&i<=19?r:a===1?t:a>=2&&a<=4?n:r}function St(e){return`${e} ${xt(e,`год`,`года`,`лет`)}`}function Ct(e){return e===1?`one year`:`${e} years`}var wt=[``,`одного ребёнка`,`двоих детей`,`троих детей`,`четверых детей`,`пятерых детей`,`шестерых детей`,`семерых детей`],Tt=[``,`один ребёнок`,`двое детей`,`трое детей`,`четверо детей`,`пятеро детей`,`шестеро детей`,`семеро детей`],Et=[``,`one child`,`two children`,`three children`,`four children`,`five children`,`six children`,`seven children`];function Dt(e){return e>=1&&e<=7?wt[e]:`${e} детей`}function Ot(e){return e>=1&&e<=7?Tt[e]:`${e} детей`}function kt(e){return e>=1&&e<=7?Et[e]:`${e} children`}function At(e,t){return t>0&&e+94<2026}var jt=[`PLAIN`,`HIST`,`MEET`,`DEATH`],Mt=class e{read;seen;constructor(e,t){this.read=e,this.seen=t}static NONE=new e(new Set,new Set)},Nt=class{text;why;constructor(e,t){this.text=e,this.why=t}get open(){return this.why==null}},Pt=class{seed;era;region;cult;estate;sex;year;first;sur;name;share;heir;constructor(e,t,n,r,i,a,o,s,c,l,u,d){this.seed=e,this.era=t,this.region=n,this.cult=r,this.estate=i,this.sex=a,this.year=o,this.first=s,this.sur=c,this.name=l,this.share=u,this.heir=d}get survive5(){return 1-It(this.era,this.region)}get literacy(){return Math.min(this.era.lit*(this.estate.rank>=3?4:1),1)}},Ft=class{birth;entries;pending;end;shown;constructor(e,t,n,r,i){this.birth=e,this.entries=t,this.pending=n,this.end=r,this.shown=i}get canTurn(){return this.pending==null&&this.end==null}};function It(e,t){return e.i===6&&t.tags.has(`af`)?.12:e.q0}var Lt=(e,t,n)=>Math.min(Math.max(e,t),n),Rt=(e,t)=>{let n=0;for(let r of e)n+=t(r);return n},zt=e=>Math.round(e),Bt=new Set([`scribe`,`clergy`,`clerk`,`office`]),Vt=2026,Ht=[[0,`BIRTH`],[2,`CHILD`],[5,`CHILD`],[8,`CHILD`],[10,`CHILD`],[12,`WORK`],[14,`YOUTH`],[16,`YOUTH`],[17,`MARRY17`],[19,`FORK`],[21,`JOY`],[24,`MARRY24`],[27,`FORK`],[30,`ADULT`],[33,`CRISIS`],[36,`JOY`],[39,`FORK`],[42,`ADULT`],[45,`LEGACY`],[48,`ADULT`],[51,`FORK`],[54,`JOY`],[58,`OLD`],[61,`OLD`],[64,`FORK`],[67,`JOY`],[70,`WISH`],[73,`OLD`],[76,`OLD`],[80,`OLD`],[84,`OLD`],[88,`OLD`],[92,`OLD`],[96,`OLD`],[100,`OLD`]],Ut=[new O(`Какую вещь из твоего дома стоило бы передать правнукам?`,`Which thing in your home would be worth handing down to your great-grandchildren?`),new O(`Чьи руки вырастили хлеб, который ты ешь?`,`Whose hands grew the bread you eat?`),new O(`Какая дверь сегодня открыта для тебя, но была бы закрыта для этого человека?`,`Which door is open to you today that would have been shut to this person?`),new O(`Чему этот человек научил бы тебя за один вечер?`,`What could this person teach you in one evening?`),new O(`Какую историю о своей семье ты знаешь — и кому её расскажешь?`,`Which story of your family do you know, and who will you tell it to?`),new O(`Что сегодня стоило бы сделать руками?`,`What would be worth doing with your hands today?`),new O(`Кого из ушедших тебе не хватает?`,`Who among those gone do you miss?`),new O(`О чём этот человек не мог даже мечтать, а у тебя это есть?`,`What could this person not even dream of that you have?`),new O(`Когда вокруг в последний раз было по-настоящему темно и тихо?`,`When was it last truly dark and quiet around you?`),new O(`Кому сегодня можно помочь так, как помогли бы в деревне?`,`Who could you help today the way a village would?`),new O(`Какой праздник этот человек ждал бы весь год — а какой ждёшь ты?`,`Which feast would this person have waited for all year, and which do you wait for?`),new O(`Что из того, что у тебя есть, этот человек счёл бы богатством?`,`What that you own would this person have called wealth?`)],Wt=[new O(`о том, как прадед перехитрил волка`,`how great-grandfather outwitted a wolf`),new O(`о годе, когда река не пришла`,`about the year the river did not come`),new O(`как бабка видела хвостатую звезду`,`how grandmother saw a star with a tail`),new O(`о далёком городе с золотыми крышами`,`about a far city with golden roofs`),new O(`как ты в детстве {потерялся|потерялась} и {нашёлся|нашлась}`,`how you were lost as a child and found again`),new O(`о кладе под старой грушей, которого никто не нашёл`,`about the treasure under the old pear tree that nobody found`),new O(`о прабабке, которая пешком дошла до моря`,`about the great-grandmother who walked all the way to the sea`),new O(`о зиме, когда замёрзли птицы`,`about the winter the birds froze`),new O(`как дед один раз видел царя`,`how grandfather once saw the king`),new O(`о соседе, который ушёл за удачей и вернулся через двадцать лет`,`about the neighbour who went to seek his fortune and came back twenty years later`),new O(`о свадьбе, на которой сгорел сарай`,`about the wedding at which the barn burned down`),new O(`о говорящей сороке`,`about the talking magpie`),new O(`о годе, когда лёд на реке простоял до лета`,`about the year the ice stayed on the river till summer`),new O(`о лекарке, которая знала все травы`,`about the healer who knew every herb`),new O(`о том, откуда в роду эта вещь`,`about where the family keepsake came from`)],z=(e,t)=>new O(e,t),Gt=class{content;witness;past;rnd;birth;era;region;sex;year;rank=0;death;lit=!1;parentLit;kinLit;firstLit=!1;wealth;married=!1;single=!1;love=!1;byParents=!1;byMaster=!1;monk=!1;sawSea;kind=!1;tree=!1;taught=!1;wishSea=!1;kids=0;kidsAlive=0;story=null;meet=null;alive=!1;town=!1;age=0;firstChildAt=-1;get now(){return this.year+this.age}flags=new Set;eps=[];asks=[];usedForks=new Set;entries=[];used=new Set;usedHist=new Set;has(e){switch(e){case`m`:return this.sex===`M`;case`f`:return this.sex===`F`;case`lit`:return this.lit;case`illit`:case`!lit`:return!this.lit;case`married`:return this.married;case`single`:case`!married`:return!this.married;case`kids`:return this.kidsAlive>0;case`small`:return this.age<4;case`school`:return this.kidsAlive>0&&this.firstChildAt>=0&&this.age-this.firstChildAt>=8;case`grown`:return this.kidsAlive>0&&this.firstChildAt>=0&&this.age-this.firstChildAt>=16;case`grand`:return this.kidsAlive>0&&this.firstChildAt>=0&&this.age-this.firstChildAt>=36;case`!kids`:return this.kidsAlive===0;case`monk`:return this.monk;case`town`:return this.town;case`sea`:return this.sawSea;case`poor`:return this.wealth<=0;case`rich`:return this.wealth>=2;case`r0`:return this.rank===0;case`r1`:return this.rank===1;case`r2`:return this.rank===2;case`r3`:return this.rank===3;default:return this.flags.has(e)}}constructor(e,t,n,r,i,a){this.content=e,this.witness=r,this.past=i;let o=this.rnd=new ut(t),s,c;if(n!=null)s=n.year+70+o.nextIntUntil(25),c=Fe(s);else{let e=Ne(a.area),t=t=>e==null?1:Rt(t.regions.filter(t=>e.regions.has(t.key)),e=>e.w)/Rt(t.regions,e=>e.w),n=F.filter(e=>(a.eraI==null||e.i===a.eraI)&&t(e)>0);n.length===0&&(n=F),c=this.weighted(n,e=>e.births*t(e));let r=o.nextDouble()**(c.i===0?.6:.75);s=Lt(zt(c.to-(c.to-c.from)*(1-r)),c.from,c.to-1)}this.era=c,this.year=s;let l=null;if(n!=null){let e=je.find(e=>e.key===n.region);if(l=c.regions.find(e=>e.key===n.region)??null,l==null&&e!=null){let t=null;for(let n of c.regions)[...n.tags].some(t=>e.tags.has(t))&&(t==null||n.w>t.w)&&(t=n);l=t}}if(l==null){let e=Ne(a.area),t=e?c.regions.filter(t=>e.regions.has(t.key)):null;t!=null&&t.length===0&&(t=null),l=this.weighted(t??c.regions,e=>e.w)}this.region=l;let u=Ie(l,s),d=l,f=c.estates.filter(e=>e.only==null||[...e.only].some(e=>d.tags.has(e))),p=null;if(n!=null){let e;e=n.wealth>=4||n.rank===0&&n.wealth>=1?1:n.wealth<=0&&o.nextDouble()<.3?-1:0;let t=Lt(n.rank+e,0,3),r=f.filter(e=>e.rank===t);r.length>0&&(p=this.weighted(r,e=>e.w))}p??=this.weighted(f,e=>e.w),this.rank=p.rank;let m=o.nextBoolean();this.sex=(n==null?a.sex:null)??(m?`M`:`F`);let h=this.sex,g=ot(u),_=o.pick(h===`M`?g.male:g.female),v=null;st(u,c.i)&&(v=(n?.sur!=null&&n.cult===u?n.sur:null)??o.pick(g.sur));let y=ct(u,c.i,h,_,v,o);this.death=o.nextDouble()<It(c,l)?o.nextIntUntil(5):zt(this.tri(c.die)),s+this.death>2026&&(this.death=Vt-s,this.alive=!0);let b=c.births/117*l.w/Rt(c.regions,e=>e.w)*p.w/Rt(f,e=>e.w)*.5;this.birth=new Pt(t,c,l,u,p,h,s,_,v,y,b,n),this.parentLit=o.nextDouble()<(this.rank>=3?Math.min(c.lit*6,.95):c.lit*.6)||Bt.has(p.key),this.kinLit=n?.readers===!0,this.wealth=this.rank,this.sawSea=l.sea&&o.nextDouble()<.5,this.lit=c.i===6?o.nextDouble()<(this.rank===0?.6:.92):c.i===5&&o.nextDouble()<c.lit*(this.rank>=2?1.6:.8)}weighted(e,t){let n=this.rnd.nextDouble()*Rt(e,t);for(let r of e)if(n-=t(r),n<=0)return r;return e[e.length-1]}tri([e,t,n]){let r=this.rnd.nextDouble();return r<(t-e)/(n-e)?e+Math.sqrt(r*(n-e)*(t-e)):n-Math.sqrt((1-r)*(n-e)*(n-t))}tx(e,t){return new O(e,t).g(this.sex)}add(e,t,n=`PLAIN`){this.entries.push({age:e,text:t.g(this.sex),mark:n})}add2(e,t,n,r=`PLAIN`){this.add(e,new O(t,n),r)}line(e,t,n=`PLAIN`){let r=this.flags.has(`abroad`),i=this.content.linesFor(this.era.group,t,this.region).filter(n=>n.need.holds(this)&&(!r||n.tags.size===0)&&(!this.monk||n.need.names(`monk`))&&(t!==`CHILD`||n.need.names(`small`)===e<4)),a=i.filter(e=>!this.used.has(e)),o=a.filter(e=>!this.past.read.has(e.text.g(this.sex).ru)),s=this.rnd.pickOrNull(o.length>0?o:a.length>0?a:i);if(s!=null){this.used.add(s),this.add(e,s.text,n),s.tags.has(`sea`)&&(this.sawSea=!0);for(let e of s.need.sets)e===`town`?this.town=!0:e===`sea`?this.sawSea=!0:this.flags.add(e)}}ask(e,t,...n){return{choice:{age:e,q:t.g(this.sex),doors:n.map(e=>new Nt(e.door.text.g(this.sex),e.door.why?.g(this.sex)??null))},acts:n.map(e=>e.act)}}door(e,t,n,r){return{door:new Nt(new O(e,t),n),act:r}}read(e,t){let n=0,r=0,i=null,a=null;for(let[o,s]of Ht){if(n>=t)break;if(n++,s!==`BIRTH`&&o>=this.death){a=this.die();break}let c=this.stop(o,s);if(c==null)continue;let l=c.choice.doors.map((e,t)=>t).filter(e=>c.choice.doors[e].open),u;if(this.witness)u=this.rnd.pick(l);else{let t=e[r++];u=t!==void 0&&l.includes(t)?t:r>e.length?null:l[0]}if(u==null){i=c.choice;break}c.acts[u]()}return new Ft(this.birth,this.entries.slice(),i,a,n)}stop(e,t){this.age=e;let n=null;if(e>=4){let t=this.flags.has(`abroad`),r=this.content.hist.filter(n=>!this.usedHist.has(n.id)&&n.fits(this.region,this.era.i,this.year+e)&&(!t||n.tags.has(`*`))),i=r.filter(e=>!this.past.seen.has(e.id)),a=this.rnd.pickOrNull(i.length>0?i:r);a!=null&&this.rnd.nextDouble()<(a.meet?.85:.45)&&(n=a,this.usedHist.add(a.id),this.add(e,a.text,a.meet?`MEET`:`HIST`),a.meet&&(this.meet=a.id))}switch(t){case`BIRTH`:{let e=bt(this.year);this.add(0,new O(`{Родился|Родилась} ${yt(e.ru)} ${this.region.name.ru}, в семье ${this.birth.estate.of.ru}.`,`Born ${yt(e.en)} ${this.region.name.en}, to ${this.birth.estate.of.en}.`));let t=this.birth.heir;t!=null&&this.add(0,new O(`${t.sex===`M`?`Прадед`:`Прабабка`} — ${t.name.ru}. Семейная вещь: ${t.thing.ru}.`,`Your great-grand${t.sex===`M`?`father`:`mother`} was ${t.name.en}. The family keepsake: ${t.thing.en}.`));break}case`CHILD`:(n==null||this.rnd.nextBoolean())&&this.line(e,`CHILD`);break;case`WORK`:return this.work();case`YOUTH`:this.line(e,`YOUTH`);break;case`MARRY17`:if(this.sex===`F`&&this.era.i>=1&&this.era.i<=4&&!this.monk)return this.marry(e);n??this.line(e,`YOUTH`);break;case`MARRY24`:if(!this.married&&!this.monk&&!this.single)return this.marry(e);n??this.line(e,`ADULT`);break;case`JOY`:this.line(e,`JOY`);break;case`CRISIS`:return n??this.line(e,`HARD`,`HIST`),this.crisis();case`ADULT`:(n==null||this.rnd.nextBoolean())&&this.line(e,`ADULT`);break;case`LEGACY`:return this.legacy();case`OLD`:n??this.line(e,`OLD`);break;case`WISH`:return this.lastWish();case`FORK`:{let t=this.fork(e);if(t!=null)return t;n??this.line(e,e>=58?`OLD`:`ADULT`);break}}return null}work(){let e=this.era.i,t=this.sex===`F`,n=this.rank,r=this.lit,i=t&&e>=1&&e<=4&&!r&&n>0&&(n<3||e<3),a=null;e===0?a=z(`Письма ещё не придумали.`,`Writing has not been invented yet.`):e<6&&r?a=z(`Ты уже умеешь читать.`,`You can read already.`):n===0&&e<6?a=z(`Несвободным учиться запрещено.`,`The unfree are forbidden to learn.`):i?a=z(`Девочек грамоте не учат.`,`Girls are not taught their letters.`):e<4&&n<3?a=z(`Грамоте учат только детей писцов и знати.`,`Only the children of scribes and nobles learn their letters.`):e===6&&n===0&&(a=z(`Семье нужен твой заработок уже сейчас.`,`Your family needs your wages now.`));let o=null;e===0?o=z(`Городов ещё нет.`,`There are no towns yet.`):n===0&&e<6?o=z(`Ты не {свободен|свободна} уйти.`,`You are not free to leave.`):t&&e<5&&(o=z(`В ученики девочек не берут.`,`Girls are not taken as apprentices.`));let s=[this.door(`Работать с родителями`,`Work alongside your parents`,null,()=>{this.add(12,this.birth.estate.work)}),this.door(e===6?`Учиться дальше`:`Учиться грамоте`,e===6?`Stay on at school`:`Learn to read and write`,a,()=>{e===6?(this.wealth++,this.add2(12,`Учишься дальше. Первым делом — в библиотеку.`,`You stay on at school. First thing: the library.`)):(this.lit=!0,this.firstLit=!this.parentLit&&!this.kinLit,this.firstLit?this.add2(12,`{Выучился|Выучилась} читать — {первым|первой} в роду.`,`You learn to read, the first in your family.`):this.parentLit?this.add2(12,`{Выучился|Выучилась} читать и писать, как отец.`,`You learn to read and write, like your father.`):this.add2(12,`{Выучился|Выучилась} читать и писать. Грамотные в роду были и до тебя.`,`You learn to read and write. There were readers in the family before you.`))})];if(i&&s.push(this.door(`Учиться тайком`,`Learn in secret`,null,()=>{this.rnd.nextBoolean()?(this.lit=!0,this.firstLit=!this.parentLit&&!this.kinLit,this.flags.add(`secretlit`),this.parentLit?this.add2(12,`Подглядывала, как пишет отец, и тайком выучила буквы. Он знает и молчит.`,`You watched your father write and learned the letters in secret. He knows and says nothing.`):this.add2(12,`Брат по вечерам показывал тебе буквы, пока никто не видит. Ты выучила все.`,`In the evenings your brother showed you the letters when no one was looking. You learned them all.`)):this.add2(12,`Тебя застали над письменами. Выпороли, и к письму больше не подпускают.`,`You are caught bent over the writing. You are beaten and kept away from it from then on.`)})),s.push(this.door(e===6?`Уехать к родне в большой город`:`Уйти в город, в ученики к мастеру`,e===6?`Go to relatives in the big city`:`Go to town as an apprentice`,o,()=>{this.town=!0,this.rnd.nextBoolean()&&this.wealth++,this.rnd.nextDouble()<.35&&(this.sawSea=!0),e===6?this.add2(12,`{Уехал|Уехала} в город. Спишь у дальней родни на полу.`,`You move to the city. You sleep on a distant relative's floor.`):this.add2(12,`{Ушёл|Ушла} в город, в ученики. Мастер бьёт, но кормит.`,`You go to town as an apprentice. The master beats you, but feeds you.`)})),e>=2&&e<=4){let e=[`eu`,`ru`,`cn`,`jp`,`sea`,`in`],t=null;n===0?t=z(`Несвободных не постригают.`,`The unfree may not take vows.`):[...this.region.tags].some(t=>e.includes(t))||(t=z(`Здесь нет монастырей.`,`There are no monasteries here.`)),s.push(this.door(`Уйти в монастырь`,`Enter a monastery`,t,()=>{this.monk=!0,this.rnd.nextDouble()<.7&&(this.lit=!0,this.firstLit=!this.parentLit&&!this.kinLit),this.add2(12,`{Ушёл|Ушла} в монастырь. Семьи не будет — будет тишина и молитва.`,`You enter a monastery. There will be no family: there will be silence and prayer.`)}))}return this.ask(12,new O(`Детство кончилось. Что дальше?`,`Childhood is over. What next?`),...s)}marry(e){let t=this.era.i,n=this.sex===`F`,r=this.rank===0&&t>=1&&t<=5,i=null;r?i=z(`Кого тебе взять, решает хозяин.`,`Your master decides whom you marry.`):t>=1&&t<=4&&(n||this.rank>=3||t<3)&&(i=z(`Выбирать тебе не дают: старшие уже сговорились.`,`You are given no choice: the elders have already agreed.`));let a=null;return r?a=z(`Хозяин не спрашивает, хочешь ли ты семью.`,`Your master does not ask whether you want a family.`):t===0?a=z(`В одиночку не выжить.`,`Nobody survives alone.`):t<5&&n?a=z(`Одинокой женщине не прожить — разве что в монастыре.`,`A woman alone cannot get by, except in a convent.`):t<5&&(a=z(`Без семьи тебе не дадут земли.`,`Without a family you will get no land.`)),this.ask(e,e<20?new O(`Тебя сватают.`,`A match is being made for you.`):new O(`Пора заводить семью.`,`Time to start a family.`),this.door(r?`Как решил хозяин`:`Как решили родители`,r?`As your master decided`:`As your parents decided`,null,()=>{r?this.byMaster=!0:this.byParents=!0,r?this.wed(e,`Хозяин свёл тебя с {невольницей|невольником} со своего двора. {Жену|Мужа} ты до этого видел{|а} только издали.`,`Your master pairs you with {a woman|a man} from his own yard. Until then you had seen {her|him} only from afar.`):this.wed(e,`Свадьбу сыграли, как решили старшие. {Жену|Мужа} ты впервые {увидел|увидела} за неделю до неё.`,`The wedding is held as the elders decided. You first saw your {wife|husband} a week before.`)}),this.door(t===0?`Уйти к тому, кто нравится, в чужой род`:`По любви`,t===0?`Go to the one you like, in another band`:`For love`,i,()=>{this.love=!0,t===0?this.wed(e,`{Ушёл в чужой род за той, что нравилась.|Ушла в чужой род за тем, кто нравился.}`,`You go to another band for the one you like.`):this.wed(e,`{Женился|Вышла замуж} по любви. Родня ворчала, потом привыкла.`,`You marry for love. The family grumbles, then gets used to it.`)}),this.door(`Не заводить семью`,`Stay unmarried`,a,()=>{this.single=!0,this.add2(e,`{Решил|Решила} жить {один|одна}. Свободы больше, рук меньше.`,`You decide to live alone. More freedom, fewer hands.`)}))}wed(e,t,n){this.add2(e,t,n),this.bear();let r=this.kids,i=e+2;r===0?this.add2(i,`Детей не было.`,`There are no children.`):r===this.kidsAlive?this.add2(i,`Родилось детей: ${r}.`,`Children born: ${r}.`):this.add2(i,`Родилось детей: ${r}. Выросли ${this.kidsAlive}.`,`Children born: ${r}. Grew up: ${this.kidsAlive}.`)}bear(){this.married=!0,this.single=!1;let e=Math.max(zt(this.era.fert+(this.rnd.nextDouble()-.5)*4),0);this.kids=e,this.kidsAlive=this.era.i>=6?e:Math.min(zt(e*(1-this.era.q0)*(.8+this.rnd.nextDouble()*.4)),e),e>0&&this.firstChildAt<0&&(this.firstChildAt=this.age+1)}fork(e){if(this.rnd.nextDouble()<.2)return null;let t=this.flags.has(`abroad`),n=this.content.dilemmas.filter(n=>!this.usedForks.has(n.id)&&n.groups.has(this.era.group)&&e>=n.ages[0]&&e<=n.ages[1]&&n.fits(this.region)&&n.need.holds(this)&&(!t||n.tags.has(`*`)||n.tags.size===0)&&(!this.monk||n.need.names(`monk`))),r=n.filter(e=>!e.doors.some(e=>e.outs.some(e=>this.past.read.has(e.text.g(this.sex).ru)))),i=r.length>0?r:n;if(i.length===0)return null;let a=this.weighted(i,e=>e.weight);this.usedForks.add(a.id);let o=a.doors.map(t=>({door:new Nt(t.text,t.shut.find(e=>e.conds.every(e=>this.has(e)))?.why??null),act:()=>{let n=this.weighted(t.outs,e=>e.weight);this.add(e,n.text),this.effects(e,n.fx),t.ep!=null&&this.eps.push(t.ep.g(this.sex)),t.ask!=null&&this.asks.push(t.ask.g(this.sex))}}));return o.some(e=>e.door.open)?this.ask(e,a.q,...o):null}effects(e,t){for(let n of t)n.startsWith(`wealth`)?this.wealth=Math.max(this.wealth+parseInt(n.slice(6),10),0):n.startsWith(`risk`)?this.rnd.nextDouble()*100<parseInt(n.slice(4),10)&&(this.death=Math.min(this.death,e+1+this.rnd.nextIntUntil(3))):n===`lit`?this.lit||(this.lit=!0,this.firstLit=!this.parentLit&&!this.kinLit):n===`sea`?this.sawSea=!0:n===`kind`?this.kind=!0:n===`love`?this.love=!0:n===`town`?this.town=!0:n===`free`?this.rank===0&&(this.rank=1):n===`kids+1`?(this.kids++,this.kidsAlive++,this.firstChildAt<0&&(this.firstChildAt=e)):n===`kids-1`?this.kidsAlive>0&&this.kidsAlive--:n===`married`?(this.married||this.bear(),this.flags.delete(`widowed`)):this.flags.add(n)}crisis(){let e=this.rank===0&&this.era.i<6,t=this.monk,n=this.era.i;return this.ask(33,new O(`Беда. Что делать?`,`Hard times. What now?`),this.door(t?`Переждать в обители`:`Переждать дома`,t?`Sit it out in the monastery`:`Sit it out at home`,null,()=>{this.rnd.nextDouble()<.25?(this.death=Math.min(this.death,33+this.rnd.nextIntUntil(3)),this.add2(33,`Пережидали. Не все пережили.`,`You wait it out. Not everyone lives through it.`)):(this.wealth=Math.max(this.wealth-1,0),this.add2(33,`Пережидали. Выжили, но всё нажитое ушло.`,`You wait it out. You live, but everything you had is gone.`))}),this.door(n===0?`Уйти всем родом за зверем`:t?`Уйти с братией в другую обитель`:e?`Бежать`:`Уйти всей семьёй в другие края`,n===0?`Move the whole band after the game`:t?`Leave with the others for another monastery`:e?`Run away`:`Leave with the family for other lands`,null,()=>{if(this.rnd.nextDouble()<.4&&(this.sawSea=!0),this.monk){let e=this.rnd.nextDouble()<.15;e&&(this.death=Math.min(this.death,35)),this.add(33,e?new O(`Ушли. Дорога забрала многих.`,`You leave. The road takes many.`):new O(`Ушли. Дорога забрала стариков, новая обитель приняла остальных.`,`You leave. The road takes the old ones; another monastery takes in the rest.`))}else e&&this.rnd.nextDouble()<.4?(this.death=Math.min(this.death,34),this.add2(33,`Беглых поймали.`,`The runaways are caught.`)):e?(this.rank=1,this.add2(33,`{Бежал|Бежала}. На новом месте никто не знает, кем ты {был|была}.`,`You run. In the new place nobody knows what you were.`)):this.rnd.nextDouble()<.15?(this.death=Math.min(this.death,35),this.add2(33,`Ушли. Дорога забрала многих.`,`You leave. The road takes many.`)):this.add2(33,`Ушли. Дорога забрала старших, но на новом месте есть земля.`,`You leave. The road takes the old ones, but there is land in the new place.`)}),this.door(t?`Раздать монастырский хлеб голодным`:`Поделиться последним с соседями`,t?`Give the monastery's bread to the hungry`:`Share the last you have with the neighbours`,this.wealth<=0&&n>0?z(`Делиться нечем: у вас самих пусто.`,`There is nothing to share: your own stores are empty.`):null,()=>{this.kind=!0,this.wealth=Math.max(this.wealth-1,0),this.monk?this.add2(33,`Хлеб раздали у ворот. Обитель голодает вместе со всеми, и этого не забудут.`,`The bread is given out at the gate. The monastery goes hungry with everyone, and it will not be forgotten.`):this.add2(33,`{Отдал|Отдала} соседям половину запасов. Этого не забудут.`,`You give the neighbours half of what you have. It will not be forgotten.`)}))}legacy(){if(this.monk)return this.cloisterLegacy();let e=this.kidsAlive===0?z(`Детей у тебя нет.`,`You have no children.`):null;return this.ask(45,new O(`Что оставить детям?`,`What will you leave the children?`),this.door(`Научить своему делу`,`Teach them your trade`,e,()=>{this.add2(45,`Дети знают твоё дело лучше тебя.`,`The children know your trade better than you do.`)}),this.door(`Научить читать`,`Teach them to read`,e??(this.lit?null:z(`Ты и сам{|а} не умеешь читать.`,`You cannot read yourself.`)),()=>{this.taught=!0,this.add2(45,`Учишь детей грамоте по единственной книге в доме.`,`You teach the children their letters from the only book in the house.`)}),this.door(`Копить на чёрный день`,`Save for a rainy day`,this.rank===0&&this.era.i<6?z(`У несвободных своего нет.`,`The unfree own nothing.`):null,()=>{this.wealth++,this.era.i===0?this.add2(45,`Запас кремня и шкур — в сухой пещере.`,`A store of flint and hides, in a dry cave.`):this.era.i===6?this.add2(45,`Откладываешь понемногу каждый месяц.`,`You put a little aside every month.`):this.add2(45,`Под половицей — горшок с монетами.`,`Under the floorboard, a pot of coins.`)}),this.door(`Рассказывать истории`,`Tell them stories`,null,()=>{let e=this.birth.heir?.story??null;if(e!=null&&this.rnd.nextBoolean())this.story=e,this.add(45,new O(`Рассказываешь ту же историю, что рассказывали тебе: ${e.ru}.`,`You tell the same story you were told: ${e.en}.`));else{let e=this.rnd.pick(Wt).g(this.sex);this.story=e,this.add(45,new O(`Вечерами рассказываешь детям ${e.ru}. Они просят ещё.`,`In the evenings you tell the children ${e.en}. They ask for more.`))}}))}cloisterLegacy(){let e=this.lit?null:z(`Ты и сам{|а} не умеешь читать.`,`You cannot read yourself.`);return this.ask(45,new O(`Что оставить после себя?`,`What will you leave behind?`),this.door(`Учить послушников грамоте`,`Teach the novices to read`,e,()=>{this.taught=!0,this.add2(45,`Учишь послушников грамоте. Самый бестолковый потом пишет лучше всех.`,`You teach the novices their letters. The slowest one ends up writing best of all.`)}),this.door(`Переписать книгу для обители`,`Copy a book for the monastery`,e,()=>{this.add2(45,`Год над одной книгой. Она будет стоять в библиотеке, когда тебя забудут.`,`A year over one book. It will stand in the library when you are forgotten.`)}),this.door(`Рассказывать истории`,`Tell them stories`,null,()=>{let e=this.rnd.pick(Wt).g(this.sex);this.story=e,this.add(45,new O(`Вечерами рассказываешь послушникам ${e.ru}. Они просят ещё.`,`In the evenings you tell the novices ${e.en}. They ask for more.`))}))}lastWish(){let e=null;this.sawSea?e=z(`Ты его уже {видел|видела}.`,`You have seen it already.`):this.rank===0&&this.era.i<6?e=z(`Тебя не отпустят.`,`You will not be let go.`):this.wealth<1&&this.era.i<5&&(e=z(`Дорога к морю — месяц пути и все деньги дома.`,`The road to the sea is a month's walk and all the money in the house.`));let t=null;return this.era.i===0?t=z(`Дома нет: род кочует.`,`There is no house: the band moves on.`):this.rank===0&&this.era.i<6&&!this.monk&&(t=z(`Земля не твоя.`,`The land is not yours.`)),this.ask(70,new O(`Последнее желание.`,`One last wish.`),this.door(`Увидеть море`,`See the sea`,e,()=>{this.sawSea=!0,this.wishSea=!0,this.add2(70,`Море. Стоишь у воды до темноты и молчишь.`,`The sea. You stand by the water until dark and say nothing.`)}),this.door(`Помириться с братом`,`Make peace with your brother`,null,()=>{this.add2(70,`Помирились. Сидели рядом до ночи и не вспоминали, из-за чего.`,`You make peace. You sit side by side till night and never mention what it was about.`)}),this.door(this.monk?`Посадить дерево в монастырском саду`:`Посадить дерево у дома`,this.monk?`Plant a tree in the monastery garden`:`Plant a tree by the house`,t,()=>{this.tree=!0,this.add2(70,`{Посадил|Посадила} грушу. Плодов ты не увидишь.`,`You plant a pear tree. You will not see its fruit.`)}))}die(){let e=this.death,t=(e,t)=>this.tx(e,t);this.alive&&e<2026-this.year&&(this.alive=!1);let n;n=e<5?[t(`Лихорадка.`,`A fever.`),t(`Не {пережил|пережила} зиму.`,`The winter was too long.`),t(`Жар и понос, три дня.`,`Three days of fever and flux.`)]:this.era.i===6&&e<60?[t(`Сердце.`,`The heart.`),t(`Авария на дороге.`,`A road accident.`),t(`Болезнь, которую поздно заметили.`,`An illness found too late.`)]:e<40?this.sex===`F`&&this.married?[t(`Горячка.`,`A fever.`),t(`Роды.`,`Childbirth.`),t(`Мор.`,`Plague.`)]:[t(`Горячка.`,`A fever.`),t(`Несчастье в поле.`,`An accident in the field.`),t(`Мор.`,`Plague.`)]:e<60?[t(`Горячка.`,`A fever.`),t(`Сердце.`,`The heart.`),t(`Чахотка.`,`Consumption.`)]:[t(`{Уснул|Уснула} и не {проснулся|проснулась}.`,`Went to sleep and did not wake.`),t(`Сердце.`,`The heart.`),t(`Старость.`,`Old age.`),this.monk?t(`Тихо, под пение {братии|сестёр}.`,`Quietly, while the others sang.`):this.kidsAlive>0?t(`Тихо, при детях.`,`Quietly, with the children near.`):t(`Тихо, во сне.`,`Quietly, in sleep.`)];let r=this.rnd.pick(n),i;i=this.alive?t(`Сейчас тебе ${St(e)}. Дальше книга ещё не написана.`,`You are ${e} now. The rest of the book is not written yet.`):e<1?t(`{Умер|Умерла} младенцем.`,`Died in infancy.`):t(e<5?`{Умер|Умерла} на ${e+1}-м году.`:`{Умер|Умерла} в ${e} ${xt(e,`год`,`года`,`лет`)}.`,`Died aged ${e}.`),this.add(e,this.alive?i:i.plus(new O(` `,` `)).plus(r),`DEATH`);let a=[];e<5&&!this.alive?a.push(this.rnd.pick([t(`Прожил{|а} мало, но {был|была} {любим|любима}.`,`Lived little, and was loved.`),t(`Мать помнила до конца своих дней.`,`Mother remembered to the end of her days.`)])):(a.push(...this.eps.slice(0,2)),this.firstLit&&a.push(t(`{Первый|Первая} в роду, кто {научился|научилась} читать.`,`The first in the family to read.`)),this.flags.has(`secretlit`)&&a.push(t(`Грамоте выучилась тайком.`,`Learned her letters in secret.`)),this.birth.estate.rank===0&&this.rank>0&&a.push(t(`{Родился|Родилась} несвободным, {умер|умерла} {свободным|свободной}.`,`Born unfree, died free.`)),this.kids>0&&a.push(this.kidsAlive<this.kids?t(`{Пережил|Пережила} ${Dt(this.kids-this.kidsAlive)}.`,`Outlived ${kt(this.kids-this.kidsAlive)}.`):t(`{Вырастил|Вырастила} ${Dt(this.kids)}.`,`Raised ${kt(this.kids)}.`)),this.wishSea?a.push(t(`{Увидел|Увидела} море на старости лет.`,`Saw the sea in old age.`)):this.sawSea||a.push(t(`Моря так и не {увидел|увидела}.`,`Never saw the sea.`)),this.kind&&a.push(t(`В голодный год {делился|делилась} последним.`,`Shared the last of it in a hungry year.`)),this.love&&a.push(t(`{Выбрал|Выбрала} сердцем.`,`Chose with the heart.`)),this.monk&&a.push(t(`{Жил|Жила} в тишине.`,`Lived in silence.`)),this.taught&&a.push(this.monk?t(`Послушники читали благодаря {ему|ей}.`,`The novices could read because of {him|her}.`):t(`Дети читали благодаря {ему|ей}.`,`The children could read because of {him|her}.`)),this.tree&&a.push(t(`Груша у дома цветёт и сейчас.`,`The pear tree by the house still blooms.`)),this.meet!=null&&a.push(t(`Однажды {видел|видела} того, о ком потом писали книги.`,`Once met someone later written about in books.`)),this.flags.has(`faith`)&&a.push(t(`{Верил|Верила} крепко.`,`Kept the faith.`)),this.flags.has(`brave`)&&a.push(t(`Не {побоялся|побоялась}.`,`Was not afraid.`)),this.flags.has(`moved`)&&a.push(t(`{Умер|Умерла} далеко от места, где {родился|родилась}.`,`Died far from the place of birth.`)),a.length===0&&a.push(this.rnd.pick([t(`{Жил|Жила} как все. Это немало.`,`Lived like everyone. That is no small thing.`),t(`{Работал|Работала} и не {жаловался|жаловалась}.`,`Worked and did not complain.`)]))),this.alive&&a.unshift(t(`{Жив|Жива} и сейчас.`,`Still alive.`));let o=a.slice(0,3).reduce((e,t)=>e.plus(new O(` `,` `)).plus(t)),s=this.birth.first,c=[new O(`Сколько людей сегодня помнят по имени твою прабабушку?`,`How many people today remember your great-grandmother's name?`),new O(`Что в твоём сегодняшнем дне показалось бы этому человеку чудом?`,`What in your day today would look like a miracle to this person?`)],l=this.kids;e<5&&!this.alive?c.push(new O(`Эта жизнь длилась ${St(e+1)}. Чего ты ждёшь от своих ближайших четырёх?`,`This life lasted ${Ct(e+1)}. What do you hope for from your next four?`)):(this.sawSea||c.push(t(`${s.ru} так и не {увидел|увидела} моря. Когда море в последний раз было у тебя перед глазами?`,`${s.en} never saw the sea. When was the sea last in front of your eyes?`)),!this.lit&&e>=12&&c.push(t(`${s.ru} так и не {научился|научилась} читать. Какую книгу стоило бы прочесть вслух — и кому?`,`${s.en} never learned to read. Which book would be worth reading aloud, and to whom?`)),this.byMaster&&c.push(t(`За {него|неё} всё решал хозяин, даже с кем жить. Что в твоём последнем году — твой собственный выбор?`,`A master decided everything for {him|her}, even whom to live with. What in your last year was your own choice?`)),this.byParents&&c.push(t(`За {него|неё} всё решили старшие. Что в твоём последнем году — твой собственный выбор?`,`The elders decided everything for {him|her}. What in your last year was your own choice?`)),l>0&&c.push(new O(`У этого человека ${l===1?`был`:`было`} ${Ot(l)}. Кому стоит позвонить сегодня?`,`This person had ${kt(l)}. Who should you call today?`)),this.kind&&c.push(new O(`В голодный год этот человек делился последним. С кем можешь поделиться ты?`,`In a hungry year this person shared the last of it. Who could you share with?`)),this.monk&&c.push(new O(`Эта жизнь прошла в тишине. Где тишина у тебя?`,`This life passed in silence. Where is your silence?`)),this.meet!=null&&c.push(new O(`Этот человек видел того, о ком потом писали книги. Кого из встреченных тобой стоит запомнить?`,`This person met someone later written about. Who among the people you have met is worth remembering?`))),e>=5&&(this.town&&c.push(new O(`Этот человек ушёл в город за другой жизнью. Куда хочется уйти тебе?`,`This person went to town for another life. Where do you want to go?`)),this.flags.has(`moved`)&&c.push(new O(`Этот человек всё бросил и ушёл. Что держит на месте тебя?`,`This person left everything behind. What keeps you where you are?`)),this.flags.has(`faith`)&&c.push(new O(`Этот человек крепко верил. Во что веришь ты?`,`This person kept the faith. What do you believe in?`)),this.birth.estate.rank===0&&c.push(new O(`Этот человек родился несвободным. Что ты сегодня можешь сделать, не спрашивая разрешения?`,`This person was born unfree. What can you do today without asking anyone's leave?`)),e>=80&&c.push(new O(`Этот человек прожил ${St(e)}. Что хочется успеть к этому возрасту?`,`This person lived to ${e}. What do you want to have done by that age?`)),this.alive&&c.push(new O(`Эта жизнь ещё идёт. Что хочется ей пожелать?`,`This life is still going. What would you wish it?`)),c.push(...this.asks));let u=c.slice(2);return{age:e,epitaph:o,bridge:u.length>0&&this.rnd.nextDouble()<.75?this.rnd.pick(u):this.rnd.pick([...c.slice(0,2),...Ut]),thing:this.birth.heir==null?mt(this.era.group,this.region,this.rnd):null,kidsAlive:this.kidsAlive,wealth:this.wealth,rank:this.rank,lit:this.lit,sawSea:this.sawSea,meet:this.meet,story:this.story,seen:[...this.usedHist]}}};function Kt(e,t,n,r,i,a,o=Mt.NONE,s=new we){return new Gt(e,t,n,a,o,s).read(r,i)}var qt=()=>({v:1,lives:[],things:[],cur:null,settings:{onboarded:!1,witness:!1,wish:`,,`,hand:!0,lang:null,auto:!0,speed:1}}),Jt=`lot`,Yt=`kv`,Xt=`doc`;function Zt(){return new Promise((e,t)=>{let n=indexedDB.open(Jt,1);n.onupgradeneeded=()=>n.result.createObjectStore(Yt),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}var Qt=null;async function $t(){try{Qt=Zt();let e=await Qt,t=await new Promise((t,n)=>{let r=e.transaction(Yt).objectStore(Yt).get(Xt);r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error)});return t?{...qt(),...t,settings:{...qt().settings,...t.settings}}:qt()}catch{return Qt=null,qt()}}var en=Promise.resolve();function tn(e){if(!Qt)return;let t=structuredClone(e);en=en.then(async()=>{try{let e=await Qt;await new Promise((n,r)=>{let i=e.transaction(Yt,`readwrite`);i.objectStore(Yt).put(t,Xt),i.oncomplete=()=>n(),i.onerror=()=>r(i.error)})}catch(e){console.warn(`lot: could not save`,e)}})}function nn(){navigator.storage?.persist?.().catch(()=>{})}var rn=e=>new O(e.nameRu,e.nameEn),an=e=>new O(e.epitaphRu,e.epitaphEn),on=e=>new O(e.bridgeRu,e.bridgeEn),sn=class{lives;things;cur;page;settings;byId;seen;constructor(e,t,n,r,i){this.lives=e,this.things=t,this.cur=n,this.page=r,this.settings=i,this.byId=new Map(e.map(e=>[e.id,e])),this.seen=new Map;for(let t of e)for(let e of t.seen)this.seen.has(e)||this.seen.set(e,t)}holders(e){return this.lives.filter(t=>t.thingId===e)}thing(e){return this.things.find(t=>t.id===e)}get wish(){return we.decode(this.settings.wish)}},cn=e=>e.map(e=>[e.age,jt.indexOf(e.mark),e.text.ru,e.text.en]),ln=e=>e.map(([e,t,n,r])=>({age:e,mark:jt[t],text:new O(n,r)})),un=class{content;doc=qt();listeners=new Set;state;constructor(e){this.content=e,this.state=this.compute()}load(e){this.doc=e,this.emit(!1)}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}compute(){let e=this.doc,t=e.cur?this.read(e.cur,e.lives,e.things):null;return new sn(e.lives,e.things,e.cur,t,e.settings)}emit(e=!0){this.state=this.compute(),e&&tn(this.doc);for(let e of this.listeners)e(this.state)}heir(e,t,n){if(!e)return null;let r=t.find(t=>t.id===e.thingId),i=r?ht(r.key).name:new O(``,``),a=n.some(t=>t.dynasty===e.dynasty&&t.gen<=e.gen&&t.lit);return{lifeId:e.id,name:rn(e),sex:e.sex,year:e.year,region:e.region,cult:e.cult,rank:e.rank,wealth:e.wealth,sur:e.surRu==null?null:new O(e.surRu,e.surEn??e.surRu),thingId:e.thingId,thing:i,story:e.storyRu==null?null:new O(e.storyRu,e.storyEn??e.storyRu),dynasty:e.dynasty,gen:e.gen,readers:a}}read(e,t,n){let r=this.heir(t.find(t=>t.id===e.heirOf),n,t);return Kt(this.content,BigInt(e.seed),r,e.picks,e.shown,e.witness,this.past(e,t),we.decode(e.wish))}past(e,t){let n=t.filter(t=>t.endedAt<=e.drawnAt&&t.id!==e.lifeId);return new Mt(new Set(n.filter(e=>e.book.length>0).slice(-40).flatMap(e=>e.book.map(e=>e[2]))),new Set(n.flatMap(e=>e.seen)))}book(e){if(e.book.length>0)return ln(e.book);let t=this.doc;return Kt(this.content,BigInt(e.seed),this.heir(t.lives.find(t=>t.id===e.heirOf),t.things,t.lives),e.picks,2**53-1,e.witness).entries}draw(e,t=null,n=new we,r=dt(),i=Date.now()){this.doc.cur={seed:String(r),heirOf:t,witness:e,picks:[],shown:1,drawnAt:i,lifeId:null,ver:2,wish:t==null?n.encode():`,,`},this.emit()}turn(e=Date.now()){let t=this.doc.cur;t&&this.state.page?.canTurn===!0&&this.settle({...t,shown:t.shown+1},e)}pick(e,t=Date.now()){let n=this.doc.cur,r=this.state.page?.pending;n&&r&&r.doors[e]?.open===!0&&this.settle({...n,picks:[...n.picks,e]},t)}answer(e,t){this.doc.lives=this.doc.lives.map(n=>n.id===e?{...n,answer:t.trim()}:n),this.emit()}settings(e){this.doc.settings=e(this.doc.settings),this.emit()}settle(e,t){let n=this.doc,r=this.read(e,n.lives,n.things),i=r.end;if(i==null||e.lifeId!=null){n.cur=e,this.emit();return}let a=r.birth,o=a.heir,s;i.thing==null&&o!=null?s=o.thingId:(s=Math.max(0,...n.things.map(e=>e.id))+1,n.things=[...n.things,{id:s,key:(i.thing??gt(a.era.group)[0]).key,createdAt:t}]);let c=Math.max(0,...n.lives.map(e=>e.id))+1;n.lives=[...n.lives,{id:c,seed:e.seed,heirOf:e.heirOf,witness:e.witness,picks:e.picks,nameRu:a.name.ru,nameEn:a.name.en,sex:a.sex,year:a.year,death:i.age,eraI:a.era.i,region:a.region.key,cult:a.cult,estate:a.estate.key,rank:i.rank,wealth:i.wealth,surRu:a.sur?.ru??null,surEn:a.sur?.en??null,kids:i.kidsAlive,lit:i.lit,sawSea:i.sawSea,epitaphRu:i.epitaph.ru,epitaphEn:i.epitaph.en,bridgeRu:i.bridge.ru,bridgeEn:i.bridge.en,answer:``,thingId:s,storyRu:i.story?.ru??null,storyEn:i.story?.en??null,meet:i.meet,dynasty:o?.dynasty??e.seed,gen:(o?.gen??0)+1,endedAt:t,ver:2,book:cn(r.entries),seen:i.seen}],n.cur={...e,lifeId:c},this.emit()}exportJson(){return JSON.stringify(this.doc)}importJson(e){let t=JSON.parse(e);if(t?.v!==1||!Array.isArray(t.lives)||!Array.isArray(t.things))throw Error(`not a Lot archive`);this.doc={...qt(),...t,settings:{...qt().settings,...t.settings}},this.emit()}},dn,B,fn,pn,mn=Object.is,hn=0,gn=[],_n=[],V=e,vn=V.__b,yn=V.__r,bn=V.diffed,xn=V.__c,Sn=V.unmount,Cn=V.__;function wn(e,t){V.__h&&V.__h(B,e,hn||t),hn=0;var n=B.__H||(B.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function H(e){return hn=1,Tn(zn,e)}function Tn(e,t,n){var r=wn(dn++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):zn(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);mn(t,n)||(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=B,!B.__f)){B.__f=!0;var i=B.shouldComponentUpdate;B.shouldComponentUpdate=function(e,t,n){var r=this.__H;if(!r)return!0;var a=!1,o=this.props!=e;if(r.__.some(function(e){e.__N&&(a=!0,mn(e.__[0],e.__N[0])||(o=!0))}),i){var s=i.call(this,e,t,n);return a?s||o:s}return!a||o}}return r.__}function En(e,t){var n=wn(dn++,3);!V.__s&&Rn(n.__H,t)&&(n.__P=!0,n.__=e,n.u=t,B.__H.__h.push(n))}function Dn(e,t){var n=wn(dn++,4);!V.__s&&Rn(n.__H,t)&&(n.__P=!1,n.__=e,n.u=t,B.__h.push(n))}function On(e){return hn=5,kn(function(){return{current:e}},[])}function kn(e,t){var n=wn(dn++,7);return Rn(n.__H,t)&&(n.__=e(),n.__H=t),n.__}function An(e,t){return hn=8,kn(function(){return e},t)}function jn(e){var t=B.context[e.__c],n=wn(dn++,9);return n.c=e,t?(n.__??(n.__=!0,t.sub(B)),t.props.value):e.__}function Mn(){var e;do{for(;e=_n.shift();)try{In(e)}catch(t){V.__e(t,{__:(e=e.__P)&&e.__v})}for(;e=gn.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(In),t.__h.some(Ln),t.__h=[]}catch(n){t.__h=[],V.__e(n,e.__v)}}}while(_n.length)}V.__b=function(e){B=null,vn&&vn(e)},V.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Cn&&Cn(e,t)},V.__r=function(e){yn&&yn(e),dn=0;var t=(B=e.__c).__H;t&&(fn==B?B.__h=[]:(t.__h.some(In),t.__h.some(Ln),dn=0),t.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})),fn=B},V.diffed=function(e){bn&&bn(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&Fn(gn.push(t)),t.__H.__.some(function(e){e.u&&(e.__H=e.u)})),fn=B=null},V.__c=function(e,t){t.some(function(e){try{e.__h.some(In),e.__h=e.__h.filter(function(e){return!e.__||Ln(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],V.__e(n,e.__v)}}),xn&&xn(e,t)},V.unmount=function(e){Sn&&Sn(e);var t,n,r=e.__c;r&&r.__H&&(r.__H.__.some(function(r){try{if(r.__P&&r.__c){if(n===void 0){for(n=e.__;n&&(!n.__c||!n.__c.__P);)n=n.__;n&&=n.__c}r.__P=n,Fn(_n.push(r))}else In(r)}catch(e){t=e}}),r.__H=void 0,t&&V.__e(t,r.__v))};var Nn=typeof requestAnimationFrame==`function`;function Pn(e){var t,n=function(){clearTimeout(r),Nn&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Nn&&(t=requestAnimationFrame(n))}function Fn(e){e!=1&&pn==V.requestAnimationFrame||((pn=V.requestAnimationFrame)||Pn)(Mn)}function In(e){var t=B,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),B=t}function Ln(e){var t=B;e.__c=e.__(),B=t}function Rn(e,t){return!e||e.length!=t.length||t.some(function(t,n){return!mn(t,e[n])})}function zn(e,t){return typeof t==`function`?t(e):t}var Bn=0;Array.isArray;function U(t,n,r,i,a,o){n||={};var s,c,l=n;if(`ref`in l&&typeof t!=`function`)for(c in l={},n)c==`ref`?s=n[c]:l[c]=n[c];var u={type:t,props:l,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Bn,__i:-1,__u:0};return(a||o)&&(u.__source=a,u.__self=o),e.vnode&&e.vnode(u),u}var W={paper:`#EFE0BF`,paperHi:`#F6EAD0`,paperLo:`#DCC493`,page:`#F7ECD2`,rule:`#D9C49B`,light:`#F8EFD9`,card:`#FBF4E3`,line:`#C8AE80`,ink:`#2A1A10`,ink2:`#5B3D26`,muted:`#8A6A4A`,red:`#8F2F22`,blue:`#2B2A5A`,wood:`#C99A5E`,woodHi:`#D9B077`,woodLo:`#A87A44`,grain:`#8A6034`,burn:`#3A1D0C`,sack:`#C9A774`,sackLo:`#B08C58`,sackDark:`#3A2414`,string:`#7A5230`,land:`#D4BD8C`,sea:`#E9D7AE`};function Vn({s:e,y:t,size:n,bold:r,italic:i}){let a=On(null),[o,s]=H(n);return Dn(()=>{let e=()=>{let e=a.current;if(!e)return;e.setAttribute(`font-size`,String(n));let t=e.getComputedTextLength();s(t>176?n*176/t:n)};e(),document.fonts?.ready.then(e)},[e,n]),U(`text`,{ref:a,x:122,y:t,"text-anchor":`middle`,"font-family":`'PT Serif', serif`,"font-size":o,"font-weight":r?700:400,"font-style":i?`italic`:`normal`,fill:W.burn,children:e})}var Hn=`M30 4 L204 4 Q216 4 216 16 L216 104 Q216 116 204 116 L30 116 L4 60 Z`;function Un({t:e,seed:t,id:n}){let r=new ut(t),i=[];for(let e=0;e<10;e++){let t=10+e*11+r.nextFloat()*4,n=t+r.nextFloat()*6-3,a=t+r.nextFloat()*6-3;i.push(U(`path`,{d:`M0 ${t} C60 ${n} 140 ${a} 220 ${t}`,stroke:W.grain,"stroke-opacity":.35,"stroke-width":.6+r.nextFloat(),fill:`none`},e))}let a=60+r.nextFloat()*120;return U(`g`,{children:[U(`defs`,{children:[U(`linearGradient`,{id:`${n}w`,x1:`0`,y1:`4`,x2:`0`,y2:`116`,gradientUnits:`userSpaceOnUse`,children:[U(`stop`,{offset:`0`,"stop-color":W.woodHi}),U(`stop`,{offset:`1`,"stop-color":W.woodLo})]}),U(`clipPath`,{id:`${n}t`,children:U(`path`,{d:Hn})})]}),U(`path`,{d:`M22 60 C10 30 -10 30 -24 6`,stroke:W.string,"stroke-width":3,"stroke-linecap":`round`,fill:`none`}),U(`path`,{d:Hn,fill:`url(#${n}w)`}),U(`g`,{"clip-path":`url(#${n}t)`,children:[i,U(`ellipse`,{cx:a+7,cy:91,rx:7,ry:3,fill:`none`,stroke:W.grain,"stroke-opacity":.3,"stroke-width":1})]}),U(`path`,{d:Hn,fill:`none`,stroke:W.ink2,"stroke-width":2}),U(`circle`,{cx:22,cy:60,r:6,fill:W.sackDark}),U(Vn,{s:e.year,y:32,size:21,bold:!0}),U(Vn,{s:e.place,y:56,size:14}),U(Vn,{s:e.family,y:77,size:12.5,italic:!0}),U(Vn,{s:e.sex,y:98,size:12.5})]})}var Wn=`M60 70 C30 110 30 170 70 188 C100 198 150 198 180 188 C220 170 220 110 190 70 Z`;function Gn(){let e=[];for(let t=30;t<220;t+=6)e.push(U(`line`,{x1:t,y1:55,x2:t+4,y2:200,stroke:W.sackLo,"stroke-width":1.2},`v${t}`));for(let t=60;t<200;t+=6)e.push(U(`line`,{x1:25,y1:t,x2:225,y2:t+2,stroke:W.sackLo,"stroke-opacity":.7,"stroke-width":1},`h${t}`));return U(`g`,{children:[U(`defs`,{children:[U(`clipPath`,{id:`sackBody`,children:U(`path`,{d:Wn})}),U(`linearGradient`,{id:`sackShade`,x1:`30`,y1:`0`,x2:`220`,y2:`0`,gradientUnits:`userSpaceOnUse`,children:[U(`stop`,{offset:`0`,"stop-color":W.ink,"stop-opacity":.18}),U(`stop`,{offset:`0.333`,"stop-color":W.ink,"stop-opacity":0}),U(`stop`,{offset:`0.667`,"stop-color":W.ink,"stop-opacity":0}),U(`stop`,{offset:`1`,"stop-color":W.ink,"stop-opacity":.22})]})]}),U(`ellipse`,{cx:125,cy:192,rx:95,ry:8,fill:W.ink,"fill-opacity":.14}),U(`path`,{d:Wn,fill:W.sack}),U(`g`,{"clip-path":`url(#sackBody)`,children:[e,U(`rect`,{x:25,y:55,width:200,height:150,fill:`url(#sackShade)`})]}),U(`path`,{d:Wn,fill:`none`,stroke:W.ink2,"stroke-width":2.5}),U(`path`,{d:`M60 70 C90 58 160 58 190 70 C170 80 80 80 60 70 Z`,fill:W.sackDark}),U(`path`,{d:`M70 76 C100 86 150 86 180 76`,stroke:W.string,"stroke-width":5,"stroke-linecap":`round`,fill:`none`}),U(`path`,{d:`M128 84 C140 100 150 104 166 98`,stroke:W.string,"stroke-width":3,"stroke-linecap":`round`,fill:`none`}),U(`path`,{d:`M128 84 C132 104 118 116 104 116`,stroke:W.string,"stroke-width":3,"stroke-linecap":`round`,fill:`none`}),U(`circle`,{cx:128,cy:84,r:4.5,fill:W.string}),U(`path`,{d:`M85 120 C95 150 90 170 100 182`,stroke:W.sackLo,"stroke-width":2,"stroke-linecap":`round`,fill:`none`}),U(`path`,{d:`M160 115 C150 140 162 165 155 184`,stroke:W.sackLo,"stroke-width":2,"stroke-linecap":`round`,fill:`none`})]})}function Kn({shake:e,rise:t,tag:n,seed:r,height:i=300}){let a=Math.min(Math.max(t,0),1),o=200+-125*a,s=.5+.5*a,c=-8+5*a;return U(`svg`,{viewBox:`0 0 250 330`,style:{width:`100%`,height:`${i}px`,display:`block`,overflow:`visible`},"aria-hidden":`true`,children:[U(`defs`,{children:U(`clipPath`,{id:`sackMouth`,children:U(`rect`,{x:-60,y:-200,width:370,height:408})})}),U(`g`,{transform:`translate(0 130) rotate(${e} 125 180)`,children:U(Gn,{})}),n&&t>0&&U(`g`,{"clip-path":`url(#sackMouth)`,children:U(`g`,{transform:`translate(15 ${o-60}) translate(110 60) scale(${s}) rotate(${c}) translate(-110 -60)`,children:U(Un,{t:n,seed:r,id:`tag`})})})]})}var G=`#5B3D26`,qn=`#E8DCC0`,Jn=`#C49A68`,Yn=`#B87333`,Xn=`#B8A050`,Zn=`#A8A29A`,Qn=`#F2E6C8`,$n=`#A87A44`,K=(e,t,n,r,i,a,o=!0,s)=>U(`line`,{x1:e,y1:t,x2:n,y2:r,stroke:i,"stroke-width":a,"stroke-linecap":o?`round`:`butt`,"stroke-dasharray":s}),q=(e,t,n,r,i,a=2)=>U(`circle`,{cx:e,cy:t,r:n,fill:i?`none`:r,stroke:i,"stroke-width":i?a:void 0}),J=(e,t,n,r=2)=>U(`path`,{d:e,fill:t??`none`,stroke:n,"stroke-width":n?r:void 0,"stroke-linejoin":`miter`}),Y=(e,t,n,r,i,a,o,s=2)=>U(`rect`,{x:e,y:t,width:n,height:r,rx:i,fill:a??`none`,stroke:o,"stroke-width":o?s:void 0}),er=(e,t,n,r,i,a,o=2)=>U(`ellipse`,{cx:e+n/2,cy:t+r/2,rx:n/2,ry:r/2,fill:i??`none`,stroke:a,"stroke-width":a?o:void 0});function tr(e){switch(e){case`NEEDLE`:return U(y,{children:[K(14,50,48,12,qn,5),K(14,50,48,12,`#8A7458`,1.2),q(45,15,2,G)]});case`FLINT`:{let e=`M12 44 L22 14 L40 10 L52 30 L44 50 Z`;return U(y,{children:[J(e,`#7D7A72`),J(e,null,`#3A3530`),J(`M22 14 L30 34 L44 50 M30 34 L52 30`,null,`#55524C`,1.4)]})}case`BEADS`:return U(y,{children:[J(`M12 18 C20 50 44 50 52 18`,null,`#7A5230`,1.4),[`#3D6A8A`,`#D8C8A8`,`#A33A2C`,`#D8C8A8`,`#3D6A8A`].map((e,t)=>{let n=t/4,r=12+40*n,i=18+30*Math.sin(Math.PI*n);return U(`g`,{children:[q(r,i,5,e),q(r,i,5,``,G,1)]},t)})]});case`POUCH`:{let e=`M20 22 C10 34 12 52 32 54 C52 52 54 34 44 22 Z`;return U(y,{children:[J(e,`#9A6A3A`),J(e,null,`#3A2414`),K(20,22,44,22,`#3A2414`,3),q(32,40,6,`#B5442A`)]})}case`FLUTE`:return U(`g`,{transform:`rotate(-35 32 32)`,children:[Y(8,27,48,10,5,qn),Y(8,27,48,10,5,null,G,1.5),[0,1,2,3].map(e=>U(`g`,{children:q(22+e*8,32,1.8,G)},e))]});case`TABLET`:return U(y,{children:[Y(14,10,36,44,5,Jn),Y(14,10,36,44,5,null,G),[0,1,2,3,4].map(e=>U(`g`,{children:K(20,19+e*7,34+e*7%10,19+e*7,`#7A5230`,2,!1,`2 2`)},e))]});case`MIRROR`:return U(y,{children:[Y(29,40,6,16,2,`#7A5230`),q(32,26,16,`#B8893C`),q(32,26,16,``,G),q(32,26,11,`#D9B46A`)]});case`AMULET`:return U(y,{children:[J(`M18 8 C20 26 44 26 46 8`,null,`#7A5230`,1.4),er(22,22,20,28,`#3D6A8A`),er(22,22,20,28,null,G),er(27,27,6,9,`#8FB4C9`)]});case`COIN`:return U(y,{children:[q(32,32,18,Yn),q(32,32,18,``,G),q(32,32,13,``,`#8A5222`,1),Y(28,28,8,8,0,G)]});case`CUP`:{let e=`M16 22 L48 22 C48 42 42 50 32 50 C22 50 16 42 16 22 Z`;return U(y,{children:[J(e,Jn),J(e,null,G),er(16,18,32,8,`#7A5230`),K(20,32,44,32,`#7A5230`,1.4,!1)]})}case`SPOON`:return U(y,{children:[K(28,27,52,52,$n,5),U(`g`,{transform:`rotate(-40 22 20)`,children:[er(13,8,18,24,`#C49A68`),er(13,8,18,24,null,G)]})]});case`CHARM`:return U(y,{children:[K(32,4,32,10,`#4A4540`,2),Y(18,10,28,40,3,Zn),Y(18,10,28,40,3,null,`#4A4540`),q(32,24,6,`#D9B46A`),J(`M24 44 C24 32 40 32 40 44 Z`,`#7A5C4A`)]});case`COMB`:return U(y,{children:[Y(10,20,44,10,0,qn),Y(10,20,44,10,0,null,G),Array.from({length:10},(e,t)=>U(`g`,{children:K(13+t*4.3,30,13+t*4.3,46,qn,2.5,!1)},t))]});case`WHISTLE`:return U(y,{children:[Y(8,26,44,12,6,`#C9B07A`),Y(8,26,44,12,6,null,G),Y(16,28,6,4,0,G),K(30,26,30,38,`#7A5230`,1,!1)]});case`PIPE`:{let e=`M34 26 L50 26 L50 40 C50 48 34 48 34 40 Z`;return U(y,{children:[K(10,22,36,32,qn,5),J(e,qn),J(e,null,G)]})}case`LETTER`:return U(y,{children:[Y(12,16,40,32,0,Qn),Y(12,16,40,32,0,null,G),[0,1,2,3].map(e=>U(`g`,{children:J(`M17 ${24+e*6} C25 ${22+e*6} 35 ${26+e*6} 47 ${24+e*6}`,null,`#2B2A5A`,1.2)},e)),q(44,44,5,`#8F2F22`)]});case`GLASSES`:return U(y,{children:[U(`circle`,{cx:20,cy:34,r:10,fill:`#A8C8D8`,"fill-opacity":.2,stroke:`#4A4540`,"stroke-width":2.2}),U(`circle`,{cx:44,cy:34,r:10,fill:`#A8C8D8`,"fill-opacity":.2,stroke:`#4A4540`,"stroke-width":2.2}),J(`M30 33 Q32 29 34 33`,null,`#4A4540`,2.2),K(10,32,4,26,`#4A4540`,2),K(54,32,60,26,`#4A4540`,2)]});case`BUTTON`:return U(y,{children:[q(32,32,16,Xn),q(32,32,16,``,G),q(32,32,12,``,`#8A7430`,1),J(`M24 32 L32 24 L40 32 L32 40 Z`,`#8A7430`)]});case`PHOTO`:return U(y,{children:[Y(12,10,40,46,0,`#D8C8A0`),Y(12,10,40,46,0,null,G),Y(17,15,30,32,0,`#8A7A62`),q(26,26,4,`#C8B898`),q(38,25,4,`#C8B898`),J(`M20 47 C20 37 32 37 32 47 M32 47 C32 37 44 37 44 47`,`#5A4A3A`)]});case`TICKET`:return U(y,{children:[Y(8,20,48,24,0,`#C7B37A`),Y(8,20,48,24,0,null,G),K(40,20,40,44,G,1,!1,`3 2`),K(14,28,34,28,G,2,!1),K(14,34,28,34,G,2,!1)]});case`THIMBLE`:{let e=`M20 50 C18 30 22 14 32 14 C42 14 46 30 44 50 Z`,t=[];for(let e=0;e<=2;e++)for(let n=0;n<=2;n++)t.push(U(`g`,{children:q(26+n*6,26+e*7,1.4,`#6A655E`)},`${e}${n}`));return U(y,{children:[J(e,`#B8B2A8`),J(e,null,`#4A4540`),t]})}case`WATCH`:return U(y,{children:[K(32,6,32,14,Xn,3,!1),q(32,34,18,Xn),q(32,34,18,``,G),q(32,34,14,`#F4ECD8`),Array.from({length:12},(e,t)=>U(`g`,{transform:`rotate(${t*30} 32 34)`,children:K(32,22,32,24.5,G,1,!1)},t)),K(32,34,32,25,G,1.6,!1),K(32,34,39,37,G,1.6,!1)]});case`PHONE`:{let e=[];for(let t=0;t<=2;t++)for(let n=0;n<=2;n++)e.push(U(`g`,{children:Y(24+n*6,31+t*7,4,4,0,`#AAAAAA`)},`${t}${n}`));return U(y,{children:[Y(20,8,24,48,4,`#3A3A40`),Y(20,8,24,48,4,null,`#1A1A1E`),Y(24,13,16,14,0,`#9AB88A`),e]})}case`KEY`:return U(y,{children:[q(20,32,9,``,Xn,4),K(29,32,54,32,Xn,4),K(46,32,46,40,Xn,4),K(52,32,52,38,Xn,4)]});case`CASSETTE`:return U(y,{children:[Y(8,16,48,32,3,`#3A3A40`),Y(13,20,38,14,0,`#E6D8B8`),K(15,24,48,24,`#8F2F22`,1.5,!1),q(24,39,4,`#1A1A1E`),q(40,39,4,`#1A1A1E`),q(24,39,2,`#E6D8B8`),q(40,39,2,`#E6D8B8`)]})}}function nr({shape:e,size:t=54}){return U(`svg`,{viewBox:`0 0 64 64`,width:t,height:t,"aria-hidden":`true`,style:{display:`block`,overflow:`visible`},children:[U(`ellipse`,{cx:32,cy:57,rx:20,ry:3,fill:`#000`,"fill-opacity":.13}),tr(e)]})}var rr=[[-168,66,-140,70,-95,72,-80,63,-60,55,-66,45,-81,30,-80,25,-97,26,-97,18,-87,15,-80,8,-90,14,-105,20,-117,32,-124,40,-124,48,-135,58,-152,60,-165,62],[-80,9,-62,10,-50,0,-35,-6,-40,-22,-58,-38,-65,-55,-73,-50,-71,-20,-81,-5],[-10,36,-9,43,-2,44,-5,48,2,51,8,54,10,58,5,62,15,69,28,71,42,67,60,69,80,73,105,77,140,72,170,70,180,66,160,60,142,52,135,43,127,38,122,30,120,22,108,18,108,11,104,1,98,8,98,16,92,22,80,15,77,8,72,20,66,25,57,25,56,27,50,30,48,29,52,24,56,26,59,22,52,15,43,12,35,28,34,31,36,36,27,37,26,40,23,36,20,40,14,42,16,38,12,42,8,44,3,43,-5,36],[-17,21,-10,33,-5,36,10,37,20,32,32,31,34,28,43,12,51,12,40,-5,40,-15,35,-25,20,-35,15,-28,12,-15,14,-5,9,4,-8,5,-17,14],[114,-22,130,-12,137,-12,142,-11,146,-19,153,-28,150,-37,141,-38,131,-31,115,-34],[-55,60,-45,60,-20,70,-20,82,-60,82,-72,77],[-5,50,1,51,-2,57,-6,58,-5,55],[130,31,140,35,142,40,141,45,140,41,135,34],[44,-25,47,-25,50,-15,49,-12,44,-17],[95,5,106,-6,102,-4],[109,1,117,7,119,0,116,-4,110,-3],[166,-46,174,-41,178,-38,172,-35,168,-44]].map(e=>{let t=`M${e[0]+180} ${90-e[1]}`;for(let n=2;n<e.length;n+=2)t+=` L${e[n]+180} ${90-e[n+1]}`;return t+` Z`});function ir(e){return[e.lon+180+(e.jitter*37%11-5)*.8,90-e.lat+(e.jitter*53%9-4)*.8]}function ar({pins:e,onPick:t}){let n=[];for(let e=3;e<180;e+=4)n.push(U(`line`,{x1:0,y1:e,x2:360,y2:e,stroke:W.line,"stroke-opacity":.35,"stroke-width":.3},`s${e}`));for(let e=0;e<=360;e+=30)n.push(U(`line`,{x1:e,y1:0,x2:e,y2:180,stroke:W.line,"stroke-width":.35},`m${e}`));for(let e=0;e<=180;e+=30)n.push(U(`line`,{x1:0,y1:e,x2:360,y2:e,stroke:W.line,"stroke-width":.35},`p${e}`));let r=[...e].sort((e,t)=>Number(e.on)-Number(t.on));return U(`svg`,{viewBox:`0 0 360 180`,style:{width:`100%`,display:`block`},onClick:n=>{let r=n.currentTarget.getBoundingClientRect(),i=360/r.width,a=(n.clientX-r.left)*i,o=(n.clientY-r.top)*i,s=null,c=1/0;for(let t of e){let[e,n]=ir(t),r=Math.hypot(e-a,n-o);r<c&&(c=r,s=t)}t(s&&c<24*i?s.id:null)},children:[U(`defs`,{children:U(`clipPath`,{id:`mapClip`,children:U(`rect`,{x:0,y:0,width:360,height:180})})}),U(`g`,{"clip-path":`url(#mapClip)`,children:[U(`rect`,{x:0,y:0,width:360,height:180,fill:W.sea}),n,rr.map((e,t)=>U(`path`,{d:e,fill:W.land,stroke:W.ink2,"stroke-width":.7,"stroke-linejoin":`round`},t)),r.map(e=>{let[t,n]=ir(e);return U(`g`,{children:[e.on&&U(`circle`,{cx:t,cy:n,r:5.2,fill:`none`,stroke:W.ink,"stroke-width":1}),U(`circle`,{cx:t,cy:n,r:3.6,fill:W.page}),U(`circle`,{cx:t,cy:n,r:2.8,fill:e.color}),e.infant&&U(`circle`,{cx:t,cy:n,r:.9,fill:W.page})]},e.id)})]}),U(`rect`,{x:0,y:0,width:360,height:180,fill:`none`,stroke:W.ink2,"stroke-width":1})]})}var or=pe(null),X=()=>jn(or);function Z({children:e,kind:t=`ink`,disabled:n,onClick:r}){return U(`button`,{type:`button`,class:`btn ${t===`ink`?``:t}`,disabled:n,onClick:r,children:e})}function Q({children:e,on:t,disabled:n,onClick:r}){return U(`button`,{type:`button`,class:`chip ${t?`on`:``}`,disabled:n,"aria-pressed":t,onClick:r,children:e})}function sr({children:e,onClick:t,style:n}){return t?U(`button`,{type:`button`,class:`card tap`,style:n,onClick:t,children:e}):U(`div`,{class:`card`,style:n,children:e})}var cr=({children:e,style:t})=>U(`div`,{class:`label`,style:t,children:e}),$=({h:e=10})=>U(`div`,{style:{height:`${e}px`}}),lr=({dark:e})=>U(`div`,{class:`rule ${e?`dark`:``}`});function ur({title:e,sub:t,end:n}){return U(`div`,{class:`top`,children:[U(`div`,{class:`top-row`,children:[U(`h1`,{class:`title`,children:e}),n]}),t&&U(`p`,{class:`top-sub`,children:t})]})}function dr({title:e,onClose:t,closeLabel:n,children:r}){return En(()=>{let e=e=>{e.key===`Escape`&&t()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t]),U(`div`,{class:`sheet-back`,onClick:e=>{e.target===e.currentTarget&&t()},children:U(`div`,{class:`sheet paper`,role:`dialog`,"aria-label":e,children:[U(`div`,{class:`sheet-head`,children:[U(`h2`,{class:`heading`,children:e}),U(`button`,{type:`button`,class:`sheet-close`,onClick:t,children:n})]}),U(`div`,{class:`sheet-body`,children:r})]})})}function fr({title:e,children:t,actions:n}){return U(`div`,{class:`sheet-back`,style:{alignItems:`center`},children:U(`div`,{class:`dialog`,role:`alertdialog`,"aria-label":e,children:[U(`h2`,{class:`heading`,children:e}),U(`div`,{style:{marginTop:`8px`},children:t}),U(`div`,{class:`dialog-actions`,children:n})]})})}function pr(e=20){try{navigator.vibrate?.(e)}catch{}}function mr(e){return Math.trunc(e<.3?-5e4+42e3*e/.3:e<.55?-8e3+9e3*(e-.3)/.25:e<.8?1e3+800*(e-.55)/.25:1800+226*(e-.8)/.2)}function hr({onLife:e}){let{s:t,w:n,repo:r}=X(),i=t.lives,[a,o]=H(1),[s,c]=H(null),[l,u]=H(!1),d=mr(a),f=i.filter(e=>a>=1||e.year<=d),p=f.map(e=>{let t=Me(e.region,e.eraI);return{lon:t.lon,lat:t.lat,color:F[e.eraI].color,infant:e.death<5,jitter:e.id,on:e.id===s,id:e.id}}),m=f.find(e=>e.id===s),h=Math.max(i.length,1),g=Math.max(...F.map(e=>e.births/117)),_=r.content.hist,v=t.seen,y=e=>n.x(e.text.g(v.get(e.id)?.sex??`M`)),b=_.filter(e=>e.meet),x=b.filter(e=>v.has(e.id)).sort((e,t)=>e.mid-t.mid),S=_.filter(e=>v.has(e.id)&&!e.meet).sort((e,t)=>e.mid-t.mid),C=i.filter(e=>e.answer.trim()!==``).reverse();return U(`div`,{class:`col`,children:[U(ur,{title:n.t(`Атлас`,`Atlas`),sub:i.length===0?n.t(`Здесь появятся места твоих рождений.`,`Your birthplaces will appear here.`):n.t(`Жизней: ${i.length}. Каждая точка — место рождения.`,`Lives: ${i.length}. Each dot is a birthplace.`)}),U(`div`,{class:`map`,children:U(ar,{pins:p,onPick:c})}),m&&U(`button`,{type:`button`,class:`note-pick`,onClick:()=>e(m.id),children:[U(`span`,{class:`dot`,style:{background:F[m.eraI].color}}),U(`span`,{style:{marginLeft:`10px`,flex:1},children:[U(`div`,{class:`bold`,children:n.x(rn(m))}),U(`div`,{class:`small`,children:`${n.year(m.year)} – ${n.year(m.year+m.death)} · ${n.x(F[m.eraI].name)} · ${n.x(Me(m.region,m.eraI).name)}`})]}),U(`span`,{class:`small red`,style:{marginLeft:`8px`},children:n.t(`Книга ›`,`Book ›`)})]}),U(`div`,{class:`slider-row`,children:[U(`span`,{class:`small`,children:a>=1?n.t(`все жизни`,`all lives`):n.t(`до `,`until `)+n.year(d)}),U(`input`,{type:`range`,class:`time`,min:0,max:1e3,value:Math.round(a*1e3),style:{"--u":`${a*100}%`},"aria-label":n.t(`Время`,`Time`),onInput:e=>o(Number(e.target.value)/1e3)})]}),U(`div`,{class:`pad`,children:[U($,{h:14}),U(`h2`,{class:`heading`,children:n.t(`Перепись`,`Census`)}),U(`p`,{class:`small`,style:{margin:0},children:n.t(`Твои жребии рядом с настоящим распределением всех, кто когда-либо родился.`,`Your lots next to the real spread of everyone ever born.`)}),U($,{h:8}),U(`div`,{class:`small`,style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[U(`span`,{style:{width:`12px`,height:`8px`,background:`var(--paperLo)`}}),n.t(`все люди`,`everyone`),U(`span`,{style:{width:`12px`,height:`5px`,background:`var(--red)`,marginLeft:`12px`}}),n.t(`твои жребии`,`your lots`)]}),F.map(e=>{let t=i.filter(t=>t.eraI===e.i).length;return U(`div`,{class:`census-row`,children:[U(`span`,{class:`dot`,style:{width:`8px`,height:`8px`,background:e.color}}),U(`span`,{class:`census-name`,children:n.x(e.name)}),U(`span`,{class:`census-bar`,children:[U(`span`,{class:`census-all`,style:{width:`${e.births/117/g*100}%`}}),U(`span`,{class:`census-mine`,style:{width:`${Math.min(t/h/g,1)*100}%`}})]}),U(`span`,{class:`census-n`,children:t})]},e.i)}),i.length>0&&U(`p`,{class:`small`,style:{margin:`6px 0 0`},children:n.t(`Не дожили до пяти лет: ${i.filter(e=>e.death<5).length} из ${i.length}. Видели море: ${i.filter(e=>e.sawSea).length}. Умели читать: ${i.filter(e=>e.lit).length}.`,`Died before five: ${i.filter(e=>e.death<5).length} of ${i.length}. Saw the sea: ${i.filter(e=>e.sawSea).length}. Could read: ${i.filter(e=>e.lit).length}.`)}),U($,{h:18}),U(`h2`,{class:`heading`,children:n.t(`Встречи · ${x.length} из ${b.length}`,`Encounters · ${x.length} of ${b.length}`)}),U(`p`,{class:`small`,style:{margin:0},children:n.t(`Те, о ком потом писали книги, — увиденные мимоходом. Остальные ждут в других веках и странах.`,`People later written about, seen in passing. The rest wait in other centuries and lands.`)}),x.map(t=>{let r=v.get(t.id);return U(gr,{head:`${n.x(rn(r))}, ${n.year(r.year)}`,body:y(t),onClick:()=>e(r.id)},t.id)}),U($,{h:18}),U(`h2`,{class:`heading`,children:n.t(`Летопись · ${v.size} из ${_.length}`,`Chronicle · ${v.size} of ${_.length}`)}),U(`p`,{class:`small`,style:{margin:0},children:n.t(`Настоящие события, которые застали твои жизни.`,`Real events your lives have lived through.`)}),U($,{h:6}),F.map(e=>{let t=_.filter(t=>Fe(t.mid).i===e.i);return t.length===0?null:U(`div`,{style:{display:`flex`,alignItems:`center`,padding:`3px 0`},children:[U(`span`,{class:`dot`,style:{width:`8px`,height:`8px`,background:e.color}}),U(`span`,{class:`small`,style:{color:`var(--ink)`,marginLeft:`6px`,flex:1},children:n.x(e.name)}),U(`span`,{class:`small`,children:`${t.filter(e=>v.has(e.id)).length} / ${t.length}`})]},e.i)}),(l?S:S.slice(0,6)).map(t=>{let r=v.get(t.id);return U(gr,{head:n.year(t.from)+(t.to===t.from?``:` – `+n.year(t.to))+` · `+n.x(rn(r)),body:y(t),onClick:()=>e(r.id)},t.id)}),S.length>6&&U(`button`,{type:`button`,class:`more`,onClick:()=>u(!l),children:l?n.t(`Свернуть`,`Show less`):n.t(`Вся летопись (${S.length})`,`The whole chronicle (${S.length})`)}),U($,{h:18}),U(`h2`,{class:`heading`,children:n.t(`Тетрадка`,`Notebook`)}),U(`p`,{class:`small`,style:{margin:0},children:n.t(`Ответы на вопросы, которые жизни задали тебе.`,`Your answers to the questions the lives asked you.`)}),C.length===0&&U(`p`,{class:`italic`,style:{margin:`10px 0`},children:n.t(`Пока пусто.`,`Nothing yet.`)}),C.map(t=>U(gr,{head:`${n.x(on(t))} — ${n.x(rn(t))}, ${n.year(t.year)}`,body:t.answer,onClick:()=>e(t.id)},t.id)),U($,{h:24})]})]})}function gr({head:e,body:t,onClick:n}){return U(`button`,{type:`button`,class:`note`,onClick:n,children:[U(`div`,{class:`small italic`,children:e}),U(`div`,{class:`write`,children:t}),U(lr,{})]})}var _r=class{ru;constructor(e){this.ru=e}t(e,t){return this.ru?e:t}x(e){return e.of(this.ru)}n(e,t,n,r,i,a){return this.ru?`${e} ${xt(e,t,n,r)}`:`${e} ${e===1?i:a}`}year(e){return this.x(vt(e))}pct(e){let t=e*100,n;if(t>=10)n=t.toFixed(0);else if(t>=1)n=t.toFixed(1);else if(t>=.01)n=t.toFixed(2);else return this.t(`<0,01%`,`<0.01%`);return(this.ru?n.replace(`.`,`,`):n)+`%`}people(e){let t=e*117;if(t>=1){let e=t.toFixed(1);return this.ru?`${e.replace(`.`,`,`)} млрд`:`${e} billion`}let n=Math.max(Math.trunc(t*1e3),1);return this.ru?`${n} млн`:`${n} million`}tag(e){return{year:this.year(e.year),place:this.x(e.region.name),family:this.t(`в семье ${e.estate.of.ru}`,`born to ${e.estate.of.en}`),sex:e.sex===`M`?this.t(`мальчик`,`a boy`):this.t(`девочка`,`a girl`)}}born(e){let t=bt(e.year);return this.x(new O(`{Родился|Родилась} ${yt(t.ru)} ${e.region.name.ru}, в семье ${e.estate.of.ru}.`,`Born ${yt(t.en)} ${e.region.name.en}, to ${e.estate.of.en}.`).g(e.sex))}gen(e){return this.ru?`${e}-е поколение рода`:`generation ${e} of the line`}lived(e){return e<1?this.t(`меньше года`,`under a year`):this.n(e,`год`,`года`,`лет`,`year`,`years`)}},vr=e=>e.charAt(0).toUpperCase()+e.slice(1);function yr({onDraw:e,onArchive:t,scroller:n}){let{s:r,w:i,repo:a}=X(),o=r.page,s=r.cur,[c,l]=H(o?.entries.length??0),u=s?.seed;En(()=>{l(r.page?.entries.length??0)},[u]),En(()=>{let e=n();e&&requestAnimationFrame(()=>e.scrollTo({top:e.scrollHeight,behavior:`smooth`}))},[o?.entries.length,o?.pending,o?.end]);let{auto:d,speed:f}=r.settings,p=o?.canTurn===!0,m=o?.entries.length??0,[h,g]=H(0);if(En(()=>{let e=()=>{document.hidden||g(e=>e+1)};return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]),En(()=>{if(!d||!p||!o)return;let e=o.entries.slice(Math.min(c,m)),t=e.reduce((e,t)=>e+br(t,i)+150,0),n=e.length>0?xr+e.reduce((e,t)=>e+i.x(t.text).length,0)*Sr:300,r=window.setTimeout(()=>{document.hidden||(l(m),a.turn())},(t+n)/f);return()=>clearTimeout(r)},[d,f,p,m,o?.shown,c,h]),o==null||s==null)return U(`div`,{class:`col`,children:[U(ur,{title:i.t(`Книга`,`The book`)}),U(`p`,{class:`italic center`,style:{padding:`40px 30px`},children:i.t(`Книга пуста. Сначала вытяни жребий.`,`The book is empty. Draw a lot first.`)}),U(`div`,{class:`pad`,children:U(Z,{onClick:()=>e(null),children:i.t(`К мешку`,`To the sack`)})})]});let _=s.lifeId==null?void 0:r.byId.get(s.lifeId),v=_?.gen??(o.birth.heir?.gen??0)+1,b=o.birth;return U(`div`,{class:`col`,style:{display:`flex`,flexDirection:`column`,minHeight:`100%`},children:[U(ur,{title:i.t(`Книга`,`The book`),end:r.lives.length>0?U(Q,{on:!1,onClick:t,children:i.t(`Все книги`,`All books`)}):void 0}),U(Tr,{name:b.name,year:b.year,endAge:o.end?.age??null,place:b.region.name,gen:v,witness:s.witness,entries:o.entries,w:i,dry:c,speed:f}),o.pending&&U(Er,{ch:o.pending,w:i,onPick:e=>{l(o.entries.length),a.pick(e)}}),o.end&&U(y,{children:[_&&U(Dr,{row:_}),U(`div`,{class:`pad`,children:[_&&At(_.year,_.kids)&&U(y,{children:[U($,{h:4}),U(Z,{onClick:()=>e(_.id),children:i.t(`Тянуть жребий правнука`,`Draw a great-grandchild's lot`)})]}),U($,{h:8}),U(Z,{kind:_&&At(_.year,_.kids)?`ghost`:`ink`,onClick:()=>e(null),children:i.t(`Новый жребий`,`A new lot`)})]})]}),U(`div`,{style:{flex:1,minHeight:`12px`}}),o.end==null&&U(wr,{age:o.entries[o.entries.length-1]?.age??0,canTurn:o.canTurn,onTurn:()=>{l(o.entries.length),a.turn()}})]})}var br=(e,t)=>900+t.x(e.text).length*12,xr=1400,Sr=18,Cr=[1,2,4,8];function wr({age:e,canTurn:t,onTurn:n}){let{s:r,w:i,repo:a}=X(),{auto:o,speed:s}=r.settings,c=e=>a.settings(t=>({...t,...e}));return U(`div`,{class:`player`,children:[U(`div`,{class:`player-age`,children:[U(`span`,{class:`label`,children:i.t(`Возраст`,`Age`)}),U(`span`,{class:`player-n`,children:e}),U(`span`,{class:`player-track`,children:U(`span`,{style:{width:`${Math.min(e,100)}%`}})}),U(`span`,{class:`small`,children:t?o?i.t(`книга читается`,`reading`):i.t(`на паузе`,`paused`):i.t(`ждёт выбора`,`waiting for you`)})]}),U(`div`,{class:`player-row`,children:[U(`button`,{type:`button`,class:`pbtn play`,"aria-pressed":o,onClick:()=>c({auto:!o}),children:o?U(y,{children:[`❚❚ `,i.t(`Пауза`,`Pause`)]}):U(y,{children:[`▶ `,i.t(`Читать`,`Play`)]})}),U(`div`,{class:`speeds`,role:`group`,"aria-label":i.t(`Скорость`,`Speed`),children:Cr.map(e=>U(`button`,{type:`button`,class:`pbtn ${s===e?`on`:``}`,"aria-pressed":s===e,onClick:()=>c({speed:e,auto:!0}),children:[e,`×`]},e))}),U(`button`,{type:`button`,class:`pbtn next`,disabled:!t,onClick:n,children:[i.t(`Дальше`,`Next`),` »`]})]})]})}function Tr({name:e,year:t,endAge:n,place:r,gen:i,witness:a,entries:o,w:s,dry:c=1/0,speed:l=1}){let u=0;return U(`div`,{class:`register`,children:[U(`div`,{class:`register-head`,children:[U(`h2`,{class:`heading`,children:s.x(e)}),U(`div`,{class:`small`,children:[s.year(t)+(n==null?``:` – `+s.year(t+n)),s.x(r),i>1?s.gen(i):null,a?s.t(`свидетель`,`witness`):null].filter(Boolean).join(` · `)})]}),U(lr,{dark:!0}),o.map((e,t)=>{let n=t>=c,r=br(e,s)/l,i=n?{"--ms":`${r}ms`,"--wait":`${u}ms`}:void 0;n&&(u+=r+150/l);let a=e.mark===`HIST`||e.mark===`MEET`?`hist`:e.mark===`DEATH`?`death`:``;return U(`div`,{class:`entry ${e.mark===`DEATH`?`death-rule`:``}`,children:[U(`div`,{class:`entry-age ${n?`ink`:``}`,style:i,children:e.age}),U(`div`,{class:`entry-text entry-lines ${a} ${n?`ink`:``}`,style:i,children:(e.mark===`MEET`?`✦ `:``)+s.x(e.text)})]},t)})]})}function Er({ch:e,w:t,onPick:n}){let[r,i]=H(!1),[a,o]=H(!1),s=On(0);return En(()=>(i(!1),o(!1),s.current=window.setTimeout(()=>o(!0),700),()=>clearTimeout(s.current)),[e]),U(`div`,{class:`choice appear`,children:[U(`h3`,{class:`heading`,children:t.x(e.q)}),e.doors.map((e,o)=>U(`button`,{type:`button`,class:`door ${e.open?``:`shut`}`,disabled:!e.open||r,onClick:()=>{a&&!r&&(i(!0),n(o))},children:[U(`div`,{class:`door-text`,children:t.x(e.text)}),e.why&&U(`div`,{class:`door-why`,children:t.x(e.why)})]},o))]})}function Dr({row:e,onThing:t}){let{s:n,w:r,repo:i,toast:a}=X(),o=n.thing(e.thingId),s=n.holders(e.thingId),[c,l]=H(e.answer);En(()=>l(e.answer),[e.id]);let u=s.findIndex(t=>t.id===e.id)+1;return U(`div`,{class:`endcard`,children:[U(cr,{children:r.t(`Эпитафия`,`Epitaph`)}),U(`div`,{class:`epitaph`,children:r.x(an(e))}),o&&U(y,{children:[U(lr,{}),U(`button`,{type:`button`,class:`thing-row`,style:{cursor:t?`pointer`:`default`},onClick:()=>t?.(o.id),children:[U(nr,{shape:ht(o.key).shape,size:56}),U(`div`,{class:`meta`,children:[U(cr,{children:r.t(`В сундук`,`To the chest`)}),U(`div`,{class:`bold`,children:vr(r.x(ht(o.key).name))}),U(`div`,{class:`small`,children:u<=1?r.t(`первый владелец`,`first holder`):r.t(`${u}-й владелец: вещь перешла по наследству`,`holder no. ${u}: handed down`)})]})]})]}),U(lr,{}),U(`div`,{style:{textAlign:`left`},children:[U(cr,{children:r.t(`Вопрос тебе`,`A question for you`)}),U(`p`,{class:`italic`,style:{color:`var(--ink)`,margin:`6px 0 8px`},children:r.x(on(e))}),U(`textarea`,{class:`field`,rows:2,maxLength:400,value:c,placeholder:r.t(`Можно не отвечать…`,`You don't have to answer…`),onInput:e=>l(e.target.value)}),c.trim()!==e.answer&&U(y,{children:[U($,{h:8}),U(Z,{kind:`soft`,onClick:()=>{i.answer(e.id,c),a(r.t(`Записано. Тетрадка — в атласе.`,`Written down. The notebook is in the atlas.`))},children:r.t(`Записать в тетрадку`,`Write it in the notebook`)})]})]})]})}function Or({onLife:e,onClose:t}){let{s:n,w:r}=X();return U(dr,{title:r.t(`Все книги`,`All books`),onClose:t,closeLabel:r.t(`Закрыть`,`Close`),children:[U(`p`,{class:`small`,style:{margin:`0 0 8px`},children:r.t(`Каждую можно перечитать: жизнь записана целиком.`,`Each can be read again: the whole life is kept.`)}),[...n.lives].reverse().map(t=>U(`div`,{style:{marginBottom:`8px`},children:U(sr,{onClick:()=>e(t.id),children:[U(`div`,{class:`bold`,children:r.x(rn(t))}),U(`div`,{class:`small`,children:`${r.year(t.year)} – ${r.year(t.year+t.death)} · ${r.x(Me(t.region,t.eraI).name)}`+(t.gen>1?` · ${r.gen(t.gen)}`:``)}),U(`div`,{class:`write sm`,style:{marginTop:`4px`},children:r.x(an(t))})]})},t.id))]})}function kr({id:e,onThing:t,onClose:n}){let{s:r,w:i,repo:a}=X(),o=r.byId.get(e);return o?U(dr,{title:i.t(`Книга`,`The book`),onClose:n,closeLabel:i.t(`Закрыть`,`Close`),children:[U(`div`,{style:{margin:`0 -12px`},children:[U(Tr,{name:rn(o),year:o.year,endAge:o.death,place:Me(o.region,o.eraI).name,gen:o.gen,witness:o.witness,entries:a.book(o),w:i}),U(Dr,{row:o,onThing:t})]}),U($,{h:16})]}):null}function Ar({onThing:e}){let{s:t,w:n}=X(),r=[...t.things].reverse(),i=r.filter(e=>t.holders(e.id).length>1).length;return U(`div`,{class:`col`,children:[U(ur,{title:n.t(`Сундук`,`The chest`),sub:n.t(`Каждая жизнь оставляет одну вещь. Если тянуть правнуков, вещь переходит по наследству.`,`Each life leaves one thing behind. Draw great-grandchildren and the thing is handed down.`)}),r.length===0?U(`p`,{class:`italic center`,style:{padding:`40px`},children:n.t(`Сундук пуст.`,`The chest is empty.`)}):U(`div`,{class:`grid3`,children:[i>0&&U(`div`,{class:`span small`,children:n.t(`Переходили по наследству: ${i}`,`Handed down: ${i}`)}),r.map(r=>{let i=ht(r.key),a=t.holders(r.id);return U(`button`,{type:`button`,class:`cell ${a.length>1?`handed`:``}`,onClick:()=>e(r.id),children:[U(nr,{shape:i.shape,size:54}),U(`div`,{class:`cell-name`,children:vr(n.x(i.name))}),U(`div`,{class:`cell-sub`,children:a.length>1?n.n(a.length,`поколение`,`поколения`,`поколений`,`generation`,`generations`):a[0]?n.year(a[0].year):``})]},r.id)})]})]})}function jr({id:e,onLife:t,onClose:n}){let{s:r,w:i}=X(),a=r.thing(e);if(!a)return null;let o=ht(a.key),s=r.holders(e);return U(dr,{title:vr(i.x(o.name)),onClose:n,closeLabel:i.t(`Закрыть`,`Close`),children:[U(`div`,{style:{display:`flex`,justifyContent:`center`},children:U(nr,{shape:o.shape,size:110})}),U(`p`,{class:`italic center`,style:{margin:`8px 0`},children:s.length>1?i.t(`Переходила из рук в руки: ${i.n(s.length,`поколение`,`поколения`,`поколений`,``,``)}.`,`Passed from hand to hand: ${s.length} generations.`):i.t(`Одна жизнь.`,`One life.`)}),s.map((e,n)=>U(`div`,{style:{marginBottom:`8px`},children:U(sr,{onClick:()=>t(e.id),children:U(`div`,{style:{display:`flex`},children:[U(`div`,{class:`entry-age`,style:{width:`28px`,textAlign:`left`,margin:0},children:n+1}),U(`div`,{style:{flex:1},children:[U(`div`,{class:`bold`,children:i.x(rn(e))}),U(`div`,{class:`small`,children:`${i.year(e.year)} – ${i.year(e.year+e.death)} · ${i.x(Me(e.region,e.eraI).name)}`}),U(`div`,{class:`write sm`,style:{marginTop:`4px`},children:i.x(an(e))})]})]})})},e.id))]})}var Mr=e=>1-(1-e)**3;function Nr(e,t,n){let[r,i]=H(0),[a,o]=H(+!!e),[s,c]=H(e!=null),l=On(0);return En(()=>{if(cancelAnimationFrame(l.current),!e||!t){i(0),o(+!!e),c(e!=null);return}c(!1),o(0);let r=(n?[]:[-6,5,-4,3,-1.5,0]).map((e,t)=>({a:e,ms:t===0?120:140})),a=r.reduce((e,t)=>e+t.ms,0),s=performance.now(),u=e=>{let t=e-s;if(t<a){let e=0,n=0;for(let a of r){if(t<e+a.ms){i(n+(a.a-n)*Mr((t-e)/a.ms));break}e+=a.ms,n=a.a}}else{i(0),t-a<20&&pr(30);let e=Math.min((t-a)/1100,1);if(o(Mr(e)),e>=1){c(!0);return}}l.current=requestAnimationFrame(u)};return l.current=requestAnimationFrame(u),()=>cancelAnimationFrame(l.current)},[e]),{shake:r,rise:a,shown:s}}function Pr({onDraw:e,onBook:t,onSettings:n}){let{s:r,w:i,repo:a}=X(),o=r.cur,s=r.page,{shake:c,rise:l,shown:u}=Nr(o?`${o.seed}:${o.drawnAt}`:null,o!=null&&Date.now()-o.drawnAt<4e3,o?.heirOf!=null),[d,f]=H(!1),p=s?.birth,m=p?i.tag(p):null,h=s?.end!=null,g=o?.lifeId==null?void 0:r.byId.get(o.lifeId),_=g!=null&&At(g.year,g.kids),v=r.settings.witness,b=e=>a.settings(t=>({...t,witness:e}));return U(`div`,{class:`col`,children:[U(ur,{title:i.t(`Жребий`,`Lot`),sub:i.t(`Ты — один из ста семнадцати миллиардов людей, когда-либо живших на Земле. Кем именно — решит жребий.`,`You are one of the 117 billion people who have ever lived. Which one, the lot decides.`),end:U(`button`,{type:`button`,class:`icon-btn`,"aria-label":i.t(`Настройки`,`Settings`),onClick:n,children:U(Fr,{})})}),U(`div`,{style:{padding:`0 24px`},children:U(Kn,{shake:c,rise:l,tag:m,seed:o?BigInt(o.seed):0n})}),U(`div`,{class:`pad`,children:[s==null||h?U(y,{children:[g!=null&&s!=null&&U(y,{children:[U(Rr,{b:s.birth,w:i,ended:!0}),U($,{h:8})]}),_&&U(y,{children:[U(Z,{onClick:()=>e(g.id),children:i.t(`Тянуть жребий правнука`,`Draw a great-grandchild's lot`)}),U($,{h:8})]}),U(Z,{kind:_?`ghost`:`ink`,onClick:()=>{pr(10),e(null)},children:i.t(`Тянуть жребий`,`Draw a lot`)}),U($,{}),U(Lr,{}),U($,{}),U(`div`,{class:`flow`,children:[U(Q,{on:!v,onClick:()=>b(!1),children:i.t(`жить и выбирать`,`live and choose`)}),U(Q,{on:v,onClick:()=>b(!0),children:i.t(`быть свидетелем`,`be a witness`)})]}),U(`p`,{class:`small`,style:{marginTop:`6px`},children:v?i.t(`Свидетель не выбирает: за него решает судьба. Ты только читаешь.`,`A witness does not choose: fate decides. You only read.`):i.t(`На развилках выбираешь ты — из тех дверей, что открыты для тебя.`,`At each fork you choose, from the doors that are open to you.`)})]}):u&&U(`div`,{style:{animation:`appear .5s ease-out both`},children:[U(Rr,{b:s.birth,w:i,ended:!1}),U($,{}),U(Z,{onClick:t,children:s.entries.length<=2?i.t(`Открыть книгу`,`Open the book`):i.t(`Читать дальше`,`Read on`)}),U($,{h:8}),U(Z,{kind:`ghost`,onClick:()=>f(!0),children:i.t(`Тянуть другой жребий`,`Draw another lot`)}),U($,{}),U(Lr,{})]}),U($,{h:18}),r.lives.length>0&&U(y,{children:[U(lr,{}),U(`p`,{class:`small`,style:{margin:`10px 0`},children:i.t(`Прожито жизней: ${r.lives.length} · лет на всех: ${r.lives.reduce((e,t)=>e+t.death,0)}`,`Lives lived: ${r.lives.length} · years in all: ${r.lives.reduce((e,t)=>e+t.death,0)}`)})]}),U($,{})]}),d&&s&&U(fr,{title:i.t(`Оставить эту жизнь?`,`Leave this life?`),actions:U(y,{children:[U(`button`,{type:`button`,class:`link-btn`,style:{color:`var(--ink)`},onClick:()=>f(!1),children:i.t(`Читать дальше`,`Read on`)}),U(`button`,{type:`button`,class:`link-btn red`,onClick:()=>{f(!1),e(null)},children:i.t(`Тянуть другой`,`Draw another`)})]}),children:i.t(`${i.x(s.birth.name)} останется недочитанной книгой: в архив, атлас и сундук она не попадёт.`,`${i.x(s.birth.name)} will stay an unfinished book: it won't go to the archive, the atlas or the chest.`)})]})}var Fr=()=>U(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.6`,"aria-hidden":`true`,children:[U(`circle`,{cx:`12`,cy:`12`,r:`3`}),U(`path`,{d:`M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z`})]});function Ir(e,t){return[e.eraI==null?null:t.x(F[e.eraI].name),e.area==null?null:Ne(e.area)?t.x(Ne(e.area).name):null,e.sex==null?null:e.sex===`M`?t.t(`мальчик`,`a boy`):t.t(`девочка`,`a girl`)].filter(e=>e!=null)}function Lr(){let{s:e,w:t,repo:n}=X(),r=e.wish,[i,a]=H(!1),o=e=>n.settings(t=>({...t,wish:e(we.decode(t.wish)).encode()})),s=Ir(r,t);return U(y,{children:[U(`button`,{type:`button`,class:`wish-head`,"aria-expanded":i,onClick:()=>a(!i),children:[U(`span`,{class:`bold`,style:{flex:1},children:s.length===0?t.t(`Жребий из всех людей`,`A lot from everyone`):t.t(`Жребий: `,`Lot: `)+s.join(` · `)}),U(`span`,{class:`small red`,children:i?t.t(`свернуть`,`fold`):t.t(`выбрать`,`choose`)})]}),i&&U(y,{children:[U(`p`,{class:`small`,style:{margin:`0 0 6px`},children:t.t(`Можно сузить жребий. Внутри выбранного он тянет по тем же честным весам.`,`You can narrow the lot. Within what you choose it keeps the same fair weights.`)}),U(cr,{style:{margin:`6px 0 4px`},children:t.t(`Эпоха`,`Era`)}),U(`div`,{class:`flow`,children:[U(Q,{on:r.eraI==null,onClick:()=>o(e=>e.copy({eraI:null})),children:t.t(`любая`,`any`)}),F.map(e=>U(Q,{on:r.eraI===e.i,disabled:!Pe(e.i,r.area),onClick:()=>o(t=>t.copy({eraI:e.i})),children:t.x(e.name)},e.i))]}),U(cr,{style:{margin:`10px 0 4px`},children:t.t(`Где`,`Where`)}),U(`div`,{class:`flow`,children:[U(Q,{on:r.area==null,onClick:()=>o(e=>e.copy({area:null})),children:t.t(`где угодно`,`anywhere`)}),Ae.map(e=>U(Q,{on:r.area===e.key,disabled:!Pe(r.eraI,e.key),onClick:()=>o(t=>t.copy({area:e.key})),children:t.x(e.name)},e.key))]}),U(cr,{style:{margin:`10px 0 4px`},children:t.t(`Кем родиться`,`Born as`)}),U(`div`,{class:`flow`,children:[U(Q,{on:r.sex==null,onClick:()=>o(e=>e.copy({sex:null})),children:t.t(`как выпадет`,`as it falls`)}),U(Q,{on:r.sex===`M`,onClick:()=>o(e=>e.copy({sex:`M`})),children:t.t(`мальчиком`,`a boy`)}),U(Q,{on:r.sex===`F`,onClick:()=>o(e=>e.copy({sex:`F`})),children:t.t(`девочкой`,`a girl`)})]}),!r.any&&U(`button`,{type:`button`,class:`more`,style:{fontWeight:400,fontSize:`13px`,padding:`12px 0 4px`},onClick:()=>o(()=>new we),children:t.t(`Сбросить`,`Clear`)})]})]})}function Rr({b:e,w:t,ended:n}){let{s:r}=X(),i=r.cur?we.decode(r.cur.wish):new we,a=r.lives.filter(t=>t.eraI===e.era.i).length;return U(sr,{children:[U(cr,{children:`${t.x(e.era.name)} · ${t.x(e.era.span)}`}),U(`div`,{class:`title`,style:{marginTop:`4px`},children:t.x(e.name)}),U(`p`,{style:{margin:`4px 0 0`},children:t.born(e)}),!i.any&&e.heir==null&&U(`p`,{class:`italic`,style:{margin:`4px 0 0`},children:t.t(`Жребий из выбранного: `,`A lot from your choice: `)+Ir(i,t).join(` · `)}),e.heir&&U(`p`,{class:`italic`,style:{margin:`4px 0 0`},children:t.t(`Жребий правнука: ${e.heir.name.ru}, ${t.gen(e.heir.gen+1)}.`,`A great-grandchild's lot: ${e.heir.name.en}, ${t.gen(e.heir.gen+1)}.`)}),n?r.page?.end&&U(`p`,{class:`bold`,style:{margin:`6px 0 0`},children:t.t(`Прожито: ${t.lived(r.page.end.age)}.`,`Lived: ${t.lived(r.page.end.age)}.`)}):U(y,{children:[U(`div`,{class:`odds`,children:[U(zr,{value:t.pct(e.share),label:t.t(`всех живших — такие, как ты`,`of everyone who ever lived were like you`)}),U(zr,{value:t.people(e.share),label:t.t(`родились в такой же доле`,`were born to the same lot`)}),U(zr,{value:t.pct(e.survive5),label:t.t(`детей здесь доживают до пяти`,`of children here live to five`)}),U(zr,{value:t.pct(e.literacy),label:t.t(`вокруг умеют читать`,`of the people around can read`)})]}),a>0&&U(`p`,{class:`small`,style:{margin:`10px 0 0`},children:t.t(`В эту эпоху ты рождаешься уже не впервые: до этого ${t.n(a,`раз`,`раза`,`раз`,``,``)}.`,`You have been born in this era ${a===1?`once`:`${a} times`} before.`)})]})]})}var zr=({value:e,label:t})=>U(`div`,{class:`odd`,children:[U(lr,{}),U(`div`,{class:`big`,children:e}),U(`div`,{class:`small`,children:t})]}),Br=`https://t.me/ArcaneWhisperBot?start=`,Vr=[[`🐞`,`Сообщить о баге`,`Report a bug`,`что сломалось и как повторить`,`what broke and how to repeat it`,`${Br}bug_lot`],[`💡`,`Предложить идею`,`Suggest an idea`,`функция, событие, вещь`,`a feature, an event, a thing`,`${Br}wish_lot`],[`🔔`,`Подписаться на обновления`,`Follow updates`,`бот напишет, когда выйдет версия`,`the bot writes when a version is out`,`${Br}f_lot`],[`💬`,`Чат StillCraft`,`StillCraft chat`,`все приложения и люди`,`all the apps and people`,`https://t.me/+Q4gFEDk8O842OGVi`]];function Hr({onClose:e}){let{s:t,w:n,repo:r,toast:i}=X(),a=t.settings,o=On(null),s=e=>r.settings(t=>({...t,...e})),c=()=>{let e=new Blob([r.exportJson()],{type:`application/json`}),t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=`lot-${new Date().toISOString().slice(0,10)}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3)},l=async e=>{try{r.importJson(await e.text()),i(n.t(`Архив загружен.`,`The archive is loaded.`))}catch{i(n.t(`Это не архив «Жребия».`,`That is not a Lot archive.`))}};return U(dr,{title:n.t(`Настройки`,`Settings`),onClose:e,closeLabel:n.t(`Закрыть`,`Close`),children:[U(sr,{children:[U(`h3`,{class:`heading`,children:n.t(`Язык`,`Language`)}),U(`div`,{class:`flow`,style:{marginTop:`8px`},children:[U(Q,{on:n.ru,onClick:()=>s({lang:`ru`}),children:`Русский`}),U(Q,{on:!n.ru,onClick:()=>s({lang:`en`}),children:`English`})]})]}),U($,{}),U(sr,{children:[U(`h3`,{class:`heading`,children:n.t(`Как жить`,`How to live`)}),U(`p`,{class:`small`,style:{margin:0},children:n.t(`Можно выбирать на развилках самому, а можно быть свидетелем: тогда за тебя решает судьба, и ты только читаешь книгу.`,`You can choose at each fork yourself, or be a witness: then fate decides, and you only read the book.`)}),U(`div`,{class:`flow`,style:{marginTop:`8px`},children:[U(Q,{on:!a.witness,onClick:()=>s({witness:!1}),children:n.t(`жить и выбирать`,`live and choose`)}),U(Q,{on:a.witness,onClick:()=>s({witness:!0}),children:n.t(`быть свидетелем`,`be a witness`)})]})]}),U($,{}),U(sr,{children:[U(`h3`,{class:`heading`,children:n.t(`Почерк книги`,`The book's hand`)}),U(`div`,{class:`write`,style:{marginTop:`6px`},children:n.t(`Родилась в семье пахаря. Видела море.`,`Born to a ploughman's family. Saw the sea.`)}),U(`div`,{class:`flow`,style:{marginTop:`8px`},children:[U(Q,{on:a.hand,onClick:()=>s({hand:!0}),children:n.t(`рукописный`,`handwritten`)}),U(Q,{on:!a.hand,onClick:()=>s({hand:!1}),children:n.t(`печатный`,`printed`)})]})]}),U($,{}),U(sr,{children:[U(`h3`,{class:`heading`,children:n.t(`Архив`,`Archive`)}),U(`p`,{class:`small`,style:{margin:`0 0 8px`},children:n.t(`Жизни хранятся только в этом браузере. Safari на айфоне может стереть их, если сайт долго не открывать, — надёжнее добавить «Жребий» на экран «Домой» и иногда сохранять архив в файл.`,`Lives are kept only in this browser. Safari on an iPhone may wipe them if the site goes unopened for a while: adding Lot to the Home Screen and saving the archive to a file now and then is safer.`)}),U(Z,{kind:`soft`,onClick:c,children:n.t(`Сохранить архив в файл`,`Save the archive to a file`)}),U($,{h:8}),U(Z,{kind:`ghost`,onClick:()=>o.current?.click(),children:n.t(`Загрузить архив из файла`,`Load an archive from a file`)}),U(`input`,{ref:o,type:`file`,accept:`application/json,.json`,style:{display:`none`},onChange:e=>{let t=e.target.files?.[0];t&&l(t),e.target.value=``}})]}),U($,{}),U(sr,{children:[U(`h3`,{class:`heading`,children:n.t(`Сообщество`,`Community`)}),U(`p`,{class:`small`,style:{margin:`0 0 4px`},children:n.t(`Приложение делается вместе с теми, кто им пользуется. Всё идёт через бота StillCraft в Telegram.`,`The app is made together with the people who use it. It all goes through the StillCraft bot on Telegram.`)}),U(`div`,{class:`community`,children:Vr.map(([e,t,r,i,a,o])=>U(`a`,{href:o,target:`_blank`,rel:`noopener`,children:[U(`span`,{class:`ico`,children:e}),U(`span`,{style:{flex:1},children:[U(`div`,{class:`bold`,children:n.t(t,r)}),U(`div`,{class:`small`,children:n.t(i,a)})]}),U(`span`,{class:`chev`,children:`›`})]},o))})]}),U($,{}),U(sr,{children:[U(`h3`,{class:`heading`,children:n.t(`О «Жребии»`,`About Lot`)}),U(`p`,{class:`small`,style:{margin:0},children:n.t(`Мешок тянет по-честному: из 117 миллиардов когда-либо родившихся людей, по оценке Population Reference Bureau, с весами эпох, мест и сословий. Поэтому чаще всего ты — крестьянин до 1800 года. ${r.content.lines.length} строк быта и ${r.content.hist.length} настоящих событий. Без рекламы, без аккаунта, работает без интернета.`,`The sack draws fairly: from the 117 billion people ever born, by the Population Reference Bureau's estimate, weighted by era, place and station. That is why you are most often a peasant before 1800. ${r.content.lines.length} everyday lines and ${r.content.hist.length} real events. No ads, no account, works offline.`)}),U(`a`,{class:`small red`,style:{display:`block`,marginTop:`8px`},href:`https://github.com/bigdevwhale/lot`,target:`_blank`,rel:`noopener`,children:n.t(`Веб-версия 1.2.3 · по приложению Lot (MIT) · шрифты PT Serif и Marck Script (OFL) · исходники на GitHub`,`Web version 1.2.3 · after the Lot app (MIT) · PT Serif and Marck Script fonts (OFL) · source on GitHub`)})]}),U($,{h:20})]})}var Ur=()=>(navigator.languages?.[0]??navigator.language??``).toLowerCase().startsWith(`ru`);function Wr({repo:e}){let[t,n]=H(e.state);En(()=>e.subscribe(n),[e]);let r=t.settings.lang?t.settings.lang===`ru`:Ur(),i=new _r(r);En(()=>{document.documentElement.lang=r?`ru`:`en`,document.title=r?`Жребий`:`Lot`},[r]);let[a,o]=H(null),s=On(0),c={s:t,w:i,repo:e,toast:An(e=>{o(e),clearTimeout(s.current),s.current=window.setTimeout(()=>o(null),3e3)},[])},[l,u]=H(t.page&&t.page.end==null?`book`:`draw`),[d,f]=H([]),p=e=>f(t=>[...t,e]),m=An(()=>f(e=>e.slice(0,-1)),[]),h=On(null),g=e=>{u(e),h.current?.scrollTo({top:0})},_=n=>{g(`draw`),e.draw(t.settings.witness,n,t.wish)};if(!t.settings.onboarded)return U(or.Provider,{value:c,children:U(Gr,{})});let v=d[d.length-1];return U(or.Provider,{value:c,children:U(`div`,{class:`shell paper ${t.settings.hand?`hand`:`print`}`,children:[U(`div`,{class:`screen`,ref:h,children:[l===`draw`&&U(Pr,{onDraw:_,onBook:()=>g(`book`),onSettings:()=>p({k:`settings`})}),l===`book`&&U(yr,{onDraw:_,onArchive:()=>p({k:`archive`}),scroller:()=>h.current}),l===`chest`&&U(Ar,{onThing:e=>p({k:`thing`,id:e})}),l===`atlas`&&U(hr,{onLife:e=>p({k:`read`,id:e})})]}),U(`nav`,{class:`tabbar`,children:U(`div`,{class:`tabbar-in`,children:[[`draw`,`Жребий`,`Lot`],[`book`,`Книга`,`Book`],[`chest`,`Сундук`,`Chest`],[`atlas`,`Атлас`,`Atlas`]].map(([e,t,n])=>U(`button`,{type:`button`,class:`tab ${l===e?`on`:``}`,"aria-current":l===e?`page`:void 0,onClick:()=>g(e),children:i.t(t,n)},e))})}),v?.k===`settings`&&U(Hr,{onClose:m}),v?.k===`archive`&&U(Or,{onLife:e=>p({k:`read`,id:e}),onClose:m}),v?.k===`read`&&U(kr,{id:v.id,onThing:e=>p({k:`thing`,id:e}),onClose:m}),v?.k===`thing`&&U(jr,{id:v.id,onLife:e=>p({k:`read`,id:e}),onClose:m}),a&&U(`div`,{class:`toast`,role:`status`,onClick:()=>o(null),children:a})]})})}function Gr(){let[e,t]=H(0),{w:n,repo:r}=X();return U(`div`,{class:`shell paper`,children:U(`div`,{class:`screen`,children:U(`div`,{class:`col`,style:{padding:`18px 22px`},children:e===0?U(y,{children:[U(Kn,{shake:0,rise:1,seed:3n,height:280,tag:{year:n.t(`ок. 1350`,`c. 1350`),place:n.t(`Китай`,`China`),family:n.t(`в семье крестьян`,`born to peasants`),sex:n.t(`девочка`,`a girl`)}}),U($,{}),U(`h1`,{class:`title`,children:n.t(`Один из ста семнадцати миллиардов`,`One of 117 billion`)}),U($,{h:8}),U(`p`,{children:n.t(`Столько людей, по оценкам, родилось на Земле за всю её историю. Мешок вытягивает тебе одного из них — честно, с весами эпох, мест и сословий.`,`That is roughly how many people have ever been born. The sack draws you one of them, fairly, weighted by era, place and station.`)}),U(`p`,{children:n.t(`Поэтому чаще всего ты родишься крестьянином задолго до 1800 года. Почти половина не доживёт до пяти. Дожить до старости — уже удача.`,`So most often you are born a peasant long before 1800. Nearly half do not live to five. Reaching old age is luck already.`)}),U($,{h:12}),U(Z,{onClick:()=>t(1),children:n.t(`Дальше`,`Next`)}),U($,{h:10}),U(`div`,{class:`flow`,style:{justifyContent:`center`},children:U(`button`,{type:`button`,class:`link-btn small`,style:{fontWeight:400},onClick:()=>r.settings(e=>({...e,lang:n.ru?`en`:`ru`})),children:n.ru?`English`:`Русский`})})]}):U(y,{children:[U(`h1`,{class:`title`,children:n.t(`Как читается жизнь`,`How a life is read`)}),U($,{h:14}),[[n.t(`Книга`,`The book`),n.t(`Жизнь записывается в метрическую книгу. Каждое «дальше» — несколько лет: детство, работа, свадьба, беды, старость. Настоящая история приходит сбоку — слухами, ценой хлеба, войском у околицы.`,`A life is written into a parish register. Each page turned is a few years: childhood, work, marriage, hard times, old age. Real history arrives from the side: as rumours, the price of bread, an army at the edge of the village.`)],[n.t(`Двери`,`Doors`),n.t(`На развилках видны все двери, но часть закрыта — и написано почему. «Девочек грамоте не учат». «Ты не свободен уйти». Неравенство без нотаций.`,`At each fork every door is shown, but some are shut, and it says why. "Girls are not taught their letters." "You are not free to leave." Inequality, without a lecture.`)],[n.t(`Сундук и правнуки`,`The chest and the great-grandchildren`),n.t(`Каждая жизнь оставляет вещь. Можно вытянуть жребий правнука: он унаследует фамилию, место, достаток — и ту же вещь, на которой копятся поколения.`,`Each life leaves a thing. You can draw a great-grandchild's lot: they inherit the name, the place, the family's means, and the same thing, gathering generations.`)],[n.t(`Вопрос тебе`,`A question for you`),n.t(`В конце жизнь задаёт один тихий вопрос — про тебя сегодняшнего. Ответы складываются в тетрадку в атласе.`,`At the end a life asks one quiet question, about you today. The answers gather in a notebook in the atlas.`)]].map(([e,t])=>U(`div`,{children:[U(`h2`,{class:`heading`,children:e}),U(`p`,{style:{margin:`2px 0 12px`},children:t})]},e)),U($,{}),U(Z,{onClick:()=>r.settings(e=>({...e,onboarded:!0})),children:n.t(`К мешку`,`To the sack`)})]})})})})}var Kr=new un(rt);$t().then(e=>{Kr.load(e),fe(U(Wr,{repo:Kr}),document.getElementById(`app`)),e.lives.length>0&&nn()}),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>navigator.serviceWorker.register(`./sw.js`).catch(()=>{}));