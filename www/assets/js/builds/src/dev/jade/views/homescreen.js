// Compiled by ClojureScript 0.0-2411
goog.provide('jade.views.homescreen');
goog.require('cljs.core');
goog.require('jade.components.input');
goog.require('jade.components.footer');
goog.require('jade.components.panel');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('jade.config');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('jade.components.footer');
goog.require('om_tools.core');
goog.require('jade.components.input');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.config');
goog.require('jade.utils');
goog.require('jade.components.panel');
jade.views.homescreen.opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"homescreen","homescreen",2103597315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elephant","elephant",-1725469300),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"logo-path","logo-path",755834725),"elephant/slices/",new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(374),(436)], null),new cljs.core.Keyword(null,"font","font",-1506159249),null], null),new cljs.core.Keyword(null,"lotus","lotus",-46123684),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"logo-path","logo-path",755834725),"lotus/slices/",new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(311),(406)], null),new cljs.core.Keyword(null,"font","font",-1506159249),null], null)], null)], null);

var component_fnk__7745__auto___17920 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema17906 = schema.core.Any;
var input_schema17907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17905","map17905",132683564,null))], null);
var input_checker17908 = schema.core.checker.call(null,input_schema17907);
var output_checker17909 = schema.core.checker.call(null,output_schema17906);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909){
return (function constructor17903(G__17910){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___17921 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17910], null);
var temp__4388__auto___17922 = input_checker17908.call(null,args__5938__auto___17921);
if(cljs.core.truth_(temp__4388__auto___17922)){
var error__5939__auto___17923 = temp__4388__auto___17922;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17903","constructor17903",-1500131056,null),cljs.core.pr_str.call(null,error__5939__auto___17923)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17907,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___17921,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17923], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map17905 = G__17910;
while(true){
if(cljs.core.map_QMARK_.call(null,map17905)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17905)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map17905,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map17905,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map17905,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map17905,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.homescreen.t17914 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.homescreen.t17914 = (function (validate__5937__auto__,owner,data,output_schema17906,input_checker17908,map17905,G__17910,constructor17903,output_checker17909,state,input_schema17907,opts,ufv__,meta17915){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.output_schema17906 = output_schema17906;
this.input_checker17908 = input_checker17908;
this.map17905 = map17905;
this.G__17910 = G__17910;
this.constructor17903 = constructor17903;
this.output_checker17909 = output_checker17909;
this.state = state;
this.input_schema17907 = input_schema17907;
this.opts = opts;
this.ufv__ = ufv__;
this.meta17915 = meta17915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.homescreen.t17914.prototype.om$core$IDisplayName$ = true;

jade.views.homescreen.t17914.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909){
return (function (_){
var self__ = this;
var ___$1 = this;
return "signup";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909))
;

jade.views.homescreen.t17914.prototype.om$core$IRender$ = true;

jade.views.homescreen.t17914.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"style": {"width": "100%", "height": "10%"}, "className": "flex"});
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909))
;

jade.views.homescreen.t17914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909){
return (function (_17916){
var self__ = this;
var _17916__$1 = this;
return self__.meta17915;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909))
;

jade.views.homescreen.t17914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909){
return (function (_17916,meta17915__$1){
var self__ = this;
var _17916__$1 = this;
return (new jade.views.homescreen.t17914(self__.validate__5937__auto__,self__.owner,self__.data,self__.output_schema17906,self__.input_checker17908,self__.map17905,self__.G__17910,self__.constructor17903,self__.output_checker17909,self__.state,self__.input_schema17907,self__.opts,self__.ufv__,meta17915__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909))
;

jade.views.homescreen.t17914.cljs$lang$type = true;

jade.views.homescreen.t17914.cljs$lang$ctorStr = "jade.views.homescreen/t17914";

jade.views.homescreen.t17914.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.homescreen/t17914");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909))
;

jade.views.homescreen.__GT_t17914 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909){
return (function __GT_t17914(validate__5937__auto____$1,owner__$1,data__$1,output_schema17906__$1,input_checker17908__$1,map17905__$1,G__17910__$1,constructor17903__$1,output_checker17909__$1,state__$1,input_schema17907__$1,opts__$1,ufv____$1,meta17915){
return (new jade.views.homescreen.t17914(validate__5937__auto____$1,owner__$1,data__$1,output_schema17906__$1,input_checker17908__$1,map17905__$1,G__17910__$1,constructor17903__$1,output_checker17909__$1,state__$1,input_schema17907__$1,opts__$1,ufv____$1,meta17915));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909))
;

}

return (new jade.views.homescreen.t17914(validate__5937__auto__,owner,data,output_schema17906,input_checker17908,map17905,G__17910,constructor17903,output_checker17909,state,input_schema17907,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___17924 = output_checker17909.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___17924)){
var error__5939__auto___17925 = temp__4388__auto___17924;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17903","constructor17903",-1500131056,null),cljs.core.pr_str.call(null,error__5939__auto___17925)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17906,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17925], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema17906,input_schema17907,input_checker17908,output_checker17909))
,schema.core.make_fn_schema.call(null,output_schema17906,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17907], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.homescreen.signup = ((function (component_fnk__7745__auto___17920){
return (function() { 
var signup__delegate = function (data__7746__auto__,owner17902,p__17917){
var vec__17919 = p__17917;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__17919,(0),null);
return component_fnk__7745__auto___17920.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner17902),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17902,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var signup = function (data__7746__auto__,owner17902,var_args){
var p__17917 = null;
if (arguments.length > 2) {
  p__17917 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return signup__delegate.call(this,data__7746__auto__,owner17902,p__17917);};
signup.cljs$lang$maxFixedArity = 2;
signup.cljs$lang$applyTo = (function (arglist__17926){
var data__7746__auto__ = cljs.core.first(arglist__17926);
arglist__17926 = cljs.core.next(arglist__17926);
var owner17902 = cljs.core.first(arglist__17926);
var p__17917 = cljs.core.rest(arglist__17926);
return signup__delegate(data__7746__auto__,owner17902,p__17917);
});
signup.cljs$core$IFn$_invoke$arity$variadic = signup__delegate;
return signup;
})()
;})(component_fnk__7745__auto___17920))
;

jade.views.homescreen.__GT_signup = (function() {
var __GT_signup = null;
var __GT_signup__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.homescreen.signup,cursor__7714__auto__);
});
var __GT_signup__2 = (function (cursor__7714__auto__,m17904){
return om.core.build.call(null,jade.views.homescreen.signup,cursor__7714__auto__,m17904);
});
__GT_signup = function(cursor__7714__auto__,m17904){
switch(arguments.length){
case 1:
return __GT_signup__1.call(this,cursor__7714__auto__);
case 2:
return __GT_signup__2.call(this,cursor__7714__auto__,m17904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_signup.cljs$core$IFn$_invoke$arity$1 = __GT_signup__1;
__GT_signup.cljs$core$IFn$_invoke$arity$2 = __GT_signup__2;
return __GT_signup;
})()
;

var component_fnk__7745__auto___17945 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema17931 = schema.core.Any;
var input_schema17932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17930","map17930",1592318155,null))], null);
var input_checker17933 = schema.core.checker.call(null,input_schema17932);
var output_checker17934 = schema.core.checker.call(null,output_schema17931);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934){
return (function constructor17928(G__17935){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___17946 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17935], null);
var temp__4388__auto___17947 = input_checker17933.call(null,args__5938__auto___17946);
if(cljs.core.truth_(temp__4388__auto___17947)){
var error__5939__auto___17948 = temp__4388__auto___17947;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17928","constructor17928",732790645,null),cljs.core.pr_str.call(null,error__5939__auto___17948)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17932,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___17946,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17948], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map17930 = G__17935;
while(true){
if(cljs.core.map_QMARK_.call(null,map17930)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17930)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map17930,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map17930,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map17930,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map17930,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.homescreen.t17939 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.homescreen.t17939 = (function (output_schema17931,validate__5937__auto__,owner,data,map17930,input_schema17932,G__17935,state,input_checker17933,constructor17928,opts,output_checker17934,ufv__,meta17940){
this.output_schema17931 = output_schema17931;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.map17930 = map17930;
this.input_schema17932 = input_schema17932;
this.G__17935 = G__17935;
this.state = state;
this.input_checker17933 = input_checker17933;
this.constructor17928 = constructor17928;
this.opts = opts;
this.output_checker17934 = output_checker17934;
this.ufv__ = ufv__;
this.meta17940 = meta17940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.homescreen.t17939.prototype.om$core$IDisplayName$ = true;

jade.views.homescreen.t17939.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934){
return (function (_){
var self__ = this;
var ___$1 = this;
return "fields";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934))
;

jade.views.homescreen.t17939.prototype.om$core$IRender$ = true;

jade.views.homescreen.t17939.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"style": {"height": "48%", "marginTop": "2.25rem", "width": "100%"}, "className": "flex-start-column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"style": {"marginBottom": ".5rem", "width": "100%"}, "className": "gothic flex large"},"SIGN UP"),jade.components.input.__GT_input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"cwidth","cwidth",-1141631471),(90),new cljs.core.Keyword(null,"default","default",-1987822328),"Enter Your Email"], null)),jade.components.input.__GT_input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"cwidth","cwidth",-1141631471),(90),new cljs.core.Keyword(null,"default","default",-1987822328),"Choose A Password"], null))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934))
;

jade.views.homescreen.t17939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934){
return (function (_17941){
var self__ = this;
var _17941__$1 = this;
return self__.meta17940;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934))
;

jade.views.homescreen.t17939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934){
return (function (_17941,meta17940__$1){
var self__ = this;
var _17941__$1 = this;
return (new jade.views.homescreen.t17939(self__.output_schema17931,self__.validate__5937__auto__,self__.owner,self__.data,self__.map17930,self__.input_schema17932,self__.G__17935,self__.state,self__.input_checker17933,self__.constructor17928,self__.opts,self__.output_checker17934,self__.ufv__,meta17940__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934))
;

jade.views.homescreen.t17939.cljs$lang$type = true;

jade.views.homescreen.t17939.cljs$lang$ctorStr = "jade.views.homescreen/t17939";

jade.views.homescreen.t17939.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.homescreen/t17939");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934))
;

jade.views.homescreen.__GT_t17939 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934){
return (function __GT_t17939(output_schema17931__$1,validate__5937__auto____$1,owner__$1,data__$1,map17930__$1,input_schema17932__$1,G__17935__$1,state__$1,input_checker17933__$1,constructor17928__$1,opts__$1,output_checker17934__$1,ufv____$1,meta17940){
return (new jade.views.homescreen.t17939(output_schema17931__$1,validate__5937__auto____$1,owner__$1,data__$1,map17930__$1,input_schema17932__$1,G__17935__$1,state__$1,input_checker17933__$1,constructor17928__$1,opts__$1,output_checker17934__$1,ufv____$1,meta17940));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934))
;

}

return (new jade.views.homescreen.t17939(output_schema17931,validate__5937__auto__,owner,data,map17930,input_schema17932,G__17935,state,input_checker17933,constructor17928,opts,output_checker17934,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___17949 = output_checker17934.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___17949)){
var error__5939__auto___17950 = temp__4388__auto___17949;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17928","constructor17928",732790645,null),cljs.core.pr_str.call(null,error__5939__auto___17950)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17931,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17950], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema17931,input_schema17932,input_checker17933,output_checker17934))
,schema.core.make_fn_schema.call(null,output_schema17931,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17932], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.homescreen.fields = ((function (component_fnk__7745__auto___17945){
return (function() { 
var fields__delegate = function (data__7746__auto__,owner17927,p__17942){
var vec__17944 = p__17942;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__17944,(0),null);
return component_fnk__7745__auto___17945.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner17927),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17927,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var fields = function (data__7746__auto__,owner17927,var_args){
var p__17942 = null;
if (arguments.length > 2) {
  p__17942 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fields__delegate.call(this,data__7746__auto__,owner17927,p__17942);};
fields.cljs$lang$maxFixedArity = 2;
fields.cljs$lang$applyTo = (function (arglist__17951){
var data__7746__auto__ = cljs.core.first(arglist__17951);
arglist__17951 = cljs.core.next(arglist__17951);
var owner17927 = cljs.core.first(arglist__17951);
var p__17942 = cljs.core.rest(arglist__17951);
return fields__delegate(data__7746__auto__,owner17927,p__17942);
});
fields.cljs$core$IFn$_invoke$arity$variadic = fields__delegate;
return fields;
})()
;})(component_fnk__7745__auto___17945))
;

jade.views.homescreen.__GT_fields = (function() {
var __GT_fields = null;
var __GT_fields__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.homescreen.fields,cursor__7714__auto__);
});
var __GT_fields__2 = (function (cursor__7714__auto__,m17929){
return om.core.build.call(null,jade.views.homescreen.fields,cursor__7714__auto__,m17929);
});
__GT_fields = function(cursor__7714__auto__,m17929){
switch(arguments.length){
case 1:
return __GT_fields__1.call(this,cursor__7714__auto__);
case 2:
return __GT_fields__2.call(this,cursor__7714__auto__,m17929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_fields.cljs$core$IFn$_invoke$arity$1 = __GT_fields__1;
__GT_fields.cljs$core$IFn$_invoke$arity$2 = __GT_fields__2;
return __GT_fields;
})()
;

var component_fnk__7745__auto___17970 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema17956 = schema.core.Any;
var input_schema17957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17955","map17955",845469439,null))], null);
var input_checker17958 = schema.core.checker.call(null,input_schema17957);
var output_checker17959 = schema.core.checker.call(null,output_schema17956);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959){
return (function constructor17953(G__17960){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___17971 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17960], null);
var temp__4388__auto___17972 = input_checker17958.call(null,args__5938__auto___17971);
if(cljs.core.truth_(temp__4388__auto___17972)){
var error__5939__auto___17973 = temp__4388__auto___17972;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17953","constructor17953",1514738381,null),cljs.core.pr_str.call(null,error__5939__auto___17973)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17957,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___17971,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17973], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map17955 = G__17960;
while(true){
if(cljs.core.map_QMARK_.call(null,map17955)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17955)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map17955,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map17955,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map17955,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map17955,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.homescreen.t17964 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.homescreen.t17964 = (function (validate__5937__auto__,owner,data,input_checker17958,constructor17953,input_schema17957,G__17960,output_schema17956,state,output_checker17959,opts,ufv__,map17955,meta17965){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.input_checker17958 = input_checker17958;
this.constructor17953 = constructor17953;
this.input_schema17957 = input_schema17957;
this.G__17960 = G__17960;
this.output_schema17956 = output_schema17956;
this.state = state;
this.output_checker17959 = output_checker17959;
this.opts = opts;
this.ufv__ = ufv__;
this.map17955 = map17955;
this.meta17965 = meta17965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.homescreen.t17964.prototype.om$core$IDisplayName$ = true;

jade.views.homescreen.t17964.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959){
return (function (_){
var self__ = this;
var ___$1 = this;
return "homescreen*";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959))
;

jade.views.homescreen.t17964.prototype.om$core$IRender$ = true;

jade.views.homescreen.t17964.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959){
return (function (_){
var self__ = this;
var ___$1 = this;
var p_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,self__.state)], null);
return cljs.core.apply.call(null,React.DOM.div,{"className": "full flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.img({"src": om_tools.dom.format_opts.call(null,[cljs.core.str("lotus/slices/"),cljs.core.str("logo_homescreen.png")].join('')), "height": "40%", "width": "auto"}),jade.views.homescreen.__GT_fields.call(null,self__.data,p_opts),jade.components.footer.__GT_footer.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"copy","copy",-1077617309),"CREATE ACCOUNT",new cljs.core.Keyword(null,"height","height",1025178622),"51.5px",new cljs.core.Keyword(null,"c-height","c-height",557519589),23.15,new cljs.core.Keyword(null,"delta-color","delta-color",235677635),"rgb( 195, 214, 206 )",new cljs.core.Keyword(null,"node","node",581201198),cljs.core.apply.call(null,React.DOM.span,{"style": {"color": "black", "marginTop": "6.15%"}, "className": "bert regular"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Already have an account? ",React.DOM.a({"className": "gothic base-color"},"Sign In")],null))))], null),p_opts)],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959))
;

jade.views.homescreen.t17964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959){
return (function (_17966){
var self__ = this;
var _17966__$1 = this;
return self__.meta17965;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959))
;

jade.views.homescreen.t17964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959){
return (function (_17966,meta17965__$1){
var self__ = this;
var _17966__$1 = this;
return (new jade.views.homescreen.t17964(self__.validate__5937__auto__,self__.owner,self__.data,self__.input_checker17958,self__.constructor17953,self__.input_schema17957,self__.G__17960,self__.output_schema17956,self__.state,self__.output_checker17959,self__.opts,self__.ufv__,self__.map17955,meta17965__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959))
;

jade.views.homescreen.t17964.cljs$lang$type = true;

jade.views.homescreen.t17964.cljs$lang$ctorStr = "jade.views.homescreen/t17964";

jade.views.homescreen.t17964.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.homescreen/t17964");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959))
;

jade.views.homescreen.__GT_t17964 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959){
return (function __GT_t17964(validate__5937__auto____$1,owner__$1,data__$1,input_checker17958__$1,constructor17953__$1,input_schema17957__$1,G__17960__$1,output_schema17956__$1,state__$1,output_checker17959__$1,opts__$1,ufv____$1,map17955__$1,meta17965){
return (new jade.views.homescreen.t17964(validate__5937__auto____$1,owner__$1,data__$1,input_checker17958__$1,constructor17953__$1,input_schema17957__$1,G__17960__$1,output_schema17956__$1,state__$1,output_checker17959__$1,opts__$1,ufv____$1,map17955__$1,meta17965));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959))
;

}

return (new jade.views.homescreen.t17964(validate__5937__auto__,owner,data,input_checker17958,constructor17953,input_schema17957,G__17960,output_schema17956,state,output_checker17959,opts,ufv__,map17955,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___17974 = output_checker17959.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___17974)){
var error__5939__auto___17975 = temp__4388__auto___17974;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17953","constructor17953",1514738381,null),cljs.core.pr_str.call(null,error__5939__auto___17975)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17956,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17975], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema17956,input_schema17957,input_checker17958,output_checker17959))
,schema.core.make_fn_schema.call(null,output_schema17956,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17957], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.homescreen.homescreen_STAR_ = ((function (component_fnk__7745__auto___17970){
return (function() { 
var homescreen_STAR___delegate = function (data__7746__auto__,owner17952,p__17967){
var vec__17969 = p__17967;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__17969,(0),null);
return component_fnk__7745__auto___17970.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner17952),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17952,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var homescreen_STAR_ = function (data__7746__auto__,owner17952,var_args){
var p__17967 = null;
if (arguments.length > 2) {
  p__17967 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return homescreen_STAR___delegate.call(this,data__7746__auto__,owner17952,p__17967);};
homescreen_STAR_.cljs$lang$maxFixedArity = 2;
homescreen_STAR_.cljs$lang$applyTo = (function (arglist__17976){
var data__7746__auto__ = cljs.core.first(arglist__17976);
arglist__17976 = cljs.core.next(arglist__17976);
var owner17952 = cljs.core.first(arglist__17976);
var p__17967 = cljs.core.rest(arglist__17976);
return homescreen_STAR___delegate(data__7746__auto__,owner17952,p__17967);
});
homescreen_STAR_.cljs$core$IFn$_invoke$arity$variadic = homescreen_STAR___delegate;
return homescreen_STAR_;
})()
;})(component_fnk__7745__auto___17970))
;

jade.views.homescreen.__GT_homescreen_STAR_ = (function() {
var __GT_homescreen_STAR_ = null;
var __GT_homescreen_STAR___1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.homescreen.homescreen_STAR_,cursor__7714__auto__);
});
var __GT_homescreen_STAR___2 = (function (cursor__7714__auto__,m17954){
return om.core.build.call(null,jade.views.homescreen.homescreen_STAR_,cursor__7714__auto__,m17954);
});
__GT_homescreen_STAR_ = function(cursor__7714__auto__,m17954){
switch(arguments.length){
case 1:
return __GT_homescreen_STAR___1.call(this,cursor__7714__auto__);
case 2:
return __GT_homescreen_STAR___2.call(this,cursor__7714__auto__,m17954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_homescreen_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_homescreen_STAR___1;
__GT_homescreen_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_homescreen_STAR___2;
return __GT_homescreen_STAR_;
})()
;

var component_fnk__7745__auto___17995 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema17981 = schema.core.Any;
var input_schema17982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17980","map17980",-135826511,null))], null);
var input_checker17983 = schema.core.checker.call(null,input_schema17982);
var output_checker17984 = schema.core.checker.call(null,output_schema17981);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984){
return (function constructor17978(G__17985){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___17996 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17985], null);
var temp__4388__auto___17997 = input_checker17983.call(null,args__5938__auto___17996);
if(cljs.core.truth_(temp__4388__auto___17997)){
var error__5939__auto___17998 = temp__4388__auto___17997;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17978","constructor17978",1132879915,null),cljs.core.pr_str.call(null,error__5939__auto___17998)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17982,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___17996,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17998], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map17980 = G__17985;
while(true){
if(cljs.core.map_QMARK_.call(null,map17980)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17980)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map17980,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map17980,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map17980,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map17980,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.homescreen.t17989 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.homescreen.t17989 = (function (validate__5937__auto__,output_checker17984,owner,data,constructor17978,output_schema17981,map17980,state,G__17985,input_checker17983,input_schema17982,opts,ufv__,meta17990){
this.validate__5937__auto__ = validate__5937__auto__;
this.output_checker17984 = output_checker17984;
this.owner = owner;
this.data = data;
this.constructor17978 = constructor17978;
this.output_schema17981 = output_schema17981;
this.map17980 = map17980;
this.state = state;
this.G__17985 = G__17985;
this.input_checker17983 = input_checker17983;
this.input_schema17982 = input_schema17982;
this.opts = opts;
this.ufv__ = ufv__;
this.meta17990 = meta17990;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.homescreen.t17989.prototype.om$core$IDisplayName$ = true;

jade.views.homescreen.t17989.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984){
return (function (_){
var self__ = this;
var ___$1 = this;
return "homescreen";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984))
;

jade.views.homescreen.t17989.prototype.om$core$IRender$ = true;

jade.views.homescreen.t17989.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984){
return (function (_){
var self__ = this;
var ___$1 = this;
var coord = cljs.core.async.chan.call(null);
var layout = jade.config.add_main_transition.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ease"], null),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),jade.views.homescreen.homescreen_STAR_,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null),new cljs.core.Keyword(null,"coord-process","coord-process",-979975093),jade.utils.coord_process], null));
return jade.components.panel.__GT_panel.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"init-state","init-state",1450863212),layout], null));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984))
;

jade.views.homescreen.t17989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984){
return (function (_17991){
var self__ = this;
var _17991__$1 = this;
return self__.meta17990;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984))
;

jade.views.homescreen.t17989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984){
return (function (_17991,meta17990__$1){
var self__ = this;
var _17991__$1 = this;
return (new jade.views.homescreen.t17989(self__.validate__5937__auto__,self__.output_checker17984,self__.owner,self__.data,self__.constructor17978,self__.output_schema17981,self__.map17980,self__.state,self__.G__17985,self__.input_checker17983,self__.input_schema17982,self__.opts,self__.ufv__,meta17990__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984))
;

jade.views.homescreen.t17989.cljs$lang$type = true;

jade.views.homescreen.t17989.cljs$lang$ctorStr = "jade.views.homescreen/t17989";

jade.views.homescreen.t17989.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.homescreen/t17989");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984))
;

jade.views.homescreen.__GT_t17989 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984){
return (function __GT_t17989(validate__5937__auto____$1,output_checker17984__$1,owner__$1,data__$1,constructor17978__$1,output_schema17981__$1,map17980__$1,state__$1,G__17985__$1,input_checker17983__$1,input_schema17982__$1,opts__$1,ufv____$1,meta17990){
return (new jade.views.homescreen.t17989(validate__5937__auto____$1,output_checker17984__$1,owner__$1,data__$1,constructor17978__$1,output_schema17981__$1,map17980__$1,state__$1,G__17985__$1,input_checker17983__$1,input_schema17982__$1,opts__$1,ufv____$1,meta17990));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984))
;

}

return (new jade.views.homescreen.t17989(validate__5937__auto__,output_checker17984,owner,data,constructor17978,output_schema17981,map17980,state,G__17985,input_checker17983,input_schema17982,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___17999 = output_checker17984.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___17999)){
var error__5939__auto___18000 = temp__4388__auto___17999;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17978","constructor17978",1132879915,null),cljs.core.pr_str.call(null,error__5939__auto___18000)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17981,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18000], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema17981,input_schema17982,input_checker17983,output_checker17984))
,schema.core.make_fn_schema.call(null,output_schema17981,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17982], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.homescreen.homescreen = ((function (component_fnk__7745__auto___17995){
return (function() { 
var homescreen__delegate = function (data__7746__auto__,owner17977,p__17992){
var vec__17994 = p__17992;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__17994,(0),null);
return component_fnk__7745__auto___17995.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner17977),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17977,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var homescreen = function (data__7746__auto__,owner17977,var_args){
var p__17992 = null;
if (arguments.length > 2) {
  p__17992 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return homescreen__delegate.call(this,data__7746__auto__,owner17977,p__17992);};
homescreen.cljs$lang$maxFixedArity = 2;
homescreen.cljs$lang$applyTo = (function (arglist__18001){
var data__7746__auto__ = cljs.core.first(arglist__18001);
arglist__18001 = cljs.core.next(arglist__18001);
var owner17977 = cljs.core.first(arglist__18001);
var p__17992 = cljs.core.rest(arglist__18001);
return homescreen__delegate(data__7746__auto__,owner17977,p__17992);
});
homescreen.cljs$core$IFn$_invoke$arity$variadic = homescreen__delegate;
return homescreen;
})()
;})(component_fnk__7745__auto___17995))
;

jade.views.homescreen.__GT_homescreen = (function() {
var __GT_homescreen = null;
var __GT_homescreen__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.homescreen.homescreen,cursor__7714__auto__);
});
var __GT_homescreen__2 = (function (cursor__7714__auto__,m17979){
return om.core.build.call(null,jade.views.homescreen.homescreen,cursor__7714__auto__,m17979);
});
__GT_homescreen = function(cursor__7714__auto__,m17979){
switch(arguments.length){
case 1:
return __GT_homescreen__1.call(this,cursor__7714__auto__);
case 2:
return __GT_homescreen__2.call(this,cursor__7714__auto__,m17979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_homescreen.cljs$core$IFn$_invoke$arity$1 = __GT_homescreen__1;
__GT_homescreen.cljs$core$IFn$_invoke$arity$2 = __GT_homescreen__2;
return __GT_homescreen;
})()
;

//# sourceMappingURL=homescreen.js.map?rel=1545283549149