module.exports = () => {
  /**
   * 返回体统一处理
   * @param {any} res res对象 
   * @param {number} code 返回码。不传值和传200时返回正确，其余为返回错误
   * @param {any} data 返回体内容
   */
  const dealRes = async (ctx, next) => {
    await next()

    const code = ctx.status || 200
    const data = ctx.body

    if(code !== 200) {
      ctx.body = {
        status: 'error',
        code,
        data: data,
      }
    }else{
      // return res.send({
      //   status: 'success',
      //   code,
      //   data: data,
      // })
      ctx.body = {
        status: 'success',
        code,
        data: data,
      }
    }
    ctx.status = code
  }
  return dealRes
}