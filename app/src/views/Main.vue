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
        <div class="dashboard-header">
          <h2
            class="title float-left"
            style="text-align: left; font-size: 1.3rem; font-weight: bold"
          >
            ダッシュボード
          </h2>
          <div class="float-right">
            <el-radio-group v-model="showOption" size="small">
              <el-radio-button label="min" />
              <el-radio-button label="normal" />
              <el-radio-button label="max" />
            </el-radio-group>
          </div>
        </div>
        <div class="userTables clear-both">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="6"
              ><div class="infoCard">
                <div class="team">
                  AA <span class="mentor-name">HOGEHOGE</span>
                  <span class="afterfix"> チーム</span>
                  <div class="team-progress-desc">チーム進捗</div>
                  <el-progress
                    :percentage="55"
                    :format="format"
                    style="line-height: 7px"
                  ></el-progress>

                  <div
                    v-if="showOption == `normal` || showOption == `max`"
                    class="members"
                  >
                    <div class="member rounded-lg bg-gray-100 p-2 mb-4">
                      <div class="name mb-1">
                        サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag
                        ><br />
                      </div>
                      <div class="userStatus flex h-8">
                        <div
                          class="flex-1 bg-green-300 mr-2 rounded grid place-items-center"
                        >
                          Step: 5 / 19
                        </div>
                        <div
                          class="flex-1 bg-green-300 mr-2 rounded grid place-items-center"
                        >
                          OPM: 完了
                        </div>
                        <div
                          class="flex-1 bg-red-300 rounded grid place-items-center"
                        >
                          赤信号
                        </div>
                      </div>
                      <div class="description" v-if="showOption == `max`">
                        <el-tooltip
                          class="item"
                          effect="dark"
                          placement="bottom"
                        >
                          <div slot="content">
                            溢れかえったテキストは<br />ここに表示されます
                          </div>
                          <div class="truncate bg-gray-300 rounded mt-2 p-2">
                            MessageMessageMessageMessageMessageMessageMessageMessageMessageMessageMessage
                          </div>
                        </el-tooltip>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="status">GOOD</div>
              </div>
            </el-col>
          </el-row>

          <div class="dashboard-header">
            <h2
              class="title float-left"
              style="text-align: left; font-size: 1.3rem; font-weight: bold"
            >
              生徒一覧
            </h2>
            <div
              class="studentList clear-both bg-green-500 pt-2 mb-10 rounded-md"
            >
              <vue-good-table
                :columns="columns"
                :rows="rows"
                styleClass="vgt-table vgt-left-center bordered condensed "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  components: {},
  data() {
    return {
      tableData: [
        {
          address: "No",
        },
      ],
      columns: [
        {
          label: "Name",
          field: "name",
          width: "80px",
        },
        {
          label: "Name",
          field: "name",
          width: "80px",
        },
        {
          label: "Name",
          field: "name",
          width: "80px",
        },
        {
          label: "Name",
          field: "name",
          width: "80px",
        },
        {
          label: "Name",
          field: "name",
          width: "80px",
        },
        {
          label: "Age",
          field: "age",
          type: "number",
          width: "70px",
        },
        {
          label: "Created On",
          field: "createdAt",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "MMM do yy",
        },
        {
          label: "Percent",
          field: "score",
          type: "percentage",
        },
      ],
      rows: [
        { id: 1, name: "John", age: 20, createdAt: "", score: 0.03343 },
        {
          id: 2,
          name: "Jane",
          age: 24,
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 3,
          name: "Susan",
          age: 16,
          createdAt: "2011-10-30",
          score: 0.03343,
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343,
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343,
        },
        {
          id: 6,
          name: "John",
          age: 20,
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 6,
          name: "John",
          age: 20,
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 6,
          name: "John",
          age: 20,
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 6,
          name: "John",
          age: 20,
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 6,
          name: "John",
          age: 20,
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 6,
          name: "John",
          age: 20,
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 6,
          name: "John",
          age: 20,
          createdAt: "2011-10-31",
          score: 0.03343,
        },
      ],
      search: "",

      discrp: false,
      showMembers: false,
      showOption: "min",
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
      background: rgb(255, 255, 255);
      border-radius: 7px 7px 0 0;
      border-bottom: none;
      min-height: 88px;
      font-size: 1.5rem;
      font-weight: bold;
      padding: 10px;
      padding-bottom: 0;
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
      background: rgb(55, 194, 0);
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
