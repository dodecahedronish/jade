// Compiled by ClojureScript 0.0-2411
goog.provide('jade.views.browse');
goog.require('cljs.core');
goog.require('jade.components.header');
goog.require('jade.views.details');
goog.require('jade.components.image_view');
goog.require('jade.components.panel');
goog.require('jade.components.order');
goog.require('cljs.core.async');
goog.require('jade.views.order_details');
goog.require('goog.dom');
goog.require('jade.config');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('jade.components.image_view');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('jade.components.order');
goog.require('goog.dom');
goog.require('jade.components.header');
goog.require('jade.views.order_details');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.config');
goog.require('jade.utils');
goog.require('jade.views.details');
goog.require('jade.components.panel');
jade.views.browse.coord_process = (function coord_process(coord,owner,trans_out,state){
var c__12311__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto__){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto__){
return (function (state_17724){
var state_val_17725 = (state_17724[(1)]);
if((state_val_17725 === (7))){
var inst_17720 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
var statearr_17726_17805 = state_17724__$1;
(statearr_17726_17805[(2)] = inst_17720);

(statearr_17726_17805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (20))){
var inst_17713 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
var statearr_17727_17806 = state_17724__$1;
(statearr_17727_17806[(2)] = inst_17713);

(statearr_17727_17806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (1))){
var state_17724__$1 = state_17724;
var statearr_17728_17807 = state_17724__$1;
(statearr_17728_17807[(2)] = null);

(statearr_17728_17807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (24))){
var inst_17688 = (state_17724[(7)]);
var inst_17710 = cljs.core.println.call(null,inst_17688);
var state_17724__$1 = state_17724;
var statearr_17729_17808 = state_17724__$1;
(statearr_17729_17808[(2)] = inst_17710);

(statearr_17729_17808[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (4))){
var inst_17622 = (state_17724[(8)]);
var inst_17622__$1 = (state_17724[(2)]);
var state_17724__$1 = (function (){var statearr_17730 = state_17724;
(statearr_17730[(8)] = inst_17622__$1);

return statearr_17730;
})();
if(cljs.core.truth_(inst_17622__$1)){
var statearr_17731_17809 = state_17724__$1;
(statearr_17731_17809[(1)] = (5));

} else {
var statearr_17732_17810 = state_17724__$1;
(statearr_17732_17810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (15))){
var inst_17670 = [new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_17671 = [(140)];
var inst_17672 = cljs.core.PersistentHashMap.fromArrays(inst_17670,inst_17671);
var inst_17673 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"trans-detail","trans-detail",-1576853480),inst_17672);
var inst_17674 = cljs.core.async.timeout.call(null,(500));
var state_17724__$1 = (function (){var statearr_17733 = state_17724;
(statearr_17733[(9)] = inst_17673);

return statearr_17733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17724__$1,(16),inst_17674);
} else {
if((state_val_17725 === (21))){
var inst_17690 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"trans","trans",-1318503851),trans_out);
var state_17724__$1 = state_17724;
var statearr_17734_17811 = state_17724__$1;
(statearr_17734_17811[(2)] = inst_17690);

(statearr_17734_17811[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (13))){
var inst_17622 = (state_17724[(8)]);
var inst_17651 = cljs.core.async.chan.call(null,(1));
var inst_17652 = (function (){var c__12311__auto____$1 = inst_17651;
var sig = inst_17622;
var temp__4388__auto__ = inst_17622;
return ((function (c__12311__auto____$1,sig,temp__4388__auto__,inst_17622,inst_17651,state_val_17725,c__12311__auto__){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto____$1,sig,temp__4388__auto__,inst_17622,inst_17651,state_val_17725,c__12311__auto__){
return (function (state_17649){
var state_val_17650 = (state_17649[(1)]);
if((state_val_17650 === (2))){
var inst_17643 = (state_17649[(2)]);
var inst_17644 = [new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_17645 = [(0)];
var inst_17646 = cljs.core.PersistentHashMap.fromArrays(inst_17644,inst_17645);
var inst_17647 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"trans-order-details","trans-order-details",317383908),inst_17646);
var state_17649__$1 = (function (){var statearr_17735 = state_17649;
(statearr_17735[(7)] = inst_17643);

return statearr_17735;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17649__$1,inst_17647);
} else {
if((state_val_17650 === (1))){
var inst_17640 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"active-overlay","active-overlay",718455024),new cljs.core.Keyword(null,"order-details","order-details",582680591));
var inst_17641 = cljs.core.async.timeout.call(null,(55));
var state_17649__$1 = (function (){var statearr_17736 = state_17649;
(statearr_17736[(8)] = inst_17640);

return statearr_17736;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17649__$1,(2),inst_17641);
} else {
return null;
}
}
});})(c__12311__auto____$1,sig,temp__4388__auto__,inst_17622,inst_17651,state_val_17725,c__12311__auto__))
;
return ((function (switch__12255__auto__,c__12311__auto____$1,sig,temp__4388__auto__,inst_17622,inst_17651,state_val_17725,c__12311__auto__){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_17740 = [null,null,null,null,null,null,null,null,null];
(statearr_17740[(0)] = state_machine__12256__auto__);

(statearr_17740[(1)] = (1));

return statearr_17740;
});
var state_machine__12256__auto____1 = (function (state_17649){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_17649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e17741){if((e17741 instanceof Object)){
var ex__12259__auto__ = e17741;
var statearr_17742_17812 = state_17649;
(statearr_17742_17812[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17813 = state_17649;
state_17649 = G__17813;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_17649){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_17649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto____$1,sig,temp__4388__auto__,inst_17622,inst_17651,state_val_17725,c__12311__auto__))
})();
var state__12313__auto__ = (function (){var statearr_17743 = f__12312__auto__.call(null);
(statearr_17743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto____$1);

return statearr_17743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});
;})(c__12311__auto____$1,sig,temp__4388__auto__,inst_17622,inst_17651,state_val_17725,c__12311__auto__))
})();
var inst_17653 = cljs.core.async.impl.dispatch.run.call(null,inst_17652);
var state_17724__$1 = (function (){var statearr_17744 = state_17724;
(statearr_17744[(10)] = inst_17653);

return statearr_17744;
})();
var statearr_17745_17814 = state_17724__$1;
(statearr_17745_17814[(2)] = inst_17651);

(statearr_17745_17814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (22))){
var inst_17689 = (state_17724[(11)]);
var inst_17622 = (state_17724[(8)]);
var inst_17688 = (state_17724[(7)]);
var inst_17704 = cljs.core.async.chan.call(null,(1));
var inst_17705 = (function (){var c__12311__auto____$1 = inst_17704;
var value = inst_17689;
var vec__17687 = inst_17622;
var sig = inst_17688;
var temp__4388__auto__ = inst_17622;
return ((function (c__12311__auto____$1,value,vec__17687,sig,temp__4388__auto__,inst_17689,inst_17622,inst_17688,inst_17704,state_val_17725,c__12311__auto__){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto____$1,value,vec__17687,sig,temp__4388__auto__,inst_17689,inst_17622,inst_17688,inst_17704,state_val_17725,c__12311__auto__){
return (function (state_17702){
var state_val_17703 = (state_17702[(1)]);
if((state_val_17703 === (2))){
var inst_17696 = (state_17702[(2)]);
var inst_17697 = [new cljs.core.Keyword(null,"x","x",2099068185)];
var inst_17698 = [(0)];
var inst_17699 = cljs.core.PersistentHashMap.fromArrays(inst_17697,inst_17698);
var inst_17700 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"trans-detail","trans-detail",-1576853480),inst_17699);
var state_17702__$1 = (function (){var statearr_17746 = state_17702;
(statearr_17746[(7)] = inst_17696);

return statearr_17746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17702__$1,inst_17700);
} else {
if((state_val_17703 === (1))){
var inst_17692 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"active-strain","active-strain",379430935),value);
var inst_17693 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"active-overlay","active-overlay",718455024),new cljs.core.Keyword(null,"details","details",1956795411));
var inst_17694 = cljs.core.async.timeout.call(null,(55));
var state_17702__$1 = (function (){var statearr_17747 = state_17702;
(statearr_17747[(8)] = inst_17692);

(statearr_17747[(9)] = inst_17693);

return statearr_17747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17702__$1,(2),inst_17694);
} else {
return null;
}
}
});})(c__12311__auto____$1,value,vec__17687,sig,temp__4388__auto__,inst_17689,inst_17622,inst_17688,inst_17704,state_val_17725,c__12311__auto__))
;
return ((function (switch__12255__auto__,c__12311__auto____$1,value,vec__17687,sig,temp__4388__auto__,inst_17689,inst_17622,inst_17688,inst_17704,state_val_17725,c__12311__auto__){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_17751 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17751[(0)] = state_machine__12256__auto__);

(statearr_17751[(1)] = (1));

return statearr_17751;
});
var state_machine__12256__auto____1 = (function (state_17702){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_17702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e17752){if((e17752 instanceof Object)){
var ex__12259__auto__ = e17752;
var statearr_17753_17815 = state_17702;
(statearr_17753_17815[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17816 = state_17702;
state_17702 = G__17816;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_17702){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_17702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto____$1,value,vec__17687,sig,temp__4388__auto__,inst_17689,inst_17622,inst_17688,inst_17704,state_val_17725,c__12311__auto__))
})();
var state__12313__auto__ = (function (){var statearr_17754 = f__12312__auto__.call(null);
(statearr_17754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto____$1);

return statearr_17754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});
;})(c__12311__auto____$1,value,vec__17687,sig,temp__4388__auto__,inst_17689,inst_17622,inst_17688,inst_17704,state_val_17725,c__12311__auto__))
})();
var inst_17706 = cljs.core.async.impl.dispatch.run.call(null,inst_17705);
var state_17724__$1 = (function (){var statearr_17755 = state_17724;
(statearr_17755[(12)] = inst_17706);

return statearr_17755;
})();
var statearr_17756_17817 = state_17724__$1;
(statearr_17756_17817[(2)] = inst_17704);

