webpackJsonp([11],{1672:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),r=n.n(s),l=n(22),c=n.n(l),d=n(2036),u=n(2),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),m=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"componentDidMount",value:function(){n.i(d.a)(this.refs.container)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(c.a,{title:n.i(u.translate)("custom_metrics.page")}),r.a.createElement("div",{ref:"container"}))}}]),t}(r.a.PureComponent);t.default=m},1775:function(e,t,n){"use strict";var i=n(4),a=(n.n(i),n(17)),o=n.n(a);t.a=o.a.Model.extend({idAttribute:"id",urlRoot:function(){return window.baseUrl+"/api/metrics"},sync:function(e,t,a){var s=a||{};return"create"===e&&n.i(i.defaults)(s,{url:this.urlRoot()+"/create",type:"POST",data:n.i(i.pick)(t.toJSON(),"key","name","description","domain","type")}),"update"===e&&n.i(i.defaults)(s,{url:this.urlRoot()+"/update",type:"POST",data:n.i(i.pick)(t.toJSON(),"id","key","name","description","domain","type")}),"delete"===e&&n.i(i.defaults)(s,{url:this.urlRoot()+"/delete",type:"POST",data:{ids:this.id}}),o.a.ajax(s)}})},1799:function(e,t,n){"use strict";var i=n(17),a=n.n(i),o=n(1775);t.a=a.a.Collection.extend({model:o.a,url:function(){return window.baseUrl+"/api/metrics/search"},parse:function(e){return this.total=e.total,this.p=e.p,this.ps=e.ps,e.metrics},fetch:function(e){var t=Object.assign({data:{}},e);return this.q=t.data.q,t.data.isCustom=!0,a.a.Collection.prototype.fetch.call(this,t)},fetchMore:function(){var e=this.p+1;return this.fetch({add:!0,remove:!1,data:{p:e,ps:this.ps,q:this.q}})},refresh:function(){return this.fetch({reset:!0,data:{q:this.q}})},hasMore:function(){return this.total>this.p*this.ps}})},1902:function(e,t,n){"use strict";var i=n(11),a=n.n(i),o=n(30),s=n(2276),r=n.n(s);t.a=o.a.extend({template:r.a,onRender:function(){var e=this;o.a.prototype.onRender.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"}),this.$("#create-metric-domain").select2({width:"250px",createSearchChoice:function(e){return{id:e,text:"+"+e}},createSearchChoicePosition:"top",initSelection:function(e,t){var n=a()(e).val();t({id:n,text:n})},query:function(t){var n=e.options.domains.filter(function(e){return-1!==e.toLowerCase().indexOf(t.term.toLowerCase())}),i=n.map(function(e){return{id:e,text:e}});t.callback({results:i,more:!1})}}).select2("val",this.model&&this.model.get("domain")),this.$("#create-metric-type").select2({width:"250px"})},onDestroy:function(){o.a.prototype.onDestroy.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip("destroy")},onFormSubmit:function(){o.a.prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},serializeData:function(){return Object.assign({},o.a.prototype.serializeData.apply(this,arguments),{domains:this.options.domains,types:this.options.types})}})},2033:function(e,t,n){"use strict";var i=n(1775),a=n(1902);t.a=a.a.extend({sendRequest:function(){var e=this,t=new i.a({key:this.$("#create-metric-key").val(),name:this.$("#create-metric-name").val(),description:this.$("#create-metric-description").val(),domain:this.$("#create-metric-domain").val(),type:this.$("#create-metric-type").val()});return this.disableForm(),t.save(null,{statusCode:{400:null}}).done(function(){e.collection.refresh(),-1===e.options.domains.indexOf(t.get("domain"))&&e.options.domains.push(t.get("domain")),e.destroy()}).fail(function(t){e.showErrors(t.responseJSON.errors,t.responseJSON.warnings),e.enableForm()})}})},2034:function(e,t,n){"use strict";var i=n(30),a=n(2275),o=n.n(a);t.a=i.a.extend({template:o.a,onFormSubmit:function(){i.a.prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},sendRequest:function(){var e=this,t=this.model.collection;return this.model.destroy({wait:!0,statusCode:{400:null}}).done(function(){t.refresh(),e.destroy()}).fail(function(t){e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},2035:function(e,t,n){"use strict";var i=n(13),a=n.n(i),o=n(2033),s=n(2277),r=n.n(s);t.a=a.a.ItemView.extend({template:r.a,events:{"click #metrics-create":"onCreateClick"},onCreateClick:function(e){e.preventDefault(),this.createMetric()},createMetric:function(){new o.a({collection:this.collection,domains:this.options.domains,types:this.options.types,app:this.options.app}).render()}})},2036:function(e,t,n){"use strict";var i=n(11),a=n.n(i),o=n(13),s=n.n(o),r=n(2037),l=n(1799),c=n(2035),d=n(2040),u=n(2038),p=new s.a.Application,m=function(e){this.layout=new r.a({el:e}),this.layout.render(),this.metrics=new l.a,this.headerView=new c.a({collection:this.metrics,domains:this.domains,types:this.types,app:p}),this.layout.headerRegion.show(this.headerView),this.listView=new d.a({collection:this.metrics,domains:this.domains,types:this.types}),this.layout.listRegion.show(this.listView),this.listFooterView=new u.a({collection:this.metrics}),this.layout.listFooterRegion.show(this.listFooterView),this.metrics.fetch()};p.requestDomains=function(){return a.a.get(window.baseUrl+"/api/metrics/domains").done(function(e){p.domains=e.domains})},p.requestTypes=function(){return a.a.get(window.baseUrl+"/api/metrics/types").done(function(e){p.types=e.types})},p.on("start",function(e){a.a.when(p.requestDomains(),p.requestTypes()).done(function(){m.call(p,e)})}),t.a=function(e){p.start(e)}},2037:function(e,t,n){"use strict";var i=n(13),a=n.n(i),o=n(2278),s=n.n(o);t.a=a.a.LayoutView.extend({template:s.a,regions:{headerRegion:"#metrics-header",listRegion:"#metrics-list",listFooterRegion:"#metrics-list-footer"}})},2038:function(e,t,n){"use strict";var i=n(13),a=n.n(i),o=n(2279),s=n.n(o);t.a=a.a.ItemView.extend({template:s.a,collectionEvents:{all:"render"},events:{"click #metrics-fetch-more":"onMoreClick"},onMoreClick:function(e){e.preventDefault(),this.fetchMore()},fetchMore:function(){this.collection.fetchMore()},serializeData:function(){return Object.assign({},a.a.ItemView.prototype.serializeData.apply(this,arguments),{total:this.collection.total,count:this.collection.length,more:this.collection.hasMore()})}})},2039:function(e,t,n){"use strict";var i=n(13),a=n.n(i),o=n(2041),s=n(2034),r=n(2280),l=n.n(r);t.a=a.a.ItemView.extend({tagName:"li",className:"panel panel-vertical",template:l.a,events:{"click .js-metric-update":"onUpdateClick","click .js-metric-delete":"onDeleteClick"},onRender:function(){this.$el.attr("data-id",this.model.id).attr("data-key",this.model.get("key")),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"})},onDestroy:function(){this.$('[data-toggle="tooltip"]').tooltip("destroy")},onUpdateClick:function(e){e.preventDefault(),this.updateMetric()},onDeleteClick:function(e){e.preventDefault(),this.deleteMetric()},updateMetric:function(){new o.a({model:this.model,collection:this.model.collection,types:this.options.types,domains:this.options.domains}).render()},deleteMetric:function(){new s.a({model:this.model}).render()}})},2040:function(e,t,n){"use strict";var i=n(13),a=n.n(i),o=n(2039);t.a=a.a.CollectionView.extend({tagName:"ul",childView:o.a,childViewOptions:function(){return{types:this.options.types,domains:this.options.domains}}})},2041:function(e,t,n){"use strict";var i=n(1902);t.a=i.a.extend({sendRequest:function(){var e=this;return this.model.set({key:this.$("#create-metric-key").val(),name:this.$("#create-metric-name").val(),description:this.$("#create-metric-description").val(),domain:this.$("#create-metric-domain").val(),type:this.$("#create-metric-type").val()}),this.disableForm(),this.model.save(null,{statusCode:{400:null}}).done(function(){e.collection.refresh(),e.destroy()}).fail(function(t){e.enableForm(),e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},2275:function(e,t,n){var i=n(5);e.exports=(i.default||i).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var a,o=t.helperMissing;return'<form id="delete-metric-form">\n  <div class="modal-head">\n    <h2>Delete Metric</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    Are you sure you want to delete metric "'+(0,this.escapeExpression)((a=null!=(a=t.name||(null!=e?e.name:e))?a:o,"function"==typeof a?a.call(e,{name:"name",hash:{},data:i}):a))+'"?\n  </div>\n  <div class="modal-foot">\n    <button id="delete-metric-submit" class="button-red">Delete</button>\n    <a href="#" class="js-modal-close" id="delete-metric-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0})},2276:function(e,t,n){function i(e){return e&&(e.__esModule?e.default:e)}var a=n(5);e.exports=(a.default||a).template({1:function(e,t,n,i){return"Update"},3:function(e,t,n,i){return"Create"},5:function(e,t,a,o,s){var r,l=this.lambda,c=this.escapeExpression,d='          <option value="'+c(l(e,e))+'" ';return r=i(n(12)).call(e,e,null!=s[1]?s[1].type:s[1],{name:"eq",hash:{},fn:this.program(6,o,s),inverse:this.noop,data:o}),null!=r&&(d+=r),d+">"+c(i(n(1)).call(e,"metric.type",e,{name:"t",hash:{},data:o}))+"</option>\n"},6:function(e,t,n,i){return"selected"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i,a){var o,s=this.lambda,r=this.escapeExpression,l='<form id="create-metric-form" autocomplete="off">\n  <div class="modal-head">\n    <h2>';return o=t.if.call(e,null!=e?e.id:e,{name:"if",hash:{},fn:this.program(1,i,a),inverse:this.program(3,i,a),data:i}),null!=o&&(l+=o),l+=' Metric</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    <div class="modal-field">\n      <label for="create-metric-key">Key<em class="mandatory">*</em></label>\n      <input id="create-metric-key" name="key" type="text" maxlength="200" required value="'+r(s(null!=e?e.key:e,e))+'">\n    </div>\n    <div class="modal-field">\n      <label for="create-metric-name">Name<em class="mandatory">*</em></label>\n      <input id="create-metric-name" name="name" type="text" maxlength="200" required value="'+r(s(null!=e?e.name:e,e))+'">\n    </div>\n    <div class="modal-field">\n      <label for="create-metric-description">Description</label>\n      <textarea id="create-metric-description" name="description">'+r(s(null!=e?e.description:e,e))+'</textarea>\n    </div>\n    <div class="modal-field">\n      <label for="create-metric-domain">Domain</label>\n      <input id="create-metric-domain" name="domain" type="text" maxlength="200" value="'+r(s(null!=e?e.domain:e,e))+'">\n    </div>\n    <div class="modal-field">\n      <label for="create-metric-type">Type<em class="mandatory">*</em></label>\n      <select id="create-metric-type" name="type">\n',o=t.each.call(e,null!=e?e.types:e,{name:"each",hash:{},fn:this.program(5,i,a),inverse:this.noop,data:i}),null!=o&&(l+=o),l+='      </select>\n    </div>\n  </div>\n  <div class="modal-foot">\n    <button id="create-metric-submit">',o=t.if.call(e,null!=e?e.id:e,{name:"if",hash:{},fn:this.program(1,i,a),inverse:this.program(3,i,a),data:i}),null!=o&&(l+=o),l+'</button>\n    <a href="#" class="js-modal-close" id="create-metric-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0,useDepths:!0})},2277:function(e,t,n){var i=n(5);e.exports=(i.default||i).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){return'<header class="page-header">\n  <h1 class="page-title">Custom Metrics</h1>\n  <div class="page-actions">\n    <div class="button-group">\n      <button id="metrics-create">Create Metric</button>\n    </div>\n  </div>\n  <p class="page-description">These metrics are available for all projects. Manual measures can be set at project level\n    via the configuration interface.</p>\n</header>\n'},useData:!0})},2278:function(e,t,n){var i=n(5);e.exports=(i.default||i).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){return'<div class="page">\n  <div id="metrics-header"></div>\n  <div id="metrics-list"></div>\n  <div id="metrics-list-footer"></div>\n</div>\n'},useData:!0})},2279:function(e,t,n){var i=n(5);e.exports=(i.default||i).template({1:function(e,t,n,i){return'    <a id="metrics-fetch-more" class="spacer-left" href="#">show more</a>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var a,o,s=t.helperMissing,r=this.escapeExpression,l='<footer class="spacer-top note text-center">\n  '+r((o=null!=(o=t.count||(null!=e?e.count:e))?o:s,"function"==typeof o?o.call(e,{name:"count",hash:{},data:i}):o))+"/"+r((o=null!=(o=t.total||(null!=e?e.total:e))?o:s,"function"==typeof o?o.call(e,{name:"total",hash:{},data:i}):o))+" shown\n";return a=t.if.call(e,null!=e?e.more:e,{name:"if",hash:{},fn:this.program(1,i),inverse:this.noop,data:i}),null!=a&&(l+=a),l+"</footer>\n"},useData:!0})},2280:function(e,t,n){function i(e){return e&&(e.__esModule?e.default:e)}var a=n(5);e.exports=(a.default||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,o){var s=this.lambda,r=this.escapeExpression;return'<div class="pull-right big-spacer-left nowrap">\n  <a class="js-metric-update icon-edit" title="Update" data-toggle="tooltip" href="#"></a>\n  <a class="js-metric-delete icon-delete" title="Delete" data-toggle="tooltip" href="#"></a>\n</div>\n\n<div class="display-inline-block text-top width-30">\n  <div>\n    <strong class="js-metric-name">'+r(s(null!=e?e.name:e,e))+'</strong>\n    <span class="js-metric-key note little-spacer-left">'+r(s(null!=e?e.key:e,e))+'</span>\n  </div>\n</div>\n\n<div class="display-inline-block text-top width-20">\n  <span class="js-metric-domain">'+r(s(null!=e?e.domain:e,e))+'</span>\n</div>\n\n<div class="display-inline-block text-top width-20">\n  <span class="js-metric-type">'+r(i(n(1)).call(e,"metric.type",null!=e?e.type:e,{name:"t",hash:{},data:o}))+'</span>\n</div>\n\n<div class="display-inline-block text-top width-20">\n  <span class="js-metric-description">'+r(s(null!=e?e.description:e,e))+"</span>\n</div>\n"},useData:!0})}});
//# sourceMappingURL=11.0ba2596a.chunk.js.map