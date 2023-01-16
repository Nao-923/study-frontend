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
              ><span class="strong"
                >Connected to ws://nodered-sandbox.cps.private:1880</span
              ></el-menu-item
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
                  ANT-A <span class="mentor-name">RFIDアンテナ</span>
                  <span class="afterfix"> Linked: OK</span>
                  <div class="team-progress-desc">受信強度</div>
                  <el-progress
                    :percentage="antA.pt"
                    style="line-height: 7px"
                  ></el-progress>

                  <div
                    v-if="showOption == `normal` || showOption == `max`"
                    class="members"
                  >
                    <div class="member rounded-lg bg-gray-100 p-2 mb-4">
                      <div class="name mb-1">
                        受信ステータス <el-tag size="mini">ONLINE</el-tag><br />
                      </div>
                      <div class="userStatus flex h-8">
                        <div
                          class="flex-1 bg-green-300 mr-2 rounded grid place-items-center"
                        >
                          RSSI: {{ antA.rssi }}
                        </div>
                        <div
                          class="flex-1 bg-green-300 mr-2 rounded grid place-items-center"
                        >
                          READY
                        </div>
                        <div
                          class="flex-1 bg-red-300 rounded grid place-items-center"
                        >
                          UP
                        </div>
                      </div>
                      <div class="description" v-if="showOption == `max`">
                        <el-tooltip
                          class="item"
                          effect="dark"
                          placement="bottom"
                        >
                          <div slot="content">
                            {{ antA.detectedTag }}
                          </div>
                          <div class="truncate bg-gray-300 rounded mt-2 p-2">
                            {{ antA.detectedTag }}
                          </div>
                        </el-tooltip>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="status">GOOD</div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6"
              ><div class="infoCard">
                <div class="team">
                  ANT-B <span class="mentor-name">RFIDアンテナ</span>
                  <span class="afterfix"> Linked: OK</span>
                  <div class="team-progress-desc">受信強度</div>
                  <el-progress
                    :percentage="antB.pt"
                    style="line-height: 7px"
                  ></el-progress>

                  <div
                    v-if="showOption == `normal` || showOption == `max`"
                    class="members"
                  >
                    <div class="member rounded-lg bg-gray-100 p-2 mb-4">
                      <div class="name mb-1">
                        受信ステータス <el-tag size="mini">ONLINE</el-tag><br />
                      </div>
                      <div class="userStatus flex h-8">
                        <div
                          class="flex-1 bg-green-300 mr-2 rounded grid place-items-center"
                        >
                          RSSI: {{ antB.rssi }}
                        </div>
                        <div
                          class="flex-1 bg-green-300 mr-2 rounded grid place-items-center"
                        >
                          READY
                        </div>
                        <div
                          class="flex-1 bg-red-300 rounded grid place-items-center"
                        >
                          UP
                        </div>
                      </div>
                      <div class="description" v-if="showOption == `max`">
                        <el-tooltip
                          class="item"
                          effect="dark"
                          placement="bottom"
                        >
                          <div slot="content">
                            {{ antB.detectedTag }}
                          </div>
                          <div class="truncate bg-gray-300 rounded mt-2 p-2">
                            {{ antB.detectedTag }}
                          </div>
                        </el-tooltip>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="status">GOOD</div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6"
              ><div class="infoCard">
                <div class="team">
                  ANT-C <span class="mentor-name">RFIDアンテナ</span>
                  <span class="afterfix"> Linked: OK</span>
                  <div class="team-progress-desc">受信強度</div>
                  <el-progress
                    :percentage="antC.pt"
                    style="line-height: 7px"
                  ></el-progress>

                  <div
                    v-if="showOption == `normal` || showOption == `max`"
                    class="members"
                  >
                    <div class="member rounded-lg bg-gray-100 p-2 mb-4">
                      <div class="name mb-1">
                        受信ステータス <el-tag size="mini">ONLINE</el-tag><br />
                      </div>
                      <div class="userStatus flex h-8">
                        <div
                          class="flex-1 bg-green-300 mr-2 rounded grid place-items-center"
                        >
                          RSSI: {{ antC.rssi }}
                        </div>
                        <div
                          class="flex-1 bg-green-300 mr-2 rounded grid place-items-center"
                        >
                          READY
                        </div>
                        <div
                          class="flex-1 bg-red-300 rounded grid place-items-center"
                        >
                          UP
                        </div>
                      </div>
                      <div class="description" v-if="showOption == `max`">
                        <el-tooltip
                          class="item"
                          effect="dark"
                          placement="bottom"
                        >
                          <div slot="content">
                            {{ antC.detectedTag }}
                          </div>
                          <div class="truncate bg-gray-300 rounded mt-2 p-2">
                            {{ antC.detectedTag }}
                          </div>
                        </el-tooltip>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="status">GOOD</div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6"
              ><div class="infoCard">
                <div class="team">
                  ANT-D <span class="mentor-name">RFIDアンテナ</span>
                  <span class="afterfix"> Linked: OK</span>
                  <div class="team-progress-desc">受信強度</div>
                  <el-progress
                    :percentage="antD.pt"
                    style="line-height: 7px"
                  ></el-progress>

                  <div
                    v-if="showOption == `normal` || showOption == `max`"
                    class="members"
                  >
                    <div class="member rounded-lg bg-gray-100 p-2 mb-4">
                      <div class="name mb-1">
                        受信ステータス <el-tag size="mini">ONLINE</el-tag><br />
                      </div>
                      <div class="userStatus flex h-8">
                        <div
                          class="flex-1 bg-green-300 mr-2 rounded grid place-items-center"
                        >
                          RSSI: {{ antD.rssi }}
                        </div>
                        <div
                          class="flex-1 bg-green-300 mr-2 rounded grid place-items-center"
                        >
                          READY
                        </div>
                        <div
                          class="flex-1 bg-red-300 rounded grid place-items-center"
                        >
                          UP
                        </div>
                      </div>
                      <div class="description" v-if="showOption == `max`">
                        <el-tooltip
                          class="item"
                          effect="dark"
                          placement="bottom"
                        >
                          <div slot="content">
                            {{ antD.detectedTag }}
                          </div>
                          <div class="truncate bg-gray-300 rounded mt-2 p-2">
                            {{ antD.detectedTag }}
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
          <div class="dashbord-header">
            <h2
              class="title float-left"
              style="text-align: left; font-size: 1.3rem; font-weight: bold"
            >
              エリアマップ
            </h2>
            <div
              class="studentList w-fit clear-both bg-green-500 py-2 mb-10 rounded-md"
            >
              <div class="container border">
                <vue-p5 @setup="setup" @draw="draw"> </vue-p5>
              </div>
            </div>
          </div>

          <div class="clear-both dashboard-header">
            <h2
              class="title float-left"
              style="text-align: left; font-size: 1.3rem; font-weight: bold"
            >
              追跡中タグ
            </h2>
            <div
              class="studentList clear-both bg-green-500 pt-2 mb-10 rounded-md"
            >
              <vue-good-table
                :columns="columnstag"
                :rows="rowstag"
                styleClass="vgt-table vgt-left-center bordered condensed "
              />
            </div>
          </div>
          <div class="clear-both dashboard-header">
            <h2
              class="title float-left"
              style="text-align: left; font-size: 1.3rem; font-weight: bold"
            >
              受信ペイロード
            </h2>
            <div
              class="studentList clear-both bg-green-500 pt-2 mb-10 rounded-md"
            >
              <vue-good-table
                :columns="columns"
                :rows="rows"
                :sort-options="{
                  enabled: true,
                  initialSortBy: { field: 'count', type: 'desc' },
                }"
                :pagination-options="{
                  enabled: true,
                  mode: 'records',
                  perPage: 10,
                  position: 'top',
                  perPageDropdown: [3, 7, 9],
                  dropdownAllowAll: false,
                  setCurrentPage: 2,
                  jumpFirstOrLast: true,
                  firstLabel: 'First Page',
                  lastLabel: 'Last Page',
                  nextLabel: 'next',
                  prevLabel: 'prev',
                  rowsPerPageLabel: 'Rows per page',
                  ofLabel: 'of',
                  pageLabel: 'page', // for 'pages' mode
                  allLabel: 'All',
                  infoFn: (params) => `my own page ${params.firstRecordOnPage}`,
                }"
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
import VueP5 from "vue-p5";
import chroma from "chroma-js";

