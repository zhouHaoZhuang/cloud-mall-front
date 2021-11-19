<template>
    <div class="app">
        <!-- 头信息 -->
        <div class="price-banner">
            <div class="auto">
                <div class="price-banner-text">产品价格</div>
                <div class="banner-sub-title">您可根据自身需求，选择最适合的产品配置</div>
            </div>
        </div>
        <!-- 服务器价格 -->
        <div id="oss" style="min-height:700px;">
            <div class="auto main-wrap" style="margin-bottom:20px">
                <div class="price-block price-select-outer clearfix">
                    <div class="pull-left price-select">
                        <a>对象储存</a>
                    </div>
                    <div class="pull-right">
                        <a href="" class="detail-link">查看产品详情>></a>
                    </div>
                </div>
                <div class="price-block">
                    <div class="price-block-title">目录：</div>
                    <p class="price-index-item">
                        <span class="color-blue">• </span>
                        计费方式
                    </p>
                    <p class="price-index-item">
                        <span class="color-blue">• </span>
                        价格详情
                    </p>
                </div>
                <div class="price-block">
                    <div class="price-block-title">计费方式：</div>
                    <div class="oss-price-way">
                        <div class="title">
                            <i class="oss-1-icon"></i>
                            标准储存
                        </div>
                        <p>对象存储服务的基础计费项包括：存储空间容量，流量，请求次数。</p>
                        <p>存储空间费用基于存储区域按照阶梯累积计费方式，超出阶梯部分按照下一阶梯价格计费，存储空间使用越大，价格越低。</p>
                        <div class="title">
                            <i class="oss-2-icon"></i>
                            低频存储
                        </div>
                        <p>低频存储对象 Object 最短存储期限为 60 天，早于 60 天删除的 Object，其存储费用按 60 天计算</p>
                    </div>
                </div>
                <div class="price-block">
                    <div class="price-block-title">计费方式：</div>
                    <table id="oss" class="price-table special" cellspacing="0" cellpadding="0">
                        <thead>
                            <tr>
                                <th style="width:33.33%">名目</th>
                                <th style="width:33.33%">标准存储</th>
                                <th>低频存储</th>
                            </tr>
                        </thead>
                        <tbody class="su">
                            <!-- 存储华东 -->
                            <tr>
                                <td>
                                    <div>
                                        <p>存储区域（华东）</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p>
                                            <span class="price-key">0GB以上</span>
                                            <span class="price-value">0.004 元/GB/天</span>
                                        </p>
                                        <p>
                                            <span class="price-key">GET/PUT/DELETE请求</span>
                                            <span class="price-value">0.01 元10000次</span>
                                        </p>
                                        <p>
                                            <span class="price-key">CDN回源流量</span>
                                            <span class="price-value">0.15 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">外网流出流量</span>
                                            <span class="price-value">0.29 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">数据读取</span>
                                            <span class="price-value">不计费</span>
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p>
                                            <span class="price-key">0GB以上</span>
                                            <span class="price-value">0.002 元/GB/天</span>
                                        </p>
                                        <p>
                                            <span class="price-key">GET/PUT/DELETE请求</span>
                                            <span class="price-value">0.10 元10000次</span>
                                        </p>
                                        <p>
                                            <span class="price-key">CDN回源流量</span>
                                            <span class="price-value">0.15 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">外网流出流量</span>
                                            <span class="price-value">0.29 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">数据读取</span>
                                            <span class="price-value">0.06 元/GB</span>
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <!-- 存储华南 -->
                            <tr>
                                <td>
                                    <div>
                                        <p>存储区域（华南）</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p>
                                            <span class="price-key">0GB以上</span>
                                            <span class="price-value">0.004 元/GB/天</span>
                                        </p>
                                        <p>
                                            <span class="price-key">GET/PUT/DELETE请求</span>
                                            <span class="price-value">0.01 元10000次</span>
                                        </p>
                                        <p>
                                            <span class="price-key">CDN回源流量</span>
                                            <span class="price-value">0.15 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">外网流出流量</span>
                                            <span class="price-value">0.29 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">数据读取</span>
                                            <span class="price-value">不计费</span>
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p>
                                            <span class="price-key">0GB以上</span>
                                            <span class="price-value">0.002 元/GB/天</span>
                                        </p>
                                        <p>
                                            <span class="price-key">GET/PUT/DELETE请求</span>
                                            <span class="price-value">0.10 元10000次</span>
                                        </p>
                                        <p>
                                            <span class="price-key">CDN回源流量</span>
                                            <span class="price-value">0.15 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">外网流出流量</span>
                                            <span class="price-value">0.29 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">数据读取</span>
                                            <span class="price-value">0.06 元/GB</span>
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <!-- 存储华北 -->
                            <tr>
                                <td>
                                    <div>
                                        <p>存储区域（华东）</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p>
                                            <span class="price-key">0GB以上</span>
                                            <span class="price-value">0.004 元/GB/天</span>
                                        </p>
                                        <p>
                                            <span class="price-key">GET/PUT/DELETE请求</span>
                                            <span class="price-value">0.01 元10000次</span>
                                        </p>
                                        <p>
                                            <span class="price-key">CDN回源流量</span>
                                            <span class="price-value">0.15 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">外网流出流量</span>
                                            <span class="price-value">0.29 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">数据读取</span>
                                            <span class="price-value">不计费</span>
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p>
                                            <span class="price-key">0GB以上</span>
                                            <span class="price-value">0.002 元/GB/天</span>
                                        </p>
                                        <p>
                                            <span class="price-key">GET/PUT/DELETE请求</span>
                                            <span class="price-value">0.10 元10000次</span>
                                        </p>
                                        <p>
                                            <span class="price-key">CDN回源流量</span>
                                            <span class="price-value">0.15 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">外网流出流量</span>
                                            <span class="price-value">0.29 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">数据读取</span>
                                            <span class="price-value">0.06 元/GB</span>
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <!-- 存储东南亚 -->
                            <tr>
                                <td>
                                    <div>
                                        <p>存储区域（华东）</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p>
                                            <span class="price-key">0GB以上</span>
                                            <span class="price-value">0.005 元/GB/天</span>
                                        </p>
                                        <p>
                                            <span class="price-key">GET/PUT/DELETE请求</span>
                                            <span class="price-value">0.01 元10000次</span>
                                        </p>
                                        <p>
                                            <span class="price-key">CDN回源流量</span>
                                            <span class="price-value">0.15 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">外网流出流量</span>
                                            <span class="price-value">0.29 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">数据读取</span>
                                            <span class="price-value">不计费</span>
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p>
                                            <span class="price-key">0GB以上</span>
                                            <span class="price-value">0.002 元/GB/天</span>
                                        </p>
                                        <p>
                                            <span class="price-key">GET/PUT/DELETE请求</span>
                                            <span class="price-value">0.10 元10000次</span>
                                        </p>
                                        <p>
                                            <span class="price-key">CDN回源流量</span>
                                            <span class="price-value">0.15 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">外网流出流量</span>
                                            <span class="price-value">0.29 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">数据读取</span>
                                            <span class="price-value">0.06 元/GB</span>
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <!-- 存储北美 -->
                            <tr>
                                <td>
                                    <div>
                                        <p>存储区域（华东）</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p>
                                            <span class="price-key">0GB以上</span>
                                            <span class="price-value">0.005 元/GB/天</span>
                                        </p>
                                        <p>
                                            <span class="price-key">GET/PUT/DELETE请求</span>
                                            <span class="price-value">0.01 元10000次</span>
                                        </p>
                                        <p>
                                            <span class="price-key">CDN回源流量</span>
                                            <span class="price-value">0.15 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">外网流出流量</span>
                                            <span class="price-value">0.29 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">数据读取</span>
                                            <span class="price-value">不计费</span>
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p>
                                            <span class="price-key">0GB以上</span>
                                            <span class="price-value">0.002 元/GB/天</span>
                                        </p>
                                        <p>
                                            <span class="price-key">GET/PUT/DELETE请求</span>
                                            <span class="price-value">0.10 元10000次</span>
                                        </p>
                                        <p>
                                            <span class="price-key">CDN回源流量</span>
                                            <span class="price-value">0.15 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">外网流出流量</span>
                                            <span class="price-value">0.29 元/GB</span>
                                        </p>
                                        <p>
                                            <span class="price-key">数据读取</span>
                                            <span class="price-value">0.06 元/GB</span>
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="auto price-warn">
                <div class="price-warn-title">注意事项：</div>
                <div class="price-warn-text">1. 账单结算金额最小为0.01元，若产生费用，订单总价不足0.01元按0.01元计算。 <br></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.price-banner {
    box-sizing: border-box;
    background: url(~/static/img/object/price_banner.jpg) no-repeat center;
    width: 100%;
    height: 500px;
    padding-top: 123px;
    color: #fff;
}
.auto {
    margin: 0 auto;
    min-width: 1220px;
    max-width: 1220px;
}
.price-banner-text {
    font-size: 30px;
    color: #fff;
}
.banner-sub-title {
    margin-top: 60px;
    font-size: 18px;
}
.main-wrap {
    margin-top: 22px;
}
.price-select-outer {
    padding: 0;
    height: 60px;
    line-height: 60px;
    margin-top: 60px;
    border: 1px solid #e6e6e6;
}
.price-select {
    border-right: 1px solid #eee;
    width: 270px;
    height: 100%;
    text-align: center;
    background-color: #fafafa;
}
.pull-left {
    float: left;
}
.price-select a {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    color: #333;
    font-size: 24px;
    background: url(~/static/img/object/price_icon_server.png) no-repeat 20px center;
}
.pull-right {
    float: right;
}
.detail-link {
    font-size: 14px;
    color: #666;
    margin-right: 20px;
}
.price-block {
    background: #fff;
    margin-bottom: 50px;
}
.price-block-title {
    position: relative;
    border-left: 3px solid #00aaff;
    height: 24px;
    margin-bottom: 22px;
    line-height: 24px;
    padding-left: 12px;
    color: #333;
    font-size: 16px;
}
.price-index-item {
    width: 125px;
    height: 32px;
    line-height: 32px;
    color: #666666;
    font-size: 14px;
    cursor: pointer;
}
.color-blue {
    color: #00aaff;
}
.oss-price-way .title {
    color: #333333;
    font-size: 14px;
    margin: 32px 0 20px;
}
.oss-price-way .oss-1-icon {
    display: inline-block;
    width: 26px;
    height: 27px;
    background: url(~/static/img/object/oss_1_icon.png) no-repeat center;
    vertical-align: middle;
    margin: -4px 10px 0 0;
}
.oss-price-way p {
    font-size: 12px;
    color: #666666;
}
.oss-price-way .oss-2-icon {
    display: inline-block;
    width: 28px;
    height: 26px;
    background: url(~/static/img/object/oss_2_icon.png) no-repeat center;
    vertical-align: middle;
    margin: -4px 10px 0 0;
}
.price-block {
    background: #fff;
    margin-bottom: 50px;
}
//
.price-table {
    margin-bottom: 10px;
    width: 100%;
    font-size: 12px;
    color: #333;
}
.price-table.special {
    border: none;
}
thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
.price-table tr:nth-child(odd) {
    background: #ffffff;
}
.price-table.special td, #oss .price-table.special th {
    border-color: #e4e4e4;
}
.price-table.special th:first-child {
    border-left: 1px solid #d3d3d3;
    padding-left: 0;
    text-align: center;
    color: #666;
}
.price-table.special th {
    border: 1px solid #d3d3d3;
}
.price-table th {
    background-color: #f7f7f7;
    line-height: 32px;
    color: #333333;
    font-weight: bold;
    font-size: 12px;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.su tr td {
    border: 1px solid #e4e4e4;
}
span.price-key {
    display: inline-block;
    width: 170px;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.price-table th{
    text-align: center;
}
.price-table td{
    padding-left: 20px;
}
//
.price-warn {
    margin-top: 20px;
    margin-bottom: 50px;
}
.price-warn-title {
    padding-left: 26px;
    background: url(~/static/img/object/price_icon_warn.png) no-repeat left center;
    font-size: 14px;
    color: #0088ff;
}
.price-warn-text {
    padding: 20px 0 0 26px;
    font-size: 12px;
    color: #666;
    line-height: 1.8em;
}
</style>