'use strict';

exports.install = function(Vue) {
  var _ = Vue.util;

  Vue.directive('once', {
    isFn: true,

    bind: function() {
      this.context = this.binding.isExp
        ? this.vm
        : this.binding.compiler.vm;
    },

    update: function(handler) {
      if (typeof handler !== 'function') {
        _.warn('Directive "v-once:' + this.expression + '" expects a method.');
        return;
      }

      var self = this;
      var context = this.context;

      this.handler = function(e) {
        self.reset();

        e.targetVM = self.vm;
        context.$event = e;

        var res = handler.call(context, e);
        context.$event = null;

        return res;
      };

      this.el.addEventListener(this.arg, this.handler);
    },

    reset: function() {
      this.el.removeEventListener(this.arg, this.handler);
    },

    unbind: function() {
      this.reset();
    }
  });
};
