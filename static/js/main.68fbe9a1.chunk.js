(this["webpackJsonpstar-db"]=this["webpackJsonpstar-db"]||[]).push([[0],{16:function(e,t,n){e.exports={randomPlanet:"styles_randomPlanet__1-ZJf",planetImage:"styles_planetImage__1N10w",listGroup:"styles_listGroup__3MNpZ",listGroupItem:"styles_listGroupItem__us60J",term:"styles_term__2kgKa"}},19:function(e,t,n){e.exports={itemDetails:"styles_itemDetails__3Mj5W",itemImage:"styles_itemImage__1x1g0",listGroupItem:"styles_listGroupItem__2R3sq",term:"styles_term__35Y79"}},20:function(e,t,n){e.exports={footer:"styles_footer__2jx7K"}},21:function(e,t,n){e.exports={stardbApp:"styles_stardbApp__2jmbb",row:"styles_row__3jFb8",wrapper:"styles_wrapper__1qwWj",buttonRow:"styles_buttonRow__2Im3w",section:"styles_section__TFVvm"}},24:function(e,t,n){e.exports={header:"styles_header__2dQfB"}},27:function(e,t,n){e.exports={"ldio-5o394nxvkx":"styles_ldio-5o394nxvkx__1eIzJ","loadingio-spinner-double-ring-t6a3499aof":"styles_loadingio-spinner-double-ring-t6a3499aof__3bU9F"}},28:function(e,t,n){e.exports={errorIndicator:"styles_errorIndicator__13ay5",boom:"styles_boom__19NgW"}},29:function(e,t,n){e.exports={itemList:"styles_itemList__wwPct",listGroupItem:"styles_listGroupItem__2RRAQ"}},32:function(e,t,n){e.exports={wrapper:"styles_wrapper__3SpfV"}},34:function(e,t,n){e.exports={errorButton:"styles_errorButton__IDoDy"}},46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(31),i=n.n(c),o=n(6),l=n(9),u=n(11),p=n(10),j=n(12),d=n(3),h=n(4),b=n.n(h),m=n(32),f=n.n(m),g=function(e){var t=e.children,n=e.className;return Object(r.jsx)("div",{className:b()(f.a.wrapper,n),children:t})},O=n(24),x=n.n(O),v=function(){return Object(r.jsx)("div",{className:b()(x.a.header),children:Object(r.jsx)(g,{children:Object(r.jsxs)("div",{className:b()(x.a.contentWrapper,"d-flex"),children:[Object(r.jsx)("h3",{children:Object(r.jsx)(j.b,{to:"/",children:"Star DB"})}),Object(r.jsxs)("ul",{className:"d-flex",children:[Object(r.jsx)("li",{children:Object(r.jsx)(j.b,{to:"/people/",children:"People"})}),Object(r.jsx)("li",{children:Object(r.jsx)(j.b,{to:"/planets/",children:"Planets"})}),Object(r.jsx)("li",{children:Object(r.jsx)(j.b,{to:"/starships/",children:"Starships"})}),Object(r.jsx)("li",{children:Object(r.jsx)(j.b,{to:"/login",children:"Login"})}),Object(r.jsx)("li",{children:Object(r.jsx)(j.b,{to:"/secret",children:"Secret"})})]})]})})})},A=n(20),N=n.n(A),U=function(e){var t=e.onServiceChange;return Object(r.jsx)("div",{className:b()(N.a.footer),children:Object(r.jsx)(g,{className:N.a.wrapper,children:Object(r.jsx)("div",{className:b()(N.a.contentWrapper,"d-flex","justify-content-end"),children:Object(r.jsx)("button",{className:"btn btn-primary btn-sm",onClick:t,children:"Change Service"})})})})},E=n(16),S=n.n(E),y=n(2),_=n.n(y),w=n(8),I=function e(){var t=this;Object(o.a)(this,e),this._apiBase="https://swapi.dev/api",this._imageBase="https://starwars-visualguide.com/assets/img",this.getResource=function(){var e=Object(w.a)(_.a.mark((function e(n){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n,", received ").concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(w.a)(_.a.mark((function e(){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPerson).slice(0,5));case 4:case"end":return e.stop()}}),e)}))),this.getPerson=function(){var e=Object(w.a)(_.a.mark((function e(n){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformPerson(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(w.a)(_.a.mark((function e(){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPlanet).slice(0,5));case 4:case"end":return e.stop()}}),e)}))),this.getPlanet=function(){var e=Object(w.a)(_.a.mark((function e(n){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformPlanet(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllStarships=Object(w.a)(_.a.mark((function e(){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformStarship).slice(0,5));case 4:case"end":return e.stop()}}),e)}))),this.getStarship=function(){var e=Object(w.a)(_.a.mark((function e(n){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformStarship(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPersonImage=function(e){var n=e.id;return"".concat(t._imageBase,"/characters/").concat(n,".jpg")},this.getStarshipImage=function(e){var n=e.id;return"".concat(t._imageBase,"/starships/").concat(n,".jpg")},this.getPlanetImage=function(e){var n=e.id;return"".concat(t._imageBase,"/planets/").concat(n,".jpg")},this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargo_capacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}}},W=n(27),k=n.n(W),P=function(){return Object(r.jsx)("div",{className:k.a["loadingio-spinner-double-ring-t6a3499aof"],children:Object(r.jsxs)("div",{className:k.a["ldio-5o394nxvkx"],children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{})}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{})})]})})},C=n(28),M=n.n(C),T=function(){return Object(r.jsxs)("div",{className:M.a.errorIndicator,children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABcVBMVEUAAACUMUKVNESUNUaTNEWTNEWTNUWUNEWUNEWUNEWTNEWUNEWUNEWVNEWVNESUNUeWMkOUNUWVNEWUNEWTM0aVNUSSN0mVNUaUNEWUNEWUNEWVNESSNESWLUuUNESUNEWUNEafQECUNEaUNUWXNEaUMkaUNEWVNUaVM0SUNEWUM0WdO06UM0SVM0WSNkeVNUCUNEWUNEWVNEaUNESTMUWVMkSXOEiUNEWUNUSVNUSVK0CUNEWVNEWQN0OUNEaVNESUNEWAQED/AACUNEWZM02UNEaTNUaVM0SVNUaUNEaTNESSN0mUNEWUNUaZMzOUNEWVM0WUNEWTNkWUNEWVNEaXLkaUNEWUNEWXOUKUNEWVM0WUNkWSMkeUNEWUNUWUNEWUNEWVNUSUM0aTNUaTMkSUNEaUNESUNEWUNESPMECUNEWUNkOUNEWTNESUNUaTNEWZM0CUNEWVNEaUNUWVNUWSNUSUNEWUNEWTNESUNEUAAAAeSPByAAAAeXRSTlMAH155k63H4fjr07qiiWwrLn7O45pSDh2N3vuvMRGK97AIde4sTOJqeP2pDaTaLxjIwYRPGikg7FZlDNK2F8aoegQB2wpYhzxbko4c9j4Fnn3zNNS7FsuyG/FzUT3+jF3lwm5XR2Lya3AQ+ibqU6WmFNZx6TBESqdASVNu+gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCRwPAQ3scZC+AAACoUlEQVRYw6WX+WPSMBTH6z11OhXva4hnFR0MdBsymGzshLmjKEMZG7svd3jmv7fJo23SJDQl35+S9/I+TV7SHIYh16nTZ86eO3+h6+Kly91XrvYY4XTt+g3EKnLz1m3V6Dt37yGR7j94qBL+6HEvkioaiHgSe4raKvqsbfzzFyhIXS/bxL8yA+NtvX4j635cJdzW23fC+L6E1yTZn0qnU/1JCaH3vSD+Q8T1Dww6xsEBMWGIj898dL3ZYc88nOWjc/mRT1x8Ier6R8dox9goByiKEjDuus0J1jNhqgAmPfcUWFLT0ykoTSkAZkqeu4wNs2To2VlcLisAPnteM4MNc1CZI+k1AwE9dpP5Bfu7MYQWiWURmnoVq0KKC/Me50vGBXzFc4MLVbvbxLIEbZZIBQ+n1mqao3ryzYn/jmv15WKxYSG0Qkyr0GSVVFbsUqS5hrVcFw2FXbBpbFqH8joupyXr2QXM1BkzTN7GJkKbGzChQYAt1pwswNIulyFJhWQQwPLZt9kp2pbFO0nc2fXZS3t0/F5JFu9M4yTn2T/w4g/2hcH0J34I/IdH4Ds6lHydBiREDczj+MlJ/NhECoDgfbg9oLCrCah0Ev+TAvyy5yMfUt2/KcAfhBqGjrQBYYfQ9APCJjHvB4SdRg4QdiHxAFjKrS0L1LDkgL8cAH6mGmOrhukB/M6tbRuEt3d1wI5KFmP4jKqwI3PPBUsBUCUta6zRORe2FABWw85tM8Ia11oA37auLsnB0gHAPdps+bupBPAOVz5RagDneOenShFAXzA6yQF7xVHXP249KyoHW0utQC/o8RAA4T2Rumh2BqCvusFDEFx1mct2sIZEfehLKMcLr/v6Dw5D+8lj6D+69J99hvbDE0vz6Uuk9/gGKT3//wOKqXrHYMfrIgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOS0yOFQxNTowMToxMyswMjowMIL/AEkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDktMjhUMTU6MDE6MTMrMDI6MDDzorj1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:"error icon"}),Object(r.jsx)("span",{className:M.a.boom,children:"BOOM!"}),Object(r.jsx)("span",{children:"Something has gone terribly wrong"}),Object(r.jsx)("span",{children:"(But we already sent droids to fix it)"})]})},D=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).SwapiService=new I,e.state={planet:{},loading:!0,error:!1},e.onPlanetLoaded=function(t){e.setState({planet:t,loading:!1})},e.onError=function(t){e.setState({error:!0,loading:!1})},e.updatePlanet=function(){var t=Math.floor(17*Math.random())+2;e.SwapiService.getPlanet(t).then(e.onPlanetLoaded).catch(e.onError)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.updateInterval;this.updatePlanet(),this.interval=setInterval(this.updatePlanet,e)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.planet,n=e.loading,a=e.error,s=!(n||a),c=a?Object(r.jsx)(T,{}):null,i=n?Object(r.jsx)(P,{}):null,o=s?Object(r.jsx)(B,{planet:t}):null;return Object(r.jsxs)("div",{className:b()(S.a.randomPlanet,"jumbotron","rounded"),children:[c,i,o]})}}]),n}(a.Component);D.defaultProps={updateInterval:5e3};var B=function(e){var t=e.planet,n=t.id,a=t.name,c=t.population,i=t.rotationPeriod,o=t.diameter;return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)("img",{className:S.a.planetImage,src:"https://starwars-visualguide.com/assets/img/planets/".concat(n,".jpg"),alt:"Planet"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:a}),Object(r.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(r.jsxs)("li",{className:b()(S.a.listGroupItem,"list-group-item"),children:[Object(r.jsx)("span",{className:S.a.term,children:"Population"}),Object(r.jsx)("span",{children:c})]}),Object(r.jsxs)("li",{className:b()(S.a.listGroupItem,"list-group-item"),children:[Object(r.jsx)("span",{className:S.a.term,children:"Rotation Period"}),Object(r.jsx)("span",{children:i})]}),Object(r.jsxs)("li",{className:b()(S.a.listGroupItem,"list-group-item"),children:[Object(r.jsx)("span",{className:S.a.term,children:"Diameter"}),Object(r.jsx)("span",{children:o})]})]})]})]})},V=D,L=T,R=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(l.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)(L,{}):this.props.children}}]),n}(a.Component),G=function e(){var t=this;Object(o.a)(this,e),this._people=[{id:1,name:"Bilbo Baggins [TEST DATA]",gender:"male",birthYear:"long ago",eyeColor:"dark brown"},{id:2,name:"Frodo Baggins [TEST DATA]",gender:"male",birthYear:"long ago",eyeColor:"dark brown"}],this._planets=[{id:1,name:"Earth [TEST DATA]",population:"7.530.000.000",rotationPeriod:"23 hours 56 seconds",diameter:"12.742 km"},{id:2,name:"Venus [TEST DATA]",population:"not known",rotationPeriod:"243 days",diameter:"12.104 km"}],this._starships=[{id:1,name:"USS Enterprise [TEST DATA]",model:"NCC-1701-C",manufacturer:"Northrop Grumman Shipbuilding",costInCredits:"not known",length:"approx 300 meters",crew:1e3,passengers:50,cargoCapacity:100}],this.getAllPeople=Object(w.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._people);case 1:case"end":return e.stop()}}),e)}))),this.getPerson=Object(w.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._people[0]);case 1:case"end":return e.stop()}}),e)}))),this.getAllPlanets=Object(w.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._planets);case 1:case"end":return e.stop()}}),e)}))),this.getPlanet=Object(w.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._planets[0]);case 1:case"end":return e.stop()}}),e)}))),this.getAllStarships=Object(w.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._starships);case 1:case"end":return e.stop()}}),e)}))),this.getStarship=Object(w.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._starships[0]);case 1:case"end":return e.stop()}}),e)}))),this.getPersonImage=function(){return"https://placeimg.com/400/500/people"},this.getStarshipImage=function(){return"https://placeimg.com/600/400/tech"},this.getPlanetImage=function(){return"https://placeimg.com/400/400/nature"}},F=function(e){var t=e.left,n=e.right;return Object(r.jsxs)("div",{className:"row mb2",children:[Object(r.jsx)("div",{className:"col-md-6",children:t}),Object(r.jsx)("div",{className:"col-md-6",children:n})]})},Q=n(7),K=n(34),Z=n.n(K),J=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={renderError:!1},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.state.renderError&&(this.foo.bar=0),Object(r.jsx)("button",{className:b()(Z.a.errorButton,"btn","btn-danger","btn-lg"),onClick:function(){return e.setState({renderError:!0})},children:"Throw Error"})}}]),n}(a.Component),H=n(19),X=n.n(H),z=function(e){var t=e.item,n=e.field,a=e.label;return Object(r.jsxs)("li",{className:b()(X.a.listGroupItem,"list-group-item"),children:[Object(r.jsx)("span",{className:X.a.term,children:a}),Object(r.jsx)("span",{children:t[n]})]})},q=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={item:null,image:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId===e.itemId&&this.props.getData===e.getData&&this.props.getImageUrl===e.getImageUrl||this.updateItem()}},{key:"updateItem",value:function(){var e=this,t=this.props,n=t.itemId,r=t.getData,a=t.getImageUrl;n&&r(n).then((function(t){e.setState({item:t,image:a(t)})}))}},{key:"render",value:function(){var e=this.state,t=e.item,n=e.image;if(!this.state.item)return Object(r.jsx)("span",{children:"Select a person from a list"});var a=t.name;return Object(r.jsxs)("div",{className:b()(X.a.itemDetails,"card"),children:[Object(r.jsx)("img",{className:X.a.itemImage,src:n,alt:"character"}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h4",{children:a}),Object(r.jsx)("ul",{className:"list-group list-group-flush",children:s.a.Children.map(this.props.children,(function(e){return s.a.cloneElement(e,{item:t})}))}),Object(r.jsx)(J,{})]})]})}}]),n}(a.Component),Y=function(e){return function(t){Object(u.a)(a,t);var n=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return(e=n.call.apply(n,[this].concat(r))).state={data:null,loading:!0,error:!1},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.getData!==e.getData&&this.update()}},{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.setState({loading:!0,error:!1}),this.props.getData().then((function(t){e.setState({data:t,loading:!1})})).catch((function(){e.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){var t=this.state,n=t.data,a=t.loading,s=t.error;return a?Object(r.jsx)(P,{}):s?Object(r.jsx)(L,{}):Object(r.jsx)(e,Object(Q.a)(Object(Q.a)({},this.props),{},{data:n}))}}]),a}(a.Component)},$=s.a.createContext(),ee=$.Provider,te=$.Consumer,ne=function(e){return function(t){return function(n){return Object(r.jsx)(te,{children:function(a){var s=e(a);return Object(r.jsx)(t,Object(Q.a)(Object(Q.a)({},n),s))}})}}},re=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},ae=function(e){return function(t){return function(n){return Object(r.jsx)(t,Object(Q.a)(Object(Q.a)({},n),{},{children:e}))}}},se=ne((function(e){return{getData:e.getPerson,getImageUrl:e.getPersonImage}}))((function(e){return Object(r.jsxs)(q,Object(Q.a)(Object(Q.a)({},e),{},{children:[Object(r.jsx)(z,{field:"gender",label:"Gender"}),Object(r.jsx)(z,{field:"eyeColor",label:"Eye Color"})]}))})),ce=ne((function(e){return{getData:e.getPlanet,getImageUrl:e.getPlanetImage}}))((function(e){return Object(r.jsxs)(q,Object(Q.a)(Object(Q.a)({},e),{},{children:[Object(r.jsx)(z,{field:"population",label:"Population"}),Object(r.jsx)(z,{field:"rotationPeriod",label:"Ratation Period"}),Object(r.jsx)(z,{field:"diameter",label:"Diameter"})]}))})),ie=ne((function(e){return{getData:e.getStarship,getImageUrl:e.getStarshipImage}}))((function(e){return Object(r.jsxs)(q,Object(Q.a)(Object(Q.a)({},e),{},{children:[Object(r.jsx)(z,{field:"model",label:"Model"}),Object(r.jsx)(z,{field:"length",label:"Length"}),Object(r.jsx)(z,{field:"costInCredits",label:"Cost"})]}))})),oe=n(29),le=n.n(oe),ue=function(e){var t=e.data,n=e.onItemSelected,a=e.children,s=t.map((function(e){var t=e.id,s=a(e);return Object(r.jsx)("li",{className:b()(le.a.listGroupItem,"list-group-item"),onClick:function(){return n(t)},children:s},t)}));return Object(r.jsx)("ul",{className:b()(le.a.itemList,"list-group"),children:s})};ue.defaultProps={onItemSelected:function(){}};var pe=ue,je=function(e){var t=e.name;return Object(r.jsx)("span",{children:t})},de=re(ne((function(e){return{getData:e.getAllPeople}})),Y,ae(je))(pe),he=re(ne((function(e){return{getData:e.getAllPlanets}})),Y,ae(je))(pe),be=re(ne((function(e){return{getData:e.getAllStarships}})),Y,ae((function(e){var t=e.model,n=e.name;return Object(r.jsxs)("span",{children:[n," (",t,")"]})})))(pe),me=Object(d.g)((function(e){var t=e.history,n=e.match.params.id;return Object(r.jsx)(F,{left:Object(r.jsx)(de,{onItemSelected:function(e){return t.push(e)}}),right:Object(r.jsx)(se,{itemId:n})})})),fe=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={selectedItem:null},e.onItemSelected=function(t){e.setState({selectedItem:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.selectedItem;return Object(r.jsx)(F,{left:Object(r.jsx)(he,{onItemSelected:this.onItemSelected}),right:Object(r.jsx)(ce,{itemId:e})})}}]),n}(a.Component),ge=Object(d.g)((function(e){var t=e.history;return Object(r.jsx)(be,{onItemSelected:function(e){return t.push(e)}})})),Oe=function(e){var t=e.isLoggedIn,n=e.onLogin;return t?Object(r.jsx)(d.a,{to:"/"}):Object(r.jsxs)("div",{className:"jumbotron",children:[Object(r.jsx)("p",{children:"Login to see secret page!"}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:n,children:"Login"})]})},xe=function(e){return e.isLoggedIn?Object(r.jsx)("div",{className:"jumbotron text-center",children:Object(r.jsx)("h3",{children:"This page is full of secrets!"})}):Object(r.jsx)(d.a,{to:"/login"})},ve=n(21),Ae=n.n(ve),Ne=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={swapiService:new I,isLoggedIn:!1},e.onLogin=function(){e.setState({isLoggedIn:!0})},e.onServiceChange=function(){e.setState((function(e){return{swapiService:new(e.swapiService instanceof G?I:G)}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isLoggedIn;return Object(r.jsx)(R,{children:Object(r.jsx)(ee,{value:this.state.swapiService,children:Object(r.jsx)(j.a,{children:Object(r.jsxs)("div",{className:Ae.a.stardbApp,children:[Object(r.jsx)(v,{}),Object(r.jsx)("div",{className:Ae.a.section,children:Object(r.jsxs)(g,{className:Ae.a.wrapper,children:[Object(r.jsx)(V,{}),Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/",render:function(){return Object(r.jsx)("h2",{children:"Welcome to StarDB"})},exact:!0}),Object(r.jsx)(d.b,{path:"/people/:id?",component:me}),Object(r.jsx)(d.b,{path:"/planets",component:fe}),Object(r.jsx)(d.b,{path:"/starships",exact:!0,component:ge}),Object(r.jsx)(d.b,{path:"/starships/:id",render:function(e){var t=e.match.params.id;return Object(r.jsx)(ie,{itemId:t})}}),Object(r.jsx)(d.b,{path:"/login",render:function(){return Object(r.jsx)(Oe,{isLoggedIn:t,onLogin:e.onLogin})}}),Object(r.jsx)(d.b,{path:"/secret",render:function(){return Object(r.jsx)(xe,{isLoggedIn:t})}}),Object(r.jsx)(d.b,{render:function(){return Object(r.jsx)("h2",{children:"Page not found"})}})]})]})}),Object(r.jsx)(U,{onServiceChange:this.onServiceChange})]})})})})}}]),n}(a.Component);i.a.render(Object(r.jsx)(Ne,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.68fbe9a1.chunk.js.map