(statearr_17756_17817[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (6))){
var state_17724__$1 = state_17724;
var statearr_17757_17818 = state_17724__$1;
(statearr_17757_17818[(2)] = null);

(statearr_17757_17818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (17))){
var inst_17679 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)];
var inst_17680 = [(0),(0),(0)];
var inst_17681 = cljs.core.PersistentHashMap.fromArrays(inst_17679,inst_17680);
var inst_17682 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"trans-detail","trans-detail",-1576853480),inst_17681);
var inst_17683 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"+cart","+cart",1400571324),true);
var state_17724__$1 = (function (){var statearr_17758 = state_17724;
(statearr_17758[(13)] = inst_17682);

return statearr_17758;
})();
var statearr_17759_17819 = state_17724__$1;
(statearr_17759_17819[(2)] = inst_17683);

(statearr_17759_17819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (3))){
var inst_17722 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17724__$1,inst_17722);
} else {
if((state_val_17725 === (12))){
var inst_17638 = (state_17724[(2)]);
var state_17724__$1 = state_17724;
var statearr_17760_17820 = state_17724__$1;
(statearr_17760_17820[(2)] = inst_17638);

(statearr_17760_17820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (2))){
var state_17724__$1 = state_17724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17724__$1,(4),coord);
} else {
if((state_val_17725 === (23))){
var inst_17708 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"clicked","clicked",114423720),true);
var state_17724__$1 = state_17724;
var statearr_17761_17821 = state_17724__$1;
(statearr_17761_17821[(2)] = inst_17708);

