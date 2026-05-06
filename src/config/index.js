/**
 * 前端全局配置
 * 所有后端地址统一在此管理，避免散落硬编码
 */
const config = {
  // 后端 API 基础地址（HTTP 接口）
  BASE_URL: 'http://127.0.0.1:8070',

  // WebSocket 地址（弹幕实时通信）
  WS_URL: 'ws://127.0.0.1:8070',
}

export default config
