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
        new Tag("5G消息", 42, {
          color: 'orange'
        }),
        new Tag("修复", 12, "http://www.roytanck.com/2008/05/19/how-to-repurpose-my-tag-cloud-flash-movie/", true),
        new Tag("图像", 17, {color: '#096'}),
        new Tag("超分", 12),
        new Tag("语音识别", 3,{
          color: "red"
        }),
        new Tag("3D", 9, {color: 'yellow'}),
        new Tag("AI", 66, {color: 'green'}),
        new Tag("翻译", 8, {color: '#7e0023'}),
        new Tag("智能写诗", 13, {color: "pink"}),
        new Tag("OCR", 5),
        new Tag("视频", 60, {color: "#096"}),
        new Tag("换脸", 6),
        new Tag("量子技术", 12, {color: '#660099'}),
        new Tag("AR/VR", 8, {color: 'red'}),
//        new Tag("<del>No flash</del>"),
        new Tag("修复",12),
        new Tag("数据技术", 35, {
          color : "blue"
        }),
        new Tag("GPT-2/GPT-3模型", 5, {color: "#ff9933"}),
        new Tag("<img src='@/assets/logo.png'/>")
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
  padding: 5px;
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
  font-size: 36px;
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
  background: transparent url("../../assets/bg_blue.gif") 0 0 repeat;
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
  padding: 10px;
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
