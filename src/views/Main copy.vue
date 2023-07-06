<template>
  <div class="top">
    <el-menu default-active="1" class="el-menu-top" mode="horizontal">
      <div class="container">
        <el-row type="flex" class="" justify="space-between">
          <div class="right">
            Vitality
            <div class="net">.net</div>
          </div>
          <div class="left">
            <el-menu-item index="1"
              ><span class="strong">S11065</span></el-menu-item
            >
          </div>
        </el-row>
      </div>
    </el-menu>
    <div class="line"></div>
    <div class="container">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content bg-purple-light"></div></el-col
      ></el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "top",
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "John",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Morgan",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Jessy",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      search: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style lang="scss">
.container {
  max-width: 900px;
  margin: auto;

  @media screen and (max-width: 990px) {
    max-width: 700px;
    margin: auto;
  }

  @media screen and (max-width: 800px) {
    max-width: 600px;
    margin: auto;
  }

  @media screen and (max-width: 700px) {
    max-width: 500px;
    margin: auto;
  }
  @media screen and (max-width: 550px) {
    max-width: 100%;
    margin: auto;
    padding: 0 20px;
  }

  .right {
    height: 56px;
    line-height: 56px;
    font-weight: bold;
    font-size: 25px;
    position: relative;

    .net {
      font-size: 14px;
      line-height: 14px;
      position: absolute;
      right: -25px;
      bottom: 17px;
      height: 14px;
    }
  }

  .strong {
    font-weight: bolder;
  }
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
