// Compiled by ClojureScript 0.0-2411
goog.provide('jade.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.history.Html5History');
goog.require('om_tools.dom');
goog.require('goog.history.EventType');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.debug');
goog.require('goog.debug');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
jade.router.update_title_BANG_ = (function update_title_BANG_(p__18775){
var map__18778 = p__18775;
var map__18778__$1 = ((cljs.core.seq_QMARK_.call(null,map__18778))?cljs.core.apply.call(null,cljs.core.hash_map,map__18778):map__18778);
var new_state = cljs.core.get.call(null,map__18778__$1,new cljs.core.Keyword(null,"new-state","new-state",-490349212));
var map__18779 = new_state;
var map__18779__$1 = ((cljs.core.seq_QMARK_.call(null,map__18779))?cljs.core.apply.call(null,cljs.core.hash_map,map__18779):map__18779);
var route = cljs.core.get.call(null,map__18779__$1,new cljs.core.Keyword(null,"route","route",329891309));
return document.title = cljs.core.name.call(null,route);
});
jade.router.update_history_BANG_ = (function update_history_BANG_(owner,p__18780){
var map__18783 = p__18780;
var map__18783__$1 = ((cljs.core.seq_QMARK_.call(null,map__18783))?cljs.core.apply.call(null,cljs.core.hash_map,map__18783):map__18783);
var old_state = cljs.core.get.call(null,map__18783__$1,new cljs.core.Keyword(null,"old-state","old-state",1039580704));
var new_state = cljs.core.get.call(null,map__18783__$1,new cljs.core.Keyword(null,"new-state","new-state",-490349212));
var history = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"history","history",-247395220));
var map__18784 = new_state;
var map__18784__$1 = ((cljs.core.seq_QMARK_.call(null,map__18784))?cljs.core.apply.call(null,cljs.core.hash_map,map__18784):map__18784);
var route = cljs.core.get.call(null,map__18784__$1,new cljs.core.Keyword(null,"route","route",329891309));
if(!(cljs.core._EQ_.call(null,old_state,new_state))){
if(cljs.core.truth_(route)){
return history.setToken(cljs.core.name.call(null,route));
} else {
return history.setToken("/");
}
} else {
return history.replaceToken(cljs.core.name.call(null,route));
}
});
/**
* Takes an Om component with a history object
* Disables the history object.
*/
jade.router.stop_router_BANG_ = (function stop_router_BANG_(owner){
var history = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"history","history",-247395220));
goog.events.removeAll(history);

