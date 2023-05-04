import smCrypto from 'sm-crypto'
const sm2 = smCrypto.sm2
const cipherMode = 1 // 1 - C1C3C2，0 - C1C2C3，默认为1
const publicKey =
	'04298364ec840088475eae92a591e01284d1abefcda348b47eb324bb521bb03b0b2a5bc393f6b71dabb8f15c99a0050818b56b23f31743b93df9cf8948f15ddb54'
const privateKey = '3037723d47292171677ec8bd7dc9af696c7472bc5f251b2cec07e65fdef22e25'
/**
 * 国密加解密工具类
 */
export default {
    // SM2加密
    doSm2Encrypt(msgString: string) {
      return sm2.doEncrypt(msgString, publicKey, cipherMode)
    },
    // SM2解密
      doSm2Decrypt(encryptData: string) {
          return sm2.doDecrypt(encryptData, privateKey, cipherMode)
      }
  }
