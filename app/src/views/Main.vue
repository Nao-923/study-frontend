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
    <div class="container-off">
      <div class="dashboard">
        <h2
          class="title"
          style="text-align: left; font-size: 1.3rem; font-weight: bold"
        >
          ダッシュボード
        </h2>
        <el-row :gutter="20">
          <el-col :span="6"
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

                <div class="member">
                  サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag><br />
                </div>
                <div class="member">
                  サンプルユーザー2
                  <el-tag size="mini" style="margin-right: 5px">Unity 8</el-tag>

                  <el-tag type="warning" size="mini">復習回</el-tag>
                </div>
                <div class="member">
                  サンプルユーザー3 <el-tag size="mini">Unity 9</el-tag>
                </div>
              </div>
              <div class="status">GOOD</div>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="infoCard">
              <div class="team">
                AB <span class="mentor-name">るみたん</span>
                <span class="afterfix"> チーム</span>
                <div class="team-progress-desc">チーム進捗</div>
                <el-progress
                  :percentage="55"
                  :format="format"
                  style="line-height: 7px; margin-bottom: 7px"
                ></el-progress>

                <div class="member">
                  サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag><br />
                </div>
                <div class="member">
                  サンプルユーザー2
                  <el-tag size="mini" style="margin-right: 5px">Unity 8</el-tag>

                  <el-tag type="warning" size="mini">復習回</el-tag>
                </div>
                <div class="member">
                  サンプルユーザー3 <el-tag size="mini">Unity 9</el-tag>
                </div>
              </div>
              <div class="status">GOOD</div>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="infoCard">
              <div class="team">
                AC <span class="mentor-name">るみたん</span>
                <span class="afterfix"> チーム</span>
                <div class="team-progress-desc">チーム進捗</div>
                <el-progress
                  :percentage="55"
                  :format="format"
                  style="line-height: 7px; margin-bottom: 7px"
                ></el-progress>

                <div class="member">
                  サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag><br />
                </div>
                <div class="member">
                  サンプルユーザー2
                  <el-tag size="mini" style="margin-right: 5px">Unity 8</el-tag>

                  <el-tag type="warning" size="mini">復習回</el-tag>
                </div>
                <div class="member">
                  サンプルユーザー3 <el-tag size="mini">Unity 9</el-tag>
                </div>
              </div>
              <div class="status">GOOD</div>
            </div>
          </el-col>
          <el-col :span="6"
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

                <div class="member">
                  サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag><br />
                </div>
                <div class="member">
                  サンプルユーザー2
                  <el-tag size="mini" style="margin-right: 5px">Unity 8</el-tag>

                  <el-tag type="warning" size="mini">復習回</el-tag>
                </div>
                <div class="member">
                  サンプルユーザー3 <el-tag size="mini">Unity 9</el-tag>
                </div>
              </div>
              <div class="status">GOOD</div>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="infoCard">
              <div class="team">
                AB <span class="mentor-name">るみたん</span>
                <span class="afterfix"> チーム</span>
                <div class="team-progress-desc">チーム進捗</div>
                <el-progress
                  :percentage="55"
                  :format="format"
                  style="line-height: 7px; margin-bottom: 7px"
                ></el-progress>

                <div class="member">
                  サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag><br />
                </div>
                <div class="member">
                  サンプルユーザー2
                  <el-tag size="mini" style="margin-right: 5px">Unity 8</el-tag>

                  <el-tag type="warning" size="mini">復習回</el-tag>
                </div>
                <div class="member">
                  サンプルユーザー3 <el-tag size="mini">Unity 9</el-tag>
                </div>
              </div>
              <div class="status">GOOD</div>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="infoCard">
              <div class="team">
                AC <span class="mentor-name">るみたん</span>
                <span class="afterfix"> チーム</span>
                <div class="team-progress-desc">チーム進捗</div>
                <el-progress
                  :percentage="55"
                  :format="format"
                  style="line-height: 7px; margin-bottom: 7px"
                ></el-progress>

                <div class="member">
                  サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag><br />
                </div>
                <div class="member">
                  サンプルユーザー2
                  <el-tag size="mini" style="margin-right: 5px">Unity 8</el-tag>

                  <el-tag type="warning" size="mini">復習回</el-tag>
                </div>
                <div class="member">
                  サンプルユーザー3 <el-tag size="mini">Unity 9</el-tag>
                </div>
              </div>
              <div class="status">GOOD</div>
            </div>
          </el-col>
          <el-col :span="6"
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

                <div class="member">
                  サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag><br />
                </div>
                <div class="member">
                  サンプルユーザー2
                  <el-tag size="mini" style="margin-right: 5px">Unity 8</el-tag>

                  <el-tag type="warning" size="mini">復習回</el-tag>
                </div>
                <div class="member">
                  サンプルユーザー3 <el-tag size="mini">Unity 9</el-tag>
                </div>
              </div>
              <div class="status">GOOD</div>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="infoCard">
              <div class="team">
                AB <span class="mentor-name">るみたん</span>
                <span class="afterfix"> チーム</span>
                <div class="team-progress-desc">チーム進捗</div>
                <el-progress
                  :percentage="55"
                  :format="format"
                  style="line-height: 7px; margin-bottom: 7px"
                ></el-progress>

                <div class="member">
                  サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag><br />
                </div>
                <div class="member">
                  サンプルユーザー2
                  <el-tag size="mini" style="margin-right: 5px">Unity 8</el-tag>

                  <el-tag type="warning" size="mini">復習回</el-tag>
                </div>
                <div class="member">
                  サンプルユーザー3 <el-tag size="mini">Unity 9</el-tag>
                </div>
              </div>
              <div class="status">GOOD</div>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="infoCard">
              <div class="team">
                AC <span class="mentor-name">るみたん</span>
                <span class="afterfix"> チーム</span>
                <div class="team-progress-desc">チーム進捗</div>
                <el-progress
                  :percentage="55"
                  :format="format"
                  style="line-height: 7px; margin-bottom: 7px"
                ></el-progress>

                <div class="member">
                  サンプルユーザー1 <el-tag size="mini">Unity 7</el-tag><br />
                </div>
                <div class="member">
                  サンプルユーザー2
                  <el-tag size="mini" style="margin-right: 5px">Unity 8</el-tag>

                  <el-tag type="warning" size="mini">復習回</el-tag>
                </div>
                <div class="member">
                  サンプルユーザー3 <el-tag size="mini">Unity 9</el-tag>
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
.container {
  max-width: 900px;
  margin: auto;

  @media screen and (max-width: 990px) {
    max-width: 700px;
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
}

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
        margin-bottom: 10px;
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
