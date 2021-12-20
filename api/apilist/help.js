export default axios => ({
	// 获取帮助信息
	addressList (params) {
		return axios({
			url: `/ccHelpDocument?qp-helpTypeCode-eq=${params.helpTypeCode}`
		})
	},
	// 获取对应的实例和实例属性，属性值(全部)
	getRegionDetail (params) {
		return axios({
			url: '/ccHelpType/getChildByCode/',
			params
		})
	},

	// 获取单个地域对应的内存和cpu信息
	getAddressCpuAndDisk (params) {
		return axios({
			url: `/index/query/property/value/${params.regionId}`
		})
	},
})