(statearr_17761_17821[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (19))){
var inst_17622 = (state_17724[(8)]);
var inst_17688 = (state_17724[(7)]);
var inst_17688__$1 = cljs.core.nth.call(null,inst_17622,(0),null);
var inst_17689 = cljs.core.nth.call(null,inst_17622,(1),null);
var state_17724__$1 = (function (){var statearr_17762 = state_17724;
(statearr_17762[(11)] = inst_17689);

(statearr_17762[(7)] = inst_17688__$1);

return statearr_17762;
})();
var G__17763_17822 = (((inst_17688__$1 instanceof cljs.core.Keyword))?inst_17688__$1.fqn:null);
switch (G__17763_17822) {
case "clicked":
var statearr_17764_17824 = state_17724__$1;
(statearr_17764_17824[(1)] = (23));


break;
case "details-on":
var statearr_17765_17825 = state_17724__$1;
(statearr_17765_17825[(1)] = (22));


break;
case "toggle":
var statearr_17766_17826 = state_17724__$1;
(statearr_17766_17826[(1)] = (21));


break;
default:
var statearr_17767_17827 = state_17724__$1;
(statearr_17767_17827[(1)] = (24));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (11))){
var inst_17632 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"order-details","order-details",582680591),true);
var inst_17633 = [new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_17634 = [(0)];
var inst_17635 = cljs.core.PersistentHashMap.fromArrays(inst_17633,inst_17634);
var inst_17636 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"trans-order-details","trans-order-details",317383908),inst_17635);
var state_17724__$1 = (function (){var statearr_17768 = state_17724;
(statearr_17768[(14)] = inst_17632);

return statearr_17768;
})();
var statearr_17769_17828 = state_17724__$1;
(statearr_17769_17828[(2)] = inst_17636);

