//init av
(function() {
  AV.initialize("ngwh3at1oi9lfqux1so3ie0khzi4s31u4lpz3ry2lg0ekji9",
    "l49a5njmq0tg5uopoq2uu6gzluisue4qssdhg97yrenagl44");

  var TestObject = AV.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({
    foo: "bar"
  }, {
    success: function(object) {
      console.log("LeanCloud works!");
    }
  });
})();
