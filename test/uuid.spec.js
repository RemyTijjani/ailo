/**
 *****************************************
 * Created by lifx
 * Created on 2018-02-02 14:56:25
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载模块
 *****************************************
 */
import uuid from 'ailo/uuid';


/**
 *****************************************
 * 测试模块
 *****************************************
 */
describe('测试【uuid】', () => {

    /* 生成唯一【id】 */
    test('生成唯一【id】', () => {
        let count = 100;

        // 校验id唯一
        while (count --) {
            expect(uuid()).not.toBe(uuid());
        }
    });
});