(statearr_17769_17828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (9))){
var inst_17624 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"order-details","order-details",582680591));
var state_17724__$1 = state_17724;
if(cljs.core.truth_(inst_17624)){
var statearr_17770_17829 = state_17724__$1;
(statearr_17770_17829[(1)] = (10));

} else {
var statearr_17771_17830 = state_17724__$1;
(statearr_17771_17830[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (5))){
var inst_17622 = (state_17724[(8)]);
var state_17724__$1 = state_17724;
var G__17772_17831 = (((inst_17622 instanceof cljs.core.Keyword))?inst_17622.fqn:null);
switch (G__17772_17831) {
case "-cart":
var statearr_17773_17833 = state_17724__$1;
(statearr_17773_17833[(1)] = (18));


break;
case "+cart":
var statearr_17774_17834 = state_17724__$1;
(statearr_17774_17834[(1)] = (17));


break;
case "details-off":
var statearr_17775_17835 = state_17724__$1;
(statearr_17775_17835[(1)] = (15));


break;
case "details-on":
var statearr_17776_17836 = state_17724__$1;
(statearr_17776_17836[(1)] = (14));


break;
case "order-details":
var statearr_17777_17837 = state_17724__$1;
(statearr_17777_17837[(1)] = (13));


break;
case "toggle-order-details":
var statearr_17778_17838 = state_17724__$1;
(statearr_17778_17838[(1)] = (9));


break;
default:
var statearr_17779_17839 = state_17724__$1;
(statearr_17779_17839[(1)] = (19));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (14))){
var inst_17622 = (state_17724[(8)]);
var inst_17666 = cljs.core.async.chan.call(null,(1));
var inst_17667 = (function (){var c__12311__auto____$1 = inst_17666;
var sig = inst_17622;
var temp__4388__auto__ = inst_17622;
return ((function (c__12311__auto____$1,sig,temp__4388__auto__,inst_17622,inst_17666,state_val_17725,c__12311__auto__){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto____$1,sig,temp__4388__auto__,inst_17622,inst_17666,state_val_17725,c__12311__auto__){
return (function (state_17664){
var state_val_17665 = (state_17664[(1)]);
if((state_val_17665 === (2))){
var inst_17658 = (state_17664[(2)]);
var inst_17659 = [new cljs.core.Keyword(null,"x","x",2099068185)];
var inst_17660 = [(0)];
var inst_17661 = cljs.core.PersistentHashMap.fromArrays(inst_17659,inst_17660);
var inst_17662 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"trans-detail","trans-detail",-1576853480),inst_17661);
var state_17664__$1 = (function (){var statearr_17780 = state_17664;
(statearr_17780[(7)] = inst_17658);

return statearr_17780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17664__$1,inst_17662);
} else {
if((state_val_17665 === (1))){
var inst_17655 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"active-overlay","active-overlay",718455024),new cljs.core.Keyword(null,"details","details",1956795411));
var inst_17656 = cljs.core.async.timeout.call(null,(55));
var state_17664__$1 = (function (){var statearr_17781 = state_17664;
(statearr_17781[(8)] = inst_17655);

return statearr_17781;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17664__$1,(2),inst_17656);
} else {
return null;
}
}
});})(c__12311__auto____$1,sig,temp__4388__auto__,inst_17622,inst_17666,state_val_17725,c__12311__auto__))
;
return ((function (switch__12255__auto__,c__12311__auto____$1,sig,temp__4388__auto__,inst_17622,inst_17666,state_val_17725,c__12311__auto__){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_17785 = [null,null,null,null,null,null,null,null,null];
(statearr_17785[(0)] = state_machine__12256__auto__);

(statearr_17785[(1)] = (1));

return statearr_17785;
});
var state_machine__12256__auto____1 = (function (state_17664){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_17664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e17786){if((e17786 instanceof Object)){
var ex__12259__auto__ = e17786;
var statearr_17787_17840 = state_17664;
(statearr_17787_17840[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17841 = state_17664;
state_17664 = G__17841;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_17664){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_17664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto____$1,sig,temp__4388__auto__,inst_17622,inst_17666,state_val_17725,c__12311__auto__))
})();
var state__12313__auto__ = (function (){var statearr_17788 = f__12312__auto__.call(null);
(statearr_17788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto____$1);

return statearr_17788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});
;})(c__12311__auto____$1,sig,temp__4388__auto__,inst_17622,inst_17666,state_val_17725,c__12311__auto__))
})();
var inst_17668 = cljs.core.async.impl.dispatch.run.call(null,inst_17667);
var state_17724__$1 = (function (){var statearr_17789 = state_17724;
(statearr_17789[(15)] = inst_17668);

return statearr_17789;
})();
var statearr_17790_17842 = state_17724__$1;
(statearr_17790_17842[(2)] = inst_17666);

(statearr_17790_17842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (16))){
var inst_17676 = (state_17724[(2)]);
var inst_17677 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"+cart","+cart",1400571324),false);
var state_17724__$1 = (function (){var statearr_17791 = state_17724;
(statearr_17791[(16)] = inst_17676);

return statearr_17791;
})();
var statearr_17792_17843 = state_17724__$1;
(statearr_17792_17843[(2)] = inst_17677);

