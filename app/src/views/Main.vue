<template>
  <div class="top">
    <el-menu default-active="1" class="el-menu-top" mode="horizontal">
      <div class="container m-auto px-5">
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
    <div class="container m-auto px-5">
      <div class="dashboard">
        <h2
          class="title"
          style="text-align: left; font-size: 1.3rem; font-weight: bold"
        >
          ダッシュボード
        </h2>
        <el-row :gutter="20">
          <el-col :span="24"
            ><div class="infoCard">
              <div class="team">
                AA <span class="mentor-name">るみたん</span>
                <span class="afterfix"> チーム</span>
                <div class="team-progress-desc">チーム進捗</div>
                <el-progress
                  :percentage="55"
                  :format="format"
                  style="line-height: 7px; margin-bottom: 7px"
                ></el-progress>

                <div class="member mb-4">
                  <div class="name my-1">
                    サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag><br />
                    <!-- <div class="userStatus h-8 bg-gray-300 flex flex-row">
                    <div class="basis-1/4 h-8">a</div>
                    <div class="basis-1/4 bg-gray-500 h-8">a</div>
                    <div class="info basis-1/4 h-8">a</div>
                  </div> -->
                  </div>
                  <div class="userStatus flex h-8">
                    <div
                      class="flex-1 bg-green-300 mx-1 rounded grid place-items-center"
                    >
                      Step: 5 / 19
                    </div>
                    <div
                      class="flex-1 bg-green-300 mx-1 rounded grid place-items-center"
                    >
                      OPM: 完了
                    </div>
                    <div
                      class="flex-1 bg-red-300 mx-1 rounded grid place-items-center"
                    >
                      赤信号
                    </div>
                  </div>
                </div>
                <div class="member mb-4">
                  <div class="name my-1">
                    サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag><br />
                    <!-- <div class="userStatus h-8 bg-gray-300 flex flex-row">
                    <div class="basis-1/4 h-8">a</div>
                    <div class="basis-1/4 bg-gray-500 h-8">a</div>
                    <div class="info basis-1/4 h-8">a</div>
                  </div> -->
                  </div>
                  <div class="userStatus flex h-8">
                    <div
                      class="flex-1 bg-green-300 mx-1 rounded grid place-items-center"
                    >
                      Step: 5 / 19
                    </div>
                    <div
                      class="flex-1 bg-yellow-300 mx-1 rounded grid place-items-center"
                    >
                      OPM: 未完了
                    </div>
                    <div
                      class="flex-1 bg-green-300 mx-1 rounded grid place-items-center"
                    >
                      OK
                    </div>
                  </div>
                </div>
                <div class="member">
                  <div class="name my-1">
                    サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag><br />
                    <!-- <div class="userStatus h-8 bg-gray-300 flex flex-row">
                    <div class="basis-1/4 h-8">a</div>
                    <div class="basis-1/4 bg-gray-500 h-8">a</div>
                    <div class="info basis-1/4 h-8">a</div>
                  </div> -->
                  </div>
                  <div class="userStatus flex h-8">
                    <div
                      class="flex-1 bg-green-300 mx-1 rounded grid place-items-center"
                    >
                      Step: 5 / 19
                    </div>
                    <div
                      class="flex-1 bg-green-300 mx-1 rounded grid place-items-center"
                    >
                      OPM: 完了
                    </div>
                    <div
                      class="flex-1 bg-green-300 mx-1 rounded grid place-items-center"
                    >
                      OK
                    </div>
                  </div>
                </div>
              </div>
              <div class="status">GOOD</div>
            </div>
          </el-col>
        </el-row>
      </div>
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
// .aaa {
//   max-width: 900px;
//   margin: auto;

//   @media screen and (max-width: 990px) {
//     max-width: 700px;
//     margin: auto;
//   }

//   @media screen and (max-width: 700px) {
//     max-width: 500px;
//     margin: auto;
//   }
//   @media screen and (max-width: 550px) {
//     max-width: 100%;
//     margin: auto;
//     padding: 0 20px;
//   }
// }

.container-off {
  margin: 0 auto;
  max-width: 1200px;
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

.dashboard {
  margin-top: 20px;

  .title {
    margin: 10px 0px;
  }

  .infoCard {
    height: fit-content;
    margin-bottom: 20px;
    background-color: #ffffff;
    border-radius: 7px;
    box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.19);

    text-align: left;
    .team {
      //   border: 1px solid rgb(205, 205, 205);
      background: rgb(231, 231, 231);
      border-radius: 7px 7px 0 0;
      border-bottom: none;
      min-height: 100px;
      font-size: 1.5rem;
      font-weight: bold;
      padding: 10px;
      .team-progress-desc {
        font-size: 10px;
      }
      .mentor-name {
        font-weight: normal;
        font-size: 1rem;
      }

      .afterfix {
        font-size: 10px;
        font-weight: normal;
      }
      .member {
        font-size: 12px;
      }
    }
    .status {
      min-height: 1.7rem;
      line-height: 1.7rem;
      text-align: center;
      //   border: 1px solid rgb(205, 205, 205);
      border-radius: 0 0 7px 7px;
      background: rgb(178, 208, 77);
      color: rgb(255, 255, 255);
      font-weight: bold;
    }
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
