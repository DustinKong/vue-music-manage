/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = '';
let routerMode = 'hash';
let baseImgPath;

if (process.env.NODE_ENV === 'development') {
	// baseUrl = '';
	// baseUrl = 'http://127.0.0.1:5001';
	baseUrl = 'http://118.25.71.143:5001';
	// baseUrl = 'http://qituant.cn:8081';
    // baseImgPath = '/img/';
}else{
    //baseUrl = 'http://qituant.cn:8081';
    baseUrl = 'http://118.25.71.143:5001';
    // baseUrl = 'http://127.0.0.1:5001';
    // baseUrl = 'http://212.64.40.135:8081';
    baseImgPath = 'http://qituant.cn:8081';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}
