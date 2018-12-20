// Compiled by ClojureScript 0.0-2411
goog.provide('jade.utils');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
jade.utils.clicked = (function clicked(i_c,e){
e.preventDefault();

cljs.core.async.put_BANG_.call(null,i_c,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",114423720)], null));

return e;
});
jade.utils.direct_trans = (function direct_trans(direction_m,direction){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,(direction * v));
}),cljs.core.PersistentArrayMap.EMPTY,direction_m);
});
jade.utils.lambda_panel = (function lambda_panel(i_c,c,route,s_t,delta_t,dir,e){
var c__12311__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto__){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto__){
return (function (state_18645){
var state_val_18646 = (state_18645[(1)]);
if((state_val_18646 === (3))){
var inst_18643 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18645__$1,inst_18643);
} else {
if((state_val_18646 === (2))){
var inst_18638 = (state_18645[(2)]);
var inst_18639 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18640 = [route,dir];
var inst_18641 = (new cljs.core.PersistentVector(null,2,(5),inst_18639,inst_18640,null));
var state_18645__$1 = (function (){var statearr_18647 = state_18645;
(statearr_18647[(7)] = inst_18638);

return statearr_18647;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18645__$1,(3),c,inst_18641);
} else {
if((state_val_18646 === (1))){
var inst_18636 = cljs.core.async.timeout.call(null,delta_t);
var state_18645__$1 = state_18645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18645__$1,(2),inst_18636);
} else {
return null;
}
}
}
});})(c__12311__auto__))
;
return ((function (switch__12255__auto__,c__12311__auto__){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_18651 = [null,null,null,null,null,null,null,null];
(statearr_18651[(0)] = state_machine__12256__auto__);

(statearr_18651[(1)] = (1));

return statearr_18651;
});
var state_machine__12256__auto____1 = (function (state_18645){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_18645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e18652){if((e18652 instanceof Object)){
var ex__12259__auto__ = e18652;
var statearr_18653_18655 = state_18645;
(statearr_18653_18655[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18656 = state_18645;
state_18645 = G__18656;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_18645){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_18645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto__))
})();
var state__12313__auto__ = (function (){var statearr_18654 = f__12312__auto__.call(null);
(statearr_18654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto__);

return statearr_18654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto__))
);

return c__12311__auto__;
});
/**
* @param {...*} var_args
*/
jade.utils.c_lambda_panel = (function() { 
var c_lambda_panel__delegate = function (opts,owner,state,prev_QMARK_){
var dur = new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var t = (dur * (1000));
var vec__18658 = new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(opts);
var prev = cljs.core.nth.call(null,vec__18658,(0),null);
var next = cljs.core.nth.call(null,vec__18658,(1),null);
var s_t = (t / 1.2);
var coord = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(opts);
var dir = (cljs.core.truth_(prev_QMARK_)?(-1):(1));
var nav_c = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"nav-tokens","nav-tokens",2011487007));
var panel_BANG_ = (cljs.core.truth_(prev_QMARK_)?cljs.core.partial.call(null,jade.utils.lambda_panel,coord,nav_c,prev,s_t,t,dir):cljs.core.comp.call(null,cljs.core.partial.call(null,jade.utils.lambda_panel,coord,nav_c,next,s_t,t,dir),cljs.core.partial.call(null,jade.utils.clicked,coord)));
return panel_BANG_;
};
var c_lambda_panel = function (opts,owner,state,var_args){
var prev_QMARK_ = null;
if (arguments.length > 3) {
  prev_QMARK_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return c_lambda_panel__delegate.call(this,opts,owner,state,prev_QMARK_);};
c_lambda_panel.cljs$lang$maxFixedArity = 3;
c_lambda_panel.cljs$lang$applyTo = (function (arglist__18659){
var opts = cljs.core.first(arglist__18659);
arglist__18659 = cljs.core.next(arglist__18659);
var owner = cljs.core.first(arglist__18659);
arglist__18659 = cljs.core.next(arglist__18659);
var state = cljs.core.first(arglist__18659);
var prev_QMARK_ = cljs.core.rest(arglist__18659);
return c_lambda_panel__delegate(opts,owner,state,prev_QMARK_);
});
c_lambda_panel.cljs$core$IFn$_invoke$arity$variadic = c_lambda_panel__delegate;
return c_lambda_panel;
})()
;
jade.utils.coord_process = (function coord_process(coord,owner,trans_out,state){
var c__12311__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto__){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto__){
return (function (state_18731){
var state_val_18732 = (state_18731[(1)]);
if((state_val_18732 === (7))){
var inst_18727 = (state_18731[(2)]);
var state_18731__$1 = state_18731;
var statearr_18733_18756 = state_18731__$1;
(statearr_18733_18756[(2)] = inst_18727);

(statearr_18733_18756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18732 === (1))){
var state_18731__$1 = state_18731;
var statearr_18734_18757 = state_18731__$1;
(statearr_18734_18757[(2)] = null);

(statearr_18734_18757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18732 === (4))){
var inst_18710 = (state_18731[(7)]);
var inst_18710__$1 = (state_18731[(2)]);
var state_18731__$1 = (function (){var statearr_18735 = state_18731;
(statearr_18735[(7)] = inst_18710__$1);

return statearr_18735;
})();
if(cljs.core.truth_(inst_18710__$1)){
var statearr_18736_18758 = state_18731__$1;
(statearr_18736_18758[(1)] = (5));

} else {
var statearr_18737_18759 = state_18731__$1;
(statearr_18737_18759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18732 === (6))){
var state_18731__$1 = state_18731;
var statearr_18738_18760 = state_18731__$1;
(statearr_18738_18760[(2)] = null);

(statearr_18738_18760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18732 === (3))){
var inst_18729 = (state_18731[(2)]);
var state_18731__$1 = state_18731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18731__$1,inst_18729);
} else {
if((state_val_18732 === (2))){
var state_18731__$1 = state_18731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18731__$1,(4),coord);
} else {
if((state_val_18732 === (11))){
var inst_18720 = cljs.core.println.call(null,"no case, brah");
var state_18731__$1 = state_18731;
var statearr_18739_18761 = state_18731__$1;
(statearr_18739_18761[(2)] = inst_18720);

(statearr_18739_18761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18732 === (9))){
var inst_18714 = (state_18731[(8)]);
var inst_18715 = jade.utils.direct_trans.call(null,trans_out,inst_18714);
var inst_18716 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"trans","trans",-1318503851),inst_18715);
var state_18731__$1 = state_18731;
var statearr_18740_18762 = state_18731__$1;
(statearr_18740_18762[(2)] = inst_18716);

(statearr_18740_18762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18732 === (5))){
var inst_18710 = (state_18731[(7)]);
var inst_18713 = cljs.core.nth.call(null,inst_18710,(0),null);
var inst_18714 = cljs.core.nth.call(null,inst_18710,(1),null);
var state_18731__$1 = (function (){var statearr_18741 = state_18731;
(statearr_18741[(8)] = inst_18714);

return statearr_18741;
})();
var G__18742_18763 = (((inst_18713 instanceof cljs.core.Keyword))?inst_18713.fqn:null);
switch (G__18742_18763) {
case "clicked":
var statearr_18743_18765 = state_18731__$1;
(statearr_18743_18765[(1)] = (10));


break;
case "toggle":
var statearr_18744_18766 = state_18731__$1;
(statearr_18744_18766[(1)] = (9));


break;
default:
var statearr_18745_18767 = state_18731__$1;
(statearr_18745_18767[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18732 === (10))){
var inst_18718 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"clicked","clicked",114423720),true);
var state_18731__$1 = state_18731;
var statearr_18746_18768 = state_18731__$1;
(statearr_18746_18768[(2)] = inst_18718);

(statearr_18746_18768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18732 === (8))){
var inst_18723 = (state_18731[(2)]);
var state_18731__$1 = (function (){var statearr_18747 = state_18731;
(statearr_18747[(9)] = inst_18723);

return statearr_18747;
})();
var statearr_18748_18769 = state_18731__$1;
(statearr_18748_18769[(2)] = null);

(statearr_18748_18769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto__))
;
return ((function (switch__12255__auto__,c__12311__auto__){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_18752 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18752[(0)] = state_machine__12256__auto__);

(statearr_18752[(1)] = (1));

return statearr_18752;
});
var state_machine__12256__auto____1 = (function (state_18731){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_18731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e18753){if((e18753 instanceof Object)){
var ex__12259__auto__ = e18753;
var statearr_18754_18770 = state_18731;
(statearr_18754_18770[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18771 = state_18731;
state_18731 = G__18771;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_18731){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_18731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto__))
})();
var state__12313__auto__ = (function (){var statearr_18755 = f__12312__auto__.call(null);
(statearr_18755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto__);

return statearr_18755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto__))
);

return c__12311__auto__;
});
jade.utils._PERCENT_str = (function _PERCENT_str(val){
return [cljs.core.str(val),cljs.core.str("%")].join('');
});
jade.utils.transform_str = (function transform_str(state,p__18772,dir){
var map__18774 = p__18772;
var map__18774__$1 = ((cljs.core.seq_QMARK_.call(null,map__18774))?cljs.core.apply.call(null,cljs.core.hash_map,map__18774):map__18774);
var scale = cljs.core.get.call(null,map__18774__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),(1));
var z = cljs.core.get.call(null,map__18774__$1,new cljs.core.Keyword(null,"z","z",-789527183),(0));
var y = cljs.core.get.call(null,map__18774__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__18774__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
return [cljs.core.str("scale("),cljs.core.str((function (){var or__3622__auto__ = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return scale;
}
})()),cljs.core.str(")"),cljs.core.str("translate3d("),cljs.core.str((function (){var or__3622__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return x;
}
})()),cljs.core.str("%,"),cljs.core.str((function (){var or__3622__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return y;
}
})()),cljs.core.str("%,"),cljs.core.str((function (){var or__3622__auto__ = new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return z;
}
})()),cljs.core.str("px)")].join('');
});
jade.utils.spacer = React.DOM.span({"style": {"marginTop": ".35rem"}, "className": "neutral-color margin-right2 bert large"},"/");
jade.utils.hand_state = (function hand_state(lambda,owner){
var state = om.core.get_state.call(null,owner);
return lambda.call(null,owner,state);
});
jade.utils.move_BANG_ = (function move_BANG_(dir,c,e){
e.preventDefault();

return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<->","<->",1485072401),dir], null));
});
jade.utils.lift_and_clear = (function lift_and_clear(cb,owner,ref,ev){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"submitting-email","submitting-email",-1725964407),false);

var node = om.core.get_node.call(null,owner,ref);
var val = node.value;
node.value = "";

return cb.call(null,val,owner);
});

//# sourceMappingURL=utils.js.map?rel=1545283550591