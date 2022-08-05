package com.codvision.serverboot.dao;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author ：沈金勇 438217638@qq.com
 * @description： 用户实体类Dao
 * @date ：2022/8/5 14:40
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("server_user")
public class User {

    private String id;

    private String name;

    private String sex;

    private String phone;

}
