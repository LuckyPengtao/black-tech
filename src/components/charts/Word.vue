<template>
  <div id="id"></div>
</template>

<script>
export default {
  name: "Word",
  mounted() {
    this.init()
  },
  methods: {
    init(){
      let tags = [
        new Tag("JS-Cumulus", 100),
        new Tag("WP-Cumulus", 80, "http://www.roytanck.com/2008/05/19/how-to-repurpose-my-tag-cloud-flash-movie/", true),
        new Tag("Jeroen van Warmerdam", 60, "http://www.jeroenvanwarmerdam.nl"),
        new Tag("Stratus", "http://student.agh.edu.pl/~fatyga/repos/stratus/example.php"),
        new Tag("JavaScript", {
          color: "red"
        }),
        new Tag("Object Oriented"),
        new Tag("XB (Cross Browser)"),
        new Tag("Firefox", 5),
        new Tag("Chrome", 4),
        new Tag("Safari", 3),
        new Tag("Opera", 2),
        new Tag("IE", 1),
        new Tag("<del>No flash</del>"),
        new Tag("<del>No JavaScript library</del>"),
        new Tag("Tag"),
        new Tag("Tag Cloud"),
        new Tag("<img src='icon-tagcloud.gif' />")
      ];
      let id = document.getElementById("id");
      console.log(id.offsetWidth);
      let tagCloud1 = new TagCloud(tags, id.offsetWidth, 250);
      tagCloud1.Distribute(id).Animate;
    }
  }

}
</script>

<style scoped>
#tagCloud1 {
  padding: 25px;
}

#widget {
  border: 1px solid silver;
  margin: 5px;
  padding: 5px;
  text-align: center;
  width: 100%;
}

#widget h4 {
  border-bottom: 1px solid silver;
  color: #999999;
  font-size: 15px;
  margin: 0 0 5px;
  padding-bottom: 5px;
}

#jsCumulus1 {
  color: #86C25E;
}

#jsCumulus2 {
  color: #50B5D5;
}

.tagCloud {
  background: transparent url("bg_blue.gif") 0 0 repeat;
}

.tagCloud ul, .tagCloud li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.tagCloud .tagClass img {
  border: 0 none;
}

.tagCloud .tagClass a {
  color: #fff;
  font-family: Sans;
  font-weight: normal;
  padding: 3px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
}

.tagCloud .tagClass a:hover {
  border: solid 1px #ffdb00;
  color: #ffdb00;
  text-decoration: none;
}
</style>