return history.setEnabled(false);
});
jade.router.start_history_BANG_ = (function start_history_BANG_(data,owner){
var history = (function (){var G__18786 = (new goog.history.Html5History());
G__18786.setUseFragment(true);

G__18786.setPathPrefix("#");

G__18786.setEnabled(true);

return G__18786;
})();
var nav_tokens_chan = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"nav-tokens","nav-tokens",2011487007));
goog.events.listen(history,goog.history.EventType.NAVIGATE,((function (history,nav_tokens_chan){
return (function (event){
if(cljs.core.truth_(event.isNavigation)){
return cljs.core.async.put_BANG_.call(null,nav_tokens_chan,event.token);
} else {
return null;
}
});})(history,nav_tokens_chan))
);

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"history","history",-247395220),history);
});
/**
* listens for nav related transactions
*/
jade.router.start_tx_loop_BANG_ = (function start_tx_loop_BANG_(owner){
var transactions_pub_chan = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"transactions-pub","transactions-pub",2142548862));
var txs = cljs.core.async.sub.call(null,transactions_pub_chan,new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.async.chan.call(null));
var c__12311__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto__,transactions_pub_chan,txs){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto__,transactions_pub_chan,txs){
return (function (state_18825){
var state_val_18826 = (state_18825[(1)]);
if((state_val_18826 === (5))){
var inst_18820 = (state_18825[(2)]);
var inst_18815 = inst_18820;
var state_18825__$1 = (function (){var statearr_18827 = state_18825;
(statearr_18827[(7)] = inst_18815);

return statearr_18827;
})();
var statearr_18828_18839 = state_18825__$1;
(statearr_18828_18839[(2)] = null);

(statearr_18828_18839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18826 === (4))){
var inst_18823 = (state_18825[(2)]);
var state_18825__$1 = state_18825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18825__$1,inst_18823);
} else {
if((state_val_18826 === (3))){
var inst_18815 = (state_18825[(7)]);
var inst_18817 = jade.router.update_title_BANG_.call(null,inst_18815);
var inst_18818 = jade.router.update_history_BANG_.call(null,owner,inst_18815);
var state_18825__$1 = (function (){var statearr_18829 = state_18825;
(statearr_18829[(8)] = inst_18817);

(statearr_18829[(9)] = inst_18818);

return statearr_18829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18825__$1,(5),txs);
} else {
if((state_val_18826 === (2))){
var inst_18814 = (state_18825[(2)]);
var inst_18815 = inst_18814;
var state_18825__$1 = (function (){var statearr_18830 = state_18825;
(statearr_18830[(7)] = inst_18815);

return statearr_18830;
})();
var statearr_18831_18840 = state_18825__$1;
(statearr_18831_18840[(2)] = null);

(statearr_18831_18840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18826 === (1))){
var state_18825__$1 = state_18825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18825__$1,(2),txs);
} else {
return null;
}
}
}
}
}
});})(c__12311__auto__,transactions_pub_chan,txs))
;
return ((function (switch__12255__auto__,c__12311__auto__,transactions_pub_chan,txs){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_18835 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18835[(0)] = state_machine__12256__auto__);

(statearr_18835[(1)] = (1));

return statearr_18835;
});
var state_machine__12256__auto____1 = (function (state_18825){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_18825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e18836){if((e18836 instanceof Object)){
var ex__12259__auto__ = e18836;
var statearr_18837_18841 = state_18825;
(statearr_18837_18841[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18842 = state_18825;
state_18825 = G__18842;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_18825){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_18825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto__,transactions_pub_chan,txs))
})();
var state__12313__auto__ = (function (){var statearr_18838 = f__12312__auto__.call(null);
(statearr_18838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto__);

return statearr_18838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto__,transactions_pub_chan,txs))
);

return c__12311__auto__;
});
jade.router.build_page = (function build_page(data,p__18843,owner){
var map__18849 = p__18843;
var map__18849__$1 = ((cljs.core.seq_QMARK_.call(null,map__18849))?cljs.core.apply.call(null,cljs.core.hash_map,map__18849):map__18849);
var views = cljs.core.get.call(null,map__18849__$1,new cljs.core.Keyword(null,"page-views","page-views",559529695));
var opts = cljs.core.get.call(null,map__18849__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var s_type = cljs.core.get.call(null,map__18849__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var start = cljs.core.get.call(null,map__18849__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var core_opts = cljs.core.get.call(null,map__18849__$1,new cljs.core.Keyword(null,"core-opts","core-opts",-1777677520));
var view = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(data);
var view__$1 = (function (){var or__3622__auto__ = (function (){var G__18852 = view;
switch (G__18852) {
case "/index.html":
return null;

break;
case "/":
return null;

break;
default:
return view;

}
})();
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return start;
}
})();
var view__GT_ = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"view->","view->",1967121669));
var _LT__view = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"<-view","<-view",688949288));
var vec__18850 = cljs.core.juxt.call(null,_LT__view,view__GT_).call(null,view__$1);
var prev = cljs.core.nth.call(null,vec__18850,(0),null);
var next = cljs.core.nth.call(null,vec__18850,(1),null);
var routes = vec__18850;
var __GT_route = view__$1.call(null,views);
var prev__$1 = ((cljs.core._EQ_.call(null,prev,new cljs.core.Keyword(null,"browse","browse",2070502601)))?new cljs.core.Keyword(null,"order-details","order-details",582680591):prev);
var prev_v = prev__$1.call(null,views);
var next_v = next.call(null,views);
var opts__$1 = view__$1.call(null,opts);
var core_opts__$1 = s_type.call(null,core_opts);
var opts_view = s_type.call(null,opts__$1);
var opts__$2 = cljs.core.merge.call(null,core_opts__$1,opts_view);
var G__18853 = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(data);
switch (G__18853) {
case (1):
return cljs.core.apply.call(null,React.DOM.div,{"className": "full app"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[prev_v.call(null,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"trans-init","trans-init",-1550871321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null),new cljs.core.Keyword(null,"clicked","clicked",114423720),true,new cljs.core.Keyword(null,"from-router","from-router",569668318),true,new cljs.core.Keyword(null,"trans-in","trans-in",2057477780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(-110)], null)], null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"routes","routes",457900162),routes)], null)),__GT_route.call(null,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"trans-init","trans-init",-1550871321),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"z","z",-789527183),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-100)], null),new cljs.core.Keyword(null,"trans-in","trans-in",2057477780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null)], null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"routes","routes",457900162),routes)], null))],null))));