(statearr_17792_17843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (10))){
var inst_17626 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"order-details","order-details",582680591),null);
var inst_17627 = [new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_17628 = [91.25];
var inst_17629 = cljs.core.PersistentHashMap.fromArrays(inst_17627,inst_17628);
var inst_17630 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"trans-order-details","trans-order-details",317383908),inst_17629);
var state_17724__$1 = (function (){var statearr_17793 = state_17724;
(statearr_17793[(17)] = inst_17626);

return statearr_17793;
})();
var statearr_17794_17844 = state_17724__$1;
(statearr_17794_17844[(2)] = inst_17630);

(statearr_17794_17844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (18))){
var inst_17685 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"+cart","+cart",1400571324),false);
var state_17724__$1 = state_17724;
var statearr_17795_17845 = state_17724__$1;
(statearr_17795_17845[(2)] = inst_17685);

(statearr_17795_17845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17725 === (8))){
var inst_17716 = (state_17724[(2)]);
var state_17724__$1 = (function (){var statearr_17796 = state_17724;
(statearr_17796[(18)] = inst_17716);

return statearr_17796;
})();
var statearr_17797_17846 = state_17724__$1;
(statearr_17797_17846[(2)] = null);

(statearr_17797_17846[(1)] = (2));


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
}
}
});})(c__12311__auto__))
;
return ((function (switch__12255__auto__,c__12311__auto__){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_17801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17801[(0)] = state_machine__12256__auto__);

(statearr_17801[(1)] = (1));

return statearr_17801;
});
var state_machine__12256__auto____1 = (function (state_17724){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_17724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e17802){if((e17802 instanceof Object)){
var ex__12259__auto__ = e17802;
var statearr_17803_17847 = state_17724;
(statearr_17803_17847[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17848 = state_17724;
state_17724 = G__17848;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_17724){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_17724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto__))
})();
var state__12313__auto__ = (function (){var statearr_17804 = f__12312__auto__.call(null);
(statearr_17804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto__);

return statearr_17804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto__))
);

return c__12311__auto__;
});

