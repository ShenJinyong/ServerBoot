package com.javaboy.common.enums;

/**
 * @author ：沈金勇 438217638@qq.com
 * @description：应用码枚举类
 * @date ：2022/10/14 11:51
 */
public enum AppCode implements SystemStatus{

    APP_SUCCESS(200, "业务正常"),
    INVALID_PARAM(4000,"参数校验异常"),
    MISTYPE_PARAM(4001,"参数格式异常"),
    MISSING_PARAM(4002,"缺少参数异常"),
    UN_SUPPORTED_METHOD_TYPE(4003,"不支持请求类型"),
    UN_SUPPORTED_METHOD(4004,"不支持请求"),
    SYS_UNKNOWN(4005,"系统异常"),
    UN_LOGIN(4006,"未登录"),
    UN_AUTHORIZED(4007,"未授权"),
    USERNAME_OR_PASSWORD_ERROR(4008,"用户名或者密码错误"),
    USERNAME_IS_EXISTS(4009,"用户名已存在"),
    INSERT_USER_EXCEPTION(4010,"创建用户异常"),
    NOT_FOUND_USER_BY_ID(4011,"根据id找不到用户"),
    NEW_PASSWORD_SAME_AS_OLD_PASSWORD(4012,"新密码与旧密码相同"),
    CHANGE_PASSWORD_EXCEPTION(4013,"修改密码失败"),
    LOCKED_ACCOUNT_EXCEPTION(4014,"账号被锁定或者被删除"),
    EXCESSIVE_ATTEMPTS_EXCEPTION(4015,"密码重试次数异常"),
    INVALID_SESSION_EXCEPTION(4016,"用户会话已过期"),
    CHANGE_USER_EXCEPTION(4017,"修改用户失败"),
    DELETE_USER_EXCEPTION(4018,"删除用户失败"),
    CHANGE_ROLE_EXCEPTION(4019,"修改角色失败"),
    DELETE_ROLE_EXCEPTION(4020,"删除角色失败"),
    CHANGE_PERMISSION_EXCEPTION(4021,"修改权限失败"),
    DELETE_PERMISSION_EXCEPTION(4022,"删除权限失败");

    private int code;
    private String message;

    AppCode(int code, String msg) {
        this.code = code;
        this.message = msg;
    }

    @Override
    public int getSystemStatusCode() {
        return code;
    }

    @Override
    public String getSystemStatusMessage() {
        return message;
    }

}
