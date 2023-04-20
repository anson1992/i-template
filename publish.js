/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-18 10:06:46
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-20 10:00:10
 * @FilePath: /i-template/serves.js
 * @Description: 上传服务：慎用！！！，建议在测试环境使用，提高开发联调效率，预发布/生产环境不建议使用
 */
const client = require('scp2')
const ora = require('ora')
const chalk = require('chalk')
const server = require('./serves')
const { name } = require('./package.json')
const spinner = ora({
  text: `正在发布至${process.env.VUE_APP_GLOBAL_ENV === 'development-fix' ? '测试' : '生产'}服务器...`
})
const SshClient = require('ssh2').Client
const ssh = new SshClient()
ssh
  .on('ready', () => {
    spinner.start()
    // 判断当前服务器上是否存在应用目录
    haveDir()
  })
  .connect({
    host: server.serverConfig().host,
    port: server.serverConfig().port,
    username: server.serverConfig().username,
    password: server.serverConfig().password
  })

/**
 * 判断服务器上是否存在当前应用部署目录
 */
const haveDir = () => {
  ssh.sftp((error, sftp) => {
    if (error) {
      spinner.stop()
      console.log(chalk.red(`读取服务器目录失败！\n Error: ${error}`))
      throw error
    }
    sftp.readdir(`${server.serverConfig().path}`, (error, list) => {
      if (error) {
        spinner.stop()
        console.log(chalk.red(`读取服务器目录失败！\n Error: ${error}`))
        throw error
      }
      // 当前应用目录是否为空
      if (list.length === 0) {
        // 创建目录
        mkdirDic()
      } else {
        // 删除当前目录后重新创建
        if (list.findIndex(dir => dir.filename === name) > -1) {
          // 存在当前应用目录，先删除
          delDic()
        } else {
          mkdirDic()
        }
      }
    })
  })
}
/**
 * 创建服务器应用目录
 */
const mkdirDic = () => {
  // 创建目录
  ssh.exec(`mkdir ${server.serverConfig().path}${name}`, (error, stream) => {
    if (error) {
      spinner.stop()
      console.log(chalk.red(`创建应用目录失败！\n Error: ${error}`))
      throw error
    }
    stream
      .on('close', () => {
        publishApp()
      })
      .on('data', data => {
        console.log('data:', data)
      })
      .stderr.on('data', data => {
        console.log('stderr:', data)
      })
    ssh.end()
  })
}

/**
 * 删除服务器应用目录
 */
const delDic = () => {
  ssh.exec(`rm -rf ${server.serverConfig().path}${name}/`, (error, stream) => {
    if (error) {
      spinner.stop()
      console.log(chalk.red(`原文件删除失败！\n Error: ${error}`))
      throw error
    }
    stream
      .on('close', () => {
        mkdirDic()
      })
      .on('data', data => {
        console.log('data:', data)
      })
      .stderr.on('data', data => {
        console.log('stderr:', data)
      })
  })
}
/**
 * 执行工程发布
 */
const publishApp = () => {
  // 执行上传
  client.scp('/Users/roman/Documents/projects/vue/i-template/dist', {
    host: server.serverConfig().host,
    port: server.serverConfig().port,
    username: server.serverConfig().username,
    password: server.serverConfig().password,
    path: `${server.serverConfig().path}${name}/`
  }, err => {
    spinner.stop()
    if (err) {
      console.log(chalk.red(`Error! \n工程发布失败！\n info: ${err}`))
    } else {
      console.log(chalk.green(`Success! \n工程已经成功发布至${process.env.VUE_APP_GLOBAL_ENV === 'development-fix' ? '测试' : '生产'}服务器路径：${server.serverConfig().path}${name}\n`))
    }
  })
}