break;
case (-1):
return cljs.core.apply.call(null,React.DOM.div,{"className": "full app"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[next_v.call(null,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"trans-init","trans-init",-1550871321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"trans-in","trans-in",2057477780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(110)], null)], null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"routes","routes",457900162),routes)], null)),__GT_route.call(null,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"trans-init","trans-init",-1550871321),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"z","z",-789527183),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"trans-in","trans-in",2057477780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null)], null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"routes","routes",457900162),routes)], null))],null))));

break;
default:
return __GT_route.call(null,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-transition-in","no-transition-in",820626142),true,new cljs.core.Keyword(null,"trans-init","trans-init",-1550871321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null)], null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"routes","routes",457900162),routes)], null));

}
});
jade.router.start_nav_loop_BANG_ = (function start_nav_loop_BANG_(p__18856,owner){
var map__18892 = p__18856;
var map__18892__$1 = ((cljs.core.seq_QMARK_.call(null,map__18892))?cljs.core.apply.call(null,cljs.core.hash_map,map__18892):map__18892);
var data = map__18892__$1;
var route = cljs.core.get.call(null,map__18892__$1,new cljs.core.Keyword(null,"route","route",329891309));
var nav_tokens_chan = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"nav-tokens","nav-tokens",2011487007));
var c__12311__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto__,nav_tokens_chan,map__18892,map__18892__$1,data,route){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto__,nav_tokens_chan,map__18892,map__18892__$1,data,route){
return (function (state_18913){
var state_val_18914 = (state_18913[(1)]);
if((state_val_18914 === (5))){
var inst_18908 = (state_18913[(2)]);
var inst_18900 = inst_18908;
var state_18913__$1 = (function (){var statearr_18915 = state_18913;
(statearr_18915[(7)] = inst_18900);

return statearr_18915;
})();
var statearr_18916_18927 = state_18913__$1;
(statearr_18916_18927[(2)] = null);

(statearr_18916_18927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (4))){
var inst_18911 = (state_18913[(2)]);
var state_18913__$1 = state_18913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18913__$1,inst_18911);
} else {
if((state_val_18914 === (3))){
var inst_18900 = (state_18913[(7)]);
var inst_18903 = cljs.core.nth.call(null,inst_18900,(0),null);
var inst_18904 = cljs.core.nth.call(null,inst_18900,(1),null);
var inst_18905 = om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"dir","dir",1734754661),inst_18904);
var inst_18906 = om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"route","route",329891309),inst_18903,new cljs.core.Keyword(null,"nav","nav",719540477));
var state_18913__$1 = (function (){var statearr_18917 = state_18913;
(statearr_18917[(8)] = inst_18906);

(statearr_18917[(9)] = inst_18905);

return statearr_18917;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18913__$1,(5),nav_tokens_chan);
} else {
if((state_val_18914 === (2))){
var inst_18897 = (state_18913[(2)]);
var inst_18898 = cljs.core.nth.call(null,inst_18897,(0),null);
var inst_18899 = cljs.core.nth.call(null,inst_18897,(1),null);
var inst_18900 = inst_18897;
var state_18913__$1 = (function (){var statearr_18918 = state_18913;
(statearr_18918[(10)] = inst_18898);

(statearr_18918[(7)] = inst_18900);

(statearr_18918[(11)] = inst_18899);

return statearr_18918;
})();
var statearr_18919_18928 = state_18913__$1;
(statearr_18919_18928[(2)] = null);

(statearr_18919_18928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (1))){
var state_18913__$1 = state_18913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18913__$1,(2),nav_tokens_chan);
} else {
return null;
}
}
}
}
}
});})(c__12311__auto__,nav_tokens_chan,map__18892,map__18892__$1,data,route))
;
return ((function (switch__12255__auto__,c__12311__auto__,nav_tokens_chan,map__18892,map__18892__$1,data,route){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_18923 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18923[(0)] = state_machine__12256__auto__);

(statearr_18923[(1)] = (1));

return statearr_18923;
});
var state_machine__12256__auto____1 = (function (state_18913){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_18913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e18924){if((e18924 instanceof Object)){
var ex__12259__auto__ = e18924;
var statearr_18925_18929 = state_18913;
(statearr_18925_18929[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18930 = state_18913;
state_18913 = G__18930;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_18913){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_18913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto__,nav_tokens_chan,map__18892,map__18892__$1,data,route))
})();
var state__12313__auto__ = (function (){var statearr_18926 = f__12312__auto__.call(null);
(statearr_18926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto__);

return statearr_18926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto__,nav_tokens_chan,map__18892,map__18892__$1,data,route))
);