var component_fnk__7745__auto___17870 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema17856 = schema.core.Any;
var input_schema17857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17855","map17855",-1841256260,null))], null);
var input_checker17858 = schema.core.checker.call(null,input_schema17857);
var output_checker17859 = schema.core.checker.call(null,output_schema17856);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859){
return (function constructor17853(G__17860){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___17871 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17860], null);
var temp__4388__auto___17872 = input_checker17858.call(null,args__5938__auto___17871);
if(cljs.core.truth_(temp__4388__auto___17872)){
var error__5939__auto___17873 = temp__4388__auto___17872;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17853","constructor17853",-570845439,null),cljs.core.pr_str.call(null,error__5939__auto___17873)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17857,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___17871,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17873], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map17855 = G__17860;
while(true){
if(cljs.core.map_QMARK_.call(null,map17855)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17855)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map17855,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map17855,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map17855,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map17855,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.browse.t17864 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.browse.t17864 = (function (constructor17853,validate__5937__auto__,owner,input_schema17857,data,output_checker17859,state,output_schema17856,G__17860,input_checker17858,map17855,opts,ufv__,meta17865){
this.constructor17853 = constructor17853;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.input_schema17857 = input_schema17857;
this.data = data;
this.output_checker17859 = output_checker17859;
this.state = state;
this.output_schema17856 = output_schema17856;
this.G__17860 = G__17860;
this.input_checker17858 = input_checker17858;
this.map17855 = map17855;
this.opts = opts;
this.ufv__ = ufv__;
this.meta17865 = meta17865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.browse.t17864.prototype.om$core$IDisplayName$ = true;

jade.views.browse.t17864.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859){
return (function (_){
var self__ = this;
var ___$1 = this;
return "browse*";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859))
;

jade.views.browse.t17864.prototype.om$core$IRender$ = true;

jade.views.browse.t17864.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859){
return (function (_){
var self__ = this;
var ___$1 = this;
var p_opts = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"state","state",-1988618099)],[self__.opts,cljs.core.deref.call(null,self__.state)]);
var strands = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"strands","strands",523667085));
var lense = new cljs.core.Keyword(null,"lense","lense",-586657859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
return cljs.core.apply.call(null,React.DOM.section,{"style": {"overflowY": "hidden", "overflowX": "hidden"}, "className": "full flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"left": (0), "top": (0), "overflowY": "hidden", "overflowX": "hidden", "zIndex": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))?(-1):(0))), "position": "absolute"}, "className": "full flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.header.__GT_header.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left-icon","left-icon",769524213),"cogwheel",new cljs.core.Keyword(null,"bg","bg",-206688421),"white",new cljs.core.Keyword(null,"right-icon","right-icon",-707506540),"search"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null)),cljs.core.apply.call(null,React.DOM.div,{"style": {"width": "100%", "height": "7.5%", "zIndex": (1), "left": (0), "top": "8%", "position": "absolute", "background": "transparent"}, "className": "flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"width": "95%", "height": "100%", "background": "#fff", "zIndex": (1005), "borderBottom": "1px solid #c3d6ce", "position": "relative"}, "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"width": "90%"}, "className": "flex-between"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,((function (p_opts,strands,lense,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859){
return (function (lense__$1){
var change_lense_BANG_ = ((function (p_opts,strands,lense,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859){
return (function (___$2){
return cljs.core.swap_BANG_.call(null,self__.state,((function (p_opts,strands,lense,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859){
return (function (p1__17849_SHARP_){
return cljs.core.assoc.call(null,p1__17849_SHARP_,new cljs.core.Keyword(null,"lense","lense",-586657859),cljs.core.keyword.call(null,lense__$1));
});})(p_opts,strands,lense,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859))
);
});})(p_opts,strands,lense,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859))
;
if(cljs.core._EQ_.call(null,lense__$1,cljs.core.name.call(null,new cljs.core.Keyword(null,"lense","lense",-586657859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state))))){
return cljs.core.apply.call(null,React.DOM.span,{"onClick": om_tools.dom.format_opts.call(null,change_lense_BANG_), "onTouchStart": om_tools.dom.format_opts.call(null,change_lense_BANG_), "className": "base-color gothic regular"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[lense__$1],null))));
} else {
return cljs.core.apply.call(null,React.DOM.span,{"style": {"color": "#8b9495"}, "onClick": om_tools.dom.format_opts.call(null,change_lense_BANG_), "onTouchStart": om_tools.dom.format_opts.call(null,change_lense_BANG_), "className": "bert regular"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[lense__$1],null))));
}
});})(p_opts,strands,lense,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","Sativa","Indica","Hybrid","JadeMeNow"], null))],null))))],null)))),React.DOM.div({"style": {"left": (0), "bottom": (0), "position": "relative"}, "className": "header_shadow", "width": "100%"},"")],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"height": "77%", "width": "100%", "overflowX": "hidden", "overflowY": "scroll", "top": "15%", "position": "absolute"}, "className": "column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map_indexed.call(null,((function (p_opts,strands,lense,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859){
return (function (p1__17851_SHARP_,p2__17850_SHARP_){
return jade.components.image_view.__GT_product_view.call(null,cljs.core.assoc.call(null,p2__17850_SHARP_,new cljs.core.Keyword(null,"idx","idx",1053688473),p1__17851_SHARP_),p_opts);
});})(p_opts,strands,lense,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859))
,lense.call(null,strands))],null)))),jade.views.order_details.__GT_order_details.call(null,self__.data,p_opts)],null)))),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"active-overlay","active-overlay",718455024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state))))?jade.views.details.__GT_details.call(null,new cljs.core.Keyword(null,"active-strain","active-strain",379430935).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)),p_opts):null)],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859))
;

jade.views.browse.t17864.prototype.om$core$IInitState$ = true;

jade.views.browse.t17864.prototype.om$core$IInitState$init_state$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lense","lense",-586657859),new cljs.core.Keyword(null,"All","All",-2078402587),new cljs.core.Keyword(null,"active-overlay","active-overlay",718455024),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"clicked","clicked",114423720),false,new cljs.core.Keyword(null,"trans-order-details","trans-order-details",317383908),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(90)], null),new cljs.core.Keyword(null,"trans-detail","trans-detail",-1576853480),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(140)], null)], null);
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859))
;

