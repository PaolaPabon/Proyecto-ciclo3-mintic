(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-442504f0"],{"0bc6":function(t,e,i){},"24e2":function(t,e,i){"use strict";var s=i("e0c7");e["a"]=s["a"]},"326d":function(t,e,i){"use strict";var s=i("e449");e["a"]=s["a"]},"68dd":function(t,e,i){},"79c1":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o}));var s=i("4878"),n="/api/clientes",a=function(t){return s["a"].get(n+"/"+t)},o=function(t){return s["a"].post(n,t)}},"8adc":function(t,e,i){},b810:function(t,e,i){"use strict";var s=i("ce7e");e["a"]=s["a"]},ca71:function(t,e,i){},cf36:function(t,e,i){},e0c7:function(t,e,i){"use strict";var s=i("5530"),n=(i("0bc6"),i("7560")),a=i("58df");e["a"]=Object(a["a"])(n["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(s["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},fb0f:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{counter:10,rules:t.nameRules,label:"Nombre de Usuario",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),i("v-text-field",{attrs:{counter:10,rules:t.codeRules,label:"Numero de Identificación",required:""},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),i("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-text-field",{attrs:{counter:10,rules:t.passwordRules,label:"Contraseña",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("v-select",{attrs:{id:"plan",items:t.plans,rules:[function(t){return!!t||"Item is required"}],label:"Programa",required:""},model:{value:t.plan,callback:function(e){t.plan=e},expression:"plan"}}),i("v-select",{attrs:{id:"asesor",items:t.asesores,rules:[function(t){return!!t||"Item is required"}],label:"Entrenador",required:""},model:{value:t.asesor,callback:function(e){t.asesor=e},expression:"asesor"}}),i("v-select",{attrs:{items:t.horarios,rules:[function(t){return!!t||"Item is required"}],label:"Horario",required:""},model:{value:t.horario,callback:function(e){t.horario=e},expression:"horario"}}),i("v-select",{attrs:{items:t.entrenamientos,rules:[function(t){return!!t||"Item is required"}],label:"Plan de entrenamiento semanal",required:""},model:{value:t.entrenamiento,callback:function(e){t.entrenamiento=e},expression:"entrenamiento"}}),i("v-select",{attrs:{items:t.dietas,rules:[function(t){return!!t||"Item is required"}],label:"Menu semanal",required:""},model:{value:t.dieta,callback:function(e){t.dieta=e},expression:"dieta"}}),i("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:function(e){return t.guardar()}}},[t._v(" Guardar ")]),i("v-btn",{staticClass:"mr-4",attrs:{color:"info"},on:{click:function(e){return t.login()}}},[t._v(" Iniciar sesión ")]),i("msgconfirmacion",{attrs:{message:t.msgconfirmacion,snackbar:t.successShow,close:t.closeSuccessDialog}}),i("ErrorMessage",{attrs:{message:t.errorMessage,snackbar:t.errorShow,close:t.closeErrorDialog}})],1)},n=[],a=i("79c1"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-snackbar",{attrs:{color:"green","multi-line":t.multiLine},scopedSlots:t._u([{key:"action",fn:function(e){var s=e.attrs;return[i("v-btn",t._b({attrs:{color:"red",text:""},on:{click:function(e){return t.close()}}},"v-btn",s,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.message)+" ")])},r=[],l={props:["message","snackbar","close"],data:function(){return{multiLine:!0}}},c=l,u=i("2877"),h=i("6544"),d=i.n(h),p=i("8336"),m=i("ade3"),f=(i("a9e3"),i("caad"),i("ca71"),i("8dd9")),v=i("a9ad"),g=i("7560"),b=i("f2e7"),x=i("fe6c"),k=i("58df"),I=i("80d2"),C=i("d9bd"),$=Object(k["a"])(f["a"],v["a"],b["a"],Object(x["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:g["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,i=t.bottom,s=t.footer,n=t.insetFooter,a=t.left,o=t.right,r=t.top;return{paddingBottom:Object(I["f"])(i+s+n),paddingLeft:this.app?Object(I["f"])(a):void 0,paddingRight:this.app?Object(I["f"])(o):void 0,paddingTop:Object(I["f"])(e+r)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(C["e"])("auto-height",this),0==this.timeout&&Object(C["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(I["n"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(m["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(I["n"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,i=e(this.color,{staticClass:"v-snack__wrapper",class:f["a"].options.computed.classes.call(this),style:f["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",i,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),y=Object(u["a"])(c,o,r,!1,null,null,null),O=y.exports;d()(y,{VBtn:p["a"],VSnackbar:$});var S={components:{msgconfirmacion:O},data:function(){return{valid:!0,code:"",username:"",email:"",password:"",plan:"",asesor:"",horario:"",entrenamiento:"",dieta:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=50||"Name must be less than 10 characters"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],select:null,plans:["WORKGYM","CHILDRENGYM","GOLDENAGEGYM"],asesores:["Daniel Garcia","Antonio Muños"],horarios:["Mañana: 6 - 8 am","Tarde: 4 - 6 pm","Noche: 8 - 10 pm"],entrenamientos:["Principiante","Intermedio","Avanzado"],dietas:["Saludable","Vegetariana","Fitness"],msgconfirmacion:"",successShow:!1}},methods:{guardar:function(){var t=this,e={code:this.code,username:this.username,email:this.email,password:this.password,plan:this.plan,asesor:this.asesor,horario:this.horario,entrenamiento:this.entrenamiento,dieta:this.dieta};Object(a["b"])(e).then((function(e){return t.openSuccessDialog("Se ha creado el usuario: "+e.data._id)})).catch((function(e){console.error(e.response.data.message),t.openErrorDialog("Error al guardar informacion")}))},login:function(){this.$router.push("/Login/")},openSuccessDialog:function(t){this.msgconfirmacion=t,this.successShow=!0},closeSuccessDialog:function(){this.successShow=!1,this.$router.push("/login")},openErrorDialog:function(t){this.errorMessage=t,this.errorShow=!0},closeErrorDialog:function(){this.errorShow=!1}}},T=S,j=i("4bd4"),w=i("b85c"),A=i("5530"),D=(i("99af"),i("d3b7"),i("25f0"),i("fb6a"),i("ac1f"),i("1276"),i("498a"),i("4ec9"),i("3ca3"),i("ddb0"),i("a630"),i("c740"),i("b0c0"),i("d81d"),i("4de4"),i("2ca0"),i("2532"),i("a434"),i("4ff9"),i("68dd"),i("3835")),M=(i("8adc"),i("0789")),B=i("9d26"),V=i("4e82"),E=i("1c87"),_=i("af2b"),L=Object(k["a"])(v["a"],_["a"],E["a"],g["a"],Object(V["a"])("chipGroup"),Object(b["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(A["a"])(Object(A["a"])(Object(A["a"])(Object(A["a"])({"v-chip":!0},E["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(E["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(D["a"])(e,2),s=i[0],n=i[1];t.$attrs.hasOwnProperty(s)&&Object(C["a"])(s,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(B["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(M["b"],t)},genClose:function(){var t=this;return this.$createElement(B["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),s=i.tag,n=i.data;n.attrs=Object(A["a"])(Object(A["a"])({},n.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var a=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(a,n),e)}}),P=L,F=i("326d"),q=(i("a15b"),i("b64b"),i("159b"),i("cf36"),i("5607")),G=i("2b0e"),H=i("132d"),N=i("d9f7"),R=G["a"].extend({name:"v-simple-checkbox",functional:!0,directives:{ripple:q["a"]},props:Object(A["a"])(Object(A["a"])(Object(A["a"])({},v["a"].options.props),g["a"].options.props),{},{disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}}),render:function(t,e){var i=e.props,s=e.data,n=(e.listeners,[]),a=i.offIcon;if(i.indeterminate?a=i.indeterminateIcon:i.value&&(a=i.onIcon),n.push(t(H["a"],v["a"].options.methods.setTextColor(i.value&&i.color,{props:{disabled:i.disabled,dark:i.dark,light:i.light}}),a)),i.ripple&&!i.disabled){var o=t("div",v["a"].options.methods.setTextColor(i.color,{staticClass:"v-input--selection-controls__ripple",directives:[{name:"ripple",value:{center:!0}}]}));n.push(o)}return t("div",Object(N["a"])(s,{class:{"v-simple-checkbox":!0,"v-simple-checkbox--disabled":i.disabled},on:{click:function(t){t.stopPropagation(),s.on&&s.on.input&&!i.disabled&&Object(I["x"])(s.on.input).forEach((function(t){return t(!i.value)}))}}}),[t("div",{staticClass:"v-input--selection-controls__input"},n)])}}),z=i("b810"),W=i("24e2"),K=i("da13"),U=i("1800"),J=i("5d23"),Y=i("8860"),Q=Object(k["a"])(v["a"],g["a"]).extend({name:"v-select-list",directives:{ripple:q["a"]},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:function(){return[]}},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:function(){return[]}}},computed:{parsedItems:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},tileActiveClass:function(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile:function(){var t={attrs:{role:void 0},on:{mousedown:function(t){return t.preventDefault()}}};return this.$createElement(K["a"],t,[this.genTileContent(this.noDataText)])}},methods:{genAction:function(t,e){var i=this;return this.$createElement(U["a"],[this.$createElement(R,{props:{color:this.color,value:e,ripple:!1},on:{input:function(){return i.$emit("select",t)}}})])},genDivider:function(t){return this.$createElement(z["a"],{props:t})},genFilteredText:function(t){if(t=t||"",!this.searchInput||this.noFilter)return Object(I["i"])(t);var e=this.getMaskedCharacters(t),i=e.start,s=e.middle,n=e.end;return"".concat(Object(I["i"])(i)).concat(this.genHighlight(s)).concat(Object(I["i"])(n))},genHeader:function(t){return this.$createElement(W["a"],{props:t},t.header)},genHighlight:function(t){return'<span class="v-list-item__mask">'.concat(Object(I["i"])(t),"</span>")},getMaskedCharacters:function(t){var e=(this.searchInput||"").toString().toLocaleLowerCase(),i=t.toLocaleLowerCase().indexOf(e);if(i<0)return{start:t,middle:"",end:""};var s=t.slice(0,i),n=t.slice(i,i+e.length),a=t.slice(i+e.length);return{start:s,middle:n,end:a}},genTile:function(t){var e=this,i=t.item,s=t.index,n=t.disabled,a=void 0===n?null:n,o=t.value,r=void 0!==o&&o;r||(r=this.hasItem(i)),i===Object(i)&&(a=null!==a?a:this.getDisabled(i));var l={attrs:{"aria-selected":String(r),id:"list-item-".concat(this._uid,"-").concat(s),role:"option"},on:{mousedown:function(t){t.preventDefault()},click:function(){return a||e.$emit("select",i)}},props:{activeClass:this.tileActiveClass,disabled:a,ripple:!0,inputValue:r}};if(!this.$scopedSlots.item)return this.$createElement(K["a"],l,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(i,r):null,this.genTileContent(i,s)]);var c=this,u=this.$scopedSlots.item({parent:c,item:i,attrs:Object(A["a"])(Object(A["a"])({},l.attrs),l.props),on:l.on});return this.needsTile(u)?this.$createElement(K["a"],l,u):u},genTileContent:function(t){var e=this.genFilteredText(this.getText(t));return this.$createElement(J["a"],[this.$createElement(J["c"],{domProps:{innerHTML:e}})])},hasItem:function(t){return this.parsedItems.indexOf(this.getValue(t))>-1},needsTile:function(t){return 1!==t.length||null==t[0].componentOptions||"v-list-item"!==t[0].componentOptions.Ctor.options.name},getDisabled:function(t){return Boolean(Object(I["m"])(t,this.itemDisabled,!1))},getText:function(t){return String(Object(I["m"])(t,this.itemText,t))},getValue:function(t){return Object(I["m"])(t,this.itemValue,this.getText(t))}},render:function(){for(var t=[],e=this.items.length,i=0;i<e;i++){var s=this.items[i];this.hideSelected&&this.hasItem(s)||(null==s?t.push(this.genTile({item:s,index:i})):s.header?t.push(this.genHeader(s)):s.divider?t.push(this.genDivider(s)):t.push(this.genTile({item:s,index:i})))}return t.length||t.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&t.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&t.push(this.$slots["append-item"]),this.$createElement(Y["a"],{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},t)}}),X=i("c37a"),Z=i("8654"),tt=G["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:I["h"]}}}),et=i("b848"),it=G["a"].extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),st=i("a293"),nt={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},at=Object(k["a"])(Z["a"],tt,et["a"],it),ot=at.extend().extend({name:"v-select",directives:{ClickOutside:st["a"]},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:function(){return[]}},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:function(){return nt}},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data:function(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems:function(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes:function(){return Object(A["a"])(Object(A["a"])({},Z["a"].options.computed.classes.call(this)),{},{"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple})},computedItems:function(){return this.allItems},computedOwns:function(){return"list-".concat(this._uid)},computedCounterValue:function(){var t=this.multiple?this.selectedItems:(this.getText(this.selectedItems[0])||"").toString();return"function"===typeof this.counterValue?this.counterValue(t):t.length},directives:function(){var t=this;return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional,include:function(){return t.getOpenDependentElements()}}}]:void 0},dynamicHeight:function(){return"auto"},hasChips:function(){return this.chips||this.smallChips},hasSlot:function(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty:function(){return this.selectedItems.length>0},listData:function(){var t=this.$vnode&&this.$vnode.context.$options._scopeId,e=t?Object(m["a"])({},t,!0):{};return{attrs:Object(A["a"])(Object(A["a"])({},e),{},{id:this.computedOwns}),props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList:function(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&Object(C["b"])("assert: staticList should not be called if slots are used"),this.$createElement(Q,this.listData)},virtualizedItems:function(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:function(){return!0},$_menuProps:function(){var t="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(t)&&(t=t.reduce((function(t,e){return t[e.trim()]=!0,t}),{})),Object(A["a"])(Object(A["a"])({},nt),{},{eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:t.offsetY?1:0},t)}},watch:{internalValue:function(t){this.initialValue=t,this.setSelectedItems()},isMenuActive:function(t){var e=this;window.setTimeout((function(){return e.onMenuActiveChange(t)}))},items:{immediate:!0,handler:function(t){var e=this;this.cacheItems&&this.$nextTick((function(){e.cachedItems=e.filterDuplicates(e.cachedItems.concat(t))})),this.setSelectedItems()}}},methods:{blur:function(t){Z["a"].options.methods.blur.call(this,t),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1,this.setMenuIndex(-1)},activateMenu:function(){this.isInteractive&&!this.isMenuActive&&(this.isMenuActive=!0)},clearableCallback:function(){var t=this;this.setValue(this.multiple?[]:null),this.setMenuIndex(-1),this.$nextTick((function(){return t.$refs.input&&t.$refs.input.focus()})),this.openOnClear&&(this.isMenuActive=!0)},closeConditional:function(t){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(t.target))&&this.$el&&!this.$el.contains(t.target)&&t.target!==this.$el},filterDuplicates:function(t){for(var e=new Map,i=0;i<t.length;++i){var s=t[i];if(s.header||s.divider)e.set(s,s);else{var n=this.getValue(s);!e.has(n)&&e.set(n,s)}}return Array.from(e.values())},findExistingIndex:function(t){var e=this,i=this.getValue(t);return(this.internalValue||[]).findIndex((function(t){return e.valueComparator(e.getValue(t),i)}))},getContent:function(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection:function(t,e){var i=this,s=this.isDisabled||this.getDisabled(t),n=!s&&this.isInteractive;return this.$createElement(P,{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&n,disabled:s,inputValue:e===this.selectedIndex,small:this.smallChips},on:{click:function(t){n&&(t.stopPropagation(),i.selectedIndex=e)},"click:close":function(){return i.onChipInput(t)}},key:JSON.stringify(this.getValue(t))},this.getText(t))},genCommaSelection:function(t,e,i){var s=e===this.selectedIndex&&this.computedColor,n=this.isDisabled||this.getDisabled(t);return this.$createElement("div",this.setTextColor(s,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":n},key:JSON.stringify(this.getValue(t))}),"".concat(this.getText(t)).concat(i?"":", "))},genDefaultSlot:function(){var t=this.genSelections(),e=this.genInput();return Array.isArray(t)?t.push(e):(t.children=t.children||[],t.children.push(e)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,t,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon:function(t,e,i){var s=X["a"].options.methods.genIcon.call(this,t,e,i);return"append"===t&&(s.children[0].data=Object(N["a"])(s.children[0].data,{attrs:{tabindex:s.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),s},genInput:function(){var t=Z["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data=Object(N["a"])(t.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":Object(I["l"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(I["l"])(t.data,"attrs.autocomplete","off"),placeholder:this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?void 0:this.placeholder},on:{keypress:this.onKeyPress}}),t},genHiddenInput:function(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot:function(){var t=Z["a"].options.methods.genInputSlot.call(this);return t.data.attrs=Object(A["a"])(Object(A["a"])({},t.data.attrs),{},{role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns}),t},genList:function(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot:function(){var t=this,e=["prepend-item","no-data","append-item"].filter((function(e){return t.$slots[e]})).map((function(e){return t.$createElement("template",{slot:e},t.$slots[e])}));return this.$createElement(Q,Object(A["a"])({},this.listData),e)},genMenu:function(){var t=this,e=this.$_menuProps;return e.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?e.attach=this.$el:e.attach=this.attach,this.$createElement(F["a"],{attrs:{role:void 0},props:e,on:{input:function(e){t.isMenuActive=e,t.isFocused=e},scroll:this.onScroll},ref:"menu"},[this.genList()])},genSelections:function(){var t,e=this.selectedItems.length,i=new Array(e);t=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(e--)i[e]=t(this.selectedItems[e],e,e===i.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},i)},genSlotSelection:function(t,e){var i=this;return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:t,index:e,select:function(t){t.stopPropagation(),i.selectedIndex=e},selected:e===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex:function(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled:function(t){return Object(I["m"])(t,this.itemDisabled,!1)},getText:function(t){return Object(I["m"])(t,this.itemText,t)},getValue:function(t){return Object(I["m"])(t,this.itemValue,this.getText(t))},onBlur:function(t){t&&this.$emit("blur",t)},onChipInput:function(t){this.multiple?this.selectItem(t):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick:function(t){this.isInteractive&&(this.isAppendInner(t.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",t))},onEscDown:function(t){t.preventDefault(),this.isMenuActive&&(t.stopPropagation(),this.isMenuActive=!1)},onKeyPress:function(t){var e=this;if(!this.multiple&&this.isInteractive&&!this.disableLookup){var i=1e3,s=performance.now();s-this.keyboardLookupLastTime>i&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=t.key.toLowerCase(),this.keyboardLookupLastTime=s;var n=this.allItems.findIndex((function(t){var i=(e.getText(t)||"").toString();return i.toLowerCase().startsWith(e.keyboardLookupPrefix)})),a=this.allItems[n];-1!==n&&(this.lastItem=Math.max(this.lastItem,n+5),this.setValue(this.returnObject?a:this.getValue(a)),this.$nextTick((function(){return e.$refs.menu.getTiles()})),setTimeout((function(){return e.setMenuIndex(n)})))}},onKeyDown:function(t){var e=this;if(!this.isReadonly||t.keyCode===I["r"].tab){var i=t.keyCode,s=this.$refs.menu;if(this.$emit("keydown",t),s)return this.isMenuActive&&i!==I["r"].tab&&this.$nextTick((function(){s.changeListIndex(t),e.$emit("update:list-index",s.listIndex)})),[I["r"].enter,I["r"].space].includes(i)&&this.activateMenu(),!this.isMenuActive&&[I["r"].up,I["r"].down,I["r"].home,I["r"].end].includes(i)?this.onUpDown(t):i===I["r"].esc?this.onEscDown(t):i===I["r"].tab?this.onTabDown(t):i===I["r"].space?this.onSpaceDown(t):void 0}},onMenuActiveChange:function(t){if(!(this.multiple&&!t||this.getMenuIndex()>-1)){var e=this.$refs.menu;if(e&&this.isDirty){this.$refs.menu.getTiles();for(var i=0;i<e.tiles.length;i++)if("true"===e.tiles[i].getAttribute("aria-selected")){this.setMenuIndex(i);break}}}},onMouseUp:function(t){var e=this;this.hasMouseDown&&3!==t.which&&this.isInteractive&&this.isAppendInner(t.target)&&this.$nextTick((function(){return e.isMenuActive=!e.isMenuActive})),Z["a"].options.methods.onMouseUp.call(this,t)},onScroll:function(){var t=this;if(this.isMenuActive){if(this.lastItem>this.computedItems.length)return;var e=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;e&&(this.lastItem+=20)}else requestAnimationFrame((function(){return t.getContent().scrollTop=0}))},onSpaceDown:function(t){t.preventDefault()},onTabDown:function(t){var e=this.$refs.menu;if(e){var i=e.activeTile;!this.multiple&&i&&this.isMenuActive?(t.preventDefault(),t.stopPropagation(),i.click()):this.blur(t)}},onUpDown:function(t){var e=this,i=this.$refs.menu;if(i){if(t.preventDefault(),this.multiple)return this.activateMenu();var s=t.keyCode;i.isBooted=!0,window.requestAnimationFrame((function(){if(i.getTiles(),!i.hasClickableTiles)return e.activateMenu();switch(s){case I["r"].up:i.prevTile();break;case I["r"].down:i.nextTile();break;case I["r"].home:i.firstTile();break;case I["r"].end:i.lastTile();break}e.selectItem(e.allItems[e.getMenuIndex()])}))}},selectItem:function(t){var e=this;if(this.multiple){var i=(this.internalValue||[]).slice(),s=this.findExistingIndex(t);if(-1!==s?i.splice(s,1):i.push(t),this.setValue(i.map((function(t){return e.returnObject?t:e.getValue(t)}))),this.$nextTick((function(){e.$refs.menu&&e.$refs.menu.updateDimensions()})),this.hideSelected)this.setMenuIndex(-1);else{var n=this.allItems.indexOf(t);~n&&(this.$nextTick((function(){return e.$refs.menu.getTiles()})),setTimeout((function(){return e.setMenuIndex(n)})))}}else this.setValue(this.returnObject?t:this.getValue(t)),this.isMenuActive=!1},setMenuIndex:function(t){this.$refs.menu&&(this.$refs.menu.listIndex=t)},setSelectedItems:function(){var t,e=this,i=[],s=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue],n=Object(w["a"])(s);try{var a=function(){var s=t.value,n=e.allItems.findIndex((function(t){return e.valueComparator(e.getValue(t),e.getValue(s))}));n>-1&&i.push(e.allItems[n])};for(n.s();!(t=n.n()).done;)a()}catch(o){n.e(o)}finally{n.f()}this.selectedItems=i},setValue:function(t){this.valueComparator(t,this.internalValue)||(this.internalValue=t,this.$emit("change",t))},isAppendInner:function(t){var e=this.$refs["append-inner"];return e&&(e===t||e.contains(t))}}}),rt=Object(u["a"])(T,s,n,!1,null,null,null);e["default"]=rt.exports;d()(rt,{VBtn:p["a"],VForm:j["a"],VSelect:ot,VTextField:Z["a"]})}}]);
//# sourceMappingURL=chunk-442504f0.33f59bf4.js.map