return c__12311__auto__;
});
jade.router.start_router_BANG_ = (function start_router_BANG_(data,owner){
jade.router.start_history_BANG_.call(null,data,owner);

return jade.router.start_nav_loop_BANG_.call(null,data,owner);
});

var component_fnk__7745__auto___18949 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18935 = schema.core.Any;
var input_schema18936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18934","map18934",1817028646,null))], null);
var input_checker18937 = schema.core.checker.call(null,input_schema18936);
var output_checker18938 = schema.core.checker.call(null,output_schema18935);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938){
return (function constructor18932(G__18939){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18939], null);
var temp__4388__auto___18951 = input_checker18937.call(null,args__5938__auto___18950);
if(cljs.core.truth_(temp__4388__auto___18951)){
var error__5939__auto___18952 = temp__4388__auto___18951;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18932","constructor18932",-938564973,null),cljs.core.pr_str.call(null,error__5939__auto___18952)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18936,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18950,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18952], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18934 = G__18939;
while(true){
if(cljs.core.map_QMARK_.call(null,map18934)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18934)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18934,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18934,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18934,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
if(typeof jade.router.t18943 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.router.t18943 = (function (validate__5937__auto__,owner,map18934,data,output_checker18938,input_checker18937,output_schema18935,constructor18932,G__18939,input_schema18936,opts,ufv__,meta18944){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.map18934 = map18934;
this.data = data;
this.output_checker18938 = output_checker18938;
this.input_checker18937 = input_checker18937;
this.output_schema18935 = output_schema18935;
this.constructor18932 = constructor18932;
this.G__18939 = G__18939;
this.input_schema18936 = input_schema18936;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18944 = meta18944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.router.t18943.prototype.om$core$IDisplayName$ = true;

jade.router.t18943.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938){
return (function (_){
var self__ = this;
var ___$1 = this;
return "router";
});})(opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938))
;

jade.router.t18943.prototype.om$core$IWillUnmount$ = true;

jade.router.t18943.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938){
return (function (_){
var self__ = this;
var ___$1 = this;
return jade.router.stop_router_BANG_.call(null,self__.owner);
});})(opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938))
;

jade.router.t18943.prototype.om$core$IDidMount$ = true;

jade.router.t18943.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938){
return (function (_){
var self__ = this;
var ___$1 = this;
return jade.router.start_router_BANG_.call(null,self__.data,self__.owner);
});})(opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938))
;

jade.router.t18943.prototype.om$core$IRender$ = true;

jade.router.t18943.prototype.om$core$IRender$render$arity$1 = ((function (opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938){
return (function (_){
var self__ = this;
var ___$1 = this;
return jade.router.build_page.call(null,self__.data,self__.opts,self__.owner);
});})(opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938))
;

jade.router.t18943.prototype.om$core$IWillMount$ = true;

jade.router.t18943.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938){
return (function (_){
var self__ = this;
var ___$1 = this;
return jade.router.start_tx_loop_BANG_.call(null,self__.owner);
});})(opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938))
;