jade.views.browse.t17864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859){
return (function (_17866){
var self__ = this;
var _17866__$1 = this;
return self__.meta17865;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859))
;

jade.views.browse.t17864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859){
return (function (_17866,meta17865__$1){
var self__ = this;
var _17866__$1 = this;
return (new jade.views.browse.t17864(self__.constructor17853,self__.validate__5937__auto__,self__.owner,self__.input_schema17857,self__.data,self__.output_checker17859,self__.state,self__.output_schema17856,self__.G__17860,self__.input_checker17858,self__.map17855,self__.opts,self__.ufv__,meta17865__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859))
;

jade.views.browse.t17864.cljs$lang$type = true;

jade.views.browse.t17864.cljs$lang$ctorStr = "jade.views.browse/t17864";

jade.views.browse.t17864.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.browse/t17864");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859))
;

jade.views.browse.__GT_t17864 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859){
return (function __GT_t17864(constructor17853__$1,validate__5937__auto____$1,owner__$1,input_schema17857__$1,data__$1,output_checker17859__$1,state__$1,output_schema17856__$1,G__17860__$1,input_checker17858__$1,map17855__$1,opts__$1,ufv____$1,meta17865){
return (new jade.views.browse.t17864(constructor17853__$1,validate__5937__auto____$1,owner__$1,input_schema17857__$1,data__$1,output_checker17859__$1,state__$1,output_schema17856__$1,G__17860__$1,input_checker17858__$1,map17855__$1,opts__$1,ufv____$1,meta17865));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859))
;

}

return (new jade.views.browse.t17864(constructor17853,validate__5937__auto__,owner,input_schema17857,data,output_checker17859,state,output_schema17856,G__17860,input_checker17858,map17855,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___17874 = output_checker17859.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___17874)){
var error__5939__auto___17875 = temp__4388__auto___17874;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17853","constructor17853",-570845439,null),cljs.core.pr_str.call(null,error__5939__auto___17875)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17856,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17875], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema17856,input_schema17857,input_checker17858,output_checker17859))
,schema.core.make_fn_schema.call(null,output_schema17856,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17857], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.browse.browse_STAR_ = ((function (component_fnk__7745__auto___17870){
return (function() { 
var browse_STAR___delegate = function (data__7746__auto__,owner17852,p__17867){
var vec__17869 = p__17867;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__17869,(0),null);
return component_fnk__7745__auto___17870.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner17852),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17852,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var browse_STAR_ = function (data__7746__auto__,owner17852,var_args){
var p__17867 = null;
if (arguments.length > 2) {
  p__17867 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return browse_STAR___delegate.call(this,data__7746__auto__,owner17852,p__17867);};
browse_STAR_.cljs$lang$maxFixedArity = 2;
browse_STAR_.cljs$lang$applyTo = (function (arglist__17876){
var data__7746__auto__ = cljs.core.first(arglist__17876);
arglist__17876 = cljs.core.next(arglist__17876);
var owner17852 = cljs.core.first(arglist__17876);
var p__17867 = cljs.core.rest(arglist__17876);
return browse_STAR___delegate(data__7746__auto__,owner17852,p__17867);
});
browse_STAR_.cljs$core$IFn$_invoke$arity$variadic = browse_STAR___delegate;
return browse_STAR_;
})()
;})(component_fnk__7745__auto___17870))
;

jade.views.browse.__GT_browse_STAR_ = (function() {
var __GT_browse_STAR_ = null;
var __GT_browse_STAR___1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.browse.browse_STAR_,cursor__7714__auto__);
});
var __GT_browse_STAR___2 = (function (cursor__7714__auto__,m17854){
return om.core.build.call(null,jade.views.browse.browse_STAR_,cursor__7714__auto__,m17854);
});
__GT_browse_STAR_ = function(cursor__7714__auto__,m17854){
switch(arguments.length){
case 1:
return __GT_browse_STAR___1.call(this,cursor__7714__auto__);
case 2:
return __GT_browse_STAR___2.call(this,cursor__7714__auto__,m17854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_browse_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_browse_STAR___1;
__GT_browse_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_browse_STAR___2;
return __GT_browse_STAR_;
})()
;

var component_fnk__7745__auto___17895 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema17881 = schema.core.Any;
var input_schema17882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map17880","map17880",2006795036,null))], null);
var input_checker17883 = schema.core.checker.call(null,input_schema17882);
var output_checker17884 = schema.core.checker.call(null,output_schema17881);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884){
return (function constructor17878(G__17885){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___17896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17885], null);
var temp__4388__auto___17897 = input_checker17883.call(null,args__5938__auto___17896);
if(cljs.core.truth_(temp__4388__auto___17897)){
var error__5939__auto___17898 = temp__4388__auto___17897;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17878","constructor17878",-842606780,null),cljs.core.pr_str.call(null,error__5939__auto___17898)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17882,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___17896,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17898], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map17880 = G__17885;
while(true){
if(cljs.core.map_QMARK_.call(null,map17880)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map17880)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map17880,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map17880,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map17880,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map17880,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.browse.t17889 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.browse.t17889 = (function (input_checker17883,validate__5937__auto__,G__17885,owner,constructor17878,data,input_schema17882,output_schema17881,state,output_checker17884,opts,map17880,ufv__,meta17890){
this.input_checker17883 = input_checker17883;
this.validate__5937__auto__ = validate__5937__auto__;
this.G__17885 = G__17885;
this.owner = owner;
this.constructor17878 = constructor17878;
this.data = data;
this.input_schema17882 = input_schema17882;
this.output_schema17881 = output_schema17881;
this.state = state;
this.output_checker17884 = output_checker17884;
this.opts = opts;
this.map17880 = map17880;
this.ufv__ = ufv__;
this.meta17890 = meta17890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.browse.t17889.prototype.om$core$IDisplayName$ = true;

jade.views.browse.t17889.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884){
return (function (_){
var self__ = this;
var ___$1 = this;
return "browse";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884))
;

jade.views.browse.t17889.prototype.om$core$IRender$ = true;

jade.views.browse.t17889.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884){
return (function (_){
var self__ = this;
var ___$1 = this;
var coord = cljs.core.async.chan.call(null);
var layout = jade.config.add_main_transition.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ease"], null),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"trans-bg","trans-bg",882644547),"gray",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),jade.views.browse.browse_STAR_,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null),new cljs.core.Keyword(null,"coord-process","coord-process",-979975093),jade.views.browse.coord_process], null));
return jade.components.panel.__GT_panel.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"init-state","init-state",1450863212),layout], null));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884))
;

jade.views.browse.t17889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884){
return (function (_17891){
var self__ = this;
var _17891__$1 = this;
return self__.meta17890;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884))
;

jade.views.browse.t17889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884){
return (function (_17891,meta17890__$1){
var self__ = this;
var _17891__$1 = this;
return (new jade.views.browse.t17889(self__.input_checker17883,self__.validate__5937__auto__,self__.G__17885,self__.owner,self__.constructor17878,self__.data,self__.input_schema17882,self__.output_schema17881,self__.state,self__.output_checker17884,self__.opts,self__.map17880,self__.ufv__,meta17890__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884))
;

jade.views.browse.t17889.cljs$lang$type = true;

jade.views.browse.t17889.cljs$lang$ctorStr = "jade.views.browse/t17889";

jade.views.browse.t17889.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.browse/t17889");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884))
;

jade.views.browse.__GT_t17889 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884){
return (function __GT_t17889(input_checker17883__$1,validate__5937__auto____$1,G__17885__$1,owner__$1,constructor17878__$1,data__$1,input_schema17882__$1,output_schema17881__$1,state__$1,output_checker17884__$1,opts__$1,map17880__$1,ufv____$1,meta17890){
return (new jade.views.browse.t17889(input_checker17883__$1,validate__5937__auto____$1,G__17885__$1,owner__$1,constructor17878__$1,data__$1,input_schema17882__$1,output_schema17881__$1,state__$1,output_checker17884__$1,opts__$1,map17880__$1,ufv____$1,meta17890));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884))
;

}

return (new jade.views.browse.t17889(input_checker17883,validate__5937__auto__,G__17885,owner,constructor17878,data,input_schema17882,output_schema17881,state,output_checker17884,opts,map17880,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___17899 = output_checker17884.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___17899)){
var error__5939__auto___17900 = temp__4388__auto___17899;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor17878","constructor17878",-842606780,null),cljs.core.pr_str.call(null,error__5939__auto___17900)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17881,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17900], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema17881,input_schema17882,input_checker17883,output_checker17884))
,schema.core.make_fn_schema.call(null,output_schema17881,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17882], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.browse.browse = ((function (component_fnk__7745__auto___17895){
return (function() { 
var browse__delegate = function (data__7746__auto__,owner17877,p__17892){
var vec__17894 = p__17892;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__17894,(0),null);
return component_fnk__7745__auto___17895.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner17877),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner17877,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var browse = function (data__7746__auto__,owner17877,var_args){
var p__17892 = null;
if (arguments.length > 2) {
  p__17892 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return browse__delegate.call(this,data__7746__auto__,owner17877,p__17892);};
browse.cljs$lang$maxFixedArity = 2;
browse.cljs$lang$applyTo = (function (arglist__17901){
var data__7746__auto__ = cljs.core.first(arglist__17901);
arglist__17901 = cljs.core.next(arglist__17901);
var owner17877 = cljs.core.first(arglist__17901);
var p__17892 = cljs.core.rest(arglist__17901);
return browse__delegate(data__7746__auto__,owner17877,p__17892);
});
browse.cljs$core$IFn$_invoke$arity$variadic = browse__delegate;
return browse;
})()
;})(component_fnk__7745__auto___17895))
;

jade.views.browse.__GT_browse = (function() {
var __GT_browse = null;
var __GT_browse__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.browse.browse,cursor__7714__auto__);
});
var __GT_browse__2 = (function (cursor__7714__auto__,m17879){
return om.core.build.call(null,jade.views.browse.browse,cursor__7714__auto__,m17879);
});
__GT_browse = function(cursor__7714__auto__,m17879){
switch(arguments.length){
case 1:
return __GT_browse__1.call(this,cursor__7714__auto__);
case 2:
return __GT_browse__2.call(this,cursor__7714__auto__,m17879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_browse.cljs$core$IFn$_invoke$arity$1 = __GT_browse__1;
__GT_browse.cljs$core$IFn$_invoke$arity$2 = __GT_browse__2;
return __GT_browse;
})()
;

//# sourceMappingURL=browse.js.map?rel=1545283548947