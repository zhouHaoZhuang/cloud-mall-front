<template>
  <div>
    <div class="Placeholder" />
    <div class="titleTop">
      <h1>产品价格</h1>
      <p>您可根据自身需求，选择最适合的产品配置</p>
    </div>
    <div class="bodybg">
      <div class="bodyall">
        <div class="dataPrice">
          <div>
            <img
              src="https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/server_icon.png"
              alt=""
            >
            <span>云数据库价格</span>
          </div>
          <div>查看产品详情&gt;&gt;</div>
        </div>
        <div class="dataInfo">
          <div class="contents">
            <p>目录：</p>
            <p>实例-基础班</p>
            <p>存储空间价格信息</p>
          </div>
          <div class="baseType">
            <p>
              <span>数据库类型：</span><span>MySQL</span><span>SQL Server</span>
            </p>
          </div>
          <div class="baseType baseType2">
            <p><span>地域：</span><span>中国深圳</span><span>中国内蒙</span></p>
          </div>
          <div class="Instance">
            <p>实例-基础版</p>
            <div>
              <table
                id="priceTable1"
                class="price-table"
                cellspacing="0"
                cellpadding="0"
              >
                <thead>
                  <tr>
                    <th width="20%">
                      CPU
                    </th>
                    <th width="20%">
                      内存
                    </th>
                    <th width="20%">
                      连接数
                    </th>
                    <th width="20%">
                      IOPS
                    </th>
                    <th>按月价格</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1核</td>
                    <td>2G</td>
                    <td>600</td>
                    <td>1000</td>
                    <td>¥58.00</td>
                  </tr>
                  <tr>
                    <td>2核</td>
                    <td>4G</td>
                    <td>1200</td>
                    <td>2000</td>
                    <td>¥116.00</td>
                  </tr>
                  <tr>
                    <td>4核</td>
                    <td>8G</td>
                    <td>2000</td>
                    <td>5000</td>
                    <td>¥270.00</td>
                  </tr>
                  <tr>
                    <td>4核</td>
                    <td>16G</td>
                    <td>4000</td>
                    <td>7000</td>
                    <td>¥430.00</td>
                  </tr>
                  <tr>
                    <td>8核</td>
                    <td>16G</td>
                    <td>4000</td>
                    <td>8000</td>
                    <td>¥540.00</td>
                  </tr>
                  <tr>
                    <td>8核</td>
                    <td>32G</td>
                    <td>8000</td>
                    <td>12000</td>
                    <td>¥860.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="Instance space">
            <p>存储空间价格信息</p>
            <div>
              <table
                id="priceTable2"
                class="price-table"
                cellspacing="0"
                cellpadding="0"
              >
                <thead>
                  <tr>
                    <th width="50%">
                      分类
                    </th>
                    <th>按月价格</th>
                    <!-- <th>按月价格（云存储）</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>基础版</td>
                    <td>¥1.27/G</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div class="auto price-warn">
              <div class="price-warn-title">
                注意事项：
              </div>
              <div class="price-warn-text">
                1. 询价金额如遇小数点，保留三位小数点，第四位四舍五入。 <br>
                2.
                账单列表金额遇小数点，保留两位小数点，第三位舍掉，实际扣费金额以此为准；账单详情金额遇小数点，保留三位小数点，第四位四舍五入。
                <br>
                3.
                余额不足提醒：以小时为单位整点结算后，若下一计费周期内账户可用余额小于上一周期账单金额，则发短信和邮件提醒。
                <br>
                4. 释放通知：因到期/欠费释放，系统会短信和邮件通知。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.Placeholder {
  height: 80px;
  width: 100%;
  background: #000;
}
.titleTop {
  background-image: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/server/img/price_banner.jpg);
  background-position: -200px 0;
  width: 100%;
  height: 500px;
  padding-top: 123px;
  color: rgb(255, 255, 255);
  > h1 {
    margin-bottom: 20px;
    height: 32px;
    line-height: 32px;
    font-size: 44px;
    font-weight: normal;
    color: rgb(255, 255, 255);
    width: 1220px;
    margin: 0 auto;
  }
  > p {
    font-size: 18px;
    width: 1220px;
    margin: 60px auto 0;
  }
}
.bodybg {
  background-color: #fff;
  width: 100%;
  .bodyall {
    width: 1220px;
    margin: 0 auto;
    .dataPrice {
      border: 1px solid #e5e5e5;
      display: flex;
      margin: 60px 0;
      > div:nth-child(1) {
        width: 270px;
        height: 60px;
        border-right: solid 1px #e5e5e5;
        display: flex;
        align-items: center;
        background-color: rgb(250, 250, 250);
        > img {
          width: 38px;
          margin: 20px;
        }
        > span {
          flex: 1;
          color: rgb(51, 51, 51);
          font-size: 24px;
        }
      }
      > div:nth-child(2) {
        flex: 1;
        line-height: 60px;
        text-align: right;
        padding-right: 20px;
      }
    }
  }
}
.dataInfo {
  //   width: 1220px;
  //   margin: 0 auto;
  .contents {
    padding: 36px 33px 18px;
    font-size: 16px;
    width: 1220px;
    margin: 0 auto;
    width: 100%;
    height: 147px;
    border-bottom: 1px solid rgb(236, 236, 236);
    color: rgb(51, 51, 51);
    > p {
      color: rgb(102, 102, 102);
    }
    > p:nth-child(1) {
      text-align: left;
      font-size: 16px;
      margin-bottom: 12px;
      color: #000;
    }
    > p:nth-child(2),
    > p:nth-child(3) {
      color: rgb(102, 102, 102);
      font-size: 14px;
    }
    > p:nth-child(2)::before,
    > p:nth-child(3)::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: rgb(5, 159, 255);
      margin-right: 10px;
      position: relative;
      top: -4px;
    }
  }
  .baseType {
    width: 100%;
    height: 120px;
    border-bottom: 1px solid rgb(236, 236, 236);
    padding: 30px 33px 30px 33px;
    > p {
      > span {
        display: inline-block;
      }
      > span:nth-child(1) {
        width: 96px;
        height: 36px;
        font-size: 16px;
        color: #000;
      }
      > span:nth-child(2),
      > span:nth-child(3) {
        text-align: center;
        width: 178px;
        height: 36px;
        font-size: 14px;
        line-height: 34px;
        color: rgb(102, 102, 102);
        border: solid 1px #e5e5e5;
        background-color: rgb(245, 246, 247);
      }
      > span:nth-child(2) {
        margin-right: -1px;
        background-color: rgb(0, 136, 255);
        color: #fff;
        border-color: rgb(0, 136, 255);
      }
    }
  }
  .baseType2 > p > span:nth-child(1) {
    width: 48px;
  }
  .Instance {
    padding: 36px 33px 33px;
    margin-bottom: 50px;
    > p {
      font-size: 18px;
      color: #000;
      height: 24px;
      line-height: 24px;
    }
    > p::before {
      content: '';
      display: inline-block;
      height: 24px;
      width: 4px;
      background-color: rgb(0, 136, 255);
      margin-right: 10px;
      position: relative;
      top: 5px;
    }
    > div {
      width: 1154px;
      margin: 0 auto;
    }
    > div > table {
      width: 100%;
      font-size: 12px;
      > thead {
        border: solid 1px #e5e5e5;
      }
      > tbody > tr:nth-child(2n) {
        background-color: rgb(245, 246, 247);
      }
      tr {
        line-height: 32px;
      }
      th {
        width: 20%;
        padding-left: 15px;
        border-left: 1px solid rgb(230, 230, 230);
        background-color: rgb(245, 246, 247);
        line-height: 32px;
        color: rgb(102, 102, 102);
        font-weight: bold;
      }
      td {
        padding-left: 15px;
        border: solid 1px #e5e5e5;
        border-collapse: collapse;
      }
    }
  }
  .space {
    border-top: 1px solid #e5e5e5;
    margin-bottom: 50px;
  }
  .auto {
    padding: 36px 33px 33px;
    margin-bottom: 36px;
    .price-warn-title {
      font-size: 14px;
      padding-left: 26px;
      background: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/server/img/price_icon_warn.png)
        no-repeat left center;
      color: rgb(0, 136, 255);
    }
    .price-warn-text {
      padding: 20px 0 0 26px;
      font-size: 12px;
      color: rgb(122, 122, 122);
      line-height: 1.8em;
    }
  }
}
</style>