jade.router.t18943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938){
return (function (_18945){
var self__ = this;
var _18945__$1 = this;
return self__.meta18944;
});})(opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938))
;

jade.router.t18943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938){
return (function (_18945,meta18944__$1){
var self__ = this;
var _18945__$1 = this;
return (new jade.router.t18943(self__.validate__5937__auto__,self__.owner,self__.map18934,self__.data,self__.output_checker18938,self__.input_checker18937,self__.output_schema18935,self__.constructor18932,self__.G__18939,self__.input_schema18936,self__.opts,self__.ufv__,meta18944__$1));
});})(opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938))
;

jade.router.t18943.cljs$lang$type = true;

jade.router.t18943.cljs$lang$ctorStr = "jade.router/t18943";

jade.router.t18943.cljs$lang$ctorPrWriter = ((function (opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.router/t18943");
});})(opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938))
;

jade.router.__GT_t18943 = ((function (opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938){
return (function __GT_t18943(validate__5937__auto____$1,owner__$1,map18934__$1,data__$1,output_checker18938__$1,input_checker18937__$1,output_schema18935__$1,constructor18932__$1,G__18939__$1,input_schema18936__$1,opts__$1,ufv____$1,meta18944){
return (new jade.router.t18943(validate__5937__auto____$1,owner__$1,map18934__$1,data__$1,output_checker18938__$1,input_checker18937__$1,output_schema18935__$1,constructor18932__$1,G__18939__$1,input_schema18936__$1,opts__$1,ufv____$1,meta18944));
});})(opts,owner,data,validate__5937__auto__,ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938))
;

}

return (new jade.router.t18943(validate__5937__auto__,owner,map18934,data,output_checker18938,input_checker18937,output_schema18935,constructor18932,G__18939,input_schema18936,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18953 = output_checker18938.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18953)){
var error__5939__auto___18954 = temp__4388__auto___18953;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18932","constructor18932",-938564973,null),cljs.core.pr_str.call(null,error__5939__auto___18954)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18935,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18954], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18935,input_schema18936,input_checker18937,output_checker18938))
,schema.core.make_fn_schema.call(null,output_schema18935,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18936], null)));
})();
/**
* @param {...*} var_args
*/
jade.router.router = ((function (component_fnk__7745__auto___18949){
return (function() { 
var router__delegate = function (data__7746__auto__,owner18931,p__18946){
var vec__18948 = p__18946;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18948,(0),null);
return component_fnk__7745__auto___18949.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18931,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var router = function (data__7746__auto__,owner18931,var_args){
var p__18946 = null;
if (arguments.length > 2) {
  p__18946 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return router__delegate.call(this,data__7746__auto__,owner18931,p__18946);};
router.cljs$lang$maxFixedArity = 2;
router.cljs$lang$applyTo = (function (arglist__18955){
var data__7746__auto__ = cljs.core.first(arglist__18955);
arglist__18955 = cljs.core.next(arglist__18955);
var owner18931 = cljs.core.first(arglist__18955);
var p__18946 = cljs.core.rest(arglist__18955);
return router__delegate(data__7746__auto__,owner18931,p__18946);
});
router.cljs$core$IFn$_invoke$arity$variadic = router__delegate;
return router;
})()
;})(component_fnk__7745__auto___18949))
;

jade.router.__GT_router = (function() {
var __GT_router = null;
var __GT_router__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.router.router,cursor__7714__auto__);
});
var __GT_router__2 = (function (cursor__7714__auto__,m18933){
return om.core.build.call(null,jade.router.router,cursor__7714__auto__,m18933);
});
__GT_router = function(cursor__7714__auto__,m18933){
switch(arguments.length){
case 1:
return __GT_router__1.call(this,cursor__7714__auto__);
case 2:
return __GT_router__2.call(this,cursor__7714__auto__,m18933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_router.cljs$core$IFn$_invoke$arity$1 = __GT_router__1;
__GT_router.cljs$core$IFn$_invoke$arity$2 = __GT_router__2;
return __GT_router;
})()
;

//# sourceMappingURL=router.js.map?rel=1545283550751