const f = chroma.scale(["yellow", "navy"]).mode("lch");
export default {
  name: "top",
  components: {
    VueP5,
  },
  data() {
    return {
      ws: null,
      count: 0,

      tagPosX: 100,
      tagPosY: 100,

      antA: {
        rssi: 0,
        status: "READY",
        detectedTag: "NOT DETECTED",
        pt: 0,
      },
      antB: {
        rssi: 0,
        status: "READY",
        detectedTag: "NOT DETECTED",
        pt: 0,
      },
      antC: {
        rssi: 0,
        status: "READY",
        detectedTag: "NOT DETECTED",
        pt: 0,
      },
      antD: {
        rssi: 0,
        status: "READY",
        detectedTag: "NOT DETECTED",
        pt: 0,
      },
      tableData: [
        {
          address: "No",
        },
      ],
      columns: [
        {
          label: "ID",
          field: "count",
        },
        {
          label: "tagID",
          field: "tagID",
        },
        {
          label: "ANT",
          field: "antID",
        },
        {
          label: "RSSI",
          field: "rssi",
        },
      ],
      columnstag: [
        {
          label: "tagID",
          field: "tagID",
        },
        {
          label: "Time Left",
          field: "timeLeft",
        },
        {
          label: "RSSI",
          field: "rssi",
        },
      ],
      rows: [],
      search: "",
      rowstag: [],

      discrp: false,
      showMembers: false,
      showOption: "min",
      moveX: 0,
      moveY: 0,
      rssi: 0,
      heatMap: new Array(19),
    };
  },
  render(h) {
    return h(VueP5, { on: this });
  },
  methods: {
    tick() {
      setTimeout(() => {
        if (this.antA.pt > 0) this.antA.pt -= 1;
        if (this.antB.pt > 0) this.antB.pt -= 1;
        if (this.antC.pt > 0) this.antC.pt -= 1;
        if (this.antD.pt > 0) this.antD.pt -= 1;
        this.tick();

        this.rowstag.forEach((element) => {
          element.timeLeft -= 100;
        });

        this.rowstag = this.rowstag.filter((element) => element.timeLeft > 0);
      }, 100);
    },
    setup(sketch) {
      sketch.createCanvas(1495, 500);
      sketch.ellipseMode(sketch.CENTER);

      for (let x = 0; x < 19; x++) {
        this.heatMap[x] = new Array(9); //配列(array)の各要素に対して、要素数5の配列を作成
        for (let y = 0; y < 9; y++) {
          this.heatMap[x][y] = 0; //0で初期化
        }
      }
    },
    draw(sketch) {
      let size = 90;
      sketch.background("white");
      for (var x = 0; x * size < 1600; x++) {
        for (var y = 0; y * size < 600; y++) {
          // sketch.fill();
          sketch.fill(f(Number(this.heatMap[x][y])).toString());
          sketch.rect(x * size, y * size, x * size + size, y * size + size);
          sketch.fill(0);
          sketch.stroke(0);
          sketch.strokeWeight(1);
          sketch.line(x * size, 0, x * size, 500);
          sketch.line(0, y * size, 1495, y * size);
          sketch.strokeWeight(0);
          sketch.text("(" + x + "," + y + ")", x * size + 5, y * size - 5);

          this.heatMap[x][y] -= 0.0005;

          if (this.heatMap[x][y] < 0) this.heatMap[x][y] = 0;
          if (this.heatMap[x][y] > 1) this.heatMap[x][y] = 1;
        }
      }

      let all = this.antA.pt + this.antB.pt + this.antC.pt + this.antD.pt + 1;

      let v1 = sketch.createVector(-600, -200);
      let v2 = sketch.createVector(-600, 200);
      let v3 = sketch.createVector(600, -200);
      let v4 = sketch.createVector(600, 200);

      let pos = sketch.createVector(0, 0);
      pos.add(750, 200);
      pos.add(v1.mult(this.antA.pt * 0.01 * (this.antA.pt / all)));
      pos.add(v2.mult(this.antB.pt * 0.01 * (this.antB.pt / all)));
      pos.add(v3.mult(this.antC.pt * 0.01 * (this.antC.pt / all)));
      pos.add(v4.mult(this.antD.pt * 0.01 * (this.antD.pt / all)));

      // pos.mult(0.5);
      // pos.add(v3.mult(this.antC.pt * 0.005));
      // pos.add(v4.mult(this.antD.pt * 0.005));

      this.moveX -= (this.moveX - pos.x) / 10;
      this.moveY -= (this.moveY - pos.y) / 10;
      sketch.strokeWeight(1);
      sketch.fill(1);
      sketch.stroke(255);
      sketch.strokeWeight(1);
      sketch.ellipse(this.moveX, this.moveY, 30, 30);
      sketch.strokeWeight(2);
      sketch.text(this.rssi, this.moveX + 20, this.moveY + 10);
      sketch.text(this.antA.detectedTag, this.moveX + 20, this.moveY - 5);
      sketch.text("fps:" + Math.floor(sketch.frameRate()), 10, 490);

      let a = Math.floor(this.moveX / 90);
      let b = Math.floor(this.moveY / 90);

      this.heatMap[a][b] += 0.02;
    },

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    mapRange(value, a, b, c, d) {
      // first map value from (a..b) to (0..1)
      value = (value - a) / (b - a);
      // then map it from (0..1) to (c..d) and return it
      return c + value * (d - c);
    },
    updateANTstatus(data) {
      switch (data.antID) {
        case "00":
          this.antA.rssi = data.rssi;
          this.antA.detectedTag = data.tagID;
          this.antA.pt = Math.round(
            this.mapRange(data.rssi * -1, 30, 80, 100, 0)
          );
          break;
        case "01":
          this.antB.rssi = data.rssi;
          this.antB.detectedTag = data.tagID;
          this.antB.pt = Math.round(
            this.mapRange(data.rssi * -1, 30, 80, 100, 0)
          );
          break;
        case "02":
          this.antC.rssi = data.rssi;
          this.antC.detectedTag = data.tagID;
          this.antC.pt = Math.round(
            this.mapRange(data.rssi * -1, 30, 80, 100, 0)
          );
          break;
        case "03":
          this.antD.rssi = data.rssi;
          this.antD.detectedTag = data.tagID;
          this.antD.pt = Math.round(
            this.mapRange(data.rssi * -1, 30, 80, 100, 0)
          );
          break;
      }
    },
    hanlderWebSocketMessage: function (event) {
      this.response = event.data;

      event.data.text().then((res) => {
        let rssiraw = parseInt(res.split("-").slice(5, 7).join(""), 16);

        let data = {
          rawData: res,
          rssi: (rssiraw & 0x8000 ? (rssiraw |= ~0xffff) : rssiraw) / 10,
          tagID: res.split("-").slice(9, 23).join("-"),
          antID: res.split("-").slice(1, 2).join(""),
          count: ("000000" + this.count).slice(-6),
        };

        // this.rows.push(data);
        this.updateANTstatus(data);
        this.count++;

        let tagData = {
          tagID: res.split("-").slice(9, 23).join("-"),
          rssi: (rssiraw & 0x8000 ? (rssiraw |= ~0xffff) : rssiraw) / 10,
          timeLeft: 10000,
        };
        let ans = this.rowstag.findIndex(
          (element) => element.tagID === res.split("-").slice(9, 23).join("-")
        );
        if (ans !== -1) {
          this.rowstag[ans].rssi =
            (rssiraw & 0x8000 ? (rssiraw |= ~0xffff) : rssiraw) / 10;
          this.rowstag[ans].timeLeft = 10000;
        } else {
          this.rowstag.push(tagData);
        }
      });
    },
  },
  mounted() {
    this.tick();
    this.ws = new WebSocket(
      "ws://nodered-sandbox.cps.private:1880/ws/rfid-payloads"
    );
    this.ws.onmessage = this.hanlderWebSocketMessage;
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
