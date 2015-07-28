// Write your package code here!

Example.Set = {};

Example.Set.model = new Mongo.Collection('example-set', {
  transform: function (doc) { return new ExampleSet(doc); }
});

//Example.Set.model.timestampable();
//Example.Set.model.autoIncrementable('tracking_id');
//Example.Set.model.softRemovable();
//Example.Set.model.sortable();

ExampleSet = function (doc) {
  _.extend(this, doc);
};

_.extend(ExampleSet.prototype, {
  availableThings: function() {
    return _.filter(this.things, function(r){
      return r.available && r.enabled;
    });
  }
});
