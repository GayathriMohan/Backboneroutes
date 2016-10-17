var View1 = Backbone.View.extend({
    initialize: function() {
        this.input = $('<input type="text" value="heylo"><br>');
    },
    render: function() {
        this.$el.html(this.input);
        return this;
    }
});
var View2 = Backbone.View.extend({
    initialize: function() {
        this.textarea = $('<textarea rows="10" cols="30">');
    },

    render: function() {
        this.$el.html(this.textarea);
        return this;
    }
});
var View3 = Backbone.View.extend({
    initialize: function() {
        this.heading = $('<h1>Third page</h1>');
    },
    render: function() {
        this.$el.html(this.heading);
        return this;
    }
});

var AppRouter = Backbone.Router.extend({
    routes: {
        "": "FirstPage",
        "first": "FirstPage",
        "second": "SecondPage",
        "third": "ThirdPage"
    },
    FirstPage: function() {
        var view1 = new View1();
        $('#display').html(view1.render().$el);
    },
    SecondPage: function() {
        var view2 = new View2();
        $('#display').html(view2.render().$el);
    },
    ThirdPage: function() {
        var view3 = new View3();
        $('#display').html(view3.render().$el);
    }
});
var approuter = new AppRouter();
Backbone.history.start();
